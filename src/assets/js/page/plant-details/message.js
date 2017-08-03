import importBtn from '../../components/public/import-btn.vue'
import newbuildBtn from '../../components/public/newbuild-btn.vue'
import scanCode from '../../components/public/scanCode.vue'
import output from '../../components/public/output.vue'
import selectSection from '../../components/public/select-section.vue'
import datePick from '../../components/public/datePick.vue'
import categoryBtn from '../../components/public/categoryBtn.vue'
import addRfidBtn from '../../components/public/addRfidBtn.vue'
import inputFile from '../../components/public/inputFile.vue'
import inputDate from '../../components/public/inputDate.vue'
import inputDateTimes from '../../components/public/inputDateTimes.vue'
import validate2 from '../../utils/validate2.js'
import Qrcode from '../../components/public/Qrcode.vue'

export default {
    // 种植批次
    plantSerial: {
        key: 'plantSerial',
        tab: '种植批次管理',
        // 是否有打印按钮标志
        printShow: true,
        roleName: ['plant/cultivate', 0],
        theads: ['种植批次号', '所属种植区', '种植人', '种植日期', '茶叶品种名称', '当前批次面积', '状态'],
        protos: ['serial', 'plantation_name', 'operate', 'date', 'tea_name', 'area_unit', 'state'],
        changeDataArr: [{state: {'未完成': 0, '已完成': 1}}],
        url: 'cultivate',
        tabList: [{
            key: 'grow',
            url: 'grow',
            tab: '生长过程信息',
            searchPlaceholder: '请输入标题进行搜索',
            headList: ['图片', '图片标题', '图片描述', '上传日期', '备注信息'],
            protos: ['thumb', 'name', 'desc', 'date', 'memo'],
            hiddeEdit: true,
            searchText: true,
            widths: [50, 50, 50, 50, 50],
            typeComponent: [{
                component: newbuildBtn
            }],
            listComponent: [{
                components: [{
                    type: 'date',
                    component: datePick
                }]
            }],
            newComponent: [{
                tab: '新建生长过程信息',
                hasImg: true,
                checkNumber: [0],
                components: [{
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '图片标题',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入图片标题', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '生长图片标题重复'}]
                },
                {
                    name: 'desc',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '特征描述',
                    placeholder: '',
                    rule: {required: true, message: '请输入特征描述'}
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '上传日期',
                    placeholder: '',
                    rule: [{required: true, message: '请输入上传日期'}, {validator: validate2.reDate, message: '请输入上传日期'}]
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '上传图片',
                    placeholder: '',
                    rule: {required: true, message: '请上传图片'}
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    isNull: true,
                    label: '备注信息',
                    placeholder: '',
                    rule: null
                }]
            }],
            editComponent: [{
                tab: '编辑生长过程信息',
                checkNumber: [0],
                hasImg: true,
                components: [{
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '图片标题',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入图片标题', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '生长图片标题重复'}]
                },
                {
                    name: 'desc',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '特征描述',
                    placeholder: '',
                    rule: {required: true, message: '请输入特征描述'}
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '上传日期',
                    placeholder: '',
                    rule: [{required: true, message: '请输入上传日期'}, {validator: validate2.reDate, message: '请输入上传日期'}]
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '上传图片',
                    placeholder: '',
                    rule: {required: true, message: '请上传图片'}
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    isNull: true,
                    label: '备注信息',
                    placeholder: '',
                    rule: null
                }]
            }]
        }]
    },
    // 施肥批次详情
    fertilizeBatch: {
        key: 'fertilizeBatch',
        roleName: ['plant/farming', 0],
        tab: '施肥批次管理',
        theads: ['施肥批次号', '肥料', '施肥人', '施肥日期', '施肥量（Kg）', '施肥方法', '备注'],
        protos: ['serial', 'manure_name', 'operate', 'date', 'amount_unit', 'way', 'memo'],
        url: 'fertilize',
        tabList: [{
            url: 'cultivate-fertilize',
            tab: '种植批次施肥信息',
            searchPlaceholder: '请输入种植批次进行搜索',
            headList: ['种植批次号', '种植区', '茶叶品种', '种植日期', '种植人', '备注信息', '种植批次号', '种植区', '茶叶品种', '种植日期', '种植人', '备注信息'],
            protos: ['serial', 'plantation_name', 'tea_name', 'date', 'operate', 'memo', 'serial', 'plantation_name', 'tea_name', 'date', 'operate', 'memo'],
            widths: [50, 50, 50, 50, 50, 50],
            hiddeEdit: false,
            searchText: true,
            typeComponent: [{
                component: output
            }],
            listComponent: [{
                components: [{
                    type: 'date',
                    component: datePick
                }]
            }]
        }]
    },
    // 种植检验检测
    detectBatch: {
        key: 'detectBatch',
        tab: '种植检测批次管理',
        theads: ['检测批次号', '检测类型', '检测内容', '检测日期', '检测人', '检测部门', '检测结果', '备注'],
        protos: ['serial', 'detect_type', 'content', 'date', 'operate', 'department', 'result', 'memo'],
        url: 'detect',
        changeDataArr: [{result: {'合格': 0, '不合格': 1}}],
        tabList: [{
            url: 'cultivate-detect',
            tab: '种植批次检测信息',
            searchPlaceholder: '请输入种植批次进行搜索',
            headList: ['种植批次号', '种植区', '茶叶品种', '种植日期', '种植人', '备注'],
            protos: ['serial', 'plantation_name', 'tea_name', 'date', 'operate', 'memo'],
            widths: [50, 50, 50, 50, 50, 50],
            hiddeEdit: false,
            searchText: true,
            typeComponent: [{
                component: output
            }],
            listComponent: [{
                components: [{
                    type: 'date',
                    component: datePick
                }]
            }]
        }]
    },
    // 种植田间信息
    farmingBatch: {
        key: 'farmingBatch',
        tab: '种植田间批次管理',
        theads: ['田间批次号', '操作日期', '操作内容', '操作人', '操作方法', '天气', '备注'],
        protos: ['serial', 'date', 'content', 'operate', 'method', 'weather', 'memo'],
        url: 'farming',
        tabList: [{
            url: 'cultivate-farming',
            tab: '种植批次农事信息',
            searchPlaceholder: '请输入种植批次进行搜索',
            headList: ['种植批次号', '种植区', '茶叶品种', '种植日期', '种植人', '备注信息'],
            protos: ['serial', 'plantation_name', 'tea_name', 'date', 'operate', 'memo'],
            widths: [50, 50, 50, 50, 50, 50],
            hiddeEdit: false,
            searchText: true,
            typeComponent: [{
                component: output
            }],
            listComponent: [{
                components: [{
                    type: 'date',
                    component: datePick
                }]
            }]
        }]
    },
    // 采制批次详情
    harvestBatch: {
        key: 'harvestBatch',
        tab: '采制批次管理',
        changeDataArr: [{state: {'未完成': 0, '已完成': 1}}],
        theads: ['采制批次号', '采制日期', '所属种植区', '种植批次号', '入库部门', '存放仓库位置', '状态', '备注'],
        protos: ['serial', 'date', 'plantation_name', 'cultivate_serial', 'department', 'position', 'state', 'memo'],
        url: 'harvest',
        tabList: [{
            url: 'colect-process',
            tab: '采制信息',
            searchPlaceholder: '',
            headList: ['采制日期', '采制人', '毛茶重量(kg)', '毛茶数量', '散茶重量(kg)', '散茶数量', '损耗率', '备注', '晒青时间', '晾青时间', '做青时间', '杀青时间', '揉稔时间', '解块时间', '干燥时间', '筛选时间', '复火时间'],
            protos: ['date', 'operate', 'raw_tea_weight', 'raw_tea_count', 'bulk_tea_weight', 'bulk_tea_count', 'attrition_rate', 'memo', 'sunning_date', 'cooling_date', 'make_green_date', 'kill_out_date', 'knead_nori_date', 'deblock_date', 'dry_date', 'filtrate_date', 'refiring_date'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            hiddeEdit: true,
            searchText: false,
            typeComponent: [{
                component: newbuildBtn
            },
            {
                component: output
            }],
            listComponent: [{
                components: [{
                    type: 'date',
                    component: datePick
                }]
            }],
            harvestMore: [{
                name: 'sunning_date',
                type: 'datetimerange',
                component: inputDateTimes,
                label: '晒青时间'
            },
            {
                name: 'cooling_date',
                type: 'datetimerange',
                component: inputDateTimes,
                label: '晾青时间'
            },
            {
                name: 'make_green_date',
                type: 'datetime',
                component: inputDateTimes,
                label: '做青时间'
            },
            {
                name: 'kill_out_date',
                type: 'datetime',
                component: inputDateTimes,
                label: '杀青时间'
            },
            {
                name: 'knead_nori_date',
                type: 'datetime',
                component: inputDateTimes,
                label: '揉稔时间'
            },
            {
                name: 'deblock_date',
                type: 'datetime',
                component: inputDateTimes,
                label: '解块时间'
            },
            {
                name: 'dry_date',
                type: 'datetime',
                component: inputDateTimes,
                label: '干燥时间'
            },
            {
                name: 'filtrate_date',
                type: 'datetime',
                component: inputDateTimes,
                label: '筛选时间'
            },
            {
                name: 'refiring_date',
                type: 'datetime',
                component: inputDateTimes,
                label: '复火时间'
            }],
            newComponent: [{
                tab: '新建采制信息',
                type: 'assoc',
                components: [{
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '采制日期',
                    placeholder: '',
                    rule: [{required: true, message: '请输入采制日期'}, {validator: validate2.reDate, message: '请输入采制日期'}]
                },
                {
                    name: 'operate',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '采制人',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'raw_tea_weight',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '毛茶重量(kg)',
                    placeholder: '',
                    rule: [{required: true, message: '请输入毛茶重量', trigger: 'blur'}, {validator: validate2.reNumber}]
                },
                {
                    name: 'raw_tea_count',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '毛茶数量',
                    placeholder: '',
                    rule: [{validator: validate2.reNumber}]
                },
                {
                    name: 'bulk_tea_weight',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '散茶重量(kg)',
                    placeholder: '',
                    rule: [{required: true, message: '请输入毛茶重量', trigger: 'blur'}, {validator: validate2.reNumber}]
                },
                {
                    name: 'bulk_tea_count',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '散茶数量',
                    placeholder: '',
                    rule: [{validator: validate2.reNumber}]
                },
                {
                    name: 'opera_id',
                    type: 'selectMore',
                    component: null,
                    isNull: false,
                    label: '操作模块',
                    placeholder: '必填',
                    selectNumber: {sunning: [7], cooling: [8], make_green: [9], kill_out: [10], knead_nori: [11], deblock: [12], dry: [13], filtrate: [14], refiring: [15]},
                    rule: {required: false, trigger: 'blur', type: 'array'},
                    options: [{
                        value: 'sunning', label: '晒青'
                    },
                    {
                        value: 'cooling', label: '晾青'
                    },
                    {
                        value: 'make_green', label: '做青'
                    },
                    {
                        value: 'kill_out', label: '杀青'
                    },
                    {
                        value: 'knead_nori', label: '揉稔'
                    },
                    {
                        value: 'deblock', label: '解块'
                    },
                    {
                        value: 'dry', label: '干燥'
                    },
                    {
                        value: 'filtrate', label: '筛选'
                    },
                    {
                        value: 'refiring', label: '复火'
                    }]
                },
                {
                    name: 'sunning',
                    type: 'datetimerange',
                    component: inputDateTimes,
                    isNull: false,
                    hiddenSelect: true,
                    label: '晒青时间',
                    placeholder: '',
                    rule: [{required: true, message: '请选择晒青时间'}, {validator: validate2.reDate, message: '请输入晒青时间'}]
                },
                {
                    name: 'cooling',
                    type: 'datetimerange',
                    component: inputDateTimes,
                    isNull: false,
                    hiddenSelect: true,
                    label: '晾青时间',
                    placeholder: '',
                    rule: [{required: true, message: '请选择晾青时间'}, {validator: validate2.reDate, message: '请输入晾青时间'}]
                },
                {
                    name: 'make_green',
                    type: 'datetime',
                    component: inputDateTimes,
                    isNull: false,
                    hiddenSelect: true,
                    label: '做青时间',
                    placeholder: '',
                    rule: [{required: true, message: '请选择做青时间'}, {validator: validate2.reDate, message: '请输入做青时间'}]
                },
                {
                    name: 'kill_out',
                    type: 'datetime',
                    component: inputDateTimes,
                    isNull: false,
                    hiddenSelect: true,
                    label: '杀青时间',
                    placeholder: '',
                    rule: [{required: true, message: '请选择杀青时间'}, {validator: validate2.reDate, message: '请输入杀青时间'}]
                },
                {
                    name: 'knead_nori',
                    type: 'datetime',
                    component: inputDateTimes,
                    isNull: false,
                    hiddenSelect: true,
                    label: '揉稔时间',
                    placeholder: '',
                    rule: [{required: true, message: '请选择揉稔时间'}, {validator: validate2.reDate, message: '请输入揉稔时间'}]
                },
                {
                    name: 'deblock',
                    type: 'datetime',
                    component: inputDateTimes,
                    isNull: false,
                    hiddenSelect: true,
                    label: '解块时间',
                    placeholder: '',
                    rule: [{required: true, message: '请选择解块时间'}, {validator: validate2.reDate, message: '请输入解块时间'}]
                },
                {
                    name: 'dry',
                    type: 'datetime',
                    component: inputDateTimes,
                    isNull: false,
                    hiddenSelect: true,
                    label: '干燥时间',
                    placeholder: '',
                    rule: [{required: true, message: '请选择干燥时间'}, {validator: validate2.reDate, message: '请输入干燥时间'}]
                },
                {
                    name: 'filtrate',
                    type: 'datetime',
                    component: inputDateTimes,
                    isNull: false,
                    hiddenSelect: true,
                    label: '筛选时间',
                    placeholder: '',
                    rule: [{required: true, message: '请选择筛选时间'}, {validator: validate2.reDate, message: '请输入筛选时间'}]
                },
                {
                    name: 'refiring',
                    type: 'datetime',
                    component: inputDateTimes,
                    isNull: false,
                    hiddenSelect: true,
                    label: '复火时间',
                    placeholder: '',
                    rule: [{required: true, message: '请选择复火时间'}, {validator: validate2.reDate, message: '请输入复火时间'}]
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    isNull: true,
                    label: '备注信息',
                    placeholder: '',
                    rule: null
                }]
            }],
            editComponent: [{
                tab: '编辑采制信息',
                components: [{
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '采制日期',
                    placeholder: '',
                    rule: [{required: true, message: '请输入采制日期'}, {validator: validate2.reDate, message: '请输入采制日期'}]
                },
                {
                    name: 'operate',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '采制人',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'raw_tea_weight',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '毛茶重量(kg)',
                    placeholder: '',
                    rule: [{required: true, message: '请输入毛茶重量'}, {validator: validate2.reNumber}]
                },
                {
                    name: 'raw_tea_count',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '毛茶数量',
                    placeholder: '',
                    rule: [{validator: validate2.reNumber}]
                },
                {
                    name: 'bulk_tea_weight',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '散茶重量(kg)',
                    placeholder: '',
                    rule: [{required: true, message: '请输入毛茶重量'}, {validator: validate2.reNumber}]
                },
                {
                    name: 'bulk_tea_count',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '散茶数量',
                    placeholder: '',
                    rule: [{validator: validate2.reNumber}]
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    isNull: true,
                    label: '备注信息',
                    placeholder: '',
                    rule: null
                }]
            }]
        }]
    },
    // 凤凰山出库单产品
    teaOrderBatch: {
        key: 'teaOrderBatch',
        tab: '凤凰山茶库出库管理',
        theads: ['出库批次号', '出库仓库名', '操作人（制票人）', '送货人', '出库日期', '状态', '备注'],
        protos: ['serial', 'storeroom_name', 'operate', 'deliveryman', 'date', 'state', 'memo'],
        changeDataArr: [{state: {'未入库': 0, '已入库': 1}}],
        url: 'tea-order',
        tabList: [{
            key: 'tea-order-product',
            url: 'tea-order-product',
            tab: '出库产品信息',
            searchPlaceholder: '请输入产品进行搜索',
            headList: ['成品名称', '数量', '单位', '规格', '备注信息'],
            protos: ['product_name', 'amount', 'unit', 'specification', 'memo'],
            hiddeEdit: true,
            searchText: true,
            widths: [50, 50, 50, 50, 50],
            typeComponent: [{
                component: newbuildBtn
            }],
            listComponent: [],
            newComponent: [{
                tab: '新建出库产品信息',
                selectUrl2: [['harvests', 'id', 'serial', true], ['products', 'id', 'name', true]],
                selectInit2: [{value: '', label: '采制批次选择'}, {value: '', label: '产品选择'}],
                popNumber2: [0, 1],
                components: [{
                    name: 'harvest_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '采制批次',
                    placeholder: '必填',
                    rule: {required: true, message: '请选择采制批次', type: 'number'},
                    options: []
                },
                {
                    name: 'product_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '产品名称',
                    placeholder: '必填',
                    rule: {required: true, message: '请选择产品名称', type: 'number'},
                    options: []
                },
                {
                    name: 'amount',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '数量',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入产品数量'}, {validator: validate2.reInteger}]
                },
                {
                    name: 'unit',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '单位',
                    placeholder: '',
                    rule: {required: true, message: '请输入单位'}
                },
                {
                    name: 'specification',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '规格',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    isNull: true,
                    label: '备注信息',
                    placeholder: '',
                    rule: null
                }]
            }],
            editComponent: [{
                tab: '编辑出库产品信息',
                selectUrl2: [['products', 'id', 'name', true]],
                selectInit2: [{value: '', label: '产品选择'}],
                popNumber2: [0],
                components: [{
                    name: 'product_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '产品名称',
                    placeholder: '必填',
                    rule: {required: true, message: '请选择产品名称', type: 'number'},
                    options: []
                },
                {
                    name: 'amount',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '数量',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入产品数量'}, {validator: validate2.reInteger}]
                },
                {
                    name: 'unit',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '单位',
                    placeholder: '',
                    rule: {required: true, message: '请输入单位'}
                },
                {
                    name: 'specification',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '规格',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    isNull: true,
                    label: '备注信息',
                    placeholder: '',
                    rule: null
                }]
            }]
        }]
    },
    // 入库单产品
    invoicesOrderBatch: {
        key: 'invoicesOrderBatch',
        tab: '凤凰山茶库出库管理',
        theads: ['入库单批次号', '入库日期', '出库仓库名', '入库仓库名', '操作人（制票人）', '送货人', '提货人', '备注'],
        protos: ['serial', 'date', 'store_name', 'storeroom_name', 'operate', 'deliveryman', 'consignee', 'memo'],
        url: 'invoices-order',
        tabList: [{
            key: 'invoices-order-product',
            url: 'invoices-order-product',
            tab: '入库产品信息',
            searchPlaceholder: '请输入产品进行搜索',
            headList: ['成品名称', '数量', '单位', '规格', '备注信息'],
            protos: ['product_name', 'amount', 'unit', 'specification', 'memo'],
            hiddeEdit: false,
            searchText: true,
            widths: [50, 50, 50, 50, 50],
            typeComponent: [],
            listComponent: []
        }]
    },
    // 产品入库
    storageOrderBatch: {
        key: 'storageOrderBatch',
        tab: '产品入库管理',
        theads: ['产品入库批次号', '发货单位', '入库日期', '收货仓库', '备注'],
        protos: ['serial', 'forwarding_unit', 'date', 'storeroom_name', 'memo'],
        url: 'storage-order',
        tabList: [{
            key: 'invoices-order-product',
            url: 'invoices-order-product',
            tab: '入库产品信息',
            searchPlaceholder: '请输入产品进行搜索',
            headList: ['成品名称', '数量', '单位', '规格', '备注信息'],
            protos: ['product_name', 'amount', 'unit', 'specification', 'memo'],
            hiddeEdit: false,
            searchText: true,
            widths: [50, 50, 50, 50, 50],
            typeComponent: [],
            listComponent: []
        }]
    },
    // 销售入库详情
    saleInput: {
        key: 'storageProduct',
        tab: '销售入库批次管理',
        roleName: ['sell/storage', 0],
        theads: ['入库批次号', '入库日期', '供货商', '商品名称', '数量', '入库人', '备注信息'],
        protos: ['serial', 'datetime', 'supplier_name', 'product_name', 'amount', 'operate_name', 'memo'],
        url: 'storage',
        tabList: [{
            key: 'storage-code',
            url: 'storage-code',
            tab: '销售入库信息',
            searchPlaceholder: '请输入溯源码进行搜索',
            headList: ['产品溯源码', '销售产品', '生产日期', '产地', '溯源次数', '备注信息'],
            protos: ['code', 'product_name', 'date', 'origin', 'time', 'memo'],
            hiddeEdit: false,
            widths: [50, 50, 50, 50, 50, 50],
            moreComponent: [{
                value: '打印'
            }],
            typeComponent: [{
                component: output
            }],
            // {
            //     component: scanCode
            // }],
            listComponent: [{
                components: [{
                    type: 'date',
                    component: datePick
                }]
            }],
            printComponent: [{
                tab: '打印溯源码信息',
                components: [{
                    name: 'product_name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '产品名称',
                    placeholder: '',
                    disabled: true,
                    rule: {required: true}
                },
                {
                    name: 'specification',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '产品规格',
                    placeholder: '',
                    disabled: true,
                    rule: {required: true}
                },
                {
                    name: 'date',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '生产日期',
                    placeholder: '',
                    disabled: true,
                    rule: {required: true}
                },
                {
                    name: 'origin',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '产地',
                    placeholder: '',
                    disabled: true,
                    rule: {required: true}
                },
                {
                    name: 'code',
                    component: Qrcode,
                    isNull: false,
                    label: '产品二维码',
                    placeholder: '',
                    rule: null
                }]
            }]
        }]
    },
    // 销售订单详情
    saleOrder: {
        key: 'sellDetail',
        tab: '销售订单详情管理',
        roleName: ['sell/order', 0],
        changeDataArr: [{state: {'未完成': 0, '已完成': 1}}],
        theads: ['销售订单号', '订单日期', '物流批次号', '客户名称', '金额', '数量', '销售员', '状态'],
        protos: ['serial', 'datetime', 'delivery_serial', 'client_name', 'money', 'amount', 'operate_name', 'state'],
        url: 'sell',
        tabList: [{
            key: 'sell-code',
            url: 'sell-code',
            tab: '销售订单信息',
            searchPlaceholder: '请输入溯源码进行搜索',
            headList: ['产品溯源码', '销售产品', '生产日期', '产地', '溯源次数', '备注信息'],
            protos: ['code', 'product_name', 'date', 'origin', 'time', 'memo'],
            hiddeEdit: false,
            widths: [50, 50, 50, 50, 50, 50],
            moreComponent: [{
                value: '打印'
            }],
            typeComponent: [{
                component: output
            },
            {
                component: scanCode
            }],
            listComponent: [{
                components: [{
                    type: 'date',
                    component: datePick
                }]
            }],
            printComponent: [{
                tab: '打印溯源码信息',
                components: [{
                    name: 'product_name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '产品名称',
                    placeholder: '',
                    disabled: true,
                    rule: {required: true}
                },
                {
                    name: 'specification',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '产品规格',
                    placeholder: '',
                    disabled: true,
                    rule: {required: true}
                },
                {
                    name: 'date',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '生产日期',
                    placeholder: '',
                    disabled: true,
                    rule: {required: true}
                },
                {
                    name: 'origin',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '产地',
                    placeholder: '',
                    disabled: true,
                    rule: {required: true}
                },
                {
                    name: 'code',
                    component: Qrcode,
                    isNull: false,
                    label: '产品二维码',
                    placeholder: '',
                    rule: null
                }]
            }]
        }]
    },
    // 养殖自定义详情
    customBeast: {
        key: 'customDetail',
        tab: '养殖自定义详情管理',
        roleName: ['system/coustom', 0],
        theads: ['养殖场名称', '养殖场面积', '养殖场负责人', '养殖场地址', '养殖区名称', '养殖区面积', '养殖区负责人', '养殖区地址', '养殖日期', '养殖人', '出栏日期', '出栏人'],
        protos: ['name', 'area', 'operate', 'address', 'c_name', 'c_area', 'c_operate', 'c_address', 'bc_date', 'bc_operate', 'ch_date', 'ch_operate'],
        url: 'custom',
        tabList: [{
            key: 'custom-code',
            url: 'custom_code',
            tab: '溯源码信息',
            searchPlaceholder: '请输入溯源码进行搜索',
            headList: ['产品溯源码', '生产日期', '产地', '溯源次数', '备注信息'],
            protos: ['code', 'date', 'origin', 'time', 'memo'],
            hiddeEdit: false,
            widths: [50, 50, 50, 50, 50],
            moreComponent: [{
                value: '打印'
            }],
            typeComponent: [{
                component: newbuildBtn
            }],
            listComponent: [{
                components: [{
                    type: 'date',
                    component: datePick
                }]
            }],
            newComponent: [{
                tab: '养殖自定义信息添加溯源码',
                selectUrl2: [['products', 'id', 'name', true]],
                selectInit2: [{value: '', label: '请选择一个产品'}],
                popNumber2: [0],
                type: 'assoc',
                assocNum: 1,
                components: [{
                    name: 'product_id',
                    assocNum: 1,
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '产品',
                    placeholder: '',
                    changeTable: true,
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择产品'},
                    options: []
                },
                {
                    name: 'code',
                    type: 'table',
                    tableUrl: ['beast_code', true],
                    theads: ['溯源码', '生产日期'],
                    protos: ['code', 'date'],
                    valueId: 'code_ids',
                    errormsg: '请选择溯源码',
                    tableVal: []
                }]
            }],
            printComponent: [{
                tab: '打印溯源码信息',
                components: [{
                    name: 'product_name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '产品名称',
                    placeholder: '',
                    disabled: true,
                    rule: {required: true}
                },
                {
                    name: 'specification',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '产品规格',
                    placeholder: '',
                    disabled: true,
                    rule: {required: true}
                },
                {
                    name: 'date',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '生产日期',
                    placeholder: '',
                    disabled: true,
                    rule: {required: true}
                },
                {
                    name: 'origin',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '产地',
                    placeholder: '',
                    disabled: true,
                    rule: {required: true}
                },
                {
                    name: 'code',
                    component: Qrcode,
                    isNull: false,
                    label: '产品二维码',
                    placeholder: '',
                    rule: null
                }]
            }]
        },
        {
            key: 'basicinfo-beast',
            url: 'basicinfo',
            whereArr: {type: 'fodderuse'},
            tab: '饲料使用信息',
            hiddeEdit: true,
            searchPlaceholder: '请输入饲料名称进行搜索',
            headList: ['批次号', '操作日期', '操作人', '饲料名称', '饲料添加剂', '使用量', '天气', '指导专家', '备注信息'],
            protos: ['serial', 'date', 'operate', 'name', 'name2', 'amount', 'weather', 'expert', 'memo'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
            typeComponent: [{
                component: output
            },
            {
                component: newbuildBtn
            }],
            listComponent: [{
                components: [{
                    type: 'date',
                    component: datePick
                }]
            }],
            newComponent: [{
                tab: '新建饲料使用信息',
                hiddenValue: {type: 'fodderuse'},
                components: [{
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '操作日期',
                    placeholder: '请选择操作日期',
                    rule: {required: true, trigger: 'blur', validator: validate2.reDate, aa: '666', message: '请选择日期'}
                },
                {
                    name: 'operate',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '操作人',
                    placeholder: '请输入操作人',
                    rule: [{required: true, trigger: 'blur', message: '请输入操作人'}]
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '饲料名称',
                    placeholder: '请输入饲料名称',
                    rule: [{required: true, trigger: 'blur', message: '请输入饲料名称'}]
                },
                {
                    name: 'name2',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '饲料添加剂',
                    placeholder: '请输入饲料添加剂',
                    rule: {required: false, trigger: 'blur'}
                },
                {
                    name: 'desc',
                    type: 'textarea',
                    component: null,
                    isNull: true,
                    label: '喂养方式',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'expert',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '指导专家',
                    placeholder: '请输入指导专家',
                    rule: {required: false, trigger: 'blur'}
                },
                {
                    name: 'amount',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '使用量',
                    placeholder: '请输入使用量',
                    rule: {required: true, trigger: 'blur', message: '请输入使用量'}
                },
                {
                    name: 'weather',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '天气',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur'},
                    options: [{
                        label: '晴天',
                        value: '晴天'
                    },
                    {
                        label: '阴天',
                        value: '阴天'
                    },
                    {
                        label: '雨天',
                        value: '雨天'
                    }]
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '描述图片',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    isNull: true,
                    label: '备注信息',
                    placeholder: '',
                    rule: null
                }]
            }],
            editComponent: [{
                tab: '编辑饲料使用信息',
                hiddenValue: {type: 'fodderuse'},
                components: [{
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '操作日期',
                    placeholder: '请选择操作日期',
                    rule: {required: true, trigger: 'blur', validator: validate2.reDate, aa: '666', message: '请选择日期'}
                },
                {
                    name: 'operate',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '操作人',
                    placeholder: '请输入操作人',
                    rule: [{required: true, trigger: 'blur', message: '请输入操作人'}]
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '饲料名称',
                    placeholder: '请输入饲料名称',
                    rule: [{required: true, trigger: 'blur', message: '请输入饲料名称'}]
                },
                {
                    name: 'name2',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '饲料添加剂',
                    placeholder: '请输入饲料添加剂',
                    rule: {required: false, trigger: 'blur'}
                },
                {
                    name: 'desc',
                    type: 'textarea',
                    component: null,
                    isNull: true,
                    label: '喂养方式',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'expert',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '指导专家',
                    placeholder: '请输入指导专家',
                    rule: {required: false, trigger: 'blur'}
                },
                {
                    name: 'amount',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '使用量',
                    placeholder: '请输入使用量',
                    rule: {required: true, trigger: 'blur', message: '请输入使用量'}
                },
                {
                    name: 'weather',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '天气',
                    placeholder: '请输入所属部门',
                    rule: {required: true, trigger: 'blur'},
                    options: [{
                        label: '晴天',
                        value: '晴天'
                    },
                    {
                        label: '阴天',
                        value: '阴天'
                    },
                    {
                        label: '雨天',
                        value: '雨天'
                    }]
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '描述图片',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    isNull: true,
                    label: '备注信息',
                    placeholder: '',
                    rule: null
                }]
            }]
        },
        {
            key: 'basicinfo-disease',
            url: 'basicinfo',
            whereArr: {type: 'disease'},
            tab: '病疫信息',
            hiddeEdit: true,
            searchPlaceholder: '请输入兽药名称进行搜索',
            headList: ['批次号', '操作日期', '操作人', '兽药名称', '使用量', '病情描述', '指导专家', '备注信息'],
            protos: ['serial', 'date', 'operate', 'name', 'amount', 'desc', 'expert', 'memo'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50],
            typeComponent: [{
                component: output
            },
            {
                component: newbuildBtn
            }],
            listComponent: [{
                components: [{
                    type: 'date',
                    component: datePick
                }]
            }],
            newComponent: [{
                tab: '新建病疫信息',
                hiddenValue: {type: 'disease'},
                components: [{
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '操作日期',
                    placeholder: '请选择操作日期',
                    rule: {required: true, trigger: 'blur', validator: validate2.reDate, aa: '666', message: '请选择日期'}
                },
                {
                    name: 'operate',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '操作人',
                    placeholder: '请输入操作人',
                    rule: [{required: true, trigger: 'blur', message: '请输入操作人'}]
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '兽药名称',
                    placeholder: '请输入兽药名称',
                    rule: [{required: true, trigger: 'blur', message: '请输入兽药名称'}]
                },
                {
                    name: 'expert',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '指导专家',
                    placeholder: '请输入指导专家',
                    rule: {required: false, trigger: 'blur'}
                },
                {
                    name: 'amount',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '使用量',
                    placeholder: '请输入使用量',
                    rule: {required: true, trigger: 'blur', message: '请输入使用量'}
                },
                {
                    name: 'desc',
                    type: 'textarea',
                    component: null,
                    isNull: true,
                    label: '病情描述',
                    placeholder: '请输入特征描述',
                    rule: null
                },
                {
                    name: 'name2',
                    type: 'textarea',
                    component: null,
                    isNull: true,
                    label: '治疗方式',
                    placeholder: '请输入治疗方式',
                    rule: null
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '描述图片',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    isNull: true,
                    label: '备注信息',
                    placeholder: '',
                    rule: null
                }]
            }],
            editComponent: [{
                tab: '编辑病疫信息',
                components: [{
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '操作日期',
                    placeholder: '请选择操作日期',
                    rule: {required: true, trigger: 'blur', validator: validate2.reDate, aa: '666', message: '请选择日期'}
                },
                {
                    name: 'operate',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '操作人',
                    placeholder: '请输入操作人',
                    rule: [{required: true, trigger: 'blur', message: '请输入操作人'}]
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '兽药名称',
                    placeholder: '请输入兽药名称',
                    rule: [{required: true, trigger: 'blur', message: '请输入兽药名称'}]
                },
                {
                    name: 'expert',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '指导专家',
                    placeholder: '请输入指导专家',
                    rule: {required: false, trigger: 'blur'}
                },
                {
                    name: 'amount',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '使用量',
                    placeholder: '请输入使用量',
                    rule: {required: true, trigger: 'blur', message: '请输入使用量'}
                },
                {
                    name: 'desc',
                    type: 'textarea',
                    component: null,
                    isNull: true,
                    label: '病情描述',
                    placeholder: '请输入特征描述',
                    rule: null
                },
                {
                    name: 'name2',
                    type: 'textarea',
                    component: null,
                    isNull: true,
                    label: '治疗方式',
                    placeholder: '请输入治疗方式',
                    rule: null
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '描述图片',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    isNull: true,
                    label: '备注信息',
                    placeholder: '',
                    rule: null
                }]
            }]
        },
        {
            key: 'basicinfo-detection',
            url: 'basicinfo',
            whereArr: {type: 'detection'},
            tab: '检疫信息',
            hiddeEdit: true,
            searchPlaceholder: '请输入项目名称进行搜索',
            headList: ['批次号', '操作日期', '操作人', '项目名称', '检疫机构', '审批人', '检疫内容', '检疫结果', '指导专家', '备注信息'],
            protos: ['serial', 'date', 'operate', 'name', 'genre', 'name2', 'desc', 'amount', 'expert', 'memo'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            typeComponent: [{
                component: output
            },
            {
                component: newbuildBtn
            }],
            listComponent: [{
                components: [{
                    type: 'date',
                    component: datePick
                }]
            }],
            newComponent: [{
                tab: '新建检疫信息',
                hiddenValue: {type: 'detection'},
                components: [{
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '操作日期',
                    placeholder: '请选择操作日期',
                    rule: {required: true, trigger: 'blur', validator: validate2.reDate, aa: '666', message: '请选择日期'}
                },
                {
                    name: 'operate',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '操作人',
                    placeholder: '请输入操作人',
                    rule: [{required: true, trigger: 'blur', message: '请输入操作人'}]
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '项目名称',
                    placeholder: '请输入项目名称',
                    rule: [{required: true, trigger: 'blur', message: '请输入项目名称'}]
                },
                {
                    name: 'genre',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '检疫机构',
                    placeholder: '请输入检疫机构',
                    rule: [{required: true, trigger: 'blur', message: '请输入检疫机构'}]
                },
                {
                    name: 'name2',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '审批人',
                    placeholder: '请输入审批人',
                    rule: {required: false, trigger: 'blur'}
                },
                {
                    name: 'expert',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '指导专家',
                    placeholder: '请输入指导专家',
                    rule: {required: false, trigger: 'blur'}
                },
                {
                    name: 'amount',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '检疫结果',
                    placeholder: '请输入检疫结果',
                    rule: {required: true, trigger: 'blur', message: '请输入检疫结果'},
                    options: [{
                        label: '合格',
                        value: '合格'
                    },
                    {
                        label: '不合格',
                        value: '不合格'
                    }]
                },
                {
                    name: 'desc',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '检疫内容',
                    placeholder: '请输入检疫内容',
                    rule: {required: true, trigger: 'blur'}
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '描述图片',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    isNull: true,
                    label: '备注信息',
                    placeholder: '',
                    rule: null
                }]
            }],
            editComponent: [{
                tab: '编辑检疫信息',
                components: [{
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '操作日期',
                    placeholder: '请选择操作日期',
                    rule: {required: true, trigger: 'blur', validator: validate2.reDate, aa: '666', message: '请选择日期'}
                },
                {
                    name: 'operate',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '操作人',
                    placeholder: '请输入操作人',
                    rule: [{required: true, trigger: 'blur', message: '请输入操作人'}]
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '项目名称',
                    placeholder: '请输入项目名称',
                    rule: [{required: true, trigger: 'blur', message: '请输入项目名称'}]
                },
                {
                    name: 'genre',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '检疫机构',
                    placeholder: '请输入检疫机构',
                    rule: [{required: true, trigger: 'blur', message: '请输入检疫机构'}]
                },
                {
                    name: 'name2',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '审批人',
                    placeholder: '请输入审批人',
                    rule: {required: false, trigger: 'blur'}
                },
                {
                    name: 'expert',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '指导专家',
                    placeholder: '请输入指导专家',
                    rule: {required: false, trigger: 'blur'}
                },
                {
                    name: 'amount',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '检疫结果',
                    placeholder: '请输入检疫结果',
                    rule: {required: true, trigger: 'blur', message: '请输入检疫结果'},
                    options: [{
                        label: '合格',
                        value: '合格'
                    },
                    {
                        label: '不合格',
                        value: '不合格'
                    }]
                },
                {
                    name: 'desc',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '检疫内容',
                    placeholder: '请输入检疫内容',
                    rule: {required: true, trigger: 'blur'}
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '描述图片',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    isNull: true,
                    label: '备注信息',
                    placeholder: '',
                    rule: null
                }]
            }]
        },
        {
            key: 'basicinfo-detect_b',
            url: 'basicinfo',
            whereArr: {type: 'detect_b'},
            tab: '检验检测信息',
            hiddeEdit: true,
            searchPlaceholder: '请输入项目名称进行搜索',
            headList: ['批次号', '操作日期', '操作人', '检测项目名称', '检测类型', '检测部门', '检测结果', '天气', '检测内容', '指导专家', '备注信息'],
            protos: ['serial', 'date', 'operate', 'name', 'genre', 'name2', 'amount', 'weather', 'desc', 'expert', 'memo'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            typeComponent: [{
                component: output
            },
            {
                component: newbuildBtn
            }],
            listComponent: [{
                components: [{
                    type: 'date',
                    component: datePick
                }]
            }],
            newComponent: [{
                tab: '新建检验检测信息',
                hiddenValue: {type: 'detect_b'},
                components: [{
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '操作日期',
                    placeholder: '请选择操作日期',
                    rule: {required: true, trigger: 'blur', validator: validate2.reDate, aa: '666', message: '请选择日期'}
                },
                {
                    name: 'operate',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '操作人',
                    placeholder: '请输入操作人',
                    rule: [{required: true, trigger: 'blur', message: '请输入操作人'}]
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '检测项目名称',
                    placeholder: '请输入检测项目名称',
                    rule: [{required: true, trigger: 'blur', message: '请输入检测项目名称'}]
                },
                {
                    name: 'name2',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '检测部门',
                    placeholder: '请输入检测部门',
                    rule: {required: false, trigger: 'blur'}
                },
                {
                    name: 'expert',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '指导专家',
                    placeholder: '请输入指导专家',
                    rule: {required: false, trigger: 'blur'}
                },
                {
                    name: 'genre',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '检测类型',
                    placeholder: '请选择检验类型',
                    rule: {required: true, trigger: 'blur', message: '请输入检验类型'},
                    options: [{
                        label: '土壤',
                        value: '土壤'
                    },
                    {
                        label: '水质',
                        value: '水质'
                    },
                    {
                        label: '大气',
                        value: '大气'
                    }]
                },
                {
                    name: 'amount',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '检疫结果',
                    placeholder: '请输入检疫结果',
                    rule: {required: true, trigger: 'blur', message: '请输入检疫结果'},
                    options: [{
                        label: '合格',
                        value: '合格'
                    },
                    {
                        label: '不合格',
                        value: '不合格'
                    }]
                },
                {
                    name: 'weather',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '天气',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur'},
                    options: [{
                        label: '晴天',
                        value: '晴天'
                    },
                    {
                        label: '阴天',
                        value: '阴天'
                    },
                    {
                        label: '雨天',
                        value: '雨天'
                    }]
                },
                {
                    name: 'desc',
                    type: 'textarea',
                    component: null,
                    isNull: false,
                    label: '检测内容',
                    placeholder: '请输入检测内容',
                    rule: {required: true, trigger: 'blur'}
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '描述图片',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    isNull: true,
                    label: '备注信息',
                    placeholder: '',
                    rule: null
                }]
            }],
            editComponent: [{
                tab: '编辑检验检测信息',
                components: [{
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '操作日期',
                    placeholder: '请选择操作日期',
                    rule: {required: true, trigger: 'blur', validator: validate2.reDate, aa: '666', message: '请选择日期'}
                },
                {
                    name: 'operate',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '操作人',
                    placeholder: '请输入操作人',
                    rule: [{required: true, trigger: 'blur', message: '请输入操作人'}]
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '检测项目名称',
                    placeholder: '请输入检测项目名称',
                    rule: [{required: true, trigger: 'blur', message: '请输入检测项目名称'}]
                },
                {
                    name: 'name2',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '检测部门',
                    placeholder: '请输入检测部门',
                    rule: {required: false, trigger: 'blur'}
                },
                {
                    name: 'expert',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '指导专家',
                    placeholder: '请输入指导专家',
                    rule: {required: false, trigger: 'blur'}
                },
                {
                    name: 'genre',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '检测类型',
                    placeholder: '请选择检验类型',
                    rule: {required: true, trigger: 'blur', message: '请输入检验类型'},
                    options: [{
                        label: '土壤',
                        value: '土壤'
                    },
                    {
                        label: '水质',
                        value: '水质'
                    },
                    {
                        label: '大气',
                        value: '大气'
                    }]
                },
                {
                    name: 'amount',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '检疫结果',
                    placeholder: '请输入检疫结果',
                    rule: {required: true, trigger: 'blur', message: '请输入检疫结果'},
                    options: [{
                        label: '合格',
                        value: '合格'
                    },
                    {
                        label: '不合格',
                        value: '不合格'
                    }]
                },
                {
                    name: 'weather',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '天气',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur'},
                    options: [{
                        label: '晴天',
                        value: '晴天'
                    },
                    {
                        label: '阴天',
                        value: '阴天'
                    },
                    {
                        label: '雨天',
                        value: '雨天'
                    }]
                },
                {
                    name: 'desc',
                    type: 'textarea',
                    component: null,
                    isNull: false,
                    label: '检测内容',
                    placeholder: '请输入检测内容',
                    rule: {required: true, trigger: 'blur'}
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '描述图片',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    isNull: true,
                    label: '备注信息',
                    placeholder: '',
                    rule: null
                }]
            }]
        },
        {
            key: 'basicinfo-grow',
            url: 'basicinfo',
            whereArr: {type: 'grow'},
            tab: '生长过程信息',
            hiddeEdit: true,
            searchPlaceholder: '请输入标题进行搜索',
            headList: ['操作日期', '操作人', '标题', '描述', '备注信息'],
            protos: ['date', 'operate', 'name', 'desc', 'memo'],
            widths: [50, 50, 50, 50, 50],
            typeComponent: [{
                component: output
            },
            {
                component: newbuildBtn
            }],
            listComponent: [{
                components: [{
                    type: 'date',
                    component: datePick
                }]
            }],
            newComponent: [{
                tab: '新建生长过程信息',
                hiddenValue: {type: 'grow'},
                components: [{
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '操作日期',
                    placeholder: '请选择操作日期',
                    rule: {required: true, trigger: 'blur', validator: validate2.reDate, aa: '666', message: '请选择日期'}
                },
                {
                    name: 'operate',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '操作人',
                    placeholder: '请输入操作人',
                    rule: [{required: true, trigger: 'blur', message: '请输入操作人'}]
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '标题',
                    placeholder: '请输入标题',
                    rule: [{required: true, trigger: 'blur', message: '请输入标题'}]
                },
                {
                    name: 'desc',
                    type: 'textarea',
                    component: null,
                    isNull: false,
                    label: '描述',
                    placeholder: '请输入描述',
                    rule: {required: true, trigger: 'blur'}
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '描述图片',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    isNull: true,
                    label: '备注信息',
                    placeholder: '',
                    rule: null
                }]
            }],
            editComponent: [{
                tab: '编辑生长过程信息',
                components: [{
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '操作日期',
                    placeholder: '请选择操作日期',
                    rule: {required: true, trigger: 'blur', validator: validate2.reDate, aa: '666', message: '请选择日期'}
                },
                {
                    name: 'operate',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '操作人',
                    placeholder: '请输入操作人',
                    rule: [{required: true, trigger: 'blur', message: '请输入操作人'}]
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '标题',
                    placeholder: '请输入标题',
                    rule: [{required: true, trigger: 'blur', message: '请输入标题'}]
                },
                {
                    name: 'desc',
                    type: 'textarea',
                    component: null,
                    isNull: false,
                    label: '描述',
                    placeholder: '请输入描述',
                    rule: {required: true, trigger: 'blur'}
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '描述图片',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    isNull: true,
                    label: '备注信息',
                    placeholder: '',
                    rule: null
                }]
            }]
        }]
    },
    // 种植自定义详情
    customPlant: {
        key: 'customDetail',
        tab: '种植自定义详情管理',
        roleName: ['system/coustom', 0],
        theads: ['种植场名称', '种植场面积', '种植场负责人', '种植场地址', '种植区名称', '种植区面积', '种植区负责人', '种植区地址', '种植日期', '种植人', '采收日期', '采收人'],
        protos: ['name', 'area', 'operate', 'address', 'c_name', 'c_area', 'c_operate', 'c_address', 'bc_date', 'bc_operate', 'ch_date', 'ch_operate'],
        url: 'custom',
        tabList: [{
            key: 'custom-code',
            url: 'custom_code',
            tab: '溯源码信息',
            searchPlaceholder: '请输入溯源码进行搜索',
            headList: ['产品溯源码', '生产日期', '产地', '溯源次数', '备注信息'],
            protos: ['code', 'date', 'origin', 'time', 'memo'],
            hiddeEdit: false,
            widths: [50, 50, 50, 50, 50],
            moreComponent: [{
                value: '打印'
            }],
            typeComponent: [{
                component: output
            },
            {
                component: newbuildBtn
            }],
            listComponent: [{
                components: [{
                    type: 'date',
                    component: datePick
                }]
            }],
            newComponent: [{
                tab: '种植自定义信息添加溯源码',
                selectUrl2: [['products', 'id', 'name', true]],
                selectInit2: [{value: '', label: '请选择一个产品'}],
                popNumber2: [0],
                type: 'assoc',
                assocNum: 1,
                components: [{
                    name: 'product_id',
                    assocNum: 1,
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '产品',
                    placeholder: '',
                    changeTable: true,
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择产品'},
                    options: []
                },
                {
                    name: 'code',
                    type: 'table',
                    tableUrl: ['plant_code', true],
                    theads: ['溯源码', '生产日期'],
                    protos: ['code', 'date'],
                    valueId: 'code_ids',
                    errormsg: '请选择溯源码',
                    tableVal: []
                }]
            }],
            printComponent: [{
                tab: '打印溯源码信息',
                components: [{
                    name: 'product_name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '产品名称',
                    placeholder: '',
                    disabled: true,
                    rule: {required: true}
                },
                {
                    name: 'specification',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '产品规格',
                    placeholder: '',
                    disabled: true,
                    rule: {required: true}
                },
                {
                    name: 'date',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '生产日期',
                    placeholder: '',
                    disabled: true,
                    rule: {required: true}
                },
                {
                    name: 'origin',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '产地',
                    placeholder: '',
                    disabled: true,
                    rule: {required: true}
                },
                {
                    name: 'code',
                    component: Qrcode,
                    isNull: false,
                    label: '产品二维码',
                    placeholder: '',
                    rule: null
                }]
            }]
        },
        {
            key: 'basicinfo-fertilize',
            url: 'basicinfo',
            whereArr: {type: 'fertilize'},
            tab: '施肥信息',
            hiddeEdit: true,
            searchPlaceholder: '请输入肥料名称进行搜索',
            headList: ['批次号', '操作日期', '操作人', '肥料名称', '使用量', '描述', '天气', '指导专家', '备注信息'],
            protos: ['serial', 'date', 'operate', 'name', 'amount', 'desc', 'weather', 'expert', 'memo'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
            typeComponent: [{
                component: output
            },
            {
                component: newbuildBtn
            }],
            listComponent: [{
                components: [{
                    type: 'date',
                    component: datePick
                }]
            }],
            newComponent: [{
                tab: '新建施肥信息',
                hiddenValue: {type: 'fertilize'},
                components: [{
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '操作日期',
                    placeholder: '请选择操作日期',
                    rule: {required: true, trigger: 'blur', validator: validate2.reDate, aa: '666', message: '请选择日期'}
                },
                {
                    name: 'operate',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '操作人',
                    placeholder: '请输入操作人',
                    rule: [{required: true, trigger: 'blur', message: '请输入操作人'}]
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '肥料名称',
                    placeholder: '请输入肥料名称',
                    rule: [{required: true, trigger: 'blur', message: '请输入肥料名称'}]
                },
                {
                    name: 'desc',
                    type: 'textarea',
                    component: null,
                    isNull: false,
                    label: '施肥描述',
                    placeholder: '请输入施肥描述',
                    rule: {required: true, trigger: 'blur'}
                },
                {
                    name: 'expert',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '指导专家',
                    placeholder: '请输入指导专家',
                    rule: {required: false, trigger: 'blur'}
                },
                {
                    name: 'amount',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '使用量',
                    placeholder: '请输入使用量',
                    rule: {required: true, trigger: 'blur', message: '请输入使用量'}
                },
                {
                    name: 'weather',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '天气',
                    placeholder: '请输入所属部门',
                    rule: {required: true, trigger: 'blur'},
                    options: [{
                        label: '晴天',
                        value: '晴天'
                    },
                    {
                        label: '阴天',
                        value: '阴天'
                    },
                    {
                        label: '雨天',
                        value: '雨天'
                    }]
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '描述图片',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    isNull: true,
                    label: '备注信息',
                    placeholder: '',
                    rule: null
                }]
            }],
            editComponent: [{
                tab: '编辑施肥信息',
                components: [{
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '操作日期',
                    placeholder: '请选择操作日期',
                    rule: {required: true, trigger: 'blur', validator: validate2.reDate, aa: '666', message: '请选择日期'}
                },
                {
                    name: 'operate',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '操作人',
                    placeholder: '请输入操作人',
                    rule: [{required: true, trigger: 'blur', message: '请输入操作人'}]
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '肥料名称',
                    placeholder: '请输入肥料名称',
                    rule: [{required: true, trigger: 'blur', message: '请输入肥料名称'}]
                },
                {
                    name: 'desc',
                    type: 'textarea',
                    component: null,
                    isNull: false,
                    label: '施肥描述',
                    placeholder: '请输入施肥描述',
                    rule: {required: true, trigger: 'blur'}
                },
                {
                    name: 'expert',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '指导专家',
                    placeholder: '请输入指导专家',
                    rule: {required: false, trigger: 'blur'}
                },
                {
                    name: 'amount',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '使用量',
                    placeholder: '请输入使用量',
                    rule: {required: true, trigger: 'blur', message: '请输入使用量'}
                },
                {
                    name: 'weather',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '天气',
                    placeholder: '请输入所属部门',
                    rule: {required: true, trigger: 'blur'},
                    options: [{
                        label: '晴天',
                        value: '晴天'
                    },
                    {
                        label: '阴天',
                        value: '阴天'
                    },
                    {
                        label: '雨天',
                        value: '雨天'
                    }]
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '描述图片',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    isNull: true,
                    label: '备注信息',
                    placeholder: '',
                    rule: null
                }]
            }]
        },
        {
            key: 'basicinfo-spray',
            url: 'basicinfo',
            whereArr: {type: 'spray'},
            tab: '病虫害信息',
            hiddeEdit: true,
            searchPlaceholder: '请输入农药名称进行搜索',
            headList: ['批次号', '操作日期', '操作人', '农药名称', '使用量', '操作内容', '天气', '指导专家', '备注信息'],
            protos: ['serial', 'date', 'operate', 'name', 'amount', 'weather', 'desc', 'expert', 'memo'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
            typeComponent: [{
                component: output
            },
            {
                component: newbuildBtn
            }],
            listComponent: [{
                components: [{
                    type: 'date',
                    component: datePick
                }]
            }],
            newComponent: [{
                tab: '新建病虫害信息',
                hiddenValue: {type: 'spray'},
                components: [{
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '操作日期',
                    placeholder: '请选择操作日期',
                    rule: {required: true, trigger: 'blur', validator: validate2.reDate, aa: '666', message: '请选择日期'}
                },
                {
                    name: 'operate',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '操作人',
                    placeholder: '请输入操作人',
                    rule: [{required: true, trigger: 'blur', message: '请输入操作人'}]
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '农药名称',
                    placeholder: '请输入农药名称',
                    rule: [{required: true, trigger: 'blur', message: '请输入农药名称'}]
                },
                {
                    name: 'expert',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '指导专家',
                    placeholder: '请输入指导专家',
                    rule: {required: false, trigger: 'blur'}
                },
                {
                    name: 'amount',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '使用量',
                    placeholder: '请输入使用量',
                    rule: {required: true, trigger: 'blur', message: '请输入使用量'}
                },
                {
                    name: 'desc',
                    type: 'textarea',
                    component: null,
                    isNull: false,
                    label: '操作内容',
                    placeholder: '请输入操作内容',
                    rule: [{required: true, trigger: 'blur', message: '请输入操作内容'}]
                },
                {
                    name: 'weather',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '天气',
                    placeholder: '请输入所属部门',
                    rule: {required: true, trigger: 'blur'},
                    options: [{
                        label: '晴天',
                        value: '晴天'
                    },
                    {
                        label: '阴天',
                        value: '阴天'
                    },
                    {
                        label: '雨天',
                        value: '雨天'
                    }]
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '描述图片',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    isNull: true,
                    label: '备注信息',
                    placeholder: '',
                    rule: null
                }]
            }],
            editComponent: [{
                tab: '编辑病虫害信息',
                components: [{
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '操作日期',
                    placeholder: '请选择操作日期',
                    rule: {required: true, trigger: 'blur', validator: validate2.reDate, aa: '666', message: '请选择日期'}
                },
                {
                    name: 'operate',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '操作人',
                    placeholder: '请输入操作人',
                    rule: [{required: true, trigger: 'blur', message: '请输入操作人'}]
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '农药名称',
                    placeholder: '请输入农药名称',
                    rule: [{required: true, trigger: 'blur', message: '请输入农药名称'}]
                },
                {
                    name: 'expert',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '指导专家',
                    placeholder: '请输入指导专家',
                    rule: {required: false, trigger: 'blur'}
                },
                {
                    name: 'amount',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '使用量',
                    placeholder: '请输入使用量',
                    rule: {required: true, trigger: 'blur', message: '请输入使用量'}
                },
                {
                    name: 'desc',
                    type: 'textarea',
                    component: null,
                    isNull: false,
                    label: '操作内容',
                    placeholder: '请输入操作内容',
                    rule: [{required: true, trigger: 'blur', message: '请输入操作内容'}]
                },
                {
                    name: 'weather',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '天气',
                    placeholder: '请输入所属部门',
                    rule: {required: true, trigger: 'blur'},
                    options: [{
                        label: '晴天',
                        value: '晴天'
                    },
                    {
                        label: '阴天',
                        value: '阴天'
                    },
                    {
                        label: '雨天',
                        value: '雨天'
                    }]
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '描述图片',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    isNull: true,
                    label: '备注信息',
                    placeholder: '',
                    rule: null
                }]
            }]
        },
        {
            key: 'basicinfo-farming',
            url: 'basicinfo',
            whereArr: {type: 'farming'},
            tab: '农事信息',
            hiddeEdit: true,
            searchPlaceholder: '请输入标题进行搜索',
            headList: ['批次号', '操作日期', '操作人', '标题', '操作内容', '操作方法', '天气', '指导专家', '备注信息'],
            protos: ['serial', 'date', 'operate', 'name', 'desc', 'amount', 'weather', 'expert', 'memo'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
            typeComponent: [{
                component: output
            },
            {
                component: newbuildBtn
            }],
            listComponent: [{
                components: [{
                    type: 'date',
                    component: datePick
                }]
            }],
            newComponent: [{
                tab: '新建农事信息',
                hiddenValue: {type: 'farming'},
                components: [{
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '操作日期',
                    placeholder: '请选择操作日期',
                    rule: {required: true, trigger: 'blur', validator: validate2.reDate, aa: '666', message: '请选择日期'}
                },
                {
                    name: 'operate',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '操作人',
                    placeholder: '请输入操作人',
                    rule: [{required: true, trigger: 'blur', message: '请输入操作人'}]
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '标题',
                    placeholder: '请输入标题',
                    rule: [{required: true, trigger: 'blur', message: '请输入标题'}]
                },
                {
                    name: 'expert',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '指导专家',
                    placeholder: '请输入指导专家',
                    rule: {required: false, trigger: 'blur'}
                },
                {
                    name: 'amount',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '操作方法',
                    placeholder: '请输入操作方法',
                    rule: {required: true, trigger: 'blur', message: '请输入操作方法'}
                },
                {
                    name: 'desc',
                    type: 'textarea',
                    component: null,
                    isNull: true,
                    label: '操作内容',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'weather',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '天气',
                    placeholder: '请输入所属部门',
                    rule: {required: true, trigger: 'blur'},
                    options: [{
                        label: '晴天',
                        value: '晴天'
                    },
                    {
                        label: '阴天',
                        value: '阴天'
                    },
                    {
                        label: '雨天',
                        value: '雨天'
                    }]
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '描述图片',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    isNull: true,
                    label: '备注信息',
                    placeholder: '',
                    rule: null
                }]
            }],
            editComponent: [{
                tab: '编辑农事信息',
                hiddenValue: {type: 'farming'},
                components: [{
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '操作日期',
                    placeholder: '请选择操作日期',
                    rule: {required: true, trigger: 'blur', validator: validate2.reDate, aa: '666', message: '请选择日期'}
                },
                {
                    name: 'operate',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '操作人',
                    placeholder: '请输入操作人',
                    rule: [{required: true, trigger: 'blur', message: '请输入操作人'}]
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '标题',
                    placeholder: '请输入标题',
                    rule: [{required: true, trigger: 'blur', message: '请输入标题'}]
                },
                {
                    name: 'expert',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '指导专家',
                    placeholder: '请输入指导专家',
                    rule: {required: false, trigger: 'blur'}
                },
                {
                    name: 'amount',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '操作方法',
                    placeholder: '请输入操作方法',
                    rule: {required: true, trigger: 'blur', message: '请输入操作方法'}
                },
                {
                    name: 'desc',
                    type: 'textarea',
                    component: null,
                    isNull: true,
                    label: '操作内容',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'weather',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '天气',
                    placeholder: '请输入所属部门',
                    rule: {required: true, trigger: 'blur'},
                    options: [{
                        label: '晴天',
                        value: '晴天'
                    },
                    {
                        label: '阴天',
                        value: '阴天'
                    },
                    {
                        label: '雨天',
                        value: '雨天'
                    }]
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '描述图片',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    isNull: true,
                    label: '备注信息',
                    placeholder: '',
                    rule: null
                }]
            }]
        },
        {
            key: 'basicinfo-detect_p',
            url: 'basicinfo',
            whereArr: {type: 'detect_p'},
            tab: '检验检测信息',
            hiddeEdit: true,
            searchPlaceholder: '请输入项目名称进行搜索',
            headList: ['批次号', '操作日期', '操作人', '检测项目名称', '检测类型', '检测部门', '检测结果', '天气', '检测内容', '指导专家', '备注信息'],
            protos: ['serial', 'date', 'operate', 'name', 'genre', 'name2', 'amount', 'weather', 'desc', 'expert', 'memo'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            typeComponent: [{
                component: output
            },
            {
                component: newbuildBtn
            }],
            listComponent: [{
                components: [{
                    type: 'date',
                    component: datePick
                }]
            }],
            newComponent: [{
                tab: '新建检验检测信息',
                hiddenValue: {type: 'detect_p'},
                components: [{
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '操作日期',
                    placeholder: '请选择操作日期',
                    rule: {required: true, trigger: 'blur', validator: validate2.reDate, aa: '666', message: '请选择日期'}
                },
                {
                    name: 'operate',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '操作人',
                    placeholder: '请输入操作人',
                    rule: [{required: true, trigger: 'blur', message: '请输入操作人'}]
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '检测项目名称',
                    placeholder: '请输入检测项目名称',
                    rule: [{required: true, trigger: 'blur', message: '请输入检测项目名称'}]
                },
                {
                    name: 'name2',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '检测部门',
                    placeholder: '请输入检测部门',
                    rule: {required: false, trigger: 'blur'}
                },
                {
                    name: 'expert',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '指导专家',
                    placeholder: '请输入指导专家',
                    rule: {required: false, trigger: 'blur'}
                },
                {
                    name: 'amount',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '检验结果',
                    placeholder: '请输入检验结果',
                    rule: {required: true, trigger: 'blur', message: '请输入检验结果'},
                    options: [{
                        label: '合格',
                        value: '合格'
                    },
                    {
                        label: '不合格',
                        value: '不合格'
                    }]
                },
                {
                    name: 'genre',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '检测类型',
                    placeholder: '请选择检验类型',
                    rule: {required: true, trigger: 'blur', message: '请输入检验类型'},
                    options: [{
                        label: '土壤',
                        value: '土壤'
                    },
                    {
                        label: '水质',
                        value: '水质'
                    },
                    {
                        label: '大气',
                        value: '大气'
                    },
                    {
                        label: '农药残留',
                        value: '农药残留'
                    }]
                },
                {
                    name: 'weather',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '天气',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur'},
                    options: [{
                        label: '晴天',
                        value: '晴天'
                    },
                    {
                        label: '阴天',
                        value: '阴天'
                    },
                    {
                        label: '雨天',
                        value: '雨天'
                    }]
                },
                {
                    name: 'desc',
                    type: 'textarea',
                    component: null,
                    isNull: false,
                    label: '检测内容',
                    placeholder: '请输入检测内容',
                    rule: {required: true, trigger: 'blur'}
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '描述图片',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    isNull: true,
                    label: '备注信息',
                    placeholder: '',
                    rule: null
                }]
            }],
            editComponent: [{
                tab: '编辑检验检测信息',
                components: [{
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '操作日期',
                    placeholder: '请选择操作日期',
                    rule: {required: true, trigger: 'blur', validator: validate2.reDate, aa: '666', message: '请选择日期'}
                },
                {
                    name: 'operate',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '操作人',
                    placeholder: '请输入操作人',
                    rule: [{required: true, trigger: 'blur', message: '请输入操作人'}]
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '检测项目名称',
                    placeholder: '请输入检测项目名称',
                    rule: [{required: true, trigger: 'blur', message: '请输入检测项目名称'}]
                },
                {
                    name: 'name2',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '检测部门',
                    placeholder: '请输入检测部门',
                    rule: {required: false, trigger: 'blur'}
                },
                {
                    name: 'expert',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '指导专家',
                    placeholder: '请输入指导专家',
                    rule: {required: false, trigger: 'blur'}
                },
                {
                    name: 'genre',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '检测类型',
                    placeholder: '请选择检验类型',
                    rule: {required: true, trigger: 'blur', message: '请输入检验类型'},
                    options: [{
                        label: '土壤',
                        value: '土壤'
                    },
                    {
                        label: '水质',
                        value: '水质'
                    },
                    {
                        label: '大气',
                        value: '大气'
                    },
                    {
                        label: '农药残留',
                        value: '农药残留'
                    }]
                },
                {
                    name: 'amount',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '检验结果',
                    placeholder: '请输入检验结果',
                    rule: {required: true, trigger: 'blur', message: '请输入检验结果'},
                    options: [{
                        label: '合格',
                        value: '合格'
                    },
                    {
                        label: '不合格',
                        value: '不合格'
                    }]
                },
                {
                    name: 'weather',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '天气',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur'},
                    options: [{
                        label: '晴天',
                        value: '晴天'
                    },
                    {
                        label: '阴天',
                        value: '阴天'
                    },
                    {
                        label: '雨天',
                        value: '雨天'
                    }]
                },
                {
                    name: 'desc',
                    type: 'textarea',
                    component: null,
                    isNull: false,
                    label: '检测内容',
                    placeholder: '请输入检测内容',
                    rule: {required: true, trigger: 'blur'}
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '描述图片',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    isNull: true,
                    label: '备注信息',
                    placeholder: '',
                    rule: null
                }]
            }]
        },
        {
            key: 'basicinfo-course',
            url: 'basicinfo',
            whereArr: {type: 'course'},
            tab: '生长过程信息',
            hiddeEdit: true,
            searchPlaceholder: '请输入标题进行搜索',
            headList: ['操作日期', '操作人', '标题', '描述', '备注信息'],
            protos: ['date', 'operate', 'name', 'desc', 'memo'],
            widths: [50, 50, 50, 50, 50],
            typeComponent: [{
                component: output
            },
            {
                component: newbuildBtn
            }],
            listComponent: [{
                components: [{
                    type: 'date',
                    component: datePick
                }]
            }],
            newComponent: [{
                tab: '新建生长过程信息',
                hiddenValue: {type: 'course'},
                components: [{
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '操作日期',
                    placeholder: '请选择操作日期',
                    rule: {required: true, trigger: 'blur', validator: validate2.reDate, aa: '666', message: '请选择日期'}
                },
                {
                    name: 'operate',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '操作人',
                    placeholder: '请输入操作人',
                    rule: [{required: true, trigger: 'blur', message: '请输入操作人'}]
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '标题',
                    placeholder: '请输入标题',
                    rule: [{required: true, trigger: 'blur', message: '请输入标题'}]
                },
                {
                    name: 'desc',
                    type: 'textarea',
                    component: null,
                    isNull: false,
                    label: '描述',
                    placeholder: '请输入描述',
                    rule: {required: true, trigger: 'blur'}
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '描述图片',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    isNull: true,
                    label: '备注信息',
                    placeholder: '',
                    rule: null
                }]
            }],
            editComponent: [{
                tab: '编辑生长过程信息',
                components: [{
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '操作日期',
                    placeholder: '请选择操作日期',
                    rule: {required: true, trigger: 'blur', validator: validate2.reDate, aa: '666', message: '请选择日期'}
                },
                {
                    name: 'operate',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '操作人',
                    placeholder: '请输入操作人',
                    rule: [{required: true, trigger: 'blur', message: '请输入操作人'}]
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '标题',
                    placeholder: '请输入标题',
                    rule: [{required: true, trigger: 'blur', message: '请输入标题'}]
                },
                {
                    name: 'desc',
                    type: 'textarea',
                    component: null,
                    isNull: false,
                    label: '描述',
                    placeholder: '请输入描述',
                    rule: {required: true, trigger: 'blur'}
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '描述图片',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    isNull: true,
                    label: '备注信息',
                    placeholder: '',
                    rule: null
                }]
            }]
        }]
    },
    // 入驻单位详情
    companyUser: {
        key: 'companyUser',
        url: 'company',
        roleName: ['admin/company', 1],
        tab: '入驻单位详情管理',
        theads: ['公司名称', '公司编码', '公司logo', '负责人/法人', '公司简称', '统一码', '电话', '地址', '经营范围', '员工总数', '公司网站', '销售网站'],
        protos: ['name', 'coding', 'logo', 'legal_person', 'short_name', 'USCC', 'phone', 'address', 'business_scope', 'total_staff', 'website', 'sell_website'],
        tabList: [{
            url: 'user',
            split: true,
            hiddeRole: true,
            urlid: 'company_id',
            hiddeEdit: true,
            tab: '用户信息',
            searchPlaceholder: '请输入用户名进行搜索',
            selectSearch: ['name'],
            leftOperateList: [{
                components: []
            }],
            searchText: true,
            rightOperateComponent: [{component: output}, {component: newbuildBtn}],
            changeDataArr: [{gender: {0: '男', 1: '女'}}],
            headList: ['用户名', '姓名', '工号', '邮箱', '性别', '电话号码', '出生日期', '所属部门', '入职日期', '头像', '备注22'],
            protos: ['name', 'realname', 'number', 'email', 'gender', 'phone', 'birth_date', 'department', 'hiredate', 'thumb', 'memo'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            typeComponent: [{component: newbuildBtn}],
            newComponent: [{
                urlid: 'company_id',
                tab: '新建用户信息',
                hiddenValue: {type: 0},
                checkNumber: [0, 1, 2],
                components: [{
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '用户名',
                    placeholder: '请输入用户名',
                    rule: [{required: true, trigger: 'blur', message: '请输入用户名'}, {validator: validate2.reCheck, trigger: 'blur', message: '用户名已存在'}]
                },
                {
                    name: 'email',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '邮箱',
                    placeholder: '请输入邮箱',
                    rule: [{required: true, trigger: 'blur', message: '请输入正确邮箱格式', type: 'email'}, {validator: validate2.reCheck, trigger: 'blur', message: '邮箱已存在'}]
                },
                {
                    name: 'phone',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '手机号码',
                    placeholder: '请输入手机号码',
                    rule: [{required: true, trigger: 'blur', message: '请输入手机号码'}, {validator: validate2.reCheck, trigger: 'blur', message: '手机号码已存在'}, {validator: validate2.phone}]
                },
                {
                    name: 'gender',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '性别',
                    placeholder: '请选择性别',
                    rule: {required: true, trigger: 'blur', type: 'number'},
                    options: [{
                        value: 0,
                        label: '男'
                    }, {
                        value: 1,
                        label: '女'
                    }]
                },
                {
                    name: 'realname',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '姓名',
                    placeholder: '请输入姓名',
                    rule: {required: false, trigger: 'blur'}
                },
                {
                    name: 'birth_date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '出生日期',
                    placeholder: '请选择日期',
                    rule: {validator: validate2.reDate, aa: '666'}
                },
                {
                    name: 'department',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '所属部门',
                    placeholder: '请输入所属部门',
                    rule: null
                },
                {
                    name: 'hiredate',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '入职日期',
                    placeholder: '请输入日期',
                    rule: null
                },
                {
                    name: 'number',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '工号',
                    placeholder: '请输入工号',
                    rule: [{required: false, trigger: 'blur'}, {validator: validate2.reInteger}]
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '头像',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    isNull: true,
                    label: '备注信息',
                    placeholder: '',
                    rule: null
                }]
            }],
            editComponent: [{
                tab: '编辑用户信息',
                hiddenValue: {type: 0},
                checkNumber: [0, 1, 2],
                components: [{
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '用户名',
                    placeholder: '请输入用户名',
                    rule: [{required: true, trigger: 'blur', message: '请输入用户名'}, {validator: validate2.reCheck, trigger: 'blur', message: '用户名已存在'}]
                },
                {
                    name: 'email',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '邮箱',
                    placeholder: '请输入邮箱',
                    rule: [{required: true, trigger: 'blur', message: '请输入正确邮箱格式', type: 'email'}, {validator: validate2.reCheck, trigger: 'blur', message: '邮箱已存在'}]
                },
                {
                    name: 'phone',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '手机号码',
                    placeholder: '请输入手机号码',
                    rule: [{required: true, trigger: 'blur', message: '请输入手机号码'}, {validator: validate2.reCheck, trigger: 'blur', message: '手机号码已存在'}, {validator: validate2.phone}]
                },
                {
                    name: 'gender',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '性别',
                    placeholder: '请选择性别',
                    rule: null,
                    options: [{
                        value: 0,
                        label: '男'
                    }, {
                        value: 1,
                        label: '女'
                    }]
                },
                {
                    name: 'realname',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '姓名',
                    placeholder: '请输入姓名',
                    rule: {required: false, trigger: 'blur'}
                },
                {
                    name: 'birth_date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '出生日期',
                    placeholder: '请选择日期',
                    rule: {validator: validate2.reDate, aa: '666'}
                },
                {
                    name: 'department',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '所属部门',
                    placeholder: '请输入所属部门',
                    rule: null
                },
                {
                    name: 'hiredate',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '入职日期',
                    placeholder: '请输入日期',
                    rule: null
                },
                {
                    name: 'number',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '工号',
                    placeholder: '请输入工号',
                    rule: [{required: false, trigger: 'blur'}, {validator: validate2.reInteger}]
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '头像',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    isNull: true,
                    label: '备注信息',
                    placeholder: '',
                    rule: null
                }]
            }]
        }]
    }
}
