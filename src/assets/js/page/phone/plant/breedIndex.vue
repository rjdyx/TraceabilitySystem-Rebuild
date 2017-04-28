/**
 * 养殖首页组件
 * @description 
 * @author 吴燕萍
 * @date 2017/4/27
 * 
 */
<template>
	<div id="breed">
		<div class="plant">
			<div class="plantHead">
				<ul class="plantHeaderList">
					<!-- 实时视频 -->
					<li><router-link :to="'/run/breed/video/'+id"></router-link></li>
					<!-- 基础信息 -->
					<li><router-link :to="'/run/breed/basicInfor/'+id"></router-link></li>
					<!-- 购物链接 -->
					<li><router-link :to="'/run/breed/shop/'+id"></router-link></li>
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
			    <!-- 圈舍 -->
				<li><router-link :to="'/run/breed/area/'+id"></router-link></li>
				<!-- 生长过程 -->
				<li><router-link :to="'/run/breed/growProcess/'+id"></router-link></li>
				<!-- 商品 -->
				<li><router-link :to="'/run/breed/commodity/'+id"></router-link></li>
				<!-- 喂养 -->
				<li><router-link :to="'/run/breed/feed/'+id"></router-link></li>
				<!-- 病疫 -->
				<li><router-link :to="'/run/breed/disease/'+id"></router-link></li>
				<!-- 检疫 -->
				<li><router-link :to="'/run/breed/detection/'+id"></router-link></li>
				<!-- 检测 -->
				<li><router-link :to="'/run/breed/detect/'+id"></router-link></li>
			</ul>
		</div>
	</div>
</template>
<script>
import plantMessage from './js/plantMessage.js'
export default{
    name: 'breedIndex',
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
/*@import url("./css/puplic.css");*/
#breed{
	width:100%;
	height:100%;
	.plant{
		width:100%;
		height:100%;
		background: url("./images/breed_bg.png") no-repeat;
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
			width:38%;
			max-height: 23%;
			left:9%;
			top:46%;
			transform:translateY(-50%);
			color:#67a3bf;
			font-size: .37rem;
			zoom:1;
			line-height: .45rem;
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
			/*background:rgba(0,0,0,0.5);*/
			right:7.3%;
			top:38.5%;
			transform: rotate(-2.5deg);
			img{
				width:100%;
				height:100%;
				border-radius:10px;
			}
		}
		.plantBottomList{
			width:78%;
			height:11.3%;
			position:absolute;
			bottom:2%;
			left:3%;
			/*background:rgba(100,150,140,0.7);*/
			li{
				width: 12%;
				height:35%;
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
				left:16.5%;
				top: 6%;
			}
			li:nth-child(2){
				left:40%;
				top: 6%;
				width:22%;
			}
			li:nth-child(3){
				right: 14%;
				top: 6%;
			}
			li:nth-child(4){
				left:4.5%;
				bottom: 6%;
			}
			li:nth-child(5){
				left:32%;
				bottom: 6%;
			}
			li:nth-child(6){
				right:29%;
				bottom: 6%;
			}
			li:nth-child(7){
				right:3.5%;
				bottom: 6%;
			}
		}	
	}
}
</style>
