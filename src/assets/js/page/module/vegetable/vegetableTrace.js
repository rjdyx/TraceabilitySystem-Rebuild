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

export let vegetableTrace = {
    // 果蔬-产品溯源码
    vegetableTrace: [{
        settitle: '产品溯源管理',
        key: 'code-plant',
        roleName: ['packp/code', 0],
        tab: '产品溯源信息',
        url: 'code',
        batch: 'plantPackBatch',
        paramsIndex: 'plant',
        selectSearch: ['products.id'],
        selectValueId: [['product_id', 'product_name', true]],
        selectDefault: [{value: '', label: '请选择产品'}],
        searchPlaceholder: '请输入溯源码搜索',
        theads: ['加工批次号', '产品溯源码', '产品名称', '生产日期', '产地', '溯源次数', '备注信息'],
        protos: ['serial', 'code', 'product_name', 'date', 'origin', 'time', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50],
        moreComponent: [{
            value: '打印'
        }],
        typeComponent: [
            {
                component: output
            },
            {
                component: newbuildBtn
            }],
        listComponent: [{
            components: [
                {
                    name: 'products.id',
                    value: '',
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
        newComponent: [{
            tab: '新建溯源码信息',
            hiddenValue: {type: 'plant'},
            selectUrl2: [['packs', 'id', 'serial', true], ['harvests', 'id', 'serial', true], ['storages', 'id', 'serial', true], ['storages', 'id', 'serial', true]],
            selectInit2: [{value: '', label: '加工批次号选择'}, {value: '', label: '采收批次号选择'}, {value: '', label: '请选择入库批次(平台)'}, {value: '', label: '请选择入库批次(非平台)'}],
            selectWhereArr2: [[{n: 'type', v: 'plant'}], [], [{n: 'type', v: 0}, {n: 'category', v: 'plant'}], [{n: 'type', v: 1}, {n: 'category', v: 'plant'}]],
            permissionSelectUrl: ['permission_domain'],
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
        printComponent: [{
            tab: '打印溯源码信息',
            components: [{
                name: 'product_name',
                type: 'text',
                component: null,
                isNull: false,
                label: '产品名称',
                placeholder: '',
                disabled: true,
                rule: {required: true}
            },
            {
                name: 'specification',
                type: 'text',
                component: null,
                isNull: false,
                label: '产品规格',
                placeholder: '',
                disabled: true,
                rule: {required: true}
            },
            {
                name: 'date',
                type: 'text',
                component: null,
                isNull: false,
                label: '生产日期',
                placeholder: '',
                disabled: true,
                rule: {required: true}
            },
            {
                name: 'origin',
                type: 'text',
                component: null,
                isNull: false,
                label: '产地',
                placeholder: '',
                disabled: true,
                rule: {required: true}
            },
            {
                name: 'code',
                component: Qrcode,
                isNull: false,
                label: '产品二维码',
                placeholder: '',
                rule: null
            }]
        }]
    }]
}
