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
					<!-- 基础信息 -->
					<li><router-link :to="'/run/plant/basicInfor/'+code"></router-link></li>
					<!-- 购物链接 -->
					<li><router-link :to="'/run/plant/shop/'+video"></router-link></li>
				</ul>
			</div>

			<div class="plant_logo animated swing" ><img src="./images/logo.png" height="315" width="504" alt=""></div>

			<div class="plant_text">
				<dl>
					<dt>{{product_name}}</dt>
					<dd style="
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
">{{product_desc}}</dd>
				</dl>
			</div>
			<div class="plant_product"><img src="img" alt=""></div>
			<ul class="plantBottomList">
			    <!-- 生长图片 -->
				<li><router-link :to="'/run/plant/growImg/'+code"></router-link></li>
				<!-- 农药信息 -->
				<li><router-link :to="'/run/plant/spray/'+code"></router-link></li>
				<!-- 农事信息 -->
				<li><router-link :to="'/run/plant/farming/'+code"></router-link></li>
				<!-- 肥料信息 -->
				<li><router-link :to="'/run/plant/fertilize/'+code"></router-link></li>
				<!-- 检测信息 -->
				<li><router-link :to="'/run/plant/detect/'+code"></router-link></li>
				<!-- 商品信息 -->
				<li><router-link :to="'/run/plant/commodityInfor/'+code"></router-link></li>
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
            cultivate_id: '',
            plantation_id: '',
            code_id: '',
            product_name: '',
            product_id: '',
            product_desc: '',
            img: '',
            video: '',
            code: ''
        }
    },
    mounted () {
        // 获取溯源码
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
    }
}
</script>
<style lang='sass'>
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
