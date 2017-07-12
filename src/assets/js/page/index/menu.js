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
        role: roleData.plant === undefined ? 0 : roleData.plant.cultivate === undefined ? 0 : 1,
        path: '/index/message/plantSerial',
        name: '种植批次管理'
    },
    {
        role: roleData.plant === undefined ? 0 : roleData.plant.farming === undefined ? 0 : 1,
        path: '/index/message/plantFarm',
        name: '农事管理'
    },
    {
        role: roleData.plant === undefined ? 0 : roleData.plant.plan === undefined ? 0 : 1,
        path: '/index/message/plantProduct',
        name: '生产计划管理'
    },
    {
        role: roleData.plant === undefined ? 0 : roleData.plant.harvest === undefined ? 0 : 1,
        path: '/index/message/plantHarvest',
        name: '采收管理'
    }
    ]
},
{
    name: '果蔬加工管理',
    role: roleData.packp === undefined ? 0 : 1,
    src: '/public/images/product.png',
    children: [{
        role: roleData.packp === undefined ? 0 : roleData.packp.pack === undefined ? 0 : 1,
        path: '/index/message/vegetableSerial',
        name: '加工批次管理'
    },
    {
        role: roleData.packp === undefined ? 0 : roleData.packp.detect === undefined ? 0 : 1,
        path: '/index/message/vegetableDetect',
        name: '检验检测管理'
    },
    {
        role: roleData.packp === undefined ? 0 : roleData.packp.code === undefined ? 0 : 1,
        path: '/index/message/vegetableTrace',
        name: '产品溯源管理'
    }
    ]
},
{
    name: '销售管理',
    role: roleData.sell === undefined ? 0 : 1,
    src: '/public/images/sale.png',
    children: [{
        role: roleData.sell === undefined ? 0 : roleData.sell.repertory === undefined ? 0 : 1,
        path: '/index/message/saleProduct',
        name: '销售商品库管理'
    },
    {
        role: roleData.sell === undefined ? 0 : roleData.sell.storage === undefined ? 0 : 1,
        path: '/index/message/saleInput',
        name: '销售入库管理'
    },
    {
        role: roleData.sell === undefined ? 0 : roleData.sell.order === undefined ? 0 : 1,
        path: '/index/message/saleOrder',
        name: '销售订单管理'
    }
    ]
},
{
    name: '仓库物流管理',
    role: roleData.system === undefined ? 0 : 1,
    src: '/public/images/system.png',
    children: [{
        role: roleData.system === undefined ? 0 : roleData.system.company === undefined ? 0 : 1,
        path: '/index/message/storageBasic',
        name: '基础信息管理'
    },
    {
        role: roleData.system === undefined ? 0 : roleData.system.user === undefined ? 0 : 1,
        path: '/index/message/logisticsBatch',
        name: '物流批次管理'
    },
    {
        role: roleData.system === undefined ? 0 : roleData.system.log === undefined ? 0 : 1,
        path: '/index/message/storageOperate',
        name: '仓库管理'
    }
    ]
},
{
    name: '系统管理',
    role: roleData !== 'admin' ? 0 : 1,
    src: '/public/images/system.png',
    children: [{
        role: roleData !== 'admin' ? 0 : 1,
        path: '/index/message/company',
        name: '公司信息管理'
    },
    {
        role: roleData !== 'admin' ? 0 : 1,
        path: '/index/message/userOperate',
        name: '用户管理'
    },
    {
        role: roleData !== 'admin' ? 0 : 1,
        path: '/index/message/systemLog',
        name: '系统日志管理'
    }
    ]
}
]
