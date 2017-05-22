/**
 * @description:用户编辑模块
 * @author 舒丹彤
 * @date 2017/4/27
 *  
 */ 
<template>
	<div class="newWrap">
		<form class="newForm">
			<i class="el-icon-circle-close" @click="closeClick"></i>
                <el-tabs class="tab">
                    <el-tab-pane label="编辑用户信息" :name="编辑用户信息">
						<el-form :model="editValue" :rules="rules" ref="editValue" label-width="100px">
                            <table>
                                <template v-for="(item,key) in thread">
                                    <tr class="tr1" v-if="item[1]=='text'">
                                        <td>
                                            <el-form-item  :label="item[0]" :prop="key">
                                                <el-input :placeholder="item[2]" v-model="editValue[key]"></el-input>
                                            </el-form-item>
                                        </td>
                                    </tr>
                                    <tr class="tr1" v-else-if="item[1]=='file'">
                                        <td>
                                            <el-form-item :label="item[0]" :prop="key">
                                                <file @return-shuju="getInfo" :shuju="item[3]" :editValue="editValue[key]"></file>
                                            </el-form-item>
                                        </td>
                                    </tr>
                                    <tr class="tr1" v-else-if="item[1]=='select'">
                                        <td>
                                            <el-form-item :label="item[0]" :prop="key">
                                                <el-select  v-model="editValue[key]" :placeholder="item[2]">
                                                    <el-option label="男" value="0"></el-option>
                                                    <el-option label="女" value="1"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </td>
                                    </tr>
                                    <tr class="tr1" v-else-if="item[1]=='date'">
                                        <td>
                                            <el-form-item :label="item[0]" :prop="key">
                                                <inputDate @return-shuju="getInfo" :shuju="item[3]" :editValue="editValue[key]"></inputDate>
                                            </el-form-item>
                                        </td>
                                    </tr>    
                                </template>
                            </table>
                                
						</el-form>
                    </el-tab-pane>
                </el-tabs>
                <div class="form-footer">
                    <el-button class="btn_change" @click="submitForm('editValue')">确定</el-button>
                    <el-button class="activecancel" @click="closeClick">取消</el-button>
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
                    {required: true, message: '请输入用户名'}, {validator: validate2.reCheck, url: 'user', id: this.editValue.id}
                ],
                number: [
                    {required: true, message: '请输入用户工号'}, {validator: validate2.reInteger}, {validator: validate2.reCheck, url: 'user', id: this.editValue.id, message: '用户工号已重复'}
                ],
                email: [
                    {required: true, message: '请输入正确的邮箱格式', type: 'email'}, {validator: validate2.reCheck, url: 'user', id: this.editValue.id, message: '用户邮箱已存在'}
                ],
                phone: [
                    {required: true, message: '请输入手机号码', validator: validate2.phone}
                ]
            }
        }
    },
    mixins: [move],
    mounted () {
        // console.log(this.editValue.img)
    },
    methods: {
        closeClick () {
            this.$parent.showEdit('false')
        },
        submitForm (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    var ret = this.$conversion(this.changeDataArr, this.editValue, 0)
                    this.$dataPost(this, 'user/' + ret.id, ret, true, false, true).then((response) => {
                        if (response.data !== 'false') {
                            this.$message({
                                message: '修改数据成功',
                                type: 'success'
                            })
                            this.$parent.showEdit('true')
                            this.$emit('updateValue', response.data)
                        } else {
                            this.$parent.showEdit('false')
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
@import "../../../../sass/public/pop.scss"
</style>
