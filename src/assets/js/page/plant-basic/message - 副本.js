
var importBtn = require('../../components/public/import-btn.vue')
var newbuildBtn = require('../../components/public/newbuild-btn.vue')
var output = require('../../components/public/output.vue')
var selectSection = require('../../components/public/select-section.vue')
var datePick = require('../../components/public/datePick.vue')

var categoryBtn = require('../../components/public/categoryBtn.vue')
var inputText = require('../../components/public/inputText.vue')
var inputTextArea = require('../../components/public/inputTextArea.vue')
var inputSelect = require('../../components/public/inputSelect.vue')
var inputDate = require('../../components/public/inputDate.vue')
var inputFile = require('../../components/public/inputFile.vue')
var inputTextSelect = require('../../components/public/inputTextSelect.vue')

export default {
  categoryBase:
  [{
    settitle: '分类档案管理',
    key: 'category',
    tab: '分类档案信息',
    url: 'category',
    searchPlaceholder: '请输入分类名称进行搜索',
    theads: ['分类名称', '模块类型', '备注信息'],
    protos: ['name', 'type', 'memo'],
    widths: [50, 50, 50],
    search: ['type'],
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
        }
        ]
      }]
    }],
    newComponent: [{
      tab: '养殖场信息',
      components: [{
        type: 'text',
        component: inputText,
        isNull: false,
        label: '养殖场名称',
        placeholder: '必填',
        rule: ''
      },
      {
        type: 'text',
        component: inputText,
        isNull: false,
        label: '养殖面积',
        placeholder: '请填写数字（必填）单位是亩',
        rule: ''
      },
      {
        type: 'text',
        component: inputText,
        isNull: true,
        label: '负责人',
        placeholder: '',
        rule: ''
      },
      {
        type: 'text',
        component: inputText,
        isNull: true,
        label: '养殖畜禽种类',
        placeholder: '',
        rule: ''
      },
      {
        type: 'text',
        component: inputText,
        isNull: true,
        label: '养殖规模',
        placeholder: '',
        rule: ''
      },
      {
        type: 'text',
        component: inputText,
        isNull: true,
        label: '地址',
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
    }]
  }],
  personFile: [{
    settitle: '人员档案管理',
    key: 'operate',
    tab: '人员档案信息',
    url: 'operate',
    searchPlaceholder: '请输入人物姓名进行搜索',
    theads: ['姓名', '身份', '性别', '年龄', '联系方式', '地址', '图片', '备注信息'],
    protos: ['name', 'identity', 'sex', 'age', 'phone', 'address', 'img', 'meno'],
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
        type: 'selectNot',
        component: selectSection
      }]
    }],
    newComponent: [{
      tab: '新建人员档案信息',
      components: [{
        type: 'text',
        component: inputText,
        isNull: false,
        label: '养殖场名称',
        placeholder: '必填',
        rule: ''
      },
      {
        type: 'text',
        component: inputText,
        isNull: false,
        label: '养殖面积',
        placeholder: '请填写数字（必填）单位是亩',
        rule: ''
      },
      {
        type: 'text',
        component: inputText,
        isNull: true,
        label: '负责人',
        placeholder: '',
        rule: ''
      },
      {
        type: 'text',
        component: inputText,
        isNull: true,
        label: '养殖畜禽种类',
        placeholder: '',
        rule: ''
      },
      {
        type: 'text',
        component: inputText,
        isNull: true,
        label: '养殖规模',
        placeholder: '',
        rule: ''
      },
      {
        type: 'text',
        component: inputText,
        isNull: true,
        label: '地址',
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
    }]
  }

  ],
  expertFile: [{
    settitle: '专家档案管理',
    key: 'expert',
    tab: '专家档案信息',
    url: 'expert',
    searchPlaceholder: '请输入养殖场进行搜索',
    search: ['query_text', 'name'],
    theads: ['专家名称', '级别', '研究领域', '单位', '出生年月日', '性别', '联系方式', '图片'],
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
      tab: '新建专家档案信息',
      components: [{
        name: 'farmName',
        type: 'text',
        component: inputText,
        isNull: false,
        label: '养殖场名称',
        placeholder: '必填',
        rule: 'required'
      },
      {
        name: 'area',
        type: 'text',
        component: inputText,
        isNull: false,
        label: '养殖面积',
        placeholder: '请填写数字（必填）单位是亩',
        rule: 'required|numeric'
      },
      {
        name: 'principal',
        type: 'text',
        component: inputText,
        isNull: true,
        label: '负责人',
        placeholder: '',
        rule: ''
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
        name: 'address',
        type: 'text',
        component: inputText,
        isNull: true,
        label: '地址',
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
  }

  ],
  customerFile: [{
    settitle: '客户档案管理',
    key: 'client',
    tab: '客户档案信息',
    url: 'client',
    searchPlaceholder: '请输入养殖场进行搜索',
    search: ['query_text', 'name'],
    theads: ['管理客户类型', '客户名称', '联系人', '电话', '地址', '传真', '邮箱', '备注'],
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
      tab: '新建客户档案信息',
      components: [{
        name: 'farmName',
        type: 'text',
        component: inputText,
        isNull: false,
        label: '养殖场名称',
        placeholder: '必填',
        rule: 'required'
      },
      {
        name: 'area',
        type: 'text',
        component: inputText,
        isNull: false,
        label: '养殖面积',
        placeholder: '请填写数字（必填）单位是亩',
        rule: 'required|numeric'
      },
      {
        name: 'principal',
        type: 'text',
        component: inputText,
        isNull: true,
        label: '负责人',
        placeholder: '',
        rule: ''
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
        name: 'address',
        type: 'text',
        component: inputText,
        isNull: true,
        label: '地址',
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
      }
      ]
    }],
    listComponent: []
  }],
  cultivateBase: [{
    settitle: '养殖基础信息管理',
    key: 'cultivation',
    tab: '养殖场信息',
    url: 'org',
    searchPlaceholder: '请输入养殖场进行搜索',
    search: ['query_text', 'name'],
    theads: ['序号', '养殖场名称', '养殖面积', '负责人', '养殖畜禽种类', '养殖规模', '详细地址', '备注信息'],
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
        name: 'farmName',
        type: 'text',
        component: inputText,
        isNull: false,
        label: '养殖场名称',
        placeholder: '必填',
        rule: 'required'
      },
      {
        name: 'area',
        type: 'text',
        component: inputText,
        isNull: false,
        label: '养殖面积',
        placeholder: '请填写数字（必填）单位是亩',
        rule: 'required|numeric'
      },
      {
        name: 'principal',
        type: 'text',
        component: inputText,
        isNull: true,
        label: '负责人',
        placeholder: '',
        rule: ''
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
        name: 'address',
        type: 'text',
        component: inputText,
        isNull: true,
        label: '地址',
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
      }
      ]
    }],
    listComponent: []
  }

  ],
  supplierFile: [{
    settitle: '供货商档案管理',
    key: 'supplier',
    tab: '供货商档案信息',
    url: 'supplier',
    searchPlaceholder: '请输入养殖场进行搜索',
    search: ['query_text', 'name'],
    theads: ['供货商名称', '电话', '联系人', '地址', '备注'],
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
      tab: '新建供货商档案信息',
      components: [{
        type: 'text',
        component: inputText,
        isNull: false,
        label: '养殖场名称',
        placeholder: '必填',
        rule: ''
      },
      {
        type: 'text',
        component: inputText,
        isNull: false,
        label: '养殖面积',
        placeholder: '请填写数字（必填）单位是亩',
        rule: ''
      },
      {
        type: 'text',
        component: inputText,
        isNull: true,
        label: '负责人',
        placeholder: '',
        rule: ''
      },
      {
        type: 'text',
        component: inputText,
        isNull: true,
        label: '养殖畜禽种类',
        placeholder: '',
        rule: ''
      },
      {
        type: 'text',
        component: inputText,
        isNull: true,
        label: '养殖规模',
        placeholder: '',
        rule: ''
      },
      {
        type: 'text',
        component: inputText,
        isNull: true,
        label: '地址',
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
    }],
    listComponent: []
  }

  ],
  productFile: [{
    settitle: '产品档案管理',
    key: 'product',
    tab: '产品档案信息',
    url: 'product',
    searchPlaceholder: '请输入养殖场进行搜索',
    search: ['query_text', 'name'],
    theads: ['名称', '执行标准', '卫生标准', '商品型号', '商品简介', '包装规格', '保质期', '食用方法', '存储方法', '配料信息', '图片', '备注'],
    protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
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
        type: 'text',
        component: inputText,
        isNull: false,
        label: '养殖场名称',
        placeholder: '必填',
        rule: ''
      },
      {
        type: 'text',
        component: inputText,
        isNull: false,
        label: '养殖面积',
        placeholder: '请填写数字（必填）单位是亩',
        rule: ''
      },
      {
        type: 'text',
        component: inputText,
        isNull: true,
        label: '负责人',
        placeholder: '',
        rule: ''
      },
      {
        type: 'text',
        component: inputText,
        isNull: true,
        label: '养殖畜禽种类',
        placeholder: '',
        rule: ''
      },
      {
        type: 'text',
        component: inputText,
        isNull: true,
        label: '养殖规模',
        placeholder: '',
        rule: ''
      },
      {
        type: 'text',
        component: inputText,
        isNull: true,
        label: '地址',
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
    }],
    listComponent: []
  }

  ],
  // baseManage: [{
  //   settitle: '基础信息管理',
  //   key: 'cultivation',
  //   tab: '畜禽档案',
  //   url: 'org',
  //   searchPlaceholder: '请输入养殖场进行搜索',
  //   search: ['query_text', 'name'],
  //   theads: ['畜禽名称', '描述', '耳标位置', '图片', '备注信息'],
  //   protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
  //   widths: [50, 50, 50, 50, 50, 50],
  //   typeComponent: [{
  //     component: importBtn
  //   },
  //   {
  //     component: output
  //   },
  //   {
  //     component: newbuildBtn
  //   }],
  //   newComponent: [{
  //     tab: '新建畜禽档案',
  //     components: [{
  //       name: 'animalName',
  //       type: 'text',
  //       component: inputText,
  //       isNull: false,
  //       label: '畜禽名称',
  //       placeholder: '必填',
  //       rule: 'required'
  //     },
  //     {
  //       name: 'varieties',
  //       type: 'text',
  //       component: inputText,
  //       isNull: true,
  //       label: '品种描述',
  //       placeholder: '请填写数字（必填）单位是亩',
  //       rule: 'numeric'
  //     },
  //     {
  //       name: 'RFID',
  //       type: 'text',
  //       component: inputText,
  //       isNull: true,
  //       label: 'RFID位置',
  //       placeholder: '',
  //       rule: ''
  //     },
  //     {
  //       name: 'remarkInfo',
  //       type: 'textarea',
  //       component: inputTextArea,
  //       isNull: true,
  //       label: '备注信息',
  //       placeholder: '',
  //       rule: ''
  //     },
  //     {
  //       name: 'file',
  //       type: 'file',
  //       component: inputFile,
  //       isNull: true,
  //       label: '',
  //       placeholder: '',
  //       rule: ''
  //     }
  //     ]
  //   }],
  //   listComponent: [{
  //     components: [{
  //       type: 'select',
  //       component: selectSection,
  //       options: [{
  //         value: '',
  //         label: '产品品牌'
  //       },
  //       {
  //         value: '康乐牌',
  //         label: '康乐牌'
  //       }]
  //     }]
  //   }]
  // },
  // {
  //   settitle: '养殖基础信息管理',
  //   key: 'cultivate',
  //   tab: '饲料档案',
  //   url: 'org',
  //   searchPlaceholder: '请输入养殖区进行搜索',
  //   search: ['query_text', 'name'],
  //   theads: ['分类', '名称', '用途', '包装规格', '产地', '生产厂家名称', '联系方式', '图片', '备注信息'],
  //   protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
  //   widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
  //   typeComponent: [{
  //     component: importBtn
  //   },
  //   {
  //     component: output
  //   },
  //   {
  //     component: newbuildBtn
  //   }],
  //   newComponent: [{
  //     tab: '新建饲料档案',
  //     components: [{
  //       name: 'fodderClass',
  //       type: 'select',
  //       component: inputSelect,
  //       isNull: false,
  //       label: '饲料类别',
  //       placeholder: '请选择类别',
  //       rule: 'required',
  //       options: [{
  //         value: '',
  //         label: '请选择类别'
  //       },
  //       {
  //         value: '粗粮类',
  //         label: '粗粮类'
  //       },
  //       {
  //         value: '维生素类',
  //         label: '维生素类'
  //       }]
  //     },
  //     {
  //       name: 'fodderName',
  //       type: 'text',
  //       component: inputText,
  //       isNull: false,
  //       label: '饲料名称',
  //       placeholder: '必填',
  //       rule: 'required'
  //     },
  //     {
  //       name: 'use',
  //       type: 'text',
  //       component: inputText,
  //       isNull: true,
  //       label: '用途',
  //       placeholder: '',
  //       rule: ''
  //     },
  //     {
  //       name: 'packingSize',
  //       type: 'text',
  //       component: inputText,
  //       isNull: true,
  //       label: '包装规格',
  //       placeholder: '',
  //       rule: ''
  //     },
  //     {
  //       name: 'manufacturerName',
  //       type: 'text',
  //       component: inputText,
  //       isNull: true,
  //       label: '生产厂家名称',
  //       placeholder: '',
  //       rule: ''
  //     },
  //     {
  //       name: 'origin',
  //       type: 'text',
  //       component: inputText,
  //       isNull: true,
  //       label: '产地',
  //       placeholder: '',
  //       rule: ''
  //     },
  //     {
  //       name: 'contactWay',
  //       type: 'text',
  //       component: inputText,
  //       isNull: true,
  //       label: '联系方式',
  //       placeholder: '请输入11位的手机号（固话用-隔开）',
  //       rule: 'phones'
  //     },
  //     {
  //       name: 'remarkInfo',
  //       type: 'textarea',
  //       component: inputTextArea,
  //       isNull: true,
  //       label: '备注信息',
  //       placeholder: '',
  //       rule: ''
  //     }
  //     ]
  //   }],

  //   listComponent: [{
  //     components: [{
  //       type: 'select',
  //       component: selectSection,
  //       options: [{
  //         value: '',
  //         label: '产品品牌'
  //       },
  //       {
  //         value: '康乐牌',
  //         label: '康乐牌'
  //       }]
  //     }]
  //   }]
  // },
  // {
  //   settitle: '养殖基础信息管理',
  //   key: 'livestock',
  //   tab: '兽药档案',
  //   url: 'org',
  //   searchPlaceholder: '请输入畜禽名称进行搜索',
  //   search: ['query_text', 'name'],
  //   theads: ['分类', '名称', '用途', '包装规格', '产地', '生产厂家名称', '联系方式', '图片', '备注信息'],
  //   protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
  //   widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
  //   typeComponent: [{
  //     component: importBtn
  //   },
  //   {
  //     component: output
  //   },
  //   {
  //     component: newbuildBtn
  //   }],
  //   newComponent: [{
  //     tab: '新建农药档案',
  //     components: [{
  //       type: 'select',
  //       component: inputSelect,
  //       isNull: false,
  //       label: '畜药类别',
  //       placeholder: '请选择类别',
  //       rule: '',
  //       options: [{
  //         value: '',
  //         label: '请选择类别'
  //       },
  //       {
  //         value: '疾病防治药',
  //         label: '疾病防治药'
  //       }
  //       ]
  //     },
  //     {
  //       type: 'text',
  //       component: inputText,
  //       isNull: false,
  //       label: '兽药名称',
  //       placeholder: '必填',
  //       rule: ''
  //     },
  //     {
  //       type: 'text',
  //       component: inputText,
  //       isNull: true,
  //       label: '用途',
  //       placeholder: '',
  //       rule: ''
  //     },
  //     {
  //       type: 'text',
  //       component: inputText,
  //       isNull: true,
  //       label: '包装规格',
  //       placeholder: '',
  //       rule: ''
  //     },
  //     {
  //       type: 'text',
  //       component: inputText,
  //       isNull: true,
  //       label: '生产厂家名称',
  //       placeholder: '',
  //       rule: ''
  //     },
  //     {
  //       type: 'text',
  //       component: inputText,
  //       isNull: true,
  //       label: '产地',
  //       placeholder: '',
  //       rule: ''
  //     },
  //     {
  //       type: 'text',
  //       component: inputText,
  //       isNull: true,
  //       label: '联系方式',
  //       placeholder: '请输入11位的手机号（固话用-隔开）',
  //       rule: ''
  //     },
  //     {
  //       type: 'textarea',
  //       component: inputTextArea,
  //       isNull: true,
  //       label: '备注信息',
  //       placeholder: '',
  //       rule: ''
  //     }
  //     ]
  //   }],
  //   listComponent: []
  // },
  // {
  //   settitle: '养殖基础信息管理',
  //   key: 'feed',
  //   tab: '饲料档案',
  //   url: 'org',
  //   searchPlaceholder: '请输入饲料名称',
  //   search: ['query_text', 'name'],
  //   theads: ['饲料类别', '饲料名称', '用途', '包装规格', '生产厂家名称', '产地', '联系方式', '备注信息'],
  //   protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
  //   widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
  //   typeComponent: [{
  //     component: importBtn
  //   },
  //   {
  //     component: output
  //   },
  //   {
  //     component: newbuildBtn
  //   }],
  //   newComponent: [{
  //     tab: '新建饲料档案',
  //     components: [{
  //       type: 'select',
  //       component: inputSelect,
  //       isNull: false,
  //       label: '饲料类别',
  //       placeholder: '请选择类别',
  //       rule: '',
  //       options: [{
  //         value: '',
  //         label: '请选择类别'
  //       },
  //       {
  //         value: '粗粮类',
  //         label: '粗粮类'
  //       },
  //       {
  //         value: '维生素类',
  //         label: '维生素类'
  //       }]
  //     },
  //     {
  //       type: 'text',
  //       component: inputText,
  //       isNull: false,
  //       label: '饲料名称',
  //       placeholder: '必填',
  //       rule: ''
  //     },
  //     {
  //       type: 'text',
  //       component: inputText,
  //       isNull: true,
  //       label: '用途',
  //       placeholder: '',
  //       rule: ''
  //     },
  //     {
  //       type: 'text',
  //       component: inputText,
  //       isNull: true,
  //       label: '包装规格',
  //       placeholder: '',
  //       rule: ''
  //     },
  //     {
  //       type: 'text',
  //       component: inputText,
  //       isNull: true,
  //       label: '生产厂家名称',
  //       placeholder: '',
  //       rule: ''
  //     },
  //     {
  //       type: 'text',
  //       component: inputText,
  //       isNull: true,
  //       label: '产地',
  //       placeholder: '',
  //       rule: ''
  //     },
  //     {
  //       type: 'text',
  //       component: inputText,
  //       isNull: true,
  //       label: '联系方式',
  //       placeholder: '请输入11位的手机号（固话用-隔开）',
  //       rule: ''
  //     },
  //     {
  //       type: 'textarea',
  //       component: inputTextArea,
  //       isNull: true,
  //       label: '备注信息',
  //       placeholder: '',
  //       rule: ''
  //     }
  //     ]
  //   }],
  //   listComponent: []
  // },
  // {
  //   settitle: '养殖基础信息管理',
  //   key: 'animalDrugs',
  //   tab: '兽药档案',
  //   url: 'org',
  //   searchPlaceholder: '请输入兽药名称',
  //   search: ['query_text', 'name'],
  //   theads: ['兽药类别', '兽药名称', '用途', '包装规格', '生产厂家名称', '产地', '联系方式', '备注'],
  //   protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
  //   widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
  //   typeComponent: [{
  //     component: importBtn
  //   },
  //   {
  //     component: output
  //   },
  //   {
  //     component: newbuildBtn
  //   }],
  //   newComponent: [{
  //     tab: '新建农药档案',
  //     components: [{
  //       type: 'select',
  //       component: inputSelect,
  //       isNull: false,
  //       label: '畜药类别',
  //       placeholder: '请选择类别',
  //       rule: '',
  //       options: [{
  //         value: '',
  //         label: '请选择类别'
  //       },
  //       {
  //         value: '疾病防治药',
  //         label: '疾病防治药'
  //       }
  //       ]
  //     },
  //     {
  //       type: 'text',
  //       component: inputText,
  //       isNull: false,
  //       label: '兽药名称',
  //       placeholder: '必填',
  //       rule: ''
  //     },
  //     {
  //       type: 'text',
  //       component: inputText,
  //       isNull: true,
  //       label: '用途',
  //       placeholder: '',
  //       rule: ''
  //     },
  //     {
  //       type: 'text',
  //       component: inputText,
  //       isNull: true,
  //       label: '包装规格',
  //       placeholder: '',
  //       rule: ''
  //     },
  //     {
  //       type: 'text',
  //       component: inputText,
  //       isNull: true,
  //       label: '生产厂家名称',
  //       placeholder: '',
  //       rule: ''
  //     },
  //     {
  //       type: 'text',
  //       component: inputText,
  //       isNull: true,
  //       label: '产地',
  //       placeholder: '',
  //       rule: ''
  //     },
  //     {
  //       type: 'text',
  //       component: inputText,
  //       isNull: true,
  //       label: '联系方式',
  //       placeholder: '请输入11位的手机号（固话用-隔开）',
  //       rule: ''
  //     },
  //     {
  //       type: 'textarea',
  //       component: inputTextArea,
  //       isNull: true,
  //       label: '备注信息',
  //       placeholder: '',
  //       rule: ''
  //     }
  //     ]
  //   }],
  //   listComponent: []
  // },
  // {
  //   settitle: '养殖基础信息管理',
  //   key: 'operator',
  //   tab: '人物档案',
  //   url: 'org',
  //   searchPlaceholder: '请输入姓名进行搜索',
  //   search: ['query_text', 'name'],
  //   theads: ['姓名', '身份', '性别', '年龄', '联系方式', '地址', '备注'],
  //   protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
  //   widths: [50, 50, 50, 50, 50, 50, 50, 50],
  //   typeComponent: [{
  //     component: importBtn
  //   },
  //   {
  //     component: output
  //   },
  //   {
  //     component: newbuildBtn
  //   }],
  //   newComponent: [{
  //     tab: '新建人物档案',
  //     components: [{
  //       type: 'text',
  //       component: inputText,
  //       isNull: false,
  //       label: '姓名',
  //       placeholder: '必填',
  //       rule: ''
  //     },
  //     {
  //       type: 'select',
  //       component: inputSelect,
  //       isNull: false,
  //       label: '性别',
  //       placeholder: '请选择性别',
  //       rule: '',
  //       options: [{
  //         value: '',
  //         label: '男'
  //       },
  //       {
  //         value: '女',
  //         label: '女'
  //       }
  //       ]
  //     },
  //     {
  //       type: 'text',
  //       component: inputText,
  //       isNull: true,
  //       label: '年龄',
  //       placeholder: '必填',
  //       rule: ''
  //     },
  //     {
  //       type: 'text',
  //       component: inputText,
  //       isNull: true,
  //       label: '身份',
  //       placeholder: '如后勤主管',
  //       rule: ''
  //     },
  //     {
  //       type: 'text',
  //       component: inputText,
  //       isNull: false,
  //       label: '联系方式',
  //       placeholder: '',
  //       rule: ''
  //     },
  //     {
  //       type: 'text',
  //       component: inputText,
  //       isNull: true,
  //       label: '联系地址',
  //       placeholder: '请输入11位的手机号（固话用-隔开）',
  //       rule: ''
  //     },
  //     {
  //       type: 'text',
  //       component: inputText,
  //       isNull: true,
  //       label: '备注信息',
  //       placeholder: '',
  //       rule: ''
  //     }
  //     ]
  //   }],
  //   listComponent: []
  // },
  // {
  //   settitle: '养殖基础信息管理',
  //   key: 'expert',
  //   tab: '专家档案',
  //   url: 'org',
  //   searchPlaceholder: '请输入专家名称',
  //   search: ['query_text', 'name'],
  //   theads: ['专家名称', '操作模块', '研究领域', '级别', '年龄', '性别', '联系方式', '所属单位', '备注'],
  //   protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
  //   widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
  //   typeComponent: [{
  //     component: importBtn
  //   },
  //   {
  //     component: output
  //   },
  //   {
  //     component: newbuildBtn
  //   }],
  //   newComponent: [{
  //     tab: '新建人物档案',
  //     components: [{
  //       type: 'select',
  //       component: inputSelect,
  //       isNull: false,
  //       label: '操作模块',
  //       placeholder: '饲料使用',
  //       rule: '',
  //       options: [{
  //         value: '',
  //         label: '饲料使用'
  //       },
  //       {
  //         value: '畜禽病疫',
  //         label: '畜禽病疫'
  //       },
  //       {
  //         value: '畜禽检疫',
  //         label: '畜禽检疫'
  //       },
  //       {
  //         value: '畜禽圈舍',
  //         label: '畜禽圈舍'
  //       }
  //       ]
  //     },
  //     {
  //       type: 'text',
  //       component: inputText,
  //       isNull: false,
  //       label: '专家名称',
  //       placeholder: '必填',
  //       rule: ''
  //     },
  //     {
  //       type: 'text',
  //       component: inputText,
  //       isNull: false,
  //       label: '研究领域',
  //       placeholder: '必填',
  //       rule: ''
  //     },
  //     {
  //       type: 'text',
  //       component: inputText,
  //       isNull: false,
  //       label: '级别',
  //       placeholder: '必填',
  //       rule: ''
  //     },
  //     {
  //       type: 'select',
  //       component: inputSelect,
  //       isNull: false,
  //       label: '性别',
  //       placeholder: '请选择性别',
  //       rule: '',
  //       options: [{
  //         value: '',
  //         label: '男'
  //       },
  //       {
  //         value: '女',
  //         label: '女'
  //       }
  //       ]
  //     },
  //     {
  //       type: 'text',
  //       component: inputText,
  //       isNull: false,
  //       label: '年龄',
  //       placeholder: '必填',
  //       rule: ''
  //     },
  //     {
  //       type: 'text',
  //       component: inputText,
  //       isNull: true,
  //       label: '所属单位',
  //       placeholder: '',
  //       rule: ''
  //     },
  //     {
  //       type: 'text',
  //       component: inputText,
  //       isNull: false,
  //       label: '联系方式',
  //       placeholder: '请输入11位的手机号（固话用-隔开）',
  //       rule: ''
  //     },
  //     {
  //       type: 'text',
  //       component: inputText,
  //       isNull: true,
  //       label: '备注信息',
  //       placeholder: '',
  //       rule: ''
  //     }
  //     ]
  //   }],
  //   listComponent: [{
  //     components: [{
  //       type: 'select',
  //       component: selectSection,
  //       options: [{
  //         value: '',
  //         label: '产品品牌'
  //       },
  //       {
  //         value: '康乐牌',
  //         label: '康乐牌'
  //       }]
  //     }]
  //   }]
  // }
  // ],
  // serialManage: [{
  //   settitle: '养殖批次管理',
  //   key: 'expertManage',
  //   tab: '养殖批次信息',
  //   url: 'expert',
  //   searchPlaceholder: '请输入养殖批次号进行搜索',
  //   search: ['query_text', 'name'],
  //   theads: ['批次号', '养殖区', '畜禽', '日期', '数量', '面积', '养殖方式', '养殖人', '备注', '图片状态', '状态'],
  //   protos: ['name', 'expert_area', 'org_name', 'degree', 'duty', 'title', 'address', 'zipcode', 'company', 'officephone', 'homephone', 'cellphone', 'email', 'meno'],
  //   widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
  //   typeComponent: [{
  //     component: output
  //   },
  //   {
  //     component: newbuildBtn
  //   }],
  //   newComponent: [{
  //     tab: '新建养殖批次',
  //     components: [{
  //       type: 'select',
  //       component: inputSelect,
  //       isNull: false,
  //       label: '所属养殖区',
  //       placeholder: '',
  //       rule: '',
  //       options: [{
  //         value: '',
  //         label: '示范A区'
  //       }
  //       ]
  //     },
  //     {
  //       type: 'select',
  //       component: inputSelect,
  //       isNull: false,
  //       label: '畜禽名称',
  //       placeholder: '',
  //       rule: '',
  //       options: [{
  //         value: '',
  //         label: '黑猪一号'
  //       }
  //       ]
  //     },
  //     {
  //       type: 'text',
  //       component: inputText,
  //       isNull: true,
  //       label: '密度',
  //       placeholder: '',
  //       rule: ''
  //     },
  //     {
  //       type: 'text',
  //       component: inputText,
  //       isNull: true,
  //       label: '养殖方式',
  //       placeholder: '',
  //       rule: ''
  //     },
  //     {
  //       type: 'date',
  //       component: inputDate,
  //       isNull: false,
  //       label: '养殖日期',
  //       placeholder: '',
  //       rule: ''
  //     },
  //     {
  //       type: 'select',
  //       component: inputSelect,
  //       isNull: false,
  //       label: '养殖人',
  //       placeholder: '请选择操作人',
  //       rule: '',
  //       options: [{
  //         value: '',
  //         label: '请选择操作人'
  //       },
  //       {
  //         value: '郑刚',
  //         label: '郑刚'
  //       }
  //       ]
  //     },
  //     {
  //       type: 'textarea',
  //       component: inputTextArea,
  //       isNull: true,
  //       label: '备注信息',
  //       placeholder: '',
  //       rule: ''
  //     }
  //     ]
  //   }],
  //   listComponent: [{
  //     components: [{
  //       type: 'select',
  //       component: selectSection,
  //       options: [{
  //         value: '',
  //         label: '产品品牌'
  //       },
  //       {
  //         value: '康乐牌',
  //         label: '康乐牌'
  //       }]
  //     },
  //     {
  //       type: 'select',
  //       component: selectSection,
  //       options: [{
  //         value: '',
  //         label: '产品品牌'
  //       },
  //       {
  //         value: '康乐牌',
  //         label: '康乐牌'
  //       }]
  //     },
  //     {
  //       type: 'select',
  //       component: selectSection,
  //       options: [{
  //         value: '',
  //         label: '产品品牌'
  //       },
  //       {
  //         value: '康乐牌',
  //         label: '康乐牌'
  //       }]
  //     },
  //     {
  //       type: 'date',
  //       component: 'datePick'
  //     }]
  //   }]
  // }
  // ],
  // feedManage: [{
  //   settitle: '饲料使用管理',
  //   key: 'expertManage',
  //   tab: '饲料使用信息',
  //   url: 'expert',
  //   searchPlaceholder: '请输入饲料名称进行搜索',
  //   search: ['query_text', 'name'],
  //   theads: ['使用日期', '饲料', '喂养方式', '专家', '操作人员', '喂养量', '类型状态', '备注'],
  //   protos: ['name', 'expert_area', 'org_name', 'degree', 'duty', 'title', 'address', 'zipcode', 'company', 'officephone', 'homephone', 'cellphone', 'email', 'meno'],
  //   widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
  //   typeComponent: [{
  //     component: output
  //   },
  //   {
  //     component: newbuildBtn
  //   }],
  //   newComponent: [{
  //     tab: '饲料使用管理',
  //     components: [{
  //       type: 'select',
  //       component: inputSelect,
  //       isNull: false,
  //       label: '饲料名称',
  //       placeholder: '饲料名称',
  //       rule: '',
  //       options: [{
  //         value: '',
  //         label: '饲料名称'
  //       },
  //       {
  //         value: '红苕汤羹',
  //         label: '红苕汤羹'
  //       },
  //       {
  //         value: '麦麸子',
  //         label: '麦麸子'
  //       },
  //       {
  //         value: '瓜果蔬菜',
  //         label: '瓜果蔬菜'
  //       },
  //       {
  //         value: '玉米面',
  //         label: '玉米面'
  //       }
  //       ]
  //     },
  //     {
  //       type: 'text',
  //       component: inputText,
  //       isNull: true,
  //       label: '喂养方式',
  //       placeholder: '请填写数字（必填）单位是亩',
  //       rule: ''
  //     },
  //     {
  //       type: 'textselect',
  //       component: inputTextSelect,
  //       isNull: false,
  //       label: '平均喂养量',
  //       placeholder: '',
  //       rule: '',
  //       options: [{
  //         value: '',
  //         label: 'kg/只'
  //       },
  //       {
  //         value: 'kg/头',
  //         label: 'kg/头'
  //       },
  //       {
  //         value: 'kg/条',
  //         label: 'kg/条'
  //       }
  //       ]
  //     },
  //     {
  //       type: 'select',
  //       component: inputSelect,
  //       isNull: true,
  //       label: '指导专家',
  //       placeholder: '',
  //       rule: '',
  //       options: [{
  //         value: '',
  //         label: '无'
  //       },
  //       {
  //         value: '洪其里',
  //         label: '洪其里'
  //       }
  //       ]
  //     },
  //     {
  //       type: 'select',
  //       component: inputSelect,
  //       isNull: false,
  //       label: '饲养员',
  //       placeholder: '请选择饲养员',
  //       rule: '',
  //       options: [{
  //         value: '',
  //         label: '请选择饲养员'
  //       },
  //       {
  //         value: '郑刚',
  //         label: '郑刚'
  //       }
  //       ]
  //     },
  //     {
  //       type: 'date',
  //       component: inputDate,
  //       isNull: true,
  //       label: '喂养日期',
  //       placeholder: '',
  //       rule: ''
  //     },
  //     {
  //       type: 'textarea',
  //       component: inputTextArea,
  //       isNull: true,
  //       label: '备注信息',
  //       placeholder: '',
  //       rule: ''
  //     }
  //     ]
  //   },
  //   {
  //     tab: '选择养殖批次',
  //     components: [{
  //       type: 'select',
  //       component: inputSelect,
  //       isNull: false,
  //       label: '',
  //       placeholder: '请选择养殖区',
  //       rule: '',
  //       options: [{
  //         value: '',
  //         label: '示范A区'
  //       }
  //       ]
  //     }
  //     ]
  //   }],
  //   listComponent: []
  // }
  // ],
  // plagueManage: [{
  //   settitle: '病疫管理',
  //   key: 'expertManage',
  //   tab: '病疫信息',
  //   url: 'expert',
  //   searchPlaceholder: '请输入兽药名称',
  //   search: ['query_text', 'name'],
  //   theads: ['用药日期', '病情描述', '兽药', '专家', '操作人员', '用药量', '治疗方式', '备注'],
  //   protos: ['name', 'expert_area', 'org_name', 'degree', 'duty', 'title', 'address', 'zipcode', 'company', 'officephone', 'homephone', 'cellphone', 'email', 'meno'],
  //   widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
  //   typeComponent: [{
  //     component: output
  //   },
  //   {
  //     component: newbuildBtn
  //   }],
  //   newComponent: [{
  //     tab: '新建病疫情信息',
  //     components: [{
  //       type: 'select',
  //       component: inputSelect,
  //       isNull: false,
  //       label: '兽药分类',
  //       placeholder: '请选择类别',
  //       rule: '',
  //       options: [{
  //         value: '',
  //         label: '请选择类别'
  //       },
  //       {
  //         value: '疾病防治药',
  //         label: '疾病防治药'
  //       },
  //       {
  //         value: '传染病防治药',
  //         label: '传染病防治药'
  //       },
  //       {
  //         value: '寄生虫病防治药',
  //         label: '寄生虫病防治药'
  //       },
  //       {
  //         value: '促生长药',
  //         label: '促生长药'
  //       },
  //       {
  //         value: '其他类',
  //         label: '其他类'
  //       }
  //       ]
  //     },
  //     {
  //       type: 'select',
  //       component: inputSelect,
  //       isNull: false,
  //       label: '兽药名称',
  //       placeholder: '',
  //       rule: '',
  //       options: [{
  //         value: '',
  //         label: '无'
  //       }
  //       ]
  //     },
  //     {
  //       type: 'date',
  //       component: inputDate,
  //       isNull: false,
  //       label: '兽药日期',
  //       placeholder: '',
  //       rule: ''
  //     },
  //     {
  //       type: 'textselect',
  //       component: inputTextSelect,
  //       isNull: false,
  //       label: '平均施药量',
  //       placeholder: '请输入正确的数字（必填）',
  //       rule: '',
  //       options: [{
  //         value: '',
  //         label: 'kg/只'
  //       },
  //       {
  //         value: 'kg/头',
  //         label: 'kg/头'
  //       },
  //       {
  //         value: 'kg/条',
  //         label: 'kg/条'
  //       }
  //       ]
  //     },
  //     {
  //       type: 'text',
  //       component: inputText,
  //       isNull: true,
  //       label: '施药方式',
  //       placeholder: '',
  //       rule: ''
  //     },
  //     {
  //       type: 'select',
  //       component: inputSelect,
  //       isNull: false,
  //       label: '施药人',
  //       placeholder: '请选择操作人',
  //       rule: '',
  //       options: [{
  //         value: '',
  //         label: '请选择操作人'
  //       },
  //       {
  //         value: '郑刚',
  //         label: '郑刚'
  //       }
  //       ]
  //     },
  //     {
  //       type: 'select',
  //       component: inputSelect,
  //       isNull: true,
  //       label: '指导专家',
  //       placeholder: '',
  //       rule: '',
  //       options: [{
  //         value: '',
  //         label: '无'
  //       }
  //       ]
  //     },
  //     {
  //       type: 'text',
  //       component: inputText,
  //       isNull: true,
  //       label: '病情描述',
  //       placeholder: '',
  //       rule: ''
  //     },
  //     {
  //       type: 'textarea',
  //       component: inputTextArea,
  //       isNull: true,
  //       label: '备注信息',
  //       placeholder: '',
  //       rule: ''
  //     }
  //     ]
  //   }
  //   ],
  //   listComponent: []
  // }
  // ],
  // quarantineManage: [{
  //   settitle: '检疫管理',
  //   key: 'waningConditionManage',
  //   tab: '检疫信息',
  //   url: 'waningcondition',
  //   searchPlaceholder: '请输入检测项目名称进行',
  //   theads: ['检测日期', '检测项目名称', '专家', '操作人员', '检测内容', '检测结果', '审批人', '检测报告图片', '备注'],
  //   protos: ['type', 'code', 'description'],
  //   widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
  //   typeComponent: [{
  //     component: output
  //   },
  //   {
  //     component: newbuildBtn
  //   }],
  //   newComponent: [{
  //     tab: '新建检疫信息',
  //     components: [{
  //       type: 'text',
  //       component: inputText,
  //       isNull: false,
  //       label: '检测机构',
  //       placeholder: '',
  //       rule: ''
  //     },
  //     {
  //       type: 'text',
  //       component: inputText,
  //       isNull: false,
  //       label: '检测项目名称',
  //       placeholder: '',
  //       rule: ''
  //     },
  //     {
  //       type: 'text',
  //       component: inputText,
  //       isNull: true,
  //       label: '检测内容',
  //       placeholder: '',
  //       rule: ''
  //     },
  //     {
  //       type: 'date',
  //       component: inputDate,
  //       isNull: false,
  //       label: '检测日期',
  //       placeholder: '',
  //       rule: ''
  //     },
  //     {
  //       type: 'select',
  //       component: inputSelect,
  //       isNull: true,
  //       label: '检测结果',
  //       placeholder: '',
  //       rule: '',
  //       options: [{
  //         value: '',
  //         label: '合格'
  //       },
  //       {
  //         value: '不合格',
  //         label: '不合格'
  //       }
  //       ]
  //     },
  //     {
  //       type: 'text',
  //       component: inputText,
  //       isNull: true,
  //       label: '审批人',
  //       placeholder: '',
  //       rule: ''
  //     },
  //     {
  //       type: 'select',
  //       component: inputSelect,
  //       isNull: false,
  //       label: '经手人',
  //       placeholder: '请选择经手人',
  //       rule: '',
  //       options: [{
  //         value: '',
  //         label: '请选择经手人'
  //       },
  //       {
  //         value: '郑刚',
  //         label: '郑刚'
  //       }
  //       ]
  //     },
  //     {
  //       type: 'select',
  //       component: inputSelect,
  //       isNull: true,
  //       label: '指导专家',
  //       placeholder: '无',
  //       rule: '',
  //       options: [{
  //         value: '',
  //         label: '无'
  //       }
  //       ]
  //     },
  //     {
  //       type: 'textarea',
  //       component: inputTextArea,
  //       isNull: true,
  //       label: '备注信息',
  //       placeholder: '',
  //       rule: ''
  //     }
  //     ]
  //   }
  //   ],
  //   listComponent: []
  // }],
  // innocuityManage: [{
  //   settitle: '无害化管理',
  //   key: 'waningConditionManage',
  //   tab: '无害化信息',
  //   url: 'waningcondition',
  //   searchPlaceholder: '请输入检测项目名称进行',
  //   theads: ['无害化批次号', '操作日期', '操作内容', '实行原因', '指导专家', '备注信息'],
  //   protos: ['type', 'code', 'description'],
  //   widths: [50, 50, 50, 50, 50, 50, 50],
  //   typeComponent: [{
  //     component: output
  //   },
  //   {
  //     component: newbuildBtn
  //   }],
  //   newComponent: [{
  //     tab: '新建养殖场信息',
  //     components: [{
  //       component: inputText,
  //       isNull: false,
  //       label: '养殖场名称',
  //       placeholder: '必填',
  //       rule: ''
  //     },
  //     {
  //       component: inputText,
  //       isNull: false,
  //       label: '养殖面积',
  //       placeholder: '请填写数字（必填）单位是亩',
  //       rule: ''
  //     },
  //     {
  //       component: inputText,
  //       isNull: true,
  //       label: '负责人',
  //       placeholder: '',
  //       rule: ''
  //     },
  //     {
  //       component: inputText,
  //       isNull: true,
  //       label: '养殖畜禽种类',
  //       placeholder: '',
  //       rule: ''
  //     }
  //     ]
  //   }],
  //   listComponent: []
  // }

  // ],
  // slaughterManage: [{
  //   settitle: '出栏管理',
  //   key: 'waningConditionManage',
  //   tab: '出栏信息',
  //   url: 'waningcondition',
  //   searchPlaceholder: '请输入检测项目名称进行',
  //   theads: ['出栏日期', '批次号', '出栏数量', '操作人员', '状态', '备注'],
  //   protos: ['type', 'code', 'description'],
  //   widths: [50, 50, 50, 50, 50, 50, 50],
  //   typeComponent: [{
  //     component: output
  //   },
  //   {
  //     component: newbuildBtn
  //   }],
  //   newComponent: [{
  //     tab: '新建出栏信息',
  //     components: [{
  //       type: 'date',
  //       component: inputDate,
  //       isNull: false,
  //       label: '出栏日期',
  //       placeholder: '',
  //       rule: ''
  //     },
  //     {
  //       type: 'select',
  //       component: inputSelect,
  //       isNull: false,
  //       label: '出栏人',
  //       placeholder: '请选择人物',
  //       rule: '',
  //       options: [{
  //         value: '',
  //         label: '请选择经手人'
  //       },
  //       {
  //         value: '郑刚',
  //         label: '郑刚'
  //       }
  //       ]
  //     },
  //     {
  //       type: 'textarea',
  //       component: inputTextArea,
  //       isNull: true,
  //       label: '备注信息',
  //       placeholder: '',
  //       rule: ''
  //     }
  //     ]
  //   }
  //   ],
  //   listComponent: []
  // }
  // ],
  // planManage: [{
  //   settitle: '养殖计划管理',
  //   key: 'waningConditionManage',
  //   tab: '养殖计划信息',
  //   url: 'waningcondition',
  //   searchPlaceholder: '请输入检测项目名称进行',
  //   theads: [ '序号', '批次号', '计划日期', '操作类型', '安排人员', '计划内容', '操作用户', '备注' ],
  //   protos: ['type', 'code', 'description'],
  //   widths: [50, 50, 50, 50, 50, 50, 50],
  //   typeComponent: [{
  //     component: output
  //   },
  //   {
  //     component: newbuildBtn
  //   }],
  //   listComponent: []
  // }],
  petProcess: [{
    settitle: '加工批次管理',
    key: 'planManage',
    tab: '加工批次信息',
    url: 'plan',
    searchPlaceholder: '请输入产品名称进行搜索',
    theads: ['加工批次号', '产品', '包装日期', '数量(重量)', '单位', '操作人', '录入人', '备注信息'],
    protos: ['plan_type_name', 'name', 'content'],
    widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
    typeComponent: [{
      component: output
    },
    {
      component: importBtn
    },
    {
      component: newbuildBtn
    }],
    listComponent: []
  }
  ],
  petDectect: [{
    settitle: '检验检测管理',
    key: 'planManage',
    tab: '检验检测信息',
    url: 'plan',
    searchPlaceholder: '请输入入库批次号',
    theads: ['检测名称', '检测内容', '检测日期', '检测结果', '检测机构', '负责人', '处理方法', '图片报告', '备注'],
    protos: ['plan_type_name', 'name', 'content'],
    widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
    typeComponent: [{
      component: output
    },
    {
      component: newbuildBtn
    }],
    listComponent: []
  }
  ],
  petTrace: [{
    settitle: '产品溯源管理',
    key: 'planManage',
    tab: '产品溯源码信息',
    url: 'plan',
    searchPlaceholder: '请输入溯源码搜索',
    theads: ['加工批次号', '产品溯源码', '产品名称', '生产日期', 'RFID', '肢体部位', '产地', '溯源次数', '备注信息'],
    protos: ['plan_type_name', 'name', 'content'],
    widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
    typeComponent: [{
      component: output
    },
    {
      component: newbuildBtn
    }],
    listComponent: []
  }
  ],
  petSerial: [{
    settitle: '加工批次管理',
    key: 'planManage',
    tab: '加工批次信息',
    url: 'plan',
    searchPlaceholder: '请输入加工批次号',
    theads: ['加工批次号', '加工日期', '加工人', '原始数量', '成品数量', '耗损率', '是否生成', '备注信息'],
    protos: ['plan_type_name', 'name', 'content'],
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
  petBack: [{
    settitle: '产品溯源管理',
    key: 'planManage',
    tab: '产品溯源码信息',
    url: 'plan',
    searchPlaceholder: '请输入溯源码搜索',
    theads: ['加工批次号', '产品溯源码', '产品名称', '生产日期', 'RFID', '肢体部位', '产地', '溯源次数', '备注信息'],
    protos: ['plan_type_name', 'name', 'content'],
    widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
    typeComponent: [{
      component: output
    },
    {
      component: newbuildBtn
    }],
    listComponent: []
  }
  ],
  petOutput: [{
    settitle: '产品出库管理',
    key: 'planManage',
    tab: '出库订单信息',
    url: 'plan',
    searchPlaceholder: '请输入出库订单号进行搜索',
    theads: ['出库叮当号', '订单日期', '收货单位', '数量', '出库人', '收货地点', '收货人', '收货电话', '备注信息'],
    protos: ['plan_type_name', 'name', 'content'],
    widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
    typeComponent: [{
      component: output
    },
    {
      component: newbuildBtn
    }],
    listComponent: []
  }
  ],
  plantBase: [{
    settitle: '种植基础资料',
    key: 'plantation',
    tab: '种植场',
    url: 'org',
    searchPlaceholder: '请输入种植场进行搜索',
    theads: ['种植场名称', '种植面积单位', '种植面积单位', '负责人', '联系电话', '详细地址', '备注信息'],
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
    listComponent: []
  },
  {
    key: 'plantArea',
    tab: '种植区',
    url: 'org',
    searchPlaceholder: '请输入种植区进行搜索',
    theads: ['种植场名称', '种植面积', '种植面积单位', '负责人', '联系电话', '详细地址', '备注信息'],
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
    listComponent: []
  },
  {
    key: 'vegetableArchive',
    tab: '果蔬档案',
    url: 'org',
    searchPlaceholder: '请输入果蔬名称进行搜索',
    theads: ['果蔬名称', '分类', '生长周期（天）', '基本特征描述', '果蔬图片', '备注信息'],
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
    listComponent: []
  },
  {
    key: 'fertilizeArchive',
    tab: '肥料档案',
    url: 'org',
    searchPlaceholder: '请输入肥料名称',
    theads: ['分类', '用途', '包装规格', '日期', '产地', '经销商名称', '联系方式', '备注'],
    protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
    widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
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
    listComponent: []
  },
  {
    key: 'pesticideArchive',
    tab: '农药档案',
    url: 'expert',
    searchPlaceholder: '请输入农药名称',
    theads: ['农药类别', '农药名称', '用途', '防治对象', '毒性等级', '包装规格', '经销商名称', '产地', '联系方式', '备注'],
    protos: ['name', 'expert_area', 'org_name', 'degree', 'duty', 'title', 'address', 'zipcode', 'company', 'officephone', 'homephone', 'cellphone', 'email', 'meno'],
    widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
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
    listComponent: []
  }
  ],
  plantSerial: [{
    settitle: '种植批次管理',
    key: 'planManage',
    tab: '种植批次信息',
    url: 'plan',
    theads: ['种植批次号', '果蔬id', '种植日期', '种植面积', '面积单位', '种植数量', '种植人', '录入人', '备注'],
    protos: ['plan_type_name', 'name', 'content'],
    widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
    listComponent: []
  }

  ],
  plantFarm: [{
    settitle: '农事管理',
    key: 'planManage',
    tab: '施肥信息',
    url: 'plan',
    theads: ['批次号', '施肥日期', '天气', '肥料', '施用量(Kg)', '施肥人', '施肥方法', '录入人', '备注'],
    protos: ['plan_type_name', 'name', 'content'],
    widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
    listComponent: []
  },
  {
    settitle: '农事管理',
    key: 'planManage',
    tab: '病虫害信息',
    url: 'plan',
    theads: ['批次号', '药剂', '喷洒日期', '天气', '使用量(L)', '施药浓度', '安全隔离期(天)', '施用人', '施用方法', '录入人'],
    protos: ['plan_type_name', 'name', 'content'],
    widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
    listComponent: []
  },
  {
    settitle: '农事管理',
    key: 'planManage',
    tab: '检验检测信息',
    url: 'plan',
    theads: ['批次号', '检验类型', '检验日期', '天气', '检测部门', '检查结果', '检验审批信息', '负责人', '录入人', '备注'],
    protos: ['plan_type_name', 'name', 'content'],
    widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
    listComponent: []
  }

  ],
  plantProduct: [{
    settitle: '生产计划管理',
    key: 'planManage',
    tab: '生产计划信息',
    url: 'plan',
    theads: ['计划日期', '操作模块', '安排人员', '计划内容', '操作用户', '备注'],
    protos: ['plan_type_name', 'name', 'content'],
    widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
    listComponent: []
  }],
  plantHarvest: [{
    settitle: '采收管理',
    key: 'planManage',
    tab: '采收批次信息',
    url: 'plan',
    theads: ['种植', '批次号', '种植日期', '采收数量', '入库部门', '存放仓库位置', '操作人', '录入人', '备注'],
    protos: ['plan_type_name', 'name', 'content'],
    widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
    listComponent: []
  }],
  vegetableSerial: [{
    settitle: '加工批次管理',
    key: 'planManage',
    tab: '加工批次信息',
    url: 'plan',
    theads: ['加工批次号', '产品', '包装日期', '数量（重量）', '单位', '操作人', '录入人', '备注'],
    protos: ['plan_type_name', 'name', 'content'],
    widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
    listComponent: []
  }
  ],
  vegetableTrace: [{
    settitle: '产品溯源管理',
    key: 'planManage',
    tab: '产品溯源信息',
    url: 'plan',
    theads: ['追溯编码', '加工批次', '追溯次数', '加工日期', '备注'],
    protos: ['plan_type_name', 'name', 'content'],
    widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
    listComponent: []
  }],
  Logisticbase: [{
    settitle: '基础信息管理',
    key: 'planManage',
    tab: '物流公司信息',
    url: 'plan',
    theads: ['物流公司名称', '联系人', '联系电话', '地址', '备注信息'],
    protos: ['plan_type_name', 'name', 'content'],
    widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
    listComponent: []
  },
  {
    settitle: '基础信息管理',
    key: 'planManage',
    tab: '车辆信息',
    url: 'plan',
    theads: ['车辆品牌', '车辆号码', '核载吨位', '备注信息'],
    protos: ['plan_type_name', 'name', 'content'],
    widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
    listComponent: []
  },
  {
    settitle: '基础信息管理',
    key: 'planManage',
    tab: '驾驶员信息',
    url: 'plan',
    theads: ['驾驶员姓名', '性别', '联系电话', '取得驾照日期', '出生日期', '驾照类型(A1、C2...)', '备注信息'],
    protos: ['plan_type_name', 'name', 'content'],
    widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
    listComponent: []
  }],
  saleProduct: [{
    settitle: '销售商品库管理',
    key: 'planManage',
    tab: '商品入库信息',
    url: 'plan',
    theads: ['商品名称', '入库数量', '销售数量', '入库地址', '备注'],
    protos: ['plan_type_name', 'name', 'content'],
    widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
    listComponent: []
  },
  {
    settitle: '销售商品库管理',
    key: 'planManage',
    tab: '车辆信息',
    url: 'plan',
    theads: ['商品名称', '加工数量', '销售数量', '加工库存', '备注'],
    protos: ['plan_type_name', 'name', 'content'],
    widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
    listComponent: []
  }],
  saleInput: [{
    settitle: '销售入库管理',
    key: 'planManage',
    tab: '销售入库信息',
    url: 'plan',
    theads: ['入库批次号', '商品来源', '入库日期', '仓库名称', '商品名称', '商品总数量', '库存数量', '入库人', '备注信息'],
    protos: ['plan_type_name', 'name', 'content'],
    widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
    listComponent: []
  }
  ],
  saleOrder: [{
    settitle: '销售订单管理',
    key: 'planManage',
    tab: '销售订单信息',
    url: 'plan',
    theads: ['订单号', '商品来源', '销售日期', '客户名称', '商品名称', '数量(详情页数量)', '销售员', '备注信息'],
    protos: ['plan_type_name', 'name', 'content'],
    widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
    listComponent: []
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
    protos: ['plan_type_name', 'name', 'content'],
    widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
    listComponent: []
  }],
  systemLog: [{
    settitle: '系统日志',
    key: 'planManage',
    tab: '销售订单信息',
    url: 'plan',
    theads: ['模块名称', '操作', '内容', '日期时间', '客户端', '公司', '用户'],
    protos: ['plan_type_name', 'name', 'content'],
    widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
    listComponent: []
  }],
  systemReport: [{
    settitle: '系统日志',
    key: 'planManage',
    tab: '销售订单信息',
    url: 'plan',
    theads: ['模块名称', '操作', '内容', '日期时间', '客户端', '公司', '用户'],
    protos: ['plan_type_name', 'name', 'content'],
    widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
    listComponent: []
  }]
}
