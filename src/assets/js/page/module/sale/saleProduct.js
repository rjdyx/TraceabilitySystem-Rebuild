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

export let saleProduct = {
    // 销售产品库
    saleProduct: [{
        settitle: '销售商品库管理',
        key: 'product-count',
        roleName: ['sell/repertory', 0],
        checkOperate: 'true',
        tab: '商品统计信息',
        url: 'product-count',
        searchPlaceholder: '请输入商品名称进行搜索',
        theads: ['商品名称', '入库总数量', '销售总数量', '加工总数量', '销售总额'],
        protos: ['product_name', 'storage_amount', 'sell_amount', 'pack_amount', 'money'],
        widths: [50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        }],
        listComponent: []
    }]
}
