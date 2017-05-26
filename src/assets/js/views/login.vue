/*登陆注册组件
* @description 
* @author 舒丹彤
* @date 2017/4/11
* */
<template>
	<div class="login">
		<img src="/public/images/rfid-bg.png" class="bg">
		<h1 class="logintitle">农产品RFID溯源安全预警系统</h1>
		<img src="/public/images/rfid-main.png" class="main-bg">

		<div class="logincontent">
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
								placeholder="请输入用户名或注册邮箱或电话" @keyup.enter.native="passTo">
							</el-input>
						</el-form-item>
						<el-form-item label="" prop="password">
							<el-input 
								type="password" 
								v-model="ruleForm2.password"
								auto-complete="off" 
								placeholder="请输入密码"
								@select="handle"
								@keyup.enter.native="passTo">
							</el-input>
						</el-form-item>
						<el-form-item label="" prop="code">
							<el-input 
								v-model.number="ruleForm2.code" 
								placeholder="请输入验证码" 
								class="code" @keyup.enter.native="passTo">
							</el-input>
							<img :src="kit_url" alt="" class="kit" @click="Kit">
						</el-form-item>
						<el-form-item class="receive">
							<el-checkbox v-model="checked">接受</el-checkbox>
							<a href="#/protocol" target ="_blank" style="color:#20a0ff" class="smaller agreement">《服务协议》</a>
							<el-checkbox v-model="recordeChecked">
							记住账号 
							</el-checkbox>
							<router-link to="/forget" style="color:#007cc2" class="smaller margin">
								忘记密码
							</router-link>
						</el-form-item>
						<el-form-item>
							<el-button type="primary" 
								@click="submitForm('ruleForm2')" 
								size="small"
								:disabled="this.checked!==true"
								>登录</el-button>
							<a href="http://www.gzlgit.com/about" target="_blank" class="apply">
								<el-button type="primary" size="small">申请入驻</el-button>
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
        let validateName = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入用户名'))
            } else {
                callback()
            }
        }
        let validatePassword = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'))
            } else {
                callback()
            }
        }
        let checkCode = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('验证码不能为空'))
            } else {
                axios.get('/kit-check', { params: { kit: this.ruleForm2.code } })
                    .then((responce) => {
                        if (responce.data === 422) {
                            callback(new Error('验证码错误'))
                        } else {
                            callback()
                        }
                    })
            }
        }
        return {
            kit_url: '',
            recordeChecked: false,
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
                    axios.post('/login', this.ruleForm2).then((responce) => {
                        if (responce.data !== 200) {
                            this.$message.error('用户名或密码错误')
                        } else {
                            this.$router.push('/index/home')
                            history.go(0) // 刷新更新权限数据
                            this.$store.dispatch('switch_record', '')
                            var myDate = new Date()
                            localStorage.setItem('loginDate', myDate.toLocaleString())
                            if (this.recordeChecked) {
                                localStorage.setItem('recordUser', this.ruleForm2.name)
                            } else {
                                localStorage.setItem('recordUser', '')
                            }
                            let fa = localStorage.getItem('record')
                            let json = JSON.parse(fa)
                            json.record = ''
                            let jsonStr = JSON.stringify(json)
                            localStorage.setItem('record', jsonStr)
                        }
                    })
                } else {
                    this.$message.error('请输入信息，再登录')
                    return false
                }
            })
        },
        passTo () {
            this.submitForm('ruleForm2')
        },
        key () {
            console.log('hfuiegubejbhjg')
        },
        Kit () {
            axios.get('/kit').then((responce) => {
                this.kit_url = responce.data
            })
        },
        handle () {
            console.log('iwgufewgfyefheufeuf')
        }
    },
    mounted () {
        this.Kit()
        // 记住账号
        if (localStorage.getItem('recordUser') === '' || localStorage.getItem('recordUser') === undefined) {
            this.recordeChecked = false
            this.ruleForm2.name = ''
        } else {
            this.recordeChecked = true
            this.ruleForm2.name = localStorage.getItem('recordUser')
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
		min-width: 980px;
		overflow: hidden;
			.bg{
				width: 100%;
				position: absolute;
				bottom: 30%;
			}
			.logintitle{
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
			.logincontent{
				display: inline-block;
				position: absolute;
				top: 39.5%;
				left: 32.5%;
				width: 36%;
				height: 26%;
					.login-logo{
					width: 46%;
					float: left;
					margin-top: 30px;
							img{
						width: 54%;
						margin: 12% auto;
						display: block;
					}
				}
				.form{
				float: left;
				width: 54%;
					.el-form-item{
						margin-top: 5px;
						/*margin-bottom: 17px;*/
						width:85%;
					}
					.receive{
						margin-bottom: 0px;
					}
					.code{
						width: 44% !important;
					}
					.kit{
						width:50%;
						height:36px;
						margin-left: 1%;
						display: inline-block;
						vertical-align: middle;
					}
				}
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
				.link{
					text-decoration: underline;
					color: #919191;
				}
			}
			.el-checkbox__label,.smaller{
				font-size: 12px;
			}
			.apply{
				margin-left: 30px;
			}
			.margin{
				margin-left: 18px;
			}
			.agreement{
				margin-right: 18px;
			}
			@media screen and(min-width:500px) and(max-width:1720px) {
				.form .el-form-item{
					margin-bottom: 13px;
				}
				.el-form-item__content{
					line-height: 28px;
				}
			}
			.el-form-item__content{
				/*line-height: 32px;*/
				font-size: 12px;
			}
		}
</style>
