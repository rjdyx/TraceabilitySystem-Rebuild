/**
 * 角色单选组件
 * @description 
 * @author 郭森林
 * @date 2017/5/04
 * 
 */


<template>
<div class="rolecheckbox">
  <form class="newForm">
    <i class="el-icon-circle-close" @click="closeClick"></i>
      <!-- tab选项卡 -->
    <el-tabs v-model="activeName" >
        <el-tab-pane label="权限管理" name="first">
          <!-- 表单 -->
            <el-form ref="form" :model="form" label-width="110px" class="demo-editForm">
            <table>
                <template>
                    <tr class="tr1"><td><i style="color:#55BBA6;margin-left: 40px;">* 选择用户关联的角色</i></td></tr>
                    <br>
                    <!-- 下拉框 -->
                    <tr class="tr1"> 
                        <td>
                            <el-form-item label="权限角色" prop="role_id">
                              <el-select v-model="form.value" size="small">
                                <el-option 
                                    v-for="option in options" 
                                    :label="option.name" 
                                    :value="option.id" 
                                    size="small"></el-option>
                              </el-select>
                            </el-form-item>
                        </td>
                    </tr>
                </template>
          </table>
         </el-form>
        </el-tab-pane>
    </el-tabs>
    <div class="form-footer">
        <el-button class="btn_change"  @click="submitForm">确定</el-button>
        <el-button class="activecancel" @click="cancelClick">取消</el-button>
    </div>
    </form>
</div>
</template>

<script>
export default {
    name: 'validator-example',
    components: {
    },
    props: {
        rowId: ''
    },
    data () {
        return {
            activeName: 'first',
            options: [],
            form: {
                value: null
            }
        }
    },
    mounted () {
        // 全部数据
        axios.get('api/role/company/' + this.rowId)
            .then((responce) => {
                this.options = responce.data
            })
        // 默认选中数据
        axios.get('api/role/user/' + this.rowId)
            .then((responce) => {
                if (responce.data.role_id !== undefined && responce.data.role_id !== null) {
                    this.form.value = responce.data.role_id
                }
            })
        /**
        * 点击表单拖拽事件
        */
        this.resizeFn()
        $('.rolecheckbox').find($('.el-tabs__header')).on('mousedown', (e) => {
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
        })
        $(window).on('resize', () => {
            this.resizeFn()
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
            this.$parent.closeRoleShow()
        },
        // 取消事件
        cancelClick () {
            this.$parent.closeRoleShow()
        },
      /**
        * 提交表单
        */
        submitForm (formName) {
            var arr = {role_id: this.form.value}
            axios.post('api/role/user/' + this.rowId, arr)
                .then((responce) => {
                    this.$parent.closeRoleShow()
                    if (responce.data !== false) {
                        alert('编辑权限成功')
                    } else {
                        alert('编辑权限失败')
                    }
                })
        }
    }
}
</script>
<style lang="sass">
.rolecheckbox{
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
    height:318px;
    .el-tabs{
        height:60%;
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
