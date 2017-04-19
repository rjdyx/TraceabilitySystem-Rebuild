import validate2 from '../../utils/validate2.js'
export default [{
    newComponent: [{
        tab: '新建分类档案信息',
        components: [{
            name: 'name',
            type: 'text',
            component: null,
            isNull: false,
            label: '分类名称',
            placeholder: '必填',
            rule: [{required: true, message: '请输入分类名称', trigger: 'blur'}, {validator: validate2.reCheck}]
        },
        {
            name: 'type',
            type: 'select',
            component: null,
            isNull: false,
            label: '模块类型',
            placeholder: '',
            rule: {required: true, message: '请输入模块类型', trigger: 'blur'},
            options: [{
                value: 'operate', label: '操作人员'
            },
            {
                value: 'expert', label: '专家'
            },
            {
                value: 'product', label: '产品'
            },
            {
                value: 'supplier', label: '供货商'
            },
            {
                value: 'client', label: '客户'
            },
            {
                value: 'fodder', label: '饲料'
            },
            {
                value: 'beast', label: '畜禽'
            },
            {
                value: 'drug', label: '兽药'
            },
            {
                value: 'plant', label: '果蔬'
            },
            {
                value: 'manure', label: '肥料'
            },
            {
                value: 'medicament', label: '农药'
            }]
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
}]
