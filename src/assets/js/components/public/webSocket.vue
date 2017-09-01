/**
 * websocket组件
 * @description 
 * @author 郭森林
 * @date 2017/08/30
 * 
 */
<template>
    <div class="websocket_pop">@{{modelName}}模块数据发生变化，已做更新操作！</div>
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
        num: ''
    },
    data () {
        return {
            modelName: '种植批次'
        }
    },
    mounted () {
        console.log(this.md[this.num].url)
        // 当前路由
        var path = this.rt
        // 用户id
        var uid = window.Roles.id
        // 公司id
        var cid = window.Roles.company_id
        // WebSocket
        var socketState = window.socketData
        // 当前模块后台请求的url
        var dataUrl = this.md[this.num].url
        var _this = this
        if (!socketState) {
            if ('WebSocket' in window) {
                var url = ''
                if (env.websocket_url === undefined) {
                    url = 'ws://websocket.find360.cn:1314'
                } else {
                    url = 'ws://' + env.websocket_url
                }
                var socket = new WebSocket(url)
                window.socketData = socket
                // 握手成功成功
                socket.onopen = function () {
                    // socket.send('test')
                    console.log('数据发送中...')
                }
                // 后台返回数据时
                socket.onmessage = function (ev) {
                    let data = JSON.parse(ev.data)
                    let mds = {cultivate: ['cultivate', 'fertilize', 'detect', 'farming', 'harvest', 'grow'], harvest: ['harvest', 'tea-order-product', 'colect-process'], invoices_order: ['invoices_order', 'tea-order', 'tea-order-product'], productive_task: ['picking-list-product', 'productive-task', 'productive-task-product'], picking_list: ['picking-list', 'storage-order-product', 'picking-list-product'], storage_order: ['storage-order', 'sell-store', 'storage-order-product'], sale: ['sale', 'sell-store', 'delivery'], sell: ['sell', 'sale']}
                    if (data.content !== 'done' && uid !== data.uid && cid === data.cid) {
                        // 种植批次
                        if (data.content === 'cultivate' && mds.cultivate.indexOf(dataUrl) !== -1) {
                            _this.modelName = '种植批次'
                            _this.updateData()
                        }
                        // 采制批次
                        if (data.content === 'harvest' && mds.harvest.indexOf(dataUrl) !== -1) {
                            _this.modelName = '采制批次'
                            _this.updateData()
                        }
                        // 毛茶入库
                        if (data.content === 'invoices_order' && mds.invoices_order.indexOf(dataUrl) !== -1) {
                            _this.modelName = '毛茶入库'
                            _this.updateData()
                        }
                        // 生产任务
                        if (data.content === 'productive-task' && mds.productive_task.indexOf(dataUrl) !== -1) {
                            _this.modelName = '生产任务'
                            _this.updateData()
                        }
                        // 领料单
                        if (data.content === 'picking-list' && mds.picking_list.indexOf(dataUrl) !== -1) {
                            _this.modelName = '领料单'
                            _this.updateData()
                        }
                        // 产品入库
                        if (data.content === 'storage-order' && mds.storage_order.indexOf(dataUrl) !== -1) {
                            _this.modelName = '产品入库'
                            _this.updateData()
                        }
                        // 发货单
                        if (data.content === 'sale' && mds.sale.indexOf(dataUrl) !== -1) {
                            _this.modelName = '发货单'
                            _this.updateData()
                        }
                        // 销售订单
                        if (data.content === 'sell' && mds.sell.indexOf(dataUrl) !== -1) {
                            _this.modelName = '销售订单'
                            _this.updateData()
                        }
                    }
                    console.log(data)
                    console.log(cid)
                    console.log(data.cid)
                    console.log('数据接收中...')
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
        updateData () {
            this.$emit('aaa')
            this.websocket_pop()
        },
        // 更新提醒
        websocket_pop () {
            setTimeout(function () {
                $('.websocket_pop').fadeIn()
            }, 800)
            setTimeout(function () {
                $('.websocket_pop').fadeOut(1000)
            }, 5000)
        }
    }
}
</script>
<style lang="sass">
.websocket_pop{
    width: 50%;
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
    margin-right: 30%;
    display: none;
}
</style>
