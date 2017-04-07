/**
 * inputData组件
 * @description 
 * @author 吴燕萍
 * @date 2017/3/22

 */
<template>
<div class="inputFile">
<el-upload
  class="avatar-uploader"
  action="//jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarScucess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
<el-button type="danger" size="small">上传图片</el-button>
<el-button type="info"  size="small">删除图片</el-button>
</div>
</template>
<script>
export default {
  props:
  {
    shuju: {
      type: Object,
      default: {}
    },
    editValue: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      imageUrl: this.editValue, // 保存图片地址
      file: {}
    }
  },
  methods: {
    handleAvatarScucess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  },
  watch: {
    value () {
      this.$emit('return-shuju', {name: this.shuju.name, value: this.imageUrl})
    }
  }
}
</script>
<style lang='sass'>
  .inputFile{
    /*text-align:center;*/
    .avatar-uploader .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
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
  }

</style>
