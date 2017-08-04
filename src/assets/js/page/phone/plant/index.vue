/**
 * 手机追溯首页组件
 * @description 
 * @author 舒丹彤
 * @date 2017/7/27
 * 
 */
<template>

	<div class="phoneIndex">
		<div class="phoneHeader">
			<h2>天池茶叶</h2>
		</div>
		<div class="phoneMain">
			<div class="logo">
				<img>
			</div>
				<template v-for="(item,index) in indexData.circle">
					<div :class="item.iconPosition" class="quote">
						<div :class="{'active':item.isTrue}" @touchend="jumpto(item,index)">
							<li class="iconfont iconcircle" :class="item.icon">
							</li>
							<span>{{item.iconLabel}}</span>
						</div>
					</div>
				</template>
		</div>
		<div class="info">
			<p class="subscription">天池茶叶</p>
			<p class="description">茶叶绿茶正宗雨前西湖龙井</p>
		</div>
		<div class="menuWrap">
			<div class="indexMenu">
				<router-link :to="'/run/plant/video/'+id">
					<span class="iconfont iconmenu icon-shipin"></span>
					<span>实时视频</span>
				</router-link>
			</div>
			<div class="indexMenu">
				<router-link :to="'/run/plant/basicInfor/'+code">
					<span class="iconfont iconmenu icon-shu"></span>
					<span>基础信息</span>
				</router-link>
			</div>
			<div class="indexMenu">
				<router-link :to="'/run/plant/sale/'+video">
					<span class="iconsale iconmenu icon-xiaoshouxinxi"></span>
					<span>销售信息</span>
				</router-link>
			</div>
			<div class="indexMenu">
				<router-link :to="'/run/plant/shop/'+video">
					<span class="iconfont iconmenu icon-gouwuche"></span>
					<span>购物链接</span>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import plantMessage from './js/plantMessage.js'
import indexData from './js/index.js'

export default{
    name: 'phoneIndex',
    data () {
        let modelObj = {}
        Object.assign(modelObj, plantMessage)
        return {
            models: modelObj[this.$route.meta.key],
            isTrue: false,
            code: '',
            indexData: indexData,
            video: 'video'
        }
    },
    mounted () {
        this.code = this.$route.params.code
        // 查询首页产品数据
        var params = {code: this.code}
        axios.get('run/plant/index', {params: params})
            .then((responce) => {
                var lists = responce.data
                if (lists !== 404 && lists !== 403 && lists !== 400) {
                    this.code_id = lists.id
                    this.cultivate_id = lists.cultivate_id
                    this.plantation_id = lists.plantation_id
                    this.product_name = lists.name
                    this.product_id = lists.product_id
                    this.product_desc = lists.description
                    this.img = lists.thumb
                    this.video = lists.video
                } else {
                    if (lists === 404) {
                        alert('溯源码无效！')
                        this.$router.go('-1')
                    }
                    if (lists === 403) {
                        alert('商家已关闭溯源码追溯！')
                        this.$router.go('-1')
                    }
                    if (lists === 400) {
                        alert('该溯源码无相关信息！')
                        this.$router.go('-1')
                    }
                }
            })
    },
    methods: {
        // 带动画的路径跳转
        jumpto (item, index) {
            let quote = $('.quote')
            for (var i = 0; i < quote.length; i++) {
                quote[i].onclick = function () {
                    $(this).animate({'top': '3rem', 'left': '3rem'})
                }
            }
            this.$nextTick(function () {
                this.indexData.circle.forEach(function (item) {
                    Vue.set(item, 'isTrue', false)
                })
                Vue.set(item, 'isTrue', true)
            })
            setTimeout(() => {
                this.$router.push(item.src + this.code)
            }, 500)
        }
    }
}
</script>
<style lang='sass'>
@import './iconfont/iconfont.css';
@import './iconfont/sale/iconfont.css';
	.phoneIndex{
		.phoneHeader{
        width: 100%;
        height: 50px;
        background: #3dd0b6;
        font-size: .6rem;
        color: #fff;
        text-align: center;
        line-height: 50px;
        letter-spacing: 0.06rem;
    }
		a{
			color: #fff;
		}
		width: 100%;
		height: 100%;
		background: #3dd0b6;
		position: relative;
		h1{
			width: 100%;
			height: 25px;
		}
		.phoneMain{
			width: 8.2rem;
			height: 8.2rem;
			background: url('/public/images/circle.png') no-repeat;
			background-position: 100%;
			background-size: 100% 100%;
			margin: 1.76rem auto 0;
			text-align: center;
			position: relative;
			.logo{
				width: 4.2rem;
				height: 4.2rem;
				border-radius: 50%;
				position: absolute;
				top: 2rem;
				left: 2rem;
				span{
					width: 4.2rem;
					height: 4.2rem;
					border-radius: 50%;
					border: 2px solid #fff;
					display: inline-block;
				}
				img{
					width: 4.2rem;
					height: 4.2rem;
					border-radius: 50%;
					border: 2px solid #fff;
				}
			}
			.quote{
				width: 2rem;
				height: 70px;
				position: absolute;
				color: #fff;
				font-size: 0.373rem;
			}
		}
		.iconquoteA{
			position: absolute;
			left: 1rem;
		}
		.iconquoteB{
			position: absolute;
			top: 3.5rem;
			left: -1rem;
		}
		.iconquoteC{
			position: absolute;
			top: 6.5rem;
			left: 1rem;
		}
		.iconquoteD{
			position: absolute;
			top: 6.5rem;
			left: 5rem;
		}
		.iconquoteE{
			position: absolute;
			top: 3.5rem;
			left: 7rem;
		}
		.iconquoteF{
			position: absolute;
			left: 5rem;
		}
		.info{
			width: 100%;
			height: 20px;
			margin-top: 2rem;
			text-align: center;
			color: #fff;
			font-size: 0.373rem;
			p{
				margin-bottom: 0.1rem;
				letter-spacing: 0.02rem;
			}
		}
		.iconcircle{
	    	font-size:.88rem;
	    	width: 1.5rem;
	    	height: 1.5rem;
	    	border-radius: 100%;
	    	border: 2px solid;
	    	margin: 0 auto;
	    	background:  #3dd0b6;
		}
		.menuWrap{
			width: 100%;
			height: 1.9rem;
			position: absolute;
			bottom: 0;
			color: #fff;
			.indexMenu{
				display: inline-block;
				width: 25%;
				height: 100%;
				text-align: center;
				font-size: 0.373rem;
				.iconmenu{
					font-size: 0.88rem;
					margin-bottom: -0.2rem;
				}
			}
		}
		.active{
			color: #edd987 !important;
			animation: myfirst 1s !important;
			-moz-animation: myfirst 1s !important;	
			-webkit-animation: myfirst 1s !important;
			-o-animation: myfirst 1s !important;
			transition: all ease-out;
			/*-webkit-animation-fill-mode:forwards;*/
		}
	

		@keyframes myfirst {
			0% {-webkit-transform:scale(1);}
			100% {-webkit-transform:scale(0.4);}
		}

		@-moz-keyframes myfirst{
			0% {-webkit-transform:scale(1);}
			100% {-webkit-transform:scale(0.4);}
		}

		@-webkit-keyframes myfirst {
			0% {-webkit-transform:scale(1);}
			100% {-webkit-transform:scale(0.4);}
		}

		@-o-keyframes myfirst{
			0% {-webkit-transform:scale(1);}
			100% {-webkit-transform:scale(0.4);}
		}
	}
	@font-face {
	  	font-family: 'iconfont';
	  	src: url('./iconfont/iconfont.eot');
	  	src: url('./iconfont/iconfont.eot?#iefix') format('embedded-opentype'),
	  	url('./iconfont/iconfont.woff') format('woff'),
	  	url('./iconfont/iconfont.ttf') format('truetype'),
	  	url('./iconfont/iconfont.svg#iconfont') format('svg');
	}
	.iconfont{
		display: block;
	    font-family:"iconfont" !important;
	    font-style:normal;
	    -webkit-font-smoothing: antialiased;
	    -webkit-text-stroke-width: 0.2px;
	    -moz-osx-font-smoothing: grayscale;
	}
	@font-face {
	  	font-family: 'iconsale';
	  	src: url('./iconfont/sale/iconfont.eot');
	  	src: url('./iconfont/sale/iconfont.eot?#iefix') format('embedded-opentype'),
	  	url('./iconfont/sale/iconfont.woff') format('woff'),
	  	url('./iconfont/sale/iconfont.ttf') format('truetype'),
	  	url('./iconfont/sale/iconfont.svg#iconfont') format('svg');
	}
	.iconsale{
		display: block;
	    font-family:"iconsale" !important;
	    font-style:normal;
	    -webkit-font-smoothing: antialiased;
	    -webkit-text-stroke-width: 0.2px;
	    -moz-osx-font-smoothing: grayscale;
	}
	@media screen and(max-width: 320px) and(max-height: 480px){
		.phoneIndex  .phoneMain{
				margin: 0.76rem auto 0;
			}
		.phoneIndex	.info{
				margin-top: 1rem;
			}
		
	}
</style>
