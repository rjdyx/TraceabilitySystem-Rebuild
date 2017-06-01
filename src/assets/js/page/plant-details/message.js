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
        roleName: ['beast/breed', 0], // 接口权限参数 参数1为权限name 参数2为是否区分运营者 （默认0）
        tab: '养殖批次管理',
        changeDataArr: [{state: {'未完成': 0, '已完成': 1}}],
        theads: ['批次号', '养殖区', '圈舍', '畜禽', '开始日期', '数量', '养殖方式', '养殖人', '操作人', '录入人', '状态'],
        protos: ['serial', 'farm_name', 'area_name', 'beast_name', 'start_date', 'amount', 'way', 'operate', 'operate_name', 'user_name', 'state'],
        url: 'breed',
        tabList: [{
            url: 'rfid',
            tab: '畜禽RFID',
            searchPlaceholder: '请输入rfid进行搜索',
            typeComponent: [{component: output}, {component: importBtn}, {component: newbuildBtn}],
            headList: ['RFID', '畜禽名称', '养殖日期', '备注信息'],
            hiddeEdit: true,
            protos: ['rfid', 'beast_name', 'created_at', 'memo'],
            widths: [50, 50, 50, 50],
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
            headList: ['标题', '描述', '上传日期', '生长图片', '备注信息'],
            protos: ['name', 'desc', 'date', 'thumb', 'memo'],
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
                    label: '图片',
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
                    label: '图片',
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
        },
        {
            url: 'breed_area',
            tab: '圈舍记录',
            searchPlaceholder: '请输入圈舍名称进行搜索',
            headList: ['圈舍名称', '开始日期', '结束日期', '操作人', '录入人'],
            protos: ['name', 'date', 'end_date', 'operate_name', 'user_name'],
            widths: [50, 50, 50, 50, 50],
            // hiddeEdit: false,
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
                tab: '新建圈舍转移信息',
                selectUrl2: [['areas', 'id', 'name', true], ['operates', 'id', 'name', true]],
                selectInit2: [{value: '', label: '选择要转移的圈舍'}, {value: '', label: '选择操作人'}],
                popNumber2: [0, 1],
                selectWhere2: ['id', ''],
                components: [{
                    name: 'area_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '圈舍名称',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择要转移的圈舍'},
                    options: []
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '操作人',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择操作人'},
                    options: []
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '转移日期',
                    placeholder: '',
                    rule: [{required: true, trigger: 'blur', message: '请输入上传日期'}, {validator: validate2.reDate, message: '请输入上传日期'}]
                }]
            }],
            editComponent: [{
                tab: '编辑圈舍转移信息',
                selectUrl2: [['areas', 'id', 'name', true], ['operates', 'id', 'name', true]],
                selectInit2: [{value: '', label: '选择要转移的圈舍'}, {value: '', label: '选择操作人'}],
                popNumber2: [0, 1],
                selectWhere2: ['id', ''],
                components: [{
                    name: 'area_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '圈舍名称',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择要转移的圈舍'},
                    options: []
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '操作人',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择操作人'},
                    options: []
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '转移日期',
                    placeholder: '',
                    rule: [{required: true, trigger: 'blur', message: '请输入上传日期'}, {validator: validate2.reDate, message: '请输入上传日期'}]
                }]
            }]
        }
        ]
    },
    // 饲料批次详情
    feedBatch: {
        key: 'feedBatch',
        tab: '饲料批次管理',
        roleName: ['beast/fodderuse', 0],
        theads: ['饲料批次号', '饲料日期', '饲料名称', '喂养方式', '操作人员', '喂养量', '备注信息'],
        protos: ['serial', 'date', 'fodder_name', 'way', 'operate_name', 'amount_unit', 'meno'],
        url: 'fodderuse',
        tabList: [{
            url: 'breed-fodderuse',
            tab: '养殖批次信息',
            searchPlaceholder: '请输入批次号进行搜索',
            typeComponent: [{component: output}, {component: newbuildBtn}],
            headList: ['养殖批次号', '圈舍', '畜禽名称', '养殖日期'],
            protos: ['serial', 'area_name', 'beast_name', 'date'],
            widths: [50, 50, 50, 50],
            hiddeEdit: false,
            listComponent: [{
                components: [{
                    type: 'date',
                    component: datePick
                }]
            }],
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
        roleName: ['beast/detect', 0],
        theads: ['检测批次号', '检测日期', '检测项目名称', '专家', '操作人员', '检测内容', '检测结果', '审批人', '备注'],
        protos: ['serial', 'date', 'name', 'expert_name', 'operate_name', 'content', 'result', 'check', 'memo'],
        changeDataArr: [{result: {'不合格': 0, '合格': 1}}],
        url: 'detect',
        tabList: [{
            url: 'breed-detect',
            tab: '养殖批次信息',
            searchPlaceholder: '请输入批次号进行搜索',
            typeComponent: [{component: output}, {component: newbuildBtn}],
            headList: ['养殖批次号', '圈舍', '畜禽名称', '养殖日期'],
            protos: ['serial', 'area_name', 'beast_name', 'date'],
            widths: [50, 50, 50, 50],
            hiddeEdit: false,
            listComponent: [{
                components: [{
                    type: 'date',
                    component: datePick
                }]
            }],
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
        roleName: ['beast/disease', 0],
        theads: ['病疫批次号', '兽药名称', '用药日期', '病情描述', '专家', '平均用药量', '治疗方式', '备注'],
        protos: ['serial', 'drug_name', 'date', 'description', 'expert_name', 'amount_unit', 'way', 'memo'],
        url: 'disease',
        tabList: [{
            url: 'disease-rfid',
            tab: '养殖批次信息',
            searchPlaceholder: '请输入rfid进行搜索',
            typeComponent: [{component: output}, {component: newbuildBtn}],
            headList: ['养殖批次号', '圈舍', '病疫Rfid', '畜禽名称', '养殖日期'],
            protos: ['serial', 'area_name', 'rfid', 'beast_name', 'date'],
            widths: [50, 50, 50, 50, 50],
            hiddeEdit: false,
            listComponent: [{
                components: [{
                    type: 'date',
                    component: datePick
                }]
            }],
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
                    assocNum: 1,
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择养殖批次号'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'table',
                    tableUrl: ['rfid', true],
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
        roleName: ['beast/detection', 0],
        theads: ['检验批次号', '检测日期', '检测项目名称', '专家', '操作人员', '检测内容', '检测结果', '审批人', '备注'],
        protos: ['serial', 'date', 'name', 'expert_name', 'operate_name', 'content', 'result', 'check', 'memo'],
        changeDataArr: [{result: {'不合格': 0, '合格': 1}}],
        url: 'detection',
        tabList: [{
            url: 'detection-rfid',
            tab: '养殖批次信息',
            searchPlaceholder: '请输入rfid进行搜索',
            typeComponent: [{component: output}, {component: newbuildBtn}],
            headList: ['养殖批次号', '圈舍', 'Rfid', '畜禽名称', '养殖日期'],
            protos: ['serial', 'area_name', 'rfid', 'beast_name', 'date'],
            widths: [50, 50, 50, 50, 50],
            hiddeEdit: false,
            listComponent: [{
                components: [{
                    type: 'date',
                    component: datePick
                }]
            }],
            newComponent: [{
                tab: '新建批次检疫信息',
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
                    assocNum: 1,
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择养殖批次号'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'table',
                    tableUrl: ['rfid', true],
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
        tab: '圈舍维护批次管理',
        roleName: ['beast/clean', 0],
        theads: ['圈舍批次号', '操作类型', '操作方式', '操作内容', '专家', '操作人', '操作日期', '备注信息'],
        protos: ['serial', 'name', 'way', 'content', 'expert_name', 'operate_name', 'date', 'memo'],
        url: 'clean',
        tabList: [{
            url: 'clean-area',
            tab: '养殖批次信息',
            searchPlaceholder: '请输入圈舍名称搜索',
            typeComponent: [{component: output}, {component: newbuildBtn}],
            headList: ['所属养殖区', '圈舍', '圈舍面积'],
            protos: ['farm_name', 'name', 'area_unit'],
            widths: [50, 50, 50],
            hiddeEdit: false,
            listComponent: [],
            newComponent: [{
                tab: '新建批次圈舍维护信息',
                type: 'table',
                labUrl: 'area',
                assocNum: 0,
                components: [{
                    name: 'name',
                    type: 'table',
                    theads: ['所属养殖区', '圈舍名称', '圈舍面积'],
                    protos: ['farm_name', 'name', 'area_unit'],
                    valueId: 'area_ids',
                    errormsg: '请选择圈舍',
                    tableVal: []
                }]
            }]
        }]
    },
    // 无害化批次详情
    innocuityBatch: {
        key: 'innocuityBatch',
        tab: '无害化批次管理',
        roleName: ['beast/dispose', 0],
        theads: ['无害化批次号', '操作日期', '操作内容', '实行原因', '指导专家', '备注信息'],
        protos: ['serial', 'date', 'content', 'why', 'expert_name', 'memo'],
        url: 'dispose',
        tabList: [{
            url: 'dispose-rfid',
            tab: '养殖批次信息',
            searchPlaceholder: '请输入rfid进行搜索',
            typeComponent: [{component: newbuildBtn}, {component: output}],
            headList: ['养殖批次', '圈舍', 'Rfid', '养殖畜禽', '养殖日期'],
            protos: ['serial', 'area_name', 'rfid', 'beast_name', 'date'],
            widths: [50, 50, 50, 50, 50],
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
                    assocNum: 1,
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
                    tableUrl: ['rfid', true],
                    theads: ['养殖批次', 'Rfid', '养殖畜禽', '养殖日期'],
                    protos: ['serial', 'rfid', 'beast_name', 'date'],
                    valueId: 'rfid_ids',
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
        roleName: ['beast/come', 0],
        changeDataArr: [{state: {'未完成': 0, '已完成': 1}}],
        theads: ['出栏批次号', '出栏日期', '出栏数量', '操作人员', '状态', '备注'],
        protos: ['serial', 'date', 'amount', 'operate_name', 'state', 'memo'],
        url: 'come',
        tabList: [{
            url: 'come-rfid',
            tab: '畜禽RFID',
            searchPlaceholder: '请输入rfid进行搜索',
            typeComponent: [{component: newbuildBtn}, {component: output}],
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
                    assocNum: 1,
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择养殖批次号'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'table',
                    tableUrl: ['rfid', true],
                    theads: ['养殖批次', 'Rfid', '养殖畜禽', '养殖日期'],
                    protos: ['serial', 'rfid', 'beast_name', 'date'],
                    valueId: 'rfid_ids',
                    errormsg: '请选择rfid',
                    tableVal: []
                }]
            }]
        }]
    },
    // 养殖计划批次详情1
    planBreedBatch: {
        key: 'planBatch',
        tab: '养殖计划管理',
        roleName: ['beast/plan', 0],
        theads: ['养殖计划批次号', '计划日期', '操作类型', '安排人员', '计划内容', '备注'],
        protos: ['serial', 'date', 'type', 'operate_name', 'content', 'memo'],
        changeDataArr: [{type: {'饲养': 'fodderuse', '检测': 'detects'}}],
        url: 'plan',
        tabList: [{
            url: 'breed-plan',
            tab: '养殖批次信息',
            searchPlaceholder: '请输入批次号进行搜索',
            typeComponent: [{component: newbuildBtn}, {component: output}],
            headList: ['养殖批次号', '圈舍', '畜禽名称', '养殖日期'],
            protos: ['serial', 'area_name', 'beast_name', 'date'],
            widths: [50, 50, 50, 50],
            hiddeEdit: false,
            listComponent: [{
                components: [{
                    type: 'date',
                    component: datePick
                }]
            }],
            newComponent: [{
                tab: '新建养殖计划批次信息',
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
    // 养殖计划批次详情2
    planRfidBatch: {
        key: 'planBatch',
        tab: '养殖计划管理',
        roleName: ['beast/plan', 0],
        theads: ['养殖计划批次号', '计划日期', '操作类型', '安排人员', '计划内容', '备注'],
        protos: ['serial', 'date', 'type', 'operate_name', 'content', 'memo'],
        changeDataArr: [{type: {'病疫': 'disease', '检疫': 'detection', '无害化': 'dispose', '出栏': 'come'}}],
        url: 'plan',
        tabList: [{
            url: 'plan-rfid',
            tab: '畜禽RFID',
            searchPlaceholder: '请输入rfid进行搜索',
            typeComponent: [{component: newbuildBtn}, {component: output}],
            headList: ['养殖批次', '圈舍', 'Rfid', '养殖畜禽', '养殖日期'],
            protos: ['serial', 'area_name', 'rfid', 'beast_name', 'date'],
            widths: [50, 50, 50, 50, 50],
            hiddeEdit: false,
            listComponent: [{
                components: [{
                    type: 'date',
                    component: datePick
                }]
            }],
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
                    assocNum: 1,
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择养殖批次号'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'table',
                    tableUrl: ['rfid', true],
                    theads: ['养殖批次', 'Rfid', '养殖畜禽', '养殖日期'],
                    protos: ['serial', 'rfid', 'beast_name', 'date'],
                    valueId: 'rfid_ids',
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
        roleName: ['packb/pack', 0],
        theads: ['加工批次号', '加工日期', '数量', '单位', '加工人', '备注'],
        protos: ['serial', 'date', 'amount', 'unit', 'operate_name', 'memo'],
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
            },
            {
                component: output
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
        roleName: ['packb/pack', 0],
        theads: ['产品名称', '执行标准', '商品型号', '包装规格', '保质期', '存储方法'],
        protos: ['name', 'enforce_standard', 'marque', 'specification', 'expiration_date', 'storage_means'],
        url: '{x}/pack-product',
        tabList: [{
            url: 'pack-product-rfid',
            tab: '加工产品溯源码信息',
            searchPlaceholder: '请输入溯源码进行搜索',
            headList: ['产品溯源码', '生产日期', 'RFID', '溯源次数', '备注'],
            protos: ['code', 'date', 'rfid', 'time', 'memo'],
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
            newComponent: [
                {
                    tab: '新建溯源码信息',
                    hiddenValue: {type: 'beast'},
                    selectUrl2: [['comes', 'id', 'serial', true], ['storages', 'id', 'serial', true], ['storages', 'id', 'serial', true]],
                    selectInit2: [{value: '', label: '出栏批次号选择'}, {value: '', label: '请选择入库批次(平台)'}, {value: '', label: '请选择入库批次(非平台)'}],
                    selectWhereArr2: [[], [{n: 'type', v: 0}, {n: 'category', v: 'plant'}], [{n: 'type', v: 1}, {n: 'category', v: 'plant'}]],
                    popNumber2: [2, 3, 4],
                    labUrl: 'come-rfid',
                    type: 'assoc',
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
                        name: 'category',
                        type: 'select',
                        component: null,
                        isNull: false,
                        label: '加工商品来源',
                        placeholder: '',
                        selectNumber: {come: [2, 7], st: [3, 8], sf: [4]},
                        rule: {required: true, trigger: 'blur', message: '请选择商品来源'},
                        options: [{
                            label: '请选择商品来源',
                            value: ''
                        },
                        {
                            label: '养殖出栏',
                            value: 'come'
                        },
                        {
                            label: '入库(平台)',
                            value: 'st'
                        },
                        {
                            label: '入库(非平台)',
                            value: 'sf'
                        }]
                    },
                    {
                        name: 'come_id',
                        type: 'select',
                        component: null,
                        isNull: false,
                        label: '出栏批次',
                        hiddenSelect: true,
                        assocNum: 7,
                        placeholder: '',
                        rule: {required: true, trigger: 'blur', message: '请选择出栏批次', type: 'number'},
                        options: []
                    },
                    {
                        name: 'st_id',
                        type: 'select',
                        component: null,
                        isNull: false,
                        hiddenSelect: true,
                        changeTable: true,
                        label: '入库批次',
                        assocNum: 8,
                        placeholder: '',
                        rule: {required: true, trigger: 'blur', type: 'number'},
                        options: []
                    },
                    {
                        name: 'sf_id',
                        type: 'select',
                        component: null,
                        isNull: false,
                        hiddenSelect: true,
                        label: '入库批次',
                        placeholder: '',
                        rule: {required: true, trigger: 'blur', type: 'number'},
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
                        name: 'rfid_ids',
                        type: 'table',
                        tableUrl: ['come-rfid', true],
                        hiddenSelect: true,
                        theads: ['出栏批次', 'Rfid', '养殖畜禽', '养殖日期'],
                        protos: ['come_serial', 'rfid', 'beast_name', 'date'],
                        valueId: 'rfid_ids',
                        errormsg: '请选择rfid',
                        tableVal: []
                    },
                    {
                        name: 'code_ids',
                        type: 'table',
                        tableUrl: ['storage_code', false],
                        hiddenSelect: true,
                        theads: ['溯源码', '生产日期', '溯源次数'],
                        protos: ['code', 'date', 'time'],
                        valueId: 'code_ids',
                        errormsg: '请选择溯源码',
                        tableVal: []
                    }]
                }
            ],
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
        roleName: ['packb/detect', 0],
        theads: ['检测批次号', '检测名称', '检测内容', '检测日期', '检测结果', '检测机构', '负责人', '处理方法'],
        protos: ['serial', 'name', 'content', 'date', 'result', 'organization', 'operate_name', 'method'],
        changeDataArr: [{result: {'不合格': 0, '合格': 1}}],
        url: 'detect_pk',
        tabList: [{
            url: 'pack-detect-pk',
            tab: '加工批次信息',
            searchPlaceholder: '请输入加工批次号进行搜索',
            headList: ['加工批次号', '加工日期', '数量', '产地', '操作人', '备注'],
            protos: ['serial', 'date', 'amount', 'origin', 'operate_name', 'memo'],
            widths: [50, 50, 50, 50, 50, 50],
            hiddeEdit: false,
            typeComponent: [{
                component: newbuildBtn
            },
            {
                component: output
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
        roleName: ['plant/cultivate', 0],
        theads: ['种植批次号', '所属种植区', '种植人', '种植日期', '种植地址', '种植果蔬名称', '当前批次面积', '状态'],
        protos: ['serial', 'plantation_name', 'operate_name', 'date', 'address', 'plant_name', 'area_unit', 'state'],
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
        roleName: ['plant/farming', 0],
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
        roleName: ['plant/farming', 0],
        theads: ['施药批次号', '农药', '施药人', '施药日期', '施药量（Kg）', '专家', '施药方法', '备注'],
        protos: ['serial', 'medicament_name', 'operate_name', 'date', 'amount_unit', 'expert_name', 'way', 'memo'],
        url: 'spray',
        tabList: [{
            url: 'cultivate-spray',
            tab: '种植批次施药信息',
            searchPlaceholder: '请输入种植批次进行搜索',
            headList: ['种植批次号', '种植区', '种植果蔬', '种植日期', '种植人', '备注信息'],
            protos: ['serial', 'plantation_name', 'plant_name', 'date', 'operate_name', 'memo'],
            widths: [50, 50, 50, 50, 50, 50],
            hiddeEdit: false,
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
        roleName: ['plant/farming', 0],
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
            newComponent: [{
                tab: '新建批次施药信息',
                type: 'table',
                assocNum: 0,
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
        roleName: ['plant/farming', 0],
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
    // 计划批次信息
    planSerial: {
        key: 'planSerial',
        tab: '计划批次管理',
        roleName: ['plant/plan', 0],
        theads: ['计划批次号', '计划日期', '操作类型', '安排人员', '计划内容', '备注'],
        protos: ['serial', 'date', 'type', 'operate_name', 'content', 'memo'],
        url: 'plan',
        tabList: [{
            url: 'cultivate-plan',
            tab: '种植批次计划信息',
            searchPlaceholder: '请输入种植批次进行搜索',
            headList: ['种植批次号', '种植区', '种植果蔬', '种植日期', '种植人', '备注信息'],
            protos: ['serial', 'plantation_name', 'plant_name', 'date', 'operate_name', 'memo'],
            widths: [50, 50, 50, 50, 50, 50],
            hiddeEdit: false,
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
            newComponent: [{
                tab: '新建批次计划信息',
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
    // 生产加工批次信息
    plantPackBatch: {
        key: 'plantPackBatch',
        tab: '果蔬加工批次管理',
        roleName: ['packp/pack', 0],
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
            },
            {
                component: output
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
        roleName: ['packp/pack', 0],
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
                selectUrl2: [['harvests', 'id', 'serial', true], ['storages', 'id', 'serial', true], ['storages', 'id', 'serial', true]],
                selectWhereArr2: [[], [{n: 'type', v: 0}, {n: 'category', v: 'plant'}], [{n: 'type', v: 1}, {n: 'category', v: 'plant'}]],
                selectInit2: [{value: '', label: '采收批次号选择'}, {value: '', label: '请选择入库批次(平台)'}, {value: '', label: '请选择入库批次(非平台)'}],
                popNumber2: [2, 3, 4],
                hiddenValue: {type: 'plant'},
                labUrl: false,
                labNewUrl: 'storage_code',
                assocNum: 7,
                type: 'assoc',
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
                    name: 'category',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '加工商品来源',
                    placeholder: '',
                    selectNumber: {harvest: [2], st: [3, 7], sf: [4]},
                    rule: {required: true, trigger: 'blur', message: '请选择商品来源'},
                    options: [{
                        label: '请选择商品来源',
                        value: ''
                    },
                    {
                        label: '种植采收',
                        value: 'harvest'
                    },
                    {
                        label: '入库(平台)',
                        value: 'st'
                    },
                    {
                        label: '入库(非平台)',
                        value: 'sf'
                    }]
                },
                {
                    name: 'harvest_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '采收批次',
                    hiddenSelect: true,
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', message: '请选择采收批次', type: 'number'},
                    options: []
                },
                {
                    name: 'st_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    hiddenSelect: true,
                    changeTable: true,
                    label: '入库批次',
                    placeholder: '',
                    assocNum: 7,
                    rule: {required: true, trigger: 'blur', type: 'number'},
                    options: []
                },
                {
                    name: 'sf_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    hiddenSelect: true,
                    label: '入库批次',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number'},
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
                    name: 'code_ids',
                    type: 'table',
                    hiddenSelect: true,
                    tableUrl: ['storage-code', true],
                    theads: ['溯源码', '生产日期', '溯源次数'],
                    protos: ['code', 'date', 'time'],
                    valueId: 'code_ids',
                    errormsg: '请选择入库溯源码',
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
        roleName: ['packp/detect', 0],
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
