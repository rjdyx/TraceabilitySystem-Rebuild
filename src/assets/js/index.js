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

require('./config/init')
const pre = '/index/'
const pre2 = '/index/message/'
const pre3 = '/index/details/'
// 权限外路由(需登录)
const excepts = ['/index/home', pre + 'set', pre + 'test', pre + 'help', pre + 'question', pre + 'ondone', '/appIndex']
const all = ['/404']
// 管理员路由
const admins = [pre2 + 'rightsOperate', pre2 + 'settleOperate', pre2 + 'usersOperate', pre2 + 'logOperate']
const aDetails = [pre3 + 'companyUser']
// 登录后不能访问的路由
const any = ['/protocol', '/forget', '/login', '/waplogin']

router.beforeEach(async (to, from, next) => {
    var check = true
    if (to.path.indexOf('run') !== -1 || all.indexOf(to.path) !== -1) {
        next()
        check = false
    }
    var rt = '/'
    if (!window.isPC) {
        rt = '/appIndex'
    }
    if (check) {
        await axios.get('/login/state').then(responce => {
            if (responce.data.name === undefined) {
                for (let l in any) {
                    if (to.path === any[l]) {
                        next()
                        return false
                    }
                }
                next('/login')
            } else {
                window.Roles = responce.data
                let data = window.Roles.permissions.one
                var state = data.indexOf(to.path.split('/')[3])
                var state2 = data.indexOf(to.path.split('/')[2])
                // 详情页
                if (to.path.indexOf('details') !== -1) {
                    if (state !== -1) {
                        next()
                        return false
                    }
                    next(rt)
                // 手机app模块
                } else if (to.path.indexOf('appIndex') !== -1) {
                    if (state !== -1 || to.path.split('/')[2] === undefined) {
                        next()
                        return false
                    }
                    next(rt)
                // 手机app操作
                } else if (to.path.indexOf('webAppForm') !== -1) {
                    if (state2 !== -1) {
                        next()
                        return false
                    }
                    next(rt)
                } else {
                    if (data !== 'admin') {
                        var pArr = data.concat(data.details)
                        pArr = pArr.concat(excepts)
                        for (let p in pArr) {
                            if (to.path === pArr[p]) {
                                next()
                                return false
                            }
                        }
                        next(rt)
                    } else {
                        var aArr = excepts.concat(admins)
                        aArr = aArr.concat(aDetails)
                        for (let a in aArr) {
                            if (to.path === aArr[a]) {
                                next()
                                return false
                            }
                        }
                        next(rt)
                    }
                }
            }
        })
    }
})

const app = new Vue({
    router,
    store: store,
    render: h => h(App)
}).$mount('#app')
