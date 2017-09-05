<template>
    <div id="videoFile">
        <!-- 进度条 -->
        <ul id="theList">
            <div>{{progress}}</div>
            <li :id='file.id'>
                <span class="fileName" id='fileName'></span>
                <div v-if="btnFlag">
                    <el-button 
                        class="itemUpload" 
                        v-if="isUpLoad" 
                        type="primary">
                        上传
                    </el-button>
                    <el-button 
                        class="itemStop" 
                        v-else 
                        type="primary">
                        暂停
                    </el-button>
                    <el-button 
                        class="itemDel" 
                        type="primary">
                        删除
                    </el-button>
                </div>
            </li>
        </ul>
        <div id="delPick" @click='delVideo' class="webuploader-pick">删除视频</div>
        <div id="picker">选择视频</div>
    </div>
</template>
<script type="text/javascript"></script>
<script>
export default {
    name: 'videoFile',
    props:
    {
        row: {}
    },
    data () {
        var re
        if (this.row.video !== '' && this.row.video !== null) {
            re = true
        } else {
            re = false
        }
        return {
            value: '',
            tip: '视频上传',
            flag: false,
            val: '',
            file: {},
            isUpLoad: true,
            isDisabled: true,
            vidUrl: re,
            btnFlag: false
        }
    },
    methods: {
        fileUpload () {
            var _this = this
            var userInfo = {userId: 'kazaff', md5: ''}
            var chunkSize = 5000 * 1024
            var uniqueFileName = null
            var md5Mark = null
            var backEndUrl = '/api/planta/upVideo'
            WebUploader.Uploader.register({
                'before-send-file': 'beforeSendFile',
                'before-send': 'beforeSend',
                'after-send-file': 'afterSendFile'
            }, {
                beforeSendFile: function (file) {
                    var task = new $.Deferred()
                    var start = new Date().getTime()
                    var ap = new WebUploader.Uploader()
                    ap.md5File(file, 0, 10 * 1024 * 1024).progress(function (percentage) {
                        console.log(percentage)
                    }).then(function (val) {
                    // (new WebUploader.Uploader()).md5File(file, 0, 10 * 1024 * 1024).progress(function (percentage) {
                    // }).then(function (val) {
                        md5Mark = val
                        userInfo.md5 = val
                        $.ajax({
                            type: 'POST',
                            url: backEndUrl,
                            data: {
                                status: 'md5Check',
                                md5: val,
                                _token: JSON.parse(Laravel.csrfToken),
                                pid: JSON.parse(_this.row.id)
                            },
                            cache: false,
                            // todo 超时的话，只能认为该文件不曾上传过
                            timeout: 1000,
                            dataType: 'json'
                            // contentType: 'application/json'
                        }).then(function (data, textStatus, jqXHR) {
                            // 若存在，这返回失败给WebUploader，表明该文件不需要上传
                            if (data.ifExist) {
                                task.reject()
                                uploader.skipFile(file)
                                file.path = data.path
                                UploadComlate(file)
                            } else {
                                task.resolve()
                                // 拿到上传文件的唯一名称，用于断点续传
                                uniqueFileName = md5('' + userInfo.userId + file.name + file.type + file.lastModifiedDate + file.size)
                            }
                        // 任何形式的验证失败，都触发重新上传
                        }, function (jqXHR, textStatus, errorThrown) {
                            task.resolve()
                            // 拿到上传文件的唯一名称，用于断点续传
                            uniqueFileName = md5('' + userInfo.userId + file.name + file.type + file.lastModifiedDate + file.size)
                        })
                    })
                    return $.when(task)
                },
                beforeSend: function (block) {
                    // 分片验证是否已传过，用于断点续传
                    var task = new $.Deferred()
                    $.ajax({
                        type: 'POST',
                        url: backEndUrl,
                        data: {
                            status: 'chunkCheck',
                            name: uniqueFileName,
                            chunkIndex: block.chunk,
                            size: block.end - block.start,
                            _token: JSON.parse(Laravel.csrfToken),
                            pid: JSON.parse(_this.row.id)
                        },
                        cache: false,
                        timeout: 1000,
                        dataType: 'json'
                        // contentType: 'application/json'
                    }).then(function (data, textStatus, jqXHR) {
                        if (data.ifExist) {
                            task.reject()
                        } else {
                            task.resolve()
                        }
                    }, function (jqXHR, textStatus, errorThrown) {
                        task.resolve()
                    })
                    return $.when(task)
                },
                afterSendFile: function (file) {
                    var chunksTotal = 0
                    if ((chunksTotal = Math.ceil(file.size / chunkSize)) > 1) {
                        // 合并请求
                        var task = new $.Deferred()
                        $.ajax({
                            type: 'POST',
                            url: backEndUrl,
                            data: {
                                status: 'chunksMerge',
                                name: uniqueFileName,
                                chunks: chunksTotal,
                                ext: file.ext,
                                md5: md5Mark,
                                _token: JSON.parse(Laravel.csrfToken),
                                pid: JSON.parse(_this.row.id)
                            },
                            cache: false,
                            dataType: 'json'
                            // contentType: 'application/json'
                        }).then(function (data, textStatus, jqXHR) {
                            // todo 检查响应是否正常
                            task.resolve()
                            file.path = data.path
                            UploadComlate(file)
                        }, function (jqXHR, textStatus, errorThrown) {
                            task.reject()
                        })
                        return $.when(task)
                    } else {
                        UploadComlate(file)
                    }
                }
            })
            var uploader = WebUploader.create({
                swf: this.$img('webuploader/Uploader.swf'),
                server: backEndUrl,
                pick: '#picker',
                resize: false,
                compress: false,
                prepareNextFile: true,
                chunked: true,
                chunkSize: chunkSize,
                threads: true,
                formData: function () {
                    return $.extend(true, {_token: JSON.parse(Laravel.csrfToken), pid: JSON.parse(_this.row.id)}, userInfo)
                },
                fileNumLimit: 1,
                fileSingleSizeLimit: 1000 * 1024 * 1024,
                duplicate: true
            })
            uploader.on('fileQueued', function (file) {
                if (file.size > 60 * 1024 * 1024) {
                    uploader.removeFile(file)
                    _this.$message('请上传小于60M视频文件')
                    return false
                }
                _this.file = file
                $('#fileName').html(file.name)
                uploader.makeThumb(file, function (error, src) {
                    if (error) {
                    }
                })
            })
            $('#theList').on('click', '.itemUpload', function () {
                uploader.upload()
                _this.isUpLoad = false
            })
            $('#theList').on('click', '.itemStop', function () {
                uploader.stop(true)
                _this.isUpLoad = true
            })
            // todo 如果要删除的文件正在上传（包括暂停），则需要发送给后端一个请求用来清除服务器端的缓存文件
            $('#theList').on('click', '.itemDel', function () {
                $('#fileName').html('')
                uploader.removeFile($('#theList li').attr('id'))
                _this.file = {}
                _this.$emit('delVideoSrc')
            })
            uploader.on('uploadProgress', function (file, percentage) {
                _this.$emit('return-progress', percentage)
            })
            function UploadComlate (file) {
                if (file.status !== '0') {
                    _this.$message({
                        type: 'success',
                        message: '上传视频成功'
                    })
                    _this.isUpLoad = true
                    _this.$emit('return-videoUrl', file.path)
                }
            }
        },
        changefn (srcPic, event) {
        },
        delVideo () {
            this.$confirm('你是否要删除视频', '信息', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'error'
            }).then(() => {
                let params = {pid: this.row.id}
                axios.get(this.$adminUrl('/planta/delVideo'), {params: params})
                    .then((responce) => {
                        if (responce.data !== 'false') {
                            this.$message({
                                type: 'success',
                                message: '删除视频成功'
                            })
                            this.$emit('return-videoUrl', '')
                        } else {
                            this.$message.error('删除视频失败')
                        }
                    })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除视频'
                })
            })
        }
    },
    mounted () {
        this.fileUpload()
        if (this.row.video !== '' && this.row.video !== null) {
            $('#delPick').show()
            $('#picker').hide()
        } else {
            $('#delPick').hide()
            $('#picker').show()
        }
    },
    watch: {
        file () {
            if (this.file.name) {
                this.btnFlag = true
            } else {
                this.btnFlag = false
            }
        }
    }
}
</script>
<link rel="stylesheet" href="webuploader.css" />
<style lang="sass">
@import '../../../../../public/webuploader/webuploader.css';
#videoFile{
    width: 100%;
    position:absolute;
    left:0px;
    bottom:-64px;
    .itemDel, .itemStop, .itemUpload{
        // cursor: pointer;
    }
    #theList{
        // border: 1px solid red;
    }
    #theList {
        span.fileName{
            display:block;
            width:100%;
            white-space:nowrap;
            overflow:hidden;
            text-overflow:ellipsis;
        }
        button.itemUpload, button.itemDel, button.itemStop{
            padding:5px 10px;
            color: #fff;
            background-color: #20a0ff;
            margin:0px 10px;
            font-size:12px;
            border:none;
        }
        // .itemStop{
        //     display: none;
        // }
    }
    #picker{
        margin-top:20px;
    }
}
</style>
