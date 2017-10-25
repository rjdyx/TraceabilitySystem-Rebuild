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

export let plantSerial = {
    // 种植批次
    plantSerial: {
        key: 'plantSerial',
        tab: '种植批次管理',
        roleName: ['plant/cultivate', 0],
        theads: ['种植批次号', '所属种植区', '种植人', '种植日期', '种植地址', '种植果蔬名称', '当前批次面积', '状态'],
        protos: ['serial', 'plantation_name', 'operate_name', 'date', 'address', 'plant_name', 'area_unit', 'state'],
        changeDataArr: [{state: {'未完成': 0, '已完成': 1}}],
        url: 'cultivate',
        tabList: [{
            key: 'grow',
            url: 'grow',
            tab: '生长过程信息',
            searchPlaceholder: '请输入标题进行搜索',
            headList: ['图片', '图片标题', '图片描述', '上传日期', '备注信息'],
            protos: ['thumb', 'name', 'desc', 'date', 'memo'],
            hiddeEdit: true,
            widths: [50, 50, 50, 50, 50],
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
                    rule: [{required: true, message: '请输入图片标题', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '生长图片标题重复'}]
                },
                {
                    name: 'desc',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '特征描述',
                    placeholder: '',
                    rule: {required: true, message: '请输入特征描述'}
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '上传日期',
                    placeholder: '',
                    rule: [{required: true, message: '请输入上传日期'}, {validator: validate2.reDate, message: '请输入上传日期'}]
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '上传图片',
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
                checkNumber: [0],
                hasImg: true,
                components: [{
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '图片标题',
                    placeholder: '必填',
                    rule: [{required: true, message: '请输入图片标题', trigger: 'blur'}, {validator: validate2.reCheck, trigger: 'blur', message: '生长图片标题重复'}]
                },
                {
                    name: 'desc',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '特征描述',
                    placeholder: '',
                    rule: {required: true, message: '请输入特征描述'}
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '上传日期',
                    placeholder: '',
                    rule: [{required: true, message: '请输入上传日期'}, {validator: validate2.reDate, message: '请输入上传日期'}]
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '上传图片',
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
        }]
    }
}
