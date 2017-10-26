import importBtn from 'components/public/import-btn.vue'
import newbuildBtn from 'components/public/newbuild-btn.vue'
import output from 'components/public/output.vue'
import selectSection from 'components/public/select-section.vue'
import datePick from 'components/public/datePick.vue'
import inputDate from 'components/public/inputDate.vue'
import inputFile from 'components/public/inputFile.vue'
import inputTextSelect from 'components/public/inputTextSelect.vue'
import Qrcode from 'components/public/Qrcode.vue'

import validate2 from 'utils/validate2.js'

export let beastDetectManage = {
    // 畜禽检测管理
    beastDetectManage: [{
        settitle: '检测管理',
        key: 'detect',
        roleName: ['beast/detect', 0],
        tab: '检测信息',
        url: 'detect',
        paramsIndex: 'beast',
        // 链接批次信息模块数据的桥（养殖批次详情）
        batch: 'beastDetectBatch',
        searchPlaceholder: '请输入批次号进行搜索',
        selectSearch: ['detects.weather'],
        changeDataArr: [{result: {0: '不合格', 1: '合格'}}],
        theads: ['检测批次号', '检测日期', '检测项目名称', '检测内容', '检测部门', '检测结果', '天气', '专家', '操作人员', '检测报告图片', '备注'],
        protos: ['serial', 'date', 'name', 'content', 'department', 'result', 'weather', 'expert_name', 'operate_name', 'img', 'memo'],
        widths: [60, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        newComponent: [{
            tab: '新建检测信息',
            hiddenValue: {type: 'beast'},
            selectUrl2: [['experts', 'id', 'name', true], ['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '请选择专家'}, {value: '', label: '请选择操作人'}],
            popNumber2: [1, 2],
            selectWhereArr2: [[{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}], [{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
            hasImg: true,
            components: [{
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '检测日期',
                placeholder: '',
                rule: [{required: true, message: '请输入检测日期'}, {validator: validate2.reDate, message: '请输入检测日期'}]
            },
            {
                name: 'expert_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '指导专家',
                placeholder: '请选择专家',
                rule: null,
                options: []
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '操作人员',
                placeholder: '请选择操作人',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择操作人'},
                options: []
            },
            {
                name: 'weather',
                type: 'select',
                component: null,
                isNull: true,
                label: '天气',
                placeholder: '请选择天气情况',
                rule: {required: true, trigger: 'blur', message: '请选择天气情况'},
                options: [{
                    value: '晴',
                    label: '晴'
                },
                {
                    value: '雨',
                    label: '雨'
                },
                {
                    value: '雪',
                    label: '雪'
                },
                {
                    value: '阴',
                    label: '阴'
                },
                {
                    value: '其它',
                    label: '其它'
                }
                ]
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测项目名称',
                placeholder: '',
                rule: {required: true, trigger: 'blur', message: '请输入检测项目名称'}
            },
            {
                name: 'content',
                type: 'textarea',
                component: null,
                isNull: false,
                label: '检测内容',
                placeholder: '',
                rule: {required: true, trigger: 'blur', message: '请输入检测内容'}
            },
            {
                name: 'department',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测部门',
                placeholder: '',
                rule: {required: false, trigger: 'blur'}
            },
            {
                name: 'img',
                type: 'file',
                component: inputFile,
                isNull: true,
                label: '检测报告图片',
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
            tab: '编辑检测信息',
            hiddenValue: {type: 'beast'},
            selectUrl2: [['experts', 'id', 'name', true], ['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '请选择专家'}, {value: '', label: '请选择操作人'}],
            popNumber2: [2, 3],
            selectWhereArr2: [[{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}], [{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
            hasImg: true,
            components: [{
                name: 'serial',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测批次号',
                placeholder: '',
                disabled: true,
                rule: {required: null}
            },
            {
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '检测日期',
                placeholder: '',
                rule: [{required: true, message: '请输入检测日期'}, {validator: validate2.reDate, message: '请输入检测日期'}]
            },
            {
                name: 'expert_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '指导专家',
                placeholder: '请选择专家',
                rule: null,
                options: []
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '检测人员',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择检测人员'},
                options: []
            },
            {
                name: 'weather',
                type: 'select',
                component: null,
                isNull: true,
                label: '天气',
                placeholder: '请选择天气情况',
                rule: {required: true, trigger: 'blur', message: '请选择天气情况'},
                options: [{
                    value: '晴',
                    label: '晴'
                },
                {
                    value: '雨',
                    label: '雨'
                },
                {
                    value: '雪',
                    label: '雪'
                },
                {
                    value: '阴',
                    label: '阴'
                },
                {
                    value: '其它',
                    label: '其它'
                }
                ]
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测项目名称',
                placeholder: '',
                rule: {required: true, trigger: 'blur', message: '请输入检测项目名称'}
            },
            {
                name: 'content',
                type: 'textarea',
                component: null,
                isNull: false,
                label: '检测内容',
                placeholder: '',
                rule: {required: true, trigger: 'blur', message: '请输入检测内容'}
            },
            {
                name: 'department',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测部门',
                placeholder: '',
                rule: {required: false, trigger: 'blur', message: '请输入检测部门'}
            },
            {
                name: 'img',
                type: 'file',
                component: inputFile,
                isNull: true,
                label: '检测报告图片',
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
        listComponent: [{
            components: [{
                type: 'date',
                component: 'datePick'
            }]
        }]
    }]
}
