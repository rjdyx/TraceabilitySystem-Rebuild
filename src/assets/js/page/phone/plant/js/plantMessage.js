export default{
    // 实时视频
    video: {
        title: '实时视频'
    },
    // 基础信息
    basicInfor: {
        title: '基础信息',
        tableName: '种植信息',
        tableTheads: ['种植场', '负责人', '地址', '面积', '联系方式', '种植区', '种植人', '种植日期', '采收日期', '采收人'],
        tableProtos: ['parent_name', 'director', 'address', 'area', 'phone', 'name', 'operate_name', 'date', 'harvest_date', 'harvest_operate'],
        tableName2: '实时监控'
    },
    // 购物链接
    shop: {
        title: '购物链接'
    },
    // 生长图片
    growImg: {
        title: '生长图片'
    },
    // 农药信息
    spray: {
        title: '农药信息',
        tableName: '用药记录',
        tableTheads: ['批次号', '操作人', '日期', '图片'],
        tableProtos: [],
        details: {
            tableList: {
                tableName: '用药记录详情',
                tableTheads: ['批次号', '农药名称', '施药日期', '平均施药', '施药方式', '天气', '施药人', '指导专家'],
                tableProtos: ['serial', 'medicament_name', 'date', 'amount', 'way', 'weather', 'operate_name', 'expert_name']
            },
            tableName2: '施药图片'
        }
    },
    // 农事信息
    farming: {
        title: '农事信息',
        tableName: '农事记录',
        tableTheads: ['批次号', '操作人', '日期', '图片'],
        tableProtos: [],
        details: {
            tableList: {
                tableName: '农事记录详情',
                tableTheads: ['批次号', '操作日期', '操作内容', '操作方式', '天气', '操作人', '指导专家'],
                tableProtos: ['serial', 'date', 'content', 'method', 'weather', 'operate_name', 'expert_name']
            },
            tableName2: '农事图片'
        }
    },
    // 肥料信息
    fertilize: {
        title: '肥料信息',
        tableName: '肥料记录',
        tableTheads: ['批次号', '操作人', '日期', '图片'],
        tableProtos: [],
        details: {
            tableList: {
                tableName: '肥料记录详情',
                tableTheads: ['批次号', '肥料名称', '施肥日期', '平均施肥', '施肥方式', '天气', '施肥人', '指导专家'],
                tableProtos: ['serial', 'manure_name', 'date', 'amount', 'way', 'weather', 'operate_name', 'expert_name']
            },
            tableName2: '施肥图片'
        }
    },
    // 检测信息
    detect: {
        title: '检测信息',
        tableName: '检测记录',
        tableTheads: ['批次号', '操作人', '日期', '图片'],
        tableProtos: [],
        details: {
            tableList: {
                tableName: '检测记录详情',
                tableTheads: ['批次号', '检测名称', '检测内容', '检测机构', '检测类型', '检测结果', '检测人', '检测日期', '天气', '指导专家'],
                tableProtos: ['serial', 'name', 'content', 'department', 'genre', 'result', 'operate_name', 'date', 'weather', 'expert_name']
            },
            tableName2: '检测图片'
        }},
    // 商品信息
    commodityInfor: {
        title: '商品信息',
        tableList: [
            {
                tableName: '商品信息',
                tableTheads: ['商品名称', '溯源码', '商品规格', '商品品牌', '产地', '生产单位', '执行标准'],
                tableProtos: []
            },
            {
                tableName: '加工包装',
                tableTheads: ['包装批次号', '包装加工产品', '包装加工日期', '包装产品重量', '包装加工人'],
                tableProtos: []
            },
            {
                tableName: '运输信息',
                tableTheads: ['物流单位', '物流单号', '运输日期'],
                tableProtos: []
            }
        ]
    },
    // --------------------------养殖模块的信息----------------------
    b_video: {
        title: '实时视频'
    },
    b_basicInfor: {
        title: '基础信息',
        tableName: '养殖信息',
        tableTheads: ['种植场', '负责人', '地址', '面积', '联系方式', '种植区', '种植人', '种植日期', '采收日期', '采收人'],
        tableProtos: [],
        tableName2: '实时监控'
    },
    // 购物链接
    b_shop: {
        title: '购物链接'
    },
    // 圈舍
    area: {
        title: '圈舍信息'
    },
    // 生长过程
    growProcess: {
        title: '生长过程'
    },
    // 商品
    commodity: {
        title: '商品信息',
        tableList: [
            {
                tableName: '商品信息',
                tableTheads: ['商品名称', '溯源码', '商品规格', '商品品牌', '产地', '生产单位', '执行标准'],
                tableProtos: []
            },
            {
                tableName: '加工包装',
                tableTheads: ['包装批次号', '包装加工产品', '包装加工日期', '包装产品重量', '包装加工人'],
                tableProtos: []
            },
            {
                tableName: '运输信息',
                tableTheads: ['物流单位', '物流单号', '运输日期'],
                tableProtos: []
            }
        ]
    },
    // 喂养
    feed: {
        title: '饲料信息',
        tableName: '喂养记录',
        tableTheads: ['饲料名称', '平均喂养量', '日期', '图片'],
        tableProtos: [],
        details: {
            tableList: {
                tableName: '饲料记录详情',
                tableTheads: ['饲料名称', '饲料添加剂', '喂养方式', '操作人员', '喂养量', '备注信息'],
                tableProtos: []
            },
            tableName2: '饲料图片'
        }
    },
    // 病疫
    disease: {
        title: '病疫信息',
        tableName: '病疫记录',
        tableTheads: ['病疫名称', '兽药名称', '日期', '图片'],
        tableProtos: [],
        details: {
            tableList: {
                tableName: '病疫记录详情',
                tableTheads: ['检测名称', '兽药名称', '用药日期', '病情描述', '专家', '平均用药量', '治疗方式', '备注'],
                tableProtos: []
            },
            tableName2: '病疫图片'
        }
    },
    // 检疫
    detection: {
        title: '检疫信息',
        tableName: '检疫记录',
        tableTheads: ['检疫名称', '检疫机构', '日期', '图片'],
        tableProtos: [],
        details: {
            tableList: {
                tableName: '检疫记录详情',
                tableTheads: ['检测名称', '检疫内容', '检疫结果', '专家', '操作人员', '审批人', '检疫报告图片', '备注'],
                tableProtos: []
            },
            tableName2: '检疫图片'
        }
    },
    // 检测
    bDetect: {
        title: '检测信息',
        tableName: '检测记录',
        tableTheads: ['检测名称', '检测机构', '日期', '图片'],
        tableProtos: [],
        details: {
            tableList: {
                tableName: '检测记录详情',
                tableTheads: ['检测名称', '检测机构', '检测类型', '检测人', '检测日期', '天气', '指导单位', '指导专家'],
                tableProtos: []
            },
            tableName2: '检测图片'
        }
    }
}
