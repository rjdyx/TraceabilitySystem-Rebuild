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
import Qrcode from '../../components/public/Qrcode.vue'

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
            selectInit: [{value: '', label: '选择操作人分类'}],
            checkNumber: [1],
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
            tab: '编辑人员档案信息',
            selectUrl: [['category', 'operate', 'category_id', 'category_name', true]],
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
            selectInit: [{value: '', label: '选择专家分类'}],
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
                label: '出生日期',
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
                label: '出生日期',
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
            checkNumber: [1],
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
            checkNumber: [1],
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
            selectInit: [{value: '', label: '选择产品分类'}],
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
            checkNumber: [1],
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
    // 基础信息管理
    baseManage: [
        {
            settitle: '养殖基础信息管理',
            key: 'farm',
            tab: '养殖场信息',
            url: 'farm',
            searchPlaceholder: '请输入养殖场进行搜索',
            search: ['query_text', 'name'],
            theads: ['养殖场名称', '养殖面积', '负责人', '养殖畜禽种类', '养殖规模', '详细地址', '备注信息'],
            protos: ['name', 'area_unit', 'principal', 'kind', 'scale', 'address', 'memo'],
            selectSearch: ['farm.name'],
            widths: [50, 50, 50, 50, 50, 50, 50],
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
<<<<<<< HEAD
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
=======
>>>>>>> 281f89a2d78b3ac5629cb652d26693e5225826c3
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
<<<<<<< HEAD
                    name: 'img',
                    type: 'file',
                    component: null,
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
=======
>>>>>>> 281f89a2d78b3ac5629cb652d26693e5225826c3
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
            url: 'farmcd',
            searchPlaceholder: '请输入养殖区进行搜索',
            selectValueId: [['pid', 'parent_name', true]],
            selectDefault: [{value: '', label: '选择养殖场'}],
            theads: ['所属养殖场', '养殖区名称', '养殖面积', '负责人', '养殖畜禽种类', '养殖规模', '详细地址', '备注信息'],
            protos: ['parent_name', 'name', 'area_unit', 'principal', 'kind', 'scale', 'address', 'memo'],
            selectSearch: ['farmcds.pid'],
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
                tab: '新建养殖区信息',
                selectUrl: [['farm', 'farmcd', 'pid', 'farm_name', true]],
                selectInit: [{value: '', label: '选择养殖场'}],
                checkNumber: [1],
                popNumber: [0],
                hasImg: true,
                components: [{
                    // 场名
                    name: 'pid',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '养殖场',
                    placeholder: '请选择养殖场',
                    rule: {required: true, trigger: 'blur', type: 'number'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '养殖区名称',
                    placeholder: '请输入养殖区名称',
                    rule: [{required: true, message: '请输入养殖区名称', trigger: 'blur'}, {validator: validate2.reCheck}]
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
<<<<<<< HEAD
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
=======
>>>>>>> 281f89a2d78b3ac5629cb652d26693e5225826c3
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
                checkNumber: [1],
                popNumber: [0],
                hasImg: true,
                components: [{
                    // 场名
                    name: 'parent_name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '养殖场',
                    placeholder: '请选择养殖场',
                    rule: {required: true, trigger: 'blur', type: 'number'},
                    disabled: true
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '养殖区名称',
                    placeholder: '请输入养殖区名称',
                    rule: [{required: true, message: '请输入养殖区名称', trigger: 'blur'}, {validator: validate2.reCheck}]
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
<<<<<<< HEAD
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
=======
>>>>>>> 281f89a2d78b3ac5629cb652d26693e5225826c3
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
                selectInit: [{value: '', label: '选择养殖区'}],
                checkNumber: [1],
                popNumber: [0],
                hasImg: true,
                components: [{
                    // 场名
                    name: 'farm_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '所属养殖区',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur', type: 'number'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '圈舍名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入圈舍名称', trigger: 'blur'}, {validator: validate2.reCheck}]
                },
                {
                    name: 'area',
                    type: 'textSelect',
                    component: inputTextSelect,
                    isNull: false,
                    label: '圈舍面积',
                    placeholder: '请填写数字（必填）',
                    rule: {validator: validate2.number},
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
                checkNumber: [1],
                popNumber: [0],
                hasImg: true,
                components: [{
                    // 场名
                    name: 'farm_name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '所属养殖区',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur', type: 'number'},
                    options: [],
                    disabled: true
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '圈舍名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入圈舍名称', trigger: 'blur'}, {validator: validate2.reCheck}]
                },
                {
                    name: 'area',
                    type: 'textSelect',
                    component: inputTextSelect,
                    isNull: false,
                    label: '圈舍面积',
                    placeholder: '请填写数字（必填）',
                    rule: {validator: validate2.number},
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
                selectUrl: [['category', 'operate', 'category_id', 'category_name', true]],
                selectInit: [{value: '', label: '选择畜禽分类'}],
                popNumber: [0],
                components: [{
                    name: 'category_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '畜禽分类',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur', type: 'number'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '畜禽名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入畜禽名称', trigger: 'blur'}, {validator: validate2.reCheck}]
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
                    rule: null
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '',
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
                selectUrl: [['category', 'operate', 'category_id', 'category_name', true]],
                popNumber: [0],
                components: [{
                    name: 'category_name',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '畜禽分类',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur', type: 'number'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '畜禽名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入畜禽名称', trigger: 'blur'}, {validator: validate2.reCheck}]
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
                    rule: null
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '',
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
            url: 'fodder',
            searchPlaceholder: '请输入饲料名称',
            selectValueId: [['category_id', 'category_name', true]],
            selectDefault: [{value: '', label: '选择饲料分类'}],
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
                    rule: {required: true, trigger: 'blur', type: 'number'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '饲料名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入饲料名称', trigger: 'blur'}, {validator: validate2.reCheck}]
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
<<<<<<< HEAD
                    placeholder: '请输入11位的手机号（固话用-隔开）',
                    rule: {validator: validate2.phone, trigger: 'blur'}
=======
                    placeholder: '',
                    rule: { validator: validate2.phone }
>>>>>>> 281f89a2d78b3ac5629cb652d26693e5225826c3
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
                popNumber: [0],
                hasImg: true,
                components: [{
                    name: 'category_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '饲料类别',
                    placeholder: '请输入饲料类别',
                    rule: {required: true, trigger: 'blur', type: 'number'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '饲料名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入饲料名称', trigger: 'blur'}, {validator: validate2.reCheck}]
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
<<<<<<< HEAD
                    placeholder: '请输入11位的手机号（固话用-隔开）',
                    rule: {validator: validate2.phone, trigger: 'blur'}
=======
                    placeholder: '',
                    rule: { validator: validate2.phone }
>>>>>>> 281f89a2d78b3ac5629cb652d26693e5225826c3
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
                    rule: {required: true, trigger: 'blur', type: 'number'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '添加剂名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入添加剂名称', trigger: 'blur'}, {validator: validate2.reCheck}]
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
                    rule: {required: true, trigger: 'blur'}
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
                    rule: {required: true, trigger: 'blur'}
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
                popNumber: [0],
                checkNumber: [1],
                components: [{
                    name: 'category_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '添加剂类别',
                    placeholder: '请选择添加剂类别',
                    rule: {required: true, trigger: 'blur', type: 'number'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '添加剂名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入添加剂名称', trigger: 'blur'}, {validator: validate2.reCheck}]
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: true,
                    label: '生产日期',
                    placeholder: '选择生产日期',
                    rule: {required: true, trigger: 'blur'}
                },
                {
                    name: 'expiration_date',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '保质期',
                    placeholder: '如 12个月',
                    rule: {required: true, trigger: 'blur'}
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
                    rule: {required: true, trigger: 'blur'}
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
            searchPlaceholder: '请输入兽药名称',
            selectValueId: [['category_id', 'category_name', true]],
            selectDefault: [{value: '', label: '选择兽药类型'}],
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
                tab: '新建兽药档案',
                selectUrl: [['category', 'addition', 'category_id', 'category_name', true]],
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
                    placeholder: '请选择兽药类别',
                    rule: {required: true, trigger: 'blur', type: 'number'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '兽药名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入兽药名称', trigger: 'blur'}, {validator: validate2.reCheck}]
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
                tab: '编辑兽药档案',
                selectUrl: [['category', 'addition', 'category_id', 'category_name', true]],
                popNumber: [0],
                hasImg: true,
                checkNumber: [1],
                components: [{
                    name: 'category_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '畜药类别',
                    placeholder: '请选择兽药类别',
                    rule: {required: true, trigger: 'blur', type: 'number'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '兽药名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入兽药名称', trigger: 'blur'}, {validator: validate2.reCheck}]
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
                    name: 'category_id',
                    value: '',
                    component: selectSection,
                    options: []
                }]
            }]
        }
    ],
    // 养殖批次管理
    serialManage: [{
        settitle: '养殖批次管理',
        key: 'breed',
        tab: '养殖批次信息',
        url: 'breed',
        // 链接批次信息模块数据的桥（养殖批次详情）
        batch: 'breedBatch',
        searchPlaceholder: '请输入养殖批次号进行搜索',
        selectValueId: [['beast_id', 'beast_name', true]],
        selectDefault: [{value: '', label: '请选择畜禽'}],
        theads: ['批次号', '养殖区', '圈舍', '畜禽', '开始日期', '数量', '养殖方式', '养殖人', '操作人', '录入人', '备注'],
        protos: ['serial', 'farm_name', 'area_name', 'beast_name', 'start_date', 'amount', 'way', 'operate', 'operate_name', 'user_name', 'memo'],
        selectSearch: ['breeds.beast_id'],
        widths: [60, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        newComponent: [{
            tab: '新建养殖批次',
            selectUrl2: [['areas', 'id', 'name', true], ['beasts', 'id', 'name', true], ['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '选择圈舍'}, {value: '', label: '选择畜禽'}, {value: '', label: '选择养殖人'}],
            popNumber2: [0, 1, 2],
            components: [{
                name: 'area_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '圈舍',
                placeholder: '请选择圈舍',
                rule: {required: true, trigger: 'blur', type: 'number'},
                options: []
            },
            {
                name: 'beast_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '畜禽名称',
                placeholder: '请选择畜禽',
                rule: {required: true, trigger: 'blur', type: 'number'},
                options: []
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '操作人',
                placeholder: '请选择操作人',
                rule: {required: true, trigger: 'blur', type: 'number'},
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
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'operate',
                type: 'text',
                component: null,
                isNull: true,
                label: '养殖人',
                placeholder: '请填写养殖人',
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
            tab: '编辑养殖批次',
            selectUrl2: [['areas', 'id', 'name', true], ['beasts', 'id', 'name', true], ['operates', 'id', 'name', true]],
            popNumber2: [1, 2, 3],
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
                name: 'area_name',
                type: 'text',
                component: null,
                isNull: false,
                label: '圈舍',
                placeholder: '请选择圈舍',
                rule: {required: true, trigger: 'blur', type: 'number'},
                options: [],
                disabled: true
            },
            {
                name: 'beast_name',
                type: 'text',
                component: null,
                isNull: false,
                label: '畜禽名称',
                placeholder: '请选择畜禽',
                rule: {required: true, trigger: 'blur', type: 'number'},
                options: [],
                disabled: true
            },
            {
                name: 'operate_name',
                type: 'select',
                component: null,
                isNull: true,
                label: '操作人',
                placeholder: '请选择操作人',
                rule: {required: true, trigger: 'blur', type: 'number'},
                options: []
            },
            {
                name: 'start_date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '开始日期',
                placeholder: '',
                rule: [{required: true}, {validator: validate2.reDate, message: '请输入种植日期'}]
            },
            {
                name: 'way',
                type: 'text',
                component: null,
                isNull: true,
                label: '养殖方式',
                placeholder: '请填写养殖方式',
                rule: null
            },
            {
                name: 'operate',
                type: 'text',
                component: null,
                isNull: true,
                label: '养殖人',
                placeholder: '请填写养殖人',
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
                name: 'beast_id',
                value: '',
                options: []
            },
            {
                type: 'date',
                component: 'datePick'
            }]
        }]
    }],
    //  饲料使用管理
    feedManage: [{
        settitle: '饲料使用管理',
        key: 'fodderuse',
        tab: '饲料使用信息',
        url: 'fodderuse',
        // 链接批次信息模块数据的桥（养殖批次详情）
        batch: 'feedBatch',
        searchPlaceholder: '请输入喂养方式进行搜索',
        selectValueId: [['fodder_id', 'fodder_name', true]],
        selectDefault: [{value: '', label: '饲料选择'}],
        selectSearch: ['fodderuse.fodder_id'],
        theads: ['饲料批次号', '饲料使用日期', '饲料名称', '饲料添加剂', '喂养方式', '操作人员', '平均喂养量', '备注信息'],
        protos: ['serial', 'date', 'fodder_name', 'addition_name', 'way', 'operate_name', 'amount_unit', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
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
            components: [{
                name: 'fodder_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '饲料名称',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number'},
                options: []
            },
            {
                name: 'addition_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '饲料添加剂',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number'},
                options: []
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '饲养员',
                placeholder: '请选择饲养员',
                rule: {required: true, trigger: 'blur', type: 'number'},
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
                type: 'text',
                component: null,
                isNull: true,
                label: '平均喂养量',
                placeholder: '',
                rule: [{required: true, trigger: 'blur', message: '请输入饲养量'}, {validator: validate2.reInteger}],
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
            popNumber2: [1, 2, 3],
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
                rule: {required: true, trigger: 'blur', type: 'number'},
                options: []
            },
            {
                name: 'addition_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '饲料添加剂',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number'},
                options: []
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '饲养员',
                placeholder: '请选择饲养员',
                rule: {required: true, trigger: 'blur', type: 'number'},
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
                type: 'text',
                component: null,
                isNull: true,
                label: '平均喂养量',
                placeholder: '',
                rule: [{required: true, message: '请输入饲养量'}, {validator: validate2.reInteger}]
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
    // 畜禽病疫管理
    plagueManage: [{
        settitle: '病疫管理',
        key: 'disease',
        tab: '病疫信息',
        url: 'disease',
        // 链接批次信息模块数据的桥（养殖批次详情）
        batch: 'plagueBatch',
        searchPlaceholder: '请输入病疫批次号进行搜索',
        selectValueId: [['drug_id', 'drug_name', true]],
        selectDefault: [{value: '', label: '兽药选择'}],
        selectSearch: ['disease.drug_id'],
        theads: ['病疫批次号', '兽药名称', '用药日期', '病情描述', '专家', '平均用药量', '治疗方式', '备注'],
        protos: ['serial', 'drug_name', 'date', 'description', 'expert_name', 'amount_unit', 'way', 'memo'],
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
<<<<<<< HEAD
                components: [
                    {
                        name: 'date',
                        type: 'date',
                        component: inputDate,
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
                            label: '请选择兽药'
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
                        label: '病疫图片',
                        placeholder: '',
                        rule: null
=======
                selectUrl2: [['drugs', 'id', 'name', true], ['operates', 'id', 'name', true], ['experts', 'id', 'name', true]],
                selectInit2: [{value: '', label: '兽药选择'}, {value: '', label: '施药人员选择'}, {value: '', label: '专家选择'}],
                popNumber2: [0, 3, 4],
                components: [{
                    name: 'drug_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '兽药名称',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择兽药'},
                    options: []
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '用药日期',
                    placeholder: '',
                    rule: [{required: true, message: '请输入用药日期'}, {validator: validate2.reDate, message: '请输入用药日期'}]
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
                    name: 'operate_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '施药人员',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择施药人员'},
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
                    name: 'amount',
                    type: 'textSelect',
                    component: inputTextSelect,
                    isNull: false,
                    label: '平均施药量',
                    placeholder: '请输入正确的数字（必填）',
                    rule: [{required: true, message: '请输入平均施药量'}, {validator: validate2.reInteger}],
                    options: [{
                        value: 'kg/只',
                        label: 'kg/只'
                    },
                    {
                        value: 'kg/头',
                        label: 'kg/头'
>>>>>>> 281f89a2d78b3ac5629cb652d26693e5225826c3
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
        editComponent: [
            {
                tab: '新建病疫情信息',
<<<<<<< HEAD
                components: [
                    {
                        name: 'serial',
                        type: 'text',
                        component: null,
                        isNull: false,
                        label: '病疫批次号',
                        placeholder: '',
                        rule: {required: true, trigger: 'blur'},
                        disabled: true
                    },
                    {
                        name: 'date',
                        type: 'date',
                        component: inputDate,
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
                            label: '请选择兽药'
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
                        label: '病疫图片',
                        placeholder: '',
                        rule: null
=======
                selectUrl2: [['drugs', 'id', 'name', true], ['operates', 'id', 'name', true], ['experts', 'id', 'name', true]],
                selectInit2: [{value: '', label: '兽药选择'}, {value: '', label: '施药人员选择'}, {value: '', label: '专家选择'}],
                popNumber2: [1, 4, 5],
                components: [{
                    name: 'serial',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '病疫批次号',
                    placeholder: '',
                    disabled: true,
                    rule: null
                },
                {
                    name: 'drug_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '兽药名称',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择兽药'},
                    options: []
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '用药日期',
                    placeholder: '',
                    rule: [{required: true, message: '请输入用药日期'}, {validator: validate2.reDate, message: '请输入用药日期'}]
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
                    name: 'operate_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '施药人员',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择施药人员'},
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
                    name: 'amount',
                    type: 'textSelect',
                    component: inputTextSelect,
                    isNull: false,
                    label: '平均施药量',
                    placeholder: '请输入正确的数字（必填）',
                    rule: [{required: true, message: '请输入平均施药量'}, {validator: validate2.reInteger}],
                    options: [{
                        value: 'kg/只',
                        label: 'kg/只'
                    },
                    {
                        value: 'kg/头',
                        label: 'kg/头'
>>>>>>> 281f89a2d78b3ac5629cb652d26693e5225826c3
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
                name: 'disease.drug_id',
                value: '',
                type: 'select',
                component: selectSection,
                options: []
            },
            {
                type: 'date',
                component: 'datePick'
            }]
        }]
    }],
    // 畜禽检疫管理
    detectionManage: [{
        settitle: '检疫管理',
        key: 'detection',
        tab: '检疫信息',
        url: 'detection',
        // 链接批次信息模块数据的桥（养殖批次详情）
        batch: 'detectionBatch',
        searchPlaceholder: '请输入检疫项目名称进行',
        changeDataArr: [{result: {0: '不合格', 1: '合格'}}],
        selectSearch: ['detection.organization'],
        theads: ['检疫批次号', '检疫日期', '检疫项目名称', '检疫内容', '检疫结果', '专家', '操作人员', '审批人', '检疫报告图片', '备注'],
        protos: ['serial', 'date', 'name', 'content', 'result', 'expert_name', 'operate_name', 'check', 'img', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        newComponent: [{
            tab: '新建检疫信息',
            selectUrl2: [['experts', 'id', 'name', true], ['operates', 'id', 'name', true]],
            popNumber2: [3, 4],
            components: [{
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '检疫日期',
                placeholder: '',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'organization',
                type: 'text',
                component: null,
                isNull: false,
                label: '检疫机构',
                placeholder: '',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '检疫项目名称',
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
                label: '检疫报告图片',
                placeholder: '',
                rule: null
            }
            ]
        }],
        editComponent: [{
            tab: '编辑检疫信息',
            selectUrl2: [['experts', 'id', 'name', true], ['operates', 'id', 'name', true]],
            popNumber2: [4, 5],
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
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'organization',
                type: 'text',
                component: null,
                isNull: false,
                label: '检疫机构',
                placeholder: '',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '检疫项目名称',
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
                label: '检疫报告图片',
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
    // 畜禽检测管理
    beastDetectManage: [{
        settitle: '检测管理',
        key: 'detect',
        tab: '检测信息',
        url: 'detect',
        paramsIndex: 'beast',
        // 链接批次信息模块数据的桥（养殖批次详情）
        batch: 'beastDetectBatch',
        searchPlaceholder: '请输入检测项目名称进行',
        selectSearch: ['detects.weather'],
        theads: ['检测批次号', '检测日期', '检测项目名称', '检测内容', '检测部门', '天气', '专家', '操作人员', '检测报告图片', '备注'],
        protos: ['serial', 'date', 'name', 'content', 'department', 'weather', 'expert_name', 'operate_name', 'img', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        newComponent: [{
            tab: '新建检测信息',
            selectUrl2: [['experts', 'id', 'name', true], ['operates', 'id', 'name', true]],
            popNumber2: [2, 1],
            components: [{
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '检测日期',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'date'}
            },
            {
                name: 'operate_name',
                type: 'select',
                component: null,
                isNull: true,
                label: '操作人员',
                placeholder: '请选择操作人',
                rule: {required: true, trigger: 'blur'},
                options: []
            },
            {
                name: 'expert_name',
                type: 'select',
                component: null,
                isNull: true,
                label: '指导专家',
                placeholder: '请选择专家',
                rule: null,
                options: []
            },
            {
                name: 'weather',
                type: 'select',
                component: null,
                isNull: true,
                label: '天气',
                placeholder: '请选择天气情况',
                rule: {required: true, trigger: 'blur'},
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
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'content',
                type: 'textarea',
                component: null,
                isNull: false,
                label: '检测内容',
                placeholder: '',
                rule: {required: true, trigger: 'blur'}
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
            tab: '编辑检测信息',
            selectUrl2: [['experts', 'id', 'name', true], ['operates', 'id', 'name', true]],
            popNumber2: [3, 2],
            components: [{
                name: 'serial',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测批次号',
                placeholder: '',
                disabled: true,
                rule: {required: null, trigger: 'blur'}
            },
            {
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '检测日期',
                placeholder: '',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'operate_name',
                type: 'select',
                component: null,
                isNull: true,
                label: '操作人员',
                placeholder: '请选择操作人',
                rule: {required: true, trigger: 'blur'},
                options: []
            },
            {
                name: 'expert_name',
                type: 'select',
                component: null,
                isNull: true,
                label: '指导专家',
                placeholder: '请选择专家',
                rule: null,
                options: []
            },
            {
                name: 'weather',
                type: 'select',
                component: null,
                isNull: true,
                label: '天气',
                placeholder: '请选择天气情况',
                rule: {required: true, trigger: 'blur'},
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
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'content',
                type: 'textarea',
                component: null,
                isNull: false,
                label: '检测内容',
                placeholder: '',
                rule: {required: true, trigger: 'blur'}
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
                    value: '',
                    name: 'detects.weather',
                    type: 'select',
                    component: selectSection,
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
                    }]
                },
                {
                    type: 'date',
                    component: 'datePick'
                }
            ]
        }]
    }],
    // 畜禽圈舍管理(
    areaManage: [{
        settitle: '圈舍维护管理',
        key: 'clean',
        tab: '圈舍维护信息',
        url: 'clean',
        // 链接批次信息模块数据的桥（养殖批次详情）
        batch: 'areaBatch',
        searchPlaceholder: '请输入标题进行搜索',
        selectValueId: [['operate_id', 'operate_name', true]],
        selectDefault: [{value: '', label: '选择操作人员'}],
        search: ['query_text', 'name'],
        theads: ['圈舍批次号', '标题', '操作内容', '专家', '操作人', '操作日期', '备注信息'],
        protos: ['serial', 'name', 'content', 'expert_name', 'operate_name', 'date', 'memo'],
        selectSearch: ['cleans.name'],
        widths: [50, 50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        newComponent: [{
            tab: '新建圈舍维护信息',
            selectUrl2: [['experts', 'id', 'name', true], ['operates', 'id', 'name', true]],
            popNumber2: [2, 1],
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
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '操作人',
                placeholder: '',
                rule: {required: true, trigger: 'blur'},
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
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '标题',
                placeholder: '',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'content',
                type: 'textarea',
                component: null,
                isNull: false,
                label: '操作内容',
                placeholder: '',
                rule: {required: true, trigger: 'blur'}
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
            popNumber2: [3, 2],
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
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '操作人',
                placeholder: '',
                rule: {required: true, trigger: 'blur'},
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
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '标题',
                placeholder: '',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'content',
                type: 'textarea',
                component: null,
                isNull: false,
                label: '操作内容',
                placeholder: '',
                rule: {required: true, trigger: 'blur'}
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
                type: 'select',
                component: selectSection,
                name: 'operates.id',
                value: '',
                options: []
            },
            {
                type: 'date',
                component: 'datePick'
            }
            ]
        }]
    }],
    // 无害化
    innocuityManage: [{
        settitle: '无害化管理',
        key: 'dispose',
        tab: '无害化信息',
        url: 'dispose',
        // 链接批次信息模块数据的桥（养殖批次详情）
        batch: 'innocuityBatch',
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
                label: '无害化图片',
                placeholder: '',
                rule: null
            }
            ]
        }],
        editComponent: [{
            tab: '新建养殖场信息',
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
                label: '无害化图片',
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
    // 畜禽出栏管理
    slaughterManage: [{
        settitle: '出栏管理',
        key: 'come',
        tab: '出栏信息',
        url: 'come',
        // 链接批次信息模块数据的桥（养殖批次详情）
        batch: 'slaughterBatch',
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
    // 养殖计划管理
    planManage: [{
        settitle: '养殖计划管理',
        key: 'plan',
        tab: '养殖计划信息',
        url: 'plan',
        paramsIndex: 'beast',
         // 链接批次信息模块数据的桥（养殖批次详情）
        batch: 'planBatch',
        searchPlaceholder: '请输入检测项目名称进行',
        theads: ['批次号', '计划日期', '操作类型', '安排人员', '计划内容', '操作用户', '备注'],
        protos: ['serial', 'date', 'type', 'operate_name', 'content', 'user_name', 'memo'],
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
                label: '计划日期',
                placeholder: '',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'type',
                type: 'select',
                component: null,
                isNull: false,
                label: '操作类型',
                placeholder: '',
                rule: {required: true, trigger: 'blur'},
                options: [{
                    value: '',
                    label: '请选择操作类型'
                },
                {
                    value: '饲料使用',
                    label: '饲料使用'
                },
                {
                    value: 'rfid病疫',
                    label: 'rfid病疫'
                },
                {
                    value: '检疫',
                    label: '检疫'
                },
                {
                    value: '畜禽圈舍',
                    label: '畜禽圈舍'
                },
                {
                    value: '出栏',
                    label: '出栏'
                }
                ]
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '安排人员',
                placeholder: '请选择安排人员',
                rule: {required: true, trigger: 'blur'},
                options: [{
                    value: '',
                    label: '请选择安排人员'
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
        editComponent: [{
            tab: '新建养殖计划信息',
            components: [{
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '计划日期',
                placeholder: '',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'type',
                type: 'select',
                component: null,
                isNull: false,
                label: '操作类型',
                placeholder: '',
                rule: {required: true, trigger: 'blur'},
                options: [{
                    value: '',
                    label: '请选择操作类型'
                },
                {
                    value: '饲料使用',
                    label: '饲料使用'
                },
                {
                    value: 'rfid病疫',
                    label: 'rfid病疫'
                },
                {
                    value: '检疫',
                    label: '检疫'
                },
                {
                    value: '畜禽圈舍',
                    label: '畜禽圈舍'
                },
                {
                    value: '出栏',
                    label: '出栏'
                }
                ]
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '安排人员',
                placeholder: '请选择安排人员',
                rule: {required: true, trigger: 'blur'},
                options: [{
                    value: '',
                    label: '请选择安排人员'
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
        batch: 'beastPackBatch',
        paramsIndex: 'beast',
        searchPlaceholder: '请输入批次号进行搜索',
        theads: ['加工批次号', '加工日期', '数量', '单位', '操作人', '备注信息'],
        protos: ['serial', 'date', 'amount', 'origin', 'operate_name', 'memo'],
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
            selectUrl2: [['operates', 'id', 'name', true]],
            popNumber2: [2],
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
                type: 'textSelect',
                component: inputTextSelect,
                isNull: false,
                label: '数量/重量',
                placeholder: '',
                rule: {required: true, trigger: 'blur'},
                options: [{
                    value: '0',
                    label: '千克'
                },
                {
                    value: '1',
                    label: '个'
                }]
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '操作人员',
                placeholder: '请选择人物',
                rule: {type: 'number'},
                options: []
            },
            {
                name: 'state',
                type: 'text',
                component: null,
                isNull: false,
                label: '状态',
                placeholder: '',
                rule: {required: true, trigger: 'blur'},
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
            hiddenValue: {type: 'beast'},
            selectUrl2: [['operates', 'id', 'name', true]],
            popNumber2: [3],
            components: [{
                name: 'serial',
                type: 'text',
                component: null,
                isNull: false,
                label: '批次号',
                placeholder: '',
                disabled: true,
                rule: {required: false, trigger: 'blur'}
            },
            {
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
                rule: {required: true, trigger: 'blur'},
                options: [{
                    value: '0',
                    label: '千克'
                },
                {
                    value: '1',
                    label: '个'
                }]
            },
            {
                name: 'origin',
                type: 'select',
                component: null,
                isNull: false,
                label: '产地',
                placeholder: '',
                rule: {required: true, trigger: 'blur'},
                options: []
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '操作人员',
                placeholder: '请选择人物',
                rule: {required: false, type: 'number'},
                options: []
            },
            {
                name: 'state',
                type: 'text',
                component: null,
                isNull: false,
                label: '状态',
                placeholder: '',
                rule: {required: true, trigger: 'blur'},
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
        batch: 'beastDetectPkBatch',
        searchPlaceholder: '请输入检测项目名称进行',
        paramsIndex: 'beast',
        changeDataArr: [{result: {0: '不合格', 1: '合格'}}],
        theads: ['检测名称', '检测内容', '检测日期', '检测结果', '检测机构', '负责人', '处理方法', '图片报告', '备注'],
        protos: ['name', 'content', 'date', 'result', 'organization', 'operate_name', 'method', 'thumb', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
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
        protos: ['serial', 'code', 'product_name', 'date', 'rfid', 'origin', 'time', 'memo'],
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
                name: 'serial',
                type: 'select',
                component: null,
                isNull: false,
                label: '加工批次',
                placeholder: '请选择加工批次',
                disabled: true,
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'rfid',
                type: 'select',
                component: null,
                isNull: false,
                label: 'RFID',
                placeholder: '',
                disabled: true,
                rule: {required: true, trigger: 'blur', type: 'date'}
            },
            {
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
            popNumber2: 2,
            components: [{
                name: 'code',
                component: Qrcode,
                isNull: false,
                label: '二维码',
                placeholder: '',
                rule: null
            },
            {
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
                name: 'operate_name',
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
            protos: ['name', 'area_unit', 'director', 'phone', 'address', 'memo'],
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
                checkNumber: [0],
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
            protos: ['plantation_name', 'name', 'area_unit', 'director', 'phone', 'address', 'img', 'memo'],
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
                selectInit: [{value: '', label: '选择种植场'}],
                checkNumber: [1],
                hasImg: true,
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
                checkNumber: [1],
                popNumber: [0],
                hasImg: true,
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
                    rule: [{required: true, message: '请输入果蔬名称', trigger: 'blur'}, {validator: validate2.reCheck}]
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
                    name: 'date',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '生长周期（天）',
                    placeholder: '',
                    rule: {validator: validate2.reInteger}
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
                    placeholder: '',
                    rule: {validator: validate2.reInteger}
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
            url: 'manure',
            selectSearch: ['manures.category_id'],
            selectValueId: [['category_id', 'category_name', true]],
            searchPlaceholder: '请输入肥料名称',
            selectDefault: [{value: '', label: '肥料类别'}],
            theads: ['肥料分类', '肥料名称', '用途', '包装规格', '产地', '经销商名称', '联系方式', '备注'],
            protos: ['category_name', 'name', 'usage', 'specification', 'origin', 'specification', 'phone', 'memo'],
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
                selectInit: [{value: '', label: '选择肥料分类'}],
                checkNumber: [1],
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
                    label: '联系方式',
                    rule: { validator: validate2.phone, trigger: 'blur' }
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
                checkNumber: [1],
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
                    label: '联系方式',
                    rule: { validator: validate2.phone, trigger: 'blur' }
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
        batch: 'plantSerial',
        selectSearch: ['plantations.id', 'plants.id'],
        selectValueId: [['plantation_id', 'plantation_name', true], ['plant_id', 'plant_name', true]],
        selectDefault: [{value: '', label: '种植区选择'}, {value: '', label: '果蔬选择'}],
        searchPlaceholder: '请输入种植批次号进行搜索',
        theads: ['所属种植区', '种植批次号', '果蔬名称', '种植日期', '种植面积', '种植人', '录入人', '备注'],
        protos: ['plantation_name', 'serial', 'plant_name', 'date', 'area_unit', 'operate_name', 'user_name', 'memo'],
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
            selectInit: [{value: '', label: '种植区选择'}],
            selectInit2: [{value: '', label: '果蔬选择'}, {value: '', label: '种植人选择'}],
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
                rule: [{required: true}, {validator: validate2.reDate, message: '请输入种植日期'}]
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
                rule: [{required: true}, {validator: validate2.reDate, message: '请输入种植日期'}]
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
                    rule: [{required: true}, {validator: validate2.reDate, message: '请输入施肥日期'}]
                },
                {
                    name: 'weather',
                    type: 'select',
                    component: inputSelect,
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
                popNumber2: [1, 5, 6],
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
                    rule: [{required: true}, {validator: validate2.reDate, message: '请输入施肥日期'}]
                },
                {
                    name: 'weather',
                    type: 'select',
                    component: inputSelect,
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
            url: 'spray',
            batch: 'sprayBatch',
            selectSearch: ['medicaments.id'],
            selectValueId: [['medicament_id', 'medicament_name', true]],
            selectDefault: [{value: '', label: '农药选择'}],
            searchPlaceholder: '请输入施药批次号进行搜索',
            theads: ['农药批次号', '农药', '喷洒日期', '天气', '使用量(L)', '施药浓度', '安全隔离期(天)', '施用方法', '施药人', '专家', '录入人', '备注'],
            protos: ['serial', 'medicament_name', 'date', 'weather', 'amount_unit', 'concentration', 'safety', 'way', 'operate_name', 'expert_name', 'user_name', 'memo'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
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
                    rule: [{required: true}, {validator: validate2.reDate, message: '请输入喷洒日期'}]
                },
                {
                    name: 'weather',
                    type: 'select',
                    component: inputSelect,
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
                tab: '编辑病虫害信息',
                selectUrl2: [['medicaments', 'id', 'name', true], ['operates', 'id', 'name', true], ['experts', 'id', 'name', true]],
                popNumber2: [1, 7, 8],
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
                    rule: [{required: true}, {validator: validate2.reDate, message: '请输入喷洒日期'}]
                },
                {
                    name: 'weather',
                    type: 'select',
                    component: inputSelect,
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
            url: 'detect',
            batch: 'plantDetectBatch',
            paramsIndex: 'plant',
            selectSearch: ['detects.name'],
            changeDataArr: [{result: {'0': '合格', '1': '不合格'}}],
            searchPlaceholder: '请输入检测批次号进行搜索',
            theads: ['检测批次号', '检验类型', '检验日期', '天气', '检测部门', '检测内容', '检查结果', '检测人', '专家', '录入人', '备注'],
            protos: ['serial', 'name', 'date', 'weather', 'department', 'content', 'result', 'operate_name', 'expert_name', 'user_name', 'memo'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
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
                hiddenValue: {type: 'plant'},
                components: [{
                    name: 'name',
                    type: 'select',
                    component: inputSelect,
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
                    rule: [{required: true}, {validator: validate2.reDate, message: '请输入检测日期'}]
                },
                {
                    name: 'weather',
                    type: 'select',
                    component: inputSelect,
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
                popNumber2: [7, 8],
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
                    component: inputSelect,
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
                    rule: [{required: true}, {validator: validate2.reDate, message: '请输入检测日期'}]
                },
                {
                    name: 'weather',
                    type: 'select',
                    component: inputSelect,
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
            tab: '田间信息',
            url: 'farming',
            batch: 'farmingBatch',
            searchPlaceholder: '请输入田间批次号进行搜索',
            theads: ['田间批次号', '操作日期', '天气', '操作内容', '操作方法', '操作人', '专家', '录入人', '备注'],
            protos: ['serial', 'date', 'weather', 'content', 'method', 'operate_name', 'expert_name', 'user_name', 'memo'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50],
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
                components: [{
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '操作日期',
                    placeholder: '',
                    rule: [{required: true}, {validator: validate2.reDate, message: '请输入操作日期'}]
                },
                {
                    name: 'weather',
                    type: 'select',
                    component: inputSelect,
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
                    placeholder: '',
                    rule: null
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
                popNumber2: [5, 6],
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
                    rule: [{required: true}, {validator: validate2.reDate, message: '请输入操作日期'}]
                },
                {
                    name: 'weather',
                    type: 'select',
                    component: inputSelect,
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
                    placeholder: '',
                    rule: null
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
    // 生产计划
    plantProduct: [{
        settitle: '生产计划管理',
        key: 'plan',
        tab: '生产计划信息',
        url: 'farming',
        batch: 'plantProduct',
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
            tab: '新建生产计划信息',
            components: [{
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: true,
                label: '计划日期',
                placeholder: '',
                rule: {required: true, message: '请输入批次号', trigger: 'blur'}
            },
            {
                name: 'category_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '操作类型',
                placeholder: '必填',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择分类名称'},
                options: []
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
        }],
        editComponent: [{
            tab: '编辑生产计划信息',
            components: [{
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: true,
                label: '计划日期',
                placeholder: '',
                rule: {required: true, message: '请输入批次号', trigger: 'blur'}
            },
            {
                name: 'category_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '操作类型',
                placeholder: '必填',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择分类名称'},
                options: []
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
        batch: 'plantSerial',
        selectSearch: ['plantations.id'],
        selectValueId: [['plantation_id', 'plantation_name', true]],
        selectDefault: [{value: '', label: '种植区选择'}],
        paramsIndex: 0,
        searchPlaceholder: '请输入采收批次号进行搜索',
        theads: ['采收批次', '采收日期', '所属种植区', '种植批次号', '采收数量(kg)', '入库部门', '存放仓库位置', '操作人', '录入人', '备注'],
        protos: ['serial', 'date', 'plantation_name', 'cultivate_serial', 'amount', 'department', 'position', 'operate_name', 'user_name', 'memo'],
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
        newComponent: [{
            tab: '新建采收批次',
            selectUrl2: [['cultivates', 'id', 'serial', true], ['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '选择种植批次号'}, {value: '', label: '选择操作人'}],
            popNumber2: [1, 5],
            components: [{
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: true,
                label: '采收日期',
                placeholder: '必填',
                rule: [{required: true}, {validator: validate2.reDate, message: '请输入采收日期'}]
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
            selectUrl2: [['cultivates', 'id', 'serial', true], ['operates', 'id', 'name', true]],
            popNumber2: [2, 6],
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
                rule: [{required: true}, {validator: validate2.reDate, message: '请输入采收日期'}]
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
        }]
    }],
    // 果蔬-加工
    vegetableSerial: [{
        settitle: '加工批次管理',
        key: 'plant-pack',
        tab: '加工批次信息',
        url: 'pack',
        batch: 'plantPackBatch',
        paramsIndex: 'plant',
        searchPlaceholder: '请输入加工批次号',
        theads: ['加工批次号', '加工日期', '数量', '产地', '操作人', '录入人', '备注'],
        protos: ['serial', 'date', 'amount', 'origin', 'operate_name', 'user_name', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50],
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
            selectUrl2: [['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '加工人选择'}],
            popNumber2: [2],
            components: [{
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: true,
                label: '加工日期',
                placeholder: '',
                rule: [{required: true}, {validator: validate2.reDate, message: '请输入加工日期'}]
            },
            {
                name: 'origin',
                type: 'text',
                component: null,
                isNull: true,
                label: '产地',
                placeholder: '',
                rule: null
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
                rule: null
            },
            {
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: true,
                label: '加工日期',
                placeholder: '',
                rule: [{required: true}, {validator: validate2.reDate, message: '请输入加工日期'}]
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
        tab: '检验检测信息',
        url: 'detect_pk',
        batch: 'detectPackBatch',
        paramsIndex: 'plant',
        changeDataArr: [{result: {0: '不合格', 1: '合格'}}],
        searchPlaceholder: '请输入检测批次号搜索',
        theads: ['检测批次号', '检测名称', '检测内容', '检测日期', '检测结果', '检测机构', '负责人', '处理方法', '图片报告', '备注'],
        protos: ['serial', 'name', 'content', 'date', 'result', 'organization', 'operate_name', 'method', 'img', 'memo'],
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
                rule: [{required: true}, {validator: validate2.reDate, message: '请输入检测日期'}]
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
        }],
        editComponent: [{
            tab: '编辑检验检测信息',
            selectUrl2: [['operates', 'id', 'name', true]],
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
                rule: [{required: true}, {validator: validate2.reDate, message: '请输入检测日期'}]
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
        key: 'code',
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
            selectUrl2: [['packs', 'id', 'serial', true], ['harvests', 'id', 'serial', true]],
            selectInit2: [{value: '', label: '加工批次号选择'}, {value: '', label: '采收批次号选择'}],
            popNumber2: [0, 2],
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
                name: 'harvest_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '采收批次号',
                placeholder: '',
                disabled: true,
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择采收批次号'},
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
            selectSearch: ['brand'],
            selectValueId: [['brand', 'brand', true]],
            selectDefault: [{value: '', label: '车辆品牌'}],
            searchPlaceholder: '请输入车牌号进行搜索',
            theads: ['车辆品牌', '车辆号码', '核载吨位（吨）', '备注信息'],
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
                    name: 'brand',
                    value: '',
                    type: 'select',
                    component: selectSection,
                    options: []
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
        // 少了数据库性别字段
        {
            settitle: '基础信息管理',
            key: 'driver',
            tab: '驾驶员信息',
            url: 'driver',
            searchPlaceholder: '请输入司机姓名进行搜索',
            theads: ['驾驶员姓名', '性别', '联系电话', '取得驾照日期', '出生日期', '驾照类型(A1、C2...)', '备注信息'],
            protos: ['name', 'sex', 'phone', 'driver', 'birth', 'type', 'memo'],
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
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: true,
                    label: '取得驾照时间',
                    placeholder: '',
                    rule: ''
                },
                {
                    name: 'birth',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '出生年月',
                    placeholder: '',
                    rule: {validator: validate2.reNumber}
                },
                {
                    name: 'driver',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '驾照类型',
                    placeholder: '',
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
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: true,
                    label: '取得驾照时间',
                    placeholder: '',
                    rule: ''
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
                    name: 'driver',
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
        tab: '物流批次信息',
        url: 'delivery',
        selectSearch: ['deliveries.transportable_type'],
        changeDataArr: [{transportable_type: { 'self': '自运', 'consign': '托运', 'selve': '自提' }}],
        searchPlaceholder: '请输入货物名称进行搜索',
        theads: ['物流批次号', '物流日期', '货物名称', '数量', '运输方式', '操作人员', '物流状态', '备注'],
        protos: ['serial', 'datetime', 'name', 'amount', 'transportable_type', 'operate_name', 'state', 'memo'],
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
                name: 'amount',
                type: 'text',
                component: null,
                isNull: true,
                label: '数量',
                placeholder: '',
                rule: null
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
                name: 'operate',
                type: 'select',
                component: null,
                isNull: true,
                label: '操作人员',
                rule: {required: true},
                options: []
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
            key: 'product-count',
            checkOperate: 'true',
            tab: '商品统计信息',
            url: 'product-count',
            searchPlaceholder: '请输入商品名称进行搜索',
            theads: ['商品名称', '入库总数量', '销售总数量', '加工总数量', '销售总额'],
            protos: ['product_name', 'storage_amount', 'sell_amount', 'pack_amount', 'money'],
            widths: [50, 50, 50, 50, 50],
            typeComponent: [
                {
                    component: output
                }],
            listComponent: [{
                components: []
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
            batch: 'saleInput',
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
        batch: 'saleOrder',
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
        editComponent: [{
            tab: '编辑订单信息',
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
        key: 'myuser',
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
            checkNumber: [0],
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
                placeholder: '请输入邮箱'
                // rule: [{required: true, trigger: 'blur'}, {validator: validate2.reCheck}]
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
                rule: {required: false, trigger: 'blur'}
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
            tab: '编辑用户信息',
            hiddenValue: {type: 0},
            checkNumber: [0],
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
    },
    {
        settitle: '用户管理',
        key: 'myrole',
        tab: '用户角色信息',
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
            hiddenValue: {type: 0},
            checkNumber: [0],
            components: [{
                name: 'display_name',
                type: 'text',
                component: null,
                isNull: false,
                label: '角色名称',
                placeholder: '请输入角色名称',
                rule: [{required: true, trigger: 'blur'}, {validator: validate2.reCheck}]
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
            hiddenValue: {type: 0},
            checkNumber: [0],
            components: [{
                name: 'display_name',
                type: 'text',
                component: null,
                isNull: false,
                label: '角色名称',
                placeholder: '请输入角色名称',
                rule: [{required: true, trigger: 'blur'}, {validator: validate2.reCheck}]
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
        key: 'planManage',
        tab: '报表信息',
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
        key: 'permission-category',
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
        tab: '权限信息',
        url: 'permission',
        searchPlaceholder: '请输入展示名称进行搜索',
        theads: ['所属权限分类', '名称', '展示名称', '资源', '备注'],
        protos: ['pid', 'name', 'display_name', 'resource', 'memo'],
        widths: [50, 50, 50, 50, 50, 50],
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
        key: 'company',
        tab: '入驻单位信息',
        url: 'company',
        hiddeUser: true,
        searchPlaceholder: '请输入公司名称进行搜索',
        theads: ['公司编码', '公司logo', '负责人/法人', '公司简称', '公司网站名称', '统一码', '电话', '地址', '经营范围', '员工总数', '公司网站', '销售网站'],
        protos: ['coding', 'logo', 'legal_person', 'short_name', 'name', 'USCC', 'phone', 'address', 'business_scope', 'total_staff', 'website', 'sell_website'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        listComponent: [],
        newComponent: [{
            tab: '新建入驻公司信息',
            components: [{
                name: 'coding',
                type: 'text',
                component: null,
                isNull: false,
                label: '公司编码',
                placeholder: '请输入公司编码',
                rule: [{required: false}, {validator: validate2.reInteger}]
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
                name: 'legal_person',
                type: 'text',
                component: null,
                isNull: false,
                label: '负责人/法人',
                placeholder: '请输入负责人/法人',
                rule: null
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
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '公司网站名称',
                placeholder: '请输入公司网站名称',
                rule: {required: true, trigger: 'blur'}
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
                name: 'sell_website',
                type: 'text',
                component: null,
                isNull: false,
                label: '销售网站',
                placeholder: '请输入销售网站',
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
            tab: '新建入驻公司信息',
            components: [{
                name: 'coding',
                type: 'text',
                component: null,
                isNull: false,
                label: '公司编码',
                placeholder: '请输入公司编码',
                rule: [{required: false}, {validator: validate2.reInteger}]
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
                name: 'legal_person',
                type: 'text',
                component: null,
                isNull: false,
                label: '负责人/法人',
                placeholder: '请输入负责人/法人',
                rule: null
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
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '公司网站名称',
                placeholder: '请输入公司网站名称',
                rule: {required: true, trigger: 'blur'}
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
                name: 'sell_website',
                type: 'text',
                component: null,
                isNull: false,
                label: '销售网站',
                placeholder: '请输入销售网站',
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
        key: 'feedback',
        tab: '用户反馈信息',
        url: 'feedback',
        searchPlaceholder: '请输入公司名称进行搜索',
        theads: ['所属公司', '用户名', '姓名', '联系方式', '提交日期', '评价星级', '不足', '问题描述'],
        protos: ['company_name', 'user_name', 'name', 'contact', 'datetime', 'grade', 'lack', 'content'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        listComponent: [],
        newComponent: [{
            tab: '新建用户反馈信息',
            components: [{
                name: 'company_name',
                type: 'select',
                component: null,
                isNull: false,
                label: '所属公司',
                placeholder: '请选择所属公司',
                rule: null
            },
            {
                name: 'legal_person',
                type: 'text',
                component: null,
                isNull: false,
                label: '联系方式',
                placeholder: '请输入11位的手机号（固话用-隔开）',
                rule: {validator: validate2.phone, trigger: 'blur'}
            },
            {
                name: 'short_name',
                type: 'text',
                component: null,
                isNull: false,
                label: '评价星级',
                placeholder: '请输入整数',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'lack',
                type: 'text',
                component: null,
                isNull: false,
                label: '不足之处',
                placeholder: '请输入不足',
                rule: null
            },
            {
                name: 'memo',
                type: 'content',
                component: null,
                isNull: true,
                label: '问题描述',
                placeholder: '',
                rule: null
            },
            {
                name: 'img',
                type: 'file',
                component: inputFile,
                isNull: false,
                label: '反馈图片',
                placeholder: '',
                rule: null
            }]
        }],
        editComponent: [{
            tab: '编辑用户反馈信息',
            components: [{
                name: 'company_name',
                type: 'select',
                component: null,
                isNull: false,
                label: '所属公司',
                placeholder: '请选择所属公司',
                rule: null
            },
            {
                name: 'legal_person',
                type: 'text',
                component: null,
                isNull: false,
                label: '联系方式',
                placeholder: '请输入11位的手机号（固话用-隔开）',
                rule: {validator: validate2.phone, trigger: 'blur'}
            },
            {
                name: 'short_name',
                type: 'text',
                component: null,
                isNull: false,
                label: '评价星级',
                placeholder: '请输入整数',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'lack',
                type: 'text',
                component: null,
                isNull: false,
                label: '不足之处',
                placeholder: '请输入不足',
                rule: null
            },
            {
                name: 'memo',
                type: 'content',
                component: null,
                isNull: true,
                label: '问题描述',
                placeholder: '',
                rule: null
            },
            {
                name: 'img',
                type: 'file',
                component: inputFile,
                isNull: false,
                label: '反馈图片',
                placeholder: '',
                rule: null
            }]
        }]
    }],
    // 系统日志
    logOperate: [{
        settitle: '系统日志',
        key: 'log',
        tab: '日志信息',
        url: 'log',
        selectSearch: ['operate'],
        searchPlaceholder: '请输入内容进行搜索',
        theads: ['模块名称', '操作', '内容', '日期时间', '客户端ip', '公司', '用户', '备注'],
        protos: ['module', 'operate', 'content', 'datetime', 'ip', 'company_name', 'user_name', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50],
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
        }]
    }]
}
