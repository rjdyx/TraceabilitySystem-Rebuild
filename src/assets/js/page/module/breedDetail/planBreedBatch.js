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

export let planBreedBatch = {
    // 养殖计划批次详情1
    planBreedBatch: {
        key: 'planBatch',
        tab: '养殖计划管理',
        roleName: ['beast/plan', 0],
        theads: ['养殖计划批次号', '计划开始日期', '计划结束日期', '操作类型', '安排人员', '计划内容', '具体规划', '状态', '备注'],
        protos: ['serial', 'date', 'end_date', 'type', 'operate_name', 'content', 'planing', 'state', 'memo'],
        changeDataArr: [{type: {'饲养': 'fodderuse'}}, {state: {'未完成': 0, '已完成': 1}}],
        url: 'plan',
        tabList: [{
            url: 'breed-plan',
            tab: '养殖批次信息',
            searchPlaceholder: '请输入批次号进行搜索',
            typeComponent: [{component: newbuildBtn}, {component: output}],
            headList: ['养殖批次号', '圈舍', '畜禽名称', '养殖日期'],
            protos: ['serial', 'area_name', 'beast_name', 'date'],
            widths: [50, 50, 50, 50],
            hiddeEdit: false,
            listComponent: [{
                components: [{
                    type: 'date',
                    component: datePick
                }]
            }],
            newComponent: [{
                tab: '新建养殖计划批次信息',
                type: 'table',
                assocNum: 0,
                labUrl: 'breed',
                components: [{
                    name: 'name',
                    type: 'table',
                    theads: ['养殖批次号', '圈舍', '养殖畜禽', '养殖日期'],
                    protos: ['serial', 'area_name', 'beast_name', 'start_date'],
                    valueId: 'breed_ids',
                    errormsg: '请选择养殖批次号',
                    tableVal: []
                }]
            }]
        }]
    }
}
