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

export let planManage = {
    // 养殖计划管理
    planManage: [{
        settitle: '养殖计划管理',
        key: 'plan-beast',
        roleName: ['beast/plan', 0],
        tab: '养殖计划信息',
        url: 'plan',
        paramsIndex: 'beast',
         // 链接批次信息模块数据的桥（养殖批次详情）
        changeDataArr: [{type: { 'fodderuse': '饲养', 'disease': '病疫' }}, {state: {0: '未完成', 1: '已完成'}}],
        searchPlaceholder: '请输入批次号',
        search: ['query_text', 'type'],
        theads: ['批次号', '计划开始日期', '计划结束日期', '操作类型', '安排人员', '计划内容', '操作用户', '状态', '备注'],
        protos: ['serial', 'date', 'end_date', 'type', 'operate_name', 'user_name', 'content', 'state', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
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
                }]
            },
            {
                type: 'date',
                component: datePick
            }]
        }],
        newComponent: [{
            tab: '新建生产计划信息',
            selectUrl2: [['operates', 'id', 'name', true], ['fodders', 'id', 'name', true], ['additions', 'id', 'name', true], ['drugs', 'id', 'name', true]],
            popNumber2: [1, 4, 5, 7],
            selectInit2: [{value: '', label: '请选择安排人员'}, {value: '', label: '请选择饲料'}, {value: '', label: '请选择饲料添加剂'}, {value: '', label: '请选择兽药'}],
            selectWhereArr2: [[{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}], [], [], []],
            type: 'planAssoc',
            components: [{
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                range: true,
                label: '计划开始日期',
                placeholder: '',
                rule: [{required: true, message: '请选择计划日期'}, {validator: validate2.reDate, message: '请输入计划日期', lastDate: true}]
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '安排人员',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择安排人员'},
                options: []
            },
            {
                name: 'content',
                type: 'text',
                component: null,
                isNull: true,
                label: '计划内容',
                placeholder: '',
                rule: {required: true, trigger: 'blur', message: '请输入计划内容'}
            },
            {
                name: 'type',
                type: 'select',
                component: null,
                isNull: false,
                label: '操作类型',
                placeholder: '必填',
                selectNumber: {fodderuse: [4, 5, 6], disease: [7, 8]},
                rule: {required: true, trigger: 'blur', message: '请选择操作类型'},
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
                }]
            },
            {
                name: 'fodder_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '饲料名称',
                hiddenSelect: true,
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择饲料名称'},
                options: []
            },
            {
                name: 'addition_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '饲料添加剂',
                hiddenSelect: true,
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择饲料添加剂'},
                options: []
            },
            {
                name: 'amount1',
                type: 'textSelect',
                component: inputTextSelect,
                isNull: false,
                hiddenSelect: true,
                label: '饲养量',
                placeholder: '请填写数字（必填）',
                rule: [{required: true, message: '请输入正确的饲养量', trigger: 'blur'}, {validator: validate2.reNumber}],
                options: [
                    {
                        value: 'kg/只', label: 'kg/只'
                    },
                    {
                        value: 'kg/头', label: 'kg/头'
                    },
                    {
                        value: 'kg/条', label: 'kg/条'
                    }
                ]
            },
            {
                name: 'drug_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '兽药名称',
                hiddenSelect: true,
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择兽药名称'},
                options: []
            },
            {
                name: 'amount2',
                type: 'textSelect',
                component: inputTextSelect,
                isNull: false,
                hiddenSelect: true,
                label: '兽药量',
                placeholder: '请填写数字（必填）',
                rule: [{required: true, message: '请输入正确的兽药量', trigger: 'blur'}, {validator: validate2.reNumber}],
                options: [
                    {
                        value: 'kg/只', label: 'kg/只'
                    },
                    {
                        value: 'kg/头', label: 'kg/头'
                    },
                    {
                        value: 'kg/条', label: 'kg/条'
                    }
                ]
            },
            {
                name: 'memo',
                type: 'textarea',
                component: null,
                isNull: true,
                label: '备注',
                placeholder: '',
                rule: null
            }]
        }],
        editComponent: [{
            tab: '编辑生产计划信息',
            selectUrl2: [['operates', 'id', 'name', true]],
            popNumber2: [3],
            selectWhereArr2: [[{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}]],
            selectInit2: [{value: '', label: '请选择安排人员'}],
            components: [{
                name: 'serial',
                type: 'text',
                component: null,
                isNull: true,
                label: '计划批次号',
                placeholder: '',
                disabled: true,
                rule: null
            },
            {
                name: 'date',
                type: 'text',
                component: null,
                isNull: true,
                label: '开始日期',
                placeholder: '',
                disabled: true,
                rule: null
            },
            {
                name: 'end_date',
                type: 'text',
                component: null,
                isNull: true,
                label: '结束日期',
                placeholder: '',
                disabled: true,
                rule: null
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '安排人员',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择安排人员'},
                options: []
            },
            {
                name: 'content',
                type: 'text',
                component: null,
                isNull: true,
                label: '计划内容',
                placeholder: '',
                rule: {required: true, trigger: 'blur', message: '请输入计划内容'}
            },
            {
                name: 'type',
                type: 'text',
                component: null,
                isNull: true,
                label: '操作类型',
                placeholder: '',
                disabled: true,
                rule: null
            },
            {
                name: 'memo',
                type: 'textarea',
                component: null,
                isNull: true,
                label: '备注',
                placeholder: '',
                rule: null
            }]
        }]
    }]
}
