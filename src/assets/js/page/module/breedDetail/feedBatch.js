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

export let feedBatch = {
    // 饲料批次详情
    feedBatch: {
        key: 'feedBatch',
        tab: '饲料批次管理',
        roleName: ['beast/fodderuse', 0],
        theads: ['饲料批次号', '饲料日期', '饲料名称', '喂养方式', '操作人员', '喂养量', '备注信息'],
        protos: ['serial', 'date', 'fodder_name', 'way', 'operate_name', 'amount_unit', 'meno'],
        url: 'fodderuse',
        tabList: [{
            url: 'breed-fodderuse',
            tab: '养殖批次信息',
            searchPlaceholder: '请输入批次号进行搜索',
            typeComponent: [{component: output}, {component: newbuildBtn}],
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
                tab: '新建批次饲料使用信息',
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
