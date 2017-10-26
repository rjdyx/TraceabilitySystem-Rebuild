import importBtn from 'components/public/import-btn.vue'
import newbuildBtn from 'components/public/newbuild-btn.vue'
import output from 'components/public/output.vue'
import selectSection from 'components/public/select-section.vue'

import validate2 from 'utils/validate2.js'

export let categoryBase = {
    // 基础-分类
    categoryBase: [{
        settitle: '分类档案管理',
        key: 'category',
        tab: '分类档案信息',
        roleName: ['basic/category', 0], // 接口权限参数 参数1为权限name 参数2为是否区分运营者 （默认0）
        url: 'category',
        searchPlaceholder: '请输入分类名称进行搜索',
        theads: ['分类名称', '模块类型', '备注信息'],
        protos: ['name', 'type', 'memo'],
        widths: [50, 50, 50],
        selectSearch: ['type'],
        changeDataArr: [{type: { 'operate': '操作人员', 'expert': '专家', 'product': '产品', 'supplier': '供货商', 'client': '客户', 'fodder': '饲料', 'addition': '饲料添加剂', 'drug': '兽药', 'beast': '畜禽', 'plant': '果蔬', 'manure': '肥料', 'medicament': '农药' }}],
        typeComponent: [{
            component: importBtn
        },
        {
            component: output
        },
        {
            component: newbuildBtn
        }],
        listComponent: [{
            components: [{
                value: '',
                name: 'type',
                type: 'select',
                component: selectSection,
                options: [{
                    value: '', label: '模块类型'
                },
                {
                    value: 'operate', label: '操作人员'
                },
                {
                    value: 'expert', label: '专家'
                },
                {
                    value: 'product', label: '产品'
                },
                {
                    value: 'supplier', label: '供货商'
                },
                {
                    value: 'client', label: '客户'
                },
                {
                    value: 'fodder', label: '饲料'
                },
                {
                    value: 'addition', label: '饲料添加剂'
                },
                {
                    value: 'drug', label: '兽药'
                },
                {
                    value: 'beast', label: '畜禽'
                },
                {
                    value: 'plant', label: '果蔬'
                },
                {
                    value: 'manure', label: '肥料'
                },
                {
                    value: 'medicament', label: '农药'
                }]
            }]
        }],
        newComponent: [{
            tab: '新建分类档案信息',
            checkNumber: [0],
            components: [{
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '分类名称',
                placeholder: '必填',
                rule: [{required: true, message: '请选择分类名称', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '分类名称重复'}]
            },
            {
                name: 'type',
                type: 'select',
                component: null,
                isNull: false,
                label: '模块类型',
                placeholder: '',
                rule: {required: true, message: '请输入模块类型', trigger: 'blur'},
                options: [{
                    value: 'operate', label: '操作人员'
                },
                {
                    value: 'expert', label: '专家'
                },
                {
                    value: 'product', label: '产品'
                },
                {
                    value: 'supplier', label: '供货商'
                },
                {
                    value: 'client', label: '客户'
                },
                {
                    value: 'fodder', label: '饲料'
                },
                {
                    value: 'addition', label: '饲料添加剂'
                },
                {
                    value: 'beast', label: '畜禽'
                },
                {
                    value: 'drug', label: '兽药'
                },
                {
                    value: 'plant', label: '果蔬'
                },
                {
                    value: 'manure', label: '肥料'
                },
                {
                    value: 'medicament', label: '农药'
                }]
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
            tab: '编辑分类档案信息',
            checkNumber: [0],
            editNumber: 1,
            components: [{
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '分类名称',
                placeholder: '必填',
                rule: [{required: true, message: '请输入分类名称', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '分类名称重复'}]
            },
            {
                name: 'type',
                type: 'select',
                component: null,
                isNull: false,
                label: '模块类型',
                placeholder: '',
                disabled: false,
                rule: {required: true, message: '请输入模块类型', trigger: 'blur'},
                options: [{
                    value: 'operate', label: '操作人员'
                },
                {
                    value: 'expert', label: '专家'
                },
                {
                    value: 'product', label: '产品'
                },
                {
                    value: 'supplier', label: '供货商'
                },
                {
                    value: 'client', label: '客户'
                },
                {
                    value: 'fodder', label: '饲料'
                },
                {
                    value: 'addition', label: '饲料添加剂'
                },
                {
                    value: 'beast', label: '畜禽'
                },
                {
                    value: 'drug', label: '兽药'
                },
                {
                    value: 'plant', label: '果蔬'
                },
                {
                    value: 'manure', label: '肥料'
                },
                {
                    value: 'medicament', label: '农药'
                }]
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
        }]
    }]
}
