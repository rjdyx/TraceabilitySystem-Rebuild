import importBtn from 'components/public/import-btn.vue'
import newbuildBtn from 'components/public/newbuild-btn.vue'
import output from 'components/public/output.vue'
import selectSection from 'components/public/select-section.vue'
import datePick from 'components/public/datePick.vue'
import inputDate from 'components/public/inputDate.vue'
import inputFile from 'components/public/inputFile.vue'
import inputTextSelect from 'components/public/inputTextSelect.vue'
import Qrcode from 'components/public/Qrcode.vue'

import validate2 from 'utils/validate2.js'

export let settleOperate = {
    // 运营-入驻单位
    settleOperate: [{
        settitle: '入驻单位管理',
        roleName: ['admin/company', 1],
        key: 'company',
        tab: '入驻单位信息',
        url: 'company',
        batch: 'companyUser',
        searchPlaceholder: '请输入公司名称进行搜索',
        theads: ['公司名称', '公司编码', '公司logo', '负责人/法人', '公司简称', '统一码', '电话', '地址', '经营范围', '员工总数', '公司网站', '销售网站'],
        protos: ['name', 'coding', 'logo', 'legal_person', 'short_name', 'USCC', 'phone', 'address', 'business_scope', 'total_staff', 'website', 'sell_website'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        moreComponent: [{value: '权限'}, {value: '用户'}],
        listComponent: [],
        newComponent: [{
            tab: '新建入驻公司信息',
            components: [{
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '公司名称',
                placeholder: '请输入公司名称',
                rule: {required: true, trigger: 'blur', message: '请输入公司名称'}
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
                name: 'legal_person',
                type: 'text',
                component: null,
                isNull: false,
                label: '负责人/法人',
                placeholder: '请输入负责人/法人',
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
                name: 'website',
                type: 'text',
                component: null,
                isNull: false,
                label: '公司网站',
                placeholder: '请输入公司网站',
                rule: null
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
            tab: '编辑入驻公司信息',
            components: [{
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '公司名称',
                placeholder: '请输入公司名称',
                rule: {required: true, trigger: 'blur', message: '请输入公司名称'}
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
                name: 'legal_person',
                type: 'text',
                component: null,
                isNull: false,
                label: '负责人/法人',
                placeholder: '请输入负责人/法人',
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
                name: 'website',
                type: 'text',
                component: null,
                isNull: false,
                label: '公司网站',
                placeholder: '请输入公司网站',
                rule: null
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
    }]
}
