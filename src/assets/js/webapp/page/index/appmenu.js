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
        path: '/appIndex/message/plantThing',
        name: '种植事物管理',
        detail: '种植事物管理详情'
    }]
},
{
    name: '果蔬加工管理',
    role: roleData.packp === undefined ? 0 : 1,
    src: '/public/images/plantation.png',
    children: [{
        role: roleData.packp === undefined ? 0 : roleData.packp.detect === undefined ? 0 : 1,
        path: '/appIndex/message/processManage',
        name: '加工检测管理',
        detail: '加工检测管理详情'
    },
    {
        role: roleData.packp === undefined ? 0 : roleData.packp.code === undefined ? 0 : 1,
        path: '/appIndex/message/vegetableTrace',
        name: '产品溯源码管理',
        detail: '产品溯源码管理详情'
    }]
},
{
    name: '物流运输管理',
    role: roleData.delivery === undefined ? 0 : 1,
    src: '/public/images/product.png',
    children: [{
        role: roleData.delivery === undefined ? 0 : roleData.delivery.order === undefined ? 0 : 1,
        path: '/appIndex/message/expressManage',
        name: '物流批次管理',
        detail: '物流批次管理详情'
    }]
},
{
    name: '销售管理',
    role: roleData.sell === undefined ? 0 : 1,
    src: '/public/images/express.png',
    children: [{
        role: roleData.sell === undefined ? 0 : roleData.sell.order === undefined ? 0 : 1,
        path: '/appIndex/message/saleOrder',
        name: '销售订单管理',
        detail: '销售订单详情'
    }]
}]
