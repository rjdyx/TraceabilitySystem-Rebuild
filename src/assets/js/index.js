import 'es6-promise/auto'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// import store from './vuex/modules/user.js'
import store from './store/'
import router from './route/routers.js'
export const USER_STATE = 'false'
// 将axios挂载到prototype上，在组件就可以直接使用this.axios访问
Vue.prototype.$http = axios

Vue.use(VueRouter)

require('./config/init')

// 处理刷新的时候vuex被清空但是用户已经登录的情况
// if (sessionStorage.user) {
//     store.dispatch('setUserInfo', JSON.parse(sessionStorage.user))
// }

// axios.get('/login/state', this.ruleForm2)
//                         .then((responce) => {
//                             let USER_STATE = responce.data
//                             console.log(USER_STATE)
//                         })

router.beforeEach((to, from, next) => {
    next()
//     // console.log(USER_STATE)
    if (USER_STATE === 'false') {
        axios.get('/login/state', this.ruleForm2)
                        .then(responce => {
                            let USER_STATE = responce.data.name
                            if (USER_STATE !== null) {
                                if (to.path === '/') {
                                    next({ path: '/index' })
                                } else {
                                    next()
                                }
                                console.log(USER_STATE)
                            } else {
                                if (to.path !== '/') {
                                    next({ path: '/' })
                                } else {
                                    next()
                                }
                            }
                        })
    } else {
        next()
    }
    // if (USER_STATE !== 'false') {
    //     if (to.path === '/') {
    //         next({ path: '/index' })
    //     } else {
    //         next()
    //     }
    // } else {
    //     if (to.path !== '/') {
    //         next({ path: '/' })
    //     } else {
    //         next()
    //     }
    // }
//     // if (to.path === '/login') {
//     //     sessionStorage.removeItem('user')
//     // }
//     // let user = JSON.parse(sessionStorage.getItem('user'))
//     // if (!user && to.path !== '/login') {
//     //     next({ path: '/login' })
//     // } else {
//     //     next()
//     // }
//     // if (to.matched.some(record => record.meta.requiresAuth)) {
//     //     if (store.state.userInfo.userId) {
//     //         next()
//     //     } else {
//     //         next({
//     //             path: '/login',
//     //             query: { redirect: to.fullPath }
//     //         })
//     //     }
//     // } else {
//     //     next()
//     // }
})
router.afterEach(route => {})

const app = new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
