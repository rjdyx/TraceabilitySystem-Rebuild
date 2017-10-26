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

export let customPlant = {
    // 种植自定义详情
    customPlant: {
        key: 'customDetail',
        tab: '种植自定义详情管理',
        roleName: ['system/coustom', 0],
        theads: ['种植场名称', '种植场面积', '种植场负责人', '种植场地址', '种植区名称', '种植区面积', '种植区负责人', '种植区地址', '种植日期', '种植人', '采收日期', '采收人'],
        protos: ['name', 'area', 'operate', 'address', 'c_name', 'c_area', 'c_operate', 'c_address', 'bc_date', 'bc_operate', 'ch_date', 'ch_operate'],
        url: 'custom',
        tabList: [{
            key: 'custom-code',
            url: 'custom_code',
            tab: '溯源码信息',
            searchPlaceholder: '请输入溯源码进行搜索',
            headList: ['产品溯源码', '生产日期', '产地', '溯源次数', '备注信息'],
            protos: ['code', 'date', 'origin', 'time', 'memo'],
            hiddeEdit: false,
            widths: [50, 50, 50, 50, 50],
            moreComponent: [{
                value: '打印'
            }],
            typeComponent: [{
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
                tab: '种植自定义信息添加溯源码',
                selectUrl2: [['products', 'id', 'name', true]],
                selectInit2: [{value: '', label: '请选择一个产品'}],
                popNumber2: [0],
                type: 'assoc',
                assocNum: 1,
                components: [{
                    name: 'product_id',
                    assocNum: 1,
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '产品',
                    placeholder: '',
                    changeTable: true,
                    rule: {required: true, trigger: 'blur', type: 'number', message: '请选择产品'},
                    options: []
                },
                {
                    name: 'code',
                    type: 'table',
                    tableUrl: ['plant_code', true],
                    theads: ['溯源码', '生产日期'],
                    protos: ['code', 'date'],
                    valueId: 'code_ids',
                    errormsg: '请选择溯源码',
                    tableVal: []
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
        },
        {
            key: 'basicinfo-fertilize',
            url: 'basicinfo',
            whereArr: {type: 'fertilize'},
            tab: '施肥信息',
            hiddeEdit: true,
            searchPlaceholder: '请输入肥料名称进行搜索',
            headList: ['批次号', '操作日期', '操作人', '肥料名称', '使用量', '描述', '天气', '指导专家', '备注信息'],
            protos: ['serial', 'date', 'operate', 'name', 'amount', 'desc', 'weather', 'expert', 'memo'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
            typeComponent: [{
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
                tab: '新建施肥信息',
                hiddenValue: {type: 'fertilize'},
                components: [{
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '操作日期',
                    placeholder: '请选择操作日期',
                    rule: {required: true, trigger: 'blur', validator: validate2.reDate, aa: '666', message: '请选择日期'}
                },
                {
                    name: 'operate',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '操作人',
                    placeholder: '请输入操作人',
                    rule: [{required: true, trigger: 'blur', message: '请输入操作人'}]
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '肥料名称',
                    placeholder: '请输入肥料名称',
                    rule: [{required: true, trigger: 'blur', message: '请输入肥料名称'}]
                },
                {
                    name: 'desc',
                    type: 'textarea',
                    component: null,
                    isNull: false,
                    label: '施肥描述',
                    placeholder: '请输入施肥描述',
                    rule: {required: true, trigger: 'blur'}
                },
                {
                    name: 'expert',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '指导专家',
                    placeholder: '请输入指导专家',
                    rule: {required: false, trigger: 'blur'}
                },
                {
                    name: 'amount',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '使用量',
                    placeholder: '请输入使用量',
                    rule: {required: true, trigger: 'blur', message: '请输入使用量'}
                },
                {
                    name: 'weather',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '天气',
                    placeholder: '请输入所属部门',
                    rule: {required: true, trigger: 'blur'},
                    options: [{
                        label: '晴天',
                        value: '晴天'
                    },
                    {
                        label: '阴天',
                        value: '阴天'
                    },
                    {
                        label: '雨天',
                        value: '雨天'
                    }]
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '描述图片',
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
                tab: '编辑施肥信息',
                components: [{
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '操作日期',
                    placeholder: '请选择操作日期',
                    rule: {required: true, trigger: 'blur', validator: validate2.reDate, aa: '666', message: '请选择日期'}
                },
                {
                    name: 'operate',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '操作人',
                    placeholder: '请输入操作人',
                    rule: [{required: true, trigger: 'blur', message: '请输入操作人'}]
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '肥料名称',
                    placeholder: '请输入肥料名称',
                    rule: [{required: true, trigger: 'blur', message: '请输入肥料名称'}]
                },
                {
                    name: 'desc',
                    type: 'textarea',
                    component: null,
                    isNull: false,
                    label: '施肥描述',
                    placeholder: '请输入施肥描述',
                    rule: {required: true, trigger: 'blur'}
                },
                {
                    name: 'expert',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '指导专家',
                    placeholder: '请输入指导专家',
                    rule: {required: false, trigger: 'blur'}
                },
                {
                    name: 'amount',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '使用量',
                    placeholder: '请输入使用量',
                    rule: {required: true, trigger: 'blur', message: '请输入使用量'}
                },
                {
                    name: 'weather',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '天气',
                    placeholder: '请输入所属部门',
                    rule: {required: true, trigger: 'blur'},
                    options: [{
                        label: '晴天',
                        value: '晴天'
                    },
                    {
                        label: '阴天',
                        value: '阴天'
                    },
                    {
                        label: '雨天',
                        value: '雨天'
                    }]
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '描述图片',
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
            key: 'basicinfo-spray',
            url: 'basicinfo',
            whereArr: {type: 'spray'},
            tab: '病虫害信息',
            hiddeEdit: true,
            searchPlaceholder: '请输入农药名称进行搜索',
            headList: ['批次号', '操作日期', '操作人', '农药名称', '使用量', '操作内容', '天气', '指导专家', '备注信息'],
            protos: ['serial', 'date', 'operate', 'name', 'amount', 'weather', 'desc', 'expert', 'memo'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
            typeComponent: [{
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
                tab: '新建病虫害信息',
                hiddenValue: {type: 'spray'},
                components: [{
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '操作日期',
                    placeholder: '请选择操作日期',
                    rule: {required: true, trigger: 'blur', validator: validate2.reDate, aa: '666', message: '请选择日期'}
                },
                {
                    name: 'operate',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '操作人',
                    placeholder: '请输入操作人',
                    rule: [{required: true, trigger: 'blur', message: '请输入操作人'}]
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '农药名称',
                    placeholder: '请输入农药名称',
                    rule: [{required: true, trigger: 'blur', message: '请输入农药名称'}]
                },
                {
                    name: 'expert',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '指导专家',
                    placeholder: '请输入指导专家',
                    rule: {required: false, trigger: 'blur'}
                },
                {
                    name: 'amount',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '使用量',
                    placeholder: '请输入使用量',
                    rule: {required: true, trigger: 'blur', message: '请输入使用量'}
                },
                {
                    name: 'desc',
                    type: 'textarea',
                    component: null,
                    isNull: false,
                    label: '操作内容',
                    placeholder: '请输入操作内容',
                    rule: [{required: true, trigger: 'blur', message: '请输入操作内容'}]
                },
                {
                    name: 'weather',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '天气',
                    placeholder: '请输入所属部门',
                    rule: {required: true, trigger: 'blur'},
                    options: [{
                        label: '晴天',
                        value: '晴天'
                    },
                    {
                        label: '阴天',
                        value: '阴天'
                    },
                    {
                        label: '雨天',
                        value: '雨天'
                    }]
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '描述图片',
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
                tab: '编辑病虫害信息',
                components: [{
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '操作日期',
                    placeholder: '请选择操作日期',
                    rule: {required: true, trigger: 'blur', validator: validate2.reDate, aa: '666', message: '请选择日期'}
                },
                {
                    name: 'operate',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '操作人',
                    placeholder: '请输入操作人',
                    rule: [{required: true, trigger: 'blur', message: '请输入操作人'}]
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '农药名称',
                    placeholder: '请输入农药名称',
                    rule: [{required: true, trigger: 'blur', message: '请输入农药名称'}]
                },
                {
                    name: 'expert',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '指导专家',
                    placeholder: '请输入指导专家',
                    rule: {required: false, trigger: 'blur'}
                },
                {
                    name: 'amount',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '使用量',
                    placeholder: '请输入使用量',
                    rule: {required: true, trigger: 'blur', message: '请输入使用量'}
                },
                {
                    name: 'desc',
                    type: 'textarea',
                    component: null,
                    isNull: false,
                    label: '操作内容',
                    placeholder: '请输入操作内容',
                    rule: [{required: true, trigger: 'blur', message: '请输入操作内容'}]
                },
                {
                    name: 'weather',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '天气',
                    placeholder: '请输入所属部门',
                    rule: {required: true, trigger: 'blur'},
                    options: [{
                        label: '晴天',
                        value: '晴天'
                    },
                    {
                        label: '阴天',
                        value: '阴天'
                    },
                    {
                        label: '雨天',
                        value: '雨天'
                    }]
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '描述图片',
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
            key: 'basicinfo-farming',
            url: 'basicinfo',
            whereArr: {type: 'farming'},
            tab: '农事信息',
            hiddeEdit: true,
            searchPlaceholder: '请输入标题进行搜索',
            headList: ['批次号', '操作日期', '操作人', '标题', '操作内容', '操作方法', '天气', '指导专家', '备注信息'],
            protos: ['serial', 'date', 'operate', 'name', 'desc', 'amount', 'weather', 'expert', 'memo'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
            typeComponent: [{
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
                tab: '新建农事信息',
                hiddenValue: {type: 'farming'},
                components: [{
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '操作日期',
                    placeholder: '请选择操作日期',
                    rule: {required: true, trigger: 'blur', validator: validate2.reDate, aa: '666', message: '请选择日期'}
                },
                {
                    name: 'operate',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '操作人',
                    placeholder: '请输入操作人',
                    rule: [{required: true, trigger: 'blur', message: '请输入操作人'}]
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '标题',
                    placeholder: '请输入标题',
                    rule: [{required: true, trigger: 'blur', message: '请输入标题'}]
                },
                {
                    name: 'expert',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '指导专家',
                    placeholder: '请输入指导专家',
                    rule: {required: false, trigger: 'blur'}
                },
                {
                    name: 'amount',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '操作方法',
                    placeholder: '请输入操作方法',
                    rule: {required: true, trigger: 'blur', message: '请输入操作方法'}
                },
                {
                    name: 'desc',
                    type: 'textarea',
                    component: null,
                    isNull: true,
                    label: '操作内容',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'weather',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '天气',
                    placeholder: '请输入所属部门',
                    rule: {required: true, trigger: 'blur'},
                    options: [{
                        label: '晴天',
                        value: '晴天'
                    },
                    {
                        label: '阴天',
                        value: '阴天'
                    },
                    {
                        label: '雨天',
                        value: '雨天'
                    }]
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '描述图片',
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
                tab: '编辑农事信息',
                hiddenValue: {type: 'farming'},
                components: [{
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '操作日期',
                    placeholder: '请选择操作日期',
                    rule: {required: true, trigger: 'blur', validator: validate2.reDate, aa: '666', message: '请选择日期'}
                },
                {
                    name: 'operate',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '操作人',
                    placeholder: '请输入操作人',
                    rule: [{required: true, trigger: 'blur', message: '请输入操作人'}]
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '标题',
                    placeholder: '请输入标题',
                    rule: [{required: true, trigger: 'blur', message: '请输入标题'}]
                },
                {
                    name: 'expert',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '指导专家',
                    placeholder: '请输入指导专家',
                    rule: {required: false, trigger: 'blur'}
                },
                {
                    name: 'amount',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '操作方法',
                    placeholder: '请输入操作方法',
                    rule: {required: true, trigger: 'blur', message: '请输入操作方法'}
                },
                {
                    name: 'desc',
                    type: 'textarea',
                    component: null,
                    isNull: true,
                    label: '操作内容',
                    placeholder: '',
                    rule: null
                },
                {
                    name: 'weather',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '天气',
                    placeholder: '请输入所属部门',
                    rule: {required: true, trigger: 'blur'},
                    options: [{
                        label: '晴天',
                        value: '晴天'
                    },
                    {
                        label: '阴天',
                        value: '阴天'
                    },
                    {
                        label: '雨天',
                        value: '雨天'
                    }]
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '描述图片',
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
            key: 'basicinfo-detect_p',
            url: 'basicinfo',
            whereArr: {type: 'detect_p'},
            tab: '检验检测信息',
            hiddeEdit: true,
            searchPlaceholder: '请输入项目名称进行搜索',
            headList: ['批次号', '操作日期', '操作人', '检测项目名称', '检测类型', '检测部门', '检测结果', '天气', '检测内容', '指导专家', '备注信息'],
            protos: ['serial', 'date', 'operate', 'name', 'genre', 'name2', 'amount', 'weather', 'desc', 'expert', 'memo'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            typeComponent: [{
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
                tab: '新建检验检测信息',
                hiddenValue: {type: 'detect_p'},
                components: [{
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '操作日期',
                    placeholder: '请选择操作日期',
                    rule: {required: true, trigger: 'blur', validator: validate2.reDate, aa: '666', message: '请选择日期'}
                },
                {
                    name: 'operate',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '操作人',
                    placeholder: '请输入操作人',
                    rule: [{required: true, trigger: 'blur', message: '请输入操作人'}]
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '检测项目名称',
                    placeholder: '请输入检测项目名称',
                    rule: [{required: true, trigger: 'blur', message: '请输入检测项目名称'}]
                },
                {
                    name: 'name2',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '检测部门',
                    placeholder: '请输入检测部门',
                    rule: {required: false, trigger: 'blur'}
                },
                {
                    name: 'expert',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '指导专家',
                    placeholder: '请输入指导专家',
                    rule: {required: false, trigger: 'blur'}
                },
                {
                    name: 'amount',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '检验结果',
                    placeholder: '请输入检验结果',
                    rule: {required: true, trigger: 'blur', message: '请输入检验结果'},
                    options: [{
                        label: '合格',
                        value: '合格'
                    },
                    {
                        label: '不合格',
                        value: '不合格'
                    }]
                },
                {
                    name: 'genre',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '检测类型',
                    placeholder: '请选择检验类型',
                    rule: {required: true, trigger: 'blur', message: '请输入检验类型'},
                    options: [{
                        label: '土壤',
                        value: '土壤'
                    },
                    {
                        label: '水质',
                        value: '水质'
                    },
                    {
                        label: '大气',
                        value: '大气'
                    },
                    {
                        label: '农药残留',
                        value: '农药残留'
                    }]
                },
                {
                    name: 'weather',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '天气',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur'},
                    options: [{
                        label: '晴天',
                        value: '晴天'
                    },
                    {
                        label: '阴天',
                        value: '阴天'
                    },
                    {
                        label: '雨天',
                        value: '雨天'
                    }]
                },
                {
                    name: 'desc',
                    type: 'textarea',
                    component: null,
                    isNull: false,
                    label: '检测内容',
                    placeholder: '请输入检测内容',
                    rule: {required: true, trigger: 'blur'}
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '描述图片',
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
                components: [{
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '操作日期',
                    placeholder: '请选择操作日期',
                    rule: {required: true, trigger: 'blur', validator: validate2.reDate, aa: '666', message: '请选择日期'}
                },
                {
                    name: 'operate',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '操作人',
                    placeholder: '请输入操作人',
                    rule: [{required: true, trigger: 'blur', message: '请输入操作人'}]
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '检测项目名称',
                    placeholder: '请输入检测项目名称',
                    rule: [{required: true, trigger: 'blur', message: '请输入检测项目名称'}]
                },
                {
                    name: 'name2',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '检测部门',
                    placeholder: '请输入检测部门',
                    rule: {required: false, trigger: 'blur'}
                },
                {
                    name: 'expert',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '指导专家',
                    placeholder: '请输入指导专家',
                    rule: {required: false, trigger: 'blur'}
                },
                {
                    name: 'genre',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '检测类型',
                    placeholder: '请选择检验类型',
                    rule: {required: true, trigger: 'blur', message: '请输入检验类型'},
                    options: [{
                        label: '土壤',
                        value: '土壤'
                    },
                    {
                        label: '水质',
                        value: '水质'
                    },
                    {
                        label: '大气',
                        value: '大气'
                    },
                    {
                        label: '农药残留',
                        value: '农药残留'
                    }]
                },
                {
                    name: 'amount',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '检验结果',
                    placeholder: '请输入检验结果',
                    rule: {required: true, trigger: 'blur', message: '请输入检验结果'},
                    options: [{
                        label: '合格',
                        value: '合格'
                    },
                    {
                        label: '不合格',
                        value: '不合格'
                    }]
                },
                {
                    name: 'weather',
                    type: 'select',
                    component: null,
                    isNull: false,
                    label: '天气',
                    placeholder: '',
                    rule: {required: true, trigger: 'blur'},
                    options: [{
                        label: '晴天',
                        value: '晴天'
                    },
                    {
                        label: '阴天',
                        value: '阴天'
                    },
                    {
                        label: '雨天',
                        value: '雨天'
                    }]
                },
                {
                    name: 'desc',
                    type: 'textarea',
                    component: null,
                    isNull: false,
                    label: '检测内容',
                    placeholder: '请输入检测内容',
                    rule: {required: true, trigger: 'blur'}
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '描述图片',
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
            key: 'basicinfo-course',
            url: 'basicinfo',
            whereArr: {type: 'course'},
            tab: '生长过程信息',
            hiddeEdit: true,
            searchPlaceholder: '请输入标题进行搜索',
            headList: ['操作日期', '操作人', '标题', '描述', '备注信息'],
            protos: ['date', 'operate', 'name', 'desc', 'memo'],
            widths: [50, 50, 50, 50, 50],
            typeComponent: [{
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
                tab: '新建生长过程信息',
                hiddenValue: {type: 'course'},
                components: [{
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '操作日期',
                    placeholder: '请选择操作日期',
                    rule: {required: true, trigger: 'blur', validator: validate2.reDate, aa: '666', message: '请选择日期'}
                },
                {
                    name: 'operate',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '操作人',
                    placeholder: '请输入操作人',
                    rule: [{required: true, trigger: 'blur', message: '请输入操作人'}]
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '标题',
                    placeholder: '请输入标题',
                    rule: [{required: true, trigger: 'blur', message: '请输入标题'}]
                },
                {
                    name: 'desc',
                    type: 'textarea',
                    component: null,
                    isNull: false,
                    label: '描述',
                    placeholder: '请输入描述',
                    rule: {required: true, trigger: 'blur'}
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '描述图片',
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
                tab: '编辑生长过程信息',
                components: [{
                    name: 'date',
                    type: 'date',
                    component: inputDate,
                    isNull: false,
                    label: '操作日期',
                    placeholder: '请选择操作日期',
                    rule: {required: true, trigger: 'blur', validator: validate2.reDate, aa: '666', message: '请选择日期'}
                },
                {
                    name: 'operate',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '操作人',
                    placeholder: '请输入操作人',
                    rule: [{required: true, trigger: 'blur', message: '请输入操作人'}]
                },
                {
                    name: 'name',
                    type: 'text',
                    component: null,
                    isNull: false,
                    label: '标题',
                    placeholder: '请输入标题',
                    rule: [{required: true, trigger: 'blur', message: '请输入标题'}]
                },
                {
                    name: 'desc',
                    type: 'textarea',
                    component: null,
                    isNull: false,
                    label: '描述',
                    placeholder: '请输入描述',
                    rule: {required: true, trigger: 'blur'}
                },
                {
                    name: 'img',
                    type: 'file',
                    component: inputFile,
                    isNull: true,
                    label: '描述图片',
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
}
