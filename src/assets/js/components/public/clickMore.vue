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
                    <!-- <span class="tip" v-if="!videoSrc && progressShow===false">您未上传视频</span>
                    <video-player 
                        v-if="aaa" 
                        class="video-player-box"
                        ref="videoPlayer"
                        :options="playerOptions"
                        :playsinline="true"
                        customEventName="customstatechangedeventname"
                        @play="onPlayerPlay($event)"
                        @pause="onPlayerPause($event)"
                        @statechanged="playerStateChanged($event)"
                        @ready="playerReadied">
                    </video-player> -->
                    <span class="tip" v-if="!videoSrc && progressShow===false">您未上传视频</span>
                    <div class="videoSrc" v-if="aaa">
                        <video :src="videoSrc" id="vidopid" controls="controls" height="200px" width="200px" @click="changeBig()"></video>
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
    <div class="bigshow" v-if="bigShow">
        <video :src="videoSrc" controls="controls" height="450px" width="800px"></video>
        <i class="closeIcon1" @click="closeClick1"></i>
    </div>
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
                playerOptions: {
                    // videojs options
                    muted: true,
                    language: 'en',
                    playbackRates: [0.7, 1.0, 1.5, 2.0],
                    sources: [{
                        type: 'video/mp4',
                        src: ''
                    }]
                },
                aaa: false,
                bigShow: false
            }
        },
        methods: {
            // toggleVideo (e) {
            //     // 当前播放时间
            //     var curTime = e.currentTime
            //     $('#media').attr('src', 'video/exo.mp4').attr('autoplay', 'true')
            //     e.currentTime = curTime
            // },
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
                        this.aaa = true
                        // this.playerOptions.sources[0].src = this.videoSrc
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
            // onPlayerPlay (player) {
            // },
            // onPlayerPause (player) {
            // },
            // playerStateChanged (playerCurrentState) {
            // },
            // playerReadied (player) {
            //     console.log('the player is readied', player)
            // },
            returnProgress (progress) {
                var pro = parseInt(progress * 100)
                this.progress = pro
                if (pro >= 100) {
                    this.timeDeal()
                } else {
                    this.progressShow = true
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
                if (val !== '') {
                    this.videoSrc = require('projectRoot/env.js').app_ano_url + '/video/' + val
                    // this.playerOptions.sources[0].src = this.videoSrc
                } else {
                    this.videoSrc = ''
                    this.aaa = false
                }
            },
            timeDeal () {
                var _this = this
                setTimeout(function () {
                    _this.aaa = true
                    _this.progressShow = false
                }, 1000)
            },
            changeBig () {
                this.isShow = !this.isShow
                this.bigShow = !this.bigShow
                // this.bigShow = true
            }
        },
        components: {
            videoCo,
            videoPlayer
        },
        mounted () {
        }
        // computed: {
        //     player () {
        //         return this.$refs.videoPlayer.player
        //     }
        // }
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
        position: fixed;
        width: 800px;
        height: 500px;
        background: white;
        top: 0;
        left: 0;
        right: 0px;
        bottom: 0px;
        margin: auto;
        z-index: 2;
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
    .closeIcon1{
        background: url(/public/images/close.png) no-repeat;
        background-position: -149px -31px;
        width: 30px;
        height: 30px;
        display: inline-block;
        position: absolute;
        right: -7px;
        top: -4px;
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
