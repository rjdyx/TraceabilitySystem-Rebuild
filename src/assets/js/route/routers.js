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

// =============================头部导航条按钮跳转====================================
// -------------------------------问题反馈------------------------------
const question = resolve => {
    require.ensure(['../components/top/question.vue'], () => {
        resolve(require('../components/top/question.vue'))
    }, 'question')
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

var routes = [
    {
        path: '/index',
        name: 'index',
        component: index,
        meta: { auth: true }
    },
    {
        path: '/index',
        component: index,
        children: [{
            path: 'message/:model',
            component: basic,
            // 需要登录才能进入此路由
            meta: {
                auth: true
            }
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
        path: '/login',
        name: 'login',
        component: login
    }
    // ---------------- 手机端路由 -----------------
    // {
    //     path: '/plantIndex/:code',
    //     meta: {key: 'plantIndex'},
    //     component: plantIndex,
    //     alias: '/run/plant/index/:code'
    // },
    // {
    //     path: '/video/:id',
    //     meta: {key: 'video'},
    //     component: video,
    //     alias: '/run/plant/video/:id'
    // },
    // {
    //     path: '/basicInfor/:id',
    //     meta: {key: 'basicInfor'},
    //     component: pBasic,
    //     alias: '/run/plant/basicInfor/:id'
    // },
    // {
    //     path: '/shop/:id',
    //     meta: {key: 'shop'},
    //     component: shop,
    //     alias: '/run/plant/shop/:id'
    // },
    // {
    //     path: '/growImg/:id',
    //     meta: {key: 'growImg'},
    //     component: grow,
    //     alias: '/run/plant/growImg/:id'
    // },
    // {
    //     path: '/pesticideInfor/:id',
    //     meta: {key: 'spray'},
    //     component: bM1,
    //     alias: '/run/plant/spray/:id'
    // },
    // {
    //     path: '/datails/:id',
    //     component: bM2,
    //     meta: {key: 'spray'},
    //     alias: '/run/plant/spray/datails/:id'
    // },
    // {
    //     path: '/farmWorkInfor/:id',
    //     meta: {key: 'farming'},
    //     component: bM1,
    //     alias: '/run/plant/farming/:id'
    // },
    // {
    //     path: 'farmWorkInfor/datails/:id',
    //     meta: {key: 'farming'},
    //     component: bM2,
    //     alias: '/run/plant/farming/datails/:id'
    // },
    // {
    //     path: '/fertilizerInfor/:id',
    //     meta: {key: 'fertilize'},
    //     component: bM1,
    //     alias: '/run/plant/fertilize/:id'
    // },
    // {
    //     path: '/fertilizerInfor/datails/:id',
    //     meta: {key: 'fertilize'},
    //     component: bM2,
    //     alias: '/run/plant/fertilize/datails/:id'
    // },
    // {
    //     path: '/detectionInfor/:id',
    //     meta: {key: 'detect'},
    //     component: bM1,
    //     alias: '/run/plant/detect/:id'
    // },
    // {
    //     path: '/detectionInfor/datails/:id',
    //     meta: {key: 'detect'},
    //     component: bM2,
    //     alias: '/run/plant/detect/datails/:id'
    // },
    // {
    //     path: '/commodityInfor/:id',
    //     meta: {key: 'commodityInfor'},
    //     component: commodity,
    //     alias: '/run/plant/commodityInfor/:id'
    // }
]

routes = routes.concat(phoneRouters.router)
export default new Router({
    routes
})
