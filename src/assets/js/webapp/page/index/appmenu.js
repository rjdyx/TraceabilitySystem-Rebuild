/**
 *  webapp左侧边栏数据
 */
var roleData = {}
if (window.Roles.permissions !== undefined) {
    roleData = window.Roles.permissions.two
}

export default[{
    name: '养殖管理',
    role: roleData.beast === undefined ? 0 : 1,
    src: '/public/images/plant.png',
    children: [{
        role: roleData.beast === undefined ? 0 : roleData.beast.fodderuse === undefined ? 0 : 1,
        path: '/appIndex/message/feedUse',
        name: '饲料使用',
        detail: '饲料详情'
    },
    {
        role: roleData.beast === undefined ? 0 : roleData.beast.disease === undefined ? 0 : 1,
        path: '/appIndex/message/plague',
        name: '病疫',
        detail: '病疫详情'
    },
    {
        role: roleData.beast === undefined ? 0 : roleData.beast.detection === undefined ? 0 : 1,
        path: '/appIndex/message/quarantine',
        name: '检疫',
        detail: '检疫详情'
    },
    {
        role: roleData.beast === undefined ? 0 : roleData.beast.detect === undefined ? 0 : 1,
        path: '/appIndex/message/detectTest',
        name: '检验检测',
        detail: '检验检测详情'
    },
    {
        role: roleData.beast === undefined ? 0 : roleData.beast.clean === undefined ? 0 : 1,
        path: '/appIndex/message/penPreserve',
        name: '圈舍维护',
        detail: '圈舍维护详情'
    },
    {
        role: roleData.beast === undefined ? 0 : roleData.beast.come === undefined ? 0 : 1,
        path: '/appIndex/message/export',
        name: '出栏',
        detail: '出栏详情'
    },
    {
        role: roleData.beast === undefined ? 0 : roleData.beast.breed === undefined ? 0 : 1,
        path: '/appIndex/message/courseProcess',
        name: '生长过程',
        detail: '生长过程详情'
    }
    ]},
{
    name: '屠宰加工管理',
    role: roleData.packb === undefined ? 0 : 1,
    src: '/public/images/plant.png',
    children: [{
        role: roleData.packb === undefined ? 0 : roleData.packb.detect === undefined ? 0 : 1,
        path: '/appIndex/message/processSerial',
        name: '加工批次检测',
        detail: '加工批次检测详情'
    },
    {
        role: roleData.beast === undefined ? 0 : roleData.beast.breed === undefined ? 0 : 1,
        path: '/appIndex/message/serialManage',
        name: '产品溯源码管理',
        detail: '产品溯源码管理详情'
    }]
},
{
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
    }
    ]
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
    }
    ]
},
{
    name: '销售管理',
    role: roleData.sell === undefined ? 0 : 1,
    src: '/public/images/express.png',
    children: [{
        role: roleData.sell === undefined ? 0 : roleData.sell.order === undefined ? 0 : 1,
        path: '/appIndex/message/saleOrder',
        name: '销售订单管理',
        detail: '饲料详情'
    }
    ]
}
]
