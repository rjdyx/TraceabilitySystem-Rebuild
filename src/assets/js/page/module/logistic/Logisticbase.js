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

export let Logisticbase = {
    // 物流基础信息
    Logisticbase: [
        {
            settitle: '基础信息管理',
            key: 'logistic',
            roleName: ['delivery/basic', 0],
            tab: '物流公司信息',
            url: 'logistic',
            searchPlaceholder: '请输入物流公司进行搜索',
            theads: ['物流公司名称', '联系人', '联系电话', '地址', '备注信息'],
            protos: ['name', 'contacts', 'phone', 'address', 'memo'],
            widths: [50, 50, 50, 50, 50],
            listComponent: [],
            typeComponent: [{
                component: output
            },
            {
                component: newbuildBtn
            }],
            newComponent: [{
                tab: '新建物流公司信息',
                checkNumber: [0],
                components: [{
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '物流公司名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入物流公司名称', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '物流公司名称重复'}]
                },
                {
                    name: 'contacts',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '联系人',
                    placeholder: '必填',
                    rule: {required: true, message: '请输入联系人', trigger: 'blur'}
                },
                {
                    name: 'phone',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '联系电话',
                    placeholder: '请输入11位的手机号（固话用-隔开）',
                    rule: { required: true, validator: validate2.phone, trigger: 'blur' }
                },
                {
                    name: 'address',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '地址',
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
                tab: '编辑物流公司',
                checkNumber: [0],
                components: [{
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '物流公司名称',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入物流公司名称', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '物流公司名称重复'}]
                },
                {
                    name: 'contacts',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '联系人',
                    placeholder: '必填',
                    rule: {required: true, message: '请输入联系人', trigger: 'blur'}
                },
                {
                    name: 'phone',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '联系电话',
                    placeholder: '请输入11位的手机号（固话用-隔开）',
                    rule: { required: true, validator: validate2.phone, trigger: 'blur' }
                },
                {
                    name: 'address',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '地址',
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
        },
        {
            settitle: '基础信息管理',
            key: 'vehicle',
            roleName: ['delivery/basic', 0],
            tab: '车辆信息',
            url: 'vehicle',
            selectSearch: ['brand'],
            selectValueId: [['brand', 'brand', true]],
            selectDefault: [{value: '', label: '车辆品牌'}],
            searchPlaceholder: '请输入车牌号进行搜索',
            theads: ['车辆品牌', '车辆号码', '核载吨位（吨）', '备注信息'],
            protos: ['brand', 'number', 'tonnage', 'memo'],
            widths: [50, 50, 50, 50],
            typeComponent: [{
                component: output
            },
            {
                component: newbuildBtn
            }],
            listComponent: [{
                components: [{
                    name: 'brand',
                    value: '',
                    type: 'select',
                    component: selectSection,
                    options: []
                }]
            }],
            newComponent: [{
                tab: '新建车辆信息',
                checkNumber: [1],
                components: [{
                    name: 'brand',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '车辆品牌',
                    placeholder: '必填',
                    rule: {required: true, message: '请输入车辆品牌', trigger: 'blur'}
                },
                {
                    name: 'number',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '车辆号码',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入车辆号码', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '车辆号码已存在'}]
                },
                {
                    name: 'tonnage',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '核载吨位',
                    placeholder: '单位为吨',
                    rule: {validator: validate2.reNumber}
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
                tab: '编辑车辆信息',
                checkNumber: [1],
                components: [{
                    name: 'brand',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '车辆品牌',
                    placeholder: '必填',
                    rule: {required: true, message: '请输入车辆品牌', trigger: 'blur'}
                },
                {
                    name: 'number',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '车辆号码',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入车辆号码', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '车辆号码已存在'}]
                },
                {
                    name: 'tonnage',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '核载吨位',
                    placeholder: '单位为吨',
                    rule: {validator: validate2.reNumber}
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
        },
        {
            settitle: '基础信息管理',
            key: 'driver',
            roleName: ['delivery/basic', 0],
            tab: '驾驶员信息',
            url: 'driver',
            changeDataArr: [{sex: {0: '男', 1: '女'}}],
            searchPlaceholder: '请输入司机姓名进行搜索',
            theads: ['驾驶员姓名', '性别', '联系电话', '取得驾照时间（年）', '出生日期', '驾照类型(A1、C2...)', '备注信息'],
            protos: ['name', 'sex', 'phone', 'driver', 'birth', 'type', 'memo'],
            widths: [50, 50, 50, 50, 50, 50, 50],
            listComponent: [],
            typeComponent: [{
                component: output
            },
            {
                component: newbuildBtn
            }],
            newComponent: [{
                tab: '新建司机信息',
                checkNumber: [0],
                components: [{
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '驾驶员姓名',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入驾驶员姓名', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '驾驶员已存在'}]
                },
                {
                    name: 'phone',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '联系电话',
                    placeholder: '请输入11位的手机号（固话用-隔开）',
                    rule: { required: true, validator: validate2.phone, trigger: 'blur' }
                },
                {
                    name: 'sex',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '性别',
                    placeholder: '',
                    rule: null,
                    options: [{
                        value: 0,
                        label: '男'
                    },
                    {
                        value: 1,
                        label: '女'
                    }]
                },
                {
                    name: 'birth',
                    type: 'date',
                    component: inputDate,
                    isNull: true,
                    label: '出生年月',
                    placeholder: '',
                    rule: {validator: validate2.reDate, aa: '44'}
                },
                {
                    name: 'driver',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '取得驾照时间（年）',
                    placeholder: '',
                    rule: {validator: validate2.reNumber}
                },
                {
                    name: 'type',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '驾照类型',
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
                tab: '编辑司机信息',
                checkNumber: [0],
                components: [{
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '驾驶员姓名',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入驾驶员姓名', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '驾驶员已存在'}]
                },
                {
                    name: 'phone',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '联系电话',
                    placeholder: '请输入11位的手机号（固话用-隔开）',
                    rule: { required: true, validator: validate2.phone, trigger: 'blur' }
                },
                {
                    name: 'sex',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '性别',
                    placeholder: '',
                    rule: null,
                    options: [{
                        value: 0,
                        label: '男'
                    },
                    {
                        value: 1,
                        label: '女'
                    }]
                },
                {
                    name: 'birth',
                    type: 'date',
                    component: inputDate,
                    isNull: true,
                    label: '出生年月',
                    placeholder: '',
                    rule: {validator: validate2.reDate, aa: '44'}
                },
                {
                    name: 'driver',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '取得驾照时间（年）',
                    placeholder: '',
                    rule: {validator: validate2.reNumber}
                },
                {
                    name: 'type',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '驾照类型',
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
        }
    ]
}
