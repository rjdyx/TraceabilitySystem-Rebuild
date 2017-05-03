<template>
	<div class="question">
		<div class="question_content">
			<contain-title :settitle="settitle">
			</contain-title>
			<div class="contain">
				<div class="thank">
					<span class="changeImg"></span>
					<section class="section">
						<h2>您已经进入寻真溯源反馈系统，感谢您提出宝贵的意见！</h2>
						<article>
							<p>感谢您一直以来对寻真溯源的支持，我们非常需要您对我们的想法或者建议。希望您能告诉我们您对寻真溯源的使用感受，我们将会继续完善优化，改进不足。将寻真溯源做得越来越好！在此感谢！</p>
						</article>
					</section>
				</div>
				<div class="form">
					<el-form ref="form" :model="form" label-width="80px" :rules="rules">
						<h2 class="title">您对溯源系统感觉不足的地方？</h2>
						<el-form-item prop="rate">
							<div class="check">
								<el-checkbox-group v-model="form.type" v-for="item in check">
							  		<el-checkbox :label="item.label" name="type"></el-checkbox>
								</el-checkbox-group>
							</div>
							<span>评分</span>
							<el-rate v-model="form.rate"></el-rate>
						</el-form-item>
						<h2 class="title">我们还有哪些方面的不足</h2>
						<el-form-item>
						    <el-input type="textarea"></el-input>
						</el-form-item>
						<el-form-item prop="phone">
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

.title {
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
  width: 40%;
  margin-right: 10px;
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
}
// .changeImg{
// 	background: url();
// }
</style>
