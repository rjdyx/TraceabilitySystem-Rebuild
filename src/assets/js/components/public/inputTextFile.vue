<template>
	<div class="inputTextFile">
		<el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
		<el-button size="small" @click="inputTextDel($event.currentTarget)" class="inputTextDel">删除</el-button>
		<el-upload
		  class="avatar-uploader"
		  :action="importUrl" :data="data" name="excel_file"
		  :show-file-list="false"
		  :on-success="handleAvatarSuccess"
		  :before-upload="beforeAvatarUpload">
		  <img v-if="imageUrl" :src="imageUrl" class="avatar">
		  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
		</el-upload>
	</div>
</template>
<script>
export default {
    name: 'inputTextFile',
    data () {
        return {
            input: '',
            imageUrl: '',
            importUrl: this.$adminUrl('/plantation/import'),
            data: {'_method': 'get'}
        }
    },
    methods: {
        handleAvatarSuccess (res, file) {
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
        },
        // 删除图片
        inputTextDel (src) {
            this.imageUrl = ''
            src.parentNode.parentNode.getElementsByTagName('input')[0].value = ''
            // this.$emit('return-shuju', {name: this.shuju.name, value: ''})
        }
    }
}
</script>
<style lang="sass">
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
  .inputTextFile{
  	overflow:hidden;
	.el-input{
		width:60%;
	}
	.avatar-uploader{
		display:inline-block;
		float:right;
		.avatar-uploader-icon{
		    width:36px;
		    height:36px;
		    line-height:36px;
		    font-size:10px;
		}
		.el-upload {
			width:36px;
		    height:36px;
			img{
				width:100%;
				height:100%;
			}
		}
	}
	.inputTextDel{
		float:right;
		margin-top:5px;
		margin-left:20px;
    }
}
</style>
