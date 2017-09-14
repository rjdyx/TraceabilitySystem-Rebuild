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
				<ul class="text homeInfo">
					<li v-for="(item,index) in listN">
						<span>{{item}}</span> : {{listV[index]}}
					</li>
				</ul>
			</div>
			<!-- canvas -->
			<div class="main">
                <!-- <homeCanvas></homeCanvas> -->
                <router-view></router-view>
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
            listN: {'company_name': '所属公司', 'name': '用户名', 'date': '登录时间', 'type': '用户类型'},
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
            box-sizing:border-box;  
            float:left;
            width: 100%;
            margin-bottom: 20px;
            .headerImg{
                display: $inline;
                width:150px;
                height:150px;
                border:1px solid #dcdcdc;
                border:1px solid rgb(229, 229, 229);
                float:left;
                margin-left: 5px;
                border-radius: 10px;
                img{
                    width:100%;
                    height:100%;
                }
            }
			.homeInfo{
                width: 80%; 
                font-size: 15px;
                color: #8e8e8e;
                margin-left:160px;
                overflow:hidden;
                li{
                    // line-height:(150px/2);
                    width: 45%;
                    float: left;
                    padding: 20px 0px 20px 5%;
                }
			}
		}
		.main{
            padding-top:50px;
            width: 100%;
            text-align:center;
            height:100%;
            >img{
                width: 100%;
            }
		}
	}
}
</style>
