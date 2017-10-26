import newbuildBtn from 'components/public/newbuild-btn.vue'
import output from 'components/public/output.vue'
import selectSection from 'components/public/select-section.vue'
import datePick from 'components/public/datePick.vue'
import inputDate from 'components/public/inputDate.vue'
import inputFile from 'components/public/inputFile.vue'

import validate2 from 'utils/validate2.js'

export let detectionManage = {
    // 畜禽检疫管理
    detectionManage: [{
        settitle: '检疫管理',
        key: 'detection',
        roleName: ['beast/detection', 0],
        tab: '检疫信息',
        url: 'detection',
        // 链接批次信息模块数据的桥（养殖批次详情）
        batch: 'detectionBatch',
        searchPlaceholder: '请输入检疫批次号进行',
        changeDataArr: [{result: {0: '不合格', 1: '合格'}}],
        selectSearch: ['detection.organization'],
        theads: ['检疫批次号', '检疫日期', '检疫项目名称', '检疫内容', '检疫结果', '专家', '操作人员', '审批人', '检疫报告图片', '备注'],
        protos: ['serial', 'date', 'name', 'content', 'result', 'expert_name', 'operate_name', 'check', 'img', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        newComponent: [{
            tab: '新建检疫信息',
            selectUrl2: [['experts', 'id', 'name', true], ['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '请选择指导专家'}, {value: '', label: '请选择操作人员'}],
            popNumber2: [3, 4],
            selectWhereArr2: [[{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}], [{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
            hasImg: true,
            components: [{
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '检疫日期',
                placeholder: '',
                rule: [{required: true, message: '请输入检疫日期'}, {validator: validate2.reDate, message: '请输入检疫日期'}]
            },
            {
                name: 'organization',
                type: 'text',
                component: null,
                isNull: false,
                label: '检疫机构',
                placeholder: '',
                rule: {required: true, trigger: 'blur', message: '请输入检疫机构'}
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '检疫项目名称',
                placeholder: '',
                rule: {required: true, trigger: 'blur', message: '请输入检疫项目名称'}
            },
            {
                name: 'expert_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '指导专家',
                placeholder: '无',
                rule: null,
                options: []
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '操作人员',
                placeholder: '无',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择操作人员'},
                options: []
            },
            {
                name: 'content',
                type: 'text',
                component: null,
                isNull: true,
                label: '检疫内容',
                placeholder: '',
                rule: ''
            },
            {
                name: 'result',
                type: 'select',
                component: null,
                isNull: true,
                label: '检疫结果',
                placeholder: '',
                rule: {required: false, type: 'number'},
                options: [
                    {
                        value: 1,
                        label: '合格'
                    },
                    {
                        value: 0,
                        label: '不合格'
                    }
                ]
            },
            {
                name: 'check',
                type: 'text',
                component: null,
                isNull: true,
                label: '审批人',
                placeholder: '',
                rule: null
            },
            {
                name: 'img',
                type: 'file',
                component: inputFile,
                isNull: true,
                label: '检疫报告图片',
                placeholder: '',
                rule: null
            },
            {
                name: 'memo',
                type: 'textarea',
                component: null,
                isNull: true,
                label: '备注信息',
                placeholder: '',
                rule: null
            }
            ]
        }],
        editComponent: [{
            tab: '编辑检疫信息',
            selectUrl2: [['experts', 'id', 'name', true], ['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '请选择指导专家'}, {value: '', label: '请选择操作人员'}],
            popNumber2: [4, 5],
            selectWhereArr2: [[{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}], [{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
            hasImg: true,
            components: [{
                name: 'serial',
                type: 'text',
                component: null,
                isNull: false,
                label: '检疫批次号',
                placeholder: '',
                disabled: true,
                rule: {required: false, trigger: 'blur'}
            },
            {
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '检疫日期',
                placeholder: '',
                rule: [{required: true, message: '请输入检疫日期'}, {validator: validate2.reDate, message: '请输入检疫日期'}]
            },
            {
                name: 'organization',
                type: 'text',
                component: null,
                isNull: false,
                label: '检疫机构',
                placeholder: '',
                rule: {required: true, trigger: 'blur', message: '请输入检疫机构'}
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '检疫项目名称',
                placeholder: '',
                rule: {required: true, trigger: 'blur', message: '请输入检疫项目名称'}
            },
            {
                name: 'expert_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '指导专家',
                placeholder: '无',
                rule: {required: false},
                options: []
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: true,
                label: '操作人员',
                placeholder: '无',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择操作人员'},
                options: []
            },
            {
                name: 'content',
                type: 'text',
                component: null,
                isNull: true,
                label: '检疫内容',
                placeholder: '',
                rule: ''
            },
            {
                name: 'result',
                type: 'select',
                component: null,
                isNull: true,
                label: '检疫结果',
                placeholder: '',
                rule: {required: false},
                options: [
                    {
                        value: 1,
                        label: '合格'
                    },
                    {
                        value: 0,
                        label: '不合格'
                    }
                ]
            },
            {
                name: 'check',
                type: 'text',
                component: null,
                isNull: true,
                label: '审批人',
                placeholder: '',
                rule: null
            },
            {
                name: 'img',
                type: 'file',
                component: inputFile,
                isNull: true,
                label: '检疫报告图片',
                placeholder: '',
                rule: null
            },
            {
                name: 'memo',
                type: 'textarea',
                component: null,
                isNull: true,
                label: '备注信息',
                placeholder: '',
                rule: null
            }
            ]
        }],
        listComponent: [{
            components: [
                {
                    type: 'select',
                    value: '',
                    name: 'detections.result',
                    component: selectSection,
                    options: [{
                        value: '',
                        label: '请选择检疫结果'
                    },
                    {
                        value: 1,
                        label: '合格'
                    },
                    {
                        value: 0,
                        label: '不合格'
                    }]
                },
                {
                    type: 'date',
                    component: 'datePick'
                }
            ]
        }]
    }]
}
