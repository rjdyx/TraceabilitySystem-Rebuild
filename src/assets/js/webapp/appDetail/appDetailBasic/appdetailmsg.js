export default {
    // 种植关联-施肥详情
    fertilizeBatch: [{
        settitle: '施肥详情',
        key: 'cultivate-fertilize',
        url: 'cultivate-fertilize',
        timeshow: false,
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
        timeshow: false,
        theads: ['种植批次号', '种植日期', '茶叶品种'],
        protos: ['serial', 'date', 'tea_name'],
        widths: [26, 26, 26]
    }],
    // 种植管理-农事详情
    farmingBatch: [{
        key: 'cultivate-farming',
        url: 'cultivate-farming',
        timeshow: false,
        theads: ['种植批次号', '种植日期', '茶叶品种'],
        protos: ['serial', 'date', 'tea_name'],
        widths: [26, 26, 26]
    }],
    // 采制管理-农事详情
    harvestBatch: [{
        key: 'colect-process',
        url: 'colect-process',
        timeshow: true,
        searchPlaceholder: '请输入种植批次号进行搜索',
        theads: ['采制日期', '毛茶重量', '散茶重量'],
        protos: ['date', 'raw_tea_weight', 'bulk_tea_weight'],
        widths: [26, 26, 26],
        newComponent: [{
            tab: '新建采制信息',
            components: [{
                name: 'date',
                type: 'date',
                label: '采制日期',
                placeholder: '（必选）',
                rule: {required: true}
            },
            {
                name: 'operate',
                type: 'text',
                label: '采制人',
                placeholder: '（必选）',
                rule: {required: false}
            },
            {
                name: 'raw_tea_weight',
                type: 'text',
                label: '毛茶重量(kg)',
                placeholder: '',
                rule: {required: true, message: '请输入毛茶重量', type: 'reNumber'}
            },
            {
                name: 'raw_tea_count',
                type: 'text',
                label: '毛茶数量',
                placeholder: '',
                rule: {required: false, type: 'reNumber'}
            },
            {
                name: 'bulk_tea_weight',
                type: 'text',
                label: '散茶重量(kg)',
                placeholder: '',
                rule: {required: true, message: '请输入毛茶重量', type: 'reNumber'}
            },
            {
                name: 'bulk_tea_count',
                type: 'text',
                label: '散茶数量',
                placeholder: '',
                rule: {required: false, type: 'reNumber'}
            },
            {
                name: 'memo',
                type: 'textarea',
                label: '备注信息',
                placeholder: '（可填）',
                rule: {required: false}
            }]
        }],
        editComponent: [{
            tab: '编辑施肥信息',
            arrBox: {'manure_id': 'manure_name', 'unit': 'unit'},
            checkBoxUrl: [['manures', 'id', 'name', 'radio']],
            checkBoxPosition: [0],
            components: [{
                name: 'manure_id',
                type: 'select',
                label: '肥料名称',
                placeholder: '（必填）',
                rule: {required: true},
                options: [],
                optionskeys: [],
                show: false
            },
            {
                name: 'date',
                type: 'date',
                label: '施肥日期',
                placeholder: '（必选）',
                rule: {required: true}
            },
            {
                name: 'amount',
                type: 'textSelect',
                label: '使用量',
                placeholder: '请填写数字（必填）',
                options: [['kg/亩', 'kg/平方米', 'kg/公顷']],
                optionskeys: [['kg/亩', 'kg/平方米', 'kg/公顷']],
                rule: {required: true, type: 'reNumber', message: '请输入整数'},
                show: false
            },
            {
                name: 'operate',
                type: 'text',
                label: '施肥人',
                placeholder: '（必选）',
                rule: {required: false}
            },
            {
                name: 'way',
                type: 'text',
                label: '施肥方法',
                placeholder: '（可填）',
                rule: {required: false}
            },
            {
                name: 'memo',
                type: 'textarea',
                label: '备注信息',
                placeholder: '（可填）',
                rule: {required: false}
            }]
        }]
    }],
    // 销售管理-销售订单管理详情
    saleBatch: [{
        key: 'sell-code',
        url: 'sell-code',
        timeshow: false,
        theads: ['产品溯源码', '销售产品', '销售日期'],
        protos: ['code', 'product_name', 'date'],
        widths: [26, 26, 26]
    }]
}
