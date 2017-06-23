/*登录组件
* @description 
* @author 舒丹彤
* @date 2017/6/6
* */
<template>
    <div class="webLogin">
    	<div class="webloginImg">
            <img src="/public/images/logintop.png" class="topImg">
            <div class="bottomImg" @click="submitForm('ruleForm2')">
                <!-- <img src="/public/images/loginbottom.png" ref="btn"> -->
                <!-- <img src="/public/images/" alt=""> -->
            </div>
        </div>

    	<div class="form">
    			<el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
    				<el-form-item prop="name" class="item">
                        <span></span>
    					<el-input type="text"
    					    v-model="ruleForm2.name" 
    					    auto-complete="off" 
    					    placeholder="请输入用户名" 
    					    @keyup.enter.native="passTo">
    					</el-input>
    				</el-form-item>
    				<el-form-item prop="password" class="item">
                        <span></span>
    					<el-input type="password" 
    					    v-model="ruleForm2.password" 
    					    auto-complete="off"
    				        placeholder="请输入密码"
    				        @keyup.enter.native="passTo">
    				    </el-input>
    				</el-form-item>
    			</el-form>
    		</div>
    </div>
</template>

<script>
export default{
    name: 'login',
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
        return {
            loginBtn: '登录',
            showLogo: true,
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
                ]
            }
        }
    },
    methods: {
        submitForm (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.loginBtn = '登录中...'
                    axios.post('/login', this.ruleForm2).then((responce) => {
                        if (responce.data !== 200) {
                            this.loginBtn = '登录'
                            this.$message.error('用户名或密码错误')
                        } else {
                            // history.go(0) // 刷新更新权限数据
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
                            this.$router.push('/appIndex')
                        }
                    })
                } else {
                    this.loginBtn = '登录'
                    this.$message.error('请输入信息，再登录')
                    return false
                }
            })
        },
        passTo () {
            this.submitForm('ruleForm2')
        }
    },
    mounted () {
        // 判断是否已登录
        if (window.Roles.permissions !== undefined) {
            this.$router.push('/appIndex')
        } else {
            // 判断pc端或电脑端
            if (window.isPC) {
                this.$router.push('/login')
            }
        }
    }
}
</script>


<style lang='sass'>

@import "../../sass/function";

    .webLogin{
    	width: 100%;
    	height: 100%;
		/*overflow: hidden;*/
        .webloginImg{
            width: 100%;
            margin-bottom: 20px;
        .topImg{
            width: 92%;
            height: 20%;
            margin-top: 12%;
            margin-left: 4%;
            display: inline-block;
        }
        .bottomImg{
            width: 2.5rem;
            height: 2.5rem;
            margin:0 auto;
            margin-top: -13px;
            -webkit-mask-image: url(/public/images/loginbottom.png);
            -webkit-mask-size:100% 100%;
            -webkit-mask-repeat: no-repeat;
            /*background: url(/public/images/new-logo.png) no-repeat;*/
            background-image: -webkit-linear-gradient(top, #d4f1ff,#929292);
            /*background-image: -webkit-linear-gradient(top,#c4c2c2, #929292);*/
            /*background-image: -webkit-linear-gradient(bottom, #929292,#c4c2c2);*/
            background-position: 0% 0rem;
            animation:mask 3s infinite 0s;
        }
        @keyframes mask{
            0%{
                background-position: 0% 0rem;
            }
            100%{
                background-position: 0% 2.5rem;
            }
        }
    }
    	.form{
    		width: 80%;
    		margin: 0 auto;
    	}
    	.el-input__inner{
    		padding: 30px 50px;
    		border-radius: 0px;
            background: #f6f6f6;
    	}
    	.item{
    		position: relative;
    		span{
	    		position: absolute;
	    		left: 4%;
	    		top: 18px;
	    		bottom: 0;
	    		display: inline-block;
	    		width: 25px;
	    		height: 25px;
	    		background-size: 100%;
	    		background-repeat: no-repeat;
                z-index: 9999998;
	    	}
    	}
    	
    	.item:nth-child(1) span{
    		background-image: url(/public/images/appuser.png);
    	}
    	.item:nth-child(2) span{
    		background-image: url(/public/images/apppassword.png);
    	}
    	.el-button{
    		width:100%;
			padding: 15px 5px;
			border-radius: 0;
			background: #009acb;
			border-color: #fff;
			color: #fff;
			font-size: 20px;
			font-weight: 600;
    	}
    	.el-button:focus{
    		border-color: #fff;
    		color: #fff;
    	}
        .el-input__inner:focus{
            border-color: #f3f3f3;
        }
        .el-form-item{
            margin-bottom: 7%;
        }
        @media (max-height: 480px) {
            .el-input__inner{
                padding: 9% 20%;
            }
            .webloginImg .topImg{
                margin-top: 8%;
            }
            .el-form-item{
                margin-bottom: 7%;
            }
            .item span{
                left: 6%;
                top: 30%;
                width: 8%;
            }
        }
        @media (max-device-width:1024px) and (min-device-width: 768px) {
                .el-input__inner{
                padding: 10% 20%;
                font-size: 28px;
            }
            .webloginImg{
                width: 86%;
            }
            .webloginImg .topImg{
                margin-top: 7%;
                margin-left: 12%;
            }
            .webloginImg .bottomImg{
                margin-left: 45%;
                margin-top: -27px;
            }
            .item span{
                left: 6%;
                top: 25%;
                width: 9%;
                height: 56%;
            }
            .el-form-item__error{
                font-size: 28px;
            }
            .webLogin .el-form-item{
                margin-bottom: 5%;
            }
        }
    }
</style>
