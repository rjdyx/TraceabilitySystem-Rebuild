/**
 * 打印按钮组件
 * @description 
 * @author 李明村
 * @date 2017/5/2
 *  
 */


<template>
<div class="newWrap">
  <form class="newForm">
    <i class="el-icon-circle-close" @click="closeClick" ></i>
      <!-- tab选项卡 -->
      <!-- <h4>{{printComponent[0].tab}}</h4> -->
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane :label="item.tab" :name="item.tab" v-for="(item,i) in printComponent">
          <!-- 表单 -->
        <el-form :model="printForm" :rules="rules" ref="printForm" label-width="110px" class="demo-printForm">
            <table>
                <template v-for="subItem in item.components">
                    <!-- 文本框 -->
                    <tr class="tr1" v-if="subItem.type=='text'">
                        <td>
                            <el-form-item :label="subItem.label" :prop="subItem.name">
                                <el-input 
                                    :placeholder="subItem.placeholder" 
                                    v-model="printForm[subItem.name]" 
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
                                    :inputEditValue="printForm[subItem.name]"
                                    :selectEditValue="printForm['unit']"
                                    @return-shuju="returnShuju"
                                ></component>
                                <component 
                                    v-else
                                    v-bind:is="subItem.component" 
                                    :shuju="subItem"
                                    :editValue="printForm[subItem.name]"
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
            <el-button type="primary">打印</el-button>
            <el-button class="activecancel" @click="closeClick">取消</el-button>
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
        printComponent: {
            type: Array,
            default: []
        },
        printForm: {
            type: Object,
            default () {
                return {}
            }
        },
        url: ''
    },
    data () {
        let rules = {}
        this.printComponent[0].components.forEach(function (item) {
            rules[item.name] = item.rule
        })
        return {
            // 当前选中的标签页
            activeName: this.printComponent[0].tab,
            rules: rules
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
            $(document).on('mousemove', (e) => {
                // console.log('mousemove')
                var L = e.clientX - _this.dmL
                var T = e.clientY - _this.dmT
                var maxL = $(document).outerWidth() - $('.newForm').innerWidth()
                var maxT = $(document).outerHeight() - $('.newForm').innerHeight()
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
    watch: {
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
        returnShuju ({name, value}) {
            this.printForm[name] = value
        },
        // 关闭表单事件
        closeClick () {
            this.$parent.moreShow()
        },
        // 取消事件
        cancelClick () {
            this.$parent.closeEditShow()
            for (let key of Object.keys(this.editDefault)) {
                this.printForm[key] = this.editDefault[key]
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
