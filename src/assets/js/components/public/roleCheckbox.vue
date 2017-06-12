/**
 * 角色单选组件
 * @description 
 * @author 郭森林
 * @date 2017/5/04
 * 
 */


<template>
<div class="newWrap">
  <form class="newForm roleCheckbox">
    <i class="closeBtn" @click="closeClick"></i>
      <!-- tab选项卡 -->
    <el-tabs v-model="activeName" >
        <el-tab-pane label="权限管理" name="first">
          <!-- 表单 -->
            <el-form ref="form" :model="form" label-width="110px" class="demo-editForm">
            <table>
                <tbody>
                    <template>
                        <tr class="tr1"><td><i style="color:#55BBA6;margin-left: 40px;">* 选择用户关联的角色</i></td></tr>
                        <br>
                        <!-- 下拉框 -->
                        <tr class="tr1"> 
                            <td>
                                <el-form-item label="权限角色" prop="role_id">
                                  <el-select v-model="form.value" size="small">
                                    <el-option 
                                        v-for="option in options" 
                                        :label="option.name" 
                                        :value="option.id" 
                                        :key="option.id"
                                        size="small"></el-option>
                                  </el-select>
                                </el-form-item>
                            </td>
                        </tr>
                    </template>
                </tbody>
          </table>
         </el-form>
        </el-tab-pane>
    </el-tabs>
    <div class="form-footer">
        <el-button class="btn_change"  @click="submitForm">确定</el-button>
        <el-button class="activecancel" @click="cancelClick">取消</el-button>
    </div>
    </form>
</div>
</template>

<script>
import move from '../../directive/move.js'
export default {
    name: 'validator-example',
    components: {
    },
    props: {
        rowId: ''
    },
    data () {
        return {
            activeName: 'first',
            options: [],
            form: {
                value: null
            }
        }
    },
    mixins: [move],
    mounted () {
        // 全部数据
        axios.get('api/role/company/' + this.rowId)
            .then((responce) => {
                this.options = responce.data
            })
        // 默认选中数据
        axios.get('api/role/user/' + this.rowId)
            .then((responce) => {
                if (responce.data.role_id !== undefined && responce.data.role_id !== null) {
                    this.form.value = responce.data.role_id
                }
            })
    },
    methods: {
        // 关闭表单事件
        closeClick () {
            this.$parent.closeRoleShow()
        },
        // 取消事件
        cancelClick () {
            this.$parent.closeRoleShow()
        },
      /**
        * 提交表单
        */
        submitForm (formName) {
            var arr = {role_id: this.form.value}
            axios.post('api/role/user/' + this.rowId, arr)
                .then((responce) => {
                    this.$parent.closeRoleShow()
                    if (responce.data !== false) {
                        alert('编辑权限成功')
                    } else {
                        alert('编辑权限失败')
                    }
                })
        }
    }
}
</script>
<style lang="sass">
@import "../../../sass/public/pop.scss";
.newWrap{
    .roleCheckbox{ 
        height:318px;
        .el-tabs{
            height:60%;
        }
    }
}
    
</style>
