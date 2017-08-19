/**
 * 展开更多的操作按钮标题组件 
 * @description:当点击按钮时，展开更多的操作按钮
 * @author 舒丹彤
 * @date 2017/4/1  
 *  
 */ 

<template>
<div class="clickmore">
	<div>
        <!-- 更多选项 --> 
		<el-dropdown class="more" @command="handleCommand">
			<span class="el-dropdown-link">
				更多
				<i class="el-icon-caret-bottom el-icon--right"></i>
			</span>
			<el-dropdown-menu slot="dropdown">
				<template v-for="btn in moreComponent">
					<el-dropdown-item :command="btn.value" v-if="btn.value" :disabled="stateDisabled(btn.value)">{{btn.value}}</el-dropdown-item>
				</template>
			</el-dropdown-menu>  
		</el-dropdown>
	</div>
    <!-- 弹出框 -->
	<moreNew v-if="isNewShow" :more="more"></moreNew>
    <!-- 视频弹出框 -->
    <div class="videoWrap" v-if="isShow">
        <div class="video">
            <div class="uploadVideo">
                
                <div class="uploading">
                    <span class="tip" v-if="tipShow">您还没有上传视频</span>
                    <video :src="videoSrc" controls="controls"  height="200px" width="200px" v-if="videoShow"></video>
                    <div class="pro" v-if="progressShow">
                        <el-progress type="circle" :percentage="progress"></el-progress>
                    </div>
                    <videoCo @loadFile="loadFile"></videoCo>
                </div>
            </div>
            <i class="closeIcon" @click="closeClick"></i>
        </div>  
    </div>
</div>
</template>

<script>
    import videoCo from './video.vue'
    import more from '../../page/more/more.js'
    export default {
        name: 'clickMore',
        props: {
            moreComponent: {
                type: Array,
                default: []
            },
            row: {}
        },
        data () {
            return {
                isNewShow: false,
                isShow: false,
                more: more,
                checkeds: {},
                videoSrc: '',
                videoShow: false,
                progress: 0,
                progressShow: false,
                tipShow: true
            }
        },
        methods: {
            handleRemove (file, fileList) {
                console.log(file, fileList)
            },
            handlePreview (file) {
                console.log(file)
            },
            handleCommand (command) {
                if (command === '状态' || command === '审核状态') {
                    this.$emit('changeState')
                } else if (command === '视频') {
                    if (this.row.video !== '' && this.row.video !== null) {
                        this.videoSrc = require('projectRoot/env.js').app_ano_url + '/' + this.row.video
                        this.isShow = !this.isShow
                    } else {
                        this.$message('该区域没有上传视频')
                    }
                } else if (command === '打印') {
                    this.$emit('showMore')
                } else if (command === '权限') {
                    this.$emit('showPermission')
                } else if (command === '用户') {
                    this.$emit('showDetail')
                } else if (command === '发货') {
                    this.$emit('shipGoods')
                } else if (command === '交流') {
                    this.$emit('communkation')
                }
            },
            closeClick () {
                this.isShow = !this.isShow
            },
            // 状态样式验证
            stateDisabled (val) {
                let stateArr = ['已完成', '已通过']
                if (val === '状态' || val === '审核状态') {
                    if (stateArr.indexOf(this.row.state) !== -1) {
                        return true
                    } else {
                        return false
                    }
                } else {
                    return false
                }
            },
            loadFile () {
                this.progressShow = true
                this.tipShow = false
                let timer = setInterval(() => {
                    this.progress ++
                    if (this.progress === 100) {
                        clearInterval(timer)
                        this.videoShow = true
                        this.progressShow = false
                    }
                }, 200)
            }
        },
        components: {
            videoCo
        },
        mounted () {
        }
    }
</script>
<style lang="sass">
.clickmore{

	.more{
		cursor: pointer;
		margin-right: 10px;
	}
    .videoWrap{
        position: fixed;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.3);
        top: 0;
        left: 0;
        z-index: 2;
        text-align: center;
        overflow: hidden;
    }
    .uploading{
        width: 250px;
        height: 250px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform:translateX(-50%) translateY(-50%);
        border: 1px solid #000;
        .tip{
            width: 200px;
            height: 200px;
            margin: 0 auto;
            line-height: 200px;
        }
        .pro{
            width: 200px;
            height: 200px;
            margin: 0 auto;
        }
        .el-progress--circle{
            margin-top: 17px;
        }
    }
    .video{
        width: 500px;
        height: 393px;
        position: absolute;
        background: #fff;
        left: 50%;
        top: 50%;
        transform:translateX(-50%) translateY(-50%);
    }
    .closeIcon{
        background: url(/public/images/close.png) no-repeat;
        background-position: -149px -31px;
        width: 30px;
        height: 30px;
        display: inline-block;
        position: absolute;
        right: -14px;
        top: -12px;
    }
    .closeIcon:hover{
        background-position: -180px -31px;
    }

}

    .el-dropdown-menu{
        min-width: 60px !important;
    }
    .el-dropdown-menu__item{
        padding: 0 15px;
    }
    
</style>
