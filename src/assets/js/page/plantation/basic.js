
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
}]
