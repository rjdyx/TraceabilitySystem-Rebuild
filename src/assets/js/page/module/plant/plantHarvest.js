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

export let plantHarvest = {
    // 采收管理
    plantHarvest: [{
        settitle: '采收管理',
        key: 'harvest',
        roleName: ['plant/harvest', 0],
        tab: '采收批次信息',
        url: 'harvest',
        batch: 'plantSerial',
        selectSearch: ['plantations.id'],
        selectValueId: [['plantation_id', 'plantation_name', true]],
        selectDefault: [{value: '', label: '种植区选择'}],
        changeDataArr: [{state: {0: '未完成', 1: '已完成'}}],
        searchPlaceholder: '请输入采收批次号进行搜索',
        theads: ['采收批次', '采收日期', '所属种植区', '种植批次号', '采收数量(kg)', '入库部门', '存放仓库位置', '操作人', '录入人', '状态', '备注'],
        protos: ['serial', 'date', 'plantation_name', 'cultivate_serial', 'amount', 'department', 'position', 'operate_name', 'user_name', 'state', 'memo'],
        widths: [60, 50, 50, 60, 50, 50, 50, 50, 50, 30, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        listComponent: [{
            components: [
                {
                    value: '',
                    name: 'plantations.id',
                    type: 'select',
                    component: selectSection,
                    options: []
                },
                {
                    type: 'date',
                    component: datePick
                }
            ]
        }],
        moreComponent: [{value: '状态'}],
        newComponent: [{
            tab: '新建采收批次',
            selectUrl2: [['cultivates', 'id', 'serial', true], ['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '选择种植批次号'}, {value: '', label: '选择操作人'}],
            popNumber2: [1, 5],
            selectWhereArr2: [[], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}]],
            components: [{
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: true,
                label: '采收日期',
                placeholder: '必填',
                rule: [{required: true, message: '请输入采收日期'}, {validator: validate2.reDate, message: '请输入采收日期'}]
            },
            {
                name: 'cultivate_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '种植批次号',
                placeholder: '必填',
                rule: {required: true, trigger: 'blur', message: '请选择种植批次号', type: 'number'},
                options: []
            },
            {
                name: 'amount',
                type: 'text',
                component: null,
                isNull: true,
                label: '采收数量',
                placeholder: '',
                rule: [{required: true, 'message': '请输入采收数量'}, {validator: validate2.reNumber}]
            },
            {
                name: 'department',
                type: 'text',
                component: null,
                isNull: true,
                label: '入库部门',
                placeholder: '',
                rule: null
            },
            {
                name: 'position',
                type: 'text',
                component: null,
                isNull: true,
                label: '存放仓库位置',
                placeholder: '',
                rule: null
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '采收人',
                placeholder: '必填',
                rule: {required: true, trigger: 'blur', message: '请选择采收人', type: 'number'},
                options: []
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
            tab: '编辑采收批次',
            selectUrl2: [['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '选择操作人'}],
            popNumber2: [6],
            selectWhereArr2: [[], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}]],
            components: [{
                name: 'serial',
                type: 'text',
                component: null,
                isNull: true,
                label: '采收批次号',
                disabled: true,
                placeholder: '必填',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: true,
                label: '采收日期',
                placeholder: '必填',
                rule: [{required: true, message: '请输入采收日期'}, {validator: validate2.reDate, message: '请输入采收日期'}]
            },
            {
                name: 'cultivate_serial',
                type: 'text',
                component: null,
                isNull: true,
                label: '种植批次号',
                placeholder: '必填',
                disabled: true,
                rule: {required: true}
            },
            {
                name: 'amount',
                type: 'text',
                component: null,
                isNull: true,
                label: '采收数量',
                placeholder: '',
                rule: [{required: true, 'message': '请输入采收数量'}, {validator: validate2.reNumber}]
            },
            {
                name: 'department',
                type: 'text',
                component: null,
                isNull: true,
                label: '入库部门',
                placeholder: '',
                rule: null
            },
            {
                name: 'position',
                type: 'text',
                component: null,
                isNull: true,
                label: '存放仓库位置',
                placeholder: '',
                rule: null
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '采收人',
                placeholder: '必填',
                rule: {required: true, trigger: 'blur', message: '请选择采收人', type: 'number'},
                options: []
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
