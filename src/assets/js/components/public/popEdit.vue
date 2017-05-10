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
    <i class="el-icon-circle-close" @click="closeClick" ></i>
      <!-- tab选项卡 -->
      <!-- <h4>{{editComponent[0].tab}}</h4> -->
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane :label="item.tab" :name="item.tab" v-for="(item,i) in editComponent">
          <!-- 表单 -->
        <el-form :model="editForm" :rules="rules" ref="editForm" label-width="110px" class="demo-editForm">
            <table>
                <template v-for="subItem in item.components">
                    <!-- 文本框 -->
                    <tr class="tr1" v-if="subItem.type=='text'">
                        <td>
                            <el-form-item :label="subItem.label" :prop="subItem.name">
                                <el-input 
                                    :placeholder="subItem.placeholder" 
                                    v-model="editForm[subItem.name]" 
                                    size="small"
                                    :disabled="subItem.disabled"></el-input>
                            </el-form-item>
                        </td> 
                    </tr>

                    <!-- 下拉框 -->
                    <tr class="tr1" v-else-if="subItem.type=='select'"> 
                        <td>
                            <el-form-item :label="subItem.label" :prop="subItem.name">
                              <el-select v-model="editForm[subItem.name]" :placeholder="subItem.placeholder" size="small">
                                <el-option 
                                    v-for="option in subItem.options" 
                                    :label="option.label" 
                                    :value="option.value" 
                                    size="small"
                                    :disabled="subItem.disabled"></el-option>
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
                                    v-model="editForm[subItem.name]" 
                                    size="small"
                                    :disabled="subItem.disabled"></el-input>
                            </el-form-item>
                        </td>
                    </tr>

                    <!-- 传组件 -->
                    <tr class="tr1" v-else-if="subItem.component">
                        <td>
                            <el-form-item :label="subItem.label" :prop="subItem.name">
                                <component 
                                    v-if="subItem.type=='textSelect'"
                                    v-bind:is="subItem.component" 
                                    :shuju="subItem"
                                    :inputEditValue="editForm[subItem.name]"
                                    :selectEditValue="editForm['unit']"
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
import move from '../../directive/move.js'
export default {
    name: 'validator-example',
    // validator: null,
    components: {
      // ActiveBox,
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
        editDefault: {}
    },
    data () {
        let rules = {}
        this.editComponent[0].components.forEach(function (item) {
            rules[item.name] = item.rule
        })
        return {
            // 当前选中的标签页
            activeName: this.editComponent[0].tab,
            rules: rules
        }
    },
    mounted () {
    },
    watch: {
        editComponent () {
            this.editForm[subItem.name] = ''
        }
    },
    mixins: [move],
    methods: {
        handleClick (tab, event) {
            console.log(tab, event)
        },
        // 返回InputTextSelect组件的数据
        returnShuju ({name, value}) {
            this.editForm[name] = value
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
