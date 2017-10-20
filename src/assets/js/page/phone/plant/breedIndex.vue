/**
 * 养殖首页组件
 * @description 
 * @author 吴燕萍
 * @date 2017/4/27
 * 
 */
<template>
<transition name="fade2">
	<div id="breed">
		<div class="plant">
			<div class="plantHead">
				<ul class="plantHeaderList">
					<!-- 实时视频 -->
					<li><router-link :to="'/run/breed/video/'+data.video"></router-link></li>
					<!-- 基础信息 -->
					<li><router-link :to="'/run/breed/basicInfor/'+code" ></router-link></li>
					<!-- 购物链接 -->
					<li><router-link :to="'/run/breed/shop/'+data.product_id"></router-link></li>
				</ul>
			</div>

			<div class="plant_logo animated swing" ><img src="./images/logo.png" height="315" width="504" alt=""></div>

			<div class="plant_text">
				<dl>
					<dt>{{data.name}}</dt>
					<dd style="overflow : hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 7;-webkit-box-orient: vertical;">{{data.description}}</dd>
				</dl>
			</div>
			<div class="plant_product"><img :src="data.thumb" alt=""></div>
			<ul class="plantBottomList">
				<!-- 生长过程 -->
				<li><router-link :to="'/run/breed/growProcess/'+code"></router-link></li>
				<!-- 商品 -->
				<li><router-link :to="'/run/breed/commodity/'+code"></router-link></li>
				<!-- 喂养 -->
				<li><router-link :to="'/run/breed/fodderuse/'+code"></router-link></li>
				<!-- 病疫 -->
				<li><router-link :to="'/run/breed/disease/'+code"></router-link></li>
				<!-- 检疫 -->
				<li><router-link :to="'/run/breed/detection/'+code"></router-link></li>
				<!-- 检测 -->
				<li><router-link :to="'/run/breed/detect/'+code"></router-link></li>
			</ul>
		</div>
	</div>
</transition>
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
            data: {},
            thumb: '',
            product_name: '',
            code: ''
        }
    },
    mounted () {
        $(document).on('touchmove', function (e) {
            // e.preventDefault()
            e.stopPropagation()
        })
        // 获取溯源码
        this.code = this.$route.params.code
        // 查询首页产品数据
        var params = {code: this.code, teaTrace: 0}
        // 追溯次数判断、操作
        if (sessionStorage.getItem('teaTrace') === null) {
            params['teaTrace'] = 1
            sessionStorage.setItem('teaTrace', 1)
        }
        axios.get('run/beast/index', {params: params}).then((responce) => {
            var lists = responce.data
            if (lists !== 404 && lists !== 403 && lists !== 400) {
                this.data = lists
                this.thumb = lists.thumb
                this.product_name = lists.name
            } else {
                if (lists === 404) {
                    this.setToast('text', '当前溯源码无效', '12em')
                    this.$router.push('/404')
                }
                if (lists === 403) {
                    this.setToast('text', '商家已关闭溯源码追溯', '12em')
                    this.$router.push('/404')
                }
                if (lists === 400) {
                    this.setToast('text', '该溯源码无相关信息', '12em')
                    this.$router.push('/404')
                }
            }
        })
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
        }
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
			height:12.3%;
			position:absolute;
			bottom:2%;
			left:3%;
			/*background:rgba(100,150,140,0.7);*/
			li{
				width: 12%;
				height:30%;
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
				width:22%;
				left:20%;
				top: 9%;
			}
			li:nth-child(2){
				left:60%;
				top: 9%;
				width:22%;
			}
			li:nth-child(3){
				left:4.5%;
				bottom: 8%;
			}
			li:nth-child(4){
				left:32%;
				bottom: 8%;
			}
			li:nth-child(5){
				right:29%;
				bottom: 8%;
			}
			li:nth-child(6){
				right:3.5%;
				bottom: 8%;
			}
			li:nth-child(7){
				right:1.5%;
				bottom: 8%;
			}
		}	
	}
}
</style>
