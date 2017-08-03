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

const app = new Vue({
    router,
    store: store,
    render: h => h(App)
}).$mount('#app')
