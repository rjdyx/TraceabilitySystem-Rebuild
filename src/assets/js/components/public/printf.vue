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
      <el-tabs v-model="activeName" @tab-click="handleClick" class="tab">
        <el-tab-pane :label="item.tab" :name="item.tab" v-for="(item,i) in printComponent">
          <!-- 表单 -->
        <el-form :model="printForm" :rules="rules" ref="printForm" label-width="110px" class="printForm">
            <div class="printfImg">
                <el-row :gutter="20">
                    <el-col class="grid-content" :span="12" v-for="subItem in item.components">
                        <div v-if="subItem.label !=='二维码'">
                            <em>{{subItem.label}}:</em> {{printForm[subItem.name]}}
                        </div>
                    </el-col>
                </el-row>
                <qrcode 
                    :shuju="subItem"
                    :printForm="printForm"
                    :url="url"
                    @return-shuju="returnShuju"
                    @return-qrcode="returnQrcode"
                ></qrcode>
            </div>
                
         </el-form>
        </el-tab-pane>
      </el-tabs>
        <div class="form-footer">
            <el-button class="btn_change" @click="printfFromFn">打印</el-button>
            <el-button class="activecancel" @click="closeClick">取消</el-button>
        </div>
    </form>
</div>
</template>
<script>
import move from '../../directive/move.js'
import Qrcode from '../../../js/components/public/Qrcode.vue'
export default {
    name: 'validator-example',
    // validator: null,
    components: {
      // ActiveBox,
        Qrcode
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
            rules: rules,
            qrcode: ''
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
        },
        // 获取二维码base64位地址
        returnQrcode (value) {
            this.qrcode = value
        },
        // 点击打印按钮
        printfFromFn () {
            var name = '出库单'
            // this.$html2canvas($('.el-tabs__content').has('.printfImg').get(0), {
            //     allowTaint: true,
            //     taintTest: false,
            //     height: $('printfTable').outerHeight(),
            //     onrendered: function (canvas) {
            //         let w = $('.el-tabs__content').has('.printfImg').width()
            //         let h = $('.el-tabs__content').has('.printfImg').height()
            //         Canvas2Image.saveAsJPEG(canvas, w, h, name)
            //     }
            // })
        }
    }
}
</script>
<style lang="sass">
@import "../../../sass/public/pop.scss";
.el-tabs__content{
    background:white;
}
.printfImg{
    color: #333;
        width:90%;
        margin: 0 auto;
    .el-row{
        em{
            font-size: 14px;
            font-weight:bold;
        }
    }
    .grid-content {
        min-height: 36px;
    }   
}
</style>
