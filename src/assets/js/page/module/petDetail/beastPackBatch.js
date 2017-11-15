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

export let beastPackBatch = {
    // 屠宰加工批次详情
    beastPackBatch: {
        key: 'beastPackBatch',
        tab: '加工批次管理',
        roleName: ['packb/pack', 0],
        theads: ['加工批次号', '加工日期', '数量', '单位', '加工人', '备注'],
        protos: ['serial', 'date', 'amount', 'unit', 'operate_name', 'memo'],
        batch: 'beastPackProduct',
        url: 'pack',
        obt: 2,
        tabList: [{
            url: 'pack-product',
            tab: '加工批次产品信息',
            searchPlaceholder: '请输入产品名称进行搜索',
            headList: ['产品名称', '执行标准', '商品型号', '包装规格', '保质期', '存储方法'],
            protos: ['name', 'enforce_standard', 'marque', 'specification', 'expiration_date', 'storage_means'],
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
                tab: '新建加工产品信息',
                type: 'table',
                labUrl: 'product',
                assocNum: 0,
                whereArr: [['domain', 'packb'], ['domain', 'all', true]],
                components: [{
                    name: 'name',
                    type: 'table',
                    theads: ['产品名称', '商品型号', '包装规格'],
                    protos: ['name', 'marque', 'specification'],
                    valueId: 'product_ids',
                    errormsg: '请选择产品',
                    tableVal: []
                }]
            }]
        }]
    }
}