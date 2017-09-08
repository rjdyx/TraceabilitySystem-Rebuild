<template>
<div class="qrcodePrintf">
    <!-- 表单 -->
    <div v-for="(item,i) in printComponent">
        <el-form :model="printForm"  ref="printForm" label-width="110px" class="printForm">
            <div class="printfImg">
                <el-row :gutter="20">
                    <el-col class="grid-content" :span="12" v-for="subItem in printComponent[0].components">
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
     </div>
</div>
</template>
<script>
import Qrcode from '../components/public/Qrcode.vue'
export default {
    name: 'qrcodePrintf',
    // validator: null,
    components: {
      // ActiveBox,
        Qrcode
    },
    data () {
        return {
            // 当前选中的标签页
            activeName: '',
            qrcode: '',
            printComponent: [],
            printForm: {},
            url: ''
        }
    },
    mounted () {
        console.log('2222-------------------')
        console.log(window.printf)
        console.log(window.printForm)
        this.printComponent = localStorage.getItem('printComponent') ? JSON.parse(localStorage.getItem('printComponent')) : {}
        this.printForm = localStorage.getItem('printForm') ? JSON.parse(localStorage.getItem('printForm')) : []
        this.url = localStorage.getItem('url') ? localStorage.getItem('url') : []
        this.activeName = this.printComponent[0].tab
    },
    watch: {
    },
    methods: {
        // 返回InputTextSelect组件的数据
        returnShuju ({name, value}) {
            this.printForm[name] = value
        },
        // 获取二维码base64位地址
        returnQrcode (value) {
            this.qrcode = value
        }
    }
}
</script>
<style lang="sass">
.el-tabs__content{
    background:white;
}
.qrcodePrintf{
    width:800px;
    margin:0 auto;
    padding-top:50px;
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
}
    
</style>
