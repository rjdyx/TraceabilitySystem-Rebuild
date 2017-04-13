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
    <i class="el-icon-circle-close" @click="closeClick"></i>
      <!-- tab选项卡 -->
      <!-- <h4>{{newComponent[0].tab}}</h4> -->
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <!-- 选项-->
        <el-tab-pane :label="item.tab" :name="item.tab" v-for="(item,i) in newComponent">
            <!-- 选项一内容 表单 -->
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
                                <!-- 控件类型是textelect -->
                                <component 
                                    v-if="subItem.type=='textselect'"
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
                        </tr>
                    </template>
              </table>
               
             </el-form>
            <!-- 选项二内容 表格 -->
            <!-- <div v-else class="batch"> -->
                <!-- 下拉框 -->
                <!-- <el-select class="batchSelect" :placeholder="item.components.placeholder" size="small" v-model="tab2Select">
                  <el-option 
                      v-for="option in item.components.options" 
                      :label="option.label" 
                      :value="option.value" size="small"></el-option>
                </el-select> -->
                <!-- 表格 -->
                <!-- <template>
                    <el-table
                        border
                        style="width: 100%"
                        @selection-change="handleSelectionChange">
                        <el-table-column
                            type="selection"
                            width="55">
                        </el-table-column>
                        <el-table-column
                            v-for="title in item.tableHearList"
                            prop="name"
                            :label='title'
                            width="120">
                        </el-table-column>
                    </el-table>
                </template> -->  
            <!-- </div> -->
        </el-tab-pane>
        <div class="form-footer">
                <!-- <div class="batchNumDiv" v-show="newComponent.length>1">已选择: <el-input v-model="batchNum" class="batchNum" size="small"></el-input>个{{newComponent[1].batch}}批次</div> -->
                <el-button type="primary"  @click="submitForm('tableForm')">确定</el-button>
                <el-button class="activecancel" @click="cancelClick">取消</el-button>
                new
              </div>
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
        tab: {
            type: String
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
                form[item.name] = item.options[0].label
            } else if (item.type === 'date') {
                form[item.name] = {}
            } else if (item.type === 'textselect') {
                form[item.name] = ''
                form['unit'] = item.options[0].label
            }
        })
        let rules = {}
        this.newComponent[0].components.forEach(function (item) {
            rules[item.name] = item.rule
        })
        return {
            // 当前选中的标签页
            activeName: this.newComponent[0].tab,
            // tableForm: {},
            tableForm: form,
            rules: rules,
            // 判断鼠标是否点击
            isMouseClick: false,
            dmL: 0,
            dmT: 0
            // tableHearList: {breedBatchList: ['养殖批次号', '所属养殖区', '畜禽名称', '养殖数量', '养殖日期', '备注'], plantBatchList: ['种植批次号', '所属种植区', '种植果蔬名称', '种植面积', '种植日期', '备注'], harvestBatchList: ['采收批次号', '所属种植区', '果蔬名称', '采收数量', '采收日期', '备注'], rfidList: ['Ffid', '畜禽名称', '出栏日期', '备注']},
            // tab2Select: '',
            // 选择框
            // multipleSelection: [],
            // 选择了多少个批次
            // batchNum: 0
        }
    },
    mounted () {
        console.log('newComponent:')
        console.log(this.newComponent)
        // this.tableForm = this.editBol ? this.editForm : this.form
        // 鼠标移动form
        window.onmouseup = () => {
            if (this.isMouseClick) {
                this.isMouseClick = false
                // _this.formDown = null
                // _this.formMove = null
            }
        }
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
            this.$refs[formName][0].validate((valid) => {
                if (valid) {
                    let form = new FormData()
                    for (let key of Object.keys(this.tableForm)) {
                        form.append(key, this.tableForm[key])
                    }
                    let headers = {headers: {'Content-Type': 'multipart/form-data'}}
                    axios.post(this.$adminUrl(this.url), form, headers).then((response) => {
                        this.$emit('submitNew', response.data)
                    }, (response) => {
                        this.$emit('submitNew', 'false')
                    })
                } else {
                    return false
                }
            })
        },
        // 选择框
        handleSelectionChange (val) {
            this.multipleSelection = val
        },
      // 鼠标点击表单
        formDown (event) {
            console.log(event)
            console.log('formDown')
            this.isMouseClick = true
            // 鼠标与newForm块的距离
            this.dmL = event.clientX - $('.newForm')[0].offsetLeft
            this.dmT = event.clientY - $('.newForm')[0].offsetTop
        },
        // 鼠标点击以后移动
        formMove (event) {
            if (this.isMouseClick) {
                console.log('formMove')
                // newForm块移动的最大距离
                var maxL = document.documentElement.clientWidth - $('.newForm')[0].offsetWidth
                var maxT = document.documentElement.clientHeight - $('.newForm')[0].offsetHeight
                // newForm移动的距离
                var x = event.clientX - this.dmL
                var y = event.clientY - this.dmT
                // 给个判断条件:让newForm不能移出浏览器
                // 如果newForm移动的距离>newForm移动的最大距离时
                if (x > maxL) {
                    x = maxL
                } else if (x < 0) {
                    x = 0
                }
                if (y > maxT) {
                    y = maxT
                } else if (y < 0) {
                    y = 0
                }
                $('.newForm').css('left', x + 'px')
                $('.newForm').css('top', y + 'px')
                // $('.newForm').css('transform', 'translateX(0%) translateY(0%)')
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
       max-height:618px;
       overflow:scroll;
        .el-tab-pane:first-child{
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
        .el-tab-pane:nth-child(2){
            padding:0px 5px 20px;
            box-sizing:border-box;
            .batchSelect{
                margin-bottom: 10px;
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
    
    }
}
</style>
