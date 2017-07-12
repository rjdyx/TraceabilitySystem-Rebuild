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
    }
    ]
},
{
    name: '采收加工管理',
    role: roleData.packp === undefined ? 0 : 1,
    src: '/public/images/product.png',
    children: [{
        role: roleData.packp === undefined ? 0 : roleData.packp.pack === undefined ? 0 : 1,
        path: '/index/message/vegetableSerial',
        name: '采制批次管理'
    },
    {
        role: roleData.packp === undefined ? 0 : roleData.packp.detect === undefined ? 0 : 1,
        path: '/index/message/vegetableDetect',
        name: '加工批次管理'
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
        name: '基础信息管理'
    },
    {
        role: roleData.sell === undefined ? 0 : roleData.sell.order === undefined ? 0 : 1,
        path: '/index/message/saleOrder',
        name: '销售订单管理'
    }
    ]
},
{
    name: '物流管理',
    role: roleData.delivery === undefined ? 0 : 1,
    src: '/public/images/express.png',
    children: [{
        role: roleData.delivery === undefined ? 0 : roleData.delivery.basic === undefined ? 0 : 1,
        path: '/index/message/Logisticbase',
        name: '基础信息管理'
    },
    {
        role: roleData.delivery === undefined ? 0 : roleData.delivery.order === undefined ? 0 : 1,
        path: '/index/message/logisticSerial',
        name: '物流批次管理'
    }
    ]
},

{
    name: '系统管理',
    role: roleData.system === undefined ? 0 : 1,
    src: '/public/images/system.png',
    children: [{
        role: roleData.system === undefined ? 0 : roleData.system.company === undefined ? 0 : 1,
        path: '/index/company',
        name: '公司信息管理'
    },
    {
        role: roleData.system === undefined ? 0 : roleData.system.user === undefined ? 0 : 1,
        path: '/index/message/systemUser',
        name: '用户管理'
    },
    {
        role: roleData.system === undefined ? 0 : roleData.system.log === undefined ? 0 : 1,
        path: '/index/message/systemLog',
        name: '系统日志'
    },
    {
        role: roleData.system === undefined ? 0 : roleData.system.statement === undefined ? 0 : 1,
        path: '/index/ondone',
        name: '报表统计'
    },
    {
        role: roleData.system === undefined ? 0 : roleData.system.custom === undefined ? 0 : 1,
        path: '/index/message/custom',
        name: '溯源自定义'
    }
    ]
},
{
    name: '运营管理',
    role: roleData !== 'admin' ? 0 : 1,
    src: '/public/images/system.png',
    children: [{
        role: roleData !== 'admin' ? 0 : 1,
        path: '/index/message/rightsOperate',
        name: '权限管理'
    },
    {
        role: roleData !== 'admin' ? 0 : 1,
        path: '/index/message/settleOperate',
        name: '入驻单位管理'
    },
    {
        role: roleData !== 'admin' ? 0 : 1,
        path: '/index/message/usersOperate',
        name: '用户反馈管理'
    },
    {
        role: roleData !== 'admin' ? 0 : 1,
        path: '/index/message/logOperate',
        name: '日志管理'
    }
    ]
}
]
