/*登录组件
* @description 
* @author 舒丹彤
* @date 2017/6/6
* */
<template>
    <div class="webLogin">
    	<div class="webloginImg">
            <div class="mainImg">
                <img src="/public/images/tea-tit.png" class="tit">
                <img src="/public/images/tea-sideOne.png" class="sideLeft side">
                <img src="/public/images/tea-sideTwo.png" class="sideRight side">
                <img src="/public/images/tea-seal.png" class="seal">
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
                    <el-form-item>
                            <el-button
                                @click="submitForm('ruleForm2')"
                                >登录</el-button>
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
                            this.setToast('cancel', '用户名或密码错误', '13em')
                        } else {
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
                    this.setToast('text', '请输入用户名密码', '13em')
                    return false
                }
            })
        },
        passTo () {
            this.submitForm('ruleForm2')
        },
        // 提示弹窗
        setToast (type, text, width = '7.6em') {
            this.$vux.toast.show({
                type: type,
                text: text,
                width: width,
                position: 'middle'
            })
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
        let timer = setTimeout(() => {
            $('.mainImg').css({backgroundImage: 'url(/public/images/hascolor.png)'})
        }, 200)
    }
}
</script>


<style lang='sass'>

@import "../../sass/function";

    .webLogin{
    	width: 100%;
    	height: 100%;
        background: url(/public/images/tea-bg.png);
		/*overflow: hidden;*/
        .webloginImg{
            width: 100%;
            height: 48%;
            margin-bottom: -3px;
            padding-top: 1.3rem;
            margin: 0 auto;
            .mainImg{
                width: 84%;
                height: 100%;
                background-image: url('/public/images/nocolor.png');
                background-repeat: no-repeat;
                background-size: 100%;
                background-position: 100% 100%;
                position: relative;
                margin: 0 auto;
            }
        .tit{
            width: 2rem;
            height: 4.5rem;
            position: absolute;
            bottom: 3.5rem;
            left: 3.2rem;
        }
        .side{
            display: inline-block;
            position: absolute;
            width: 3rem;
        }
        .sideLeft{
            left: -7%;
            bottom: 2%;
        }
        .sideRight{
            bottom: 5rem;
            right: -0.2rem;
        }
        .seal{
            position: absolute;
            bottom: 2%;
            right: -3%;
            width: 0.8rem;
            height: 0.8rem;
        }
    }

    	.form{
    		width: 80%;
    		margin: 0 auto;
    	}
    	.el-input__inner{
    		padding: 0.8rem 1.5rem;
    		border-radius: 0px;
            background: url('/public/images/formBg.png');
            border: 1px solid #a5733e;
    	}
        .el-form-item__content{
            width: 8rem;
            height: 1rem;
        }
    	.item{
    		position: relative;
    		span{
	    		position: absolute;
	    		left: 0.5rem;
	    		top: 0.5rem;
	    		bottom: 0;
	    		display: inline-block;
	    		width: 0.7rem;
	    		height: 0.8rem;
	    		background-size: 100%;
	    		background-repeat: no-repeat;
                z-index: 9999998;
	    	}
    	}
    	
    	.item:nth-child(1) span{
    		background-image: url(/public/images/tea-user.png);
    	}
    	.item:nth-child(2) span{
    		background-image: url(/public/images/tea-clock.png);
    	}
    	.el-button{
    		width:100%;
			padding: 0.38rem 0.41rem;
			border-radius: 0;
			background: url('/public/images/form-bg.png');
            border: 1px solid #a5733e;
			color: #fff;
            font-family: fz !important;
			font-size: 0.9rem;
			font-weight: 600;
            letter-spacing: 0.5rem;
    	}
    	.el-button:focus{
    		border-color: #fff;
    		color: #fff;
    	}
        .el-input__inner:focus{
            border-color: #a5733e;
        }
        .el-form-item:first-child{
            margin-bottom: 1rem;
        }
        .el-form-item{
            margin-bottom: 1.1rem;
        }
        .el-form-item__error{
            top: 1.55rem;
        }
 /*       @media (max-height: 480px) {
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
        }*/
    }
     @font-face{
            font-family: fz;
            src:url('../../sass/function/font.ttf');
        }
</style>
