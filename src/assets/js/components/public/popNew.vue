/**
 * 新建按钮组件
 * @description 
 * @author 吴燕萍
 * @date 2017/3/21
 * 
 */


<template>
<div class="newWrap">
<!-- @mousedown='formDown' @mousemove='formMove' -->
  <form class="newForm" >
    <i class="el-icon-circle-close" @click="closeClick"></i>
    <div class="formHeaderMask"></div>
      <!-- tab选项卡 -->
      <!-- <h4>{{newComponent[0].tab}}</h4> -->
      <el-tabs v-model="activeName" @tab-click="handleClick" class="tab">
        <el-tab-pane :label="item.tab" :name="item.tab" v-for="(item,i) in newComponent">
          <!-- 表单 -->
        <el-form :model="tableForm" :rules="rules" ref="tableForm" label-width="110px" class="demo-tableForm">
            <table>
                <template v-for="subItem in item.components">

                    <!-- 文本框 -->
                    <tr class="tr1" v-if="subItem.type=='text'">
                        <td v-if="!subItem.consignHidden">
                            <el-form-item :label="subItem.label" :prop="subItem.name">
                                <el-input 
                                    :placeholder="subItem.placeholder" 
                                    v-model="tableForm[subItem.name]" size="small"></el-input>
                            </el-form-item>
                        </td> 
                    </tr>

                    <!-- 下拉框 -->
                    <tr class="tr1" v-else-if="subItem.type=='select'"> 
                        <td v-if="!subItem.selfHidden && !subItem.consignHidden">
                            <el-form-item :label="subItem.label" :prop="subItem.name">
                              <el-select v-model="tableForm[subItem.name]" :placeholder="subItem.placeholder" size="small"
                                    @change="getSelectId(subItem.assoc,subItem.name,tableForm[subItem.name])">
                                <el-option 
                                    v-for="option in subItem.options" 
                                    :label="option.label" 
                                    :value="option.value" size="small"></el-option>
                              </el-select>
                            </el-form-item>
                        </td>
                    </tr>

                    <!-- 多行文本框  -->
                    <tr class="tr1" v-else-if="subItem.type=='textarea'">
                        <td>
                            <el-form-item :label="subItem.label" :prop="subItem.name">
                                <el-input 
                                    :placeholder="subItem.placeholder" 
                                    type="textarea" 
                                    v-model="tableForm[subItem.name]" size="small"></el-input>
                            </el-form-item>
                        </td>
                    </tr>
                    <!-- 表格  -->
                    <tr class="tr2" v-else-if="subItem.type=='table'">
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
                    <tr class="tr1" v-else-if="subItem.component">
                        <td>
                            <el-form-item :label="subItem.label" :prop="subItem.name">
                                <!-- 控件类型是textelect -->
                                <component 
                                    v-if="subItem.type=='textSelect'"
                                    v-bind:is="subItem.component" 
                                    :shuju="subItem"
                                    :inputEditValue="tableForm[subItem.name]"
                                    :selectEditValue="tableForm['unit']"
                                    @return-shuju="returnShuju"
                                ></component>
                                <!-- 其他类型 -->
                                <component 
                                    v-else
                                    v-bind:is="subItem.component" 
                                    :shuju="subItem"
                                    @return-shuju="returnShuju"
                                ></component>
                            </el-form-item>
                        </td>
                    </tr>
                </template>

                 <!-- 传二级多选框组件 -->
                <tr class="tr1" v-if="checkboxShow">
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
        // editForm: {
        //   type: Object,
        //   default: {}
        // },
        // editBol: {
        //   type: Boolean,
        //   default: false
        // }
    },
    data () {
        let form = {}
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
            ids: [],
            // 判断鼠标是否点击
            isMouseClick: false,
            trHidden: false,
            dmL: 0,
            dmT: 0,
            memuList: {},
            checkeds: []
        }
    },
    mixins: [move],
    mounted () {
        if (this.checkboxShow) {
            // 全部数据
            axios.get('api/company/permission')
                .then((responce) => {
                    this.memuList = responce.data
                })
        }
    },
    methods: {
        handleClick (tab, event) {
            console.log(tab, event)
        },
        // 返回InputTextSelect组件的数据
        returnShuju (data) {
            this.tableForm[data.name] = data.value
        },
        // 关闭表单事件
        closeClick () {
            this.$parent.closeNewShow()
            this.successCallback()
        },
        // 取消事件
        cancelClick () {
            this.$parent.closeNewShow()
            this.successCallback()
        },
      /**
        * 提交表单
        */
        submitForm (formName) {
            // 多选框 权限
            if (this.checkboxShow) {
                let allIdArr = []
                console.log(this.checkeds.length)
                if (this.checkeds.length) {
                    for (let key in this.checkeds) {
                        this.checkeds[key].forEach(function (item) {
                            allIdArr.push(item)
                        })
                    }
                }
                this.tableForm['permission_ids'] = allIdArr
            }
            this.$refs[formName][0].validate((valid) => {
                if (valid) {
                    if (this.newComponent[0].urlid !== undefined) {
                        let field = this.newComponent[0].urlid
                        this.tableForm[field] = this.routeId
                    }
                    if (this.newComponent[0].type === 'table' || this.newComponent[0].type === 'assoc') {
                        if (this.ids.length !== 0) {
                            this.$dataPost(this, this.url, this.tableForm, false, false, false)
                                .then((response) => {
                                    this.$emit('submitNew', response.data)
                                })
                        } else {
                            this.$message(this.newComponent[0].components[this.newComponent[0].assocNum].errormsg)
                        }
                    } else {
                        console.log('------')
                        console.log(this.url)
                        console.log(this.tableForm)
                        console.log(this.newComponent[0].hasImg)
                        console.log(this.newComponent[0].hiddenValue)
                        this.$dataPost(this, this.url, this.tableForm, this.newComponent[0].hasImg, this.newComponent[0].hiddenValue, false).then((response) => {
                            this.successCallback()
                            this.$emit('submitNew', response.data)
                        })
                    }
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
        // 选择框
        handleSelectionChange (val) {
            console.log(val)
            let ids = []
            for (let key in val) {
                ids.push(val[key].id)
            }
            this.tableForm[this.newComponent[0].components[this.newComponent[0].assocNum].valueId] = ids
            this.ids = ids
        },
        // 选择框关联
        getSelectId (assoc, name, val) {
            if (assoc !== undefined) {
                this.$emit('setAssoc', [assoc, name, val])
            } else if (name === 'breed_id' || name === 'come_id') {
                this.$emit('setTable', [name, val])
            } else if (name === 'transportable_type') {
                var com = this.newComponent[0].components
                if (val === 'self') {
                    // 默认赋值
                    this.tableForm.driver_id = ''
                    this.tableForm.vehicle_id = ''
                    this.tableForm.logistic_id = 1
                    this.tableForm.number = 'abc'
                    com[3].selfHidden = false
                    com[4].selfHidden = false
                    com[5].consignHidden = true
                    com[6].consignHidden = true
                } else if (val === 'consign') {
                    // 默认赋值
                    this.tableForm.driver_id = 1
                    this.tableForm.vehicle_id = 1
                    this.tableForm.logistic_id = ''
                    this.tableForm.number = ''
                    com[3].selfHidden = true
                    com[4].selfHidden = true
                    com[5].consignHidden = false
                    com[6].consignHidden = false
                } else if (val === 'selve') {
                    // 默认赋值
                    this.tableForm.driver_id = 1
                    this.tableForm.vehicle_id = 1
                    this.tableForm.logistic_id = 1
                    this.tableForm.number = 'abc'
                    com[3].selfHidden = true
                    com[4].selfHidden = true
                    com[5].consignHidden = true
                    com[6].consignHidden = true
                } else {
                    com[3].selfHidden = true
                    com[4].selfHidden = true
                    com[5].consignHidden = true
                    com[6].consignHidden = true
                }
            }
        },
        // 新增成功调用方法
        successCallback () {
            var com = this.newComponent[0].components
            if (this.newComponent[0].divHidden !== undefined) {
                com[3].selfHidden = true
                com[4].selfHidden = true
                com[5].consignHidden = true
                com[6].consignHidden = true
            }
        }
    }
}
</script>
<style lang="sass">
.newWrap{
  position: fixed;
  width:100%;
  height: 100%;
  background:rgba(0,0,0,.5);
  top:0;
  left:0;
  z-index:3;
  // text-align:center;
  // overflow:hidden;
  .newForm{
    width:618px;
    max-width:618px;
    left:50%;
    top:50%;
    position: absolute;
    background:white;
    box-shadow:1px 1px 50px rgba(0,0,0,.3);
    border-radius:2px;  
    height:618px;
    .el-tabs{
        height:80%;
        padding-top: 15px;
        .el-tabs__content{
            height:88%;
            overflow:auto;
            .el-tab-pane{
                // padding:20px 70px;
                // box-sizing:border-box;
                width:100%!important;
                table{
                    width:100%;
                    text-align: left;
                    .tr1{
                        display:block;
                        width:70%;
                        // padding:20px 70px;
                        // box-sizing:border-box;
                        margin:0 auto;
                        >td{
                            display:block;
                            width:100%;
                            .el-select{
                                display:block;
                            }
                            .el-textarea__inner{
                                resize:none;
                            }
                            .el-form-item__label::before{
                                float: left;
                            }
                        }
                            
                    }
                    .tr2{
                        display:block;
                        width:98%;
                        margin:0 auto;
                        padding-bottom:20px;
                        >td{
                            display:block;
                            width:100%;
                        }
                    }
                    
                }
            }
        }
            
       
    }
     .form-footer{
          border-top: 1px solid #d1dbe5;
          text-align:-webkit-right;
          padding:20px 10px 50px 0;
            .activecancel{
              background-color:#cccccc;
              color:white;
            }
            .batchNumDiv{
                text-align:-webkit-left;
                padding-left:10px;
                // padding-top:20px;
                .batchNum{
                    display:inline-block;
                    width:40px;
                    input{
                        text-align:center;
                        color:red;
                    }
                }
            }
        }   
    .el-icon-circle-close{
        font-size:24px;
        color:#8492a6;
        position: absolute;
        right:-12px;
        top:-10px;
        border:3px solid white;
        border-radius:50%;
        background:white;
        z-index:3;
    }
    .el-icon-circle-close:hover{
        color:#0087b5;
    } 
    .tab{
        cursor: move;
    }
    .btn_change{
        color: #fff;
    }
    // .formHeaderMask{
    //     width:100%;
    //     height:41px;
    //     position:absolute;
    //     left:0;
    //     top:0;
    //     background:red;
    // }
    }
}
</style>
