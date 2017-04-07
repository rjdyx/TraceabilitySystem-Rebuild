
import * as publics from './publics.js'

exports.supplier =
[{
  settitle: '供货商档案管理',
  key: 'supplier',
  tab: '供货商档案信息',
  url: 'supplier',
  searchPlaceholder: '请输入供货商名称进行搜索',
  search: ['query_text', 'name'],
  theads: ['供货商名称', '分类', '联系人', '手机', '地址', '备注'],
  protos: ['name', 'category_id', 'contacts', 'phone', 'address', 'meno'],
  widths: [50, 50, 50, 50, 50, 50],
  typeComponent: [{
    component: publics.importBtn
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
      name: 'name',
      type: 'text',
      component: inputText,
      isNull: false,
      label: '供货商名称',
      placeholder: '必填',
      rule: 'required'
    },
    {
      name: 'category_id',
      type: 'select',
      component: inputText,
      isNull: false,
      label: '分类',
      placeholder: '请选择分类',
      rule: 'required'
    },
    {
      name: 'contacts',
      type: 'text',
      component: inputText,
      isNull: true,
      label: '联系人',
      placeholder: '',
      rule: ''
    },
    {
      name: 'phone',
      type: 'text',
      component: inputText,
      isNull: true,
      label: '手机',
      placeholder: '请填写正确的手机号码',
      rule: ''
    },
    {
      name: 'address',
      type: 'text',
      component: inputText,
      isNull: true,
      label: '地址',
      placeholder: '请填写正确的地址',
      rule: ''
    },
    {
      name: 'address',
      type: 'textarea',
      component: inputText,
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
        label: '供货商分类'
      },
      {
        value: '',
        label: '中级供货商'
      }]
    },
    {
      type: 'date',
      component: datePick
    }]
  }]
}]
