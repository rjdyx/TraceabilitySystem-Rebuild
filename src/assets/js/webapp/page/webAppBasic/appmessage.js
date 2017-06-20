// 中间列表的数据

import importBtn from '../../../components/public/import-btn.vue'
import newbuildBtn from '../../../components/public/newbuild-btn.vue'
import output from '../../../components/public/output.vue'
import selectSection from '../../../components/public/select-section.vue'
import datePick from '../../../components/public/datePick.vue'
import inputDate from '../../../components/public/inputDate.vue'
import inputFile from '../../../components/public/inputFile.vue'
import inputTextSelect from '../../../components/public/inputTextSelect.vue'
import Qrcode from '../../../components/public/Qrcode.vue'

import validate2 from '../../../utils/validate2.js'

export default {
    // 1、养殖管理-饲料使用
    feedUse: [{
        key: 'fodderuse',
        timeshow: true,
        tab: '状态',
        batch: 'breedBatch',
        rightMenu: true,
        roleName: ['basic/category', 0], // 接口权限参数 参数1为权限name 参数2为是否区分运营者 （默认0）
        url: 'fodderuse',
        searchPlaceholder: '请输入饲料名称进行搜索',
        theads: ['饲料名称', '喂养日期', '喂养人'],
        protos: ['fodder_name', 'date', 'operate_name'],
        widths: [26, 26, 26],
        newComponent: [{
            tab: '新建饲料使用信息',
            selectUrl2: [['fodders', 'id', 'name', true], ['additions', 'id', 'name', true], ['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '饲料选择'}, {value: '', label: '饲料添加剂选择'}, {value: '', label: '饲养人员选择'}],
            popNumber2: [0, 1, 2],
            components: [{
                name: 'fodder_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '饲料名称',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择饲料'},
                options: []
            },
            {
                name: 'addition_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '饲料添加剂',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择饲料添加剂'},
                options: []
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '饲养员',
                placeholder: '请选择饲养员',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择饲养员'},
                options: []
            },
            {
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '饲养日期',
                placeholder: '',
                rule: [{required: true, trigger: 'blur', message: '请输入饲养日期'}, {validator: validate2.reDate, message: '请输入饲养日期'}]
            },
            {
                name: 'amount',
                type: 'textSelect',
                component: inputTextSelect,
                isNull: true,
                label: '平均喂养量',
                placeholder: '请输入整数',
                rule: [{required: true, trigger: 'blur', message: '请输入饲养量'}, {validator: validate2.reNumber}],
                options: [['kg/只', 'kg/头', 'kg/条']]
            },
            {
                name: 'way',
                type: 'text',
                component: null,
                isNull: true,
                label: '喂养方式',
                placeholder: '',
                rule: null
            },
            {
                name: 'name',
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
            selectUrl2: [['fodders', 'id', 'name', true], ['additions', 'id', 'name', true], ['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '饲料选择'}, {value: '', label: '饲料添加剂选择'}, {value: '', label: '饲养人员选择'}],
            popNumber2: [1, 2, 3],
            components: [{
                name: 'serial',
                type: 'text',
                component: null,
                isNull: false,
                label: '饲料批次号',
                placeholder: '',
                disabled: true,
                rule: {required: false, trigger: 'blur'},
                options: []
            },
            {
                name: 'fodder_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '饲料名称',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择饲料'},
                options: []
            },
            {
                name: 'addition_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '饲料添加剂',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择饲料添加剂'},
                options: []
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '饲养员',
                placeholder: '请选择饲养员',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择饲养员'},
                options: []
            },
            {
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '使用日期',
                placeholder: '',
                rule: [{required: true, trigger: 'blur', message: '请输入饲养日期'}, {validator: validate2.reDate, message: '请输入饲养日期'}]
            },
            {
                name: 'amount',
                type: 'textSelect',
                component: inputTextSelect,
                isNull: true,
                label: '平均喂养量',
                placeholder: '',
                rule: [{required: true, message: '请输入饲养量'}, {validator: validate2.reNumber}],
                options: [['kg/只', 'kg/头', 'kg/条']]
            },
            {
                name: 'way',
                type: 'text',
                component: null,
                isNull: true,
                label: '喂养方式',
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
    }],
    // 养殖管理-病疫
    plague: [{
        settitle: '病疫',
        key: 'disease',
        roleName: ['basic/operate', 0],
        timeshow: true,
        rightMenu: true,
        url: 'disease',
        batch: 'diseaseBactch',
        searchPlaceholder: '请输入兽药名称进行搜索',
        theads: ['兽药名称', '操作日期', '操作人'],
        protos: ['drug_name', 'date', 'operate_name'],
        widths: [26, 26, 26],
        newComponent: [
            {
                tab: '新建病疫情信息',
                selectUrl2: [['drugs', 'id', 'name', true], ['operates', 'id', 'name', true], ['experts', 'id', 'name', true]],
                selectInit2: [{value: '', label: '兽药选择'}, {value: '', label: '施药人员选择'}, {value: '', label: '专家选择'}],
                popNumber2: [0, 3, 4],
                selectWhereArr2: [[], [{n: 'domain', v: 'beast'}], [{n: 'domain', v: 'beast'}]],
                hasImg: true,
                checkNumber: [1],
                components: [{
                    name: 'drug_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '兽药名称',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择兽药'},
                    options: []
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '用药日期',
                    placeholder: '',
                    rule: [{required: true, message: '请输入用药日期'}, {validator: validate2.reDate, message: '请输入用药日期'}]
                },
                {
                    name: 'description',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '病情描述',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '施药人员',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择施药人员'},
                    options: []
                },
                {
                    name: 'expert_id',
                    type: 'select',
                    component: null,
                    isNull: true,
                    label: '专家',
                    placeholder: '',
                    rule: null,
                    options: []
                },
                {
                    name: 'amount',
                    type: 'textSelect',
                    component: inputTextSelect,
                    isNull: false,
                    label: '平均施药量',
                    placeholder: '请输入正确的数字（必填）',
                    rule: [{required: true, message: '请输入平均施药量'}, {validator: validate2.reNumber}],
                    options: [['kg/只', 'kg/头', 'kg/条']]
                },
                {
                    name: 'way',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '治疗方式',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '病疫图片',
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
                }
                ]
            }
        ],
        editComponent: [
            {
                tab: '编辑病疫情信息',
                selectUrl2: [['drugs', 'id', 'name', true], ['operates', 'id', 'name', true], ['experts', 'id', 'name', true]],
                selectInit2: [{value: '', label: '兽药选择'}, {value: '', label: '施药人员选择'}, {value: '', label: '专家选择'}],
                popNumber2: [1, 4, 5],
                selectWhereArr2: [[], [{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}], [{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
                hasImg: true,
                components: [{
                    name: 'serial',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '病疫批次号',
                    placeholder: '',
                    disabled: true,
                    rule: null
                },
                {
                    name: 'drug_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '兽药名称',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择兽药'},
                    options: []
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '用药日期',
                    placeholder: '',
                    rule: [{required: true, message: '请输入用药日期'}, {validator: validate2.reDate, message: '请输入用药日期'}]
                },
                {
                    name: 'description',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '病情描述',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '施药人员',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择施药人员'},
                    options: []
                },
                {
                    name: 'expert_id',
                    type: 'select',
                    component: null,
                    isNull: true,
                    label: '专家',
                    placeholder: '',
                    rule: null,
                    options: []
                },
                {
                    name: 'amount',
                    type: 'textSelect',
                    component: inputTextSelect,
                    isNull: false,
                    label: '平均施药量',
                    placeholder: '请输入正确的数字（必填）',
                    rule: [{required: true, message: '请输入平均施药量'}, {validator: validate2.reNumber}],
                    options: [['kg/只', 'kg/头', 'kg/条']]
                },
                {
                    name: 'way',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '治疗方式',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '',
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
                }
                ]
            }
        ]
    }],
    // 养殖管理-检疫
    quarantine: [{
        settitle: '检疫',
        key: 'detection',
        roleName: ['basic/expert', 0],
        timeshow: true,
        rightMenu: true,
        url: 'detection',
        batch: 'detectionBatch',
        searchPlaceholder: '请输入检疫项目名称进行搜索',
        theads: ['检疫项目名称', '操作日期', '操作人'],
        protos: ['name', 'date', 'operate_name'],
        widths: [26, 26, 26],
        newComponent: [{
            tab: '新建检疫信息',
            selectUrl2: [['experts', 'id', 'name', true], ['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '请选择指导专家'}, {value: '', label: '请选择操作人员'}],
            popNumber2: [3, 4],
            selectWhereArr2: [[{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}], [{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
            hasImg: true,
            components: [{
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '检疫日期',
                placeholder: '',
                rule: [{required: true, message: '请输入检疫日期'}, {validator: validate2.reDate, message: '请输入检疫日期'}]
            },
            {
                name: 'organization',
                type: 'text',
                component: null,
                isNull: false,
                label: '检疫机构',
                placeholder: '',
                rule: {required: true, trigger: 'blur', message: '请输入检疫机构'}
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '检疫项目名称',
                placeholder: '',
                rule: {required: true, trigger: 'blur', message: '请输入检疫项目名称'}
            },
            {
                name: 'expert_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '指导专家',
                placeholder: '无',
                rule: null,
                options: []
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '操作人员',
                placeholder: '无',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择操作人员'},
                options: []
            },
            {
                name: 'content',
                type: 'text',
                component: null,
                isNull: true,
                label: '检疫内容',
                placeholder: '',
                rule: ''
            },
            {
                name: 'result',
                type: 'select',
                component: null,
                isNull: true,
                label: '检疫结果',
                placeholder: '',
                rule: {required: false, type: 'number'},
                options: [['合格', '不合格']]
            },
            {
                name: 'check',
                type: 'text',
                component: null,
                isNull: true,
                label: '审批人',
                placeholder: '',
                rule: null
            },
            {
                name: 'img',
                type: 'file',
                component: inputFile,
                isNull: true,
                label: '检疫报告图片',
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
            }
            ]
        }],
        editComponent: [{
            tab: '编辑检疫信息',
            selectUrl2: [['experts', 'id', 'name', true], ['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '请选择指导专家'}, {value: '', label: '请选择操作人员'}],
            popNumber2: [4, 5],
            selectWhereArr2: [[{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}], [{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
            hasImg: true,
            components: [{
                name: 'serial',
                type: 'text',
                component: null,
                isNull: false,
                label: '检疫批次号',
                placeholder: '',
                disabled: true,
                rule: {required: false, trigger: 'blur'}
            },
            {
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '检疫日期',
                placeholder: '',
                rule: [{required: true, message: '请输入检疫日期'}, {validator: validate2.reDate, message: '请输入检疫日期'}]
            },
            {
                name: 'organization',
                type: 'text',
                component: null,
                isNull: false,
                label: '检疫机构',
                placeholder: '',
                rule: {required: true, trigger: 'blur', message: '请输入检疫机构'}
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '检疫项目名称',
                placeholder: '',
                rule: {required: true, trigger: 'blur', message: '请输入检疫项目名称'}
            },
            {
                name: 'expert_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '指导专家',
                placeholder: '无',
                rule: {required: false},
                options: []
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '操作人员',
                placeholder: '无',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择操作人员'},
                options: []
            },
            {
                name: 'content',
                type: 'text',
                component: null,
                isNull: true,
                label: '检疫内容',
                placeholder: '',
                rule: ''
            },
            {
                name: 'result',
                type: 'select',
                component: null,
                isNull: true,
                label: '检疫结果',
                placeholder: '',
                rule: {required: false},
                options: [['合格', '不合格']]
            },
            {
                name: 'check',
                type: 'text',
                component: null,
                isNull: true,
                label: '审批人',
                placeholder: '',
                rule: null
            },
            {
                name: 'img',
                type: 'file',
                component: inputFile,
                isNull: true,
                label: '检疫报告图片',
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
            }
            ]
        }]
    }],
    // 养殖管理-检验检测
    detectTest: [{
        settitle: '检验检测',
        timeshow: true,
        rightMenu: true,
        key: 'breed-detect',
        roleName: ['basic/client', 0],
        url: 'detect',
        paramsIndex: 'beast',
        batch: 'breedDetectBatch',
        theads: ['检测项目名称', '检测日期', '操作人'],
        protos: ['name', 'date', 'operate_name'],
        widths: [26, 26, 26],
        newComponent: [{
            tab: '新建检验检测信息',
            hiddenValue: {type: 'beast'},
            selectUrl2: [['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '检测人选择'}],
            selectWhereArr2: [[{n: 'domain', v: 'packb'}, {n: 'domain', v: 'all', s: true}]],
            popNumber2: [1],
            hasImg: true,
            components: [{
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '检测日期',
                placeholder: '',
                disabled: true,
                rule: [{required: true, message: '请输入检测日期'}, {validator: validate2.reDate, message: '请输入检测日期'}]
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '负责人',
                placeholder: '请选择人物',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择负责人'},
                options: []
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测名称',
                placeholder: '请填写检测项目名称',
                rule: {required: true, trigger: 'blur', message: '请输入检测项目名称'}
            },
            {
                name: 'result',
                type: 'select',
                component: null,
                isNull: false,
                label: '检测结果',
                placeholder: '请选择检测结果',
                rule: {required: true, trigger: 'blur'},
                options: [['合格', '不合格']]
            },
            {
                name: 'content',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测内容',
                placeholder: '请填写检测内容',
                rule: null
            },
            {
                name: 'organization',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测机构',
                placeholder: '请填写检测机构名称',
                rule: null
            },
            {
                name: 'method',
                type: 'text',
                component: null,
                isNull: false,
                label: '处理方法',
                placeholder: '请填写检测处理方法',
                rule: null
            },
            {
                name: 'img',
                type: 'file',
                component: inputFile,
                isNull: true,
                label: '检测图片报告',
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
            selectUrl2: [['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '检测人选择'}],
            selectWhereArr2: [[{n: 'domain', v: 'packb'}, {n: 'domain', v: 'all', s: true}]],
            popNumber2: [2],
            hasImg: true,
            components: [{
                name: 'serial',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测批次号',
                placeholder: '',
                disabled: true,
                rule: {required: true}
            },
            {
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '检测日期',
                placeholder: '',
                disabled: true,
                rule: [{required: true, message: '请输入检测日期'}, {validator: validate2.reDate, message: '请输入检测日期'}]
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '负责人',
                placeholder: '请选择人物',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择负责人'},
                options: []
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测名称',
                placeholder: '请填写检测项目名称',
                rule: {required: true, trigger: 'blur', message: '请输入检测项目名称'}
            },
            {
                name: 'result',
                type: 'select',
                component: null,
                isNull: false,
                label: '检测结果',
                placeholder: '请选择检测结果',
                rule: {required: true, trigger: 'blur'},
                options: [['合格', '不合格']]
            },
            {
                name: 'content',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测内容',
                placeholder: '请填写检测内容',
                rule: null
            },
            {
                name: 'organization',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测机构',
                placeholder: '请填写检测机构名称',
                rule: null
            },
            {
                name: 'method',
                type: 'text',
                component: null,
                isNull: false,
                label: '处理方法',
                placeholder: '请填写检测处理方法',
                rule: null
            },
            {
                name: 'img',
                type: 'file',
                component: inputFile,
                isNull: true,
                label: '检测图片报告',
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
    }],
    // 养殖管理-圈舍维护
    penPreserve: [{
        settitle: '圈舍维护',
        key: 'clean',
        roleName: ['basic/supplier', 0],
        timeshow: true,
        rightMenu: true,
        url: 'clean',
        batch: 'penBatch',
        searchPlaceholder: '请输入标题搜索',
        theads: ['标题', '操作日期', '操作人'],
        protos: ['name', 'date', 'operate_name'],
        widths: [26, 26, 26],
        newComponent: [{
            tab: '新建圈舍维护信息',
            selectUrl2: [['experts', 'id', 'name', true], ['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '请选择专家'}, {value: '', label: '请选择操作人'}],
            popNumber2: [2, 1],
            selectWhereArr2: [[{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}], [{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
            hasImg: true,
            components: [{
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '操作日期',
                placeholder: '',
                rule: [{required: true, message: '请输入操作日期'}, {validator: validate2.reDate, message: '请输入操作日期'}]
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
                name: 'expert_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '专家',
                placeholder: '',
                rule: {required: false, type: 'number', message: '请选择专家'},
                options: []
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '标题',
                placeholder: '',
                rule: {required: true, trigger: 'blur', message: '请输入标题'}
            },
            {
                name: 'content',
                type: 'text',
                component: null,
                isNull: false,
                label: '操作内容',
                placeholder: '',
                rule: {required: true, trigger: 'blur', message: '请输入操作内容'}
            },
            {
                name: 'img',
                type: 'file',
                component: inputFile,
                isNull: true,
                label: '圈舍维护图片',
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
            }
            ]
        }],
        editComponent: [{
            tab: '编辑圈舍维护信息',
            selectUrl2: [['experts', 'id', 'name', true], ['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '请选择专家'}, {value: '', label: '请选择操作人'}],
            popNumber2: [3, 2],
            selectWhereArr2: [[{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}], [{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
            hasImg: true,
            components: [{
                name: 'serial',
                type: 'text',
                component: null,
                isNull: false,
                label: '圈舍批次号',
                placeholder: '',
                rule: {required: true, trigger: 'blur'},
                disabled: true
            },
            {
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '操作日期',
                placeholder: '',
                rule: [{required: true, message: '请输入操作日期'}, {validator: validate2.reDate, message: '请输入操作日期'}]
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '操作人',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number'},
                options: []
            },
            {
                name: 'expert_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '专家',
                placeholder: '',
                rule: {required: false, type: 'number', message: '请选择专家'},
                options: []
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '标题',
                placeholder: '',
                rule: {required: true, trigger: 'blur', message: '请输入标题'}
            },
            {
                name: 'content',
                type: 'text',
                component: null,
                isNull: false,
                label: '操作内容',
                placeholder: '',
                rule: {required: true, trigger: 'blur', message: '请输入操作内容'}
            },
            {
                name: 'img',
                type: 'file',
                component: inputFile,
                isNull: true,
                label: '圈舍维护图片',
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
            }
            ]
        }]
    }],
    // 养殖管理-出栏
    export: [{
        key: 'come',
        timeshow: true,
        roleName: ['basic/product', 0],
        url: 'come',
        rightMenu: true,
        batch: 'exportBatch',
        searchPlaceholder: '请输入出栏人进行搜索',
        theads: ['出栏日期', '出栏数量', '出栏人'],
        protos: ['date', 'amount', 'operate_name'],
        widths: [26, 26, 26],
        newComponent: [{
            tab: '新建产品信息',
            selectUrl: [['category', 'product', 'category_id', 'category_name', true]],
            selectInit: [{value: '', label: '选择产品分类'}],
            permissionSelectUrl: ['api/permission_domain'],
            permissionSelectArr: [[{value: '', label: '请选择模块领域'}, {value: 'all', label: '公共模块'}, {set: 'packb', value: 'packb', label: '畜禽加工管理'}, {set: 'packp', value: 'packp', label: '果蔬加工管理'}, {set: 'sell', value: 'sell', label: '销售管理'}]],
            permissionNumber: [1],
            checkNumber: [2],
            popNumber: [0],
            hasImg: true,
            components: [{
                name: 'category_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '分类',
                placeholder: '必填',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择分类名称'},
                options: []
            },
            {
                name: 'domain',
                type: 'select',
                component: null,
                isNull: false,
                label: '模块领域',
                placeholder: '',
                rule: {required: true, message: '请选择模块领域', trigger: 'blur'},
                options: []
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '产品名称',
                placeholder: '必填',
                rule: [{required: true, trigger: 'blur', message: '请输入产品名称'}, {validator: validate2.reCheck, trigger: 'blur', message: '产品名称重复'}]
            },
            {
                name: 'enforce_standard',
                type: 'text',
                component: null,
                isNull: false,
                label: '执行标准',
                placeholder: '',
                rule: null
            },
            {
                name: 'marque',
                type: 'text',
                component: null,
                isNull: true,
                label: '商品型号',
                placeholder: '',
                rule: null
            },
            {
                name: 'description',
                type: 'text',
                component: null,
                isNull: true,
                label: '商品简介',
                placeholder: '',
                rule: null
            },
            {
                name: 'specification',
                type: 'text',
                component: null,
                isNull: true,
                label: '包装规格',
                placeholder: '',
                rule: null
            },
            {
                name: 'expiration_date',
                type: 'text',
                component: null,
                isNull: true,
                label: '保质期',
                placeholder: '',
                rule: null
            },
            {
                name: 'edible_method',
                type: 'text',
                component: null,
                isNull: true,
                label: '食用方法',
                placeholder: '',
                rule: null
            },
            {
                name: 'storage_means',
                type: 'text',
                component: null,
                isNull: true,
                label: '存储方法',
                placeholder: '',
                rule: null
            },
            {
                name: 'burdening_info',
                type: 'text',
                component: null,
                isNull: true,
                label: '配料信息',
                placeholder: '',
                rule: null
            },
            {
                name: 'img',
                type: 'file',
                component: inputFile,
                isNull: true,
                label: '产品图片',
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
                rule: ''
            }
            ]
        }],
        editComponent: [{
            tab: '编辑产品信息',
            selectUrl: [['category', 'product', 'category_id', 'category_name', true]],
            selectInit: [{value: '', label: '选择产品分类'}],
            permissionSelectUrl: ['api/permission_domain'],
            permissionSelectArr: [[{value: '', label: '请选择模块领域'}, {value: 'all', label: '公共模块'}, {set: 'packb', value: 'packb', label: '畜禽加工管理'}, {set: 'packp', value: 'packp', label: '果蔬加工管理'}, {set: 'sell', value: 'sell', label: '销售管理'}]],
            permissionNumber: [1],
            checkNumber: [2],
            popNumber: [0],
            hasImg: true,
            editNumber: 1,
            components: [{
                name: 'category_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '分类',
                placeholder: '必填',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择分类名称'},
                options: []
            },
            {
                name: 'domain',
                type: 'select',
                component: null,
                isNull: false,
                label: '模块领域',
                placeholder: '',
                disabled: false,
                rule: {required: true, message: '请选择模块领域', trigger: 'blur'},
                options: []
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '产品名称',
                placeholder: '必填',
                rule: [{required: true, trigger: 'blur', message: '请输入产品名称'}, {validator: validate2.reCheck, trigger: 'blur', message: '产品名称重复'}]
            },
            {
                name: 'enforce_standard',
                type: 'text',
                component: null,
                isNull: false,
                label: '执行标准',
                placeholder: '',
                rule: null
            },
            {
                name: 'marque',
                type: 'text',
                component: null,
                isNull: true,
                label: '商品型号',
                placeholder: '',
                rule: null
            },
            {
                name: 'description',
                type: 'text',
                component: null,
                isNull: true,
                label: '商品简介',
                placeholder: '',
                rule: null
            },
            {
                name: 'specification',
                type: 'text',
                component: null,
                isNull: true,
                label: '包装规格',
                placeholder: '',
                rule: null
            },
            {
                name: 'expiration_date',
                type: 'text',
                component: null,
                isNull: true,
                label: '保质期',
                placeholder: '',
                rule: null
            },
            {
                name: 'edible_method',
                type: 'text',
                component: null,
                isNull: true,
                label: '食用方法',
                placeholder: '',
                rule: null
            },
            {
                name: 'storage_means',
                type: 'text',
                component: null,
                isNull: true,
                label: '存储方法',
                placeholder: '',
                rule: null
            },
            {
                name: 'burdening_info',
                type: 'text',
                component: null,
                isNull: true,
                label: '配料信息',
                placeholder: '',
                rule: null
            },
            {
                name: 'img',
                type: 'file',
                component: inputFile,
                isNull: true,
                label: '',
                placeholder: '产品图片',
                rule: null
            },
            {
                name: 'memo',
                type: 'textarea',
                component: null,
                isNull: true,
                label: '备注信息',
                placeholder: '',
                rule: ''
            }
            ]
        }]
    }],
    // 养殖管理-生长过程
    courseProcess: [
        {
            settitle: '生长过程',
            key: 'course',
            roleName: ['beast/basic', 0],
            timeshow: true,
            url: 'course',
            searchPlaceholder: '请输入标题进行搜索',
            theads: ['标题', '日期', '图片'],
            protos: ['name', 'date', 'img'],
            widths: [26, 26, 26],
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
                    rule: [{required: true, message: '请输入标题'}, {validator: validate2.reCheck, trigger: 'blur', message: '生长图片标题重复'}]
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
                    rule: [{required: true, message: '请输入标题', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '生长图片标题重复'}]
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
        }
    ],
    // 2、屠宰加工管理-加工批次检测
    processSerial: [{
        settitle: '加工批次检测',
        key: 'breed',
        roleName: ['beast/breed', 0],
        timeshow: true,
        url: 'breed',
        // 链接批次信息模块数据的桥（养殖批次详情）
        batch: 'breedBatch',
        searchPlaceholder: '请输入检测名称进行搜索',
        selectValueId: [['beast_id', 'beast_name', true]],
        selectDefault: [{value: '', label: '请选择畜禽'}],
        changeDataArr: [{state: {0: '未完成', 1: '已完成'}}],
        theads: ['检测名称', '检测日期', '负责人'],
        protos: ['serial', 'farm_name', 'area_name'],
        selectSearch: ['breeds.beast_id'],
        widths: [26, 26, 26],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        newComponent: [{
            tab: '新建检验检测信息',
            hiddenValue: {type: 'beast'},
            selectUrl2: [['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '检测人选择'}],
            selectWhereArr2: [[{n: 'domain', v: 'packb'}, {n: 'domain', v: 'all', s: true}]],
            popNumber2: [1],
            hasImg: true,
            components: [{
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '检测日期',
                placeholder: '',
                disabled: true,
                rule: [{required: true, message: '请输入检测日期'}, {validator: validate2.reDate, message: '请输入检测日期'}]
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '负责人',
                placeholder: '请选择人物',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择负责人'},
                options: []
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测名称',
                placeholder: '请填写检测项目名称',
                rule: {required: true, trigger: 'blur', message: '请输入检测项目名称'}
            },
            {
                name: 'result',
                type: 'select',
                component: null,
                isNull: false,
                label: '检测结果',
                placeholder: '请选择检测结果',
                rule: {required: true, trigger: 'blur'},
                options: [['合格', '不合格']]
            },
            {
                name: 'content',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测内容',
                placeholder: '请填写检测内容',
                rule: null
            },
            {
                name: 'organization',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测机构',
                placeholder: '请填写检测机构名称',
                rule: null
            },
            {
                name: 'method',
                type: 'text',
                component: null,
                isNull: false,
                label: '处理方法',
                placeholder: '请填写检测处理方法',
                rule: null
            },
            {
                name: 'img',
                type: 'file',
                component: inputFile,
                isNull: true,
                label: '检测图片报告',
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
            selectUrl2: [['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '检测人选择'}],
            selectWhereArr2: [[{n: 'domain', v: 'packb'}, {n: 'domain', v: 'all', s: true}]],
            popNumber2: [2],
            hasImg: true,
            components: [{
                name: 'serial',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测批次号',
                placeholder: '',
                disabled: true,
                rule: {required: true}
            },
            {
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '检测日期',
                placeholder: '',
                disabled: true,
                rule: [{required: true, message: '请输入检测日期'}, {validator: validate2.reDate, message: '请输入检测日期'}]
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '负责人',
                placeholder: '请选择人物',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择负责人'},
                options: []
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测名称',
                placeholder: '请填写检测项目名称',
                rule: {required: true, trigger: 'blur', message: '请输入检测项目名称'}
            },
            {
                name: 'result',
                type: 'select',
                component: null,
                isNull: false,
                label: '检测结果',
                placeholder: '请选择检测结果',
                rule: {required: true, trigger: 'blur'},
                options: [['合格', '不合格']]
            },
            {
                name: 'content',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测内容',
                placeholder: '请填写检测内容',
                rule: null
            },
            {
                name: 'organization',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测机构',
                placeholder: '请填写检测机构名称',
                rule: null
            },
            {
                name: 'method',
                type: 'text',
                component: null,
                isNull: false,
                label: '处理方法',
                placeholder: '请填写检测处理方法',
                rule: null
            },
            {
                name: 'img',
                type: 'file',
                component: inputFile,
                isNull: true,
                label: '检测图片报告',
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
        listComponent: [{
            components: [{
                type: 'select',
                component: selectSection,
                name: 'beast_id',
                value: '',
                options: []
            },
            {
                type: 'date',
                component: 'datePick'
            }]
        }],
        moreComponent: [{value: '状态'}]
    }],
    // 屠宰加工管理-产品溯源码管理
    serialManage: [{
        settitle: '产品溯源码管理',
        timeshow: true,
        rightMenu: false,
        key: 'code',
        roleName: ['packb/code', 0],
        url: 'code',
        // 链接批次信息模块数据的桥（养殖批次详情）
        batch: 'feedBatch',
        searchPlaceholder: '请输入标题进行搜索',
        selectValueId: [['fodder_id', 'fodder_name', true]],
        selectDefault: [{value: '', label: '饲料选择'}],
        selectSearch: ['fodderuse.fodder_id'],
        theads: ['产品溯源码', '产品名称', '生产日期'],
        protos: ['code', 'product_name', 'date'],
        widths: [26, 26, 26],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        newComponent: [{
            tab: '新建溯源码信息',
            hiddenValue: {type: 'beast'},
            selectAvl2: ['beast', ''],
            selectUrl2: [['packs', 'id', 'serial', true], ['comes', 'id', 'serial', true], ['storages', 'id', 'serial', true], ['storages', 'id', 'serial', true]],
            selectInit2: [{value: '', label: '加工批次号选择'}, {value: '', label: '出栏批次号选择'}, {value: '', label: '请选择入库批次(平台)'}, {value: '', label: '请选择入库批次(非平台)'}],
            selectWhereArr2: [[{n: 'type', v: 'beast'}], [], [{n: 'type', v: 0}, {n: 'category', v: 'plant'}], [{n: 'type', v: 1}, {n: 'category', v: 'plant'}]],
            permissionSelectUrl: ['api/permission_domain'],
            permissionSelectArr: [[{label: '请选择商品来源', value: ''}, {set: 'beast', label: '养殖出栏', value: 'come'}, {set: 'sell', label: '入库(平台)', value: 'st'}, {set: 'sell', label: '入库(非平台)', value: 'sf'}]],
            permissionNumber: [2],
            popNumber2: [0, 3, 4, 5],
            // labUrl: 'come-rfid',
            curl: 'pack-product-rfid',
            opqcurl: '{x}/pack-product',
            type: 'assoc',
            assocNum: 1,
            productNum: 1,
            components: [{
                name: 'pack_id',
                type: 'select',
                assoc: ['pack-product', 'id', 'product_name', 1, {value: '', label: '产品选择'}],
                component: null,
                isNull: false,
                label: '加工批次号',
                placeholder: '',
                disabled: true,
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择加工批次号'},
                options: []
            },
            {
                name: 'pack_product_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '加工产品',
                placeholder: '',
                disabled: true,
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择加工产品'},
                options: []
            },
            {
                name: 'category',
                type: 'select',
                component: null,
                isNull: false,
                label: '加工商品来源',
                placeholder: '',
                selectNumber: {come: [3, 9], st: [4, 10], sf: [5]},
                rule: {required: true, trigger: 'blur', message: '请选择商品来源'},
                options: []
            },
            {
                name: 'come_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '出栏批次号',
                hiddenSelect: true,
                assocNum: 9,
                placeholder: '',
                disabled: true,
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择出栏批次号'},
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
                assocNum: 10,
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
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '生产日期',
                placeholder: '',
                rule: [{required: true, trigger: 'blur', message: '请输入生产日期'}, {validator: validate2.reDate, message: '请输入生产日期'}]
            },
            {
                name: 'amount',
                type: 'text',
                component: null,
                isNull: false,
                label: '生成数量',
                placeholder: '请填写数量',
                rule: [{required: true, trigger: 'blur', message: '请输入生成溯源码数量'}, {validator: validate2.reInteger}]
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
                hiddenSelect: true,
                tableUrl: ['come-rfid', true],
                theads: ['出栏批次', 'Rfid', '养殖畜禽', '养殖日期'],
                protos: ['come_serial', 'rfid', 'beast_name', 'date'],
                valueId: 'rfid_ids',
                errormsg: '请选择rfid',
                tableVal: []
            },
            {
                name: 'code_ids',
                type: 'table',
                hiddenSelect: true,
                tableUrl: ['storage_code', false],
                theads: ['溯源码', '生产日期', '溯源次数'],
                protos: ['code', 'date', 'time'],
                valueId: 'code_ids',
                errormsg: '请选择溯源码',
                tableVal: []
            }]
        }],
        editComponent: [{
            tab: '编辑溯源码信息',
            components: [{
                name: 'serial',
                type: 'text',
                component: null,
                isNull: false,
                label: '加工批次号',
                placeholder: '',
                disabled: true,
                rule: {required: true}
            },
            {
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
                name: 'product_name',
                type: 'text',
                component: null,
                isNull: false,
                label: '加工产品',
                placeholder: '',
                disabled: true,
                rule: {required: true}
            },
            {
                name: 'rfid',
                type: 'text',
                component: null,
                isNull: false,
                label: 'Rfid',
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
                rule: [{required: true, trigger: 'blur', message: '请输入生产日期'}, {validator: validate2.reDate, message: '请输入生产日期'}]
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
        listComponent: [{
            components: [{
                type: 'select',
                component: selectSection,
                name: 'fodders.id',
                value: '',
                options: []
            },
            {
                type: 'date',
                component: 'datePick'
            }]
        }]
    }],
    // 种植管理-种植事物管理
    plantThing: [
        {
            timeshow: true,
            rightMenu: false,
            tabshow: true,
            key: 'plantation',
            roleName: ['plant/basic', 0],
            tab: '施肥信息',
            url: 'plantation',
            searchPlaceholder: '请输入种植场进行搜索',
            theads: ['种植区', '种植批次号', '施肥日期'],
            protos: ['name', 'area_unit', 'director'],
            widths: [26, 26, 26],
            newComponent: [{
                tab: '新建种植场信息',
                checkNumber: [0],
                hasImg: true,
                components: [{
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '种植场名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入种植场名称', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '种植场名称重复'}]
                },
                {
                    name: 'area',
                    type: 'textSelect',
                    component: inputTextSelect,
                    isNull: false,
                    label: '种植面积',
                    placeholder: '请填写数字（必填）',
                    options: [['亩', '平方米', '公顷']],
                    rule: [{required: true, message: '请输入种植面积', trigger: 'blur'}, {validator: validate2.reNumber}]
                },
                {
                    name: 'phone',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '联系电话',
                    placeholder: '请输入11位的手机号（固话用-隔开）',
                    rule: { validator: validate2.phone, trigger: 'blur' }
                },
                {
                    name: 'address',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '联系地址',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'director',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '负责人',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'video',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '视频检测设备号',
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
                tab: '编辑种植场信息',
                checkNumber: [0],
                limit: 1,
                hasImg: true,
                getMessage: '种植场面积不能小于下属种植区之和',
                components: [{
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '种植场名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入种植场名称', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '种植场名称重复'}]
                },
                {
                    name: 'area',
                    type: 'textSelect',
                    component: inputTextSelect,
                    isNull: false,
                    label: '种植面积',
                    placeholder: '请填写数字（必填）',
                    options: [['亩', '平方米', '公顷']],
                    rule: [{required: true, message: '请输入种植面积', trigger: 'blur'}, {validator: validate2.reNumber}]
                },
                {
                    name: 'phone',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '联系电话',
                    placeholder: '请输入11位的手机号（固话用-隔开）',
                    rule: { validator: validate2.phone, trigger: 'blur' }
                },
                {
                    name: 'address',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '联系地址',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'director',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '负责人',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'video',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '视频检测设备号',
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
            timeshow: true,
            tabshow: true,
            roleName: ['plant/basic', 0],
            key: 'planta',
            tab: '施药信息',
            url: 'planta',
            selectSearch: ['planta.pid'],
            selectValueId: [['pid', 'plantation_name', true]],
            searchPlaceholder: '请输入种植区进行搜索',
            selectDefault: [{value: '', label: '种植场选择'}],
            theads: ['种植区', '种植批次号', '施药日期'],
            protos: ['plantation_name', 'name', 'area_unit'],
            widths: [26, 26, 26],
            newComponent: [{
                tab: '新建种植区信息',
                selectUrl: [['plantation', 'planta', 'pid', 'plantation_name', true]],
                selectInit: [{value: '', label: '选择种植场'}],
                checkNumber: [1],
                hasImg: true,
                popNumber: [0],
                limit: 2,
                getMessage: '已超过种植场余留面积',
                components: [{
                    name: 'pid',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '所属种植场',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur', message: '请选择所属种植场', type: 'number'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '种植区名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入种植区名称', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '种植区名称重复'}]
                },
                {
                    name: 'area',
                    type: 'textSelect',
                    component: inputTextSelect,
                    isNull: false,
                    label: '种植面积',
                    placeholder: '请填写数字（必填）',
                    options: [['亩', '平方米', '公顷']],
                    rule: [{required: true, message: '请输入种植面积', trigger: 'blur'}, {validator: validate2.reNumber}]
                },
                {
                    name: 'director',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '负责人',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'phone',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '详细电话',
                    placeholder: '请输入11位的手机号（固话用-隔开）',
                    rule: { validator: validate2.phone, trigger: 'blur' }
                },
                {
                    name: 'address',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '地址',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '',
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
                }
                ]
            }],
            editComponent: [{
                tab: '编辑种植区信息',
                selectUrl: [['plantation', 'planta', 'pid', 'plantation_name', true]],
                selectInit: [{value: '', label: '选择种植场'}],
                checkNumber: [1],
                popNumber: [0],
                hasImg: true,
                limit: 2,
                getMessage: '已超过种植场余留面积',
                components: [{
                    name: 'pid',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '所属种植场',
                    placeholder: '必填',
                    rule: {required: true, type: 'number', message: '请选择所属种植场'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '姓名',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入种植区名称', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '种植区名称重复'}]
                },
                {
                    name: 'area',
                    type: 'textSelect',
                    component: inputTextSelect,
                    isNull: false,
                    label: '种植面积',
                    placeholder: '请填写数字（必填）',
                    options: [['亩', '平方米', '公顷']],
                    rule: [{required: true, message: '请输入种植面积', trigger: 'blur'}, {validator: validate2.reNumber}]
                },
                {
                    name: 'director',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '负责人',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'phone',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '详细电话',
                    placeholder: '请输入11位的手机号（固话用-隔开）',
                    rule: { validator: validate2.phone, trigger: 'blur' }
                },
                {
                    name: 'address',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '地址',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '',
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
                }
                ]
            }]
        },
        {
            timeshow: true,
            rightMenu: false,
            tabshow: true,
            key: 'plant',
            roleName: ['plant/basic', 0],
            tab: '检测信息',
            url: 'plant',
            selectSearch: ['plants.category_id'],
            selectValueId: [['category_id', 'category_name', true]],
            searchPlaceholder: '请输入果蔬名称进行搜索',
            selectDefault: [{value: '', label: '果蔬类别'}],
            theads: ['种植区', '种植批次号', '检测日期'],
            protos: ['category_name', 'name', 'growth_cycle'],
            widths: [26, 26, 26],
            newComponent: [{
                tab: '新建果蔬档案',
                selectUrl: [['category', 'plant', 'category_id', 'category_name', true]],
                selectInit: [{value: '', label: '选择果蔬分类'}],
                checkNumber: [1],
                popNumber: [0],
                hasImg: true,
                components: [{
                    name: 'category_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '果蔬类别',
                    placeholder: '必填',
                    rule: {required: true, message: '请选择果蔬类别', trigger: 'blur', type: 'number'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '果蔬名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入果蔬名称', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '果蔬名称重复'}]
                },
                {
                    name: 'description',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '基本特征描述',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'growth_cycle',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '生长周期（天）',
                    placeholder: '',
                    rule: {validator: validate2.reNumber}
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: false,
                    label: '果蔬图片',
                    placeholder: ''
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
                tab: '编辑果蔬档案',
                selectUrl: [['category', 'plant', 'category_id', 'category_name', true]],
                selectInit: [{value: '', label: '选择果蔬分类'}],
                checkNumber: [1],
                popNumber: [0],
                hasImg: true,
                components: [{
                    name: 'category_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '果蔬类别',
                    placeholder: '必填',
                    rule: {required: true, message: '请选择果蔬类别', trigger: 'blur', type: 'number'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '果蔬名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请选择果蔬类别', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '果蔬名称重复'}]
                },
                {
                    name: 'description',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '基本特征描述',
                    placeholder: ''
                },
                {
                    name: 'growth_cycle',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '生长周期（天）',
                    placeholder: '',
                    rule: {validator: validate2.reNumber}
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: false,
                    label: '果蔬图片',
                    placeholder: ''
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
            timeshow: true,
            rightMenu: false,
            tabshow: true,
            key: 'manure',
            tab: '农事信息',
            roleName: ['plant/basic', 0],
            url: 'manure',
            selectSearch: ['manures.category_id'],
            selectValueId: [['category_id', 'category_name', true]],
            searchPlaceholder: '请输入肥料名称',
            selectDefault: [{value: '', label: '肥料类别'}],
            theads: ['种植区', '种植批次号', '农事日期'],
            protos: ['category_name', 'name', 'usage'],
            widths: [26, 26, 26],
            typeComponent: [{
                component: output
            },
            {
                component: newbuildBtn
            }],
            listComponent: [{
                components: [{
                    name: 'manures.category_id',
                    value: '',
                    type: 'select',
                    component: selectSection,
                    options: []
                }]
            }],
            newComponent: [{
                tab: '新建肥料档案',
                selectUrl: [['category', 'manure', 'category_id', 'category_name', true]],
                selectInit: [{value: '', label: '选择肥料分类'}],
                checkNumber: [1],
                popNumber: [0],
                hasImg: true,
                components: [{
                    name: 'category_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '肥料分类',
                    placeholder: '必填',
                    rule: {required: true, message: '请选择肥料类别', trigger: 'blur', type: 'number'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '肥料名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入肥料名称', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '肥料名称重复'}]
                },
                {
                    name: 'usage',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '包装规格',
                    placeholder: ''
                },
                {
                    name: 'dealer',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '经销商名称',
                    placeholder: ''
                },
                {
                    name: 'origin',
                    type: 'text',
                    component: null,
                    isNull: false,
                    placeholder: '',
                    label: '产地'
                },
                {
                    name: 'phone',
                    type: 'text',
                    component: null,
                    isNull: false,
                    placeholder: '请输入11位的手机号（固话用-隔开）',
                    label: '联系方式',
                    rule: { validator: validate2.phone, trigger: 'blur' }
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: false,
                    label: '肥料图片',
                    placeholder: ''
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
                tab: '编辑肥料信息',
                selectUrl: [['category', 'manure', 'category_id', 'category_name', true]],
                selectInit: [{value: '', label: '选择肥料分类'}],
                checkNumber: [1],
                popNumber: [0],
                hasImg: true,
                components: [{
                    name: 'category_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '分类',
                    placeholder: '必填',
                    rule: {required: true, message: '请选择肥料类别', trigger: 'blur', type: 'number'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '肥料名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入肥料名称', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '肥料名称重复'}]
                },
                {
                    name: 'specification',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '包装规格',
                    placeholder: ''
                },
                {
                    name: 'dealer',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '经销商名称',
                    placeholder: ''
                },
                {
                    name: 'origin',
                    type: 'text',
                    component: null,
                    isNull: false,
                    placeholder: '',
                    label: '产地'
                },
                {
                    name: 'phone',
                    type: 'text',
                    component: null,
                    isNull: false,
                    placeholder: '请输入11位的手机号（固话用-隔开）',
                    label: '联系方式',
                    rule: { validator: validate2.phone, trigger: 'blur' }
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: false,
                    label: '肥料图片',
                    placeholder: ''
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
            timeshow: true,
            rightMenu: false,
            tabshow: true,
            settitle: '种植基础资料',
            key: 'medicament',
            tab: '采收信息',
            roleName: ['plant/basic', 0],
            url: 'medicament',
            selectSearch: ['medicaments.category_id'],
            selectValueId: [['category_id', 'category_name', true]],
            searchPlaceholder: '请输入农药名称',
            selectDefault: [{value: '', label: '农药类别'}],
            theads: ['采收批次号', '种植批次号', '采收日期'],
            protos: ['category_name', 'name', 'usage'],
            widths: [26, 26, 26],
            newComponent: [{
                tab: '新建农药档案',
                hasImg: true,
                selectUrl: [['category', 'medicament', 'category_id', 'category_name', true]],
                selectInit: [{value: '', label: '选择农药分类'}],
                checkNumber: [1],
                popNumber: [0],
                components: [{
                    name: 'category_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '农药分类',
                    placeholder: '必填',
                    rule: {required: true, message: '请选择农药分类', trigger: 'blur', type: 'number'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '农药名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入农药名称', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '农药名称重复'}]
                },
                {
                    name: 'usage',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '用途',
                    placeholder: ''
                },
                {
                    name: 'control_objects',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '防治对象',
                    placeholder: ''
                },
                {
                    name: 'toxicity_grade',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '毒性等级',
                    placeholder: '必填',
                    rule: {required: true, message: '请输入模块类型', trigger: 'blur'},
                    options: [['微毒', '低毒', '中毒', '高毒']]
                },
                {
                    name: 'specification',
                    type: 'text',
                    component: null,
                    isNull: false,
                    placeholder: '',
                    label: '包装规格'
                },
                {
                    name: 'phone',
                    type: 'text',
                    component: null,
                    isNull: false,
                    placeholder: '请输入11位的手机号（固话用-隔开）',
                    label: '联系方式',
                    rule: { validator: validate2.phone, trigger: 'blur' }
                },
                {
                    name: 'manufacturer',
                    type: 'text',
                    component: null,
                    isNull: false,
                    placeholder: '',
                    label: '厂家名称'
                },
                {
                    name: 'origin',
                    type: 'text',
                    component: null,
                    isNull: false,
                    placeholder: '',
                    label: '产地'
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: false,
                    label: '农药图片',
                    placeholder: ''
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
                tab: '编辑农药档案',
                hasImg: true,
                selectUrl: [['category', 'medicament', 'category_id', 'category_name', true]],
                selectInit: [{value: '', label: '选择农药分类'}],
                checkNumber: [1],
                popNumber: [0],
                components: [{
                    name: 'category_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '农药分类',
                    placeholder: '必填',
                    rule: {required: true, message: '请选择农药分类', trigger: 'blur', type: 'number'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '农药名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入农药名称', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '农药名称重复'}]
                },
                {
                    name: 'usage',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '用途',
                    placeholder: ''
                },
                {
                    name: 'control_objects',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '防治对象',
                    placeholder: ''
                },
                {
                    name: 'toxicity_grade',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '毒性等级',
                    placeholder: '必填',
                    rule: {required: true, message: '请输入模块类型', trigger: 'blur'},
                    options: [['微毒', '低毒', '中毒', '高毒']]
                },
                {
                    name: 'specification',
                    type: 'text',
                    component: null,
                    isNull: false,
                    placeholder: '',
                    label: '包装规格'
                },
                {
                    name: 'phone',
                    type: 'text',
                    component: null,
                    isNull: false,
                    placeholder: '请输入11位的手机号（固话用-隔开）',
                    label: '联系方式',
                    rule: { validator: validate2.phone, trigger: 'blur' }
                },
                {
                    name: 'manufacturer',
                    type: 'text',
                    component: null,
                    isNull: false,
                    placeholder: '',
                    label: '厂家名称'
                },
                {
                    name: 'origin',
                    type: 'text',
                    component: null,
                    isNull: false,
                    placeholder: '',
                    label: '产地'
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: false,
                    label: '农药图片',
                    placeholder: ''
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
            timeshow: true,
            rightMenu: false,
            tabshow: true,
            key: 'medicament',
            tab: '生长图片',
            roleName: ['plant/basic', 0],
            url: 'medicament',
            selectSearch: ['medicaments.category_id'],
            selectValueId: [['category_id', 'category_name', true]],
            searchPlaceholder: '请输入农药名称',
            selectDefault: [{value: '', label: '农药类别'}],
            theads: ['种植区', '种植批次号', '上传日期'],
            protos: ['category_name', 'name', 'usage'],
            widths: [26, 26, 26],
            newComponent: [{
                tab: '新建农药档案',
                hasImg: true,
                selectUrl: [['category', 'medicament', 'category_id', 'category_name', true]],
                selectInit: [{value: '', label: '选择农药分类'}],
                checkNumber: [1],
                popNumber: [0],
                components: [{
                    name: 'category_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '农药分类',
                    placeholder: '必填',
                    rule: {required: true, message: '请选择农药分类', trigger: 'blur', type: 'number'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '农药名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入农药名称', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '农药名称重复'}]
                },
                {
                    name: 'usage',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '用途',
                    placeholder: ''
                },
                {
                    name: 'control_objects',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '防治对象',
                    placeholder: ''
                },
                {
                    name: 'toxicity_grade',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '毒性等级',
                    placeholder: '必填',
                    rule: {required: true, message: '请输入模块类型', trigger: 'blur'},
                    options: [['微毒', '低毒', '中毒', '高毒']]
                },
                {
                    name: 'specification',
                    type: 'text',
                    component: null,
                    isNull: false,
                    placeholder: '',
                    label: '包装规格'
                },
                {
                    name: 'phone',
                    type: 'text',
                    component: null,
                    isNull: false,
                    placeholder: '请输入11位的手机号（固话用-隔开）',
                    label: '联系方式',
                    rule: { validator: validate2.phone, trigger: 'blur' }
                },
                {
                    name: 'manufacturer',
                    type: 'text',
                    component: null,
                    isNull: false,
                    placeholder: '',
                    label: '厂家名称'
                },
                {
                    name: 'origin',
                    type: 'text',
                    component: null,
                    isNull: false,
                    placeholder: '',
                    label: '产地'
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: false,
                    label: '农药图片',
                    placeholder: ''
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
                tab: '编辑农药档案',
                hasImg: true,
                selectUrl: [['category', 'medicament', 'category_id', 'category_name', true]],
                selectInit: [{value: '', label: '选择农药分类'}],
                checkNumber: [1],
                popNumber: [0],
                components: [{
                    name: 'category_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '农药分类',
                    placeholder: '必填',
                    rule: {required: true, message: '请选择农药分类', trigger: 'blur', type: 'number'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '农药名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入农药名称', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '农药名称重复'}]
                },
                {
                    name: 'usage',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '用途',
                    placeholder: ''
                },
                {
                    name: 'control_objects',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '防治对象',
                    placeholder: ''
                },
                {
                    name: 'toxicity_grade',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '毒性等级',
                    placeholder: '必填',
                    rule: {required: true, message: '请输入模块类型', trigger: 'blur'},
                    options: [['微毒', '低毒', '中毒', '高毒']]
                },
                {
                    name: 'specification',
                    type: 'text',
                    component: null,
                    isNull: false,
                    placeholder: '',
                    label: '包装规格'
                },
                {
                    name: 'phone',
                    type: 'text',
                    component: null,
                    isNull: false,
                    placeholder: '请输入11位的手机号（固话用-隔开）',
                    label: '联系方式',
                    rule: { validator: validate2.phone, trigger: 'blur' }
                },
                {
                    name: 'manufacturer',
                    type: 'text',
                    component: null,
                    isNull: false,
                    placeholder: '',
                    label: '厂家名称'
                },
                {
                    name: 'origin',
                    type: 'text',
                    component: null,
                    isNull: false,
                    placeholder: '',
                    label: '产地'
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: false,
                    label: '农药图片',
                    placeholder: ''
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
    ],
    // 种植管理-种植生产计划管理
    plantTrace: [{
        key: 'detect',
        timeshow: false,
        rightMenu: false,
        roleName: ['beast/detect', 0],
        url: 'plan',
        paramsIndex: 'beast',
        // 链接批次信息模块数据的桥（养殖批次详情）
        batch: 'beastDetectBatch',
        searchPlaceholder: '请输入批次号进行搜索',
        selectSearch: ['detects.weather'],
        changeDataArr: [{result: {0: '不合格', 1: '合格'}}],
        theads: ['计划内容', '计划批次', '计划时间'],
        protos: ['serial', 'serial', 'date'],
        widths: [26, 26, 26],
        newComponent: [{
            tab: '新建溯源码信息',
            hiddenValue: {type: 'plant'},
            selectUrl2: [['packs', 'id', 'serial', true], ['harvests', 'id', 'serial', true], ['storages', 'id', 'serial', true], ['storages', 'id', 'serial', true]],
            selectInit2: [{value: '', label: '加工批次号选择'}, {value: '', label: '采收批次号选择'}, {value: '', label: '请选择入库批次(平台)'}, {value: '', label: '请选择入库批次(非平台)'}],
            selectWhereArr2: [[{n: 'type', v: 'plant'}], [], [{n: 'type', v: 0}, {n: 'category', v: 'plant'}], [{n: 'type', v: 1}, {n: 'category', v: 'plant'}]],
            permissionSelectUrl: ['api/permission_domain'],
            permissionSelectArr: [[{label: '请选择商品来源', value: ''}, {set: 'plant', label: '种植采收', value: 'harvest'}, {set: 'sell', label: '入库(平台)', value: 'st'}, {set: 'sell', label: '入库(非平台)', value: 'sf'}]],
            permissionNumber: [2],
            popNumber2: [0, 3, 4, 5],
            curl: 'pack-product-rfid',
            opqcurl: '{x}/pack-product',
            type: 'assoc',
            assocNum: 1,
            components: [{
                name: 'pack_id',
                type: 'select',
                assoc: ['pack-product', 'id', 'product_name', 1, {value: '', label: '产品选择'}],
                component: null,
                isNull: false,
                label: '加工批次号',
                placeholder: '',
                disabled: true,
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择加工批次号'},
                options: []
            },
            {
                name: 'pack_product_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '加工产品',
                placeholder: '',
                disabled: true,
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择加工产品'},
                options: []
            },
            {
                name: 'category',
                type: 'select',
                component: null,
                isNull: false,
                label: '加工商品来源',
                placeholder: '',
                selectNumber: {harvest: [3], st: [4, 9], sf: [5]},
                rule: {required: true, trigger: 'blur', message: '请选择商品来源'},
                options: []
            },
            {
                name: 'harvest_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '采收批次号',
                hiddenSelect: true,
                placeholder: '',
                disabled: true,
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择采收批次号'},
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
                assocNum: 9,
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
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '生产日期',
                placeholder: '',
                rule: [{required: true, trigger: 'blur', message: '请输入生产日期'}, {validator: validate2.reDate, message: '请输入生产日期'}]
            },
            {
                name: 'amount',
                type: 'text',
                component: null,
                isNull: false,
                label: '生成数量',
                placeholder: '请填写数量',
                rule: [{required: true, trigger: 'blur', message: '请输入生成溯源码数量'}, {validator: validate2.reInteger}]
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
                tableUrl: ['storage_code', false],
                hiddenSelect: true,
                theads: ['溯源码', '生产日期', '溯源次数'],
                protos: ['code', 'date', 'time'],
                valueId: 'code_ids',
                errormsg: '请选择溯源码',
                tableVal: []
            }]
        }],
        editComponent: [{
            tab: '编辑溯源码信息',
            components: [{
                name: 'serial',
                type: 'text',
                component: null,
                isNull: false,
                label: '加工批次号',
                placeholder: '',
                disabled: true,
                rule: {required: true}
            },
            {
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
                rule: [{required: true, trigger: 'blur', message: '请输入生产日期'}, {validator: validate2.reDate, message: '请输入生产日期'}]
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
    }],
    // 果蔬加工管理-加工检测管理
    processManage: [{
        settitle: '加工检测管理',
        timeshow: true,
        rightMenu: false,
        key: 'clean',
        roleName: ['beast/clean', 0],
        tab: '圈舍维护信息',
        url: 'clean',
        // 链接批次信息模块数据的桥（养殖批次详情）
        batch: 'areaBatch',
        searchPlaceholder: '请输入圈舍批次号进行搜索',
        search: ['query_text', 'name'],
        theads: ['圈舍批次号', '标题', '操作内容'],
        protos: ['serial', 'name', 'content'],
        widths: [26, 26, 26],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        newComponent: [{
            tab: '新建检验检测信息',
            hiddenValue: {type: 'plant'},
            selectUrl2: [['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '检测人选择'}],
            selectWhereArr2: [[{n: 'domain', v: 'packp'}, {n: 'domain', v: 'all', s: true}]],
            popNumber2: [1],
            hasImg: true,
            components: [{
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '检测日期',
                placeholder: '',
                disabled: true,
                rule: [{required: true, message: '请输入检测日期'}, {validator: validate2.reDate, message: '请输入检测日期'}]
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '负责人',
                placeholder: '请选择人物',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择负责人'},
                options: []
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测名称',
                placeholder: '请填写检测项目名称',
                rule: {required: true, trigger: 'blur', message: '请输入检测项目名称'}
            },
            {
                name: 'result',
                type: 'select',
                component: null,
                isNull: false,
                label: '检测结果',
                placeholder: '请选择检测结果',
                rule: {required: true, trigger: 'blur'},
                options: [['合格', '不合格']]
            },
            {
                name: 'content',
                type: 'textarea',
                component: null,
                isNull: false,
                label: '检测内容',
                placeholder: '请填写检测内容',
                rule: null
            },
            {
                name: 'organization',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测机构',
                placeholder: '请填写检测机构名称',
                rule: null
            },
            {
                name: 'method',
                type: 'text',
                component: null,
                isNull: false,
                label: '处理方法',
                placeholder: '请填写检测处理方法',
                rule: null
            },
            {
                name: 'img',
                type: 'file',
                component: inputFile,
                isNull: true,
                label: '检测图片报告',
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
            selectUrl2: [['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '检测人选择'}],
            selectWhereArr2: [[{n: 'domain', v: 'packp'}, {n: 'domain', v: 'all', s: true}]],
            popNumber2: [2],
            hasImg: true,
            components: [{
                name: 'serial',
                type: 'text',
                component: null,
                isNull: false,
                label: '加工检测批次号',
                placeholder: '',
                disabled: true,
                rule: {required: true}
            },
            {
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '检测日期',
                placeholder: '',
                disabled: true,
                rule: [{required: true, message: '请输入检测日期'}, {validator: validate2.reDate, message: '请输入检测日期'}]
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '负责人',
                placeholder: '请选择人物',
                rule: {required: true, trigger: 'blur', type: 'number'},
                options: []
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测名称',
                placeholder: '请填写检测项目名称',
                rule: {required: true, trigger: 'blur', message: '请输入检测项目名称'}
            },
            {
                name: 'result',
                type: 'select',
                component: null,
                isNull: false,
                label: '检测结果',
                placeholder: '请选择检测结果',
                rule: {required: true, trigger: 'blur'},
                options: [['合格', '不合格']]
            },
            {
                name: 'content',
                type: 'textarea',
                component: null,
                isNull: false,
                label: '检测内容',
                placeholder: '请填写检测内容',
                rule: null
            },
            {
                name: 'organization',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测机构',
                placeholder: '请填写检测机构名称',
                rule: null
            },
            {
                name: 'method',
                type: 'text',
                component: null,
                isNull: false,
                label: '处理方法',
                placeholder: '请填写检测处理方法',
                rule: null
            },
            {
                name: 'img',
                type: 'file',
                component: inputFile,
                isNull: true,
                label: '检测图片报告',
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
        listComponent: [{
            components: [{
                type: 'date',
                component: 'datePick'
            }]
        }]
    }],
    // 果蔬加工管理-产品溯源码管理
    vegetableTrace: [{
        settitle: '产品溯源码管理',
        timeshow: true,
        key: 'dispose',
        roleName: ['beast/dispose', 0],
        tab: '无害化信息',
        url: 'dispose',
        // 链接批次信息模块数据的桥（养殖批次详情）
        batch: 'innocuityBatch',
        searchPlaceholder: '请输入无害化批次号进行搜索',
        theads: ['无害化批次号', '操作日期', '操作内容'],
        protos: ['serial', 'date', 'content'],
        selectSearch: ['dispose.expert_name'],
        widths: [26, 26, 26],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        newComponent: [{
            tab: '新建溯源码信息',
            hiddenValue: {type: 'plant'},
            selectUrl2: [['packs', 'id', 'serial', true], ['harvests', 'id', 'serial', true], ['storages', 'id', 'serial', true], ['storages', 'id', 'serial', true]],
            selectInit2: [{value: '', label: '加工批次号选择'}, {value: '', label: '采收批次号选择'}, {value: '', label: '请选择入库批次(平台)'}, {value: '', label: '请选择入库批次(非平台)'}],
            selectWhereArr2: [[{n: 'type', v: 'plant'}], [], [{n: 'type', v: 0}, {n: 'category', v: 'plant'}], [{n: 'type', v: 1}, {n: 'category', v: 'plant'}]],
            permissionSelectUrl: ['api/permission_domain'],
            permissionSelectArr: [[{label: '请选择商品来源', value: ''}, {set: 'plant', label: '种植采收', value: 'harvest'}, {set: 'sell', label: '入库(平台)', value: 'st'}, {set: 'sell', label: '入库(非平台)', value: 'sf'}]],
            permissionNumber: [2],
            popNumber2: [0, 3, 4, 5],
            curl: 'pack-product-rfid',
            opqcurl: '{x}/pack-product',
            type: 'assoc',
            assocNum: 1,
            components: [{
                name: 'pack_id',
                type: 'select',
                assoc: ['pack-product', 'id', 'product_name', 1, {value: '', label: '产品选择'}],
                component: null,
                isNull: false,
                label: '加工批次号',
                placeholder: '',
                disabled: true,
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择加工批次号'},
                options: []
            },
            {
                name: 'pack_product_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '加工产品',
                placeholder: '',
                disabled: true,
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择加工产品'},
                options: []
            },
            {
                name: 'category',
                type: 'select',
                component: null,
                isNull: false,
                label: '加工商品来源',
                placeholder: '',
                selectNumber: {harvest: [3], st: [4, 9], sf: [5]},
                rule: {required: true, trigger: 'blur', message: '请选择商品来源'},
                options: []
            },
            {
                name: 'harvest_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '采收批次号',
                hiddenSelect: true,
                placeholder: '',
                disabled: true,
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择采收批次号'},
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
                assocNum: 9,
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
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '生产日期',
                placeholder: '',
                rule: [{required: true, trigger: 'blur', message: '请输入生产日期'}, {validator: validate2.reDate, message: '请输入生产日期'}]
            },
            {
                name: 'amount',
                type: 'text',
                component: null,
                isNull: false,
                label: '生成数量',
                placeholder: '请填写数量',
                rule: [{required: true, trigger: 'blur', message: '请输入生成溯源码数量'}, {validator: validate2.reInteger}]
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
                tableUrl: ['storage_code', false],
                hiddenSelect: true,
                theads: ['溯源码', '生产日期', '溯源次数'],
                protos: ['code', 'date', 'time'],
                valueId: 'code_ids',
                errormsg: '请选择溯源码',
                tableVal: []
            }]
        }],
        editComponent: [{
            tab: '编辑溯源码信息',
            components: [{
                name: 'serial',
                type: 'text',
                component: null,
                isNull: false,
                label: '加工批次号',
                placeholder: '',
                disabled: true,
                rule: {required: true}
            },
            {
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
                rule: [{required: true, trigger: 'blur', message: '请输入生产日期'}, {validator: validate2.reDate, message: '请输入生产日期'}]
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
        listComponent: [{
            components: [
                {
                    type: 'date',
                    component: 'datePick'
                }
            ]
        }]
    }],
    // 物流运输管理-物流批次管理
    expressManage: [{
        settitle: '物流批次管理',
        key: 'come',
        roleName: ['beast/come', 0],
        timeshow: true,
        tab: '出栏信息',
        url: 'come',
        // 链接批次信息模块数据的桥（养殖批次详情）
        batch: 'slaughterBatch',
        searchPlaceholder: '请输入物流批次号进行搜索',
        theads: ['物流批次号', '货物名称', '物流日期'],
        protos: ['serial', 'date', 'amount'],
        widths: [26, 26, 26],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        newComponent: [{
            tab: '新建物流批次信息',
            divHidden: true,
            selectUrl2: [['operates', 'id', 'name', true], ['vehicles', 'id', 'number', true], ['drivers', 'id', 'name', true], ['logistics', 'id', 'name', true]],
            selectInit2: [{value: '', label: '操作人员选择'}, {value: '', label: '请选择车辆'}, {value: '', label: '请选择司机'}, {value: '', label: '请选择物流公司'}],
            popNumber2: [8, 3, 4, 5],
            selectWhereArr2: [[{n: 'domain', v: 'delivery'}, {n: 'domain', v: 'all', s: true}]],
            type: 'selectAssoc',
            components: [{
                name: 'datetime',
                type: 'date',
                component: inputDate,
                isNull: true,
                label: '物流日期',
                rule: [{required: true, message: '请输入物流日期'}, {validator: validate2.reDate, message: '请输入物流日期'}]
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: true,
                label: '货物名称',
                placeholder: '',
                rule: {required: true, message: '请输入货物名称'}
            },
            {
                name: 'transportable_type',
                type: 'select',
                component: null,
                isNull: false,
                label: '运输方式',
                placeholder: '必填',
                selectNumber: {self: [3, 4], consign: [5, 6], selve: [7]},
                rule: {required: true, trigger: 'blur', message: '请选择运输方式'},
                options: [['运输方式', '自运', '托运', '自提']]
            },
            {
                name: 'vehicle_id',
                type: 'select',
                component: null,
                isNull: false,
                hiddenSelect: true,
                label: '车牌号',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择运输车辆'},
                options: []
            },
            {
                name: 'driver_id',
                hiddenSelect: true,
                type: 'select',
                component: null,
                isNull: false,
                label: '司机',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择运输司机'},
                options: []
            },
            {
                name: 'logistic_id',
                type: 'select',
                component: null,
                isNull: false,
                hiddenSelect: true,
                label: '物流公司',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择物流公司'},
                options: []
            },
            {
                name: 'number',
                hiddenSelect: true,
                type: 'text',
                component: null,
                isNull: false,
                label: '物流订单号',
                placeholder: '',
                rule: {required: true, message: '请输入物流订单号'}
            },
            {
                name: 'selve_name',
                hiddenSelect: true,
                type: 'text',
                component: null,
                isNull: false,
                label: '提货人',
                placeholder: '',
                rule: {required: true, message: '请输入提货人姓名'}
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '操作人员',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择操作人员'},
                options: []
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
            tab: '编辑物流批次信息',
            selectUrl2: [['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '操作人员选择'}],
            selectWhereArr2: [[{n: 'domain', v: 'delivery'}, {n: 'domain', v: 'all', s: true}]],
            popNumber2: [9],
            components: [{
                name: 'serial',
                type: 'text',
                component: null,
                isNull: false,
                label: '物流批次号',
                placeholder: '必填',
                disabled: true,
                rule: {required: true}
            },
            {
                name: 'datetime',
                type: 'date',
                component: inputDate,
                isNull: true,
                label: '物流日期',
                rule: [{required: true, trigger: 'blur', message: '请输入物流日期'}, {validator: validate2.reDate, message: '请输入物流日期'}]
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: true,
                label: '货物名称',
                rule: {required: true, message: '请输入货物名称'}
            },
            {
                name: 'transportable_type',
                type: 'text',
                component: null,
                isNull: false,
                label: '运输方式',
                placeholder: '必填',
                disabled: true,
                rule: {required: true}
            },
            {
                name: 'vehicle_number',
                hiddenSelect: true,
                type: 'text',
                component: null,
                isNull: false,
                label: '车牌号',
                placeholder: '',
                disabled: true,
                rule: {required: true}
            },
            {
                name: 'driver_name',
                hiddenSelect: true,
                type: 'text',
                component: null,
                isNull: false,
                label: '司机',
                placeholder: '',
                disabled: true,
                rule: {required: true}
            },
            {
                name: 'logistic_name',
                hiddenSelect: true,
                type: 'text',
                component: null,
                isNull: false,
                label: '物流公司',
                placeholder: '',
                disabled: true,
                rule: {required: true}
            },
            {
                name: 'number',
                hiddenSelect: true,
                type: 'text',
                component: null,
                isNull: false,
                label: '物流订单',
                placeholder: '',
                disabled: true,
                rule: {required: true}
            },
            {
                name: 'selve_name',
                hiddenSelect: true,
                type: 'text',
                component: null,
                isNull: false,
                label: '提货人',
                disabled: true,
                placeholder: '',
                rule: {required: true, message: '请输入提货人姓名'}
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '操作人员',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择操作人员'},
                options: []
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
        listComponent: [{
            components: [{
                type: 'date',
                component: 'datePick'
            }]
        }],
        moreComponent: [{value: '状态'}]
    }],
    // 销售管理-销售订单管理
    saleOrder: [{
        settitle: '销售订单管理',
        key: 'plan-beast',
        roleName: ['beast/plan', 0],
        timeshow: true,
        tab: '养殖计划信息',
        url: 'plan',
        paramsIndex: 'beast',
         // 链接批次信息模块数据的桥（养殖批次详情）
        changeDataArr: [{type: { 'fodderuse': '饲养', 'disease': '病疫', 'detection': '检疫', 'detects': '检测', 'clean': '圈舍维护', 'dispose': '无害化', 'come': '出栏' }}],
        searchPlaceholder: '请输入客户名称',
        search: ['query_text', 'type'],
        theads: ['客户名称', '订单日期', '销售员'],
        protos: ['serial', 'date', 'type'],
        widths: [26, 26, 26],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        listComponent: [{
            components: [{
                name: 'plans.type',
                value: '',
                type: 'select',
                component: selectSection,
                options: [{
                    value: '',
                    label: '请选择操作类型'
                },
                {
                    value: 'fodderuse',
                    label: '饲养'
                },
                {
                    value: 'disease',
                    label: '病疫'
                },
                {
                    value: 'detection',
                    label: '检疫'
                },
                {
                    value: 'detects',
                    label: '检测'
                },
                {
                    value: 'dispose',
                    label: '无害化'
                },
                {
                    value: 'come',
                    label: '出栏'
                }]
            },
            {
                type: 'date',
                component: datePick
            }]
        }],
        newComponent: [{
            tab: '新建订单信息',
            hiddenValue: {type: 1},
            selectUrl2: [['deliveries', 'id', 'serial', true], ['clients', 'id', 'name', true], ['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '请选择物流批次号'}, {value: '', label: '请选择销售客户'}, {value: '', label: '请选择销售人员'}],
            popNumber2: [1, 2, 3],
            selectWhereArr2: [[], [], [{n: 'domain', v: 'sell'}, {n: 'domain', v: 'all', s: true}]],
            components: [{
                name: 'datetime',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '订单日期时间',
                placeholder: '',
                disabled: true,
                rule: [{required: true, message: '请输入订单日期时间'}, {validator: validate2.reDate, message: '请输入订单日期时间'}]
            },
            {
                name: 'delivery_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '物流订单',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择物流订单'},
                options: []
            },
            {
                name: 'client_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '客户',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择销售客户'},
                options: []
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '销售员',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择销售人员'},
                options: []
            },
            {
                name: 'money',
                type: 'text',
                component: null,
                isNull: false,
                label: '销售金额',
                placeholder: '',
                rule: [{required: true, trigger: 'blur', message: '请输入销售金额'}, {validator: validate2.reNumber}]
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
            tab: '编辑订单信息',
            hiddenValue: {type: 1},
            selectUrl2: [['deliveries', 'id', 'serial', true], ['clients', 'id', 'name', true], ['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '请选择物流批次号'}, {value: '', label: '请选择销售客户'}, {value: '', label: '请选择销售人员'}],
            popNumber2: [2, 3, 4],
            selectWhereArr2: [[], [], [{n: 'domain', v: 'sell'}, {n: 'domain', v: 'all', s: true}]],
            components: [{
                name: 'serial',
                type: 'text',
                component: null,
                isNull: false,
                label: '销售批次号',
                placeholder: '',
                disabled: true,
                rule: {required: true}
            },
            {
                name: 'datetime',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '订单日期时间',
                placeholder: '',
                disabled: true,
                rule: [{required: true, trigger: 'blur', message: '请输入订单日期时间'}, {validator: validate2.reDate, message: '请输入订单日期时间'}]
            },
            {
                name: 'delivery_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '物流订单',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择物流订单'},
                options: []
            },
            {
                name: 'client_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '客户',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择销售客户'},
                options: []
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '销售员',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择销售人员'},
                options: []
            },
            {
                name: 'money',
                type: 'text',
                component: null,
                isNull: false,
                label: '销售金额',
                placeholder: '',
                rule: [{required: true, trigger: 'blur', message: '请输入销售金额'}, {validator: validate2.reNumber}]
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
