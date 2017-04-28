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
const plan = resolve => {
    require.ensure(['../page/phone/plan/plan.vue'], () => {
        resolve(require('../page/phone/plan/plan.vue'))
    }, 'plan')
}

// ---------------------------手机版首页__实时视频----------------------------------
const pVideo = resolve => {
    require.ensure(['../page/phone/plan/p_video.vue'], () => {
        resolve(require('../page/phone/plan//p_video.vue'))
    }, 'pVideo')
}

// ---------------------------手机版首页__基础信息----------------------------------
const pBasic = resolve => {
    require.ensure(['../page/phone/plan/p_basic.vue'], () => {
        resolve(require('../page/phone/plan/p_basic.vue'))
    }, 'pBasic')
}

// ---------------------------手机版首页__购物链接----------------------------------
const pShop = resolve => {
    require.ensure(['../page/phone/plan/p_shop.vue'], () => {
        resolve(require('../page/phone/plan/p_shop.vue'))
    }, 'pShop')
}

// ---------------------------手机版首页__生长图片----------------------------------
const pGrow = resolve => {
    require.ensure(['../page/phone/plan/p_grow.vue'], () => {
        resolve(require('../page/phone/plan/p_grow.vue'))
    }, 'pGrow')
}

// ---------------------------手机版首页__农事信息、肥料信息__记录页----------------------------------
const pBasicModel1 = resolve => {
    require.ensure(['../page/phone/plan/p_basic_model1.vue'], () => {
        resolve(require('../page/phone/plan/p_basic_model1.vue'))
    }, 'pBasicModel1')
}

// ---------------------------手机版首页__农事信息、肥料信息__记录详情页----------------------------------
const pBasicModel2 = resolve => {
    require.ensure(['../page/phone/plan/p_basic_model2.vue'], () => {
        resolve(require('../page/phone/plan/p_basic_model2.vue'))
    }, 'pBasicModel2')
}

// ---------------------------手机版首页__商品信息----------------------------------
const pCommodity = resolve => {
    require.ensure(['../page/phone/plan/p_commodity.vue'], () => {
        resolve(require('../page/phone/plan/p_commodity.vue'))
    }, 'pCommodity')
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

const routes = [
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
        path: '/',
        name: 'login',
        component: login
    },
    {
        path: '/plan',
        component: plan,
        children: [{
            path: 'pVideo',
            component: pVideo
        },
        {
            path: 'pBasic',
            component: pBasic
        },
        {
            path: 'pShop',
            component: pShop
        },
        {
            path: 'pGrow',
            component: pGrow
        },
        {
            path: 'pBasicModel1',
            component: pBasicModel1
        },
        {
            path: 'pBasicModel2',
            component: pBasicModel2
        },
        {
            path: 'pCommodity',
            component: pCommodity
        }]
    }
]

export default new Router({
    routes
})
