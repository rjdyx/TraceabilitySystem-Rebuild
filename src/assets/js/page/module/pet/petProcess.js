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

export let petProcess = {
    // 畜禽-屠宰加工
    petProcess: [{
        settitle: '加工批次管理',
        key: 'pack',
        roleName: ['packb/pack', 0],
        tab: '加工批次信息',
        url: 'pack',
        batch: 'beastPackBatch',
        paramsIndex: 'beast',
        searchPlaceholder: '请输入批次号进行搜索',
        theads: ['加工批次号', '加工日期', '数量', '产地', '操作人', '备注信息'],
        protos: ['serial', 'date', 'amount', 'origin', 'operate_name', 'memo'],
        widths: [50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        newComponent: [{
            tab: '新建加工批次信息',
            hiddenValue: {type: 'beast'},
            selectUrl2: [['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '选择加工人'}],
            selectWhereArr2: [[{n: 'domain', v: 'packb'}, {n: 'domain', v: 'all', s: true}]],
            popNumber2: [1],
            components: [{
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '加工日期',
                placeholder: '',
                disabled: true,
                rule: [{required: true, message: '请输入加工日期'}, {validator: validate2.reDate, message: '请输入加工日期'}]
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '操作人员',
                placeholder: '请选择人物',
                rule: {required: true, type: 'number', message: '请选择操作人员'},
                options: []
            },
            {
                name: 'origin',
                type: 'text',
                component: null,
                isNull: true,
                label: '产地',
                placeholder: '',
                rule: {required: true, message: '请输入产地'}
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
            tab: '编辑加工批次信息',
            hiddenValue: {type: 'beast'},
            selectUrl2: [['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '选择加工人'}],
            popNumber2: [3],
            selectWhereArr2: [[{n: 'domain', v: 'packb'}, {n: 'domain', v: 'all', s: true}]],
            components: [{
                name: 'serial',
                type: 'text',
                component: null,
                isNull: false,
                label: '批次号',
                placeholder: '',
                disabled: true,
                rule: {required: false, trigger: 'blur'}
            },
            {
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '加工日期',
                placeholder: '',
                disabled: true,
                rule: [{required: true, message: '请输入加工日期'}, {validator: validate2.reDate, message: '请输入加工日期'}]
            },
            {
                name: 'origin',
                type: 'text',
                component: null,
                isNull: true,
                label: '产地',
                placeholder: '',
                rule: {required: true, message: '请输入产地'}
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '操作人员',
                placeholder: '请选择人物',
                rule: {required: false, type: 'number', message: '请选择操作人员'},
                options: []
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
        listComponent: [{
            components: [{
                type: 'date',
                component: 'datePick'
            }]
        }]
    }]
}
