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
				<span :class="[{'picture': isClass},{homeImg: true}]">
					<img :src="listV.logo"/>
				</span>
				<el-row :gutter="20" class="text homeInfo">
					<el-col :span='12' v-for="(item,index) in listN" class="coltext">
						{{item}} {{listV[index]}} {{plans.come}}
					</el-col>
				</el-row>
			</div>
			<!-- 中间内容地图 -->
			<div class="main">
				<div class="leftMain">
					<template v-for="(area,index) in areas">
						<div :class="style[index]">
							<h1>{{area.name}}</h1>
							<el-row :gutter="20">
								<el-col :span="8">
									<div class="cols" style="height:20px;">区域面积：{{area.area}} {{area.unit}}</div>
									<div class="cols" style="height:20px;">区域负责人：{{area.operate}}</div>
								</el-col>
							</el-row>
						</div>
					</template>	
				</div>
				<div class="rightMain">
					<h1>My plan</h1>
					<ul>
						<li v-if="plans.harvest===undefined || plans.harvest===null" v-for="siderItem in siderBeast" class="siderTip">
							<span class="siderImg">
								<img :src="siderItem.src" />
							</span>
							<span class="siderType">{{siderItem.type}}</span>
							<span class="siderKey" v-if="plans!==null">{{plans[siderItem.key]}}</span>
						</li>
						<li v-if="plans.come===undefined || plans.come===null" v-for="siderItem in siderPlant" class="siderTip">
							<span class="siderImg">
								<img :src="siderItem.src" />
							</span>
							<span class="siderType">{{siderItem.type}}</span>
							<span class="siderKey" v-if="plans!==null">{{plans[siderItem.key]}}</span>
						</li>
					</ul>
				</div>
			</div>
			<!-- 图表数据 -->
			<div class="dataRecord">
				<chart class="chart"></chart>
				<div class="record">
					<p>本月追溯次数：{{codes.time}}次</p>
					<p>本月生产溯源码：{{codes.code}}个</p>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
import ContainTitle from '../layout/contain-title.vue'
import chart from './topComponent/echarts.vue'
import {mapActions} from 'vuex'
export default{
    name: 'home',
    data () {
        return {
            areas: {},
            style: [
                {'A': true, 'B': false, 'C': false, 'D': false},
                {'A': false, 'B': true, 'C': false, 'D': false},
                {'A': false, 'B': false, 'C': true, 'D': false},
                {'A': false, 'B': false, 'C': false, 'D': true}
            ],
            settitle: '首页',
            isClass: false,
            listN: {'company_name': '所属公司:', 'name': '用户名:', 'date': '登录时间:', 'type': '用户类型:'},
            listV: {},
            state: 'plant',
            plans: {},
            codes: {},
            siderPlant: [
                {
                    src: '/public/images/fertilize-home.png',
                    type: '施肥',
                    key: 'fertilize'
                },
                {
                    src: '/public/images/medicine-home.png',
                    type: '施药',
                    key: 'spray'
                },
                {
                    src: '/public/images/sale-home.png',
                    type: '检测',
                    key: 'detect'
                },
                {
                    src: '/public/images/harvest-home.png',
                    type: '采收',
                    key: 'harvest'
                }
                // {
                //     src: '/public/images/delivery-home.png',
                //     type: '收发量'
                // },
                // {
                //     src: '/public/images/sale-home.png',
                //     type: '销售订单'
                // }
            ],
            siderBeast: [
                {
                    src: '/public/images/fertilize-home.png',
                    type: '喂养',
                    key: 'fodderuse'
                },
                {
                    src: '/public/images/medicine-home.png',
                    type: '病疫',
                    key: 'disease'
                },
                {
                    src: '/public/images/sale-home.png',
                    type: '检测',
                    key: 'detect'
                },
                {
                    src: '/public/images/harvest-home.png',
                    type: '出栏',
                    key: 'come'
                },
                {
                    src: '/public/images/sale-home.png',
                    type: '检疫',
                    key: 'detection'
                }
            ],
            // 是否合起侧边栏
            isCloseSiderBar: false
        }
    },
    components: {
        ContainTitle,
        chart
    },
    methods: {
        ...mapActions([
            'change_siderBar'
        ])
    },
    mounted () {
        this.change_siderBar(true)
        localStorage.setItem('tab', 0)
        axios.get('api/index/state')
            .then((responce) => {
                if (responce.data !== 'plant' && responce.data !== 'all') {
                    this.state = 'beast'
                }
            })
        axios.get('api/index')
            .then((responce) => {
                this.listV = responce.data
                this.listV.date = localStorage.getItem('loginDate')
            })
        axios.get('api/index/district')
            .then((responce) => {
                var arr = []
                for (var key in responce.data) {
                    arr[key] = responce.data[key]
                }
                this.areas = arr.data
            })
        axios.get('api/index/plan')
            .then((responce) => {
                this.plans = responce.data
            })
        axios.get('api/index/code')
            .then((responce) => {
                this.codes = responce.data
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
			border-bottom: 1px solid #dcdcdc;
			position: relative;
			margin-bottom: 20px;
			padding-bottom:30px;
			.text{
				display: $inline;
				vertical-align: top;
				margin-bottom: 10px;
				width: 100%;
				margin-left:220px!important;
			}
			.homeImg{
				width: 200px;
				height: 175px;
				position:absolute;
				left:0;
				img{
					width: 200px;
					height: 175px;
				}
			}
			.homeInfo{
				margin-top: 25px;
				padding-left: 44px;
			}
		}
		.main{
			width: 100%;
			overflow: hidden;
			height: 721px;
			.leftMain{
				width: 68%;
				background: url(../../../../../public/images/9.png) no-repeat;
				background-size: 100% 100%;
				height: 718px;
				float: left;
				display: $inline;
				position: relative;
					div{
						width: 260px;
						height: 200px;
					}
			}
			.leftMain h1,.rightMain h1{
				font-size: 22px;
				text-align: left;
				color:#333333;
				display:block;white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
			}
			.rightMain h1{
				padding-bottom: 15px;
			}
			.rightMain{
				width: 26%;
				float: right;
				// display: inline-block;
				padding-top: 170px;
				min-width: 500x;
				.siderTip{
					margin: 10px 0;
					line-height: 55px;
					height: 55px;
					.siderImg{
						display: $inline;
						width: 56px;
						margin-right: 20px;
						text-align: center;
						img{
							vertical-align:middle;
						}
					}
					.siderType{
						display: $inline;
						text-align: center;
						width: 120px;
						font-size: 16px;
					}
					.siderKey{
						display: $inline;
						text-align: center;
						width: 120px;
						font-size: 16px;
						color: #0098CA;
					}
				}
			}
		}
		.dataRecord{
			width: 100%;
			margin-top: 80px;
			overflow: hidden;
			padding-bottom: 50px;
			.chart{
				width: 60%;
				float: left;
			}	
			.record{
				width: 26%;
				float:right;
				padding-top: 80px;
				p{
					margin:70px 0;
					font-size: 20px;
				}
			}
		}
	.coltext{
		font-size:14px;
		color: #898989;
		padding: 20px;
	}
	.A{
		position: $absolute;
		bottom: 16%;
		left: 2%;
		/*border: 1px solid red;*/
	}
	.B{
		position: $absolute;
		top: 25%;
		left: 11%;
		/*border: 1px solid blue;*/
	}
	.C{
		position: $absolute;
		bottom:38%;
		left: 41%;
		// border: 1px solid green;
	}
	.D{
		position: $absolute;
		bottom: 30%;
		left: 68%;
		// border: 1px solid orange;
	}
}
}
</style>
