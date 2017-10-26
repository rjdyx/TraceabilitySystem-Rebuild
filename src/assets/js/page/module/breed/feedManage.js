import newbuildBtn from 'components/public/newbuild-btn.vue'
import output from 'components/public/output.vue'
import selectSection from 'components/public/select-section.vue'
import datePick from 'components/public/datePick.vue'
import inputDate from 'components/public/inputDate.vue'
import inputTextSelect from 'components/public/inputTextSelect.vue'

import validate2 from 'utils/validate2.js'

export let feedManage = {
    // 饲料使用管理
    feedManage: [{
        settitle: '饲料使用管理',
        key: 'fodderuse',
        tab: '饲料使用信息',
        roleName: ['beast/fodderuse', 0],
        url: 'fodderuse',
        // 链接批次信息模块数据的桥（养殖批次详情）
        batch: 'feedBatch',
        searchPlaceholder: '请输入饲料批次号进行搜索',
        selectValueId: [['fodder_id', 'fodder_name', true]],
        selectDefault: [{value: '', label: '饲料选择'}],
        selectSearch: ['fodderuse.fodder_id'],
        theads: ['饲料批次号', '饲料使用日期', '饲料名称', '饲料添加剂', '喂养方式', '操作人员', '平均喂养量', '备注信息'],
        protos: ['serial', 'date', 'fodder_name', 'addition_name', 'way', 'operate_name', 'amount_unit', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        newComponent: [{
            tab: '新建饲料使用信息',
            selectUrl2: [['fodders', 'id', 'name', true], ['additions', 'id', 'name', true], ['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '饲料选择'}, {value: '', label: '饲料添加剂选择'}, {value: '', label: '饲养人员选择'}],
            popNumber2: [0, 1, 2],
            selectWhereArr2: [[], [], [{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
            components: [{
                name: 'fodder_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '饲料名称',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择饲料'},
                options: []
            },
            {
                name: 'addition_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '饲料添加剂',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择饲料添加剂'},
                options: []
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '饲养员',
                placeholder: '请选择饲养员',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择饲养员'},
                options: []
            },
            {
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '饲养日期',
                placeholder: '',
                rule: [{required: true, trigger: 'blur', message: '请输入饲养日期'}, {validator: validate2.reDate, message: '请输入饲养日期'}]
            },
            {
                name: 'amount',
                type: 'textSelect',
                component: inputTextSelect,
                isNull: true,
                label: '平均喂养量',
                placeholder: '请输入整数',
                rule: [{required: true, trigger: 'blur', message: '请输入饲养量'}, {validator: validate2.reNumber}],
                options: [{
                    value: 'kg/只',
                    label: 'kg/只'
                },
                {
                    value: 'kg/头',
                    label: 'kg/头'
                },
                {
                    value: 'kg/条',
                    label: 'kg/条'
                }]
            },
            {
                name: 'way',
                type: 'text',
                component: null,
                isNull: true,
                label: '喂养方式',
                placeholder: '',
                rule: null
            },
            {
                name: 'name',
                type: 'textarea',
                component: null,
                isNull: true,
                label: '备注信息',
                placeholder: '',
                rule: null
            }]
        }],
        editComponent: [{
            tab: '编辑饲料使用信息',
            selectUrl2: [['fodders', 'id', 'name', true], ['additions', 'id', 'name', true], ['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '饲料选择'}, {value: '', label: '饲料添加剂选择'}, {value: '', label: '饲养人员选择'}],
            popNumber2: [1, 2, 3],
            selectWhereArr2: [[], [], [{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
            components: [{
                name: 'serial',
                type: 'text',
                component: null,
                isNull: false,
                label: '饲料批次号',
                placeholder: '',
                disabled: true,
                rule: {required: false, trigger: 'blur'},
                options: []
            },
            {
                name: 'fodder_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '饲料名称',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择饲料'},
                options: []
            },
            {
                name: 'addition_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '饲料添加剂',
                placeholder: '',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择饲料添加剂'},
                options: []
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '饲养员',
                placeholder: '请选择饲养员',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择饲养员'},
                options: []
            },
            {
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '使用日期',
                placeholder: '',
                rule: [{required: true, trigger: 'blur', message: '请输入饲养日期'}, {validator: validate2.reDate, message: '请输入饲养日期'}]
            },
            {
                name: 'amount',
                type: 'textSelect',
                component: inputTextSelect,
                isNull: true,
                label: '平均喂养量',
                placeholder: '',
                rule: [{required: true, message: '请输入饲养量'}, {validator: validate2.reNumber}],
                options: [{
                    value: 'kg/只',
                    label: 'kg/只'
                },
                {
                    value: 'kg/头',
                    label: 'kg/头'
                },
                {
                    value: 'kg/条',
                    label: 'kg/条'
                }]
            },
            {
                name: 'way',
                type: 'text',
                component: null,
                isNull: true,
                label: '喂养方式',
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
        listComponent: [{
            components: [{
                type: 'select',
                component: selectSection,
                name: 'fodders.id',
                value: '',
                options: []
            },
            {
                type: 'date',
                component: 'datePick'
            }]
        }]
    }]
}
