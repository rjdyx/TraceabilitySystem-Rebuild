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

export let plantProduct = {
    // 种植计划
    plantProduct: [{
        settitle: '生产计划管理',
        key: 'plan',
        tab: '生产计划信息',
        roleName: ['plant/plan', 0],
        url: 'plan',
        batch: 'planSerial',
        paramsIndex: 'plant',
        selectSearch: ['plans.type'],
        changeDataArr: [{type: { 'fertilize': '施肥', 'spray': '施药', 'detect': '检测', 'farming': '农事', 'harvest': '采收' }}],
        searchPlaceholder: '请输入计划内容进行搜索',
        theads: ['批次号', '计划开始日期', '计划结束日期', '操作类型', '安排人员', '计划内容', '操作用户', '备注'],
        protos: ['serial', 'date', 'end_date', 'type', 'operate_name', 'content', 'user_name', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50],
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
                    label: '操作类型'
                },
                {
                    value: 'fertilize',
                    label: '施肥'
                },
                {
                    value: 'spray',
                    label: '施药'
                },
                {
                    value: 'harvest',
                    label: '采收'
                }]
            },
            {
                type: 'date',
                component: datePick
            }]
        }],
        newComponent: [{
            tab: '新建生产计划信息',
            selectUrl2: [['operates', 'id', 'name', true], ['manures', 'id', 'name', true], ['medicaments', 'id', 'name', true], ['cultivates', 'id', 'serial', true]],
            popNumber2: [1, 4, 6, 8],
            selectInit2: [{value: '', label: '请选择安排人员'}, {value: '', label: '请选择肥料'}, {value: '', label: '请选择农药'}, {value: '', label: '请选择种植批次号'}],
            selectWhereArr2: [[{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}], [], [], []],
            type: 'planAssoc',
            components: [{
                name: 'date',
                type: 'date',
                range: true,
                component: inputDate,
                isNull: false,
                label: '计划日期',
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
                selectNumber: {fertilize: [4, 5], spray: [6, 7], harvest: [8, 9]},
                rule: {required: true, trigger: 'blur', message: ''},
                options: [{
                    value: '',
                    label: '操作类型'
                },
                {
                    value: 'fertilize',
                    label: '施肥'
                },
                {
                    value: 'spray',
                    label: '施药'
                },
                {
                    value: 'harvest',
                    label: '采收'
                }]
            },
            {
                name: 'manure_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '肥料名称',
                hiddenSelect: true,
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择肥料名称'},
                options: []
            },
            {
                name: 'amount1',
                type: 'textSelect',
                component: inputTextSelect,
                isNull: false,
                hiddenSelect: true,
                label: '施肥量',
                placeholder: '请填写数字（必填）',
                rule: [{required: true, message: '请输入正确的施肥量', trigger: 'blur'}, {validator: validate2.reNumber}],
                options: [
                    {
                        value: 'kg/亩', label: 'kg/亩'
                    },
                    {
                        value: 'kg/平方米', label: 'kg/平方米'
                    },
                    {
                        value: 'kg/公顷', label: 'kg/公顷'
                    }
                ]
            },
            {
                name: 'medicament_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '农药名称',
                hiddenSelect: true,
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择农药名称'},
                options: []
            },
            {
                name: 'amount2',
                type: 'textSelect',
                component: inputTextSelect,
                isNull: false,
                hiddenSelect: true,
                label: '施药量',
                placeholder: '请填写数字（必填）',
                rule: [{required: true, message: '请输入正确的施药量', trigger: 'blur'}, {validator: validate2.reNumber}],
                options: [
                    {
                        value: 'ml/亩', label: 'ml/亩'
                    },
                    {
                        value: 'ml/平方米', label: 'ml/平方米'
                    },
                    {
                        value: 'ml/公顷', label: 'ml/公顷'
                    }
                ]
            },
            {
                name: 'cultivate_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '种植批次号',
                hiddenSelect: true,
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择种植批次号'},
                options: []
            },
            {
                name: 'amount3',
                type: 'textSelect',
                component: inputTextSelect,
                isNull: false,
                hiddenSelect: true,
                label: '采收重/数量',
                placeholder: '请填写数字（必填）',
                rule: [{required: true, message: '请输入正确的采收数量(重量)', trigger: 'blur'}, {validator: validate2.reNumber}],
                options: [
                    {
                        value: 'kg', label: 'kg'
                    },
                    {
                        value: '个', label: '个'
                    },
                    {
                        value: '箱', label: '箱'
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
