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

export let areaBatch = {
    // 圈舍维护批次详情
    areaBatch: {
        key: 'areaBatch',
        tab: '圈舍维护批次管理',
        roleName: ['beast/clean', 0],
        theads: ['圈舍批次号', '操作类型', '操作方式', '操作内容', '专家', '操作人', '操作日期', '备注信息'],
        protos: ['serial', 'name', 'way', 'content', 'expert_name', 'operate_name', 'date', 'memo'],
        url: 'clean',
        tabList: [{
            url: 'clean-area',
            tab: '养殖批次信息',
            searchPlaceholder: '请输入圈舍名称搜索',
            typeComponent: [{component: output}, {component: newbuildBtn}],
            headList: ['所属养殖区', '圈舍', '圈舍面积'],
            protos: ['farm_name', 'name', 'area_unit'],
            widths: [50, 50, 50],
            hiddeEdit: false,
            listComponent: [],
            newComponent: [{
                tab: '新建批次圈舍维护信息',
                type: 'table',
                labUrl: 'area',
                assocNum: 0,
                components: [{
                    name: 'name',
                    type: 'table',
                    theads: ['所属养殖区', '圈舍名称', '圈舍面积'],
                    protos: ['farm_name', 'name', 'area_unit'],
                    valueId: 'area_ids',
                    errormsg: '请选择圈舍',
                    tableVal: []
                }]
            }]
        }]
    }
}
