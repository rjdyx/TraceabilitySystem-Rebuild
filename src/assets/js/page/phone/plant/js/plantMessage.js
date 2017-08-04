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
    // 肥料信息
    fertilize: {
        title: '施肥信息',
        tableName: '施肥记录',
        tableTheads: ['肥料名称', '施肥日期', '平均施肥量', '施肥方式', '天气', '施肥人', '肥料图片'],
        tableProtos: ['manure_name', 'date', 'amount_unit', 'way', 'weather', 'operate', 'img']
    },
    // 检测信息
    detect: {
        title: '检测信息',
        tableName: '检测记录',
        tableTheads: ['检测类型', '检测内容', '检测日期', '检测人', '检测部门', '检测结果', '检测图片'],
        tableProtos: ['detect_type', 'content', 'date', 'operate', 'department', 'result', 'img']
    },
     // 农事信息
    farming: {
        title: '农事信息',
        tableName: '农事记录',
        tableTheads: ['操作日期', '操作内容', '操作人', '天气', '操作方法'],
        tableProtos: ['date', 'content', 'operate', 'weather', 'method']
    },
    // 采制信息
    harvest: {
        title: '采制信息',
        tableName: '采制记录',
        tableTheads: ['采制日期', '采制人', '毛茶重量', '散茶重量', '损耗率', '晒青时间', '晾青时间', '做青时间', '杀青时间', '揉稔时间', '解块时间', '干燥时间', '筛选时间', '复火时间'],
        tableProtos: ['date', 'operate', 'raw_tea_weight', 'bulk_tea_weight', 'attrition_rate', 'sunning_date', 'cooling_date', 'make_green_date', 'kill_out_date', 'knead_nori_date', 'deblock_date', 'dry_date', 'filtrate_date', 'refiring_date']
    },
    // 物流销售信息
    sale: {
        title: '物流销售信息',
        tableName: '物流销售记录',
        tableTheads: ['客户名称', '订购公司', '联系人', '下单日期', '出货日期', '送货地址', '花费总额(元)', '运输方式'],
        tableProtos: ['client_name', 'company_name', 'contact', 'date', 'out_date', 'address', 'total', 'transportable_type']
    },
    // 购物链接
    shop: {
        title: '购物链接'
    },
    // 生长图片
    growImg: {
        title: '生长图片'
    },
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
