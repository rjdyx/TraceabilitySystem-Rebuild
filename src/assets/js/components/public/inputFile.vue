/**
 * inputData组件
 * @description 
 * @author 吴燕萍
 * @date 2017/3/22

 */
<template>
<div class="inputFile">
	<div size="small" class="avatar-uploader">
		<div class="el-upload el-upload--text" @click.stop="showFile"
			>
			<img v-if="imageUrl" :src="imageUrl" class="avatar">
			<i v-else class="el-icon-plus avatar-uploader-icon"></i>
			<input type="file"  class="fileBtn el-upload__input" accept="image/jpeg">
		</div>
	</div>
<!-- 	<div>
		<el-upload
			  class="avatar-uploader"
			  size="small"
			  action="//jsonplaceholder.typicode.com/posts/"
			  :show-file-list="false"
			  :on-success="handleAvatarScucess"
			  :before-upload="beforeAvatarUpload">
			  <img v-if="imageUrl" :src="imageUrl" class="avatar">
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
		</el-upload>
	</div> -->
	<el-button type="primary" size="small" >上传图片</el-button>
	<el-button type="danger" size="small">删除图片</el-button>
</div>

</template>
<script>
	export default{
		props:{
			isNull:{
				type:Boolean,
				default:true,
			},
			label:{
				type:String,
				default:"",
			},
			placeholder:{
				type:String,
				default:"必填",
			}

		},
		data(){
			return{
				 imageUrl: '',
				 file:{},
			}
		},
		methods: {
			showFile(){
				var $file=$(".fileBtn");
				var _this=this;
				 $file.click();
				 $file.change(function(){
				 		_this.imageUrl=$file[0].value;
					 // let isJPG_isLt2M =_this.beforeAvatarUpload($file[0]);
					 // console.log(isJPG_isLt2M);
					 // if(isJPG_isLt2M){
					 // 	  _this.handleAvatarScucess($file);
					 // }
					
				})
			},
		    // handleAvatarScucess(file) {
		    //     this.imageUrl = window.URL.createObjectURL(file.value);
		    //     console.log();
		    // },
		    // beforeAvatarUpload(file) {
		    //     const isJPG = file.accept === 'image/jpeg';
		    //     const isLt2M = file.size / 1024 / 1024 < 2;

		    //     if (!isJPG) {
		    //       this.$message.error('上传头像图片只能是 JPG 格式!');
		    //     }
		    //     if (!isLt2M) {
		    //       this.$message.error('上传头像图片大小不能超过 2MB!');
		    //     }
		    //     return isJPG && isLt2M;
		    // }
		}

	}
</script>
<style lang="sass">
	@import "../../../sass/public/inputSize.scss";
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