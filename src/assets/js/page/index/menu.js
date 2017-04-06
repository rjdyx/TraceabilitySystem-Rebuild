/**
 * 左菜单栏数据
 */
export default[{
  name:
  '基础信息管理',
  role: 'plant',
  src: '/public/images/plant.png',
  children: [{
    path: '/index/message/categoryBase/0',
    name: '分类档案管理'
  },
  {
    path: '/index/message/personFile/0',
    name: '人员档案管理'
  },
  {
    path: '/index/message/expertFile/0',
    name: '专家档案管理'
  },
  {
    path: '/index/message/customerFile/0',
    name: '客户档案管理'
  },
  {
    path: '/index/message/supplierFile/0',
    name: '供货商档案管理'
  },
  {
    path: '/index/message/productFile/0',
    name: '产品档案管理'
  }
  ]
},
{
  name: '养殖管理',
  role: 'plant',
  src: '/public/images/plant.png',
  children: [{
    path: '/index/reaction/baseManage/0',
    name: '基础信息管理'
  },
  {
    path: '/index/reaction/serialManage/0',
    name: '养殖批次管理'
  },
  {
    path: '/index/reaction/feedManage/0',
    name: '饲料使用管理'
  },
  {
    path: '/index/reaction/plagueManage/0',
    name: '病疫管理'
  },
  {
    path: '/index/reaction/quarantineManage/0',
    name: '检疫管理'
  },
  {
    path: '/index/reaction/innocuityManage/0',
    name: '无害化管理'
  },
  {
    path: '/index/reaction/slaughterManage/0',
    name: '出栏管理'
  },
  {
    path: '/index/reaction/planManage/0',
    name: '养殖计划管理'
  }
  ]
},
{
  name: '屠宰加工管理',
  role: 'pet',
  isEvent: false,
  src: '/public/images/pet.png',
  children: [{
    path: '/index/message/petProcess/0',
    name: '加工批次管理'
  },
  {
    path: '/index/message/petDectect/0',
    name: '检验检测管理'
  },
  {
    path: '/index/message/petTrace/0',
    name: '产品溯源管理'
  }
  ]
},
{
  name: '种植管理',
  role: 'plantation',
  isEvent: false,
  src: '/public/images/plantation.png',
  children: [{
    path: '/index/message/plantBase/0',
    name: '基础信息管理'
  },
  {
    path: '/index/message/plantSerial/0',
    name: '种植批次管理'
  },
  {
    path: '/index/message/plantFarm/0',
    name: '农事管理'
  },
  {
    path: '/index/message/plantProduct/0',
    name: '生产计划管理'
  },
  {
    path: '/index/message/plantHarvest/0',
    name: '采收管理'
  }
  ]
},
{
  name: '果蔬加工管理',
  role: 'product',
  isEvent: false,
  src: '/public/images/product.png',
  children: [{
    path: '/index/message/vegetableSerial/0',
    name: '加工批次管理'
  },
  {
    path: '/index/message/vegetableTrace/0',
    name: '产品溯源管理'
  }
  ]
},
{
  name: '物流管理',
  role: 'express',
  isEvent: false,
  src: '/public/images/express.png',
  children: [{
    path: '/index/message/Logisticbase/0',
    name: '基础信息管理'
  },
  {
    path: '/index/message/logisticSerial/0',
    name: '物流批次管理'
  }
  ]
},
{
  name: '销售管理',
  role: 'sale',
  isEvent: false,
  src: '/public/images/sale.png',
  children: [{
    path: '/index/message/saleProduct/0',
    name: '销售商品库管理'
  },
  {
    path: '/index/message/saleInput/0',
    name: '销售入库管理'
  },
  {
    path: '/index/message/saleOrder/0',
    name: '销售订单管理'
  }
  ]
},
{
  name: '系统管理',
  role: 'system',
  isEvent: false,
  src: '/public/images/system.png',
  children: [{
    path: '/index/message/systemCompany/0',
    name: '公司信息管理'
  },
  {
    path: '/index/message/systemUser/0',
    name: '用户管理'
  },
  {
    path: '/index/message/systemLog/0',
    name: '系统日志'
  },
  {
    path: '/index/message/systemReport/0',
    name: '报表统计'
  }
  ]
}
]
