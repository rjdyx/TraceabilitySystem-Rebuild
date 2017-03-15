/**
 * 左菜单栏数据
 */
export default [ 
	{  
        name:'养殖管理',
        role: 'message',
        children: [
            {
                path: '/index/message/crew/0',
                name:'基础信息管理'
            },
            {
                path: '/index/message/org/0',
                name:'养殖批次管理'
            },
            {
                path: '/index/message/command/0',
                name:'饲料使用管理'
            },
            {
                path: '/index/message/condition/0',
                name:'畜禽病疫管理'
            },
            {
                path: '/index/message/condition/0',
                name:'畜禽病疫管理'
            },
            {
                path: '/index/message/condition/0',
                name:'畜禽检疫管理'
            },
            {
                path: '/index/message/condition/0',
                name:'畜禽圈舍管理'
            },
            {
                path: '/index/message/condition/0',
                name:'畜禽出栏管理'
            },
        ]
    },
    {
        name:'屠宰加工管理',
        role: 'reaction',
        children: [
            {
                path: '/index/reaction/early-warning/0',
                name:'基础信息管理'
            },
            {
                path: '/index/reaction/emergency/0',
                name:'畜禽入库管理'
            },
            {
                path: '/index/reaction/emergency/0',
                name:'加工检疫管理'
            },
            {
                path: '/index/reaction/emergency/0',
                name:'加工批次管理'
            },
            {
                path: '/index/reaction/emergency/0',
                name:'产品溯源管理'
            },
            {
                path: '/index/reaction/emergency/0',
                name:'产品出库管理'
            },
        ]
    },
    {
        name:'种植管理',
        role: 'beast',
        isEvent: false,
        children: [
            {
                path: '/webapp/beast',
                name:'基础信息管理'
            },
            {
                path: '/webapp/beast',
                name:'种植批次管理'
            },
            {
                path: '/webapp/beast',
                name:'施肥管理'
            },
            {
                path: '/webapp/beast',
                name:'病虫害管理'
            },
            {
                path: '/webapp/beast',
                name:'种植检测管理'
            },
            {
                path: '/webapp/beast',
                name:'农事管理'
            },
            {
                path: '/webapp/beast',
                name:'生产计划管理'
            },
        ]
    },
    {
        name:'果蔬采收管理',
        role: 'beast',
        isEvent: false,
        children: [
            {
                path: '/webapp/beast',
                name:'采收批次管理'
            },
            {
                path: '/webapp/beast',
                name:'采收检测管理'
            },
        ]
    },
]