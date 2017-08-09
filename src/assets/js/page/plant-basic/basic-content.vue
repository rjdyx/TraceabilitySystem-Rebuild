* @description 中间列表模块内容
 * @author 舒丹彤
 * @date 2017/3/15 
 *   
 */ 


<template>
	<div class="content">
        <!-- <basic-model :models="models[type]"></basic-model> -->
        <basic-model :models="mds()"></basic-model>
        <footer-top></footer-top>
    </div> 
</template>
  
<script>
import BasicModel from '../basicModel/basic-model.vue'
import message from './message.js'
import footerTop from '../../components/top/topComponent/footer.vue'
import create from '../../components/public/newbuild-btn.vue'
import out from '../../components/public/output.vue'
import stamp from '../../components/public/Qrcode.vue'
export default {
    name: 'BasicContent',
    data () {
        let modelObj = {}
        Object.assign(modelObj, message)
        return {
            checked: [],
            activeName: 'first',
            models: modelObj,
            notCreate: ['send']
        }
    },
    methods: {
        mds () {
            var roleData = {}
            var newData = []
            var type = this.$route.params.model
            var lists = this.models[type]
            if (window.Roles.permissions !== undefined) {
                roleData = window.Roles.permissions.two
            }
            if (roleData === null || roleData === undefined || roleData === {} || roleData === [] || roleData === 'admin') {
                newData = lists
            } else {
                newData = this.forData(lists, type, roleData)
            }
            return newData
        },
        forData (lists, type, roleData) {
            var datas = []
            for (let k in lists) {
                var fs = lists[k].roleKey
                var arr = []
                if (roleData[type][fs] !== undefined) {
                    var operates = roleData[type][fs].ops
                    lists[k].typeComponent = []
                    lists[k].tab = roleData[type][fs].name
                    if (roleData[type].hasOwnProperty(fs)) {
                        if (operates !== undefined) {
                            // 新建权限
                            if (operates.indexOf('create') !== -1) {
                                if (this.notCreate.indexOf(fs) === -1) {
                                    arr.push({component: create})
                                }
                            }
                            // 打印权限
                            if (operates.indexOf('out') !== -1) {
                                arr.push({component: out})
                                lists[k].outState = false
                            } else {
                                lists[k].outState = true
                            }
                            // 删除权限
                            if (operates.indexOf('delete') !== -1) {
                                lists[k].delState = false
                            } else {
                                lists[k].delState = true
                            }
                            // 编辑权限
                            if (operates.indexOf('edit') === -1) {
                                lists[k].editState = true
                            } else {
                                lists[k].editState = false
                            }
                            // 状态权限
                            if (lists[k].moreComponent !== undefined) {
                                var m = 0
                                if (operates.indexOf('state') === -1) {
                                    for (let j in lists[k].moreComponent) {
                                        if (lists[k].moreComponent[j].value !== '状态') {
                                            lists[k].moreComponent[j].value = ''
                                            m = 1
                                        }
                                    }
                                }
                                if (lists[k].moreComponent !== undefined && lists[k].moreComponent !== null) {
                                    if (lists[k].moreComponent.length - m < 1) {
                                        lists[k].moreComponent = null
                                    }
                                }
                            } else {
                                lists[k].moreComponent = null
                            }
                        }
                        lists[k].typeComponent = arr
                        datas.push(lists[k])
                    }
                }
            }
            return datas
        }
    },
    components: {
        BasicModel,
        footerTop,
        create,
        out,
        stamp
    },
    computed: {
        type () {
            return this.$route.params.model
        }
    },
    mounted () {
    }
}
</script>

<style lang="sass" scoped>
    @import "../../../sass/function";
    .content{
        height:100%;
        padding:15px 10px 0px 10px;
        box-sizing:border-box;
        overflow-y: scroll;
    }
</style>
