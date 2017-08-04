
// ----------------------------种植模块------------------------------------
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
// ---------------------------手机版首页__销售信息----------------------------------
const pSale = resolve => {
    require.ensure(['../page/phone/plant/sale.vue'], () => {
        resolve(require('../page/phone/plant/sale.vue'))
    }, 'sale')
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

// ---------------------------   种植首页  ----------------------------------
const breedIndex = resolve => {
    require.ensure(['../page/phone/plant/breedIndex.vue'], () => {
        resolve(require('../page/phone/plant/breedIndex.vue'))
    }, 'breedIndex')
}

// ---------------- 手机端路由  种植-----------------
export default {
    router: [
        {
            path: '/plantIndex/:code',
            // name: '/run/plant/index/:code',
            meta: {key: 'plantIndex'},
            component: plantIndex,
            alias: '/run/plant/index/:code'
        },
        {
            path: '/video/:id',
            meta: {key: 'video', runName: 'plant'},
            component: video,
            alias: '/run/plant/video/:id'
        },
        {
            path: '/basicInfor/:id',
            meta: {key: 'basicInfor', runName: 'plant'},
            component: pBasic,
            alias: '/run/plant/basicInfor/:id'
        },
        {
            path: '/sale/:id',
            meta: {key: 'sale', runName: 'plant'},
            component: pSale,
            alias: '/run/plant/sale/:id'
        },
        {
            path: '/shop/:id',
            meta: {key: 'shop', runName: 'plant'},
            component: shop,
            alias: '/run/plant/shop/:id'
        },
        {
            path: '/growImg/:id',
            meta: {key: 'growImg', runName: 'plant'},
            component: grow,
            alias: '/run/plant/growImg/:id'
        },
        {
            path: '/pesticideInfor/:id',
            meta: {key: 'harvest', runName: 'plant'},
            component: bM1,
            alias: '/run/plant/harvest/:id'
        },
        {
            path: '/pesticideDetails/:id',
            component: bM2,
            meta: {key: 'harvest', runName: 'plant'},
            alias: '/run/plant/harvest/datails/:id'
        },
        {
            path: '/farmWorkInfor/:id',
            meta: {key: 'farming', runName: 'plant'},
            component: bM1,
            alias: '/run/plant/farming/:id'
        },
        {
            path: '/farmWorkDetails/:id',
            meta: {key: 'farming', runName: 'plant'},
            component: bM2,
            alias: '/run/plant/farming/datails/:id'
        },
        {
            path: '/fertilizerInfor/:id',
            meta: {key: 'fertilize', runName: 'plant'},
            component: bM1,
            alias: '/run/plant/fertilize/:id'
        },
        {
            path: '/fertilizerDetails/:id',
            meta: {key: 'fertilize', runName: 'plant'},
            component: bM2,
            alias: '/run/plant/fertilize/datails/:id'
        },
        {
            path: '/detectionInfor/:id',
            meta: {key: 'detect', runName: 'plant'},
            component: bM1,
            alias: '/run/plant/detect/:id'
        },
        {
            path: '/detectionDetails/:id',
            meta: {key: 'detect', runName: 'plant'},
            component: bM2,
            alias: '/run/plant/detect/datails/:id'
        },
        {
            path: '/commodityInfor/:id',
            meta: {key: 'commodityInfor', runName: 'plant'},
            component: commodity,
            alias: '/run/plant/commodityInfor/:id'
        }
    ]
}
