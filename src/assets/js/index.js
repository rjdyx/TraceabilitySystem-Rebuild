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
const Per = '/index/message/'
const Excepts = ['/index', '/index/company', '/index/question', '/index/set', '/index/test', '/404', '/login']
const Admins = [Per + 'rightsOperate', Per + 'settleOperate', Per + 'usersOperate', Per + 'logOperate', '/index', '/index/question', '/index/set', '/index/test', '/404', '/login']
require('./config/init')

// 处理刷新的时候vuex被清空但是用户已经登录的情况
// if (sessionStorage.user) {
//     store.dispatch('setUserInfo', JSON.parse(sessionStorage.user))
// }

router.beforeEach((to, from, next) => {
    axios.get('/login/state').then(responce => {
        if (responce.data === false) {
            Vue.Roles = {}
            if (to.path !== '/login') {
                next(false)
            } else {
                next()
            }
        } else {
            var arr = responce.data.permissions.one
            Vue.Roles = responce.data.permissions.two
            if (to.path === '/login') {
                next(false)
            }
            next()
            // 注释部分为控制权限判断 勿删除
            // if (arr === 'admin') {
            //     if (Admins.indexOf(to.path) !== -1) {
            //         next()
            //     } else {
            //         next(false)
            //     }
            // } else {
            //     if (Excepts.indexOf(to.path) !== -1 || arr.indexOf(to.path) !== -1) {
            //         next()
            //     } else {
            //         next(false)
            //     }
            // }
        }
    })
})

router.afterEach(route => {})

const app = new Vue({
    router,
    store: store,
    render: h => h(App)
}).$mount('#app')
