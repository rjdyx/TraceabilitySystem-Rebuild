import newbuildBtn from 'components/public/newbuild-btn.vue'
import output from 'components/public/output.vue'
import selectSection from 'components/public/select-section.vue'
import inputFile from 'components/public/inputFile.vue'

import validate2 from 'utils/validate2.js'

export let expertFile = {
    // 基础-专家
    expertFile: [{
        settitle: '专家档案管理',
        key: 'expert',
        tab: '专家档案信息',
        roleName: ['basic/expert', 0],
        url: 'expert',
        selectSearch: ['experts.category_id'],
        selectValueId: [['category_id', 'category_name', true]],
        changeDataArr: [{sex: {0: '男', 1: '女'}}, {domain: {plant: '种植管理', beast: '养殖管理', all: '公共模块'}}],
        searchPlaceholder: '请输入专家名称进行搜索',
        selectDefault: [{value: '', label: '选择专家类型'}],
        theads: ['分类名称', '模块领域', '专家名称', '级别', '研究领域', '单位', '年龄', '性别', '联系方式', '图片', '备注'],
        protos: ['category_name', 'domain', 'name', 'level', 'major', 'unit', 'age', 'sex', 'phone', 'img', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        newComponent: [{
            tab: '新建专家档案信息',
            selectUrl: [['category', 'expert', 'category_id', 'category_name', true]],
            selectInit: [{value: '', label: '选择专家分类'}],
            permissionSelectUrl: ['permission_domain'],
            permissionSelectArr: [[{value: '', label: '请选择模块领域'}, {value: 'all', label: '公共模块'}, {set: 'plant', value: 'plant', label: '种植管理'}, {set: 'beast', value: 'beast', label: '养殖管理'}]],
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
                label: '专家名称',
                placeholder: '必填',
                rule: [{required: true, message: '请输入专家名称', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '专家名称重复'}]
            },
            {
                name: 'level',
                type: 'text',
                component: null,
                isNull: false,
                label: '级别',
                placeholder: '',
                rule: {required: true, message: '请输入专家级别', trigger: 'blur'}
            },
            {
                name: 'major',
                type: 'text',
                component: null,
                isNull: false,
                label: '研究领域',
                placeholder: '',
                rule: {required: true, trigger: 'blur', message: '请输入研究领域'}
            },
            {
                name: 'unit',
                type: 'text',
                component: false,
                isNull: true,
                label: '单位',
                placeholder: '',
                rule: null
            },
            {
                name: 'age',
                type: 'text',
                component: null,
                isNull: true,
                label: '年龄',
                placeholder: '',
                rule: {required: false, validator: validate2.reInteger}
            },
            {
                name: 'sex',
                type: 'select',
                component: null,
                isNull: false,
                label: '性别',
                placeholder: '',
                rule: {required: true, trigger: 'blur'},
                options: [{
                    value: '0',
                    label: '男'
                },
                {
                    value: '1',
                    label: '女'
                }]
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
                name: 'img',
                type: 'file',
                component: inputFile,
                isNull: true,
                label: '专家图片',
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
            selectUrl: [['category', 'expert', 'category_id', 'category_name', true]],
            selectInit: [{value: '', label: '选择专家分类'}],
            permissionSelectUrl: ['permission_domain'],
            permissionSelectArr: [[{value: '', label: '请选择模块领域'}, {value: 'all', label: '公共模块'}, {set: 'plant', value: 'plant', label: '种植管理'}, {set: 'beast', value: 'beast', label: '养殖管理'}]],
            permissionNumber: [1],
            checkNumber: [2],
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
                label: '专家名称',
                placeholder: '必填',
                rule: [{required: true, message: '请输入专家名称', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '专家名称重复'}]
            },
            {
                name: 'level',
                type: 'text',
                component: null,
                isNull: false,
                label: '级别',
                placeholder: '',
                rule: {required: true, message: '请输入专家级别', trigger: 'blur'}
            },
            {
                name: 'major',
                type: 'text',
                component: null,
                isNull: false,
                label: '研究领域',
                placeholder: '',
                rule: {required: true, trigger: 'blur', message: '请输入研究领域'}
            },
            {
                name: 'unit',
                type: 'text',
                component: false,
                isNull: true,
                label: '单位',
                placeholder: '',
                rule: null
            },
            {
                name: 'age',
                type: 'text',
                component: null,
                isNull: true,
                label: '年龄',
                placeholder: '',
                rule: {validator: validate2.reInteger}
            },
            {
                name: 'sex',
                type: 'select',
                component: null,
                isNull: false,
                label: '性别',
                placeholder: '',
                rule: {required: true, trigger: 'blur'},
                options: [{
                    value: '0',
                    label: '男'
                },
                {
                    value: '1',
                    label: '女'
                }]
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
                name: 'img',
                type: 'file',
                component: inputFile,
                isNull: true,
                label: '专家图片',
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
            }]
        }],
        listComponent: [{
            components: [{
                name: 'experts.category_id',
                value: '',
                type: 'select',
                component: selectSection,
                options: []
            }]
        }]
    }]
}
