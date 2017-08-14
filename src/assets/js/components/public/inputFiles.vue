/**
* inputFiles组件
* @description 
* @author 吴燕萍
* @date 2017/7/14
*/
<template>
    <div class="inputFiles">
        <el-upload
              :action="importUrl" :data="data"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
              thumbnail-mode
              :before-upload="beforeUpload"
              :file-list="imgList"
              :on-change="onChange"
              :disabled='bol'
              :on-success="handeSuccess">
          <i class="el-icon-plus"></i>
        </el-upload>
        <transition name="fade">
            <div class="inputFilesDialogImg" v-if="dialogVisible">
                <i class="el-icon-close" @click="dialogVisible = false"></i>
                <img width="100%" :src="dialogImageUrl" alt="">
            </div>
        </transition>
        <p>最多只能上传6张图片</p>
    </div>
</template>
<script>
export default {
    name: 'inputFiles',
    props:
    {
        shuju: {
            type: Object,
            default () {
                return {}
            }
        },
        editValue: {
        }
    },
    data () {
        return {
            dialogImageUrl: '',
            dialogVisible: false,
            importUrl: this.$adminUrl('/plantation/import'),
            data: {'_method': 'get'},
            inputList: [],
            bol: false,
            picArr: {},
            objImg: {},
            imgList: [],
            pattern: ['image/png', 'image/jpeg']
        }
    },
    methods: {
        //  文件列表移除文件时的钩子
        handleRemove (file, fileList) {
            this.inputList = fileList
            this.picArr = {}
            this.setPicArr(fileList)
        },
        handlePictureCardPreview (file) {
            console.log(888)
            this.dialogImageUrl = file.url
            this.dialogVisible = true
            this.$nextTick(() => {
                console.log($('.v-model'))
            })
        },
        beforeUpload (file) {
            if (this.pattern.indexOf(file.type) === -1) {
                this.$message('请上传文件格式为jpeg或png的图片')
                setTimeout(function () {
                    $('.el-upload-list').children('li:last-child').remove()
                }, 500)
                return false
            }
            if (file.size / 1024 >= 300) {
                this.$message('图片过大，请输入小于300k图片')
                setTimeout(function () {
                    $('.el-upload-list').children('li:last-child').remove()
                }, 500)
                return false
            }
        },
        // 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用
        onChange (file, fileList) {
            this.inputList = fileList
        },
        handeSuccess (val, file, fileList) {
            this.picArr = {}
            this.setPicArr(fileList)
        },
        setPicArr (fileList) {
            for (let i in fileList) {
                if (fileList[i].raw !== undefined) {
                    this.picArr['img' + i] = fileList[i].raw
                } else {
                    this.picArr['img' + i] = fileList[i].url
                }
            }
            this.picArr['picLength'] = fileList.length
            this.$emit('setPicArr', this.picArr)
        },
        // 编辑加载图片
        loadEdit () {
            if (this.editValue !== undefined && this.editValue !== null && this.editValue !== '') {
                let arr = this.editValue.split(',')
                for (let i in arr) {
                    this.objImg = {}
                    this.objImg['url'] = arr[i]
                    this.imgList.push(this.objImg)
                }
                for (let j in this.imgList) {
                    this.picArr['img' + j] = this.imgList[j].url
                }
                this.picArr['picLength'] = this.imgList.length
                this.inputList = this.imgList
                this.$emit('setPicArr', this.picArr)
            }
        }
    },
    mounted () {
        this.loadEdit()
        this.$nextTick(() => {
            $('.v-modal').css('display', 'none')
        })
    },
    watch: {
        inputList () {
            if (this.inputList.length === 6) {
                this.bol = true
            } else {
                this.bol = false
            }
        },
        bol () {
            if (this.bol) {
                $('.el-upload').hide()
            } else {
                $('.el-upload').show()
            }
        }
    }
}
</script>
<style lang="sass">
.inputFiles{
    width:300px;
    .el-upload{
       width:80px;
       height:80px; 
       line-height:85px;
    }
    .inputFilesDialogImg{
        width:30%;
        position:fixed;
        top: 50%;
        left: 50%;
        transform:translateX(-50%) translateY(-50%);
        padding:10px; 
        background: white;
        z-index:20000;
        text-align:right;
        box-shadow: 1px 1px 50px rgba(0, 0, 0, 0.3);
        border-radius: 2px;
    }
}
.el-upload-list--picture-card .el-upload-list__item {
    width:80px;
    height:80px;
}
</style>
