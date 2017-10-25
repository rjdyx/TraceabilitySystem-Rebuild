import newbuildBtn from 'components/public/newbuild-btn.vue'
import output from 'components/public/output.vue'
import selectSection from 'components/public/select-section.vue'
import datePick from 'components/public/datePick.vue'
import inputDate from 'components/public/inputDate.vue'

import validate2 from 'utils/validate2.js'

export let serialManage = {
    // 养殖批次管理
    serialManage: [{
        settitle: '养殖批次管理',
        key: 'breed',
        tab: '养殖批次信息',
        roleName: ['beast/breed', 0],
        url: 'breed',
        // 链接批次信息模块数据的桥（养殖批次详情）
        batch: 'breedBatch',
        searchPlaceholder: '请输入养殖批次号进行搜索',
        selectValueId: [['beast_id', 'beast_name', true]],
        selectDefault: [{value: '', label: '请选择畜禽'}],
        changeDataArr: [{state: {0: '未完成', 1: '已完成'}}],
        theads: ['批次号', '养殖区', '圈舍', '畜禽', '开始日期', '数量', '养殖方式', '养殖人', '操作人', '录入人', '状态', '备注'],
        protos: ['serial', 'farm_name', 'area_name', 'beast_name', 'start_date', 'amount', 'way', 'operate', 'operate_name', 'user_name', 'state', 'memo'],
        selectSearch: ['breeds.beast_id'],
        widths: [60, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        newComponent: [{
            tab: '新建养殖批次',
            selectUrl2: [['areas', 'id', 'name', true], ['beasts', 'id', 'name', true], ['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '选择圈舍'}, {value: '', label: '选择畜禽'}, {value: '', label: '请选择操作人'}],
            popNumber2: [0, 1, 2],
            selectWhereArr2: [[], [], [{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
            components: [{
                name: 'area_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '圈舍',
                placeholder: '请选择圈舍',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择圈舍'},
                options: []
            },
            {
                name: 'beast_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '畜禽名称',
                placeholder: '请选择畜禽',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择畜禽'},
                options: []
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '操作人',
                placeholder: '请选择操作人',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择操作人'},
                options: []
            },
            {
                name: 'start_date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '养殖日期',
                placeholder: '',
                rule: [{required: true, message: '请输入养殖日期'}, {validator: validate2.reDate, message: '请输入养殖日期'}]
            },
            {
                name: 'way',
                type: 'text',
                component: null,
                isNull: true,
                label: '养殖方式',
                placeholder: '请填写养殖方式',
                rule: {required: true, trigger: 'blur', message: '请填写养殖方式'}
            },
            {
                name: 'operate',
                type: 'text',
                component: null,
                isNull: true,
                label: '养殖人',
                placeholder: '请填写养殖人',
                rule: {required: true, trigger: 'blur', message: '请填写养殖人'}
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
            tab: '编辑养殖批次',
            selectInit2: [{value: '', label: '选择圈舍'}, {value: '', label: '选择畜禽'}, {value: '', label: '请选择操作人'}],
            selectUrl2: [['areas', 'id', 'name', true], ['beasts', 'id', 'name', true], ['operates', 'id', 'name', true]],
            popNumber2: [1, 2, 3],
            selectWhereArr2: [[], [], [{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
            components: [{
                name: 'serial',
                type: 'text',
                component: null,
                isNull: false,
                label: '批次号',
                placeholder: '',
                disabled: true,
                rule: {required: true}
            },
            {
                name: 'area_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '圈舍',
                placeholder: '请选择圈舍',
                disabled: true,
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择圈舍'},
                options: []
            },
            {
                name: 'beast_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '畜禽名称',
                placeholder: '请选择畜禽',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择畜禽'},
                options: []
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '操作人',
                placeholder: '请选择操作人',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择操作人'},
                options: []
            },
            {
                name: 'amount',
                type: 'text',
                component: null,
                isNull: true,
                label: 'rfid数量',
                placeholder: '',
                disabled: true,
                rule: null
            },
            {
                name: 'start_date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '开始日期',
                placeholder: '',
                rule: [{required: true, message: '请输入种植日期'}, {validator: validate2.reDate, message: '请输入种植日期'}]
            },
            {
                name: 'way',
                type: 'text',
                component: null,
                isNull: true,
                label: '养殖方式',
                placeholder: '请填写养殖方式',
                rule: {required: true, trigger: 'blur', message: '请填写养殖方式'}
            },
            {
                name: 'operate',
                type: 'text',
                component: null,
                isNull: true,
                label: '养殖人',
                placeholder: '请填写养殖人',
                rule: {required: true, trigger: 'blur', message: '请填写养殖人'}
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
                type: 'select',
                component: selectSection,
                name: 'beast_id',
                value: '',
                options: []
            },
            {
                type: 'date',
                component: 'datePick'
            }]
        }],
        moreComponent: [{value: '状态'}]
    }]
}
