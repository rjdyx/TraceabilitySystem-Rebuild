
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
  settitle: '基础信息管理',
  key: 'planManage',
  tab: '物流公司信息',
  url: 'plan',
  theads: ['物流公司名称', '联系人', '联系电话', '地址', '备注信息'],
  protos: ['plan_type_name', 'name', 'content', 'address', 'memo'],
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
  listComponent: []
},
{
  settitle: '基础信息管理',
  key: 'planManage',
  tab: '车辆信息',
  url: 'plan',
  theads: ['车辆品牌', '车辆号码', '核载吨位', '备注信息'],
  protos: ['plan_type_name', 'name', 'content', 'address', 'memo'],
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
  listComponent: []
},
{
  settitle: '基础信息管理',
  key: 'planManage',
  tab: '驾驶员信息',
  url: 'plan',
  theads: ['驾驶员姓名', '性别', '联系电话', '取得驾照日期', '出生日期', '驾照类型(A1、C2...)', '备注信息'],
  protos: ['plan_type_name', 'name', 'content', 'address', 'memo'],
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
  listComponent: []
}]
