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
						<el-form :model="editValue" :rules="rules" ref="editValue" label-width="100px">
                            <template v-for="(item,key) in thread">
                                <el-form-item v-if="item[1]=='text'" :label="item[0]" :prop="key">
                                    <el-input :placeholder="item[2]" v-model="editValue[key]"></el-input>
                                </el-form-item>
                                <el-form-item v-else-if="item[1]=='file'" :label="item[0]" :prop="key">
                                    <file @return-shuju="getInfo" :shuju="item[3]" :editValue="editValue[key]"></file>
                                </el-form-item>
                                <el-form-item v-else-if="item[1]=='select'" :label="item[0]" :prop="key">
                                    <el-select  v-model="editValue[key]" :placeholder="item[2]">
                                        <el-option label="男" value="0"></el-option>
                                        <el-option label="女" value="1"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item v-else-if="item[1]=='date'" :label="item[0]" :prop="key">
                                    <inputDate @return-shuju="getInfo" :shuju="item[3]" :editValue="editValue[key]"></inputDate>
                                </el-form-item>
                            </template>
						</el-form>
					</div>
                    <div class="userOperate">
                        <el-button @click="resetForm('editValue')">取消</el-button>
                        <el-button class="btn_change" @click="submitForm('editValue')">保存</el-button>
                    </div>
				</form>
			</div>
</template>

<script>
import validate2 from '../../../utils/validate2.js'
import file from '../../public/inputFile.vue'
import inputDate from '../../public/inputDate.vue'
import move from '../../../directive/move.js'
export default {
    name: 'userEdit',
    props: {
        editValue: {},
        changeDataArr: {}
    },
    data () {
        return {
            user_id: '',
            thread: {
                name: ['用户名', 'text', '必填'],
                realname: ['真实姓名', 'text', ''],
                number: ['工号', 'text', '必填'],
                email: ['邮箱', 'text', '必填'],
                phone: ['电话', 'text', '请输入11位手机号(固话用-隔开)'],
                gender: ['性别', 'select', ''],
                birth_date: ['出生日期', 'date', '请选择出生日期', {name: 'birth_date'}],
                department: ['所属部门', 'text', ''],
                img: ['头像', 'file', '', {name: 'img'}]
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
                    var ret = this.$conversion(this.changeDataArr, this.editValue, 0)
                    this.$dataPost(this, 'user/' + ret.id, ret, true, false, true).then((response) => {
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
        // 获取关联数据
        getInfo (data) {
            this.editValue[data.name] = data.value
        }
    },
    components: {
        file,
        inputDate
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
