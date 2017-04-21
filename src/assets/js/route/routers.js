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

// ---------------------------批次详情页----------------------------------
const details = resolve => {
    require.ensure(['../page/plant-details/details.vue'], () => {
        resolve(require('../page/plant-details/details.vue'))
    }, 'details')
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
            path: 'message/:model',
            alias: ['reaction/:model'],
            component: basic,
            // 需要登录才能进入此路由
            meta: {
                requiresAuth: true
            }
        },
        {
            path: 'details/:model/:id',
            component: details,
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
        path: '/login',
        name: 'login',
        component: login,
        meta: {
            requiresAuth: true
        }
    }
]

export default new Router({
    routes
})
