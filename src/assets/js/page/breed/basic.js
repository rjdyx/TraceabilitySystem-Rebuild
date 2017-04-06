
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

exports.basic =
[{
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
},
{
  settitle: '养殖基础信息管理',
  key: 'cultivation',
  tab: '养殖区信息',
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
}]
