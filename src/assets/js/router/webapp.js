/**
* 手机端路由
*/

// ----------------------------种植模块------------------------------------
const plantIndex = () => import('../page/phone/plant/index.vue') // 首页
const video = () => import('../page/phone/plant/video.vue') // 实时视频
const pBasic = () => import('../page/phone/plant/basic.vue') // 基础信息
const shop = () => import('../page/phone/plant/shop.vue') // 购物链接
const grow = () => import('../page/phone/plant/grow.vue') // 生长图片
const bM1 = () => import('../page/phone/plant/basic_model1.vue') // 农事信息、肥料信息__记录页
const bM2 = () => import('../page/phone/plant/basic_model1.vue') // 农事信息、肥料信息__记录详情页
const commodity = () => import('../page/phone/plant/commodity.vue') // 商品信息
const breedIndex = () => import('../page/phone/plant/breedIndex.vue') // 种植首页

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
            meta: {key: 'spray', runName: 'plant'},
            component: bM1,
            alias: '/run/plant/spray/:id'
        },
        {
            path: '/pesticideDetails/:id',
            component: bM2,
            meta: {key: 'spray', runName: 'plant'},
            alias: '/run/plant/spray/datails/:id'
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
        },
// ------------------------- 手机端路由   养殖---------------------------------
        {
            path: '/breedIndex/:code',
            meta: {key: 'breedIndex', runName: 'breed'},
            component: breedIndex,
            alias: '/run/breed/index/:code'
        },
        {
            path: '/b_video/:id',
            meta: {key: 'b_video', runName: 'breed'},
            component: video,
            alias: '/run/breed/video/:id'
        },
        {
            path: '/b_basicInfor/:id',
            meta: {key: 'b_basicInfor', runName: 'breed'},
            component: pBasic,
            alias: '/run/breed/basicInfor/:id'
        },
        {
            path: '/b_shop/:id',
            meta: {key: 'b_shop', runName: 'breed'},
            component: shop,
            alias: '/run/breed/shop/:id'
        },
        {
            path: '/growProcess/:id',
            meta: {key: 'growProcess', runName: 'breed'},
            component: grow,
            alias: '/run/breed/growProcess/:id'
        },
        {
            path: '/commodity/:id',
            meta: {key: 'commodity', runName: 'breed'},
            component: commodity,
            alias: '/run/breed/commodity/:id'
        },
        {
            path: '/fodderuse/:id',
            meta: {key: 'fodderuse', runName: 'breed'},
            component: bM1,
            alias: '/run/breed/fodderuse/:id'
        },
        {
            path: '/feedDetails/:id',
            component: bM2,
            meta: {key: 'fodderuse', runName: 'breed'},
            alias: '/run/breed/fodderuse/datails/:id'
        },
        {
            path: '/disease/:id',
            meta: {key: 'disease', runName: 'breed'},
            component: bM1,
            alias: '/run/breed/disease/:id'
        },
        {
            path: '/diseaseDetails/:id',
            meta: {key: 'disease', runName: 'breed'},
            component: bM2,
            alias: '/run/breed/disease/datails/:id'
        },
        {
            path: '/detection/:id',
            meta: {key: 'detection', runName: 'breed'},
            component: bM1,
            alias: '/run/breed/detection/:id'
        },
        {
            path: '/b_detectionDetails/:id',
            meta: {key: 'detection', runName: 'breed'},
            component: bM2,
            alias: '/run/breed/detection/datails/:id'
        },
        {
            path: '/detect/:id',
            meta: {key: 'detect', runName: 'breed'},
            component: bM1,
            alias: '/run/breed/detect/:id'
        },
        {
            path: '/detectDatails/:id',
            meta: {key: 'detect', runName: 'breed'},
            component: bM2,
            alias: '/run/breed/detect/datails/:id'
        }
    ]
}
