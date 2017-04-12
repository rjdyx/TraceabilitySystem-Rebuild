// 中间列表的数据

import importBtn from '../../components/public/import-btn.vue'
import newbuildBtn from '../../components/public/newbuild-btn.vue'
import output from '../../components/public/output.vue'
import selectSection from '../../components/public/select-section.vue'
import datePick from '../../components/public/datePick.vue'

import categoryBtn from '../../components/public/categoryBtn.vue'
import inputText from '../../components/public/inputText.vue'
import inputTextArea from '../../components/public/inputTextArea.vue'
import inputSelect from '../../components/public/inputSelect.vue'
import inputDate from '../../components/public/inputDate.vue'
import inputFile from '../../components/public/inputFile.vue'
import inputTextSelect from '../../components/public/inputTextSelect.vue'

import validate2 from '../../utils/validate2.js'

export default {
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
            components: [{
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '分类名称',
                placeholder: '必填',
                rule: {required: true, message: '请输入分类名称', trigger: 'blur'}
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
            tab: '新建分类档案信息',
            components: [{
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '分类名称',
                placeholder: '必填',
                rule: {required: true, message: '请输入分类名称', trigger: 'blur'}
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
    personFile: [{
        settitle: '人员档案管理',
        key: 'operate',
        tab: '人员档案信息',
        url: 'operate',
        searchPlaceholder: '请输入人物姓名进行搜索',
        selectSearch: ['operates.category_id'],
        selectValueId: ['category_id', 'category_name', true],
        changeDataArr: [{sex: {0: '男', 1: '女'}}],
        theads: ['分类名称', '姓名', '身份', '性别', '年龄', '联系方式', '地址', '图片', '备注信息'],
        protos: ['category_name', 'name', 'identity', 'sex', 'age', 'phone', 'address', 'img', 'meno'],
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
                type: 'select',
                component: selectSection,
                options: []
            }]
        }],
        newComponent: [{
            tab: '新建人员档案信息',
            selectUrl: ['category', 'operate', 'category_id', 'category_name', true],
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
                rule: {required: true, message: '请输入姓名', trigger: 'blur'}
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
                name: 'meno',
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
            tab: '新建人员档案信息',
            components: [{
                name: 'category_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '分类',
                placeholder: '必填',
                rule: {required: true, trigger: 'blur'},
                options: [{
                    value: '',
                    label: ''
                }]
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '姓名',
                placeholder: '必填',
                rule: {required: true, message: '请输入姓名', trigger: 'blur'}
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
                name: 'meno',
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
    expertFile: [{
        settitle: '专家档案管理',
        key: 'expert',
        tab: '专家档案信息',
        url: 'expert',
        searchPlaceholder: '请输入专家名称进行搜索',
        search: ['query_text', 'name'],
        theads: ['专家名称', '级别', '研究领域', '单位', '出生年月日', '性别', '联系方式', '图片', '备注'],
        protos: ['name', 'level', 'major', 'unit', 'age', 'sex', 'phone', 'img', 'memo'],
        selectSearch: ['experts.major'],
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
            tab: '新建专家档案信息',
            components: [{
                name: 'category_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '分类',
                placeholder: '必填',
                rule: {required: true, trigger: 'blur'},
                options: [{
                    value: '',
                    label: ''
                }]
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '专家名称',
                placeholder: '必填',
                rule: {required: true, message: '请输入专家名称', trigger: 'blur'}
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
            tab: '新建专家档案信息',
            components: [{
                name: 'category_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '分类',
                placeholder: '必填',
                rule: {required: true, trigger: 'blur'},
                options: [{
                    value: '',
                    label: ''
                }]
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '专家名称',
                placeholder: '必填',
                rule: {required: true, message: '请输入专家名称', trigger: 'blur'}
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
        listComponent: [{
            components: [{
                type: 'select',
                component: selectSection,
                options: [{
                    value: '', label: '模块类型'
                },
                {
                    value: '农作物生长', label: '农作物生长'
                },
                {
                    value: '地质研究', label: '地质研究'
                },
                {
                    value: '大气研究', label: '大气研究'
                },
                {
                    value: '畜禽病疫', label: '畜禽病疫'
                }]
            }]
        }]
    }],
    clientFile: [{
        settitle: '客户档案管理',
        key: 'client',
        tab: '客户档案信息',
        url: 'client',
        searchPlaceholder: '请输入客户名称进行搜索',
        search: ['query_text', 'name'],
        theads: ['管理客户类型', '客户名称', '联系人', '电话', '地址', '传真', '邮箱', '备注'],
        protos: ['category_name', 'name', 'contact', 'phone', 'address', 'fax', 'email', 'meno'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50],
        listComponent: [],
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
            components: [{
                name: 'category_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '分类',
                placeholder: '必填',
                rule: {required: true, trigger: 'blur'},
                options: [{
                    value: '',
                    label: ''
                }]
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '客户名称',
                placeholder: '必填',
                rule: {required: true, message: '请输入专家名称', trigger: 'blur'}
            },
            {
                name: 'contact',
                type: 'text',
                component: null,
                isNull: false,
                label: '联系人',
                placeholder: '',
                rule: ''
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
                name: 'email',
                type: 'text',
                component: null,
                isNull: false,
                label: '邮箱',
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
            components: [{
                name: 'category_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '分类',
                placeholder: '必填',
                rule: {required: true, trigger: 'blur'},
                options: [{
                    value: '',
                    label: ''
                }]
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '客户名称',
                placeholder: '必填',
                rule: {required: true, message: '请输入专家名称', trigger: 'blur'}
            },
            {
                name: 'contact',
                type: 'text',
                component: null,
                isNull: false,
                label: '联系人',
                placeholder: '',
                rule: ''
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
                name: 'email',
                type: 'text',
                component: null,
                isNull: false,
                label: '邮箱',
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
    supplierFile: [{
        settitle: '供货商档案管理',
        key: 'supplier',
        tab: '供货商档案信息',
        url: 'supplier',
        searchPlaceholder: '请输入供货商名称搜索',
        search: ['query_text', 'name'],
        theads: ['分类', '供货商名称', '电话', '联系人', '地址', '备注'],
        protos: ['category_name', 'name', 'phone', 'contacts', 'address', 'meno'],
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
                rule: {required: true, trigger: 'blur'}
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
                rule: {required: true, trigger: 'blur'}
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
        listComponent: []
    }],
    productFile: [{
        settitle: '产品档案管理',
        key: 'product',
        tab: '产品档案信息',
        url: 'product',
        selectSearch: ['category_name'],
        searchPlaceholder: '请输入产品名称进行搜索',
        search: ['query_text', 'category_name'],
        theads: ['分类', '名称', '执行标准', '卫生标准', '商品型号', '商品简介', '包装规格', '保质期', '食用方法', '存储方法', '配料信息', '图片', '备注'],
        protos: ['category_name', 'name', 'enforce_standard', 'hygienic_standard', 'marque', 'description', 'specification', 'expiration_date', 'edible_method', 'storage_means', 'burdening_info', 'img', 'meno'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
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
            tab: '新建产品档案信息',
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
                rule: {required: true, trigger: 'blur'}
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
            tab: '编辑客户档案信息',
            components: [{
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '客户名称',
                placeholder: '必填',
                rule: {required: true, trigger: 'blur'}
            },
            {
                name: 'contact',
                type: 'text',
                component: null,
                isNull: false,
                label: '联系人',
                placeholder: '必填',
                rule: {required: true, trigger: 'blur'}
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
                name: 'fax',
                type: 'text',
                component: null,
                isNull: true,
                label: '传真',
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
            }]
        }],
        listComponent: [{
            components: [{
                type: 'select',
                component: selectSection,
                options: [{
                    value: '',
                    label: '分类'
                },
                {
                    value: '水果',
                    label: '水果'
                },
                {
                    value: '蔬菜',
                    label: '蔬菜'
                }]
            }]
        }]
    }
    ],
    baseManage: [
        {
            settitle: '养殖基础信息管理',
            key: 'cultivation',
            tab: '养殖场信息',
            url: 'org',
            searchPlaceholder: '请输入养殖场进行搜索',
            search: ['query_text', 'name'],
            theads: ['序号', '养殖场名称', '养殖面积', '负责人', '养殖畜禽种类', '养殖规模', '详细地址', '图片', '备注信息'],
            protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
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
                    component: inputText,
                    isNull: false,
                    label: '养殖场名称',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur'}
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
                    name: 'kind',
                    type: 'text',
                    component: inputText,
                    isNull: false,
                    label: '养殖畜禽种类',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur'}
                },
                {
                    name: 'address',
                    type: 'text',
                    component: inputText,
                    isNull: true,
                    label: '地址',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'scale',
                    type: 'text',
                    component: inputText,
                    isNull: true,
                    label: '养殖规模',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'principal',
                    type: 'text',
                    component: inputText,
                    isNull: true,
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
                    name: 'phone',
                    type: 'text',
                    component: inputText,
                    isNull: true,
                    label: '联系电话',
                    placeholder: '请输入11位的手机号（固话用-隔开）',
                    rule: { validator: validate2.phone, trigger: 'blur' }
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: inputTextArea,
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
            key: 'cultivation',
            tab: '养殖区信息',
            url: 'org',
            searchPlaceholder: '请输入养殖场进行搜索',
            search: ['query_text', 'name'],
            theads: ['序号', '所属养殖场', '养殖区名称', '养殖面积', '负责人', '养殖畜禽种类', '养殖规模', '详细地址', '图片', '备注信息'],
            protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
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
                    component: inputText,
                    isNull: false,
                    label: '养殖场名称',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur'}
                },
                {
                    name: 'area',
                    type: 'textarea',
                    component: inputTextArea,
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
                    name: 'director',
                    type: 'text',
                    component: inputText,
                    isNull: true,
                    label: '负责人',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'phone',
                    type: 'text',
                    component: inputText,
                    isNull: true,
                    label: '联系电话',
                    placeholder: '请输入11位的手机号（固话用-隔开）',
                    rule: { validator: validate2.phone, trigger: 'blur' }
                },
                {
                    name: 'address',
                    type: 'text',
                    component: inputText,
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
                    name: 'class',
                    type: 'text',
                    component: inputText,
                    isNull: true,
                    label: '养殖畜禽种类',
                    placeholder: '',
                    rule: ''
                },
                {
                    name: 'scale',
                    type: 'text',
                    component: inputText,
                    isNull: true,
                    label: '养殖规模',
                    placeholder: '',
                    rule: ''
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    component: inputTextArea,
                    isNull: true,
                    label: '备注信息',
                    placeholder: '',
                    rule: ''
                }
                ]
            }],
            listComponent: []
        },
        {
            settitle: '基础信息管理',
            key: 'cultivation',
            tab: '圈舍档案',
            url: 'org',
            searchPlaceholder: '请输入圈舍进行搜索',
            search: ['query_text', 'name'],
            theads: ['圈舍名称', '面积', '图片', '备注信息'],
            protos: ['name', 'org_level', 'address', 'meno'],
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
                    name: 'animalName',
                    type: 'text',
                    component: inputText,
                    isNull: false,
                    label: '畜禽名称',
                    placeholder: '必填',
                    rule: 'required'
                },
                {
                    name: 'varieties',
                    type: 'text',
                    component: inputText,
                    isNull: true,
                    label: '品种描述',
                    placeholder: '请填写数字（必填）单位是亩',
                    rule: 'numeric'
                },
                {
                    name: 'RFID',
                    type: 'text',
                    component: inputText,
                    isNull: true,
                    label: 'RFID位置',
                    placeholder: '',
                    rule: ''
                },
                {
                    name: 'remarkInfo',
                    type: 'textarea',
                    component: inputTextArea,
                    isNull: true,
                    label: '备注信息',
                    placeholder: '',
                    rule: ''
                },
                {
                    name: 'file',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '',
                    placeholder: '',
                    rule: ''
                }
                ]
            }],
            listComponent: []
        },
        {
            settitle: '基础信息管理',
            key: 'cultivation',
            tab: '畜禽档案',
            url: 'org',
            searchPlaceholder: '请输入养殖场进行搜索',
            search: ['query_text', 'name'],
            theads: ['畜禽名称', '描述', '耳标位置', '图片', '备注信息'],
            protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
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
                    name: 'animalName',
                    type: 'text',
                    component: inputText,
                    isNull: false,
                    label: '畜禽名称',
                    placeholder: '必填',
                    rule: 'required'
                },
                {
                    name: 'varieties',
                    type: 'text',
                    component: inputText,
                    isNull: true,
                    label: '品种描述',
                    placeholder: '请填写数字（必填）单位是亩',
                    rule: 'numeric'
                },
                {
                    name: 'RFID',
                    type: 'text',
                    component: inputText,
                    isNull: true,
                    label: 'RFID位置',
                    placeholder: '',
                    rule: ''
                },
                {
                    name: 'remarkInfo',
                    type: 'textarea',
                    component: inputTextArea,
                    isNull: true,
                    label: '备注信息',
                    placeholder: '',
                    rule: ''
                },
                {
                    name: 'file',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '',
                    placeholder: '',
                    rule: ''
                }
                ]
            }],
            listComponent: []
        },
        {
            settitle: '养殖基础信息管理',
            key: 'livestock',
            tab: '兽药档案',
            url: 'org',
            searchPlaceholder: '请输入畜禽名称进行搜索',
            search: ['query_text', 'name'],
            theads: ['分类', '名称', '用途', '包装规格', '产地', '生产厂家名称', '联系方式', '图片', '备注信息'],
            protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
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
                    type: 'select',
                    component: inputSelect,
                    isNull: false,
                    label: '畜药类别',
                    placeholder: '请选择类别',
                    rule: '',
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
                    type: 'text',
                    component: inputText,
                    isNull: false,
                    label: '兽药名称',
                    placeholder: '必填',
                    rule: ''
                },
                {
                    type: 'text',
                    component: inputText,
                    isNull: true,
                    label: '用途',
                    placeholder: '',
                    rule: ''
                },
                {
                    type: 'text',
                    component: inputText,
                    isNull: true,
                    label: '包装规格',
                    placeholder: '',
                    rule: ''
                },
                {
                    type: 'text',
                    component: inputText,
                    isNull: true,
                    label: '生产厂家名称',
                    placeholder: '',
                    rule: ''
                },
                {
                    type: 'text',
                    component: inputText,
                    isNull: true,
                    label: '产地',
                    placeholder: '',
                    rule: ''
                },
                {
                    type: 'text',
                    component: inputText,
                    isNull: true,
                    label: '联系方式',
                    placeholder: '请输入11位的手机号（固话用-隔开）',
                    rule: ''
                },
                {
                    type: 'textarea',
                    component: inputTextArea,
                    isNull: true,
                    label: '备注信息',
                    placeholder: '',
                    rule: ''
                }
                ]
            }],
            listComponent: []
        },
        {
            settitle: '养殖基础信息管理',
            key: 'animalDrugs',
            tab: '兽药档案',
            url: 'org',
            searchPlaceholder: '请输入兽药名称',
            search: ['query_text', 'name'],
            theads: ['兽药类别', '兽药名称', '用途', '包装规格', '生产厂家名称', '产地', '联系方式', '备注'],
            protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
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
                tab: '新建农药档案',
                components: [{
                    type: 'select',
                    component: inputSelect,
                    isNull: false,
                    label: '畜药类别',
                    placeholder: '请选择类别',
                    rule: '',
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
                    type: 'text',
                    component: inputText,
                    isNull: false,
                    label: '兽药名称',
                    placeholder: '必填',
                    rule: ''
                },
                {
                    type: 'text',
                    component: inputText,
                    isNull: true,
                    label: '用途',
                    placeholder: '',
                    rule: ''
                },
                {
                    type: 'text',
                    component: inputText,
                    isNull: true,
                    label: '包装规格',
                    placeholder: '',
                    rule: ''
                },
                {
                    type: 'text',
                    component: inputText,
                    isNull: true,
                    label: '生产厂家名称',
                    placeholder: '',
                    rule: ''
                },
                {
                    type: 'text',
                    component: inputText,
                    isNull: true,
                    label: '产地',
                    placeholder: '',
                    rule: ''
                },
                {
                    type: 'text',
                    component: inputText,
                    isNull: true,
                    label: '联系方式',
                    placeholder: '请输入11位的手机号（固话用-隔开）',
                    rule: ''
                },
                {
                    type: 'textarea',
                    component: inputTextArea,
                    isNull: true,
                    label: '备注信息',
                    placeholder: '',
                    rule: ''
                }
                ]
            }],
            listComponent: []
        }
    ],
    serialManage: [{
        settitle: '养殖基础信息管理',
        key: 'cultivate',
        tab: '饲料档案',
        url: 'org',
        searchPlaceholder: '请输入养殖区进行搜索',
        search: ['query_text', 'name'],
        theads: ['分类', '名称', '用途', '包装规格', '产地', '生产厂家名称', '联系方式', '图片', '备注信息'],
        protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'fax', 'meno'],
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
            components: [{
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '供货商名称',
                placeholder: '必填',
                rule: {required: true, trigger: 'blur'}
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
                name: 'contacts',
                type: 'text',
                component: null,
                isNull: true,
                label: '联系人',
                placeholder: '',
                rule: null
            },
            {
                name: 'phone',
                type: 'text',
                component: null,
                isNull: true,
                label: '电话',
                placeholder: '请输入11位的手机号（固话用-隔开）',
                rule: { validator: validate2.phone, trigger: 'blur' }
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
                name: '',
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
            }]
        }]
    }],
    feedManage: [{
        settitle: '饲料使用管理',
        key: 'fodderuse',
        tab: '饲料使用信息',
        url: 'fodderuse',
        searchPlaceholder: '请输入饲料名称进行搜索',
        search: ['query_text', 'name'],
        theads: ['使用日期', '饲料', '喂养方式', '专家', '操作人员', '喂养量', '类型状态', '备注'],
        protos: ['name', 'expert_area', 'org_name', 'degree', 'duty', 'title', 'address', 'meno'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        newComponent: [{
            tab: '饲料使用管理',
            components: [{
                type: 'select',
                component: inputSelect,
                isNull: false,
                label: '饲料名称',
                placeholder: '饲料名称',
                rule: '',
                options: [{
                    value: '',
                    label: '饲料名称'
                },
                {
                    value: '红苕汤羹',
                    label: '红苕汤羹'
                },
                {
                    value: '麦麸子',
                    label: '麦麸子'
                },
                {
                    value: '瓜果蔬菜',
                    label: '瓜果蔬菜'
                },
                {
                    value: '玉米面',
                    label: '玉米面'
                }
                ]
            },
            {
                type: 'text',
                component: inputText,
                isNull: true,
                label: '喂养方式',
                placeholder: '请填写数字（必填）单位是亩',
                rule: ''
            },
            {
                type: 'textselect',
                component: inputTextSelect,
                isNull: false,
                label: '平均喂养量',
                placeholder: '',
                rule: '',
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
                type: 'select',
                component: inputSelect,
                isNull: true,
                label: '指导专家',
                placeholder: '',
                rule: '',
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
                type: 'select',
                component: inputSelect,
                isNull: false,
                label: '饲养员',
                placeholder: '请选择饲养员',
                rule: '',
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
                type: 'date',
                component: inputDate,
                isNull: true,
                label: '喂养日期',
                placeholder: '',
                rule: ''
            },
            {
                type: 'textarea',
                component: inputTextArea,
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
                component: 'datePick'
            }]
        }]
    }],
    plagueManage: [{
        settitle: '病疫管理',
        key: 'expertManage',
        tab: '病疫信息',
        url: 'expert',
        searchPlaceholder: '请输入兽药名称',
        search: ['query_text', 'name'],
        theads: ['用药日期', '病情描述', '兽药', '专家', '操作人员', '用药量', '治疗方式', '备注'],
        protos: ['name', 'expert_area', 'org_name', 'degree', 'duty', 'title', 'address', 'meno'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        newComponent: [{
            tab: '新建病疫情信息',
            components: [{
                type: 'select',
                component: inputSelect,
                isNull: false,
                label: '兽药分类',
                placeholder: '请选择类别',
                rule: '',
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
                type: 'select',
                component: inputSelect,
                isNull: false,
                label: '兽药名称',
                placeholder: '',
                rule: '',
                options: [{
                    value: '',
                    label: '无'
                }
                ]
            },
            {
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '兽药日期',
                placeholder: '',
                rule: ''
            },
            {
                type: 'textselect',
                component: inputTextSelect,
                isNull: false,
                label: '平均施药量',
                placeholder: '请输入正确的数字（必填）',
                rule: '',
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
                type: 'text',
                component: inputText,
                isNull: true,
                label: '施药方式',
                placeholder: '',
                rule: ''
            },
            {
                type: 'select',
                component: inputSelect,
                isNull: false,
                label: '施药人',
                placeholder: '请选择操作人',
                rule: '',
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
                type: 'select',
                component: inputSelect,
                isNull: true,
                label: '指导专家',
                placeholder: '',
                rule: '',
                options: [{
                    value: '',
                    label: '无'
                }
                ]
            },
            {
                type: 'text',
                component: inputText,
                isNull: true,
                label: '病情描述',
                placeholder: '',
                rule: ''
            },
            {
                type: 'textarea',
                component: inputTextArea,
                isNull: true,
                label: '备注信息',
                placeholder: '',
                rule: ''
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
                component: 'datePick'
            }]
        }]
    }],
    quarantineManage: [{
        settitle: '检疫管理',
        key: 'waningConditionManage',
        tab: '检疫信息',
        url: 'waningcondition',
        searchPlaceholder: '请输入检测项目名称进行',
        theads: ['检测日期', '检测项目名称', '专家', '操作人员', '检测内容', '检测结果', '审批人', '检测报告图片', '备注'],
        protos: ['type', 'code', 'description'],
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
                type: 'text',
                component: inputText,
                isNull: false,
                label: '检测机构',
                placeholder: '',
                rule: ''
            },
            {
                type: 'text',
                component: inputText,
                isNull: false,
                label: '检测项目名称',
                placeholder: '',
                rule: ''
            },
            {
                type: 'text',
                component: inputText,
                isNull: true,
                label: '检测内容',
                placeholder: '',
                rule: ''
            },
            {
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '检测日期',
                placeholder: '',
                rule: ''
            },
            {
                type: 'select',
                component: inputSelect,
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
                type: 'text',
                component: inputText,
                isNull: true,
                label: '审批人',
                placeholder: '',
                rule: ''
            },
            {
                type: 'select',
                component: inputSelect,
                isNull: false,
                label: '经手人',
                placeholder: '请选择经手人',
                rule: '',
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
                type: 'select',
                component: inputSelect,
                isNull: true,
                label: '指导专家',
                placeholder: '无',
                rule: '',
                options: [{
                    value: '',
                    label: '无'
                }
                ]
            },
            {
                type: 'textarea',
                component: inputTextArea,
                isNull: true,
                label: '备注信息',
                placeholder: '',
                rule: ''
            }
            ]
        }
        ],
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
                    type: 'date',
                    component: 'datePick'
                }
            ]
        }]
    }],
    innocuityManage: [{
        settitle: '无害化管理',
        key: 'waningConditionManage',
        tab: '无害化信息',
        url: 'waningcondition',
        searchPlaceholder: '请输入检测项目名称进行',
        theads: ['无害化批次号', '操作日期', '操作内容', '实行原因', '指导专家', '备注信息'],
        protos: ['type', 'code', 'description', 'type', 'code', 'memo'],
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
                component: inputText,
                isNull: false,
                label: '养殖场名称',
                placeholder: '必填',
                rule: ''
            },
            {
                component: inputText,
                isNull: false,
                label: '养殖面积',
                placeholder: '请填写数字（必填）单位是亩',
                rule: ''
            },
            {
                component: inputText,
                isNull: true,
                label: '负责人',
                placeholder: '',
                rule: ''
            },
            {
                component: inputText,
                isNull: true,
                label: '养殖畜禽种类',
                placeholder: '',
                rule: ''
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
    slaughterManage: [{
        settitle: '出栏管理',
        key: 'waningConditionManage',
        tab: '出栏信息',
        url: 'waningcondition',
        searchPlaceholder: '请输入检测项目名称进行',
        theads: ['出栏日期', '批次号', '出栏数量', '操作人员', '状态', '备注'],
        protos: ['type', 'code', 'description', 'code', 'description', 'memo'],
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
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '出栏日期',
                placeholder: '',
                rule: ''
            },
            {
                type: 'select',
                component: inputSelect,
                isNull: false,
                label: '出栏人',
                placeholder: '请选择人物',
                rule: '',
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
                type: 'textarea',
                component: inputTextArea,
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
                component: 'datePick'
            }]
        }]
    }],
    planManage: [{
        settitle: '养殖计划管理',
        key: 'waningConditionManage',
        tab: '养殖计划信息',
        url: 'waningcondition',
        searchPlaceholder: '请输入检测项目名称进行',
        theads: ['批次号', '计划日期', '操作类型', '安排人员', '计划内容', '操作用户', '备注'],
        protos: ['type', 'code', 'description', 'code', 'description', 'description', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        listComponent: []
    }],
    petProcess: [{
        settitle: '加工批次管理',
        key: 'planManage',
        tab: '加工批次信息',
        url: 'plan',
        searchPlaceholder: '请输入产品名称进行搜索',
        theads: ['加工批次号', '产品', '包装日期', '数量(重量)', '单位', '操作人', '录入人', '备注信息'],
        protos: ['plan_type_name', 'name', 'content', 'name', 'content', 'name', 'content', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50],
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
                component: 'datePick'
            }]
        }]
    }],
    petDectect: [{
        settitle: '检验检测管理',
        key: 'planManage',
        tab: '检验检测信息',
        url: 'plan',
        searchPlaceholder: '请输入入库批次号',
        theads: ['检测名称', '检测内容', '检测日期', '检测结果', '检测机构', '负责人', '处理方法', '图片报告', '备注'],
        protos: ['plan_type_name', 'name', 'content', 'name', 'content', 'name', 'content', 'name', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
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
                component: 'datePick'
            }]
        }]
    }],
    petTrace: [{
        settitle: '产品溯源管理',
        key: 'code',
        tab: '产品溯源码信息',
        url: 'code',
        searchPlaceholder: '请输入溯源码搜索',
        theads: ['加工批次号', '产品溯源码', '产品名称', '生产日期', 'RFID', '肢体部位', '产地', '溯源次数', '备注信息'],
        protos: ['plan_type_name', 'name', 'content', 'name', 'name', 'name', 'name', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
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
                component: 'datePick'
            }]
        }],
        moreComponent: [{value: '打印'}]
    }],
    petSerial: [{
        settitle: '加工批次管理',
        key: 'planManage',
        tab: '加工批次信息',
        url: 'plan',
        searchPlaceholder: '请输入加工批次号',
        theads: ['加工批次号', '加工日期', '加工人', '原始数量', '成品数量', '耗损率', '是否生成', '备注信息'],
        protos: ['plan_type_name', 'name', 'content', 'name', 'content', 'name', 'content', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50],
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
        }],
        moreComponent: [{value: '状态'}]
    }],
    petBack: [{
        settitle: '产品溯源管理',
        key: 'code',
        tab: '产品溯源码信息',
        url: 'code',
        searchPlaceholder: '请输入溯源码搜索',
        theads: ['加工批次号', '产品溯源码', '产品名称', '生产日期', 'RFID', '肢体部位', '产地', '溯源次数', '备注信息'],
        protos: ['plan_type_name', 'name', 'content', 'name', 'content', 'name', 'content', 'name', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
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
        }],
        moreComponent: [{value: '打印'}]
    }],
    petOutput: [{
        settitle: '产品出库管理',
        key: 'planManage',
        tab: '出库订单信息',
        url: 'plan',
        searchPlaceholder: '请输入出库订单号进行搜索',
        theads: ['出库叮当号', '订单日期', '收货单位', '数量', '出库人', '收货地点', '收货人', '收货电话', '备注信息'],
        protos: ['plan_type_name', 'name', 'content', 'name', 'content', 'name', 'content', 'name', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        listComponent: []
    }
    ],
    plantBase: [
        {
            settitle: '种植基础资料',
            key: 'plantation',
            tab: '种植场',
            url: 'plantation',
            searchPlaceholder: '请输入种植场进行搜索',
            theads: ['种植场名称', '种植面积', '种植面积单位', '负责人', '联系电话', '详细地址', '备注信息'],
            protos: ['name', 'area', 'unit', 'director', 'phone', 'address', 'meno'],
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
            listComponent: [],
            moreComponent: [{value: '视频'}],
            newComponent: [{
                tab: '新建种植场信息',
                components: [{
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '种植场名称',
                    placeholder: '必填',
                    rule: {required: true, message: '请输入种植场名称', trigger: 'blur'}
                },
                {
                    name: 'name',
                    type: 'textSelect',
                    component: inputTextSelect,
                    isNull: false,
                    label: '种植面积',
                    placeholder: '请填写数字（必填）',
                    options: [{
                        value: '',
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
                    ]
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '联系电话',
                    placeholder: '请输入11位的手机号（固话用-隔开）'
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '联系地址',
                    placeholder: ''
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '负责人',
                    placeholder: ''
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '视频检测设备号',
                    placeholder: ''
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
                tab: '编辑种植场信息',
                components: [{
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '种植场名称',
                    placeholder: '必填',
                    rule: {required: true, message: '请输入种植场名称', trigger: 'blur'}
                },
                {
                    name: '',
                    type: 'textSelect',
                    component: inputTextSelect,
                    isNull: false,
                    label: '种植面积',
                    placeholder: '请填写数字（必填）',
                    options: [{
                        value: '',
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
                    ]
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '联系电话',
                    placeholder: '请输入11位的手机号（固话用-隔开）'
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '联系地址',
                    placeholder: ''
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '负责人',
                    placeholder: ''
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '视频检测设备号',
                    placeholder: ''
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
            }]
        },
        {
            settitle: '种植基础资料',
            key: 'planta',
            tab: '种植区',
            url: 'planta',
            searchPlaceholder: '请输入种植区进行搜索',
            theads: ['种植场名称', '种植区名称', '种植面积', '种植面积单位', '负责人', '联系电话', '地址', '图片', '备注'],
            protos: ['name', 'area', 'area_unit', 'director', 'phone', 'address', 'meno'],
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
            listComponent: [{
                components: [{
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
                }]
            }]
        },
        {
            settitle: '种植基础资料',
            key: 'plant',
            tab: '果蔬档案',
            url: 'plant',
            searchPlaceholder: '请输入果蔬名称进行搜索',
            theads: ['名称', '分类', '生长周期（天）', '基本特征描述', '果蔬图片', '备注信息'],
            protos: ['name', 'category_name', 'growth_cycle', 'description', 'img', 'meno'],
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
                    type: 'vegetableBtn',
                    component: 'categoryBtn'
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
                }]
            }],
            newComponent: [{
                tab: '新建果蔬档案',
                components: [{
                    name: '',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '果蔬类别',
                    placeholder: '必填',
                    rule: {required: true, message: '请输入模块类型', trigger: 'blur'}
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '果蔬名称',
                    placeholder: '必填'
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
                    name: '',
                    type: 'file',
                    component: inputFile,
                    isNull: false,
                    placeholder: ''
                },
                {
                    name: 'category_name',
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
                tab: '编辑果蔬档案',
                components: [{
                    name: '',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '果蔬类别',
                    placeholder: '必填',
                    rule: {required: true, message: '请输入模块类型', trigger: 'blur'}
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '果蔬名称',
                    placeholder: '必填'
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
                    name: '',
                    type: 'file',
                    component: inputFile,
                    isNull: false,
                    placeholder: ''
                },
                {
                    name: 'category_name',
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
            }]
        },
        {
            settitle: '种植基础资料',
            key: 'manure',
            tab: '肥料档案',
            url: 'manure',
            searchPlaceholder: '请输入肥料名称',
            theads: ['分类', '用途', '包装规格', '日期', '产地', '经销商名称', '联系方式', '备注'],
            protos: ['name', 'usage', 'specification', 'date', 'origin', 'specification', 'phone', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50],
            typeComponent: [{
                component: importBtn
            },
            {
                component: output
            },
            {
                component: categoryBtn
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
                    }
                ]
            }],
            newComponent: [{
                tab: '新建肥料档案',
                components: [{
                    name: '',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '分类',
                    placeholder: '必填',
                    rule: {required: true, message: '请输入模块类型', trigger: 'blur'}
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '肥料名称',
                    placeholder: '必填'
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
                tab: '编辑种植场信息',
                components: [{
                    name: '',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '分类',
                    placeholder: '必填',
                    rule: {required: true, message: '请输入模块类型', trigger: 'blur'}
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '肥料名称',
                    placeholder: '必填'
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
            searchPlaceholder: '请输入农药名称',
            theads: ['名称', '分类', '用途', '防治对象', '药物毒性等级', '包装规格', '生产厂家名称', '产地', '联系方式', '备注'],
            protos: ['name', 'category_name', 'usage', 'control_objects', 'toxicity_grade', 'specification', 'manufacturer', 'origin', 'phone', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            typeComponent: [{
                component: importBtn
            },
            {
                component: output
            },
            {
                component: categoryBtn
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
                    }
                ]
            }],
            newComponent: [{
                tab: '新建农药档案',
                components: [{
                    name: '',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '分类',
                    placeholder: '必填',
                    rule: {required: true, message: '请输入模块类型', trigger: 'blur'}
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '农药名称',
                    placeholder: '必填'
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
                    name: 'dealer',
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
                    rule: {required: true, message: '请输入模块类型', trigger: 'blur'}
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
                    name: 'dealer',
                    type: 'text',
                    component: null,
                    isNull: false,
                    placeholder: '',
                    label: '经销商名称'
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
                tab: '编辑种植场信息',
                components: [{
                    name: '',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '分类',
                    placeholder: '必填',
                    rule: {required: true, message: '请输入模块类型', trigger: 'blur'}
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '农药名称',
                    placeholder: '必填',
                    rule: null
                },
                {
                    name: 'usage',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '用途',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'dealer',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '防治对象',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'toxicity_grade',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '毒性等级',
                    placeholder: '必填',
                    rule: {required: true, message: '请输入模块类型', trigger: 'blur'}
                },
                {
                    name: 'specification',
                    type: 'text',
                    component: null,
                    isNull: false,
                    placeholder: '',
                    label: '包装规格',
                    rule: null
                },
                {
                    name: 'phone',
                    type: 'text',
                    component: null,
                    isNull: false,
                    placeholder: '请输入11位的手机号（固话用-隔开）',
                    label: '联系方式',
                    rule: null
                },
                {
                    name: 'dealer',
                    type: 'text',
                    component: null,
                    isNull: false,
                    placeholder: '',
                    label: '经销商名称',
                    rule: null
                },
                {
                    name: 'origin',
                    type: 'text',
                    component: null,
                    isNull: false,
                    placeholder: '',
                    label: '产地',
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
    plantSerial: [{
        settitle: '种植批次管理',
        key: 'cultivate',
        tab: '种植批次信息',
        url: 'cultivate',
        theads: ['种植批次号', '果蔬id', '种植日期', '种植面积', '面积单位', '种植数量', '种植人', '录入人', '备注'],
        protos: ['plan_type_name', 'name', 'content', 'name', 'content', 'name', 'content', 'name', 'content'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
        listComponent: [{
            components: [{
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
    plantFarm: [
        {
            settitle: '农事管理',
            key: 'planManage',
            tab: '施肥信息',
            url: 'plan',
            searchPlaceholder: 'q请输入肥料名称进行搜索',
            theads: ['批次号', '施肥日期', '天气', '肥料', '施用量(Kg)', '施肥人', '施肥方法', '录入人', '备注'],
            protos: ['plan_type_name', 'name', 'content', 'name', 'content', 'name', 'content', 'name', 'content'],
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
        }
    ],
    plantProduct: [{
        settitle: '生产计划管理',
        key: 'planManage',
        tab: '生产计划信息',
        url: 'plan',
        searchPlaceholder: '请输入计划内容进行搜索',
        theads: ['计划日期', '操作模块', '安排人员', '计划内容', '操作用户', '备注'],
        protos: ['plan_type_name', 'name', 'content', 'name', 'content', 'name'],
        widths: [50, 50, 50, 50, 50, 50],
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
                            label: '产品品牌'
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
        }]
    }],
    plantHarvest: [{
        settitle: '采收管理',
        key: 'harvest',
        tab: '采收批次信息',
        url: 'harvest',
        searchPlaceholder: '请输入采收批次号进行搜索',
        theads: ['种植', '批次号', '种植日期', '采收数量', '入库部门', '存放仓库位置', '操作人', '录入人', '备注'],
        protos: ['plan_type_name', 'name', 'content', 'name', 'content', 'name', 'content', 'name', 'content'],
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
                            label: '产品品牌'
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
        }]
    }],
    vegetableSerial: [{
        settitle: '加工批次管理',
        key: 'pack-detail',
        tab: '加工批次信息',
        url: 'pack-detail',
        searchPlaceholder: '请输入加工批次号',
        theads: ['加工批次号', '产品', '包装日期', '数量（重量）', '单位', '操作人', '录入人', '备注'],
        protos: ['plan_type_name', 'name', 'content', 'name', 'content', 'name', 'content', 'name'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50],
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
                }
            ]
        }]
    }],
    vegetableTrace: [{
        settitle: '产品溯源管理',
        key: 'code',
        tab: '产品溯源信息',
        url: 'code',
        searchPlaceholder: '请输入溯源码搜索',
        theads: ['追溯编码', '加工批次', '追溯次数', '加工日期', '备注'],
        protos: ['plan_type_name', 'name', 'content', 'content', 'content'],
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
                        {
                            value: '',
                            label: '产品品牌'
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
        }]
    }],
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
            theads: ['驾驶员姓名', '性别', '联系电话', '取得驾照日期', '出生日期', '驾照类型(A1、C2...)', '备注信息'],
            protos: ['name', 'sex', 'phone', 'driver', 'birth', 'type', 'memo'],
            widths: [50, 50, 50, 50, 50, 50, 50],
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
                    name: 'sex',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '性别',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur'},
                    options: [{
                        value: '', label: '男'
                    },
                    {
                        value: '女', label: '女'
                    }
                    ]
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
                    name: 'sex',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '性别',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur'},
                    options: [{
                        value: '', label: '男'
                    },
                    {
                        value: '女', label: '女'
                    }
                    ]
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
    logisticSerial: [{
        settitle: '物流批次管理',
        key: 'delivery',
        tab: '物流批次信息',
        url: 'delivery',
        searchPlaceholder: '请输入物流批次号',
        theads: ['物流批次号', '物流日期', '货物名称', '数量', '运输方式(自运、托运、自提)', '操作人员', '物流状态', '备注'],
        protos: ['serial', 'date', 'name', 'plan_type_name', 'transportable_type', 'operate_name', 'plan_type_name', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50],
        typeComponent: [
            {
                component: output
            }],
        listComponent: [{
            components: [{
                type: 'select',
                component: selectSection,
                options: [{
                    value: '',
                    label: '运输方式'
                },
                {
                    value: '自运',
                    label: '自运'
                },
                {
                    value: '托运',
                    label: '托运'
                },
                {
                    value: '自提',
                    label: '自提'
                }]
            },
            {
                type: 'date',
                components: 'datePick'
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
    saleProduct: [
        {
            settitle: '销售商品库管理',
            key: 'goods',
            tab: '商品入库信息',
            url: 'goods',
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
    saleInput: [{
        settitle: '销售入库管理',
        key: 'storage',
        tab: '销售入库信息',
        url: 'storage',
        searchPlaceholder: '请输入商品名称进行搜索',
        theads: ['入库批次号', '商品来源', '入库日期', '仓库名称', '商品名称', '商品总数量', '库存数量', '入库人', '备注信息'],
        protos: ['plan_type_name', 'name', 'content', 'name', 'content', 'name', 'content', 'name', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
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
                    components: 'datePick'
                }
            ]
        }]
    }],
    saleOrder: [{
        settitle: '销售订单管理',
        key: 'sell',
        tab: '销售订单信息',
        url: 'sell',
        searchPlaceholder: '请输入销售订单号',
        theads: ['订单号', '商品来源', '销售日期', '客户名称', '商品名称', '数量', '销售员', '备注'],
        protos: ['plan_type_name', 'name', 'content', 'name', 'content', 'name', 'content', 'name', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50],
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
                    components: 'datePick'
                }
            ]
        }]
    }],
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
    systemUser: [{
        settitle: '用户管理',
        key: 'planManage',
        tab: '销售订单信息',
        url: 'plan',
        theads: ['用户名', '姓名', '工号', '邮箱', '电话号码', '所属公司', '出生日期', '所属部门', '用户类型', '入职日期', '备注'],
        protos: ['plan_type_name', 'name', 'content', 'name', 'content', 'name', 'content', 'name', 'content', 'name', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
        listComponent: [{
            components: [
                {
                    type: 'date',
                    components: 'datePick'
                }
            ]
        }]
    }],
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
    // 运营管理
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
