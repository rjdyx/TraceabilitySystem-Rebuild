import 'es6-promise/auto'
import Vue from 'vue'
import App from './App.vue'
// import store from './vuex/index.js'
import router from './route/routers.js'

require('./config/init')

router.beforeEach((to, from, next) => {
    next()
    // if (store.state.token) {
    //     next()
    // } else {
    //     next({
    //         path: '/login',
    //         query: {redirect: to.fullPath}
    //     })
    // } else {
    //     next()
    // }
})

router.afterEach(route => {})

const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
