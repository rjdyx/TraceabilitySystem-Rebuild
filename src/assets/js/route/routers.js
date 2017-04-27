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

// ---------------------------手机版首页----------------------------------
const plantIndex = resolve => {
    require.ensure(['../page/phone/plant/index.vue'], () => {
        resolve(require('../page/phone/plant/index.vue'))
    }, 'plantIndex')
}

// ---------------------------手机版首页__实时视频----------------------------------
const video = resolve => {
    require.ensure(['../page/phone/plant/video.vue'], () => {
        resolve(require('../page/phone/plant/video.vue'))
    }, 'video')
}

// ---------------------------手机版首页__基础信息----------------------------------
const pBasic = resolve => {
    require.ensure(['../page/phone/plant/basic.vue'], () => {
        resolve(require('../page/phone/plant/basic.vue'))
    }, 'basic')
}

// ---------------------------手机版首页__购物链接----------------------------------
const shop = resolve => {
    require.ensure(['../page/phone/plant/shop.vue'], () => {
        resolve(require('../page/phone/plant/shop.vue'))
    }, 'shop')
}

// ---------------------------手机版首页__生长图片----------------------------------
const grow = resolve => {
    require.ensure(['../page/phone/plant/grow.vue'], () => {
        resolve(require('../page/phone/plant/grow.vue'))
    }, 'grow')
}

// ---------------------------手机版首页__农事信息、肥料信息__记录页----------------------------------
const bM1 = resolve => {
    require.ensure(['../page/phone/plant/basic_model1.vue'], () => {
        resolve(require('../page/phone/plant/basic_model1.vue'))
    }, 'bM1')
}

// ---------------------------手机版首页__农事信息、肥料信息__记录详情页----------------------------------
const bM2 = resolve => {
    require.ensure(['../page/phone/plant/basic_model2.vue'], () => {
        resolve(require('../page/phone/plant/basic_model2.vue'))
    }, 'bM2')
}

// ---------------------------手机版首页__商品信息----------------------------------
const commodity = resolve => {
    require.ensure(['../page/phone/plant/commodity.vue'], () => {
        resolve(require('../page/phone/plant/commodity.vue'))
    }, 'commodity')
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
        alias: '/run/login',
        meta: {
            requiresAuth: true
        }
    },
    // ---------------- 手机端路由 -----------------
    {
        path: '/plantIndex/:code',
        // name: '/run/plant/index/:code',
        meta: {key: 'plantIndex'},
        component: plantIndex,
        alias: '/run/plant/index/:code'
    },
    {
        path: '/video/:id',
        meta: {key: 'video'},
        component: video,
        alias: '/run/plant/video/:id'
    },
    {
        path: '/basicInfor/:id',
        meta: {key: 'basicInfor'},
        component: pBasic,
        alias: '/run/plant/basicInfor/:id'
    },
    {
        path: '/shop/:id',
        meta: {key: 'shop'},
        component: shop,
        alias: '/run/plant/shop/:id'
    },
    {
        path: '/growImg/:id',
        meta: {key: 'growImg'},
        component: grow,
        alias: '/run/plant/growImg/:id'
    },
    {
        path: '/pesticideInfor/:id',
        meta: {key: 'pesticideInfor'},
        component: bM1,
        alias: '/run/plant/pesticideInfor/:id'
    },
    {
        path: '/datails/:id',
        component: bM2,
        meta: {key: 'pesticideInfor'},
        alias: '/run/plant/pesticideInfor/datails/:id'
    },
    {
        path: '/farmWorkInfor/:id',
        meta: {key: 'farmWorkInfor'},
        component: bM1,
        alias: '/run/plant/farmWorkInfor/:id'
    },
    {
        path: 'farmWorkInfor/datails/:id',
        meta: {key: 'farmWorkInfor'},
        component: bM2,
        alias: '/run/plant/farmWorkInfor/datails/:id'
    },
    {
        path: '/fertilizerInfor/:id',
        meta: {key: 'fertilizerInfor'},
        component: bM1,
        alias: '/run/plant/fertilizerInfor/:id'
    },
    {
        path: '/fertilizerInfor/datails/:id',
        meta: {key: 'fertilizerInfor'},
        component: bM2,
        alias: '/run/plant/fertilizerInfor/datails/:id'
    },
    {
        path: '/detectionInfor/:id',
        meta: {key: 'detectionInfor'},
        component: bM1,
        alias: '/run/plant/detectionInfor/:id'
    },
    {
        path: '/detectionInfor/datails/:id',
        meta: {key: 'detectionInfor'},
        component: bM2,
        alias: '/run/plant/detectionInfor/datails/:id'
    },
    {
        path: '/commodityInfor/:id',
        meta: {key: 'commodityInfor'},
        component: commodity,
        alias: '/run/plant/commodityInfor/:id'
    }
]

export default new Router({
    routes
})
