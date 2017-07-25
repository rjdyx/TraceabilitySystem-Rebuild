/**
 * 权限按钮组件
 * @description 
 * @author 郭森林
 * @date 2017/07/24
 * 
 */
<template>
<div class="newWrap">
  <form class="newForm" >
    <i class="closeBtn" @click="closeClick"></i>
      <!-- tab选项卡 -->
      <el-tabs v-model="activeName" class="tab">
        <el-tab-pane>
          <!-- 表单 -->
        <el-form :model="tableForm" ref="tableForm" label-width="110px" class="demo-tableForm">
            <table>
                <tbody>
                <!-- 四级多选框组件 -->
                <tr class="tr1">
                    <td>
                        <permissionCheckbox name="checkeds" :id=id :type="type" @return-checkeds="allCheckeds"></permissionCheckbox>
                    </td>
                </tr>
            </tbody>
          </table>
         </el-form>
        </el-tab-pane>
        
      </el-tabs>
        <div class="form-footer">
            <el-button class="btn_change" @click="submitForm('tableForm')">确定</el-button>
            <el-button class="activecancel" @click="cancelClick">取消</el-button>
        </div>
    </form>
</div>
  
</template>

<script>
import permissionCheckbox from './permissionCheckbox.vue'
import vuexStore from '../../vuex/modules/isAllCheck.js'
import move from '../../directive/move.js'
export default {
    name: 'validator-example',
    components: {
        vuexStore,
        permissionCheckbox
    },
    props: {
        newComponent: {
            type: Array,
            default () {
                return []
            }
        },
        id: {}
    },
    data () {
        return {
            // 当前选中的标签页
            checkeds: [],
            type: 'company'
        }
    },
    mixins: [move],
    mounted () {
    },
    methods: {
        // 关闭表单事件
        closeClick () {
            this.successCallback()
        },
        // 取消事件
        cancelClick () {
            this.successCallback()
        },
        /**
        * 提交表单
        */
        submitForm (formName) {
            // 多选框 权限
            var com = this.newComponent[0]
            this.tableForm['checkeds'] = this.checkeds
            if (this.checkboxShow) {
                let allIdArr = []
                for (let key in this.checkeds) {
                    if (this.checkeds[key].length) {
                        this.checkeds[key].forEach(function (item) {
                            allIdArr.push(item)
                        })
                    }
                }
                this.tableForm['permission_ids'] = allIdArr
            }
            this.$refs[formName][0].validate((valid) => {
                if (valid) {
                    this.$dataPost(this, this.url, this.tableForm, com.hasImg, com.hiddenValue, false).then((response) => {
                        this.successCallback()
                        this.$emit('submitNew', response.data)
                    })
                } else {
                    return false
                }
            })
        },
        allCheckeds (data) {
            this.checkeds = data
        },
        // 新增成功调用方法
        successCallback () {
            this.$parent.closePermission()
        }
    }
}
</script>
<style lang="sass">
@import "../../../sass/public/pop.scss"
</style>
