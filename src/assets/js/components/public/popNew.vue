/**
 * 新建按钮组件
 * @description 
 * @author 吴燕萍
 * @date 2017/3/21
 * 
 */


<template>
<div class="newWrap">
  <form class="newForm" >
    <i class="closeBtn" @click="closeClick"></i>
      <!-- tab选项卡 -->
      <!-- <h4>{{newComponent[0].tab}}</h4> -->
      <el-tabs v-model="activeName" @tab-click="handleClick" class="tab">
        <el-tab-pane :label="item.tab" :name="item.tab" v-for="(item,i) in newComponent" :key="i">
          <!-- 表单 -->
        <el-form :model="tableForm" :rules="rules" ref="tableForm" label-width="110px" class="demo-tableForm">
            <table>
                <tbody>
                <template v-for="subItem in item.components">

                    <!-- 文本框 -->
                    <tr class="tr1" v-if="subItem.type=='text' && !subItem.hiddenSelect">
                        <td v-if="!subItem.consignHidden">
                            <el-form-item :label="subItem.label" :prop="subItem.name">
                                <el-input 
                                    :placeholder="subItem.placeholder" 
                                    v-model="tableForm[subItem.name]" 
                                    size="small"
                                    @keyup.enter.native="submitForm('tableForm')"
                                ></el-input>
                            </el-form-item>
                        </td> 
                    </tr>

                    <!-- 下拉框 -->
                    <tr class="tr1" v-else-if="subItem.type=='select'">
                        <td v-if="!subItem.hiddenSelect">
                            <el-form-item :label="subItem.label" :prop="subItem.name">
                                <el-select v-model="tableForm[subItem.name]" :placeholder="subItem.placeholder" size="small"
                                    @change="getSelectId(subItem,tableForm[subItem.name])">
                                    <el-option 
                                        v-for="option in subItem.options" 
                                        :label="option.label" 
                                        :value="option.value" 
                                        :key="option.label + option.value" 
                                        size="small">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </td>
                    </tr>

                    <!-- 多行文本框  -->
                    <tr class="tr1" v-else-if="subItem.type=='textarea' && !subItem.hiddenSelect">
                        <td>
                            <el-form-item :label="subItem.label" :prop="subItem.name">
                                <el-input 
                                    :placeholder="subItem.placeholder" 
                                    type="textarea" 
                                    v-model="tableForm[subItem.name]" size="small"
                                    @keyup.enter.native="submitForm('tableForm')"></el-input>
                            </el-form-item>
                        </td>
                    </tr>
                    <!-- 表格  -->
                    <tr class="tr2" v-else-if="subItem.type=='table' && !subItem.hiddenSelect">
                        <td>
                            <el-form-item :label="subItem.label" :prop="subItem.name" style="margin-left:-110px">
                                <el-table :data="subItem.tableVal" class="table2"  @selection-change="handleSelectionChange">
                                    <!-- checkbox -->
                                    <el-table-column width="50" type="selection">
                                    </el-table-column> 
                                    <el-table-column width="60" label="序号" type="index" id="test_id">
                                    </el-table-column>
                                    <template v-for="(item,index) in subItem.theads"> 
                                        <template>
                                            <el-table-column 
                                                :label="item" 
                                                :prop="subItem.protos[index]"
                                                show-overflow-tooltip>
                                            </el-table-column>
                                        </template>
                                    </template>
                                </el-table>
                            </el-form-item>
                        </td>
                    </tr>
                     <!-- 传组件 -->
                    <tr class="tr1" v-else-if="subItem.component && !subItem.hiddenSelect">
                        <td>
                            <el-form-item :label="subItem.label" :prop="subItem.name">
                                <!-- 控件类型是textelect -->
                                <component 
                                    v-if="subItem.type=='textSelect'"
                                    v-bind:is="subItem.component" 
                                    :shuju="subItem"
                                    :inputEditValue="tableForm[subItem.name]"
                                    :selectEditValue="tableForm['unit']"
                                    :disabled="disabled"
                                    :disabledV="disabledV"
                                    :allowance="allowance"
                                    @return-shuju="returnShuju"
                                ></component>
                                <!-- 其他类型 -->
                                <component 
                                    v-else
                                    v-bind:is="subItem.component" 
                                    :shuju="subItem"
                                    :range="subItem.range"
                                    @return-shuju="returnShuju"
                                ></component>
                            </el-form-item>
                        </td>
                    </tr>
                </template>

                 <!-- 传二级多选框组件 -->
                <tr class="tr1" v-if="checkboxShow && !subItem.hiddenSelect">
                    <td>
                        <ul class="ul">
                            <li>
                                <allCheck v-for="(itemList,key) in memuList" 
                                :lists="itemList" 
                                :checkeds="checkeds[key]"
                                :name="key" 
                                :key="key"
                                @return-isAllcheck="allChange" 
                                @return-checked="allChecked">
                                </allCheck>
                            </li>
                        </ul>
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
import AllCheck from './allCheck.vue'
import vuexStore from '../../vuex/modules/isAllCheck.js'
import move from '../../directive/move.js'
export default {
    name: 'validator-example',
    // validator: null,
    components: {
        // ActiveBox,
        AllCheck,
        vuexStore
    },
    props: {
        type: '',
        newComponent: {
            type: Array,
            default () {
                return []
            }
        },
        tab: {
            type: ''
        },
        url: '',
        routeId: '',
        checkboxShow: false
    },
    data () {
        let form = {}
        let _this = this
        this.newComponent[0].components.forEach(function (item) {
            if (item.type === 'text' || item.type === 'textarea' || item.type === 'file') {
                form[item.name] = ''
            } else if (item.type === 'select') {
                if (item.options[0] instanceof Object) {
                    form[item.name] = item.options[0].value
                } else {
                    form[item.name] = ''
                }
            } else if (item.type === 'date') {
                form[item.name] = {}
            } else if (item.type === 'textSelect') {
                form[item.name] = ''
                form['unit'] = item.options[0].value
            }
        })
        let rules = {}
        this.newComponent[0].components.forEach(function (item) {
            rules[item.name] = item.rule
        })
        return {
            // 当前选中的标签页
            activeName: this.newComponent[0].tab,
            tableForm: form,
            rules: rules,
            allowance: 0,
            ids: [],
            ids2: [],
            // 判断鼠标是否点击
            isMouseClick: false,
            trHidden: false,
            dmL: 0,
            dmT: 0,
            memuList: {},
            checkeds: [],
            disabled: false,
            disabledV: false
        }
    },
    mixins: [move],
    mounted () {
        if (this.checkboxShow) {
            // 全部数据
            axios.get(this.$adminUrl('company/permission'))
                .then((responce) => {
                    this.memuList = responce.data
                })
        }
        if (this.url === 'planta' || this.url === 'farmcd' || this.url === 'area' || this.url === 'cultivate') {
            this.disabled = true
            this.disabledV = true
        }
    },
    methods: {
        handleClick (tab, event) {
            // this.$parent.changeNewTab(tab.$data.index)
        },
        // 返回InputTextSelect组件的数据
        returnShuju (data) {
            if (data.name === 'end_date') {
                if (data.value !== undefined && data.value !== '') {
                    this.newComponent[0].components[0].rule[1]['lastDate'] = false
                } else {
                    this.newComponent[0].components[0].rule[1]['lastDate'] = true
                }
            }
            this.tableForm[data.name] = data.value
        },
        // 关闭表单事件
        closeClick () {
            this.$parent.closeNewShow()
        },
        // 取消事件
        cancelClick () {
            this.$parent.closeNewShow()
        },
      /**
        * 提交表单
        */
        submitForm (formName) {
            // 多选框 权限
            var com = this.newComponent[0]
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
                    alert('submit')
                    this.$parent.closeNewShow()
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        },
        allChecked (data) {
        },
        allChange (data = []) {
        },
        // 选择框
        handleSelectionChange (val) {
        },
        // 选择框关联
        getSelectId (subItem, val) {
        },
        setUnit (val) {
            if (val === 'fertilize') {
                this.tableForm['unit'] = 'kg/亩'
            } else if (val === 'spray') {
                this.tableForm['unit'] = 'ml/亩'
            } else if (val === 'harvest') {
                this.tableForm['unit'] = 'kg'
            }
        },
        // 新增成功调用方法
        successCallback () {
        }
    }
}
</script>
<style lang="sass">
@import "../../../sass/public/pop.scss"
</style>
