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

export let logOperate = {
    // 系统日志
    logOperate: [{
        settitle: '系统日志',
        key: 'log',
        roleName: ['admin/log', 1],
        tab: '日志信息',
        url: 'log',
        selectSearch: ['operate'],
        searchPlaceholder: '请输入内容进行搜索',
        theads: ['模块名称', '操作', '内容', '日期时间', '客户端ip', '公司', '用户', '备注'],
        protos: ['module', 'operate', 'content', 'datetime', 'ip', 'company_name', 'user_name', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50],
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
            tab: '编辑日志信息',
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
