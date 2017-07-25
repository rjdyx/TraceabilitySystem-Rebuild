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

                    <!-- 下拉框单选 -->
                    <tr class="tr1 trSelect" v-else-if="subItem.type=='select'">
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
                    
                    <!-- 下拉框多选 -->
                    <tr class="tr1 trSelect" v-else-if="subItem.type=='selectMore'">
                        <td v-if="!subItem.hiddenSelect">
                            <el-form-item :label="subItem.label" :prop="subItem.name">
                                <el-select multiple  v-model="tableForm[subItem.name]" :placeholder="subItem.placeholder" size="small"
                                    @change="getSelectMoreId(subItem,tableForm[subItem.name])">
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
                                <!-- 控件类型是textSelect -->
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
                                <!-- 控件类型是selectOther -->
                                <component 
                                    v-else-if="subItem.type=='selectOther'"
                                    v-bind:is="subItem.component" 
                                    :shuju="subItem"
                                    :selectEditValue="tableForm[subItem.name]"
                                    :type="news"
                                    :categoryString="subItem.categoryString"
                                    :disabled="disabled"
                                    @returnOther="getOther"
                                ></component>
                                <!-- 其他类型 file，files，data，selectOther-->
                                <component 
                                    v-else
                                    v-bind:is="subItem.component" 
                                    :shuju="subItem"
                                    :type="subItem.type"
                                    :range="subItem.range"
                                    @return-shuju="returnShuju"
                                    @setPicArr="getPicArr"
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

                <!-- 四级多选框组件 -->
                <tr class="tr1" v-if="permissionShow">
                    <td>
                        <permissionCheckbox name="checkeds" :permissionCompany="permissionCompany" @return-checkeds="allCheckeds"></permissionCheckbox>
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
import AllCheck from './allCheck.vue'
import vuexStore from '../../vuex/modules/isAllCheck.js'
import move from '../../directive/move.js'
export default {
    name: 'validator-example',
    components: {
        AllCheck,
        vuexStore,
        permissionCheckbox
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
            } else if (item.type === 'select' || item.type === 'selectText' || item.type === 'selectOther') {
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
            } else if (item.type === 'selectMore') {
                form[item.name] = []
            }
        })
        let rules = {}
        this.newComponent[0].components.forEach((item) => {
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
            disabledV: false,
            num: 1,
            permissionCompany: this.newComponent[0].permissionCompany,
            permissionShow: this.newComponent[0].permissionShow,
            news: 'new',
            operateArr1: ['sunning', 'cooling'],
            operateArr2: ['make_green', 'kill_out', 'knead_nori', 'deblock', 'dry', 'filtrate', 'refiring']
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
        if (this.url === 'planta' || this.url === 'cultivate') {
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
            if (this.url.indexOf('grow') !== -1) {
                if (data.name === 'imgs') {
                    if (data.value !== 'del') {
                        this.tableForm['img'] = '1'
                    } else {
                        this.tableForm['img'] = ''
                    }
                }
            }
            if (this.operateArr1.indexOf(data.name) !== -1) {
                this.tableForm[data.name + '_start_date'] = this.$changeDateTime(data.value[0])
                this.tableForm[data.name + '_end_date'] = this.$changeDateTime(data.value[1])
            } else if (this.operateArr2.indexOf(data.name) !== -1) {
                this.tableForm[data.name + '_date'] = this.$changeDateTime(data.value)
            }
            this.tableForm[data.name] = data.value
        },
        getOther (data) {
            if (data[1].value !== '') {
                this.tableForm[data[0].name] = data[0].value
                this.tableForm[data[1].name] = data[1].value
            } else {
                if (data[0].value !== '其他') {
                    this.tableForm[data[0].name] = data[0].value
                    this.tableForm[data[1].name] = ''
                } else {
                    this.tableForm[data[0].name] = ''
                    this.tableForm[data[1].name] = ''
                }
            }
        },
        // 关闭表单事件
        closeClick () {
            this.successCallback()
        },
        // 取消事件
        cancelClick () {
            this.successCallback()
        },
        // 获取多图片数组
        getPicArr (arr) {
            for (let item of Object.keys(arr)) {
                this.tableForm[item] = arr[item]
            }
        },
        /**
        * 提交表单
        */
        submitForm (formName) {
            var com = this.newComponent[0]
            // 判断是否须添加公司id
            if (com.urlid !== undefined) {
                this.tableForm[com.urlid] = this.routeId
            }
            // 多选框 权限
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
            // 特殊处理
            let check = this.$specialProcess(this.url, this.tableForm)
            if (check !== undefined) {
                if (check['result'] === 'false') {
                    this.$message(check['message'])
                    return false
                }
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
        allChecked (data) {
        },
        allCheckeds (data) {
            this.checkeds = data
        },
        allChange (data = []) {
        },
        // 选择框
        handleSelectionChange (val) {
        },
        // 选择框关联
        getSelectId (subItem, val) {
            var name = subItem.name
            var assoc = subItem.assoc
            var com = this.newComponent[0].components
            var number = subItem.selectNumber
            if (number !== undefined && number !== '') {
                var state = false
                var seed = ''
                var seed2 = ''
                for (let k in number) {
                    if (k !== val) {
                        state = true
                        seed = 'seed'
                        seed2 = ['seed']
                    } else {
                        state = false
                        seed = ''
                        seed2 = []
                    }
                    for (let k2 in number[k]) {
                        com[number[k][k2]].hiddenSelect = state
                        if (com[number[k][k2]].type === 'table') {
                            this.tableForm[com[number[k][k2]].valueId] = seed2
                        }
                        if (com[number[k][k2]].type === 'select') {
                            this.tableForm[com[number[k][k2]].value] = seed
                        }
                        if (com[number[k][k2]].type === 'text' || com[number[k][k2]].type === 'textSelect') {
                            this.tableForm[com[number[k][k2]].value] = seed
                        }
                    }
                }
                if (number[val] !== undefined) {
                    for (let k3 in number[val]) {
                        com[number[val][k3]].hiddenSelect = false
                    }
                }
            }
            if (assoc !== undefined) {
                if (subItem.getType === 'array') {
                    this.tableForm[subItem.arrName] = []
                } else {
                    this.tableForm[subItem.arrName] = ''
                }
                this.getAssoc({name: name, value: val, position: subItem.position, selectField: subItem.selectField, table: subItem.table})
            } else if (name === 'pid' || name === 'plantation_id') {
                if (val !== '') {
                    let params = {id: val}
                    axios.get(this.$adminUrl(this.url + '/getArea'), {params: params}).then((responce) => {
                        if (responce.data['num'] === 0) {
                            this.allowance = -1
                        } else {
                            this.allowance = responce.data['num']
                        }
                        this.tableForm['unit'] = responce.data['unit']
                        let nc = this.newComponent[0]
                        this.disabledV = false
                        nc.components[nc.limit].rule[1]['getMax'] = responce.data['num']
                        nc.components[nc.limit].rule[1]['getMessage'] = nc.getMessage
                    })
                } else {
                    this.tableForm['unit'] = '亩'
                    this.allowance = 0
                    this.disabledV = true
                }
            }
        },
        // 下拉框选择多数组关联
        getSelectMoreId (subItem, val) {
            var com = this.newComponent[0].components
            var number = subItem.selectNumber
            if (number !== undefined && number !== '') {
                for (let k in number) {
                    if (val.indexOf(k) !== -1) {
                        for (let k2 in number[k]) {
                            com[number[k][k2]].hiddenSelect = false
                        }
                    } else {
                        for (let k2 in number[k]) {
                            com[number[k][k2]].hiddenSelect = true
                            this.tableForm[com[number[k][k2]].name] = ''
                        }
                    }
                }
            }
        },
        // 新增成功调用方法
        successCallback () {
            this.$parent.closeNewShow()
            var com = this.newComponent[0]
            if (com.type === 'assoc' || com.type === 'selectAssoc') {
                for (let k in com.components) {
                    if (com.components[k].hiddenSelect !== undefined) {
                        com.components[k].hiddenSelect = true
                    }
                }
            }
        },
        // 获取关联数据
        getAssoc (data) {
            var com = this.newComponent[0]
            if (data.value !== '') {
                let params = {'table': data.table, 'name': data.name, 'id': data.value}
                this.$dataGet(this, '/util/assoc', params)
                    .then((responce) => {
                        let arr = []
                        if (responce.data.length !== 0) {
                            let assocOpt = this.$selectData(this.url, responce.data, data.selectField)
                            for (let item of Object.keys(assocOpt)) {
                                arr.push(assocOpt[item])
                            }
                            com.components[data.position].options = arr
                        } else {
                            com.components[data.position].options = arr
                        }
                    })
            } else {
                com.components[data.position].options = []
            }
        }
    }
}
</script>
<style lang="sass">
@import "../../../sass/public/pop.scss"
</style>
