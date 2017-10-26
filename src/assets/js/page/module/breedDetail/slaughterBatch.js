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

export let slaughterBatch = {
    // 出栏批次详情
    slaughterBatch: {
        key: 'slaughterBatch',
        tab: '畜禽出栏管理',
        roleName: ['beast/come', 0],
        changeDataArr: [{state: {'未完成': 0, '已完成': 1}}],
        theads: ['出栏批次号', '出栏日期', '出栏数量', '操作人员', '状态', '备注'],
        protos: ['serial', 'date', 'amount', 'operate_name', 'state', 'memo'],
        url: 'come',
        tabList: [{
            url: 'come-rfid',
            tab: '畜禽RFID',
            searchPlaceholder: '请输入rfid进行搜索',
            typeComponent: [{component: newbuildBtn}, {component: output}],
            headList: ['圈舍', '养殖批次', 'Rfid', '养殖畜禽', '养殖日期'],
            protos: ['area_name', 'serial', 'rfid', 'beast_name', 'date'],
            widths: [50, 50, 50, 50, 50],
            hiddeEdit: false,
            listComponent: [],
            newComponent: [{
                tab: '新建出栏批次rfid信息',
                selectUrl2: [['breeds', 'id', 'serial', true]],
                selectInit2: [{value: '', label: '养殖批次号选择'}],
                popNumber2: [0],
                labUrl: 'rfid',
                type: 'assoc',
                assocNum: 1,
                components: [{
                    name: 'breed_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '养殖批次号',
                    placeholder: '',
                    assocNum: 1,
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择养殖批次号'},
                    options: []
                },
                {
                    name: 'name',
                    type: 'table',
                    tableUrl: ['rfid', true],
                    theads: ['养殖批次', 'Rfid', '养殖畜禽', '养殖日期'],
                    protos: ['serial', 'rfid', 'beast_name', 'date'],
                    valueId: 'rfid_ids',
                    errormsg: '请选择rfid',
                    tableVal: []
                }]
            }]
        }]
    }
}
