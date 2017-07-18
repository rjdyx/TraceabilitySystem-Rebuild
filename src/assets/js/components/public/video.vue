<template>
    <div class="inputVideo">
        <button class="el-button el-button--default el-button--small">{{tip}}<input type="file" accept="audio/mp4, video/mp4" @change="changefn"></button>
        <el-button size="small" @click="delVideo($event.currentTarget)" class="btn_change fr delVideo">删除</el-button>
    </div>
</template>
<script>
export default {
    name: 'test1',
    data () {
        return {
            value: '',
            tip: '请选择视频文件'
        }
    },
    methods: {
        changefn (file) {
            this.value = $('.inputVideo input[type=file]').eq(0).val()
        },
        delVideo () {
            $('.inputVideo input[type=file]').eq(0).val('')
            this.value = ''
        }
    },
    watch: {
        value () {
            console.log(this.value)
            this.tip = this.value === '' ? '请选择视频文件' : '已选择视频文件'
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
}
</style>
