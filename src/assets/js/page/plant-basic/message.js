// 中间列表的数据

import importBtn from '../../components/public/import-btn.vue'
import newbuildBtn from '../../components/public/newbuild-btn.vue'
import output from '../../components/public/output.vue'
import selectSection from '../../components/public/select-section.vue'
import datePick from '../../components/public/datePick.vue'
import inputDate from '../../components/public/inputDate.vue'
import inputDateTimes from '../../components/public/inputDateTimes.vue'
import inputFile from '../../components/public/inputFile.vue'
import inputFiles from '../../components/public/inputFiles.vue'
import inputTextFile from '../../components/public/inputTextFile.vue'
import video from '../../components/public/video.vue'
import inputSelectOther from '../../components/public/inputSelectOther.vue'
import inputTextSelect from '../../components/public/inputTextSelect.vue'
import Qrcode from '../../components/public/Qrcode.vue'

import validate2 from '../../utils/validate2.js'

export default {
    // 种植管理--基础信息管理
    plantBase: [
        {
            settitle: '基础信息管理',
            key: 'plantation',
            roleKey: 'plantation',
            roleName: ['plant/basic', 0],
            tab: '种植场',
            url: 'plantation',
            searchPlaceholder: '请输入种植场进行搜索',
            theads: ['种植场名称', '有机种植面积', '热线电话', '负责人', '种植场图片', '备注'],
            protos: ['name', 'area_unit', 'phone', 'director', 'img', 'memo'],
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
                    type: 'video',
                    component: video,
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
                    type: 'video',
                    component: video,
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
            roleKey: 'planta',
            tab: '种植区',
            url: 'planta',
            selectSearch: ['planta.pid'],
            selectValueId: [['pid', 'plantation_name', true]],
            searchPlaceholder: '请输入种植区进行搜索',
            selectDefault: [{value: '', label: '种植场选择'}],
            theads: ['所属种植场', '种植区名称', '种植区面积', '海拔高度', '种植区图片', '备注'],
            protos: ['plantation_name', 'name', 'area_unit', 'altitude', 'img', 'memo'],
            widths: [50, 50, 50, 50, 50, 50],
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
            moreComponent: [{value: '视频'}],
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
                    component: inputFiles,
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
                    type: 'video',
                    component: video,
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
                    component: inputFiles,
                    isNull: true,
                    label: '种植区图片',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'altitude',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '海拔高度',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'video',
                    type: 'video',
                    component: video,
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
            key: 'plant',
            roleKey: 'plant',
            roleName: ['plant/basic', 0],
            tab: '茶叶档案',
            url: 'tea',
            searchPlaceholder: '请输入茶叶品种名称进行搜索',
            commaArr: ['dry_tea', 'liquor_color', 'leaf_bottom'],
            theads: ['茶叶品种', '干茶', '汤色', '叶底', '香气', '滋味', '采摘周期', '品种图片', '备注'],
            protos: ['name', 'dry_tea', 'liquor_color', 'leaf_bottom', 'fragrance', 'taste', 'picking_cycle', 'img', 'memo'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
            typeComponent: [{
                component: output
            },
            {
                component: newbuildBtn
            }],
            listComponent: [],
            newComponent: [{
                tab: '新建茶叶档案',
                hasImg: true,
                components: [{
                    name: 'name',
                    type: 'selectOther',
                    component: inputSelectOther,
                    label: '茶叶品种',
                    placeholder: '必填',
                    categoryString: '八仙',
                    otherPlaceholder: '请输入茶叶品种',
                    rule: {required: true, message: '请选择茶叶品种', trigger: 'blur'},
                    options: [{
                        value: '八仙', label: '八仙'
                    },
                    {
                        value: '黄枝香', label: '黄枝香'
                    },
                    {
                        value: '水仙', label: '水仙'
                    },
                    {
                        value: '芝兰', label: '芝兰'
                    },
                    {
                        value: '杏仁', label: '杏仁'
                    },
                    {
                        value: '鸭屎', label: '鸭屎'
                    },
                    {
                        value: '其他', label: '其他'
                    }]
                },
                {
                    name: 'dry_tea',
                    type: 'textFile',
                    component: inputTextFile,
                    isNull: false,
                    label: '干茶',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'liquor_color',
                    type: 'textFile',
                    component: inputTextFile,
                    isNull: false,
                    label: '汤色',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'leaf_bottom',
                    type: 'textFile',
                    component: inputTextFile,
                    isNull: false,
                    label: '页底',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'fragrance',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '香气',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'taste',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '滋味',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'picking_cycle',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '采摘周期（年）',
                    placeholder: '',
                    rule: [{required: true, message: '请输入采摘周期'}, {validator: validate2.reNumber}]
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
                tab: '编辑茶叶档案',
                hasImg: true,
                components: [{
                    name: 'name',
                    type: 'selectOther',
                    categoryBox: ['八仙', '黄枝香', '芝兰', '杏仁', '鸭屎'],
                    component: inputSelectOther,
                    isNull: false,
                    label: '茶叶品种',
                    placeholder: '必填',
                    otherPlaceholder: '请输入其他茶叶品种',
                    rule: {required: true, message: '请选择茶叶品种', trigger: 'blur'},
                    options: [{
                        value: '八仙', label: '八仙'
                    },
                    {
                        value: '黄枝香', label: '黄枝香'
                    },
                    {
                        value: '水仙', label: '水仙'
                    },
                    {
                        value: '芝兰', label: '芝兰'
                    },
                    {
                        value: '杏仁', label: '杏仁'
                    },
                    {
                        value: '鸭屎', label: '鸭屎'
                    },
                    {
                        value: '其他', label: '其他'
                    }]
                },
                {
                    name: 'dry_tea',
                    type: 'textFile',
                    component: inputTextFile,
                    isNull: false,
                    label: '干茶',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'liquor_color',
                    type: 'textFile',
                    component: inputTextFile,
                    isNull: false,
                    label: '汤色',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'leaf_bottom',
                    type: 'textFile',
                    component: inputTextFile,
                    isNull: false,
                    label: '页底',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'fragrance',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '香气',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'taste',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '滋味',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'picking_cycle',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '采摘周期（年）',
                    placeholder: '',
                    rule: [{required: true, message: '请输入采摘周期'}, {validator: validate2.reNumber}]
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
            roleKey: 'manure',
            tab: '肥料档案',
            roleName: ['plant/basic', 0],
            url: 'manure',
            searchPlaceholder: '请输入肥料名称',
            theads: ['肥料分类', '肥料名称', '用途', '包装规格', '经销商名称', '产地', '肥料图片', '备注'],
            protos: ['category', 'name', 'usage', 'specification', 'dealer', 'origin', 'img', 'memo'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50],
            typeComponent: [{
                component: output
            },
            {
                component: newbuildBtn
            }],
            newComponent: [{
                tab: '新建肥料档案',
                checkNumber: [1],
                hasImg: true,
                components: [{
                    name: 'category',
                    type: 'selectOther',
                    component: inputSelectOther,
                    isNull: false,
                    label: '肥料分类',
                    placeholder: '必填',
                    categoryString: '农家肥',
                    otherPlaceholder: '请输入其他肥料分类',
                    rule: {required: true, message: '请选择肥料类别', trigger: 'blur'},
                    options: [{
                        value: '农家肥', label: '农家肥'
                    },
                    {
                        value: '氮肥', label: '氮肥'
                    },
                    {
                        value: '磷肥', label: '磷肥'
                    },
                    {
                        value: '钾肥', label: '钾肥'
                    },
                    {
                        value: '微肥', label: '微肥'
                    },
                    {
                        value: '复合肥料', label: '复合肥料'
                    },
                    {
                        value: '生物肥料', label: '生物肥料'
                    },
                    {
                        value: '其他', label: '其他'
                    }]
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
                    label: '用途',
                    placeholder: ''
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
            }],
            editComponent: [{
                tab: '编辑肥料信息',
                checkNumber: [1],
                hasImg: true,
                components: [{
                    name: 'category',
                    type: 'selectOther',
                    component: inputSelectOther,
                    isNull: false,
                    label: '肥料分类',
                    placeholder: '必填',
                    otherPlaceholder: '请输入其他肥料类别',
                    categoryBox: ['农家肥', '氮肥', '磷肥', '钾肥', '微肥', '复合肥料', '生物肥料'],
                    rule: {required: true, message: '请选择肥料类别', trigger: 'blur'},
                    options: [{
                        value: '农家肥', label: '农家肥'
                    },
                    {
                        value: '氮肥', label: '氮肥'
                    },
                    {
                        value: '磷肥', label: '磷肥'
                    },
                    {
                        value: '钾肥', label: '钾肥'
                    },
                    {
                        value: '微肥', label: '微肥'
                    },
                    {
                        value: '复合肥料', label: '复合肥料'
                    },
                    {
                        value: '生物肥料', label: '生物肥料'
                    },
                    {
                        value: '其他', label: '其他'
                    }]
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
                    label: '用途',
                    placeholder: ''
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
        roleKey: 'cultivate',
        roleName: ['plant/cultivate', 0],
        tab: '批次管理',
        url: 'cultivate',
        batch: 'plantSerial',
        changeDataArr: [{state: {0: '未完成', 1: '已完成'}}],
        selectSearch: ['plantations.id', 'teas.id'],
        selectValueId: [['plantation_id', 'plantation_name', true], ['tea_id', 'tea_name', true]],
        selectDefault: [{value: '', label: '种植区选择'}, {value: '', label: '茶叶品种选择'}],
        searchPlaceholder: '请输入种植批次号进行搜索',
        theads: ['种植批次号', '所属种植区', '茶叶品种名称', '种植日期', '种植面积', '状态', '备注'],
        protos: ['serial', 'plantation_name', 'tea_name', 'date', 'area_unit', 'state', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50],
        listComponent: [{
            components: [{
                name: 'plantations.id',
                value: '',
                type: 'select',
                component: selectSection,
                options: []
            },
            {
                name: 'teas.id',
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
            selectUrl2: [['teas', 'id', 'name', true]],
            popNumber: [0],
            popNumber2: [1],
            selectInit: [{value: '', label: '种植区选择'}],
            selectInit2: [{value: '', label: '茶叶品种选择'}],
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
                name: 'tea_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '茶叶品种名称',
                placeholder: '必填',
                rule: {required: true, trigger: 'blur', message: '请选择茶叶品种', type: 'number'},
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
                name: 'operate',
                type: 'text',
                component: null,
                isNull: false,
                label: '种植人',
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
            tab: '编辑种植批次',
            selectUrl: [['planta', 'cultivate', 'plantation_id', 'plantation_name', true]],
            selectUrl2: [['teas', 'id', 'name', true]],
            selectInit: [{value: '', label: '种植区选择'}],
            selectInit2: [{value: '', label: '茶叶品种选择'}],
            popNumber: [1],
            popNumber2: [2],
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
                name: 'tea_id',
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
    }],
    // 种植管理--农事管理
    plantFarm: [
        {
            settitle: '农事管理',
            key: 'fertilize',
            roleKey: 'fertilize',
            tab: '施肥信息管理',
            url: 'fertilize',
            batch: 'fertilizeBatch',
            selectSearch: ['manures.id'],
            selectValueId: [['manure_id', 'manure_name', true]],
            selectDefault: [{value: '', label: '肥料选择'}],
            searchPlaceholder: '请输入施肥批次号进行搜索',
            theads: ['施肥批次号', '肥料名称', '施肥日期', '施肥人', '天气', '使用量', '施肥方法', '备注'],
            protos: ['serial', 'manure_name', 'date', 'operate', 'weather', 'amount_unit', 'way', 'memo'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50],
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
                selectUrl2: [['plantas', 'id', 'name', true], ['manures', 'id', 'name', true]],
                selectInit2: [{value: '', label: '种植区选择'}, {value: '', label: '肥料选择'}],
                popNumber2: [0, 2],
                components: [{
                    name: 'planta_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '种植区',
                    placeholder: '必填',
                    assoc: true,
                    position: 1,
                    selectField: ['id', 'serial', true],
                    getType: 'array',
                    arrName: 'cultivate_ids',
                    table: 'cultivates',
                    rule: {required: true, trigger: 'blur', message: '请选择种植区', type: 'number'},
                    options: []
                },
                {
                    name: 'cultivate_ids',
                    type: 'selectMore',
                    component: null,
                    isNull: false,
                    label: '种植批次号',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur', message: '请选择种植批次号（多选）', type: 'array'},
                    options: []
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
                    name: 'operate',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '施肥人',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'weather',
                    type: 'selectOther',
                    component: inputSelectOther,
                    isNull: false,
                    label: '天气',
                    placeholder: '',
                    categoryString: '晴',
                    otherPlaceholder: '请输入天气',
                    rule: {required: true, message: '请选择天气', trigger: 'blur'},
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
                selectUrl2: [['manures', 'id', 'name', true]],
                selectInit2: [{value: '', label: '肥料选择'}],
                popNumber2: [1],
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
                    name: 'operate',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '施肥人',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'weather',
                    type: 'selectOther',
                    categoryBox: ['晴', '雨', '雪', '阴'],
                    component: inputSelectOther,
                    isNull: false,
                    placeholder: '必填',
                    otherPlaceholder: '请输入天气',
                    rule: {required: true, message: '请选择天气', trigger: 'blur'},
                    label: '天气',
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
            key: 'detect',
            roleKey: 'detect',
            tab: '检测信息管理',
            url: 'detect',
            batch: 'detectBatch',
            selectSearch: ['detects.detect_type'],
            selectValueId: [['detect_type', 'detect_type', true]],
            selectDefault: [{value: '', label: '检测类型选择'}],
            changeDataArr: [{result: {'0': '合格', '1': '不合格'}}],
            searchPlaceholder: '请输入检测批次号进行搜索',
            theads: ['检测批次号', '检测类型', '检测内容', '检测日期', '检测人', '检测部门', '检测结果', '检测图片', '备注'],
            protos: ['serial', 'detect_type', 'content', 'date', 'operate', 'department', 'result', 'img', 'memo'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
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
                    name: 'detects.detect_type',
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
                selectUrl2: [['plantas', 'id', 'name', true]],
                selectInit2: [{value: '', label: '种植区选择'}],
                popNumber2: [0],
                hasImg: true,
                components: [{
                    name: 'planta_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '种植区',
                    placeholder: '必填',
                    assoc: true,
                    position: 1,
                    selectField: ['id', 'serial', true],
                    getType: 'array',
                    arrName: 'cultivate_ids',
                    table: 'cultivates',
                    rule: {required: true, trigger: 'blur', message: '请选择种植区', type: 'number'},
                    options: []
                },
                {
                    name: 'cultivate_ids',
                    type: 'selectMore',
                    component: null,
                    isNull: false,
                    label: '种植批次号',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur', message: '请选择种植批次号（多选）', type: 'array'},
                    options: []
                },
                {
                    name: 'detect_type',
                    type: 'selectOther',
                    component: inputSelectOther,
                    isNull: false,
                    label: '检测类型',
                    placeholder: '必填',
                    categoryString: '土壤检测',
                    otherPlaceholder: '请输入检测类型',
                    rule: {required: true, trigger: 'blur', message: '请选择检测类型'},
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
                        value: '其他',
                        label: '其他'
                    }]
                },
                {
                    name: 'content',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '检测内容',
                    placeholder: '',
                    rule: {required: true, message: '请输入检测内容', trigger: 'blur'}
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
                    name: 'operate',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '检测人',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'department',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '检测部门',
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
                    rule: [{required: true}],
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
                }]
            }],
            editComponent: [{
                tab: '编辑检测信息',
                hasImg: true,
                components: [{
                    name: 'serial',
                    type: 'text',
                    component: null,
                    isNull: false,
                    disabled: true,
                    label: '检测批次号',
                    placeholder: '必填',
                    rule: {required: true}
                },
                {
                    name: 'detect_type',
                    type: 'selectOther',
                    component: inputSelectOther,
                    isNull: false,
                    label: '检测类型',
                    placeholder: '必填',
                    otherPlaceholder: '请输入检测类型',
                    categoryBox: ['土壤检测', '水质检测', '大气污染检测', '农药残留检测'],
                    rule: {required: true, trigger: 'blur', message: '请选择检测类型'},
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
                        value: '其他',
                        label: '其他'
                    }]
                },
                {
                    name: 'content',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '检测内容',
                    placeholder: '',
                    rule: {required: true, message: '请输入检测内容', trigger: 'blur'}
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
                    name: 'operate',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '检测人',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'department',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '检测部门',
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
                    rule: [{required: true}],
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
                }]
            }]
        },
        {
            settitle: '农事管理',
            key: 'farmimg',
            roleKey: 'farm',
            tab: '田间信息管理',
            url: 'farming',
            batch: 'farmingBatch',
            searchPlaceholder: '请输入田间操作批次号进行搜索',
            theads: ['田间批次号', '操作日期', '操作内容', '操作人', '天气', '操作方法', '备注'],
            protos: ['serial', 'date', 'content', 'operate', 'weather', 'method', 'memo'],
            widths: [50, 50, 50, 50, 50, 50, 50],
            typeComponent: [{
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
                selectUrl2: [['plantas', 'id', 'name', true]],
                selectInit2: [{value: '', label: '种植区选择'}],
                popNumber2: [0],
                components: [{
                    name: 'planta_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '种植区',
                    placeholder: '必填',
                    assoc: true,
                    position: 1,
                    selectField: ['id', 'serial', true],
                    getType: 'array',
                    arrName: 'cultivate_ids',
                    table: 'cultivates',
                    rule: {required: true, trigger: 'blur', message: '请选择种植区', type: 'number'},
                    options: []
                },
                {
                    name: 'cultivate_ids',
                    type: 'selectMore',
                    component: null,
                    isNull: false,
                    label: '种植批次号',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur', message: '请选择种植批次号（多选）', type: 'array'},
                    options: []
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
                    name: 'content',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '操作方法',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'operate',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '操作人',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'weather',
                    type: 'selectOther',
                    component: inputSelectOther,
                    isNull: false,
                    label: '天气',
                    placeholder: '',
                    categoryString: '晴',
                    otherPlaceholder: '请输入天气',
                    rule: {required: true, message: '请选择天气', trigger: 'blur'},
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
                    name: 'method',
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
        roleKey: 'batch',
        tab: '采制批次信息',
        url: 'harvest',
        batch: 'harvestBatch',
        selectSearch: ['plantations.id'],
        selectValueId: [['plantation_id', 'plantation_name', true]],
        selectDefault: [{value: '', label: '种植区选择'}],
        changeDataArr: [{state: {0: '未完成', 1: '已完成'}}],
        searchPlaceholder: '请输入采制批次号进行搜索',
        theads: ['采制批次号', '采制开始日期', '所属种植区', '种植批次', '入库部门', '存放仓库位置', '状态', '备注'],
        protos: ['serial', 'date', 'plantation_name', 'cultivate_serial', 'department', 'position', 'state', 'memo'],
        widths: [60, 50, 50, 60, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        listComponent: [{
            components: [{
                value: '',
                name: 'plantations.id',
                type: 'select',
                component: selectSection,
                options: []
            },
            {
                type: 'date',
                component: datePick
            }]
        }],
        moreComponent: [{value: '状态'}],
        newComponent: [{
            tab: '新建采收批次',
            selectUrl2: [['plantas', 'id', 'name', true]],
            selectInit2: [{value: '', label: '种植区选择'}],
            popNumber2: [0],
            components: [{
                name: 'planta_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '种植区',
                placeholder: '必填',
                assoc: true,
                position: 1,
                selectField: ['id', 'serial', true],
                getType: 'string',
                arrName: 'cultivate_id',
                table: 'cultivates',
                rule: {required: true, trigger: 'blur', message: '请选择种植区', type: 'number'},
                options: []
            },
            {
                name: 'cultivate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '种植批次号',
                placeholder: '必填',
                rule: {required: true, trigger: 'blur', message: '请选择种植批次号（单选）', type: 'number'},
                options: []
            },
            {
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: true,
                label: '采制开始日期',
                placeholder: '必填',
                rule: [{required: true, message: '请输入采制日期'}, {validator: validate2.reDate, message: '请输入采制日期'}]
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
            tab: '编辑采制批次',
            components: [{
                name: 'serial',
                type: 'text',
                component: null,
                isNull: true,
                label: '采制批次号',
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
                name: 'plantation_name',
                type: 'text',
                component: null,
                isNull: true,
                label: '所属种植区',
                placeholder: '必填',
                disabled: true,
                rule: {required: true}
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
    // 仓库物流信息
    // 基础信息管理
    storageBasic: [
        {
            settitle: '基础信息管理',
            tab: '物流公司信息管理',
            key: 'logistic',
            roleKey: 'logistic',
            url: 'logistic',
            hiddeRole: false,
            roleName: ['delivery/logistic', 0],
            searchPlaceholder: '请输入物理公司名搜索',
            theads: ['物流公司名称', '联系人', '联系电话', '地址', '备注'],
            protos: ['name', 'contacts', 'phone', 'address', 'memo'],
            widths: [50, 50, 50, 50, 50],
            typeComponent: [{
                component: output
            },
            {
                component: newbuildBtn
            }],
            newComponent: [{
                tab: '新建物流公司信息',
                components: [{
                    name: 'name',
                    type: 'text',
                    component: null,
                    label: '物流公司名称',
                    placeholder: '请输入物流公司名称',
                    rule: {required: true, trigger: 'blur', message: '请输入物流公司名称'}
                },
                {
                    name: 'contacts',
                    type: 'text',
                    component: null,
                    label: '联系人',
                    placeholder: '请输入联系人',
                    rule: {required: true, trigger: 'blur', message: '请输入联系人'}
                },
                {
                    name: 'phone',
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
                components: [{
                    name: 'name',
                    type: 'text',
                    component: null,
                    label: '物流公司',
                    placeholder: '请输入物流公司名称',
                    rule: {required: true, trigger: 'blur', message: '请输入物流公司名称'}
                },
                {
                    name: 'contacts',
                    type: 'text',
                    component: null,
                    label: '联系人',
                    placeholder: '请输入联系人',
                    rule: {required: true, trigger: 'blur', message: '请输入联系人'}
                },
                {
                    name: 'phone',
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
            tab: '车辆信息管理',
            key: 'vehicle',
            roleKey: 'vehicle',
            url: 'vehicle',
            hiddeRole: false,
            searchPlaceholder: '请输入车牌号进行搜索',
            theads: ['车牌品牌', '车牌号码', '核载吨数', '货厢长度(m)', '货厢宽度(m)', '货厢高度(m)', '货厢类型', '备注'],
            protos: ['brand', 'number', 'tonnage', 'length', 'width', 'height', 'storage', 'memo'],
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
                    name: 'length',
                    type: 'text',
                    component: null,
                    label: '货厢长度(m)',
                    placeholder: '',
                    rule: {validator: validate2.reNumber}
                },
                {
                    name: 'width',
                    type: 'text',
                    component: null,
                    label: '货厢宽度(m)',
                    placeholder: '',
                    rule: {validator: validate2.reNumber}
                },
                {
                    name: 'height',
                    type: 'text',
                    component: null,
                    label: '货厢高度(m)',
                    placeholder: '',
                    rule: {validator: validate2.reNumber}
                },
                {
                    name: 'storage',
                    type: 'select',
                    component: null,
                    label: '货厢类型',
                    placeholder: '',
                    rule: null,
                    options: [{
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
                    name: 'length',
                    type: 'text',
                    component: null,
                    label: '货厢长度(m)',
                    placeholder: '',
                    rule: {validator: validate2.reNumber}
                },
                {
                    name: 'width',
                    type: 'text',
                    component: null,
                    label: '货厢宽度(m)',
                    placeholder: '',
                    rule: {validator: validate2.reNumber}
                },
                {
                    name: 'height',
                    type: 'text',
                    component: null,
                    label: '货厢高度(m)',
                    placeholder: '',
                    rule: {validator: validate2.reNumber}
                },
                {
                    name: 'storage',
                    type: 'select',
                    component: null,
                    label: '货厢类型',
                    placeholder: '',
                    rule: null,
                    options: [{
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
            listComponent: []
        },
        {
            settitle: '基础信息管理',
            tab: '驾驶员信息管理',
            key: 'driver',
            roleKey: 'driver',
            url: 'driver',
            hiddeRole: false,
            roleName: ['delivery/driver', 0],
            changeDataArr: [{sex: {0: '男', 1: '女'}}],
            searchPlaceholder: '请输入司机名称进行搜索',
            theads: ['驾驶员姓名', '性别', '联系电话', '取得驾照日期', '出生日期', '驾照类型', '备注'],
            protos: ['name', 'sex', 'phone', 'driver', 'birth', 'storage', 'memo'],
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
                    name: 'storage',
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
                    name: 'storage',
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
            tab: '仓库信息管理',
            key: 'storeroom',
            roleKey: 'store',
            url: 'storeroom',
            roleName: ['delivery/storeroom', 0],
            hiddenValue: {'fixation': 1},
            searchPlaceholder: '请输入仓库名称进行搜索',
            theads: ['仓库名称', '仓库面积', '仓库地址', '图片', '备注'],
            protos: ['name', 'area_unit', 'address', 'img', 'memo'],
            widths: [50, 50, 50, 50, 50],
            typeComponent: [{
                component: output
            },
            {
                component: newbuildBtn
            }],
            newComponent: [{
                tab: '新建仓库信息',
                checkNumber: [0],
                hasImg: true,
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
                    name: 'area',
                    type: 'textSelect',
                    component: inputTextSelect,
                    label: '仓库面积',
                    placeholder: '',
                    options: [{
                        label: '平方米',
                        value: '平方米'
                    },
                    {
                        label: '亩',
                        value: '亩'
                    }],
                    rule: [{required: true, message: '请输入正确的数字'}, {validator: validate2.reNumber}]
                },
                {
                    name: 'address',
                    type: 'text',
                    component: null,
                    label: '仓库地址',
                    placeholder: '',
                    rule: [{required: true, message: '请输入地址'}]
                },
                {
                    name: 'img',
                    type: 'files',
                    component: inputFiles,
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
                checkNumber: [0],
                hasImg: true,
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
                    name: 'area',
                    type: 'textSelect',
                    component: inputTextSelect,
                    label: '仓库面积',
                    placeholder: '',
                    options: [{
                        label: '平方米',
                        value: '平方米'
                    },
                    {
                        label: '亩',
                        value: '亩'
                    }],
                    rule: [{required: true, message: '请输入正确的数字'}, {validator: validate2.reNumber}]
                },
                {
                    name: 'address',
                    type: 'text',
                    component: null,
                    label: '仓库地址',
                    placeholder: '',
                    rule: [{required: true, message: '请输入地址'}]
                },
                {
                    name: 'img',
                    type: 'files',
                    component: inputFiles,
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
        },
        {
            settitle: '基础信息管理',
            tab: '产品信息管理',
            key: 'product',
            roleKey: 'product',
            url: 'product',
            searchPlaceholder: '请输入产品名称进行搜索',
            theads: ['产品名称', '执行标准', '商品型号', '商品简介', '包装规格', '保质期', '食用方法', '存储方法', '配料信息', '图片', '备注'],
            protos: ['name', 'enforce_standard', 'marque', 'description', 'specification', 'expiration_date', 'edible_method', 'storage_means', 'burdening_info', 'img', 'memo'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            typeComponent: [{
                component: output
            },
            {
                component: newbuildBtn
            }],
            newComponent: [{
                tab: '新建产品信息',
                checkNumber: [0],
                hasImg: true,
                components: [{
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
                    component: inputFiles,
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
                checkNumber: [0],
                hasImg: true,
                components: [{
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
                    component: inputFiles,
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
                }]
            }]
        }
    ],
    // 物流批次信息
    logisticsBatch: [{
        settitle: '物流批次管理',
        key: 'delivery',
        roleKey: 'order',
        roleName: ['delivery/order', 0],
        tab: '物流批次信息',
        url: 'delivery',
        batch: 'logisticBatch',
        selectSearch: ['deliveries.transportable_type'],
        changeDataArr: [{transportable_type: { 'self': '自运', 'consign': '托运' }}, {state: {0: '未完成', 1: '已完成'}}],
        searchPlaceholder: '请输入物流批次号进行搜索',
        theads: ['物流批次', '物流日期', '运输方式', '操作人员', '状态', '备注'],
        protos: ['serial', 'datetime', 'transportable_type', 'operate', 'state', 'memo'],
        widths: [50, 50, 50, 50, 50, 50],
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
                }]
            },
            {
                type: 'date',
                components: 'datePick'
            }]
        }],
        newComponent: [{
            tab: '新建物流批次信息',
            selectUrl2: [['vehicles', 'id', 'number', true], ['drivers', 'id', 'name', true], ['logistics', 'id', 'name', true]],
            selectInit2: [{value: '', label: '请选择车辆'}, {value: '', label: '请选择司机'}, {value: '', label: '请选择物流公司'}],
            popNumber2: [2, 3, 4],
            components: [{
                name: 'datetime',
                type: 'datetime',
                component: inputDateTimes,
                isNull: true,
                label: '物流日期',
                rule: [{required: true, message: '请输入物流日期'}, {validator: validate2.reDate, message: '请输入物流日期'}]
            },
            {
                name: 'transportable_type',
                type: 'select',
                component: null,
                isNull: false,
                label: '运输方式',
                placeholder: '必填',
                selectNumber: {self: [2, 3], consign: [4, 5]},
                rule: {required: true, trigger: 'blur', message: '请选择运输方式'},
                options: [{
                    value: 'self',
                    label: '自运'
                },
                {
                    value: 'consign',
                    label: '托运'
                }]
            },
            {
                name: 'vehicle_id',
                type: 'select',
                component: null,
                isNull: false,
                hiddenSelect: false,
                label: '车牌号',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择运输车辆'},
                options: []
            },
            {
                name: 'driver_id',
                hiddenSelect: false,
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
                name: 'operate',
                type: 'text',
                component: null,
                isNull: false,
                label: '运输人员',
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
            tab: '编辑物流批次信息',
            components: [{
                name: 'serial',
                type: 'text',
                component: null,
                label: '物流批次号',
                disabled: true,
                rule: {required: true}
            },
            {
                name: 'datetime',
                type: 'datetime',
                component: inputDateTimes,
                isNull: true,
                label: '物流日期',
                rule: [{required: true, message: '请输入物流日期'}, {validator: validate2.reDate, message: '请输入物流日期'}]
            },
            {
                name: 'transportable_type',
                type: 'text',
                selectNumber: {'自运': [3, 4], '托运': [5, 6]},
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
                name: 'operate',
                type: 'text',
                component: null,
                isNull: false,
                label: '运输人员',
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
    // 仓库管理
    storageOperate: [
        {
            settitle: '仓库管理',
            tab: '凤凰山茶库出库管理',
            key: 'tea-order',
            roleKey: 'out',
            url: 'tea-order',
            batch: 'teaOrderBatch',
            searchPlaceholder: '请输入凤凰山茶出库批次号进行搜索',
            changeDataArr: [{state: {0: '未入库', 1: '已入库'}}],
            theads: ['出库批次号', '出库仓库名', '操作人（制票人）', '送货人', '出库日期', '状态', '备注'],
            protos: ['serial', 'storeroom_name', 'operate', 'deliveryman', 'date', 'state', 'memo'],
            widths: [50, 50, 50, 50, 50, 50],
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
            moreComponent: [{value: '打印'}],
            newComponent: [{
                tab: '新建凤凰山茶库出库信息',
                selectUrl2: [['storerooms', 'id', 'name', true]],
                selectInit2: [{value: '', label: '仓库选择'}],
                popNumber2: [0],
                components: [{
                    name: 'storeroom_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '出库仓库名',
                    placeholder: '必填',
                    rule: {required: true, message: '请选择出库仓库名', type: 'number'},
                    options: []
                },
                {
                    name: 'operate',
                    type: 'text',
                    component: null,
                    label: '操作人（制票人）',
                    placeholder: '必填',
                    rule: {required: true, message: '请输入操作人'}
                },
                {
                    name: 'deliveryman',
                    type: 'text',
                    component: null,
                    label: '送货人',
                    placeholder: '必填',
                    rule: {required: true, message: '请输入送货人'}
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    label: '出库日期',
                    placeholder: '',
                    rule: [{required: true, message: '请选择出库日期'}, {validator: validate2.reDate, message: '请选择出库日期'}]
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
                tab: '新建凤凰山茶库出库信息',
                selectUrl2: [['storerooms', 'id', 'name', true]],
                selectInit2: [{value: '', label: '仓库选择'}],
                popNumber2: [1],
                components: [{
                    name: 'serial',
                    type: 'text',
                    component: null,
                    label: '出库批次号',
                    disabled: true,
                    rule: {required: true}
                },
                {
                    name: 'storeroom_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '出库仓库名',
                    placeholder: '必填',
                    rule: {required: true, message: '请选择出库仓库名', type: 'number'},
                    options: []
                },
                {
                    name: 'operate',
                    type: 'text',
                    component: null,
                    label: '操作人（制票人）',
                    placeholder: '必填',
                    rule: {required: true, message: '请输入操作人'}
                },
                {
                    name: 'deliveryman',
                    type: 'text',
                    component: null,
                    label: '送货人',
                    placeholder: '必填',
                    rule: {required: true, message: '请输入送货人'}
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    label: '出库日期',
                    placeholder: '',
                    rule: [{required: true, message: '请选择出库日期'}, {validator: validate2.reDate, message: '请选择出库日期'}]
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
            printComponent: [{
                tab: '打印溯源码信息',
                components: [{
                    name: 'serial',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '出库单号：',
                    placeholder: '',
                    disabled: true,
                    rule: {required: true}
                },
                {
                    name: 'serial',
                    component: Qrcode,
                    isNull: false,
                    label: '二维码：',
                    placeholder: '',
                    rule: null
                }]
            }]
        },
        {
            settitle: '仓库管理',
            tab: '毛茶入库管理',
            roleKey: 'into',
            key: 'invoices-order',
            url: 'invoices-order',
            batch: 'invoicesOrderBatch',
            changeDataArr: [{state: {0: '未完成', 1: '已完成'}}],
            searchPlaceholder: '请输入调拨批次号号进行搜索',
            theads: ['入库单批次号', '入库日期', '出库仓库名', '入库仓库名', '操作人（制票人）', '送货人', '提货人', '备注'],
            protos: ['serial', 'date', 'store_name', 'storeroom_name', 'operate', 'deliveryman', 'consignee', 'memo'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50],
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
                selectUrl2: [['storerooms', 'id', 'name', true]],
                selectInit2: [{value: '', label: '仓库选择'}],
                popNumber2: [4],
                components: [{
                    name: 'orderNumber',
                    type: 'textScan',
                    component: null,
                    label: '扫描出库单',
                    rule: {required: true, message: '请扫描出库单'}
                },
                {
                    name: 'store_name',
                    type: 'text',
                    component: null,
                    label: '出库仓库名',
                    placeholder: '',
                    disabled: true,
                    rule: null
                },
                {
                    name: 'deliveryman',
                    type: 'text',
                    component: null,
                    label: '送货人',
                    placeholder: '',
                    disabled: true,
                    rule: null
                },
                {
                    name: 'product_amount',
                    type: 'text',
                    component: null,
                    label: '产品数量',
                    placeholder: '',
                    disabled: true,
                    rule: {required: true, message: '请确定产品数量'}
                },
                {
                    name: 'storeroom_id',
                    type: 'select',
                    component: null,
                    label: '入库仓库名',
                    placeholder: '',
                    rule: {required: true, message: '请输入入库仓库名', type: 'number'},
                    options: []
                },
                {
                    name: 'operate',
                    type: 'text',
                    component: null,
                    label: '操作人（制票人）',
                    placeholder: '必填',
                    rule: {required: true, message: '请输入操作人'}
                },
                {
                    name: 'consignee',
                    type: 'text',
                    component: null,
                    label: '提货人',
                    placeholder: '必填',
                    rule: {required: true, message: '请输入提货人'}
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    label: '入库日期',
                    placeholder: '',
                    rule: [{required: true, message: '请选择入库日期'}, {validator: validate2.reDate, message: '请选择入库日期'}]
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    label: '备注',
                    placeholder: '',
                    rule: null
                }]
            }],
            editComponent: [{
                tab: '编辑毛茶入库信息',
                selectUrl2: [['storerooms', 'id', 'name', true]],
                selectInit2: [{value: '', label: '仓库选择'}],
                popNumber2: [2],
                components: [{
                    name: 'serial',
                    type: 'text',
                    component: null,
                    label: '入库单批次号',
                    disabled: true,
                    rule: {required: true}
                },
                {
                    name: 'store_name',
                    type: 'text',
                    component: null,
                    label: '出库仓库名',
                    disabled: true,
                    rule: {required: true}
                },
                {
                    name: 'storeroom_id',
                    type: 'select',
                    component: null,
                    label: '入库仓库名',
                    placeholder: '必填',
                    rule: {required: true, message: '请选择入库仓库名'},
                    options: []
                },
                {
                    name: 'operate',
                    type: 'text',
                    component: null,
                    label: '操作人（制票人）',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur', message: '请输入操作人（制票人）'}
                },
                {
                    name: 'deliveryman',
                    type: 'text',
                    component: null,
                    label: '送货人',
                    placeholder: '',
                    disabled: true,
                    rule: {required: true}
                },
                {
                    name: 'consignee',
                    type: 'text',
                    component: null,
                    label: '提货人',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur', message: '请输入提货人'}
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    label: '入库日期',
                    placeholder: '',
                    rule: [{required: true, message: '请选择入库日期'}, {validator: validate2.reDate, message: '请选择入库日期'}]
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    label: '备注',
                    placeholder: '',
                    rule: null
                }]
            }]
        },
        {
            settitle: '仓库管理',
            tab: '生产任务管理',
            key: 'productive-task',
            url: 'productive-task',
            batch: 'productiveTaskBatch',
            changeDataArr: [{task_type: {'week_plan': '周计划', 'client_order': '客户下单'}}, {state: {1: '未通过', 0: '已通过'}}],
            searchPlaceholder: '请输入生产任务单号进行搜索',
            theads: ['生产任务批次号', '制单日期', '制单人', '任务类型', '审核状态', '客户名称', '客户电话', '交接员', '出货日期', '发货地址', '备注'],
            protos: ['serial', 'date', 'operate', 'task_type', 'state', 'client_name', 'client_phone', 'transfer_member', 'out_date', 'ship_address', 'memo'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
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
                tab: '新建生产任务信息',
                components: [{
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    label: '制单日期',
                    placeholder: '',
                    rule: [{required: true, message: '请选择制单日期'}, {validator: validate2.reDate, message: '请选择制单日期'}]
                },
                {
                    name: 'operate',
                    type: 'text',
                    component: null,
                    label: '制单人',
                    placeholder: '',
                    rule: {required: true, message: '请输入制单人'}
                },
                {
                    name: 'task_type',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '任务类型',
                    placeholder: '必填',
                    selectNumber: {week_plan: [], client_order: [3, 4, 5, 6, 7]},
                    rule: {required: true, trigger: 'blur'},
                    options: [{
                        value: 'week_plan',
                        label: '周计划'
                    },
                    {
                        value: 'client_order',
                        label: '客户下单'
                    }]
                },
                {
                    name: 'client_name',
                    hiddenSelect: true,
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '客户名称',
                    placeholder: '',
                    rule: {required: true, message: '请输入客户名称'}
                },
                {
                    name: 'client_phone',
                    hiddenSelect: true,
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '客户电话',
                    placeholder: '',
                    rule: {required: true, message: '请输入客户电话'}
                },
                {
                    name: 'transfer_member',
                    hiddenSelect: true,
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '交接员',
                    placeholder: '',
                    rule: {required: true, message: '请输入交接员'}
                },
                {
                    name: 'out_date',
                    hiddenSelect: true,
                    type: 'date',
                    component: inputDate,
                    label: '出货日期',
                    placeholder: '',
                    rule: [{required: true, message: '请选择出货日期'}, {validator: validate2.reDate, message: '请选择出货日期'}]
                },
                {
                    name: 'ship_address',
                    hiddenSelect: true,
                    type: 'text',
                    component: null,
                    label: '发货地址',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    label: '备注',
                    placeholder: '',
                    rule: null
                }]
            }],
            moreComponent: [{value: '审核状态'}],
            editComponent: [{
                tab: '编辑生产任务信息',
                components: [{
                    name: 'serial',
                    type: 'text',
                    component: null,
                    label: '任务批次号',
                    placeholder: '',
                    disabled: true,
                    rule: {required: true}
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    label: '制单日期',
                    placeholder: '',
                    rule: [{required: true, message: '请选择制单日期'}, {validator: validate2.reDate, message: '请选择制单日期'}]
                },
                {
                    name: 'operate',
                    type: 'text',
                    component: null,
                    label: '制单人',
                    placeholder: '',
                    rule: {required: true, message: '请输入制单人'}
                },
                {
                    name: 'task_type',
                    type: 'text',
                    selectNumber: {'周计划': [], '客户下单': [4, 5, 6, 7, 8]},
                    component: null,
                    isNull: false,
                    label: '运输方式',
                    placeholder: '必填',
                    disabled: true,
                    rule: {required: true}
                },
                {
                    name: 'client_name',
                    hiddenSelect: true,
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '客户名称',
                    placeholder: '',
                    disabled: true,
                    rule: {required: true}
                },
                {
                    name: 'client_phone',
                    hiddenSelect: true,
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '客户电话',
                    placeholder: '',
                    disabled: true,
                    rule: {required: true}
                },
                {
                    name: 'transfer_member',
                    hiddenSelect: true,
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '交接员',
                    placeholder: '',
                    disabled: true,
                    rule: {required: true}
                },
                {
                    name: 'out_date',
                    hiddenSelect: true,
                    type: 'text',
                    component: null,
                    label: '出货日期',
                    placeholder: '',
                    disabled: true,
                    rule: {required: true}
                },
                {
                    name: 'ship_address',
                    hiddenSelect: true,
                    type: 'text',
                    component: null,
                    label: '发货地址',
                    placeholder: '',
                    disabled: true,
                    rule: null
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    label: '备注',
                    placeholder: '',
                    rule: null
                }]
            }]
        },
        {
            settitle: '仓库管理',
            tab: '领料单管理',
            key: 'picking-list',
            url: 'picking-list',
            batch: 'pickingListBatch',
            searchPlaceholder: '请输入领料单号进行搜索',
            theads: ['领料批次号', '领料类型', '领料部门', '领料用途', '领料日期', '发料仓库', '备注'],
            protos: ['serial', 'pick_type', 'pick_department', 'pick_use', 'date', 'storeroom_name', 'memo'],
            widths: [50, 50, 50, 50, 50, 50, 50],
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
            tab: '产品入库管理',
            roleKey: 'pout',
            roleName: ['delivery/order', 0],
            key: 'storage-order',
            url: 'storage-order',
            batch: 'storageOrderBatch',
            searchPlaceholder: '请输入库单号进行搜索',
            theads: ['产品入库批次号', '发货单位', '入库日期', '收货仓库', '备注'],
            protos: ['serial', 'forwarding_unit', 'date', 'storeroom_name', 'memo'],
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
                tab: '新建产品入库信息',
                selectUrl2: [['storerooms', 'id', 'name', true]],
                selectInit2: [{value: '', label: '仓库选择'}],
                popNumber2: [2],
                components: [{
                    name: 'forwarding_unit',
                    type: 'text',
                    component: null,
                    label: '发货单位',
                    rule: {required: true, message: '请输入发货单位'}
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    label: '入库日期',
                    placeholder: '必填',
                    rule: [{required: true, message: '请选择入库日期'}, {validator: validate2.reDate, message: '请选择入库日期'}]
                },
                {
                    name: 'storeroom_id',
                    type: 'select',
                    component: null,
                    label: '收货仓库',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', message: '请选择收货仓库', type: 'number'},
                    options: []
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    label: '备注',
                    placeholder: '',
                    rule: null
                }]
            }],
            editComponent: [{
                tab: '编辑产品入库信息',
                selectUrl2: [['storerooms', 'id', 'name', true]],
                selectInit2: [{value: '', label: '仓库选择'}],
                popNumber2: [3],
                components: [{
                    name: 'serial',
                    type: 'text',
                    component: null,
                    label: '入库批次号',
                    disabled: true,
                    rule: {required: true}
                },
                {
                    name: 'forwarding_unit',
                    type: 'text',
                    component: null,
                    label: '发货单位',
                    rule: {required: true, message: '请输入发货单位'}
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    label: '入库日期',
                    placeholder: '必填',
                    rule: [{required: true, message: '请选择入库日期'}, {validator: validate2.reDate, message: '请选择入库日期'}]
                },
                {
                    name: 'storeroom_id',
                    type: 'select',
                    component: null,
                    label: '收货仓库',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', message: '请选择收货仓库'},
                    options: []
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    label: '备注',
                    placeholder: '',
                    rule: null
                }]
            }]
        },
        {
            settitle: '仓库管理',
            tab: '产品出库管理',
            key: 'delivery',
            roleKey: 'pinto',
            roleName: ['delivery/order', 0],
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
    // 销售管理--基础信息管理
    saleProduct: [{
        settitle: '基础信息管理',
        key: 'product-count',
        roleKey: 'product',
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
        roleKey: 'client',
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
        roleKey: 'batch',
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
        roleKey: 'send',
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
    // 用户管理
    userOperate: [{
        settitle: '用户管理',
        tab: '角色管理',
        key: 'role',
        roleKey: 'role',
        url: 'role',
        roleName: ['system/role', 0],
        hiddenValue: {'fixation': 0},
        // changeDataArr: [{fixation: {0: '否', 1: '是'}}],
        searchPlaceholder: '请输入角色名称进行搜索',
        theads: ['英文名称', '中文名称', '描述'],
        protos: ['name', 'display_name', 'description'],
        widths: [50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        newComponent: [{
            tab: '新建角色信息',
            checkNumber: [0, 1],
            permissionShow: true,
            permissionCompany: 1,
            components: [{
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '英文名称',
                placeholder: '请输入英文名称',
                rule: [{required: true, trigger: 'blur', message: '请输入英文名称'}, {validator: validate2.reCheck}]
            },
            {
                name: 'display_name',
                type: 'text',
                component: null,
                label: '中文名称',
                placeholder: '',
                rule: [{required: true, trigger: 'blur', message: '请输入中文名称'}, {validator: validate2.reCheck}]
            },
            {
                name: 'description',
                type: 'textarea',
                component: null,
                label: '角色描述',
                placeholder: '请输入描述',
                rule: null
            }]
        }],
        editComponent: [{
            tab: '编辑角色信息',
            checkNumber: [0, 1],
            permissionShow: true,
            permissionCompany: 1,
            components: [{
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '英文名称',
                placeholder: '请输入英文名称',
                rule: [{required: true, trigger: 'blur', message: '请输入英文名称'}, {validator: validate2.reCheck}]
            },
            {
                name: 'display_name',
                type: 'text',
                component: null,
                label: '中文名称',
                placeholder: '',
                rule: [{required: true, trigger: 'blur', message: '请输入中文名称'}, {validator: validate2.reCheck}]
            },
            {
                name: 'description',
                type: 'textarea',
                component: null,
                label: '角色描述',
                placeholder: '请输入描述',
                rule: null
            }]
        }]
    },
    {
        settitle: '用户管理',
        roleName: ['system/user', 0],
        key: 'user',
        roleKey: 'user',
        tab: '用户管理',
        url: 'user',
        hiddeRole: true,
        changeDataArr: [{gender: {0: '男', 1: '女'}}],
        searchPlaceholder: '请输入用户名搜索',
        theads: ['用户名', '邮箱', '手机号码', '性别', '姓名', '出生日期', '所属部门', '入职日期', '工号', '头像'],
        protos: ['name', 'email', 'phone', 'gender', 'realname', 'birth_date', 'department', 'hiredate', 'number', 'img'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        listComponent: [],
        newComponent: [{
            tab: '新建用户信息',
            hiddenValue: {type: 0},
            checkNumber: [0, 1, 2],
            hasImg: true,
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
                name: 'phone',
                type: 'text',
                component: null,
                isNull: false,
                label: '手机号码',
                placeholder: '请输入手机号码',
                rule: [{required: true, trigger: 'blur', message: '请输入手机号码'}, {validator: validate2.reCheck, trigger: 'blur', message: '手机号码已存在'}, {validator: validate2.phone}]
            },
            {
                name: 'gender',
                type: 'select',
                component: null,
                isNull: false,
                label: '性别',
                placeholder: '请选择性别',
                rule: null,
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
                rule: [{required: false, message: '请选择出生日期'}, {validator: validate2.reDate, message: '请选择出生日期'}]

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
            checkNumber: [0, 1, 2],
            hasImg: true,
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
                name: 'phone',
                type: 'text',
                component: null,
                isNull: false,
                label: '手机号码',
                placeholder: '请输入手机号码',
                rule: [{required: true, trigger: 'blur', message: '请输入手机号码'}, {validator: validate2.reCheck, trigger: 'blur', message: '手机号码已存在'}, {validator: validate2.phone}]
            },
            {
                name: 'gender',
                type: 'select',
                component: null,
                isNull: false,
                label: '性别',
                placeholder: '请选择性别',
                rule: {required: true, trigger: 'blur'},
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
                rule: [{required: false, message: '请选择出生日期'}, {validator: validate2.reDate, message: '请选择出生日期'}]
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
        roleKey: 'log',
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
    }],
    // 权限管理-运营管理
    adminRole: [
        {
            settitle: '运营管理',
            tab: '权限分类管理',
            key: 'permission_category',
            url: 'permission_category',
            hiddeRole: false,
            roleName: ['admin/permission_category', 0],
            searchPlaceholder: '请输入分类中文名称搜索',
            theads: ['分类', '英文名称', '中文名称', '路由', '详情页路由', '描述', '备注'],
            protos: ['parent_name', 'name', 'display_name', 'resource', 'detail', 'description', 'memo'],
            widths: [50, 50, 50, 50, 50, 50, 50],
            typeComponent: [{
                component: output
            },
            {
                component: newbuildBtn
            }],
            newComponent: [{
                tab: '新建权限分类信息',
                checkNumber: [2, 3],
                selectUrl2: [['permission_categories', 'id', 'display_name', true]],
                selectInit2: [{value: '', label: '请选择父类'}],
                selectWhereArr2: [[{n: 'pid', v: ''}]],
                popNumber2: [1],
                components: [{
                    name: 'type',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '类型',
                    placeholder: '',
                    selectNumber: {child: [1]},
                    rule: {required: true, trigger: 'blur', message: '请选择类型'},
                    options: [{
                        label: '父类',
                        value: 'parent'
                    },
                    {
                        label: '子类',
                        value: 'child'
                    }]
                },
                {
                    name: 'pid',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '父类',
                    hiddenSelect: true,
                    assocNum: 1,
                    disabled: true,
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择父类'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    label: '英文名称',
                    placeholder: '请输英文名称',
                    rule: [{required: true, trigger: 'blur', message: '请输入英文名称'}, {validator: validate2.reCheck}]
                },
                {
                    name: 'display_name',
                    type: 'text',
                    component: null,
                    label: '中文名称',
                    placeholder: '请输中文名称',
                    rule: [{required: true, trigger: 'blur', message: '请输入中文名称'}, {validator: validate2.reCheck}]
                },
                {
                    name: 'resource',
                    type: 'text',
                    component: null,
                    label: '路由',
                    placeholder: '请输入路由',
                    rule: {required: false, trigger: 'blur', message: '请输入路由'}
                },
                {
                    name: 'detail',
                    type: 'text',
                    component: null,
                    label: '详情页路由',
                    placeholder: '请输入详情页路由',
                    rule: {required: false, trigger: 'blur', message: '请输入详情页路由'}
                },
                {
                    name: 'description',
                    type: 'textarea',
                    component: null,
                    label: '描述',
                    placeholder: '请输入描述',
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
                tab: '编辑权限分类信息',
                checkNumber: [2, 3],
                selectUrl2: [['permission_categories', 'id', 'display_name', true]],
                selectInit2: [{value: '', label: '请选择父类'}],
                selectWhereArr2: [[{n: 'pid', v: ''}]],
                popNumber2: [1],
                selectChangePosition: 0,
                selectChangeField: 'type',
                components: [{
                    name: 'type',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '类型',
                    placeholder: '',
                    selectNumber: {child: [1]},
                    rule: {required: true, trigger: 'blur', message: '请选择类型'},
                    options: [{
                        label: '父类',
                        value: 'parent'
                    },
                    {
                        label: '子类',
                        value: 'child'
                    }]
                },
                {
                    name: 'pid',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '父类',
                    hiddenSelect: false,
                    assocNum: 1,
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择父类'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    label: '英文名称',
                    placeholder: '请输英文名称',
                    rule: [{required: true, trigger: 'blur', message: '请输入英文名称'}, {validator: validate2.reCheck}]
                },
                {
                    name: 'display_name',
                    type: 'text',
                    component: null,
                    label: '中文名称',
                    placeholder: '请输中文名称',
                    rule: [{required: true, trigger: 'blur', message: '请输入中文名称'}, {validator: validate2.reCheck}]
                },
                {
                    name: 'resource',
                    type: 'text',
                    component: null,
                    label: '路由',
                    placeholder: '请输入路由',
                    rule: {required: false, trigger: 'blur', message: '请输入路由'}
                },
                {
                    name: 'detail',
                    type: 'text',
                    component: null,
                    label: '详情页路由',
                    placeholder: '请输入详情页路由',
                    rule: {required: false, trigger: 'blur', message: '请输入详情页路由'}
                },
                {
                    name: 'description',
                    type: 'textarea',
                    component: null,
                    label: '描述',
                    placeholder: '请输入描述',
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
            settitle: '运营管理',
            tab: '权限管理',
            key: 'permission',
            url: 'permission',
            hiddeRole: false,
            roleName: ['admin/permission_category', 0],
            searchPlaceholder: '请输入展示名称搜索',
            theads: ['模块', '分类', '比较值', '展示名称', '备注'],
            protos: ['parent_name', 'category_name', 'name', 'display_name', 'memo'],
            widths: [50, 50, 50, 50],
            typeComponent: [{
                component: output
            },
            {
                component: newbuildBtn
            }],
            newComponent: [{
                tab: '新建权限信息',
                selectUrl3: [['permission/category/select', 'id', 'name', true]],
                selectInit3: [{value: '', label: '请选择所属分类'}],
                popNumber3: [0],
                components: [{
                    name: 'category_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '所属分类',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择所属分类'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    label: '比较值',
                    placeholder: '请输入比较值',
                    rule: {required: true, trigger: 'blur', message: '请输入比较值'}
                },
                {
                    name: 'display_name',
                    type: 'text',
                    component: null,
                    label: '展示名称',
                    placeholder: '请输入展示名称',
                    rule: {required: true, trigger: 'blur', message: '请输入展示名称'}
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
                tab: '编辑权限信息',
                selectUrl3: [['permission/category/select', 'id', 'name', true]],
                selectInit3: [{value: '', label: '请选择所属分类'}],
                popNumber3: [0],
                components: [{
                    name: 'category_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '所属分类',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择所属分类'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    label: '比较值',
                    placeholder: '请输入比较值',
                    rule: {required: true, trigger: 'blur', message: '请输入比较值'}
                },
                {
                    name: 'display_name',
                    type: 'text',
                    component: null,
                    label: '展示名称',
                    placeholder: '请输入展示名称',
                    rule: {required: true, trigger: 'blur', message: '请输入展示名称'}
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
            settitle: '运营管理',
            tab: '权限角色管理',
            key: 'role',
            url: 'role',
            hiddeRole: false,
            roleName: ['admin/permission_category', 0],
            searchPlaceholder: '请输入分类中文名称搜索',
            changeDataArr: [{fixation: {0: '否', 1: '是'}}],
            theads: ['英文名称', '中文名称', '描述', '预设'],
            protos: ['name', 'display_name', 'description', 'fixation'],
            widths: [50, 50, 50, 50],
            typeComponent: [{
                component: output
            },
            {
                component: newbuildBtn
            }],
            newComponent: [{
                tab: '新建权限角色信息',
                checkNumber: [0, 1],
                components: [{
                    name: 'name',
                    type: 'text',
                    component: null,
                    label: '英文名称',
                    placeholder: '请输入英文名称',
                    rule: [{required: true, trigger: 'blur', message: '请输入英文名称'}, {validator: validate2.reCheck}]
                },
                {
                    name: 'display_name',
                    type: 'text',
                    component: null,
                    label: '中文名称',
                    placeholder: '请输入中文名称',
                    rule: [{required: true, trigger: 'blur', message: '请输入中文名称'}, {validator: validate2.reCheck}]
                },
                {
                    name: 'description',
                    type: 'textarea',
                    component: null,
                    label: '描述',
                    placeholder: '',
                    rule: null
                }
                ]
            }]
        }
    ],
    // 入驻单位管理-运营管理
    adminCompany: [{
        settitle: '入驻单位管理',
        roleName: ['admin/company', 1],
        key: 'company',
        tab: '入驻单位信息',
        url: 'company',
        batch: 'companyUser',
        hiddePermission: true,
        searchPlaceholder: '请输入公司名称进行搜索',
        theads: ['公司名称', '公司编码', '公司Logo', '负责人/法人', '公司简称', '统一码', '电话', '地址', '经营范围', '员工总数', '公司网站', '销售网站'],
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
            hasImg: true,
            components: [{
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '公司名称',
                placeholder: '请输入公司网站名称',
                rule: {required: true, trigger: 'blur', message: '请输入公司名称'}
            },
            {
                name: 'short_name',
                type: 'text',
                component: null,
                isNull: false,
                label: '公司简称',
                placeholder: '请输入公司简称',
                rule: {required: true, trigger: 'blur', message: '请输入公司简称'}
            },
            {
                name: 'legal_person',
                type: 'text',
                component: null,
                isNull: false,
                label: '负责人/法人',
                placeholder: '请输入负责人/法人',
                rule: {required: true, trigger: 'blur', message: '请输入负责人'}
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
            hasImg: true,
            components: [{
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '公司名称',
                placeholder: '请输入公司网站名称',
                rule: {required: true, trigger: 'blur', message: '请输入公司名称'}
            },
            {
                name: 'short_name',
                type: 'text',
                component: null,
                isNull: false,
                label: '公司简称',
                placeholder: '请输入公司简称',
                rule: {required: true, trigger: 'blur', message: '请输入公司简称'}
            },
            {
                name: 'legal_person',
                type: 'text',
                component: null,
                isNull: false,
                label: '负责人/法人',
                placeholder: '请输入负责人/法人',
                rule: {required: true, trigger: 'blur', message: '请输入负责人'}
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
    adminFeedback: [{
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
    adminLog: [{
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
        }]
    }]
}
