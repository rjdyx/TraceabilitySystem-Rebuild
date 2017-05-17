/**
* 路由
*/
import Router from 'vue-router'
import Vue from 'vue'
import phoneRouters from './phoneRouters.js'
Vue.use(Router)

// =============================顶层组件====================================
// ---------------------------最顶层组件----------------------------------
const index = resolve => {
    require.ensure(['../views/index.vue'], () => {
        resolve(require('../views/index.vue'))
    }, 'index')
}
// ---------------------------403----------------------------------
const Role403 = resolve => {
    require.ensure(['../views/403.vue'], () => {
        resolve(require('../views/403.vue'))
    }, 'Role403')
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

// =============================头部导航条按钮跳转=======================
// -------------------------------问题反馈------------------------------
const question = resolve => {
    require.ensure(['../components/top/question.vue'], () => {
        resolve(require('../components/top/question.vue'))
    }, 'question')
}
// -------------------------------首页------------------------------
const home = resolve => {
    require.ensure(['../components/top/home.vue'], () => {
        resolve(require('../components/top/home.vue'))
    }, 'home')
}
// -------------------------------设置------------------------------
const set = resolve => {
    require.ensure(['../components/top/set.vue'], () => {
        resolve(require('../components/top/set.vue'))
    }, 'set')
}
// -------------------------------test用户------------------------------
const test = resolve => {
    require.ensure(['../components/top/user.vue'], () => {
        resolve(require('../components/top/user.vue'))
    }, 'test')
}
// -------------------------------company公司------------------------------
const company = resolve => {
    require.ensure(['../components/top/company.vue'], () => {
        resolve(require('../components/top/company.vue'))
    }, 'company')
}
// -------------------------------help帮助文档------------------------------
const help = resolve => {
    require.ensure(['../components/top/help.vue'], () => {
        resolve(require('../components/top/help.vue'))
    }, 'help')
}
// -------------------------------ondone未完成图片------------------------------
const ondone = resolve => {
    require.ensure(['../components/top/ondone.vue'], () => {
        resolve(require('../components/top/ondone.vue'))
    }, 'ondone')
}
var routes = [
    {
        path: '/',
        name: 'index',
        component: index,
        children: [
            {
                path: '',
                component: home
            }
        ]
    },
    {
        path: '/index',
        component: index,
        children: [
            {
                path: '',
                component: home,
                redirect: 'home'
            },
            {
                path: 'message/:model',
                component: basic,
                // 需要登录才能进入此路由
                meta: {
                    auth: true
                }
            },
            {
                path: 'home',
                component: home
            },
            {
                path: 'company',
                component: company
            },
            {
                path: 'question',
                component: question
            },
            {
                path: 'set',
                component: set
            },
            {
                path: 'test',
                component: test
            },
            {
                path: 'help',
                component: help
            },
            {
                path: 'ondone',
                component: ondone
            },
            {
                path: 'details/:model/:id',
                component: details
            }]
    },
    {
        path: '/404',
        name: 'notFound',
        component: notFound
    },
    {
        path: '/403',
        name: 'Role403',
        component: Role403
    },
    {
        path: '/login',
        name: 'login',
        component: login
    }
]

routes = routes.concat(phoneRouters.router)
export default new Router({
    routes
})
