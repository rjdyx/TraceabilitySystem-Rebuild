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
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane :label="item.tab" :name="item.tab" v-for="(item,i) in newComponent">
          <!-- 表单 -->
        <el-form :model="tableForm" :rules="rules" ref="tableForm" label-width="110px" class="demo-tableForm">
            <table>
                <template v-for="subItem in item.components">
                    <!-- 文本框 -->
                    <tr class="tr1" v-if="subItem.type=='text'">
                        <td>
                            <el-form-item :label="subItem.label" :prop="subItem.name">
                                <el-input 
                                    :placeholder="subItem.placeholder" 
                                    v-model="tableForm[subItem.name]" size="small"></el-input>
                            </el-form-item>
                        </td> 
                    </tr>

                    <!-- 下拉框 -->
                    <tr class="tr1" v-else-if="subItem.type=='select'"> 
                        <td>
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
export default {
    name: 'validator-example',
    // validator: null,
    components: {
      // ActiveBox,
    },
    props: {
        type: '',
        newComponent: {
            type: Array,
            default: []
        },
        tab: {
            type: ''
        },
        url: ''
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
            dmL: 0,
            dmT: 0
        }
    },
    mounted () {
        /**
        * 点击表单拖拽事件
        */
        var _this = this
        this.resizeFn()
        $('.newWrap').find($('.el-tabs__header')).on('mousedown', (e) => {
            // console.log('mousedown')
            // 鼠标与newForm块的距离
            this.dmL = e.clientX - $('.newForm').position().left
            this.dmT = e.clientY - $('.newForm').position().top
            e.preventDefault()
            $(document).on('mousemove', (e) => {
                // console.log('mousemove')
                var L = e.clientX - _this.dmL
                var T = e.clientY - _this.dmT
                var maxL = $(document).outerWidth() - $('.newForm').innerWidth()
                var maxT = $(document).outerHeight() - $('.newForm').innerHeight()
                var w = $('.newForm').innerWidth() / 2
                var h = $('.newForm').innerHeight() / 2
                if (L > maxL) {
                    L = maxL
                } else if (L < 0) {
                    L = 0
                }
                if (T > maxT) {
                    T = maxT
                } else if (T < 0) {
                    T = 0
                }
                $('.newForm').css({left: L + 'px', top: T + 'px'})
            })
        })
        $(document).on('mouseup', () => {
            $(document).off('mousemove')
            // $(document).off('mouseup')
            // console.log('mouseup')
        })
        $(window).on('resize', function () {
            _this.resizeFn()
        })
    },
    methods: {
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
            this.tableForm[data.name] = data.value
        },
        // 关闭表单事件
        closeClick () {
            this.$parent.changeNewShow()
        },
        // 取消事件
        cancelClick () {
            this.$parent.changeNewShow()
        },
      /**
        * 提交表单
        */
        submitForm (formName) {
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
                this.$refs[formName][0].validate((valid) => {
                    if (valid) {
                        this.$dataPost(this, this.url, this.tableForm, this.newComponent[0].hasImg, this.newComponent[0].hiddenValue, false).then((response) => {
                            this.$emit('submitNew', response.data)
                        })
                    } else {
                        return false
                    }
                })
            }
        },
        // 选择框
        handleSelectionChange (val) {
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
            } else if (name === 'breed_id') {
                this.$emit('setTable', [name, val])
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
  background:rgba(0,0,0,0.3);
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
    .el-tabs__header{
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
