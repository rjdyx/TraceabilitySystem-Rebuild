import newbuildBtn from 'components/public/newbuild-btn.vue'
import output from 'components/public/output.vue'
import selectSection from 'components/public/select-section.vue'
import datePick from 'components/public/datePick.vue'
import inputFile from 'components/public/inputFile.vue'

import validate2 from 'utils/validate2.js'

export let personFile = {
    // 基础-人员
    personFile: [{
        settitle: '人员档案管理',
        key: 'operate',
        tab: '人员档案信息',
        roleName: ['basic/operate', 0],
        url: 'operate',
        searchPlaceholder: '请输入人物姓名进行搜索',
        selectSearch: ['operates.category_id'],
        selectValueId: [['category_id', 'category_name', true]],
        selectDefault: [{value: '', label: '选择操作人类型'}],
        changeDataArr: [{sex: {0: '男', 1: '女'}}, {domain: {plant: '种植管理', beast: '养殖管理', packp: '果蔬加工管理', packb: '畜禽加工管理', sell: '销售管理', delivery: '物流管理', all: '公共模块'}}],
        theads: ['分类名称', '模块领域', '姓名', '身份', '性别', '年龄', '联系方式', '地址', '图片', '备注信息'],
        protos: ['category_name', 'domain', 'name', 'identity', 'sex', 'age', 'phone', 'address', 'img', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        listComponent: [{
            components: [{
                name: 'operates.category_id',
                value: '',
                type: 'select',
                component: selectSection,
                options: []
            }]
        }],
        newComponent: [{
            tab: '新建人员档案信息',
            selectUrl: [['category', 'operate', 'category_id', 'category_name', true]],
            selectInit: [{value: '', label: '选择操作人分类'}],
            permissionSelectUrl: ['permission_domain'],
            permissionSelectArr: [[{value: '', label: '请选择模块领域'}, {value: 'all', label: '公共模块'}, {set: 'delivery', value: 'delivery', label: '物流管理'}, {set: 'plant', value: 'plant', label: '种植管理'}, {set: 'beast', value: 'beast', label: '养殖管理'}, {set: 'packb', value: 'packb', label: '畜禽加工管理'}, {set: 'packp', value: 'packp', label: '果蔬加工管理'}, {set: 'sell', value: 'sell', label: '销售管理'}]],
            permissionNumber: [1],
            checkNumber: [2],
            hasImg: true,
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
                label: '姓名',
                placeholder: '必填',
                rule: [{required: true, message: '请输入姓名', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '人员名称重复'}]
            },
            {
                name: 'identity',
                type: 'text',
                component: null,
                isNull: false,
                label: '身份',
                placeholder: '',
                rule: {required: true, message: '请输入身份', trigger: 'blur'}
            },
            {
                name: 'sex',
                type: 'select',
                component: null,
                isNull: false,
                label: '性别',
                placeholder: '',
                rule: null,
                options: [{
                    value: 0,
                    label: '男'
                },
                {
                    value: 1,
                    label: '女'
                }]
            },
            {
                name: 'age',
                type: 'text',
                component: null,
                isNull: true,
                label: '年龄',
                placeholder: '',
                rule: [{required: false, message: '请输入整数'}, {validator: validate2.reInteger}]
            },
            {
                name: 'phone',
                type: 'text',
                component: null,
                isNull: true,
                label: '联系方式',
                placeholder: '请输入11位的手机号（固话用-隔开）',
                rule: { validator: validate2.phone, trigger: 'blur' }
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
                name: 'img',
                type: 'file',
                component: inputFile,
                isNull: true,
                label: '人员图片',
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
            tab: '编辑人员档案信息',
            selectUrl: [['category', 'operate', 'category_id', 'category_name', true]],
            selectInit: [{value: '', label: '选择操作人分类'}],
            checkNumber: [2],
            permissionSelectUrl: ['permission_domain'],
            permissionSelectArr: [[{value: '', label: '请选择模块领域'}, {value: 'all', label: '公共模块'}, {set: 'plant', value: 'plant', label: '种植管理'}, {set: 'beast', value: 'beast', label: '养殖管理'}, {set: 'packb', value: 'packb', label: '畜禽加工管理'}, {set: 'packp', value: 'packp', label: '果蔬加工管理'}, {set: 'sell', value: 'sell', label: '销售管理'}]],
            permissionNumber: [1],
            popNumber: [0],
            editNumber: 1,
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
                disabled: false,
                rule: {required: true, message: '请选择模块领域', trigger: 'blur'},
                options: []
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '姓名',
                placeholder: '必填',
                rule: [{required: true, message: '请输入姓名', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '人员名称重复'}]
            },
            {
                name: 'identity',
                type: 'text',
                component: null,
                isNull: false,
                label: '身份',
                placeholder: '',
                rule: {required: true, message: '请输入身份', trigger: 'blur'}
            },
            {
                name: 'sex',
                type: 'select',
                component: null,
                isNull: false,
                label: '性别',
                placeholder: '',
                rule: null,
                options: [{
                    value: 0,
                    label: '男'
                },
                {
                    value: 1,
                    label: '女'
                }]
            },
            {
                name: 'age',
                type: 'text',
                component: null,
                isNull: true,
                label: '年龄',
                placeholder: '',
                rule: [{required: false, message: '请输入整数'}, {validator: validate2.reInteger}]
            },
            {
                name: 'phone',
                type: 'text',
                component: null,
                isNull: true,
                label: '联系方式',
                placeholder: '请输入11位的手机号（固话用-隔开）',
                rule: { validator: validate2.phone, trigger: 'blur' }
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
                name: 'img',
                type: 'file',
                component: inputFile,
                isNull: true,
                label: '人员图片',
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
