/**
 * @description:导航栏的问题反馈模块
 * @author 舒丹彤
 * @date 2017/4/25  
 *  
 */ 
<template>
	<div class="question">
		<div class="question_content">
			<contain-title :settitle="settitle">
			</contain-title>
			<div class="contain">
				<div class="thank">
					<span class="changeImg"></span>
					<section class="section">
						<h2 class="titleQu">您已经进入寻真溯源反馈系统，感谢您提出宝贵的意见！</h2>
						<article>
							<p>感谢您一直以来对寻真溯源的支持，我们非常需要您对我们的想法或者建议。希望您能告诉我们您对寻真溯源的使用感受，我们将会继续完善优化，改进不足。将寻真溯源做得越来越好！在此感谢！</p>
						</article>
					</section>
				</div>
				<div class="form">
					<el-form ref="form" :model="form" label-width="80px" :rules="rules">
						<h2 class="titleQu">您对溯源系统感觉不足的地方？</h2>
						<el-form-item prop="rate">
							<div class="check">
								<el-checkbox-group v-model="form.type" v-for="item in check">
							  		<el-checkbox :label="item.label" name="type"></el-checkbox>
								</el-checkbox-group>
							</div>
							<span>评分</span>
							<el-rate v-model="form.rate"></el-rate>
						</el-form-item>
						<h2 class="titleQu">我们还有哪些方面的不足</h2>
						<el-form-item>
						    <el-input type="textarea"></el-input>
						</el-form-item>
						<el-form-item prop="phone" class="contact">
							<span class="email">请您留下QQ或邮箱，便于寻真溯源与您联系</span>
						    <el-input v-model="form.phone" class="phone" size="small"></el-input>
						    <span class="enter">是否进入论坛讨论？</span>
						    <span class="enterTo">立即进入论坛</span>
						</el-form-item>
					    	<el-form-item>
					    		<div class="operate">
							    	<el-button type="primary" @click="submitForm('form')">提交</el-button>
							    	<el-button @click="resetForm('form')">取消</el-button>
						    	</div>
					    	</el-form-item>
					</el-form>
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
    name: 'question',
    data () {
        return {
            settitle: '问题反馈',
            form: {
                type: [],
                phone: '',
                rate: ''
            },
            check: [
                {label: '我更喜欢其他溯源系统'},
                {label: '信息不够准确'},
                {label: '没有提供想要的功能'},
                {label: '浏览器不兼容'},
                {label: '操作复杂'},
                {label: '响应速度慢'},
                {label: '使用途中经常卡顿'},
                {label: '其他'}
            ],
            rules: {
                phone: [
                    {message: '请输入联系方式', trigger: 'blur', type: 'number'}
                ],
                rate: [
                    {message: '请输入评分星级', trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        submitForm (formName) {
            console.log(111)
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!')
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        },
        resetForm (formName) {
            this.$refs[formName].resetFields()
        }
    },
    components: {
        ContainTitle,
        footerTop
    }

}
</script>

<style lang="sass">
.contain {
  width: 650px;
  margin: 68px auto;
}

.thank {
  // overflow: hidden;
  section {
    width: 88%;
    float: right;
  }
}

.titleQu {
  font-size: 18px;
  // color: 变量
}

.section article {
  font-size: 14px;
  text-indent: 6%;
}

.form {
  margin-top: 40px;
}

.el-checkbox-group {
  display: inline-block;
  width: 50%;
}

.check {
  width: 69%;
  display: inline-block;
}

.el-rate {
  display: inline-block;
  margin-left: 10px;
}

.question {
  height: 100%;
  overflow: hidden;
  padding-left: 10px;
}

.question_content {
  margin-top: 15px;
  overflow: scroll;
  height: 100%;
}

.phone {
  width: 28%;
  margin: 0 40px 0 10px;
}

.enter {
  font-size: 12px;
}

.operate {
  float: right;
  margin-top: 20px;
}

.copyright {
  text-align: center;
  font-size: 12px;
  color: #919191;
  margin-top: 150px;
  a {
    text-decoration: underline;
    color: #919191;
  }
}
.email{
	font-size: 12px;
	margin-left:-84px;
}
.changeImg{
	display: inline-block;
	width: 70px;
	height: 70px;
}
</style>
