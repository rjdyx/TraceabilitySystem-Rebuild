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
            selectWhereArr2: [[], [], [{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
            components: [{
            // 批次号格式
                name: 'pch',
                type: 'pcSelect',
                label: '批次号',
                placeholder: '请选择批次（必选）',
                // rule: {required: true, trigger: 'blur', type: 'number', message: '请选择饲料'},
                rule: {required: true}, // 这里如果需要验证类型写方法名，否则写null
                options: [
                    {key: '15', value: '15PC158646464648746'},
                    {key: '2', value: '002PC158646464648746'},
                    {key: '3', value: '003PC158646464648746'},
                    {key: '14', value: '14PC158646464648746'},
                    {key: '5', value: '5PC158646464648746'},
                    {key: '16', value: '16PC158646464648746e'},
                    {key: '7', value: '7PC158646464648746'},
                    {key: '8', value: '8PC158646464648746'},
                    {key: '9', value: '9PC158646464648746'}
                ],
                show: false
            },
            {
                name: 'fodder_id',
                type: 'select',
                label: '饲料名称',
                placeholder: '（必选）',
                rule: {required: true}, // 这里如果需要验证类型写方法名，否则写null
                options: [['饲料a', '饲料b', '饲料c']]
            },
            {
                name: 'addition_id',
                type: 'select',
                label: '饲料添加剂',
                placeholder: '（必选）',
                // rule: {required: true, trigger: 'blur', type: 'number', message: '请选择饲料添加剂'},
                rule: {required: true},
                options: [['a', 'b', 'c']]
            },
            {
                name: 'operate_id',
                type: 'select',
                label: '饲养员',
                placeholder: '请选择饲养员（必选）',
                // rule: {required: true, trigger: 'blur', type: 'number', message: '请选择饲养员'},
                rule: {required: true},
                options: [['a', 'b', 'c']]
            },
            {
                name: 'date',
                type: 'date',
                label: '饲养日期',
                placeholder: '（可选）',
                // rule: [{required: true, trigger: 'blur', message: '请输入饲养日期'}, {validator: validate2.reDate, message: '请输入饲养日期'}]
                rule: {required: true}
            },
            {
                name: 'amount',
                type: 'textSelect',
                label: '平均喂养量',
                placeholder: '请输入整数（必填）',
                // rule: [{required: true, trigger: 'blur', message: '请输入饲养量'}, {validator: validate2.reNumber}],
                rule: {required: true, type: 'reNumber', message: '请输入整数'},
                options: [['kg/只', 'kg/头', 'kg/条']]
            },
            {
                name: 'way',
                type: 'text',
                label: '喂养方式',
                placeholder: '(可填)',
                rule: {required: false}
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
            tab: '编辑饲料使用信息',
            selectUrl2: [['fodders', 'id', 'name', true], ['additions', 'id', 'name', true], ['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '饲料选择'}, {value: '', label: '饲料添加剂选择'}, {value: '', label: '饲养人员选择'}],
            popNumber2: [1, 2, 3],
            selectWhereArr2: [[], [], [{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
            components: [{
                name: 'serial',
                type: 'text',
                label: '饲料批次号',
                placeholder: '(必填)',
                disabled: true,
                // rule: {required: false, trigger: 'blur'},
                rule: {required: false}
            },
            {
                name: 'fodder_id',
                type: 'select',
                label: '饲料名称',
                placeholder: '必选',
                // rule: {required: true, trigger: 'blur', type: 'number', message: '请选择饲料'},
                rule: {required: true},
                options: [['a', 'b', 'c']]
            },
            {
                name: 'addition_id',
                type: 'select',
                label: '饲料添加剂',
                placeholder: '必选',
                // rule: {required: true, trigger: 'blur', type: 'number', message: '请选择饲料添加剂'},
                rule: {required: true},
                options: [['a', 'b', 'c']]
            },
            {
                name: 'operate_id',
                type: 'select',
                label: '饲养员',
                placeholder: '请选择饲养员（必选）',
                // rule: {required: true, trigger: 'blur', type: 'number', message: '请选择饲养员'},
                rule: {required: true},
                options: [['a', 'b', 'c']]
            },
            {
                name: 'date',
                type: 'date',
                label: '使用日期',
                placeholder: '（必选）',
                // rule: [{required: true, trigger: 'blur', message: '请输入饲养日期'}, {validator: validate2.reDate, message: '请输入饲养日期'}]
                rule: {required: true}
            },
            {
                name: 'amount',
                type: 'textSelect',
                label: '平均喂养量',
                placeholder: '（必填）',
                // rule: [{required: true, message: '请输入饲养量'}, {validator: validate2.reNumber}],
                rule: {required: true, type: 'reNumber'},
                options: [['kg/只', 'kg/头', 'kg/条']]
            },
            {
                name: 'way',
                type: 'text',
                component: null,
                label: '喂养方式',
                placeholder: '（可填）',
                rule: {required: false}
            },
            {
                name: 'memo',
                type: 'textarea',
                required: true,
                label: '备注信息',
                placeholder: '（可填）',
                rule: {required: false}
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
                    label: '兽药名称',
                    placeholder: '（必选）',
                    // rule: {required: true, trigger: 'blur', type: 'number', message: '请选择兽药'},
                    rule: {required: true},
                    options: [['a', 'b', 'c']]
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    label: '用药日期',
                    placeholder: '（必选）',
                    // rule: [{required: true, message: '请输入用药日期'}, {validator: validate2.reDate, message: '请输入用药日期'}]
                    rule: {required: true}
                },
                {
                    name: 'description',
                    type: 'text',
                    label: '病情描述',
                    placeholder: '(可写)',
                    rule: {required: false}
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    label: '施药人员',
                    placeholder: '（必选）',
                    // rule: {required: true, trigger: 'blur', type: 'number', message: '请选择施药人员'},
                    rule: {required: true},
                    options: [['a', 'b', 'c']]
                },
                {
                    name: 'expert_id',
                    type: 'select',
                    label: '专家',
                    placeholder: '（可选）',
                    rule: {required: false},
                    options: [['a', 'b', 'c']]
                },
                {
                    name: 'amount',
                    type: 'textSelect',
                    label: '平均施药量',
                    placeholder: '请输入正确的数字（必填）',
                    // rule: [{required: true, message: '请输入平均施药量'}, {validator: validate2.reNumber}],
                    rule: {required: true, type: 'reNumber'},
                    options: [['kg/只', 'kg/头', 'kg/条']]
                },
                {
                    name: 'way',
                    type: 'text',
                    label: '治疗方式',
                    placeholder: '（可写）',
                    rule: {required: false}
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    label: '病疫图片',
                    placeholder: '',
                    rule: {required: true}
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    label: '备注信息',
                    placeholder: '（可写）',
                    rule: {required: false}
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
                    label: '病疫批次号',
                    placeholder: '',
                    disabled: true,
                    rule: {required: false}
                },
                {
                    name: 'drug_id',
                    type: 'select',
                    label: '兽药名称',
                    placeholder: '',
                    // rule: {required: true, trigger: 'blur', type: 'number', message: '请选择兽药'},
                    rule: {required: true},
                    options: []
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    label: '用药日期',
                    placeholder: '',
                    // rule: [{required: true, message: '请输入用药日期'}, {validator: validate2.reDate, message: '请输入用药日期'}]
                    rule: {required: false}
                },
                {
                    name: 'description',
                    type: 'text',
                    label: '病情描述',
                    placeholder: '',
                    rule: {required: false}
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    label: '施药人员',
                    placeholder: '',
                    // rule: {required: true, trigger: 'blur', type: 'number', message: '请选择施药人员'},
                    rule: {required: true},
                    options: []
                },
                {
                    name: 'expert_id',
                    type: 'select',
                    label: '专家',
                    placeholder: '',
                    rule: {required: false},
                    options: []
                },
                {
                    name: 'amount',
                    type: 'textSelect',
                    component: inputTextSelect,
                    label: '平均施药量',
                    placeholder: '请输入正确的数字（必填）',
                    // rule: [{required: true, message: '请输入平均施药量'}, {validator: validate2.reNumber}],
                    rule: {required: true, type: 'reNumber'},
                    options: [['kg/只', 'kg/头', 'kg/条']]
                },
                {
                    name: 'way',
                    type: 'text',
                    label: '治疗方式',
                    placeholder: '',
                    rule: {required: false}
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    label: '',
                    placeholder: '',
                    rule: {required: true}
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    label: '备注信息',
                    placeholder: '',
                    rule: {required: false}
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
                label: '检疫日期',
                placeholder: '(必选)',
                rule: {required: true, message: '请输入检疫日期'}
            },
            {
                name: 'organization',
                type: 'text',
                label: '检疫机构',
                placeholder: '（必填）',
                rule: {required: true, message: '请输入检疫机构'}
            },
            {
                name: 'name',
                type: 'text',
                label: '检疫项目名称',
                placeholder: '(必填)',
                rule: {required: true, message: '请输入检疫项目名称'}
            },
            {
                name: 'expert_id',
                type: 'select',
                label: '指导专家',
                placeholder: '(可选)',
                rule: {required: false},
                options: []
            },
            {
                name: 'operate_id',
                type: 'select',
                label: '操作人员',
                placeholder: '（必选）',
                rule: {required: true, message: '请选择操作人员'},
                options: [['a', 'b', 'c']]
            },
            {
                name: 'content',
                type: 'text',
                label: '检疫内容',
                placeholder: '（可填）',
                rule: {required: false}
            },
            {
                name: 'result',
                type: 'select',
                label: '检疫结果',
                placeholder: '(可选)',
                rule: {required: false},
                options: [['合格', '不合格']]
            },
            {
                name: 'check',
                type: 'text',
                label: '审批人',
                placeholder: '（可填）',
                rule: {required: false}
            },
            {
                name: 'img',
                type: 'file',
                label: '检疫报告图片',
                placeholder: '',
                rule: {required: false}
            },
            {
                name: 'memo',
                type: 'textarea',
                label: '备注信息',
                placeholder: '(可填)',
                rule: {required: false}
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
                label: '检疫批次号',
                placeholder: '',
                disabled: true,
                rule: {required: false}
            },
            {
                name: 'date',
                type: 'date',
                label: '检疫日期',
                placeholder: '(必选)',
                rule: {required: true, message: '请输入检疫日期'}
            },
            {
                name: 'organization',
                type: 'text',
                label: '检疫机构',
                placeholder: '（必填）',
                rule: {required: true, message: '请输入检疫机构'}
            },
            {
                name: 'name',
                type: 'text',
                label: '检疫项目名称',
                placeholder: '(必填)',
                rule: {required: true, message: '请输入检疫项目名称'}
            },
            {
                name: 'expert_id',
                type: 'select',
                label: '指导专家',
                placeholder: '(可选)',
                rule: {required: false},
                options: []
            },
            {
                name: 'operate_id',
                type: 'select',
                label: '操作人员',
                placeholder: '（必选）',
                rule: {required: true, message: '请选择操作人员'},
                options: [['a', 'b', 'c']]
            },
            {
                name: 'content',
                type: 'text',
                label: '检疫内容',
                placeholder: '（可填）',
                rule: {required: false}
            },
            {
                name: 'result',
                type: 'select',
                label: '检疫结果',
                placeholder: '(可选)',
                rule: {required: false},
                options: [['合格', '不合格']]
            },
            {
                name: 'check',
                type: 'text',
                label: '审批人',
                placeholder: '（可填）',
                rule: {required: false}
            },
            {
                name: 'img',
                type: 'file',
                label: '检疫报告图片',
                placeholder: '',
                rule: {required: false}
            },
            {
                name: 'memo',
                type: 'textarea',
                label: '备注信息',
                placeholder: '(可填)',
                rule: {required: false}
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
                label: '检测日期',
                placeholder: '(必填)',
                disabled: true,
                rule: {required: true, message: '请输入检测日期'}
            },
            {
                name: 'operate_id',
                type: 'select',
                label: '负责人',
                placeholder: '（必选）',
                rule: {required: true, message: '请选择负责人'},
                options: [['a', 'b']]
            },
            {
                name: 'name',
                type: 'text',
                label: '检测名称',
                placeholder: '(必填)',
                rule: {required: true, message: '请输入检测项目名称'}
            },
            {
                name: 'result',
                type: 'select',
                label: '检测结果',
                placeholder: '（必选）',
                rule: {required: true},
                options: [['合格', '不合格']]
            },
            {
                name: 'content',
                type: 'text',
                label: '检测内容',
                placeholder: '（可选）',
                rule: {required: false}
            },
            {
                name: 'organization',
                type: 'text',
                label: '检测机构',
                placeholder: '(可选)',
                rule: {required: false}
            },
            {
                name: 'method',
                type: 'text',
                label: '处理方法',
                placeholder: '(可选)',
                rule: {required: false}
            },
            {
                name: 'img',
                type: 'file',
                label: '检测图片报告',
                placeholder: '',
                rule: {required: false}
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
            tab: '编辑检验检测信息',
            selectUrl2: [['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '检测人选择'}],
            selectWhereArr2: [[{n: 'domain', v: 'packb'}, {n: 'domain', v: 'all', s: true}]],
            popNumber2: [2],
            hasImg: true,
            components: [{
                name: 'serial',
                type: 'text',
                label: '检测批次号',
                placeholder: '',
                disabled: true,
                rule: {required: true}
            },
            {
                name: 'date',
                type: 'date',
                label: '检测日期',
                placeholder: '(必填)',
                disabled: true,
                rule: {required: true, message: '请输入检测日期'}
            },
            {
                name: 'operate_id',
                type: 'select',
                label: '负责人',
                placeholder: '（必选）',
                rule: {required: true, message: '请选择负责人'},
                options: [['a', 'b']]
            },
            {
                name: 'name',
                type: 'text',
                label: '检测名称',
                placeholder: '(必填)',
                rule: {required: true, message: '请输入检测项目名称'}
            },
            {
                name: 'result',
                type: 'select',
                label: '检测结果',
                placeholder: '（必选）',
                rule: {required: true},
                options: [['合格', '不合格']]
            },
            {
                name: 'content',
                type: 'text',
                label: '检测内容',
                placeholder: '（可选）',
                rule: {required: false}
            },
            {
                name: 'organization',
                type: 'text',
                label: '检测机构',
                placeholder: '(可选)',
                rule: {required: false}
            },
            {
                name: 'method',
                type: 'text',
                label: '处理方法',
                placeholder: '(可选)',
                rule: {required: false}
            },
            {
                name: 'img',
                type: 'file',
                label: '检测图片报告',
                placeholder: '',
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
                label: '操作日期',
                placeholder: '（必选）',
                rule: {required: true, message: '请输入操作日期'}
            },
            {
                name: 'operate_id',
                type: 'select',
                label: '操作人',
                placeholder: '（必选）',
                rule: {required: true, message: '请选择操作人'},
                options: [['a', 'b']]
            },
            {
                name: 'expert_id',
                type: 'select',
                label: '专家',
                placeholder: '（可选）',
                rule: {required: false, message: '请选择专家'},
                options: [['a', 'b']]
            },
            {
                name: 'name',
                type: 'text',
                label: '标题',
                placeholder: '（必填）',
                rule: {required: true, message: '请输入标题'}
            },
            {
                name: 'content',
                type: 'text',
                label: '操作内容',
                placeholder: '（必填）',
                rule: {required: true, message: '请输入操作内容'}
            },
            {
                name: 'img',
                type: 'file',
                label: '圈舍维护图片',
                placeholder: '',
                rule: {required: false}
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
            tab: '编辑圈舍维护信息',
            selectUrl2: [['experts', 'id', 'name', true], ['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '请选择专家'}, {value: '', label: '请选择操作人'}],
            popNumber2: [3, 2],
            selectWhereArr2: [[{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}], [{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
            hasImg: true,
            components: [{
                name: 'serial',
                type: 'text',
                label: '圈舍批次号',
                placeholder: '',
                rule: {required: true, trigger: 'blur'},
                disabled: true
            },
            {
                name: 'date',
                type: 'date',
                label: '操作日期',
                placeholder: '（必选）',
                rule: {required: true, message: '请输入操作日期'}
            },
            {
                name: 'operate_id',
                type: 'select',
                label: '操作人',
                placeholder: '（必选）',
                rule: {required: true, message: '请选择操作人'},
                options: [['a', 'b']]
            },
            {
                name: 'expert_id',
                type: 'select',
                label: '专家',
                placeholder: '（可选）',
                rule: {required: false, message: '请选择专家'},
                options: [['a', 'b']]
            },
            {
                name: 'name',
                type: 'text',
                label: '标题',
                placeholder: '（必填）',
                rule: {required: true, message: '请输入标题'}
            },
            {
                name: 'content',
                type: 'text',
                label: '操作内容',
                placeholder: '（必填）',
                rule: {required: true, message: '请输入操作内容'}
            },
            {
                name: 'img',
                type: 'file',
                label: '圈舍维护图片',
                placeholder: '',
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
                label: '分类',
                placeholder: '（必填）',
                rule: {required: true, message: '请选择分类名称'},
                options: [['a', 'b']]
            },
            {
                name: 'domain',
                type: 'select',
                label: '模块领域',
                placeholder: '（必填）',
                rule: {required: true, message: '请选择模块领域'},
                options: [['a', 'b']]
            },
            {
                name: 'name',
                type: 'text',
                label: '产品名称',
                placeholder: '（必填）',
                rule: {required: true, message: '请输入产品名称'}
            },
            {
                name: 'enforce_standard',
                type: 'text',
                label: '执行标准',
                placeholder: '（可填）',
                rule: {required: false}
            },
            {
                name: 'marque',
                type: 'text',
                label: '商品型号',
                placeholder: '（可填）',
                rule: {required: false}
            },
            {
                name: 'description',
                type: 'text',
                label: '商品简介',
                placeholder: '（可填）',
                rule: {required: false}
            },
            {
                name: 'specification',
                type: 'text',
                label: '包装规格',
                placeholder: '（可填）',
                rule: {required: false}
            },
            {
                name: 'expiration_date',
                type: 'text',
                label: '保质期',
                placeholder: '（可填）',
                rule: {required: false}
            },
            {
                name: 'edible_method',
                type: 'text',
                label: '食用方法',
                placeholder: '（可填）',
                rule: {required: false}
            },
            {
                name: 'storage_means',
                type: 'text',
                label: '存储方法',
                placeholder: '（可填）',
                rule: {required: false}
            },
            {
                name: 'burdening_info',
                type: 'text',
                label: '配料信息',
                placeholder: '（可填）',
                rule: {required: false}
            },
            {
                name: 'img',
                type: 'file',
                label: '产品图片',
                placeholder: '（可填）',
                rule: {required: false}
            },
            {
                name: 'memo',
                type: 'textarea',
                label: '备注信息',
                placeholder: '（可填）',
                rule: {required: false}
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
                label: '分类',
                placeholder: '（必填）',
                rule: {required: true, message: '请选择分类名称'},
                options: [['a', 'b']]
            },
            {
                name: 'domain',
                type: 'select',
                label: '模块领域',
                placeholder: '（必填）',
                rule: {required: true, message: '请选择模块领域'},
                options: [['a', 'b']]
            },
            {
                name: 'name',
                type: 'text',
                label: '产品名称',
                placeholder: '（必填）',
                rule: {required: true, message: '请输入产品名称'}
            },
            {
                name: 'enforce_standard',
                type: 'text',
                label: '执行标准',
                placeholder: '（可填）',
                rule: {required: false}
            },
            {
                name: 'marque',
                type: 'text',
                label: '商品型号',
                placeholder: '（可填）',
                rule: {required: false}
            },
            {
                name: 'description',
                type: 'text',
                label: '商品简介',
                placeholder: '（可填）',
                rule: {required: false}
            },
            {
                name: 'specification',
                type: 'text',
                label: '包装规格',
                placeholder: '（可填）',
                rule: {required: false}
            },
            {
                name: 'expiration_date',
                type: 'text',
                label: '保质期',
                placeholder: '（可填）',
                rule: {required: false}
            },
            {
                name: 'edible_method',
                type: 'text',
                label: '食用方法',
                placeholder: '（可填）',
                rule: {required: false}
            },
            {
                name: 'storage_means',
                type: 'text',
                label: '存储方法',
                placeholder: '（可填）',
                rule: {required: false}
            },
            {
                name: 'burdening_info',
                type: 'text',
                label: '配料信息',
                placeholder: '（可填）',
                rule: {required: false}
            },
            {
                name: 'img',
                type: 'file',
                label: '产品图片',
                placeholder: '（可填）',
                rule: {required: false}
            },
            {
                name: 'memo',
                type: 'textarea',
                label: '备注信息',
                placeholder: '（可填）',
                rule: {required: false}
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
        key: 'detect_pk',
        roleName: ['beast/detect_pk', 0],
        timeshow: true,
        rightMenu: true,
        paramsIndex: 'beast',
        url: 'detect_pk',
        // 链接批次信息模块数据的桥（养殖批次详情）
        batch: 'beastDetectPkBatch',
        searchPlaceholder: '请输入检测名称进行搜索',
        theads: ['检测项目名称', '检测日期', '检测人'],
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
        paramsIndex: 'beast',
        roleName: ['packb/code', 0],
        url: 'code',
        searchPlaceholder: '请输入产品溯源码进行搜索',
        theads: ['产品溯源码', '产品名称', '生产日期'],
        protos: ['code', 'product_name', 'date'],
        widths: [26, 26, 26],
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
        }]
    }],
    // 种植管理-种植事物管理
    plantThing: [
        {
            timeshow: true,
            rightMenu: true,
            tabshow: true,
            unite: 'plantTo',
            key: 'fertilize',
            roleName: ['plant/basic', 0],
            tab: '施肥信息',
            url: 'fertilize',
            batch: 'fertilizeBatch',
            searchPlaceholder: '请输入肥料名称进行搜索',
            theads: ['肥料名称', '施肥日期', '施肥人'],
            protos: ['manure_name', 'date', 'operate_name'],
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
            rightMenu: true,
            roleName: ['plant/basic', 0],
            key: 'spray',
            unite: 'plantTo',
            tab: '施药信息',
            url: 'spray',
            batch: 'sprayBatch',
            searchPlaceholder: '请输入农药名称进行搜索',
            theads: ['农药名称', '施药日期', '施药人'],
            protos: ['medicament_name', 'date', 'operate_name'],
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
            rightMenu: true,
            tabshow: true,
            key: 'detect',
            unite: 'plantTo',
            roleName: ['plant/basic', 0],
            tab: '检测信息',
            url: 'detect',
            paramsIndex: 'plant',
            batch: 'cultivateDetectBatch',
            searchPlaceholder: '请输入检测项目名称搜索',
            theads: ['检测项目名称', '检测日期', '操作人'],
            protos: ['name', 'date', 'operate_name'],
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
            rightMenu: true,
            tabshow: true,
            key: 'farming',
            unite: 'plantTo',
            tab: '农事信息',
            roleName: ['plant/basic', 0],
            url: 'farming',
            batch: 'cultivateFarmingBatch',
            searchPlaceholder: '请输入操作内容进行搜索',
            theads: ['操作内容', '操作日期', '操作人'],
            protos: ['content', 'date', 'operate_name'],
            widths: [26, 26, 26],
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
            key: 'harvest',
            tab: '采收信息',
            roleName: ['plant/basic', 0],
            url: 'harvest',
            searchPlaceholder: '请输入采收批次号进行搜索',
            theads: ['采收批次号', '种植批次号', '采收日期'],
            protos: ['serial', 'cultivate_serial', 'date'],
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
            key: 'grow',
            tab: '生长图片',
            roleName: ['plant/basic', 0],
            url: 'grow',
            searchPlaceholder: '请输入标题进行搜索',
            theads: ['标题', '日期', '图片'],
            protos: ['name', 'date', 'img'],
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
        settitle: '加工批次检测',
        key: 'plant_detect_pk',
        roleName: ['plant/detect_pk', 0],
        timeshow: true,
        rightMenu: true,
        paramsIndex: 'plant',
        url: 'detect_pk',
        batch: 'plantDetectPkBatch',
        searchPlaceholder: '请输入检测名称进行搜索',
        theads: ['检测项目名称', '检测日期', '检测人'],
        protos: ['name', 'date', 'operate_name'],
        widths: [26, 26, 26],
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
        }]
    }],
    // 果蔬加工管理-产品溯源码管理
    vegetableTrace: [{
        settitle: '产品溯源码管理',
        timeshow: true,
        rightMenu: false,
        key: 'code',
        paramsIndex: 'plant',
        roleName: ['packb/code', 0],
        url: 'code',
        searchPlaceholder: '请输入产品溯源码进行搜索',
        theads: ['产品溯源码', '产品名称', '生产日期'],
        protos: ['code', 'product_name', 'date'],
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
    // 物流运输管理-物流批次管理
    expressManage: [{
        settitle: '物流批次管理',
        key: 'delivery',
        roleName: ['delivery', 0],
        timeshow: true,
        tab: '物流信息信息',
        url: 'delivery',
        searchPlaceholder: '请输入物流批次号进行搜索',
        theads: ['物流批次号', '货物名称', '物流日期'],
        protos: ['serial', 'name', 'datetime'],
        widths: [26, 26, 26],
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
        }]
    }],
    // 销售管理-销售订单管理
    saleOrder: [{
        settitle: '销售订单管理',
        key: 'sell',
        timeshow: true,
        rightMenu: true,
        url: 'sell',
        batch: 'saleBatch',
        theads: ['客户名称', '订单日期', '销售员'],
        protos: ['client_name', 'datetime', 'operate_name'],
        widths: [26, 26, 26],
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
