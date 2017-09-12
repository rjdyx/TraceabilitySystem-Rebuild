/**
 *  webapp左侧边栏数据
 */

export default[{
    name: '种植管理',
    parentUrl: ['/appIndex/message/fertilize', '/appIndex/message/detect', '/appIndex/message/farming', '/appIndex/message/growImg'],
    role: 0,
    src: '/public/images/pet.png',
    children: [{
        role: 0,
        path: '/appIndex/message/fertilize',
        name: '施肥管理',
        detail: '施肥信息详情'
    },
    {
        role: 0,
        path: '/appIndex/message/detect',
        name: '检测管理',
        detail: '检测信息详情'
    },
    {
        role: 0,
        path: '/appIndex/message/farming',
        name: '农事管理',
        detail: '农事信息详情'
    },
    {
        role: 0,
        path: '/appIndex/message/growImg',
        name: '生长图片',
        detail: '生长图片详情'
    }]
},
{
    name: '采制管理',
    parentUrl: ['/appIndex/message/harvest'],
    role: 0,
    src: '/public/images/product.png',
    children: [{
        role: 0,
        path: '/appIndex/message/harvest',
        name: '采制管理',
        flag: false,
        detail: '采制详情'
    }]
}]
