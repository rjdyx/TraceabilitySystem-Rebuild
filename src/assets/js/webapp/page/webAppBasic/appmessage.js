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
    // 种植管理
    // 施药管理
    fertilize: [
        {
            unite: 'plantTo',
            key: 'fertilize',
            timeshow: true,
            rightMenu: true,
            roleName: ['plant/basic', 0],
            url: 'fertilize',
            batch: 'fertilizeBatch',
            searchPlaceholder: '请输入肥料名称进行搜索',
            theads: ['肥料名称', '施肥日期', '施肥人'],
            protos: ['manure_name', 'date', 'operate_name'],
            widths: [26, 26, 26],
            newComponent: [{
                plan: true,
                planString: '请选择施肥计划',
                planArr: {'manure_name': '肥料名称', 'operate_name': '施肥人', 'amount': '施肥量', 'unit': '单位'},
                planBox: {'manure_id': 'manure_name', 'operate_id': 'operate_name', 'unit': 'unit'},
                planIds: 'cultivate_ids',
                planPosition: [0, 1, 2, 3, 4],
                tab: '新建施肥信息',
                checkBoxUrl: [['cultivates', 'id', 'serial', 'check'], ['manures', 'id', 'name', 'radio'], ['operates', 'id', 'name', 'radio']],
                selectValue: [[], [], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}]],
                checkBoxPosition: [0, 1, 4],
                components: [{
                    name: 'cultivate_ids',
                    type: 'pcSelect',
                    label: '种植批次号',
                    placeholder: '批次号',
                    rule: {required: true}, // 这里如果需要验证类型写方法名，否则写null
                    options: [],
                    show: false
                },
                {
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
                    name: 'operate_id',
                    type: 'select',
                    label: '施肥人',
                    placeholder: '（必选）',
                    rule: {required: true},
                    options: [],
                    optionskeys: [],
                    show: false
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
            }],
            editComponent: [{
                tab: '编辑施肥信息',
                arrBox: {'manure_id': 'manure_name', 'operate_id': 'operate_name', 'unit': 'unit'},
                checkBoxUrl: [['manures', 'id', 'name', 'radio'], ['operates', 'id', 'name', 'radio']],
                selectValue: [[], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}]],
                checkBoxPosition: [0, 3],
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
                    name: 'operate_id',
                    type: 'select',
                    label: '施肥人',
                    placeholder: '（必选）',
                    rule: {required: true},
                    options: [],
                    optionskeys: [],
                    show: false
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
        }
    ],
    // 检测信息
    detect: [
        {
            timeshow: true,
            rightMenu: true,
            key: 'detect',
            unite: 'plantTo',
            roleName: ['plant/basic', 0],
            url: 'detect',
            paramsIndex: 'plant',
            batch: 'cultivateDetectBatch',
            searchPlaceholder: '请输入检测项目名称搜索',
            changeDataArr: [{result: {0: '不合格', 1: '合格'}}],
            theads: ['检测项目名称', '检测日期', '操作人'],
            protos: ['name', 'date', 'operate_name'],
            widths: [26, 26, 26],
            newComponent: [{
                tab: '新建检验检测信息',
                checkBoxUrl: [['cultivates', 'id', 'serial', 'check'], ['operates', 'id', 'name', 'radio']],
                selectValue: [[], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}]],
                checkBoxPosition: [0, 2],
                hasImg: true,
                hiddenValue: {type: 'plant'},
                components: [{
                    name: 'cultivate_ids',
                    type: 'pcSelect',
                    label: '种植批次号',
                    placeholder: '批次号',
                    rule: {required: true}, // 这里如果需要验证类型写方法名，否则写null
                    options: [],
                    show: false
                },
                {
                    name: 'date',
                    type: 'date',
                    label: '检测日期',
                    placeholder: '（必填）',
                    rule: {required: true, message: '请输入检测日期'}
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    label: '负责人',
                    placeholder: '（必选）',
                    rule: {required: true},
                    options: [],
                    optionskeys: [],
                    show: false
                },
                {
                    name: 'name',
                    type: 'select',
                    label: '检测项目名称',
                    placeholder: '（必填）',
                    rule: {required: true},
                    options: [['土壤检测', '水质检测', '大气污染检测', '农药残留检测', '其他检测']],
                    optionskeys: [['土壤检测', '水质检测', '大气污染检测', '农药残留检测', '其他检测']],
                    show: false
                },
                {
                    name: 'result',
                    type: 'select',
                    label: '检测结果',
                    placeholder: '（必选）',
                    rule: {required: true},
                    options: [['合格', '不合格']],
                    optionskeys: [[1, 0]]
                },
                {
                    name: 'content',
                    type: 'text',
                    label: '检测内容',
                    placeholder: '（可选）',
                    rule: {required: false}
                },
                {
                    name: 'department',
                    type: 'text',
                    label: '检测机构',
                    placeholder: '（可选）',
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
                arrBox: {'operate_id': 'operate_name', 'name': 'name', 'result': 'result'},
                checkBoxUrl: [['operates', 'id', 'name', 'radio']],
                selectValue: [[{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}]],
                checkBoxPosition: [1],
                hasImg: true,
                components: [{
                    name: 'date',
                    type: 'date',
                    label: '检测日期',
                    placeholder: '（必填）',
                    rule: {required: true}
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    label: '负责人',
                    placeholder: '（必选）',
                    rule: {required: true},
                    options: [],
                    optionskeys: []
                },
                {
                    name: 'name',
                    type: 'select',
                    label: '检测项目名称',
                    placeholder: '（必填）',
                    rule: {required: true},
                    options: [['土壤检测', '水质检测', '大气污染检测', '农药残留检测', '其他检测']],
                    optionskeys: [['土壤检测', '水质检测', '大气污染检测', '农药残留检测', '其他检测']],
                    show: false
                },
                {
                    name: 'result',
                    type: 'select',
                    label: '检测结果',
                    placeholder: '（必选）',
                    rule: {required: true},
                    options: [['合格', '不合格']],
                    optionskeys: [[1, 0]]
                },
                {
                    name: 'content',
                    type: 'text',
                    label: '检测内容',
                    placeholder: '（可选）',
                    rule: {required: false}
                },
                {
                    name: 'department',
                    type: 'text',
                    label: '检测机构',
                    placeholder: '（可选）',
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
                    placeholder: '（可选）',
                    rule: {required: false}
                }]
            }]
        }
    ],
    // 农事管理
    farming: [
        {
            timeshow: true,
            rightMenu: true,
            key: 'farming',
            unite: 'plantTo',
            roleName: ['plant/basic', 0],
            url: 'farming',
            batch: 'cultivateFarmingBatch',
            searchPlaceholder: '请输入操作内容进行搜索',
            theads: ['操作内容', '操作日期', '操作人'],
            protos: ['content', 'date', 'operate_name'],
            widths: [26, 26, 26],
            newComponent: [{
                tab: '新建农事信息',
                checkBoxUrl: [['cultivates', 'id', 'serial', 'check'], ['operates', 'id', 'name', 'radio']],
                selectValue: [[], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}]],
                checkBoxPosition: [0, 2],
                components: [{
                    name: 'cultivate_ids',
                    type: 'pcSelect',
                    label: '种植批次号',
                    placeholder: '批次号',
                    rule: {required: true}, // 这里如果需要验证类型写方法名，否则写null
                    options: [],
                    show: false
                },
                {
                    name: 'date',
                    type: 'date',
                    label: '操作日期',
                    placeholder: '（必选）',
                    rule: {required: true}
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    label: '操作人',
                    placeholder: '（必选）',
                    rule: {required: true},
                    options: [],
                    optionskeys: [],
                    show: false
                },
                {
                    name: 'content',
                    type: 'text',
                    label: '操作内容',
                    placeholder: '可填',
                    rule: {required: true}
                },
                {
                    name: 'method',
                    type: 'text',
                    label: '操作方法',
                    placeholder: '可填',
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
                tab: '编辑农事信息',
                arrBox: {'operate_id': 'operate_name'},
                checkBoxUrl: [['operates', 'id', 'name', 'radio']],
                selectValue: [[{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}]],
                checkBoxPosition: [1],
                components: [{
                    name: 'date',
                    type: 'date',
                    label: '操作日期',
                    placeholder: '（必选）',
                    rule: {required: true}
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    label: '操作人',
                    placeholder: '（必选）',
                    rule: {required: true},
                    options: [],
                    optionskeys: [],
                    show: false
                },
                {
                    name: 'content',
                    type: 'text',
                    label: '操作内容',
                    placeholder: '可填',
                    rule: {required: true}
                },
                {
                    name: 'method',
                    type: 'text',
                    label: '操作方法',
                    placeholder: '可填',
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
        }
    ],
    // 生长图片
    growImg: [
        {
            timeshow: true,
            rightMenu: false,
            key: 'grow',
            roleName: ['plant/basic', 0],
            url: 'grow',
            searchPlaceholder: '请输入标题进行搜索',
            theads: ['标题', '日期', '图片'],
            protos: ['name', 'date', 'img'],
            widths: [26, 26, 26],
            newComponent: [{
                tab: '新建生长过程信息',
                checkBoxUrl: [['cultivates', 'id', 'serial', 'radio']],
                checkBoxPosition: [0],
                hasImg: true,
                components: [{
                    name: 'cultivate_id',
                    type: 'select',
                    label: '所属种植批次',
                    placeholder: '批次号',
                    rule: {required: true},
                    options: [],
                    optionskeys: [],
                    show: false
                },
                {
                    name: 'name',
                    type: 'text',
                    label: '图片标题',
                    placeholder: '（必填）',
                    rule: {required: true}
                },
                {
                    name: 'date',
                    type: 'date',
                    label: '上传日期',
                    placeholder: '（必填）',
                    rule: {required: true}
                },
                {
                    name: 'desc',
                    type: 'textarea',
                    label: '特征描述',
                    placeholder: '（必填）',
                    rule: {required: true}
                },
                {
                    name: 'img',
                    type: 'file',
                    label: '图片',
                    placeholder: '（必填）',
                    rule: {required: true}
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
                tab: '编辑生长过程信息',
                hasImg: true,
                components: [{
                    name: 'serial',
                    type: 'text',
                    label: '所属种植批次',
                    rule: {required: true},
                    disabled: true
                },
                {
                    name: 'name',
                    type: 'text',
                    label: '图片标题',
                    placeholder: '（必填）',
                    rule: {required: true}
                },
                {
                    name: 'date',
                    type: 'date',
                    label: '上传日期',
                    placeholder: '（必填）',
                    rule: {required: true}
                },
                {
                    name: 'desc',
                    type: 'textarea',
                    label: '特征描述',
                    placeholder: '（必填）',
                    rule: {required: true}
                },
                {
                    name: 'img',
                    type: 'file',
                    label: '图片',
                    placeholder: '（必填）',
                    rule: {required: true}
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    label: '备注信息',
                    placeholder: '（可填）',
                    rule: {required: false}
                }]
            }]
        }
    ],
    // 采制管理
    // 采收管理
    harvest: [
        {
            timeshow: true,
            rightMenu: false,
            key: 'harvest',
            unite: 'plantTo',
            url: 'harvest',
            searchPlaceholder: '请输入采收批次号进行搜索',
            theads: ['采收批次号', '种植批次号', '采收日期'],
            protos: ['serial', 'cultivate_serial', 'date'],
            widths: [26, 26, 26],
            newComponent: [{
                tab: '新建采收信息',
                plan: true,
                planArr: {'cultivate_serial': '种植批次号', 'operate_name': '采收人', 'amount': '采收量', 'unit': '单位'},
                planBox: {'cultivate_id': 'cultivate_serial', 'operate_id': 'operate_name', 'unit': 'unit'},
                checkBoxUrl: [['cultivates', 'id', 'serial', 'radio'], ['operates', 'id', 'name', 'radio']],
                selectValue: [[], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}]],
                checkBoxPosition: [1, 3],
                components: [{
                    name: 'date',
                    type: 'date',
                    label: '操作日期',
                    placeholder: '（必选）',
                    rule: {required: true}
                },
                {
                    name: 'cultivate_id',
                    type: 'select',
                    label: '种植批次号',
                    placeholder: '（必选）',
                    rule: {required: true},
                    options: [],
                    optionskeys: [],
                    show: false
                },
                {
                    name: 'amount',
                    type: 'textSelect',
                    label: '采收数量',
                    placeholder: '请填写数字（必填）',
                    options: [['kg', '个', '箱']],
                    optionskeys: [['kg', '个', '箱']],
                    rule: {required: true, type: 'reNumber', message: '请输入整数'},
                    show: false
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    label: '采收人',
                    placeholder: '（必选）',
                    rule: {required: true},
                    options: [],
                    optionskeys: [],
                    show: false
                },
                {
                    name: 'department',
                    type: 'text',
                    label: '入库部门',
                    placeholder: '可填',
                    rule: {required: false}
                },
                {
                    name: 'position',
                    type: 'text',
                    label: '存放仓库位置',
                    placeholder: '可填',
                    rule: {required: false}
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    label: '备注信息',
                    placeholder: '可填',
                    rule: {required: false}
                }]
            }],
            editComponent: [{
                tab: '编辑采收信息',
                arrBox: {'operate_id': 'operate_name', 'unit': 'unit'},
                checkBoxUrl: [['operates', 'id', 'name', 'radio']],
                checkBoxPosition: [3],
                components: [{
                    name: 'date',
                    type: 'date',
                    label: '操作日期',
                    placeholder: '（必选）',
                    rule: {required: true}
                },
                {
                    name: 'cultivate_serial',
                    type: 'text',
                    label: '种植批次号',
                    placeholder: '（必选）',
                    disabled: true,
                    rule: {required: true}
                },
                {
                    name: 'amount',
                    type: 'textSelect',
                    label: '采收数量',
                    placeholder: '请填写数字（必填）',
                    options: [['kg', '个', '箱']],
                    optionskeys: [['kg', '个', '箱']],
                    rule: {required: true, type: 'reNumber', message: '请输入整数'},
                    show: false
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    label: '采收人',
                    placeholder: '（必选）',
                    rule: {required: true},
                    options: [],
                    optionskeys: [],
                    show: false
                },
                {
                    name: 'department',
                    type: 'text',
                    label: '入库部门',
                    placeholder: '可填',
                    rule: {required: false}
                },
                {
                    name: 'position',
                    type: 'text',
                    label: '存放仓库位置',
                    placeholder: '可填',
                    rule: {required: false}
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    label: '备注信息',
                    placeholder: '可填',
                    rule: {required: false}
                }]
            }]
        }
    ]
}
