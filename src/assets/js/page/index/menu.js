/**
 *  左菜单栏数据
 */
export default[{
    name: '基础信息管理',
    // role: Vue.Roles.basic === undefined ? 0 : 1,
    src: '/public/images/plant.png',
    children: [{
        // role: Vue.Roles.basic === undefined ? 0 : Vue.Roles.basic.category === undefined ? 0 : 1,
        path: '/index/message/categoryBase',
        name: '分类档案管理'
    },
    {
        // role: Vue.Roles.basic === undefined ? 0 : Vue.Roles.basic.operate === undefined ? 0 : 1,
        path: '/index/message/personFile',
        name: '人员档案管理'
    },
    {
        // role: Vue.Roles.basic === undefined ? 0 : Vue.Roles.basic.export === undefined ? 0 : 1,
        path: '/index/message/expertFile',
        name: '专家档案管理'
    },
    {
        // role: Vue.Roles.basic === undefined ? 0 : Vue.Roles.basic.client === undefined ? 0 : 1,
        path: '/index/message/clientFile',
        name: '客户档案管理'
    },
    {
        // role: Vue.Roles.basic === undefined ? 0 : Vue.Roles.basic.supplier === undefined ? 0 : 1,
        path: '/index/message/supplierFile',
        name: '供货商档案管理'
    },
    {
        // role: Vue.Roles.basic === undefined ? 0 : Vue.Roles.basic.product === undefined ? 0 : 1,
        path: '/index/message/productFile',
        name: '产品档案管理'
    }
    ]},
{
    name: '养殖管理',
    // role: Vue.Roles.beast === undefined ? 0 : 1,
    src: '/public/images/plant.png',
    children: [{
        // role: Vue.Roles.beast === undefined ? 0 : Vue.Roles.beast.basic === undefined ? 0 : 1,
        path: '/index/message/baseManage',
        name: '基础信息管理'
    },
    {
        // role: Vue.Roles.beast === undefined ? 0 : Vue.Roles.beast.breed === undefined ? 0 : 1,
        path: '/index/message/serialManage',
        name: '养殖批次管理'
    },
    {
        // role: Vue.Roles.beast === undefined ? 0 : Vue.Roles.beast.fodderuse === undefined ? 0 : 1,
        path: '/index/message/feedManage',
        name: '饲料使用管理'
    },
    {
        // role: Vue.Roles.beast === undefined ? 0 : Vue.Roles.beast.disease === undefined ? 0 : 1,
        path: '/index/message/plagueManage',
        name: '病疫管理'
    },
    {
        // role: Vue.Roles.beast === undefined ? 0 : Vue.Roles.beast.detection === undefined ? 0 : 1,
        path: '/index/message/detectionManage',
        name: '检疫管理'
    },
    {
        // role: Vue.Roles.beast === undefined ? 0 : Vue.Roles.beast.detect === undefined ? 0 : 1,
        path: '/index/message/beastDetectManage',
        name: '检测管理'
    },
    {
        // role: Vue.Roles.beast === undefined ? 0 : Vue.Roles.beast.clean === undefined ? 0 : 1,
        path: '/index/message/areaManage',
        name: '圈舍维护管理'
    },
    {
        // role: Vue.Roles.beast === undefined ? 0 : Vue.Roles.beast.dispose === undefined ? 0 : 1,
        path: '/index/message/innocuityManage',
        name: '无害化管理'
    },
    {
        // role: Vue.Roles.beast === undefined ? 0 : Vue.Roles.beast.come === undefined ? 0 : 1,
        path: '/index/message/slaughterManage',
        name: '出栏管理'
    },
    {
        // role: Vue.Roles.beast === undefined ? 0 : Vue.Roles.beast.plan === undefined ? 0 : 1,
        path: '/index/message/planManage',
        name: '养殖计划管理'
    }]
},
{
    name: '屠宰加工管理',
    // role: Vue.Roles.packb === undefined ? 0 : 1,
    src: '/public/images/pet.png',
    children: [{
        // role: Vue.Roles.packb === undefined ? 0 : Vue.Roles.packb.pack === undefined ? 0 : 1,
        path: '/index/message/petProcess',
        name: '加工批次管理'
    },
    {
        // role: Vue.Roles.packb === undefined ? 0 : Vue.Roles.packb.detect === undefined ? 0 : 1,
        path: '/index/message/petDectect',
        name: '检验检测管理'
    },
    {
        // role: Vue.Roles.packb === undefined ? 0 : Vue.Roles.packb.code === undefined ? 0 : 1,
        path: '/index/message/petTrace',
        name: '产品溯源管理'
    }
    ]
},
{
    name: '种植管理',
    // role: Vue.Roles.plant === undefined ? 0 : 1,
    src: '/public/images/plantation.png',
    children: [{
        // role: Vue.Roles.plant === undefined ? 0 : Vue.Roles.plant.basic === undefined ? 0 : 1,
        path: '/index/message/plantBase',
        name: '基础信息管理'
    },
    {
        // role: Vue.Roles.plant === undefined ? 0 : Vue.Roles.plant.cultivate === undefined ? 0 : 1,
        path: '/index/message/plantSerial',
        name: '种植批次管理'
    },
    {
        // role: Vue.Roles.plant === undefined ? 0 : Vue.Roles.plant.farming === undefined ? 0 : 1,
        path: '/index/message/plantFarm',
        name: '农事管理'
    },
    {
        // role: Vue.Roles.plant === undefined ? 0 : Vue.Roles.plant.plan === undefined ? 0 : 1,
        path: '/index/message/plantProduct',
        name: '生产计划管理'
    },
    {
        // role: Vue.Roles.plant === undefined ? 0 : Vue.Roles.plant.harvest === undefined ? 0 : 1,
        path: '/index/message/plantHarvest',
        name: '采收管理'
    }
    ]
},
{
    name: '果蔬加工管理',
    // role: Vue.Roles.packp === undefined ? 0 : 1,
    src: '/public/images/product.png',
    children: [{
        // role: Vue.Roles.packp === undefined ? 0 : Vue.Roles.packp.pack === undefined ? 0 : 1,
        path: '/index/message/vegetableSerial',
        name: '加工批次管理'
    },
    {
        // role: Vue.Roles.packp === undefined ? 0 : Vue.Roles.packp.detect === undefined ? 0 : 1,
        path: '/index/message/vegetableDetect',
        name: '检验检测管理'
    },
    {
        // role: Vue.Roles.packp === undefined ? 0 : Vue.Roles.packp.code === undefined ? 0 : 1,
        path: '/index/message/vegetableTrace',
        name: '产品溯源管理'
    }
    ]
},
{
    name: '物流管理',
    // role: Vue.Roles.delivery === undefined ? 0 : 1,
    src: '/public/images/express.png',
    children: [{
        // role: Vue.Roles.delivery === undefined ? 0 : Vue.Roles.delivery.basic === undefined ? 0 : 1,
        path: '/index/message/Logisticbase',
        name: '基础信息管理'
    },
    {
        // role: Vue.Roles.delivery === undefined ? 0 : Vue.Roles.delivery.order === undefined ? 0 : 1,
        path: '/index/message/logisticSerial',
        name: '物流批次管理'
    }
    ]
},
{
    name: '销售管理',
    // role: Vue.Roles.sell === undefined ? 0 : 1,
    src: '/public/images/sale.png',
    children: [{
        // role: Vue.Roles.sell === undefined ? 0 : Vue.Roles.sell.repertory === undefined ? 0 : 1,
        path: '/index/message/saleProduct',
        name: '销售商品库管理'
    },
    {
        // role: Vue.Roles.sell === undefined ? 0 : Vue.Roles.sell.storage === undefined ? 0 : 1,
        path: '/index/message/saleInput',
        name: '销售入库管理'
    },
    {
        // role: Vue.Roles.sell === undefined ? 0 : Vue.Roles.sell.order === undefined ? 0 : 1,
        path: '/index/message/saleOrder',
        name: '销售订单管理'
    }
    ]
},
{
    name: '系统管理',
    // role: Vue.Roles.system === undefined ? 0 : 1,
    src: '/public/images/system.png',
    children: [{
        // role: Vue.Roles.system === undefined ? 0 : Vue.Roles.system.company === undefined ? 0 : 1,
        path: '/index/company',
        name: '公司信息管理'
    },
    {
        // role: Vue.Roles.system === undefined ? 0 : Vue.Roles.system.user === undefined ? 0 : 1,
        path: '/index/message/systemUser',
        name: '用户管理'
    },
    {
        // role: Vue.Roles.system === undefined ? 0 : Vue.Roles.system.log === undefined ? 0 : 1,
        path: '/index/message/systemLog',
        name: '系统日志'
    },
    {
        // role: Vue.Roles.system === undefined ? 0 : Vue.Roles.system.statement === undefined ? 0 : 1,
        path: '/index/message/systemReport',
        name: '报表统计'
    }
    ]
},
{
    name: '运营管理',
    // role: Vue.Roles.system !== 'admin' ? 0 : 1,
    src: '/public/images/system.png',
    children: [{
        // role: Vue.Roles.system !== 'admin' ? 0 : 1,
        path: '/index/message/rightsOperate',
        name: '权限管理'
    },
    {
        // role: Vue.Roles.system !== 'admin' ? 0 : 1,
        path: '/index/message/settleOperate',
        name: '入驻单位管理'
    },
    {
        // role: Vue.Roles.system !== 'admin' ? 0 : 1,
        path: '/index/message/usersOperate',
        name: '用户反馈管理'
    },
    {
        // role: Vue.Roles.system !== 'admin' ? 0 : 1,
        path: '/index/message/logOperate',
        name: '日志管理'
    }
    ]
}
]
