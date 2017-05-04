/**
 * 权限多选组件
 * @description 
 * @author 郭森林
 * @date 2017/5/04
 * 
 */

<template>
<div class="newWrap">
    <div class="">
        <div class="">
        <el-form label-width="110px" class="newForm">
        <i class="el-icon-circle-close" @click="closeClick"></i>
        <el-tabs>
            <el-tab-pane label="3232" name="111" >
            <!-- 主题色切换 -->
                <el-form-item label="网站皮肤">
                    <el-radio-group >
                        <el-radio >清新时尚蓝<span class=""></span></el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-tab-pane>
        </el-tabs>
            <div class="form-footer">
                <el-button class="btn_change" @click="submitForm">确定</el-button>
                <el-button class="activecancel" @click="cancelClick">取消</el-button>
            </div>
        </el-form>
        </div>
    </div>
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
        permissions: [],
        tab: {
            type: ''
        },
        url: ''
    },
    data () {
        return {
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
