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
      <!-- <h4>{{newComponent[0].tab}}</h4> -->
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane :label="item.tab" :name="item.tab" v-for="(item,i) in newComponent">
          <!-- 表单 -->
        <el-form :model="tableForm" :rules="rules" ref="tableForm" label-width="110px" class="demo-tableForm">
            <table>
                <template v-for="subItem in item.components">
                    <!-- 文本框 -->
                    <tr v-if="subItem.type=='text'">
                        <td>
                            <el-form-item :label="subItem.label" :prop="subItem.name">
                                <el-input 
                                    :placeholder="subItem.placeholder" 
                                    v-model="tableForm[subItem.name]" size="small"></el-input>
                            </el-form-item>
                        </td> 
                    </tr>

                    <!-- 下拉框 -->
                    <tr v-else-if="subItem.type=='select'"> 
                        <td>
                            <el-form-item :label="subItem.label" :prop="subItem.name">
                              <el-select v-model="tableForm[subItem.name]" :placeholder="subItem.placeholder" size="small">
                                <el-option 
                                    v-for="option in subItem.options" 
                                    :label="option.label" 
                                    :value="option.value" size="small"></el-option>
                              </el-select>
                            </el-form-item>
                        </td>
                    </tr>

                    <!-- 多行文本框  -->
                    <tr v-else-if="subItem.type=='textarea'">
                        <el-form-item :label="subItem.label" :prop="subItem.name">
                            <el-input 
                                :placeholder="subItem.placeholder" 
                                type="textarea" 
                                v-model="tableForm[subItem.name]" size="small"></el-input>
                        </el-form-item>
                    </tr>

                    <!-- 传组件 -->
                    <tr v-else-if="subItem.component">
                        <el-form-item :label="subItem.label" :prop="subItem.name">
                            <component 
                                v-bind:is="subItem.component" 
                                :shuju="subItem"
                                :editValue="tableForm[subItem.name]"
                                @return-shuju="returnShuju"
                            ></component>
                        </el-form-item>
                    </tr>
                </template>
          </table>
          <el-form-item>
           <div class="form-footer">
            <el-button type="primary"  @click="submitForm('tableForm')">确定</el-button>
            <el-button class="activecancel" @click="cancelClick">取消</el-button>
            edit
          </div>
          </el-form-item>
         </el-form>
        </el-tab-pane>
      </el-tabs>
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
    editForm: {
      type: Object,
      default: {}
    }
  },
  data () {
    let form = {}
    this.newComponent[0].components.forEach(function (item) {
      form[item.name] = ''
    })
    let rules = {}
    this.newComponent[0].components.forEach(function (item) {
      rules[item.name] = item.rule
    })
    return {
      // 当前选中的标签页
      activeName: this.newComponent[0].tab,
      tableForm: this.editForm,
      // tableForm: {},
      rules: rules
    }
  },
  mounted () {
    // console.log('editBol:' + this.editBol)
    // this.tableForm = this.editBol ? this.editForm : this.form
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    // 返回InputTextSelect组件的数据
    returnShuju ({name, value}) {
      this.tableForm[name] = value
    },
    // 关闭表单事件
    closeClick () {
      this.$parent.changeEditShow()
    },
    // 取消事件
    cancelClick () {
      this.$parent.changeEditShow()
    },
    /**
      * 提交表单
      */
    submitForm (formName) {
      console.log(this.$refs[formName][0])
      this.$refs[formName][0].validate((valid) => {
        if (valid) {
          // alert('submit!')
          console.log('提交成功')
          for (let key of Object.keys(this.tableForm)) {
            console.log(key + ': ' + this.tableForm[key])
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
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
  z-index:2;
  text-align:center;
  overflow:hidden;
  .newForm{
    width:618px;
    position: absolute;
    background:white;
    left:50%;
    top:50%;
    transform:translateX(-50%) translateY(-50%);
    box-shadow:1px 1px 50px rgba(0,0,0,.3);
    border-radius:2px;  
    .el-tabs{
       width:100%;
       height:auto;
       max-height:618px;
       overflow:auto;
      .el-tabs__content{
        padding:20px 70px;
        box-sizing:border-box;
        table{
            width:100%;
            text-align: left;
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

        .form-footer{
          text-align:-webkit-right;
          padding:20px 10px 50px 0;
            .activecancel{
              background-color:#cccccc;
              color:white;
            }
        }
    }
}
</style>
