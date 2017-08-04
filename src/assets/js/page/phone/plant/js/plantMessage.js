export default{
    // 实时视频
    video: {
        title: '实时视频'
    },
    // 基础信息
    basicInfor: {
        title: '基础信息',
        tableName: '种植信息',
        tableTheads: ['种植场', '负责人', '地址', '联系方式', '种植区', '面积', '种植人', '种植日期', '采制人', '采制日期'],
        tableProtos: ['plantation_name', 'director', 'address', 'phone', 'planta_name', 'area', 'cultivate_operate', 'cultivate_date', 'harvest_operate', 'harvest_date'],
        tableName2: '宣传视频'
    },
    // 销售信息
    sale: [
        {
            saleTheads: [{
                saleTitle: '销售信息',
                tableTheads: ['种植场', '负责人', '地址', '面积', '联系方式', '种植区', '种植人', '种植日期', '采收日期'],
                tableProtos: ['parent_name', 'director', 'address', 'area', 'phone', 'name', 'operate_name', 'cultivate_date', 'harvest_date']
            }],
            expressTheads: [{
                saleTitle: '物流信息',
                tableTheads: ['物流', '负责人', '地址', '面积', '联系方式', '种植区', '种植人', '种植日期', '采收日期'],
                tableProtos: ['parent_name', 'director', 'address', 'area', 'phone', 'name', 'operate_name', 'cultivate_date', 'harvest_date']
            }]
        },
        {
            saleTheads: [{
                saleTitle: '销售信息',
                tableTheads: ['种植场', '负责人', '地址', '面积', '联系方式', '种植区', '种植人', '种植日期', '采收日期'],
                tableProtos: ['parent_name', 'director', 'address', 'area', 'phone', 'name', 'operate_name', 'cultivate_date', 'harvest_date']
            }],
            expressTheads: [{
                saleTitle: '物流信息',
                tableTheads: ['物流', '负责人', '地址', '面积', '联系方式', '种植区', '种植人', '种植日期', '采收日期'],
                tableProtos: ['parent_name', 'director', 'address', 'area', 'phone', 'name', 'operate_name', 'cultivate_date', 'harvest_date']
            }]
        }
    ],
    // 购物链接
    shop: {
        title: '购物链接'
    },
    // 生长图片
    growImg: {
        title: '生长图片'
    },
    // 采制信息
    harvest: {
        title: '采制信息',
        tableName: '采制记录',
        tableTheads: ['批次号', '农药名称', '施药日期', '平均施药', '施药方式', '天气', '施药人', '指导专家'],
        tableProtos: ['serial', 'medicament_name', 'date', 'amount', 'way', 'weather', 'operate_name', 'expert_name'],
        details: {
            tableList: {
                tableName: '采制记录详情',
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
        tableTheads: ['操作类型', '操作内容', '操作人', '操作日期', '天气', '指导单位', '指导专家'],
        tableProtos: ['serial', 'date', 'content', 'method', 'weather', 'operate_name', 'expert_name'],
        details: {
            tableList: {
                tableName: '农事记录详情',
                tableTheads: ['操作类型', '操作内容', '操作人', '操作日期', '天气', '指导单位', '指导专家'],
                tableProtos: ['serial', 'date', 'content', 'method', 'weather', 'operate_name', 'expert_name']
            },
            tableName2: '农事图片'
        }
    },
    // 肥料信息
    fertilize: {
        title: '肥料信息',
        tableName: '肥料记录',
        tableTheads: ['肥料名称', '施肥日期', '平均施肥', '施肥方式', '天气', '施肥人', '指导单位', '指导专家'],
        tableProtos: ['serial', 'manure_name', 'date', 'amount', 'way', 'weather', 'operate_name', 'expert_name'],
        details: {
            tableList: {
                tableName: '肥料记录详情',
                tableTheads: ['肥料名称', '施肥日期', '平均施肥', '施肥方式', '天气', '施肥人', '指导单位', '指导专家'],
                tableProtos: ['serial', 'manure_name', 'date', 'amount', 'way', 'weather', 'operate_name', 'expert_name']
            },
            tableName2: '施肥图片'
        }
    },
    // 检测信息
    detect: {
        title: '检测信息',
        tableName: '检测记录',
        tableTheads: ['检测名称', '检测机构', '检测类型', '检测人', '天气', '指导单位', '指导专家'],
        tableProtos: ['serial', 'name', 'content', 'department', 'genre', 'result', 'operate_name'],
        details: {
            tableList: {
                tableName: '检测记录详情',
                tableTheads: ['检测名称', '检测机构', '检测类型', '检测人', '天气', '指导单位', '指导专家'],
                tableProtos: ['serial', 'name', 'content', 'department', 'genre', 'result', 'operate_name']
            },
            tableName2: '检测图片'
        }},
    // 商品信息
    commodityInfor: {
        title: '商品信息',
        tableName: '商品信息',
        tableProtos: ['serial', 'name', 'content', 'department', 'genre', 'result', 'operate_name'],
        tableTheads: ['商品名称', '溯源码', '商品规格', '商品品牌', '产地', '生产单位', '执行标准'],
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
