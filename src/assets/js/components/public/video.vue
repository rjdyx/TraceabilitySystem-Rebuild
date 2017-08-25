<template>
    <!-- <div class="inputVideo" id="picker">
        <button class="el-button el-button--default el-button--small">{{tip}}
            <input type="file" accept="audio/mp4, video/mp4" @change="changefn($event.currentTarget, $event)">
        </button>
        <i v-if="value==''" class="tipIcon el-icon-circle-close"></i>
        <i v-else class="tipIcon el-icon-circle-check"></i>
        <el-button size="small" @click="upVideo()" class="btn_change delVideo">上传</el-button>
    </div> -->
    <div id="videoFile">
        <!-- 进度条 -->
        <el-progress type="circle" :percentage="percentage"></el-progress>
        <ul id="theList"></ul>
        <div id="picker">选择文件</div>
    </div>
</template>
<script type="text/javascript"></script>
<script>
export default {
    name: 'videoFile',
    props:
    {
        shuju: {
            type: Object,
            default () {
                return {}
            }
        },
        editValue: {
        },
        rowId: ''
    },
    data () {
        return {
            value: '',
            tip: '视频上传',
            flag: false,
            val: '',
            percentage: 0
        }
    },
    methods: {
        abc () {
            var _this = this
            var userInfo = {userId: 'kazaff666', md5: ''}
            var chunkSize = 5000 * 1024
            var uniqueFileName = null
            var md5Mark = null
            var backEndUrl = '/php/fileUpload.php'
            WebUploader.Uploader.register({
                'before-send-file': 'beforeSendFile',
                'before-send': 'beforeSend',
                'after-send-file': 'afterSendFile'
            }, {
                beforeSendFile: function (file) {
                    var task = new $.Deferred()
                    var start = new Date().getTime()
                    new WebUploader.Uploader().md5File(file, 0, 10 * 1024 * 1024).progress(function (percentage) {
                    }).then(function (val) {
                        md5Mark = val
                        userInfo.md5 = val
                        $.ajax({
                            type: 'POST',
                            url: backEndUrl,
                            data: {
                                status: 'md5Check',
                                md5: val
                            },
                            cache: false,
                            // todo 超时的话，只能认为该文件不曾上传过
                            timeout: 1000,
                            dataType: 'json'
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
                            size: block.end - block.start
                        },
                        cache: false,
                        timeout: 1000,
                        dataType: 'json'
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
                                md5: md5Mark
                            },
                            cache: false,
                            dataType: 'json'
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
                    return $.extend(true, {}, userInfo)
                },
                fileNumLimit: 1,
                fileSingleSizeLimit: 1000 * 1024 * 1024,
                duplicate: true
            })
            uploader.on('fileQueued', function (file) {
                $('#theList').append('<li id=' + file.id + '>' +
                    '<img /><span class="fileName">' + file.name + '</span><span class=itemUpload>上传</span><span class=itemStop>暂停</span><span class=itemDel>删除</span>' +
                    '<div class=percentage></div>' +
                '</li>')
                var $img = $('#' + file.id).find('img')
                $('.itemStop').hide()
                uploader.makeThumb(file, function (error, src) {
                    if (error) {
                        $img.replaceWith('<span>不能预览</span>')
                    }
                    $img.attr('src', src)
                })
            })
            $('#theList').on('click', '.itemUpload', function () {
                uploader.upload()
                // "上传"-->"暂停"
                $(this).hide()
                $('.itemStop').show()
            })
            $('#theList').on('click', '.itemStop', function () {
                uploader.stop(true)
                // "暂停"-->"上传"
                $(this).hide()
                $('.itemUpload').show()
            })
            // todo 如果要删除的文件正在上传（包括暂停），则需要发送给后端一个请求用来清除服务器端的缓存文件
            $('#theList').on('click', '.itemDel', function () {
                uploader.removeFile($(this).parent().attr('id'))
                // 从上传列表dom中删除
                $(this).parent().remove()
            })
            uploader.on('uploadProgress', function (file, percentage) {
                _this.percentage = percentage * 100
                console.log(_this.percentage)
                // $('#' + file.id + ' .percentage').text(percentage * 100 + '%')
            })
            function UploadComlate (file) {
                $('#' + file.id + ' .percentage').text('上传完毕')
                $('.itemStop').hide()
                $('.itemUpload').hide()
                $('.itemDel').hide()
            }
        },
        changefn (srcPic, event) {
        },
        upVideo () {
            if (this.val !== '') {

            } else {
                this.$message('请上传MP4视频文件')
            }
        }
    },
    mounted () {
        this.abc()
        $('.webuploader-element-invisible').attr('accept', 'audio/mp4, video/mp4')
        if (this.editValue !== undefined && this.editValue !== null && this.editValue !== '') {
            this.value = this.editValue
            this.$emit('return-shuju', {name: 'videos', value: this.editValue})
        }
    },
    watch: {
        value () {
        }
    }
}
</script>
<link rel="stylesheet" href="webuploader.css" />
<style lang="sass">
@import '../../../../../public/webuploader/webuploader.css';
// .inputVideo{
// 	overflow:hidden;
// 	button:first-child{
// 		position:relative;
// 		input[type=file]{
// 			width:54px;
// 			position:absolute;
// 			opacity:0;
// 			left:0;
// 			top: 0;
// 		}
// 	}
// 	.delVideo{
// 		margin-top:5px;
// 	}
// 	.tipIcon{
// 		margin-left:20px;
// 	}
//     .itemDel, .itemStop, .itemUpload{
//         margin-left: 15px;
//         color: blue;
//         cursor: pointer;
//     }
//     #theList{
//         width: 80%;
//         min-height: 100px;
//         border: 1px solid red;
//     }
//     #theList .itemStop{
//         display: none;
//     }
// }
#videoFile{
    width: 100%;
    position:absolute;
    left:0px;
    bottom:-64px;
    .itemDel, .itemStop, .itemUpload{
        cursor: pointer;
    }
    #theList{
        border: 1px solid red;
    }
    #theList {
        span.fileName{
            display:block;
            width:100%;
            white-space:nowrap;
            overflow:hidden;
            text-overflow:ellipsis;
        }
        span.itemUpload, span.itemDel, span.itemStop{
            padding:5px 10px;
            color: #fff;
            background-color: #20a0ff;
            margin:0px 10px;
            font-size:12px;
        }
        .itemStop{
            display: none;
        }
    }
    #picker{
        margin-top:20px;
    }
}
</style>
