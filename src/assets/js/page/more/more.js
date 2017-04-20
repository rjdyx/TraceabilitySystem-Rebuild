import validate2 from '../../utils/validate2.js'

import importBtn from '../../components/public/import-btn.vue'
import newbuildBtn from '../../components/public/newbuild-btn.vue'
import output from '../../components/public/output.vue'
import selectSection from '../../components/public/select-section.vue'
import datePick from '../../components/public/datePick.vue'

import categoryBtn from '../../components/public/categoryBtn.vue'
import inputText from '../../components/public/inputText.vue'
import inputTextArea from '../../components/public/inputTextArea.vue'
import inputSelect from '../../components/public/inputSelect.vue'
import inputDate from '../../components/public/inputDate.vue'
import inputFile from '../../components/public/inputFile.vue'
import inputTextSelect from '../../components/public/inputTextSelect.vue'

export default [{
    // 种植批次
    plantSerial: [{
        settitle: '种植批次管理',
        key: 'cultivate',
        tab: '种植批次信息',
        url: 'cultivate',
        theads: ['所属种植区', '种植批次号', '果蔬名称', '种植日期', '种植面积', '种植人', '录入人', '备注'],
        protos: ['plantation_name', 'serial', 'plant_name', 'date', 'area', 'operate_name', 'user_name', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50],
        listComponent: [{
            components: [{
                type: 'select',
                component: selectSection,
                options: [{
                    value: '',
                    label: '产品品牌'
                },
                {
                    value: '康乐牌',
                    label: '康乐牌'
                }]
            },
            {
                type: 'select',
                component: selectSection,
                options: [{
                    value: '',
                    label: '产品品牌'
                },
                {
                    value: '康乐牌',
                    label: '康乐牌'
                }]
            },
            {
                type: 'select',
                component: selectSection,
                options: [{
                    value: '',
                    label: '产品品牌'
                },
                {
                    value: '康乐牌',
                    label: '康乐牌'
                }]
            },
            {
                type: 'date',
                component: datePick
            }]
        }],
        typeComponent: [
            {
                component: output
            },
            {
                component: newbuildBtn
            }],
        lotComponent: [{value: '批量农事'}, {value: '批量施肥'}, {value: '批量施药'}, {value: '批量检测'}],
        moreComponent: [{value: '状态'}, {value: '农事'}, {value: '施肥'}, {value: '施药'}, {value: '检测'}, {value: '采收'}, {value: '图片'}]
    }]
}]
