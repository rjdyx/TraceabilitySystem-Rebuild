/**
* 路由
*/
import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)

// =============================顶层组件====================================
// ---------------------------最顶层组件----------------------------------
const index = resolve => {
    require.ensure(['../views/index.vue'], () => {
        resolve(require('../views/index.vue'))
    }, 'index')
}
// ---------------------------404----------------------------------
const notFound = resolve => {
    require.ensure(['../views/404.vue'], () => {
        resolve(require('../views/404.vue'))
    }, 'fourOFour')
}
// ---------------------------登录注册组件----------------------------------
const login = resolve => {
    require.ensure(['../views/login.vue'], () => {
        resolve(require('../views/login.vue'))
    }, 'login')
}

// ---------------------------基础信息管理----------------------------------
const basic = resolve => {
    require.ensure(['../page/plant-basic/basic.vue'], () => {
        resolve(require('../page/plant-basic/basic.vue'))
    }, 'basic')
}

const routes = [
    {
        path: '/index',
        name: 'index',
        component: index,
        meta: { requiresAuth: true }
    },
    {
        path: '/index',
        component: index,
        children: [{
            path: 'message/:model/:index',
            // alias: 'reaction/:model/:index',
            component: basic,
            meta: {
                requiresAuth: true
            }
        }]
    },
    {
        path: '/404',
        name: 'notFound',
        component: notFound
    },
    {
        path: '/',
        name: 'login',
        component: login
    }
]

export default new Router({
    routes
})
