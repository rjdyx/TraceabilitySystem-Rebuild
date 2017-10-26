import newbuildBtn from 'components/public/newbuild-btn.vue'
import output from 'components/public/output.vue'
import selectSection from 'components/public/select-section.vue'
import datePick from 'components/public/datePick.vue'
import inputDate from 'components/public/inputDate.vue'
import inputFile from 'components/public/inputFile.vue'
import inputTextSelect from 'components/public/inputTextSelect.vue'

import validate2 from 'utils/validate2.js'

export let plagueManage = {
    // 畜禽病疫管理
    plagueManage: [{
        settitle: '病疫管理',
        key: 'disease',
        tab: '病疫信息',
        roleName: ['beast/disease', 0],
        url: 'disease',
        // 链接批次信息模块数据的桥（养殖批次详情）
        batch: 'plagueBatch',
        searchPlaceholder: '请输入病疫批次号进行搜索',
        selectValueId: [['drug_id', 'drug_name', true]],
        selectDefault: [{value: '', label: '兽药选择'}],
        selectSearch: ['diseases.drug_id'],
        theads: ['病疫批次号', '兽药名称', '用药日期', '病情描述', '施药人员', '专家', '平均用药量', '治疗方式', '图片', '备注'],
        protos: ['serial', 'drug_name', 'date', 'description', 'operate_name', 'expert_name', 'amount_unit', 'way', 'img', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        newComponent: [
            {
                tab: '新建病疫情信息',
                selectUrl2: [['drugs', 'id', 'name', true], ['operates', 'id', 'name', true], ['experts', 'id', 'name', true]],
                selectInit2: [{value: '', label: '兽药选择'}, {value: '', label: '施药人员选择'}, {value: '', label: '专家选择'}],
                popNumber2: [0, 3, 4],
                selectWhereArr2: [[], [{n: 'domain', v: 'beast'}], [{n: 'domain', v: 'beast'}]],
                hasImg: true,
                checkNumber: [1],
                components: [{
                    name: 'drug_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '兽药名称',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择兽药'},
                    options: []
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '用药日期',
                    placeholder: '',
                    rule: [{required: true, message: '请输入用药日期'}, {validator: validate2.reDate, message: '请输入用药日期'}]
                },
                {
                    name: 'description',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '病情描述',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '施药人员',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择施药人员'},
                    options: []
                },
                {
                    name: 'expert_id',
                    type: 'select',
                    component: null,
                    isNull: true,
                    label: '专家',
                    placeholder: '',
                    rule: null,
                    options: []
                },
                {
                    name: 'amount',
                    type: 'textSelect',
                    component: inputTextSelect,
                    isNull: false,
                    label: '平均施药量',
                    placeholder: '请输入正确的数字（必填）',
                    rule: [{required: true, message: '请输入平均施药量'}, {validator: validate2.reNumber}],
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
                    label: '治疗方式',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '病疫图片',
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
            }
        ],
        editComponent: [
            {
                tab: '编辑病疫情信息',
                selectUrl2: [['drugs', 'id', 'name', true], ['operates', 'id', 'name', true], ['experts', 'id', 'name', true]],
                selectInit2: [{value: '', label: '兽药选择'}, {value: '', label: '施药人员选择'}, {value: '', label: '专家选择'}],
                popNumber2: [1, 4, 5],
                selectWhereArr2: [[], [{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}], [{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
                hasImg: true,
                components: [{
                    name: 'serial',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '病疫批次号',
                    placeholder: '',
                    disabled: true,
                    rule: null
                },
                {
                    name: 'drug_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '兽药名称',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择兽药'},
                    options: []
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '用药日期',
                    placeholder: '',
                    rule: [{required: true, message: '请输入用药日期'}, {validator: validate2.reDate, message: '请输入用药日期'}]
                },
                {
                    name: 'description',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '病情描述',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '施药人员',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择施药人员'},
                    options: []
                },
                {
                    name: 'expert_id',
                    type: 'select',
                    component: null,
                    isNull: true,
                    label: '专家',
                    placeholder: '',
                    rule: null,
                    options: []
                },
                {
                    name: 'amount',
                    type: 'textSelect',
                    component: inputTextSelect,
                    isNull: false,
                    label: '平均施药量',
                    placeholder: '请输入正确的数字（必填）',
                    rule: [{required: true, message: '请输入平均施药量'}, {validator: validate2.reNumber}],
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
                    label: '治疗方式',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '',
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
            }
        ],
        listComponent: [{
            components: [{
                name: 'diseases.drug_id',
                value: '',
                type: 'select',
                component: selectSection,
                options: []
            },
            {
                type: 'date',
                component: 'datePick'
            }]
        }]
    }]
}
