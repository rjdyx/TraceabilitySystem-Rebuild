
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
            textPlaceholder: '请输入rfid进行搜索',
            leftOperateList: [],
            typeComponent: [{component: newbuildBtn}, {component: output}],
            hTheadsList: ['RFID', '畜禽名称', '养殖日期', '备注信息'],
            hrProtos: ['ear', 'name', 'date', 'memo'],
            widths: [50, 50, 50],
            newComponent: [{label: '', type: '', component: '', rule: ''}],
            rightOperateList: [{operateName: '编辑'}, {operateName: '删除'}],
            bottomOperateList: [{operateName: '删除'}, {operationName: '导出表格'}]
        },
        {
            tab: '生长过程信息',
            textPlaceholder: '请输入标题进行搜索',
            hLOperateList: [],
            typeComponent: [{component: newbuildBtn}, {component: output}],
            hTheadsList: ['RFID', '畜禽名称', '养殖日期', '备注信息'],
            hrProtos: ['ear', 'name', 'date', 'memo'],
            widths: [50, 50, 50],
            newComponent: [{label: '', type: '', component: '', rule: ''}],
            hROperateList: [{operateName: '编辑'}, {operateName: '删除'}],
            fOperateList: [{operateName: '删除'}, {operationName: '导出表格'}]
        }]
    }
}
