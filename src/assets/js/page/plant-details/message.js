import importBtn from '../../components/public/import-btn.vue'
import newbuildBtn from '../../components/public/newbuild-btn.vue'
import output from '../../components/public/output.vue'
import selectSection from '../../components/public/select-section.vue'
import datePick from '../../components/public/datePick.vue'
import categoryBtn from '../../components/public/categoryBtn.vue'
import addRfidBtn from '../../components/public/addRfidBtn.vue'
export default {
    // 养殖批次管理  详情页信息
    breedBatch: {
        key: 'breedBatch',
        tab: '养殖批次管理',
        theads: ['养殖批次号', '所属养殖场', '养殖人', '养殖日期', '所属养殖区', '养殖地址', '养殖畜禽名称', '养殖面积', '养殖备注'],
        protos: [],
        // url: 'breed/4',
        url: 'breed',
        tabList: [{
            // url: '4/rfid',
            url: 'rfid',
            tab: '畜禽RFID',
            searchPlaceholder: '请输入rfid进行搜索',
            leftOperateList: [],
            rightOperateComponent: [{component: importBtn}, {component: output}, {component: newbuildBtn}],
            headList: ['RFID', '畜禽名称', '养殖日期', '备注信息'],
            protos: ['ear', 'name', 'date', 'memo'],
            widths: [50, 50, 50],
            newComponent: [{label: '', type: '', component: '', rule: ''}],
            tableOperateList: [{operateName: '编辑'}, {operateName: '删除'}],
            bottomOperateList: [{operateName: '删除'}, {operateName: '导出表格'}]
        },
        {
            // url: '4/course',
            url: 'course',
            tab: '生长过程信息',
            searchPlaceholder: '请输入标题进行搜索',
            leftOperateList: [],
            rightOperateComponent: [{component: newbuildBtn}],
            headList: ['生长图片', '标题', '图片描述', '上传日期', '备注信息'],
            protos: ['img', 'name', 'miaoshu', 'date', 'memo'],
            widths: [50, 50, 50, 50, 50],
            newComponent: [{label: '', type: '', component: '', rule: ''}],
            tableOperateList: [{operateName: '编辑'}, {operateName: '删除'}],
            bottomOperateList: [{operateName: '删除'}]
        }]
    },
    // 饲料批次
    feedBatch: {
        key: 'feedBatch',
        tab: '饲料批次管理',
        theads: ['饲料批次号', '饲料日期', '饲料名称', '喂养方式', '专家', '操作人员', '喂养量', '备注信息'],
        protos: ['serial', 'fodderuse_date', 'fodder_name', 'way', 'expert_name', 'operate_name', 'amount', 'meno'],
        url: 'fodderuse',
        tabList: [{
            url: 'breed-fodderuse',
            tab: '养殖批次信息',
            searchPlaceholder: '请输入批次号进行搜索',
            leftOperateList: [],
            rightOperateComponent: [{component: output}, {component: newbuildBtn}],
            headList: ['所属养殖区', '养殖批次号', '畜禽名称', '养殖日期'],
            protos: ['area', 'serial', 'name', 'date'],
            widths: [50, 50, 50],
            newComponent: [{label: '', type: '', component: '', rule: ''}],
            tableOperateList: [{operateName: '编辑'}, {operateName: '删除'}],
            bottomOperateList: [{operateName: '删除'}, {operateName: '导出表格'}]
        }]
    },
    // 病疫批次
    plagueBatch: {
        key: 'plagueBatch',
        tab: '病疫批次管理',
        theads: ['病疫批次号', '兽药名称', '用药日期', '病情描述', '专家', '平均用药量', '治疗方式', '备注'],
        protos: ['serial', 'drug_name', 'date', 'description', 'expert_name', 'amount', 'way', 'meno'],
        url: 'breed/4',
        tabList: [{
            url: '4/rfid',
            tab: '养殖批次信息',
            searchPlaceholder: '请输入批次号进行搜索',
            leftOperateList: [],
            rightOperateComponent: [{component: output}, {component: newbuildBtn}],
            headList: ['所属养殖区', '养殖批次号', '畜禽名称', '养殖日期'],
            protos: ['area', 'serial', 'name', 'date'],
            widths: [50, 50, 50],
            newComponent: [{label: '', type: '', component: '', rule: ''}],
            tableOperateList: [{operateName: '编辑'}, {operateName: '删除'}],
            bottomOperateList: [{operateName: '删除'}, {operateName: '导出表格'}]
        }]
    },
    // 检疫批次
    quarantineBatch: {
        key: 'quarantineBatch',
        tab: '检疫批次管理',
        theads: ['检验批次号', '检测日期', '检测项目名称', '专家', '操作人员', '检测内容', '检测结果', '审批人', '检测报告图片', '备注'],
        protos: ['serial', 'date', 'name', 'expert_name', 'operate_name', 'content', 'result', 'check', 'img', 'memo'],
        tabList: [{
            url: '4/rfid',
            tab: '养殖批次信息',
            searchPlaceholder: '请输入批次号进行搜索',
            leftOperateList: [],
            rightOperateComponent: [{component: output}, {component: newbuildBtn}],
            headList: ['所属养殖区', '养殖批次号', '畜禽名称', '养殖日期'],
            protos: ['area', 'serial', 'name', 'date'],
            widths: [50, 50, 50],
            newComponent: [{label: '', type: '', component: '', rule: ''}],
            tableOperateList: [{operateName: '编辑'}, {operateName: '删除'}],
            bottomOperateList: [{operateName: '删除'}, {operateName: '导出表格'}]
        }]
    },
    // 圈舍批次
    areaBatch: {
        key: 'areaBatch',
        tab: '圈舍批次管理',
        theads: ['圈舍批次号', '操作类型', '操作方式', '操作内容', '专家', '操作人', '操作日期', '备注信息'],
        protos: ['serial', 'name', 'way', 'content', 'expert_name', 'operate_name', 'date', 'memo'],
        url: 'breed/4',
        tabList: [{
            url: '4/rfid',
            tab: '养殖批次信息',
            searchPlaceholder: '请输入批次号进行搜索',
            leftOperateList: [],
            rightOperateComponent: [{component: output}, {component: newbuildBtn}],
            headList: ['所属养殖区', '养殖批次号', '畜禽名称', '养殖日期'],
            protos: ['area', 'serial', 'name', 'date'],
            widths: [50, 50, 50],
            newComponent: [{label: '', type: '', component: '', rule: ''}],
            tableOperateList: [{operateName: '编辑'}, {operateName: '删除'}],
            bottomOperateList: [{operateName: '删除'}, {operateName: '导出表格'}]
        }]
    },
    // 无害化批次
    innocuityBatch: {
        key: 'innocuityBatch',
        tab: '无害化批次管理',
        theads: ['无害化批次号', '操作日期', '操作内容', '实行原因', '指导专家', '备注信息'],
        protos: ['serial', 'date', 'content', 'why', 'expert_name', 'memo'],
        url: 'breed',
        tabList: [{
            url: 'rfid',
            tab: '养殖批次信息',
            searchPlaceholder: '请输入批次号进行搜索',
            leftOperateList: [],
            rightOperateComponent: [{component: output}, {component: newbuildBtn}],
            headList: ['所属养殖区', '养殖批次号', '畜禽名称', '养殖日期'],
            protos: ['area', 'serial', 'name', 'date'],
            widths: [50, 50, 50],
            newComponent: [{label: '', type: '', component: '', rule: ''}],
            tableOperateList: [{operateName: '编辑'}, {operateName: '删除'}],
            bottomOperateList: [{operateName: '删除'}, {operateName: '导出表格'}]
        }]
    },
    // 出栏批次
    slaughterBatch: {
        key: 'slaughterBatch',
        tab: '畜禽出栏管理',
        theads: ['出栏批次号', '出栏日期', '出栏数量', '操作人员', '状态', '备注'],
        protos: ['serial', 'date', 'amount', 'operate_name', 'state', 'memo'],
        // url: 'breed/4'
        tabList: [{
            // url:'4/rfid'
            tab: '畜禽RFID',
            searchPlaceholder: '请输入rfid进行搜索',
            leftOperateList: [],
            rightOperateComponent: [{component: output}, {component: addRfidBtn}],
            headList: ['RFID', '畜禽名称', '养殖日期', '备注信息'],
            protos: ['ear', 'name', 'date', 'memo'],
            widths: [50, 50, 50],
            newComponent: [{label: '', type: '', component: '', rule: ''}],
            tableOperateList: [{operateName: '编辑'}, {operateName: '删除'}],
            bottomOperateList: [{operateName: '批量取消出栏'}, {operateName: '导出表格'}]
        }]
    },
    // 养殖计划批次
    planBatch: {
        key: 'planBatch',
        tab: '养殖计划管理',
        theads: ['养殖批次号', '所属养殖场', '养殖人', '养殖日期', '所属养殖区', '养殖地址', '养殖畜禽名称', '养殖面积', '养殖备注'],
        protos: [],
        url: 'breed/4',
        tabList: [{
            url: '4/rfid',
            tab: '畜禽RFID',
            searchPlaceholder: '请输入rfid进行搜索',
            leftOperateList: [],
            rightOperateComponent: [{component: importBtn}, {component: output}, {component: newbuildBtn}],
            headList: ['RFID', '畜禽名称', '养殖日期', '备注信息'],
            protos: ['ear', 'name', 'date', 'memo'],
            widths: [50, 50, 50],
            newComponent: [{label: '', type: '', component: '', rule: ''}],
            tableOperateList: [{operateName: '编辑'}, {operateName: '删除'}],
            bottomOperateList: [{operateName: '删除'}, {operateName: '导出表格'}]
        },
        {
            url: '',
            tab: '生长过程信息',
            searchPlaceholder: '请输入标题进行搜索',
            leftOperateList: [],
            rightOperateComponent: [{component: newbuildBtn}],
            headList: ['生长图片', '标题', '图片描述', '上传日期', '备注信息'],
            protos: ['img', 'name', 'miaoshu', 'date', 'memo'],
            widths: [50, 50, 50, 50, 50],
            newComponent: [{label: '', type: '', component: '', rule: ''}],
            tableOperateList: [{operateName: '编辑'}, {operateName: '删除'}],
            bottomOperateList: [{operateName: '删除'}]
        }]
    },
// 采收批次号
    cultivateBatch: {
        key: 'cultivateBatch',
        tab: '采收批次管理',
        theads: ['采收批次号', '种植批次号', '种植区名称', '采收日期', '采收数量', '种植日期', '果蔬名称', '采收人', '种植面积', '养殖备注'],
        protos: [],
        tabList: [{
            tab: '采收批次信息',
            searchPlaceholder: '请输入rfid进行搜索',
            leftOperateList: [{
                components: [
                    {
                        type: 'select',
                        components: selectSection,
                        options: [
                            {
                            }
                        ]
                    },
                    {
                        type: 'date',
                        component: datePick
                    }
                ]
            }],
            rightOperateComponent: [{component: output}, {component: newbuildBtn}],
            headList: ['检测方式', '检测日期', '检测机构', '检测项目名称', '检测人', '检测结果', '证书编号', '有效期', '备注信息'],
            protos: ['ear', 'name', 'date', 'memo'],
            widths: [50, 50, 50],
            newComponent: [{label: '', type: '', component: '', rule: ''}],
            tableOperateList: [{operateName: '编辑'}, {operateName: '删除'}],
            bottomOperateList: [{operateName: '删除'}, {operateName: '导出表格'}]
        }]
    },
// 生产计划批次信息
    plantProduct: {
        key: 'plantProduct',
        tab: '生产批次管理',
        theads: ['批次号', '计划日期', '操作类型', '安排人员', '计划内容', '操作日期', '备注'],
        protos: [],
        tabList: [{
            tab: '采收批次信息',
            searchPlaceholder: '请输入rfid进行搜索',
            leftOperateList: [{
                components: [
                    {
                        type: 'select',
                        components: selectSection,
                        options: [
                            {
                            }
                        ]
                    },
                    {
                        type: 'date',
                        component: datePick
                    }
                ]
            }],
            rightOperateComponent: [{component: output}, {component: newbuildBtn}],
            headList: ['检测方式', '检测日期', '检测机构', '检测项目名称', '检测人', '检测结果', '证书编号', '有效期', '备注信息'],
            protos: ['ear', 'name', 'date', 'memo'],
            widths: [50, 50, 50],
            newComponent: [{label: '', type: '', component: '', rule: ''}],
            tableOperateList: [{operateName: '编辑'}, {operateName: '删除'}],
            bottomOperateList: [{operateName: '删除'}, {operateName: '导出表格'}]
        }]
    },
// 销售入库详情
    saleInput: {
        key: 'plantProduct',
        tab: '销售入库批次管理',
        theads: ['入库批次号', '入库日期', '供货商', '商品名称', '数量', '入库人', '录入人', '备注信息'],
        protos: [],
        tabList: [{
            tab: '采收批次信息',
            searchPlaceholder: '请输入rfid进行搜索',
            leftOperateList: [{
                components: [
                    {
                        type: 'select',
                        components: selectSection,
                        options: [
                            {
                            }
                        ]
                    },
                    {
                        type: 'date',
                        component: datePick
                    }
                ]
            }],
            rightOperateComponent: [{component: output}, {component: newbuildBtn}],
            headList: ['检测方式', '检测日期', '检测机构', '检测项目名称', '检测人', '检测结果', '证书编号', '有效期', '备注信息'],
            protos: ['ear', 'name', 'date', 'memo'],
            widths: [50, 50, 50],
            newComponent: [{label: '', type: '', component: '', rule: ''}],
            tableOperateList: [{operateName: '编辑'}, {operateName: '删除'}],
            bottomOperateList: [{operateName: '删除'}, {operateName: '导出表格'}]
        }]
    },
// 销售订单详情
    saleOrder: {
        key: 'plantProduct',
        tab: '销售订单详情管理',
        theads: ['订单号', '订单日期', '物流批次号', '客户名称', '金额', '数量', '销售员', '录入人', '备注'],
        protos: [],
        tabList: [{
            tab: '采收批次信息',
            searchPlaceholder: '请输入rfid进行搜索',
            leftOperateList: [{
                components: [
                    {
                        type: 'select',
                        components: selectSection,
                        options: [
                            {
                            }
                        ]
                    },
                    {
                        type: 'date',
                        component: datePick
                    }
                ]
            }],
            rightOperateComponent: [{component: output}, {component: newbuildBtn}],
            headList: ['检测方式', '检测日期', '检测机构', '检测项目名称', '检测人', '检测结果', '证书编号', '有效期', '备注信息'],
            protos: ['ear', 'name', 'date', 'memo'],
            widths: [50, 50, 50],
            newComponent: [{label: '', type: '', component: '', rule: ''}],
            tableOperateList: [{operateName: '编辑'}, {operateName: '删除'}],
            bottomOperateList: [{operateName: '删除'}, {operateName: '导出表格'}]
        }]
    },
// 种植批次详情
    plantSerial: {
        key: 'plantProduct',
        tab: '种植批次管理',
        theads: ['所属种植区', '种植批次号', '果蔬名称', '种植日期', '种植面积', '种植人', '录入人', '备注'],
        protos: [],
        tabList: [{
            tab: '种植批次信息',
            searchPlaceholder: '请输入rfid进行搜索',
            leftOperateList: [{
                components: [
                    {
                        type: 'select',
                        components: selectSection,
                        options: [
                            {
                            }
                        ]
                    },
                    {
                        type: 'date',
                        component: datePick
                    }
                ]
            }],
            rightOperateComponent: [{component: output}, {component: newbuildBtn}],
            headList: ['检测方式', '检测日期', '检测机构', '检测项目名称', '检测人', '检测结果', '证书编号', '有效期', '备注信息'],
            protos: ['ear', 'name', 'date', 'memo'],
            widths: [50, 50, 50],
            newComponent: [{label: '', type: '', component: '', rule: ''}],
            tableOperateList: [{operateName: '编辑'}, {operateName: '删除'}],
            bottomOperateList: [{operateName: '删除'}, {operateName: '导出表格'}]
        }]
    }
}
