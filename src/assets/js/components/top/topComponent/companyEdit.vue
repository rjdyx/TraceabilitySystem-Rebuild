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
				<h2 class="tab">编辑公司信息</h2>
					<div class="margin">
						<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">

							<el-form-item label="公司名称" prop="name">
								<el-input placeholder="必填" v-model="ruleForm.name"></el-input>
							</el-form-item>

							<el-form-item label="公司简称" prop="short_name">
								<el-input placeholder="" v-model="ruleForm.short_name"></el-input>
							</el-form-item>

							<el-form-item label="负责人/法人" prop="legal_person">
								<el-input placeholder="" v-model="ruleForm.legal_person"></el-input>
							</el-form-item>

              <el-form-item label="统一社会信用代码" prop="USCC">
                <el-input placeholder="" v-model="ruleForm.USCC"></el-input>
              </el-form-item>

							<el-form-item label="电话" prop="phone">
								<el-input placeholder="请输入11位手机号(固话用-隔开)" v-model="ruleForm.phone"></el-input>
							</el-form-item>

							<el-form-item label="传真" prop="fax">
								<el-input  v-model="ruleForm.fax" placeholder="">
								</el-input>
							</el-form-item>

							<el-form-item label="地址" prop="address">
								<el-input v-model="ruleForm.address" placeholder="">
								</el-input>
							</el-form-item>

							<el-form-item label="经营范围" prop="business_scope">
								<el-input v-model="ruleForm.business_scope" placeholder=""></el-input>
							</el-form-item>

              <el-form-item label="员工总数" prop="total_staff">
                <el-input v-model="ruleForm.total_staff" placeholder=""></el-input>
              </el-form-item>

              <el-form-item label="公司网站" prop="website">
                <el-input v-model="ruleForm.website" placeholder=""></el-input>
              </el-form-item>

              <el-form-item label="备注" prop="memo">
                <el-input v-model="ruleForm.memo" placeholder=""></el-input>
              </el-form-item>

              <el-form-item label="公司Logo" prop="logo">
              <file></file>
              </el-form-item>

              <el-form-item label="水印" prop="watermark">
              <file></file>
              </el-form-item>

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
            id: '',
            ruleForm: {
                name: '',
                short_name: '',
                legal_person: '',
                USCC: '',
                phone: '',
                fax: '',
                address: '',
                business_scope: '',
                total_staff: '',
                website: '',
                logo: '',
                watermark: '',
                memo: ''
            },
            rules: {
                name: [
                    {required: true, message: '请输入公司名称', trigger: 'blur'}
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
                    axios.put('api/company/' + this.id, this.ruleForm).then((response) => {
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
        axios.get('api/company/info')
            .then((responce) => {
                this.ruleForm.name = responce.data.name
                this.ruleForm.short_name = responce.data.short_name
                this.ruleForm.legal_person = responce.data.legal_person
                this.ruleForm.USCC = responce.data.USCC
                this.ruleForm.phone = responce.data.phone
                this.ruleForm.fax = responce.data.fax
                this.ruleForm.address = responce.data.address
                this.ruleForm.business_scope = responce.data.business_scope
                this.ruleForm.total_staff = responce.data.total_staff
                this.ruleForm.website = responce.data.website
                this.ruleForm.logo = responce.data.logo
                this.ruleForm.watermark = responce.data.watermark
                this.ruleForm.memo = responce.data.memo
                this.id = responce.data.id
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
  height:500px;
  overflow-y:scroll; overflow-x:scroll;
}

.el-select, .el-date-editor.el-input {
  float: left;
}

.userOperate {
  margin-top: 15px;
  float: right;
}
}
</style>
