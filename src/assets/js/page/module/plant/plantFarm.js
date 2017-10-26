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

export let plantFarm = {
    // 农事管理
    plantFarm: [
        {
            settitle: '农事管理',
            key: 'fertilize',
            roleName: ['plant/farming', 0],
            tab: '施肥信息',
            url: 'fertilize',
            batch: 'fertilizeBatch',
            selectSearch: ['manures.id'],
            selectValueId: [['manure_id', 'manure_name', true]],
            selectDefault: [{value: '', label: '肥料选择'}],
            searchPlaceholder: '请输入施肥批次号进行搜索',
            theads: ['批次号', '施肥日期', '天气', '肥料', '施用量(Kg)', '施肥方法', '施肥人', '专家', '录入人', '备注'],
            protos: ['serial', 'date', 'weather', 'manure_name', 'amount_unit', 'way', 'operate_name', 'expert_name', 'user_name', 'memo'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            typeComponent: [{
                component: output
            },
            {
                component: newbuildBtn
            }],
            listComponent: [{
                components: [{
                    name: 'manures.id',
                    value: '',
                    type: 'select',
                    component: selectSection,
                    options: []
                },
                {
                    type: 'date',
                    component: datePick
                }]
            }],
            newComponent: [{
                tab: '新建施肥信息',
                selectUrl2: [['manures', 'id', 'name', true], ['operates', 'id', 'name', true], ['experts', 'id', 'name', true]],
                selectInit2: [{value: '', label: '肥料选择'}, {value: '', label: '施肥人选择'}, {value: '', label: '专家选择'}],
                popNumber2: [0, 4, 5],
                selectWhereArr2: [[], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}]],
                components: [{
                    name: 'manure_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '肥料名称',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur', message: '请选择肥料名称', type: 'number'},
                    options: []
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '施肥日期',
                    placeholder: '',
                    rule: [{required: true, message: '请输入施肥日期'}, {validator: validate2.reDate, message: '请输入施肥日期'}]
                },
                {
                    name: 'weather',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '天气',
                    placeholder: '',
                    rule: null,
                    options: [{
                        value: '晴',
                        label: '晴'
                    },
                    {
                        value: '雨',
                        label: '雨'
                    },
                    {
                        value: '雪',
                        label: '雪'
                    },
                    {
                        value: '阴',
                        label: '阴'
                    },
                    {
                        value: '其他',
                        label: '其他'
                    }]
                },
                {
                    name: 'amount',
                    type: 'textSelect',
                    component: inputTextSelect,
                    isNull: false,
                    label: '使用量',
                    placeholder: '请填写数字（必填）',
                    options: [{
                        value: 'kg/亩',
                        label: 'kg/亩'
                    },
                    {
                        value: 'kg/平方米',
                        label: 'kg/平方米'
                    },
                    {
                        value: 'kg/公顷',
                        label: 'kg/公顷'
                    }
                    ],
                    rule: [{required: true, message: '请输入平均施肥用量', trigger: 'blur'}, {validator: validate2.reNumber}]
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    component: null,
                    isNull: true,
                    label: '施肥人',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请输入施肥人'},
                    options: []
                },
                {
                    name: 'expert_id',
                    type: 'select',
                    component: null,
                    isNull: true,
                    label: '专家',
                    placeholder: '',
                    rule: null,
                    options: []
                },
                {
                    name: 'way',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '施肥方法',
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
                tab: '编辑施肥信息',
                selectUrl2: [['manures', 'id', 'name', true], ['operates', 'id', 'name', true], ['experts', 'id', 'name', true]],
                selectInit2: [{value: '', label: '肥料选择'}, {value: '', label: '施肥人选择'}, {value: '', label: '专家选择'}],
                popNumber2: [1, 5, 6],
                selectWhereArr2: [[], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}]],
                components: [{
                    name: 'serial',
                    type: 'text',
                    component: null,
                    isNull: false,
                    disabled: true,
                    label: '施肥批次号',
                    placeholder: '必填',
                    rule: {required: true}
                },
                {
                    name: 'manure_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '肥料名称',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur', message: '请选择肥料名称', type: 'number'},
                    options: []
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '施肥日期',
                    placeholder: '',
                    rule: [{required: true, message: '请输入施肥日期'}, {validator: validate2.reDate, message: '请输入施肥日期'}]
                },
                {
                    name: 'weather',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '天气',
                    placeholder: '',
                    rule: null,
                    options: [{
                        value: '晴',
                        label: '晴'
                    },
                    {
                        value: '雨',
                        label: '雨'
                    },
                    {
                        value: '雪',
                        label: '雪'
                    },
                    {
                        value: '阴',
                        label: '阴'
                    },
                    {
                        value: '其他',
                        label: '其他'
                    }]
                },
                {
                    name: 'amount',
                    type: 'textSelect',
                    component: inputTextSelect,
                    isNull: false,
                    label: '使用量',
                    placeholder: '请填写数字（必填）',
                    options: [{
                        value: 'kg/亩',
                        label: 'kg/亩'
                    },
                    {
                        value: 'kg/平方米',
                        label: 'kg/平方米'
                    },
                    {
                        value: 'kg/公顷',
                        label: 'kg/公顷'
                    }
                    ],
                    rule: [{required: true, message: '请输入平均施肥用量', trigger: 'blur'}, {validator: validate2.reNumber}]
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    component: null,
                    isNull: true,
                    label: '施肥人',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请输入施肥人'},
                    options: []
                },
                {
                    name: 'expert_id',
                    type: 'select',
                    component: null,
                    isNull: true,
                    label: '专家',
                    placeholder: '',
                    rule: null,
                    options: []
                },
                {
                    name: 'way',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '施肥方法',
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
        },
        {
            settitle: '农事管理',
            key: 'spray',
            tab: '病虫害信息',
            roleName: ['plant/farming', 0],
            url: 'spray',
            batch: 'sprayBatch',
            selectSearch: ['medicaments.id'],
            selectValueId: [['medicament_id', 'medicament_name', true]],
            selectDefault: [{value: '', label: '农药选择'}],
            searchPlaceholder: '请输入施药批次号进行搜索',
            theads: ['农药批次号', '农药', '喷洒日期', '天气', '使用量(L)', '施药浓度', '安全隔离期(天)', '施用方法', '施药人', '专家', '录入人', '备注'],
            protos: ['serial', 'medicament_name', 'date', 'weather', 'amount_unit', 'concentration', 'safety', 'way', 'operate_name', 'expert_name', 'user_name', 'memo'],
            widths: [60, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            typeComponent: [
                {
                    component: output
                },
                {
                    component: newbuildBtn
                }
            ],
            listComponent: [{
                components: [{
                    name: 'medicaments.id',
                    value: '',
                    type: 'select',
                    component: selectSection,
                    options: []
                },
                {
                    type: 'date',
                    component: datePick
                }
                ]
            }],
            newComponent: [{
                tab: '新建病虫害信息',
                selectUrl2: [['medicaments', 'id', 'name', true], ['operates', 'id', 'name', true], ['experts', 'id', 'name', true]],
                selectInit2: [{value: '', label: '农药选择'}, {value: '', label: '施药人选择'}, {value: '', label: '专家选择'}],
                popNumber2: [0, 6, 7],
                selectWhereArr2: [[], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}]],
                components: [{
                    name: 'medicament_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '农药名称',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur', message: '请选择农药名称', type: 'number'},
                    options: []
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '喷洒日期',
                    placeholder: '',
                    rule: [{required: true, message: '请输入喷洒日期'}, {validator: validate2.reDate, message: '请输入喷洒日期'}]
                },
                {
                    name: 'weather',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '天气',
                    placeholder: '',
                    rule: null,
                    options: [{
                        value: '晴',
                        label: '晴'
                    },
                    {
                        value: '雨',
                        label: '雨'
                    },
                    {
                        value: '雪',
                        label: '雪'
                    },
                    {
                        value: '阴',
                        label: '阴'
                    },
                    {
                        value: '其他',
                        label: '其他'
                    }]
                },
                {
                    name: 'amount',
                    type: 'textSelect',
                    component: inputTextSelect,
                    isNull: false,
                    label: '施用量',
                    placeholder: '请填写数字（必填）',
                    options: [{
                        value: 'ml/亩',
                        label: 'ml/亩'
                    },
                    {
                        value: 'ml/平方米',
                        label: 'ml/平方米'
                    },
                    {
                        value: 'ml/公顷',
                        label: 'ml/公顷'
                    }
                    ],
                    rule: [{required: true, message: '请输入平均施药用量', trigger: 'blur'}, {validator: validate2.reNumber}]
                },
                {
                    name: 'concentration',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '施药浓度',
                    placeholder: '',
                    rule: [{message: '请输入数字', trigger: 'blur'}, {validator: validate2.reNumber}]
                },
                {
                    name: 'safety',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '安全隔离期（天）',
                    placeholder: '',
                    rule: [{message: '请输入数字', trigger: 'blur'}, {validator: validate2.reNumber}]
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    component: null,
                    isNull: true,
                    label: '施药人',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请输入施药人'},
                    options: []
                },
                {
                    name: 'expert_id',
                    type: 'select',
                    component: null,
                    isNull: true,
                    label: '专家',
                    placeholder: '',
                    rule: null,
                    options: []
                },
                {
                    name: 'way',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '施药方法',
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
                tab: '编辑病虫害信息',
                selectUrl2: [['medicaments', 'id', 'name', true], ['operates', 'id', 'name', true], ['experts', 'id', 'name', true]],
                selectInit2: [{value: '', label: '农药选择'}, {value: '', label: '施药人选择'}, {value: '', label: '专家选择'}],
                popNumber2: [1, 7, 8],
                selectWhereArr2: [[], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}]],
                components: [{
                    name: 'serial',
                    type: 'text',
                    component: null,
                    disabled: true,
                    isNull: false,
                    label: '施药批次号',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur'}
                },
                {
                    name: 'medicament_id',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '农药名称',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur', message: '请选择农药名称', type: 'number'},
                    options: []
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '喷洒日期',
                    placeholder: '',
                    rule: [{required: true, message: '请输入喷洒日期'}, {validator: validate2.reDate, message: '请输入喷洒日期'}]
                },
                {
                    name: 'weather',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '天气',
                    placeholder: '',
                    rule: null,
                    options: [{
                        value: '晴',
                        label: '晴'
                    },
                    {
                        value: '雨',
                        label: '雨'
                    },
                    {
                        value: '雪',
                        label: '雪'
                    },
                    {
                        value: '阴',
                        label: '阴'
                    },
                    {
                        value: '其他',
                        label: '其他'
                    }]
                },
                {
                    name: 'amount',
                    type: 'textSelect',
                    component: inputTextSelect,
                    isNull: false,
                    label: '施用量',
                    placeholder: '请填写数字（必填）',
                    options: [{
                        value: 'ml/亩',
                        label: 'ml/亩'
                    },
                    {
                        value: 'ml/平方米',
                        label: 'ml/平方米'
                    },
                    {
                        value: 'ml/公顷',
                        label: 'ml/公顷'
                    }
                    ],
                    rule: [{required: true, message: '请输入平均施药用量', trigger: 'blur'}, {validator: validate2.reNumber}]
                },
                {
                    name: 'concentration',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '施药浓度',
                    placeholder: '',
                    rule: [{message: '请输入数字', trigger: 'blur'}, {validator: validate2.reNumber}]
                },
                {
                    name: 'safety',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '安全隔离期（天）',
                    placeholder: '',
                    rule: [{message: '请输入数字', trigger: 'blur'}, {validator: validate2.reNumber}]
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    component: null,
                    isNull: true,
                    label: '施药人',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请输入施药人'},
                    options: []
                },
                {
                    name: 'expert_id',
                    type: 'select',
                    component: null,
                    isNull: true,
                    label: '专家',
                    placeholder: '',
                    rule: null,
                    options: []
                },
                {
                    name: 'way',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '施药方法',
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
            }]
        },
        {
            settitle: '农事管理',
            key: 'plant-detect',
            tab: '种植检测信息',
            roleName: ['plant/farming', 0],
            url: 'detect',
            batch: 'plantDetectBatch',
            paramsIndex: 'plant',
            selectSearch: ['detects.name'],
            changeDataArr: [{result: {'0': '合格', '1': '不合格'}}],
            searchPlaceholder: '请输入检测批次号进行搜索',
            theads: ['检测批次号', '检验类型', '检验日期', '天气', '检测部门', '检测内容', '检查结果', '检测人', '专家', '录入人', '图片', '备注'],
            protos: ['serial', 'name', 'date', 'weather', 'department', 'content', 'result', 'operate_name', 'expert_name', 'user_name', 'img', 'memo'],
            widths: [60, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            typeComponent: [{
                component: output
            },
            {
                component: newbuildBtn
            }],
            listComponent: [{
                components: [{
                    value: '',
                    name: 'detects.name',
                    type: 'select',
                    component: selectSection,
                    options: [{
                        value: '',
                        label: '检测类型'
                    },
                    {
                        value: '土壤检测',
                        label: '土壤检测'
                    },
                    {
                        value: '水质检测',
                        label: '水质检测'
                    },
                    {
                        value: '大气污染检测',
                        label: '大气污染检测'
                    },
                    {
                        value: '农药残留检测',
                        label: '农药残留检测'
                    },
                    {
                        value: '其他检测',
                        label: '其他检测'
                    }]
                },
                {
                    type: 'date',
                    component: datePick
                }]
            }],
            newComponent: [{
                tab: '新建种植检测信息',
                selectUrl2: [['operates', 'id', 'name', true], ['experts', 'id', 'name', true]],
                selectInit2: [{value: '', label: '检测人选择'}, {value: '', label: '专家选择'}],
                popNumber2: [6, 7],
                selectWhereArr2: [[{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}]],
                hiddenValue: {type: 'plant'},
                components: [{
                    name: 'name',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '检测类型',
                    placeholder: '',
                    rule: null,
                    options: [{
                        value: '土壤检测',
                        label: '土壤检测'
                    },
                    {
                        value: '水质检测',
                        label: '水质检测'
                    },
                    {
                        value: '大气污染检测',
                        label: '大气污染检测'
                    },
                    {
                        value: '农药残留检测',
                        label: '农药残留检测'
                    },
                    {
                        value: '其他检测',
                        label: '其他检测'
                    }]
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '检测日期',
                    placeholder: '',
                    rule: [{required: true, message: '请输入检测日期'}, {validator: validate2.reDate, message: '请输入检测日期'}]
                },
                {
                    name: 'weather',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '天气',
                    placeholder: '',
                    rule: null,
                    options: [{
                        value: '晴',
                        label: '晴'
                    },
                    {
                        value: '雨',
                        label: '雨'
                    },
                    {
                        value: '雪',
                        label: '雪'
                    },
                    {
                        value: '阴',
                        label: '阴'
                    },
                    {
                        value: '其他',
                        label: '其他'
                    }]
                },
                {
                    name: 'department',
                    type: 'text',
                    component: inputTextSelect,
                    isNull: false,
                    label: '检测部门',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'content',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '检测内容',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'result',
                    type: 'select',
                    component: null,
                    isNull: true,
                    label: '检测结果',
                    placeholder: '',
                    rule: null,
                    options: [{
                        value: '合格',
                        label: '合格'
                    },
                    {
                        value: '不合格',
                        label: '不合格'
                    }]
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    component: null,
                    isNull: true,
                    label: '检测人',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请输入检测人'},
                    options: []
                },
                {
                    name: 'expert_id',
                    type: 'select',
                    component: null,
                    isNull: true,
                    label: '专家',
                    placeholder: '',
                    rule: null,
                    options: []
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '检测图片',
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
                tab: '编辑种植检测信息',
                selectUrl2: [['operates', 'id', 'name', true], ['experts', 'id', 'name', true]],
                selectInit2: [{value: '', label: '检测人选择'}, {value: '', label: '专家选择'}],
                popNumber2: [7, 8],
                selectWhereArr2: [[{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}]],
                hiddenValue: {type: 'plant'},
                components: [{
                    name: 'serial',
                    type: 'text',
                    component: null,
                    isNull: true,
                    disabled: true,
                    label: '检测批次号',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur'}
                },
                {
                    name: 'name',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '检测类型',
                    placeholder: '',
                    rule: null,
                    options: [{
                        value: '土壤检测',
                        label: '土壤检测'
                    },
                    {
                        value: '水质检测',
                        label: '水质检测'
                    },
                    {
                        value: '大气污染检测',
                        label: '大气污染检测'
                    },
                    {
                        value: '农药残留检测',
                        label: '农药残留检测'
                    },
                    {
                        value: '其他检测',
                        label: '其他检测'
                    }]
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '检测日期',
                    placeholder: '',
                    rule: [{required: true, message: '请输入检测日期'}, {validator: validate2.reDate, message: '请输入检测日期'}]
                },
                {
                    name: 'weather',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '天气',
                    placeholder: '',
                    rule: null,
                    options: [{
                        value: '晴',
                        label: '晴'
                    },
                    {
                        value: '雨',
                        label: '雨'
                    },
                    {
                        value: '雪',
                        label: '雪'
                    },
                    {
                        value: '阴',
                        label: '阴'
                    },
                    {
                        value: '其他',
                        label: '其他'
                    }]
                },
                {
                    name: 'department',
                    type: 'text',
                    component: inputTextSelect,
                    isNull: false,
                    label: '检测部门',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'content',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '检测内容',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'result',
                    type: 'select',
                    component: null,
                    isNull: true,
                    label: '检测结果',
                    placeholder: '',
                    rule: null,
                    options: [{
                        value: '合格',
                        label: '合格'
                    },
                    {
                        value: '不合格',
                        label: '不合格'
                    }]
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    component: null,
                    isNull: true,
                    label: '检测人',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请输入检测人'},
                    options: []
                },
                {
                    name: 'expert_id',
                    type: 'select',
                    component: null,
                    isNull: true,
                    label: '专家',
                    placeholder: '',
                    rule: null,
                    options: []
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '检测图片',
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
            }]
        },
        {
            settitle: '农事管理',
            key: 'farming',
            roleName: ['plant/farming', 0],
            tab: '田间信息',
            url: 'farming',
            batch: 'farmingBatch',
            searchPlaceholder: '请输入田间批次号进行搜索',
            theads: ['田间批次号', '操作日期', '天气', '操作内容', '操作方法', '操作人', '专家', '录入人', '备注'],
            protos: ['serial', 'date', 'weather', 'content', 'method', 'operate_name', 'expert_name', 'user_name', 'memo'],
            widths: [70, 50, 50, 50, 50, 50, 50, 50, 50],
            typeComponent: [
                {
                    component: output
                },
                {
                    component: newbuildBtn
                }],
            listComponent: [{
                components: [{
                    type: 'date',
                    component: datePick
                }]
            }],
            newComponent: [{
                tab: '新建田间信息',
                selectUrl2: [['operates', 'id', 'name', true], ['experts', 'id', 'name', true]],
                selectInit2: [{value: '', label: '操作人选择'}, {value: '', label: '专家选择'}],
                popNumber2: [4, 5],
                selectWhereArr2: [[{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}]],
                components: [{
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '操作日期',
                    placeholder: '',
                    rule: [{required: true, message: '请输入操作日期'}, {validator: validate2.reDate, message: '请输入操作日期'}]
                },
                {
                    name: 'weather',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '天气',
                    placeholder: '',
                    rule: null,
                    options: [{
                        value: '晴',
                        label: '晴'
                    },
                    {
                        value: '雨',
                        label: '雨'
                    },
                    {
                        value: '雪',
                        label: '雪'
                    },
                    {
                        value: '阴',
                        label: '阴'
                    },
                    {
                        value: '其他',
                        label: '其他'
                    }]
                },
                {
                    name: 'content',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '操作内容',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur', message: '请输入操作内容'}
                },
                {
                    name: 'method',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '操作方法',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    component: null,
                    isNull: true,
                    label: '操作人',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请输入操作人'},
                    options: []
                },
                {
                    name: 'expert_id',
                    type: 'select',
                    component: null,
                    isNull: true,
                    label: '专家',
                    placeholder: '',
                    rule: null,
                    options: []
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
                tab: '编辑田间信息',
                selectUrl2: [['operates', 'id', 'name', true], ['experts', 'id', 'name', true]],
                selectInit2: [{value: '', label: '操作人选择'}, {value: '', label: '专家选择'}],
                popNumber2: [5, 6],
                selectWhereArr2: [[{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}]],
                components: [{
                    name: 'serial',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '田间批次号',
                    disabled: true,
                    placeholder: '',
                    rule: {required: true, trigger: 'blur'}
                },
                {
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '操作日期',
                    placeholder: '',
                    rule: [{required: true, message: '请输入操作日期'}, {validator: validate2.reDate, message: '请输入操作日期'}]
                },
                {
                    name: 'weather',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '天气',
                    placeholder: '',
                    rule: null,
                    options: [{
                        value: '晴',
                        label: '晴'
                    },
                    {
                        value: '雨',
                        label: '雨'
                    },
                    {
                        value: '雪',
                        label: '雪'
                    },
                    {
                        value: '阴',
                        label: '阴'
                    },
                    {
                        value: '其他',
                        label: '其他'
                    }]
                },
                {
                    name: 'content',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '操作内容',
                    placeholder: '必填',
                    rule: {required: true, trigger: 'blur', message: '请输入操作内容'}
                },
                {
                    name: 'method',
                    type: 'text',
                    component: null,
                    isNull: true,
                    label: '操作方法',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    component: null,
                    isNull: true,
                    label: '操作人',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请输入操作人'},
                    options: []
                },
                {
                    name: 'expert_id',
                    type: 'select',
                    component: null,
                    isNull: true,
                    label: '专家',
                    placeholder: '',
                    rule: null,
                    options: []
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
            }]
        }
    ]
}
