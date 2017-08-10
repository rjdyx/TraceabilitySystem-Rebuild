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
const excepts = ['/index/home', pre + 'set', pre + 'test', pre + 'help', pre + 'question', pre + '404', pre + 'ondone']
// 管理员路由
const admins = [pre2 + 'adminRole', pre2 + 'adminCompany', pre2 + 'adminFeedback', pre2 + 'adminLog']
const aDetails = [pre3 + 'companyUser']
// 登录后不能访问的路由
const any = ['/protocol', '/forget', '/login', '/waplogin']

router.beforeEach(async (to, from, next) => {
    if (to.path.indexOf('teaTrace') === -1) {
        if (window.flag) {
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
                    let data = window.Roles.permissions
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
            })
        } else {
            if (to.path === '/login') {
                window.flag = true
                next()
            } else {
                next('/login')
            }
        }
    } else {
        next()
    }
})

const app = new Vue({
    router,
    store: store,
    render: h => h(App)
}).$mount('#app')
