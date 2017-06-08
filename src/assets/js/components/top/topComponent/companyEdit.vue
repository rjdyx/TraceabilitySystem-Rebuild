/**
 * @description:用户编辑模块
 * @author 舒丹彤
 * @date 2017/4/27
 *  
 */ 
<template>
	<div class="newWrap">
		<form class="newForm">
			<i class="closeBtn" @click="closeClick"></i>
            <el-tabs class="tab">
                <el-tab-pane label="编辑公司信息" :name="编辑公司信息">
				<el-form :model="editValue" :rules="rules" ref="editValue" label-width="100px">
                    <table>
                    <tbody></tbody>
                        <template v-for="(item,key) in thread">
                            <tr class="tr1" v-if="item[1]=='text'">
                                <td>
                                    <el-form-item  :label="item[0]" :prop="key">
                                        <el-input :placeholder="item[2]" v-model="editValue[key]" size="small" @keyup.enter.native="submitForm('editValue')"></el-input>
                                    </el-form-item>
                                </td>
                            </tr>
                            <tr class="tr1" v-else-if="item[1]=='file'">
                                <td>
                                    <el-form-item :label="item[0]" :prop="key">
                                        <file @return-shuju="getImg" :shuju="item[3]" :editValue="editValue[key]"></file>
                                    </el-form-item>
                                </td>
                            </tr>    
                        </template>
                    </table>
				</el-form>
            </el-tab-pane>
        </el-tabs>
        <div class="form-footer">
            <el-button class="btn_change" @click="submitForm('editValue')">保存</el-button>
            <el-button class="activecancel" @click="closeClick">取消</el-button>
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
    props: {
        editValue: {}
    },
    data () {
        return {
            id: '',
            checkNumber: [0],
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
                memo: ['备注', 'text', '']
            },
            rules: {
                name: [
                    {required: true, message: '请输入公司名称'}, {validator: validate2.reCheck, url: 'company', id: this.editValue.id}
                ],
                phone: [
                    {required: false, validator: validate2.phone}
                ],
                total_staff: [
                    {required: false, validator: validate2.reInteger}
                ]
            }
        }
    },
    mixins: [move],
    methods: {
        closeClick () {
            this.$parent.showEdit('false')
        },
        submitForm (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$dataPost(this, 'company/' + this.editValue.id, this.editValue, true, false, true).then((response) => {
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
@import "../../../../sass/public/pop.scss"
</style>
