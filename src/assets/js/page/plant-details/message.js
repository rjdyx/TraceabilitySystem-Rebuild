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
        printShow: true,
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
                    rule: {required: true, message: '请输入规格'}
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
    // 凤凰山毛茶入库入库
    invoicesOrderBatch: {
        key: 'invoicesOrderBatch',
        tab: '毛茶入库管理',
        printShow: true,
        theads: ['入库单批次号', '入库日期', '出库仓库名', '入库仓库名', '操作人（制票人）', '送货人', '提货人', '备注'],
        protos: ['serial', 'date', 'store_name', 'storeroom_name', 'operate', 'deliveryman', 'consignee', 'memo'],
        url: 'invoices-order',
        tabList: [{
            key: 'invoices-order-product',
            url: 'invoices-order-product',
            tab: '毛茶入库信息',
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
    // 生产任务单
    productiveTaskBatch: {
        key: 'productiveTaskBatch',
        tab: '生产任务管理',
        printShow: true,
        theads: ['生产任务批次号', '制单日期', '制单人', '任务类型', '审核状态', '客户名称', '客户电话', '交接员', '出货日期', '发货地址', '备注'],
        protos: ['serial', 'date', 'operate', 'task_type', 'state', 'client_name', 'client_phone', 'transfer_member', 'out_date', 'ship_address', 'memo'],
        url: 'productive-task',
        changeDataArr: [{task_type: {'周计划': 'week_plan', '客户下单': 'client_order'}}, {state: {'未通过': 1, '已通过': 0}}],
        tabList: [{
            key: 'productive-task-product',
            url: 'productive-task-product',
            tab: '生产任务产品信息',
            searchPlaceholder: '请输入产品进行搜索',
            headList: ['成品名称', '数量', '单位', '包装', '规格', '备注信息'],
            protos: ['product_name', 'amount', 'unit', 'package', 'specification', 'memo'],
            hiddeEdit: true,
            searchText: true,
            widths: [50, 50, 50, 50, 50, 50],
            typeComponent: [{
                component: newbuildBtn
            }],
            listComponent: [],
            newComponent: [{
                tab: '新建生产任务产品信息',
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
                    name: 'package',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '包装',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'specification',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '规格',
                    placeholder: '',
                    rule: {required: true, message: '请输入规格'}
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
                tab: '编辑生产任务产品信息',
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
                    name: 'package',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '包装',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'specification',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '规格',
                    placeholder: '',
                    rule: {required: true, message: '请输入规格'}
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
    // 领料单
    pickingListBatch: {
        key: 'pickingListBatch',
        tab: '领料单管理',
        printShow: true,
        theads: ['领料批次号', '领料类型', '领料部门', '领料用途', '领料日期', '发料仓库', '审核状态', '备注'],
        protos: ['serial', 'pick_type', 'pick_department', 'pick_use', 'date', 'storeroom_name', 'state', 'memo'],
        changeDataArr: [{state: {'未通过': 1, '已通过': 0}}],
        url: 'picking-list',
        tabList: [{
            key: 'picking-list-product',
            url: 'picking-list-product',
            tab: '领料单产品信息',
            searchPlaceholder: '请输入产品进行搜索',
            headList: ['成品名称', '规格型号', '任务单号', '基本单位名称', '基本单位应发数量', '基本单位实发数量', '对象成本组', '单位', '实发数量', '库存数量', '备注'],
            protos: ['product_name', 'specification', 'productive_task_serial', 'basic_unit', 'basic_recei_number', 'basic_real_number', 'object_arr', 'unit', 'real_number', 'store_number', 'memo'],
            hiddeEdit: true,
            searchText: true,
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            typeComponent: [{
                component: newbuildBtn
            }],
            listComponent: [],
            newComponent: [{
                tab: '新建领料单产品信息',
                selectUrl2: [['invoices_orders', 'id', 'serial', true], ['productive_tasks', 'id', 'serial', true]],
                selectInit2: [{value: '', label: '毛茶入库单选择'}, {value: '', label: '任务单选择'}],
                popNumber2: [0, 3],
                assocPosition: 1,
                components: [{
                    name: 'invoices_order_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '毛茶入库单',
                    placeholder: '必填',
                    assoc: true,
                    position: 1,
                    selectField: ['id', 'name', true],
                    getType: 'string',
                    arrName: 'invoices_order_product_id',
                    table: 'invoices_order_products',
                    rule: {required: true, trigger: 'blur', message: '请选择毛茶入库单', type: 'number'},
                    options: []
                },
                {
                    name: 'invoices_order_product_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '产品名称',
                    placeholder: '必填',
                    rule: {required: true, message: '请选择产品名称', type: 'number'},
                    options: []
                },
                {
                    name: 'specification',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '规格型号',
                    placeholder: '',
                    rule: {required: true, message: '请输入规格型号'}
                },
                {
                    name: 'productive_task_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '任务单号',
                    placeholder: '必填',
                    rule: {required: true, message: '请选择任务单号', type: 'number'},
                    options: []
                },
                {
                    name: 'basic_unit',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '基本单位名称',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'basic_recei_number',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '基本单位应发数量',
                    placeholder: '',
                    rule: {validator: validate2.reInteger}
                },
                {
                    name: 'basic_real_number',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '基本单位实发数量',
                    placeholder: '',
                    rule: {validator: validate2.reInteger}
                },
                {
                    name: 'object_arr',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '对象成本组',
                    placeholder: '',
                    rule: {required: true, message: '请输入对象成本组'}
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
                    name: 'real_number',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '实发数量',
                    placeholder: '',
                    rule: [{required: true, message: '请输入实发数量'}, {validator: validate2.reInteger}]
                },
                {
                    name: 'store_number',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '库存数量',
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
                tab: '编辑领料单产品信息',
                selectUrl2: [['productive_tasks', 'id', 'serial', true]],
                selectInit2: [{value: '', label: '任务单选择'}],
                popNumber2: [2],
                components: [{
                    name: 'product_name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '产品名称',
                    placeholder: '必填',
                    disabled: true,
                    rule: null
                },
                {
                    name: 'specification',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '规格型号',
                    placeholder: '',
                    rule: {required: true, message: '请输入规格型号'}
                },
                {
                    name: 'productive_task_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '任务单号',
                    placeholder: '必填',
                    rule: {required: true, message: '请选择任务单号', type: 'number'},
                    options: []
                },
                {
                    name: 'basic_unit',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '基本单位名称',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'basic_recei_number',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '基本单位应发数量',
                    placeholder: '',
                    rule: {validator: validate2.reInteger}
                },
                {
                    name: 'basic_real_number',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '基本单位实发数量',
                    placeholder: '',
                    rule: {validator: validate2.reInteger}
                },
                {
                    name: 'object_arr',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '对象成本组',
                    placeholder: '',
                    rule: {required: true, message: '请输入对象成本组'}
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
                    name: 'real_number',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '实发数量',
                    placeholder: '',
                    rule: [{required: true, message: '请输入实发数量'}, {validator: validate2.reInteger}]
                },
                {
                    name: 'store_number',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '库存数量',
                    placeholder: '',
                    rule: {validator: validate2.reInteger}
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
    // 产品入库
    storageOrderBatch: {
        key: 'storageOrderBatch',
        tab: '产品入库管理',
        printShow: true,
        theads: ['产品入库批次号', '发货单位', '入库日期', '收货仓库', '审核状态', '备注'],
        protos: ['serial', 'forwarding_unit', 'date', 'storeroom_name', 'state', 'memo'],
        changeDataArr: [{state: {'未通过': 1, '已通过': 0}}],
        url: 'storage-order',
        batch: 'storageProductCodeBatch',
        tabList: [{
            key: 'storage-order-product',
            url: 'storage-order-product',
            tab: '入库产品信息',
            changeDataArr: [{state: {0: '未完成', 1: '已完成'}}],
            searchPlaceholder: '请输入产品进行搜索',
            headList: ['产品名称', '规格型号', '任务单号', '生产/采购日期', '实收数量', '单位', '状态', '基本单位名称', '基本单位应收数量', '基本单位实收数量', '保质期（天）', '有效期至', '仓位', '备注信息'],
            protos: ['product_name', 'specification', 'task_list_no', 'date', 'real_number', 'unit', 'state', 'basic_unit', 'basic_recei_number', 'basic_real_number', 'expiration_date', 'validity', 'store_no', 'memo'],
            hiddeEdit: true,
            searchText: true,
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            typeComponent: [{
                component: newbuildBtn
            }],
            listComponent: [],
            newComponent: [{
                tab: '新建入库产品信息',
                selectUrl2: [['picking_lists', 'id', 'serial', true]],
                selectInit2: [{value: '', label: '领料单选择'}],
                popNumber2: [0],
                assocPosition: 1,
                components: [{
                    name: 'picking_list_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '领料单',
                    placeholder: '必填',
                    assoc: true,
                    position: 1,
                    selectField: ['id', 'name', true],
                    getType: 'string',
                    arrName: 'picking_list_product_id',
                    table: 'picking_list_products',
                    rule: {required: true, trigger: 'blur', message: '请选择配料单', type: 'number'},
                    options: []
                },
                {
                    name: 'picking_list_product_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '产品名称',
                    placeholder: '必填',
                    arrOption: ['task_list_no'],
                    rule: {required: true, message: '请选择产品名称', type: 'number'},
                    options: []
                },
                {
                    name: 'specification',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '规格型号',
                    placeholder: '',
                    rule: {required: true, message: '请输入规格型号'}
                },
                {
                    name: 'task_list_no',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '任务单号',
                    placeholder: '必填',
                    disabled: true,
                    rule: {required: true, message: '请选择任务单号'}
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: true,
                    label: '生产日期',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入生产日期'}, {validator: validate2.reDate, message: '请输入生产日期'}]
                },
                {
                    name: 'real_number',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '实收数量',
                    placeholder: '',
                    rule: [{required: true, message: '请输入实收数量'}, {validator: validate2.reInteger}]
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
                    name: 'basic_unit',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '基本单位名称',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'basic_recei_number',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '基本单位应收数量',
                    placeholder: '',
                    rule: {validator: validate2.reInteger}
                },
                {
                    name: 'basic_real_number',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '基本单位实收数量',
                    placeholder: '',
                    rule: {validator: validate2.reInteger}
                },
                {
                    name: 'expiration_date',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '保质期（天）',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'validity',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '有效期至',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'store_no',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '仓位',
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
                tab: '编辑领料单产品信息',
                selectUrl2: [['productive_tasks', 'id', 'serial', true]],
                selectInit2: [{value: '', label: '任务单选择'}],
                popNumber2: [2],
                components: [{
                    name: 'product_name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '产品名称',
                    placeholder: '必填',
                    disabled: true,
                    rule: null
                },
                {
                    name: 'specification',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '规格型号',
                    placeholder: '',
                    rule: {required: true, message: '请输入规格型号'}
                },
                {
                    name: 'task_list_no',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '任务单号',
                    placeholder: '必填',
                    disabled: true,
                    rule: {required: true, message: '请选择任务单号'}
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: true,
                    label: '生产日期',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入生产日期'}, {validator: validate2.reDate, message: '请输入生产日期'}]
                },
                {
                    name: 'real_number',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '实收数量',
                    placeholder: '',
                    rule: [{required: true, message: '请输入实收数量'}, {validator: validate2.reInteger}]
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
                    name: 'basic_unit',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '基本单位名称',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'basic_recei_number',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '基本单位应收数量',
                    placeholder: '',
                    rule: {validator: validate2.reInteger}
                },
                {
                    name: 'basic_real_number',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '基本单位实收数量',
                    placeholder: '',
                    rule: {validator: validate2.reInteger}
                },
                {
                    name: 'expiration_date',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '保质期（天）',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'validity',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '有效期至',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'store_no',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '仓位',
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
    // 入库产品溯源码
    storageProductCodeBatch: {
        key: 'storageProductCodeBatch',
        tab: '入库产品溯源码管理',
        theads: ['产品名称', '规格型号', '任务单号', '生产/采购日期', '实收数量', '单位', '保质期（天）', '有效期至', '备注信息'],
        protos: ['product_name', 'specification', 'task_list_no', 'date', 'real_number', 'unit', 'expiration_date', 'validity', 'memo'],
        url: '1/storage-order-product',
        tabList: [{
            key: 'storage-product-code',
            url: 'storage-product-code',
            tab: '入库产品信息',
            searchPlaceholder: '请输入溯源码进行搜索',
            headList: ['产品溯源码', '生成时间', '溯源次数', '备注信息'],
            protos: ['code', 'date', 'time', 'memo'],
            hiddeEdit: true,
            searchText: true,
            widths: [50, 50, 50, 50],
            typeComponent: [{
                component: newbuildBtn
            }],
            listComponent: [],
            moreComponent: [{value: '打印'}],
            newComponent: [{
                tab: '新建产品溯源码信息',
                components: [{
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: true,
                    label: '生成日期',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入生成日期'}, {validator: validate2.reDate, message: '请输入生成日期'}]
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
                tab: '编辑产品溯源码信息',
                components: [{
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: true,
                    label: '生成日期',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入生成日期'}, {validator: validate2.reDate, message: '请输入生成日期'}]
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
            printComponent: [{
                tab: '打印溯源码信息',
                components: [{
                    name: 'code',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '产品溯源码：',
                    placeholder: '',
                    disabled: true,
                    rule: {required: true}
                },
                {
                    name: 'code',
                    component: Qrcode,
                    isNull: false,
                    label: '二维码：',
                    placeholder: '',
                    rule: null
                }]
            }]
        }]
    },
    // 销售订单详情
    saleOrderBatch: {
        key: 'saleOrderBatch',
        tab: '销售订单产品管理',
        printShow: true,
        changeDataArr: [{transportable_type: {'自运': 'self', '托运': 'consign'}}],
        theads: ['订单批次号', '订购公司', '联系人', '联系电话', '送货地址', '业务员', '制单人', '下单日期', '运输方式', '汇款账户', '物流单号', '备注'],
        protos: ['serial', 'company_name', 'contact', 'phone', 'address', 'sale_person', 'operate', 'date', 'transportable_type', 'bank_account', 'delivery_serial', 'memo'],
        url: 'sell',
        tabList: [{
            key: 'sell-product',
            url: 'sell-product',
            tab: '销售订单产品信息',
            searchPlaceholder: '请输入溯源码进行搜索',
            headList: ['订单产品', '规格型号', '数量', '单价(元/件)', '金额（元）', '备注信息'],
            protos: ['product_name', 'specification', 'amount', 'unit_price', 'total', 'memo'],
            hiddeEdit: true,
            searchText: true,
            widths: [50, 50, 50, 50, 50, 50],
            typeComponent: [{
                component: newbuildBtn
            }],
            listComponent: [],
            newComponent: [{
                tab: '新建销售订单产品信息',
                selectUrl2: [['sell_stores', 'id', 'product_name', true]],
                selectInit2: [{value: '', label: '产品选择'}],
                popNumber2: [0],
                components: [{
                    name: 'sell_store_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '订单产品',
                    placeholder: '',
                    arrOption: ['specification'],
                    placeholderMsg: 2,
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择产品'},
                    options: []
                },
                {
                    name: 'specification',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '规格型号',
                    placeholder: '',
                    disabled: true,
                    rule: {required: true, trigger: 'blur', message: '请输入规格型号'}
                },
                {
                    name: 'amount',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '产品数量',
                    placeholder: '',
                    rule: [{required: true, trigger: 'blur', message: '请输入产品数量'}, {validator: validate2.reInteger, getMessage: '产品数量不能大于库存数'}]
                },
                {
                    name: 'unit_price',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '单价(元/件)',
                    placeholder: '',
                    rule: [{required: true, trigger: 'blur', message: '请输入产品单价'}, {validator: validate2.reNumber}]
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
                tab: '编辑销售订单产品信息',
                selectUrl2: [['sell_stores', 'id', 'product_name', true]],
                selectInit2: [{value: '', label: '产品选择'}],
                popNumber2: [0],
                limit: 2,
                components: [{
                    name: 'sell_store_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '产品选择',
                    placeholder: '',
                    arrOption: ['specification'],
                    placeholderMsg: 2,
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择产品'},
                    options: []
                },
                {
                    name: 'specification',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '规格型号',
                    placeholder: '',
                    disabled: true,
                    rule: {required: true, trigger: 'blur', message: '请输入规格型号'}
                },
                {
                    name: 'amount',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '产品数量',
                    placeholder: '',
                    rule: [{required: true, message: '请输入产品数量'}, {validator: validate2.reInteger, getMessage: '产品数量不能大于库存数'}]
                },
                {
                    name: 'unit_price',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '单价(元/件)',
                    placeholder: '',
                    rule: [{required: true, message: '请输入产品单价'}, {validator: validate2.reNumber}]
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
    // 发货单详情
    deliverOrderBatch: {
        key: 'deliverOrderBatch',
        tab: '销售订单产品管理',
        printShow: true,
        changeDataArr: [{state: {'未完成': 0, '已完成': 1}}],
        theads: ['发货批次号', '客户名称', '客户电话', '交接员', '制单人', '下单日期', '出货日期', '状态', '备注'],
        protos: ['deliver_serial', 'client_name', 'phone', 'contact', 'operate', 'date', 'out_date', 'state', 'memo'],
        url: 'sell',
        tabList: [{
            key: 'sell-product',
            url: 'sell-product',
            tab: '销售订单产品信息',
            searchPlaceholder: '请输入溯源码进行搜索',
            headList: ['订单产品', '规格型号', '数量', '单价(元/件)', '金额（元）', '备注信息'],
            protos: ['product_name', 'specification', 'amount', 'unit_price', 'total', 'memo'],
            hiddeOperate: false,
            hiddeEdit: true,
            searchText: true,
            widths: [50, 50, 50, 50, 50, 50],
            typeComponent: [],
            listComponent: []
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
