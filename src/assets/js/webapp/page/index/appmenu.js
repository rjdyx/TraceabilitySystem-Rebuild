/**
 *  webapp左侧边栏数据
 */
var roleData = {}
if (window.Roles.permissions !== undefined) {
    roleData = window.Roles.permissions.two
}

export default[{
    name: '种植管理',
    role: roleData.plant === undefined ? 0 : 1,
    src: '/public/images/pet.png',
    children: [{
        role: roleData.plant === undefined ? 0 : roleData.plant.farming === undefined ? 0 : 1,
        path: '/appIndex/message/fertilize',
        name: '施肥管理',
        detail: '施肥信息详情'
    },
    {
        role: roleData.plant === undefined ? 0 : roleData.plant.farming === undefined ? 0 : 1,
        path: '/appIndex/message/detect',
        name: '检测管理',
        detail: '检测信息详情'
    },
    {
        role: roleData.plant === undefined ? 0 : roleData.plant.farming === undefined ? 0 : 1,
        path: '/appIndex/message/farming',
        name: '农事管理',
        detail: '农事信息详情'
    },
    {
        role: roleData.plant === undefined ? 0 : roleData.plant.farming === undefined ? 0 : 1,
        path: '/appIndex/message/growImg',
        name: '生长图片',
        detail: '生长图片详情'
    }]
},
{
    name: '采制管理',
    role: roleData.delivery === undefined ? 0 : 1,
    src: '/public/images/product.png',
    children: [{
        role: roleData.delivery === undefined ? 0 : roleData.delivery.order === undefined ? 0 : 1,
        path: '/appIndex/message/harvest',
        name: '采收管理',
        flag: false,
        detail: '采收信息详情'
    }]
}]
