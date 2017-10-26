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

export let vegetableDetect = {
    // 果蔬-检验检测
    vegetableDetect: [{
        settitle: '检验检测管理',
        key: 'detect_pk_plant',
        roleName: ['packp/detect', 0],
        tab: '检验检测信息',
        url: 'detect_pk',
        batch: 'detectPackBatch',
        paramsIndex: 'plant',
        changeDataArr: [{result: {0: '不合格', 1: '合格'}}],
        searchPlaceholder: '请输入检测批次号搜索',
        theads: ['检测批次号', '检测名称', '检测内容', '检测日期', '检测结果', '检测机构', '负责人', '处理方法', '图片报告', '备注'],
        protos: ['serial', 'name', 'content', 'date', 'result', 'organization', 'operate_name', 'method', 'img', 'memo'],
        widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
        typeComponent: [{
            component: output
        },
        {
            component: newbuildBtn
        }],
        listComponent: [{
            components: [
                {
                    type: 'date',
                    component: datePick
                }
            ]
        }],
        newComponent: [{
            tab: '新建检验检测信息',
            hiddenValue: {type: 'plant'},
            selectUrl2: [['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '检测人选择'}],
            selectWhereArr2: [[{n: 'domain', v: 'packp'}, {n: 'domain', v: 'all', s: true}]],
            popNumber2: [1],
            hasImg: true,
            components: [{
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '检测日期',
                placeholder: '',
                disabled: true,
                rule: [{required: true, message: '请输入检测日期'}, {validator: validate2.reDate, message: '请输入检测日期'}]
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '负责人',
                placeholder: '请选择人物',
                rule: {required: true, trigger: 'blur', type: 'number', message: '请选择负责人'},
                options: []
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测名称',
                placeholder: '请填写检测项目名称',
                rule: {required: true, trigger: 'blur', message: '请输入检测项目名称'}
            },
            {
                name: 'result',
                type: 'select',
                component: null,
                isNull: false,
                label: '检测结果',
                placeholder: '请选择检测结果',
                rule: {required: true, trigger: 'blur'},
                options: [{
                    value: '1',
                    label: '合格'
                },
                {
                    value: '0',
                    label: '不合格'
                }]
            },
            {
                name: 'content',
                type: 'textarea',
                component: null,
                isNull: false,
                label: '检测内容',
                placeholder: '请填写检测内容',
                rule: null
            },
            {
                name: 'organization',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测机构',
                placeholder: '请填写检测机构名称',
                rule: null
            },
            {
                name: 'method',
                type: 'text',
                component: null,
                isNull: false,
                label: '处理方法',
                placeholder: '请填写检测处理方法',
                rule: null
            },
            {
                name: 'img',
                type: 'file',
                component: inputFile,
                isNull: true,
                label: '检测图片报告',
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
            }]
        }],
        editComponent: [{
            tab: '编辑检验检测信息',
            selectUrl2: [['operates', 'id', 'name', true]],
            selectInit2: [{value: '', label: '检测人选择'}],
            selectWhereArr2: [[{n: 'domain', v: 'packp'}, {n: 'domain', v: 'all', s: true}]],
            popNumber2: [2],
            hasImg: true,
            components: [{
                name: 'serial',
                type: 'text',
                component: null,
                isNull: false,
                label: '加工检测批次号',
                placeholder: '',
                disabled: true,
                rule: {required: true}
            },
            {
                name: 'date',
                type: 'date',
                component: inputDate,
                isNull: false,
                label: '检测日期',
                placeholder: '',
                disabled: true,
                rule: [{required: true, message: '请输入检测日期'}, {validator: validate2.reDate, message: '请输入检测日期'}]
            },
            {
                name: 'operate_id',
                type: 'select',
                component: null,
                isNull: false,
                label: '负责人',
                placeholder: '请选择人物',
                rule: {required: true, trigger: 'blur', type: 'number'},
                options: []
            },
            {
                name: 'name',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测名称',
                placeholder: '请填写检测项目名称',
                rule: {required: true, trigger: 'blur', message: '请输入检测项目名称'}
            },
            {
                name: 'result',
                type: 'select',
                component: null,
                isNull: false,
                label: '检测结果',
                placeholder: '请选择检测结果',
                rule: {required: true, trigger: 'blur'},
                options: [{
                    value: '1',
                    label: '合格'
                },
                {
                    value: '0',
                    label: '不合格'
                }]
            },
            {
                name: 'content',
                type: 'textarea',
                component: null,
                isNull: false,
                label: '检测内容',
                placeholder: '请填写检测内容',
                rule: null
            },
            {
                name: 'organization',
                type: 'text',
                component: null,
                isNull: false,
                label: '检测机构',
                placeholder: '请填写检测机构名称',
                rule: null
            },
            {
                name: 'method',
                type: 'text',
                component: null,
                isNull: false,
                label: '处理方法',
                placeholder: '请填写检测处理方法',
                rule: null
            },
            {
                name: 'img',
                type: 'file',
                component: inputFile,
                isNull: true,
                label: '检测图片报告',
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
            }]
        }]
    }]
}
