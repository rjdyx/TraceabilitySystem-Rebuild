import Vue from 'vue'
import 'es6-promise/auto'
import { createApp } from './app'
import { initAxios } from './config/http'
import { clientToLogin } from './router/authFilter'
import ProgressBar from './components/ProgressBar.vue'

// 全局进度条
const bar = Vue.prototype.$bar = new Vue(ProgressBar).$mount()
document.body.appendChild(bar.$el)

// 当一个路由组件的参数改变时，会调用`asyncData`(异步数据)
Vue.mixin({
    beforeRouteUpdate (to, from, next) {
        const { asyncData } = this.$options
        if (asyncData) {
            asyncData({
                store: this.$store,
                route: to
            }).then(() => {
                clientToLogin(to, store, next)
            }).catch(next)
        } else {
            next()
        }
    }
})

const { app, router, store } = createApp()

// 用服务端初始化好的状态赋予store中
// 这里的状态在服务端渲染期间就已经确定好了，并且嵌入到html结构中
if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__)
    
}

router.onReady(() => {
    // 为异步数据的处理添加路由钩子
    // 路由匹配成功后执行如下的数据对比，这样我们避免对在服务器端就已经
    // 获取到的数据进行重复获取。
    router.beforeResolve((to, from, next) => {
        const matched = router.getMatchedComponents(to)
        const prevMatched = router.getMatchedComponents(from)
        let diffed = false
        const activated = matched.filter((c, i) => {
            return diffed || (diffed = (prevMatched[i] !== c))
        })
        if (!activated.length) {
            return next()
        }
        bar.start()
        Promise.all(activated.map(c => {
            if (c.asyncData) {
                return c.asyncData({ store, route: to })
            }
        })).then(() => {
            bar.finish()
            clientToLogin(to, store, next)
        }).catch(next)
    })

    app.$mount('#app')
})



// service worker
if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
}

/**
* css库
*/
require('../sass/index.scss')