/**
 * websocket组件
 * @description 
 * @author 郭森林
 * @date 2017/08/30
 * 
 */
<template>
</template>

<script>
const env = require('../../../../../env')
export default {
    name: 'websocket',
    components: {
    },
    props: {
        rt: ''
    },
    data () {
        return {
            checkeds: []
        }
    },
    mounted () {
        console.log(window.Roles)
        // 当前路由
        var path = this.rt
        // 用户id
        var uid = window.Roles.id
        // 公司id
        var cid = window.Roles.company_id
        // WebSocket
        var socketState = window.socketData
        if (!socketState) {
            if ('WebSocket' in window) {
                var url = 'ws://' + env.websocket_url
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
                    let pr = '/index/message/'
                    if (data.content !== 'done' && uid !== data.uid && cid === data.cid) {
                        // 种植批次
                        if (data.content === 'cultivate') {
                            if (path === pr + 'plantSerial' || path === 'plantFarm' || path === 'vegetableSerial') {
                                history.go(0)
                            }
                        }
                        // 采制批次
                        if (data.content === 'harvest') {
                            if (path === pr + 'vegetableSerial' || path === '/index/details/teaOrderBatch') {
                                history.go(0)
                            }
                        }
                    }
                    console.log('数据接收中...')
                    // console.log(data)
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
        // 关闭表单事件
        closeClick () {
        }
    }
}
</script>
<style lang="sass">
@import "../../../sass/public/pop.scss"
</style>
