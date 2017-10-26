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

export let innocuityManage = {
    // 无害化
    innocuityManage: [{
        settitle: '无害化管理',
        key: 'dispose',
        roleName: ['beast/dispose', 0],
        tab: '无害化信息',
        url: 'dispose',
        // 链接批次信息模块数据的桥（养殖批次详情）
        batch: 'innocuityBatch',
        searchPlaceholder: '请输入无害化批次号进行搜索',
        theads: ['无害化批次号', '操作日期', '操作内容', '实行原因', '操作人员', '指导专家', '图片', '备注信息'],
        protos: ['serial', 'date', 'content', 'why', 'operate_name', 'expert_name', 'img', 'memo'],
        selectSearch: ['dispose.expert_name'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        newComponent: [{
            tab: '新建无害化管理信息',
            selectUrl2: [['experts', 'id', 'name', true], ['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '请选择专家'}, {value: '', label: '请选择操作人'}],
            popNumber2: [1, 2],
            selectWhereArr2: [[{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}], [{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
            hasImg: true,
            components: [{
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '操作日期',
                placeholder: '',
                rule: [{required: true, trigger: 'blur', message: '请输入生产日期'}, {validator: validate2.reDate, message: '请输入生产日期'}]
            },
            {
                name: 'expert_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '指导专家',
                placeholder: '',
                rule: {required: false, type: 'number'},
                options: []
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '操作人员',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择操作人员'},
                options: []
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
                name: 'why',
                type: 'text',
                component: null,
                isNull: false,
                label: '实行原因',
                placeholder: '',
                rule: {required: true, trigger: 'blur', message: '请输入实行原因'}
            },
            {
                name: 'img',
                type: 'file',
                component: inputFile,
                isNull: true,
                label: '无害化图片',
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
            tab: '编辑无害化管理信息',
            selectUrl2: [['experts', 'id', 'name', true], ['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '请选择专家'}, {value: '', label: '请选择操作人'}],
            popNumber2: [2, 3],
            selectWhereArr2: [[{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}], [{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
            hasImg: true,
            components: [{
                name: 'serial',
                type: 'text',
                component: null,
                isNull: false,
                label: '无害化批次号',
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
                rule: [{required: true, trigger: 'blur', message: '请输入生产日期'}, {validator: validate2.reDate, message: '请输入生产日期'}]
            },
            {
                name: 'expert_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '指导专家',
                placeholder: '',
                rule: {required: false, type: 'number'},
                options: []
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '操作人员',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择操作人员'},
                options: []
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
                name: 'why',
                type: 'text',
                component: null,
                isNull: false,
                label: '实行原因',
                placeholder: '',
                rule: {required: true, trigger: 'blur', message: '请输入实行原因'}
            },
            {
                name: 'img',
                type: 'file',
                component: inputFile,
                isNull: true,
                label: '无害化图片',
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
            components: [
                {
                    type: 'date',
                    component: 'datePick'
                }
            ]
        }]
    }]
}
