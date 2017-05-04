/**
 * 权限多选组件
 * @description 
 * @author 郭森林
 * @date 2017/5/04
 * 
 */


<template>
<div class="permission">
    <form class="newForm">
        <i class="el-icon-circle-close" @click="closeClick" ></i>
        <!-- tab选项卡 -->
        <!-- <h4>{{editComponent[0].tab}}</h4> -->
        <el-tabs v-model="activeName">
            <el-tab-pane label="权限管理" name="first">
              <!-- 表单 -->
            <el-form ref="form" :model="form" label-width="110px" class="demo-editForm">
                <div class="tr1" >
                    <el-checkbox v-model="checked" @change="allChange">全选</el-checkbox>
                    <ul class="ul">
                        <li><allCheck v-for="(itemList,key) in memuList" :lists="itemList" :name="key" @return-isAllcheck="allChange"></allCheck></li>
                    </ul>
                </div>
                      
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
export default {
    name: 'validator-example',
    store: vuexStore,
    // validator: null,
    components: {
      // ActiveBox,
        AllCheck
    },
    props: {
        permissions: {
            type: Object,
            default () {
                return {}
            }
        }
    },
    data () {
        let obj = {}
        this.permissions.protos.forEach(function (item) {
            obj[item] = false
        })
        return {
            activeName: 'first',
            memu: this.permissions.memu,
            protos: this.permissions.protos,
            memuList: this.permissions.memuList,
            checked: false,
            allCheckObj: obj
        }
    },
    mounted () {
        console.log(this.allCheckObj)
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
        // 关闭表单事件
        closeClick () {
            this.$parent.userRole()
        },
        // 取消事件
        cancelClick () {
            this.$parent.userRole()
        },
      /**
        * 提交表单
        */
        submitForm (formName) {
        },
        allChange (data = []) {
            // console.log(data)
            if (data.length) {
                this.allCheckObj[data[0]] = data[1]
                console.log(this.allCheckObj)
                var bol = true
                for (var key in this.allCheckObj) {
                    bol = this.allCheckObj[key] && bol
                }
                if (bol) {
                    this.checked = bol
                } else {
                    this.checked = bol
                }
            } else {
                this.$store.commit('changeIsAllCheck', this.checked)
            }
        }
    }
}
</script>
<style lang="sass">
.permission{
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
                text-align: left;
                display:block;
                .tr1{
                    width:95%;
                    margin:0 auto;
                    .ul{
                        width:90%;
                        margin-left:5%;
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
