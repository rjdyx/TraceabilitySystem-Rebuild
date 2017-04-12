
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

exports.client =
[{
    settitle: '客户档案管理',
    key: 'client',
    tab: '客户档案信息',
    url: 'client',
    searchPlaceholder: '请输入客户名称进行搜索',
    search: ['query_text', 'name'],
    theads: ['客户分类', '客户等级', '客户名称', '联系电话', '地址', '传真', '备注'],
    protos: ['category_name', 'grade', 'name', 'phone', 'address', 'fax', 'meno'],
    widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
    newComponent: [{
        tab: '新建客户档案信息',
        components: [{
            name: 'name',
            type: 'text',
            component: inputText,
            isNull: false,
            label: '客户名称',
            placeholder: '必填',
            rule: 'required'
        },
        {
            name: 'grade',
            type: 'select',
            component: selectSection,
            isNull: false,
            label: '客户等级'
        },
        {
            name: 'category_id',
            type: 'select',
            component: selectSection,
            isNull: false,
            label: '客户分类',
            placeholder: '必选',
            rule: 'required'
        },
        {
            name: 'phone',
            type: 'text',
            component: inputText,
            isNull: true,
            label: '手机',
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
            name: 'fax',
            type: 'text',
            component: inputText,
            isNull: true,
            label: '传真',
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
    listComponent: [{
        components: [{
            type: 'select',
            component: selectSection,
            options: [{
                value: '',
                label: '客户分类'
            },
            {
                value: '老客户',
                label: '新客户'
            }]
        },
        {
            type: 'date',
            component: datePick
        }]
    }]
}]
