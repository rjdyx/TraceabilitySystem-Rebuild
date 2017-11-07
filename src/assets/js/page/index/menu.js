/**
 *  左菜单栏数据
 */
export default[{
    name: '种植管理',
    key: 'plant',
    childrenKey: ['basic', 'cultivate', 'farming'],
    role: 0,
    src: '/public/images/plantation.png',
    children: [{
        role: 0,
        path: '/index/message/plantBase',
        name: '基础信息管理'
    },
    {
        role: 0,
        path: '/index/message/plantSerial',
        name: '种植批次管理'
    },
    {
        role: 0,
        path: '/index/message/plantFarm',
        name: '农事管理'
    }]
},
{
    name: '采制加工管理',
    key: 'harvest',
    childrenKey: ['batch'],
    role: 0,
    src: '/public/images/product.png',
    children: [{
        role: 0,
        path: '/index/message/vegetableSerial',
        name: '采制批次管理'
    }]
},
{
    name: '仓库物流管理',
    key: 'delivery',
    childrenKey: ['basic', 'order', 'store'],
    role: 0,
    src: '/public/images/system.png',
    children: [{
        role: 0,
        path: '/index/message/storageBasic',
        name: '基础信息管理'
    },
    {
        role: 0,
        path: '/index/message/logisticsBatch',
        name: '物流批次管理'
    },
    {
        role: 0,
        path: '/index/message/storageOperate',
        name: '仓库管理'
    }]
},
{
    name: '销售管理',
    key: 'sell',
    childrenKey: ['basic', 'order'],
    role: 0,
    src: '/public/images/sale.png',
    children: [{
        role: 0,
        path: '/index/message/saleProduct',
        name: '基础信息管理'
    },
    {
        role: 0,
        path: '/index/message/saleOrder',
        name: '销售订单管理'
    }]
},
{
    name: '系统管理',
    key: 'system',
    childrenKey: ['company', 'user', 'play', 'log'],
    role: 0,
    src: '/public/images/system.png',
    children: [{
        role: 0,
        path: '/index/company',
        name: '公司信息管理'
    },
    {
        role: 0,
        path: '/index/message/userOperate',
        name: '用户管理'
    },
    {
        role: 0,
        path: '/index/message/companyPlay',
        name: '实时视频管理'
    },
    {
        role: 0,
        path: '/index/message/systemLog',
        name: '系统日志管理'
    }]
},
{
    name: '运营管理',
    key: 'admin',
    childrenKey: ['admin', 'admin', 'admin', 'admin', 'admin'],
    role: 0,
    src: '/public/images/system.png',
    children: [{
        role: 0,
        path: '/index/message/adminRole',
        name: '权限管理'
    },
    {
        role: 0,
        path: '/index/message/adminCompany',
        name: '入驻公司管理'
    },
    {
        role: 0,
        path: '/index/message/adminFeedback',
        name: '用户反馈管理'
    },
    {
        role: 0,
        path: '/index/message/adminManage',
        name: '申请入驻管理'
    },
    {
        role: 0,
        path: '/index/message/adminLog',
        name: '系统日志管理'
    }]
}]
