/**
 * 种植首页组件
 * @description 
 * @author 吴燕萍
 * @date 2017/4/24
 * 
 */
<template>
	<div id="plant">
		<div class="plant">
			<div class="plantHead">
				<ul class="plantHeaderList">
					<!-- 实时视频 -->
					<li><router-link :to="'/run/plant/video/'+id"></router-link></li>
					<!-- <li><router-link :to="{name: 'video', path: '/plant/video', params: {id:123}}"></router-link></li> -->
					<!-- <li><router-link :to="{name:'video',query:{id:123}}"></router-link></li> -->
					<!-- <li><router-link :to="{path:'/run/plant/video', name:'video'}"></router-link></li> -->
					<!-- 基础信息 -->
					<li><router-link :to="'/run/plant/basicInfor/'+id"></router-link></li>
					<!-- 购物链接 -->
					<li><router-link :to="'/run/plant/shop/'+id"></router-link></li>
				</ul>
			</div>

			<div class="plant_logo animated swing" ><img src="./images/logo.png" height="315" width="504" alt=""></div>

			<div class="plant_text">
				<dl>
					<dt>苹果撒的嘎嘎嘎嘎的骨灰盒个地方</dt>
					<dd style="
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
">这个是基本的，这里包括两个class名，第一个是基本的，必须添加的样式名，任何这基本的，这里包括两个class名，第一个是基本的，必须添加的样式名，基本的，这里包括两个class名，第一个是基本的，必须添加的样式名，里包括两个class名，第一个是基本的，必须添加的样式名，任何必须添加的样式名，任何括两个class名，第一个是基本的，必须添加的样式名，任何这基本的，这里包括两个class名，第一个是基本的，必须添加的样式名，基本的，这里包括两个class名，第一个是基本的，必须添加的样式名，</dd>
				</dl>
			</div>
			<div class="plant_product"><img src="./images/apple.jpg" alt=""></div>
			<ul class="plantBottomList">
			    <!-- 生长图片 -->
				<li><router-link :to="'/run/plant/growImg/'+id"></router-link></li>
				<!-- 农药信息 -->
				<li><router-link :to="'/run/plant/pesticideInfor/'+id"></router-link></li>
				<!-- 农事信息 -->
				<li><router-link :to="'/run/plant/farmWorkInfor/'+id"></router-link></li>
				<!-- 肥料信息 -->
				<li><router-link :to="'/run/plant/fertilizerInfor/'+id"></router-link></li>
				<!-- 检测信息 -->
				<li><router-link :to="'/run/plant/detectionInfor/'+id"></router-link></li>
				<!-- 商品信息 -->
				<li><router-link :to="'/run/plant/commodityInfor/'+id"></router-link></li>
			</ul>
		</div>
	</div>
</template>
<script>
import plantMessage from './js/plantMessage.js'
export default{
    name: 'plan',
    data () {
        let modelObj = {}
        Object.assign(modelObj, plantMessage)
        return {
            models: modelObj[this.$route.meta.key],
            id: 555
        }
    },
    mounted () {
        // console.log(this.models['basicInfor'])
    },
    methods: {
    }
}
</script>
<style lang='sass'>
@import url("./css/puplic.css");
#plant{
	width:100%;
	height:100%;
	.plant{
		width:100%;
		height:100%;
		background: url("./images/plan_bg.png") no-repeat;
		background-size: 100% 100%;
		position: relative;
		.plantHead{
			width:89.5%;
			height:15.6%;
			background:url("./images/headList.png") no-repeat;
			background-size:100% 100%;
			margin: 0 auto;
			position:relative;
			z-index:2;
			.plantHeaderList{
				width:100%;
				height:60%;
				/*background:rgba(150,150,150,0.6);*/
				position:absolute;
				top:8%;
				display:flex;
				justify-content:space-around;
				li{
					width:25%;
					height:100%;
					/*background:rgba(0,0,0,0.5);*/
					a{
						display:inline-block;
						width:100%;
						height: 100%;
					}
				}
			}
		}	
		.plant_logo{
			width: 78.4%;
			height: 37.2%;
			position:absolute;
			left:8%;
			top:4%;
			img{
				width:100%;
				height:100%;
			}
		}
		.plant_text{
			position:absolute;
			width:40%;
			max-height: 23%;
			left:7%;
			top:46%;
			transform:translateY(-50%);
			color:#67a3bf;
			font-size:1.2rem;
			zoom:1;
			dl{
				dt{
					width: 100%;
					text-align: center;
					color:#437e9c;
					white-space: nowrap;
					overflow: hidden;
					text-overflow:ellipsis;
				}
				dd{
					/*overflow: hidden;
				    text-overflow: ellipsis;
				    display: -webkit-box;
				    -webkit-line-clamp: 8;
				    -webkit-box-orient: vertical;*/
				}
			}	
		}
		.plant_product{
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
		.plantBottomList{
			width:84%;
			height:6.3%;
			position:absolute;
			bottom:8%;
			left:9%;
			/*background:rgba(100,150,140,0.7);*/
			li{
				width: 13.5%;
				height:100%;
				/*background: rgba(0,0,0,0.5);*/
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
