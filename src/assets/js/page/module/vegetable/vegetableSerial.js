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

export let vegetableSerial = {
    // 果蔬-加工
    vegetableSerial: [{
        settitle: '加工批次管理',
        key: 'plant-pack',
        tab: '加工批次信息',
        roleName: ['packp/pack', 0],
        url: 'pack',
        batch: 'plantPackBatch',
        paramsIndex: 'plant',
        searchPlaceholder: '请输入加工批次号',
        changeDataArr: [{state: {0: '未完成', 1: '已完成'}}],
        theads: ['加工批次号', '加工日期', '数量', '产地', '操作人', '录入人', '状态', '备注'],
        protos: ['serial', 'date', 'amount', 'origin', 'operate_name', 'user_name', 'state', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50],
        moreComponent: [{value: '状态'}],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        listComponent: [{
            components: [
                {
                    type: 'date',
                    component: datePick
                }
            ]
        }],
        newComponent: [{
            tab: '新建加工批次信息',
            hiddenValue: {type: 'plant'},
            selectUrl2: [['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '加工人选择'}],
            popNumber2: [2],
            selectWhereArr2: [[{n: 'domain', v: 'packp'}, {n: 'domain', v: 'all', s: true}]],
            components: [{
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: true,
                label: '加工日期',
                placeholder: '',
                rule: [{required: true, message: '请输入加工日期'}, {validator: validate2.reDate, message: '请输入加工日期'}]
            },
            {
                name: 'origin',
                type: 'text',
                component: null,
                isNull: true,
                label: '产地',
                placeholder: '',
                rule: {required: true}
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '操作人员',
                placeholder: '请选择加工人员',
                rule: {required: true, trigger: 'blur', type: 'number'},
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
        editComponent: [{
            tab: '编辑加工批次信息',
            hiddenValue: {type: 'plant'},
            selectUrl2: [['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '加工人选择'}],
            selectWhereArr2: [[{n: 'domain', v: 'packp'}, {n: 'domain', v: 'all', s: true}]],
            popNumber2: [3],
            components: [{
                name: 'serial',
                type: 'text',
                component: null,
                isNull: false,
                label: '加工批次号',
                disabled: true,
                placeholder: '必填'
            },
            {
                name: 'origin',
                type: 'text',
                component: null,
                isNull: true,
                label: '产地',
                placeholder: '',
                rule: {required: true}
            },
            {
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: true,
                label: '加工日期',
                placeholder: '',
                rule: [{required: true, message: '请输入加工日期'}, {validator: validate2.reDate, message: '请输入加工日期'}]
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '操作人员',
                placeholder: '请选择加工人员',
                rule: {required: true, trigger: 'blur', type: 'number'},
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
        }]
    }]
}
