<template>
<div class="inputFiles">
    <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove" :auto-upload="false">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog v-model="dialogVisible" size="tiny">
      <img width="100%" :src="dialogImageUrl" alt>
    </el-dialog>
</div>
</template>
<script>
    export default {
        data () {
            return {
                dialogImageUrl: '',
                dialogVisible: false
            }
        },
        methods: {
            handleRemove (file, fileList) {
                console.log(file, fileList)
            },
            handlePictureCardPreview (file) {
                this.dialogImageUrl = file.url
                this.dialogVisible = true
            }
        }
    }
</script>
<style>
.inputFiles{
    width: 400px;
    overflow-y: scroll;
    height: 200px;
}
</style>
