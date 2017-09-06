/**
 * websocket组件
 * @description 
 * @author 郭森林
 * @date 2017/08/30
 * 
 */
<template>
    <div class="websocket_pop">
        <div class="pop_p1">@</div>
        <div class="pop_p2">{{modelName}} 模块数据发生变化，已做更新操作！</div>
    </div>
</template>

<script>
const env = require('../../../../../env')
export default {
    name: 'websocket',
    components: {
    },
    props: {
        rt: '',
        md: null,
        num: 0
    },
    data () {
        return {
            modelName: '种植批次',
            models: {cultivate: ['fertilize', 'detect', 'farming', 'harvest', 'grow'], harvest: ['tea-order-product', 'colect-process'], invoices_order: ['tea-order', 'tea-order-product'], productive_task: ['picking-list-product', 'productive-task-product'], picking_list: ['storage-order-product', 'picking-list-product'], storage_order: ['sell-store', 'storage-order-product'], sale: ['sell-store', 'delivery'], storeroom: ['tea-order', 'invoices-order', 'picking-list', 'storage-order'], product: ['productive-task-product', 'storage-order-product']}
        }
    },
    mounted () {
        // 当前路由
        var path = this.rt
        // 用户id
        var uid = window.Roles.id
        // 公司id
        var cid = window.Roles.company_id
        // WebSocket
        var socketState = window.socketData
        // 当前模块后台请求的url
        var _this = this
        if (!socketState) {
            if ('WebSocket' in window && env.websocket_url !== undefined) {
                let url = 'ws://' + env.websocket_url
                let socket = new WebSocket(url)
                window.socketData = socket
                // 握手成功成功
                socket.onopen = function () {
                    // socket.send('test')
                }
                // 后台返回数据时
                socket.onmessage = function (ev) {
                    let data = JSON.parse(ev.data)
                    _this.webMessage(data)
                }
                // 错误时
                socket.onerror = function (ev) {
                    console.log('error')
                }
                // 关闭时
                socket.onclose = function (ev) {
                    console.log('close')
                }
            } else {
                console.log('浏览器不支持webSocket')
            }
        }
    },
    methods: {
        webMessage (data) {
            // let token = document.cookie.replace(/XSRF-TOKEN=/, '')
            let token = localStorage.getItem('webToken')
            let dataUrl = this.md[this.num].url
            let mds = this.models
            let cid = window.Roles.company_id
            if (data.content !== 'done' && cid === data.cid && token !== data.token) {
                if (data.content === dataUrl) {
                    this.modelName = '当前'
                    this.updateData()
                } else {
                    // 种植场
                    if (data.content === 'plantation' && dataUrl === 'planta') {
                        this.modelName = '种植场'
                        this.updateData()
                    }
                    // 种植区
                    if (data.content === 'planta' && dataUrl === 'cultivate') {
                        this.modelName = '种植区'
                        this.updateData()
                    }
                    // 茶叶档案
                    if (data.content === 'tea' && dataUrl === 'cultivate') {
                        this.modelName = '茶叶档案'
                        this.updateData()
                    }
                    // 肥料档案
                    if (data.content === 'manure' && dataUrl === 'fertilize') {
                        this.modelName = '肥料档案'
                        this.updateData()
                    }
                    // 种植批次
                    if (data.content === 'cultivate' && mds.cultivate.indexOf(dataUrl) !== -1) {
                        this.modelName = '种植批次'
                        this.updateData()
                    }
                    // 采制批次
                    if (data.content === 'harvest' && mds.harvest.indexOf(dataUrl) !== -1) {
                        this.modelName = '采制批次'
                        this.updateData()
                    }
                    // 物流公司
                    if (data.content === 'logistic' && dataUrl === 'delivery') {
                        this.modelName = '物流公司'
                        this.updateData()
                    }
                    // 物流车辆
                    if (data.content === 'vehicle' && dataUrl === 'delivery') {
                        this.modelName = '物流车辆'
                        this.updateData()
                    }
                    // 驾驶员
                    if (data.content === 'driver' && dataUrl === 'delivery') {
                        this.modelName = '驾驶员'
                        this.updateData()
                    }
                    // 仓库档案
                    if (data.content === 'storeroom' && mds.storetoom.indexOf(dataUrl) !== -1) {
                        this.modelName = '仓库档案'
                        this.updateData()
                    }
                    // 产品档案
                    if (data.content === 'product' && mds.product.indexOf(dataUrl) !== -1) {
                        this.modelName = '产品档案'
                        this.updateData()
                    }
                    // 物流批次
                    if (data.content === 'delivery' && dataUrl === 'sell') {
                        this.modelName = '物流批次'
                        this.updateData()
                    }
                    // 毛茶出库
                    if (data.content === 'tea-order' && dataUrl === 'invoices-order') {
                        this.modelName = '毛茶出库'
                        this.updateData()
                    }
                    // 毛茶入库
                    if (data.content === 'invoices-order' && mds.invoices_order.indexOf(dataUrl) !== -1) {
                        this.modelName = '毛茶入库'
                        this.updateData()
                    }
                    // 生产任务
                    if (data.content === 'productive-task' && mds.productive_task.indexOf(dataUrl) !== -1) {
                        this.modelName = '生产任务'
                        this.updateData()
                    }
                    // 领料单
                    if (data.content === 'picking-list' && mds.picking_list.indexOf(dataUrl) !== -1) {
                        this.modelName = '领料单'
                        this.updateData()
                    }
                    // 产品入库
                    if (data.content === 'storage-order' && mds.storage_order.indexOf(dataUrl) !== -1) {
                        this.modelName = '产品入库'
                        this.updateData()
                    }
                    // 客户档案
                    if (data.content === 'client' && dataUrl === 'sell') {
                        this.modelName = '客户档案'
                        this.updateData()
                    }
                    // 发货单
                    if (data.content === 'sale' && mds.sale.indexOf(dataUrl) !== -1) {
                        this.modelName = '发货单'
                        this.updateData()
                    }
                    // 销售订单
                    if (data.content === 'sell' && dataUrl === 'sale' && data.type === 'send') {
                        this.modelName = '销售订单'
                        this.updateData()
                    }
                }
            }
            localStorage.setItem('webToken', '')
        },
        updateData () {
            this.$emit('aaa')
            this.websocket_pop()
        },
        // 更新提醒
        websocket_pop () {
            setTimeout(function () {
                $('.websocket_pop').fadeIn()
            }, 1000)
            setTimeout(function () {
                $('.websocket_pop').fadeOut(1000)
            }, 5000)
        }
    },
    watch: {
        md () {
        }
    }
}
</script>
<style lang="sass">
.websocket_pop{
    width: 400px;
    height: 40px;
    line-height: 40px;
    /*border: 1px solid #009acb;*/
    border-bottom: none;
    font-size: 15px;
    color: #009acb;
    text-align: center;
    border-radius: 5px;
    z-index: 999;
    float: right;
    margin-right: 43%;
    display: none;
    .pop_p1{
        width: 50px;
        height: 100%;
        background: #009acb;
        float: left;
        color: white;
        line-height: 40px;
        text-align: center;
    }
    .pop_p2{
        min-width: 380px;
        height: 100%;
        background: #E8EDF2;
    }
}
</style>
