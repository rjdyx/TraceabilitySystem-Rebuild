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

export let beastDetectPkBatch = {
    // 屠宰加工检测详情
    beastDetectPkBatch: {
        key: 'beastDetectPkBatch',
        tab: '加工检测批次管理',
        roleName: ['packb/detect', 0],
        theads: ['检测批次号', '检测名称', '检测内容', '检测日期', '检测结果', '检测机构', '负责人', '处理方法'],
        protos: ['serial', 'name', 'content', 'date', 'result', 'organization', 'operate_name', 'method'],
        changeDataArr: [{result: {'不合格': 0, '合格': 1}}],
        url: 'detect_pk',
        tabList: [{
            url: 'pack-detect-pk',
            tab: '加工批次信息',
            searchPlaceholder: '请输入加工批次号进行搜索',
            headList: ['加工批次号', '加工日期', '数量', '产地', '操作人', '备注'],
            protos: ['serial', 'date', 'amount', 'origin', 'operate_name', 'memo'],
            widths: [50, 50, 50, 50, 50, 50],
            hiddeEdit: false,
            typeComponent: [{
                component: newbuildBtn
            },
            {
                component: output
            }],
            listComponent: [],
            newComponent: [{
                tab: '新建加工批次检测信息',
                type: 'table',
                labUrl: 'pack',
                assocNum: 0,
                paramsIndex: 'beast',
                components: [{
                    name: 'name',
                    type: 'table',
                    theads: ['加工批次号', '加工日期', '产地'],
                    protos: ['serial', 'date', 'origin'],
                    valueId: 'pack_ids',
                    errormsg: '请选择加工批次',
                    tableVal: []
                }]
            }]
        }]
    }
}
