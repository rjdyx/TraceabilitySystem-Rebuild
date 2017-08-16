/**
 * 交流组件
 * @description 
 * @author 吴燕萍
 * @date 2017/8/16
 * 
 */


<template>
<div class="newWrap">
  <form class="newForm" >
    <i class="closeBtn" @click="closeClick"></i>
      <!-- tab选项卡 -->
    <el-tabs v-model="activeName" @tab-click="handleClick" class="tab">
        <el-tab-pane :label="item.value" :name="item.value" v-for="(item,i) in moreComponent" :key="i">
          <!-- 表单 -->
        <el-form :model="tableForm" :rules="rules" ref="tableForm" label-width="110px" class="demo-tableForm">
            <table>
                <tbody>
                <template v-for="subItem in item.components">
                    <!-- 文本框 -->
                    <tr class="tr1" v-if="subItem.type=='text'">
                        <td>
                            <el-form-item :label="subItem.label" :prop="subItem.name">
                                <el-input 
                                    :placeholder="subItem.placeholder"
                                    :disabled="subItem.disabled"
                                    v-model="tableForm[subItem.name]" 
                                    size="small"
                                    @keyup.enter.native="submitForm('tableForm')"
                                ></el-input>
                            </el-form-item>
                        </td> 
                    </tr>

                     <!-- 传组件 -->
                    <tr class="tr1" v-if="subItem.component && !subItem.hiddenSelect">
                        <td>
                            <el-form-item :label="subItem.label" :prop="subItem.name">
                                <!-- 其他类型 file，files，data，selectOther-->
                                <component 
                                    v-bind:is="subItem.component" 
                                    :shuju="subItem"
                                    :type="subItem.type"
                                    :range="subItem.range"
                                    @return-shuju="returnShuju"
                                ></component>
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
            <el-button class="btn_change" @click="submitForm('tableForm')">确定</el-button>
            <el-button class="activecancel" @click="cancelClick">取消</el-button>
        </div>
    </form>
</div>
</template>

<script>
import move from '../../directive/move.js'
export default {
    name: 'Communication',
    props: {
        moreComponent: {
            type: Array,
            default: []
        }
    },
    data () {
        let form = {}
        let _this = this
        this.moreComponent[0].components.forEach(function (item) {
            if (item.type === 'text') {
                form[item.name] = ''
            } else if (item.type === 'date') {
                form[item.name] = {}
            }
        })
        let rules = {}
        this.moreComponent[0].components.forEach((item) => {
            rules[item.name] = item.rule
        })
        return {
            // 当前选中的标签页
            activeName: '交流',
            tableForm: form,
            rules: rules,
            memuList: {},
            disabled: false,
            disabledV: false
        }
    },
    mixins: [move],
    mounted () {
    },
    methods: {
        handleClick (tab, event) {
            // this.$parent.changeNewTab(tab.$data.index)
        },
        // 关闭表单事件
        closeClick () {
            this.$parent.closeComShow()
        },
        // 取消事件
        cancelClick () {
            this.$parent.closeComShow()
        },
        // 返回InputTextSelect组件的数据
        returnShuju (data) {
            if (data.name === 'datetime') {
                this.tableForm[data.name] = this.$changeDateTime(data.value)
            } else {
                if (data.name === 'date') {
                    if (typeof (data.value) === 'string') {
                        this.tableForm[data.name] = data.value
                    } else {
                        this.tableForm[data.name] = this.$changeDateTime(data.value, 0)
                    }
                } else {
                    this.tableForm[data.name] = data.value
                }
            }
        },
        /**
        * 提交表单
        */
        submitForm (formName) {
            console.log(this.tableForm)
            this.$refs[formName][0].validate((valid) => {
                if (valid) {
                    console.log('chenggong')
                } else {
                    console.log('shibai')
                    return false
                }
                this.$parent.closeComShow()
            })
        }
    }
}
</script>
<style lang="sass">
@import "../../../sass/public/pop.scss";
</style>
