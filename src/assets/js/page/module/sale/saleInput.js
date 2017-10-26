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

export let saleInput = {
    // 销售-入库
    saleInput: [
        {
            settitle: '销售入库管理',
            key: 'storage0',
            roleName: ['sell/storage', 0],
            tab: '销售入库信息(平台)',
            url: 'storage',
            batch: 'saleInput',
            selectSearch: ['products.id'],
            selectValueId: [['product_id', 'product_name', true]],
            selectDefault: [{value: '', label: '请选择商品'}],
            paramsIndex: 0,
            changeDataArr: [{type: { 0: '平台', 1: '非平台' }}],
            searchPlaceholder: '请输入批次号进行搜索',
            theads: ['入库批次号', '入库日期', '供货商', '商品名称', '数量', '入库人', '录入人', '备注信息'],
            protos: ['serial', 'datetime', 'supplier_name', 'product_name', 'amount', 'operate_name', 'user_name', 'memo'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50],
            typeComponent: [{
                component: output
            },
            {
                component: newbuildBtn
            }],
            newComponent: [{
                tab: '新建入库信息',
                hiddenValue: {type: 0},
                selectUrl2: [['products', 'id', 'name', true], ['suppliers', 'id', 'name', true], ['operates', 'id', 'name', true]],
                selectInit2: [{value: '', label: '请选择商品'}, {value: '', label: '请选择供货商'}, {value: '', label: '请选择入库人员'}],
                popNumber2: [1, 2, 3],
                selectWhereArr2: [[{n: 'domain', v: 'sell'}, {n: 'domain', v: 'all', s: true}], [], [{n: 'domain', v: 'sell'}, {n: 'domain', v: 'all', s: true}]],
                components: [{
                    name: 'datetime',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '入库日期时间',
                    placeholder: '',
                    rule: [{required: true, message: '请输入入库时间'}, {validator: validate2.reDate, message: '请输入入库时间'}]
                },
                {
                    name: 'product_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '入库商品',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择入库商品'},
                    options: []
                },
                {
                    name: 'supplier_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '供货商',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择供货商'},
                    options: []
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '入库人员',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择入库人员'},
                    options: []
                },
                {
                    name: 'sell_serial',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '订单号',
                    placeholder: '请输入订单号',
                    rule: {required: true, trigger: 'blur', message: '请输入订单号'}
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
            editComponent: [{
                tab: '编辑入库信息',
                hiddenValue: {type: 0},
                selectUrl2: [['products', 'id', 'name', true], ['suppliers', 'id', 'name', true], ['operates', 'id', 'name', true]],
                selectInit2: [{value: '', label: '请选择商品'}, {value: '', label: '请选择供货商'}, {value: '', label: '请选择入库人员'}],
                selectWhereArr2: [[{n: 'domain', v: 'sell'}, {n: 'domain', v: 'all', s: true}], [], [{n: 'domain', v: 'sell'}, {n: 'domain', v: 'all', s: true}]],
                popNumber2: [2, 3, 4],
                components: [{
                    name: 'serial',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '入库批次号',
                    placeholder: '',
                    disabled: true,
                    rule: null
                },
                {
                    name: 'datetime',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '入库时间',
                    placeholder: '',
                    rule: [{required: true, trigger: 'blur', message: '请输入入库时间'}, {validator: validate2.reDate, message: '请输入入库时间'}]
                },
                {
                    name: 'product_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '入库商品',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择入库商品'},
                    options: []
                },
                {
                    name: 'supplier_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '供货商',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择供货商'},
                    options: []
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '入库人员',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择入库人员'},
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
                }]
            }],
            listComponent: [{
                components: [{
                    type: 'select',
                    name: 'products.id',
                    value: '',
                    component: selectSection,
                    options: []
                },
                {
                    type: 'date',
                    component: datePick
                }]
            }]
        },
        {
            settitle: '销售入库管理',
            key: 'storage1',
            roleName: ['sell/storage', 0],
            tab: '销售入库信息(非平台)',
            url: 'storage',
            selectSearch: ['products.id'],
            selectValueId: [['product_id', 'product_name', true]],
            selectDefault: [{value: '', label: '请选择商品'}],
            paramsIndex: 1,
            searchPlaceholder: '请输入批次号进行搜索',
            theads: ['入库批次', '入库日期', '供货商', '商品名称', '数量', '入库人', '录入人', '备注信息'],
            protos: ['serial', 'datetime', 'supplier_name', 'product_name', 'amount', 'operate_name', 'user_name', 'memo'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50],
            typeComponent: [
                {
                    component: output
                },
                {
                    component: newbuildBtn
                }],
            newComponent: [{
                tab: '新建入库信息',
                hiddenValue: {type: 1},
                selectUrl2: [['products', 'id', 'name', true], ['suppliers', 'id', 'name', true], ['operates', 'id', 'name', true]],
                selectInit2: [{value: '', label: '请选择商品'}, {value: '', label: '请选择供货商'}, {value: '', label: '请选择入库人员'}],
                popNumber2: [1, 2, 3],
                selectWhereArr2: [[{n: 'domain', v: 'sell'}, {n: 'domain', v: 'all', s: true}], [], [{n: 'domain', v: 'sell'}, {n: 'domain', v: 'all', s: true}]],
                components: [{
                    name: 'datetime',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '入库日期时间',
                    placeholder: '',
                    rule: [{required: true, message: '请输入入库时间'}, {validator: validate2.reDate, message: '请输入入库时间'}]
                },
                {
                    name: 'product_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '入库商品',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择入库商品'},
                    options: []
                },
                {
                    name: 'supplier_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '供货商',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择供货商'},
                    options: []
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '入库人员',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择入库人员'},
                    options: []
                },
                {
                    name: 'amount',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '入库产品数量',
                    placeholder: '请输入入库产品数量',
                    rule: [{required: true, message: '请输入入库产品数量'}, {validator: validate2.reInteger}]
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
            editComponent: [{
                tab: '编辑入库信息',
                hiddenValue: {type: 0},
                selectUrl2: [['products', 'id', 'name', true], ['suppliers', 'id', 'name', true], ['operates', 'id', 'name', true]],
                popNumber2: [2, 3, 4],
                selectWhereArr2: [[{n: 'domain', v: 'sell'}, {n: 'domain', v: 'all', s: true}], [], [{n: 'domain', v: 'sell'}, {n: 'domain', v: 'all', s: true}]],
                components: [{
                    name: 'serial',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '入库批次号',
                    placeholder: '',
                    disabled: true,
                    rule: null
                },
                {
                    name: 'datetime',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '入库时间',
                    placeholder: '',
                    rule: [{required: true, message: '请输入入库时间'}, {validator: validate2.reDate, message: '请输入入库时间'}]
                },
                {
                    name: 'product_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '入库商品',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择入库商品'},
                    options: []
                },
                {
                    name: 'supplier_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '供货商',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择供货商'},
                    options: []
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '入库人员',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择入库人员'},
                    options: []
                },
                {
                    name: 'sell_serial',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '订单号',
                    placeholder: '请输入订单号',
                    rule: {required: true, trigger: 'blur'}
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
            }]
        }
    ]
}
