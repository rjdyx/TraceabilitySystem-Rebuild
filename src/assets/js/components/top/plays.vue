/**
 * @description:实时视频模块
 * @author 郭森林
 * @date 2017/08/21 
 *  
 */ 

<template>
	<div class="home">
		<div class="home_content">
			<contain-title :settitle="settitle">
			</contain-title>
            <div id="videoPlay" class="videoPlay"></div>
            <div class="kplay">
                <span>视频集序列 <em>(共{{this.lives.length}}个实时视频)</em></span>
                <div v-for="(item,index) in lives" class="playks play_active" :play="item.play" :memo="item.memo" @click="videoPlay" v-if="!index">
                    {{item.name}}
                </div>
                <div v-for="(item,index) in lives" class="playks" :play="item.play" :memo="item.memo" @click="videoPlay" v-if="index">
                    {{item.name}}
                </div>
            </div>
            <div class="kplay playDesc">
                <span>视频备注 <em>(当前播放视频)</em></span>
                <div class="memo-y" v-if="desc">{{desc}}</div>
                <div class="memo-n" v-else>该视频无备注信息</div>
            </div>
		</div>

	</div>
</template>


<script>
import ContainTitle from '../layout/contain-title.vue'
import {mapActions} from 'vuex'
export default{
    name: 'home',
    data () {
        return {
            settitle: '实时视频',
            lives: [],
            desc: ''
        }
    },
    components: {
        ContainTitle
    },
    methods: {
        videoPlay: function (e) {
            $(e.target).addClass('play_active').siblings('div').removeClass('play_active')
            var live = $(e.target).attr('play')
            this.desc = $(e.target).attr('memo')
            this.plays(live)
        },
        plays (live) {
            var flashvars = {
                f: 'http://' + window.location.host + '/public/ckplayer/m3u8.swf',
                // 此处填写购买获取到的视频播放地址
                a: 'http://open.ys7.com/openlive/' + live + '.m3u8',
                c: 0,
                p: 1,
                s: 4,
                lv: 1
            }
            var params = {bgcolor: '#FFF', allowFullScreen: true, allowScriptAccess: 'always', wmode: 'transparent'}
            CKobject.embedSWF('http://' + window.location.host + '/public/ckplayer/ckplayer.swf', 'videoPlay', 'video', '100%', '100%', flashvars, params)
        },
        // 提示弹窗
        setToast (type, text, width = '7.6em') {
            this.$vux.toast.show({
                type: type,
                text: text,
                width: width,
                position: 'middle'
            })
        }
    },
    mounted () {
        axios.get('api/get/play').then((responce) => {
            var live = ''
            if (responce.data) {
                this.lives = responce.data
                live = responce.data[0].play
                this.desc = responce.data[0].memo
            } else {
                this.setToast('text', '当前无信息可加载...', '12em')
            }
            this.plays(live)
        })
    },
    created () {
        document.title = this.settitle
    }
}
</script>

<style lang="sass">
$inline: inline-block;
$absolute: absolute;
.playDesc {
    height: 10%;
}
.home{
	height: 100%;
    overflow:hidden;
    padding-bottom:66px;
    box-sizing:border-box;
    .home_content{
    	overflow-y:scroll;
    	height: 100%;
        box-sizing:border-box;
        padding:15px 10px 0px 10px;
	}
    .videoPlay{
        width: 100%;
        height: 65%;
    }
}
.kplay {
    width:100%;
    padding-bottom: 20px;
    float: left;
    text-align: center;
    span {
        height: 40px;
        width: 100%;
        text-align: left;
        float: left;
        font-size: 20px;
        color: #333;
        line-height: 40px;
        margin-top: 10px;
        border-bottom:1px solid #ccc;
        em {
            font-size: 13px;
            color: #888;
        }
    }
    .playks {
        width: 80px;
        height:30px;
        border-radius: 5px;
        line-height: 30px;
        text-align: center;
        cursor: pointer;
        border: 1px solid #555;  
        color: #555;
        float: left; 
        width: 80px;
        height:30px;
        margin-top: 10px;
        margin-right: 10px;
    }
    .play_active {
        color: #4D95E8; 
        border: 1px solid #4D95E8;
    }
    .memo-y{
        float: left;
        width: 98%;
        height: 10%;
        text-align: left;
        font-size: 13px;
        color: #666;
        line-height: 30px;
        text-indent:2em;
    }
    .memo-n{
        float: left;
        width: 100%;
        height: 10%;
        text-align: center;
        font-size: 22px;
        color: #ccc;
        line-height: 50px;
    }
}
</style>
