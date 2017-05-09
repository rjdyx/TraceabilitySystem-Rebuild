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
import validate2 from '../../utils/validate2.js'
import Qrcode from '../../components/public/Qrcode.vue'

export default {
    // 养殖批次详情
    breedBatch: {
        key: 'breedBatch',
        tab: '养殖批次管理',
        theads: ['批次号', '养殖区', '圈舍', '畜禽', '开始日期', '数量', '养殖方式', '养殖人', '操作人', '录入人', '备注'],
        protos: ['serial', 'farm_name', 'area_name', 'beast_name', 'start_date', 'amount', 'way', 'operate', 'operate_name', 'user_name', 'meno'],
        url: 'breed',
        tabList: [{
            url: 'rfid',
            tab: '畜禽RFID',
            searchPlaceholder: '请输入rfid进行搜索',
            // typeComponent: [{component: importBtn}, {component: output}, {component: newbuildBtn}],
            typeComponent: [{component: newbuildBtn}],
            headList: ['RFID', '畜禽名称', '养殖日期', '备注信息'],
            hiddeEdit: true,
            protos: ['rfid', 'beast_name', 'created_at', 'memo'],
            widths: [50, 50, 50],
            listComponent: [],
            newComponent: [{
                tab: '新建rfid信息',
                checkNumber: [0],
                components: [{
                    name: 'rfid',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: 'Rfid',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入Rfid', trigger: 'blur'}, {validator: validate2.reCheck}]
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
                tab: '编辑rfid信息',
                checkNumber: [0],
                components: [{
                    name: 'rfid',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: 'Rfid',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入Rfid', trigger: 'blur'}, {validator: validate2.reCheck}]
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
            url: 'course',
            tab: '生长过程信息',
            searchPlaceholder: '请输入标题进行搜索',
            // typeComponent: [{component: importBtn}, {component: output}, {component: newbuildBtn}],
            headList: ['标题', '描述', '上传日期', '生长图片', '备注信息'],
            protos: ['name', 'desc', 'date', 'img', 'memo'],
            widths: [50, 50, 50, 50, 50],
            hiddeEdit: true,
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
                    rule: [{required: true, message: '请输入标题'}, {validator: validate2.reCheck}]
                },
                {
                    name: 'desc',
                    type: 'textarea',
                    component: null,
                    isNull: false,
                    label: '特征描述',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', message: '请输入描述信息'}
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '上传日期',
                    placeholder: '',
                    rule: [{required: true, trigger: 'blur', message: '请输入上传日期'}, {validator: validate2.reDate, message: '请输入上传日期'}]
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: false,
                    label: '',
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
                hasImg: true,
                checkNumber: [0],
                components: [{
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '图片标题',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入标题', trigger: 'blur'}, {validator: validate2.reCheck}]
                },
                {
                    name: 'desc',
                    type: 'textarea',
                    component: null,
                    isNull: false,
                    label: '特征描述',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', message: '请输入描述信息'}
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '上传日期',
                    placeholder: '',
                    rule: [{required: true, trigger: 'blur', message: '请输入上传日期'}, {validator: validate2.reDate, message: '请输入上传日期'}]
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: false,
                    label: '',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur'}
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
        }
        ]
    },
    // 饲料批次详情
    feedBatch: {
        key: 'feedBatch',
        tab: '饲料批次管理',
        theads: ['饲料批次号', '饲料日期', '饲料名称', '喂养方式', '操作人员', '喂养量', '备注信息'],
        protos: ['serial', 'date', 'fodder_name', 'way', 'operate_name', 'amount_unit', 'meno'],
        url: 'fodderuse',
        tabList: [{
            url: 'breed-fodderuse',
            tab: '养殖批次信息',
            searchPlaceholder: '请输入批次号进行搜索',
            // typeComponent: [{component: output}, {component: newbuildBtn}],
            typeComponent: [{component: newbuildBtn}],
            headList: ['养殖批次号', '圈舍', '畜禽名称', '养殖日期'],
            protos: ['serial', 'area_name', 'beast_name', 'date'],
            widths: [50, 50, 50, 50],
            hiddeEdit: false,
            listComponent: [],
            newComponent: [{
                tab: '新建批次饲料使用信息',
                type: 'table',
                assocNum: 0,
                labUrl: 'breed',
                components: [{
                    name: 'name',
                    type: 'table',
                    theads: ['养殖批次号', '圈舍', '养殖畜禽', '养殖日期'],
                    protos: ['serial', 'area_name', 'beast_name', 'start_date'],
                    valueId: 'breed_ids',
                    errormsg: '请选择养殖批次号',
                    tableVal: []
                }]
            }]
        }]
    },
    // 检测批次详情
    beastDetectBatch: {
        key: 'beastDetectBatch',
        tab: '检测批次管理',
        theads: ['检测批次号', '检测日期', '检测项目名称', '专家', '操作人员', '检测内容', '检测结果', '审批人', '检测报告图片', '备注'],
        protos: ['serial', 'date', 'name', 'expert_name', 'operate_name', 'content', 'result', 'check', 'img', 'memo'],
        url: 'detect',
        tabList: [{
            url: 'breed-detect',
            tab: '养殖批次信息',
            searchPlaceholder: '请输入批次号进行搜索',
            // typeComponent: [{component: output}, {component: newbuildBtn}],
            typeComponent: [{component: newbuildBtn}],
            headList: ['养殖批次号', '圈舍', '畜禽名称', '养殖日期'],
            protos: ['serial', 'area_name', 'beast_name', 'date'],
            widths: [50, 50, 50, 50],
            hiddeEdit: false,
            listComponent: [],
            newComponent: [{
                tab: '新建批次检测信息',
                type: 'table',
                assocNum: 0,
                labUrl: 'breed',
                components: [{
                    name: 'name',
                    type: 'table',
                    theads: ['养殖批次号', '圈舍', '养殖畜禽', '养殖日期'],
                    protos: ['serial', 'area_name', 'beast_name', 'start_date'],
                    valueId: 'breed_ids',
                    errormsg: '请选择养殖批次号',
                    tableVal: []
                }]
            }]
        }]
    },
    // 病疫批次详情
    plagueBatch: {
        key: 'plagueBatch',
        tab: '病疫批次管理',
        theads: ['病疫批次号', '兽药名称', '用药日期', '病情描述', '专家', '平均用药量', '治疗方式', '备注'],
        protos: ['serial', 'drug_name', 'date', 'description', 'expert_name', 'amount_unit', 'way', 'meno'],
        url: 'disease',
        tabList: [{
            url: 'disease-rfid',
            tab: '养殖批次信息',
            searchPlaceholder: '请输入批次号进行搜索',
            typeComponent: [{component: newbuildBtn}],
            headList: ['养殖批次号', '病疫Rfid', '用药时间', '备注信息'],
            protos: ['serial', 'rfid', 'date', 'memo'],
            widths: [50, 50, 50, 50],
            hiddeEdit: false,
            listComponent: [],
            newComponent: [{
                tab: '新建批次病疫信息',
                selectUrl2: [['breeds', 'id', 'serial', true]],
                selectInit2: [{value: '', label: '养殖批次号选择'}],
                popNumber2: [0],
                labUrl: 'rfid',
                type: 'assoc',
                assocNum: 1,
                components: [{
                    name: 'breed_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '养殖批次号',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择养殖批次号'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'table',
                    theads: ['养殖批次', 'Rfid', '养殖畜禽', '养殖日期'],
                    protos: ['serial', 'rfid', 'beast_name', 'date'],
                    valueId: 'rfid_ids',
                    errormsg: '请选择rfid',
                    tableVal: []
                }]
            }]
        }]
    },
    // 检疫批次详情
    detectionBatch: {
        key: 'detectionBatch',
        tab: '检疫批次管理',
        theads: ['检验批次号', '检测日期', '检测项目名称', '专家', '操作人员', '检测内容', '检测结果', '审批人', '检测报告图片', '备注'],
        protos: ['serial', 'date', 'name', 'expert_name', 'operate_name', 'content', 'result', 'check', 'img', 'memo'],
        url: 'detection',
        tabList: [{
            url: 'detection-rfid',
            tab: '养殖批次信息',
            searchPlaceholder: '请输入批次号进行搜索',
            // typeComponent: [{component: output}, {component: newbuildBtn}],
            typeComponent: [{component: newbuildBtn}],
            headList: ['圈舍', '养殖批次号', 'Rfid', '畜禽名称', '养殖日期'],
            protos: ['area_name', 'serial', 'rfid', 'beast_name', 'date'],
            widths: [50, 50, 50, 50, 50],
            hiddeEdit: false,
            listComponent: [],
            newComponent: [{
                tab: '新建批次检疫信息',
                // type: 'table',
                // labUrl: 'rfid',
                selectUrl2: [['breeds', 'id', 'serial', true]],
                selectInit2: [{value: '', label: '养殖批次号选择'}],
                popNumber2: [0],
                labUrl: 'rfid',
                type: 'assoc',
                assocNum: 1,
                components: [{
                    name: 'breed_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '养殖批次号',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择养殖批次号'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'table',
                    theads: ['养殖批次', 'Rfid', '养殖畜禽', '养殖日期'],
                    protos: ['serial', 'rfid', 'beast_name', 'date'],
                    valueId: 'rfid_ids',
                    errormsg: '请选择rfid',
                    tableVal: []
                }]
            }]
        }]
    },
    // 圈舍维护批次详情
    areaBatch: {
        key: 'areaBatch',
        tab: '圈舍批次管理',
        theads: ['圈舍批次号', '操作类型', '操作方式', '操作内容', '专家', '操作人', '操作日期', '备注信息'],
        protos: ['serial', 'name', 'way', 'content', 'expert_name', 'operate_name', 'date', 'memo'],
        url: 'clean',
        tabList: [{
            url: 'clean-area',
            tab: '养殖批次信息',
            searchPlaceholder: '请输入批次号进行搜索',
            // typeComponent: [{component: output}, {component: newbuildBtn}],
            typeComponent: [{component: newbuildBtn}],
            headList: ['养殖区', '圈舍', '圈舍面积'],
            protos: ['farm_name', 'name', 'area_unit'],
            widths: [50, 50, 50],
            hiddeEdit: false,
            listComponent: [],
            newComponent: [{
                tab: '新建批次圈舍维护信息',
                type: 'table',
                labUrl: 'area',
                // labUrl: 'breed',
                assocNum: 0,
                components: [{
                    name: 'name',
                    type: 'table',
                    theads: ['养殖批次号', '圈舍', '养殖畜禽', '养殖日期'],
                    protos: ['serial', 'area_name', 'beast_name', 'start_date'],
                    valueId: 'breed_ids',
                    errormsg: '请选择养殖批次号',
                    tableVal: []
                }]
            }]
        }]
    },
    // 无害化批次详情
    innocuityBatch: {
        key: 'innocuityBatch',
        tab: '无害化批次管理',
        theads: ['无害化批次号', '操作日期', '操作内容', '实行原因', '指导专家', '备注信息'],
        protos: ['serial', 'date', 'content', 'why', 'expert_name', 'memo'],
        url: 'dispose',
        tabList: [{
            url: 'dispose-rfid',
            tab: '养殖批次信息',
            searchPlaceholder: '请输入批次号进行搜索',
            // typeComponent: [{component: output}, {component: newbuildBtn}],
            typeComponent: [{component: scanCode}, {component: newbuildBtn}],
            headList: ['圈舍', '养殖批次', 'Rfid', '养殖畜禽', '养殖日期'],
            protos: ['area_name', 'serial', 'rfid', 'beast_name', 'date'],
            widths: [50, 50, 50, 50],
            hiddeEdit: false,
            listComponent: [],
            newComponent: [{
                tab: '新建批次无害化信息',
                selectUrl2: [['breeds', 'id', 'serial', true]],
                selectInit2: [{value: '', label: '养殖批次号选择'}],
                popNumber2: [0],
                labUrl: 'rfid',
                type: 'assoc',
                assocNum: 1,
                components: [{
                    name: 'breed_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '养殖批次号',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择养殖批次号'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'table',
                    theads: ['养殖批次', 'Rfid', '养殖畜禽', '养殖日期'],
                    protos: ['serial', 'rfid', 'beast_name', 'date'],
                    valueId: 'breed_ids',
                    errormsg: '请选择rfid',
                    tableVal: []
                }]
            }]
        }]
    },
    // 出栏批次详情
    slaughterBatch: {
        key: 'slaughterBatch',
        tab: '畜禽出栏管理',
        theads: ['出栏批次号', '出栏日期', '出栏数量', '操作人员', '备注'],
        protos: ['serial', 'date', 'amount', 'operate_name', 'memo'],
        url: 'come',
        tabList: [{
            url: 'come-rfid',
            tab: '畜禽RFID',
            searchPlaceholder: '请输入rfid进行搜索',
            typeComponent: [{component: newbuildBtn}],
            headList: ['圈舍', '养殖批次', 'Rfid', '养殖畜禽', '养殖日期'],
            protos: ['area_name', 'serial', 'rfid', 'beast_name', 'date'],
            widths: [50, 50, 50, 50, 50],
            hiddeEdit: false,
            listComponent: [],
            newComponent: [{
                tab: '新建出栏批次rfid信息',
                selectUrl2: [['breeds', 'id', 'serial', true]],
                selectInit2: [{value: '', label: '养殖批次号选择'}],
                popNumber2: [0],
                labUrl: 'rfid',
                type: 'assoc',
                assocNum: 1,
                components: [{
                    name: 'breed_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '养殖批次号',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择养殖批次号'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'table',
                    theads: ['养殖批次', 'Rfid', '养殖畜禽', '养殖日期'],
                    protos: ['serial', 'rfid', 'beast_name', 'date'],
                    valueId: 'rfid_ids',
                    errormsg: '请选择rfid',
                    tableVal: []
                }]
            }]
        }]
    },
    // 养殖计划批次详情
    planBatch: {
        key: 'planBatch',
        tab: '养殖计划管理',
        theads: ['养殖批次号', '所属养殖场', '养殖人', '养殖日期', '所属养殖区', '养殖地址', '养殖畜禽名称', '养殖面积', '养殖备注'],
        protos: [],
        url: 'plan',
        tabList: [{
            url: 'plan-rfid',
            tab: '畜禽RFID',
            searchPlaceholder: '请输入rfid进行搜索',
            // typeComponent: [{component: importBtn}, {component: output}, {component: newbuildBtn}],
            typeComponent: [{component: newbuildBtn}],
            headList: ['养殖批次', 'Rfid', '养殖畜禽', '养殖日期'],
            protos: ['serial', 'rfid', 'beast_name', 'date'],
            widths: [50, 50, 50, 50, 50],
            hiddeEdit: false,
            listComponent: [],
            newComponent: [{
                tab: '新建养殖计划关联信息',
                type: 'table',
                url: 'rfid',
                components: [{
                    name: 'name',
                    type: 'table',
                    theads: ['圈舍', '养殖批次', 'Rfid', '养殖畜禽', '养殖日期'],
                    protos: ['area_name', 'serial', 'rfid', 'beast_name', 'date'],
                    valueId: 'breed_ids',
                    errormsg: '请选择rfid',
                    tableVal: []
                }]
            }]
        }]
    },
    // 屠宰加工批次详情
    beastPackBatch: {
        key: 'beastPackBatch',
        tab: '加工批次管理',
        theads: ['加工批次号', '加工日期', '数量', '产地', '加工人', '备注'],
        protos: ['serial', 'date', 'amount', 'origin', 'operate_name', 'memo'],
        batch: 'beastPackProduct',
        url: 'pack',
        tabList: [{
            url: 'pack-product',
            tab: '加工批次产品信息',
            searchPlaceholder: '请输入产品名称进行搜索',
            headList: ['产品名称', '执行标准', '商品型号', '包装规格', '保质期', '存储方法'],
            protos: ['name', 'enforce_standard', 'marque', 'specification', 'expiration_date', 'storage_means'],
            widths: [50, 50, 50, 50, 50, 50],
            hiddeEdit: false,
            typeComponent: [{
                component: newbuildBtn
            }],
            listComponent: [],
            newComponent: [{
                tab: '新建加工产品信息',
                type: 'table',
                labUrl: 'product',
                assocNum: 0,
                components: [{
                    name: 'name',
                    type: 'table',
                    theads: ['产品名称', '商品型号', '包装规格'],
                    protos: ['name', 'marque', 'specification'],
                    valueId: 'product_ids',
                    errormsg: '请选择产品',
                    tableVal: []
                }]
            }]
        }]
    },
    // 屠宰加工产品信息
    beastPackProduct: {
        key: 'beastPackProduct',
        tab: '生产加工产品管理',
        theads: ['产品名称', '执行标准', '商品型号', '包装规格', '保质期', '存储方法'],
        protos: ['name', 'enforce_standard', 'marque', 'specification', 'expiration_date', 'storage_means'],
        url: '{x}/pack-product',
        tabList: [{
            url: 'pack-product-rfid',
            tab: '加工产品溯源码信息',
            searchPlaceholder: '请输入溯源码进行搜索',
            headList: ['产品溯源码', 'rfid', '生产日期', '溯源次数', '备注'],
            protos: ['code', 'rfid', 'date', 'time', 'memo'],
            widths: [50, 50, 50, 50, 50],
            hiddeEdit: true,
            typeComponent: [{
                component: newbuildBtn
            }],
            moreComponent: [{
                value: '打印'
            }],
            listComponent: [{
                components: [{
                    type: 'date',
                    component: datePick
                }]
            }],
            newComponent: [{
                tab: '新建溯源码信息',
                hiddenValue: {type: 'beast'},
                selectUrl2: [['comes', 'id', 'serial', true]],
                selectInit2: [{value: '', label: '出栏批次号选择'}],
                popNumber2: [1],
                labUrl: 'come-rfid',
                type: 'assoc',
                assocNum: 4,
                components: [{
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '生产日期',
                    placeholder: '',
                    rule: [{required: true, message: '请输入生产日期'}, {validator: validate2.reDate, message: '请输入生产日期'}]
                },
                {
                    name: 'come_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '出栏批次号',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', message: '请选择出栏批次', type: 'number'},
                    options: []
                },
                {
                    name: 'amount',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '溯源码数量',
                    placeholder: '请输入溯源码数量（整数）',
                    rule: [{required: true, message: '请输入溯源码数量', trigger: 'blur'}, {validator: validate2.reInteger}]
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    isNull: true,
                    label: '备注信息',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'name',
                    type: 'table',
                    theads: ['出栏批次', 'Rfid', '养殖畜禽', '养殖日期'],
                    protos: ['come_serial', 'rfid', 'beast_name', 'date'],
                    valueId: 'rfid_ids',
                    errormsg: '请选择rfid',
                    tableVal: []
                }]
            }],
            editComponent: [{
                tab: '编辑溯源码信息',
                components: [{
                    name: 'code',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '产品溯源码',
                    placeholder: '',
                    disabled: true,
                    rule: {required: true}
                },
                {
                    name: 'rfid',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: 'rfid',
                    placeholder: '',
                    disabled: true,
                    rule: {required: true}
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '生产日期',
                    placeholder: '',
                    rule: [{required: true, message: '请输入生产日期'}, {validator: validate2.reDate, message: '请输入生产日期'}]
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
    // 屠宰加工检测详情
    beastDetectPkBatch: {
        key: 'beastDetectPkBatch',
        tab: '加工检测批次管理',
        theads: ['检测批次号', '检测名称', '检测内容', '检测日期', '检测结果', '检测机构', '负责人', '处理方法'],
        protos: ['serial', 'name', 'content', 'date', 'result', 'organization', 'operate_name', 'method'],
        changeDataArr: [{result: {'不合格': 0, '合格': 1}}],
        url: 'detect_pk',
        tabList: [{
            url: 'pack-detect-pk',
            tab: '加工批次信息',
            searchPlaceholder: '请输入产品名称进行搜索',
            headList: ['加工批次号', '加工日期', '数量', '产地', '操作人', '备注'],
            protos: ['serial', 'date', 'amount', 'origin', 'operate_name', 'memo'],
            widths: [50, 50, 50, 50, 50, 50],
            hiddeEdit: false,
            typeComponent: [{
                component: newbuildBtn
            }],
            listComponent: [],
            newComponent: [{
                tab: '新建加工批次检测信息',
                type: 'table',
                labUrl: 'pack',
                assocNum: 0,
                paramsIndex: 'beast',
                components: [{
                    name: 'name',
                    type: 'table',
                    theads: ['加工批次号', '加工日期', '产地'],
                    protos: ['serial', 'date', 'origin'],
                    valueId: 'pack_ids',
                    errormsg: '请选择加工批次',
                    tableVal: []
                }]
            }]
        }]
    },
    // 种植批次
    plantSerial: {
        key: 'plantSerial',
        tab: '种植批次管理',
        theads: ['种植批次号', '所属种植区', '种植人', '种植日期', '种植地址', '种植果蔬名称', '当前批次面积', '备注'],
        protos: ['serial', 'plantation_name', 'operate_name', 'date', 'address', 'plant_name', 'area_unit', 'memo'],
        url: 'cultivate',
        tabList: [{
            key: 'grow',
            url: 'grow',
            tab: '生长过程信息',
            searchPlaceholder: '请输入标题进行搜索',
            headList: ['图片', '图片标题', '图片描述', '上传日期', '备注信息'],
            protos: ['thumb', 'name', 'desc', 'date', 'memo'],
            hiddeEdit: true,
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
                    rule: [{required: true, message: '请输入图片标题', trigger: 'blur'}, {validator: validate2.reCheck}]
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
                    rule: [{required: true, message: '请输入图片标题', trigger: 'blur'}, {validator: validate2.reCheck}]
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
        tab: '施肥批次管理',
        theads: ['施肥批次号', '肥料', '施肥人', '施肥日期', '施肥量（Kg）', '专家', '施肥方法', '备注'],
        protos: ['serial', 'manure_name', 'operate_name', 'date', 'amount_unit', 'expert_name', 'way', 'memo'],
        url: 'fertilize',
        tabList: [{
            url: 'cultivate-fertilize',
            tab: '种植批次施肥信息',
            searchPlaceholder: '请输入种植批次进行搜索',
            headList: ['种植批次号', '种植区', '种植果蔬', '种植日期', '种植人', '备注信息'],
            protos: ['serial', 'plantation_name', 'plant_name', 'date', 'operate_name', 'memo'],
            widths: [50, 50, 50, 50, 50, 50],
            hiddeEdit: false,
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
                tab: '新建批次施肥信息',
                type: 'table',
                assocNum: 0,
                labUrl: 'cultivate',
                components: [{
                    name: 'name',
                    type: 'table',
                    theads: ['种植批次号', '种植果蔬', '种植日期'],
                    protos: ['serial', 'plant_name', 'date'],
                    valueId: 'cultivate_ids',
                    errormsg: '请选择种植批次号',
                    tableVal: []
                }]
            }]
        }]
    },
    // 施药批次详情
    sprayBatch: {
        key: 'sprayBatch',
        tab: '施药批次管理',
        theads: ['施药批次号', '农药', '施药人', '施药日期', '施药量（Kg）', '专家', '施药方法', '备注'],
        protos: ['serial', 'medicament_name', 'operate_name', 'date', 'amount_unit', 'expert_name', 'way', 'memo'],
        url: 'spray',
        tabList: [{
            url: 'cultivate-spray',
            tab: '种植批次施肥信息',
            searchPlaceholder: '请输入种植批次进行搜索',
            headList: ['种植批次号', '种植区', '种植果蔬', '种植日期', '种植人', '备注信息'],
            protos: ['serial', 'plantation_name', 'plant_name', 'date', 'operate_name', 'memo'],
            widths: [50, 50, 50, 50, 50, 50],
            hiddeEdit: false,
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
                tab: '新建批次施药信息',
                type: 'table',
                assocNum: 0,
                labUrl: 'cultivate',
                components: [{
                    name: 'name',
                    type: 'table',
                    theads: ['种植批次号', '种植果蔬', '种植日期'],
                    protos: ['serial', 'plant_name', 'date'],
                    valueId: 'cultivate_ids',
                    errormsg: '请选择种植批次号',
                    tableVal: []
                }]
            }]
        }]
    },
    // 种植检验检测
    plantDetectBatch: {
        key: 'plantDetectBatch',
        tab: '种植检测批次管理',
        theads: ['检测批次号', '检测类型', '检测人', '检测日期', '检测部门', '检测内容', '检测结果', '专家'],
        protos: ['serial', 'name', 'operate_name', 'date', 'department', 'content', 'result', 'expert_name'],
        url: 'detect',
        changeDataArr: [{result: {'合格': 0, '不合格': 1}}],
        tabList: [{
            url: 'cultivate-detect',
            tab: '种植批次检测信息',
            searchPlaceholder: '请输入种植批次进行搜索',
            headList: ['种植批次号', '种植区', '种植果蔬', '种植日期', '种植人', '备注信息'],
            protos: ['serial', 'plantation_name', 'plant_name', 'date', 'operate_name', 'memo'],
            widths: [50, 50, 50, 50, 50, 50],
            hiddeEdit: false,
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
                tab: '新建批次施药信息',
                type: 'table',
                labUrl: 'cultivate',
                components: [{
                    name: 'name',
                    assocNum: 0,
                    type: 'table',
                    theads: ['种植批次号', '种植果蔬', '种植日期'],
                    protos: ['serial', 'plant_name', 'date'],
                    valueId: 'cultivate_ids',
                    errormsg: '请选择种植批次号',
                    tableVal: []
                }]
            }]
        }]
    },
    // 种植田间信息
    farmingBatch: {
        key: 'farmingBatch',
        tab: '种植田间批次管理',
        theads: ['田间批次号', '操作内容', '操作方法', '操作日期', '操作人', '专家', '天气'],
        protos: ['serial', 'content', 'method', 'date', 'operate_name', 'expert_name', 'weather'],
        url: 'farming',
        tabList: [{
            url: 'cultivate-farming',
            tab: '种植批次农事信息',
            searchPlaceholder: '请输入种植批次进行搜索',
            headList: ['种植批次号', '种植区', '种植果蔬', '种植日期', '种植人', '备注信息'],
            protos: ['serial', 'plantation_name', 'plant_name', 'date', 'operate_name', 'memo'],
            widths: [50, 50, 50, 50, 50, 50],
            hiddeEdit: false,
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
                tab: '新建批次农事信息',
                type: 'table',
                assocNum: 0,
                labUrl: 'cultivate',
                components: [{
                    name: 'name',
                    type: 'table',
                    theads: ['种植批次号', '种植果蔬', '种植日期'],
                    protos: ['serial', 'plant_name', 'date'],
                    valueId: 'cultivate_ids',
                    errormsg: '请选择种植批次号',
                    tableVal: []
                }]
            }]
        }]
    },
    // 生产计划批次信息
    plantProduct: {
        key: 'planProduct',
        tab: '生产批次管理',
        theads: ['操作人员', '生产批次号', '操作类型', '日期', '内容', '备注'],
        protos: ['operate_name', 'serial', 'type', 'date', 'content', 'memo'],
        url: 'plan',
        tabList: [{
            tab: '采收批次信息',
            searchPlaceholder: '请输入rfid进行搜索',
            leftOperateList: [{
                components: [
                    {
                        type: 'select',
                        components: selectSection,
                        options: [
                            {
                            }
                        ]
                    },
                    {
                        type: 'date',
                        component: datePick
                    }
                ]
            }],
            rightOperateComponent: [{component: output}, {component: newbuildBtn}],
            headList: ['计划日期', '操作类型', '计划内容', '安排人员', '操作用户', '状态', '备注信息'],
            protos: ['ear', 'name', 'date', 'memo', 'date', 'memo', 'date'],
            widths: [50, 50, 50, 50, 50, 50, 50],
            newComponent: [{label: '', type: '', component: '', rule: ''}],
            tableOperateList: [{operateName: '编辑'}, {operateName: '删除'}],
            bottomOperateList: [{operateName: '删除'}, {operateName: '导出表格'}]
        }]
    },
    // 生产加工批次信息
    plantPackBatch: {
        key: 'plantPackBatch',
        tab: '果蔬加工批次管理',
        theads: ['加工批次号', '加工日期', '数量', '产地', '加工人', '备注'],
        protos: ['serial', 'date', 'amount', 'origin', 'operate_name', 'memo'],
        batch: 'plantPackProduct',
        url: 'pack',
        tabList: [{
            url: 'pack-product',
            tab: '加工批次产品信息',
            searchPlaceholder: '请输入产品名称进行搜索',
            headList: ['产品名称', '执行标准', '商品型号', '包装规格', '保质期', '存储方法'],
            protos: ['name', 'enforce_standard', 'marque', 'specification', 'expiration_date', 'storage_means'],
            widths: [50, 50, 50, 50, 50, 50],
            hiddeEdit: false,
            typeComponent: [{
                component: newbuildBtn
            }],
            listComponent: [],
            newComponent: [{
                tab: '新建加工产品信息',
                type: 'table',
                assocNum: 0,
                labUrl: 'product',
                components: [{
                    name: 'name',
                    type: 'table',
                    theads: ['产品名称', '商品型号', '包装规格'],
                    protos: ['name', 'marque', 'specification'],
                    valueId: 'product_ids',
                    errormsg: '请选择产品',
                    tableVal: []
                }]
            }]
        }]
    },
    // 生产加工产品信息
    plantPackProduct: {
        key: 'plantPackProduct',
        tab: '生产加工产品管理',
        theads: ['产品名称', '执行标准', '商品型号', '包装规格', '保质期', '存储方法'],
        protos: ['name', 'enforce_standard', 'marque', 'specification', 'expiration_date', 'storage_means'],
        url: '{x}/pack-product',
        tabList: [{
            url: 'pack-product-harvest',
            tab: '加工产品溯源码信息',
            searchPlaceholder: '请输入溯源码进行搜索',
            headList: ['产品溯源码', '生产日期', '溯源次数', '备注'],
            protos: ['code', 'date', 'time', 'memo'],
            widths: [50, 50, 50, 50],
            hiddeEdit: true,
            typeComponent: [{
                component: newbuildBtn
            }],
            moreComponent: [{
                value: '打印'
            }],
            listComponent: [{
                components: [{
                    type: 'date',
                    component: datePick
                }]
            }],
            newComponent: [{
                tab: '新建溯源码信息',
                selectUrl2: [['harvests', 'id', 'serial', true]],
                selectInit2: [{value: '', label: '采收批次号选择'}],
                popNumber2: [1],
                hiddenValue: {type: 'plant'},
                components: [{
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '生产日期',
                    placeholder: '',
                    rule: [{required: true, message: '请输入生产日期'}, {validator: validate2.reDate, message: '请输入生产日期'}]
                },
                {
                    name: 'harvest_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '采收批次',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', message: '请选择采收批次', type: 'number'},
                    options: []
                },
                {
                    name: 'amount',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '溯源码数量',
                    placeholder: '请输入溯源码数量（整数）',
                    rule: [{required: true, message: '请输入溯源码数量', trigger: 'blur'}, {validator: validate2.reInteger}]
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
                tab: '编辑溯源码信息',
                components: [{
                    name: 'code',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '溯源码',
                    placeholder: '',
                    disabled: true,
                    rule: {required: true}
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '生产日期',
                    placeholder: '',
                    rule: [{required: true, message: '请输入生产日期'}, {validator: validate2.reDate, message: '请输入生产日期'}]
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
    // 加工检测详情信息
    detectPackBatch: {
        key: 'detectPackBatch',
        tab: '加工检测管理',
        theads: ['检测批次号', '检测名称', '检测内容', '检测日期', '检测结果', '检测机构', '负责人', '处理方法'],
        protos: ['serial', 'name', 'content', 'date', 'result', 'organization', 'operate_name', 'method'],
        batch: 'plantPackProduct',
        url: 'detect_pk',
        changeDataArr: [{result: {'不合格': 0, '合格': 1}}],
        tabList: [{
            url: 'pack-detect-pk',
            tab: '加工批次产品信息',
            searchPlaceholder: '请输入加工批次号进行搜索',
            headList: ['加工批次号', '加工日期', '数量', '产地', '操作人', '备注'],
            protos: ['serial', 'date', 'amount', 'origin', 'operate_name', 'memo'],
            widths: [50, 50, 50, 50, 50, 50],
            hiddeEdit: false,
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
                tab: '新建加工批次检测信息',
                type: 'table',
                labUrl: 'pack',
                assocNum: 0,
                paramsIndex: 'plant',
                components: [{
                    name: 'name',
                    type: 'table',
                    theads: ['加工批次号', '加工日期', '产地'],
                    protos: ['serial', 'date', 'origin'],
                    valueId: 'pack_ids',
                    errormsg: '请选择加工批次号',
                    tableVal: []
                }]
            }]
        }]
    },
    // 物流批次详情
    logisticBatch: {
        key: 'logisticBatch',
        tab: '物流批次管理',
        theads: ['物流批次号', '物流日期', '货物名称', '数量', '运输方式', '操作人员', '物流状态', '备注', '出库订单批次号'],
        protos: ['serial', 'datetime', 'name', 'amount', 'transportable_type', 'operate_name', 'state', 'memo', 'serial2'],
        batch: 'plantPackProduct',
        url: 'delivery',
        tabList: [{
            url: '',
            tab: '加工批次产品信息',
            searchPlaceholder: '请输入加工批次号进行搜索',
            headList: ['加工批次号', '加工日期', '数量', '产地', '操作人', '备注'],
            protos: ['serial', 'date', 'amount', 'origin', 'operate_name', 'memo'],
            widths: [50, 50, 50, 50, 50, 50],
            hiddeEdit: false,
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
                tab: '新建加工批次检测信息',
                type: 'table',
                labUrl: 'pack',
                paramsIndex: 'plant',
                components: [{
                    name: 'name',
                    type: 'table',
                    theads: ['加工批次号', '加工日期', '产地'],
                    protos: ['serial', 'date', 'origin'],
                    valueId: 'pack_ids',
                    errormsg: '请选择加工批次号',
                    tableVal: []
                }]
            }]
        }]
    },
    // 销售入库详情
    saleInput: {
        key: 'plantProduct',
        tab: '销售入库批次管理',
        theads: ['入库批次号', '入库日期', '供货商', '商品名称', '数量', '入库人', '录入人', '备注信息'],
        protos: ['ear', 'name', 'date', 'memo', 'date', 'amount', 'date', 'memo'],
        tabList: [{
            tab: '采收批次信息',
            searchPlaceholder: '请输入rfid进行搜索',
            leftOperateList: [{
                components: [
                    {
                        type: 'select',
                        components: selectSection,
                        options: [
                            {
                            }
                        ]
                    },
                    {
                        type: 'date',
                        component: datePick
                    }
                ]
            }],
            rightOperateComponent: [{component: output}, {component: newbuildBtn}],
            headList: ['检测方式', '检测日期', '检测机构', '检测项目名称', '检测人', '检测结果', '证书编号', '有效期', '备注信息'],
            protos: ['ear', 'name', 'date', 'memo'],
            widths: [50, 50, 50],
            newComponent: [{label: '', type: '', component: '', rule: ''}],
            tableOperateList: [{operateName: '编辑'}, {operateName: '删除'}],
            bottomOperateList: [{operateName: '删除'}, {operateName: '导出表格'}]
        }]
    },
    // 销售订单详情
    saleOrder: {
        key: 'plantProduct',
        tab: '销售订单详情管理',
        theads: ['订单号', '订单日期', '物流批次号', '客户名称', '金额', '数量', '销售员', '录入人', '备注'],
        protos: [],
        tabList: [{
            tab: '采收批次信息',
            searchPlaceholder: '请输入rfid进行搜索',
            leftOperateList: [{
                components: [
                    {
                        type: 'select',
                        components: selectSection,
                        options: [
                            {
                            }
                        ]
                    },
                    {
                        type: 'date',
                        component: datePick
                    }
                ]
            }],
            rightOperateComponent: [{component: output}, {component: newbuildBtn}],
            headList: ['检测方式', '检测日期', '检测机构', '检测项目名称', '检测人', '检测结果', '证书编号', '有效期', '备注信息'],
            protos: ['ear', 'name', 'date', 'memo'],
            widths: [50, 50, 50],
            newComponent: [{label: '', type: '', component: '', rule: ''}],
            tableOperateList: [{operateName: '编辑'}, {operateName: '删除'}],
            bottomOperateList: [{operateName: '删除'}, {operateName: '导出表格'}]
        }]
    },
    // 入驻单位详情
    companyUser: {
        key: 'companyUser',
        url: 'company',
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
            leftOperateList: [{
                components: [
                    {
                        type: 'select',
                        components: selectSection,
                        options: [
                            {
                            }
                        ]
                    },
                    {
                        type: 'date',
                        component: datePick
                    }
                ]
            }],
            rightOperateComponent: [{component: output}, {component: newbuildBtn}],
            changeDataArr: [{gender: {0: '男', 1: '女'}}],
            headList: ['用户名', '姓名', '工号', '邮箱', '性别', '电话号码', '出生日期', '所属部门', '入职日期', '头像', '备注'],
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
                    rule: [{required: true, trigger: 'blur'}, {validator: validate2.reCheck}]
                },
                {
                    name: 'email',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '邮箱',
                    placeholder: '请输入邮箱',
                    rule: [{required: true, trigger: 'blur'}, {validator: validate2.reCheck}]
                },
                {
                    name: 'phone',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '手机号码',
                    placeholder: '请输入手机号码',
                    rule: [{required: true, trigger: 'blur'}, {validator: validate2.reCheck}, {validator: validate2.phone}]
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
                    rule: [{required: true, trigger: 'blur'}, {validator: validate2.reCheck}]
                },
                {
                    name: 'email',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '邮箱',
                    placeholder: '请输入邮箱',
                    rule: [{required: true, trigger: 'blur'}, {validator: validate2.reCheck}]
                },
                {
                    name: 'phone',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '手机号码',
                    placeholder: '请输入手机号码',
                    rule: [{required: true, trigger: 'blur'}, {validator: validate2.reCheck}, {validator: validate2.phone}]
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
            }]
        }]
    }
}
