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

export let saleInput = {
    // 销售入库详情
    saleInput: {
        key: 'storageProduct',
        tab: '销售入库批次管理',
        roleName: ['sell/storage', 0],
        theads: ['入库批次号', '入库日期', '供货商', '商品名称', '数量', '入库人', '备注信息'],
        protos: ['serial', 'datetime', 'supplier_name', 'product_name', 'amount', 'operate_name', 'memo'],
        url: 'storage',
        tabList: [{
            key: 'storage-code',
            url: 'storage-code',
            tab: '销售入库信息',
            searchPlaceholder: '请输入溯源码进行搜索',
            headList: ['产品溯源码', '销售产品', '生产日期', '产地', '溯源次数', '备注信息'],
            protos: ['code', 'product_name', 'date', 'origin', 'time', 'memo'],
            hiddeEdit: false,
            widths: [50, 50, 50, 50, 50, 50],
            moreComponent: [{
                value: '打印'
            }],
            typeComponent: [{
                component: output
            }],
            // {
            //     component: scanCode
            // }],
            listComponent: [{
                components: [{
                    type: 'date',
                    component: datePick
                }]
            }],
            printComponent: [{
                tab: '打印溯源码信息',
                components: [{
                    name: 'product_name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '产品名称',
                    placeholder: '',
                    disabled: true,
                    rule: {required: true}
                },
                {
                    name: 'specification',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '产品规格',
                    placeholder: '',
                    disabled: true,
                    rule: {required: true}
                },
                {
                    name: 'date',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '生产日期',
                    placeholder: '',
                    disabled: true,
                    rule: {required: true}
                },
                {
                    name: 'origin',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '产地',
                    placeholder: '',
                    disabled: true,
                    rule: {required: true}
                },
                {
                    name: 'code',
                    component: Qrcode,
                    isNull: false,
                    label: '产品二维码',
                    placeholder: '',
                    rule: null
                }]
            }]
        }]
    }
}
