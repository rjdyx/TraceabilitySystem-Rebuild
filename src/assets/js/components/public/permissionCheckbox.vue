/**
 * 权限多选组件
 * @description 
 * @author 郭森林
 * @date 2017/5/04
 * 
 */


<template>
<div class="newWrap">
    <form class="newForm">
        <i class="el-icon-circle-close" @click="closeClick" ></i>
        <!-- tab选项卡 -->
        <!-- <h4>{{editComponent[0].tab}}</h4> -->
        <el-tabs v-model="activeName">
            <el-tab-pane label="权限管理" name="first">
              <!-- 表单 -->
            <el-form ref="form" :model="form" label-width="110px" class="demo-editForm">
                <div class="tr1" >
                    <!-- <el-checkbox v-model="checked" @change="allChange">全选</el-checkbox> -->
                    <ul class="ul">
                        <li><allCheck v-for="(itemList,key) in memuList" :checkeds="checkeds[key]" :lists="itemList" :name="key" @return-isAllcheck="allChange" @return-checked="allChecked"></allCheck></li>
                    </ul>
                </div>  
            </el-form>
            </el-tab-pane>
        </el-tabs>
        <div class="form-footer">
            <el-button class="btn_change"  @click="submitForm()">确定</el-button>
            <el-button class="activecancel" @click="cancelClick">取消</el-button>
        </div>
    </form>
</div>
</template>

<script>
import move from '../../directive/move.js'
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
        },
        companyId: ''
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
            // memuList: this.permissions.memuList,
            memuList: {},
            checked: false,
            allCheckObj: obj,
            checkeds: {}
        }
    },
    mixins: [move],
    mounted () {
        var _this = this
        // 全部数据
        axios.get('api/permission/select')
            .then((responce) => {
                this.memuList = responce.data
            })
        // 默认选中数据
        axios.get('api/permission/select' + '?company_id=' + this.companyId)
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
    methods: {
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
            let allIdArr = []
            for (let key in this.checkeds) {
                this.checkeds[key].forEach(function (item) {
                    allIdArr.push(item)
                })
            }
            var arr = {permissions: allIdArr}
            axios.post('api/company_permission/' + this.companyId, arr)
                .then((responce) => {
                    this.$parent.userRole()
                    if (responce.data !== false) {
                        alert('编辑权限成功')
                    } else {
                        alert('编辑权限失败')
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
