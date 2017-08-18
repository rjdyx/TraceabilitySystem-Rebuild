export default {
    // 种植关联-施肥详情
    fertilizeBatch: [{
        settitle: '施肥详情',
        key: 'cultivate-fertilize',
        url: 'cultivate-fertilize',
        theads: ['种植批次号', '种植日期', '茶叶品种'],
        protos: ['serial', 'date', 'tea_name'],
        widths: [26, 26, 26]
    }],
    // 种植管理-检验检测详情
    detectBatch: [{
        key: 'cultivate-detect',
        delType: 'plant',
        paramsIndex: 'plant',
        url: 'cultivate-detect',
        theads: ['种植批次号', '种植日期', '茶叶品种'],
        protos: ['serial', 'date', 'tea_name'],
        widths: [26, 26, 26]
    }],
    // 种植管理-农事详情
    farmingBatch: [{
        key: 'cultivate-farming',
        url: 'cultivate-farming',
        theads: ['种植批次号', '种植日期', '茶叶品种'],
        protos: ['serial', 'date', 'tea_name'],
        widths: [26, 26, 26]
    }],
    // 采制管理-农事详情
    harvestBatch: [{
        key: 'colect-process',
        url: 'colect-process',
        theads: ['种植批次号', '种植日期', '茶叶品种'],
        protos: ['serial', 'date', 'tea_name'],
        widths: [26, 26, 26]
    }],
    // 销售管理-销售订单管理详情
    saleBatch: [{
        key: 'sell-code',
        url: 'sell-code',
        theads: ['产品溯源码', '销售产品', '销售日期'],
        protos: ['code', 'product_name', 'date'],
        widths: [26, 26, 26]
    }]
}
