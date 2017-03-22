/**
 * 左菜单栏数据
 */
 
export default [ 
    {  
        name:'基础信息管理',
        role: 'plant',
        src:'/public/images/plant.png',
        children: [
            {
                path: '/index/message/categoryBase/0',
                name:'分类档案管理'
            },
            {
                path: '/index/message/cultivate/0',
                name:'人员档案管理'
            },
            {
                path: '/index/message/feed/0',
                name:'专家档案管理'
            },
            {
                path: '/index/message/plague/0',
                name:'客户档案管理'
            }, 
            {
                path: '/index/message/quarantine/0',
                name:'供货商档案管理'
            },
            {
                path: '/index/message/pen/0',
                name:'产品档案管理'
            },
        ]
    }, 
	{  
        name:'养殖管理',
        role: 'plant',
        src:'/public/images/plant.png',
        children: [
            {
                path: '/index/message/cultivateBase/0',
                name:'基础信息管理'
            },
            {
                path: '/index/message/cultivate/0',
                name:'养殖批次管理'
            },
            {
                path: '/index/message/feed/0',
                name:'饲料使用管理'
            },
            {
                path: '/index/message/plague/0',
                name:'病疫管理'
            }, 
            {
                path: '/index/message/quarantine/0',
                name:'检疫管理'
            },
            {
                path: '/index/message/pen/0',
                name:'无害化管理'
            },
            {
                path: '/index/message/slaughter/0',
                name:'出栏管理'
            },
            {
                path: '/index/message/slaughter/0',
                name:'养殖计划管理'
            },
        ]
    },
    {
        name:'屠宰加工管理',
        role: 'pet',
        src:'/public/images/pet.png',
        children: [
            {
                path: '/index/reaction/petbasic/0',
                name:'加工批次管理'
            },
            {
                path: '/index/reaction/petinput/0',
                name:'检验检测管理'
            },
            {
                path: '/index/reaction/petProduct/0',
                name:'产品溯源管理'
            },
        ]
    },
    { 
        name:'种植管理',
        role: 'plantation',
        src:'/public/images/plantation.png',
        children: [ 
            {
                path:'/index/message/plant/0',
                name:'基础信息管理'
            },
            { 
                path: '/index/message/crew/0',
                name:'种植批次管理'
            },
            {
                path: '/webapp/beast',
                name:'农事管理'
            },
            {
                path: '/webapp/beast',
                name:'生产计划管理'
            },
            {
                path: '/webapp/beast',
                name:'采收管理'
            },
        ]
    },
    {
        name:'果蔬加工管理',
        role: 'product',
        src:'/public/images/product.png',
        children: [
            {
                path: '/webapp/beast',
                name:'加工批次管理'
            },
            {
                path: '/webapp/beast',
                name:'产品溯源管理'
            },
        ]
    },
    {
        name:'物流管理',
        role: 'express',
        src:'/public/images/express.png',
        children: [
            {
                path: '/webapp/beast',
                name:'基础信息管理'
            },
            {
                path: '/webapp/beast',
                name:'物流批次管理'
            },
        ]
    },
    {
        name:'销售管理',
        role: 'sale',
        src:'/public/images/sale.png',
        children: [
            {
                path: '/webapp/beast',
                name:'销售商品库管理'
            },
            {
                path: '/webapp/beast',
                name:'销售入库管理'
            },
            {
                path: '/webapp/beast',
                name:'销售订单管理'
            },
        ]
    },
    {
        name:'系统管理',
        role: 'system',
        src:'/public/images/system.png',
        children: [
            {
                path: '/webapp/beast',
                name:'公司信息管理'
            },
            {
                path: '/webapp/beast',
                name:'用户管理'
            },
            {
                path: '/webapp/beast',
                name:'系统日志'
            },
            {
                path: '/webapp/beast',
                name:'报表统计'
            },
        ]
    },
]