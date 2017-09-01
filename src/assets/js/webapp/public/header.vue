/*头部组件
* @description 
* @author 舒丹彤
* @date 2017/6/6
* */ 
 
<template>
	<div class="app-header">
		<slot name="menu"></slot>
		<slot name="plan"></slot>
		<slot name="upImg"></slot>
		<slot name="growPicture"></slot>
		<h1>{{headline}}</h1>
		<span v-show="back" class="back iconfont" @click="backTo">&#xe64e;</span>
		<span class="right-btn iconfont" @click="goBack" v-show="homeShow">&#xe60d;</span>
		<span class="growPicture growIcon" v-show="growPicture" @click="growPic">&#xe6c3;</span>
	</div>
</template>

<script>
export default {
    name: 'appHeader',
    props: {
        settitle: {
            type: String,
            default: ''
        },
        homeShow: {
            type: Boolean,
            default: false
        },
        back: {
            type: Boolean,
            default: false
        },
        growPicture: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            headline: ''
        }
    },
    methods: {
        goBack () {
            this.$router.push('/appIndex')
        },
        backTo () {
            this.$emit('setClassClear')
            history.go(-1)
        },
        growPic () {
            this.$router.push('/appIndex/message/growImg')
        }
    },
    mounted () {
        this.headline = this.settitle
        if (window.isPC) {
            if (this.$route.path.indexOf('appIndex') !== -1 || this.$route.path.indexOf('webAppNew') !== -1) {
                this.$router.push('/index/home')
            }
        }
    },
    watch: {
        settitle () {
            if (this.$route.path.indexOf('growImg') !== -1) {
                this.headline = '生长图片'
            } else {
                this.headline = this.settitle
            }
        }
    }
}
</script>
 

<style lang='sass'>
@mixin font($fontcolor,$fontSize,$lineHeight){
	color: $fontcolor;
	line-height: $lineHeight;
	font-size: $fontSize;
}
	.app-header{
		height: 50px;
		width: 100%;
		background:  #74b66e;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		/*margin-bottom: 5px;*/
			h1{
				width: 100%;
				font: 21px 微软雅黑;
				color: #fff;
				text-align: center;
				padding-top: 10px;
				/*移动端禁止长按选中文本*/
				-webkit-touch-callout: none;
				-webkit-user-select: none;
				-khtml-user-select: none;
				-moz-user-select: none;
				-ms-user-select: none;
				user-select: none;
			}
			
			span{
				display: inline-block;
				width: 20px;
				position: absolute;
			}
			.left-btn{
				background: url(/public/images/slider.png);
				background-size: 100%;
				left: 6%;
				height: 20px;
				top:28%;
			}
			.right-btn,.back{
				right: 5%;
				top: 24%;
			}
			.right-btn{
				@include font(#fff, 0.8rem, 23px);
				width: 28px;
				height: 23px;
			}
			.back{
				width: 34px;
				height: 23px;
				@include font(#fff, 0.9rem, 23px);
				/*font-size: 35px;*/
				/*line-height: 23px;*/
			}
			.newplan{
		        width: 9%;
		        height: 36px;
		        display: inline-block;
		        @include font(#fff, 0.8rem, 36px);
		        left: 5%;
		        top: 13%;
		    }
			.upImg{
		        width:100%;
		        height: 31px;
		        display: inline-block;
		        @include font(#fff,30px,31px)
		        
		    }
	}
	@font-face {
	  	font-family: 'iconfont';
	  	src: url('../../iconfont/icon_one/iconfont.eot');
	  	src: url('../../iconfont/icon_one/iconfont.eot?#iefix') format('embedded-opentype'),
	  	url('../../iconfont/icon_one/iconfont.woff') format('woff'),
	  	url('../../iconfont/icon_one/iconfont.ttf') format('truetype'),
	  	url('../../iconfont/icon_one/iconfont.svg#iconfont') format('svg');
	}
	.iconfont{
	    font-family:"iconfont" !important;
	    font-size:16px;
	    font-style:normal;
	    -webkit-font-smoothing: antialiased;
	    -webkit-text-stroke-width: 0.2px;
	    -moz-osx-font-smoothing: grayscale;
	}
	.growPicture{
        width: 28px;
        height: 23px;
        display: inline-block;  
        position: absolute;
        right: 6%;
        top: 4%;
        color: #fff;
    }
    @font-face {
        font-family: 'growPicture';
        src: url('../../iconfont/icon_growPicture/iconfont.eot');
        src: url('../../iconfont/icon_growPicture/iconfont.eot?#iefix') format('embedded-opentype'),
        url('../../iconfont/icon_growPicture/iconfont.woff') format('woff'),
        url('../../iconfont/icon_growPicture/iconfont.ttf') format('truetype'),
        url('../../iconfont/icon_growPicture/iconfont.svg#iconfont') format('svg');
    }
    .growIcon{
        font-family:"growPicture" !important;
        font-size:29px;
        font-style:normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
