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

export let usersOperate = {
    // 运营-用户反馈
    usersOperate: [{
        settitle: '用户反馈管理',
        roleName: ['admin/feedback', 1],
        key: 'feedback',
        tab: '用户反馈信息',
        url: 'feedback',
        hiddeEdit: true,
        searchPlaceholder: '请输入公司名称进行搜索',
        theads: ['所属公司', '用户名', '姓名', '联系方式', '提交日期', '评价星级', '不足', '问题描述'],
        protos: ['company_name', 'user_name', 'name', 'contact', 'datetime', 'grade', 'lack', 'content'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        }],
        listComponent: []
    }]
}
