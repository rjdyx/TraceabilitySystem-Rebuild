// 中间列表的数据

import importBtn from '../../components/public/import-btn.vue'
import newbuildBtn from '../../components/public/newbuild-btn.vue'
import output from '../../components/public/output.vue'
import selectSection from '../../components/public/select-section.vue'
import datePick from '../../components/public/datePick.vue'
import inputDate from '../../components/public/inputDate.vue'
import inputFile from '../../components/public/inputFile.vue'
import inputTextSelect from '../../components/public/inputTextSelect.vue'
import Qrcode from '../../components/public/Qrcode.vue'

import validate2 from '../../utils/validate2.js'

export default {
    // 种植基础资料
    plantBase: [
        {
            settitle: '种植基础资料',
            key: 'plantation',
            roleName: ['plant/basic', 0],
            tab: '种植场',
            url: 'plantation',
            searchPlaceholder: '请输入种植场进行搜索',
            theads: ['种植场名称', '种植面积', '负责人', '联系电话', '详细地址', '图片', '备注信息'],
            protos: ['name', 'area_unit', 'director', 'phone', 'address', 'img', 'memo'],
            widths: [50, 50, 50, 50, 50, 50, 50],
            typeComponent: [{
                component: output
            },
            {
                component: newbuildBtn
            }],
            listComponent: [],
            moreComponent: [{value: '视频'}],
            newComponent: [{
                tab: '新建种植场信息',
                checkNumber: [0],
                hasImg: true,
                components: [{
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '种植场名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入种植场名称', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '种植场名称重复'}]
                },
                {
                    name: 'area',
                    type: 'textSelect',
                    component: inputTextSelect,
                    isNull: false,
                    label: '种植面积',
                    placeholder: '请填写数字（必填）',
                    options: [{
                        value: '亩',
                        label: '亩'
                    },
                    {
                        value: '平方米',
                        label: '平方米'
                    },
                    {
                        value: '公顷',
                        label: '公顷'
                    }
                    ],
                    rule: [{required: true, message: '请输入种植面积', trigger: 'blur'}, {validator: validate2.reNumber}]
                },
                {
                    name: 'phone',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '联系电话',
                    placeholder: '请输入11位的手机号（固话用-隔开）',
                    rule: { validator: validate2.phone, trigger: 'blur' }
                },
                {
                    name: 'address',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '联系地址',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'director',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '负责人',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'video',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '视频检测设备号',
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
            editComponent: [{
                tab: '编辑种植场信息',
                checkNumber: [0],
                limit: 1,
                hasImg: true,
                getMessage: '种植场面积不能小于下属种植区之和',
                components: [{
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '种植场名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入种植场名称', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '种植场名称重复'}]
                },
                {
                    name: 'area',
                    type: 'textSelect',
                    component: inputTextSelect,
                    isNull: false,
                    label: '种植面积',
                    placeholder: '请填写数字（必填）',
                    options: [{
                        value: '亩',
                        label: '亩'
                    },
                    {
                        value: '平方米',
                        label: '平方米'
                    },
                    {
                        value: '公顷',
                        label: '公顷'
                    }
                    ],
                    rule: [{required: true, message: '请输入种植面积', trigger: 'blur'}, {validator: validate2.reNumber}]
                },
                {
                    name: 'phone',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '联系电话',
                    placeholder: '请输入11位的手机号（固话用-隔开）',
                    rule: { validator: validate2.phone, trigger: 'blur' }
                },
                {
                    name: 'address',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '联系地址',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'director',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '负责人',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'video',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '视频检测设备号',
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
            }]
        },
        {
            settitle: '种植基础资料',
            roleName: ['plant/basic', 0],
            key: 'planta',
            tab: '种植区',
            url: 'planta',
            selectSearch: ['planta.pid'],
            selectValueId: [['pid', 'plantation_name', true]],
            searchPlaceholder: '请输入种植区进行搜索',
            selectDefault: [{value: '', label: '种植场选择'}],
            theads: ['种植场名称', '种植区名称', '种植面积', '负责人', '联系电话', '地址', '图片', '备注'],
            protos: ['plantation_name', 'name', 'area_unit', 'director', 'phone', 'address', 'img', 'memo'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50],
            typeComponent: [{
                component: output
            },
            {
                component: newbuildBtn
            }],
            listComponent: [{
                components: [{
                    name: 'planta.pid',
                    value: '',
                    type: 'select',
                    component: selectSection,
                    options: []
                }]
            }],
            newComponent: [{
                tab: '新建种植区信息',
                selectUrl: [['plantation', 'planta', 'pid', 'plantation_name', true]],
                selectInit: [{value: '', label: '选择种植场'}],
                checkNumber: [1],
                hasImg: true,
                popNumber: [0],
                limit: 2,
                getMessage: '已超过种植场余留面积',
                components: [{
                    name: 'pid',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '所属种植场',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur', message: '请选择所属种植场', type: 'number'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '种植区名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入种植区名称', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '种植区名称重复'}]
                },
                {
                    name: 'area',
                    type: 'textSelect',
                    component: inputTextSelect,
                    isNull: false,
                    label: '种植面积',
                    placeholder: '请填写数字（必填）',
                    options: [{
                        value: '亩',
                        label: '亩'
                    },
                    {
                        value: '平方米',
                        label: '平方米'
                    },
                    {
                        value: '公顷',
                        label: '公顷'
                    }
                    ],
                    rule: [{required: true, message: '请输入种植面积', trigger: 'blur'}, {validator: validate2.reNumber}]
                },
                {
                    name: 'director',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '负责人',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'phone',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '详细电话',
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
                    label: '',
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
                tab: '编辑种植区信息',
                selectUrl: [['plantation', 'planta', 'pid', 'plantation_name', true]],
                selectInit: [{value: '', label: '选择种植场'}],
                checkNumber: [1],
                popNumber: [0],
                hasImg: true,
                limit: 2,
                getMessage: '已超过种植场余留面积',
                components: [{
                    name: 'pid',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '所属种植场',
                    placeholder: '必填',
                    rule: {required: true, type: 'number', message: '请选择所属种植场'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '姓名',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入种植区名称', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '种植区名称重复'}]
                },
                {
                    name: 'area',
                    type: 'textSelect',
                    component: inputTextSelect,
                    isNull: false,
                    label: '种植面积',
                    placeholder: '请填写数字（必填）',
                    options: [{
                        value: '亩',
                        label: '亩'
                    },
                    {
                        value: '平方米',
                        label: '平方米'
                    },
                    {
                        value: '公顷',
                        label: '公顷'
                    }],
                    rule: [{required: true, message: '请输入种植面积', trigger: 'blur'}, {validator: validate2.reNumber}]
                },
                {
                    name: 'director',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '负责人',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'phone',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '详细电话',
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
                    label: '',
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
        },
        {
            settitle: '种植基础资料',
            key: 'plant',
            roleName: ['plant/basic', 0],
            tab: '果蔬档案',
            url: 'plant',
            selectSearch: ['plants.category_id'],
            selectValueId: [['category_id', 'category_name', true]],
            searchPlaceholder: '请输入果蔬名称进行搜索',
            selectDefault: [{value: '', label: '果蔬类别'}],
            theads: ['分类名称', '果蔬名称', '生长周期（天）', '基本特征描述', '果蔬图片', '备注信息'],
            protos: ['category_name', 'name', 'growth_cycle', 'description', 'img', 'memo'],
            widths: [50, 50, 50, 50, 50, 50],
            typeComponent: [{
                component: output
            },
            {
                component: newbuildBtn
            }],
            listComponent: [{
                components: [{
                    name: 'plants.category_id',
                    value: '',
                    type: 'select',
                    component: selectSection,
                    options: []
                }]
            }],
            newComponent: [{
                tab: '新建果蔬档案',
                selectUrl: [['category', 'plant', 'category_id', 'category_name', true]],
                selectInit: [{value: '', label: '选择果蔬分类'}],
                checkNumber: [1],
                popNumber: [0],
                hasImg: true,
                components: [{
                    name: 'category_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '果蔬类别',
                    placeholder: '必填',
                    rule: {required: true, message: '请选择果蔬类别', trigger: 'blur', type: 'number'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '果蔬名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入果蔬名称', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '果蔬名称重复'}]
                },
                {
                    name: 'description',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '基本特征描述',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'growth_cycle',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '生长周期（天）',
                    placeholder: '',
                    rule: {validator: validate2.reNumber}
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: false,
                    label: '果蔬图片',
                    placeholder: ''
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
                tab: '编辑果蔬档案',
                selectUrl: [['category', 'plant', 'category_id', 'category_name', true]],
                selectInit: [{value: '', label: '选择果蔬分类'}],
                checkNumber: [1],
                popNumber: [0],
                hasImg: true,
                components: [{
                    name: 'category_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '果蔬类别',
                    placeholder: '必填',
                    rule: {required: true, message: '请选择果蔬类别', trigger: 'blur', type: 'number'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '果蔬名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请选择果蔬类别', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '果蔬名称重复'}]
                },
                {
                    name: 'description',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '基本特征描述',
                    placeholder: ''
                },
                {
                    name: 'growth_cycle',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '生长周期（天）',
                    placeholder: '',
                    rule: {validator: validate2.reNumber}
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: false,
                    label: '果蔬图片',
                    placeholder: ''
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
        },
        {
            settitle: '种植基础资料',
            key: 'manure',
            tab: '肥料档案',
            roleName: ['plant/basic', 0],
            url: 'manure',
            selectSearch: ['manures.category_id'],
            selectValueId: [['category_id', 'category_name', true]],
            searchPlaceholder: '请输入肥料名称',
            selectDefault: [{value: '', label: '肥料类别'}],
            theads: ['肥料分类', '肥料名称', '用途', '包装规格', '产地', '经销商名称', '联系方式', '图片', '备注'],
            protos: ['category_name', 'name', 'usage', 'specification', 'origin', 'dealer', 'phone', 'img', 'memo'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
            typeComponent: [{
                component: output
            },
            {
                component: newbuildBtn
            }],
            listComponent: [{
                components: [{
                    name: 'manures.category_id',
                    value: '',
                    type: 'select',
                    component: selectSection,
                    options: []
                }]
            }],
            newComponent: [{
                tab: '新建肥料档案',
                selectUrl: [['category', 'manure', 'category_id', 'category_name', true]],
                selectInit: [{value: '', label: '选择肥料分类'}],
                checkNumber: [1],
                popNumber: [0],
                hasImg: true,
                components: [{
                    name: 'category_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '肥料分类',
                    placeholder: '必填',
                    rule: {required: true, message: '请选择肥料类别', trigger: 'blur', type: 'number'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '肥料名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入肥料名称', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '肥料名称重复'}]
                },
                {
                    name: 'usage',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '包装规格',
                    placeholder: ''
                },
                {
                    name: 'dealer',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '经销商名称',
                    placeholder: ''
                },
                {
                    name: 'origin',
                    type: 'text',
                    component: null,
                    isNull: false,
                    placeholder: '',
                    label: '产地'
                },
                {
                    name: 'phone',
                    type: 'text',
                    component: null,
                    isNull: false,
                    placeholder: '请输入11位的手机号（固话用-隔开）',
                    label: '联系方式',
                    rule: { validator: validate2.phone, trigger: 'blur' }
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: false,
                    label: '肥料图片',
                    placeholder: ''
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
                tab: '编辑肥料信息',
                selectUrl: [['category', 'manure', 'category_id', 'category_name', true]],
                selectInit: [{value: '', label: '选择肥料分类'}],
                checkNumber: [1],
                popNumber: [0],
                hasImg: true,
                components: [{
                    name: 'category_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '分类',
                    placeholder: '必填',
                    rule: {required: true, message: '请选择肥料类别', trigger: 'blur', type: 'number'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '肥料名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入肥料名称', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '肥料名称重复'}]
                },
                {
                    name: 'specification',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '包装规格',
                    placeholder: ''
                },
                {
                    name: 'dealer',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '经销商名称',
                    placeholder: ''
                },
                {
                    name: 'origin',
                    type: 'text',
                    component: null,
                    isNull: false,
                    placeholder: '',
                    label: '产地'
                },
                {
                    name: 'phone',
                    type: 'text',
                    component: null,
                    isNull: false,
                    placeholder: '请输入11位的手机号（固话用-隔开）',
                    label: '联系方式',
                    rule: { validator: validate2.phone, trigger: 'blur' }
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: false,
                    label: '肥料图片',
                    placeholder: ''
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
        },
        {
            settitle: '种植基础资料',
            key: 'medicament',
            tab: '农药档案',
            roleName: ['plant/basic', 0],
            url: 'medicament',
            selectSearch: ['medicaments.category_id'],
            selectValueId: [['category_id', 'category_name', true]],
            searchPlaceholder: '请输入农药名称',
            selectDefault: [{value: '', label: '农药类别'}],
            theads: ['农药分类', '农药名称', '用途', '防治对象', '药物毒性', '包装规格', '厂家名称', '产地', '联系方式', '图片', '备注'],
            protos: ['category_name', 'name', 'usage', 'control_objects', 'toxicity_grade', 'specification', 'manufacturer', 'origin', 'phone', 'img', 'memo'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            typeComponent: [{
                component: output
            },
            {
                component: newbuildBtn
            }],
            listComponent: [{
                components: [{
                    name: 'medicaments.category_id',
                    value: '',
                    type: 'select',
                    component: selectSection,
                    options: []
                }]
            }],
            newComponent: [{
                tab: '新建农药档案',
                hasImg: true,
                selectUrl: [['category', 'medicament', 'category_id', 'category_name', true]],
                selectInit: [{value: '', label: '选择农药分类'}],
                checkNumber: [1],
                popNumber: [0],
                components: [{
                    name: 'category_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '农药分类',
                    placeholder: '必填',
                    rule: {required: true, message: '请选择农药分类', trigger: 'blur', type: 'number'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '农药名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入农药名称', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '农药名称重复'}]
                },
                {
                    name: 'usage',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '用途',
                    placeholder: ''
                },
                {
                    name: 'control_objects',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '防治对象',
                    placeholder: ''
                },
                {
                    name: 'toxicity_grade',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '毒性等级',
                    placeholder: '必填',
                    rule: {required: true, message: '请输入模块类型', trigger: 'blur'},
                    options: [{
                        value: '微毒',
                        label: '微毒'
                    },
                    {
                        value: '低毒',
                        label: '低毒'
                    },
                    {
                        value: '中毒',
                        label: '中毒'
                    },
                    {
                        value: '高毒',
                        label: '高毒'
                    }]
                },
                {
                    name: 'specification',
                    type: 'text',
                    component: null,
                    isNull: false,
                    placeholder: '',
                    label: '包装规格'
                },
                {
                    name: 'phone',
                    type: 'text',
                    component: null,
                    isNull: false,
                    placeholder: '请输入11位的手机号（固话用-隔开）',
                    label: '联系方式',
                    rule: { validator: validate2.phone, trigger: 'blur' }
                },
                {
                    name: 'manufacturer',
                    type: 'text',
                    component: null,
                    isNull: false,
                    placeholder: '',
                    label: '厂家名称'
                },
                {
                    name: 'origin',
                    type: 'text',
                    component: null,
                    isNull: false,
                    placeholder: '',
                    label: '产地'
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: false,
                    label: '农药图片',
                    placeholder: ''
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
                tab: '编辑农药档案',
                hasImg: true,
                selectUrl: [['category', 'medicament', 'category_id', 'category_name', true]],
                selectInit: [{value: '', label: '选择农药分类'}],
                checkNumber: [1],
                popNumber: [0],
                components: [{
                    name: 'category_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '农药分类',
                    placeholder: '必填',
                    rule: {required: true, message: '请选择农药分类', trigger: 'blur', type: 'number'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '农药名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入农药名称', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '农药名称重复'}]
                },
                {
                    name: 'usage',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '用途',
                    placeholder: ''
                },
                {
                    name: 'control_objects',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '防治对象',
                    placeholder: ''
                },
                {
                    name: 'toxicity_grade',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '毒性等级',
                    placeholder: '必填',
                    rule: {required: true, message: '请输入模块类型', trigger: 'blur'},
                    options: [{
                        value: '微毒',
                        label: '微毒'
                    },
                    {
                        value: '低毒',
                        label: '低毒'
                    },
                    {
                        value: '中毒',
                        label: '中毒'
                    },
                    {
                        value: '高毒',
                        label: '高毒'
                    }]
                },
                {
                    name: 'specification',
                    type: 'text',
                    component: null,
                    isNull: false,
                    placeholder: '',
                    label: '包装规格'
                },
                {
                    name: 'phone',
                    type: 'text',
                    component: null,
                    isNull: false,
                    placeholder: '请输入11位的手机号（固话用-隔开）',
                    label: '联系方式',
                    rule: { validator: validate2.phone, trigger: 'blur' }
                },
                {
                    name: 'manufacturer',
                    type: 'text',
                    component: null,
                    isNull: false,
                    placeholder: '',
                    label: '厂家名称'
                },
                {
                    name: 'origin',
                    type: 'text',
                    component: null,
                    isNull: false,
                    placeholder: '',
                    label: '产地'
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: false,
                    label: '农药图片',
                    placeholder: ''
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
        }
    ],
    // 种植批次
    plantSerial: [{
        settitle: '种植批次管理',
        key: 'cultivate',
        roleName: ['plant/cultivate', 0],
        tab: '种植批次信息',
        url: 'cultivate',
        batch: 'plantSerial',
        changeDataArr: [{state: {0: '未完成', 1: '已完成'}}],
        selectSearch: ['plantations.id', 'plants.id'],
        selectValueId: [['plantation_id', 'plantation_name', true], ['plant_id', 'plant_name', true]],
        selectDefault: [{value: '', label: '种植区选择'}, {value: '', label: '果蔬选择'}],
        searchPlaceholder: '请输入种植批次号进行搜索',
        theads: ['所属种植区', '种植批次号', '果蔬名称', '种植日期', '种植面积', '种植人', '录入人', '状态', '备注'],
        protos: ['plantation_name', 'serial', 'plant_name', 'date', 'area_unit', 'operate_name', 'user_name', 'state', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
        listComponent: [{
            components: [{
                name: 'plantations.id',
                value: '',
                type: 'select',
                component: selectSection,
                options: []
            },
            {
                name: 'plants.id',
                value: '',
                type: 'select',
                component: selectSection,
                options: []
            },
            {
                type: 'date',
                component: datePick
            }]
        }],
        newComponent: [{
            tab: '新建种植批次',
            selectUrl: [['planta', 'cultivate', 'plantation_id', 'plantation_name', true]],
            selectUrl2: [['plants', 'id', 'name', true], ['operates', 'id', 'name', true]],
            popNumber: [0],
            popNumber2: [1, 4],
            selectWhereArr2: [[], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}]],
            selectInit: [{value: '', label: '种植区选择'}],
            selectInit2: [{value: '', label: '果蔬选择'}, {value: '', label: '种植人选择'}],
            limit: 3,
            getMessage: '已超过种植区余留面积',
            components: [{
                name: 'plantation_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '所属种植区',
                placeholder: '必填',
                rule: {required: true, trigger: 'blur', message: '请选择种植区', type: 'number'},
                options: []
            },
            {
                name: 'plant_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '果蔬名称',
                placeholder: '必填',
                rule: {required: true, trigger: 'blur', message: '请选择果蔬', type: 'number'},
                options: []
            },
            {
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '种植日期',
                placeholder: '',
                rule: [{required: true, message: '请输入种植日期'}, {validator: validate2.reDate, message: '请输入种植日期'}]
            },
            {
                name: 'area',
                type: 'textSelect',
                component: inputTextSelect,
                isNull: false,
                label: '种植面积',
                placeholder: '请填写数字（必填）',
                options: [{
                    value: '亩',
                    label: '亩'
                },
                {
                    value: '平方米',
                    label: '平方米'
                },
                {
                    value: '公顷',
                    label: '公顷'
                }
                ],
                rule: [{required: true, message: '请输入种植面积', trigger: 'blur'}, {validator: validate2.reNumber}]
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '种植人',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请输入种植人'},
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
            }
            ]
        }],
        editComponent: [{
            tab: '编辑种植批次',
            selectUrl: [['planta', 'cultivate', 'plantation_id', 'plantation_name', true]],
            selectUrl2: [['plants', 'id', 'name', true], ['operates', 'id', 'name', true]],
            selectInit: [{value: '', label: '种植区选择'}],
            selectWhereArr2: [[], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}]],
            selectInit2: [{value: '', label: '果蔬选择'}, {value: '', label: '种植人选择'}],
            popNumber: [1],
            popNumber2: [2, 5],
            limit: 4,
            getMessage: '已超过种植区余留面积',
            components: [{
                name: 'serial',
                type: 'text',
                component: null,
                isNull: false,
                disabled: true,
                label: '种植批次号',
                placeholder: '必填',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'plantation_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '所属种植区',
                placeholder: '必填',
                rule: {required: true, trigger: 'blur', message: '请选择种植区', type: 'number'},
                options: []
            },
            {
                name: 'plant_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '果蔬名称',
                placeholder: '必填',
                rule: {required: true, trigger: 'blur', message: '请选择果蔬', type: 'number'},
                options: []
            },
            {
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '种植日期',
                placeholder: '',
                rule: [{required: true, message: '请输入种植日期'}, {validator: validate2.reDate, message: '请输入种植日期'}]
            },
            {
                name: 'area',
                type: 'textSelect',
                component: inputTextSelect,
                isNull: false,
                label: '种植面积',
                placeholder: '请填写数字（必填）',
                disabled: true,
                options: [{
                    value: '亩',
                    label: '亩'
                },
                {
                    value: '平方米',
                    label: '平方米'
                },
                {
                    value: '公顷',
                    label: '公顷'
                }
                ],
                rule: [{required: true, message: '请输入种植面积', trigger: 'blur'}, {validator: validate2.reNumber}]
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '种植人',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请输入种植人'},
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
            }
            ]
        }],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        moreComponent: [{value: '状态'}]
    }],
    // 农事管理
    plantFarm: [
        {
            settitle: '农事管理',
            key: 'fertilize',
            roleName: ['plant/farming', 0],
            tab: '施肥信息',
            url: 'fertilize',
            batch: 'fertilizeBatch',
            selectSearch: ['manures.id'],
            selectValueId: [['manure_id', 'manure_name', true]],
            selectDefault: [{value: '', label: '肥料选择'}],
            searchPlaceholder: '请输入施肥批次号进行搜索',
            theads: ['批次号', '施肥日期', '天气', '肥料', '施用量(Kg)', '施肥方法', '施肥人', '专家', '录入人', '备注'],
            protos: ['serial', 'date', 'weather', 'manure_name', 'amount_unit', 'way', 'operate_name', 'expert_name', 'user_name', 'memo'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            typeComponent: [{
                component: output
            },
            {
                component: newbuildBtn
            }],
            listComponent: [{
                components: [{
                    name: 'manures.id',
                    value: '',
                    type: 'select',
                    component: selectSection,
                    options: []
                },
                {
                    type: 'date',
                    component: datePick
                }]
            }],
            newComponent: [{
                tab: '新建施肥信息',
                selectUrl2: [['manures', 'id', 'name', true], ['operates', 'id', 'name', true], ['experts', 'id', 'name', true]],
                selectInit2: [{value: '', label: '肥料选择'}, {value: '', label: '施肥人选择'}, {value: '', label: '专家选择'}],
                popNumber2: [0, 4, 5],
                selectWhereArr2: [[], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}]],
                components: [{
                    name: 'manure_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '肥料名称',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur', message: '请选择肥料名称', type: 'number'},
                    options: []
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '施肥日期',
                    placeholder: '',
                    rule: [{required: true, message: '请输入施肥日期'}, {validator: validate2.reDate, message: '请输入施肥日期'}]
                },
                {
                    name: 'weather',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '天气',
                    placeholder: '',
                    rule: null,
                    options: [{
                        value: '晴',
                        label: '晴'
                    },
                    {
                        value: '雨',
                        label: '雨'
                    },
                    {
                        value: '雪',
                        label: '雪'
                    },
                    {
                        value: '阴',
                        label: '阴'
                    },
                    {
                        value: '其他',
                        label: '其他'
                    }]
                },
                {
                    name: 'amount',
                    type: 'textSelect',
                    component: inputTextSelect,
                    isNull: false,
                    label: '使用量',
                    placeholder: '请填写数字（必填）',
                    options: [{
                        value: 'kg/亩',
                        label: 'kg/亩'
                    },
                    {
                        value: 'kg/平方米',
                        label: 'kg/平方米'
                    },
                    {
                        value: 'kg/公顷',
                        label: 'kg/公顷'
                    }
                    ],
                    rule: [{required: true, message: '请输入平均施肥用量', trigger: 'blur'}, {validator: validate2.reNumber}]
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    component: null,
                    isNull: true,
                    label: '施肥人',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请输入施肥人'},
                    options: []
                },
                {
                    name: 'expert_id',
                    type: 'select',
                    component: null,
                    isNull: true,
                    label: '专家',
                    placeholder: '',
                    rule: null,
                    options: []
                },
                {
                    name: 'way',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '施肥方法',
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
                tab: '编辑施肥信息',
                selectUrl2: [['manures', 'id', 'name', true], ['operates', 'id', 'name', true], ['experts', 'id', 'name', true]],
                selectInit2: [{value: '', label: '肥料选择'}, {value: '', label: '施肥人选择'}, {value: '', label: '专家选择'}],
                popNumber2: [1, 5, 6],
                selectWhereArr2: [[], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}]],
                components: [{
                    name: 'serial',
                    type: 'text',
                    component: null,
                    isNull: false,
                    disabled: true,
                    label: '施肥批次号',
                    placeholder: '必填',
                    rule: {required: true}
                },
                {
                    name: 'manure_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '肥料名称',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur', message: '请选择肥料名称', type: 'number'},
                    options: []
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '施肥日期',
                    placeholder: '',
                    rule: [{required: true, message: '请输入施肥日期'}, {validator: validate2.reDate, message: '请输入施肥日期'}]
                },
                {
                    name: 'weather',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '天气',
                    placeholder: '',
                    rule: null,
                    options: [{
                        value: '晴',
                        label: '晴'
                    },
                    {
                        value: '雨',
                        label: '雨'
                    },
                    {
                        value: '雪',
                        label: '雪'
                    },
                    {
                        value: '阴',
                        label: '阴'
                    },
                    {
                        value: '其他',
                        label: '其他'
                    }]
                },
                {
                    name: 'amount',
                    type: 'textSelect',
                    component: inputTextSelect,
                    isNull: false,
                    label: '使用量',
                    placeholder: '请填写数字（必填）',
                    options: [{
                        value: 'kg/亩',
                        label: 'kg/亩'
                    },
                    {
                        value: 'kg/平方米',
                        label: 'kg/平方米'
                    },
                    {
                        value: 'kg/公顷',
                        label: 'kg/公顷'
                    }
                    ],
                    rule: [{required: true, message: '请输入平均施肥用量', trigger: 'blur'}, {validator: validate2.reNumber}]
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    component: null,
                    isNull: true,
                    label: '施肥人',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请输入施肥人'},
                    options: []
                },
                {
                    name: 'expert_id',
                    type: 'select',
                    component: null,
                    isNull: true,
                    label: '专家',
                    placeholder: '',
                    rule: null,
                    options: []
                },
                {
                    name: 'way',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '施肥方法',
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
            }]
        },
        {
            settitle: '农事管理',
            key: 'spray',
            tab: '病虫害信息',
            roleName: ['plant/farming', 0],
            url: 'spray',
            batch: 'sprayBatch',
            selectSearch: ['medicaments.id'],
            selectValueId: [['medicament_id', 'medicament_name', true]],
            selectDefault: [{value: '', label: '农药选择'}],
            searchPlaceholder: '请输入施药批次号进行搜索',
            theads: ['农药批次号', '农药', '喷洒日期', '天气', '使用量(L)', '施药浓度', '安全隔离期(天)', '施用方法', '施药人', '专家', '录入人', '备注'],
            protos: ['serial', 'medicament_name', 'date', 'weather', 'amount_unit', 'concentration', 'safety', 'way', 'operate_name', 'expert_name', 'user_name', 'memo'],
            widths: [60, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            typeComponent: [
                {
                    component: output
                },
                {
                    component: newbuildBtn
                }
            ],
            listComponent: [{
                components: [{
                    name: 'medicaments.id',
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
                tab: '新建病虫害信息',
                selectUrl2: [['medicaments', 'id', 'name', true], ['operates', 'id', 'name', true], ['experts', 'id', 'name', true]],
                selectInit2: [{value: '', label: '农药选择'}, {value: '', label: '施药人选择'}, {value: '', label: '专家选择'}],
                popNumber2: [0, 6, 7],
                selectWhereArr2: [[], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}]],
                components: [{
                    name: 'medicament_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '农药名称',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur', message: '请选择农药名称', type: 'number'},
                    options: []
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '喷洒日期',
                    placeholder: '',
                    rule: [{required: true, message: '请输入喷洒日期'}, {validator: validate2.reDate, message: '请输入喷洒日期'}]
                },
                {
                    name: 'weather',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '天气',
                    placeholder: '',
                    rule: null,
                    options: [{
                        value: '晴',
                        label: '晴'
                    },
                    {
                        value: '雨',
                        label: '雨'
                    },
                    {
                        value: '雪',
                        label: '雪'
                    },
                    {
                        value: '阴',
                        label: '阴'
                    },
                    {
                        value: '其他',
                        label: '其他'
                    }]
                },
                {
                    name: 'amount',
                    type: 'textSelect',
                    component: inputTextSelect,
                    isNull: false,
                    label: '施用量',
                    placeholder: '请填写数字（必填）',
                    options: [{
                        value: 'ml/亩',
                        label: 'ml/亩'
                    },
                    {
                        value: 'ml/平方米',
                        label: 'ml/平方米'
                    },
                    {
                        value: 'ml/公顷',
                        label: 'ml/公顷'
                    }
                    ],
                    rule: [{required: true, message: '请输入平均施药用量', trigger: 'blur'}, {validator: validate2.reNumber}]
                },
                {
                    name: 'concentration',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '施药浓度',
                    placeholder: '',
                    rule: [{message: '请输入数字', trigger: 'blur'}, {validator: validate2.reNumber}]
                },
                {
                    name: 'safety',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '安全隔离期（天）',
                    placeholder: '',
                    rule: [{message: '请输入数字', trigger: 'blur'}, {validator: validate2.reNumber}]
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    component: null,
                    isNull: true,
                    label: '施药人',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请输入施药人'},
                    options: []
                },
                {
                    name: 'expert_id',
                    type: 'select',
                    component: null,
                    isNull: true,
                    label: '专家',
                    placeholder: '',
                    rule: null,
                    options: []
                },
                {
                    name: 'way',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '施药方法',
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
                tab: '编辑病虫害信息',
                selectUrl2: [['medicaments', 'id', 'name', true], ['operates', 'id', 'name', true], ['experts', 'id', 'name', true]],
                selectInit2: [{value: '', label: '农药选择'}, {value: '', label: '施药人选择'}, {value: '', label: '专家选择'}],
                popNumber2: [1, 7, 8],
                selectWhereArr2: [[], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}]],
                components: [{
                    name: 'serial',
                    type: 'text',
                    component: null,
                    disabled: true,
                    isNull: false,
                    label: '施药批次号',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur'}
                },
                {
                    name: 'medicament_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '农药名称',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur', message: '请选择农药名称', type: 'number'},
                    options: []
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '喷洒日期',
                    placeholder: '',
                    rule: [{required: true, message: '请输入喷洒日期'}, {validator: validate2.reDate, message: '请输入喷洒日期'}]
                },
                {
                    name: 'weather',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '天气',
                    placeholder: '',
                    rule: null,
                    options: [{
                        value: '晴',
                        label: '晴'
                    },
                    {
                        value: '雨',
                        label: '雨'
                    },
                    {
                        value: '雪',
                        label: '雪'
                    },
                    {
                        value: '阴',
                        label: '阴'
                    },
                    {
                        value: '其他',
                        label: '其他'
                    }]
                },
                {
                    name: 'amount',
                    type: 'textSelect',
                    component: inputTextSelect,
                    isNull: false,
                    label: '施用量',
                    placeholder: '请填写数字（必填）',
                    options: [{
                        value: 'ml/亩',
                        label: 'ml/亩'
                    },
                    {
                        value: 'ml/平方米',
                        label: 'ml/平方米'
                    },
                    {
                        value: 'ml/公顷',
                        label: 'ml/公顷'
                    }
                    ],
                    rule: [{required: true, message: '请输入平均施药用量', trigger: 'blur'}, {validator: validate2.reNumber}]
                },
                {
                    name: 'concentration',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '施药浓度',
                    placeholder: '',
                    rule: [{message: '请输入数字', trigger: 'blur'}, {validator: validate2.reNumber}]
                },
                {
                    name: 'safety',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '安全隔离期（天）',
                    placeholder: '',
                    rule: [{message: '请输入数字', trigger: 'blur'}, {validator: validate2.reNumber}]
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    component: null,
                    isNull: true,
                    label: '施药人',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请输入施药人'},
                    options: []
                },
                {
                    name: 'expert_id',
                    type: 'select',
                    component: null,
                    isNull: true,
                    label: '专家',
                    placeholder: '',
                    rule: null,
                    options: []
                },
                {
                    name: 'way',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '施药方法',
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
        },
        {
            settitle: '农事管理',
            key: 'plant-detect',
            tab: '种植检测信息',
            roleName: ['plant/farming', 0],
            url: 'detect',
            batch: 'plantDetectBatch',
            paramsIndex: 'plant',
            selectSearch: ['detects.name'],
            changeDataArr: [{result: {'0': '合格', '1': '不合格'}}],
            searchPlaceholder: '请输入检测批次号进行搜索',
            theads: ['检测批次号', '检验类型', '检验日期', '天气', '检测部门', '检测内容', '检查结果', '检测人', '专家', '录入人', '图片', '备注'],
            protos: ['serial', 'name', 'date', 'weather', 'department', 'content', 'result', 'operate_name', 'expert_name', 'user_name', 'img', 'memo'],
            widths: [60, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            typeComponent: [{
                component: output
            },
            {
                component: newbuildBtn
            }],
            listComponent: [{
                components: [{
                    value: '',
                    name: 'detects.name',
                    type: 'select',
                    component: selectSection,
                    options: [{
                        value: '',
                        label: '检测类型'
                    },
                    {
                        value: '土壤检测',
                        label: '土壤检测'
                    },
                    {
                        value: '水质检测',
                        label: '水质检测'
                    },
                    {
                        value: '大气污染检测',
                        label: '大气污染检测'
                    },
                    {
                        value: '农药残留检测',
                        label: '农药残留检测'
                    },
                    {
                        value: '其他检测',
                        label: '其他检测'
                    }]
                },
                {
                    type: 'date',
                    component: datePick
                }]
            }],
            newComponent: [{
                tab: '新建种植检测信息',
                selectUrl2: [['operates', 'id', 'name', true], ['experts', 'id', 'name', true]],
                selectInit2: [{value: '', label: '检测人选择'}, {value: '', label: '专家选择'}],
                popNumber2: [6, 7],
                selectWhereArr2: [[{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}]],
                hiddenValue: {type: 'plant'},
                components: [{
                    name: 'name',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '检测类型',
                    placeholder: '',
                    rule: null,
                    options: [{
                        value: '土壤检测',
                        label: '土壤检测'
                    },
                    {
                        value: '水质检测',
                        label: '水质检测'
                    },
                    {
                        value: '大气污染检测',
                        label: '大气污染检测'
                    },
                    {
                        value: '农药残留检测',
                        label: '农药残留检测'
                    },
                    {
                        value: '其他检测',
                        label: '其他检测'
                    }]
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '检测日期',
                    placeholder: '',
                    rule: [{required: true, message: '请输入检测日期'}, {validator: validate2.reDate, message: '请输入检测日期'}]
                },
                {
                    name: 'weather',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '天气',
                    placeholder: '',
                    rule: null,
                    options: [{
                        value: '晴',
                        label: '晴'
                    },
                    {
                        value: '雨',
                        label: '雨'
                    },
                    {
                        value: '雪',
                        label: '雪'
                    },
                    {
                        value: '阴',
                        label: '阴'
                    },
                    {
                        value: '其他',
                        label: '其他'
                    }]
                },
                {
                    name: 'department',
                    type: 'text',
                    component: inputTextSelect,
                    isNull: false,
                    label: '检测部门',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'content',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '检测内容',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'result',
                    type: 'select',
                    component: null,
                    isNull: true,
                    label: '检测结果',
                    placeholder: '',
                    rule: null,
                    options: [{
                        value: '合格',
                        label: '合格'
                    },
                    {
                        value: '不合格',
                        label: '不合格'
                    }]
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    component: null,
                    isNull: true,
                    label: '检测人',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请输入检测人'},
                    options: []
                },
                {
                    name: 'expert_id',
                    type: 'select',
                    component: null,
                    isNull: true,
                    label: '专家',
                    placeholder: '',
                    rule: null,
                    options: []
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '检测图片',
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
                tab: '编辑种植检测信息',
                selectUrl2: [['operates', 'id', 'name', true], ['experts', 'id', 'name', true]],
                selectInit2: [{value: '', label: '检测人选择'}, {value: '', label: '专家选择'}],
                popNumber2: [7, 8],
                selectWhereArr2: [[{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}]],
                hiddenValue: {type: 'plant'},
                components: [{
                    name: 'serial',
                    type: 'text',
                    component: null,
                    isNull: true,
                    disabled: true,
                    label: '检测批次号',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur'}
                },
                {
                    name: 'name',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '检测类型',
                    placeholder: '',
                    rule: null,
                    options: [{
                        value: '土壤检测',
                        label: '土壤检测'
                    },
                    {
                        value: '水质检测',
                        label: '水质检测'
                    },
                    {
                        value: '大气污染检测',
                        label: '大气污染检测'
                    },
                    {
                        value: '农药残留检测',
                        label: '农药残留检测'
                    },
                    {
                        value: '其他检测',
                        label: '其他检测'
                    }]
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '检测日期',
                    placeholder: '',
                    rule: [{required: true, message: '请输入检测日期'}, {validator: validate2.reDate, message: '请输入检测日期'}]
                },
                {
                    name: 'weather',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '天气',
                    placeholder: '',
                    rule: null,
                    options: [{
                        value: '晴',
                        label: '晴'
                    },
                    {
                        value: '雨',
                        label: '雨'
                    },
                    {
                        value: '雪',
                        label: '雪'
                    },
                    {
                        value: '阴',
                        label: '阴'
                    },
                    {
                        value: '其他',
                        label: '其他'
                    }]
                },
                {
                    name: 'department',
                    type: 'text',
                    component: inputTextSelect,
                    isNull: false,
                    label: '检测部门',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'content',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '检测内容',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'result',
                    type: 'select',
                    component: null,
                    isNull: true,
                    label: '检测结果',
                    placeholder: '',
                    rule: null,
                    options: [{
                        value: '合格',
                        label: '合格'
                    },
                    {
                        value: '不合格',
                        label: '不合格'
                    }]
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    component: null,
                    isNull: true,
                    label: '检测人',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请输入检测人'},
                    options: []
                },
                {
                    name: 'expert_id',
                    type: 'select',
                    component: null,
                    isNull: true,
                    label: '专家',
                    placeholder: '',
                    rule: null,
                    options: []
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '检测图片',
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
        },
        {
            settitle: '农事管理',
            key: 'farming',
            roleName: ['plant/farming', 0],
            tab: '田间信息',
            url: 'farming',
            batch: 'farmingBatch',
            searchPlaceholder: '请输入田间批次号进行搜索',
            theads: ['田间批次号', '操作日期', '天气', '操作内容', '操作方法', '操作人', '专家', '录入人', '备注'],
            protos: ['serial', 'date', 'weather', 'content', 'method', 'operate_name', 'expert_name', 'user_name', 'memo'],
            widths: [70, 50, 50, 50, 50, 50, 50, 50, 50],
            typeComponent: [
                {
                    component: output
                },
                {
                    component: newbuildBtn
                }],
            listComponent: [{
                components: [{
                    type: 'date',
                    component: datePick
                }]
            }],
            newComponent: [{
                tab: '新建田间信息',
                selectUrl2: [['operates', 'id', 'name', true], ['experts', 'id', 'name', true]],
                selectInit2: [{value: '', label: '操作人选择'}, {value: '', label: '专家选择'}],
                popNumber2: [4, 5],
                selectWhereArr2: [[{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}]],
                components: [{
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '操作日期',
                    placeholder: '',
                    rule: [{required: true, message: '请输入操作日期'}, {validator: validate2.reDate, message: '请输入操作日期'}]
                },
                {
                    name: 'weather',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '天气',
                    placeholder: '',
                    rule: null,
                    options: [{
                        value: '晴',
                        label: '晴'
                    },
                    {
                        value: '雨',
                        label: '雨'
                    },
                    {
                        value: '雪',
                        label: '雪'
                    },
                    {
                        value: '阴',
                        label: '阴'
                    },
                    {
                        value: '其他',
                        label: '其他'
                    }]
                },
                {
                    name: 'content',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '操作内容',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur', message: '请输入操作内容'}
                },
                {
                    name: 'method',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '操作方法',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    component: null,
                    isNull: true,
                    label: '操作人',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请输入操作人'},
                    options: []
                },
                {
                    name: 'expert_id',
                    type: 'select',
                    component: null,
                    isNull: true,
                    label: '专家',
                    placeholder: '',
                    rule: null,
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
                }
                ]
            }],
            editComponent: [{
                tab: '编辑田间信息',
                selectUrl2: [['operates', 'id', 'name', true], ['experts', 'id', 'name', true]],
                selectInit2: [{value: '', label: '操作人选择'}, {value: '', label: '专家选择'}],
                popNumber2: [5, 6],
                selectWhereArr2: [[{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}]],
                components: [{
                    name: 'serial',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '田间批次号',
                    disabled: true,
                    placeholder: '',
                    rule: {required: true, trigger: 'blur'}
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '操作日期',
                    placeholder: '',
                    rule: [{required: true, message: '请输入操作日期'}, {validator: validate2.reDate, message: '请输入操作日期'}]
                },
                {
                    name: 'weather',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '天气',
                    placeholder: '',
                    rule: null,
                    options: [{
                        value: '晴',
                        label: '晴'
                    },
                    {
                        value: '雨',
                        label: '雨'
                    },
                    {
                        value: '雪',
                        label: '雪'
                    },
                    {
                        value: '阴',
                        label: '阴'
                    },
                    {
                        value: '其他',
                        label: '其他'
                    }]
                },
                {
                    name: 'content',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '操作内容',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur', message: '请输入操作内容'}
                },
                {
                    name: 'method',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '操作方法',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    component: null,
                    isNull: true,
                    label: '操作人',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请输入操作人'},
                    options: []
                },
                {
                    name: 'expert_id',
                    type: 'select',
                    component: null,
                    isNull: true,
                    label: '专家',
                    placeholder: '',
                    rule: null,
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
                }
                ]
            }]
        }
    ],
    // 种植计划
    plantProduct: [{
        settitle: '生产计划管理',
        key: 'plan',
        tab: '生产计划信息',
        roleName: ['plant/plan', 0],
        url: 'plan',
        batch: 'planSerial',
        paramsIndex: 'plant',
        selectSearch: ['plans.type'],
        changeDataArr: [{type: { 'fertilize': '施肥', 'spray': '施药', 'detect': '检测', 'farming': '农事', 'harvest': '采收' }}],
        searchPlaceholder: '请输入计划内容进行搜索',
        theads: ['批次号', '计划开始日期', '计划结束日期', '操作类型', '安排人员', '计划内容', '操作用户', '备注'],
        protos: ['serial', 'date', 'end_date', 'type', 'operate_name', 'content', 'user_name', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        listComponent: [{
            components: [{
                name: 'plans.type',
                value: '',
                type: 'select',
                component: selectSection,
                options: [{
                    value: '',
                    label: '操作类型'
                },
                {
                    value: 'fertilize',
                    label: '施肥'
                },
                {
                    value: 'spray',
                    label: '施药'
                },
                {
                    value: 'harvest',
                    label: '采收'
                }]
            },
            {
                type: 'date',
                component: datePick
            }]
        }],
        newComponent: [{
            tab: '新建生产计划信息',
            selectUrl2: [['operates', 'id', 'name', true], ['manures', 'id', 'name', true], ['medicaments', 'id', 'name', true], ['cultivates', 'id', 'serial', true]],
            popNumber2: [1, 4, 6, 8],
            selectInit2: [{value: '', label: '请选择安排人员'}, {value: '', label: '请选择肥料'}, {value: '', label: '请选择农药'}, {value: '', label: '请选择种植批次号'}],
            selectWhereArr2: [[{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}], [], [], []],
            type: 'planAssoc',
            components: [{
                name: 'date',
                type: 'date',
                range: true,
                component: inputDate,
                isNull: false,
                label: '计划日期',
                placeholder: '',
                rule: [{required: true, message: '请选择计划日期'}, {validator: validate2.reDate, message: '请输入计划日期', lastDate: true}]
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '安排人员',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择安排人员'},
                options: []
            },
            {
                name: 'content',
                type: 'text',
                component: null,
                isNull: true,
                label: '计划内容',
                placeholder: '',
                rule: {required: true, trigger: 'blur', message: '请输入计划内容'}
            },
            {
                name: 'type',
                type: 'select',
                component: null,
                isNull: false,
                label: '操作类型',
                placeholder: '必填',
                selectNumber: {fertilize: [4, 5], spray: [6, 7], harvest: [8, 9]},
                rule: {required: true, trigger: 'blur', message: ''},
                options: [{
                    value: '',
                    label: '操作类型'
                },
                {
                    value: 'fertilize',
                    label: '施肥'
                },
                {
                    value: 'spray',
                    label: '施药'
                },
                {
                    value: 'harvest',
                    label: '采收'
                }]
            },
            {
                name: 'manure_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '肥料名称',
                hiddenSelect: true,
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择肥料名称'},
                options: []
            },
            {
                name: 'amount1',
                type: 'textSelect',
                component: inputTextSelect,
                isNull: false,
                hiddenSelect: true,
                label: '施肥量',
                placeholder: '请填写数字（必填）',
                rule: [{required: true, message: '请输入正确的施肥量', trigger: 'blur'}, {validator: validate2.reNumber}],
                options: [
                    {
                        value: 'kg/亩', label: 'kg/亩'
                    },
                    {
                        value: 'kg/平方米', label: 'kg/平方米'
                    },
                    {
                        value: 'kg/公顷', label: 'kg/公顷'
                    }
                ]
            },
            {
                name: 'medicament_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '农药名称',
                hiddenSelect: true,
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择农药名称'},
                options: []
            },
            {
                name: 'amount2',
                type: 'textSelect',
                component: inputTextSelect,
                isNull: false,
                hiddenSelect: true,
                label: '施药量',
                placeholder: '请填写数字（必填）',
                rule: [{required: true, message: '请输入正确的施药量', trigger: 'blur'}, {validator: validate2.reNumber}],
                options: [
                    {
                        value: 'ml/亩', label: 'ml/亩'
                    },
                    {
                        value: 'ml/平方米', label: 'ml/平方米'
                    },
                    {
                        value: 'ml/公顷', label: 'ml/公顷'
                    }
                ]
            },
            {
                name: 'cultivate_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '种植批次号',
                hiddenSelect: true,
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择种植批次号'},
                options: []
            },
            {
                name: 'amount3',
                type: 'textSelect',
                component: inputTextSelect,
                isNull: false,
                hiddenSelect: true,
                label: '采收重/数量',
                placeholder: '请填写数字（必填）',
                rule: [{required: true, message: '请输入正确的采收数量(重量)', trigger: 'blur'}, {validator: validate2.reNumber}],
                options: [
                    {
                        value: 'kg', label: 'kg'
                    },
                    {
                        value: '个', label: '个'
                    },
                    {
                        value: '箱', label: '箱'
                    }
                ]
            },
            {
                name: 'memo',
                type: 'textarea',
                component: null,
                isNull: true,
                label: '备注',
                placeholder: '',
                rule: null
            }]
        }],
        editComponent: [{
            tab: '编辑生产计划信息',
            selectUrl2: [['operates', 'id', 'name', true]],
            popNumber2: [3],
            selectWhereArr2: [[{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}]],
            selectInit2: [{value: '', label: '请选择安排人员'}],
            components: [{
                name: 'serial',
                type: 'text',
                component: null,
                isNull: true,
                label: '计划批次号',
                placeholder: '',
                disabled: true,
                rule: null
            },
            {
                name: 'date',
                type: 'text',
                component: null,
                isNull: true,
                label: '开始日期',
                placeholder: '',
                disabled: true,
                rule: null
            },
            {
                name: 'end_date',
                type: 'text',
                component: null,
                isNull: true,
                label: '结束日期',
                placeholder: '',
                disabled: true,
                rule: null
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '安排人员',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择安排人员'},
                options: []
            },
            {
                name: 'content',
                type: 'text',
                component: null,
                isNull: true,
                label: '计划内容',
                placeholder: '',
                rule: {required: true, trigger: 'blur', message: '请输入计划内容'}
            },
            {
                name: 'type',
                type: 'text',
                component: null,
                isNull: true,
                label: '操作类型',
                placeholder: '',
                disabled: true,
                rule: null
            },
            {
                name: 'memo',
                type: 'textarea',
                component: null,
                isNull: true,
                label: '备注',
                placeholder: '',
                rule: null
            }]
        }]
    }],
    // 采收管理
    plantHarvest: [{
        settitle: '采收管理',
        key: 'harvest',
        roleName: ['plant/harvest', 0],
        tab: '采收批次信息',
        url: 'harvest',
        batch: 'plantSerial',
        selectSearch: ['plantations.id'],
        selectValueId: [['plantation_id', 'plantation_name', true]],
        selectDefault: [{value: '', label: '种植区选择'}],
        changeDataArr: [{state: {0: '未完成', 1: '已完成'}}],
        searchPlaceholder: '请输入采收批次号进行搜索',
        theads: ['采收批次', '采收日期', '所属种植区', '种植批次号', '采收数量(kg)', '入库部门', '存放仓库位置', '操作人', '录入人', '状态', '备注'],
        protos: ['serial', 'date', 'plantation_name', 'cultivate_serial', 'amount', 'department', 'position', 'operate_name', 'user_name', 'state', 'memo'],
        widths: [60, 50, 50, 60, 50, 50, 50, 50, 50, 30, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        listComponent: [{
            components: [
                {
                    value: '',
                    name: 'plantations.id',
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
        moreComponent: [{value: '状态'}],
        newComponent: [{
            tab: '新建采收批次',
            selectUrl2: [['cultivates', 'id', 'serial', true], ['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '选择种植批次号'}, {value: '', label: '选择操作人'}],
            popNumber2: [1, 5],
            selectWhereArr2: [[], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}]],
            components: [{
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: true,
                label: '采收日期',
                placeholder: '必填',
                rule: [{required: true, message: '请输入采收日期'}, {validator: validate2.reDate, message: '请输入采收日期'}]
            },
            {
                name: 'cultivate_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '种植批次号',
                placeholder: '必填',
                rule: {required: true, trigger: 'blur', message: '请选择种植批次号', type: 'number'},
                options: []
            },
            {
                name: 'amount',
                type: 'text',
                component: null,
                isNull: true,
                label: '采收数量',
                placeholder: '',
                rule: [{required: true, 'message': '请输入采收数量'}, {validator: validate2.reNumber}]
            },
            {
                name: 'department',
                type: 'text',
                component: null,
                isNull: true,
                label: '入库部门',
                placeholder: '',
                rule: null
            },
            {
                name: 'position',
                type: 'text',
                component: null,
                isNull: true,
                label: '存放仓库位置',
                placeholder: '',
                rule: null
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '采收人',
                placeholder: '必填',
                rule: {required: true, trigger: 'blur', message: '请选择采收人', type: 'number'},
                options: []
            },
            {
                name: 'memo',
                type: 'textarea',
                component: null,
                isNull: true,
                label: '备注',
                placeholder: '',
                rule: null
            }]
        }],
        editComponent: [{
            tab: '编辑采收批次',
            selectUrl2: [['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '选择操作人'}],
            popNumber2: [6],
            selectWhereArr2: [[], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}]],
            components: [{
                name: 'serial',
                type: 'text',
                component: null,
                isNull: true,
                label: '采收批次号',
                disabled: true,
                placeholder: '必填',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: true,
                label: '采收日期',
                placeholder: '必填',
                rule: [{required: true, message: '请输入采收日期'}, {validator: validate2.reDate, message: '请输入采收日期'}]
            },
            {
                name: 'cultivate_serial',
                type: 'text',
                component: null,
                isNull: true,
                label: '种植批次号',
                placeholder: '必填',
                disabled: true,
                rule: {required: true}
            },
            {
                name: 'amount',
                type: 'text',
                component: null,
                isNull: true,
                label: '采收数量',
                placeholder: '',
                rule: [{required: true, 'message': '请输入采收数量'}, {validator: validate2.reNumber}]
            },
            {
                name: 'department',
                type: 'text',
                component: null,
                isNull: true,
                label: '入库部门',
                placeholder: '',
                rule: null
            },
            {
                name: 'position',
                type: 'text',
                component: null,
                isNull: true,
                label: '存放仓库位置',
                placeholder: '',
                rule: null
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '采收人',
                placeholder: '必填',
                rule: {required: true, trigger: 'blur', message: '请选择采收人', type: 'number'},
                options: []
            },
            {
                name: 'memo',
                type: 'textarea',
                component: null,
                isNull: true,
                label: '备注',
                placeholder: '',
                rule: null
            }]
        }]
    }],
    // 果蔬-加工
    vegetableSerial: [{
        settitle: '加工批次管理',
        key: 'plant-pack',
        tab: '加工批次信息',
        roleName: ['packp/pack', 0],
        url: 'pack',
        batch: 'plantPackBatch',
        paramsIndex: 'plant',
        searchPlaceholder: '请输入加工批次号',
        changeDataArr: [{state: {0: '未完成', 1: '已完成'}}],
        theads: ['加工批次号', '加工日期', '数量', '产地', '操作人', '录入人', '状态', '备注'],
        protos: ['serial', 'date', 'amount', 'origin', 'operate_name', 'user_name', 'state', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50],
        moreComponent: [{value: '状态'}],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        listComponent: [{
            components: [
                {
                    type: 'date',
                    component: datePick
                }
            ]
        }],
        newComponent: [{
            tab: '新建加工批次信息',
            hiddenValue: {type: 'plant'},
            selectUrl2: [['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '加工人选择'}],
            popNumber2: [2],
            selectWhereArr2: [[{n: 'domain', v: 'packp'}, {n: 'domain', v: 'all', s: true}]],
            components: [{
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: true,
                label: '加工日期',
                placeholder: '',
                rule: [{required: true, message: '请输入加工日期'}, {validator: validate2.reDate, message: '请输入加工日期'}]
            },
            {
                name: 'origin',
                type: 'text',
                component: null,
                isNull: true,
                label: '产地',
                placeholder: '',
                rule: {required: true}
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '操作人员',
                placeholder: '请选择加工人员',
                rule: {required: true, trigger: 'blur', type: 'number'},
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
        editComponent: [{
            tab: '编辑加工批次信息',
            hiddenValue: {type: 'plant'},
            selectUrl2: [['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '加工人选择'}],
            selectWhereArr2: [[{n: 'domain', v: 'packp'}, {n: 'domain', v: 'all', s: true}]],
            popNumber2: [3],
            components: [{
                name: 'serial',
                type: 'text',
                component: null,
                isNull: false,
                label: '加工批次号',
                disabled: true,
                placeholder: '必填'
            },
            {
                name: 'origin',
                type: 'text',
                component: null,
                isNull: true,
                label: '产地',
                placeholder: '',
                rule: {required: true}
            },
            {
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: true,
                label: '加工日期',
                placeholder: '',
                rule: [{required: true, message: '请输入加工日期'}, {validator: validate2.reDate, message: '请输入加工日期'}]
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '操作人员',
                placeholder: '请选择加工人员',
                rule: {required: true, trigger: 'blur', type: 'number'},
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
        }]
    }],
    // 果蔬-检验检测
    vegetableDetect: [{
        settitle: '检验检测管理',
        key: 'detect_pk_plant',
        roleName: ['packp/detect', 0],
        tab: '检验检测信息',
        url: 'detect_pk',
        batch: 'detectPackBatch',
        paramsIndex: 'plant',
        changeDataArr: [{result: {0: '不合格', 1: '合格'}}],
        searchPlaceholder: '请输入检测批次号搜索',
        theads: ['检测批次号', '检测名称', '检测内容', '检测日期', '检测结果', '检测机构', '负责人', '处理方法', '图片报告', '备注'],
        protos: ['serial', 'name', 'content', 'date', 'result', 'organization', 'operate_name', 'method', 'img', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        listComponent: [{
            components: [
                {
                    type: 'date',
                    component: datePick
                }
            ]
        }],
        newComponent: [{
            tab: '新建检验检测信息',
            hiddenValue: {type: 'plant'},
            selectUrl2: [['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '检测人选择'}],
            selectWhereArr2: [[{n: 'domain', v: 'packp'}, {n: 'domain', v: 'all', s: true}]],
            popNumber2: [1],
            hasImg: true,
            components: [{
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '检测日期',
                placeholder: '',
                disabled: true,
                rule: [{required: true, message: '请输入检测日期'}, {validator: validate2.reDate, message: '请输入检测日期'}]
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '负责人',
                placeholder: '请选择人物',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择负责人'},
                options: []
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测名称',
                placeholder: '请填写检测项目名称',
                rule: {required: true, trigger: 'blur', message: '请输入检测项目名称'}
            },
            {
                name: 'result',
                type: 'select',
                component: null,
                isNull: false,
                label: '检测结果',
                placeholder: '请选择检测结果',
                rule: {required: true, trigger: 'blur'},
                options: [{
                    value: '1',
                    label: '合格'
                },
                {
                    value: '0',
                    label: '不合格'
                }]
            },
            {
                name: 'content',
                type: 'textarea',
                component: null,
                isNull: false,
                label: '检测内容',
                placeholder: '请填写检测内容',
                rule: null
            },
            {
                name: 'organization',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测机构',
                placeholder: '请填写检测机构名称',
                rule: null
            },
            {
                name: 'method',
                type: 'text',
                component: null,
                isNull: false,
                label: '处理方法',
                placeholder: '请填写检测处理方法',
                rule: null
            },
            {
                name: 'img',
                type: 'file',
                component: inputFile,
                isNull: true,
                label: '检测图片报告',
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
        editComponent: [{
            tab: '编辑检验检测信息',
            selectUrl2: [['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '检测人选择'}],
            selectWhereArr2: [[{n: 'domain', v: 'packp'}, {n: 'domain', v: 'all', s: true}]],
            popNumber2: [2],
            hasImg: true,
            components: [{
                name: 'serial',
                type: 'text',
                component: null,
                isNull: false,
                label: '加工检测批次号',
                placeholder: '',
                disabled: true,
                rule: {required: true}
            },
            {
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '检测日期',
                placeholder: '',
                disabled: true,
                rule: [{required: true, message: '请输入检测日期'}, {validator: validate2.reDate, message: '请输入检测日期'}]
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '负责人',
                placeholder: '请选择人物',
                rule: {required: true, trigger: 'blur', type: 'number'},
                options: []
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测名称',
                placeholder: '请填写检测项目名称',
                rule: {required: true, trigger: 'blur', message: '请输入检测项目名称'}
            },
            {
                name: 'result',
                type: 'select',
                component: null,
                isNull: false,
                label: '检测结果',
                placeholder: '请选择检测结果',
                rule: {required: true, trigger: 'blur'},
                options: [{
                    value: '1',
                    label: '合格'
                },
                {
                    value: '0',
                    label: '不合格'
                }]
            },
            {
                name: 'content',
                type: 'textarea',
                component: null,
                isNull: false,
                label: '检测内容',
                placeholder: '请填写检测内容',
                rule: null
            },
            {
                name: 'organization',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测机构',
                placeholder: '请填写检测机构名称',
                rule: null
            },
            {
                name: 'method',
                type: 'text',
                component: null,
                isNull: false,
                label: '处理方法',
                placeholder: '请填写检测处理方法',
                rule: null
            },
            {
                name: 'img',
                type: 'file',
                component: inputFile,
                isNull: true,
                label: '检测图片报告',
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
        }]
    }],
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
    }],
    // 物流基础信息
    Logisticbase: [
        {
            settitle: '基础信息管理',
            key: 'logistic',
            roleName: ['delivery/basic', 0],
            tab: '物流公司信息',
            url: 'logistic',
            searchPlaceholder: '请输入物流公司进行搜索',
            theads: ['物流公司名称', '联系人', '联系电话', '地址', '备注信息'],
            protos: ['name', 'contacts', 'phone', 'address', 'memo'],
            widths: [50, 50, 50, 50, 50],
            listComponent: [],
            typeComponent: [{
                component: output
            },
            {
                component: newbuildBtn
            }],
            newComponent: [{
                tab: '新建物流公司信息',
                checkNumber: [0],
                components: [{
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '物流公司名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入物流公司名称', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '物流公司名称重复'}]
                },
                {
                    name: 'contacts',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '联系人',
                    placeholder: '必填',
                    rule: {required: true, message: '请输入联系人', trigger: 'blur'}
                },
                {
                    name: 'phone',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '联系电话',
                    placeholder: '请输入11位的手机号（固话用-隔开）',
                    rule: { required: true, validator: validate2.phone, trigger: 'blur' }
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
                }]
            }],
            editComponent: [{
                tab: '编辑物流公司',
                checkNumber: [0],
                components: [{
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '物流公司名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入物流公司名称', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '物流公司名称重复'}]
                },
                {
                    name: 'contacts',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '联系人',
                    placeholder: '必填',
                    rule: {required: true, message: '请输入联系人', trigger: 'blur'}
                },
                {
                    name: 'phone',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '联系电话',
                    placeholder: '请输入11位的手机号（固话用-隔开）',
                    rule: { required: true, validator: validate2.phone, trigger: 'blur' }
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
                }]
            }]
        },
        {
            settitle: '基础信息管理',
            key: 'vehicle',
            roleName: ['delivery/basic', 0],
            tab: '车辆信息',
            url: 'vehicle',
            selectSearch: ['brand'],
            selectValueId: [['brand', 'brand', true]],
            selectDefault: [{value: '', label: '车辆品牌'}],
            searchPlaceholder: '请输入车牌号进行搜索',
            theads: ['车辆品牌', '车辆号码', '核载吨位（吨）', '备注信息'],
            protos: ['brand', 'number', 'tonnage', 'memo'],
            widths: [50, 50, 50, 50],
            typeComponent: [{
                component: output
            },
            {
                component: newbuildBtn
            }],
            listComponent: [{
                components: [{
                    name: 'brand',
                    value: '',
                    type: 'select',
                    component: selectSection,
                    options: []
                }]
            }],
            newComponent: [{
                tab: '新建车辆信息',
                checkNumber: [1],
                components: [{
                    name: 'brand',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '车辆品牌',
                    placeholder: '必填',
                    rule: {required: true, message: '请输入车辆品牌', trigger: 'blur'}
                },
                {
                    name: 'number',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '车辆号码',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入车辆号码', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '车辆号码已存在'}]
                },
                {
                    name: 'tonnage',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '核载吨位',
                    placeholder: '单位为吨',
                    rule: {validator: validate2.reNumber}
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
                tab: '编辑车辆信息',
                checkNumber: [1],
                components: [{
                    name: 'brand',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '车辆品牌',
                    placeholder: '必填',
                    rule: {required: true, message: '请输入车辆品牌', trigger: 'blur'}
                },
                {
                    name: 'number',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '车辆号码',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入车辆号码', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '车辆号码已存在'}]
                },
                {
                    name: 'tonnage',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '核载吨位',
                    placeholder: '单位为吨',
                    rule: {validator: validate2.reNumber}
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
        },
        {
            settitle: '基础信息管理',
            key: 'driver',
            roleName: ['delivery/basic', 0],
            tab: '驾驶员信息',
            url: 'driver',
            changeDataArr: [{sex: {0: '男', 1: '女'}}],
            searchPlaceholder: '请输入司机姓名进行搜索',
            theads: ['驾驶员姓名', '性别', '联系电话', '取得驾照时间（年）', '出生日期', '驾照类型(A1、C2...)', '备注信息'],
            protos: ['name', 'sex', 'phone', 'driver', 'birth', 'type', 'memo'],
            widths: [50, 50, 50, 50, 50, 50, 50],
            listComponent: [],
            typeComponent: [{
                component: output
            },
            {
                component: newbuildBtn
            }],
            newComponent: [{
                tab: '新建司机信息',
                checkNumber: [0],
                components: [{
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '驾驶员姓名',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入驾驶员姓名', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '驾驶员已存在'}]
                },
                {
                    name: 'phone',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '联系电话',
                    placeholder: '请输入11位的手机号（固话用-隔开）',
                    rule: { required: true, validator: validate2.phone, trigger: 'blur' }
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
                    name: 'birth',
                    type: 'date',
                    component: inputDate,
                    isNull: true,
                    label: '出生年月',
                    placeholder: '',
                    rule: {validator: validate2.reDate, aa: '44'}
                },
                {
                    name: 'driver',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '取得驾照时间（年）',
                    placeholder: '',
                    rule: {validator: validate2.reNumber}
                },
                {
                    name: 'type',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '驾照类型',
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
            editComponent: [{
                tab: '编辑司机信息',
                checkNumber: [0],
                components: [{
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '驾驶员姓名',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入驾驶员姓名', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '驾驶员已存在'}]
                },
                {
                    name: 'phone',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '联系电话',
                    placeholder: '请输入11位的手机号（固话用-隔开）',
                    rule: { required: true, validator: validate2.phone, trigger: 'blur' }
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
                    name: 'birth',
                    type: 'date',
                    component: inputDate,
                    isNull: true,
                    label: '出生年月',
                    placeholder: '',
                    rule: {validator: validate2.reDate, aa: '44'}
                },
                {
                    name: 'driver',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '取得驾照时间（年）',
                    placeholder: '',
                    rule: {validator: validate2.reNumber}
                },
                {
                    name: 'type',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '驾照类型',
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
            }]
        }
    ],
    // 物流批次管理 数据库少了数量，物流状态
    logisticSerial: [{
        settitle: '物流批次管理',
        key: 'delivery',
        roleName: ['delivery/order', 0],
        tab: '物流批次信息',
        url: 'delivery',
        batch: 'logisticBatch',
        selectSearch: ['deliveries.transportable_type'],
        changeDataArr: [{transportable_type: { 'self': '自运', 'consign': '托运', 'selve': '自提' }}, {state: {0: '未完成', 1: '已完成'}}],
        searchPlaceholder: '请输入货物名称进行搜索',
        theads: ['物流批次', '物流日期', '货物名称', '运输方式', '操作人员', '状态', '备注'],
        protos: ['serial', 'datetime', 'name', 'transportable_type', 'operate_name', 'state', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        listComponent: [{
            components: [{
                name: 'deliveries.transportable_type',
                value: '',
                type: 'select',
                component: selectSection,
                options: [{
                    value: '', label: '运输方式'
                },
                {
                    value: 'self', label: '自运'
                },
                {
                    value: 'consign', label: '托运'
                },
                {
                    value: 'selve', label: '自提'
                }]
            },
            {
                type: 'date',
                components: 'datePick'
            }]
        }],
        newComponent: [{
            tab: '新建物流批次信息',
            divHidden: true,
            selectUrl2: [['operates', 'id', 'name', true], ['vehicles', 'id', 'number', true], ['drivers', 'id', 'name', true], ['logistics', 'id', 'name', true]],
            selectInit2: [{value: '', label: '操作人员选择'}, {value: '', label: '请选择车辆'}, {value: '', label: '请选择司机'}, {value: '', label: '请选择物流公司'}],
            popNumber2: [8, 3, 4, 5],
            selectWhereArr2: [[{n: 'domain', v: 'delivery'}, {n: 'domain', v: 'all', s: true}]],
            type: 'selectAssoc',
            components: [{
                name: 'datetime',
                type: 'date',
                component: inputDate,
                isNull: true,
                label: '物流日期',
                rule: [{required: true, message: '请输入物流日期'}, {validator: validate2.reDate, message: '请输入物流日期'}]
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: true,
                label: '货物名称',
                placeholder: '',
                rule: {required: true, message: '请输入货物名称'}
            },
            {
                name: 'transportable_type',
                type: 'select',
                component: null,
                isNull: false,
                label: '运输方式',
                placeholder: '必填',
                selectNumber: {self: [3, 4], consign: [5, 6], selve: [7]},
                rule: {required: true, trigger: 'blur', message: '请选择运输方式'},
                options: [{
                    value: '',
                    label: '运输方式'
                },
                {
                    value: 'self',
                    label: '自运'
                },
                {
                    value: 'consign',
                    label: '托运'
                },
                {
                    value: 'selve',
                    label: '自提'
                }]
            },
            {
                name: 'vehicle_id',
                type: 'select',
                component: null,
                isNull: false,
                hiddenSelect: true,
                label: '车牌号',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择运输车辆'},
                options: []
            },
            {
                name: 'driver_id',
                hiddenSelect: true,
                type: 'select',
                component: null,
                isNull: false,
                label: '司机',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择运输司机'},
                options: []
            },
            {
                name: 'logistic_id',
                type: 'select',
                component: null,
                isNull: false,
                hiddenSelect: true,
                label: '物流公司',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择物流公司'},
                options: []
            },
            {
                name: 'number',
                hiddenSelect: true,
                type: 'text',
                component: null,
                isNull: false,
                label: '物流订单号',
                placeholder: '',
                rule: {required: true, message: '请输入物流订单号'}
            },
            {
                name: 'selve_name',
                hiddenSelect: true,
                type: 'text',
                component: null,
                isNull: false,
                label: '提货人',
                placeholder: '',
                rule: {required: true, message: '请输入提货人姓名'}
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '操作人员',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择操作人员'},
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
        moreComponent: [{value: '状态'}],
        editComponent: [{
            tab: '编辑物流批次信息',
            selectUrl2: [['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '操作人员选择'}],
            selectWhereArr2: [[{n: 'domain', v: 'delivery'}, {n: 'domain', v: 'all', s: true}]],
            popNumber2: [9],
            components: [{
                name: 'serial',
                type: 'text',
                component: null,
                isNull: false,
                label: '物流批次号',
                placeholder: '必填',
                disabled: true,
                rule: {required: true}
            },
            {
                name: 'datetime',
                type: 'date',
                component: inputDate,
                isNull: true,
                label: '物流日期',
                rule: [{required: true, trigger: 'blur', message: '请输入物流日期'}, {validator: validate2.reDate, message: '请输入物流日期'}]
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: true,
                label: '货物名称',
                rule: {required: true, message: '请输入货物名称'}
            },
            {
                name: 'transportable_type',
                type: 'text',
                component: null,
                isNull: false,
                label: '运输方式',
                placeholder: '必填',
                disabled: true,
                rule: {required: true}
            },
            {
                name: 'vehicle_number',
                hiddenSelect: true,
                type: 'text',
                component: null,
                isNull: false,
                label: '车牌号',
                placeholder: '',
                disabled: true,
                rule: {required: true}
            },
            {
                name: 'driver_name',
                hiddenSelect: true,
                type: 'text',
                component: null,
                isNull: false,
                label: '司机',
                placeholder: '',
                disabled: true,
                rule: {required: true}
            },
            {
                name: 'logistic_name',
                hiddenSelect: true,
                type: 'text',
                component: null,
                isNull: false,
                label: '物流公司',
                placeholder: '',
                disabled: true,
                rule: {required: true}
            },
            {
                name: 'number',
                hiddenSelect: true,
                type: 'text',
                component: null,
                isNull: false,
                label: '物流订单',
                placeholder: '',
                disabled: true,
                rule: {required: true}
            },
            {
                name: 'selve_name',
                hiddenSelect: true,
                type: 'text',
                component: null,
                isNull: false,
                label: '提货人',
                disabled: true,
                placeholder: '',
                rule: {required: true, message: '请输入提货人姓名'}
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '操作人员',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择操作人员'},
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
        }]
    }],
    // 销售产品库
    saleProduct: [{
        settitle: '销售商品库管理',
        key: 'product-count',
        roleName: ['sell/repertory', 0],
        checkOperate: 'true',
        tab: '商品统计信息',
        url: 'product-count',
        searchPlaceholder: '请输入商品名称进行搜索',
        theads: ['商品名称', '入库总数量', '销售总数量', '加工总数量', '销售总额'],
        protos: ['product_name', 'storage_amount', 'sell_amount', 'pack_amount', 'money'],
        widths: [50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        }],
        listComponent: []
    }],
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
    ],
    // 销售-订单
    saleOrder: [{
        settitle: '销售订单管理',
        key: 'sell',
        tab: '销售订单信息',
        url: 'sell',
        roleName: ['sell/order', 0],
        batch: 'saleOrder',
        searchPlaceholder: '请输入销售订单号',
        changeDataArr: [{state: {0: '未完成', 1: '已完成'}}],
        theads: ['销售订单批次号', '订单日期', '物流批次', '客户名称', '金额', '数量', '销售员', '录入人', '状态', '备注'],
        protos: ['serial', 'datetime', 'delivery_serial', 'client_name', 'money', 'amount', 'operate_name', 'user_name', 'state', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        moreComponent: [{value: '状态'}],
        newComponent: [{
            tab: '新建订单信息',
            hiddenValue: {type: 1},
            selectUrl2: [['deliveries', 'id', 'serial', true], ['clients', 'id', 'name', true], ['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '请选择物流批次号'}, {value: '', label: '请选择销售客户'}, {value: '', label: '请选择销售人员'}],
            popNumber2: [1, 2, 3],
            selectWhereArr2: [[], [], [{n: 'domain', v: 'sell'}, {n: 'domain', v: 'all', s: true}]],
            components: [{
                name: 'datetime',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '订单日期时间',
                placeholder: '',
                disabled: true,
                rule: [{required: true, message: '请输入订单日期时间'}, {validator: validate2.reDate, message: '请输入订单日期时间'}]
            },
            {
                name: 'delivery_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '物流订单',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择物流订单'},
                options: []
            },
            {
                name: 'client_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '客户',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择销售客户'},
                options: []
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '销售员',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择销售人员'},
                options: []
            },
            {
                name: 'money',
                type: 'text',
                component: null,
                isNull: false,
                label: '销售金额',
                placeholder: '',
                rule: [{required: true, trigger: 'blur', message: '请输入销售金额'}, {validator: validate2.reNumber}]
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
            tab: '编辑订单信息',
            hiddenValue: {type: 1},
            selectUrl2: [['deliveries', 'id', 'serial', true], ['clients', 'id', 'name', true], ['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '请选择物流批次号'}, {value: '', label: '请选择销售客户'}, {value: '', label: '请选择销售人员'}],
            popNumber2: [2, 3, 4],
            selectWhereArr2: [[], [], [{n: 'domain', v: 'sell'}, {n: 'domain', v: 'all', s: true}]],
            components: [{
                name: 'serial',
                type: 'text',
                component: null,
                isNull: false,
                label: '销售批次号',
                placeholder: '',
                disabled: true,
                rule: {required: true}
            },
            {
                name: 'datetime',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '订单日期时间',
                placeholder: '',
                disabled: true,
                rule: [{required: true, trigger: 'blur', message: '请输入订单日期时间'}, {validator: validate2.reDate, message: '请输入订单日期时间'}]
            },
            {
                name: 'delivery_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '物流订单',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择物流订单'},
                options: []
            },
            {
                name: 'client_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '客户',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择销售客户'},
                options: []
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '销售员',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择销售人员'},
                options: []
            },
            {
                name: 'money',
                type: 'text',
                component: null,
                isNull: false,
                label: '销售金额',
                placeholder: '',
                rule: [{required: true, trigger: 'blur', message: '请输入销售金额'}, {validator: validate2.reNumber}]
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
                    type: 'date',
                    components: 'datePick'
                }
            ]
        }]
    }],
    // 用户管理
    systemUser: [{
        settitle: '用户管理',
        key: 'myuser',
        roleName: ['system/user', 0],
        tab: '公司用户信息',
        url: 'user',
        searchPlaceholder: '请输入用户名进行搜索',
        hiddeRole: true,
        changeDataArr: [{gender: {0: '男', 1: '女'}}],
        theads: ['用户名', '姓名', '工号', '邮箱', '性别', '电话号码', '出生日期', '所属部门', '入职日期', '头像', '备注'],
        protos: ['name', 'realname', 'number', 'email', 'gender', 'phone', 'birth_date', 'department', 'hiredate', 'thumb', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        newComponent: [{
            tab: '新建用户信息',
            hiddenValue: {type: 0},
            checkNumber: [0, 1, 5],
            components: [{
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '用户名',
                placeholder: '请输入用户名',
                rule: [{required: true, trigger: 'blur', message: '请输入用户名'}, {validator: validate2.reCheck, trigger: 'blur', message: '用户名已存在'}]
            },
            {
                name: 'email',
                type: 'text',
                component: null,
                isNull: false,
                label: '邮箱',
                placeholder: '请输入邮箱',
                rule: [{required: true, trigger: 'blur', message: '请输入正确邮箱格式', type: 'email'}, {validator: validate2.reCheck, trigger: 'blur', message: '邮箱已存在'}]
            },
            {
                name: 'gender',
                type: 'select',
                component: null,
                isNull: false,
                label: '性别',
                placeholder: '请选择性别',
                rule: {required: true, trigger: 'blur', type: 'number'},
                options: [{
                    value: 0,
                    label: '男'
                }, {
                    value: 1,
                    label: '女'
                }]
            },
            {
                name: 'realname',
                type: 'text',
                component: null,
                isNull: false,
                label: '姓名',
                placeholder: '请输入姓名',
                rule: {required: false, trigger: 'blur'}
            },
            {
                name: 'birth_date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '出生日期',
                placeholder: '请选择日期',
                rule: [{required: true, message: '请输入出生日期'}, {validator: validate2.reDate, message: '请输入出生日期'}]

            },
            {
                name: 'phone',
                type: 'text',
                component: null,
                isNull: false,
                label: '手机号码',
                placeholder: '请输入手机号码',
                rule: [{required: true, trigger: 'blur', message: '请输入手机号码'}, {validator: validate2.reCheck, trigger: 'blur', message: '手机号码已存在'}, {validator: validate2.phone}]
            },
            {
                name: 'department',
                type: 'text',
                component: null,
                isNull: false,
                label: '所属部门',
                placeholder: '请输入所属部门',
                rule: null
            },
            {
                name: 'hiredate',
                type: 'text',
                component: null,
                isNull: false,
                label: '入职日期',
                placeholder: '请输入日期',
                rule: null
            },
            {
                name: 'number',
                type: 'text',
                component: null,
                isNull: false,
                label: '工号',
                placeholder: '请输入工号',
                rule: {required: false, trigger: 'blur'}
            },
            {
                name: 'img',
                type: 'file',
                component: inputFile,
                isNull: true,
                label: '头像',
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
        editComponent: [{
            tab: '编辑用户信息',
            hiddenValue: {type: 0},
            checkNumber: [0, 1],
            components: [{
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '用户名',
                placeholder: '请输入用户名',
                rule: [{required: true, trigger: 'blur', message: '请输入用户名'}, {validator: validate2.reCheck}]
            },
            {
                name: 'email',
                type: 'text',
                component: null,
                isNull: false,
                label: '邮箱',
                placeholder: '请输入邮箱',
                rule: [{required: true, trigger: 'blur', message: '请输入正确邮箱格式', type: 'email'}, {validator: validate2.reCheck, trigger: 'blur', message: '邮箱已存在'}]
            },
            {
                name: 'gender',
                type: 'select',
                component: null,
                isNull: false,
                label: '性别',
                placeholder: '请选择性别',
                rule: {required: true, trigger: 'blur', type: 'number'},
                options: [{
                    value: 0,
                    label: '男'
                }, {
                    value: 1,
                    label: '女'
                }]
            },
            {
                name: 'realname',
                type: 'text',
                component: null,
                isNull: false,
                label: '姓名',
                placeholder: '请输入姓名',
                rule: {required: false, trigger: 'blur'}
            },
            {
                name: 'birth_date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '出生日期',
                placeholder: '请选择日期',
                rule: {required: false, trigger: 'blur', type: 'date'}
            },
            {
                name: 'phone',
                type: 'text',
                component: null,
                isNull: false,
                label: '手机号码',
                placeholder: '请输入手机号码',
                rule: [{required: true, trigger: 'blur', message: '请输入手机号码'}, {validator: validate2.reCheck, trigger: 'blur', message: '手机号码已存在'}, {validator: validate2.phone}]
            },
            {
                name: 'department',
                type: 'text',
                component: null,
                isNull: false,
                label: '所属部门',
                placeholder: '请输入所属部门',
                rule: null
            },
            {
                name: 'hiredate',
                type: 'text',
                component: null,
                isNull: false,
                label: '入职日期',
                placeholder: '请输入日期',
                rule: null
            },
            {
                name: 'number',
                type: 'text',
                component: null,
                isNull: false,
                label: '工号',
                placeholder: '请输入工号',
                rule: {required: false, trigger: 'blur', type: 'number'}
            },
            {
                name: 'img',
                type: 'file',
                component: inputFile,
                isNull: true,
                label: '头像',
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
            components: [
                {
                    type: 'date',
                    components: 'datePick'
                }
            ]
        }]
    },
    {
        settitle: '用户管理',
        key: 'myrole',
        tab: '用户角色信息',
        roleName: ['system/user', 0],
        url: 'role',
        hiddenValue: {'fixation': 1},
        searchPlaceholder: '请输入角色名称进行搜索',
        theads: ['角色名称', '角色描述', '创建时间'],
        protos: ['display_name', 'description', 'created_at'],
        widths: [50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        newComponent: [{
            tab: '新建角色信息',
            hiddenValue: {type: true},
            checkboxShow: true,
            checkNumber: [0],
            components: [{
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '角色名称',
                placeholder: '请输入角色名称',
                rule: [{required: true, trigger: 'blur', message: '请输入角色名称'}, {validator: validate2.reCheck}]
            },
            {
                name: 'description',
                type: 'textarea',
                component: null,
                isNull: true,
                label: '角色描述',
                placeholder: '',
                rule: null
            }]
        }],
        editComponent: [{
            tab: '编辑角色信息',
            checkboxShow: true,
            checkNumber: [0],
            components: [{
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '角色名称',
                placeholder: '请输入角色名称',
                rule: [{required: true, trigger: 'blur', message: '请输入角色名称'}, {validator: validate2.reCheck}]
            },
            {
                name: 'description',
                type: 'textarea',
                component: null,
                isNull: true,
                label: '角色描述',
                placeholder: '',
                rule: null
            }]
        }],
        listComponent: [{
            components: [
                {
                    type: 'date',
                    components: 'datePick'
                }
            ]
        }]
    }],
    // 系统日志
    systemLog: [{
        settitle: '系统日志',
        key: 'mylog',
        tab: '日志信息',
        url: 'log',
        roleName: ['system/log', 0],
        selectSearch: ['operate'],
        searchPlaceholder: '请输入内容进行搜索',
        theads: ['模块名称', '操作', '内容', '日期时间', '客户端ip', '用户', '备注'],
        protos: ['module', 'operate', 'content', 'datetime', 'ip', 'user_name', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50],
        listComponent: [{
            components: [{
                value: '',
                type: 'select',
                name: 'operate',
                component: selectSection,
                options: [{
                    value: '',
                    label: '请选择操作'
                },
                {
                    value: '新建',
                    label: '新建'
                },
                {
                    value: '编辑',
                    label: '编辑'
                },
                {
                    value: '删除',
                    label: '删除'
                }]
            },
            {
                type: 'date',
                components: 'datePick'
            }
            ]
        }],
        editComponent: [{
            tab: '编辑备注信息',
            components: [{
                name: 'memo',
                type: 'textarea',
                component: null,
                isNull: true,
                label: '备注信息',
                placeholder: '',
                rule: null
            }]
        }]
    }],
    // 报表
    systemReport: [{
        settitle: '报表预览',
        roleName: ['system/statement', 0],
        key: 'planManage',
        tab: '报表信息',
        url: 'plan',
        theads: ['模块名称', '操作', '内容', '日期时间', '客户端', '公司', '用户'],
        protos: ['plan_type_name', 'name', 'content'],
        widths: [50, 50, 50, 50, 50, 50, 50],
        listComponent: [],
        moreComponent: [{value: '打印'}]
    }],
    // 追溯信息自定义
    custom: [{
        settitle: '追溯信息自定义',
        roleName: ['system/custom', 0],
        key: 'customManage',
        tab: '种植自定义信息',
        batch: 'customPlant',
        url: 'custom',
        paramsIndex: 'plant',
        theads: ['批次号', '种植场名称', '种植场负责人', '种植场面积', '种植区名称', '种植区负责人', '种植区面积', '种植日期', '种植人', '采收日期', '采收人'],
        protos: ['serial', 'name', 'operate', 'area', 'c_name', 'c_operate', 'c_area', 'bc_date', 'bc_operate', 'ch_date', 'ch_operate'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
        typeComponent: [
            {
                component: output
            },
            {
                component: newbuildBtn
            }],
        newComponent: [{
            tab: '新建自定义种植信息',
            hiddenValue: {type: 'plant'},
            components: [{
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '种植场名称',
                placeholder: '请填写种植场名称',
                rule: [{required: true, trigger: 'blur', message: '请输入种植场名称'}]
            },
            {
                name: 'operate',
                type: 'text',
                component: null,
                isNull: false,
                label: '种植场负责人',
                placeholder: '请填写种植场负责人（必填）',
                rule: [{required: true, trigger: 'blur', message: '请输入种植场负责人'}]
            },
            {
                name: 'area',
                type: 'text',
                component: inputTextSelect,
                isNull: false,
                label: '种植场面积',
                placeholder: '请填写种植场面积及面积单位（必填）',
                rule: [{required: true, message: '请输入正确的面积', trigger: 'blur'}]
            },
            {
                name: 'address',
                type: 'text',
                component: null,
                isNull: false,
                label: '种植场地址',
                placeholder: '请填写种植场地址（必填）',
                rule: [{required: true, trigger: 'blur', message: '请输入种植场地址'}]
            },
            {
                name: 'c_name',
                type: 'text',
                component: null,
                isNull: false,
                label: '种植区名称',
                placeholder: '请填写种植区名称',
                rule: [{required: true, trigger: 'blur', message: '请输入种植区名称'}]
            },
            {
                name: 'c_operate',
                type: 'text',
                component: null,
                isNull: false,
                label: '种植区负责人',
                placeholder: '请填写种植区负责人（必填）',
                rule: [{required: true, trigger: 'blur', message: '请输入种植区负责人'}]
            },
            {
                name: 'c_area',
                type: 'text',
                component: inputTextSelect,
                isNull: false,
                label: '种植区面积',
                placeholder: '请填写种植区面积及面积单位（必填）',
                rule: [{required: true, message: '请输入正确的面积', trigger: 'blur'}]
            },
            {
                name: 'c_address',
                type: 'text',
                component: null,
                isNull: false,
                label: '种植区地址',
                placeholder: '请填写种植区地址（必填）',
                rule: [{required: true, trigger: 'blur', message: '请输入种植区地址'}]
            },
            {
                name: 'bc_date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '种植日期',
                placeholder: '请选择种植日期',
                disabled: true,
                rule: [{required: true, trigger: 'blur', message: '请选择种植日期'}, {validator: validate2.reDate, message: '请选择日期'}]
            },
            {
                name: 'bc_operate',
                type: 'text',
                component: null,
                isNull: false,
                label: '种植人',
                placeholder: '请输入种植人',
                rule: [{required: true, trigger: 'blur', message: '请输入种植人'}]
            },
            {
                name: 'ch_date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '采收日期',
                placeholder: '请选择采收日期',
                disabled: true,
                rule: [{required: true, trigger: 'blur', message: '请选择采收日期'}, {validator: validate2.reDate, message: '请选择日期'}]
            },
            {
                name: 'ch_operate',
                type: 'text',
                component: null,
                isNull: false,
                label: '采收人',
                placeholder: '请输入采收人',
                rule: [{required: true, trigger: 'blur', message: '请输入采收人'}]
            }]
        }],
        editComponent: [{
            tab: '编辑自定义种植信息',
            hiddenValue: {type: 'plant'},
            components: [{
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '种植场名称',
                placeholder: '请填写种植场名称',
                rule: [{required: true, trigger: 'blur', message: '请输入种植场名称'}]
            },
            {
                name: 'operate',
                type: 'text',
                component: null,
                isNull: false,
                label: '种植场负责人',
                placeholder: '请填写种植场负责人（必填）',
                rule: [{required: true, trigger: 'blur', message: '请输入种植场负责人'}]
            },
            {
                name: 'area',
                type: 'text',
                component: inputTextSelect,
                isNull: false,
                label: '种植场面积',
                placeholder: '请填写种植场面积及面积单位（必填）',
                rule: [{required: true, message: '请输入正确的面积', trigger: 'blur'}]
            },
            {
                name: 'address',
                type: 'text',
                component: null,
                isNull: false,
                label: '种植场地址',
                placeholder: '请填写种植场地址（必填）',
                rule: [{required: true, trigger: 'blur', message: '请输入种植场地址'}]
            },
            {
                name: 'c_name',
                type: 'text',
                component: null,
                isNull: false,
                label: '种植区名称',
                placeholder: '请填写种植区名称',
                rule: [{required: true, trigger: 'blur', message: '请输入种植区名称'}]
            },
            {
                name: 'c_operate',
                type: 'text',
                component: null,
                isNull: false,
                label: '种植区负责人',
                placeholder: '请填写种植区负责人（必填）',
                rule: [{required: true, trigger: 'blur', message: '请输入种植区负责人'}]
            },
            {
                name: 'c_area',
                type: 'text',
                component: inputTextSelect,
                isNull: false,
                label: '种植区面积',
                placeholder: '请填写种植区面积及面积单位（必填）',
                rule: [{required: true, message: '请输入正确的面积', trigger: 'blur'}]
            },
            {
                name: 'c_address',
                type: 'text',
                component: null,
                isNull: false,
                label: '种植区地址',
                placeholder: '请填写种植区地址（必填）',
                rule: [{required: true, trigger: 'blur', message: '请输入种植区地址'}]
            },
            {
                name: 'bc_date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '种植日期',
                placeholder: '请选择种植日期',
                disabled: true,
                rule: [{required: true, trigger: 'blur', message: '请选择种植日期'}, {validator: validate2.reDate, message: '请选择日期'}]
            },
            {
                name: 'bc_operate',
                type: 'text',
                component: null,
                isNull: false,
                label: '种植人',
                placeholder: '请输入种植人',
                rule: [{required: true, trigger: 'blur', message: '请输入种植人'}]
            },
            {
                name: 'ch_date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '采收日期',
                placeholder: '请选择采收日期',
                disabled: true,
                rule: [{required: true, trigger: 'blur', message: '请选择采收日期'}, {validator: validate2.reDate, message: '请选择日期'}]
            },
            {
                name: 'ch_operate',
                type: 'text',
                component: null,
                isNull: false,
                label: '采收人',
                placeholder: '请输入采收人',
                rule: [{required: true, trigger: 'blur', message: '请输入采收人'}]
            }]
        }],
        listComponent: [{
            components: [
                {
                    type: 'date',
                    components: 'datePick'
                }
            ]
        }]
    },
    {
        settitle: '追溯信息自定义',
        roleName: ['system/custom', 0],
        key: 'custombManage',
        tab: '养殖自定义信息',
        batch: 'customBeast',
        url: 'custom',
        paramsIndex: 'beast',
        theads: ['批次号', '养殖场名称', '养殖场负责人', '养殖场面积', '养殖区名称', '养殖区负责人', '养殖区面积', '养殖日期', '养殖人', '出栏日期', '出栏人'],
        protos: ['serial', 'name', 'operate', 'area', 'c_name', 'c_operate', 'c_area', 'bc_date', 'bc_operate', 'ch_date', 'ch_operate'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
        typeComponent: [
            {
                component: output
            },
            {
                component: newbuildBtn
            }],
        newComponent: [{
            tab: '新建自定义养殖信息',
            hiddenValue: {type: 'beast'},
            components: [{
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '养殖场名称',
                placeholder: '请填写养殖场名称',
                rule: [{required: true, trigger: 'blur', message: '请输入养殖场名称'}]
            },
            {
                name: 'operate',
                type: 'text',
                component: null,
                isNull: false,
                label: '养殖场负责人',
                placeholder: '请填写养殖场负责人（必填）',
                rule: [{required: true, trigger: 'blur', message: '请输入养殖场负责人'}]
            },
            {
                name: 'area',
                type: 'text',
                component: inputTextSelect,
                isNull: false,
                label: '养殖场面积',
                placeholder: '请填写养殖场面积及面积单位（必填）',
                rule: [{required: true, message: '请输入正确的面积', trigger: 'blur'}]
            },
            {
                name: 'address',
                type: 'text',
                component: null,
                isNull: false,
                label: '养殖场地址',
                placeholder: '请填写养殖场地址（必填）',
                rule: [{required: true, trigger: 'blur', message: '请输入养殖场地址'}]
            },
            {
                name: 'c_name',
                type: 'text',
                component: null,
                isNull: false,
                label: '养殖区名称',
                placeholder: '请填写养殖区名称',
                rule: [{required: true, trigger: 'blur', message: '请输入养殖区名称'}]
            },
            {
                name: 'c_operate',
                type: 'text',
                component: null,
                isNull: false,
                label: '养殖区负责人',
                placeholder: '请填写养殖区负责人（必填）',
                rule: [{required: true, trigger: 'blur', message: '请输入养殖区负责人'}]
            },
            {
                name: 'c_area',
                type: 'text',
                component: inputTextSelect,
                isNull: false,
                label: '养殖区面积',
                placeholder: '请填写养殖区面积及面积单位（必填）',
                rule: [{required: true, message: '请输入正确的面积', trigger: 'blur'}]
            },
            {
                name: 'c_address',
                type: 'text',
                component: null,
                isNull: false,
                label: '养殖区地址',
                placeholder: '请填写养殖区地址（必填）',
                rule: [{required: true, trigger: 'blur', message: '请输入养殖区地址'}]
            },
            {
                name: 'bc_date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '养殖日期',
                placeholder: '请选择养殖日期',
                disabled: true,
                rule: [{required: true, trigger: 'blur', message: '请选择养殖日期'}, {validator: validate2.reDate, message: '请选择日期'}]
            },
            {
                name: 'bc_operate',
                type: 'text',
                component: null,
                isNull: false,
                label: '养殖人',
                placeholder: '请输入种植人',
                rule: [{required: true, trigger: 'blur', message: '请输入种植人'}]
            },
            {
                name: 'ch_date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '出栏日期',
                placeholder: '请选择出栏日期',
                disabled: true,
                rule: [{required: true, trigger: 'blur', message: '请选择出栏日期'}, {validator: validate2.reDate, message: '请选择日期'}]
            },
            {
                name: 'ch_operate',
                type: 'text',
                component: null,
                isNull: false,
                label: '出栏人',
                placeholder: '请输入出栏人',
                rule: [{required: true, trigger: 'blur', message: '请输入出栏人'}]
            }]
        }],
        editComponent: [{
            tab: '编辑自定义养殖信息',
            hiddenValue: {type: 'beast'},
            components: [{
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '养殖场名称',
                placeholder: '请填写养殖场名称',
                rule: [{required: true, trigger: 'blur', message: '请输入养殖场名称'}]
            },
            {
                name: 'operate',
                type: 'text',
                component: null,
                isNull: false,
                label: '养殖场负责人',
                placeholder: '请填写养殖场负责人（必填）',
                rule: [{required: true, trigger: 'blur', message: '请输入养殖场负责人'}]
            },
            {
                name: 'area',
                type: 'text',
                component: inputTextSelect,
                isNull: false,
                label: '养殖场面积',
                placeholder: '请填写养殖场面积及面积单位（必填）',
                rule: [{required: true, message: '请输入正确的面积', trigger: 'blur'}]
            },
            {
                name: 'address',
                type: 'text',
                component: null,
                isNull: false,
                label: '养殖场地址',
                placeholder: '请填写养殖场地址（必填）',
                rule: [{required: true, trigger: 'blur', message: '请输入养殖场地址'}]
            },
            {
                name: 'c_name',
                type: 'text',
                component: null,
                isNull: false,
                label: '养殖区名称',
                placeholder: '请填写养殖区名称',
                rule: [{required: true, trigger: 'blur', message: '请输入养殖区名称'}]
            },
            {
                name: 'c_operate',
                type: 'text',
                component: null,
                isNull: false,
                label: '养殖区负责人',
                placeholder: '请填写养殖区负责人（必填）',
                rule: [{required: true, trigger: 'blur', message: '请输入养殖区负责人'}]
            },
            {
                name: 'c_area',
                type: 'text',
                component: inputTextSelect,
                isNull: false,
                label: '养殖区面积',
                placeholder: '请填写养殖区面积及面积单位（必填）',
                rule: [{required: true, message: '请输入正确的面积', trigger: 'blur'}]
            },
            {
                name: 'c_address',
                type: 'text',
                component: null,
                isNull: false,
                label: '养殖区地址',
                placeholder: '请填写养殖区地址（必填）',
                rule: [{required: true, trigger: 'blur', message: '请输入养殖区地址'}]
            },
            {
                name: 'bc_date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '养殖日期',
                placeholder: '请选择养殖日期',
                disabled: true,
                rule: [{required: true, trigger: 'blur', message: '请选择养殖日期'}, {validator: validate2.reDate, message: '请选择日期'}]
            },
            {
                name: 'bc_operate',
                type: 'text',
                component: null,
                isNull: false,
                label: '养殖人',
                placeholder: '请输入养殖人',
                rule: [{required: true, trigger: 'blur', message: '请输入养殖人'}]
            },
            {
                name: 'ch_date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '出栏日期',
                placeholder: '请选择出栏日期',
                disabled: true,
                rule: [{required: true, trigger: 'blur', message: '请选择出栏日期'}, {validator: validate2.reDate, message: '请选择日期'}]
            },
            {
                name: 'ch_operate',
                type: 'text',
                component: null,
                isNull: false,
                label: '出栏人',
                placeholder: '请输入出栏人',
                rule: [{required: true, trigger: 'blur', message: '请输入出栏人'}]
            }]
        }],
        listComponent: [{
            components: [
                {
                    type: 'date',
                    components: 'datePick'
                }
            ]
        }]
    }],
    // 运营-权限
    rightsOperate: [{
        settitle: '权限管理',
        key: 'permission-category',
        roleName: ['admin/role', 1],
        tab: '权限分类信息',
        url: 'permission-category',
        searchPlaceholder: '请输入展示名称进行搜索',
        theads: ['分类', '名称', '展示名称', '备注'],
        protos: ['category_id', 'name', 'display_name', 'memo'],
        widths: [50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        listComponent: [{
            components: [{
                name: '',
                value: '',
                type: 'select',
                component: selectSection,
                options: []
            }]
        }],
        newComponent: [{
            tab: '新建权限分类信息',
            selectUrl2: ['permission_categories', 'id', 'name', true],
            popNumber2: 0,
            components: [{
                name: 'pid',
                type: 'text',
                component: null,
                isNull: false,
                label: '分类',
                placeholder: '请填写分类',
                rule: {required: false, trigger: 'blur', type: 'number'},
                options: []
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '名称',
                placeholder: '请输入名称',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'display_name',
                type: 'text',
                component: null,
                isNull: false,
                label: '展示名称',
                placeholder: '请输入展示名称',
                rule: null
            },
            {
                name: 'description',
                type: 'text',
                component: null,
                isNull: false,
                label: '描述',
                placeholder: '请输入描述',
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
        editComponent: [{
            tab: '编辑权限分类信息',
            selectUrl2: ['permission_categories', 'id', 'name', true],
            popNumber2: 0,
            components: [{
                name: 'pid',
                type: 'text',
                component: null,
                isNull: false,
                label: '分类',
                placeholder: '请填写分类',
                rule: {required: false, trigger: 'blur', type: 'number'},
                options: []
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '名称',
                placeholder: '请输入名称',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'display_name',
                type: 'text',
                component: null,
                isNull: false,
                label: '展示名称',
                placeholder: '请输入展示名称',
                rule: null
            },
            {
                name: 'description',
                type: 'text',
                component: null,
                isNull: false,
                label: '描述',
                placeholder: '请输入描述',
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
        }]
    },
    {
        settitle: '权限管理',
        key: 'permission',
        roleName: ['admin/role', 1],
        tab: '权限信息',
        url: 'permission',
        searchPlaceholder: '请输入展示名称进行搜索',
        theads: ['所属权限分类', '名称', '展示名称', '资源', '备注'],
        protos: ['pid', 'name', 'display_name', 'resource', 'memo'],
        widths: [50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        listComponent: [{
            components: [{
                name: '',
                value: '',
                type: 'select',
                component: selectSection,
                options: []
            }]
        }],
        newComponent: [{
            tab: '新建权限信息',
            selectUrl2: ['permission_categories', 'id', 'name', true],
            popNumber2: 0,
            components: [{
                name: 'pid',
                type: 'select',
                component: null,
                isNull: false,
                label: '权限分类',
                placeholder: '请选择权限分类',
                rule: {required: false, trigger: 'blur', type: 'number'},
                options: []
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '名称',
                placeholder: '请输入名称',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'display_name',
                type: 'text',
                component: null,
                isNull: false,
                label: '展示名称',
                placeholder: '请输入展示名称',
                rule: null
            },
            {
                name: 'resource',
                type: 'text',
                component: null,
                isNull: false,
                label: '资源',
                placeholder: '请输入资源',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'description',
                type: 'text',
                component: null,
                isNull: false,
                label: '描述',
                placeholder: '请输入描述',
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
        editComponent: [{
            tab: '编辑权限信息',
            selectUrl2: ['permission_categories', 'id', 'name', true],
            popNumber2: 0,
            components: [{
                name: 'pid',
                type: 'select',
                component: null,
                isNull: false,
                label: '权限分类',
                placeholder: '请选择权限分类',
                rule: {required: false, trigger: 'blur', type: 'number'},
                options: []
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '名称',
                placeholder: '请输入名称',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'display_name',
                type: 'text',
                component: null,
                isNull: false,
                label: '展示名称',
                placeholder: '请输入展示名称',
                rule: null
            },
            {
                name: 'resource',
                type: 'text',
                component: null,
                isNull: false,
                label: '资源',
                placeholder: '请输入资源',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'description',
                type: 'text',
                component: null,
                isNull: false,
                label: '描述',
                placeholder: '请输入描述',
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
        }]
    }],
    // 运营-入驻单位
    settleOperate: [{
        settitle: '入驻单位管理',
        roleName: ['admin/company', 1],
        key: 'company',
        tab: '入驻单位信息',
        url: 'company',
        batch: 'companyUser',
        searchPlaceholder: '请输入公司名称进行搜索',
        theads: ['公司名称', '公司编码', '公司logo', '负责人/法人', '公司简称', '统一码', '电话', '地址', '经营范围', '员工总数', '公司网站', '销售网站'],
        protos: ['name', 'coding', 'logo', 'legal_person', 'short_name', 'USCC', 'phone', 'address', 'business_scope', 'total_staff', 'website', 'sell_website'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        moreComponent: [{value: '权限'}, {value: '用户'}],
        listComponent: [],
        newComponent: [{
            tab: '新建入驻公司信息',
            components: [{
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '公司名称',
                placeholder: '请输入公司网站名称',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'short_name',
                type: 'text',
                component: null,
                isNull: false,
                label: '公司简称',
                placeholder: '请输入公司简称',
                rule: null
            },
            {
                name: 'legal_person',
                type: 'text',
                component: null,
                isNull: false,
                label: '负责人/法人',
                placeholder: '请输入负责人/法人',
                rule: null
            },
            {
                name: 'USCC',
                type: 'text',
                component: null,
                isNull: false,
                label: '统一社会信用代码',
                placeholder: '请输入统一社会信用代码',
                rule: null
            },
            {
                name: 'phone',
                type: 'text',
                component: null,
                isNull: false,
                label: '电话',
                placeholder: '请输入11位的手机号（固话用-隔开',
                rule: {validator: validate2.phone, trigger: 'blur'}
            },
            {
                name: 'fax',
                type: 'text',
                component: null,
                isNull: false,
                label: '传真',
                placeholder: '请输入传真',
                rule: {required: false, trigger: 'blur'}
            },
            {
                name: 'address',
                type: 'text',
                component: null,
                isNull: false,
                label: '地址',
                placeholder: '请输入地址',
                rule: null
            },
            {
                name: 'business_scope',
                type: 'text',
                component: null,
                isNull: false,
                label: '经营范围',
                placeholder: '请输入经营范围',
                rule: null
            },
            {
                name: 'total_staff',
                type: 'text',
                component: null,
                isNull: false,
                label: '员工总数',
                placeholder: '请输入员工总数',
                rule: [{required: false}, {validator: validate2.reInteger}]
            },
            {
                name: 'website',
                type: 'text',
                component: null,
                isNull: false,
                label: '公司网站',
                placeholder: '请输入公司网站',
                rule: null
            },
            {
                name: 'logo',
                type: 'file',
                component: inputFile,
                isNull: false,
                label: '公司logo',
                placeholder: '',
                rule: null
            },
            {
                name: 'watermark',
                type: 'file',
                component: inputFile,
                isNull: false,
                label: '水印',
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
        editComponent: [{
            tab: '编辑入驻公司信息',
            components: [{
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '公司名称',
                placeholder: '请输入公司网站名称',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'short_name',
                type: 'text',
                component: null,
                isNull: false,
                label: '公司简称',
                placeholder: '请输入公司简称',
                rule: null
            },
            {
                name: 'legal_person',
                type: 'text',
                component: null,
                isNull: false,
                label: '负责人/法人',
                placeholder: '请输入负责人/法人',
                rule: null
            },
            {
                name: 'USCC',
                type: 'text',
                component: null,
                isNull: false,
                label: '统一社会信用代码',
                placeholder: '请输入统一社会信用代码',
                rule: null
            },
            {
                name: 'phone',
                type: 'text',
                component: null,
                isNull: false,
                label: '电话',
                placeholder: '请输入11位的手机号（固话用-隔开',
                rule: {validator: validate2.phone, trigger: 'blur'}
            },
            {
                name: 'fax',
                type: 'text',
                component: null,
                isNull: false,
                label: '传真',
                placeholder: '请输入传真',
                rule: {required: false, trigger: 'blur'}
            },
            {
                name: 'address',
                type: 'text',
                component: null,
                isNull: false,
                label: '地址',
                placeholder: '请输入地址',
                rule: null
            },
            {
                name: 'business_scope',
                type: 'text',
                component: null,
                isNull: false,
                label: '经营范围',
                placeholder: '请输入经营范围',
                rule: null
            },
            {
                name: 'total_staff',
                type: 'text',
                component: null,
                isNull: false,
                label: '员工总数',
                placeholder: '请输入员工总数',
                rule: [{required: false}, {validator: validate2.reInteger}]
            },
            {
                name: 'website',
                type: 'text',
                component: null,
                isNull: false,
                label: '公司网站',
                placeholder: '请输入公司网站',
                rule: null
            },
            {
                name: 'logo',
                type: 'file',
                component: inputFile,
                isNull: false,
                label: '公司logo',
                placeholder: '',
                rule: null
            },
            {
                name: 'watermark',
                type: 'file',
                component: inputFile,
                isNull: false,
                label: '水印',
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
        }]
    }],
    // 运营-用户反馈
    usersOperate: [{
        settitle: '用户反馈管理',
        roleName: ['admin/feedback', 1],
        key: 'feedback',
        tab: '用户反馈信息',
        url: 'feedback',
        hiddeEdit: true,
        searchPlaceholder: '请输入公司名称进行搜索',
        theads: ['所属公司', '用户名', '姓名', '联系方式', '提交日期', '评价星级', '不足', '问题描述'],
        protos: ['company_name', 'user_name', 'name', 'contact', 'datetime', 'grade', 'lack', 'content'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        }],
        listComponent: []
    }],
    // 系统日志
    logOperate: [{
        settitle: '系统日志',
        key: 'log',
        roleName: ['admin/log', 1],
        tab: '日志信息',
        url: 'log',
        selectSearch: ['operate'],
        searchPlaceholder: '请输入内容进行搜索',
        theads: ['模块名称', '操作', '内容', '日期时间', '客户端ip', '公司', '用户', '备注'],
        protos: ['module', 'operate', 'content', 'datetime', 'ip', 'company_name', 'user_name', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        listComponent: [{
            components: [{
                value: '',
                type: 'select',
                name: 'operate',
                component: selectSection,
                options: [{
                    value: '',
                    label: '请选择操作'
                },
                {
                    value: '新建',
                    label: '新建'
                },
                {
                    value: '编辑',
                    label: '编辑'
                },
                {
                    value: '删除',
                    label: '删除'
                }]
            },
            {
                type: 'date',
                components: 'datePick'
            }
            ]
        }],
        newComponent: [{
            tab: '新建日志信息',
            components: [{
                name: 'module',
                type: 'text',
                component: null,
                isNull: false,
                label: '模块名称',
                placeholder: '请输入模块名称',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'operate',
                type: 'text',
                component: null,
                isNull: false,
                label: '操作',
                placeholder: '',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'content',
                type: 'text',
                component: null,
                isNull: false,
                label: '内容',
                placeholder: '',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'ip',
                type: 'text',
                component: null,
                isNull: false,
                label: '客户端ip',
                placeholder: '',
                rule: null
            },
            {
                name: 'memo',
                type: 'textarea',
                component: null,
                isNull: false,
                label: '备注',
                placeholder: '',
                rule: null
            }]
        }],
        editComponent: [{
            tab: '编辑日志信息',
            components: [{
                name: 'module',
                type: 'text',
                component: null,
                isNull: false,
                label: '模块名称',
                placeholder: '请输入模块名称',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'operate',
                type: 'text',
                component: null,
                isNull: false,
                label: '操作',
                placeholder: '',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'content',
                type: 'text',
                component: null,
                isNull: false,
                label: '内容',
                placeholder: '',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'ip',
                type: 'text',
                component: null,
                isNull: false,
                label: '客户端ip',
                placeholder: '',
                rule: null
            },
            {
                name: 'memo',
                type: 'textarea',
                component: null,
                isNull: false,
                label: '备注',
                placeholder: '',
                rule: null
            }]
        }]
    }]
}
