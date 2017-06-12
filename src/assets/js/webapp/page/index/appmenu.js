/**
 *  webapp左侧边栏数据
 */
var roleData = {}
if (window.Roles.permissions !== undefined) {
    roleData = window.Roles.permissions.two
}

export default[{
    name: '养殖管理',
    role: roleData.basic === undefined ? 0 : 1,
    src: '/public/images/plant.png',
    children: [{
        role: roleData.basic === undefined ? 0 : roleData.basic.category === undefined ? 0 : 1,
        path: '/appIndex/message/categoryBase',
        name: '饲料使用'
    },
    {
        role: roleData.basic === undefined ? 0 : roleData.basic.operate === undefined ? 0 : 1,
        path: '/appIndex/message/personFile',
        name: '病疫'
    },
    {
        role: roleData.basic === undefined ? 0 : roleData.basic.expert === undefined ? 0 : 1,
        path: '/appIndex/message/expertFile',
        name: '检疫'
    },
    {
        role: roleData.basic === undefined ? 0 : roleData.basic.client === undefined ? 0 : 1,
        path: '/appIndex/message/clientFile',
        name: '检验检测'
    },
    {
        role: roleData.basic === undefined ? 0 : roleData.basic.supplier === undefined ? 0 : 1,
        path: '/appIndex/message/supplierFile',
        name: '圈舍维护'
    },
    {
        role: roleData.basic === undefined ? 0 : roleData.basic.product === undefined ? 0 : 1,
        path: '/appIndex/message/productFile',
        name: '出栏'
    },
    {
        role: roleData.basic === undefined ? 0 : roleData.basic.product === undefined ? 0 : 1,
        path: '/appIndex/message/product',
        name: '生长过程'
    }
    ]},
{
    name: '屠宰加工管理',
    role: roleData.beast === undefined ? 0 : 1,
    src: '/public/images/plant.png',
    children: [{
        role: roleData.beast === undefined ? 0 : roleData.beast.basic === undefined ? 0 : 1,
        path: '/appIndex/message/baseManage',
        name: '加工批次检测'
    },
    {
        role: roleData.beast === undefined ? 0 : roleData.beast.breed === undefined ? 0 : 1,
        path: '/appIndex/message/serialManage',
        name: '产品溯源码管理'
    }]
},
{
    name: '种植管理',
    role: roleData.packb === undefined ? 0 : 1,
    src: '/public/images/pet.png',
    children: [{
        role: roleData.packb === undefined ? 0 : roleData.packb.pack === undefined ? 0 : 1,
        path: '/appIndex/message/petProcess',
        name: '种植批次管理'
    },
    {
        role: roleData.packb === undefined ? 0 : roleData.packb.detect === undefined ? 0 : 1,
        path: '/appIndex/message/petDectect',
        name: '种植事物管理'
    },
    {
        role: roleData.packb === undefined ? 0 : roleData.packb.code === undefined ? 0 : 1,
        path: '/appIndex/message/petTrace',
        name: '产品溯源管理'
    }
    ]
},
{
    name: '果蔬加工管理',
    role: roleData.plant === undefined ? 0 : 1,
    src: '/public/images/plantation.png',
    children: [{
        role: roleData.plant === undefined ? 0 : roleData.plant.basic === undefined ? 0 : 1,
        path: '/appIndex/message/plantBase',
        name: '加工检测管理'
    },
    {
        role: roleData.plant === undefined ? 0 : roleData.plant.cultivate === undefined ? 0 : 1,
        path: '/appIndex/message/plantSerial',
        name: '产品溯源码管理'
    }
    ]
},
{
    name: '物流运输管理',
    role: roleData.packp === undefined ? 0 : 1,
    src: '/public/images/product.png',
    children: [{
        role: roleData.packp === undefined ? 0 : roleData.packp.pack === undefined ? 0 : 1,
        path: '/appIndex/message/vegetableSerial',
        name: '物流批次管理'
    }
    ]
},
{
    name: '销售管理',
    role: roleData.delivery === undefined ? 0 : 1,
    src: '/public/images/express.png',
    children: [{
        role: roleData.delivery === undefined ? 0 : roleData.delivery.basic === undefined ? 0 : 1,
        path: '/appIndex/message/Logisticbase',
        name: '销售订单管理'
    }
    ]
}
]
