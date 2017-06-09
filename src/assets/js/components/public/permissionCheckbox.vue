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
        <i class="closeBtn" @click="closeClick" ></i>
        <!-- tab选项卡 -->
        <!-- <h4>{{editComponent[0].tab}}</h4> -->
        <el-tabs v-model="activeName">
            <el-tab-pane label="权限管理" name="first">
              <!-- 表单 -->
            <el-form ref="form" :model="form" label-width="110px" class="demo-editForm">
                <table>
                    <tbody>
                        <tr class="tr2">
                            <!-- <el-checkbox v-model="checked" @change="allChange">全选</el-checkbox> -->
                            <ul class="ul">
                                <li><allCheck v-for="(itemList,key) in memuList" :checkeds="checkeds[key]" :lists="itemList" :name="key" :key="key" @return-isAllcheck="allChange" @return-checked="allChecked"></allCheck></li>
                            </ul>
                        </tr>
                    </tbody>
                </table>
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
@import "../../../sass/public/pop.scss"
</style>
