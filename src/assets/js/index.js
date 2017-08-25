import 'es6-promise/auto'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// import store from './vuex/modules/user.js'
// import store from './store/'
import router from './route/routers.js'
import store from './vuex/index'

// 将axios挂载到prototype上，在组件就可以直接使用this.axios访问
Vue.prototype.$http = axios

Vue.use(VueRouter)
const env = require('../../../env')
require('./config/init')
const pre = '/index/'
const pre2 = '/index/message/'
const pre3 = '/index/details/'
// 权限外路由(需登录)
const excepts = ['/index/home', '/index/plays', pre + 'set', pre + 'test', pre + 'help', pre + 'question', pre + '404', pre + 'ondone', '/test1', '/printf', '/qrcodePrintf']
const pxcepts = ['/appIndex', pre + '404']
// 管理员路由
const admins = [pre2 + 'adminRole', pre2 + 'adminCompany', pre2 + 'adminFeedback', pre2 + 'adminLog']
const aDetails = [pre3 + 'companyUser']
// 登录后不能访问的路由
const any = ['/protocol', '/forget', '/login']
// 追溯页面路由
const teaTrace = [
    '/teaTrace/tea/index/',
    '/teaTrace/tea/basicInfor/',
    '/teaTrace/tea/growImg/',
    '/teaTrace/tea/fertilize/',
    '/teaTrace/tea/detect/',
    '/teaTrace/tea/farming/',
    '/teaTrace/tea/harvest/',
    '/teaTrace/tea/commodityInfor/',
    '/teaTrace/tea/sale/'
]

router.beforeEach(async (to, from, next) => {
    // WebSocket (未完成...)
    // var socketState = window.socketData
    var socketState = false
    if (socketState) {
        if ('WebSocket' in window) {
            var url = 'ws://' + env.app_url.replace('http://', '') + '/api/socket'
            var socket = new WebSocket(url)
            window.socketData = socket
            // 握手成功成功
            socket.onopen = function () {
                // socket.send('发送数据')
                console.log('数据发送中...')
            }
            // 后台返回数据时
            socket.onmessage = function (event) {
                let data = JSON.parse(event.data)
                console.log(data)
            }
            // 错误时
            socket.onerror = function (ev) {
                console.log(ev)
            }
        } else {
            console.log('浏览器不支持')
        }
    }
    var str = to.path.substring(0, to.path.length - 18)
    var check = false
    for (let t in teaTrace) {
        if (str === teaTrace[t]) {
            next()
            check = true
        }
    }
    if (!check) {
        if (window.flag) {
            await axios.get('/login/state').then(responce => {
                if (responce.data.name === undefined) {
                    if (!window.isPC) {
                        if (to.path === '/waplogin') {
                            next()
                            return false
                        }
                        next('/waplogin')
                    } else {
                        for (let l in any) {
                            if (to.path === any[l]) {
                                next()
                                return false
                            }
                        }
                        next('/login')
                    }
                } else {
                    window.Roles = responce.data
                    let data = window.Roles.permissions
                    // 手机端路由
                    if (!window.isPC) {
                        var uArr = data.phone_url.concat(data.phone_new_url)
                        uArr = uArr.concat(data.phone_edit_url)
                        uArr = uArr.concat(data.phone_detail_url)
                        uArr = uArr.concat(pxcepts)
                        if (uArr.indexOf('/appIndex/appdetailbasic/harvestBatch') !== -1) {
                            uArr.push('/webAppForm/harvestBatch/new')
                            uArr.push('/webAppForm/harvestBatch/edit')
                        }
                        for (let u in uArr) {
                            if (to.path === uArr[u]) {
                                next()
                                return false
                            }
                        }
                        next('/appIndex')
                    } else {
                        // pc端路由
                        if (data.one !== 'admin') {
                            var pArr = data.one.concat(data.details)
                            pArr = pArr.concat(excepts)
                            for (let p in pArr) {
                                if (to.path === pArr[p]) {
                                    next()
                                    return false
                                }
                            }
                            next('/index/home')
                        } else {
                            var aArr = excepts.concat(admins)
                            aArr = aArr.concat(aDetails)
                            for (let a in aArr) {
                                if (to.path === aArr[a]) {
                                    next()
                                    return false
                                }
                            }
                            next('/index/home')
                        }
                    }
                }
            })
        } else {
            if (to.path === '/login') {
                window.flag = true
                next()
            } else {
                next('/login')
            }
        }
    }
})

const app = new Vue({
    router,
    store: store,
    render: h => h(App)
}).$mount('#app')
