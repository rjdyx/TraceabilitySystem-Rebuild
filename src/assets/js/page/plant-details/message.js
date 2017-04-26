import importBtn from '../../components/public/import-btn.vue'
import newbuildBtn from '../../components/public/newbuild-btn.vue'
import output from '../../components/public/output.vue'
import selectSection from '../../components/public/select-section.vue'
import datePick from '../../components/public/datePick.vue'
import categoryBtn from '../../components/public/categoryBtn.vue'
import addRfidBtn from '../../components/public/addRfidBtn.vue'
import newMessage from './newMessage.js'
import inputFile from '../../components/public/inputFile.vue'
import inputDate from '../../components/public/inputDate.vue'
import validate2 from '../../utils/validate2.js'
export default {
    // 养殖批次管理  详情页信息
    breedBatch: {
        key: 'breedBatch',
        tab: '养殖批次管理',
        theads: ['批次号', '养殖区', '圈舍', '畜禽', '开始日期', '数量', '养殖方式', '养殖人', '操作人', '录入人', '备注'],
        protos: ['serial', 'farm_name', 'area_name', 'beast_name', 'start_date', 'amount', 'way', 'operate', 'operate_name', 'user_name', 'meno'],
        // url: 'breed/4',
        url: 'breed',
        tabList: [{
            // url: '4/rfid',
            url: 'rfid',
            tab: '畜禽RFID',
            searchPlaceholder: '请输入rfid进行搜索',
            listComponent: [],
            typeComponent: [{component: importBtn}, {component: output}, {component: newbuildBtn}],
            headList: ['RFID', '畜禽名称', '养殖日期', '备注信息'],
            protos: ['rfid', 'beast_name', 'strt_date', 'memo'],
            widths: [50, 50, 50],
            bottomOperateList: [{operateName: '删除'}, {operateName: '导出表格'}],
            newComponent: newMessage['rfid']
        },
        {
            // url: '4/course',
            url: 'course',
            tab: '生长过程信息',
            searchPlaceholder: '请输入标题进行搜索',
            listComponent: [],
            typeComponent: [{component: newbuildBtn}],
            headList: ['生长图片', '标题', '图片描述', '上传日期', '备注信息'],
            protos: ['img', 'name', 'miaoshu', 'date', 'memo'],
            widths: [50, 50, 50, 50, 50],
            bottomOperateList: [{operateName: '删除'}],
            newComponent: newMessage['course']
        }]
    },
    // 饲料批次
    feedBatch: {
        key: 'feedBatch',
        tab: '饲料批次管理',
        theads: ['饲料批次号', '饲料日期', '饲料名称', '喂养方式', '专家', '操作人员', '喂养量', '备注信息'],
        protos: ['serial', 'fodderuse_date', 'fodder_name', 'way', 'expert_name', 'operate_name', 'amount', 'meno'],
        url: 'fodderuse',
        tabList: [{
            url: 'breed-fodderuse',
            tab: '养殖批次信息',
            searchPlaceholder: '请输入批次号进行搜索',
            listComponent: [],
            typeComponent: [{component: output}, {component: newbuildBtn}],
            headList: ['所属养殖区', '养殖批次号', '畜禽名称', '养殖日期'],
            protos: ['area', 'serial', 'name', 'date'],
            widths: [50, 50, 50],
            bottomOperateList: [{operateName: '删除'}, {operateName: '导出表格'}]
        }]
    },
    // 病疫批次
    plagueBatch: {
        key: 'plagueBatch',
        tab: '病疫批次管理',
        theads: ['病疫批次号', '兽药名称', '用药日期', '病情描述', '专家', '平均用药量', '治疗方式', '备注'],
        protos: ['serial', 'drug_name', 'date', 'description', 'expert_name', 'amount', 'way', 'meno'],
        url: 'disease',
        tabList: [{
            url: 'disease-rfid',
            tab: '养殖批次信息',
            searchPlaceholder: '请输入批次号进行搜索',
            listComponent: [],
            typeComponent: [{component: output}, {component: newbuildBtn}],
            headList: ['所属养殖区', '养殖批次号', '畜禽名称', '养殖日期'],
            protos: ['area', 'serial', 'name', 'date'],
            widths: [50, 50, 50],
            bottomOperateList: [{operateName: '删除'}, {operateName: '导出表格'}]
        }]
    },
    // 检疫批次
    quarantineBatch: {
        key: 'quarantineBatch',
        tab: '检疫批次管理',
        theads: ['检验批次号', '检测日期', '检测项目名称', '专家', '操作人员', '检测内容', '检测结果', '审批人', '检测报告图片', '备注'],
        protos: ['serial', 'date', 'name', 'expert_name', 'operate_name', 'content', 'result', 'check', 'img', 'memo'],
        url: 'detection',
        tabList: [{
            url: 'detection-rfid',
            tab: '养殖批次信息',
            searchPlaceholder: '请输入批次号进行搜索',
            listComponent: [],
            typeComponent: [{component: output}, {component: newbuildBtn}],
            headList: ['所属养殖区', '养殖批次号', '畜禽名称', '养殖日期'],
            protos: ['area', 'serial', 'name', 'date'],
            widths: [50, 50, 50],
            bottomOperateList: [{operateName: '删除'}, {operateName: '导出表格'}]
        }]
    },
    // 圈舍批次
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
            listComponent: [],
            typeComponent: [{component: output}, {component: newbuildBtn}],
            headList: ['所属养殖区', '养殖批次号', '畜禽名称', '养殖日期'],
            protos: ['area', 'serial', 'name', 'date'],
            widths: [50, 50, 50],
            bottomOperateList: [{operateName: '删除'}, {operateName: '导出表格'}]
        }]
    },
    // 无害化批次
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
            listComponent: [],
            typeComponent: [{component: output}, {component: newbuildBtn}],
            headList: ['所属养殖区', '养殖批次号', '畜禽名称', '养殖日期'],
            protos: ['area', 'serial', 'name', 'date'],
            widths: [50, 50, 50],
            bottomOperateList: [{operateName: '删除'}, {operateName: '导出表格'}]
        }]
    },
    // 出栏批次
    slaughterBatch: {
        key: 'slaughterBatch',
        tab: '畜禽出栏管理',
        theads: ['出栏批次号', '出栏日期', '出栏数量', '操作人员', '状态', '备注'],
        protos: ['serial', 'date', 'amount', 'operate_name', 'state', 'memo'],
        url: 'come',
        tabList: [{
            url: 'come-rfid',
            tab: '畜禽RFID',
            searchPlaceholder: '请输入rfid进行搜索',
            listComponent: [],
            typeComponent: [{component: output}, {component: addRfidBtn}],
            headList: ['RFID', '畜禽名称', '养殖日期', '备注信息'],
            protos: ['ear', 'name', 'date', 'memo'],
            widths: [50, 50, 50],
            bottomOperateList: [{operateName: '批量取消出栏'}, {operateName: '导出表格'}]
        }]
    },
    // 养殖计划批次
    planBatch: {
        key: 'planBatch',
        tab: '养殖计划管理',
        theads: ['养殖批次号', '所属养殖场', '养殖人', '养殖日期', '所属养殖区', '养殖地址', '养殖畜禽名称', '养殖面积', '养殖备注'],
        protos: [],
        url: 'breed/4',
        tabList: [{
            url: '4/rfid',
            tab: '畜禽RFID',
            searchPlaceholder: '请输入rfid进行搜索',
            listComponent: [],
            typeComponent: [{component: importBtn}, {component: output}, {component: newbuildBtn}],
            headList: ['RFID', '畜禽名称', '养殖日期', '备注信息'],
            protos: ['ear', 'name', 'date', 'memo'],
            widths: [50, 50, 50],
            bottomOperateList: [{operateName: '删除'}, {operateName: '导出表格'}]
        },
        {
            url: '',
            tab: '生长过程信息',
            searchPlaceholder: '请输入标题进行搜索',
            listComponent: [],
            typeComponent: [{component: newbuildBtn}],
            headList: ['生长图片', '标题', '图片描述', '上传日期', '备注信息'],
            protos: ['img', 'name', 'miaoshu', 'date', 'memo'],
            widths: [50, 50, 50, 50, 50],
            bottomOperateList: [{operateName: '删除'}]
        }]
    },
    // 种植批次
    plantSerial: {
        key: 'plantSerial',
        tab: '种植批次管理1',
        theads: ['种植批次号', '所属种植区', '种植人', '种植日期', '种植地址', '种植果蔬名称', '当前批次面积', '备注'],
        protos: ['serial', 'plantation_name', 'operate_name', 'date', 'address', 'plant_name', 'area_unit', 'memo'],
        url: 'cultivate',
        tabList: [{
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
// 采收批次号
    cultivateBatch: {
        key: 'cultivateBatch',
        tab: '采收批次管理',
        theads: ['采收批次号', '种植批次号', '种植区名称', '采收日期', '采收数量', '种植日期', '果蔬名称', '采收人', '种植面积', '养殖备注'],
        protos: [],
        tabList: [{
            tab: '采收批次信息',
            searchPlaceholder: '请输入rfid进行搜索',
            listComponent: [{
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
            typeComponent: [{component: output}, {component: newbuildBtn}],
            headList: ['检测方式', '检测日期', '检测机构', '检测项目名称', '检测人', '检测结果', '证书编号', '有效期', '备注信息'],
            protos: ['ear', 'name', 'date', 'memo'],
            widths: [50, 50, 50],
            bottomOperateList: [{operateName: '删除'}, {operateName: '导出表格'}]
        }]
    },
// 生产计划批次信息
    planProduct: {
        key: 'planProduct',
        tab: '生产批次管理',
        theads: ['批次号', '计划日期', '操作类型', '安排人员', '计划内容', '操作日期', '备注'],
        protos: ['serial', 'date', 'type', 'operate_name', 'content', 'date', 'memo'],
        url: 'farming',
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
    }
}
