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
				<span :class="{'picture': isClass}">
					<img src="/public/images/home.jpg" class="homeImg" />
				</span>
				<el-row :gutter="20" class="text homeInfo">
					<el-col :span='12' v-for="(item,index) in list" class="coltext">
						{{item}}
					</el-col>
				</el-row>
			</div>
			<!-- 中间内容地图 -->
			<div class="main">
				<div class="leftMain">
					<template v-for="(area,index) in areas">
						<div :class="{'A': area.isA, 'B': area.isB, 'C': area.isC, 'D': area.isD}">
							<h1>{{area.title}}</h1>
							<el-row :gutter="20">
								<el-col :span="8"></el-col>
							</el-row>
						</div>
					</template>	
				</div>
				<div class="rightMain">
					<h1>My plan</h1>
					<ul>
						<li v-for="siderItem in siderTip" class="siderTip">
							<span class="siderImg">
								<img :src="siderItem.src" />
							</span>
							<span class="siderType">{{siderItem.type}}</span>
						</li>
					</ul>
				</div>
			</div>
			<!-- 图表数据 -->
			<div class="dataRecord">
				<chart class="chart"></chart>
				<div class="record">
					<p>本月追溯次数：{{}}次</p>
					<p>本月生产溯源码：{{}}个</p>
					<p>本月出栏头数：{{}}</p>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
import ContainTitle from '../layout/contain-title.vue'
import chart from './topComponent/echarts.vue'
export default{
    name: 'home',
    data () {
        return {
            areas: [
                {title: 'B区', isA: true, isB: false, isC: false, isD: false},
                {title: 'A区', isA: false, isB: true, isC: false, isD: false},
                {title: 'C区', isA: false, isB: false, isC: true, isD: false},
                {title: 'D区', isA: false, isB: false, isC: false, isD: true}
            ],
            settitle: '首页',
            isClass: false,
            list: ['所属公司:', '用户名:', '登录时间:', '用户类型:'],
            siderTip: [
                {
                    src: '/public/images/fertilize-home.png',
                    type: '施肥'
                },
                {
                    src: '/public/images/medicine-home.png',
                    type: '施药'
                },
                {
                    src: '/public/images/harvest-home.png',
                    type: '采收'
                },
                {
                    src: '/public/images/delivery-home.png',
                    type: '收发量'
                },
                {
                    src: '/public/images/sale-home.png',
                    type: '销售订单'
                }
            ]
        }
    },
    components: {
        ContainTitle,
        chart
    }
}

</script>




<style lang="sass">
.home{
	height: 100%;
    overflow:hidden;
    padding-left:10px;
    .home_content{
    	margin-top: 15px;
    	overflow:scroll;
    	height: 100%;
}
.titleHome{
	border-bottom: 1px solid #dcdcdc;
	padding-bottom: 10px;
	position: relative;
	margin-bottom: 20px;
}
.text{
	display: inline-block;
	vertical-align: top;
	margin-bottom: 10px;
	width: 80%;
}
.homeImg{
	width: 200px;
	height: 175px;
}
.homeInfo{
	margin-top: 25px;
	padding-left: 44px;
}
.main{
	width: 100%;
	overflow: hidden;
	height: 721px;
}
.leftMain{
	width: 68%;
	// min-width: 1200px;
	background: url(../../../../../public/images/9.png) no-repeat;
	background-size: 100% 100%;
	height: 718px;
	float: left;
	display: inline-block;
	position: relative;
}
.leftMain div{
	width: 200px;
	height: 200px;
}
.leftMain h1,.rightMain h1{
	font-size: 34px;
	text-align: center;
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
}
.siderImg{
	display: inline-block;
	width: 56px;
	margin-right: 20px;
	text-align: center;
}
.siderImg img{
	vertical-align:middle;
}
.siderTip{
	margin: 10px 0;
	line-height: 55px;
	height: 55px;

}
.siderType{
	display: inline-block;
	text-align: center;
	width: 120px;
	font-size: 16px;
}
.chart{
	width: 60%;
	float: left;
}
.dataRecord{
	width: 100%;
	margin-top: 80px;
	overflow: hidden;
	padding-bottom: 50px;
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
.coltext{
	font-size:14px;
	color: #898989;
	padding: 21px;
}
.A{
	position: absolute;
	bottom: 16%;
	left: 2%;
	/*border: 1px solid red;*/
}
.B{
	position: absolute;
	top: 25%;
	left: 14%;
	/*border: 1px solid blue;*/
}
.C{
	position: absolute;
	bottom:38%;
	left: 43%;
	// border: 1px solid green;
}
.D{
	position: absolute;
	bottom: 32%;
	left: 67%;
	// border: 1px solid orange;
}
}
</style>
