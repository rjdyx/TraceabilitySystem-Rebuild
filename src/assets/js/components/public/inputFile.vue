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
            <button type="button" @click="deleteImgFn">删除</button>
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
            type: String,
            default: ''
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
        },
        previewPic (srcPic, event) {
            let file = event.target.files[0]
            let regexParams = ''
            for (let index = 0; index < this.pattern.length; index++) {
                regexParams += this.pattern[index] + (index === this.pattern.length - 1 ? '' : '|')
            }
            let regex = new RegExp('(?:' + regexParams + ')', 'i')
            if (!regex.test(file.type)) {
                alert('请选择格式为 ' + this.pattern + ' 的图片')
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
        this.imageUrl = this.editValue
    },
    watch: {
        imageUrl (curVal, oldVal) {
        }
    }
}
</script>
<style lang='sass'>
    @import '../../../sass/public/inputSize.scss';
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
