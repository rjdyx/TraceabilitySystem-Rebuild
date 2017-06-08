    /**
 * 新建按钮组件
 * @description 
 * @author 吴燕萍 
 * @date 2017/3/21
 *  
 */


<template>
<div class="newWrap">
  <form class="newForm">
    <i class="closeBtn" @click="closeClick" ></i>
      <!-- tab选项卡 -->
      <!-- <h4>{{editComponent[0].tab}}</h4> -->
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane :label="item.tab" :name="item.tab" v-for="(item,i) in editComponent">
          <!-- 表单 -->
        <el-form :model="editForm" :rules="rules" ref="editForm" label-width="110px" class="demo-editForm">
            <table>
                <template v-for="subItem in item.components">
                    <!-- 文本框 -->
                    <tr class="tr1" v-if="subItem.type=='text' && !subItem.hiddenSelect">
                        <td v-if="!subItem.hiddenSelect">
                            <el-form-item :label="subItem.label" :prop="subItem.name">
                                <el-input 
                                    :placeholder="subItem.placeholder" 
                                    v-model="editForm[subItem.name]" 
                                    size="small"
                                    :disabled="subItem.disabled"
                                    @keyup.enter.native="submitForm('editForm')"
                                    ></el-input>
                            </el-form-item>
                        </td> 
                    </tr>

                    <!-- 下拉框 -->
                    <tr class="tr1" v-else-if="subItem.type=='select' && !subItem.hiddenSelect"> 
                        <td>
                            <el-form-item :label="subItem.label" :prop="subItem.name">
                              <el-select v-model="editForm[subItem.name]" :placeholder="subItem.placeholder" size="small" @change="getSelectId(subItem,editForm[subItem.name])" :disabled="subItem.disabled">
                                <el-option 
                                    v-for="option in subItem.options" 
                                    :label="option.label" 
                                    :value="option.value" 
                                    size="small"
                                    ></el-option>
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
                                    v-model="editForm[subItem.name]" 
                                    size="small"
                                    :disabled="subItem.disabled"
                                    @keyup.enter.native="submitForm('editForm')"></el-input>
                            </el-form-item>
                        </td>
                    </tr>

                    <!-- 传组件 -->
                    <tr class="tr1" v-else-if="subItem.component && !subItem.hiddenSelect">
                        <td>
                            <el-form-item :label="subItem.label" :prop="subItem.name">
                                <component 
                                    v-if="subItem.type=='textSelect'"
                                    v-bind:is="subItem.component" 
                                    :shuju="subItem"
                                    :inputEditValue="editForm[subItem.name]"
                                    :selectEditValue="editForm['unit']"
                                    :disabled="disabled"
                                    :editAllowance="editAllowance"
                                    :allowance="allowance"
                                    @return-shuju="returnShuju"
                                ></component>
                                <component 
                                    v-else
                                    v-bind:is="subItem.component" 
                                    :shuju="subItem"
                                    :editValue="editForm[subItem.name]"
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
                                @return-isAllcheck="allChange" 
                                @return-checked="allChecked">
                                </allCheck>
                            </li>
                        </ul>
                    </td>
                </tr>

          </table>
         </el-form>
        </el-tab-pane>
      </el-tabs>
        <div class="form-footer">
            <el-button class="btn_change"  @click="submitForm('editForm')">确定</el-button>
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
        editComponent: {
            type: Array,
            default: []
        },
        editForm: {
            type: Object,
            default () {
                return {}
            }
        },
        url: '',
        changeDataArr: {},
        editDefault: {},
        checkboxShow: false,
        roleId: null
    },
    data () {
        let rules = {}
        this.editComponent[0].components.forEach(function (item) {
            rules[item.name] = item.rule
        })
        return {
            // 当前选中的标签页
            activeName: this.editComponent[0].tab,
            rules: rules,
            memuList: {},
            checkeds: [],
            disabled: false,
            editAllowance: 0,
            allowance: 0,
            cname: '',
            cval: ''
        }
    },
    mounted () {
        if (this.checkboxShow) {
            // 全部数据
            axios.get('api/company/permission')
                .then((responce) => {
                    this.memuList = responce.data
                })
            // 角色权限默认选中
            this.rolePermisstion()
        }
        // 编辑表单加载事件
        this.setDefaultTable()
        // 编辑访问接口
        this.routeApi()
    },
    watch: {
        editComponent () {
            this.editForm[subItem.name] = ''
        }
    },
    mixins: [move],
    methods: {
        // 角色权限默认选中数据
        rolePermisstion (roleId = null) {
            axios.get('api/role/permission/' + this.roleId)
                .then((responce) => {
                    if (responce.data) {
                        this.checkeds = responce.data
                        for (let key in responce.data) {
                            let arr = []
                            if (responce.data[key] !== null) {
                                for (let i in responce.data[key]) {
                                    arr.push(responce.data[key][i].id)
                                }
                                this.checkeds[key] = arr
                            } else {
                                this.checkeds[key] = []
                            }
                        }
                    }
                })
        },
        resizeFn () {
            var divL = ($(document).outerWidth() - $('.newForm').innerWidth()) / 2
            var divT = ($(document).outerHeight() - $('.newForm').innerHeight()) / 2
            $('.newForm').css({left: divL, top: divT})
        },
        handleClick (tab, event) {
            console.log(tab, event)
        },
        // 返回InputTextSelect组件的数据
        returnShuju (data) {
            if (this.url.indexOf('course') >= 0 || this.url.indexOf('grow') >= 0) {
                if (data.value === '') {
                    this.editForm['img'] = ''
                } else {
                    this.editForm['img1'] = data.value
                    this.editForm['img'] = this.editDefault['img']
                }
            } else {
                this.editForm[data.name] = data.value
            }
        },
        // 关闭表单事件
        closeClick () {
            this.$parent.closeEditShow()
            for (let key of Object.keys(this.editDefault)) {
                this.editForm[key] = this.editDefault[key]
            }
        },
        // 取消事件
        cancelClick () {
            this.$parent.closeEditShow()
            for (let key of Object.keys(this.editDefault)) {
                this.editForm[key] = this.editDefault[key]
            }
        },
        /**
          * 提交表单
          */
        submitForm (formName) {
            // 多选框 权限
            if (this.checkboxShow) {
                let allIdArr = []
                for (let key in this.checkeds) {
                    if (this.checkeds[key].length) {
                        this.checkeds[key].forEach(function (item) {
                            allIdArr.push(item)
                        })
                    }
                }
                this.editForm['permission_ids'] = allIdArr
            }
            this.$refs[formName][0].validate((valid) => {
                if (valid) {
                    var ret = this.$conversion(this.changeDataArr, this.editForm, 0)
                    this.$dataPost(this, this.url + '/' + this.editForm.id, ret, this.editComponent[0].hasImg, this.editComponent[0].hiddenValue, true).then((response) => {
                        this.$emit('submitEdit', response.data)
                    })
                } else {
                    return false
                }
            })
        },
        allChecked (data) {
            this.checkeds[data[0]] = data[1]
            this.isChange = data[2]
        },
        allChange (data = []) {
            if (data.length) {
                this.allCheckObj[data[0]] = data[1]
                var bol = true
                for (let key in this.allCheckObj) {
                    bol = this.allCheckObj[key] && bol
                }
                this.checked = bol
            } else {
                this.$store.commit('changeIsAllCheck', this.checked)
                for (let key in this.allCheckObj) {
                    this.allCheckObj[key] = this.checked
                }
            }
        },
        // 编辑表单预加载
        setDefaultTable () {
            var type = this.editForm.transportable_type
            var com = this.editComponent[0].components
            if (type !== undefined) {
                if (type === '自运') {
                    com[4].hiddenSelect = false
                    com[5].hiddenSelect = false
                    com[6].hiddenSelect = true
                    com[7].hiddenSelect = true
                    com[8].hiddenSelect = true
                } else if (type === '托运') {
                    com[6].hiddenSelect = false
                    com[7].hiddenSelect = false
                    com[4].hiddenSelect = true
                    com[5].hiddenSelect = true
                    com[8].hiddenSelect = true
                } else {
                    com[4].hiddenSelect = true
                    com[5].hiddenSelect = true
                    com[6].hiddenSelect = true
                    com[7].hiddenSelect = true
                    com[8].hiddenSelect = false
                }
            }
        },
        // 编辑访问接口
        routeApi () {
            var com = this.editComponent[0]
            if (com.limit !== undefined) {
                if (this.url === 'plantation' || this.url === 'farm') {
                    let id = {id: this.editForm.id}
                    axios.get(this.$adminUrl(this.url + '/getMinArea'), {params: id}).then((responce) => {
                        if (responce.data !== 'false') {
                            this.disabled = true
                            this.editAllowance = responce.data
                            com.components[com.limit].rule[1]['getMin'] = responce.data
                            com.components[com.limit].rule[1]['getMessage'] = com.getMessage
                        } else {
                            this.disabled = false
                        }
                    })
                } else if (this.url === 'area') {
                    this.disabled = true
                    let pid = {id: this.editForm.pid !== undefined ? this.editForm.pid : this.editForm.farm_id}
                    axios.get(this.$adminUrl(this.url + '/getArea'), {params: pid}).then((responce) => {
                        this.allowance = parseInt(responce.data['num']) + parseInt(this.editForm.area)
                        com.components[com.limit].rule[1]['getMax'] = this.allowance
                        com.components[com.limit].rule[1]['getMessage'] = com.getMessage
                    })
                } else if (this.url === 'farmcd' || this.url === 'planta') {
                    this.disabled = true
                    let params = {id: this.editForm.id, pid: this.editForm.pid}
                    axios.get(this.$adminUrl(this.url + '/getSetArea'), {params: params}).then((responce) => {
                        this.allowance = parseInt(responce.data['max_num']) + parseInt(this.editForm.area)
                        this.editAllowance = parseInt(responce.data['min_num'])
                        com.components[com.limit].rule[1]['max'] = this.allowance
                        com.components[com.limit].rule[1]['min'] = this.editAllowance
                        com.components[com.limit].rule[1]['getMiddle'] = true
                        com.components[com.limit].rule[1]['getMessage'] = '最大输入' + this.allowance + ', 最小输入' + this.editAllowance
                    })
                }
            }
        },
        // 编辑下拉框选择事件
        getSelectId (subItem, val) {
            var assoc = subItem.assoc
            var name = subItem.name
            var number = subItem.selectNumber
            var changeTable = subItem.changeTable
            var com = this.editComponent[0].components
            var state = false
            var seed = ''
            var seed2 = []
            if (name === 'pid' || name === 'farm_id') {
                // let com = this.editComponent[0]
                if (this.url !== 'farmcd' && this.url !== 'planta') {
                    let params = {id: val}
                    let sid = this.editDefault.pid !== undefined ? this.editDefault.pid : this.editDefault.farm_id
                    axios.get(this.$adminUrl(this.url + '/getArea'), {params: params}).then((responce) => {
                        if (val === sid) {
                            this.allowance = parseInt(responce.data['num']) + parseInt(this.editDefault.area)
                        } else {
                            this.allowance = responce.data['num']
                        }
                        this.editForm['unit'] = responce.data['unit']
                        com[com.limit].rule[1]['getMax'] = this.allowance
                        com[com.limit].rule[1]['getMessage'] = com.getMessage
                    })
                } else {
                    if (val !== '') {
                        let params = {id: this.editForm.id, pid: val}
                        axios.get(this.$adminUrl(this.url + '/getSetArea'), {params: params}).then((responce) => {
                            if (val === this.editDefault.pid) {
                                this.allowance = parseInt(responce.data['max_num']) + parseInt(this.editDefault.area)
                            } else {
                                this.allowance = parseInt(responce.data['max_num'])
                            }
                            this.editForm['unit'] = responce.data['unit']
                            this.editAllowance = parseInt(responce.data['min_num'])
                            com[com.limit].rule[1]['max'] = this.allowance
                            com[com.limit].rule[1]['min'] = this.editAllowance
                            com[com.limit].rule[1]['getMiddle'] = true
                            com[com.limit].rule[1]['getMessage'] = '最大输入' + this.allowance + ', 最小输入' + this.editAllowance
                        })
                    } else {
                        this.editForm['unit'] = '亩'
                        this.allowance = 0
                        this.disabledV = true
                    }
                }
            }
            if (number !== undefined && number !== '') {
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
                            this.editForm[com[number[k][k2]].valueId] = seed2
                        }
                        if (com[number[k][k2]].type === 'select') {
                            this.editForm[com[number[k][k2]].value] = seed
                        }
                        if (com[number[k][k2]].type === 'text' || com[number[k][k2]].type === 'textSelect') {
                            this.editForm[com[number[k][k2]].name] = seed
                        }
                    }
                }
                if (number[val] !== undefined) {
                    for (let k3 in number[val]) {
                        com[number[val][k3]].hiddenSelect = false
                    }
                }
            }
        }
    }
}
</script>

<style lang="sass">
@import "../../../sass/public/pop.scss"
