/**
 *  左菜单栏数据
 */
var roleData = {}
if (window.Roles.permissions !== undefined) {
    roleData = window.Roles.permissions.two
}

export default[{
    name: '种植管理',
    role: roleData.plant === undefined ? 0 : 1,
    src: '/public/images/plantation.png',
    children: [{
        role: roleData.plant === undefined ? 0 : roleData.plant.basic === undefined ? 0 : 1,
        path: '/index/message/plantBase',
        name: '基础信息管理'
    },
    {
        role: roleData.planta === undefined ? 0 : roleData.plant.cultivate === undefined ? 0 : 1,
        path: '/index/message/plantSerial',
        name: '种植批次管理'
    },
    {
        role: roleData.plant === undefined ? 0 : roleData.plant.farming === undefined ? 0 : 1,
        path: '/index/message/plantFarm',
        name: '农事管理'
    }]
},
{
    name: '采制加工管理',
    role: roleData.harvest === undefined ? 0 : 1,
    src: '/public/images/product.png',
    children: [{
        role: roleData.harvest === undefined ? 0 : roleData.harvest.batch === undefined ? 0 : 1,
        path: '/index/message/vegetableSerial',
        name: '采制批次管理'
    }]
},
{
    name: '仓库物流管理',
    role: roleData.delivery === undefined ? 0 : 1,
    src: '/public/images/system.png',
    children: [{
        role: roleData.delivery === undefined ? 0 : roleData.delivery.basic === undefined ? 0 : 1,
        path: '/index/message/storageBasic',
        name: '基础信息管理'
    },
    {
        role: roleData.delivery === undefined ? 0 : roleData.delivery.order === undefined ? 0 : 1,
        path: '/index/message/logisticsBatch',
        name: '物流批次管理'
    },
    {
        role: roleData.delivery === undefined ? 0 : roleData.delivery.store === undefined ? 0 : 1,
        path: '/index/message/storageOperate',
        name: '仓库管理'
    }]
},
{
    name: '销售管理',
    role: roleData.sell === undefined ? 0 : 1,
    src: '/public/images/sale.png',
    children: [{
        role: roleData.sell === undefined ? 0 : roleData.sell.basic === undefined ? 0 : 1,
        path: '/index/message/saleProduct',
        name: '基础信息管理'
    },
    {
        role: roleData.sell === undefined ? 0 : roleData.sell.order === undefined ? 0 : 1,
        path: '/index/message/saleOrder',
        name: '销售订单管理'
    }]
},
{
    name: '系统管理',
    role: roleData.system === undefined ? 0 : 1,
    src: '/public/images/system.png',
    children: [{
        role: roleData.system === undefined ? 0 : roleData.system.comapny === undefined ? 0 : 1,
        path: '/index/company',
        name: '公司信息管理'
    },
    {
        role: roleData.system === undefined ? 0 : roleData.system.user === undefined ? 0 : 1,
        path: '/index/message/userOperate',
        name: '用户管理'
    },
    {
        role: roleData.system === undefined ? 0 : roleData.system.log === undefined ? 0 : 1,
        path: '/index/message/systemLog',
        name: '系统日志管理'
    }]
},
{
    name: '运营管理',
    role: roleData !== 'admin' ? 0 : 1,
    src: '/public/images/system.png',
    children: [{
        role: roleData !== 'admin' ? 0 : 1,
        path: '/index/message/adminRole',
        name: '权限管理'
    },
    {
        role: roleData !== 'admin' ? 0 : 1,
        path: '/index/message/adminCompany',
        name: '入驻公司管理'
    },
    {
        role: roleData !== 'admin' ? 0 : 1,
        path: '/index/message/adminFeedback',
        name: '用户反馈管理'
    },
    {
        role: roleData !== 'admin' ? 0 : 1,
        path: '/index/message/adminLog',
        name: '系统日志管理'
    }]
}]
