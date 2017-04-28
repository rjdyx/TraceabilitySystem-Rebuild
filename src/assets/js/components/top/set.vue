/**
 * @description:导航栏的设置模块模块
 * @author 舒丹彤
 * @date 2017/4/25  
 *  
 */ 
<template>
	<div class="set">
		<div class="set_content">
			<contain-title :settitle="settitle">
			</contain-title>
			<div class="switch">
				<!-- 主题色切换 -->
				<div class="option">
					<span class="explain">网站皮肤</span>
					<div class="selectTxt">
						<el-radio-group v-model="radio1" @change="switchColor">
						    <el-radio :label="1">清新时尚蓝<span class="bg blue-bg"></span></el-radio>
						    <el-radio :label="2">环保绽放绿<span class="bg green-bg"></span></el-radio>
						    <el-radio :label="3">高贵丁香紫<span class="bg purple-bg"></span></el-radio>
						    <el-radio :label="4">狂热活泼黄<span class="bg yellow-bg"></span></el-radio>
						</el-radio-group>
					</div>
				</div>
				<!-- 字体大小切换 -->
				<div class="option">
					<span class="explain">网站字体</span>
					<div class="selectTxt">
						<el-radio-group v-model="radio2"  @change="switchSize">
						    <el-radio :label="5">小号<span class="font small-inner">寻真溯源</span></el-radio>
						    <el-radio :label="6">中号<span class="font middle-inner">寻真溯源</span></el-radio>
						    <el-radio :label="7">大号<span class="font big-inner">寻真溯源</span></el-radio>
						</el-radio-group>
					</div>
				</div>
				<!-- 版本 -->
				<div class="option">
					<span class="explain">网站版本</span>
					<div class="selectTxt edition">
						<el-radio-group v-model="radio3">
						    <el-radio :label="8">果蔬溯源系统V2.0</el-radio>
						</el-radio-group>
					</div>
				</div>
				<div class="option">
					<span class="explain">修改密码</span>
					<div class="password">
						<el-input placeholder="请输入旧密码" size="small"></el-input>
						<el-input placeholder="新密码" size="small"></el-input>
						<el-input placeholder="确认新密码" size="small"></el-input>
					</div>
				</div>
				<div class="option">
					<span class="explain">操作说明</span>
					<div class="selectTxt">
						<el-radio-group v-model="radio4">
						    <el-radio :label="9">显示操作说明</el-radio>
						    <el-radio :label="10">关闭操作说明</el-radio>
						</el-radio-group>
					</div>
				</div>
				<div class="save">
					<el-button>保存</el-button>
				</div>
			</div>
			<footer-top></footer-top>
		</div>
	</div>
</template>

<script>
import ContainTitle from '../layout/contain-title.vue'
import footerTop from '../top/footer.vue'
export default {
    name: 'set',
    data () {
        return {
            radio1: 1,
            radio2: 5,
            radio3: 8,
            radio4: 9,
            settitle: '系统设置'
        }
    },
    components: {
        ContainTitle,
        footerTop
    },
    methods: {
        switchColor (label) {
            if (label === 1) {
                this.switchTheme('blue')
            } else if (label === 2) {
                this.switchTheme('green')
            } else if (label === 3) {
                this.switchTheme('purple')
            } else if (label === 4) {
                this.switchTheme('yellow')
            }
        },
        switchSize (label) {
            if (label === 5) {
                this.switchFont('small')
            } else if (label === 6) {
                this.switchFont('middle')
            } else if (label === 7) {
                this.switchFont('big')
            }
        },
        switchTheme (color) {
            this.$store.dispatch('switch_theme', color)
        },
        switchFont (size) {
            this.$store.dispatch('switch_font', size)
        }
    }
}
</script>

<style lang="sass">

.set{
	height: 100%;
    overflow:hidden;
    padding-left:10px;
    .set_content{
    	margin-top: 15px;
    	overflow:scroll;
    	height: 100%;
    }
}
.switch{
	width: 300px;
	margin: 22px 94px;
}
.selectTxt{
	display: inline-block;
	margin-left: 40px;
}
.option{
	overflow: hidden;
	margin-bottom: 20px;
	padding-bottom: 5px;
}
.el-radio-group{
	text-align: right;
}
.bg{
	width: 50px;
	height: 16px;
	display: inline-block;
	vertical-align: middle;
	margin-left: 10px;
}
.blue-bg{
	background: #009acb;
}
.green-bg{
	background: #55BBA6;
}
.purple-bg{
	background: #895E9B;
}
.yellow-bg{
	background: #DEB355;
}
.explain{
	display: inline-block;
	float: left;
}
.el-radio{
	display: block;
	margin-top: 10px;
}
.font{
	color: #CCCCCC;
	border:1px solid #DCDCDC;
	margin-left: 22px;
}
.small-inner{
	font-size: 12px;
	padding: 2px 16px;
}
.middle-inner{
	font-size: 13px;
	padding: 2px 14px;
}
.big-inner{
	font-size: 14px;
	padding: 2px 12px;
}
.edition{
	padding-left: 13px;
}
.el-input{
	// width: 165px;
	// margin-bottom: 10px;
	// margin-left: -18px;
}
.password{
	float: right;
	width: 165px;
	margin-left: -18px;
	padding-right: 20px;
	line-height:35px;
}
.save{
	text-align: center;
}
</style>
