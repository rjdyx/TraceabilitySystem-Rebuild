import importBtn from 'components/public/import-btn.vue'
import newbuildBtn from 'components/public/newbuild-btn.vue'
import scanCode from 'components/public/scanCode.vue'
import output from 'components/public/output.vue'
import selectSection from 'components/public/select-section.vue'
import datePick from 'components/public/datePick.vue'
import categoryBtn from 'components/public/categoryBtn.vue'
import addRfidBtn from 'components/public/addRfidBtn.vue'
import inputFile from 'components/public/inputFile.vue'
import inputDate from 'components/public/inputDate.vue'
import validate2 from 'utils/validate2.js'
import Qrcode from 'components/public/Qrcode.vue'

export let companyUser = {
    // 入驻单位详情
    companyUser: {
        key: 'companyUser',
        url: 'company',
        roleName: ['admin/company', 1],
        tab: '入驻单位详情管理',
        theads: ['公司名称', '公司编码', '公司logo', '负责人/法人', '公司简称', '统一码', '电话', '地址', '经营范围', '员工总数', '公司网站', '销售网站'],
        protos: ['name', 'coding', 'logo', 'legal_person', 'short_name', 'USCC', 'phone', 'address', 'business_scope', 'total_staff', 'website', 'sell_website'],
        tabList: [{
            url: 'user',
            split: true,
            hiddeRole: true,
            urlid: 'company_id',
            hiddeEdit: true,
            tab: '用户信息',
            searchPlaceholder: '请输入用户名进行搜索',
            selectSearch: ['name'],
            leftOperateList: [{
                components: []
            }],
            rightOperateComponent: [{component: output}, {component: newbuildBtn}],
            changeDataArr: [{gender: {0: '男', 1: '女'}}],
            headList: ['用户名', '姓名', '工号', '邮箱', '性别', '电话号码', '出生日期', '所属部门', '入职日期', '头像', '备注'],
            protos: ['name', 'realname', 'number', 'email', 'gender', 'phone', 'birth_date', 'department', 'hiredate', 'thumb', 'memo'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            typeComponent: [{component: newbuildBtn}],
            newComponent: [{
                urlid: 'company_id',
                tab: '新建用户信息',
                hiddenValue: {type: 0},
                checkNumber: [0, 1, 2],
                components: [{
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '用户名',
                    placeholder: '请输入用户名',
                    rule: [{required: true, trigger: 'blur', message: '请输入用户名'}, {validator: validate2.reCheck, trigger: 'blur', message: '用户名已存在'}]
                },
                {
                    name: 'email',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '邮箱',
                    placeholder: '请输入邮箱',
                    rule: [{required: true, trigger: 'blur', message: '请输入正确邮箱格式', type: 'email'}, {validator: validate2.reCheck, trigger: 'blur', message: '邮箱已存在'}]
                },
                {
                    name: 'phone',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '手机号码',
                    placeholder: '请输入手机号码',
                    rule: [{required: true, trigger: 'blur', message: '请输入手机号码'}, {validator: validate2.reCheck, trigger: 'blur', message: '手机号码已存在'}, {validator: validate2.phone}]
                },
                {
                    name: 'gender',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '性别',
                    placeholder: '请选择性别',
                    rule: {required: true},
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
                    rule: {validator: validate2.reDate, aa: '666'}
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
                    rule: [{required: true, trigger: 'blur', message: '请输入工号'}, {validator: validate2.reInteger}]
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
                checkNumber: [0, 1, 2],
                components: [{
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '用户名',
                    placeholder: '请输入用户名',
                    rule: [{required: true, trigger: 'blur', message: '请输入用户名'}, {validator: validate2.reCheck, trigger: 'blur', message: '用户名已存在'}]
                },
                {
                    name: 'email',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '邮箱',
                    placeholder: '请输入邮箱',
                    rule: [{required: true, trigger: 'blur', message: '请输入正确邮箱格式', type: 'email'}, {validator: validate2.reCheck, trigger: 'blur', message: '邮箱已存在'}]
                },
                {
                    name: 'phone',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '手机号码',
                    placeholder: '请输入手机号码',
                    rule: [{required: true, trigger: 'blur', message: '请输入手机号码'}, {validator: validate2.reCheck, trigger: 'blur', message: '手机号码已存在'}, {validator: validate2.phone}]
                },
                {
                    name: 'gender',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '性别',
                    placeholder: '请选择性别',
                    rule: {required: true},
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
                    rule: {validator: validate2.reDate, aa: '666'}
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
                    rule: [{required: true, trigger: 'blur', message: '请输入工号'}, {validator: validate2.reInteger}]
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
            }]
        }]
    }
}
