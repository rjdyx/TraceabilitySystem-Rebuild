/**
 *  左菜单栏数据
 */
var roleData = {}
if (window.Roles.permissions !== undefined) {
    roleData = window.Roles.permissions.two
}

export default[{
    name: '基础信息管理',
    role: roleData.basic === undefined ? 0 : 1,
    src: '/public/images/plant.png',
    children: [{
        role: roleData.basic === undefined ? 0 : roleData.basic.category === undefined ? 0 : 1,
        path: '/index/message/categoryBase',
        name: '分类档案管理'
    },
    {
        role: roleData.basic === undefined ? 0 : roleData.basic.operate === undefined ? 0 : 1,
        path: '/index/message/personFile',
        name: '人员档案管理'
    },
    {
        role: roleData.basic === undefined ? 0 : roleData.basic.export === undefined ? 0 : 1,
        path: '/index/message/expertFile',
        name: '专家档案管理'
    },
    {
        role: roleData.basic === undefined ? 0 : roleData.basic.client === undefined ? 0 : 1,
        path: '/index/message/clientFile',
        name: '客户档案管理'
    },
    {
        role: roleData.basic === undefined ? 0 : roleData.basic.supplier === undefined ? 0 : 1,
        path: '/index/message/supplierFile',
        name: '供货商档案管理'
    },
    {
        role: roleData.basic === undefined ? 0 : roleData.basic.product === undefined ? 0 : 1,
        path: '/index/message/productFile',
        name: '产品档案管理'
    }
    ]},
{
    name: '养殖管理',
    role: roleData.beast === undefined ? 0 : 1,
    src: '/public/images/plant.png',
    children: [{
        role: roleData.beast === undefined ? 0 : roleData.beast.basic === undefined ? 0 : 1,
        path: '/index/message/baseManage',
        name: '基础信息管理'
    },
    {
        role: roleData.beast === undefined ? 0 : roleData.beast.breed === undefined ? 0 : 1,
        path: '/index/message/serialManage',
        name: '养殖批次管理'
    },
    {
        role: roleData.beast === undefined ? 0 : roleData.beast.fodderuse === undefined ? 0 : 1,
        path: '/index/message/feedManage',
        name: '饲料使用管理'
    },
    {
        role: roleData.beast === undefined ? 0 : roleData.beast.disease === undefined ? 0 : 1,
        path: '/index/message/plagueManage',
        name: '病疫管理'
    },
    {
        role: roleData.beast === undefined ? 0 : roleData.beast.detection === undefined ? 0 : 1,
        path: '/index/message/detectionManage',
        name: '检疫管理'
    },
    {
        role: roleData.beast === undefined ? 0 : roleData.beast.detect === undefined ? 0 : 1,
        path: '/index/message/beastDetectManage',
        name: '检测管理'
    },
    {
        role: roleData.beast === undefined ? 0 : roleData.beast.clean === undefined ? 0 : 1,
        path: '/index/message/areaManage',
        name: '圈舍维护管理'
    },
    {
        role: roleData.beast === undefined ? 0 : roleData.beast.dispose === undefined ? 0 : 1,
        path: '/index/message/innocuityManage',
        name: '无害化管理'
    },
    {
        role: roleData.beast === undefined ? 0 : roleData.beast.come === undefined ? 0 : 1,
        path: '/index/message/slaughterManage',
        name: '出栏管理'
    },
    {
        role: roleData.beast === undefined ? 0 : roleData.beast.plan === undefined ? 0 : 1,
        path: '/index/message/planManage',
        name: '养殖计划管理'
    }]
},
{
    name: '屠宰加工管理',
    role: roleData.packb === undefined ? 0 : 1,
    src: '/public/images/pet.png',
    children: [{
        role: roleData.packb === undefined ? 0 : roleData.packb.pack === undefined ? 0 : 1,
        path: '/index/message/petProcess',
        name: '加工批次管理'
    },
    {
        role: roleData.packb === undefined ? 0 : roleData.packb.detect === undefined ? 0 : 1,
        path: '/index/message/petDectect',
        name: '检验检测管理'
    },
    {
        role: roleData.packb === undefined ? 0 : roleData.packb.code === undefined ? 0 : 1,
        path: '/index/message/petTrace',
        name: '产品溯源管理'
    }
    ]
},
{
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
