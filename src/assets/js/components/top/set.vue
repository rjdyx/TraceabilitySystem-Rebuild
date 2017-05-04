/**
 * @description:导航栏的设置模块
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
			<el-form :model="editForm" :rules="rules" ref="editForm" label-width="110px" class="demo-editForm">
				<!-- 主题色切换 -->

					<el-form-item label="网站皮肤">
						<el-radio-group v-model="radio1" @change="switchColor">
						    <el-radio :label="1">清新时尚蓝<span class="bg blue-bg"></span></el-radio>
						    <el-radio :label="2">环保绽放绿<span class="bg green-bg"></span></el-radio>
						    <el-radio :label="3">高贵丁香紫<span class="bg purple-bg"></span></el-radio>
						    <el-radio :label="4">狂热活泼黄<span class="bg yellow-bg"></span></el-radio>
						</el-radio-group>
					</el-form-item>

					<el-form-item label="网站字体">
						<el-radio-group v-model="radio2"  @change="switchSize">
						    <el-radio :label="1">小号<span class="font small-inner">寻真溯源</span></el-radio>
						    <el-radio :label="2">中号<span class="font middle-inner">寻真溯源</span></el-radio>
						    <el-radio :label="3">大号<span class="font big-inner">寻真溯源</span></el-radio>
						</el-radio-group>
					</el-form-item>

					<el-form-item label="原始密码" prop='old_password'>
						<el-input placeholder="不填提交则不修改" v-model="editForm.old_password"></el-input>
					</el-form-item>

					<el-form-item label="新密码" prop='password' >
						<el-input placeholder="至少6位字符" v-model="editForm.password"></el-input>
					</el-form-item>

					<el-form-item label="网站名称" prop='name' v-if="role">
						<el-input placeholder="请输入备案号" v-model="editForm.name" ></el-input>
					</el-form-item>

					<el-form-item label="网站备案" prop='record_number' v-if="role">
						<el-input placeholder="请输入备案号" v-model="editForm.record_number" ></el-input>
					</el-form-item>

					<el-form-item label="网站关键字" prop="keywords" v-if="role">
						<el-input placeholder="请输入关键字 多个请‘|’隔开" v-model="editForm.keywords" ></el-input>
					</el-form-item>
	
				<!-- <file></file> -->
					<el-form-item label="验证码开关"  prop='verify_state' v-if="role">
						<el-radio-group v-model="editForm.verify_state" >
						    <el-radio :label="1">开启</el-radio>
						    <el-radio :label="0">关闭</el-radio>
						</el-radio-group>
					</el-form-item>

					<el-form-item label="网站开关" prop="web_state" v-if="role">
						<el-radio-group v-model="editForm.web_state" >
						    <el-radio :label="1">开启</el-radio>
						    <el-radio :label="0">关闭</el-radio>
						</el-radio-group>
					</el-form-item>

					<el-form-item label="操作说明" v-if="role">
						<el-radio-group v-model="radio5">
						    <el-radio :label="0">显示操作说明</el-radio>
						    <el-radio :label="1">关闭操作说明</el-radio>
						</el-radio-group>
					</el-form-item>

				<el-form-item class="save" >
					<el-button @click="submitForm('editForm')" class="btn_change">保存</el-button>
				</el-form-item>
			</el-form>
			</div>
			<footer-top></footer-top>
		</div>
	</div>
</template>

<script>
import ContainTitle from '../layout/contain-title.vue'
import footerTop from './topComponent/footer.vue'
import file from '../public/inputFile.vue'
export default {
    name: 'set',
    data () {
        return {
            radio1: 1,
            radio2: 1,
            radio5: 0,
            settitle: '系统设置',
            role: false,
            editForm: {
                name: '',
                record_number: '',
                verify_state: '',
                web_state: '',
                keywords: '',
                old_password: '',
                password: ''
            }
        }
    },
    components: {
        ContainTitle,
        footerTop,
        file
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
            if (label === 1) {
                this.switchFont('small')
            } else if (label === 2) {
                this.switchFont('middle')
            } else if (label === 3) {
                this.switchFont('big')
            }
        },
        switchTheme (color) {
            this.$store.dispatch('switch_theme', color)
        },
        switchFont (size) {
            this.$store.dispatch('switch_font', size)
        },
        /**
          * 提交表单
          */
        submitForm (formName) {
            var ret = this.editForm
            axios.put('api/system/1', ret).then((response) => {
                if (response.data === 'old_error') {
                    alert('原始密码错误')
                    this.editForm.old_password = null
                } else if (response.data === 'pas_error') {
                    alert('新密码长度有误')
                    this.editForm.password = null
                } else if (response.data === false) {
                    alert('修改失败')
                    this.editForm.password = null
                    this.editForm.old_password = null
                } else {
                    alert('修改成功')
                    this.editForm.password = null
                    this.editForm.old_password = null
                }
            })
        }
    },
    mounted () {
        // 查询编辑数据
        axios.get('api/system/1/edit')
            .then((responce) => {
                this.editForm.name = responce.data.system.name
                this.editForm.keywords = responce.data.system.keywords
                this.editForm.verify_state = responce.data.system.verify_state
                this.editForm.web_state = responce.data.system.web_state
                this.editForm.record_number = responce.data.system.record_number
                if (responce.data.user.company_id === null) {
                    this.role = true
                }
            })
    }
}
</script>

<style lang="sass">

.set{
	height: 100%;
    overflow:hidden;
    padding-left:10px;
    // position: relative;
    .set_content{
    	margin-top: 15px;
    	overflow:scroll;
    	height: 100%;

    }
.switch{
	width: 500px;
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
.btn_change{
	color: #fff;
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
.copyright{
	margin-top: 180px;
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
}
</style>
