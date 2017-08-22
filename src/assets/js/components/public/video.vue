<template>
    <div class="inputVideo">
        <button class="el-button el-button--default el-button--small">{{tip}}
            <input type="file" accept="audio/mp4, video/mp4" @change="changefn($event.currentTarget, $event)">
        </button>
        <i v-if="value==''" class="tipIcon el-icon-circle-close"></i>
        <i v-else class="tipIcon el-icon-circle-check"></i>
        <el-button size="small" @click="delVideo($event.currentTarget)" class="btn_change delVideo">删除</el-button>
    </div>
</template>
<script type="text/javascript"></script>
<script>
export default {
    name: 'video',
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
            value: '',
            tip: '视频上传',
            flag: false
        }
    },
    methods: {
        changefn (srcPic, event) {
            let file = event.target.files[0]
            if (file.size / 1024 >= 6144) {
                this.$message('视频文件过大，请输入小于6M视频')
                srcPic.value = ''
                return
            }
            this.value = $('.inputVideo input[type=file]').eq(0).val()
            this.$emit('return-shuju', {name: 'videos', value: file})
            this.$emit('loadFile')
        },
        delVideo () {
            this.value = ''
            this.$emit('return-shuju', {name: 'videos', value: this.value})
        }
    },
    mounted () {
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
<style lang="sass">
.inputVideo{
	overflow:hidden;
	button:first-child{
		position:relative;
		input[type=file]{
			width:54px;
			position:absolute;
			opacity:0;
			left:0;
			top: 0;
		}
	}
	.delVideo{
		margin-top:5px;
	}
	.tipIcon{
		margin-left:20px;
	}
}
</style>
