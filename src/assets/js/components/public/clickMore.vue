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
				<i class="el-icon-caret-bottom e-icon--right"></i>
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
    <transition name="fade">
        <div class="videoWrap" v-if="isShow">
            <div class="video">
                <div class="uploadVideo">
                    <div class="uploading">
                        <span class="tip" v-if="!videoSrc && progressShow===false">您未上传视频(视频为MP4格式，大小不能大于60M)</span>
                        <div class="videoSrc" v-if="aaa">
                            <video :src="videoSrc" id="vidopid" controls="controls" height="220px" width="200px" @click="changeBig()"></video>
                        </div>
                        <div class="pro" v-if="progressShow">
                            <el-progress type="circle" :percentage="progress"></el-progress>
                        </div>
                        <videoCo ref="videoCo" :row="row" @return-progress="returnProgress"
                            @delVideoSrc='delVideoSrcFn' @return-videoUrl="returnVideoUrl">
                        </videoCo>
                    </div>
                </div>
                <i class="closeIcon" @click="closeClick"></i>
            </div>  
        </div>
    </transition>
    <transition name="fade">
        <div class="bigshow" v-if="bigShow">
            <div>
                <video :src="videoSrc" controls="controls" height="600px"></video>
                <i class="closeIcon" @click="closeClick1"></i>  
            </div>
        </div>
    </transition>
</div>
</template>
<script>
    import videoJs from 'video.js'
    import videoCo from './video.vue'
    import more from '../../page/more/more.js'
    // 引入vue-video-player插件
    import { videoPlayer } from 'vue-video-player'
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
                isShow1: false,
                more: more,
                checkeds: {},
                videoSrc: '',
                videoShow: true,
                progress: 0,
                progressShow: false,
                tipShow: true,
                aaa: false,
                bigShow: false
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
                        this.videoSrc = require('projectRoot/env.js').app_url + '/' + this.row.video
                        this.aaa = true
                    } else {
                        this.aaa = false
                        this.videoSrc = ''
                    }
                    this.isShow = !this.isShow
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
            closeClick1 () {
                this.bigShow = !this.bigShow
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
            returnProgress (progress) {
                var pro = parseInt(progress * 100)
                this.progress = pro
                if (pro < 100) {
                    this.progressShow = true
                } else {
                    this.timeDeal()
                }
            },
            delVideoSrcFn () {
                this.progressShow = false
                this.progress = 0
                this.videoSrc = ''
            },
            returnVideoUrl (val) {
                this.isShow = !this.isShow
                this.$emit('showlist')
            },
            timeDeal () {
                var _this = this
                setTimeout(function () {
                    _this.progressShow = false
                }, 1000)
            },
            changeBig () {
                this.isShow = !this.isShow
                this.bigShow = !this.bigShow
            }
        },
        components: {
            videoCo,
            videoPlayer
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
    .bigshow {
        width:100%;
        height:100%;
        position: fixed;
        background: rgba(0, 0, 0, 0.5);
        top: 0;
        left: 0;
        z-index: 10;
        >div{
            position:absolute;
            // width: 800px;
            height: 600px;
            left: 50%;
            top: 50%;
            margin-left:-400px;
            margin-top:-250px;
            background: white;
            box-shadow: 1px 1px 50px rgba(0, 0, 0, 0.3);
            border-radius: 2px;
        }
    }
    .uploading{
        width: 300px;
        height: 250px;
        position: absolute;
        left: 50%;
        top: 44%;
        transform:translateX(-50%) translateY(-50%);
        // border: 1px solid #000;
        box-shadow: 0px 0px 15px 2px #ccc;
        .tip{
            width: 200px;
            height: 200px;
            margin: 0 auto;
            line-height: 200px;
        }
        .pro{
            width: 100%;
            margin: 0 auto;
            position:absolute;
            left:0px;
            top:0px;
        }
        .videoSrc{
            width:100%;
            position:absolute;
            left:0px;
            top: 0px;
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
        box-shadow: 1px 1px 50px rgba(0, 0, 0, 0.3);
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
    .vjs_video_3-dimensions{
        width: 200px;
        height: 200px;
    }
    .video-js .vjs-big-play-button{
        width: 1rem;
        left: 72px;
        top: 72px;
    }
    .video-js{
        margin: 0 auto;
        margin-top: 10px;
    }
</style>
