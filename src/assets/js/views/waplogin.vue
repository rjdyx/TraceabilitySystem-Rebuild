/*登录组件
* @description 
* @author 舒丹彤
* @date 2017/6/6
* */
<template>
    <div class="webLogin">
    	<div class="webloginImg">
            <img src="/public/images/logintop.png" class="topImg">
        </div>

    	<div class="form" @click="hideLogo">
    			<el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
    				<el-form-item prop="name" class="item">
    					<el-input type="text"
    					    v-model="ruleForm2.name" 
    					    auto-complete="off" 
    					    placeholder="请输入用户名" 
    					    @keyup.enter.native="passTo">
    					</el-input>
    				    <span></span>
    				</el-form-item>
    				<el-form-item prop="password" class="item">
    					<el-input type="password" 
    					    v-model="ruleForm2.password" 
    					    auto-complete="off"
    				        placeholder="请输入密码"
    				        @keyup.enter.native="passTo">
    				    </el-input>
    				    <span></span>
    				</el-form-item>
    				<el-form-item>
    					<el-button @click="submitForm('ruleForm2')" ref="btn">{{loginBtn}}</el-button>
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
                    console.log(this.$refs.btn.html)
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
        },
        hideLogo () {
            this.showLogo = false
        }
    }
}
</script>


<style lang='sass'>

@import "../../sass/function";

    .webLogin{
    	width: 92%;
    	height: 254px;
    	background: #009acb;
		overflow: hidden;
        .webloginImg{
        .topImg{
            width: 100px;
            height: 100px;
            display: inline-block;
        }
    }
    	.form{
    		width: 80%;
    		margin: 0 auto;
    	}
    	.el-input__inner{
    		padding: 25px 18px;
    		border-radius: 0px;
    	}
    	.item{
    		position: relative;
    		span{
	    		position: absolute;
	    		right: 10px;
	    		top: 13px;
	    		bottom: 0;
	    		display: inline-block;
	    		width: 25px;
	    		height: 25px;
	    		background-size: 100%;
	    		background-repeat: no-repeat;
	    	}
    	}
    	
    	.item:nth-child(1) span{
    		background-image: url(/public/images/user.png);
    	}
    	.item:nth-child(2) span{
    		background-image: url(/public/images/password.png);
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
    }
</style>
