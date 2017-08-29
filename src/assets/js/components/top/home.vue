/**
 * @description:导航栏的首页模块
 * @author 舒丹彤
 * @date 2017/4/28  
 *  
 */ 

<template>
	<div class="home">
		<div class="home_content">
			<contain-title :settitle="settitle">
			</contain-title>
			<div class="titleHome">
				<span class="headerImg">
					<img v-if="listV.logo" :src="listV.logo"/>
				</span>

                <div class="plays">
   <!--                  <router-link :to="{path:'/index/plays'}">
                       查看实时视频
                    </router-link> -->
                </div>
				<ul  class="text homeInfo">
					<li v-for="(item,index) in listN" class="coltext">
						{{item}} {{listV[index]}} {{plans.come}}
					</li>
				</ul>
			</div>
			<!-- canvas -->
			<div class="main">
                <homeCanvas></homeCanvas>
			</div>
		</div>

	</div>
</template>


<script>
import ContainTitle from '../layout/contain-title.vue'
import homeCanvas from './topComponent/canvas.vue'
import {mapActions} from 'vuex'
export default{
    name: 'home',
    data () {
        return {
            settitle: '首页',
            isClass: false,
            listN: {'company_name': '所属公司:', 'name': '用户名:', 'date': '登录时间:', 'type': '用户类型:'},
            listV: {},
            state: 'plant',
            plans: {},
            // 是否合起侧边栏
            isCloseSiderBar: false
        }
    },
    components: {
        ContainTitle,
        homeCanvas
    },
    methods: {
        ...mapActions([
            'change_siderBar'
        ])
    },
    mounted () {
        this.change_siderBar(true)
        localStorage.setItem('tab', 0)
        axios.get('api/index').then((responce) => {
            this.listV = responce.data
            this.listV.date = localStorage.getItem('loginDate')
        })
    },
    created () {
        document.title = '首页'
    }
}

</script>




<style lang="sass">
$inline: inline-block;
$absolute: absolute;
.cols{
	padding: 5px;width: 90%;font-size:15px;color:#555555;
	text-align: left;
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
    	.titleHome{
            padding-bottom:10px;
			border-bottom: 1px solid #dcdcdc;
            padding-left:200px;
            box-sizing:border-box;  
            .headerImg{
                display: $inline;
                width:150px;
                height:150px;
                border:1px solid #dcdcdc;
                margin-left:-200px;
                border:1px solid rgb(229, 229, 229);
                img{
                    width:100%;
                }
            }
			.text{
                float:right;
                width: 90%; 
                font-size: 14px;
                color: #898989;
                li{
                    line-height:(150px/4);
                    
                }
			}
		}
		.main{
            padding-top:50px;
            width: 100%;
            text-align:center;
            >img{
                width: 100%;
            }
		}
	}
    .plays {
        float: right;
        width:10%;
        height: 100%;
        a {
            border: 1px solid #4D95E8;
            border-radius: 5px;
            line-height: 30px;
            text-align: center;
            cursor: pointer;
            color: #4D95E8;
            display: block;
            width: 100px;
            margin-top: 40%;
        }
    }
}
</style>
