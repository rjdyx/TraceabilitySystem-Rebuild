 /**
 * @description:导航栏的问题反馈模块
 * @author 舒丹彤
 * @date 2017/4/25  
 *  
 */ 
<template>
	<div class="question">
		<div class="question_content">
			<contain-title :settitle="settitle" class="fonts">
			</contain-title>
			<div class="contain">
				<div class="thank">
					<span class="changeImg"></span>
					<section class="section">
						<h2 class="qu_title">您已经进入寻真溯源反馈系统，感谢您提出宝贵的意见！</h2>
						<article>
							<p class="explain">感谢您一直以来对寻真溯源的支持，我们非常需要您对我们的想法或者建议。希望您能告诉我们您对寻真溯源的使用感受，我们将会继续完善优化，改进不足。将寻真溯源做得越来越好！在此感谢！</p>
						</article>
					</section>
				</div>
				<div class="form">
					<el-form ref="form" :model="form" label-width="80px" :rules="rules">
						<h2 class="titleQu">您对溯源系统感觉不足的地方？</h2>
						<el-form-item>
							<div class="check">
								<el-checkbox-group v-model="form.lack" v-for="item in check" prop="lack" @change="checkedChange">
							  		<el-checkbox :label="item"></el-checkbox>
								</el-checkbox-group>
							</div>
							<span>评分</span>
							<el-rate v-model="form.grade" ></el-rate>
						</el-form-item>

						<h2 class="titleQu">我们还有哪些方面的不足</h2>
						<el-form-item  prop="content">
						    <el-input type="textarea" v-model="form.content"></el-input>
						</el-form-item>
						<el-form-item prop="contact" class="contact">

							<span class="email">请您留下QQ或邮箱，便于寻真溯源与您联系</span>
						    <el-input v-model="form.contact" class="phone" size="small"></el-input>
						    <span class="enter">是否进入论坛讨论？</span>
						    <span class="enterTo">立即进入论坛</span>
						</el-form-item>
					    	<el-form-item>
					    		<div class="operate">
							    	<el-button class="btn_change" @click="submitForm('form')">提交</el-button>
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
import footerTop from './topComponent/footer.vue'
import {mapActions} from 'vuex'
export default {
    name: 'question',
    data () {
        return {
            settitle: '问题反馈',
            form: {
                lack: [],
                contact: '',
                grade: 0,
                content: ''
            },
            check: ['我更喜欢其他溯源系统', '信息不够准确', '没有提供想要的功能', '浏览器不兼容', '操作复杂', '响应速度慢', '使用途中经常卡顿', '其他'
            ],
            rules: {
                grade: [
                    {message: '请输入评分星级', trigger: 'blur', type: 'number'}
                ],
                contact: [
                    {message: '请输入联系方式', trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        ...mapActions([
            'change_siderBar'
        ]),
        submitForm (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    axios.post('api/feedback', this.form).then((response) => {
                        this.form.lack = []
                        this.form.contact = ''
                        this.form.grade = 0
                        this.form.content = ''
                        if (response.data !== false) {
                            alert('反馈成功')
                        } else {
                            alert('反馈失败')
                        }
                    })
                } else {
                    console.log('验证不通过')
                    return false
                }
            })
        },
        resetForm (formName) {
            this.$refs[formName].resetFields()
        },
        checkedChange (value) {
            // console.log(value)
        }
    },
    components: {
        ContainTitle,
        footerTop
    },
    mounted () {
        this.change_siderBar(true)
    }

}
</script>

<style lang="sass">
.question {
	height: 100%;
	overflow: hidden;
	padding-left: 10px;
	.question_content {
	  	margin-top: 15px;
	  	overflow: scroll;
        padding-right: 10px;
	  	.fonts{
	  		font-size: 20px;
	  	}
	  	height: 100%;
	  	.contain {
		  	width: 650px;
		  	margin: 68px auto 0px; 
		  	thank {
		  		overflow: hidden;
			  	section {
			    	width: 88%;
			    	float: right;
			    	article {
					  	font-size: 14px;
					  	text-indent: 6%;
					}
			  	}
			}
			.form {
			  	margin-top: 40px;
			  	.check {
				  	width: 69%;
				  	display: inline-block;
				  	.el-checkbox-group {
					  	display: inline-block;
					  	width: 50%;
					}
				}
				.el-rate {
				  	display: inline-block;
				  	margin-left: 10px;
				}	
				.phone {
				   	width: 20%;   
				   	margin: 0px 10px 0 10px;
				}
				.email,.enter{
					font-size: 12px;
				}
				.operate {
				  	float: right;
				  	margin-top: 20px;
				  	.btn_change{
					  	color: #fff;
					}

				}
			}
		}
	}

.copyright {
  	margin-top: 66px;
}

.changeImg{
  	display: inline-block;
  	margin-right: 10px;
  	width: 71px;
  	height: 70px;
  	float: left;
}	
.el-form-item__content{
  	margin-left: 0px !important;
}
.singelCheck{
  	margin-left: 30px;
}
.qu_title{
  	margin-bottom: 10px;
}
}
</style>
