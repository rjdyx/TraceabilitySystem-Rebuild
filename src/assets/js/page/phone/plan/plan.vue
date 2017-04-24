<template>
	<div id="plan">
		<div class="plan">
			<div class="planHead">
				<ul class="planHeaderList">
					<li><router-link to="/plan/pVideo"></router-link></li>
					<li @click="basicFn"><router-link to="/plan/pBasic"></router-link></li>
					<li @click="shopFn"><router-link to="/plan/pShop"></router-link></li>
				</ul>
			</div>

			<div class="plan_logo animated swing" ><img src="/public/images/logo.png" height="315" width="504" alt=""></div>

			<div class="plan_text">
				<h3>苹果</h3>
				<p>这里包括两个class名，第一个是基本的，必须添加的样式名，任何想实现的元素都得添加这个。第二个是指定的动画样式名。</p>
			</div>

			<div class="plan_product"><img src="/public/images/apple.jpg" alt=""></div>

			<ul class="planBottomList">
				<li @click="growFn"><router-link to="/plan/pGrow"></router-link></li>
				<li @click="medicamentFn"><router-link to="/plan/pBasicModel1"></router-link></li>
				<li @click="framFn"><router-link to="/plan/pBasicModel1"></router-link></li>
				<li @click="manureFn"><router-link to="/plan/pBasicModel1"></router-link></li>
				<li @click="detectionFn"><router-link to="/plan/pBasicModel1"></router-link></li>
				<li @click="commodityFn"><router-link to="/plan/pCommodity"></router-link></li>
			</ul>
		</div>
		<router-view></router-view>
	</div>
</template>
<script>
export default{
    name: 'plan',
    date () {
        return {
        }
    },
    mounted () {
    },
    methods: {
        // 实时视频
        videoFn () {},
        // 基础信息
        basicFn () {},
        // 购物链接
        shopFn () {},
        // 生长图片
        growFn () {},
        // 农药信息
        medicamentFn () {},
        // 农事信息
        framFn () {},
        // 肥料信息
        manureFn () {},
        // 检测信息
        detectionFn () {},
        // 商品信息
        commodityFn () {}
    }
}
</script>
<style lang="sass">
#plan{
	width:100%;
	height:100%;
	.plan{
		width:100%;
		height:100%;
		background: url(/public/images/plan_bg.png) no-repeat;
		background-size: 100% 100%;
		position: relative;
		.planHead{
			width:89.5%;
			height:15.6%;
			background:url(/public/images/headList.png) no-repeat;
			background-size:100% 100%;
			margin: 0 auto;
			position:relative;
			z-index:2;
			.planHeaderList{
				width:100%;
				height:60%;
				background:rgba(150,150,150,0.6);
				position:absolute;
				top:8%;
				display:flex;
				justify-content:space-around;
				li{
					width:25%;
					height:100%;
					background:rgba(0,0,0,0.5);
					a{
						display:inline-block;
						width:100%;
						height: 100%;
					}
				}
			}
		}	
		.plan_logo{
			width: 72.8%;
			height: 34.38%;
			position:absolute;
			left:10%;
			top:0%;
			img{
				width:100%;
				height:100%;
			}
		}
		.plan_text{
			position:absolute;
			width:40%;
			height:auto;
			font-size:2rem;
		}
		.plan_product{
			position:absolute;
			width:41%;
			height:16%;
			background:rgba(0,0,0,0.5);
			right:7.3%;
			top:38.5%;
			transform: rotate(-2.5deg);
			
			img{
				width:100%;
				height:100%;
				border-radius:20px;
			}
		}
		.planBottomList{
			width:84%;
			height:6.3%;
			position:absolute;
			bottom:8%;
			left:9%;
			/*background:rgba(100,150,140,0.7);*/
			li{
				width: 13.5%;
				height:100%;
				background: rgba(0,0,0,0.5);
				// font-size: 50px;
				color: white;
				text-align: center;
				position: absolute;
				a{
					display:inline-block;
					width:100%;
					height: 100%;
				}
			}
			li:nth-child(1){
				left:0;
				top: 0;
				transform: rotate(2deg);
			}
			li:nth-child(2){
				left:15.4%;
				top: 7%;
				transform: rotate(3deg);
			}
			li:nth-child(3){
				left:30.8%;
				top: 17%;
				transform: rotate(3deg);
			}
			li:nth-child(4){
				right:30.8%;
				top: 17%;
				transform: rotate(-3deg);
			}
			li:nth-child(5){
				right:15.4%;
				top: 7%;
				transform: rotate(-3deg);
			}
			li:nth-child(6){
				right:0;
				top: 0%;
				transform: rotate(-2deg);
			}
		}	
	}
}
	
</style>
