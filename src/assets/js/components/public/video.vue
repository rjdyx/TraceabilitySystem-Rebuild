<template>
    <div class="inputVideo">
        <button class="el-button el-button--default el-button--small">{{tip}}
            <input type="file" accept="audio/mp4, video/mp4" @change="changefn($event.currentTarget, $event)">
        </button>
        <el-button size="small" @click="delVideo($event.currentTarget)" class="btn_change fr delVideo">删除</el-button>
    </div>
</template>
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
            tip: '请选择视频文件'
        }
    },
    methods: {
        changefn (srcPic, event) {
            this.value = $('.inputVideo input[type=file]').eq(0).val()
            let file = event.target.files[0]
            this.$emit('return-shuju', {name: this.shuju.name, value: file})
        },
        delVideo () {
            $('.inputVideo input[type=file]').eq(0).val('')
            this.value = ''
        }
    },
    mounted () {
        if (this.editValue !== undefined && this.editValue !== null && this.editValue !== '') {
            console.log($('#video_file')[0].value)
        }
    },
    watch: {
        value () {
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
