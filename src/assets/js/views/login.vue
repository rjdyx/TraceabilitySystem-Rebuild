/*登陆注册组件
* @description 
* @author 舒丹彤
* @date 2017/4/11
* */
<template>
	<div class="login">
		<img src="/public/images/rfid-bg.png" class="bg">
		<h1 class="title">农产品RFID溯源安全预警系统</h1>
		<img src="/public/images/rfid-main.png" class="main-bg">

		<div class="content">
				<div class="login-logo">
					<img src="/public/images/new-logo.png">
				</div>
				<div class="form">
					<el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
						<el-form-item label="" prop="name">
							<el-input 
								type="text" 
								v-model="ruleForm2.name" 
								auto-complete="off" 
								placeholder="请输入用户名或注册邮箱或电话">
							</el-input>
						</el-form-item>
						<el-form-item label="" prop="password">
							<el-input 
								type="password" 
								v-model="ruleForm2.password"
								auto-complete="off" 
								placeholder="请输入密码">
							</el-input>
						</el-form-item>
						<el-form-item label="" prop="code">
							<el-input 
								v-model.number="ruleForm2.code" 
								placeholder="请输入验证码" 
								class="code">
							</el-input>
						</el-form-item>
						<el-form-item class="receive">
							<el-checkbox v-model="checked" class="acept">接受</el-checkbox>
							<router-link to="">
								《服务协议》
							</router-link>
							<el-checkbox>记住密码</el-checkbox>
							<router-link to="">
								<a>忘记密码</a>
							</router-link>
						</el-form-item>
						<el-form-item>
							<el-button type="primary" 
								@click="submitForm('ruleForm2')" 
								:disabled="this.checked!==true">登录</el-button>
							<a href="http://www.gzlgit.com/about" target="_blank" class="apply">
								<el-button type="primary">申请入驻</el-button>
							</a>
						</el-form-item>
					</el-form>
				</div>
			</div>
			<div class="copyright">
				<p>Copyright©2016广州生之园信息技术有限责任公司 版权所有
				   	<router-link to="" class="link">
				   	    粤ICP备16082048号-2
				   	</router-link>
				</p>
				<p>最佳浏览器体验:360极速模式浏览器，最佳分别率：1680*1050</p>
			</div>
	</div>
</template>

<script>
export default {
    data () {
        var validateName = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入用户名'))
            }
        }
        var validatePassword = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'))
            }
        }
        var checkCode = (rule, value, callback) => {
            if (value === '') {
                return callback(new Error('验证码不能为空'))
            }
        }
        return {
            ruleForm2: {
                name: '',
                password: '',
                code: ''
            },
            rules2: {
                name: [
                { validator: validateName, trigger: 'blur' }
                ],
                password: [
                { validator: validatePassword, trigger: 'blur' }
                ],
                code: [
                { validator: checkCode, trigger: 'blur' }
                ]
            },
            checked: true
        }
    },
    methods: {
        submitForm (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!')
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        }
    }
}
</script>


<style lang='sass'>
	.login{
		width: 100%;
		height: 100%;
		position: absolute;
		background-color: #d5dde0;
		min-height: 900px;
		min-width: 1360px;
		overflow: hidden;
		}
		.bg{
			width: 100%;
			position: absolute;
			bottom: 30%;
		}
		.title{
			font-size: 48px;
			position: relative;
			top: 18%;
			margin: 0 auto;
			width: 668px;
			color: #007cc2;
		}
		.main-bg{
			width: 36%;
			height: 68%;
			position: absolute;
			left: 31.5%;
			top: 37%;
		}
		.content{
			display: inline-block;
			position: absolute;
			top: 39.5%;
			left: 32.5%;
			width: 36%;
			height: 26%;
		}
		.login-logo{
			float: left;
		}
		.login-logo img{
			display: inline-block;
			padding: 13px 5px 0 64px;
		}
		.form{
			display: inline-block;
			float: right;
			width: 45%;
			padding-right: 65px;
		}
		.el-form-item{
			margin-top: 10px;
			margin-bottom: 19px;
		}
		.receive{
			margin-bottom: 0px;
		}
		.code{
			width: 44% !important;
		}
		input:-ms-input-placeholder{
		    color: #d6d6d7;
		}

		input::-webkit-input-placeholder{
		    color: #d6d6d7;
		}
		.copyright{
			position: absolute;
			left: 37%;
			bottom: 2%;
			font-size: 12px;
			color: #919191;
			text-align: center;
		}
		.link{
			text-decoration: underline;
			color: #919191;
		}
		.apply{
			margin-left: 30px;
		}
	
</style>
