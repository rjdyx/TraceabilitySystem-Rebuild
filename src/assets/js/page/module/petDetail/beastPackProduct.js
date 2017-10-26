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

export let beastPackProduct = {
    // 屠宰加工产品信息
    beastPackProduct: {
        key: 'beastPackProduct',
        tab: '生产加工产品管理',
        roleName: ['packb/pack', 0],
        theads: ['产品名称', '执行标准', '商品型号', '包装规格', '保质期', '存储方法'],
        protos: ['name', 'enforce_standard', 'marque', 'specification', 'expiration_date', 'storage_means'],
        url: '{x}/pack-product',
        obt: 3,
        tabList: [{
            url: 'pack-product-rfid',
            tab: '加工产品溯源码信息',
            searchPlaceholder: '请输入溯源码进行搜索',
            headList: ['产品溯源码', '生产日期', 'RFID', '溯源次数', '备注'],
            protos: ['code', 'date', 'rfid', 'time', 'memo'],
            widths: [50, 50, 50, 50, 50],
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
            newComponent: [
                {
                    tab: '新建溯源码信息',
                    hiddenValue: {type: 'beast'},
                    selectUrl2: [['comes', 'id', 'serial', true], ['storages', 'id', 'serial', true], ['storages', 'id', 'serial', true]],
                    selectInit2: [{value: '', label: '出栏批次号选择'}, {value: '', label: '请选择入库批次(平台)'}, {value: '', label: '请选择入库批次(非平台)'}],
                    selectWhereArr2: [[], [{n: 'type', v: 0}, {n: 'category', v: 'plant'}], [{n: 'type', v: 1}, {n: 'category', v: 'plant'}]],
                    popNumber2: [2, 3, 4],
                    permissionSelectUrl: ['api/permission_domain'],
                    permissionSelectArr: [[{label: '请选择商品来源', value: ''}, {set: 'beast', label: '养殖出栏', value: 'come'}, {set: 'sell', label: '入库(平台)', value: 'st'}, {set: 'sell', label: '入库(非平台)', value: 'sf'}]],
                    permissionNumber: [1],
                    labUrl: 'come-rfid',
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
                        selectNumber: {come: [2, 7], st: [3, 8], sf: [4]},
                        rule: {required: true, trigger: 'blur', message: '请选择商品来源'},
                        options: []
                    },
                    {
                        name: 'come_id',
                        type: 'select',
                        component: null,
                        isNull: false,
                        label: '出栏批次',
                        hiddenSelect: true,
                        assocNum: 7,
                        placeholder: '',
                        rule: {required: true, trigger: 'blur', message: '请选择出栏批次', type: 'number'},
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
                        assocNum: 8,
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
                        name: 'rfid_ids',
                        type: 'table',
                        tableUrl: ['come-rfid', true],
                        hiddenSelect: true,
                        theads: ['出栏批次', 'Rfid', '养殖畜禽', '养殖日期'],
                        protos: ['come_serial', 'rfid', 'beast_name', 'date'],
                        valueId: 'rfid_ids',
                        errormsg: '请选择rfid',
                        tableVal: []
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
                }
            ],
            editComponent: [{
                tab: '编辑溯源码信息',
                components: [{
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
