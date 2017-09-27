<template>
	<div id="webAppVideo">
		<span class="headLT">实时视频监测</span>
        <video  id="myPlayer" poster="" controls playsInline webkit-playsinline autoplay width="100%">
            <source v-if="videoShow" :src="videoUrl" type="application/x-mpegURL"/>
        </video>
        <div v-for="(item,index) in lives" class="playks" :play="item.play" :class="{play_active:(index==0?true:false)}" @click="videoPlay">
            {{item.name}}
        </div>
	</div>
</template>
<script>
    var player = new EZUIPlayer('myPlayer')
    player.on('error', function () {
        console.log('error')
    })
    player.on('play', function () {
        console.log('play')
    })
    player.on('pause', function () {
        console.log('pause')
    })
</script>
<script>
export default{
    name: 'webAppVideo',
    data () {
        return {
            settitle: '实时视频',
            lives: {},
            videoShow: false,
            videoUrl: ''
        }
    },
    methods: {
        videoPlay: function (e) {
            $(e.target).addClass('play_active').siblings('div').removeClass('play_active')
            var live = $(e.target).attr('play')
            live = 'f01018a141094b7fa138b9d0b856507b'
            this.videoShow = false
            this.getVideoLive(live)
        },
        // 提示弹窗
        setToast (type, text, width = '7.6em') {
            this.$vux.toast.show({
                type: type,
                text: text,
                width: width,
                position: 'middle'
            })
        },
        getVideoLive (live) {
            this.videoUrl = 'http://hls.open.ys7.com/openlive/' + live + '.m3u8'
            this.videoShow = true
        }
    },
    mounted () {
        // this.videoUrl = 'http://hls.open.ys7.com/openlive/f01018a141094b7fa138b9d0b856507b.m3u8'
        axios.get('api/get/play').then((res) => {
            if (res.data.length) {
                this.lives = res.data
                var live = res.data[0].play
                live = 'f01018a141094b7fa138b9d0b856507b'
                this.getVideoLive(live)
            } else {
                this.setToast('text', '监测视频无数值', '12em')
            }
        })
    }
}
</script>
<style lang="sass">
	#webAppVideo{
		padding-top:50px;
		.headLT{
			margin: 3% 7%;
			float: left;
			color: #9fa1a0;
			font-size: 24px;
			font-weight: bold;
		}
	}
    .noneData{
        width:100%;
        height:20%;
        position: relative;
        top: 40%;
        color: #555;
        font-size: 30px;
        text-align: center;
    }
    .playks {
        width: 15.5%;
        height:30px;
        border-radius: 5px;
        line-height: 30px;
        text-align: center;
        cursor: pointer;
        border: 1px solid #555;  
        color: #555;
        float: left; 
        margin-top: 10px;
        margin-right: 0.8%;
        overflow:hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .play_active {
        color: #4D95E8; 
        border: 1px solid #4D95E8;
    }
</style>
