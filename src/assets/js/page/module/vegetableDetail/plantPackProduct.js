import importBtn from 'components/public/import-btn.vue'
import newbuildBtn from 'components/public/newbuild-btn.vue'
import scanCode from 'components/public/scanCode.vue'
import output from 'components/public/output.vue'
import selectSection from 'components/public/select-section.vue'
import datePick from 'components/public/datePick.vue'
import categoryBtn from 'components/public/categoryBtn.vue'
import addRfidBtn from 'components/public/addRfidBtn.vue'
import inputFile from 'components/public/inputFile.vue'
import inputDate from 'components/public/inputDate.vue'
import validate2 from 'utils/validate2.js'
import Qrcode from 'components/public/Qrcode.vue'

export let plantPackProduct = {
    // 生产加工产品信息
    plantPackProduct: {
        key: 'plantPackProduct',
        tab: '生产加工产品管理',
        roleName: ['packp/pack', 0],
        theads: ['产品名称', '执行标准', '商品型号', '包装规格', '保质期', '存储方法'],
        protos: ['name', 'enforce_standard', 'marque', 'specification', 'expiration_date', 'storage_means'],
        url: '{x}/pack-product',
        obt: 3,
        tabList: [{
            url: 'pack-product-harvest',
            tab: '加工产品溯源码信息',
            searchPlaceholder: '请输入溯源码进行搜索',
            headList: ['产品溯源码', '生产日期', '溯源次数', '备注'],
            protos: ['code', 'date', 'time', 'memo'],
            widths: [50, 50, 50, 50],
            hiddeEdit: true,
            typeComponent: [{
                component: newbuildBtn
            }],
            moreComponent: [{
                value: '打印'
            }],
            listComponent: [{
                components: [{
                    type: 'date',
                    component: datePick
                }]
            }],
            newComponent: [{
                tab: '新建溯源码信息',
                selectUrl2: [['harvests', 'id', 'serial', true], ['storages', 'id', 'serial', true], ['storages', 'id', 'serial', true]],
                selectWhereArr2: [[], [{n: 'type', v: 0}, {n: 'category', v: 'plant'}], [{n: 'type', v: 1}, {n: 'category', v: 'plant'}]],
                selectInit2: [{value: '', label: '采收批次号选择'}, {value: '', label: '请选择入库批次(平台)'}, {value: '', label: '请选择入库批次(非平台)'}],
                popNumber2: [2, 3, 4],
                permissionSelectUrl: ['api/permission_domain'],
                permissionSelectArr: [[{label: '请选择商品来源', value: ''}, {set: 'plant', label: '种植采收', value: 'harvest'}, {set: 'sell', label: '入库(平台)', value: 'st'}, {set: 'sell', label: '入库(非平台)', value: 'sf'}]],
                permissionNumber: [1],
                hiddenValue: {type: 'plant'},
                labUrl: false,
                labNewUrl: 'storage_code',
                assocNum: 7,
                type: 'assoc',
                components: [{
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '生产日期',
                    placeholder: '',
                    rule: [{required: true, message: '请输入生产日期'}, {validator: validate2.reDate, message: '请输入生产日期'}]
                },
                {
                    name: 'category',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '加工商品来源',
                    placeholder: '',
                    selectNumber: {harvest: [2], st: [3, 7], sf: [4]},
                    rule: {required: true, trigger: 'blur', message: '请选择商品来源'},
                    options: []
                },
                {
                    name: 'harvest_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '采收批次',
                    hiddenSelect: true,
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', message: '请选择采收批次', type: 'number'},
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
                    placeholder: '',
                    assocNum: 7,
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
                    name: 'amount',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '溯源码数量',
                    placeholder: '请输入溯源码数量（整数）',
                    rule: [{required: true, message: '请输入溯源码数量', trigger: 'blur'}, {validator: validate2.reInteger}]
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
                    hiddenSelect: true,
                    tableUrl: ['storage-code', true],
                    theads: ['溯源码', '生产日期', '溯源次数'],
                    protos: ['code', 'date', 'time'],
                    valueId: 'code_ids',
                    errormsg: '请选择入库溯源码',
                    tableVal: []
                }]
            }],
            editComponent: [{
                tab: '编辑溯源码信息',
                components: [{
                    name: 'code',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '溯源码',
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
                    rule: [{required: true, message: '请输入生产日期'}, {validator: validate2.reDate, message: '请输入生产日期'}]
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
}
