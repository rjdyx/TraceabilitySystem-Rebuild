import newbuildBtn from 'components/public/newbuild-btn.vue'
import output from 'components/public/output.vue'
import selectSection from 'components/public/select-section.vue'
import inputFile from 'components/public/inputFile.vue'

import validate2 from 'utils/validate2.js'

export let productFile = {
    // 基础-产品
    productFile: [{
        settitle: '产品档案管理',
        key: 'product',
        tab: '产品档案信息',
        roleName: ['basic/product', 0],
        url: 'product',
        selectValueId: [['category_id', 'category_name', true]],
        searchPlaceholder: '请输入产品名称进行搜索',
        selectDefault: [{value: '', label: '选择产品类型'}],
        selectSearch: ['products.category_id'],
        changeDataArr: [{domain: {packp: '果蔬加工管理', packb: '畜禽加工管理', sell: '销售管理', all: '公共模块'}}],
        theads: ['分类名称', '模块领域', '名称', '执行标准', '商品型号', '商品简介', '包装规格', '保质期', '食用方法', '存储方法', '配料信息', '图片', '备注'],
        protos: ['category_name', 'domain', 'name', 'enforce_standard', 'marque', 'description', 'specification', 'expiration_date', 'edible_method', 'storage_means', 'burdening_info', 'img', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        newComponent: [{
            tab: '新建产品信息',
            selectUrl: [['category', 'product', 'category_id', 'category_name', true]],
            selectInit: [{value: '', label: '选择产品分类'}],
            permissionSelectUrl: ['permission_domain'],
            permissionSelectArr: [[{value: '', label: '请选择模块领域'}, {value: 'all', label: '公共模块'}, {set: 'packb', value: 'packb', label: '畜禽加工管理'}, {set: 'packp', value: 'packp', label: '果蔬加工管理'}, {set: 'sell', value: 'sell', label: '销售管理'}]],
            permissionNumber: [1],
            checkNumber: [2],
            popNumber: [0],
            hasImg: true,
            components: [{
                name: 'category_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '分类',
                placeholder: '必填',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择分类名称'},
                options: []
            },
            {
                name: 'domain',
                type: 'select',
                component: null,
                isNull: false,
                label: '模块领域',
                placeholder: '',
                rule: {required: true, message: '请选择模块领域', trigger: 'blur'},
                options: []
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '产品名称',
                placeholder: '必填',
                rule: [{required: true, trigger: 'blur', message: '请输入产品名称'}, {validator: validate2.reCheck, trigger: 'blur', message: '产品名称重复'}]
            },
            {
                name: 'enforce_standard',
                type: 'text',
                component: null,
                isNull: false,
                label: '执行标准',
                placeholder: '',
                rule: null
            },
            {
                name: 'marque',
                type: 'text',
                component: null,
                isNull: true,
                label: '商品型号',
                placeholder: '',
                rule: null
            },
            {
                name: 'description',
                type: 'text',
                component: null,
                isNull: true,
                label: '商品简介',
                placeholder: '',
                rule: null
            },
            {
                name: 'specification',
                type: 'text',
                component: null,
                isNull: true,
                label: '包装规格',
                placeholder: '',
                rule: null
            },
            {
                name: 'expiration_date',
                type: 'text',
                component: null,
                isNull: true,
                label: '保质期',
                placeholder: '',
                rule: null
            },
            {
                name: 'edible_method',
                type: 'text',
                component: null,
                isNull: true,
                label: '食用方法',
                placeholder: '',
                rule: null
            },
            {
                name: 'storage_means',
                type: 'text',
                component: null,
                isNull: true,
                label: '存储方法',
                placeholder: '',
                rule: null
            },
            {
                name: 'burdening_info',
                type: 'text',
                component: null,
                isNull: true,
                label: '配料信息',
                placeholder: '',
                rule: null
            },
            {
                name: 'img',
                type: 'file',
                component: inputFile,
                isNull: true,
                label: '产品图片',
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
                rule: ''
            }
            ]
        }],
        editComponent: [{
            tab: '编辑产品信息',
            selectUrl: [['category', 'product', 'category_id', 'category_name', true]],
            selectInit: [{value: '', label: '选择产品分类'}],
            permissionSelectUrl: ['permission_domain'],
            permissionSelectArr: [[{value: '', label: '请选择模块领域'}, {value: 'all', label: '公共模块'}, {set: 'packb', value: 'packb', label: '畜禽加工管理'}, {set: 'packp', value: 'packp', label: '果蔬加工管理'}, {set: 'sell', value: 'sell', label: '销售管理'}]],
            permissionNumber: [1],
            checkNumber: [2],
            popNumber: [0],
            hasImg: true,
            editNumber: 1,
            components: [{
                name: 'category_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '分类',
                placeholder: '必填',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择分类名称'},
                options: []
            },
            {
                name: 'domain',
                type: 'select',
                component: null,
                isNull: false,
                label: '模块领域',
                placeholder: '',
                disabled: false,
                rule: {required: true, message: '请选择模块领域', trigger: 'blur'},
                options: []
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '产品名称',
                placeholder: '必填',
                rule: [{required: true, trigger: 'blur', message: '请输入产品名称'}, {validator: validate2.reCheck, trigger: 'blur', message: '产品名称重复'}]
            },
            {
                name: 'enforce_standard',
                type: 'text',
                component: null,
                isNull: false,
                label: '执行标准',
                placeholder: '',
                rule: null
            },
            {
                name: 'marque',
                type: 'text',
                component: null,
                isNull: true,
                label: '商品型号',
                placeholder: '',
                rule: null
            },
            {
                name: 'description',
                type: 'text',
                component: null,
                isNull: true,
                label: '商品简介',
                placeholder: '',
                rule: null
            },
            {
                name: 'specification',
                type: 'text',
                component: null,
                isNull: true,
                label: '包装规格',
                placeholder: '',
                rule: null
            },
            {
                name: 'expiration_date',
                type: 'text',
                component: null,
                isNull: true,
                label: '保质期',
                placeholder: '',
                rule: null
            },
            {
                name: 'edible_method',
                type: 'text',
                component: null,
                isNull: true,
                label: '食用方法',
                placeholder: '',
                rule: null
            },
            {
                name: 'storage_means',
                type: 'text',
                component: null,
                isNull: true,
                label: '存储方法',
                placeholder: '',
                rule: null
            },
            {
                name: 'burdening_info',
                type: 'text',
                component: null,
                isNull: true,
                label: '配料信息',
                placeholder: '',
                rule: null
            },
            {
                name: 'img',
                type: 'file',
                component: inputFile,
                isNull: true,
                label: '',
                placeholder: '产品图片',
                rule: null
            },
            {
                name: 'memo',
                type: 'textarea',
                component: null,
                isNull: true,
                label: '备注信息',
                placeholder: '',
                rule: ''
            }
            ]
        }],
        listComponent: [{
            components: [{
                name: 'products.category_id',
                value: '',
                type: 'select',
                component: selectSection,
                options: []
            }]
        }]
    }]
}
