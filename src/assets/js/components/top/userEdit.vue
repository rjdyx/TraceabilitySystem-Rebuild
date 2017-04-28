/**
 * @description:用户编辑模块
 * @author 舒丹彤
 * @date 2017/4/27
 *  
 */ 
<template>
	<div class="mask">
		<form class="formUser">
			<i class="closeIcon" @click="closeClick"></i>
				<h2 class="tab">编辑用户信息</h2>
					<div class="margin">
						<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
							<el-form-item label="用户名" prop="name">
								<el-input placeholder="必填"></el-input>
							</el-form-item>
							<el-form-item label="工号" prop="number">
								<el-input placeholder="必填"></el-input>
							</el-form-item>
							<el-form-item label="邮箱" prop="email">
								<el-input placeholder="必填"></el-input>
							</el-form-item>
							<el-form-item label="姓名">
								<el-input></el-input>
							</el-form-item>
							<el-form-item label="性别">
								<el-select placeholder="">
									<el-option label="女" value=""></el-option>
									<el-option label="女" value=""></el-option>
								</el-select>
							</el-form-item>
							<el-form-item label="用户类型">
								<el-select placeholder="">
									<el-option label="女" value=""></el-option>
									<el-option label="女" value=""></el-option>
								</el-select>
							</el-form-item>
							<el-form-item label="出生日期">
								<el-date-picker type="date">
								</el-date-picker>
							</el-form-item>
							<el-form-item label="所属部门">
								<el-input></el-input>
							</el-form-item>
							<el-form-item label="电话">
								<el-input placeholder="请输入11位手机号(固话用-隔开)"></el-input>
							</el-form-item>
							<file></file>
							<el-form-item class="userOperate">
							    <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
							    <el-button @click="resetForm('ruleForm')">取消</el-button>
							</el-form-item>
						</el-form>
					</div>
				</form>
			</div>
</template>


<script>
import validate2 from '../../utils/validate2.js'
import file from '../public/inputFile.vue'
export default {
    name: 'userEdit',
    data () {
        return {
            ruleForm: {
                name: '',
                number: '',
                email: '',
                realname: '',
                sex: '',
                user_type: '',
                date: '',
                department: '',
                phone: ''
            },
            rules: {
                name: [
                    {required: true, message: '请输入用户名', trigger: 'blur'}
                ],
                number: [
                    {required: true, message: '请输入用户工号', trigger: 'blur'}
                ],
                email: [
                    {required: true, message: '请输入邮箱', trigger: 'blur'}
                ],
                phone: [
                    {required: true, message: '请输入邮箱', trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        closeClick () {
            this.$parent.showEdit()
        },
        resetForm () {
            this.$parent.showEdit()
        },
        submitForm (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit')
                } else {
                    console.log('error')
                    return false
                }
            })
        }
    },
    components: {
        file
    }
}
</script>

<style lang="sass">
.mask {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  z-index: 2;
  text-align: center;
  overflow: hidden;
}

.formUser {
  width: 622px;
  position: absolute;
  background: #fff;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  box-shadow: 1px 1px 50px rgba(0, 0, 0, 0.3);
  padding-bottom: 30px;
}

.closeIcon {
  background: url(/public/images/close.png) no-repeat;
  background-position: -149px -31px;
  width: 30px;
  height: 30px;
  display: inline-block;
  position: absolute;
  right: -14px;
  top: -12px;
  &:hover {
    background-position: -180px -31px;
  }
}

.tab {
  text-align: left;
  font-weight: normal;
  padding: 20px 0 15px 20px;
  border-bottom: 2px solid #cecece;
  margin-bottom: 20px;
}

.margin {
  padding-right: 30px;
}

.el-select, .el-date-editor.el-input {
  float: left;
}

.userOperate {
  margin-top: 15px;
  float: right;
}
</style>
