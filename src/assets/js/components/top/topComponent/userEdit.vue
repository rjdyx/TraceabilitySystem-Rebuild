/**
 * @description:用户编辑模块
 * @author 舒丹彤
 * @date 2017/4/27
 *  
 */ 
<template>
	<div class="newWrap">
		<form class="newForm">
			<i class="closeIcon" @click="closeClick"></i>
				<h2 class="el-tabs__header tab">编辑用户信息</h2>
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

							<file class="userFile"></file>
						</el-form>
					</div>
                    <div class="userOperate">
                        <el-button @click="resetForm('ruleForm')">取消</el-button>
                        <el-button class="btn_change" @click="submitForm('ruleForm')">保存</el-button>
                    </div>
				</form>
			</div>
</template>

<script>
import validate2 from '../../../utils/validate2.js'
import file from '../../public/inputFile.vue'
import move from '../../../directive/move.js'
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
                phone: '',
                gender: ''
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
                    {required: true, message: '请输入手机号码', trigger: 'blur'}
                ]
            }
        }
    },
    mixins: [move],
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
    }
}
</script>

<style lang="sass">
.newWrap {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    top: 0;
    left: 0;
    z-index: 2;
    text-align: center;
    overflow: hidden;
        .newForm {
            width: 622px;
            position: absolute;
            background: #fff;
            left: 50%;
            top: 50%;
            box-shadow: 1px 1px 50px rgba(0, 0, 0, 0.3);
            padding: 0px 3px 30px 3px;
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
                .el-tabs__header{
                    cursor: move;
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
                    overflow: auto;
                    height: 447px;
                }
                .userOperate {
                    margin-top: 15px;
                    width: 100%;
                    border-top: 2px solid #cecece;
                    button{
                        float: right;
                        margin: 13px 13px 0 0;
                    }
                }
                .userFile{
                    margin-left: -202px;
                }
            }
    .el-select, .el-date-editor.el-input {
         float: left;
    }
    .btn_change{
        color: #fff;
    }
}
</style>
