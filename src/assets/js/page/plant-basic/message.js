// 中间列表的数据

import importBtn from '../../components/public/import-btn.vue'
import newbuildBtn from '../../components/public/newbuild-btn.vue'
import output from '../../components/public/output.vue'
import selectSection from '../../components/public/select-section.vue'
import datePick from '../../components/public/datePick.vue'
import inputDate from '../../components/public/inputDate.vue'
import inputFile from '../../components/public/inputFile.vue'
import inputFiles from '../../components/public/inputFiles.vue'
import inputTextSelect from '../../components/public/inputTextSelect.vue'
import Qrcode from '../../components/public/Qrcode.vue'

import validate2 from '../../utils/validate2.js'

export default {
    // 种植管理--基础信息管理
    plantBase: [
        {
            settitle: '基础信息管理',
            key: 'plantation',
            roleName: ['plant/basic', 0],
            tab: '种植场',
            url: 'plantation',
            searchPlaceholder: '请输入种植场进行搜索',
            theads: ['种植场名称', '有机种植面积', '热线电话', '负责人', '种植场图片', '视频', '备注'],
            protos: ['name', 'area_unit', 'phone', 'director', 'img', 'video', 'memo'],
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
                    label: '有机种植面积',
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
                    label: '热线电话',
                    placeholder: '请输入11位的手机号（固话用-隔开）',
                    rule: { validator: validate2.phone, trigger: 'blur' }
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
                    type: 'files',
                    component: inputFiles,
                    isNull: true,
                    label: '种植场图片',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'video',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '视频',
                    placeholder: '',
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
                    label: '有机种植面积',
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
                    label: '热线电话',
                    placeholder: '请输入11位的手机号（固话用-隔开）',
                    rule: { validator: validate2.phone, trigger: 'blur' }
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
                    component: inputFiles,
                    isNull: true,
                    label: '种植场图片',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'video',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '视频',
                    placeholder: '',
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
        },
        {
            settitle: '基础信息管理',
            roleName: ['plant/basic', 0],
            key: 'planta',
            tab: '种植区',
            url: 'planta',
            selectSearch: ['planta.pid'],
            selectValueId: [['pid', 'plantation_name', true]],
            searchPlaceholder: '请输入种植区进行搜索',
            selectDefault: [{value: '', label: '种植场选择'}],
            theads: ['所属种植场', '种植区名称', '种植区面积', '海拔高度', '种植区图片', '宣传视频', '备注'],
            protos: ['plantation_name', 'name', 'area_unit', 'altitude', 'img', 'video', 'memo'],
            widths: [50, 50, 50, 50, 50, 50, 50],
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
                    label: '种植区面积',
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
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '种植区图片',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'director',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '海拔高度',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'video',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '宣传视频',
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
                    label: '种植区名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入种植区名称', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '种植区名称重复'}]
                },
                {
                    name: 'area',
                    type: 'textSelect',
                    component: inputTextSelect,
                    isNull: false,
                    label: '种植区面积',
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
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '种植区图片',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'director',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '海拔高度',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'video',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '宣传视频',
                    placeholder: '',
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
                }
                ]
            }]
        },
        {
            settitle: '基础信息管理',
            key: 'plant',
            roleName: ['plant/basic', 0],
            tab: '茶叶档案',
            url: 'tea',
            selectSearch: ['plants.category_id'],
            selectValueId: [['category_id', 'category_name', true]],
            searchPlaceholder: '请输入茶叶品种名称进行搜索',
            selectDefault: [{value: '', label: '果蔬类别'}],
            theads: ['茶叶品种', '干茶', '汤色', '叶底', '香气', '滋味', '采摘周期', '品种图片', '备注'],
            protos: ['name', 'dry_tea', 'liquor_color', 'leaf_bottom', 'taste', 'picking_cycle', 'img', 'memo'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50],
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
                    label: '茶叶品种',
                    placeholder: '必填',
                    rule: {required: true, message: '请选择果蔬类别', trigger: 'blur', type: 'number'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '干茶',
                    placeholder: '必填',
                    rule: [{message: '请输入果蔬名称', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '果蔬名称重复'}]
                },
                {
                    name: 'description',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '汤色',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'growth_cycle',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '叶底',
                    placeholder: '',
                    rule: {validator: validate2.reNumber}
                },
                {
                    name: 'description',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '香气',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'growth_cycle',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '滋味',
                    placeholder: '',
                    rule: {validator: validate2.reNumber}
                },
                {
                    name: 'growth_cycle',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '采收周期',
                    placeholder: '',
                    rule: {required: true, validator: validate2.reNumber}
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: false,
                    label: '品种图片',
                    placeholder: ''
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
                    label: '茶叶品种',
                    placeholder: '必填',
                    rule: {required: true, message: '请选择果蔬类别', trigger: 'blur', type: 'number'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '干茶',
                    placeholder: '必填',
                    rule: [{message: '请选择果蔬类别', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '果蔬名称重复'}]
                },
                {
                    name: 'description',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '汤色',
                    placeholder: ''
                },
                {
                    name: 'growth_cycle',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '叶底',
                    placeholder: '',
                    rule: {validator: validate2.reNumber}
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '香气',
                    placeholder: '必填',
                    rule: [{message: '请选择果蔬类别', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '果蔬名称重复'}]
                },
                {
                    name: 'description',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '滋味',
                    placeholder: ''
                },
                {
                    name: 'growth_cycle',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '采收周期',
                    placeholder: '',
                    rule: {required: true, validator: validate2.reNumber}
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: false,
                    label: '品种图片',
                    placeholder: ''
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
        },
        {
            settitle: '基础信息管理',
            key: 'manure',
            tab: '肥料档案',
            roleName: ['plant/basic', 0],
            url: 'manure',
            selectSearch: ['manures.category_id'],
            selectValueId: [['category_id', 'category_name', true]],
            searchPlaceholder: '请输入肥料名称',
            selectDefault: [{value: '', label: '肥料类别'}],
            theads: ['肥料分类', '肥料名称', '包装规格', '经销商名称', '产地', '肥料图片', '备注'],
            protos: ['category', 'name', 'specification', 'dealer', 'origin', 'img', 'memo'],
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
                    label: '备注',
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
                    label: '备注',
                    placeholder: '',
                    rule: null
                }]
            }]
        }
    ],
    // 种植管理--种植批次
    plantSerial: [{
        settitle: '种植批次管理',
        key: 'cultivate',
        roleName: ['plant/cultivate', 0],
        tab: '批次管理',
        url: 'cultivate',
        batch: 'plantSerial',
        changeDataArr: [{state: {0: '未完成', 1: '已完成'}}],
        selectSearch: ['plantations.id', 'plants.id'],
        selectValueId: [['plantation_id', 'plantation_name', true], ['plant_id', 'plant_name', true]],
        selectDefault: [{value: '', label: '种植区选择'}, {value: '', label: '果蔬选择'}],
        searchPlaceholder: '请输入种植批次号进行搜索',
        theads: ['所属种植区', '茶叶品种名称', '种植日期', '种植面积', '备注'],
        protos: ['plantation_name', 'name', 'date', 'area', 'area_unit', 'memo'],
        widths: [50, 50, 50, 50, 50],
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
                label: '茶叶品种名称',
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
                name: 'memo',
                type: 'textarea',
                component: null,
                isNull: true,
                label: '备注',
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
                label: '茶叶品种名称',
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
                name: 'memo',
                type: 'textarea',
                component: null,
                isNull: true,
                label: '备注',
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
    },
    {
        settitle: '种植批次管理',
        key: 'cultivate',
        roleName: ['plant/cultivate', 0],
        tab: '生长过程管理',
        url: 'cultivate',
        batch: 'plantSerial',
        changeDataArr: [{state: {0: '未完成', 1: '已完成'}}],
        selectSearch: ['plantations.id', 'plants.id'],
        selectValueId: [['plantation_id', 'plantation_name', true], ['plant_id', 'plant_name', true]],
        selectDefault: [{value: '', label: '种植区选择'}, {value: '', label: '果蔬选择'}],
        searchPlaceholder: '请输入种植批次号进行搜索',
        theads: ['种植批次详细信息', '茶叶品种名称', '种植日期', '种植面积', '备注'],
        protos: ['plantation_name', 'serial', 'plant_name', 'date', 'area_unit', 'memo'],
        widths: [50, 50, 50, 50, 50],
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
            tab: '新建生长过程信息',
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
                name: 'dealer',
                type: 'text',
                component: null,
                isNull: false,
                rule: {required: true, trigger: 'blur', message: '请输入图片标题'},
                label: '图片标题',
                placeholder: ''
            },
            {
                name: 'dealer',
                type: 'text',
                component: null,
                isNull: false,
                rule: {required: true, trigger: 'blur', message: '请输入特征描述'},
                label: '特征描述',
                placeholder: ''
            },
            {
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '上传日期',
                placeholder: '',
                rule: [{required: true, message: '请输入种植日期'}, {validator: validate2.reDate, message: '请输入种植日期'}]
            },
            {
                name: 'img',
                type: 'file',
                component: inputFile,
                isNull: false,
                label: '上传图片',
                placeholder: ''
            },
            {
                name: 'memo',
                type: 'textarea',
                component: null,
                isNull: true,
                label: '备注',
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
                name: 'dealer',
                type: 'text',
                component: null,
                isNull: false,
                rule: {required: true, trigger: 'blur', message: '请输入图片标题'},
                label: '图片标题',
                placeholder: ''
            },
            {
                name: 'dealer',
                type: 'text',
                component: null,
                isNull: false,
                rule: {required: true, trigger: 'blur', message: '请输入特征描述'},
                label: '特征描述',
                placeholder: ''
            },
            {
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '上传日期',
                placeholder: '',
                rule: [{required: true, message: '请输入种植日期'}, {validator: validate2.reDate, message: '请输入种植日期'}]
            },
            {
                name: 'img',
                type: 'file',
                component: inputFile,
                isNull: false,
                label: '上传图片',
                placeholder: ''
            },
            {
                name: 'memo',
                type: 'textarea',
                component: null,
                isNull: true,
                label: '备注',
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
    // 种植管理--农事管理
    plantFarm: [
        {
            settitle: '农事管理',
            key: 'fertilize',
            roleName: ['plant/farming', 0],
            tab: '施肥信息管理',
            url: 'fertilize',
            batch: 'fertilizeBatch',
            selectSearch: ['manures.id'],
            selectValueId: [['manure_id', 'manure_name', true]],
            selectDefault: [{value: '', label: '肥料选择'}],
            searchPlaceholder: '请输入施肥批次号进行搜索',
            theads: ['肥料名称', '施肥时间', '天气', '使用量', '施肥方法', '备注'],
            protos: ['serial', 'date', 'weather', 'manure_name', 'amount_unit', 'way', 'memo'],
            widths: [50, 50, 50, 50, 50, 50],
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
                    label: '施肥时间',
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
                    label: '备注',
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
                    label: '施肥时间',
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
                    label: '备注',
                    placeholder: '',
                    rule: null
                }]
            }]
        },
        {
            settitle: '农事管理',
            key: 'spray',
            tab: '检测信息管理',
            roleName: ['plant/farming', 0],
            url: 'spray',
            batch: 'sprayBatch',
            selectSearch: ['medicaments.id'],
            selectValueId: [['medicament_id', 'medicament_name', true]],
            selectDefault: [{value: '', label: '农药选择'}],
            searchPlaceholder: '请输入检测批次号进行搜索',
            theads: ['检测内容', '检测日期', '检测部门', '检测内容', '检测结果', '检测人', '检测图片', '备注'],
            protos: ['serial', 'medicament_name', 'date', 'weather', 'amount_unit', 'concentration', 'safety', 'way', 'operate_name', 'expert_name', 'user_name', 'memo'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50],
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
                tab: '新建检测信息',
                selectUrl2: [['medicaments', 'id', 'name', true], ['operates', 'id', 'name', true], ['experts', 'id', 'name', true]],
                selectInit2: [{value: '', label: '农药选择'}, {value: '', label: '施药人选择'}, {value: '', label: '专家选择'}],
                popNumber2: [0, 6, 7],
                selectWhereArr2: [[], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}]],
                components: [{
                    name: 'medicament_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '检测类型',
                    placeholder: '必填',
                    rule: {trigger: 'blur', message: '请选择农药名称', type: 'number'},
                    options: []
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '检测日期',
                    placeholder: '',
                    rule: [{required: true, message: '请输入喷洒日期'}, {validator: validate2.reDate, message: '请输入喷洒日期'}]
                },
                {
                    name: 'concentration',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '检测部门',
                    placeholder: '',
                    rule: [{message: '请输入数字', trigger: 'blur'}, {validator: validate2.reNumber}]
                },
                {
                    name: 'result',
                    type: 'select',
                    component: null,
                    isNull: true,
                    label: '检测结果',
                    placeholder: '',
                    rule: [{required: true, message: '请选择检测结果', trigger: 'blur'}],
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
                    name: 'concentration',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '检测人',
                    placeholder: '',
                    rule: [{required: true, message: '请输入检测人', trigger: 'blur'}, {validator: validate2.reNumber}]
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
                    label: '备注',
                    placeholder: '',
                    rule: null
                }
                ]
            }],
            editComponent: [{
                tab: '编辑检测信息',
                selectUrl2: [['medicaments', 'id', 'name', true], ['operates', 'id', 'name', true], ['experts', 'id', 'name', true]],
                selectInit2: [{value: '', label: '农药选择'}, {value: '', label: '施药人选择'}, {value: '', label: '专家选择'}],
                popNumber2: [1, 7, 8],
                selectWhereArr2: [[], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}]],
                components: [{
                    name: 'medicament_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '检测类型',
                    placeholder: '必填',
                    rule: {trigger: 'blur', message: '请选择农药名称', type: 'number'},
                    options: []
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '检测日期',
                    placeholder: '',
                    rule: [{required: true, message: '请输入喷洒日期'}, {validator: validate2.reDate, message: '请输入喷洒日期'}]
                },
                {
                    name: 'concentration',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '检测部门',
                    placeholder: '',
                    rule: [{message: '请输入数字', trigger: 'blur'}, {validator: validate2.reNumber}]
                },
                {
                    name: 'result',
                    type: 'select',
                    component: null,
                    isNull: true,
                    label: '检测结果',
                    placeholder: '',
                    rule: [{required: true, message: '请选择检测结果', trigger: 'blur'}],
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
                    name: 'concentration',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '检测人',
                    placeholder: '',
                    rule: [{required: true, message: '请输入检测人', trigger: 'blur'}, {validator: validate2.reNumber}]
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
                    label: '备注',
                    placeholder: '',
                    rule: null
                }
                ]
            }]
        },
        {
            settitle: '农事管理',
            key: 'plant-detect',
            tab: '田间信息管理',
            roleName: ['plant/farming', 0],
            url: 'detect',
            batch: 'plantDetectBatch',
            paramsIndex: 'plant',
            selectSearch: ['detects.name'],
            changeDataArr: [{result: {'0': '合格', '1': '不合格'}}],
            searchPlaceholder: '请输入田间操作批次号进行搜索',
            theads: ['操作日期', '天气', '操作内容', '操作方法', '备注'],
            protos: ['serial', 'name', 'date', 'weather', 'department', 'content', 'result', 'operate_name', 'expert_name', 'user_name', 'img', 'memo'],
            widths: [50, 50, 50, 50, 50],
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
                tab: '新建田间信息',
                selectUrl2: [['operates', 'id', 'name', true], ['experts', 'id', 'name', true]],
                selectInit2: [{value: '', label: '检测人选择'}, {value: '', label: '专家选择'}],
                popNumber2: [6, 7],
                selectWhereArr2: [[{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}]],
                hiddenValue: {type: 'plant'},
                components: [{
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '操作日期',
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
                    rule: [{required: true, message: '请输入操作内容'}],
                    label: '操作内容',
                    placeholder: ''
                },
                {
                    name: 'content',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '操作方法',
                    placeholder: '',
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
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '操作日期',
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
                    rule: [{required: true, message: '请输入操作内容'}],
                    label: '操作内容',
                    placeholder: ''
                },
                {
                    name: 'content',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '操作方法',
                    placeholder: '',
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
                }
                ]
            }]
        }
    ],
    // 采收加工管理--采制批次管理
    vegetableSerial: [{
        settitle: '采制批次管理',
        key: 'harvest',
        roleName: ['plant/harvest', 0],
        tab: '采制批次信息',
        url: 'harvest',
        batch: 'plantSerial',
        selectSearch: ['plantations.id'],
        selectValueId: [['plantation_id', 'plantation_name', true]],
        selectDefault: [{value: '', label: '种植区选择'}],
        changeDataArr: [{state: {0: '未完成', 1: '已完成'}}],
        searchPlaceholder: '请输入采制批次号进行搜索',
        theads: ['采收开始日期', '种植批次号', '入库部门', '存放仓库位置', '备注'],
        protos: ['date', 'serial', 'department', 'position', 'memo'],
        widths: [60, 50, 50, 60, 50],
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
                label: '采收开始日期',
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
                label: '采收开始日期',
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
    // 销售管理--基础信息管理
    saleProduct: [{
        settitle: '基础信息管理',
        key: 'product-count',
        roleName: ['sell/repertory', 0],
        checkOperate: 'true',
        tab: '销售商品库管理',
        url: 'product-count',
        searchPlaceholder: '请输入商品名称进行搜索',
        theads: ['产品代码', '产品名称', '规格型号', '单位', '库存数量', '产品图片', '备注'],
        protos: ['product_name', 'name', 'specification', 'unit', 'amount', 'img', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        }],
        listComponent: []
    },
    {
        settitle: '基础信息管理',
        key: 'client',
        roleName: ['sell/storage', 0],
        tab: '客户信息管理',
        url: 'client',
        batch: 'saleInput',
        selectSearch: ['products.id'],
        selectValueId: [['product_id', 'product_name', true]],
        selectDefault: [{value: '', label: '请选择商品'}],
        paramsIndex: 0,
        changeDataArr: [{type: { 0: '平台', 1: '非平台' }}],
        searchPlaceholder: '请输入批次号进行搜索',
        theads: ['客户名称', '身份证编号(公司注册号)', '通讯地址', '所在区域', '联系人', '手机', '电话', '传真', '图片', '主办业务员', '手机', '合同签订日期', '品牌名称', '主要产品', '地区或城市', '年销售业绩(万元)', '备货情况(万元)', '经营情况'],
        protos: ['name', 'IDNumber', 'address', 'location', 'contact', 'phone', 'phone', 'fax', 'img'],
        widths: [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
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
    }],
    // 销售管理-销售订单管理
    saleOrder: [{
        settitle: '销售订单管理',
        key: 'sell',
        tab: '订单管理',
        url: 'sell',
        roleName: ['sell/order', 0],
        batch: 'saleOrder',
        searchPlaceholder: '请输入订货单号',
        changeDataArr: [{state: {0: '未完成', 1: '已完成'}}],
        theads: ['标题', '公司名称', '联系人', '联系电话', '地址', '业务员', '下单日期', '列表项包含序号', '产品名称', '规格', '单价', '数量', '金额', '备注'],
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
    },
    {
        settitle: '销售订单管理',
        key: 'sell',
        tab: '发货单管理',
        url: 'sell',
        roleName: ['sell/order', 0],
        batch: 'saleOrder',
        searchPlaceholder: '请输入订货单号',
        changeDataArr: [{state: {0: '未完成', 1: '已完成'}}],
        theads: ['标题', '公司名称', '联系人', '联系电话', '地址', '业务员', '下单日期', '列表项包含序号', '产品名称', '规格', '单价', '数量', '金额', '备注'],
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
    // 仓库物流信息
    // 基础信息管理
    storageBasic: [
        {
            settitle: '基础信息管理',
            key: 'myuser',
            roleName: ['system/user', 0],
            tab: '物流公司信息管理',
            url: 'user',
            searchPlaceholder: '请输入物理公司名搜索',
            hiddeRole: true,
            changeDataArr: [{gender: {0: '男', 1: '女'}}],
            theads: ['物流公司名称', '联系人', '联系电话', '地址', '备注'],
            protos: ['name', 'realname', 'number', 'email', 'gender'],
            widths: [50, 50, 50, 50, 50],
            typeComponent: [{
                component: output
            },
            {
                component: newbuildBtn
            }],
            newComponent: [{
                tab: '新建物流公司信息',
                hiddenValue: {type: 0},
                checkNumber: [0, 1, 5],
                components: [{
                    name: 'name',
                    type: 'text',
                    component: null,
                    label: '用户名',
                    placeholder: '请输入物流公司名称',
                    rule: {required: true, trigger: 'blur', message: '请输入物流公司名称'}
                },
                {
                    name: 'email',
                    type: 'text',
                    component: null,
                    label: '联系人',
                    placeholder: '请输入联系人',
                    rule: {required: true, trigger: 'blur', message: '请输入联系人'}
                },
                {
                    name: 'gender',
                    type: 'text',
                    component: null,
                    label: '联系电话',
                    placeholder: '请输入电话号码',
                    rule: { validator: validate2.phone, trigger: 'blur' }
                },
                {
                    name: 'address',
                    type: 'text',
                    component: null,
                    label: '地址',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    label: '备注信息',
                    placeholder: '',
                    rule: null
                }
                ]
            }],
            editComponent: [{
                tab: '编辑物流公司信息',
                hiddenValue: {type: 0},
                checkNumber: [0, 1],
                components: [{
                    name: 'name',
                    type: 'text',
                    component: null,
                    label: '用户名',
                    placeholder: '请输入物流公司名称',
                    rule: {required: true, trigger: 'blur', message: '请输入物流公司名称'}
                },
                {
                    name: 'email',
                    type: 'text',
                    component: null,
                    label: '联系人',
                    placeholder: '请输入联系人',
                    rule: {required: true, trigger: 'blur', message: '请输入联系人'}
                },
                {
                    name: 'gender',
                    type: 'text',
                    component: null,
                    label: '联系电话',
                    placeholder: '请输入电话号码',
                    rule: { validator: validate2.phone, trigger: 'blur' }
                },
                {
                    name: 'address',
                    type: 'text',
                    component: null,
                    label: '地址',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    label: '备注信息',
                    placeholder: '',
                    rule: null
                }
                ]
            }]
        },
        {
            settitle: '基础信息管理',
            key: 'myrole',
            tab: '车辆信息管理',
            roleName: ['system/user', 0],
            url: 'role',
            hiddenValue: {'fixation': 1},
            searchPlaceholder: '请输入车牌号进行搜索',
            theads: ['车牌品牌', '车牌号码', '核载吨数', '货厢长度', '货厢宽度', '货厢高度', '货厢类型', '备注'],
            protos: ['display_name', 'description', 'created_at', '', '', '', '', ''],
            widths: [50, 50, 50, 50, 50, 50, 50, 50],
            typeComponent: [{
                component: output
            },
            {
                component: newbuildBtn
            }],
            newComponent: [{
                tab: '新建车辆信息',
                checkNumber: [1],
                components: [{
                    name: 'brand',
                    type: 'text',
                    component: null,
                    label: '车牌品牌',
                    placeholder: '必填',
                    rule: {required: true, message: '请输入车牌品牌', trigger: 'blur'}
                },
                {
                    name: 'number',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '车牌号码',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入车牌号码', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '车辆号码已存在'}]
                },
                {
                    name: 'tonnage',
                    type: 'text',
                    component: null,
                    label: '核载吨位',
                    placeholder: '单位为吨',
                    rule: {validator: validate2.reNumber}
                },
                {
                    name: 'tonnage',
                    type: 'text',
                    component: null,
                    label: '货厢长度',
                    placeholder: '请输入货厢长度',
                    rule: {validator: validate2.reNumber}
                },
                {
                    name: 'tonnage',
                    type: 'text',
                    component: null,
                    label: '货厢宽度',
                    placeholder: '请输入货厢宽度（单位：m）',
                    rule: {validator: validate2.reNumber}
                },
                {
                    name: 'tonnage',
                    type: 'text',
                    component: null,
                    label: '货厢高度',
                    placeholder: '请输入货厢高度（单位：m）',
                    rule: {validator: validate2.reNumber}
                },
                {
                    name: 'tonnage',
                    type: 'select',
                    component: null,
                    label: '货厢类型',
                    placeholder: '单位为吨',
                    rule: {validator: validate2.reNumber},
                    options: [
                        {
                            value: '', label: '货厢类型'
                        },
                        {
                            value: '常规', label: '常规'
                        },
                        {
                            value: '冷藏', label: '冷藏'
                        },
                        {
                            value: '灌装', label: '灌装'
                        },
                        {
                            value: '其他', label: '其他'
                        }
                    ]
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
                    label: '车牌品牌',
                    placeholder: '必填',
                    rule: {required: true, message: '请输入车牌品牌', trigger: 'blur'}
                },
                {
                    name: 'number',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '车牌号码',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入车牌号码', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '车辆号码已存在'}]
                },
                {
                    name: 'tonnage',
                    type: 'text',
                    component: null,
                    label: '核载吨位',
                    placeholder: '单位为吨',
                    rule: {validator: validate2.reNumber}
                },
                {
                    name: 'tonnage',
                    type: 'text',
                    component: null,
                    label: '货厢长度',
                    placeholder: '请输入货厢长度（单位：m）',
                    rule: {validator: validate2.reNumber}
                },
                {
                    name: 'tonnage',
                    type: 'text',
                    component: null,
                    label: '货厢宽度',
                    placeholder: '请输入货厢宽度（单位：m）',
                    rule: {validator: validate2.reNumber}
                },
                {
                    name: 'tonnage',
                    type: 'text',
                    component: null,
                    label: '货厢高度',
                    placeholder: '请输入货厢高度（单位：m）',
                    rule: {validator: validate2.reNumber}
                },
                {
                    name: 'tonnage',
                    type: 'select',
                    component: null,
                    label: '货厢类型',
                    placeholder: '单位为吨',
                    rule: {validator: validate2.reNumber},
                    options: [
                        {
                            value: '', label: '货厢类型'
                        },
                        {
                            value: '常规', label: '常规'
                        },
                        {
                            value: '冷藏', label: '冷藏'
                        },
                        {
                            value: '灌装', label: '灌装'
                        },
                        {
                            value: '其他', label: '其他'
                        }
                    ]
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
                    name: 'brand',
                    value: '',
                    type: 'select',
                    component: selectSection,
                    options: []
                }]
            }]
        },
        {
            settitle: '基础信息管理',
            key: 'myrole',
            tab: '驾驶员信息管理',
            roleName: ['system/user', 0],
            url: 'role',
            hiddenValue: {'fixation': 1},
            searchPlaceholder: '请输入司机名称进行搜索',
            theads: ['驾驶员姓名', '性别', '联系电话', '取得驾照日期', '出生日期', '驾照类型', '备注'],
            protos: ['display_name', 'description', 'created_at', '', '', '', ''],
            widths: [50, 50, 50, 50, 50, 50, 50],
            typeComponent: [{
                component: output
            },
            {
                component: newbuildBtn
            }],
            newComponent: [{
                tab: '新建驾驶员信息',
                checkNumber: [0],
                components: [{
                    name: 'name',
                    type: 'text',
                    component: null,
                    label: '驾驶员姓名',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入驾驶员姓名', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '驾驶员已存在'}]
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
                    name: 'phone',
                    type: 'text',
                    component: null,
                    label: '联系电话',
                    placeholder: '请输入11位的手机号（固话用-隔开）',
                    rule: { required: true, validator: validate2.phone, trigger: 'blur' }
                },
                {
                    name: 'driver',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '取得驾照日期（年）',
                    placeholder: '',
                    rule: {validator: validate2.reNumber}
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
                    name: 'type',
                    type: 'select',
                    component: null,
                    isNull: true,
                    label: '驾照类型',
                    placeholder: '',
                    rule: null,
                    options: [
                        { value: 'A1', label: 'A1' },
                        { value: 'A2', label: 'A2' },
                        { value: 'B1', label: 'B1' },
                        { value: 'B2', label: 'B2' },
                        { value: 'C1', label: 'C1' },
                        { value: 'C2', label: 'C2' }
                    ]
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
                tab: '编辑驾驶员信息',
                checkNumber: [0],
                components: [{
                    name: 'name',
                    type: 'text',
                    component: null,
                    label: '驾驶员姓名',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入驾驶员姓名', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '驾驶员已存在'}]
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
                    name: 'phone',
                    type: 'text',
                    component: null,
                    label: '联系电话',
                    placeholder: '请输入11位的手机号（固话用-隔开）',
                    rule: { required: true, validator: validate2.phone, trigger: 'blur' }
                },
                {
                    name: 'driver',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '取得驾照日期（年）',
                    placeholder: '',
                    rule: {validator: validate2.reNumber}
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
                    name: 'type',
                    type: 'select',
                    component: null,
                    isNull: true,
                    label: '驾照类型',
                    placeholder: '',
                    rule: null,
                    options: [
                        { value: 'A1', label: 'A1' },
                        { value: 'A2', label: 'A2' },
                        { value: 'B1', label: 'B1' },
                        { value: 'B2', label: 'B2' },
                        { value: 'C1', label: 'C1' },
                        { value: 'C2', label: 'C2' }
                    ]
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
            key: 'myrole',
            tab: '仓库信息管理',
            roleName: ['system/user', 0],
            url: 'role',
            hiddenValue: {'fixation': 1},
            searchPlaceholder: '请输入仓库名称进行搜索',
            theads: ['仓库名称', '仓库面积', '仓库地址', '图片', '备注'],
            protos: ['display_name', 'description', 'created_at', '', ''],
            widths: [50, 50, 50, 50, 50],
            typeComponent: [{
                component: output
            },
            {
                component: newbuildBtn
            }],
            newComponent: [{
                tab: '新建仓库信息',
                components: [{
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '仓库名称',
                    placeholder: '请输入仓库名称',
                    rule: [{required: true, trigger: 'blur', message: '请输入仓库名称'}, {validator: validate2.reCheck}]
                },
                {
                    name: 'description',
                    type: 'textarea',
                    component: null,
                    label: '仓库面积',
                    placeholder: '',
                    rule: [{required: false, message: '请输入正确的数字'}, {validator: validate2.reNumber}]
                },
                {
                    name: 'video',
                    type: 'text',
                    component: null,
                    label: '仓库地址',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    label: '图片',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    label: '备注信息',
                    placeholder: '',
                    rule: null
                }]
            }],
            editComponent: [{
                tab: '编辑仓库信息',
                components: [{
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '仓库名称',
                    placeholder: '请输入仓库名称',
                    rule: [{required: true, trigger: 'blur', message: '请输入仓库名称'}, {validator: validate2.reCheck}]
                },
                {
                    name: 'description',
                    type: 'textarea',
                    component: null,
                    label: '仓库面积',
                    placeholder: '',
                    rule: [{required: false, message: '请输入正确的数字'}, {validator: validate2.reNumber}]
                },
                {
                    name: 'video',
                    type: 'text',
                    component: null,
                    label: '仓库地址',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    label: '图片',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    label: '备注信息',
                    placeholder: '',
                    rule: null
                }]
            }]
        }
    ],
    // 物流批次信息
    logisticsBatch: [{
        settitle: '物流批次管理',
        key: 'delivery',
        roleName: ['delivery/order', 0],
        tab: '物流批次信息',
        url: 'delivery',
        batch: 'logisticBatch',
        selectSearch: ['deliveries.transportable_type'],
        changeDataArr: [{transportable_type: { 'self': '自运', 'consign': '托运', 'selve': '自提' }}, {state: {0: '未完成', 1: '已完成'}}],
        searchPlaceholder: '请输入物流批次号进行搜索',
        theads: ['销售订单批次号', '物流日期', '车牌号', '司机', '备注'],
        protos: ['serial', 'datetime', 'name', 'transportable_type', 'operate_name'],
        widths: [50, 50, 50, 50, 50],
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
                    components: 'datePick'
                }
            ]
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
                type: 'text',
                component: null,
                isNull: true,
                label: '销售订单批次号',
                rule: {required: true, message: '请输入销售订单批次号'}
            },
            {
                name: 'datetime',
                type: 'date',
                component: inputDate,
                isNull: true,
                label: '物流日期',
                rule: [{required: true, message: '请输入物流日期'}, {validator: validate2.reDate, message: '请输入物流日期'}]
            },
            {
                name: 'vehicle_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '车牌号',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择运输车辆'},
                options: []
            },
            {
                name: 'driver_id',
                type: 'select',
                component: null,
                label: '司机',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择运输司机'},
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
            tab: '编辑物流批次信息',
            divHidden: true,
            selectUrl2: [['operates', 'id', 'name', true], ['vehicles', 'id', 'number', true], ['drivers', 'id', 'name', true], ['logistics', 'id', 'name', true]],
            selectInit2: [{value: '', label: '操作人员选择'}, {value: '', label: '请选择车辆'}, {value: '', label: '请选择司机'}, {value: '', label: '请选择物流公司'}],
            popNumber2: [8, 3, 4, 5],
            selectWhereArr2: [[{n: 'domain', v: 'delivery'}, {n: 'domain', v: 'all', s: true}]],
            type: 'selectAssoc',
            components: [{
                name: 'serial',
                type: 'text',
                component: null,
                label: '物流批次号',
                disabled: true,
                rule: {required: true}
            },
            {
                name: 'serial',
                type: 'text',
                component: null,
                isNull: true,
                label: '销售订单批次号',
                rule: {required: true, message: '请输入销售订单批次号'}
            },
            {
                name: 'datetime',
                type: 'date',
                component: inputDate,
                isNull: true,
                label: '物流日期',
                rule: [{required: true, message: '请输入物流日期'}, {validator: validate2.reDate, message: '请输入物流日期'}]
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
    // 仓库管理
    storageOperate: [
        {
            settitle: '仓库管理',
            key: 'delivery',
            roleName: ['delivery/order', 0],
            tab: '凤凰山茶库出库管理',
            url: 'delivery',
            batch: 'logisticBatch',
            selectSearch: ['deliveries.transportable_type'],
            changeDataArr: [{transportable_type: { 'self': '自运', 'consign': '托运', 'selve': '自提' }}, {state: {0: '未完成', 1: '已完成'}}],
            searchPlaceholder: '请输入凤凰山茶出库批次号进行搜索',
            theads: ['出库仓库名', '操作人（制票人）', '送货人', '出库日期', '编号', '成品名称', '单位', '规格', '数量', '备注', ''],
            protos: ['serial', 'datetime', 'name', 'transportable_type', 'operate_name', 'serial', 'datetime', 'name', 'transportable_type', 'operate_name'],
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
                        components: 'datePick'
                    }
                ]
            }],
            moreComponent: [{value: '状态'}],
            newComponent: [{
                tab: '新建凤凰山茶库出库信息',
                components: [{
                    name: 'datetime',
                    type: 'select',
                    component: null,
                    label: '出库仓库名',
                    rule: {required: true, message: '请输入出库仓库名'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'select',
                    component: null,
                    label: '操作人（制票人）',
                    placeholder: '',
                    rule: {required: true, message: '请输入操作人'},
                    options: []
                },
                {
                    name: 'transportable_type',
                    type: 'select',
                    component: null,
                    label: '送货人',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur', message: '请选择送货人'},
                    options: []
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    label: '出库日期',
                    placeholder: '',
                    rule: [{required: true, message: '请输入物流日期'}, {validator: validate2.reDate, message: '请输入物流日期'}]
                },
                {
                    name: 'driver_id',
                    type: 'text',
                    component: null,
                    label: '编号',
                    placeholder: '',
                    rule: {required: false, type: 'number', message: '请输入正确的数字'}
                },
                {
                    name: 'logistic_id',
                    type: 'text',
                    component: null,
                    label: '成品名称',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请输入成品名称'}
                },
                {
                    name: 'number',
                    type: 'text',
                    component: null,
                    label: '单位',
                    placeholder: '',
                    rule: {required: true, message: '请输入物流订单号'}
                },
                {
                    name: 'selve_name',
                    type: 'select',
                    component: null,
                    label: '规格',
                    placeholder: '',
                    rule: null,
                    options: []
                },
                {
                    name: 'operate_id',
                    type: 'text',
                    component: null,
                    label: '数量',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请输入数量'}
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    label: '备注信息',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'memo',
                    type: 'text',
                    component: null,
                    label: '合计',
                    placeholder: '',
                    rule: null
                }
                ]
            }],
            editComponent: [{
                tab: '编辑凤凰山茶库出库信息',
                components: [{
                    name: 'datetime',
                    type: 'select',
                    component: null,
                    label: '出库仓库名',
                    rule: {required: true, message: '请输入出库仓库名'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'select',
                    component: null,
                    label: '操作人（制票人）',
                    placeholder: '',
                    rule: {required: true, message: '请输入操作人'},
                    options: []
                },
                {
                    name: 'transportable_type',
                    type: 'select',
                    component: null,
                    label: '送货人',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur', message: '请选择送货人'},
                    options: []
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    label: '出库日期',
                    placeholder: '',
                    rule: [{required: true, message: '请输入物流日期'}, {validator: validate2.reDate, message: '请输入物流日期'}]
                },
                {
                    name: 'driver_id',
                    type: 'text',
                    component: null,
                    label: '编号',
                    placeholder: '',
                    rule: {required: false, type: 'number', message: '请输入正确的数字'}
                },
                {
                    name: 'logistic_id',
                    type: 'text',
                    component: null,
                    label: '成品名称',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请输入成品名称'}
                },
                {
                    name: 'number',
                    type: 'text',
                    component: null,
                    label: '单位',
                    placeholder: '',
                    rule: {required: true, message: '请输入物流订单号'}
                },
                {
                    name: 'selve_name',
                    type: 'select',
                    component: null,
                    label: '规格',
                    placeholder: '',
                    rule: null,
                    options: []
                },
                {
                    name: 'operate_id',
                    type: 'text',
                    component: null,
                    label: '数量',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请输入数量'}
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    label: '备注信息',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'memo',
                    type: 'text',
                    component: null,
                    label: '合计',
                    placeholder: '',
                    rule: null
                }
                ]
            }]
        },
        {
            settitle: '仓库管理',
            key: 'delivery',
            roleName: ['delivery/order', 0],
            tab: '毛茶入库管理',
            url: 'delivery',
            batch: 'logisticBatch',
            selectSearch: ['deliveries.transportable_type'],
            changeDataArr: [{transportable_type: { 'self': '自运', 'consign': '托运', 'selve': '自提' }}, {state: {0: '未完成', 1: '已完成'}}],
            searchPlaceholder: '请输入调拨单号进行搜索',
            theads: ['出库仓库名', '入库仓库名', '操作人（制票人）', '送货人', '提货人', '入库日期', '列表项包含编号', '成品名称', '单位', '规格', '数量', '备注', ''],
            protos: ['serial', 'datetime', 'name', 'transportable_type', 'operate_name', 'serial', 'datetime', 'name', 'transportable_type', 'operate_name', 'transportable_type', 'operate_name'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
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
                        components: 'datePick'
                    }
                ]
            }],
            newComponent: [{
                tab: '新建毛茶入库信息',
                components: [{
                    name: 'datetime',
                    type: 'select',
                    component: null,
                    label: '出库仓库名',
                    rule: {required: true, message: '请输入出库仓库名'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'select',
                    component: null,
                    label: '入库仓库名',
                    placeholder: '',
                    rule: {required: true, message: '请输入入库仓库名'},
                    options: []
                },
                {
                    name: 'transportable_type',
                    type: 'select',
                    component: null,
                    label: '操作人（制票人）',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur', message: '请选择操作人（制票人）'},
                    options: []
                },
                {
                    name: 'vehicle_id',
                    type: 'select',
                    component: null,
                    label: '送货人',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择送货人'},
                    options: []
                },
                {
                    name: 'driver_id',
                    type: 'select',
                    component: null,
                    label: '提货人',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择提货人'},
                    options: []
                },
                {
                    name: 'logistic_id',
                    type: 'date',
                    component: inputDate,
                    label: '入库日期',
                    placeholder: '',
                    rule: [{required: true, message: '请输入物流日期'}, {validator: validate2.reDate, message: '请输入物流日期'}]
                },
                {
                    name: 'number',
                    type: 'text',
                    component: null,
                    label: '编号',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'selve_name',
                    type: 'text',
                    component: null,
                    label: '成品名称',
                    placeholder: '',
                    rule: {required: true, message: '请输入成品名称'}
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    component: null,
                    label: '单位',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', message: '请选择单位'},
                    options: []
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    label: '规格',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'selve_name',
                    type: 'text',
                    component: null,
                    label: '数量',
                    placeholder: '',
                    rule: {required: true, message: '请输入提货人姓名', type: 'number'}
                },
                {
                    name: 'operate_id',
                    type: 'textarea',
                    component: null,
                    label: '备注',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'memo',
                    type: 'text',
                    component: null,
                    label: '合计',
                    placeholder: '',
                    rule: null
                }]
            }],
            editComponent: [{
                tab: '编辑毛茶入库信息',
                components: [{
                    name: 'datetime',
                    type: 'select',
                    component: null,
                    label: '出库仓库名',
                    rule: {required: true, message: '请输入出库仓库名'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'select',
                    component: null,
                    label: '入库仓库名',
                    placeholder: '',
                    rule: {required: true, message: '请输入入库仓库名'},
                    options: []
                },
                {
                    name: 'transportable_type',
                    type: 'select',
                    component: null,
                    label: '操作人（制票人）',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur', message: '请选择操作人（制票人）'},
                    options: []
                },
                {
                    name: 'vehicle_id',
                    type: 'select',
                    component: null,
                    label: '送货人',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择送货人'},
                    options: []
                },
                {
                    name: 'driver_id',
                    type: 'select',
                    component: null,
                    label: '提货人',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择提货人'},
                    options: []
                },
                {
                    name: 'logistic_id',
                    type: 'date',
                    component: inputDate,
                    label: '入库日期',
                    placeholder: '',
                    rule: [{required: true, message: '请输入物流日期'}, {validator: validate2.reDate, message: '请输入物流日期'}]
                },
                {
                    name: 'number',
                    type: 'text',
                    component: null,
                    label: '编号',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'selve_name',
                    type: 'text',
                    component: null,
                    label: '成品名称',
                    placeholder: '',
                    rule: {required: true, message: '请输入成品名称'}
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    component: null,
                    label: '单位',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', message: '请选择单位'},
                    options: []
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    label: '规格',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'selve_name',
                    type: 'text',
                    component: null,
                    label: '数量',
                    placeholder: '',
                    rule: {required: true, message: '请输入提货人姓名', type: 'number'}
                },
                {
                    name: 'operate_id',
                    type: 'textarea',
                    component: null,
                    label: '备注',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'memo',
                    type: 'text',
                    component: null,
                    label: '合计',
                    placeholder: '',
                    rule: null
                }]
            }]
        },
        {
            settitle: '仓库管理',
            key: 'delivery',
            roleName: ['delivery/order', 0],
            tab: '产品入库管理',
            url: 'delivery',
            batch: 'logisticBatch',
            selectSearch: ['deliveries.transportable_type'],
            changeDataArr: [{transportable_type: { 'self': '自运', 'consign': '托运', 'selve': '自提' }}, {state: {0: '未完成', 1: '已完成'}}],
            searchPlaceholder: '请输入库单号进行搜索',
            theads: ['发货单位', '编号', '入库日期', '收货仓库', '成品名称', '规格型号', '任务单号', '基本单位名称', '基本单位应收数量', '基本单位实收数量', '单位', '实收数量', '备注', '生产/采购日期', '保质期', '有效期至', '收货仓库', '仓位'],
            protos: ['serial', 'datetime', 'name', 'transportable_type', 'operate_name', 'serial', 'datetime', 'name', 'transportable_type', 'operate_name', 'transportable_type', 'operate_name', 'serial', 'datetime', 'name', 'transportable_type', 'operate_name', 'serial', 'datetime', 'name'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
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
                        components: 'datePick'
                    }
                ]
            }],
            newComponent: [{
                tab: '新建产品入库信息',
                components: [{
                    name: 'datetime',
                    type: 'text',
                    component: null,
                    label: '发货单位',
                    rule: {required: true, message: '请输入发货单位'}
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    label: '编号',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'transportable_type',
                    type: 'date',
                    component: inputDate,
                    label: '入库日期',
                    placeholder: '必填',
                    rule: [{required: true, message: '请选择入库日期'}, {validator: validate2.reDate, message: '请选择入库日期'}]
                },
                {
                    name: 'vehicle_id',
                    type: 'select',
                    component: null,
                    label: '收货仓库',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', message: '请选择收货仓库'},
                    options: []
                },
                {
                    name: 'driver_id',
                    type: 'select',
                    component: null,
                    label: '成品名称',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', message: '请选择成品名称'},
                    options: []
                },
                {
                    name: 'logistic_id',
                    type: 'select',
                    component: null,
                    label: '规格型号',
                    placeholder: '',
                    rule: {required: true, message: '请输入规格型号'},
                    options: []
                },
                {
                    name: 'number',
                    type: 'text',
                    component: null,
                    label: '任务单号',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'selve_name',
                    type: 'text',
                    component: null,
                    label: '基本单位名称',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'operate_id',
                    type: 'text',
                    component: null,
                    label: '基本单位应收数量',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'memo',
                    type: 'text',
                    component: null,
                    label: '基本单位实收数量',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'selve_name',
                    type: 'select',
                    component: null,
                    label: '单位',
                    placeholder: '',
                    rule: {required: true, message: '请选择单位'},
                    options: []
                },
                {
                    name: 'operate_id',
                    type: 'text',
                    component: null,
                    label: '实收数量',
                    placeholder: '',
                    rule: {required: true, message: '请输入实收单位'}
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    label: '备注',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'operate_id',
                    type: 'date',
                    component: inputDate,
                    label: '生产/采购日期',
                    placeholder: '',
                    rule: [{required: false, message: '请选择入库日期'}, {validator: validate2.reDate, message: '请选择入库日期'}]
                },
                {
                    name: 'memo',
                    type: 'text',
                    component: null,
                    label: '保质期（天）',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'selve_name',
                    type: 'date',
                    component: inputDate,
                    label: '有效期至',
                    placeholder: '',
                    rule: [{required: false, message: '请选择入库日期'}, {validator: validate2.reDate, message: '请选择入库日期'}]
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    component: null,
                    label: '收货仓库',
                    placeholder: '',
                    rule: {required: true, message: '请选择收货仓库'},
                    options: []
                },
                {
                    name: 'memo',
                    type: 'text',
                    component: null,
                    label: '仓位',
                    placeholder: '',
                    rule: null
                }]
            }],
            editComponent: [{
                tab: '编辑产品入库信息',
                components: [{
                    name: 'datetime',
                    type: 'text',
                    component: null,
                    label: '发货单位',
                    rule: {required: true, message: '请输入发货单位'}
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    label: '编号',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'transportable_type',
                    type: 'date',
                    component: inputDate,
                    label: '入库日期',
                    placeholder: '必填',
                    rule: [{required: true, message: '请选择入库日期'}, {validator: validate2.reDate, message: '请选择入库日期'}]
                },
                {
                    name: 'vehicle_id',
                    type: 'select',
                    component: null,
                    label: '收货仓库',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', message: '请选择收货仓库'},
                    options: []
                },
                {
                    name: 'driver_id',
                    type: 'select',
                    component: null,
                    label: '成品名称',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', message: '请选择成品名称'},
                    options: []
                },
                {
                    name: 'logistic_id',
                    type: 'select',
                    component: null,
                    label: '规格型号',
                    placeholder: '',
                    rule: {required: true, message: '请输入规格型号'},
                    options: []
                },
                {
                    name: 'number',
                    type: 'text',
                    component: null,
                    label: '任务单号',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'selve_name',
                    type: 'text',
                    component: null,
                    label: '基本单位名称',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'operate_id',
                    type: 'text',
                    component: null,
                    label: '基本单位应收数量',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'memo',
                    type: 'text',
                    component: null,
                    label: '基本单位实收数量',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'selve_name',
                    type: 'select',
                    component: null,
                    label: '单位',
                    placeholder: '',
                    rule: {required: true, message: '请选择单位'},
                    options: []
                },
                {
                    name: 'operate_id',
                    type: 'text',
                    component: null,
                    label: '实收数量',
                    placeholder: '',
                    rule: {required: true, message: '请输入实收单位'}
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    label: '备注',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'operate_id',
                    type: 'date',
                    component: inputDate,
                    label: '生产/采购日期',
                    placeholder: '',
                    rule: [{required: false, message: '请选择入库日期'}, {validator: validate2.reDate, message: '请选择入库日期'}]
                },
                {
                    name: 'memo',
                    type: 'text',
                    component: null,
                    label: '保质期（天）',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'selve_name',
                    type: 'date',
                    component: inputDate,
                    label: '有效期至',
                    placeholder: '',
                    rule: [{required: false, message: '请选择入库日期'}, {validator: validate2.reDate, message: '请选择入库日期'}]
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    component: null,
                    label: '收货仓库',
                    placeholder: '',
                    rule: {required: true, message: '请选择收货仓库'},
                    options: []
                },
                {
                    name: 'memo',
                    type: 'text',
                    component: null,
                    label: '仓位',
                    placeholder: '',
                    rule: null
                }]
            }]
        },
        {
            settitle: '仓库管理',
            key: 'delivery',
            roleName: ['delivery/order', 0],
            tab: '生产任务管理',
            url: 'delivery',
            batch: 'logisticBatch',
            selectSearch: ['deliveries.transportable_type'],
            changeDataArr: [{transportable_type: { 'self': '自运', 'consign': '托运', 'selve': '自提' }}, {state: {0: '未完成', 1: '已完成'}}],
            searchPlaceholder: '请输入生产任务单号进行搜索',
            theads: ['标题', '下单单号', '客户名称', '客户电话', '交接员', '下单日期', '出货日期', '序号', '产品名称', '规格', '数量', '备注', '包装', '制单人', '部门经理审核', '合计', '送货地址'],
            protos: ['serial', 'datetime', 'name', 'transportable_type', 'operate_name', 'serial', 'datetime', 'name', 'transportable_type', 'operate_name', 'transportable_type', 'operate_name', 'serial', 'datetime', 'name', 'transportable_type', 'operate_name', 'serial', 'datetime'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
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
                        components: 'datePick'
                    }
                ]
            }],
            newComponent: [{
                tab: '新建产品入库信息',
                components: [{
                    name: 'datetime',
                    type: 'text',
                    component: null,
                    label: '标题',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    label: '下单单号',
                    placeholder: '',
                    rule: {required: true, message: '请输入下单单号'}
                },
                {
                    name: 'transportable_type',
                    type: 'select',
                    component: null,
                    label: '客户名称',
                    placeholder: '必选',
                    rule: {required: true, trigger: 'blur', message: '请选择客户名称'},
                    options: []
                },
                {
                    name: 'vehicle_id',
                    type: 'text',
                    component: null,
                    label: '客户电话',
                    placeholder: '',
                    rule: [{required: true, trigger: 'blur', message: '请输入客户电话'}, { validator: validate2.phone, trigger: 'blur' }]
                },
                {
                    name: 'driver_id',
                    type: 'select',
                    component: null,
                    label: '交接员',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', message: '请选择交接员'},
                    options: []
                },
                {
                    name: 'logistic_id',
                    type: 'date',
                    component: inputDate,
                    label: '下单日期',
                    placeholder: '',
                    rule: [{required: true, message: '请选择入库日期'}, {validator: validate2.reDate, message: '请选择入库日期'}]
                },
                {
                    name: 'number',
                    type: 'text',
                    component: null,
                    label: '出货日期',
                    placeholder: '',
                    rule: [{required: true, message: '请选择入库日期'}, {validator: validate2.reDate, message: '请选择入库日期'}]
                },
                {
                    name: 'selve_name',
                    type: 'text',
                    component: null,
                    label: '序号',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    component: null,
                    label: '产品名称',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择产品名称'},
                    options: []
                },
                {
                    name: 'memo',
                    type: 'select',
                    component: null,
                    label: '规格',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', message: '请选择规格'},
                    options: []
                },
                {
                    name: 'memo',
                    type: 'text',
                    component: null,
                    label: '数量',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请输入数量'}
                },
                {
                    name: 'vehicle_id',
                    type: 'textarea',
                    component: null,
                    label: '备注',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'driver_id',
                    type: 'text',
                    component: null,
                    label: '包装',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'logistic_id',
                    type: 'select',
                    component: null,
                    label: '制单人',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', message: '请选择制单人'},
                    options: []
                },
                {
                    name: 'number',
                    type: 'select',
                    component: null,
                    label: '部门经理审核',
                    placeholder: '',
                    rule: {required: true, message: '请部门经理审核'},
                    options: [
                        { value: 0, label: '不通过' },
                        { value: 1, label: '通过' }
                    ]
                },
                {
                    name: 'selve_name',
                    type: 'text',
                    component: null,
                    label: '合计',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'operate_id',
                    type: 'text',
                    component: null,
                    label: '送货地址',
                    placeholder: '',
                    rule: null
                }]
            }],
            moreComponent: [{value: '审核状态'}],
            editComponent: [{
                tab: '编辑产品入库信息',
                components: [{
                    name: 'datetime',
                    type: 'text',
                    component: null,
                    label: '标题',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    label: '下单单号',
                    placeholder: '',
                    rule: {required: true, message: '请输入下单单号'}
                },
                {
                    name: 'transportable_type',
                    type: 'select',
                    component: null,
                    label: '客户名称',
                    placeholder: '必选',
                    rule: {required: true, trigger: 'blur', message: '请选择客户名称'},
                    options: []
                },
                {
                    name: 'vehicle_id',
                    type: 'text',
                    component: null,
                    label: '客户电话',
                    placeholder: '',
                    rule: [{required: true, trigger: 'blur', message: '请输入客户电话'}, { validator: validate2.phone, trigger: 'blur' }]
                },
                {
                    name: 'driver_id',
                    type: 'select',
                    component: null,
                    label: '交接员',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', message: '请选择交接员'},
                    options: []
                },
                {
                    name: 'logistic_id',
                    type: 'date',
                    component: inputDate,
                    label: '下单日期',
                    placeholder: '',
                    rule: [{required: true, message: '请选择入库日期'}, {validator: validate2.reDate, message: '请选择入库日期'}]
                },
                {
                    name: 'number',
                    type: 'text',
                    component: null,
                    label: '出货日期',
                    placeholder: '',
                    rule: [{required: true, message: '请选择入库日期'}, {validator: validate2.reDate, message: '请选择入库日期'}]
                },
                {
                    name: 'selve_name',
                    type: 'text',
                    component: null,
                    label: '序号',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    component: null,
                    label: '产品名称',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择产品名称'},
                    options: []
                },
                {
                    name: 'memo',
                    type: 'select',
                    component: null,
                    label: '规格',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', message: '请选择规格'},
                    options: []
                },
                {
                    name: 'memo',
                    type: 'text',
                    component: null,
                    label: '数量',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请输入数量'}
                },
                {
                    name: 'vehicle_id',
                    type: 'textarea',
                    component: null,
                    label: '备注',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'driver_id',
                    type: 'text',
                    component: null,
                    label: '包装',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'logistic_id',
                    type: 'select',
                    component: null,
                    label: '制单人',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', message: '请选择制单人'},
                    options: []
                },
                {
                    name: 'number',
                    type: 'select',
                    component: null,
                    label: '部门经理审核',
                    placeholder: '',
                    rule: {required: true, message: '请部门经理审核'},
                    options: [
                        { value: 0, label: '不通过' },
                        { value: 1, label: '通过' }
                    ]
                },
                {
                    name: 'selve_name',
                    type: 'text',
                    component: null,
                    label: '合计',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'operate_id',
                    type: 'text',
                    component: null,
                    label: '送货地址',
                    placeholder: '',
                    rule: null
                }]
            }]
        },
        {
            settitle: '仓库管理',
            key: 'delivery',
            roleName: ['delivery/order', 0],
            tab: '领料单管理',
            url: 'delivery',
            batch: 'logisticBatch',
            selectSearch: ['deliveries.transportable_type'],
            changeDataArr: [{transportable_type: { 'self': '自运', 'consign': '托运', 'selve': '自提' }}, {state: {0: '未完成', 1: '已完成'}}],
            searchPlaceholder: '请输入领料单号进行搜索',
            theads: ['领料类型', '领料部门', '领料用途', '领料日期', '发料仓库', '列表项包含编码', '成品名称', '规格型号', '任务单号', '基本单位名称', '基本单位应收数量', '基本单位实发数量', '成本对象组', '单位', '实发数量', '库存数量', '备注', '发料仓库'],
            protos: ['serial', 'datetime', 'name', 'transportable_type', 'operate_name', 'serial', 'datetime', 'name', 'transportable_type', 'operate_name', 'transportable_type', 'operate_name', 'serial', 'datetime', 'name', 'transportable_type', 'operate_name', 'serial', 'datetime', ''],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
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
                        components: 'datePick'
                    }
                ]
            }],
            newComponent: [{
                tab: '新建领料单信息',
                components: [{
                    name: 'datetime',
                    type: 'select',
                    component: null,
                    label: '领料类型',
                    placeholder: '',
                    rule: {required: true, message: '请选择领料类型'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    label: '领料部门',
                    placeholder: '',
                    rule: {required: true, message: '请输入领料部门'}
                },
                {
                    name: 'transportable_type',
                    type: 'select',
                    component: null,
                    label: '领料用途',
                    placeholder: '必选',
                    rule: {required: true, trigger: 'blur', message: '请选择领料用途'},
                    options: []
                },
                {
                    name: 'vehicle_id',
                    type: 'text',
                    component: null,
                    label: '领料日期',
                    placeholder: '',
                    rule: [{required: true, message: '请选择入库日期'}, {validator: validate2.reDate, message: '请选择入库日期'}]
                },
                {
                    name: 'driver_id',
                    type: 'select',
                    component: null,
                    label: '发料仓库',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', message: '请选择发料仓库'},
                    options: []
                },
                {
                    name: 'logistic_id',
                    type: 'text',
                    component: null,
                    label: '编码',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'number',
                    type: 'text',
                    component: null,
                    label: '成品名称',
                    placeholder: '',
                    rule: {required: true, message: '请输入成品名称'}
                },
                {
                    name: 'selve_name',
                    type: 'select',
                    component: null,
                    label: '规格型号',
                    placeholder: '',
                    rule: {required: true, message: '请选择规格型号'},
                    options: []
                },
                {
                    name: 'operate_id',
                    type: 'text',
                    component: null,
                    label: '任务单号',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'memo',
                    type: 'text',
                    component: null,
                    label: '基本单位名称',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', message: '请输入基本单位名称'}
                },
                {
                    name: 'memo',
                    type: 'text',
                    component: null,
                    label: '基本单位应收数量',
                    placeholder: '',
                    rule: {required: false, trigger: 'blur', type: 'number', message: '请输入正确的数字'}
                },
                {
                    name: 'vehicle_id',
                    type: 'text',
                    component: null,
                    label: '基本单位实发数量',
                    placeholder: '',
                    rule: {required: false, trigger: 'blur', type: 'number', message: '请输入正确的数字'}
                },
                {
                    name: 'driver_id',
                    type: 'text',
                    component: null,
                    label: '成本对象组',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', message: '请输入成本对象组'}
                },
                {
                    name: 'logistic_id',
                    type: 'text',
                    component: null,
                    label: '实发数量',
                    placeholder: '',
                    rule: {required: false, trigger: 'blur', type: 'number', message: '请输入正确的数字'}
                },
                {
                    name: 'number',
                    type: 'text',
                    component: null,
                    label: '库存数量',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请输入库存数量'}
                },
                {
                    name: 'selve_name',
                    type: 'textarea',
                    component: null,
                    label: '备注',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    component: null,
                    label: '发料仓库',
                    placeholder: '',
                    rule: null,
                    options: []
                }]
            }],
            editComponent: [{
                tab: '编辑领料单信息',
                components: [{
                    name: 'datetime',
                    type: 'select',
                    component: null,
                    label: '领料类型',
                    placeholder: '',
                    rule: {required: true, message: '请选择领料类型'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    label: '领料部门',
                    placeholder: '',
                    rule: {required: true, message: '请输入领料部门'}
                },
                {
                    name: 'transportable_type',
                    type: 'select',
                    component: null,
                    label: '领料用途',
                    placeholder: '必选',
                    rule: {required: true, trigger: 'blur', message: '请选择领料用途'},
                    options: []
                },
                {
                    name: 'vehicle_id',
                    type: 'text',
                    component: null,
                    label: '领料日期',
                    placeholder: '',
                    rule: [{required: true, message: '请选择入库日期'}, {validator: validate2.reDate, message: '请选择入库日期'}]
                },
                {
                    name: 'driver_id',
                    type: 'select',
                    component: null,
                    label: '发料仓库',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', message: '请选择发料仓库'},
                    options: []
                },
                {
                    name: 'logistic_id',
                    type: 'text',
                    component: null,
                    label: '编码',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'number',
                    type: 'text',
                    component: null,
                    label: '成品名称',
                    placeholder: '',
                    rule: {required: true, message: '请输入成品名称'}
                },
                {
                    name: 'selve_name',
                    type: 'select',
                    component: null,
                    label: '规格型号',
                    placeholder: '',
                    rule: {required: true, message: '请选择规格型号'},
                    options: []
                },
                {
                    name: 'operate_id',
                    type: 'text',
                    component: null,
                    label: '任务单号',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'memo',
                    type: 'text',
                    component: null,
                    label: '基本单位名称',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', message: '请输入基本单位名称'}
                },
                {
                    name: 'memo',
                    type: 'text',
                    component: null,
                    label: '基本单位应收数量',
                    placeholder: '',
                    rule: {required: false, trigger: 'blur', type: 'number', message: '请输入正确的数字'}
                },
                {
                    name: 'vehicle_id',
                    type: 'text',
                    component: null,
                    label: '基本单位实发数量',
                    placeholder: '',
                    rule: {required: false, trigger: 'blur', type: 'number', message: '请输入正确的数字'}
                },
                {
                    name: 'driver_id',
                    type: 'text',
                    component: null,
                    label: '成本对象组',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', message: '请输入成本对象组'}
                },
                {
                    name: 'logistic_id',
                    type: 'text',
                    component: null,
                    label: '实发数量',
                    placeholder: '',
                    rule: {required: false, trigger: 'blur', type: 'number', message: '请输入正确的数字'}
                },
                {
                    name: 'number',
                    type: 'text',
                    component: null,
                    label: '库存数量',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请输入库存数量'}
                },
                {
                    name: 'selve_name',
                    type: 'textarea',
                    component: null,
                    label: '备注',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    component: null,
                    label: '发料仓库',
                    placeholder: '',
                    rule: null,
                    options: []
                }]
            }]
        },
        {
            settitle: '仓库管理',
            key: 'delivery',
            roleName: ['delivery/order', 0],
            tab: '毛茶库出库管理',
            url: 'delivery',
            batch: 'logisticBatch',
            selectSearch: ['deliveries.transportable_type'],
            changeDataArr: [{transportable_type: { 'self': '自运', 'consign': '托运', 'selve': '自提' }}, {state: {0: '未完成', 1: '已完成'}}],
            searchPlaceholder: '请输入出库单号进行搜索',
            theads: ['收款日期', '销售方式', '摘要', '购货单位', '日期', '编号', '产品代号', '规格型号', '单位', '实发数量', '库存数量', '销售单价', '销售金额', '基本单位名称', '基本单位实发数量', '备注', '发料仓库'],
            protos: ['serial', 'datetime', 'name', 'transportable_type', 'operate_name', 'serial', 'datetime', 'name', 'transportable_type', 'operate_name', 'transportable_type', 'operate_name', 'serial', 'datetime', 'name', 'transportable_type', 'operate_name', 'serial', 'datetime'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
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
                        components: 'datePick'
                    }
                ]
            }],
            newComponent: [{
                tab: '新建领料单信息',
                components: [{
                    name: 'datetime',
                    type: 'date',
                    component: inputDate,
                    label: '收款日期',
                    placeholder: '',
                    rule: [{required: true, message: '请选择收款日期'}, {validator: validate2.reDate, message: '请选择收款日期'}]
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    label: '销售方式',
                    placeholder: '',
                    rule: {required: true, message: '请输入销售方式'}
                },
                {
                    name: 'transportable_type',
                    type: 'text',
                    component: null,
                    label: '摘要',
                    placeholder: '必选',
                    rule: null
                },
                {
                    name: 'vehicle_id',
                    type: 'text',
                    component: null,
                    label: '购货单位',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'driver_id',
                    type: 'text',
                    component: inputDate,
                    label: '日期',
                    placeholder: '',
                    rule: [{required: true, message: '请选择日期'}, {validator: validate2.reDate, message: '请选择日期'}]
                },
                {
                    name: 'logistic_id',
                    type: 'text',
                    component: null,
                    label: '编号',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'number',
                    type: 'text',
                    component: null,
                    label: '产品代号',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'selve_name',
                    type: 'text',
                    component: null,
                    label: '产品名称',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'operate_id',
                    type: 'text',
                    component: null,
                    label: '规格型号',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'memo',
                    type: 'text',
                    component: null,
                    label: '单位',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'memo',
                    type: 'text',
                    component: null,
                    label: '实发数量',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请输入正确的数字'}
                },
                {
                    name: 'vehicle_id',
                    type: 'text',
                    component: null,
                    label: '库存数量',
                    placeholder: '',
                    rule: {required: false, trigger: 'blur', type: 'number', message: '请输入正确的数字'}
                },
                {
                    name: 'driver_id',
                    type: 'text',
                    component: null,
                    label: '销售单价',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请输入销售单价(数字)'}
                },
                {
                    name: 'logistic_id',
                    type: 'text',
                    component: null,
                    label: '销售金额',
                    placeholder: '',
                    rule: {required: false, trigger: 'blur', type: 'number', message: '请输入销售金额(数字)'}
                },
                {
                    name: 'number',
                    type: 'text',
                    component: null,
                    label: '基本单位名称',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'selve_name',
                    type: 'text',
                    component: null,
                    label: '基本单位实发数量',
                    placeholder: '',
                    rule: {required: false, trigger: 'blur', type: 'number', message: '请输入销售金额(数字)'}
                },
                {
                    name: 'operate_id',
                    type: 'textarea',
                    component: null,
                    label: '备注',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    component: null,
                    label: '发货仓库',
                    placeholder: '',
                    rule: null,
                    options: []
                }]
            }],
            moreComponent: [{value: '审核状态'}],
            editComponent: [{
                tab: '编辑领料单信息',
                components: [{
                    name: 'datetime',
                    type: 'date',
                    component: inputDate,
                    label: '收款日期',
                    placeholder: '',
                    rule: [{required: true, message: '请选择收款日期'}, {validator: validate2.reDate, message: '请选择收款日期'}]
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    label: '销售方式',
                    placeholder: '',
                    rule: {required: true, message: '请输入销售方式'}
                },
                {
                    name: 'transportable_type',
                    type: 'text',
                    component: null,
                    label: '摘要',
                    placeholder: '必选',
                    rule: null
                },
                {
                    name: 'vehicle_id',
                    type: 'text',
                    component: null,
                    label: '购货单位',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'driver_id',
                    type: 'text',
                    component: inputDate,
                    label: '日期',
                    placeholder: '',
                    rule: [{required: true, message: '请选择日期'}, {validator: validate2.reDate, message: '请选择日期'}]
                },
                {
                    name: 'logistic_id',
                    type: 'text',
                    component: null,
                    label: '编号',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'number',
                    type: 'text',
                    component: null,
                    label: '产品代号',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'selve_name',
                    type: 'text',
                    component: null,
                    label: '产品名称',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'operate_id',
                    type: 'text',
                    component: null,
                    label: '规格型号',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'memo',
                    type: 'text',
                    component: null,
                    label: '单位',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'memo',
                    type: 'text',
                    component: null,
                    label: '实发数量',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请输入正确的数字'}
                },
                {
                    name: 'vehicle_id',
                    type: 'text',
                    component: null,
                    label: '库存数量',
                    placeholder: '',
                    rule: {required: false, trigger: 'blur', type: 'number', message: '请输入正确的数字'}
                },
                {
                    name: 'driver_id',
                    type: 'text',
                    component: null,
                    label: '销售单价',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请输入销售单价(数字)'}
                },
                {
                    name: 'logistic_id',
                    type: 'text',
                    component: null,
                    label: '销售金额',
                    placeholder: '',
                    rule: {required: false, trigger: 'blur', type: 'number', message: '请输入销售金额(数字)'}
                },
                {
                    name: 'number',
                    type: 'text',
                    component: null,
                    label: '基本单位名称',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'selve_name',
                    type: 'text',
                    component: null,
                    label: '基本单位实发数量',
                    placeholder: '',
                    rule: {required: false, trigger: 'blur', type: 'number', message: '请输入销售金额(数字)'}
                },
                {
                    name: 'operate_id',
                    type: 'textarea',
                    component: null,
                    label: '备注',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    component: null,
                    label: '发货仓库',
                    placeholder: '',
                    rule: null,
                    options: []
                }]
            }]
        }
    ],
    // 系统管理
    // 公司信息管理
    company: [{
        settitle: '公司信息管理',
        key: 'mylog',
        tab: '公司信息管理',
        url: 'log',
        roleName: ['system/log', 0],
        selectSearch: ['operate'],
        searchPlaceholder: '请输入内容进行搜索',
        theads: ['公司图片', '公司名称', '公司简称', '公司编码', '公司地址', '公司网站', '统一码', '经营范围', '负责人/法人', '电话', '员工总数'],
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
    // 用户管理
    userOperate: [{
        settitle: '用户管理',
        roleName: ['system/statement', 0],
        key: 'planManage',
        tab: '用户管理',
        url: 'plan',
        searchPlaceholder: '请输入用户名搜索',
        theads: ['用户名', '邮箱', '性别', '姓名', '出生日期', '手机号码', '所属部门', '入职日期', '工号', '头像'],
        protos: ['plan_type_name', 'name', 'content', 'plan_type_name', 'name', 'content', 'plan_type_name', 'name', 'content', 'content'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
        listComponent: [],
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
            }]
        }],
        editComponent: [{
            tab: '编辑用户信息',
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
            }]
        }]
    }],
     // 系统日志
    systemLog: [{
        settitle: '系统日志管理',
        key: 'mylog',
        tab: '系统日志管理',
        url: 'log',
        roleName: ['system/log', 0],
        selectSearch: ['operate'],
        searchPlaceholder: '请输入内容进行搜索',
        theads: ['模块名称', '操作', '内容', '日期', '客户端ip', '用户', '备注'],
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
    }]
}
