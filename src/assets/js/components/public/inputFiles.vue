<template>
    <div class="inputFiles">
        <el-upload
              :action="importUrl" :data="data" name="excel_file"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
              thumbnail-mode
              :before-upload="beforeUpload"
              :on-change="onChange"
              :disabled='bol'>
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog v-model="dialogVisible" size="tiny">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
        <p>最多只能上传6张图片</p>
    </div>
</template>
<script>
export default {
    name: 'test1',
    data () {
        return {
            dialogImageUrl: '',
            dialogVisible: false,
            importUrl: this.$adminUrl('/plantation/import'),
            data: {'_method': 'get'},
            inputList: [],
            bol: false
        }
    },
    methods: {
        //  文件列表移除文件时的钩子
        handleRemove (file, fileList) {
            this.inputList = fileList
        },
        handlePictureCardPreview (file) {
            this.dialogImageUrl = file.url
            this.dialogVisible = true
        },
        beforeUpload () {
        },
        // 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用
        onChange (file, fileList) {
            this.inputList = fileList
        }
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
}
// .el-dialog__wrapper{
//     background:rgba(0,0,0,.3);
// }
.el-upload-list--picture-card .el-upload-list__item {
    width:80px;
    height:80px;
}
</style>
