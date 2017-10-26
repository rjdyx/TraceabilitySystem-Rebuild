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

export let detectionBatch = {
    // 检疫批次详情
    detectionBatch: {
        key: 'detectionBatch',
        tab: '检疫批次管理',
        roleName: ['beast/detection', 0],
        theads: ['检验批次号', '检测日期', '检测项目名称', '专家', '操作人员', '检测内容', '检测结果', '审批人', '备注'],
        protos: ['serial', 'date', 'name', 'expert_name', 'operate_name', 'content', 'result', 'check', 'memo'],
        changeDataArr: [{result: {'不合格': 0, '合格': 1}}],
        url: 'detection',
        tabList: [{
            url: 'detection-rfid',
            tab: '养殖批次信息',
            searchPlaceholder: '请输入rfid进行搜索',
            typeComponent: [{component: output}, {component: newbuildBtn}],
            headList: ['养殖批次号', '圈舍', 'Rfid', '畜禽名称', '养殖日期'],
            protos: ['serial', 'area_name', 'rfid', 'beast_name', 'date'],
            widths: [50, 50, 50, 50, 50],
            hiddeEdit: false,
            listComponent: [{
                components: [{
                    type: 'date',
                    component: datePick
                }]
            }],
            newComponent: [{
                tab: '新建批次检疫信息',
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
                    assocNum: 1,
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
