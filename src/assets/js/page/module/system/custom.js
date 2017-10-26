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

export let custom = {
    // 追溯信息自定义
    custom: [{
        settitle: '追溯信息自定义',
        roleName: ['system/custom', 0],
        key: 'customManage',
        tab: '种植自定义信息',
        batch: 'customPlant',
        url: 'custom',
        paramsIndex: 'plant',
        theads: ['批次号', '种植场名称', '种植场负责人', '种植场面积', '种植区名称', '种植区负责人', '种植区面积', '种植日期', '种植人', '采收日期', '采收人'],
        protos: ['serial', 'name', 'operate', 'area', 'c_name', 'c_operate', 'c_area', 'bc_date', 'bc_operate', 'ch_date', 'ch_operate'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
        typeComponent: [
            {
                component: output
            },
            {
                component: newbuildBtn
            }],
        newComponent: [{
            tab: '新建自定义种植信息',
            hiddenValue: {type: 'plant'},
            components: [{
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '种植场名称',
                placeholder: '请填写种植场名称',
                rule: [{required: true, trigger: 'blur', message: '请输入种植场名称'}]
            },
            {
                name: 'operate',
                type: 'text',
                component: null,
                isNull: false,
                label: '种植场负责人',
                placeholder: '请填写种植场负责人（必填）',
                rule: [{required: true, trigger: 'blur', message: '请输入种植场负责人'}]
            },
            {
                name: 'area',
                type: 'text',
                component: inputTextSelect,
                isNull: false,
                label: '种植场面积',
                placeholder: '请填写种植场面积及面积单位（必填）',
                rule: [{required: true, message: '请输入正确的面积', trigger: 'blur'}]
            },
            {
                name: 'address',
                type: 'text',
                component: null,
                isNull: false,
                label: '种植场地址',
                placeholder: '请填写种植场地址（必填）',
                rule: [{required: true, trigger: 'blur', message: '请输入种植场地址'}]
            },
            {
                name: 'c_name',
                type: 'text',
                component: null,
                isNull: false,
                label: '种植区名称',
                placeholder: '请填写种植区名称',
                rule: [{required: true, trigger: 'blur', message: '请输入种植区名称'}]
            },
            {
                name: 'c_operate',
                type: 'text',
                component: null,
                isNull: false,
                label: '种植区负责人',
                placeholder: '请填写种植区负责人（必填）',
                rule: [{required: true, trigger: 'blur', message: '请输入种植区负责人'}]
            },
            {
                name: 'c_area',
                type: 'text',
                component: inputTextSelect,
                isNull: false,
                label: '种植区面积',
                placeholder: '请填写种植区面积及面积单位（必填）',
                rule: [{required: true, message: '请输入正确的面积', trigger: 'blur'}]
            },
            {
                name: 'c_address',
                type: 'text',
                component: null,
                isNull: false,
                label: '种植区地址',
                placeholder: '请填写种植区地址（必填）',
                rule: [{required: true, trigger: 'blur', message: '请输入种植区地址'}]
            },
            {
                name: 'bc_date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '种植日期',
                placeholder: '请选择种植日期',
                disabled: true,
                rule: [{required: true, trigger: 'blur', message: '请选择种植日期'}, {validator: validate2.reDate, message: '请选择日期'}]
            },
            {
                name: 'bc_operate',
                type: 'text',
                component: null,
                isNull: false,
                label: '种植人',
                placeholder: '请输入种植人',
                rule: [{required: true, trigger: 'blur', message: '请输入种植人'}]
            },
            {
                name: 'ch_date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '采收日期',
                placeholder: '请选择采收日期',
                disabled: true,
                rule: [{required: true, trigger: 'blur', message: '请选择采收日期'}, {validator: validate2.reDate, message: '请选择日期'}]
            },
            {
                name: 'ch_operate',
                type: 'text',
                component: null,
                isNull: false,
                label: '采收人',
                placeholder: '请输入采收人',
                rule: [{required: true, trigger: 'blur', message: '请输入采收人'}]
            }]
        }],
        editComponent: [{
            tab: '编辑自定义种植信息',
            hiddenValue: {type: 'plant'},
            components: [{
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '种植场名称',
                placeholder: '请填写种植场名称',
                rule: [{required: true, trigger: 'blur', message: '请输入种植场名称'}]
            },
            {
                name: 'operate',
                type: 'text',
                component: null,
                isNull: false,
                label: '种植场负责人',
                placeholder: '请填写种植场负责人（必填）',
                rule: [{required: true, trigger: 'blur', message: '请输入种植场负责人'}]
            },
            {
                name: 'area',
                type: 'text',
                component: inputTextSelect,
                isNull: false,
                label: '种植场面积',
                placeholder: '请填写种植场面积及面积单位（必填）',
                rule: [{required: true, message: '请输入正确的面积', trigger: 'blur'}]
            },
            {
                name: 'address',
                type: 'text',
                component: null,
                isNull: false,
                label: '种植场地址',
                placeholder: '请填写种植场地址（必填）',
                rule: [{required: true, trigger: 'blur', message: '请输入种植场地址'}]
            },
            {
                name: 'c_name',
                type: 'text',
                component: null,
                isNull: false,
                label: '种植区名称',
                placeholder: '请填写种植区名称',
                rule: [{required: true, trigger: 'blur', message: '请输入种植区名称'}]
            },
            {
                name: 'c_operate',
                type: 'text',
                component: null,
                isNull: false,
                label: '种植区负责人',
                placeholder: '请填写种植区负责人（必填）',
                rule: [{required: true, trigger: 'blur', message: '请输入种植区负责人'}]
            },
            {
                name: 'c_area',
                type: 'text',
                component: inputTextSelect,
                isNull: false,
                label: '种植区面积',
                placeholder: '请填写种植区面积及面积单位（必填）',
                rule: [{required: true, message: '请输入正确的面积', trigger: 'blur'}]
            },
            {
                name: 'c_address',
                type: 'text',
                component: null,
                isNull: false,
                label: '种植区地址',
                placeholder: '请填写种植区地址（必填）',
                rule: [{required: true, trigger: 'blur', message: '请输入种植区地址'}]
            },
            {
                name: 'bc_date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '种植日期',
                placeholder: '请选择种植日期',
                disabled: true,
                rule: [{required: true, trigger: 'blur', message: '请选择种植日期'}, {validator: validate2.reDate, message: '请选择日期'}]
            },
            {
                name: 'bc_operate',
                type: 'text',
                component: null,
                isNull: false,
                label: '种植人',
                placeholder: '请输入种植人',
                rule: [{required: true, trigger: 'blur', message: '请输入种植人'}]
            },
            {
                name: 'ch_date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '采收日期',
                placeholder: '请选择采收日期',
                disabled: true,
                rule: [{required: true, trigger: 'blur', message: '请选择采收日期'}, {validator: validate2.reDate, message: '请选择日期'}]
            },
            {
                name: 'ch_operate',
                type: 'text',
                component: null,
                isNull: false,
                label: '采收人',
                placeholder: '请输入采收人',
                rule: [{required: true, trigger: 'blur', message: '请输入采收人'}]
            }]
        }],
        listComponent: [{
            components: [
                {
                    type: 'date',
                    components: 'datePick'
                }
            ]
        }]
    },
    {
        settitle: '追溯信息自定义',
        roleName: ['system/custom', 0],
        key: 'custombManage',
        tab: '养殖自定义信息',
        batch: 'customBeast',
        url: 'custom',
        paramsIndex: 'beast',
        theads: ['批次号', '养殖场名称', '养殖场负责人', '养殖场面积', '养殖区名称', '养殖区负责人', '养殖区面积', '养殖日期', '养殖人', '出栏日期', '出栏人'],
        protos: ['serial', 'name', 'operate', 'area', 'c_name', 'c_operate', 'c_area', 'bc_date', 'bc_operate', 'ch_date', 'ch_operate'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
        typeComponent: [
            {
                component: output
            },
            {
                component: newbuildBtn
            }],
        newComponent: [{
            tab: '新建自定义养殖信息',
            hiddenValue: {type: 'beast'},
            components: [{
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '养殖场名称',
                placeholder: '请填写养殖场名称',
                rule: [{required: true, trigger: 'blur', message: '请输入养殖场名称'}]
            },
            {
                name: 'operate',
                type: 'text',
                component: null,
                isNull: false,
                label: '养殖场负责人',
                placeholder: '请填写养殖场负责人（必填）',
                rule: [{required: true, trigger: 'blur', message: '请输入养殖场负责人'}]
            },
            {
                name: 'area',
                type: 'text',
                component: inputTextSelect,
                isNull: false,
                label: '养殖场面积',
                placeholder: '请填写养殖场面积及面积单位（必填）',
                rule: [{required: true, message: '请输入正确的面积', trigger: 'blur'}]
            },
            {
                name: 'address',
                type: 'text',
                component: null,
                isNull: false,
                label: '养殖场地址',
                placeholder: '请填写养殖场地址（必填）',
                rule: [{required: true, trigger: 'blur', message: '请输入养殖场地址'}]
            },
            {
                name: 'c_name',
                type: 'text',
                component: null,
                isNull: false,
                label: '养殖区名称',
                placeholder: '请填写养殖区名称',
                rule: [{required: true, trigger: 'blur', message: '请输入养殖区名称'}]
            },
            {
                name: 'c_operate',
                type: 'text',
                component: null,
                isNull: false,
                label: '养殖区负责人',
                placeholder: '请填写养殖区负责人（必填）',
                rule: [{required: true, trigger: 'blur', message: '请输入养殖区负责人'}]
            },
            {
                name: 'c_area',
                type: 'text',
                component: inputTextSelect,
                isNull: false,
                label: '养殖区面积',
                placeholder: '请填写养殖区面积及面积单位（必填）',
                rule: [{required: true, message: '请输入正确的面积', trigger: 'blur'}]
            },
            {
                name: 'c_address',
                type: 'text',
                component: null,
                isNull: false,
                label: '养殖区地址',
                placeholder: '请填写养殖区地址（必填）',
                rule: [{required: true, trigger: 'blur', message: '请输入养殖区地址'}]
            },
            {
                name: 'bc_date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '养殖日期',
                placeholder: '请选择养殖日期',
                disabled: true,
                rule: [{required: true, trigger: 'blur', message: '请选择养殖日期'}, {validator: validate2.reDate, message: '请选择日期'}]
            },
            {
                name: 'bc_operate',
                type: 'text',
                component: null,
                isNull: false,
                label: '养殖人',
                placeholder: '请输入种植人',
                rule: [{required: true, trigger: 'blur', message: '请输入种植人'}]
            },
            {
                name: 'ch_date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '出栏日期',
                placeholder: '请选择出栏日期',
                disabled: true,
                rule: [{required: true, trigger: 'blur', message: '请选择出栏日期'}, {validator: validate2.reDate, message: '请选择日期'}]
            },
            {
                name: 'ch_operate',
                type: 'text',
                component: null,
                isNull: false,
                label: '出栏人',
                placeholder: '请输入出栏人',
                rule: [{required: true, trigger: 'blur', message: '请输入出栏人'}]
            }]
        }],
        editComponent: [{
            tab: '编辑自定义养殖信息',
            hiddenValue: {type: 'beast'},
            components: [{
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '养殖场名称',
                placeholder: '请填写养殖场名称',
                rule: [{required: true, trigger: 'blur', message: '请输入养殖场名称'}]
            },
            {
                name: 'operate',
                type: 'text',
                component: null,
                isNull: false,
                label: '养殖场负责人',
                placeholder: '请填写养殖场负责人（必填）',
                rule: [{required: true, trigger: 'blur', message: '请输入养殖场负责人'}]
            },
            {
                name: 'area',
                type: 'text',
                component: inputTextSelect,
                isNull: false,
                label: '养殖场面积',
                placeholder: '请填写养殖场面积及面积单位（必填）',
                rule: [{required: true, message: '请输入正确的面积', trigger: 'blur'}]
            },
            {
                name: 'address',
                type: 'text',
                component: null,
                isNull: false,
                label: '养殖场地址',
                placeholder: '请填写养殖场地址（必填）',
                rule: [{required: true, trigger: 'blur', message: '请输入养殖场地址'}]
            },
            {
                name: 'c_name',
                type: 'text',
                component: null,
                isNull: false,
                label: '养殖区名称',
                placeholder: '请填写养殖区名称',
                rule: [{required: true, trigger: 'blur', message: '请输入养殖区名称'}]
            },
            {
                name: 'c_operate',
                type: 'text',
                component: null,
                isNull: false,
                label: '养殖区负责人',
                placeholder: '请填写养殖区负责人（必填）',
                rule: [{required: true, trigger: 'blur', message: '请输入养殖区负责人'}]
            },
            {
                name: 'c_area',
                type: 'text',
                component: inputTextSelect,
                isNull: false,
                label: '养殖区面积',
                placeholder: '请填写养殖区面积及面积单位（必填）',
                rule: [{required: true, message: '请输入正确的面积', trigger: 'blur'}]
            },
            {
                name: 'c_address',
                type: 'text',
                component: null,
                isNull: false,
                label: '养殖区地址',
                placeholder: '请填写养殖区地址（必填）',
                rule: [{required: true, trigger: 'blur', message: '请输入养殖区地址'}]
            },
            {
                name: 'bc_date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '养殖日期',
                placeholder: '请选择养殖日期',
                disabled: true,
                rule: [{required: true, trigger: 'blur', message: '请选择养殖日期'}, {validator: validate2.reDate, message: '请选择日期'}]
            },
            {
                name: 'bc_operate',
                type: 'text',
                component: null,
                isNull: false,
                label: '养殖人',
                placeholder: '请输入养殖人',
                rule: [{required: true, trigger: 'blur', message: '请输入养殖人'}]
            },
            {
                name: 'ch_date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '出栏日期',
                placeholder: '请选择出栏日期',
                disabled: true,
                rule: [{required: true, trigger: 'blur', message: '请选择出栏日期'}, {validator: validate2.reDate, message: '请选择日期'}]
            },
            {
                name: 'ch_operate',
                type: 'text',
                component: null,
                isNull: false,
                label: '出栏人',
                placeholder: '请输入出栏人',
                rule: [{required: true, trigger: 'blur', message: '请输入出栏人'}]
            }]
        }],
        listComponent: [{
            components: [
                {
                    type: 'date',
                    components: 'datePick'
                }
            ]
        }]
    }]
}
