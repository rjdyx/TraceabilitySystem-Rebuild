import 'es6-promise/auto'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store/index.js'
import router from './route/routers.js'

// 将axios挂载到prototype上，在组件就可以直接使用this.axios访问
Vue.prototype.$http = axios

Vue.use(VueRouter)

require('./config/init')

// 处理刷新的时候vuex被清空但是用户已经登录的情况
if (sessionStorage.user) {
    store.dispatch('setUserInfo', JSON.parse(sessionStorage.user))
}

// axios.get('/login/state', this.ruleForm2)
//                         .then((responce) => {
//                             console.log(9090)
//                         })

router.beforeEach((to, from, next) => {
    next()
    // if (to.path === '/login') {
    //     sessionStorage.removeItem('user')
    // }
    // let user = JSON.parse(sessionStorage.getItem('user'))
    // if (!user && to.path !== '/login') {
    //     next({ path: '/login' })
    // } else {
    //     next()
    // }
})
// router.beforeEach((to, from, next) => {
//     if (to.meta.requireLogin) {
//         // 向后端请求获取session的api
//         axios.get('/login/state')
//             .then(res => {
//                 // console.dir(res.data)
//                 if (res.data.error) {
//                     next({
//                         // 如果session失效，则跳转至登录页
//                         path: '/login',
//                         // 跳转后将跳转前的url赋值给参数redirect
//                         query: {
//                             redirect: to.fullPath
//                         }
//                     })
//                 } else {
//                     next()
//                 }
//             })
//             .catch(err => {
//                 console.dir(err)
//             })
//     } else {
//         next()
//     }
// })

router.afterEach(route => {})

const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
