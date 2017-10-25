import importBtn from 'components/public/import-btn.vue'
import newbuildBtn from 'components/public/newbuild-btn.vue'
import output from 'components/public/output.vue'
import selectSection from 'components/public/select-section.vue'
import datePick from 'components/public/datePick.vue'
import inputDate from 'components/public/inputDate.vue'
import inputFile from 'components/public/inputFile.vue'
import inputTextSelect from 'components/public/inputTextSelect.vue'
import Qrcode from 'components/public/Qrcode.vue'

import validate2 from 'utils/validate2.js'

export let systemReport = {
    // 报表
    systemReport: [{
        settitle: '报表预览',
        roleName: ['system/statement', 0],
        key: 'planManage',
        tab: '报表信息',
        url: 'plan',
        theads: ['模块名称', '操作', '内容', '日期时间', '客户端', '公司', '用户'],
        protos: ['plan_type_name', 'name', 'content'],
        widths: [50, 50, 50, 50, 50, 50, 50],
        listComponent: [],
        moreComponent: [{value: '打印'}]
    }]
}
