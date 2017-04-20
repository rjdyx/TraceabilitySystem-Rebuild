import importBtn from '../../components/public/import-btn.vue'
import newbuildBtn from '../../components/public/newbuild-btn.vue'
import output from '../../components/public/output.vue'
import selectSection from '../../components/public/select-section.vue'
import datePick from '../../components/public/datePick.vue'
import categoryBtn from '../../components/public/categoryBtn.vue'
export default {
// 养殖批次号
    breedBatch: {
        key: 'breedBatch',
        tab: '养殖批次管理',
        theads: ['养殖批次号', '所属养殖场', '养殖人', '养殖日期', '所属养殖区', '养殖地址', '养殖畜禽名称', '养殖面积', '养殖备注'],
        protos: [],
        tabList: [{
            tab: '畜禽RFID',
            searchPlaceholder: '请输入rfid进行搜索',
            leftOperateList: [],
            rightOperateComponent: [{component: output}, {component: newbuildBtn}],
            headList: ['RFID', '畜禽名称', '养殖日期', '备注信息'],
            protos: ['ear', 'name', 'date', 'memo'],
            widths: [50, 50, 50],
            newComponent: [{label: '', type: '', component: '', rule: ''}],
            tableOperateList: [{operateName: '编辑'}, {operateName: '删除'}],
            bottomOperateList: [{operateName: '删除'}, {operateName: '导出表格'}]
        },
        {
            tab: '生长过程信息',
            searchPlaceholder: '请输入标题进行搜索',
            leftOperateList: [],
            rightOperateComponent: [{component: newbuildBtn}],
            headList: ['图片', '标题', '图片描述', '上传日期', '备注信息'],
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
    }
}
