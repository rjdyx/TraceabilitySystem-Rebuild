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
// 权限外路由(需登录)
const Excepts = ['/', '/index/home', pre + 'set', pre + 'test', pre + 'help', pre + 'question', pre + '404', pre + 'ondone']
// 管理员路由
const Admins = [pre2 + 'adminRole', pre2 + 'adminCompany', pre2 + 'adminFeedback', pre2 + 'adminLog']
// 登录后不能访问的路由
const any = ['/protocol', '/forget', '/login', 'waplogin']

// 权限控制路由
router.beforeEach(async (to, from, next) => {
    console.log(to)
    var check = false
    if (to.path.indexOf('run') === -1) {
        if (window.Roles.name === undefined) {
            try {
                await axios.get('/login/state').then(responce => {
                    let except = to.matched.some((item, index, array) => {
                        if (any.indexOf(to.path) === -1) return true
                    })
                    if (responce.data.name === undefined) {
                        window.Roles = {}
                        if (window.isPC) {
                            if (except) next({path: '/login'})
                        } else {
                            if (except) next({path: '/waplogin'})
                        }
                    } else {
                        if (!except) check = true
                        window.Roles = responce.data
                        let data = window.Roles.permissions
                        if (to.path.indexOf('details') === -1 && to.path.indexOf('run') === -1) {
                            if (data.one === 'admin') {
                                if (Excepts.indexOf(to.path) === -1 && Admins.indexOf(to.path) === -1) check = true
                            } else {
                                if ((Excepts.indexOf(to.path) === -1 && data.one.indexOf(to.path) === -1) || Admins.indexOf(to.path) !== -1) check = true
                            }
                        }
                        if (to.path.indexOf('details') !== -1 && data.details.indexOf(to.params.model) === -1) {
                            check = true
                        }
                    }
                })
            } catch (e) {
                console.log(e)
            }
        } else {
            var data2 = window.Roles.permissions
            if (any.indexOf(to.path) !== -1) {
                check = true
            }
            if (to.path.indexOf('details') === -1 && to.path.indexOf('run') === -1) {
                if (data2.one === 'admin') {
                    if (Excepts.indexOf(to.path) === -1 && Admins.indexOf(to.path) === -1) check = true
                } else {
                    if ((Excepts.indexOf(to.path) === -1 && data2.one.indexOf(to.path) === -1) || Admins.indexOf(to.path) !== -1) check = true
                }
            }
            if (to.path.indexOf('details') !== -1 && data2.details.indexOf(to.params.model) === -1) {
                check = true
            }
        }
    }
    // if (check) next({path: '/'})
    next()
})

router.afterEach(route => {})

const app = new Vue({
    router,
    store: store,
    render: h => h(App)
}).$mount('#app')
