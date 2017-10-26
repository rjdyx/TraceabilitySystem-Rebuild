import importBtn from 'components/public/import-btn.vue'
import newbuildBtn from 'components/public/newbuild-btn.vue'
import scanCode from 'components/public/scanCode.vue'
import output from 'components/public/output.vue'
import selectSection from 'components/public/select-section.vue'
import datePick from 'components/public/datePick.vue'
import categoryBtn from 'components/public/categoryBtn.vue'
import addRfidBtn from 'components/public/addRfidBtn.vue'
import inputFile from 'components/public/inputFile.vue'
import inputDate from 'components/public/inputDate.vue'
import validate2 from 'utils/validate2.js'
import Qrcode from 'components/public/Qrcode.vue'

export let breedBatch = {
    // 养殖批次详情
    breedBatch: {
        key: 'breedBatch',
        roleName: ['beast/breed', 0], // 接口权限参数 参数1为权限name 参数2为是否区分运营者 （默认0）
        tab: '养殖批次管理',
        changeDataArr: [{state: {'未完成': 0, '已完成': 1}}],
        theads: ['批次号', '养殖区', '圈舍', '畜禽', '开始日期', '数量', '养殖方式', '养殖人', '操作人', '录入人', '状态'],
        protos: ['serial', 'farm_name', 'area_name', 'beast_name', 'start_date', 'amount', 'way', 'operate', 'operate_name', 'user_name', 'state'],
        url: 'breed',
        tabList: [{
            url: 'rfid',
            tab: '畜禽RFID',
            searchPlaceholder: '请输入rfid进行搜索',
            typeComponent: [{component: output}, {component: importBtn}, {component: newbuildBtn}],
            headList: ['RFID', '畜禽名称', '养殖日期', '备注信息'],
            hiddeEdit: true,
            protos: ['rfid', 'beast_name', 'created_at', 'memo'],
            widths: [50, 50, 50, 50],
            listComponent: [],
            newComponent: [{
                tab: '新建rfid信息',
                checkNumber: [0],
                components: [{
                    name: 'rfid',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: 'Rfid',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入Rfid', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: 'Rfid已存在'}]
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
                tab: '编辑rfid信息',
                checkNumber: [0],
                components: [{
                    name: 'rfid',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: 'Rfid',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入Rfid', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: 'Rfid已存在'}]
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
            url: 'course',
            tab: '生长过程信息',
            searchPlaceholder: '请输入标题进行搜索',
            headList: ['标题', '描述', '上传日期', '生长图片', '备注信息'],
            protos: ['name', 'desc', 'date', 'thumb', 'memo'],
            widths: [50, 50, 50, 50, 50],
            hiddeEdit: true,
            typeComponent: [{
                component: newbuildBtn
            }],
            listComponent: [{
                components: [{
                    type: 'date',
                    component: datePick
                }]
            }],
            newComponent: [{
                tab: '新建生长过程信息',
                hasImg: true,
                checkNumber: [0],
                components: [{
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '图片标题',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入标题'}, {validator: validate2.reCheck, trigger: 'blur', message: '生长图片标题重复'}]
                },
                {
                    name: 'desc',
                    type: 'textarea',
                    component: null,
                    isNull: false,
                    label: '特征描述',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', message: '请输入描述信息'}
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '上传日期',
                    placeholder: '',
                    rule: [{required: true, trigger: 'blur', message: '请输入上传日期'}, {validator: validate2.reDate, message: '请输入上传日期'}]
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: false,
                    label: '图片',
                    placeholder: '',
                    rule: {required: true, message: '请上传图片'}
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
                tab: '编辑生长过程信息',
                hasImg: true,
                checkNumber: [0],
                components: [{
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '图片标题',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入标题', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '生长图片标题重复'}]
                },
                {
                    name: 'desc',
                    type: 'textarea',
                    component: null,
                    isNull: false,
                    label: '特征描述',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', message: '请输入描述信息'}
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '上传日期',
                    placeholder: '',
                    rule: [{required: true, trigger: 'blur', message: '请输入上传日期'}, {validator: validate2.reDate, message: '请输入上传日期'}]
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: false,
                    label: '图片',
                    placeholder: '',
                    rule: {required: true, message: '请上传图片'}
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
            url: 'breed_area',
            tab: '圈舍记录',
            searchPlaceholder: '请输入圈舍名称进行搜索',
            headList: ['圈舍名称', '开始日期', '结束日期', '操作人', '录入人'],
            protos: ['name', 'date', 'end_date', 'operate_name', 'user_name'],
            widths: [50, 50, 50, 50, 50],
            // hiddeEdit: false,
            typeComponent: [{
                component: newbuildBtn
            }],
            listComponent: [{
                components: [{
                    type: 'date',
                    component: datePick
                }]
            }],
            newComponent: [{
                tab: '新建圈舍转移信息',
                selectUrl2: [['areas', 'id', 'name', true], ['operates', 'id', 'name', true]],
                selectInit2: [{value: '', label: '选择要转移的圈舍'}, {value: '', label: '选择操作人'}],
                popNumber2: [0, 1],
                selectWhere2: ['id', ''],
                components: [{
                    name: 'area_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '圈舍名称',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择要转移的圈舍'},
                    options: []
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
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '转移日期',
                    placeholder: '',
                    rule: [{required: true, trigger: 'blur', message: '请输入上传日期'}, {validator: validate2.reDate, message: '请输入上传日期'}]
                }]
            }],
            editComponent: [{
                tab: '编辑圈舍转移信息',
                selectUrl2: [['areas', 'id', 'name', true], ['operates', 'id', 'name', true]],
                selectInit2: [{value: '', label: '选择要转移的圈舍'}, {value: '', label: '选择操作人'}],
                popNumber2: [0, 1],
                selectWhere2: ['id', ''],
                components: [{
                    name: 'area_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '圈舍名称',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择要转移的圈舍'},
                    options: []
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
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '转移日期',
                    placeholder: '',
                    rule: [{required: true, trigger: 'blur', message: '请输入上传日期'}, {validator: validate2.reDate, message: '请输入上传日期'}]
                }]
            }]
        }
        ]
    }
}
