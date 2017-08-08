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
				<img :src="tea_img">
			</div>
				<template v-for="(item,index) in indexData.circle">
					<div :class="item.iconPosition" class="quote">
						<div :class="{'active':item.isTrue}" @click="jumpto(item,index)">
							<li class="iconfont iconcircle" :class="item.icon">
							</li>
							<span>{{item.iconLabel}}</span>
						</div>
					</div>
			</template>
		</div>
		<div class="info">
			<p class="subscription">天池茶叶</p>
			<p class="description">{{product_name}}</p>
		</div>
		<div class="menuWrap">
			<div class="indexMenu" @click="getVideo">
				<span class="iconfont iconmenu icon-shipin"></span>
				<span>实时视频</span>
			</div>
			<div class="indexMenu">
				<router-link :to="'/teaTrace/tea/basicInfor/'+code">
					<span class="iconfont iconmenu icon-shu"></span>
					<span>基础信息</span>
				</router-link>
			</div>
			<div class="indexMenu">
				<router-link :to="'/teaTrace/tea/sale/'+code">
					<span class="iconsale iconmenu icon-xiaoshouxinxi"></span>
					<span>销售信息</span>
				</router-link>
			</div>
			<div class="indexMenu"  @click="getBuyUrl">
				<span class="iconfont iconmenu icon-gouwuche"></span>
				<span>购物链接</span>
			</div>
		</div>
	</div>
</template>

<script>
import plantMessage from './js/plantMessage.js'
import indexData from './js/index.js'
import { Toast } from 'vux'
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
            video: 'video',
            product_name: '',
            tea_img: this.$img('/images/tea_default.jpg'),
            sell_network: ''
        }
    },
    mounted () {
        this.code = this.$route.params.code
        // 查询首页产品数据
        if (localStorage.getItem('teaTrace') === null) {
            var params = {code: this.code}
            axios.get('teaTrace/tea/index', {params: params})
                .then((responce) => {
                    if (responce.data === 404) {
                        this.setToast('text', '当前溯源码无效', '12em')
                        this.$router.push('/404')
                    } else {
                        localStorage.setItem('teaTrace', JSON.stringify(responce.data))
                        this.product_name = responce.data.product_name
                        if (responce.data.img !== '' && responce.data.img !== null) {
                            this.tea_img = responce.data.img
                        }
                        this.sell_network = responce.data.sell_network
                    }
                })
        } else {
            var tabLocal = JSON.parse(localStorage.getItem('teaTrace'))
            this.product_name = tabLocal.product_name
            if (tabLocal.img !== '' && tabLocal.img !== 'null') {
                this.tea_img = tabLocal.img
            }
            this.sell_network = tabLocal.sell_network
        }
    },
    methods: {
        // 提示弹窗
        setToast (type, text, width = '7.6em') {
            this.$vux.toast.show({
                type: type,
                text: text,
                width: width,
                position: 'middle'
            })
        },
        // 获取视频
        getVideo () {
            this.setToast('text', '该功能尚在完善中', '14em')
        },
        // 获取购买地址
        getBuyUrl () {
            if (this.sell_network !== 'null' && this.sell_network !== '' && this.sell_network !== null) {
                window.location.href = this.sell_network
            } else {
                this.setToast('text', '商户没有上传购买地址', '20em')
            }
        },
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
    },
    components: {
        Toast
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
			transform: rotate(0deg);
			animation: rond 20s linear infinite 0s;
			-webkit-animation: rond 20s linear infinite 0s;
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
				/*animation: plan_1 16s 0s ease-in-out infinite;*/
				/*-webkit-animation: plan_1 16s 0s ease-in-out infinite;*/
			}
		}
		@keyframes rond {
		  0% {transform : rotate(0deg);}
		  100% {transform : rotate(360deg);}
		}

		@-webkit-keyframes rond {
		    0%{-webkit-transform : rotate(0deg);}
		  100%{-webkit-transform : rotate(360deg);}
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
