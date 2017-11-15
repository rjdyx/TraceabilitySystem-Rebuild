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

export let applyOperate = {
    // 申请入驻管理
    applyOperate: [{
        settitle: '申请入驻管理',
        key: 'apply',
        tab: '申请入驻信息',
        url: 'apply',
        searchPlaceholder: '请输入公司名进行搜索',
        changeDataArr: [{state: {0: '未审核', 1: '已审核'}}],
        theads: ['所属公司', '用户名', '姓名', '电子邮箱', '联系电话', '营业执照', '申请日期', '审核状态'],
        protos: ['company_name', 'name', 'real_name', 'email', 'phone', 'img', 'date', 'state'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
        hiddeEdit: true,
        moreComponent: [{value: '通过'}],
        typeComponent: [],
        listComponent: []
    }]
}
