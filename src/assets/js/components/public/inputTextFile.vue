<template>
	<div class="inputTextFile">
		<el-input v-model="input" placeholder="" size="small" @change="imputChange"></el-input>
		<el-button size="small" @click="inputTextFileDel($event.currentTarget)" class="btn_change inputTextFileDel">删除</el-button>
		<el-upload
    		class="avatar-uploader"
		    :action="importUrl" :data="data"
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
    props:
    {
        shuju: {
            type: Object,
            default () {
                return {}
            }
        },
        editValue: {},
        editData: {}
    },
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
            this.$emit('return-shuju', {name: this.shuju.name + 'img', value: file.raw})
        },
        beforeAvatarUpload (file) {
            let isPic = file.type === 'image/jpeg' || file.type === 'image/png'
            let isLt300K = file.size / 1024 < 300
            if (!isPic) {
                this.$message.error('上传图片只能是JPG和PNG格式!')
            }
            if (!isLt300K) {
                this.$message.error('上传图片大小不能超过300K!')
            }
            return isPic && isLt300K
        },
        // 删除图片
        inputTextFileDel (src) {
            this.imageUrl = ''
            this.$emit('return-shuju', {name: this.shuju.name + 'img', value: 'del'})
        },
        // 输入框发生变化
        imputChange () {
            this.$emit('return-shuju', {name: this.shuju.name, value: this.input})
        }
    },
    mounted () {
        if (this.editValue !== undefined && this.editValue !== null && this.editValue !== '') {
            this.input = this.editValue
        }
        if (this.editData !== undefined) {
            this.imageUrl = this.editData[this.shuju.name + 'imgs']
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
	.inputTextFileDel{
		float:right;
		margin-top:5px;
		margin-left:20px;
    }
}
</style>
