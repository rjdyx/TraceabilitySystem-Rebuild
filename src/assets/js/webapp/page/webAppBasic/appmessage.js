// 中间列表的数据

import importBtn from '../../../components/public/import-btn.vue'
import newbuildBtn from '../../../components/public/newbuild-btn.vue'
import output from '../../../components/public/output.vue'
import selectSection from '../../../components/public/select-section.vue'
import datePick from '../../../components/public/datePick.vue'
import inputDate from '../../../components/public/inputDate.vue'
import inputFile from '../../../components/public/inputFile.vue'
import inputTextSelect from '../../../components/public/inputTextSelect.vue'
import Qrcode from '../../../components/public/Qrcode.vue'

import validate2 from '../../../utils/validate2.js'

export default {
    // 养殖管理-饲料使用
    feedUse: [{
        settitle: '饲料使用',
        key: 'fodderuse',
        timeshow: true,
        tab: '状态',
        batch: 'breedBatch',
        tabComponent: [{value: '批量操作'}, {value: '状态'}, {value: '批量操作'}, {value: '状态'}, {value: '批量操作'}, {value: '状态'}],
        roleName: ['basic/category', 0], // 接口权限参数 参数1为权限name 参数2为是否区分运营者 （默认0）
        url: 'fodderuse',
        searchPlaceholder: '请输入饲料名称进行搜索',
        theads: ['饲料名称', '喂养日期', '喂养人'],
        protos: ['fodder_name', 'date', 'operate_name'],
        widths: [26, 26, 26],
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
    }],
    // 养殖管理-病疫
    plague: [{
        settitle: '病疫',
        key: 'operate',
        roleName: ['basic/operate', 0],
        timeshow: true,
        url: 'operate',
        searchPlaceholder: '请输入兽药名称进行搜索',
        selectSearch: ['operates.category_id'],
        selectValueId: [['category_id', 'category_name', true]],
        selectDefault: [{value: '', label: '选择操作人类型'}],
        changeDataArr: [{sex: {0: '男', 1: '女'}}, {domain: {plant: '种植管理', beast: '养殖管理', packp: '果蔬加工管理', packb: '畜禽加工管理', sell: '销售管理', delivery: '物流管理', all: '公共模块'}}],
        theads: ['兽药名称', '操作日期', '操作人'],
        protos: ['category_name', 'domain', 'name'],
        widths: [26, 26, 26],
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
            permissionSelectUrl: ['api/permission_domain'],
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
            permissionSelectUrl: ['api/permission_domain'],
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
    }],
    // 养殖管理-检疫
    quarantine: [{
        settitle: '检疫',
        key: 'expert',
        roleName: ['basic/expert', 0],
        timeshow: true,
        url: 'expert',
        selectSearch: ['experts.category_id'],
        selectValueId: [['category_id', 'category_name', true]],
        changeDataArr: [{sex: {0: '男', 1: '女'}}, {domain: {plant: '种植管理', beast: '养殖管理', all: '公共模块'}}],
        searchPlaceholder: '请输入检疫项目名称进行搜索',
        selectDefault: [{value: '', label: '选择专家类型'}],
        theads: ['检疫项目名称', '操作日期', '操作人'],
        protos: ['category_name', 'domain', 'name'],
        widths: [26, 26, 26],
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
            permissionSelectUrl: ['api/permission_domain'],
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
            permissionSelectUrl: ['api/permission_domain'],
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
    }],
    // 养殖管理-检验检测
    detectTest: [{
        settitle: '检验检测',
        timeshow: true,
        key: 'client',
        roleName: ['basic/client', 0],
        url: 'client',
        selectSearch: ['clients.category_id'],
        selectValueId: [['category_id', 'category_name', true]],
        searchPlaceholder: '请输入客户名称进行搜索',
        selectDefault: [{value: '', label: '选择客户类型'}],
        theads: ['检测项目名称', '操作日期', '操作人'],
        protos: ['category_name', 'name', 'phone'],
        widths: [26, 26, 26],
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
    }],
    // 养殖管理-圈舍维护
    penPreserve: [{
        settitle: '圈舍维护',
        key: 'supplier',
        roleName: ['basic/supplier', 0],
        timeshow: true,
        url: 'supplier',
        selectSearch: ['suppliers.category_id'],
        selectValueId: [['category_id', 'category_name', true]],
        searchPlaceholder: '请输入标题搜索',
        selectDefault: [{value: '', label: '选择供货商类型'}],
        theads: ['标题', '操作日期', '操作人'],
        protos: ['category_name', 'name', 'phone'],
        widths: [26, 26, 26],
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
    }],
    // 养殖管理-出栏
    // export: [{
    //     key: 'product',
    //     roleName: ['basic/product', 0],
    //     url: 'product',
    //     selectValueId: [['category_id', 'category_name', true]],
    //     searchPlaceholder: '请输入出栏人进行搜索',
    //     selectDefault: [{value: '', label: '选择产品类型'}],
    //     selectSearch: ['products.category_id'],
    //     changeDataArr: [{domain: {packp: '果蔬加工管理', packb: '畜禽加工管理', sell: '销售管理', all: '公共模块'}}],
    //     theads: ['出栏日期', '出栏数量', '出栏人'],
    //     protos: ['category_name', 'domain', 'name', 'enforce_standard', 'marque', 'description', 'specification', 'expiration_date', 'edible_method', 'storage_means', 'burdening_info', 'img', 'memo'],
    //     widths: [26, 26, 26],
    //     typeComponent: [{
    //         component: output
    //     },
    //     {
    //         component: newbuildBtn
    //     }],
    //     newComponent: [{
    //         tab: '新建产品信息',
    //         selectUrl: [['category', 'product', 'category_id', 'category_name', true]],
    //         selectInit: [{value: '', label: '选择产品分类'}],
    //         permissionSelectUrl: ['api/permission_domain'],
    //         permissionSelectArr: [[{value: '', label: '请选择模块领域'}, {value: 'all', label: '公共模块'}, {set: 'packb', value: 'packb', label: '畜禽加工管理'}, {set: 'packp', value: 'packp', label: '果蔬加工管理'}, {set: 'sell', value: 'sell', label: '销售管理'}]],
    //         permissionNumber: [1],
    //         checkNumber: [2],
    //         popNumber: [0],
    //         hasImg: true,
    //         components: [{
    //             name: 'category_id',
    //             type: 'select',
    //             component: null,
    //             isNull: false,
    //             label: '分类',
    //             placeholder: '必填',
    //             rule: {required: true, trigger: 'blur', type: 'number', message: '请选择分类名称'},
    //             options: []
    //         },
    //         {
    //             name: 'domain',
    //             type: 'select',
    //             component: null,
    //             isNull: false,
    //             label: '模块领域',
    //             placeholder: '',
    //             rule: {required: true, message: '请选择模块领域', trigger: 'blur'},
    //             options: []
    //         },
    //         {
    //             name: 'name',
    //             type: 'text',
    //             component: null,
    //             isNull: false,
    //             label: '产品名称',
    //             placeholder: '必填',
    //             rule: [{required: true, trigger: 'blur', message: '请输入产品名称'}, {validator: validate2.reCheck, trigger: 'blur', message: '产品名称重复'}]
    //         },
    //         {
    //             name: 'enforce_standard',
    //             type: 'text',
    //             component: null,
    //             isNull: false,
    //             label: '执行标准',
    //             placeholder: '',
    //             rule: null
    //         },
    //         {
    //             name: 'marque',
    //             type: 'text',
    //             component: null,
    //             isNull: true,
    //             label: '商品型号',
    //             placeholder: '',
    //             rule: null
    //         },
    //         {
    //             name: 'description',
    //             type: 'text',
    //             component: null,
    //             isNull: true,
    //             label: '商品简介',
    //             placeholder: '',
    //             rule: null
    //         },
    //         {
    //             name: 'specification',
    //             type: 'text',
    //             component: null,
    //             isNull: true,
    //             label: '包装规格',
    //             placeholder: '',
    //             rule: null
    //         },
    //         {
    //             name: 'expiration_date',
    //             type: 'text',
    //             component: null,
    //             isNull: true,
    //             label: '保质期',
    //             placeholder: '',
    //             rule: null
    //         },
    //         {
    //             name: 'edible_method',
    //             type: 'text',
    //             component: null,
    //             isNull: true,
    //             label: '食用方法',
    //             placeholder: '',
    //             rule: null
    //         },
    //         {
    //             name: 'storage_means',
    //             type: 'text',
    //             component: null,
    //             isNull: true,
    //             label: '存储方法',
    //             placeholder: '',
    //             rule: null
    //         },
    //         {
    //             name: 'burdening_info',
    //             type: 'text',
    //             component: null,
    //             isNull: true,
    //             label: '配料信息',
    //             placeholder: '',
    //             rule: null
    //         },
    //         {
    //             name: 'img',
    //             type: 'file',
    //             component: inputFile,
    //             isNull: true,
    //             label: '产品图片',
    //             placeholder: '',
    //             rule: null
    //         },
    //         {
    //             name: 'memo',
    //             type: 'textarea',
    //             component: null,
    //             isNull: true,
    //             label: '备注信息',
    //             placeholder: '',
    //             rule: ''
    //         }
    //         ]
    //     }],
    //     editComponent: [{
    //         tab: '编辑产品信息',
    //         selectUrl: [['category', 'product', 'category_id', 'category_name', true]],
    //         selectInit: [{value: '', label: '选择产品分类'}],
    //         permissionSelectUrl: ['api/permission_domain'],
    //         permissionSelectArr: [[{value: '', label: '请选择模块领域'}, {value: 'all', label: '公共模块'}, {set: 'packb', value: 'packb', label: '畜禽加工管理'}, {set: 'packp', value: 'packp', label: '果蔬加工管理'}, {set: 'sell', value: 'sell', label: '销售管理'}]],
    //         permissionNumber: [1],
    //         checkNumber: [2],
    //         popNumber: [0],
    //         hasImg: true,
    //         editNumber: 1,
    //         components: [{
    //             name: 'category_id',
    //             type: 'select',
    //             component: null,
    //             isNull: false,
    //             label: '分类',
    //             placeholder: '必填',
    //             rule: {required: true, trigger: 'blur', type: 'number', message: '请选择分类名称'},
    //             options: []
    //         },
    //         {
    //             name: 'domain',
    //             type: 'select',
    //             component: null,
    //             isNull: false,
    //             label: '模块领域',
    //             placeholder: '',
    //             disabled: false,
    //             rule: {required: true, message: '请选择模块领域', trigger: 'blur'},
    //             options: []
    //         },
    //         {
    //             name: 'name',
    //             type: 'text',
    //             component: null,
    //             isNull: false,
    //             label: '产品名称',
    //             placeholder: '必填',
    //             rule: [{required: true, trigger: 'blur', message: '请输入产品名称'}, {validator: validate2.reCheck, trigger: 'blur', message: '产品名称重复'}]
    //         },
    //         {
    //             name: 'enforce_standard',
    //             type: 'text',
    //             component: null,
    //             isNull: false,
    //             label: '执行标准',
    //             placeholder: '',
    //             rule: null
    //         },
    //         {
    //             name: 'marque',
    //             type: 'text',
    //             component: null,
    //             isNull: true,
    //             label: '商品型号',
    //             placeholder: '',
    //             rule: null
    //         },
    //         {
    //             name: 'description',
    //             type: 'text',
    //             component: null,
    //             isNull: true,
    //             label: '商品简介',
    //             placeholder: '',
    //             rule: null
    //         },
    //         {
    //             name: 'specification',
    //             type: 'text',
    //             component: null,
    //             isNull: true,
    //             label: '包装规格',
    //             placeholder: '',
    //             rule: null
    //         },
    //         {
    //             name: 'expiration_date',
    //             type: 'text',
    //             component: null,
    //             isNull: true,
    //             label: '保质期',
    //             placeholder: '',
    //             rule: null
    //         },
    //         {
    //             name: 'edible_method',
    //             type: 'text',
    //             component: null,
    //             isNull: true,
    //             label: '食用方法',
    //             placeholder: '',
    //             rule: null
    //         },
    //         {
    //             name: 'storage_means',
    //             type: 'text',
    //             component: null,
    //             isNull: true,
    //             label: '存储方法',
    //             placeholder: '',
    //             rule: null
    //         },
    //         {
    //             name: 'burdening_info',
    //             type: 'text',
    //             component: null,
    //             isNull: true,
    //             label: '配料信息',
    //             placeholder: '',
    //             rule: null
    //         },
    //         {
    //             name: 'img',
    //             type: 'file',
    //             component: inputFile,
    //             isNull: true,
    //             label: '',
    //             placeholder: '产品图片',
    //             rule: null
    //         },
    //         {
    //             name: 'memo',
    //             type: 'textarea',
    //             component: null,
    //             isNull: true,
    //             label: '备注信息',
    //             placeholder: '',
    //             rule: ''
    //         }
    //         ]
    //     }],
    //     listComponent: [{
    //         components: [{
    //             name: 'products.category_id',
    //             value: '',
    //             type: 'select',
    //             component: selectSection,
    //             options: []
    //         }]
    //     }]
    // }],
    export: [
        {
            tabshow: true,
            settitle: '种植基础资料',
            key: 'plantation',
            roleName: ['plant/basic', 0],
            tab: '种植场',
            url: 'plantation',
            searchPlaceholder: '请输入种植场进行搜索',
            theads: ['种植场名称', '种植面积', '负责人', '联系电话', '详细地址', '图片', '备注信息'],
            protos: ['name', 'area_unit', 'director'],
            widths: [26, 26, 26, 50, 50, 50, 50],
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
            tabshow: true,
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
            protos: ['plantation_name', 'name', 'area_unit'],
            widths: [26, 26, 26, 50, 50, 50, 50, 50],
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
            tabshow: true,
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
            protos: ['category_name', 'name', 'growth_cycle'],
            widths: [26, 26, 26, 50, 50, 50],
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
            tabshow: true,
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
            protos: ['category_name', 'name', 'usage'],
            widths: [26, 26, 26, 50, 50, 50, 50, 50, 50],
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
            tabshow: true,
            settitle: '种植基础资料',
            key: 'medicament',
            tab: '农药档案',
            roleName: ['plant/basic', 0],
            url: 'medicament',
            selectSearch: ['medicaments.category_id'],
            selectValueId: [['category_id', 'category_name', true]],
            searchPlaceholder: '请输入农药名称',
            selectDefault: [{value: '', label: '农药类别'}],
            theads: ['农药分类', '农药名称', '用途'],
            protos: ['category_name', 'name', 'usage'],
            widths: [26, 26, 26],
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
    // 养殖管理-生长过程
    growProcess: [
        {
            settitle: '生长过程',
            key: 'farm',
            roleName: ['beast/basic', 0],
            timeshow: false,
            url: 'farm',
            searchPlaceholder: '请输入标题进行搜索',
            search: ['query_text', 'name'],
            theads: ['标题', '日期', '图片(缩略图)'],
            protos: ['name', 'area_unit', 'principal'],
            selectSearch: ['farm.name'],
            widths: [26, 26, 26],
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
            theads: ['所属养殖场', '养殖区名称', '养殖面积', '负责人', '养殖畜禽种类', '养殖规模', '详细地址', '图片', '备注信息'],
            protos: ['parent_name', 'name', 'area_unit', 'principal', 'kind', 'scale', 'address', 'img', 'memo'],
            selectSearch: ['farmcds.pid'],
            widths: [26, 26, 26, 25, 25, 25, 25, 25, 25],
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
            widths: [26, 26, 26, 25, 25],
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
            widths: [26, 26, 26, 25, 25, 25],
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
            widths: [26, 26, 26, 25, 25, 25, 25, 25, 25],
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
            widths: [26, 26, 26, 25, 25, 25, 25, 25, 25, 25, 25],
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
            widths: [26, 26, 26, 25, 25, 25, 25, 25, 25],
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
    ],
    // 屠宰加工管理-加工批次检测
    processSerial: [{
        settitle: '加工批次检测',
        key: 'breed',
        roleName: ['beast/breed', 0],
        timeshow: true,
        url: 'breed',
        // 链接批次信息模块数据的桥（养殖批次详情）
        batch: 'breedBatch',
        searchPlaceholder: '请输入检测名称进行搜索',
        selectValueId: [['beast_id', 'beast_name', true]],
        selectDefault: [{value: '', label: '请选择畜禽'}],
        changeDataArr: [{state: {0: '未完成', 1: '已完成'}}],
        theads: ['检测名称', '检测日期', '负责人'],
        protos: ['serial', 'farm_name', 'area_name'],
        selectSearch: ['breeds.beast_id'],
        widths: [26, 26, 26],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        newComponent: [{
            tab: '新建养殖批次',
            selectUrl2: [['areas', 'id', 'name', true], ['beasts', 'id', 'name', true], ['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '选择圈舍'}, {value: '', label: '选择畜禽'}, {value: '', label: '请选择操作人'}],
            popNumber2: [0, 1, 2],
            selectWhereArr2: [[], [], [{n: 'domain', v: 'beast'}]],
            components: [{
                name: 'area_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '圈舍',
                placeholder: '请选择圈舍',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择圈舍'},
                options: []
            },
            {
                name: 'beast_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '畜禽名称',
                placeholder: '请选择畜禽',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择畜禽'},
                options: []
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '操作人',
                placeholder: '请选择操作人',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择操作人'},
                options: []
            },
            {
                name: 'start_date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '养殖日期',
                placeholder: '',
                rule: [{required: true, message: '请输入养殖日期'}, {validator: validate2.reDate, message: '请输入养殖日期'}]
            },
            {
                name: 'way',
                type: 'text',
                component: null,
                isNull: true,
                label: '养殖方式',
                placeholder: '请填写养殖方式',
                rule: {required: true, trigger: 'blur', message: '请填写养殖方式'}
            },
            {
                name: 'operate',
                type: 'text',
                component: null,
                isNull: true,
                label: '养殖人',
                placeholder: '请填写养殖人',
                rule: {required: true, trigger: 'blur', message: '请填写养殖人'}
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
            tab: '编辑养殖批次',
            selectInit2: [{value: '', label: '选择圈舍'}, {value: '', label: '选择畜禽'}, {value: '', label: '请选择操作人'}],
            selectUrl2: [['areas', 'id', 'name', true], ['beasts', 'id', 'name', true], ['operates', 'id', 'name', true]],
            popNumber2: [1, 2, 3],
            selectWhereArr2: [[], [], [{n: 'domain', v: 'beast'}]],
            components: [{
                name: 'serial',
                type: 'text',
                component: null,
                isNull: false,
                label: '批次号',
                placeholder: '',
                disabled: true,
                rule: {required: true}
            },
            {
                name: 'area_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '圈舍',
                placeholder: '请选择圈舍',
                disabled: true,
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择圈舍'},
                options: []
            },
            {
                name: 'beast_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '畜禽名称',
                placeholder: '请选择畜禽',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择畜禽'},
                options: []
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '操作人',
                placeholder: '请选择操作人',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择操作人'},
                options: []
            },
            {
                name: 'amount',
                type: 'text',
                component: null,
                isNull: true,
                label: 'rfid数量',
                placeholder: '',
                disabled: true,
                rule: null
            },
            {
                name: 'start_date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '开始日期',
                placeholder: '',
                rule: [{required: true, message: '请输入种植日期'}, {validator: validate2.reDate, message: '请输入种植日期'}]
            },
            {
                name: 'way',
                type: 'text',
                component: null,
                isNull: true,
                label: '养殖方式',
                placeholder: '请填写养殖方式',
                rule: {required: true, trigger: 'blur', message: '请填写养殖方式'}
            },
            {
                name: 'operate',
                type: 'text',
                component: null,
                isNull: true,
                label: '养殖人',
                placeholder: '请填写养殖人',
                rule: {required: true, trigger: 'blur', message: '请填写养殖人'}
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
                name: 'beast_id',
                value: '',
                options: []
            },
            {
                type: 'date',
                component: 'datePick'
            }]
        }],
        moreComponent: [{value: '状态'}]
    }],
    // 屠宰加工管理-产品溯源码管理
    serialManage: [{
        settitle: '产品溯源码管理',
        timeshow: true,
        key: 'fodderuse',
        roleName: ['beast/fodderuse', 0],
        url: 'fodderuse',
        // 链接批次信息模块数据的桥（养殖批次详情）
        batch: 'feedBatch',
        searchPlaceholder: '请输入标题进行搜索',
        selectValueId: [['fodder_id', 'fodder_name', true]],
        selectDefault: [{value: '', label: '饲料选择'}],
        selectSearch: ['fodderuse.fodder_id'],
        theads: ['产品溯源码', '产品名称', '生产日期'],
        protos: ['serial', 'date', 'fodder_name'],
        widths: [26, 26, 26],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        newComponent: [{
            tab: '新建饲料使用信息',
            selectUrl2: [['fodders', 'id', 'name', true], ['additions', 'id', 'name', true], ['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '饲料选择'}, {value: '', label: '饲料添加剂选择'}, {value: '', label: '饲养人员选择'}],
            popNumber2: [0, 1, 2],
            selectWhereArr2: [[], [], [{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
            components: [{
                name: 'fodder_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '饲料名称',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择饲料'},
                options: []
            },
            {
                name: 'addition_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '饲料添加剂',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择饲料添加剂'},
                options: []
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '饲养员',
                placeholder: '请选择饲养员',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择饲养员'},
                options: []
            },
            {
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '饲养日期',
                placeholder: '',
                rule: [{required: true, trigger: 'blur', message: '请输入饲养日期'}, {validator: validate2.reDate, message: '请输入饲养日期'}]
            },
            {
                name: 'amount',
                type: 'textSelect',
                component: inputTextSelect,
                isNull: true,
                label: '平均喂养量',
                placeholder: '请输入整数',
                rule: [{required: true, trigger: 'blur', message: '请输入饲养量'}, {validator: validate2.reNumber}],
                options: [{
                    value: 'kg/只',
                    label: 'kg/只'
                },
                {
                    value: 'kg/头',
                    label: 'kg/头'
                },
                {
                    value: 'kg/条',
                    label: 'kg/条'
                }]
            },
            {
                name: 'way',
                type: 'text',
                component: null,
                isNull: true,
                label: '喂养方式',
                placeholder: '',
                rule: null
            },
            {
                name: 'name',
                type: 'textarea',
                component: null,
                isNull: true,
                label: '备注信息',
                placeholder: '',
                rule: null
            }]
        }],
        editComponent: [{
            tab: '编辑饲料使用信息',
            selectUrl2: [['fodders', 'id', 'name', true], ['additions', 'id', 'name', true], ['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '饲料选择'}, {value: '', label: '饲料添加剂选择'}, {value: '', label: '饲养人员选择'}],
            popNumber2: [1, 2, 3],
            selectWhereArr2: [[], [], [{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
            components: [{
                name: 'serial',
                type: 'text',
                component: null,
                isNull: false,
                label: '饲料批次号',
                placeholder: '',
                disabled: true,
                rule: {required: false, trigger: 'blur'},
                options: []
            },
            {
                name: 'fodder_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '饲料名称',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择饲料'},
                options: []
            },
            {
                name: 'addition_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '饲料添加剂',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择饲料添加剂'},
                options: []
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '饲养员',
                placeholder: '请选择饲养员',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择饲养员'},
                options: []
            },
            {
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '使用日期',
                placeholder: '',
                rule: [{required: true, trigger: 'blur', message: '请输入饲养日期'}, {validator: validate2.reDate, message: '请输入饲养日期'}]
            },
            {
                name: 'amount',
                type: 'textSelect',
                component: inputTextSelect,
                isNull: true,
                label: '平均喂养量',
                placeholder: '',
                rule: [{required: true, message: '请输入饲养量'}, {validator: validate2.reNumber}],
                options: [{
                    value: 'kg/只',
                    label: 'kg/只'
                },
                {
                    value: 'kg/头',
                    label: 'kg/头'
                },
                {
                    value: 'kg/条',
                    label: 'kg/条'
                }]
            },
            {
                name: 'way',
                type: 'text',
                component: null,
                isNull: true,
                label: '喂养方式',
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
                type: 'select',
                component: selectSection,
                name: 'fodders.id',
                value: '',
                options: []
            },
            {
                type: 'date',
                component: 'datePick'
            }]
        }]
    }],
    // 种植管理-种植事物管理
    plantThing: [{
        settitle: '种植事物管理',
        timeshow: true,
        key: 'detection',
        roleName: ['beast/detection', 0],
        tab: '检疫信息',
        url: 'detection',
        // 链接批次信息模块数据的桥（养殖批次详情）
        batch: 'detectionBatch',
        searchPlaceholder: '请输入检疫批次号进行',
        changeDataArr: [{result: {0: '不合格', 1: '合格'}}],
        selectSearch: ['detection.organization'],
        theads: ['检疫批次号', '检疫日期', '检疫项目名称'],
        protos: ['serial', 'date', 'name'],
        widths: [26, 26, 26],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        newComponent: [{
            tab: '新建检疫信息',
            selectUrl2: [['experts', 'id', 'name', true], ['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '请选择指导专家'}, {value: '', label: '请选择操作人员'}],
            popNumber2: [3, 4],
            selectWhereArr2: [[{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}], [{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
            hasImg: true,
            components: [{
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '检疫日期',
                placeholder: '',
                rule: [{required: true, message: '请输入检疫日期'}, {validator: validate2.reDate, message: '请输入检疫日期'}]
            },
            {
                name: 'organization',
                type: 'text',
                component: null,
                isNull: false,
                label: '检疫机构',
                placeholder: '',
                rule: {required: true, trigger: 'blur', message: '请输入检疫机构'}
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '检疫项目名称',
                placeholder: '',
                rule: {required: true, trigger: 'blur', message: '请输入检疫项目名称'}
            },
            {
                name: 'expert_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '指导专家',
                placeholder: '无',
                rule: null,
                options: []
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '操作人员',
                placeholder: '无',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择操作人员'},
                options: []
            },
            {
                name: 'content',
                type: 'text',
                component: null,
                isNull: true,
                label: '检疫内容',
                placeholder: '',
                rule: ''
            },
            {
                name: 'result',
                type: 'select',
                component: null,
                isNull: true,
                label: '检疫结果',
                placeholder: '',
                rule: {required: false, type: 'number'},
                options: [
                    {
                        value: 1,
                        label: '合格'
                    },
                    {
                        value: 0,
                        label: '不合格'
                    }
                ]
            },
            {
                name: 'check',
                type: 'text',
                component: null,
                isNull: true,
                label: '审批人',
                placeholder: '',
                rule: null
            },
            {
                name: 'img',
                type: 'file',
                component: inputFile,
                isNull: true,
                label: '检疫报告图片',
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
            tab: '编辑检疫信息',
            selectUrl2: [['experts', 'id', 'name', true], ['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '请选择指导专家'}, {value: '', label: '请选择操作人员'}],
            popNumber2: [4, 5],
            selectWhereArr2: [[{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}], [{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
            hasImg: true,
            components: [{
                name: 'serial',
                type: 'text',
                component: null,
                isNull: false,
                label: '检疫批次号',
                placeholder: '',
                disabled: true,
                rule: {required: false, trigger: 'blur'}
            },
            {
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '检疫日期',
                placeholder: '',
                rule: [{required: true, message: '请输入检疫日期'}, {validator: validate2.reDate, message: '请输入检疫日期'}]
            },
            {
                name: 'organization',
                type: 'text',
                component: null,
                isNull: false,
                label: '检疫机构',
                placeholder: '',
                rule: {required: true, trigger: 'blur', message: '请输入检疫机构'}
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '检疫项目名称',
                placeholder: '',
                rule: {required: true, trigger: 'blur', message: '请输入检疫项目名称'}
            },
            {
                name: 'expert_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '指导专家',
                placeholder: '无',
                rule: {required: false},
                options: []
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '操作人员',
                placeholder: '无',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择操作人员'},
                options: []
            },
            {
                name: 'content',
                type: 'text',
                component: null,
                isNull: true,
                label: '检疫内容',
                placeholder: '',
                rule: ''
            },
            {
                name: 'result',
                type: 'select',
                component: null,
                isNull: true,
                label: '检疫结果',
                placeholder: '',
                rule: {required: false},
                options: [
                    {
                        value: 1,
                        label: '合格'
                    },
                    {
                        value: 0,
                        label: '不合格'
                    }
                ]
            },
            {
                name: 'check',
                type: 'text',
                component: null,
                isNull: true,
                label: '审批人',
                placeholder: '',
                rule: null
            },
            {
                name: 'img',
                type: 'file',
                component: inputFile,
                isNull: true,
                label: '检疫报告图片',
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
            components: [
                {
                    type: 'select',
                    value: '',
                    name: 'detections.result',
                    component: selectSection,
                    options: [{
                        value: '',
                        label: '请选择检疫结果'
                    },
                    {
                        value: 1,
                        label: '合格'
                    },
                    {
                        value: 0,
                        label: '不合格'
                    }]
                },
                {
                    type: 'date',
                    component: 'datePick'
                }
            ]
        }]
    }],
    // 种植管理-产品溯源管理
    plantTrace: [{
        settitle: '产品溯源管理',
        timeshow: true,
        key: 'detect',
        roleName: ['beast/detect', 0],
        tab: '检测信息',
        url: 'detect',
        paramsIndex: 'beast',
        // 链接批次信息模块数据的桥（养殖批次详情）
        batch: 'beastDetectBatch',
        searchPlaceholder: '请输入批次号进行搜索',
        selectSearch: ['detects.weather'],
        changeDataArr: [{result: {0: '不合格', 1: '合格'}}],
        theads: ['检测批次号', '检测日期', '检测项目名称'],
        protos: ['serial', 'date', 'name'],
        widths: [26, 26, 26],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        newComponent: [{
            tab: '新建检测信息',
            hiddenValue: {type: 'beast'},
            selectUrl2: [['experts', 'id', 'name', true], ['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '请选择专家'}, {value: '', label: '请选择操作人'}],
            popNumber2: [1, 2],
            selectWhereArr2: [[{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}], [{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
            hasImg: true,
            components: [{
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '检测日期',
                placeholder: '',
                rule: [{required: true, message: '请输入检测日期'}, {validator: validate2.reDate, message: '请输入检测日期'}]
            },
            {
                name: 'expert_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '指导专家',
                placeholder: '请选择专家',
                rule: null,
                options: []
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '操作人员',
                placeholder: '请选择操作人',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择操作人'},
                options: []
            },
            {
                name: 'weather',
                type: 'select',
                component: null,
                isNull: true,
                label: '天气',
                placeholder: '请选择天气情况',
                rule: {required: true, trigger: 'blur', message: '请选择天气情况'},
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
                    value: '其它',
                    label: '其它'
                }
                ]
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测项目名称',
                placeholder: '',
                rule: {required: true, trigger: 'blur', message: '请输入检测项目名称'}
            },
            {
                name: 'content',
                type: 'textarea',
                component: null,
                isNull: false,
                label: '检测内容',
                placeholder: '',
                rule: {required: true, trigger: 'blur', message: '请输入检测内容'}
            },
            {
                name: 'department',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测部门',
                placeholder: '',
                rule: {required: false, trigger: 'blur'}
            },
            {
                name: 'img',
                type: 'file',
                component: inputFile,
                isNull: true,
                label: '检测报告图片',
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
            tab: '编辑检测信息',
            hiddenValue: {type: 'beast'},
            selectUrl2: [['experts', 'id', 'name', true], ['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '请选择专家'}, {value: '', label: '请选择操作人'}],
            popNumber2: [2, 3],
            selectWhereArr2: [[{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}], [{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
            hasImg: true,
            components: [{
                name: 'serial',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测批次号',
                placeholder: '',
                disabled: true,
                rule: {required: null}
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
                name: 'expert_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '指导专家',
                placeholder: '请选择专家',
                rule: null,
                options: []
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '检测人员',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择检测人员'},
                options: []
            },
            {
                name: 'weather',
                type: 'select',
                component: null,
                isNull: true,
                label: '天气',
                placeholder: '请选择天气情况',
                rule: {required: true, trigger: 'blur', message: '请选择天气情况'},
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
                    value: '其它',
                    label: '其它'
                }
                ]
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测项目名称',
                placeholder: '',
                rule: {required: true, trigger: 'blur', message: '请输入检测项目名称'}
            },
            {
                name: 'content',
                type: 'textarea',
                component: null,
                isNull: false,
                label: '检测内容',
                placeholder: '',
                rule: {required: true, trigger: 'blur', message: '请输入检测内容'}
            },
            {
                name: 'department',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测部门',
                placeholder: '',
                rule: {required: false, trigger: 'blur', message: '请输入检测部门'}
            },
            {
                name: 'img',
                type: 'file',
                component: inputFile,
                isNull: true,
                label: '检测报告图片',
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
                type: 'date',
                component: 'datePick'
            }]
        }]
    }],
    // 果蔬加工管理-加工检测管理
    processManage: [{
        settitle: '加工检测管理',
        key: 'clean',
        roleName: ['beast/clean', 0],
        tab: '圈舍维护信息',
        url: 'clean',
        // 链接批次信息模块数据的桥（养殖批次详情）
        batch: 'areaBatch',
        searchPlaceholder: '请输入圈舍批次号进行搜索',
        search: ['query_text', 'name'],
        theads: ['圈舍批次号', '标题', '操作内容'],
        protos: ['serial', 'name', 'content'],
        widths: [26, 26, 26],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        newComponent: [{
            tab: '新建圈舍维护信息',
            selectUrl2: [['experts', 'id', 'name', true], ['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '请选择专家'}, {value: '', label: '请选择操作人'}],
            popNumber2: [2, 1],
            selectWhereArr2: [[{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}], [{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
            hasImg: true,
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
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '操作人',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择操作人'},
                options: []
            },
            {
                name: 'expert_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '专家',
                placeholder: '',
                rule: {required: false, type: 'number', message: '请选择专家'},
                options: []
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '标题',
                placeholder: '',
                rule: {required: true, trigger: 'blur', message: '请输入标题'}
            },
            {
                name: 'content',
                type: 'text',
                component: null,
                isNull: false,
                label: '操作内容',
                placeholder: '',
                rule: {required: true, trigger: 'blur', message: '请输入操作内容'}
            },
            {
                name: 'img',
                type: 'file',
                component: inputFile,
                isNull: true,
                label: '圈舍维护图片',
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
            tab: '编辑圈舍维护信息',
            selectUrl2: [['experts', 'id', 'name', true], ['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '请选择专家'}, {value: '', label: '请选择操作人'}],
            popNumber2: [3, 2],
            selectWhereArr2: [[{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}], [{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
            hasImg: true,
            components: [{
                name: 'serial',
                type: 'text',
                component: null,
                isNull: false,
                label: '圈舍批次号',
                placeholder: '',
                rule: {required: true, trigger: 'blur'},
                disabled: true
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
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '操作人',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number'},
                options: []
            },
            {
                name: 'expert_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '专家',
                placeholder: '',
                rule: {required: false, type: 'number', message: '请选择专家'},
                options: []
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '标题',
                placeholder: '',
                rule: {required: true, trigger: 'blur', message: '请输入标题'}
            },
            {
                name: 'content',
                type: 'text',
                component: null,
                isNull: false,
                label: '操作内容',
                placeholder: '',
                rule: {required: true, trigger: 'blur', message: '请输入操作内容'}
            },
            {
                name: 'img',
                type: 'file',
                component: inputFile,
                isNull: true,
                label: '圈舍维护图片',
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
                type: 'date',
                component: 'datePick'
            }]
        }]
    }],
    // 果蔬加工管理-产品溯源码管理
    vegetableTrace: [{
        settitle: '产品溯源码管理',
        timeshow: true,
        key: 'dispose',
        roleName: ['beast/dispose', 0],
        tab: '无害化信息',
        url: 'dispose',
        // 链接批次信息模块数据的桥（养殖批次详情）
        batch: 'innocuityBatch',
        searchPlaceholder: '请输入无害化批次号进行搜索',
        theads: ['无害化批次号', '操作日期', '操作内容'],
        protos: ['serial', 'date', 'content'],
        selectSearch: ['dispose.expert_name'],
        widths: [26, 26, 26],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        newComponent: [{
            tab: '新建无害化管理信息',
            selectUrl2: [['experts', 'id', 'name', true], ['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '请选择专家'}, {value: '', label: '请选择操作人'}],
            popNumber2: [1, 2],
            selectWhereArr2: [[{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}], [{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
            hasImg: true,
            components: [{
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '操作日期',
                placeholder: '',
                rule: [{required: true, trigger: 'blur', message: '请输入生产日期'}, {validator: validate2.reDate, message: '请输入生产日期'}]
            },
            {
                name: 'expert_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '指导专家',
                placeholder: '',
                rule: {required: false, type: 'number'},
                options: []
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
                name: 'content',
                type: 'text',
                component: null,
                isNull: false,
                label: '操作内容',
                placeholder: '',
                rule: {required: true, trigger: 'blur', message: '请输入操作内容'}
            },
            {
                name: 'why',
                type: 'text',
                component: null,
                isNull: false,
                label: '实行原因',
                placeholder: '',
                rule: {required: true, trigger: 'blur', message: '请输入实行原因'}
            },
            {
                name: 'img',
                type: 'file',
                component: inputFile,
                isNull: true,
                label: '无害化图片',
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
            tab: '编辑无害化管理信息',
            selectUrl2: [['experts', 'id', 'name', true], ['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '请选择专家'}, {value: '', label: '请选择操作人'}],
            popNumber2: [2, 3],
            selectWhereArr2: [[{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}], [{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
            hasImg: true,
            components: [{
                name: 'serial',
                type: 'text',
                component: null,
                isNull: false,
                label: '无害化批次号',
                placeholder: '',
                rule: {required: true, trigger: 'blur'},
                disabled: true
            },
            {
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '操作日期',
                placeholder: '',
                rule: [{required: true, trigger: 'blur', message: '请输入生产日期'}, {validator: validate2.reDate, message: '请输入生产日期'}]
            },
            {
                name: 'expert_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '指导专家',
                placeholder: '',
                rule: {required: false, type: 'number'},
                options: []
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
                name: 'content',
                type: 'text',
                component: null,
                isNull: false,
                label: '操作内容',
                placeholder: '',
                rule: {required: true, trigger: 'blur', message: '请输入操作内容'}
            },
            {
                name: 'why',
                type: 'text',
                component: null,
                isNull: false,
                label: '实行原因',
                placeholder: '',
                rule: {required: true, trigger: 'blur', message: '请输入实行原因'}
            },
            {
                name: 'img',
                type: 'file',
                component: inputFile,
                isNull: true,
                label: '无害化图片',
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
            components: [
                {
                    type: 'date',
                    component: 'datePick'
                }
            ]
        }]
    }],
    // 物流运输管理-物流批次管理
    expressManage: [{
        settitle: '物流批次管理',
        key: 'come',
        roleName: ['beast/come', 0],
        timeshow: true,
        tab: '出栏信息',
        url: 'come',
        // 链接批次信息模块数据的桥（养殖批次详情）
        batch: 'slaughterBatch',
        searchPlaceholder: '请输入物流批次号进行搜索',
        theads: ['物流批次号', '货物名称', '物流日期'],
        protos: ['serial', 'date', 'amount'],
        widths: [26, 26, 26],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        newComponent: [{
            tab: '新建出栏信息',
            selectUrl2: [['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '选择出栏人'}],
            popNumber2: [1],
            selectWhereArr2: [[{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
            components: [{
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '出栏日期',
                placeholder: '',
                rule: [{required: true, message: '请输入出栏日期'}, {validator: validate2.reDate, message: '请输入出栏日期'}]
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '出栏人员',
                placeholder: '请选择出栏人员',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择出栏人员'},
                options: []
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
        }],
        editComponent: [{
            tab: '编辑出栏信息',
            selectUrl2: [['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '选择出栏人'}],
            popNumber2: [3],
            selectWhereArr2: [[{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
            components: [{
                name: 'serial',
                type: 'text',
                component: null,
                isNull: false,
                label: '出栏批次号',
                placeholder: '',
                rule: {required: true, trigger: 'blur'},
                disabled: true
            },
            {
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '出栏日期',
                placeholder: '',
                rule: [{required: true, message: '请输入出栏日期'}, {validator: validate2.reDate, message: '请输入出栏日期'}]
            },
            {
                name: 'amount',
                type: 'text',
                component: null,
                isNull: false,
                label: '出栏数量',
                placeholder: '',
                disabled: true,
                rule: {required: true}
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '出栏人',
                placeholder: '请选择人物',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择出栏人员'},
                options: []
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
        }],
        listComponent: [{
            components: [{
                type: 'date',
                component: 'datePick'
            }]
        }],
        moreComponent: [{value: '状态'}]
    }],
    // 销售管理-销售订单管理
    saleOrder: [{
        settitle: '销售订单管理',
        key: 'plan-beast',
        roleName: ['beast/plan', 0],
        timeshow: true,
        tab: '养殖计划信息',
        url: 'plan',
        paramsIndex: 'beast',
         // 链接批次信息模块数据的桥（养殖批次详情）
        changeDataArr: [{type: { 'fodderuse': '饲养', 'disease': '病疫', 'detection': '检疫', 'detects': '检测', 'clean': '圈舍维护', 'dispose': '无害化', 'come': '出栏' }}],
        searchPlaceholder: '请输入客户名称',
        search: ['query_text', 'type'],
        theads: ['客户名称', '订单日期', '销售员'],
        protos: ['serial', 'date', 'type'],
        widths: [26, 26, 26],
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
                    label: '请选择操作类型'
                },
                {
                    value: 'fodderuse',
                    label: '饲养'
                },
                {
                    value: 'disease',
                    label: '病疫'
                },
                {
                    value: 'detection',
                    label: '检疫'
                },
                {
                    value: 'detects',
                    label: '检测'
                },
                {
                    value: 'dispose',
                    label: '无害化'
                },
                {
                    value: 'come',
                    label: '出栏'
                }]
            },
            {
                type: 'date',
                component: datePick
            }]
        }],
        newComponent: [{
            tab: '新建生产计划信息',
            selectUrl2: [['operates', 'id', 'name', true]],
            popNumber2: [2],
            selectInit2: [{value: '', label: '请选择安排人员'}],
            selectWhereArr2: [[{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
            components: [{
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: true,
                label: '计划日期',
                placeholder: '',
                rule: [{required: true, message: '请输入计划日期'}, {validator: validate2.reDate, message: '请输入计划日期'}]
            },
            {
                name: 'content',
                type: 'text',
                component: null,
                isNull: true,
                label: '计划内容',
                placeholder: '',
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
                name: 'type',
                type: 'select',
                component: null,
                isNull: false,
                label: '操作类型',
                placeholder: '必填',
                rule: {required: true, trigger: 'blur', message: '请选择分类名称'},
                options: [{
                    value: '',
                    label: '请选择操作类型'
                },
                {
                    value: 'fodderuse',
                    label: '饲养'
                },
                {
                    value: 'disease',
                    label: '病疫'
                },
                {
                    value: 'detection',
                    label: '检疫'
                },
                {
                    value: 'detects',
                    label: '检测'
                },
                {
                    value: 'dispose',
                    label: '无害化'
                },
                {
                    value: 'come',
                    label: '出栏'
                }]
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
            selectInit2: [{value: '', label: '请选择安排人员'}],
            selectWhereArr2: [[{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
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
                type: 'date',
                component: inputDate,
                isNull: true,
                label: '计划日期',
                placeholder: '',
                rule: [{required: true, message: '请输入计划日期'}, {validator: validate2.reDate, message: '请输入计划日期'}]
            },
            {
                name: 'content',
                type: 'text',
                component: null,
                isNull: true,
                label: '计划内容',
                placeholder: '',
                rule: null,
                options: []
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
    }]
}
