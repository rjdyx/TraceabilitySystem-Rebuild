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
				<el-form :model="editValue" :rules="rules" ref="editValue" label-width="100px">
                    <template v-for="(item,key) in thread">
                        <el-form-item v-if="item[1]=='text'" :label="item[0]" :prop="key">
                            <el-input :placeholder="item[2]" v-model="editValue[key]"></el-input>
                        </el-form-item>
                        <el-form-item v-else-if="item[1]=='file'" :label="item[0]" :prop="key">
                            <file @return-shuju="getImg" :shuju="item[3]" :editValue="editValue[key]"></file>
                        </el-form-item>
                    </template>
                    <el-form-item class="userOperate">
                        <el-button type="primary" @click="submitForm('editValue')">保存</el-button>
                        <el-button @click="resetForm('editValue')">取消</el-button>
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
    props: {
        editValue: {}
    },
    data () {
        return {
            id: '',
            thread: {
                name: ['公司名称', 'text', '必填'],
                short_name: ['公司简称', 'text', ''],
                legal_person: ['负责人/法人', 'text', ''],
                USCC: ['统一社会信用代码', 'text', ''],
                phone: ['电话', 'text', '请输入11位手机号(固话用-隔开)'],
                fax: ['传真', 'text', ''],
                address: ['公司地址', 'text', ''],
                business_scope: ['经营范围', 'text', ''],
                total_staff: ['员工总数', 'text', ''],
                website: ['公司网站', 'text', ''],
                logo: ['公司Logo', 'file', '', {name: 'logo'}],
                watermark: ['水印', 'file', '', {name: 'watermark'}],
                memo: ['公司简称', 'text', '']
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
                    this.$dataPost(this, 'company/' + this.editValue.id, this.editValue, true, false, true).then((response) => {
                        this.$parent.showEdit()
                        if (response.data !== 'false') {
                            this.$message({
                                message: '修改数据成功',
                                type: 'success'
                            })
                            this.$emit('updateValue', response.data)
                        } else {
                            this.$message.error('修改数据失败')
                        }
                    })
                } else {
                    return false
                }
            })
        },
        // 获取图片
        getImg (data) {
            this.editValue[data.name] = data.value
        }
    },
    components: {
        file
    },
    mounted () {
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
