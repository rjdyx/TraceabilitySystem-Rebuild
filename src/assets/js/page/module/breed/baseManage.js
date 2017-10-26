import importBtn from 'components/public/import-btn.vue'
import newbuildBtn from 'components/public/newbuild-btn.vue'
import output from 'components/public/output.vue'
import selectSection from 'components/public/select-section.vue'
import inputDate from 'components/public/inputDate.vue'
import inputFile from 'components/public/inputFile.vue'
import inputTextSelect from 'components/public/inputTextSelect.vue'

import validate2 from 'utils/validate2.js'

export let baseManage = {
    // 基础信息管理
    baseManage: [
        {
            settitle: '养殖基础信息管理',
            key: 'farm',
            tab: '养殖场信息',
            roleName: ['beast/basic', 0],
            url: 'farm',
            searchPlaceholder: '请输入养殖场进行搜索',
            search: ['query_text', 'name'],
            theads: ['养殖场名称', '养殖面积', '负责人', '联系方式', '养殖畜禽种类', '养殖规模', '详细地址', '图片', '备注信息'],
            protos: ['name', 'area_unit', 'principal', 'phone', 'kind', 'scale', 'address', 'img', 'memo'],
            selectSearch: ['farm.name'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
            typeComponent: [{
                component: output
            },
            {
                component: newbuildBtn
            }],
            newComponent: [{
                tab: '新建养殖场信息',
                checkNumber: [0],
                hasImg: true,
                components: [{
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '养殖场名称',
                    placeholder: '必填',
                    rule: [{required: true, trigger: 'blur', message: '请输入养殖场'}, {validator: validate2.reCheck, trigger: 'blur', message: '养殖场名称重复'}]
                },
                {
                    name: 'area',
                    type: 'textSelect',
                    component: inputTextSelect,
                    isNull: false,
                    label: '养殖面积',
                    placeholder: '请填写数字（必填）',
                    rule: [{required: true, message: '请输入正确的面积', trigger: 'blur'}, {validator: validate2.reNumber}],
                    options: [
                        {
                            value: '亩', label: '亩'
                        },
                        {
                            value: '平方米', label: '平方米'
                        },
                        {
                            value: '公顷', label: '公顷'
                        }
                    ]
                },
                {
                    name: 'principal',
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
                    label: '联系方式',
                    placeholder: '请输入11位的手机号（固话用-隔开）',
                    rule: { validator: validate2.phone, trigger: 'blur' }
                },
                {
                    name: 'kind',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '养殖畜禽种类',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', message: '请输入养殖畜禽种类'}
                },
                {
                    name: 'scale',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '养殖规模',
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
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '养殖场图片',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'video',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '视频设备号',
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
                tab: '编辑养殖场信息',
                hasImg: true,
                limit: 1,
                checkNumber: [0],
                getMessage: '养殖场面积不能小于下属养殖区之和',
                components: [{
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '养殖场名称',
                    placeholder: '必填',
                    rule: [{required: true, trigger: 'blur', message: '请输入养殖场'}, {validator: validate2.reCheck, trigger: 'blur', message: '养殖场名称重复'}]
                },
                {
                    name: 'area',
                    type: 'textSelect',
                    component: inputTextSelect,
                    isNull: false,
                    label: '养殖面积',
                    placeholder: '请填写数字（必填）',
                    rule: [{required: true, message: '请输入正确的面积', trigger: 'blur'}, {validator: validate2.reNumber}],
                    options: [
                        {
                            value: '亩', label: '亩'
                        },
                        {
                            value: '平方米', label: '平方米'
                        },
                        {
                            value: '公顷', label: '公顷'
                        }
                    ]
                },
                {
                    name: 'principal',
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
                    label: '联系方式',
                    placeholder: '请输入11位的手机号（固话用-隔开）',
                    rule: { validator: validate2.phone, trigger: 'blur' }
                },
                {
                    name: 'kind',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '养殖畜禽种类',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', message: '请输入养殖畜禽种类'}
                },
                {
                    name: 'scale',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '养殖规模',
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
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '养殖场图片',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'video',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '视频设备号',
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
            listComponent: []
        },
        {
            settitle: '养殖基础信息管理',
            key: 'farmcd',
            tab: '养殖区信息',
            roleName: ['beast/basic', 0],
            url: 'farmcd',
            searchPlaceholder: '请输入养殖区进行搜索',
            selectValueId: [['pid', 'parent_name', true]],
            selectDefault: [{value: '', label: '选择养殖场'}],
            theads: ['所属养殖场', '养殖区名称', '养殖面积', '负责人', '联系方式', '养殖畜禽种类', '养殖规模', '详细地址', '图片', '备注信息'],
            protos: ['parent_name', 'name', 'area_unit', 'principal', 'phone', 'kind', 'scale', 'address', 'img', 'memo'],
            selectSearch: ['farmcds.pid'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            typeComponent: [{
                component: importBtn
            },
            {
                component: output
            },
            {
                component: newbuildBtn
            }],
            newComponent: [{
                tab: '新建养殖区信息',
                selectUrl: [['farm', 'farmcd', 'pid', 'farm_name', true]],
                selectInit: [{value: '', label: '请选择养殖场'}],
                checkNumber: [1],
                popNumber: [0],
                hasImg: true,
                limit: 2,
                getMessage: '已超过养殖场余留面积',
                components: [{
                    // 场名
                    name: 'pid',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '养殖场',
                    placeholder: '请选择养殖场',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择养殖场'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '养殖区名称',
                    placeholder: '请输入养殖区名称',
                    rule: [{required: true, message: '请输入养殖区名称', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '养殖区名称重复'}]
                },
                {
                    name: 'area',
                    type: 'textSelect',
                    component: inputTextSelect,
                    isNull: false,
                    label: '养殖区面积',
                    placeholder: '请填写数字（必填）',
                    rule: [{required: true, message: '请输入正确的面积', trigger: 'blur'}, {validator: validate2.reNumber}],
                    options: [
                        {
                            value: '亩', label: '亩'
                        },
                        {
                            value: '平方米', label: '平方米'
                        },
                        {
                            value: '公顷', label: '公顷'
                        }
                    ]
                },
                {
                    name: 'principal',
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
                    label: '联系方式',
                    placeholder: '请输入11位的手机号（固话用-隔开）',
                    rule: { validator: validate2.phone, trigger: 'blur' }
                },
                {
                    name: 'kind',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '养殖畜禽种类',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', message: '请输入畜禽种类'}
                },
                {
                    name: 'scale',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '养殖规模',
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
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '养殖区图片',
                    placeholder: '图片',
                    rule: null
                },
                {
                    name: 'video',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '视频设备号',
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
                tab: '编辑养殖区信息',
                selectUrl: [['farm', 'farmcd', 'pid', 'farm_name', true]],
                selectInit: [{value: '', label: '请选择养殖场'}],
                checkNumber: [1],
                popNumber: [0],
                hasImg: true,
                limit: 2,
                getMessage: '已超过养殖场余留面积',
                components: [{
                    // 场名
                    name: 'pid',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '养殖场',
                    placeholder: '请选择养殖场',
                    rule: {required: true, type: 'number', message: '请选择养殖场'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '养殖区名称',
                    placeholder: '请输入养殖区名称',
                    rule: [{required: true, message: '请输入养殖区名称', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '养殖区名称重复'}]
                },
                {
                    name: 'area',
                    type: 'textSelect',
                    component: inputTextSelect,
                    isNull: false,
                    label: '养殖区面积',
                    placeholder: '请填写数字（必填）',
                    rule: [{required: true, message: '请输入正确的面积', trigger: 'blur'}, {validator: validate2.reNumber}],
                    options: [
                        {
                            value: '亩', label: '亩'
                        },
                        {
                            value: '平方米', label: '平方米'
                        },
                        {
                            value: '公顷', label: '公顷'
                        }
                    ]
                },
                {
                    name: 'principal',
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
                    label: '联系方式',
                    placeholder: '请输入11位的手机号（固话用-隔开）',
                    rule: { validator: validate2.phone, trigger: 'blur' }
                },
                {
                    name: 'kind',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '养殖畜禽种类',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', message: '请输入畜禽种类'}
                },
                {
                    name: 'scale',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '养殖规模',
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
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '养殖区图片',
                    placeholder: '图片',
                    rule: null
                },
                {
                    name: 'video',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '视频设备号',
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
            listComponent: [{
                components: [{
                    type: 'select',
                    component: selectSection,
                    name: 'farms.id',
                    value: '',
                    options: []
                }]
            }]
        },
        {
            settitle: '养殖基础信息管理',
            key: 'area',
            tab: '圈舍档案',
            roleName: ['beast/basic', 0],
            url: 'area',
            searchPlaceholder: '请输入圈舍名称进行搜索',
            selectValueId: [['farm_id', 'farm_name', true]],
            selectDefault: [{value: '', label: '选择养殖区'}],
            theads: ['所属养殖区', '圈舍名称', '圈舍面积', '图片', '备注信息'],
            protos: ['farm_name', 'name', 'area_unit', 'img', 'memo'],
            selectSearch: ['farms.id'],
            widths: [50, 50, 50, 50, 50],
            typeComponent: [{
                component: importBtn
            },
            {
                component: output
            },
            {
                component: newbuildBtn
            }],
            newComponent: [{
                tab: '新建圈舍信息',
                selectUrl: [['farmcd', 'farms', 'id', 'name', true]],
                selectInit: [{value: '', label: '请选择养殖区'}],
                checkNumber: [1],
                popNumber: [0],
                hasImg: true,
                limit: 2,
                getMessage: '已超过养殖区余留面积',
                components: [{
                    // 场名
                    name: 'farm_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '所属养殖区',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择所属养殖区'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '圈舍名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入圈舍名称', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '圈舍名称重复'}]
                },
                {
                    name: 'area',
                    type: 'textSelect',
                    component: inputTextSelect,
                    isNull: false,
                    label: '圈舍面积',
                    placeholder: '请填写数字（必填）',
                    rule: [{required: true, message: '请填写数字（必填）', trigger: 'blur'}, {validator: validate2.reNumber}],
                    options: [
                        {
                            value: '亩', label: '亩'
                        },
                        {
                            value: '平方米', label: '平方米'
                        },
                        {
                            value: '公顷', label: '公顷'
                        }
                    ]
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '圈舍图片',
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
                tab: '编辑圈舍信息',
                selectUrl: [['farmcd', 'farms', 'id', 'name', true]],
                selectInit: [{value: '', label: '请选择养殖区'}],
                checkNumber: [1],
                popNumber: [0],
                hasImg: true,
                limit: 2,
                getMessage: '已超过养殖区余留面积',
                components: [{
                    // 场名
                    name: 'farm_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '所属养殖区',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择所属养殖区'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '圈舍名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入圈舍名称', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '圈舍名称重复'}]
                },
                {
                    name: 'area',
                    type: 'textSelect',
                    component: inputTextSelect,
                    isNull: false,
                    label: '圈舍面积',
                    placeholder: '请填写数字（必填）',
                    rule: [{required: true, message: '请填写数字（必填）', trigger: 'blur'}, {validator: validate2.reNumber}],
                    options: [
                        {
                            value: '亩', label: '亩'
                        },
                        {
                            value: '平方米', label: '平方米'
                        },
                        {
                            value: '公顷', label: '公顷'
                        }
                    ]
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '图片',
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
                    type: 'select',
                    component: selectSection,
                    name: 'farms.id',
                    value: '',
                    options: []
                }]
            }]
        },
        {
            settitle: '养殖基础信息管理',
            key: 'beast',
            tab: '畜禽档案',
            roleName: ['beast/basic', 0],
            url: 'beast',
            searchPlaceholder: '请输入畜禽名称进行搜索',
            selectValueId: [['category_id', 'category_name', true]],
            selectDefault: [{value: '', label: '选择畜禽分类'}],
            theads: ['畜禽分类', '畜禽名称', '描述', 'RFID位置', '图片', '备注信息'],
            protos: ['category_name', 'name', 'description', 'ear', 'img', 'memo'],
            selectSearch: ['beast.img'],
            widths: [50, 50, 50, 50, 50, 50],
            typeComponent: [{
                component: importBtn
            },
            {
                component: output
            },
            {
                component: newbuildBtn
            }],
            newComponent: [{
                tab: '新建畜禽档案',
                checkNumber: [1],
                hasImg: true,
                selectUrl: [['category', 'beast', 'category_id', 'category_name', true]],
                selectInit: [{value: '', label: '选择畜禽分类'}],
                popNumber: [0],
                components: [{
                    name: 'category_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '畜禽分类',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择畜禽分类'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '畜禽名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入畜禽名称', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '畜禽名称重复'}]
                },
                {
                    name: 'description',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '品种描述',
                    placeholder: '请对品种进行描述',
                    rule: null
                },
                {
                    name: 'ear',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: 'RFID位置',
                    placeholder: '如 耳朵',
                    rule: {required: true, trigger: 'blur', message: '请输入RFID位置 如 耳朵'}
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '畜禽图片',
                    placeholder: '',
                    rule: ''
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
                tab: '编辑畜禽档案',
                checkNumber: [1],
                hasImg: true,
                selectUrl: [['category', 'beast', 'category_id', 'category_name', true]],
                selectInit: [{value: '', label: '选择畜禽分类'}],
                popNumber: [0],
                components: [{
                    name: 'category_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '畜禽分类',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择畜禽分类'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '畜禽名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入畜禽名称', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '畜禽名称重复'}]
                },
                {
                    name: 'description',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '品种描述',
                    placeholder: '请对品种进行描述',
                    rule: null
                },
                {
                    name: 'ear',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: 'RFID位置',
                    placeholder: '如 耳朵',
                    rule: {required: true, trigger: 'blur', message: '请输入RFID位置 如 耳朵'}
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '畜禽图片',
                    placeholder: '',
                    rule: ''
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
                    type: 'select',
                    name: 'categories.id',
                    value: '',
                    component: selectSection,
                    options: []
                }]
            }]
        },
        {
            settitle: '养殖基础信息管理 ',
            key: 'fodder',
            tab: '饲料档案',
            roleName: ['beast/basic', 0],
            url: 'fodder',
            searchPlaceholder: '请输入饲料名称',
            selectValueId: [['category_id', 'category_name', true]],
            selectDefault: [{value: '', label: '选择饲料分类'}],
            search: ['query_text', 'name'],
            theads: ['饲料类别', '饲料名称', '用途', '包装规格', '产地', '生产厂家名称', '联系方式', '图片', '备注信息'],
            protos: ['category_name', 'name', 'use', 'specification', 'address', 'vender_name', 'phone', 'img', 'memo'],
            selectSearch: ['fodder.category_name'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
            typeComponent: [{
                component: importBtn
            },
            {
                component: output
            },
            {
                component: newbuildBtn
            }],
            newComponent: [{
                tab: '新建饲料档案',
                checkNumber: [1],
                selectUrl: [['category', 'fodder', 'category_id', 'category_name', true]],
                selectInit: [{value: '', label: '选择饲料分类'}],
                popNumber: [0],
                hasImg: true,
                components: [{
                    name: 'category_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '饲料类别',
                    placeholder: '请选择饲料类别',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择饲料类别'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '饲料名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入饲料名称', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '饲料名称重复'}]
                },
                {
                    name: 'use',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '用途',
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
                    name: 'address',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '产地',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'vender_name',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '生产厂家名称',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'phone',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '联系方式',
                    placeholder: '请输入11位的手机号（固话用-隔开）',
                    rule: {validator: validate2.phone, trigger: 'blur'}
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '饲料图片',
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
                tab: '编辑饲料档案',
                checkNumber: [1],
                selectUrl: [['category', 'fodder', 'category_id', 'category_name', true]],
                selectInit: [{value: '', label: '请选择饲料分类'}],
                popNumber: [0],
                hasImg: true,
                components: [{
                    name: 'category_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '饲料类别',
                    placeholder: '请输入饲料类别',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择饲料类别'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '饲料名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入饲料名称', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '饲料名称重复'}]
                },
                {
                    name: 'use',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '用途',
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
                    name: 'address',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '产地',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'vender_name',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '生产厂家名称',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'phone',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '联系方式',
                    placeholder: '请输入11位的手机号（固话用-隔开）',
                    rule: {validator: validate2.phone, trigger: 'blur'}
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '饲料图片',
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
                    type: 'select',
                    name: 'categories.id',
                    value: '',
                    component: selectSection,
                    options: []
                }]
            }]
        },
        // 饲料添加剂
        {
            settitle: '养殖基础信息管理 ',
            key: 'addition',
            tab: '饲料添加剂档案',
            roleName: ['beast/basic', 0],
            url: 'addition',
            selectSearch: ['additions.category_id'],
            selectValueId: [['category_id', 'category_name', true]],
            selectDefault: [{value: '', label: '选择添加剂类型'}],
            searchPlaceholder: '请输入饲料添加剂名称',
            search: ['query_text', 'name'],
            theads: ['添加剂类别', '添加剂名称', '净重', '使用方法', '生产日期', '保质期', '生产标准代号', '产地', '原料组成', '图片', '备注信息'],
            protos: ['category_name', 'name', 'weight', 'use', 'date', 'expiration_date', 'mark', 'origin', 'compose', 'img', 'memo'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            typeComponent: [{
                component: importBtn
            },
            {
                component: output
            },
            {
                component: newbuildBtn
            }],
            newComponent: [{
                tab: '新建饲料添加剂档案',
                selectUrl: [['category', 'addition', 'category_id', 'category_name', true]],
                popNumber: [0],
                selectInit: [{value: '', label: '选择饲料添加剂分类'}],
                checkNumber: [1],
                hasImg: true,
                components: [{
                    name: 'category_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '添加剂类别',
                    placeholder: '请选择添加剂类别',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择添加剂类别'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '添加剂名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入添加剂名称', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '饲料添加剂名称重复'}]
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: true,
                    label: '生产日期',
                    placeholder: '选择生产日期',
                    rule: [{required: true, trigger: 'blur', message: '请输入生产日期'}, {validator: validate2.reDate, message: '请输入生产日期'}]
                },
                {
                    name: 'expiration_date',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '保质期',
                    placeholder: '如 12个月',
                    rule: {required: true, trigger: 'blur', message: '请输入保质期'}
                },
                {
                    name: 'use',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '使用方法',
                    placeholder: '添加剂的使用方法',
                    rule: null
                },
                {
                    name: 'weight',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '净重',
                    placeholder: '如 1.5kg',
                    rule: {required: true, trigger: 'blur', message: '请输入添加剂重量'}
                },
                {
                    name: 'origin',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '产地',
                    placeholder: '如 广州市天河区***',
                    rule: null
                },
                {
                    name: 'mark',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '生产标准代号',
                    placeholder: '如 SQ123456',
                    rule: null
                },
                {
                    name: 'compose',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '原料组成',
                    placeholder: '请填写添加剂的原料组成',
                    rule: null
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '添加剂图片',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    isNull: true,
                    label: '备注信息',
                    placeholder: '可以填写备忘信息',
                    rule: null
                }
                ]
            }],
            editComponent: [{
                tab: '编辑饲料添加剂档案',
                selectUrl: [['category', 'addition', 'category_id', 'category_name', true]],
                selectInit: [{value: '', label: '请选择饲料添加剂分类'}],
                popNumber: [0],
                checkNumber: [1],
                hasImg: true,
                components: [{
                    name: 'category_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '添加剂类别',
                    placeholder: '请选择添加剂类别',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择添加剂类别'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '添加剂名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入添加剂名称', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '饲料添加剂名称重复'}]
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: true,
                    label: '生产日期',
                    placeholder: '选择生产日期',
                    rule: [{required: true, trigger: 'blur', message: '请输入生产日期'}, {validator: validate2.reDate, message: '请输入生产日期'}]
                },
                {
                    name: 'expiration_date',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '保质期',
                    placeholder: '如 12个月',
                    rule: {required: true, trigger: 'blur', message: '请输入保质期'}
                },
                {
                    name: 'use',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '使用方法',
                    placeholder: '添加剂的使用方法',
                    rule: null
                },
                {
                    name: 'weight',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '净重',
                    placeholder: '如 1.5kg',
                    rule: {required: true, trigger: 'blur', message: '请输入添加剂重量'}
                },
                {
                    name: 'origin',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '产地',
                    placeholder: '如 广州市天河区***',
                    rule: null
                },
                {
                    name: 'mark',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '生产标准代号',
                    placeholder: '如 SQ123456',
                    rule: null
                },
                {
                    name: 'compose',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '原料组成',
                    placeholder: '请填写添加剂的原料组成',
                    rule: null
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '添加剂图片',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    isNull: true,
                    label: '备注信息',
                    placeholder: '可以填写备忘信息',
                    rule: null
                }
                ]
            }],
            listComponent: [{
                components: [{
                    type: 'select',
                    name: 'additions.category_id',
                    value: '',
                    component: selectSection,
                    options: []
                }]
            }]
        },
        {
            settitle: '养殖基础信息管理',
            key: 'drug',
            tab: '兽药档案',
            url: 'drug',
            roleName: ['beast/basic', 0],
            searchPlaceholder: '请输入兽药名称',
            selectValueId: [['category_id', 'category_name', true]],
            selectDefault: [{value: '', label: '选择兽药类型'}],
            theads: ['兽药分类', '兽药名称', '用途', '包装规格', '产地', '生产厂家名称', '联系方式', '图片', '备注信息'],
            protos: ['category_name', 'name', 'use', 'specification', 'address', 'vender_name', 'phone', 'img', 'memo'],
            selectSearch: ['drug.img'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
            typeComponent: [{
                component: importBtn
            },
            {
                component: output
            },
            {
                component: newbuildBtn
            }],
            newComponent: [{
                tab: '新建兽药档案',
                selectUrl: [['category', 'drug', 'category_id', 'category_name', true]],
                selectInit: [{value: '', label: '选择兽药分类'}],
                popNumber: [0],
                hasImg: true,
                checkNumber: [1],
                components: [{
                    name: 'category_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '畜药类别',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择兽药类别'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '兽药名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入兽药名称', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '兽药名称重复'}]
                },
                {
                    name: 'use',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '用途',
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
                    name: 'vender_name',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '生产厂家名称',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'address',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '产地',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'phone',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '联系方式',
                    placeholder: '请输入11位的手机号（固话用-隔开）',
                    rule: { validator: validate2.phone }
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '兽药图片',
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
                tab: '编辑兽药档案',
                selectUrl: [['category', 'drug', 'category_id', 'category_name', true]],
                selectInit: [{value: '', label: '选择兽药分类'}],
                popNumber: [0],
                hasImg: true,
                checkNumber: [1],
                components: [{
                    name: 'category_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '畜药类别',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择兽药类别'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '兽药名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入兽药名称', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '兽药名称重复'}]
                },
                {
                    name: 'use',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '用途',
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
                    name: 'vender_name',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '生产厂家名称',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'address',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '产地',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'phone',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '联系方式',
                    placeholder: '请输入11位的手机号（固话用-隔开）',
                    rule: { validator: validate2.phone }
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '兽药图片',
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
                    type: 'select',
                    name: 'category_id',
                    value: '',
                    component: selectSection,
                    options: []
                }]
            }]
        }
    ]
}
