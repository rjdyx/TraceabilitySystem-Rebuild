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
    <i class="closeBtn" @click="closeClick" ></i>
      <!-- tab选项卡 -->
      <!-- <h4>{{printComponent[0].tab}}</h4> -->
      <el-tabs v-model="activeName" @tab-click="handleClick" class="tab">
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
                                    :url="url"
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
            <el-button class="btn_change">打印</el-button>
            <el-button class="activecancel" @click="closeClick">取消</el-button>
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
    mixins: [move],
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
    },
    watch: {
    },
    methods: {
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
@import "../../../sass/public/pop.scss"
</style>
