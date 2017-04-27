import inputDate from '../../components/public/inputDate.vue'
import inputFile from '../../components/public/inputFile.vue'
import inputTextSelect from '../../components/public/inputTextSelect.vue'
import validate2 from '../../utils/validate2.js'

export default {
    rfid: [{
        tab: '新建RFID信息',
        components: [{
            name: 'rfid',
            type: 'text',
            component: null,
            isNull: false,
            label: 'Rfid',
            placeholder: '必填',
            rule: [{required: true, trigger: 'blur'}]
        },
        {
            name: 'memo',
            type: 'textarea',
            component: null,
            isNull: true,
            label: '备注信息',
            placeholder: '',
            rule: null
        }]
    }],
    course: [{
        tab: '新建生长过程信息',
        components: [{
            name: 'name',
            type: 'text',
            component: null,
            isNull: false,
            label: '图片标题',
            placeholder: '必填',
            rule: [{required: true, trigger: 'blur'}]
        },
        {
            name: 'memo',
            type: 'textarea',
            component: null,
            isNull: true,
            label: '备注信息',
            placeholder: '',
            rule: null
        }]
    }]
}
