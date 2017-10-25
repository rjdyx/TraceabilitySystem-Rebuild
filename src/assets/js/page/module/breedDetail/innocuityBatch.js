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

export let innocuityBatch = {
    // 无害化批次详情
    innocuityBatch: {
        key: 'innocuityBatch',
        tab: '无害化批次管理',
        roleName: ['beast/dispose', 0],
        theads: ['无害化批次号', '操作日期', '操作内容', '实行原因', '指导专家', '备注信息'],
        protos: ['serial', 'date', 'content', 'why', 'expert_name', 'memo'],
        url: 'dispose',
        tabList: [{
            url: 'dispose-rfid',
            tab: '养殖批次信息',
            searchPlaceholder: '请输入rfid进行搜索',
            typeComponent: [{component: newbuildBtn}, {component: output}],
            headList: ['养殖批次', '圈舍', 'Rfid', '养殖畜禽', '养殖日期'],
            protos: ['serial', 'area_name', 'rfid', 'beast_name', 'date'],
            widths: [50, 50, 50, 50, 50],
            hiddeEdit: false,
            listComponent: [],
            newComponent: [{
                tab: '新建批次无害化信息',
                selectUrl2: [['breeds', 'id', 'serial', true]],
                selectInit2: [{value: '', label: '养殖批次号选择'}],
                popNumber2: [0],
                labUrl: 'rfid',
                type: 'assoc',
                assocNum: 1,
                components: [{
                    name: 'breed_id',
                    assocNum: 1,
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '养殖批次号',
                    placeholder: '',
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
