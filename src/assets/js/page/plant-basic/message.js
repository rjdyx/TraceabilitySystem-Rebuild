// 中间列表的数据

import importBtn from '../../components/public/import-btn.vue'
import newbuildBtn from '../../components/public/newbuild-btn.vue'
import output from '../../components/public/output.vue'
import selectSection from '../../components/public/select-section.vue'
import datePick from '../../components/public/datePick.vue'
import inputText from '../../components/public/inputText.vue'
import inputTextArea from '../../components/public/inputTextArea.vue'
import inputSelect from '../../components/public/inputSelect.vue'
import inputDate from '../../components/public/inputDate.vue'
import inputFile from '../../components/public/inputFile.vue'
import inputTextSelect from '../../components/public/inputTextSelect.vue'

import validate2 from '../../utils/validate2.js'

export default {
    // 基础-分类
    categoryBase: [{
        settitle: '分类档案管理',
        key: 'category',
        tab: '分类档案信息',
        url: 'category',
        searchPlaceholder: '请输入分类名称进行搜索',
        theads: ['分类名称', '模块类型', '备注信息'],
        protos: ['name', 'type', 'memo'],
        widths: [50, 50, 50],
        selectSearch: ['type'],
        changeDataArr: [{type: { 'operate': '操作人员', 'expert': '专家', 'product': '产品', 'supplier': '供货商', 'client': '客户', 'fodder': '饲料', 'drug': '兽药', 'beast': '畜禽', 'plant': '果蔬', 'manure': '肥料', 'medicament': '农药' }}],
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
            checkNumber: 0,
            components: [{
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '分类名称',
                placeholder: '必填',
                rule: [{required: true, message: '请输入分类名称', trigger: 'blur'}, {validator: validate2.reCheck}]
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
            checkNumber: 0,
            components: [{
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '分类名称',
                placeholder: '必填',
                rule: [{required: true, message: '请输入分类名称', trigger: 'blur'}, {validator: validate2.reCheck}]
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
    // 基础-人员
    personFile: [{
        settitle: '人员档案管理',
        key: 'operate',
        tab: '人员档案信息',
        url: 'operate',
        searchPlaceholder: '请输入人物姓名进行搜索',
        selectSearch: ['operates.category_id'],
        selectValueId: [['category_id', 'category_name', true]],
        selectDefault: [{value: '', label: '选择操作人类型'}],
        changeDataArr: [{sex: {0: '男', 1: '女'}}],
        theads: ['分类名称', '姓名', '身份', '性别', '年龄', '联系方式', '地址', '图片', '备注信息'],
        protos: ['category_name', 'name', 'identity', 'sex', 'age', 'phone', 'address', 'img', 'memo'],
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
            checkNumber: 1,
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
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '姓名',
                placeholder: '必填',
                rule: [{required: true, message: '请输入姓名', trigger: 'blur'}, {validator: validate2.reCheck}]
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
                component: inputSelect,
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
            tab: '编辑人员档案信息',
            selectUrl: [['category', 'operate', 'category_id', 'category_name', true]],
            checkNumber: 1,
            popNumber: [0],
            hasImg: true,
            components: [{
                name: 'category_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '分类',
                placeholder: '必填',
                rule: {required: true, trigger: 'blur', type: 'number'},
                options: []
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '姓名',
                placeholder: '必填',
                rule: [{required: true, message: '请输入姓名', trigger: 'blur'}, {validator: validate2.reCheck}]
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
                component: inputSelect,
                isNull: false,
                label: '性别',
                placeholder: '',
                rule: null,
                options: [{
                    value: '男',
                    label: '男'
                },
                {
                    value: '女',
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
    }],
    // 基础-专家
    expertFile: [{
        settitle: '专家档案管理',
        key: 'expert',
        tab: '专家档案信息',
        url: 'expert',
        selectSearch: ['experts.category_id'],
        selectValueId: [['category_id', 'category_name', true]],
        changeDataArr: [{sex: {0: '男', 1: '女'}}],
        searchPlaceholder: '请输入专家名称进行搜索',
        selectDefault: [{value: '', label: '选择专家类型'}],
        theads: ['分类名称', '专家名称', '级别', '研究领域', '单位', '出生年月日', '性别', '联系方式', '图片', '备注'],
        protos: ['category_name', 'name', 'level', 'major', 'unit', 'age', 'sex', 'phone', 'img', 'memo'],
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
            tab: '新建专家档案信息',
            selectUrl: [['category', 'expert', 'category_id', 'category_name', true]],
            checkNumber: 1,
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
                label: '专家名称',
                placeholder: '必填',
                rule: [{required: true, message: '请输入专家名称', trigger: 'blur'}, {validator: validate2.reCheck}]
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
                rule: {required: true, trigger: 'blur'}
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
                rule: null
            },
            {
                name: 'sex',
                type: 'select',
                component: null,
                isNull: false,
                label: '性别',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number'},
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
            tab: '编辑专家档案信息',
            selectUrl: [['category', 'expert', 'category_id', 'category_name', true]],
            checkNumber: 1,
            popNumber: [0],
            components: [{
                name: 'category_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '分类',
                placeholder: '必填',
                rule: {required: true, trigger: 'blur', type: 'number'},
                options: []
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '专家名称',
                placeholder: '必填',
                rule: [{required: true, message: '请输入专家名称', trigger: 'blur'}, {validator: validate2.reCheck}]
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
                rule: {required: true, trigger: 'blur'}
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
                label: '出生年月日',
                placeholder: '',
                rule: null
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
                    value: '男',
                    label: '男'
                },
                {
                    value: '女',
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
    // 基础-客户
    clientFile: [{
        settitle: '客户档案管理',
        key: 'client',
        tab: '客户档案信息',
        url: 'client',
        selectSearch: ['clients.category_id'],
        selectValueId: [['category_id', 'category_name', true]],
        searchPlaceholder: '请输入客户名称进行搜索',
        selectDefault: [{value: '', label: '选择客户类型'}],
        theads: ['客户分类', '客户名称', '电话', '地址', '传真', '备注'],
        protos: ['category_name', 'name', 'phone', 'address', 'fax', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50],
        listComponent: [{
            components: [{
                value: '',
                type: 'select',
                component: selectSection,
                options: []
            }]
        }],
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
            tab: '新建客户档案信息',
            selectUrl: [['category', 'client', 'category_id', 'category_name', true]],
            checkNumber: 1,
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
                rule: [{required: true, message: '请输入客户名称', trigger: 'blur'}, {validator: validate2.reCheck}]
            },
            {
                name: 'phone',
                type: 'text',
                component: null,
                isNull: false,
                label: '电话',
                placeholder: '',
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
            checkNumber: 1,
            popNumber: [0],
            components: [{
                name: 'category_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '分类',
                placeholder: '必填',
                rule: {required: true, trigger: 'blur', type: 'number'},
                options: []
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '客户名称',
                placeholder: '必填',
                rule: [{required: true, message: '请输入专家名称', trigger: 'blur'}, {validator: validate2.reCheck}]
            },
            {
                name: 'phone',
                type: 'text',
                component: null,
                isNull: false,
                label: '电话',
                placeholder: '',
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
    // 基础-供货商
    supplierFile: [{
        settitle: '供货商档案管理',
        key: 'supplier',
        tab: '供货商档案信息',
        url: 'supplier',
        selectSearch: ['suppliers.category_id'],
        selectValueId: [['category_id', 'category_name', true]],
        searchPlaceholder: '请输入供货商名称搜索',
        selectDefault: [{value: '', label: '选择供货商类型'}],
        theads: ['分类', '供货商名称', '电话', '联系人', '地址', '备注'],
        protos: ['category_name', 'name', 'phone', 'contacts', 'address', 'memo'],
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
            tab: '新建供货商档案信息',
            selectUrl: [['category', 'supplier', 'category_id', 'category_name', true]],
            checkNumber: 1,
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
                rule: [{required: true, trigger: 'blur'}, {validator: validate2.reCheck}]
            },
            {
                name: 'phone',
                type: 'text',
                component: null,
                isNull: false,
                label: '电话',
                placeholder: '',
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
            checkNumber: 1,
            popNumber: [0],
            components: [{
                name: 'category_name',
                type: 'select',
                component: null,
                isNull: false,
                label: '分类',
                placeholder: '必填',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '供货商名称',
                placeholder: '必填',
                rule: [{required: true, trigger: 'blur'}, {validator: validate2.reCheck}]
            },
            {
                name: 'phone',
                type: 'text',
                component: null,
                isNull: false,
                label: '电话',
                placeholder: '',
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
        listComponent: [{
            components: [{
                name: 'clients.category_id',
                value: '',
                type: 'select',
                component: selectSection,
                options: []
            }]
        }]
    }],
    // 基础-产品
    productFile: [{
        settitle: '产品档案管理',
        key: 'product',
        tab: '产品档案信息',
        url: 'product',
        selectValueId: [['category_id', 'category_name', true]],
        searchPlaceholder: '请输入产品名称进行搜索',
        selectDefault: [{value: '', label: '选择产品类型'}],
        selectSearch: ['products.category_id'],
        theads: ['分类名称', '名称', '执行标准', '商品型号', '商品简介', '包装规格', '保质期', '食用方法', '存储方法', '配料信息', '图片', '备注'],
        protos: ['category_name', 'name', 'enforce_standard', 'marque', 'description', 'specification', 'expiration_date', 'edible_method', 'storage_means', 'burdening_info', 'img', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
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
            tab: '新建产品信息',
            selectUrl: [['category', 'product', 'category_id', 'category_name', true]],
            checkNumber: 1,
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
                label: '产品名称',
                placeholder: '必填',
                rule: [{required: true, trigger: 'blur'}, {validator: validate2.reCheck, url: 'product'}]
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
                rule: ''
            }
            ]
        }],
        editComponent: [{
            tab: '编辑产品信息',
            selectUrl: [['category', 'product', 'category_id', 'category_name', true]],
            checkNumber: 1,
            popNumber: [0],
            components: [{
                name: 'category_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '分类',
                placeholder: '必填',
                rule: {required: true, trigger: 'blur', type: 'number'},
                options: []
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '产品名称',
                placeholder: '必填',
                rule: [{required: true, trigger: 'blur'}, {validator: validate2.reCheck, url: 'product'}]
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
                rule: ''
            }
            ]
        }],
        listComponent: [{
            components: [{
                name: 'products.category_id',
                value: '',
                type: 'select',
                component: selectSection,
                options: []
            }]
        }]
    }],
    // 3.2.1基础信息管理(*)
    baseManage: [
        // header* select*
        {
            settitle: '养殖基础信息管理',
            key: 'farm',
            tab: '养殖场信息',
            url: 'farm',
            searchPlaceholder: '请输入养殖场进行搜索',
            search: ['query_text', 'name'],
            theads: ['养殖场名称', '养殖面积', '负责人', '养殖畜禽种类', '养殖规模', '详细地址', '图片', '备注信息'],
            protos: ['name', 'area', 'principal', 'kind', 'scale', 'address', 'img', 'meno'],
            selectSearch: ['farm.name'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50],
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
                tab: '养殖场信息',
                components: [{
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '养殖场名称',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur'}
                },
                {
                    name: 'video',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '视频设备号',
                    placeholder: '必填',
                    rule: null
                },
                {
                    name: 'area',
                    type: 'textselect',
                    component: inputTextSelect,
                    isNull: false,
                    label: '养殖面积',
                    placeholder: '请填写数字（必填）',
                    rule: {type: 'number', required: true, trigger: 'blur'},
                    options: [
                        {
                            value: '', label: '亩'
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
                    label: '联系电话',
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
                    rule: {required: true, trigger: 'blur'}
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
                    component: null,
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
                tab: '养殖场信息',
                components: [{
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '养殖场名称',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur'}
                    // disabled: true
                },
                {
                    name: 'area',
                    type: 'textselect',
                    component: inputTextSelect,
                    isNull: false,
                    label: '养殖面积',
                    placeholder: '请填写数字（必填）',
                    rule: {type: 'number', required: true, trigger: 'blur'},
                    options: [
                        {
                            value: '', label: '亩'
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
                    label: '联系电话',
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
                    rule: {required: true, trigger: 'blur'}
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
                    component: null,
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
            listComponent: []
        },
        // header* select* selectSearch+ 养殖场和养殖区字段相同
        {
            settitle: '养殖基础信息管理',
            key: 'farm',
            tab: '养殖区信息',
            url: 'farm',
            searchPlaceholder: '请输入养殖区进行搜索',
            // search: ['query_text', 'name'],
            theads: ['所属养殖场', '养殖区名称', '养殖面积', '负责人', '养殖畜禽种类', '养殖规模', '详细地址', '图片', '备注信息'],
            protos: ['name', 'name', 'area', 'principal', 'kind', 'scale', 'address', 'img', 'meno'],
            // selectSearch: ['farm.pid'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50],
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
                tab: '养殖区信息',
                components: [{
                    // 场名
                    name: 'pid',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '养殖场名称',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur'},
                    options: [
                        {
                            value: '', label: '请选择养殖场'
                        },
                        {
                            value: '从化养殖基地', label: '从化养殖基地'
                        },
                        {
                            value: '华农养殖场', label: '华农养殖场'
                        }
                    ]
                },
                {
                    // 区名
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '养殖区名称',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur'}
                },
                {
                    name: 'area',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '养殖面积',
                    placeholder: '请填写数字（必填）',
                    rule: {type: 'number', required: true, trigger: 'blur'},
                    options: [
                        {
                            value: '', label: '亩'
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
                    label: '联系电话',
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
                    rule: {required: true, trigger: 'blur'}
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
                    rule: ''
                }
                ]
            }],
            editComponent: [{
                tab: '养殖区信息',
                components: [{
                    // 场名
                    name: 'pid',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '养殖场名称',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur'},
                    options: [
                        {
                            value: '', label: '请选择养殖场'
                        },
                        {
                            value: '从化养殖基地', label: '从化养殖基地'
                        },
                        {
                            value: '华农养殖场', label: '华农养殖场'
                        }
                    ]
                },
                {
                    // 区名
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '养殖区名称',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur'},
                    disabled: true
                },
                {
                    name: 'area',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '养殖面积',
                    placeholder: '请填写数字（必填）',
                    rule: {type: 'number', required: true, trigger: 'blur'},
                    options: [
                        {
                            value: '', label: '亩'
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
                    label: '联系电话',
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
                    rule: {required: true, trigger: 'blur'}
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
                    name: 'memo',
                    type: 'textarea',
                    component: null,
                    isNull: true,
                    label: '备注信息',
                    placeholder: '',
                    rule: ''
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '',
                    placeholder: '',
                    rule: null
                }
                ]
            }],
            listComponent: [{
                components: [{
                    type: 'select',
                    component: selectSection,
                    options: [{
                        value: '', label: '养殖场选择'
                    },
                    {
                        value: '从化养殖基地', label: '从化养殖基地'
                    }]
                }]
            }]
        },
        {
            settitle: '养殖基础信息管理',
            key: 'area',
            tab: '圈舍档案',
            url: 'area',
            searchPlaceholder: '请输入圈舍名称进行搜索',
            search: ['query_text', 'name'],
            theads: ['所属养殖区', '圈舍名称', '圈舍面积', '图片', '备注信息'],
            protos: ['farm_id', 'name', 'area', 'img', 'memo'],
            selectSearch: ['farm_id'],
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
                tab: '养殖区信息',
                components: [{
                    // 场名
                    name: 'farm_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '所属养殖区',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur'},
                    options: [
                        {
                            value: '', label: '请选择养殖区'
                        },
                        {
                            value: '区A', label: '区A'
                        },
                        {
                            value: '区B', label: '区B'
                        }
                    ]
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '圈舍名称',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur'}
                },
                {
                    name: 'area',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '养殖面积',
                    placeholder: '请填写数字（必填）',
                    rule: {type: 'number', required: true, trigger: 'blur'},
                    options: [
                        {
                            value: '', label: '亩'
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
                tab: '养殖区信息',
                components: [{
                    // 场名
                    name: 'farm_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '所属养殖区',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur'},
                    options: [
                        {
                            value: '', label: '请选择养殖区'
                        },
                        {
                            value: '区A', label: '区A'
                        },
                        {
                            value: '区B', label: '区B'
                        }
                    ]
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '圈舍名称',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur'}
                },
                {
                    name: 'area',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '养殖面积',
                    placeholder: '请填写数字（必填）',
                    rule: {type: 'number', required: true, trigger: 'blur'},
                    options: [
                        {
                            value: '', label: '亩'
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
            listComponent: [{
                components: [{
                    type: 'select',
                    component: selectSection,
                    options: [{
                        value: '', label: '养殖场选择'
                    },
                    {
                        value: '从化养殖基地', label: '从化养殖基地'
                    }]
                }]
            }]
        },
        // header* select* selectSearch+
        {
            settitle: '养殖基础信息管理',
            key: 'beast',
            tab: '畜禽档案',
            url: 'beast',
            searchPlaceholder: '请输入畜禽名称进行搜索',
            search: ['query_text', 'name'],
            theads: ['畜禽种类', '畜禽名称', '描述', 'RFID位置', '图片', '备注信息'],
            protos: ['category_name', 'name', 'desctiption', 'ear', 'img', 'meno'],
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
                components: [{
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '畜禽名称',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur'}
                },
                {
                    name: 'desctiption',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '品种描述',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'ear',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: 'RFID位置',
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
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '',
                    placeholder: '',
                    rule: ''
                }
                ]
            }],
            editComponent: [{
                tab: '新建畜禽档案',
                components: [{
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '畜禽名称',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur'}
                },
                {
                    name: 'desctiption',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '品种描述',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'ear',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: 'RFID位置',
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
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '',
                    placeholder: '',
                    rule: ''
                }
                ]
            }],
            listComponent: [{
                components: [{
                    type: 'select',
                    component: selectSection,
                    options: [{
                        value: '', label: '请选择'
                    },
                    {
                        value: '未上传', label: '未上传'
                    },
                    {
                        value: '已上传', label: '已上传'
                    }]
                }]
            }]
        },
        // header* select* selectSearch+
        {
            settitle: '养殖基础信息管理 ',
            key: 'fodder',
            tab: '饲料档案',
            url: 'fodder',
            searchPlaceholder: '请输入饲料名称',
            search: ['query_text', 'name'],
            theads: ['饲料类别', '饲料名称', '用途', '包装规格', '产地', '生产厂家名称', '联系方式', '图片', '备注信息'],
            protos: ['category_name', 'name', 'use', 'specification', 'address', 'vender_name', 'phone', 'img', 'memo'],
            selectSearch: ['fodder.category_name'],
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
                components: [{
                    name: 'category_name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '饲料类别',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur'},
                    options: [
                        {
                            value: '', label: '请选择分类'
                        },
                        {
                            value: '粗粮类', label: '粗粮类'
                        }
                    ]
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '名称',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur'}
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
                    name: '包装规格',
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
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'img',
                    type: 'file',
                    component: null,
                    isNull: true,
                    label: '图片',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'vender_name',
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
                tab: '新建畜禽档案',
                components: [{
                    name: 'category_name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '饲料类别',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur'},
                    options: [
                        {
                            value: '', label: '请选择分类'
                        },
                        {
                            value: '粗粮类', label: '粗粮类'
                        }
                    ]
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '名称',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur'}
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
                    name: '包装规格',
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
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'img',
                    type: 'file',
                    component: null,
                    isNull: true,
                    label: '图片',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'vender_name',
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
                    options: [{
                        value: '', label: '请选择分类'
                    },
                    {
                        value: '大包装', label: '大包装'
                    },
                    {
                        value: '小包装', label: '小包装'
                    }]
                }]
            }]
        },
        // header* select* selectSearch+
        {
            settitle: '养殖基础信息管理',
            key: 'drug',
            tab: '兽药档案',
            url: 'drug',
            searchPlaceholder: '请输入兽药名称',
            search: ['query_text', 'name'],
            theads: ['兽药分类', '兽药名称', '用途', '包装规格', '产地', '生产厂家名称', '联系方式', '图片', '备注信息'],
            protos: ['category_name', 'name', 'use', 'specification', 'address', 'vender_name', 'phone', 'img', 'memo'],
            selectSearch: ['drug.img'],
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
                tab: '新建农药档案',
                components: [{
                    name: 'category_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '畜药类别',
                    placeholder: '请选择类别',
                    rule: {required: true, trigger: 'blur'},
                    options: [{
                        value: '',
                        label: '请选择类别'
                    },
                    {
                        value: '疾病防治药',
                        label: '疾病防治药'
                    }
                    ]
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '兽药名称',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur'}
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
                    rule: { validator: validate2.phone, trigger: 'blur' }
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
                    type: 'memo',
                    component: null,
                    isNull: true,
                    label: '备注信息',
                    placeholder: '',
                    rule: null
                }
                ]
            }],
            editComponent: [{
                tab: '新建农药档案',
                components: [{
                    name: 'category_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '畜药类别',
                    placeholder: '请选择类别',
                    rule: {required: true, trigger: 'blur'},
                    options: [{
                        value: '',
                        label: '请选择类别'
                    },
                    {
                        value: '疾病防治药',
                        label: '疾病防治药'
                    }
                    ]
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '兽药名称',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur'}
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
                    rule: { validator: validate2.phone, trigger: 'blur' }
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
                    type: 'memo',
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
                    options: [{
                        value: '', label: '请选择分类'
                    },
                    {
                        value: '疾病防治药', label: '疾病防治药'
                    },
                    {
                        value: '传染病防治药', label: '传染病防治药'
                    }]
                }]
            }]
        }
    ],
    //  3.2.2养殖批次管理（*）
    // header*(图片状态字段没有) select* selectSearch+ date+
    serialManage: [{
        settitle: '养殖批次管理',
        key: 'breed',
        tab: '养殖批次信息',
        url: 'breed',
        // 批次信息模块数据
        batch: 'breedBatch',
        searchPlaceholder: '请输入养殖批次号进行搜索',
        search: ['query_text', 'beast_name'],
        theads: ['批次号', '养殖区', '畜禽', '日期', '数量', '面积', '养殖方式', '养殖人', '图片状态', '备注'],
        protos: ['serial', 'area_name', 'beast_name', 'start_date', 'amount', 'way', 'operate_name', 'imgState', 'meno'],
        selectSearch: ['breed.serial'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        newComponent: [{
            tab: '新建养殖批次',
            components: [{
                name: 'name',
                type: 'select',
                component: null,
                isNull: false,
                label: '所属养殖区',
                placeholder: '必填',
                rule: {required: true, trigger: 'blur'},
                options: [
                    {
                        value: '', label: '示范A区'
                    }
                ]
            },
            {
                name: 'beast_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '畜禽名称',
                placeholder: '必填',
                rule: {required: true, trigger: 'blur'},
                options: [
                    {
                        value: '', label: '黑猪一号'
                    }
                ]
            },
            {
                name: 'amount',
                type: 'text',
                component: null,
                isNull: false,
                label: '数量',
                placeholder: '',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'way',
                type: 'text',
                component: null,
                isNull: true,
                label: '养殖方式',
                placeholder: '',
                rule: null
            },
            {
                name: 'operate_id',
                type: 'text',
                component: null,
                isNull: true,
                label: '养殖人',
                placeholder: '',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'user_id',
                type: 'text',
                component: null,
                isNull: true,
                label: '录入人',
                placeholder: '',
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
            }
            ]
        }],
        editComponent: [{
            tab: '新建养殖批次',
            components: [{
                name: 'name',
                type: 'select',
                component: null,
                isNull: false,
                label: '所属养殖区',
                placeholder: '必填',
                rule: {required: true, trigger: 'blur'},
                options: [
                    {
                        value: '', label: '示范A区'
                    }
                ]
            },
            {
                name: 'beast_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '畜禽名称',
                placeholder: '必填',
                rule: {required: true, trigger: 'blur'},
                options: [
                    {
                        value: '', label: '黑猪一号'
                    }
                ]
            },
            {
                name: 'amount',
                type: 'text',
                component: null,
                isNull: false,
                label: '数量',
                placeholder: '',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'way',
                type: 'text',
                component: null,
                isNull: true,
                label: '养殖方式',
                placeholder: '',
                rule: null
            },
            {
                name: 'operate_id',
                type: 'text',
                component: null,
                isNull: true,
                label: '养殖人',
                placeholder: '',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'user_id',
                type: 'text',
                component: null,
                isNull: true,
                label: '录入人',
                placeholder: '',
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
            }
            ]
        }],
        listComponent: [{
            components: [{
                type: 'select',
                component: selectSection,
                options: [{
                    value: '', label: '养殖区选择'
                },
                {
                    value: '示范A区', label: '示范A区'
                }]
            },
            {
                type: 'select',
                component: selectSection,
                options: [{
                    value: '', label: '畜禽名称'
                },
                {
                    value: '畜禽Berta Aufderhar', label: '畜禽Berta Aufderhar'
                }]
            },
            {
                type: 'date',
                component: 'datePick'
            }]
        }]
    }],
    //  3.2.3饲料使用管理(*)(数据库没有，删除类型状态)
    //  header*(图片状态字段没有) select+ selectSearch+ date+
    feedManage: [{
        settitle: '饲料使用管理',
        key: 'fodderuse',
        tab: '饲料使用信息',
        url: 'fodderuse',
        searchPlaceholder: '请输入饲料名称进行搜索',
        search: ['query_text', 'fodder_name'],
        selectSearch: ['fodderuse.fodder_name'],
        theads: ['饲料批次号', '饲料日期', '饲料名称', '喂养方式', '专家', '操作人员', '喂养量', '备注信息'],
        protos: ['serial', 'fodderuse_date', 'fodder_name', 'way', 'expert_name', 'operate_name', 'amount', 'meno'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        newComponent: [{
            tab: '饲料使用管理',
            components: [{
                name: 'serial',
                type: 'text',
                component: null,
                isNull: false,
                label: '批次号',
                placeholder: '',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'fodder_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '饲料名称',
                placeholder: '',
                rule: {required: true, trigger: 'blur'},
                options: [{
                    value: '', label: '饲料名称'
                },
                {
                    value: '红苕汤羹', label: '红苕汤羹'
                },
                {
                    value: '麦麸子', label: '麦麸子'
                },
                {
                    value: '瓜果蔬菜', label: '瓜果蔬菜'
                },
                {
                    value: '玉米面', label: '玉米面'
                }
                ]
            },
            {
                name: 'fodderuse_date',
                type: 'date',
                component: null,
                isNull: false,
                label: '使用日期',
                placeholder: '',
                rule: {required: true, trigger: 'blur'}
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
                name: 'amount',
                type: 'textselect',
                component: inputTextSelect,
                isNull: true,
                label: '平均喂养量',
                placeholder: '',
                rule: null,
                options: [{
                    value: '',
                    label: 'kg/只'
                },
                {
                    value: 'kg/头',
                    label: 'kg/头'
                },
                {
                    value: 'kg/条',
                    label: 'kg/条'
                }
                ]
            },
            {
                name: 'expert_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '指导专家',
                placeholder: '',
                rule: null,
                options: [{
                    value: '',
                    label: '无'
                },
                {
                    value: '洪其里',
                    label: '洪其里'
                }
                ]
            },
            {
                type: 'operate_id',
                component: null,
                isNull: false,
                label: '饲养员',
                placeholder: '请选择饲养员',
                rule: {required: true, trigger: 'blur'},
                options: [{
                    value: '',
                    label: '请选择饲养员'
                },
                {
                    value: '郑刚',
                    label: '郑刚'
                }
                ]
            },
            {
                type: 'textarea',
                component: null,
                isNull: true,
                label: '备注信息',
                placeholder: '',
                rule: null
            }]
        }],
        editComponent: [{
            tab: '饲料使用管理',
            components: [{
                name: 'serial',
                type: 'text',
                component: null,
                isNull: false,
                label: '批次号',
                placeholder: '',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'fodder_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '饲料名称',
                placeholder: '',
                rule: {required: true, trigger: 'blur'},
                options: [{
                    value: '', label: '饲料名称'
                },
                {
                    value: '红苕汤羹', label: '红苕汤羹'
                },
                {
                    value: '麦麸子', label: '麦麸子'
                },
                {
                    value: '瓜果蔬菜', label: '瓜果蔬菜'
                },
                {
                    value: '玉米面', label: '玉米面'
                }
                ]
            },
            {
                name: 'fodderuse_date',
                type: 'date',
                component: null,
                isNull: false,
                label: '使用日期',
                placeholder: '',
                rule: {required: true, trigger: 'blur'}
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
                name: 'amount',
                type: 'textselect',
                component: inputTextSelect,
                isNull: true,
                label: '平均喂养量',
                placeholder: '',
                rule: null,
                options: [{
                    value: '',
                    label: 'kg/只'
                },
                {
                    value: 'kg/头',
                    label: 'kg/头'
                },
                {
                    value: 'kg/条',
                    label: 'kg/条'
                }
                ]
            },
            {
                name: 'expert_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '指导专家',
                placeholder: '',
                rule: null,
                options: [{
                    value: '',
                    label: '无'
                },
                {
                    value: '洪其里',
                    label: '洪其里'
                }
                ]
            },
            {
                type: 'operate_id',
                component: null,
                isNull: false,
                label: '饲养员',
                placeholder: '请选择饲养员',
                rule: {required: true, trigger: 'blur'},
                options: [{
                    value: '',
                    label: '请选择饲养员'
                },
                {
                    value: '郑刚',
                    label: '郑刚'
                }
                ]
            },
            {
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
                options: [{
                    value: '',
                    label: '养殖区名称'
                },
                {
                    value: '示范A区',
                    label: '示范A区'
                }]
            },
            {
                type: 'select',
                component: selectSection,
                options: [{
                    value: '',
                    label: '畜禽名称'
                },
                {
                    value: '黑猪一号',
                    label: '黑猪一号'
                }]
            },
            {
                type: 'date',
                component: 'datePick'
            }]
        }]
    }],
    //  3.2.4畜禽病疫管理（*）
    // header* (用药日期字段没有) select+ selectSearch+ date+
    plagueManage: [{
        settitle: '病疫管理',
        key: 'disease',
        tab: '病疫信息',
        url: 'disease',
        searchPlaceholder: '请输入兽药名称',
        search: ['query_text', 'drug_name'],
        selectSearch: ['disease.drug_name'],
        theads: ['病疫批次号', '兽药名称', '用药日期', '病情描述', '专家', '平均用药量', '治疗方式', '备注'],
        protos: ['serial', 'drug_name', 'date', 'description', 'expert_name', 'amount', 'way', 'meno'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        newComponent: [
            {
                tab: '新建病疫情信息',
                components: [
                    {
                        name: 'date',
                        type: 'date',
                        component: null,
                        isNull: false,
                        label: '用药日期',
                        placeholder: '',
                        rule: {required: true, trigger: 'blur'},
                        options: [{
                            value: '',
                            label: '无'
                        }
                        ]
                    },
                    {
                        name: 'description',
                        type: 'text',
                        component: null,
                        isNull: true,
                        label: '病情描述',
                        placeholder: '',
                        rule: null
                    },
                    {
                        name: 'drug_name',
                        type: 'select',
                        component: null,
                        isNull: false,
                        label: '兽药名称',
                        placeholder: '',
                        rule: {required: true, trigger: 'blur'},
                        options: [{
                            value: '',
                            label: '请选择类别'
                        },
                        {
                            value: '疾病防治药',
                            label: '疾病防治药'
                        },
                        {
                            value: '传染病防治药',
                            label: '传染病防治药'
                        },
                        {
                            value: '寄生虫病防治药',
                            label: '寄生虫病防治药'
                        },
                        {
                            value: '促生长药',
                            label: '促生长药'
                        },
                        {
                            value: '其他类',
                            label: '其他类'
                        }
                        ]
                    },
                    {
                        name: 'expert_name',
                        type: 'select',
                        component: null,
                        isNull: true,
                        label: '专家',
                        placeholder: '',
                        rule: null,
                        options: [{
                            value: '',
                            label: '无'
                        }
                        ]
                    },
                    {
                        name: 'operate_name',
                        type: 'select',
                        component: null,
                        isNull: false,
                        label: '操作人员',
                        placeholder: '请选择操作人',
                        rule: {required: true, trigger: 'blur'},
                        options: [{
                            value: '',
                            label: '请选择操作人'
                        },
                        {
                            value: '郑刚',
                            label: '郑刚'
                        }
                        ]
                    },
                    {
                        name: 'user_name',
                        type: 'text',
                        component: null,
                        isNull: false,
                        label: '录入人',
                        placeholder: '请选择操作人',
                        rule: {required: true, trigger: 'blur'},
                        options: [{
                            value: '',
                            label: '请选择操作人'
                        },
                        {
                            value: '郑刚',
                            label: '郑刚'
                        }
                        ]
                    },
                    {
                        name: 'amount',
                        type: 'textselect',
                        component: inputTextSelect,
                        isNull: false,
                        label: '平均施药量',
                        placeholder: '请输入正确的数字（必填）',
                        rule: {type: 'number'},
                        options: [{
                            value: '',
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
                        label: '治疗方式',
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
            }
            // {
            //     tab: '选择养殖批次',
            //     components: {
            //         type: 'select',
            //         component: inputSelect,
            //         isNull: false,
            //         label: '兽药分类',
            //         placeholder: '请选择养殖区',
            //         rule: '',
            //         options: [{
            //             value: '',
            //             label: '请选择养殖区'
            //         },
            //         {
            //             value: '示范A区',
            //             label: '示范A区'
            //         }]
            //     },
            //     tableHearList: ['养殖批次号', '所属养殖区', '畜禽名称', '养殖数量', '养殖日期', '备注'],
            //     batchName: '养殖'
            // }
        ],
        editComponent: [
            {
                tab: '新建病疫情信息',
                components: [
                    {
                        name: 'date',
                        type: 'date',
                        component: null,
                        isNull: false,
                        label: '用药日期',
                        placeholder: '',
                        rule: {required: true, trigger: 'blur'},
                        options: [{
                            value: '',
                            label: '无'
                        }
                        ]
                    },
                    {
                        name: 'description',
                        type: 'text',
                        component: null,
                        isNull: true,
                        label: '病情描述',
                        placeholder: '',
                        rule: null
                    },
                    {
                        name: 'drug_name',
                        type: 'select',
                        component: null,
                        isNull: false,
                        label: '兽药名称',
                        placeholder: '',
                        rule: {required: true, trigger: 'blur'},
                        options: [{
                            value: '',
                            label: '请选择类别'
                        },
                        {
                            value: '疾病防治药',
                            label: '疾病防治药'
                        },
                        {
                            value: '传染病防治药',
                            label: '传染病防治药'
                        },
                        {
                            value: '寄生虫病防治药',
                            label: '寄生虫病防治药'
                        },
                        {
                            value: '促生长药',
                            label: '促生长药'
                        },
                        {
                            value: '其他类',
                            label: '其他类'
                        }
                        ]
                    },
                    {
                        name: 'expert_name',
                        type: 'select',
                        component: null,
                        isNull: true,
                        label: '专家',
                        placeholder: '',
                        rule: null,
                        options: [{
                            value: '',
                            label: '无'
                        }
                        ]
                    },
                    {
                        name: 'operate_name',
                        type: 'select',
                        component: null,
                        isNull: false,
                        label: '操作人员',
                        placeholder: '请选择操作人',
                        rule: {required: true, trigger: 'blur'},
                        options: [{
                            value: '',
                            label: '请选择操作人'
                        },
                        {
                            value: '郑刚',
                            label: '郑刚'
                        }
                        ]
                    },
                    {
                        name: 'user_id',
                        type: 'text',
                        component: null,
                        isNull: false,
                        label: '录入人',
                        placeholder: '请选择操作人',
                        rule: {required: true, trigger: 'blur'},
                        options: [{
                            value: '',
                            label: '请选择操作人'
                        },
                        {
                            value: '郑刚',
                            label: '郑刚'
                        }
                        ]
                    },
                    {
                        name: 'amount',
                        type: 'textselect',
                        component: inputTextSelect,
                        isNull: false,
                        label: '平均施药量',
                        placeholder: '请输入正确的数字（必填）',
                        rule: {type: 'number'},
                        options: [{
                            value: '',
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
                        label: '治疗方式',
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
            }
        ],
        listComponent: [{
            components: [{
                type: 'select',
                component: selectSection,
                options: [{
                    value: '',
                    label: '养殖区名称'
                },
                {
                    value: '示范A区',
                    label: '示范A区'
                }]
            },
            {
                type: 'select',
                component: selectSection,
                options: [{
                    value: '',
                    label: '畜禽名称'
                },
                {
                    value: '黑猪一号',
                    label: '黑猪一号'
                }]
            },
            {
                type: 'date',
                component: 'datePick'
            }]
        }]
    }],
    //  3.2.5畜禽检疫管理(*)
     // header* select* selectSearch+ date+
    quarantineManage: [{
        settitle: '检疫管理',
        key: 'detection',
        tab: '检疫信息',
        url: 'detection',
        searchPlaceholder: '请输入检测项目名称进行',
        search: ['query_text', 'name'],
        selectSearch: ['detection.organization'],
        theads: ['检验批次号', '检测日期', '检测项目名称', '专家', '操作人员', '检测内容', '检测结果', '审批人', '检测报告图片', '备注'],
        protos: ['serial', 'date', 'name', 'expert_name', 'operate_name', 'content', 'result', 'check', 'img', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        newComponent: [{
            tab: '新建检疫信息',
            components: [{
                name: 'date',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测日期',
                placeholder: '',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'organization',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测机构',
                placeholder: '',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测项目名称',
                placeholder: '',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'expert_name',
                type: 'select',
                component: null,
                isNull: true,
                label: '指导专家',
                placeholder: '无',
                rule: null,
                options: [{
                    value: '',
                    label: '无'
                }
                ]
            },
            {
                name: 'operate_name',
                type: 'select',
                component: null,
                isNull: true,
                label: '操作人员',
                placeholder: '无',
                rule: {required: true, trigger: 'blur'},
                options: [{
                    value: '',
                    label: '无'
                }
                ]
            },
            {
                name: 'user_name',
                type: 'text',
                component: null,
                isNull: true,
                label: '录入人',
                placeholder: '无',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'content',
                type: 'text',
                component: null,
                isNull: true,
                label: '检测内容',
                placeholder: '',
                rule: ''
            },
            {
                name: 'result',
                type: 'select',
                component: null,
                isNull: true,
                label: '检测结果',
                placeholder: '',
                rule: '',
                options: [{
                    value: '',
                    label: '合格'
                },
                {
                    value: '不合格',
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
                name: 'memo',
                type: 'textarea',
                component: null,
                isNull: true,
                label: '备注信息',
                placeholder: '',
                rule: null
            },
            {
                name: 'img',
                type: 'file',
                component: inputFile,
                isNull: true,
                label: '检测报告图片',
                placeholder: '',
                rule: null
            }
            ]
        }],
        editComponent: [{
            tab: '新建检疫信息',
            components: [{
                name: 'date',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测日期',
                placeholder: '',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'organization',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测机构',
                placeholder: '',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测项目名称',
                placeholder: '',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'expert_name',
                type: 'select',
                component: null,
                isNull: true,
                label: '指导专家',
                placeholder: '无',
                rule: null,
                options: [{
                    value: '',
                    label: '无'
                }
                ]
            },
            {
                name: 'operate_name',
                type: 'select',
                component: null,
                isNull: true,
                label: '操作人员',
                placeholder: '无',
                rule: {required: true, trigger: 'blur'},
                options: [{
                    value: '',
                    label: '无'
                }
                ]
            },
            {
                name: 'user_name',
                type: 'text',
                component: null,
                isNull: true,
                label: '录入人',
                placeholder: '无',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'content',
                type: 'text',
                component: null,
                isNull: true,
                label: '检测内容',
                placeholder: '',
                rule: ''
            },
            {
                name: 'result',
                type: 'select',
                component: null,
                isNull: true,
                label: '检测结果',
                placeholder: '',
                rule: '',
                options: [{
                    value: '',
                    label: '合格'
                },
                {
                    value: '不合格',
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
                name: 'memo',
                type: 'textarea',
                component: null,
                isNull: true,
                label: '备注信息',
                placeholder: '',
                rule: null
            },
            {
                name: 'img',
                type: 'file',
                component: inputFile,
                isNull: true,
                label: '检测报告图片',
                placeholder: '',
                rule: null
            }
            ]
        }],
        listComponent: [{
            components: [
                {
                    type: 'select',
                    component: selectSection,
                    options: [{
                        value: '',
                        label: '检测机构'
                    },
                    {
                        value: '广州市畜牧局',
                        label: '广州市畜牧局'
                    }]
                },
                {
                    type: 'date',
                    component: 'datePick'
                }
            ]
        }]
    }],
    //  3.2.6畜禽圈舍管理(*)
    //  header*(少了操作类型,操作方式) select* selectSearch+ date+
    areaManage: [{
        settitle: '圈舍管理',
        key: 'clean',
        tab: '圈舍信息',
        url: 'clean',
        searchPlaceholder: '请输入圈舍名称进行',
        search: ['query_text', 'name'],
        theads: ['圈舍批次号', '操作类型', '操作方式', '操作内容', '专家', '操作人', '操作日期', '备注信息'],
        protos: ['serial', 'name', 'way', 'content', 'expert_name', 'operate_name', 'date', 'memo'],
        selectSearch: ['clean.expert_name'],
        widths: [50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        newComponent: [{
            tab: '新建圈舍信息',
            components: [{
                name: 'farm_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '所属养殖区',
                placeholder: '必填',
                rule: {required: true, trigger: 'blur'},
                options: [{
                    value: '',
                    label: '请选择养殖区'
                }]
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '圈舍名称',
                placeholder: '',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'expert_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '专家',
                placeholder: '',
                rule: null,
                options: [
                    {
                        value: '', label: '无'
                    }
                ]
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '操作人',
                placeholder: '',
                rule: {required: true, trigger: 'blur'},
                options: [
                    {
                        value: '', label: '无'
                    }
                ]
            },
            {
                name: 'user_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '录入人',
                placeholder: '',
                rule: {required: true, trigger: 'blur'},
                options: [
                    {
                        value: '', label: '无'
                    }
                ]
            },
            {
                name: 'content',
                type: 'date',
                component: null,
                isNull: false,
                label: '操作内容',
                placeholder: '',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'date',
                type: 'date',
                component: null,
                isNull: false,
                label: '操作日期',
                placeholder: '',
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
            },
            {
                name: 'img',
                type: 'file',
                component: null,
                isNull: true,
                label: '',
                placeholder: '',
                rule: null
            }
            ]
        }],
        editComponent: [{
            tab: '新建圈舍信息',
            components: [{
                name: 'farm_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '所属养殖区',
                placeholder: '必填',
                rule: {required: true, trigger: 'blur'},
                options: [{
                    value: '',
                    label: '请选择养殖区'
                }]
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '圈舍名称',
                placeholder: '',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'expert_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '专家',
                placeholder: '',
                rule: null,
                options: [
                    {
                        value: '', label: '无'
                    }
                ]
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '操作人',
                placeholder: '',
                rule: {required: true, trigger: 'blur'},
                options: [
                    {
                        value: '', label: '无'
                    }
                ]
            },
            {
                name: 'user_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '录入人',
                placeholder: '',
                rule: {required: true, trigger: 'blur'},
                options: [
                    {
                        value: '', label: '无'
                    }
                ]
            },
            {
                name: 'content',
                type: 'date',
                component: null,
                isNull: false,
                label: '操作内容',
                placeholder: '',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'date',
                type: 'date',
                component: null,
                isNull: false,
                label: '操作日期',
                placeholder: '',
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
            },
            {
                name: 'img',
                type: 'file',
                component: null,
                isNull: true,
                label: '',
                placeholder: '',
                rule: null
            }
            ]
        }],
        listComponent: [{
            components: [{
                type: 'select',
                component: selectSection,
                options: [{
                    value: '',
                    label: '养殖区名称'
                },
                {
                    value: '示范A区',
                    label: '示范A区'
                }]
            },
            {
                type: 'select',
                component: selectSection,
                options: [{
                    value: '',
                    label: '畜禽名称'
                },
                {
                    value: '黑猪一号',
                    label: '黑猪一号'
                }]
            },
            {
                type: 'date',
                component: 'datePick'
            }
            ]
        }]
    }],
    //  3.2.7无害化(新增)（*）
    // header* select* selectSearch+ date+
    innocuityManage: [{
        settitle: '无害化管理',
        key: 'dispose',
        tab: '无害化信息',
        url: 'dispose',
        searchPlaceholder: '请输入操作内容进行',
        search: ['query_text', 'content'],
        theads: ['无害化批次号', '操作日期', '操作内容', '实行原因', '指导专家', '备注信息'],
        protos: ['serial', 'date', 'content', 'why', 'expert_name', 'memo'],
        selectSearch: ['dispose.expert_name'],
        widths: [50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        newComponent: [{
            tab: '新建养殖场信息',
            components: [{
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '操作日期',
                placeholder: '',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'expert_name',
                type: 'select',
                component: null,
                isNull: true,
                label: '指导专家',
                placeholder: '',
                rule: null,
                options: [{
                    value: '',
                    label: '无'
                }]
            },
            {
                name: 'operate_name',
                type: 'select',
                component: null,
                isNull: false,
                label: '操作人员',
                placeholder: '',
                rule: {required: true, trigger: 'blur'},
                options: [{
                    value: '',
                    label: '无'
                }]
            },
            {
                name: 'user_name',
                type: 'select',
                component: null,
                isNull: false,
                label: '录入人',
                placeholder: '',
                rule: {required: true, trigger: 'blur'},
                options: [{
                    value: '',
                    label: '无'
                }]
            },
            {
                name: 'content',
                type: 'text',
                component: null,
                isNull: false,
                label: '操作内容',
                placeholder: '',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'why',
                type: 'text',
                component: null,
                isNull: false,
                label: '实行原因',
                placeholder: '',
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
            },
            {
                name: 'img',
                type: 'file',
                component: null,
                isNull: true,
                label: '',
                placeholder: '',
                rule: null
            }
            ]
        }],
        editComponent: [{
            tab: '新建养殖场信息',
            components: [{
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '操作日期',
                placeholder: '',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'expert_name',
                type: 'select',
                component: null,
                isNull: true,
                label: '指导专家',
                placeholder: '',
                rule: null,
                options: [{
                    value: '',
                    label: '无'
                }]
            },
            {
                name: 'operate_name',
                type: 'select',
                component: null,
                isNull: false,
                label: '操作人员',
                placeholder: '',
                rule: {required: true, trigger: 'blur'},
                options: [{
                    value: '',
                    label: '无'
                }]
            },
            {
                name: 'user_name',
                type: 'select',
                component: null,
                isNull: false,
                label: '录入人',
                placeholder: '',
                rule: {required: true, trigger: 'blur'},
                options: [{
                    value: '',
                    label: '无'
                }]
            },
            {
                name: 'content',
                type: 'text',
                component: null,
                isNull: false,
                label: '操作内容',
                placeholder: '',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'why',
                type: 'text',
                component: null,
                isNull: false,
                label: '实行原因',
                placeholder: '',
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
            },
            {
                name: 'img',
                type: 'file',
                component: null,
                isNull: true,
                label: '',
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
                },
                {
                    type: 'select',
                    component: selectSection,
                    options: [{
                        value: '',
                        label: '请输入指导专家'
                    },
                    {
                        value: '无',
                        label: '无'
                    }]
                }

            ]
        }]
    }],
    //  3.2.8畜禽出栏管理(*)
    // header* select* selectSearch+ date+
    slaughterManage: [{
        settitle: '出栏管理',
        key: 'come',
        tab: '出栏信息',
        url: 'come',
        searchPlaceholder: '请输入出栏批次进行搜索',
        search: ['query_text', 'serial'],
        // selectSearch: ['come.expert_name'],
        theads: ['出栏批次号', '出栏日期', '出栏数量', '操作人员', '状态', '备注'],
        protos: ['serial', 'date', 'amount', 'operate_name', 'state', 'memo'],
        widths: [50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        newComponent: [{
            tab: '新建出栏信息',
            components: [{
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '出栏日期',
                placeholder: '',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'amount',
                type: 'text',
                component: null,
                isNull: false,
                label: '出栏数量',
                placeholder: '',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'operate_id',
                type: 'select',
                component: inputSelect,
                isNull: false,
                label: '出栏人',
                placeholder: '请选择人物',
                rule: {required: true, trigger: 'blur'},
                options: [{
                    value: '',
                    label: '请选择经手人'
                },
                {
                    value: '郑刚',
                    label: '郑刚'
                }
                ]
            },
            {
                name: 'state',
                type: 'textarea',
                component: null,
                isNull: true,
                label: '状态',
                placeholder: '',
                rule: {required: true, trigger: 'blur'}
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
            tab: '新建出栏信息',
            components: [{
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '出栏日期',
                placeholder: '',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'amount',
                type: 'text',
                component: null,
                isNull: false,
                label: '出栏数量',
                placeholder: '',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'operate_id',
                type: 'select',
                component: inputSelect,
                isNull: false,
                label: '出栏人',
                placeholder: '请选择人物',
                rule: {required: true, trigger: 'blur'},
                options: [{
                    value: '',
                    label: '请选择经手人'
                },
                {
                    value: '郑刚',
                    label: '郑刚'
                }
                ]
            },
            {
                name: 'state',
                type: 'textarea',
                component: null,
                isNull: true,
                label: '状态',
                placeholder: '',
                rule: {required: true, trigger: 'blur'}
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
                type: 'select',
                component: selectSection,
                options: [{
                    value: '',
                    label: '养殖区名称'
                },
                {
                    value: '示范A区',
                    label: '示范A区'
                }]
            },
            {
                type: 'select',
                component: selectSection,
                options: [{
                    value: '',
                    label: '畜禽名称'
                },
                {
                    value: '黑猪一号',
                    label: '黑猪一号'
                }]
            },
            {
                type: 'date',
                component: 'datePick'
            }
            ]
        }]
    }],
    //  3.2.9养殖计划管理(新增)
    // 后台数据报错
    planManage: [{
        settitle: '养殖计划管理',
        key: 'plan',
        tab: '养殖计划信息',
        url: 'plan',
        searchPlaceholder: '请输入检测项目名称进行',
        theads: ['批次号', '计划日期', '操作类型', '安排人员', '计划内容', '操作用户', '备注'],
        protos: ['serial', 'date', 'type', 'operate_name', 'content', 'user_id', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        newComponent: [{
            tab: '新建养殖计划信息',
            components: [{
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '出栏日期',
                placeholder: '',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'type',
                type: 'text',
                component: null,
                isNull: false,
                label: '操作类型',
                placeholder: '',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '操作人',
                placeholder: '请选择人物',
                rule: {required: true, trigger: 'blur'},
                options: [{
                    value: '',
                    label: '请选择操作人'
                },
                {
                    value: '郑刚',
                    label: '郑刚'
                }
                ]
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
                name: 'user_id',
                type: 'text',
                component: null,
                isNull: true,
                label: '操作用户',
                placeholder: '',
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
        listComponent: []
    }],
    // 畜禽-屠宰加工
    petProcess: [{
        settitle: '加工批次管理',
        key: 'pack',
        tab: '加工批次信息',
        url: 'pack',
        paramsIndex: 'beast',
        searchPlaceholder: '请输入批次号进行搜索',
        theads: ['加工批次号', '加工日期', '数量(重量)', '单位', '操作人', '备注信息'],
        protos: ['serial', 'date', 'amount', 'unit', 'operate_name', 'memo'],
        widths: [50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        newComponent: [{
            tab: '新建加工批次信息',
            hiddenValue: {type: 'beast'},
            selectUrl2: ['operates', 'id', 'name', true],
            popNumber2: 1,
            components: [{
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '加工日期',
                placeholder: '',
                disabled: true,
                rule: {required: true, trigger: 'blur', type: 'date'}
            },
            {
                name: 'amount',
                type: 'text',
                component: null,
                isNull: false,
                label: '数量/重量',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number'},
                options: []
            },
            {
                name: 'unit',
                type: 'select',
                component: null,
                isNull: false,
                label: '单位',
                placeholder: '',
                rule: {type: 'number'},
                options: [{value: '', label: '亩'}, {value: '平方米', label: '平方米'}, {value: '公顷', label: '公顷'}]
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '操作人员',
                placeholder: '请选择人物',
                rule: {required: true, trigger: 'blur', type: 'number'},
                options: []
            },
            {
                name: 'state',
                type: 'text',
                component: null,
                isNull: true,
                label: '状态',
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
            tab: '新建加工批次信息',
            selectUrl2: ['operates', 'id', 'name', true],
            popNumber2: 1,
            components: [{
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '加工日期',
                placeholder: '',
                disabled: true,
                rule: {required: true, trigger: 'blur', type: 'date'}
            },
            {
                name: 'amount',
                type: 'text',
                component: null,
                isNull: false,
                label: '数量/重量',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number'},
                options: []
            },
            {
                name: 'unit',
                type: 'select',
                component: null,
                isNull: false,
                label: '单位',
                placeholder: '',
                rule: {type: 'number'},
                options: [{value: '', label: '亩'}, {value: '平方米', label: '平方米'}, {value: '公顷', label: '公顷'}]
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '操作人员',
                placeholder: '请选择人物',
                rule: {required: true, trigger: 'blur', type: 'number'},
                options: []
            },
            {
                name: 'state',
                type: 'text',
                component: null,
                isNull: true,
                label: '状态',
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
                type: 'date',
                component: 'datePick'
            }]
        }]
    }],
    // 畜禽-加工检测
    petDectect: [{
        settitle: '检验检测管理',
        key: 'detect_pk',
        tab: '检验检测信息',
        url: 'detect_pk',
        searchPlaceholder: '请输入检测项目名称进行',
        paramsIndex: 'beast',
        changeDataArr: [{result: {0: '不合格', 1: '合格'}}],
        theads: ['检测名称', '检测内容', '检测日期', '检测结果', '检测机构', '负责人', '处理方法', '图片报告', '备注'],
        protos: ['name', 'content', 'date', 'result', 'organization', 'operate_name', 'mwthod', 'thumb', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        newComponent: [{
            tab: '新建检验检测信息',
            hiddenValue: {type: 'beast'},
            selectUrl2: ['operates', 'id', 'name', true],
            popNumber2: 1,
            components: [{
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测名称',
                placeholder: '请填写检测项目名称',
                rule: {required: true, trigger: 'blur', type: 'text'}
            },
            {
                name: 'content',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测内容',
                placeholder: '请填写检测内容',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '检测日期',
                placeholder: '',
                disabled: true,
                rule: {required: true, trigger: 'blur', type: 'date'}
            },
            {
                name: 'result',
                type: 'select',
                component: null,
                isNull: false,
                label: '检测结果',
                placeholder: '请选择检测结果',
                rule: {required: true, trigger: 'blur', type: 'select'},
                options: [{
                    value: 1,
                    label: '合格'
                },
                {
                    value: 0,
                    label: '不合格'
                }]
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
            }]
        }],
        editComponent: [{
            tab: '编辑检验检测信息',
            selectUrl2: ['operates', 'id', 'name', true],
            popNumber2: 1,
            components: [{
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测名称',
                placeholder: '请填写检测项目名称',
                rule: {required: true, trigger: 'blur', type: 'text'}
            },
            {
                name: 'content',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测内容',
                placeholder: '请填写检测内容',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '检测日期',
                placeholder: '',
                disabled: true,
                rule: {required: true, trigger: 'blur', type: 'date'}
            },
            {
                name: 'result',
                type: 'select',
                component: null,
                isNull: false,
                label: '检测结果',
                placeholder: '请选择检测结果',
                rule: {required: true, trigger: 'blur', type: 'select'},
                options: [{
                    value: 1,
                    label: '合格'
                },
                {
                    value: 0,
                    label: '不合格'
                }]
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
            }]
        }],
        listComponent: [{
            components: [{
                type: 'date',
                component: 'datePick'
            }]
        }]
    }],
    // 畜禽-产品溯源码
    petTrace: [{
        settitle: '产品溯源管理',
        key: 'code',
        tab: '产品溯源码信息',
        url: 'code',
        paramsIndex: 'beast',
        selectSearch: ['products.id'],
        selectValueId: ['product_id', 'product_name', true],
        selectDefault: {value: '', label: '请选择产品'},
        searchPlaceholder: '请输入溯源码搜索',
        theads: ['加工批次号', '产品溯源码', '产品名称', '生产日期', 'RFID', '产地', '溯源次数', '备注信息'],
        protos: ['serial', 'code', 'product_name', 'date', 'rfid', '', 'time', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        newComponent: [{
            tab: '新建溯源码信息',
            hiddenValue: {type: 'beast'},
            selectUrl2: ['products', 'id', 'name', true],
            popNumber2: 1,
            components: [{
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '加工日期',
                placeholder: '',
                disabled: true,
                rule: {required: true, trigger: 'blur', type: 'date'}
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '产品',
                placeholder: '请选择产品',
                rule: {required: true, trigger: 'blur', type: 'number'},
                options: []
            },
            {
                name: 'number',
                type: 'text',
                component: null,
                isNull: false,
                label: '生成数量',
                placeholder: '请填写数量',
                rule: {required: true, trigger: 'blur', type: 'number'}
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
            tab: '新建溯源码信息',
            hiddenValue: {type: 'beast'},
            selectUrl2: ['products', 'id', 'name', true],
            popNumber2: 1,
            components: [{
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '加工日期',
                placeholder: '',
                disabled: true,
                rule: {required: true, trigger: 'blur', type: 'date'}
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '产品',
                placeholder: '请选择产品',
                rule: {required: true, trigger: 'blur', type: 'number'},
                options: []
            },
            {
                name: 'number',
                type: 'text',
                component: null,
                isNull: false,
                label: '生成数量',
                placeholder: '请填写数量',
                rule: {required: true, trigger: 'blur', type: 'number'}
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
                options: []
            },
            {
                type: 'date',
                component: 'datePick'
            }]
        }],
        moreComponent: [{value: '打印'}]
    }],
    // 种植基础资料
    plantBase: [
        {
            settitle: '种植基础资料',
            key: 'plantation',
            tab: '种植场',
            url: 'plantation',
            searchPlaceholder: '请输入种植场进行搜索',
            theads: ['种植场名称', '种植面积', '负责人', '联系电话', '详细地址', '备注信息'],
            protos: ['name', 'area', 'director', 'phone', 'address', 'memo'],
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
            listComponent: [],
            moreComponent: [{value: '视频'}],
            newComponent: [{
                tab: '新建种植场信息',
                checkNumber: 0,
                components: [{
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '种植场名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入种植场名称', trigger: 'blur'}, {validator: validate2.reCheck}]
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
                    rule: {required: true, message: '请输入种植面积', trigger: 'blur'}
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
                checkNumber: 0,
                components: [{
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '种植场名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入种植场名称', trigger: 'blur'}, {validator: validate2.reCheck}]
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
                    rule: {required: true, message: '请输入种植场面积', trigger: 'blur'}
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
            key: 'planta',
            tab: '种植区',
            url: 'planta',
            selectSearch: ['planta.pid'],
            selectValueId: [['pid', 'plantation_name', true]],
            searchPlaceholder: '请输入种植区进行搜索',
            selectDefault: [{value: '', label: '种植场选择'}],
            theads: ['种植场名称', '种植区名称', '种植面积', '负责人', '联系电话', '地址', '图片', '备注'],
            protos: ['plantation_name', 'name', 'area', 'director', 'phone', 'address', 'img', 'memo'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50],
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
                checkNumber: 1,
                popNumber: [0],
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
                    rule: [{required: true, message: '请输入种植区名称', trigger: 'blur'}, {validator: validate2.reCheck}]
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
                    rule: {required: true, message: '请输入面积', trigger: 'blur'}
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
                checkNumber: 1,
                popNumber: [0],
                components: [{
                    name: 'pid',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '所属种植场',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur', type: 'number'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '姓名',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入种植区名称', trigger: 'blur'}, {validator: validate2.reCheck}]
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
                    rule: {required: true, message: '请输入种植场名称', trigger: 'blur'}
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
                checkNumber: 1,
                popNumber: [0],
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
                    rule: [{required: true, message: '请输入果蔬名称', trigger: 'blur'}, {validator: validate2.reCheck}]
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
                    name: 'date',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '生长周期（天）',
                    placeholder: ''
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: false,
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
                checkNumber: 1,
                popNumber: [0],
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
                    rule: [{required: true, message: '请选择果蔬类别', trigger: 'blur'}, {validator: validate2.reCheck}]
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
                    name: 'date',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '生长周期（天）',
                    placeholder: ''
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: false,
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
            url: 'manure',
            selectSearch: ['manures.category_id'],
            selectValueId: [['category_id', 'category_name', true]],
            searchPlaceholder: '请输入肥料名称',
            selectDefault: [{value: '', label: '肥料类别'}],
            theads: ['肥料分类', '肥料名称', '用途', '包装规格', '日期', '产地', '经销商名称', '联系方式', '备注'],
            protos: ['category_name', 'name', 'usage', 'specification', 'date', 'origin', 'specification', 'phone', 'memo'],
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
                checkNumber: 1,
                popNumber: [0],
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
                    rule: [{required: true, message: '请输入肥料名称', trigger: 'blur'}, {validator: validate2.reCheck}]
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
                    label: '联系方式'
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
                checkNumber: 1,
                popNumber: [0],
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
                    rule: [{required: true, message: '请输入肥料名称', trigger: 'blur'}, {validator: validate2.reCheck}]
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
                    label: '联系方式'
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
            url: 'medicament',
            selectSearch: ['medicaments.category_id'],
            selectValueId: [['category_id', 'category_name', true]],
            searchPlaceholder: '请输入农药名称',
            selectDefault: [{value: '', label: '农药类别'}],
            theads: ['农药分类', '农药名称', '用途', '防治对象', '药物毒性', '包装规格', '厂家名称', '产地', '联系方式', '备注'],
            protos: ['category_name', 'name', 'usage', 'control_objects', 'toxicity_grade', 'specification', 'manufacturer', 'origin', 'phone', 'memo'],
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
                selectUrl: [['category', 'medicament', 'category_id', 'category_name', true]],
                checkNumber: 1,
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
                    rule: [{required: true, message: '请输入农药名称', trigger: 'blur'}, {validator: validate2.reCheck}]
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
                    label: '联系方式'
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
                selectUrl: [['category', 'medicament', 'category_id', 'category_name', true]],
                checkNumber: 1,
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
                    rule: [{required: true, message: '请输入农药名称', trigger: 'blur'}, {validator: validate2.reCheck}]
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
                    label: '联系方式'
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
        tab: '种植批次信息',
        url: 'cultivate',
        selectSearch: ['plantations.id', 'plants.id'],
        selectValueId: [['plantation_id', 'plantation_name', true], ['plant_id', 'plant_name', true]],
        selectDefault: [{value: '', label: '种植区选择'}, {value: '', label: '果蔬选择'}],
        searchPlaceholder: '请输入种植批次号进行搜索',
        theads: ['所属种植区', '种植批次号', '果蔬名称', '种植日期', '种植面积', '种植人', '录入人', '备注'],
        protos: ['plantation_name', 'serial', 'plant_name', 'date', 'area', 'operate_name', 'user_name', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50],
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
                rule: {required: true, trigger: 'blur', message: '请输入种植日期'}
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
                rule: {required: true, message: '请输入种植面积', trigger: 'blur'}
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
            popNumber: [1],
            popNumber2: [2, 5],
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
                rule: {required: true, trigger: 'blur', message: '请输入种植日期'}
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
                rule: {required: true, message: '请输入种植面积', trigger: 'blur'}
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
        typeComponent: [
            {
                component: output
            },
            {
                component: newbuildBtn
            }],
        lotComponent: [{value: '批量农事'}, {value: '批量施肥'}, {value: '批量施药'}, {value: '批量检测'}],
        moreComponent: [{value: '状态'}, {value: '农事'}, {value: '施肥'}, {value: '施药'}, {value: '检测'}, {value: '采收'}, {value: '图片'}]
    }],
    // 农事管理
    plantFarm: [
        {
            settitle: '农事管理',
            key: 'fertilize',
            tab: '施肥信息',
            url: 'fertilize',
            selectSearch: ['manures.id'],
            selectValueId: [['manure_id', 'manure_name', true]],
            selectDefault: [{value: '', label: '肥料选择'}],
            searchPlaceholder: '请输入施肥批次号进行搜索',
            theads: ['批次号', '施肥日期', '天气', '肥料', '施用量(Kg)', '施肥人', '施肥方法', '录入人', '备注'],
            protos: ['serial', 'date', 'weather', 'manure_name', 'amount', 'operate_name', 'way', 'user_name', 'memo'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
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
                selectUrl2: [['manures', 'id', 'name', true], ['operates', 'id', 'name', true]],
                popNumber2: [0, 3],
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
                    rule: {required: true, trigger: 'blur', message: '请输入施肥日期'}
                },
                {
                    name: 'amount',
                    type: 'textSelect',
                    component: inputTextSelect,
                    isNull: false,
                    label: '种植面积',
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
                    rule: {required: true, message: '请输入平均施肥用量', trigger: 'blur'}
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
                tab: '编辑种植批次',
                selectUrl: [['planta', 'cultivate', 'plantation_id', 'plantation_name', true]],
                selectUrl2: [['plants', 'id', 'name', true], ['operates', 'id', 'name', true]],
                popNumber: [1],
                popNumber2: [2, 5],
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
                    rule: {required: true, trigger: 'blur', message: '请输入种植日期'}
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
                    rule: {required: true, message: '请输入种植面积', trigger: 'blur'}
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
            }]
        },
        {
            settitle: '农事管理',
            key: 'planManage',
            tab: '病虫害信息',
            url: 'plan',
            searchPlaceholder: '请输入农药名称',
            theads: ['批次号', '药剂', '喷洒日期', '天气', '使用量(L)', '施药浓度', '安全隔离期(天)', '施用人', '施用方法', '录入人'],
            protos: ['plan_type_name', 'name', 'content', 'name', 'content', 'name', 'content', 'name', 'content', 'content'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
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
                    type: 'date',
                    component: datePick
                }
                ]
            }]
        },
        {
            settitle: '农事管理',
            key: 'planManage',
            tab: '检验检测信息',
            url: 'plan',
            searchPlaceholder: '请输入批次号进行搜索',
            theads: ['批次号', '检验类型', '检验日期', '天气', '检测部门', '检查结果', '检验审批信息', '负责人', '录入人', '备注'],
            protos: ['plan_type_name', 'name', 'content', 'name', 'content', 'name', 'content', 'name', 'content'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
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
                        type: 'select',
                        component: selectSection,
                        options: [{
                            value: '',
                            label: '产品品牌'
                        },
                        {
                            value: '康乐牌',
                            label: '康乐牌'
                        }]
                    },
                    {
                        type: 'select',
                        component: selectSection,
                        options: [{
                            value: '',
                            label: '产品品牌'
                        },
                        {
                            value: '康乐牌',
                            label: '康乐牌'
                        }]
                    },
                    {
                        type: 'date',
                        component: datePick
                    }]
            }]
        },
        {
            settitle: '农事管理',
            key: 'planManage',
            tab: '田间信息',
            url: 'plan',
            searchPlaceholder: '请输入批次号进行搜索',
            theads: ['批次号', '检验类型', '检验日期', '天气', '检测部门', '检查结果', '检验审批信息', '负责人', '录入人', '备注'],
            protos: ['plan_type_name', 'name', 'content', 'name', 'content', 'name', 'content', 'name', 'content'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
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
                        type: 'select',
                        component: selectSection,
                        options: [{
                            value: '',
                            label: '产品品牌'
                        },
                        {
                            value: '康乐牌',
                            label: '康乐牌'
                        }]
                    },
                    {
                        type: 'select',
                        component: selectSection,
                        options: [{
                            value: '',
                            label: '产品品牌'
                        },
                        {
                            value: '康乐牌',
                            label: '康乐牌'
                        }]
                    },
                    {
                        type: 'date',
                        component: datePick
                    }]
            }]
        }
    ],
    // 生产计划
    plantProduct: [{
        settitle: '生产计划管理',
        key: 'farming',
        tab: '生产计划信息',
        url: 'farming',
        hiddeEdit: true,
        selectSearch: ['type'],
        searchPlaceholder: '请输入计划内容进行搜索',
        theads: ['批次号', '计划日期', '操作类型', '安排人员', '计划内容', '操作用户', '备注'],
        protos: ['serial', 'date', 'type', 'operate_name', 'content', 'user_name', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50],
        typeComponent: [
            {
                component: output
            },
            {
                component: newbuildBtn
            }
        ],
        listComponent: [{
            components: [
                {
                    type: 'select',
                    component: selectSection,
                    options: [
                        {
                            value: '',
                            label: '操作类型'
                        },
                        {
                            value: '施肥',
                            label: '施肥'
                        }
                    ]
                },
                {
                    type: 'date',
                    component: datePick
                }
            ]
        }],
        newComponent: [{
            tab: '新建采收批次',
            components: [{
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: true,
                label: '种植日期',
                placeholder: '',
                rule: null
            },
            {
                name: 'type',
                type: 'select',
                component: null,
                isNull: false,
                label: '操作类型',
                placeholder: '请选择操作类型',
                rule: {required: true, trigger: 'blur'}
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
                name: 'operate_name',
                type: 'text',
                component: null,
                isNull: true,
                label: '安排人员',
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
    // 采收管理
    plantHarvest: [{
        settitle: '采收管理',
        key: 'harvest',
        tab: '采收批次信息',
        url: 'harvest',
        batch: 'cultivateBatch',
        searchPlaceholder: '请输入采收批次号进行搜索',
        theads: ['种植', '批次号', '种植日期', '采收数量', '入库部门', '存放仓库位置', '操作人', '录入人', '备注'],
        protos: ['plantation_name', 'serial', 'date', 'amount', 'department', 'position', 'operate_name', 'user_name', 'memo'],
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
            components: [
                {
                    type: 'select',
                    component: selectSection,
                    options: [
                        {
                            value: '',
                            label: '种植区选择'
                        },
                        {
                            value: '康乐牌',
                            label: '康乐牌'
                        }
                    ]
                },
                {
                    type: 'date',
                    component: datePick
                }
            ]
        }],
        newComponent: [{
            tab: '新建采收批次',
            components: [{
                name: 'plantation_name',
                type: 'text',
                component: null,
                isNull: false,
                label: '种植',
                placeholder: '必填',
                rule: {required: true, message: '请输入种植区', trigger: 'blur'}
            },
            {
                name: 'serial',
                type: 'text',
                component: null,
                isNull: false,
                label: '批次号',
                placeholder: '必填',
                rule: {required: true, message: '请输入批次号', trigger: 'blur'}
            },
            {
                type: 'date',
                component: inputDate,
                isNull: true,
                label: '种植日期',
                placeholder: '',
                rule: ''
            },
            {
                name: 'amount',
                type: 'text',
                component: null,
                isNull: true,
                label: '采收数量',
                placeholder: '',
                rule: null
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
                name: 'operate_name',
                type: 'text',
                component: null,
                isNull: true,
                label: '操作人',
                placeholder: '',
                rule: null
            },
            {
                name: 'user_name',
                type: 'text',
                component: null,
                isNull: true,
                label: '录入人',
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
            components: [{
                name: 'plantation_name',
                type: 'text',
                component: null,
                isNull: false,
                label: '种植',
                placeholder: '必填',
                rule: {required: true, message: '请输入种植区', trigger: 'blur'}
            },
            {
                name: 'serial',
                type: 'text',
                component: null,
                isNull: false,
                label: '批次号',
                placeholder: '必填',
                rule: {required: true, message: '请输入批次号', trigger: 'blur'}
            },
            {
                type: 'date',
                component: inputDate,
                isNull: true,
                label: '种植日期',
                placeholder: '',
                rule: ''
            },
            {
                name: 'amount',
                type: 'text',
                component: null,
                isNull: true,
                label: '采收数量',
                placeholder: '',
                rule: null
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
                name: 'operate_name',
                type: 'text',
                component: null,
                isNull: true,
                label: '操作人',
                placeholder: '',
                rule: null
            },
            {
                name: 'user_name',
                type: 'text',
                component: null,
                isNull: true,
                label: '录入人',
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
    // 果蔬-加工
    vegetableSerial: [{
        settitle: '加工批次管理',
        key: 'pack',
        tab: '加工批次信息',
        url: 'pack',
        paramsIndex: 'plant',
        searchPlaceholder: '请输入加工批次号',
        theads: ['加工批次号', '加工日期', '数量（重量）', '操作人', '录入人', '备注'],
        protos: ['serial', 'date', 'amount', 'operate_name', 'user_name', 'memo'],
        widths: [50, 50, 50, 50, 50, 50],
        moreComponent: [{value: '状态'}],
        typeComponent: [
            {
                component: output
            },
            {
                component: newbuildBtn
            }
        ],
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
            selectUrl2: ['operates', 'id', 'name', true],
            popNumber2: 2,
            components: [{
                type: 'date',
                component: inputDate,
                isNull: true,
                label: '加工日期',
                placeholder: '',
                rule: ''
            },
            {
                name: 'amount',
                type: 'text',
                component: null,
                isNull: true,
                label: '数量（重量）',
                placeholder: '',
                rule: null
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '操作人员',
                placeholder: '请选择人物',
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
            selectUrl2: ['operates', 'id', 'name', true],
            popNumber2: 3,
            components: [{
                name: 'serial',
                type: 'text',
                component: null,
                isNull: false,
                label: '加工批次号',
                placeholder: '必填'
            },
            {
                type: 'date',
                component: inputDate,
                isNull: true,
                label: '加工日期',
                placeholder: '',
                rule: ''
            },
            {
                name: 'amount',
                type: 'text',
                component: null,
                isNull: true,
                label: '数量（重量）',
                placeholder: '',
                rule: null
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '操作人员',
                placeholder: '请选择人物',
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
        key: 'detect_pk',
        tab: '检验检测信息',
        url: 'detect_pk',
        paramsIndex: 'plant',
        changeDataArr: [{result: {0: '不合格', 1: '合格'}}],
        searchPlaceholder: '请输入溯源码搜索',
        theads: ['检测名称', '检测内容', '检测日期', '检测结果', '检测机构', '负责人', '处理方法', '图片报告', '备注'],
        protos: ['name', 'content', 'date', 'result', 'organization', 'operate_name', 'method', 'thumb', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
        moreComponent: [{value: '打印'}],
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
                    type: 'date',
                    component: datePick
                }
            ]
        }],
        newComponent: [{
            tab: '新建检验检测信息',
            hiddenValue: {type: 'plant'},
            selectUrl2: ['operates', 'id', 'name', true],
            popNumber2: 1,
            components: [{
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '检测日期',
                placeholder: '',
                disabled: true,
                rule: {required: true, trigger: 'blur', type: 'date'}
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
                rule: {required: true, trigger: 'blur', type: 'text'},
                options: []
            },
            {
                name: 'result',
                type: 'select',
                component: null,
                isNull: false,
                label: '检测结果',
                placeholder: '请选择检测结果',
                rule: {required: true, trigger: 'blur', type: 'select'},
                options: [{
                    value: 1,
                    label: '合格'
                },
                {
                    value: 0,
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
            }]
        }],
        editComponent: [{
            tab: '编辑检验检测信息',
            selectUrl2: ['operates', 'id', 'name', true],
            popNumber2: 1,
            components: [{
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '检测日期',
                placeholder: '',
                disabled: true,
                rule: {required: true, trigger: 'blur', type: 'date'}
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
                rule: {required: true, trigger: 'blur', type: 'text'},
                options: []
            },
            {
                name: 'result',
                type: 'select',
                component: null,
                isNull: false,
                label: '检测结果',
                placeholder: '请选择检测结果',
                rule: {required: true, trigger: 'blur', type: 'select'},
                options: [{
                    value: 1,
                    label: '合格'
                },
                {
                    value: 0,
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
            }]
        }]
    }],
    // 果蔬-产品溯源码
    vegetableTrace: [{
        settitle: '产品溯源管理',
        key: 'code',
        tab: '产品溯源信息',
        url: 'code',
        paramsIndex: 'plant',
        selectSearch: ['products.id'],
        selectValueId: ['product_id', 'product_name', true],
        selectDefault: {value: '', label: '请选择产品'},
        searchPlaceholder: '请输入溯源码搜索',
        theads: ['加工批次号', '产品溯源码', '产品名称', '生产日期', '溯源次数', '备注信息'],
        protos: ['serial', 'code', 'product_name', 'date', 'time', 'memo'],
        widths: [50, 50, 50, 50, 50],
        moreComponent: [{value: '打印'}],
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
                    type: 'select',
                    component: selectSection,
                    options: [
                    ]
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
            selectUrl2: ['products', 'id', 'name', true],
            popNumber2: 1,
            components: [{
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '加工日期',
                placeholder: '',
                disabled: true,
                rule: {required: true, trigger: 'blur', type: 'date'}
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '产品',
                placeholder: '请选择产品',
                rule: {required: true, trigger: 'blur', type: 'number'},
                options: []
            },
            {
                name: 'number',
                type: 'text',
                component: null,
                isNull: false,
                label: '生成数量',
                placeholder: '请填写数量',
                rule: {required: true, trigger: 'blur', type: 'number'}
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
            tab: '编辑产品溯源信息',
            components: [{
                name: 'code',
                type: 'text',
                component: null,
                isNull: false,
                label: '追溯编码',
                placeholder: '必填',
                rule: {required: true, message: '请输入溯源编码', trigger: 'blur'}
            },
            {
                name: 'harvest_serial',
                type: 'text',
                component: null,
                isNull: false,
                label: '加工批次',
                placeholder: '必填',
                rule: {required: true, message: '请输入加工批次', trigger: 'blur'}
            },
            {
                name: 'product_id',
                type: 'text',
                component: null,
                isNull: true,
                label: '追溯次数',
                placeholder: '',
                rule: null
            },
            {
                type: 'date',
                component: inputDate,
                isNull: true,
                label: '加工日期',
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
                rule: null
            }]
        }]
    }],
    // 物流基础信息
    Logisticbase: [
        {
            settitle: '基础信息管理',
            key: 'logistic',
            tab: '物流公司信息',
            url: 'logistic',
            searchPlaceholder: '请输入物流公司进行搜索',
            theads: ['物流公司名称', '联系人', '联系电话', '地址', '备注信息'],
            protos: ['name', 'contacts', 'phone', 'address', 'memo'],
            widths: [50, 50, 50, 50, 50],
            listComponent: [],
            typeComponent: [
                {
                    component: importBtn
                },
                {
                    component: output
                },
                {
                    component: newbuildBtn
                }
            ],
            newComponent: [{
                tab: '新建物流公司信息',
                components: [{
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '物流公司名称',
                    placeholder: '必填',
                    rule: {required: true, message: '请输入物流公司名称', trigger: 'blur'}
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
                components: [{
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '物流公司名称',
                    placeholder: '必填',
                    rule: {required: true, message: '请输入物流公司名称', trigger: 'blur'}
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
            tab: '车辆信息',
            url: 'vehicle',
            searchPlaceholder: '请输入车牌号进行搜索',
            theads: ['车辆品牌', '车辆号码', '核载吨位', '备注信息'],
            protos: ['brand', 'number', 'tonnage', 'memo'],
            widths: [50, 50, 50, 50],
            typeComponent: [
                {
                    component: importBtn
                },
                {
                    component: output
                },
                {
                    component: newbuildBtn
                }
            ],
            listComponent: [{
                components: [{
                    type: 'select',
                    component: selectSection,
                    options: [{
                        value: '',
                        label: '车辆品牌'
                    },
                    {
                        value: '东风',
                        label: '东风'
                    }]
                }]
            }],
            newComponent: [{
                tab: '新建车辆信息',
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
                    rule: {required: true, message: '请输入车辆号码', trigger: 'blur'}
                },
                {
                    name: 'tonnage',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '核载吨位',
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
                tab: '编辑车辆信息',
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
                    rule: {required: true, message: '请输入车辆号码', trigger: 'blur'}
                },
                {
                    name: 'tonnage',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '核载吨位',
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
            key: 'driver',
            tab: '驾驶员信息',
            url: 'driver',
            searchPlaceholder: '请输入司机姓名进行搜索',
            theads: ['驾驶员姓名', '联系电话', '取得驾照日期', '出生日期', '驾照类型(A1、C2...)', '备注信息'],
            protos: ['name', 'phone', 'driver', 'birth', 'type', 'memo'],
            widths: [50, 50, 50, 50, 50, 50],
            listComponent: [],
            typeComponent: [
                {
                    component: importBtn
                },
                {
                    component: output
                },
                {
                    component: newbuildBtn
                }],
            newComponent: [{
                tab: '新建司机信息',
                components: [{
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '驾驶员姓名',
                    placeholder: '必填',
                    rule: {required: true, message: '请输入驾驶员姓名', trigger: 'blur'}
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
                    name: 'driver',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '驾照类型',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: true,
                    label: '出生日期',
                    placeholder: '',
                    rule: ''
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: true,
                    label: '取得驾照时间',
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
                    rule: null
                }]
            }],
            editComponent: [{
                tab: '编辑司机信息',
                components: [{
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '驾驶员姓名',
                    placeholder: '必填',
                    rule: {required: true, message: '请输入驾驶员姓名', trigger: 'blur'}
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
                    name: 'driver',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '驾照类型',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: true,
                    label: '出生日期',
                    placeholder: '',
                    rule: ''
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: true,
                    label: '取得驾照时间',
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
                    rule: null
                }]
            }]
        }
    ],
    // 物流批次管理
    logisticSerial: [{
        settitle: '物流批次管理',
        key: 'delivery',
        tab: '物流批次信息',
        url: 'delivery',
        selectSearch: ['deliveries.transportable_type'],
        changeDataArr: [{transportable_type: { 'self': '自运', 'consign': '托运', 'selve': '自提' }}],
        searchPlaceholder: '请输入货物名称进行搜索',
        theads: ['物流批次号', '物流日期', '货物名称', '运输方式', '操作人员', '备注'],
        protos: ['serial', 'datetime', 'name', 'transportable_type', 'operate_name', 'memo'],
        widths: [50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        listComponent: [{
            components: [{
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
            selectUrl2: ['operates', 'id', 'name', true],
            popNumber2: 2,
            components: [{
                name: 'datetime',
                type: 'date',
                component: inputDate,
                isNull: true,
                label: '物流日期',
                rule: {required: true}
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: true,
                label: '货物名称',
                placeholder: '',
                rule: {required: true}
            },
            {
                name: 'operate',
                type: 'select',
                component: null,
                isNull: true,
                label: '操作人员',
                rule: {required: true},
                options: []
            },
            {
                name: 'transportable_type',
                type: 'select',
                component: null,
                isNull: false,
                label: '运输方式',
                placeholder: '必填',
                rule: {required: true},
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
                name: 'memo',
                type: 'textarea',
                component: null,
                isNull: true,
                label: '备注信息',
                placeholder: '',
                rule: null
            }]
        }],
        moreComponent: [{value: '更改状态'}],
        editComponent: [{
            tab: '编辑物流批次信息',
            components: [{
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '物流批次号',
                placeholder: '必填',
                rule: {required: true}
            },
            {
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: true,
                label: '物流日期',
                rule: {required: true}
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: true,
                label: '货物名称',
                rule: {required: true}
            },
            {
                name: 'number',
                type: 'text',
                component: null,
                isNull: true,
                label: '数量',
                rule: null
            },
            {
                name: 'transportable_type',
                type: 'text',
                component: null,
                isNull: true,
                label: '运输方式',
                rule: null
            },
            {
                name: 'operate_name',
                type: 'text',
                component: null,
                isNull: true,
                label: '操作人员',
                rule: null
            },
            {
                name: 'number',
                type: 'text',
                component: null,
                isNull: true,
                label: '物流状态',
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
    // 销售产品库
    saleProduct: [
        {
            settitle: '销售商品库管理',
            key: 'storage',
            tab: '商品入库信息',
            url: 'storage',
            searchPlaceholder: '请输入商品名称进行搜索',
            theads: ['商品名称', '入库数量', '销售数量', '入库库存', '备注'],
            protos: ['plan_type_name', 'name', 'content', 'name', 'memo'],
            widths: [50, 50, 50, 50, 50],
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
                    components: 'datePick'
                }]
            }]
        },
        {
            settitle: '销售商品库管理',
            key: 'vehicle',
            tab: '商品加工信息',
            url: 'vehicle',
            searchPlaceholder: '请输入车牌号进行搜索',
            theads: ['商品名称', '加工数量', '销售数量', '加工库存', '备注'],
            protos: ['plan_type_name', 'name', 'content', 'content', 'name'],
            widths: [50, 50, 50, 50, 50],
            listComponent: [],
            typeComponent: [
                {
                    component: output
                },
                {
                    component: newbuildBtn
                }]
        }
    ],
    // 销售-入库
    saleInput: [
        {
            settitle: '销售入库管理',
            key: 'storage0',
            tab: '销售入库信息(平台)',
            url: 'storage',
            selectSearch: ['products.id'],
            selectValueId: ['product_id', 'product_name', true],
            selectDefault: {value: '', label: '请选择商品'},
            paramsIndex: 0,
            changeDataArr: [{type: { 0: '平台', 1: '非平台' }}],
            searchPlaceholder: '请输入批次号进行搜索',
            theads: ['入库批次号', '入库日期', '供货商', '商品名称', '数量', '入库人', '录入人', '备注信息'],
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
                hiddenValue: {type: 0},
                selectUrl2: ['products', 'id', 'name', true],
                popNumber2: 1,
                components: [{
                    name: 'datetime',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '入库日期时间',
                    placeholder: '',
                    disabled: true,
                    rule: {required: true, trigger: 'blur', type: 'date'}
                },
                {
                    name: 'product_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '商品',
                    placeholder: '请选择商品',
                    rule: {required: true, trigger: 'blur', type: 'number'},
                    options: []
                },
                {
                    name: 'supplier_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '供货商',
                    placeholder: '请选择供货商',
                    rule: {required: true, trigger: 'blur', type: 'number'},
                    options: []
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '操作人员',
                    placeholder: '请选择人物',
                    rule: {required: true, trigger: 'blur', type: 'number'},
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
            editComponent: [{
                tab: '编辑入库信息',
                hiddenValue: {type: 0},
                selectUrl2: ['products', 'id', 'name', true],
                popNumber2: 1,
                components: [{
                    name: 'datetime',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '入库日期时间',
                    placeholder: '',
                    disabled: true,
                    rule: {required: true, trigger: 'blur', type: 'date'}
                },
                {
                    name: 'product_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '商品',
                    placeholder: '请选择商品',
                    rule: {required: true, trigger: 'blur', type: 'number'},
                    options: []
                },
                {
                    name: 'supplier_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '供货商',
                    placeholder: '请选择供货商',
                    rule: {required: true, trigger: 'blur', type: 'number'},
                    options: []
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '操作人员',
                    placeholder: '请选择人物',
                    rule: {required: true, trigger: 'blur', type: 'number'},
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
        },
        {
            settitle: '销售入库管理',
            key: 'storage1',
            tab: '销售入库信息(非平台)',
            url: 'storage',
            selectSearch: ['products.id'],
            selectValueId: ['product_id', 'product_name', true],
            selectDefault: {value: '', label: '请选择商品'},
            paramsIndex: 1,
            searchPlaceholder: '请输入批次号进行搜索',
            theads: ['入库批次号', '入库日期', '供货商', '商品名称', '数量', '入库人', '录入人', '备注信息'],
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
                selectUrl2: ['products', 'id', 'name', true],
                popNumber2: 1,
                components: [{
                    name: 'datetime',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '入库日期时间',
                    placeholder: '',
                    disabled: true,
                    rule: {required: true, trigger: 'blur', type: 'date'}
                },
                {
                    name: 'product_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '商品',
                    placeholder: '请选择商品',
                    rule: {required: true, trigger: 'blur', type: 'number'},
                    options: []
                },
                {
                    name: 'supplier_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '供货商',
                    placeholder: '请选择供货商',
                    rule: {required: true, trigger: 'blur', type: 'number'},
                    options: []
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '操作人员',
                    placeholder: '请选择人物',
                    rule: {required: true, trigger: 'blur', type: 'number'},
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
            editComponent: [{
                tab: '编辑入库信息',
                hiddenValue: {type: 1},
                selectUrl2: ['products', 'id', 'name', true],
                popNumber2: 1,
                components: [{
                    name: 'datetime',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '入库日期时间',
                    placeholder: '',
                    disabled: true,
                    rule: {required: true, trigger: 'blur', type: 'date'}
                },
                {
                    name: 'product_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '商品',
                    placeholder: '请选择商品',
                    rule: {required: true, trigger: 'blur', type: 'number'},
                    options: []
                },
                {
                    name: 'supplier_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '供货商',
                    placeholder: '请选择供货商',
                    rule: {required: true, trigger: 'blur', type: 'number'},
                    options: []
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '操作人员',
                    placeholder: '请选择人物',
                    rule: {required: true, trigger: 'blur', type: 'number'},
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
        searchPlaceholder: '请输入销售订单号',
        theads: ['订单号', '订单日期', '物流批次号', '客户名称', '金额', '数量', '销售员', '录入人', '备注'],
        protos: ['serial', 'datetime', 'delivery_serial', 'client_name', 'money', 'amount', 'operate_name', 'user_name', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
        typeComponent: [
            {
                component: output
            },
            {
                component: newbuildBtn
            }],
        newComponent: [{
            tab: '新建订单信息',
            hiddenValue: {type: 1},
            selectUrl2: ['clients', 'id', 'name', true],
            popNumber2: 2,
            components: [{
                name: 'datetime',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '订单日期时间',
                placeholder: '',
                disabled: true,
                rule: {required: true, trigger: 'blur', type: 'date'}
            },
            {
                name: 'delivery_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '物流订单',
                placeholder: '请选择物流订单',
                rule: {required: true, trigger: 'blur', type: 'number'},
                options: []
            },
            {
                name: 'client_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '客户',
                placeholder: '请选择客户',
                rule: {required: true, trigger: 'blur', type: 'number'},
                options: []
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '销售员',
                placeholder: '请选择人物',
                rule: {required: true, trigger: 'blur', type: 'number'},
                options: []
            },
            {
                name: 'money',
                type: 'text',
                component: null,
                isNull: false,
                label: '销售金额',
                placeholder: '请输入金额',
                rule: {required: true, trigger: 'blur', type: 'bumber'}
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
    // 公司
    systemCompany: [{
        settitle: '公司信息管理',
        key: 'planManage',
        tab: '销售订单信息',
        url: 'plan',
        theads: ['公司网站名称', '公司简称', '统一社会信用代码', '经营范围', '负责人/法人', '详细地址', '电话', '传真', '员工总数', '公司编码', '公司网站', '公司logo', '备注'],
        protos: ['plan_type_name', 'name', 'content'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
        listComponent: []
    }],
    // 用户管理
    systemUser: [{
        settitle: '用户管理',
        key: 'planManage',
        tab: '公司用户信息',
        url: 'user',
        searchPlaceholder: '请输入用户名进行搜索',
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
            checkNumber: 0,
            components: [{
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '用户名',
                placeholder: '请输入用户名',
                rule: [{required: true, trigger: 'blur'}, {validator: validate2.reCheck}]
            },
            {
                name: 'email',
                type: 'text',
                component: null,
                isNull: false,
                label: '邮箱',
                placeholder: '请输入邮箱',
                rule: [{required: true, trigger: 'blur'}, {validator: validate2.reCheck}]
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
                rule: {required: false, trigger: 'blur', type: 'number'}
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
        editComponent: [{
            tab: '新建用户信息',
            hiddenValue: {type: 0},
            checkNumber: 0,
            components: [{
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '用户名',
                placeholder: '请输入用户名',
                rule: [{required: true, trigger: 'blur'}, {validator: validate2.reCheck}]
            },
            {
                name: 'email',
                type: 'text',
                component: null,
                isNull: false,
                label: '邮箱',
                placeholder: '请输入邮箱',
                rule: [{required: true, trigger: 'blur'}, {validator: validate2.reCheck}]
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
                rule: {required: false, trigger: 'blur', type: 'number'}
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
    }],
    // 系统日志
    systemLog: [{
        settitle: '系统日志',
        key: 'log',
        tab: '日志信息',
        url: 'log',
        searchPlaceholder: '请输入内容进行搜索',
        theads: ['模块名称', '操作', '内容', '日期时间', '客户端', '公司', '用户'],
        protos: ['plan_type_name', 'name', 'content', 'name', 'content', 'name', 'content'],
        widths: [50, 50, 50, 50, 50, 50, 50],
        listComponent: [{
            components: [{
                type: 'select',
                component: selectSection,
                options: [{
                    value: '',
                    label: '操作日志'
                },
                {
                    value: '登录日志',
                    label: '登录日志'
                }]
            },
            {
                type: 'date',
                components: 'datePick'
            }
            ]
        }]
    }],
    // 报表
    systemReport: [{
        settitle: '报表预览',
        key: 'planManage',
        tab: '销售订单信息',
        url: 'plan',
        theads: ['模块名称', '操作', '内容', '日期时间', '客户端', '公司', '用户'],
        protos: ['plan_type_name', 'name', 'content'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
        listComponent: [],
        moreComponent: [{value: '打印'}]
    }],
    // 运营-权限
    rightsOperate: [{
        settitle: '权限管理',
        key: 'planManage',
        tab: '权限管理',
        url: 'plan',
        theads: ['分类', '名称', '展示名称', '备注'],
        protos: ['plan_type_name', 'name', 'content', 'memo'],
        widths: [50, 50, 50, 50],
        listComponent: []
    },
    {
        settitle: '权限管理',
        key: 'planManage',
        tab: '权限管理',
        url: 'plan',
        theads: ['所属分类', '名称', '展示名称', '资源', '备注'],
        protos: ['plan_type_name', 'name', 'content', 'content', 'memo'],
        widths: [50, 50, 50, 50, 50],
        listComponent: []
    }],
    // 运营-入驻单位
    settleOperate: [{
        settitle: '入驻单位管理',
        key: 'planManage',
        tab: '入驻单位信息',
        url: 'plan',
        theads: ['公司编码', '公司logo', '展示名称', '备注'],
        protos: ['plan_type_name', 'name', 'content', 'memo'],
        widths: [50, 50, 50, 50],
        listComponent: []
    }],
    // 运营-用户反馈
    usersOperate: [{
        settitle: '用户反馈管理',
        key: 'planManage',
        tab: '用户反馈信息',
        url: 'plan',
        theads: ['所属公司', '用户名', '姓名', '联系方式', '提交日期', '评价星级', '不足', '问题描述'],
        protos: ['plan_type_name', 'name', 'content', 'memo', 'plan_type_name', 'name', 'content', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50],
        listComponent: []
    }]
}
