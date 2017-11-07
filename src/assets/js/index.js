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
const excepts = ['/index/home/canvas', '/index/home/echarts', '/index/plays', pre + 'set', pre + 'test', pre + 'help', pre + 'question', pre + '404', pre + 'ondone', '/test1', '/printf', '/qrcodePrintf']
const pxcepts = ['/appIndex', pre + '404', '/appIndex/appCanvas', '/appIndex/appVideo']
// 管理员路由
const admins = [pre2 + 'adminRole', pre2 + 'adminCompany', pre2 + 'adminFeedback', pre2 + 'adminLog', pre2 + 'adminManage']
const aDetails = [pre3 + 'companyUser']
// pc端登录后不能访问的路由
const any = ['/protocol', '/forget', '/login', '/404']
// 手机端登录后不能访问的路由
const pny = ['/waplogin', '/404']
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
                        for (let p in pny) {
                            if (to.path === pny[p]) {
                                next()
                                return false
                            }
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
                        var uArr
                        if (data.one === '') {
                            uArr = pxcepts
                        } else {
                            uArr = data.phone_url.concat(data.phone_new_url)
                            uArr = uArr.concat(data.phone_edit_url)
                            uArr = uArr.concat(data.phone_detail_url)
                            uArr = uArr.concat(pxcepts)
                            if (uArr.indexOf('/appIndex/appdetailbasic/harvestBatch') !== -1) {
                                uArr.push('/webAppForm/harvestBatch/new')
                                uArr.push('/webAppForm/harvestBatch/edit')
                            }
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
                            var pArr
                            if (data.one === '') {
                                pArr = excepts
                            } else {
                                pArr = data.one.concat(data.details)
                                pArr = pArr.concat(excepts)
                            }
                            for (let p in pArr) {
                                if (to.path === pArr[p]) {
                                    next()
                                    return false
                                }
                            }
                            next('/index/home/canvas')
                        } else {
                            var aArr = excepts.concat(admins)
                            aArr = aArr.concat(aDetails)
                            for (let a in aArr) {
                                if (to.path === aArr[a]) {
                                    next()
                                    return false
                                }
                            }
                            next('/index/home/canvas')
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
