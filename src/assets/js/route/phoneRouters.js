
// ----------------------------种植模块------------------------------------
// ---------------------------手机版首页----------------------------------
const teaIndex = resolve => {
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
const teaBasic = resolve => {
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

// ---------------------------手机版首页__施肥、检测、农事、采制、物流销售信息__记录页----------------------------------

const teaOperate = resolve => {
    require.ensure(['../page/phone/plant/teaOperate.vue'], () => {
        resolve(require('../page/phone/plant/teaOperate.vue'))
    }, 'teaOperate')
}

// ---------------------------手机版首页__商品信息----------------------------------
const commodity = resolve => {
    require.ensure(['../page/phone/plant/commodity.vue'], () => {
        resolve(require('../page/phone/plant/commodity.vue'))
    }, 'commodity')
}

// ---------------------------   种植首页  ----------------------------------

// ---------------- 手机端路由  种植-----------------
export default {
    router: [
        {
            path: '/teaIndex/:code',
            meta: {key: 'teaIndex'},
            component: teaIndex,
            alias: '/teaTrace/tea/index/:code'
        },
        {
            path: '/video/:id',
            meta: {key: 'video', runName: 'plant'},
            component: video,
            alias: '/teaTrace/tea/video/:id'
        },
        {
            path: '/basicInfor/:id',
            meta: {key: 'basicInfor', runName: 'plant'},
            component: teaBasic,
            alias: '/teaTrace/tea/basicInfor/:id'
        },
        {
            path: '/shop/:id',
            meta: {key: 'shop', runName: 'plant'},
            component: shop,
            alias: '/teaTrace/tea/shop/:id'
        },
        {
            path: '/growImg/:id',
            meta: {key: 'growImg', runName: 'plant'},
            component: grow,
            alias: '/teaTrace/tea/growImg/:id'
        },
        {
            path: '/pesticideInfor/:id',
            meta: {key: 'harvest', runName: 'plant'},
            component: teaOperate,
            name: 'harvest',
            alias: '/teaTrace/tea/harvest/:id'
        },
        {
            path: '/farmWorkInfor/:id',
            meta: {key: 'farming', runName: 'plant'},
            component: teaOperate,
            name: 'farming',
            alias: '/teaTrace/tea/farming/:id'
        },
        {
            path: '/fertilizerInfor/:id',
            meta: {key: 'fertilize', runName: 'plant'},
            component: teaOperate,
            name: 'fertilize',
            alias: '/teaTrace/tea/fertilize/:id'
        },
        {
            path: '/detectionInfor/:id',
            meta: {key: 'detect', runName: 'plant'},
            component: teaOperate,
            name: 'detect',
            alias: '/teaTrace/tea/detect/:id'
        },
        {
            path: '/commodityInfor/:id',
            meta: {key: 'commodityInfor', runName: 'plant'},
            component: commodity,
            alias: '/teaTrace/tea/commodityInfor/:id'
        },
        {
            path: '/sale/:id',
            meta: {key: 'sale', runName: 'plant'},
            component: teaOperate,
            name: 'sell',
            alias: '/teaTrace/tea/sale/:id'
        }
    ]
}
