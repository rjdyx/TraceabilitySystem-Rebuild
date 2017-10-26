import newbuildBtn from 'components/public/newbuild-btn.vue'
import output from 'components/public/output.vue'
import selectSection from 'components/public/select-section.vue'

import validate2 from 'utils/validate2.js'

export let clientFile = {
    // 基础-客户
    clientFile: [{
        settitle: '客户档案管理',
        key: 'client',
        tab: '客户档案信息',
        roleName: ['basic/client', 0],
        url: 'client',
        selectSearch: ['clients.category_id'],
        selectValueId: [['category_id', 'category_name', true]],
        searchPlaceholder: '请输入客户名称进行搜索',
        selectDefault: [{value: '', label: '选择客户类型'}],
        theads: ['客户分类', '客户名称', '电话', '地址', '传真', '备注'],
        protos: ['category_name', 'name', 'phone', 'address', 'fax', 'memo'],
        widths: [50, 50, 50, 50, 50, 50],
        listComponent: [{
            components: [{
                name: 'clients.category_id',
                value: '',
                type: 'select',
                component: selectSection,
                options: []
            }]
        }],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        newComponent: [{
            tab: '新建客户档案信息',
            selectUrl: [['category', 'client', 'category_id', 'category_name', true]],
            selectInit: [{value: '', label: '选择客户分类'}],
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
                label: '客户名称',
                placeholder: '必填',
                rule: [{required: true, message: '请输入客户名称', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '客户名称重复'}]
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
                name: 'address',
                type: 'text',
                component: false,
                isNull: true,
                label: '地址',
                placeholder: '',
                rule: null
            },
            {
                name: 'grade',
                type: 'select',
                component: null,
                isNull: false,
                label: '等级',
                placeholder: '',
                rule: {required: true, trigger: 'blur'},
                options: [{
                    value: '高',
                    label: '高'
                },
                {
                    value: '中',
                    label: '中'
                },
                {
                    value: '低',
                    label: '低'
                }]
            },
            {
                name: 'fax',
                type: 'text',
                component: null,
                isNull: true,
                label: '传真',
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
        editComponent: [{
            tab: '编辑专家档案信息',
            selectUrl: [['category', 'client', 'category_id', 'category_name', true]],
            selectInit: [{value: '', label: '选择客户分类'}],
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
                label: '客户名称',
                placeholder: '必填',
                rule: [{required: true, message: '请输入专家名称', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '客户名称重复'}]
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
                name: 'address',
                type: 'text',
                component: false,
                isNull: true,
                label: '地址',
                placeholder: '',
                rule: null
            },
            {
                name: 'fax',
                type: 'text',
                component: null,
                isNull: true,
                label: '传真',
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
        }]
    }]
}
