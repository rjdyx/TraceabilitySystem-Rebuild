<template>
    <div class="inputVideo">
        <button class="el-button el-button--default el-button--small">{{tip}}
            <input type="file" accept="audio/mp4, video/mp4" @change="changefn($event.currentTarget, $event)">
        </button>
        <i v-if="value==''" class="tipIcon el-icon-circle-close"></i>
        <i v-else class="tipIcon el-icon-circle-check"></i>
        <el-button size="small" @click="upVideo()" class="btn_change delVideo">上传</el-button>
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
        },
        rowId: ''
    },
    data () {
        return {
            value: '',
            tip: '视频上传',
            flag: false,
            val: ''
        }
    },
    methods: {
        changefn (srcPic, event) {
            let file = event.target.files[0]
            if (file.size / 1024 >= 614400) {
                this.$message('视频文件过大，请输入小于600M视频')
                srcPic.value = ''
                return
            }
            this.value = $('.inputVideo input[type=file]').eq(0).val()
            this.val = file
        },
        upVideo () {
            if (this.val !== '') {
                Promise.all([this.getProcess(), this.ps()])
                .then(([res1, res2]) => {
                    console.dir([res1, res2])
                })
            } else {
                this.$message('请上传MP4视频文件')
            }
        },
        getProcess () {
            return new Promise(resolve => {
                var _this = this
                let params = {'key': 'file1'}
                axios.get(this.$adminUrl('planta/getProcess'), {params: params})
                    .then((responce) => {
                        var progress = parseInt(responce.data)
                        if (progress < 100) {
                            setTimeout(_this.getProcess(), 100)
                        } else {
                            console.log('完成')
                        }
                        resolve(responce)
                    })
            })
        },
        ps () {
            return new Promise(resolve => {
                let submit = {}
                submit['id'] = this.rowId
                submit['file'] = this.val
                submit['PHP_SESSION_UPLOAD_PROGRESS'] = 'file1'
                this.$dataPost(this, '/planta/upVideo', submit, true, false, false).then((response) => {
                })
                resolve('6666')
            })
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
