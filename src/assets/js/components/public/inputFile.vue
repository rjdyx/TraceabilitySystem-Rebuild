/**
 * inputData组件
 * @description 
 * @author 吴燕萍
 * @date 2017/3/22
 */
<template>
<div class='inputFile'>
    <div size='small' class='avatar-uploader'>
        <div class='el-upload el-upload--text' @click="selectPic">
            <img v-if='imageUrl' :src='imageUrl' class='avatar'>
            <i v-else class='el-icon-plus avatar-uploader-icon'></i>
        </div>
        <input type="file" hidden="hidden" @change="previewPic(item, $event)">
        <div class="delete-pic-btn">
            <el-button size="small" @click="deleteImgFn" class="btn_change">删除</el-button>
        </div>
    </div>
</div>

</template>
<script>
export default {
    props:
    {
        shuju: {
            type: Object,
            default () {
                return {}
            }
        },
        editValue: {
            // type: String,
            // default: ''
        }
    },
    data () {
        return {
            imageUrl: '',
            file: {},
            pattern: {
                type: Array,
                default () {
                    return ['jpeg', 'png']
                }
            }
        }
    },
    methods: {
        // 删除图片
        deleteImgFn () {
            this.imageUrl = ''
            this.$emit('return-shuju', {name: this.shuju.name, value: ''})
        },
        previewPic (srcPic, event) {
            let file = event.target.files[0]
            let regexParams = ''
            for (let index = 0; index < this.pattern.length; index++) {
                regexParams += this.pattern[index] + (index === this.pattern.length - 1 ? '' : '|')
            }
            let regex = new RegExp('(?:' + regexParams + ')', 'i')
            if (file.type !== 'image/png' && file.type !== 'image/jpeg') {
                this.$message('请上传文件格式为jpeg或png的图片')
                return
            }
            if (file.size / 1024 >= 300) {
                this.$message('图片过大，请输入小于300k图片')
                return
            }
            let reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = e => {
                this.imageUrl = e.target.result
                this.$emit('return-shuju', {name: this.shuju.name, value: file})
            }
        },
        /**
         * 触发input[type="file"]的click事件来选择图片
         * @param  {object} event
         */
        selectPic (event) {
            // 取出空格
            let obj = event.target.parentNode.nextSibling
            if (obj.tagName !== 'INPUT') {
                obj = obj.nextSibling
            }
            if (obj.tagName !== 'INPUT') {
                obj = event.target.nextSibling.nextSibling
            }
            // 触发input的click事件
            obj.click()
        }
    },
    mounted () {
        if (this.editValue !== null) {
            this.imageUrl = '/' + this.editValue
        }
    },
    watch: {
        imageUrl (curVal, oldVal) {
        }
    }
}
</script>
<style lang='sass'>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    position: relative;
    cursor: pointer;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
