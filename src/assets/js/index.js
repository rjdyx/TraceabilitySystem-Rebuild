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
const Excepts = ['/', '/index', pre + 'set', pre + 'test', pre + 'help', pre + 'question', pre + '404', pre + 'ondone']
const Admins = [pre2 + 'rightsOperate', pre2 + 'settleOperate', pre2 + 'usersOperate', pre2 + 'logOperate']
const any = ['/protocol', '/forget']
// 判断是电脑端还是手机端
function IsPC () {
    var userAgentInfo = navigator.userAgent
    var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
    var flag = true
    for (let v in Agents) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false
            break
        }
    }
    return flag
}
const PC = IsPC()
// 处理刷新的时候vuex被清空但是用户已经登录的情况
// if (sessionStorage.user) {
//     store.dispatch('setUserInfo', JSON.parse(sessionStorage.user))
// }

router.beforeEach(async (to, from, next) => {
    var check = false
    if (to.path.indexOf('run') === -1) {
        if (window.Roles.name === undefined) {
            try {
                await axios.get('/login/state').then(responce => {
                    let except = to.matched.some((item, index, array) => {
                        if (item.path !== '/login' && any.indexOf(to.path) === -1) return true
                    })
                    if (responce.data.name === undefined) {
                        window.Roles = {}
                        if (PC) {
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
                    }
                })
            } catch (e) {
                console.log(e)
            }
        } else {
            var data2 = window.Roles.permissions
            if (to.path === '/login') check = true
            if (to.path.indexOf('details') === -1 && to.path.indexOf('run') === -1) {
                if (data2.one === 'admin') {
                    if (Excepts.indexOf(to.path) === -1 && Admins.indexOf(to.path) === -1) check = true
                } else {
                    if ((Excepts.indexOf(to.path) === -1 && data2.one.indexOf(to.path) === -1) || Admins.indexOf(to.path) !== -1) check = true
                }
            }
        }
    }
    // if (check) next({path: '/index'})
    next()
})

router.afterEach(route => {})

const app = new Vue({
    router,
    store: store,
    render: h => h(App)
}).$mount('#app')
