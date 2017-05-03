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
								<el-input placeholder="必填" v-model="ruleForm.name"></el-input>
							</el-form-item>

							<el-form-item label="工号" prop="number">
								<el-input placeholder="必填" v-model="ruleForm.number"></el-input>
							</el-form-item>

							<el-form-item label="邮箱" prop="email">
								<el-input placeholder="必填" v-model="ruleForm.email"></el-input>
							</el-form-item>

              <el-form-item label="电话" prop="phone">
                <el-input placeholder="请输入11位手机号(固话用-隔开)" v-model="ruleForm.phone"></el-input>
              </el-form-item>

							<el-form-item label="姓名" prop="realname">
								<el-input placeholder="请输入真实姓名" v-model="ruleForm.realname"></el-input>
							</el-form-item>

							<el-form-item label="性别" prop="gender">
								<el-select  v-model="ruleForm.gender" placeholder="请选择性别">
									<el-option label="男" value="0"></el-option>
									<el-option label="女" value="1"></el-option>
								</el-select>
							</el-form-item>

							<el-form-item label="出生日期" prop="birth_date">
								<el-date-picker type="date" v-model="ruleForm.birth_date" placeholder="请选择出生日期">
								</el-date-picker>

							</el-form-item>
							<el-form-item label="所属部门" prop="department">
								<el-input v-model="ruleForm.department" placeholder="请输入所属部门"></el-input>
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
import validate2 from '../../../utils/validate2.js'
import file from '../../public/inputFile.vue'
export default {
    name: 'userEdit',
    data () {
        return {
            user_id: '',
            ruleForm: {
                name: '',
                number: '',
                email: '',
                realname: '',
                sex: '',
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
        // 取消事件
        cancelClick () {
            this.$parent.closeEditShow()
        },
        submitForm (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    axios.put('api/user/' + this.user_id, this.ruleForm).then((response) => {
                        this.$parent.showEdit()
                        if (response.data !== false) {
                            alert('修改成功')
                        } else {
                            alert('修改失败')
                        }
                    })
                } else {
                    console.log('验证不通过')
                    return false
                }
            })
        }
    },
    components: {
        file
    },
    mounted () {
        // 查询编辑数据
        axios.get('api/system/1/edit')
            .then((responce) => {
                this.user_id = responce.data.user.id
                this.ruleForm.name = responce.data.user.name
                this.ruleForm.realname = responce.data.user.realname
                this.ruleForm.email = responce.data.user.email
                this.ruleForm.phone = responce.data.user.phone
                this.ruleForm.department = responce.data.user.department
                this.ruleForm.birth_date = responce.data.user.birth_date
                this.ruleForm.number = responce.data.user.number
                this.ruleForm.gender = responce.data.user.gender
            })
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
