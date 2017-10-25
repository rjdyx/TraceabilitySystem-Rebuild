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

export let farmingBatch = {
    // 种植田间信息
    farmingBatch: {
        key: 'farmingBatch',
        tab: '种植田间批次管理',
        roleName: ['plant/farming', 0],
        theads: ['田间批次号', '操作内容', '操作方法', '操作日期', '操作人', '专家', '天气'],
        protos: ['serial', 'content', 'method', 'date', 'operate_name', 'expert_name', 'weather'],
        url: 'farming',
        tabList: [{
            url: 'cultivate-farming',
            tab: '种植批次农事信息',
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
                tab: '新建批次农事信息',
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
