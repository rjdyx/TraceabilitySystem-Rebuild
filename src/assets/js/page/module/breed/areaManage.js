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

export let areaManage = {
    // 畜禽圈舍管理(
    areaManage: [{
        settitle: '圈舍维护管理',
        key: 'clean',
        roleName: ['beast/clean', 0],
        tab: '圈舍维护信息',
        url: 'clean',
        // 链接批次信息模块数据的桥（养殖批次详情）
        batch: 'areaBatch',
        searchPlaceholder: '请输入圈舍批次号进行搜索',
        search: ['query_text', 'name'],
        theads: ['圈舍批次号', '标题', '操作内容', '专家', '操作人', '操作日期', '图片', '备注信息'],
        protos: ['serial', 'name', 'content', 'expert_name', 'operate_name', 'date', 'img', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        newComponent: [{
            tab: '新建圈舍维护信息',
            selectUrl2: [['experts', 'id', 'name', true], ['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '请选择专家'}, {value: '', label: '请选择操作人'}],
            popNumber2: [2, 1],
            selectWhereArr2: [[{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}], [{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
            hasImg: true,
            components: [{
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '操作日期',
                placeholder: '',
                rule: [{required: true, message: '请输入操作日期'}, {validator: validate2.reDate, message: '请输入操作日期'}]
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '操作人',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择操作人'},
                options: []
            },
            {
                name: 'expert_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '专家',
                placeholder: '',
                rule: {required: false, type: 'number', message: '请选择专家'},
                options: []
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '标题',
                placeholder: '',
                rule: {required: true, trigger: 'blur', message: '请输入标题'}
            },
            {
                name: 'content',
                type: 'text',
                component: null,
                isNull: false,
                label: '操作内容',
                placeholder: '',
                rule: {required: true, trigger: 'blur', message: '请输入操作内容'}
            },
            {
                name: 'img',
                type: 'file',
                component: inputFile,
                isNull: true,
                label: '圈舍维护图片',
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
            tab: '编辑圈舍维护信息',
            selectUrl2: [['experts', 'id', 'name', true], ['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '请选择专家'}, {value: '', label: '请选择操作人'}],
            popNumber2: [3, 2],
            selectWhereArr2: [[{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}], [{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
            hasImg: true,
            components: [{
                name: 'serial',
                type: 'text',
                component: null,
                isNull: false,
                label: '圈舍批次号',
                placeholder: '',
                rule: {required: true, trigger: 'blur'},
                disabled: true
            },
            {
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '操作日期',
                placeholder: '',
                rule: [{required: true, message: '请输入操作日期'}, {validator: validate2.reDate, message: '请输入操作日期'}]
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '操作人',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number'},
                options: []
            },
            {
                name: 'expert_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '专家',
                placeholder: '',
                rule: {required: false, type: 'number', message: '请选择专家'},
                options: []
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '标题',
                placeholder: '',
                rule: {required: true, trigger: 'blur', message: '请输入标题'}
            },
            {
                name: 'content',
                type: 'text',
                component: null,
                isNull: false,
                label: '操作内容',
                placeholder: '',
                rule: {required: true, trigger: 'blur', message: '请输入操作内容'}
            },
            {
                name: 'img',
                type: 'file',
                component: inputFile,
                isNull: true,
                label: '圈舍维护图片',
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
                type: 'date',
                component: 'datePick'
            }]
        }]
    }]
}
