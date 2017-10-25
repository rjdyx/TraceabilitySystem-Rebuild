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

export let planSerial = {
    // 计划批次信息
    planSerial: {
        key: 'planSerial',
        tab: '计划批次管理',
        roleName: ['plant/plan', 0],
        theads: ['计划批次号', '计划开始日期', '计划结束日期', '操作类型', '安排人员', '计划内容', '具体规划', '备注'],
        protos: ['serial', 'date', 'end_date', 'type', 'operate_name', 'content', 'planing', 'memo'],
        url: 'plan',
        changeDataArr: [{type: {'施肥': 'fertilize', '施药': 'spray', '采收': 'harvest'}}],
        tabList: [{
            url: 'cultivate-plan',
            tab: '种植批次计划信息',
            searchPlaceholder: '请输入种植批次进行搜索',
            headList: ['种植批次号', '种植区', '种植果蔬', '种植日期', '种植人', '备注信息'],
            protos: ['serial', 'plantation_name', 'plant_name', 'date', 'operate_name', 'memo'],
            widths: [50, 50, 50, 50, 50, 50],
            hiddeEdit: false,
            typeComponent: [{
                component: newbuildBtn
            },
            {
                component: output
            }],
            listComponent: [{
                components: [{
                    type: 'date',
                    component: datePick
                }]
            }],
            newComponent: [{
                tab: '新建批次计划信息',
                type: 'table',
                assocNum: 0,
                labUrl: 'cultivate',
                components: [{
                    name: 'name',
                    type: 'table',
                    theads: ['种植批次号', '种植果蔬', '种植日期'],
                    protos: ['serial', 'plant_name', 'date'],
                    valueId: 'cultivate_ids',
                    errormsg: '请选择种植批次号',
                    tableVal: []
                }]
            }]
        }]
    }
}
