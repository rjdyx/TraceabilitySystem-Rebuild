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

export let slaughterManage = {
    // 畜禽出栏管理
    slaughterManage: [{
        settitle: '出栏管理',
        key: 'come',
        roleName: ['beast/come', 0],
        tab: '出栏信息',
        url: 'come',
        // 链接批次信息模块数据的桥（养殖批次详情）
        batch: 'slaughterBatch',
        searchPlaceholder: '请输入出栏批次进行搜索',
        theads: ['出栏批次号', '出栏日期', '出栏数量', '出栏人员', '备注'],
        protos: ['serial', 'date', 'amount', 'operate_name', 'memo'],
        widths: [50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        newComponent: [{
            tab: '新建出栏信息',
            selectUrl2: [['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '选择出栏人'}],
            popNumber2: [1],
            selectWhereArr2: [[{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
            components: [{
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '出栏日期',
                placeholder: '',
                rule: [{required: true, message: '请输入出栏日期'}, {validator: validate2.reDate, message: '请输入出栏日期'}]
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '出栏人员',
                placeholder: '请选择出栏人员',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择出栏人员'},
                options: []
            },
            {
                name: 'memo',
                type: 'textarea',
                component: null,
                isNull: true,
                label: '备注信息',
                placeholder: '',
                rule: ''
            }]
        }],
        editComponent: [{
            tab: '编辑出栏信息',
            selectUrl2: [['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '选择出栏人'}],
            popNumber2: [3],
            selectWhereArr2: [[{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
            components: [{
                name: 'serial',
                type: 'text',
                component: null,
                isNull: false,
                label: '出栏批次号',
                placeholder: '',
                rule: {required: true, trigger: 'blur'},
                disabled: true
            },
            {
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '出栏日期',
                placeholder: '',
                rule: [{required: true, message: '请输入出栏日期'}, {validator: validate2.reDate, message: '请输入出栏日期'}]
            },
            {
                name: 'amount',
                type: 'text',
                component: null,
                isNull: false,
                label: '出栏数量',
                placeholder: '',
                disabled: true,
                rule: {required: true}
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '出栏人',
                placeholder: '请选择人物',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择出栏人员'},
                options: []
            },
            {
                name: 'memo',
                type: 'textarea',
                component: null,
                isNull: true,
                label: '备注信息',
                placeholder: '',
                rule: ''
            }]
        }],
        listComponent: [{
            components: [{
                type: 'date',
                component: 'datePick'
            }]
        }],
        moreComponent: [{value: '状态'}]
    }]
}
