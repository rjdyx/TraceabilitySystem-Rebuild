import Vue from 'vue'
import App from './App.vue'
import { createStore } from './vuex'
import { createRouter } from './router'
import { sync } from 'vuex-router-sync'
import titleMixin from './utils/title'

require('./config/init')

// 添加处理html中的title的mixin
Vue.mixin(titleMixin)

// 为每个请求创建全新的store、router和app实例
export function createApp () {
    // 创建store和router实例
    const store = createStore()
    const router = createRouter()

    // 将vuex的store同步到router中，并注册`store.state.route`
    sync(store, router)

    // 创建app实例
    // 在这里我们自动将router、store和ssr的context注入到所有的子组件中
    // 使得他们在任何地方都可以通过`this.$router`和`this.$store`来使用
    const app = new Vue({
        router,
        store,
        render: h => h(App)
    })

    // 对外暴露app、router和store实例
    // 注意：这里没有直接将app挂载到DOM上，因为浏览器端和服务器端的加载方式不同
    return { app, router, store }
}
