export default{
    // 实时视频
    video: {
        title: '基础信息',
        tableName: '种植信息',
        tableTheads: ['种植场', '负责人', '地址', '面积', '联系方式', '种植区', '种植人', '种植日期', '采收日期', '采收人'],
        tableProtos: [],
        tableName2: '实时监控'
    },
    // 基础信息
    basicInfor: {
        title: '基础信息',
        tableName: '种植信息',
        tableTheads: ['种植场', '负责人', '地址', '面积', '联系方式', '种植区', '种植人', '种植日期', '采收日期', '采收人'],
        tableProtos: [],
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
    pesticideInfor: {
        title: '农药信息',
        tableName: '用药记录',
        tableTheads: ['农药名称', '用量', '日期', '图片'],
        tableProtos: [],
        details: {
            tableList: {
                tableName: '用药记录详情',
                tableTheads: ['农药名称', '施药日期', '平均施药', '施药方式', '天气', '施药人', '指导专家'],
                tableProtos: []
            },
            tableName2: '施药图片'
        }
    },
    // 农事信息
    farmWorkInfor: {
        title: '农事信息',
        tableName: '农事记录',
        tableTheads: ['操作类型', '操作人', '日期', '图片'],
        tableProtos: [],
        details: {
            tableList: {
                tableName: '农事记录详情',
                tableTheads: ['操作类型', '操作内容', '操作人', '操作日期', '天机', '指导单位', '指导专家'],
                tableProtos: []
            },
            tableName2: '农事图片'
        }
    },
    // 肥料信息
    fertilizerInfor: {
        title: '肥料信息',
        tableName: '肥料记录',
        tableTheads: ['肥料名称', '平均施肥', '日期', '图片'],
        tableProtos: [],
        details: {
            tableList: {
                tableName: '肥料记录详情',
                tableTheads: ['肥料名称', '肥料日期', '平均施肥', '施肥方式', '天气', '指导单位', '指导专家'],
                tableProtos: []
            },
            tableName2: '施肥图片'
        }
    },
    // 检测信息
    detectionInfor: {
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
    }
}
