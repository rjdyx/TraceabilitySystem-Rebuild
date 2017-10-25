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

export let sprayBatch = {
    // 施药批次详情
    sprayBatch: {
        key: 'sprayBatch',
        tab: '施药批次管理',
        roleName: ['plant/farming', 0],
        theads: ['施药批次号', '农药', '施药人', '施药日期', '施药量（Kg）', '专家', '施药方法', '备注'],
        protos: ['serial', 'medicament_name', 'operate_name', 'date', 'amount_unit', 'expert_name', 'way', 'memo'],
        url: 'spray',
        tabList: [{
            url: 'cultivate-spray',
            tab: '种植批次施药信息',
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
                tab: '新建批次施药信息',
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
