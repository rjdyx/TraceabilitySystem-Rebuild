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

export let plantSerial = {
    // 种植批次
    plantSerial: [{
        settitle: '种植批次管理',
        key: 'cultivate',
        roleName: ['plant/cultivate', 0],
        tab: '种植批次信息',
        url: 'cultivate',
        batch: 'plantSerial',
        changeDataArr: [{state: {0: '未完成', 1: '已完成'}}],
        selectSearch: ['plantations.id', 'plants.id'],
        selectValueId: [['plantation_id', 'plantation_name', true], ['plant_id', 'plant_name', true]],
        selectDefault: [{value: '', label: '种植区选择'}, {value: '', label: '果蔬选择'}],
        searchPlaceholder: '请输入种植批次号进行搜索',
        theads: ['所属种植区', '种植批次号', '果蔬名称', '种植日期', '种植面积', '种植人', '录入人', '状态', '备注'],
        protos: ['plantation_name', 'serial', 'plant_name', 'date', 'area_unit', 'operate_name', 'user_name', 'state', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
        listComponent: [{
            components: [{
                name: 'plantations.id',
                value: '',
                type: 'select',
                component: selectSection,
                options: []
            },
            {
                name: 'plants.id',
                value: '',
                type: 'select',
                component: selectSection,
                options: []
            },
            {
                type: 'date',
                component: datePick
            }]
        }],
        newComponent: [{
            tab: '新建种植批次',
            selectUrl: [['planta', 'cultivate', 'plantation_id', 'plantation_name', true]],
            selectUrl2: [['plants', 'id', 'name', true], ['operates', 'id', 'name', true]],
            popNumber: [0],
            popNumber2: [1, 4],
            selectWhereArr2: [[], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}]],
            selectInit: [{value: '', label: '种植区选择'}],
            selectInit2: [{value: '', label: '果蔬选择'}, {value: '', label: '种植人选择'}],
            limit: 3,
            getMessage: '已超过种植区余留面积',
            components: [{
                name: 'plantation_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '所属种植区',
                placeholder: '必填',
                rule: {required: true, trigger: 'blur', message: '请选择种植区', type: 'number'},
                options: []
            },
            {
                name: 'plant_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '果蔬名称',
                placeholder: '必填',
                rule: {required: true, trigger: 'blur', message: '请选择果蔬', type: 'number'},
                options: []
            },
            {
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '种植日期',
                placeholder: '',
                rule: [{required: true, message: '请输入种植日期'}, {validator: validate2.reDate, message: '请输入种植日期'}]
            },
            {
                name: 'area',
                type: 'textSelect',
                component: inputTextSelect,
                isNull: false,
                label: '种植面积',
                placeholder: '请填写数字（必填）',
                options: [{
                    value: '亩',
                    label: '亩'
                },
                {
                    value: '平方米',
                    label: '平方米'
                },
                {
                    value: '公顷',
                    label: '公顷'
                }
                ],
                rule: [{required: true, message: '请输入种植面积', trigger: 'blur'}, {validator: validate2.reNumber}]
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '种植人',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请输入种植人'},
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
            }
            ]
        }],
        editComponent: [{
            tab: '编辑种植批次',
            selectUrl: [['planta', 'cultivate', 'plantation_id', 'plantation_name', true]],
            selectUrl2: [['plants', 'id', 'name', true], ['operates', 'id', 'name', true]],
            selectInit: [{value: '', label: '种植区选择'}],
            selectWhereArr2: [[], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}]],
            selectInit2: [{value: '', label: '果蔬选择'}, {value: '', label: '种植人选择'}],
            popNumber: [1],
            popNumber2: [2, 5],
            limit: 4,
            getMessage: '已超过种植区余留面积',
            components: [{
                name: 'serial',
                type: 'text',
                component: null,
                isNull: false,
                disabled: true,
                label: '种植批次号',
                placeholder: '必填',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'plantation_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '所属种植区',
                placeholder: '必填',
                rule: {required: true, trigger: 'blur', message: '请选择种植区', type: 'number'},
                options: []
            },
            {
                name: 'plant_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '果蔬名称',
                placeholder: '必填',
                rule: {required: true, trigger: 'blur', message: '请选择果蔬', type: 'number'},
                options: []
            },
            {
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '种植日期',
                placeholder: '',
                rule: [{required: true, message: '请输入种植日期'}, {validator: validate2.reDate, message: '请输入种植日期'}]
            },
            {
                name: 'area',
                type: 'textSelect',
                component: inputTextSelect,
                isNull: false,
                label: '种植面积',
                placeholder: '请填写数字（必填）',
                disabled: true,
                options: [{
                    value: '亩',
                    label: '亩'
                },
                {
                    value: '平方米',
                    label: '平方米'
                },
                {
                    value: '公顷',
                    label: '公顷'
                }
                ],
                rule: [{required: true, message: '请输入种植面积', trigger: 'blur'}, {validator: validate2.reNumber}]
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '种植人',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请输入种植人'},
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
            }
            ]
        }],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        moreComponent: [{value: '状态'}]
    }]
}
