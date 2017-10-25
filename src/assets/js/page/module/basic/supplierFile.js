import newbuildBtn from 'components/public/newbuild-btn.vue'
import output from 'components/public/output.vue'
import selectSection from 'components/public/select-section.vue'

import validate2 from 'utils/validate2.js'

export let supplierFile = {
    // 基础-供货商
    supplierFile: [{
        settitle: '供货商档案管理',
        key: 'supplier',
        tab: '供货商档案信息',
        roleName: ['basic/supplier', 0],
        url: 'supplier',
        selectSearch: ['suppliers.category_id'],
        selectValueId: [['category_id', 'category_name', true]],
        searchPlaceholder: '请输入供货商名称搜索',
        selectDefault: [{value: '', label: '选择供货商类型'}],
        theads: ['分类', '供货商名称', '电话', '联系人', '地址', '备注'],
        protos: ['category_name', 'name', 'phone', 'contacts', 'address', 'memo'],
        widths: [50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        newComponent: [{
            tab: '新建供货商档案信息',
            selectUrl: [['category', 'supplier', 'category_id', 'category_name', true]],
            selectInit: [{value: '', label: '选择供货商分类'}],
            checkNumber: [1],
            popNumber: [0],
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
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '供货商名称',
                placeholder: '必填',
                rule: [{required: true, message: '请输入供货商名称', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '供货商名称重复'}]
            },
            {
                name: 'phone',
                type: 'text',
                component: null,
                isNull: false,
                label: '电话',
                placeholder: '请输入11位的手机号（固话用-隔开）',
                rule: { validator: validate2.phone, trigger: 'blur' }
            },
            {
                name: 'contacts',
                type: 'text',
                component: null,
                isNull: true,
                label: '联系人',
                placeholder: '',
                rule: null
            },
            {
                name: 'address',
                type: 'text',
                component: null,
                isNull: true,
                label: '地址',
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
            tab: '编辑供货商档案信息',
            selectUrl: [['category', 'supplier', 'category_id', 'category_name', true]],
            selectInit: [{value: '', label: '选择供货商分类'}],
            checkNumber: [1],
            popNumber: [0],
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
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '供货商名称',
                placeholder: '必填',
                rule: [{required: true, message: '请输入供货商名称', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '供货商名称重复'}]
            },
            {
                name: 'phone',
                type: 'text',
                component: null,
                isNull: false,
                label: '电话',
                placeholder: '请输入11位的手机号（固话用-隔开）',
                rule: { validator: validate2.phone, trigger: 'blur' }
            },
            {
                name: 'contacts',
                type: 'text',
                component: null,
                isNull: true,
                label: '联系人',
                placeholder: '',
                rule: null
            },
            {
                name: 'address',
                type: 'text',
                component: null,
                isNull: true,
                label: '地址',
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
                rule: null
            }
            ]
        }],
        listComponent: [{
            components: [{
                name: 'suppliers.category_id',
                value: '',
                type: 'select',
                component: selectSection,
                options: []
            }]
        }]
    }]
}
