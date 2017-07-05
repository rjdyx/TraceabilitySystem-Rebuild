// 中间列表的数据

import importBtn from '../../../components/public/import-btn.vue'
import newbuildBtn from '../../../components/public/newbuild-btn.vue'
import output from '../../../components/public/output.vue'
import selectSection from '../../../components/public/select-section.vue'
import datePick from '../../../components/public/datePick.vue'
import inputDate from '../../../components/public/inputDate.vue'
import inputFile from '../../../components/public/inputFile.vue'
import inputTextSelect from '../../../components/public/inputTextSelect.vue'
import Qrcode from '../../../components/public/Qrcode.vue'

import validate2 from '../../../utils/validate2.js'

export default {
    // 1、养殖管理-饲料使用
    feedUse: [{
        key: 'fodderuse',
        timeshow: true,
        tab: '状态',
        batch: 'breedBatch',
        rightMenu: true,
        roleName: ['basic/category', 0], // 接口权限参数 参数1为权限name 参数2为是否区分运营者 （默认0）
        url: 'fodderuse',
        searchPlaceholder: '请输入饲料名称进行搜索',
        theads: ['饲料名称', '喂养日期', '喂养人'],
        protos: ['fodder_name', 'date', 'operate_name'],
        widths: [26, 26, 26],
        newComponent: [{
            plan: true,
            planString: '请选择饲养计划',
            planArr: {'fodder_name': '饲料名称', 'addition_name': '饲料添加剂', 'operate_name': '饲养人', 'amount': '饲养量', 'unit': '单位'},
            planBox: {'fodder_id': 'fodder_name', 'addition_id': 'addition_name', 'operate_id': 'operate_name', 'unit': 'unit'},
            planIds: 'breed_ids',
            planPosition: [0, 1, 2, 3, 4, 5],
            tab: '新建饲料使用信息',
            checkBoxUrl: [['breeds', 'id', 'serial', 'check'], ['fodders', 'id', 'name', 'radio'], ['additions', 'id', 'name', 'radio'], ['operates', 'id', 'name', 'radio']],
            checkBoxPosition: [0, 1, 2, 3],
            selectValue: [[], [], [], [{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
            components: [{
                name: 'breed_ids',
                type: 'pcSelect',
                label: '养殖批次号',
                placeholder: '批次号',
                rule: {required: true}, // 这里如果需要验证类型写方法名，否则写false
                options: [],
                show: false,
                rfid: false
            },
            {
                name: 'fodder_id',
                type: 'select',
                label: '饲料名称',
                placeholder: '（必选）',
                rule: {required: true}, // 这里如果需要验证类型写方法名
                options: [],
                optionskeys: [],
                show: false
            },
            {
                name: 'addition_id',
                type: 'select',
                label: '饲料添加剂',
                placeholder: '（必选）',
                rule: {required: true},
                options: [],
                optionskeys: [],
                show: false
            },
            {
                name: 'operate_id',
                type: 'select',
                label: '饲养员',
                placeholder: '请选择饲养员（必选）',
                rule: {required: true},
                options: [['请选择']],
                optionskeys: [['qxz']],
                show: false
            },
            {
                name: 'date',
                type: 'date',
                label: '饲养日期',
                placeholder: '（必选）',
                rule: {required: true}
            },
            {
                name: 'amount',
                type: 'textSelect',
                label: '平均喂养量',
                placeholder: '请输入正确的数字（必填）',
                rule: {required: true, type: 'reNumber'},
                options: [['kg/只', 'kg/头', 'kg/条']],
                optionskeys: [['kg/只', 'kg/头', 'kg/条']],
                show: false
            },
            {
                name: 'way',
                type: 'text',
                label: '喂养方式',
                placeholder: '(可填)',
                rule: {required: false}
            },
            {
                name: 'memo',
                type: 'textarea',
                label: '备注信息',
                placeholder: '（可填）',
                rule: {required: false}
            }]
        }],
        editComponent: [{
            tab: '编辑饲料使用信息',
            arrBox: {'fodder_id': 'fodder_name', 'addition_id': 'addition_name', 'operate_id': 'operate_name', 'unit': 'unit'},
            checkBoxUrl: [['fodders', 'id', 'name', 'radio'], ['additions', 'id', 'name', 'radio'], ['operates', 'id', 'name', 'radio']],
            checkBoxPosition: [0, 1, 2],
            selectValue: [[], [], [{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
            components: [{
                name: 'fodder_id',
                type: 'select',
                label: '饲料名称',
                placeholder: '必选',
                rule: {required: true},
                options: [],
                optionskeys: []
            },
            {
                name: 'addition_id',
                type: 'select',
                label: '饲料添加剂',
                placeholder: '必选',
                rule: {required: true},
                options: [],
                optionskeys: []
            },
            {
                name: 'operate_id',
                type: 'select',
                label: '饲养员',
                placeholder: '请选择饲养员（必选）',
                rule: {required: true},
                options: [],
                optionskeys: []
            },
            {
                name: 'date',
                type: 'date',
                label: '使用日期',
                placeholder: '（必选）',
                rule: {required: true}
            },
            {
                name: 'amount',
                type: 'textSelect',
                label: '平均喂养量',
                placeholder: '（必填）',
                rule: {required: true, type: 'reNumber'},
                options: [['kg/只', 'kg/头', 'kg/条']],
                optionskeys: [['kg/只', 'kg/头', 'kg/条']]
            },
            {
                name: 'way',
                type: 'text',
                component: null,
                label: '喂养方式',
                placeholder: '（可填）',
                rule: {required: false}
            },
            {
                name: 'memo',
                type: 'textarea',
                required: true,
                label: '备注信息',
                placeholder: '（可填）',
                rule: {required: false}
            }]
        }]
    }],
    // 养殖管理-病疫
    plague: [{
        key: 'disease',
        roleName: ['basic/operate', 0],
        timeshow: true,
        rightMenu: true,
        url: 'disease',
        batch: 'diseaseBactch',
        searchPlaceholder: '请输入兽药名称进行搜索',
        theads: ['兽药名称', '操作日期', '操作人'],
        protos: ['drug_name', 'date', 'operate_name'],
        widths: [26, 26, 26],
        newComponent: [{
            tab: '新建病疫情信息',
            plan: true,
            planString: '请选择病疫实施计划',
            planArr: {'drug_name': '兽药名称', 'operate_name': '施药人', 'amount': '使用量', 'unit': '单位'},
            planBox: {'drug_id': 'drug_name', 'operate_id': 'operate_name', 'unit': 'unit'},
            planIds: 'rfid_ids',
            planSelectArr: ['id', 'rfid', 'check'],
            planSelectArrPosition: 1,
            planPosition: [0, 1, 2, 3, 4, 5],
            checkBoxUrl: [['breeds', 'id', 'serial', 'radio'], ['drugs', 'id', 'name', 'radio'], ['operates', 'id', 'name', 'radio']],
            checkBoxPosition: [0, 2, 4],
            selectValue: [[], [], [{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
            hasImg: true,
            components: [{
                name: 'breed_id',
                type: 'select',
                label: '养殖批次号',
                assoc: ['rfids', 'id', 'rfid', 'check'],
                position: 1,
                clearArr: 'rfid_ids',
                placeholder: '（必选）',
                rule: {required: false},
                options: [],
                optionskeys: [],
                show: false
            },
            {
                name: 'rfid_ids',
                type: 'pcSelect',
                label: 'RFID',
                placeholder: 'rfid',
                rule: {required: true}, // 这里如果需要验证类型写方法名，否则写null
                options: [],
                show: false
            },
            {
                name: 'drug_id',
                type: 'select',
                label: '兽药名称',
                placeholder: '（必选）',
                rule: {required: true},
                options: [],
                optionskeys: [],
                show: false
            },
            {
                name: 'date',
                type: 'date',
                label: '施药日期',
                placeholder: '（必选）',
                rule: {required: true}
            },
            {
                name: 'operate_id',
                type: 'select',
                label: '施药人员',
                placeholder: '（必选）',
                rule: {required: true},
                options: [],
                optionskeys: []
            },
            {
                name: 'amount',
                type: 'textSelect',
                label: '平均施药量',
                placeholder: '请输入正确的数字（必填）',
                rule: {required: true, type: 'reNumber'},
                options: [['kg/只', 'kg/头', 'kg/条']],
                optionskeys: [['kg/只', 'kg/头', 'kg/条']],
                show: false
            },
            {
                name: 'description',
                type: 'text',
                label: '病情描述',
                placeholder: '(可写)',
                rule: {required: false}
            },
            {
                name: 'way',
                type: 'text',
                label: '治疗方式',
                placeholder: '（可写）',
                rule: {required: false}
            },
            {
                name: 'img',
                type: 'file',
                label: '病疫图片',
                placeholder: '',
                rule: {required: false}
            },
            {
                name: 'memo',
                type: 'textarea',
                label: '备注信息',
                placeholder: '（可写）',
                rule: {required: false}
            }]
        }],
        editComponent: [{
            tab: '编辑病疫情信息',
            arrBox: {'drug_id': 'drug_name', 'operate_id': 'operate_name', 'unit': 'unit'},
            checkBoxUrl: [['drugs', 'id', 'name', 'radio'], ['operates', 'id', 'name', 'radio']],
            checkBoxPosition: [0, 2],
            selectValue: [[], [{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
            hasImg: true,
            components: [{
                name: 'drug_id',
                type: 'select',
                label: '兽药名称',
                placeholder: '',
                rule: {required: true},
                options: [],
                optionskeys: [],
                show: false
            },
            {
                name: 'date',
                type: 'date',
                label: '施药日期',
                placeholder: '（必选）',
                rule: {required: true}
            },
            {
                name: 'operate_id',
                type: 'select',
                label: '施药人员',
                placeholder: '（必选）',
                rule: {required: true},
                options: [],
                optionskeys: []
            },
            {
                name: 'amount',
                type: 'textSelect',
                label: '平均施药量',
                placeholder: '请输入正确的数字（必填）',
                rule: {required: true, type: 'reNumber'},
                options: [['kg/只', 'kg/头', 'kg/条']],
                optionskeys: [['kg/只', 'kg/头', 'kg/条']],
                show: false
            },
            {
                name: 'description',
                type: 'text',
                label: '病情描述',
                placeholder: '(可写)',
                rule: {required: false}
            },
            {
                name: 'way',
                type: 'text',
                label: '治疗方式',
                placeholder: '（可写）',
                rule: {required: false}
            },
            {
                name: 'img',
                type: 'file',
                label: '病疫图片',
                placeholder: '',
                rule: {required: false}
            },
            {
                name: 'memo',
                type: 'textarea',
                label: '备注信息',
                placeholder: '（可写）',
                rule: {required: false}
            }]
        }]
    }],
    // 养殖管理-检疫
    quarantine: [{
        key: 'detection',
        roleName: ['basic/expert', 0],
        timeshow: true,
        rightMenu: true,
        url: 'detection',
        batch: 'detectionBatch',
        changeDataArr: [{result: {0: '不合格', 1: '合格'}}],
        searchPlaceholder: '请输入检疫项目名称进行搜索',
        theads: ['检疫项目名称', '操作日期', '操作人'],
        protos: ['name', 'date', 'operate_name'],
        widths: [26, 26, 26],
        newComponent: [{
            tab: '新建检疫信息',
            checkBoxUrl: [['breeds', 'id', 'serial', 'radio'], ['operates', 'id', 'name', 'radio']],
            checkBoxPosition: [0, 5],
            selectValue: [[], [{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
            hasImg: true,
            components: [{
                name: 'breed_id',
                type: 'select',
                label: '养殖批次号',
                assoc: ['rfids', 'id', 'rfid', 'check'],
                position: 1,
                clearArr: 'rfid_ids',
                placeholder: '（必选）',
                rule: {required: true},
                options: [],
                optionskeys: [],
                show: false
            },
            {
                name: 'rfid_ids',
                type: 'pcSelect',
                label: 'RFID',
                placeholder: 'rfid',
                rule: {required: true}, // 这里如果需要验证类型写方法名，否则写null
                options: [],
                show: false
            },
            {
                name: 'date',
                type: 'date',
                label: '检疫日期',
                placeholder: '(必选)',
                rule: {required: true}
            },
            {
                name: 'organization',
                type: 'text',
                label: '检疫机构',
                placeholder: '（必填）',
                rule: {required: true}
            },
            {
                name: 'name',
                type: 'text',
                label: '检疫项目名称',
                placeholder: '(必填)',
                rule: {required: true}
            },
            {
                name: 'operate_id',
                type: 'select',
                label: '操作人员',
                placeholder: '（必选）',
                rule: {required: true},
                options: [],
                optionskeys: [],
                show: false
            },
            {
                name: 'content',
                type: 'text',
                label: '检疫内容',
                placeholder: '（可填）',
                rule: {required: false}
            },
            {
                name: 'result',
                type: 'select',
                label: '检疫结果',
                placeholder: '(可选)',
                rule: {required: true},
                options: [['合格', '不合格']],
                optionskeys: [[1, 0]]
            },
            {
                name: 'check',
                type: 'text',
                label: '审批人',
                placeholder: '（可填）',
                rule: {required: false}
            },
            {
                name: 'img',
                type: 'file',
                label: '检疫报告图片',
                placeholder: '',
                rule: {required: false}
            },
            {
                name: 'memo',
                type: 'textarea',
                label: '备注信息',
                placeholder: '(可填)',
                rule: {required: false}
            }
            ]
        }],
        editComponent: [{
            tab: '编辑检疫信息',
            arrBox: {'operate_id': 'operate_name', 'result': 'result'},
            checkBoxUrl: [['operates', 'id', 'name', 'radio']],
            selectValue: [[{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
            checkBoxPosition: [3],
            hasImg: true,
            components: [{
                name: 'date',
                type: 'date',
                label: '检疫日期',
                placeholder: '(必选)',
                rule: {required: true}
            },
            {
                name: 'organization',
                type: 'text',
                label: '检疫机构',
                placeholder: '（必填）',
                rule: {required: true}
            },
            {
                name: 'name',
                type: 'text',
                label: '检疫项目名称',
                placeholder: '(必填)',
                rule: {required: true}
            },
            {
                name: 'operate_id',
                type: 'select',
                label: '操作人员',
                placeholder: '（必选）',
                rule: {required: true},
                options: [],
                optionskeys: [],
                show: false
            },
            {
                name: 'content',
                type: 'text',
                label: '检疫内容',
                placeholder: '（可填）',
                rule: {required: false}
            },
            {
                name: 'result',
                type: 'select',
                label: '检疫结果',
                placeholder: '(可选)',
                rule: {required: false},
                options: [['合格', '不合格']],
                optionskeys: [[1, 0]]
            },
            {
                name: 'check',
                type: 'text',
                label: '审批人',
                placeholder: '（可填）',
                rule: {required: false}
            },
            {
                name: 'img',
                type: 'file',
                label: '检疫报告图片',
                placeholder: '',
                rule: {required: false}
            },
            {
                name: 'memo',
                type: 'textarea',
                label: '备注信息',
                placeholder: '(可填)',
                rule: {required: false}
            }
            ]
        }]
    }],
    // 养殖管理-检验检测
    detectTest: [{
        timeshow: true,
        rightMenu: true,
        key: 'breed-detect',
        roleName: ['basic/client', 0],
        url: 'detect',
        paramsIndex: 'beast',
        batch: 'breedDetectBatch',
        searchPlaceholder: '请输入检测项目名称进行搜索',
        theads: ['检测项目名称', '检测日期', '操作人'],
        protos: ['name', 'date', 'operate_name'],
        widths: [26, 26, 26],
        changeDataArr: [{result: {0: '不合格', 1: '合格'}}],
        newComponent: [{
            tab: '新建检验检测信息',
            checkBoxUrl: [['breeds', 'id', 'serial', 'check'], ['operates', 'id', 'name', 'radio']],
            checkBoxPosition: [0, 2],
            selectValue: [[], [{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
            hasImg: true,
            hiddenValue: {type: 'beast'},
            components: [{
                name: 'breed_ids',
                type: 'pcSelect',
                label: '养殖批次号',
                placeholder: '请选择批次（必选）',
                rule: {required: true}, // 这里如果需要验证类型写方法名，否则写false
                options: [],
                show: false
            },
            {
                name: 'date',
                type: 'date',
                label: '检测日期',
                placeholder: '(必填)',
                rule: {required: true, message: '请输入检测日期'}
            },
            {
                name: 'operate_id',
                type: 'select',
                label: '负责人',
                placeholder: '（必选）',
                rule: {required: true},
                options: [],
                optionskeys: [],
                show: false
            },
            {
                name: 'name',
                type: 'text',
                label: '检测项目名称',
                placeholder: '(必填)',
                rule: {required: true}
            },
            {
                name: 'result',
                type: 'select',
                label: '检测结果',
                placeholder: '（必选）',
                rule: {required: true},
                options: [['合格', '不合格']],
                optionskeys: [[1, 0]]
            },
            {
                name: 'content',
                type: 'text',
                label: '检测内容',
                placeholder: '（可选）',
                rule: {required: false}
            },
            {
                name: 'department',
                type: 'text',
                label: '检测机构',
                placeholder: '(可选)',
                rule: {required: false}
            },
            {
                name: 'img',
                type: 'file',
                label: '检测图片报告',
                placeholder: '',
                rule: {required: false}
            },
            {
                name: 'memo',
                type: 'textarea',
                label: '备注信息',
                placeholder: '（可填）',
                rule: {required: false}
            }]
        }],
        editComponent: [{
            tab: '编辑检验检测信息',
            arrBox: {'operate_id': 'operate_name', 'result': 'result'},
            checkBoxUrl: [['operates', 'id', 'name', 'radio']],
            selectValue: [[{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
            checkBoxPosition: [1],
            hasImg: true,
            components: [{
                name: 'date',
                type: 'date',
                label: '检测日期',
                placeholder: '(必填)',
                rule: {required: true}
            },
            {
                name: 'operate_id',
                type: 'select',
                label: '负责人',
                placeholder: '（必选）',
                rule: {required: true},
                options: [],
                optionskeys: []
            },
            {
                name: 'name',
                type: 'text',
                label: '检测名称',
                placeholder: '(必填)',
                rule: {required: true}
            },
            {
                name: 'result',
                type: 'select',
                label: '检测结果',
                placeholder: '（必选）',
                rule: {required: true},
                options: [['合格', '不合格']],
                optionskeys: [[1, 0]]
            },
            {
                name: 'content',
                type: 'text',
                label: '检测内容',
                placeholder: '（可选）',
                rule: {required: false}
            },
            {
                name: 'department',
                type: 'text',
                label: '检测机构',
                placeholder: '(可选)',
                rule: {required: false}
            },
            {
                name: 'img',
                type: 'file',
                label: '检测图片报告',
                placeholder: '',
                rule: {required: false}
            },
            {
                name: 'memo',
                type: 'textarea',
                label: '备注信息',
                placeholder: '(可选)',
                rule: {required: false}
            }]
        }]
    }],
    // 养殖管理-圈舍维护
    penPreserve: [{
        key: 'clean',
        timeshow: true,
        rightMenu: true,
        url: 'clean',
        batch: 'penBatch',
        searchPlaceholder: '请输入标题搜索',
        theads: ['标题', '操作日期', '操作人'],
        protos: ['name', 'date', 'operate_name'],
        widths: [26, 26, 26],
        newComponent: [{
            tab: '新建圈舍维护信息',
            checkBoxUrl: [['areas', 'id', 'name', 'check'], ['operates', 'id', 'name', 'radio']],
            checkBoxPosition: [0, 2],
            selectValue: [[], [{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
            hasImg: true,
            components: [{
                name: 'area_ids',
                type: 'pcSelect',
                label: '圈舍',
                placeholder: '圈舍',
                rule: {required: true}, // 这里如果需要验证类型写方法名，否则写null
                options: [],
                show: false
            },
            {
                name: 'date',
                type: 'date',
                label: '圈舍日期',
                placeholder: '（必选）',
                rule: {required: true}
            },
            {
                name: 'operate_id',
                type: 'select',
                label: '操作人员',
                placeholder: '请选择操作人员（必选）',
                rule: {required: true},
                options: [],
                optionskeys: [],
                show: false
            },
            {
                name: 'name',
                type: 'text',
                label: '标题',
                placeholder: '（必填）',
                rule: {required: true}
            },
            {
                name: 'content',
                type: 'text',
                label: '操作内容',
                placeholder: '（必填）',
                rule: {required: true}
            },
            {
                name: 'img',
                type: 'file',
                label: '圈舍维护图片',
                placeholder: '',
                rule: {required: false}
            },
            {
                name: 'memo',
                type: 'textarea',
                label: '备注信息',
                placeholder: '（可填）',
                rule: {required: false}
            }]
        }],
        editComponent: [{
            tab: '编辑圈舍维护信息',
            arrBox: {'operate_id': 'operate_name'},
            checkBoxUrl: [['operates', 'id', 'name', 'radio']],
            checkBoxPosition: [1],
            selectValue: [[], [{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
            hasImg: true,
            components: [{
                name: 'date',
                type: 'date',
                label: '操作日期',
                placeholder: '（必选）',
                rule: {required: true, message: '请输入操作日期'}
            },
            {
                name: 'operate_id',
                type: 'select',
                label: '操作人员',
                placeholder: '请选择操作人员（必选）',
                rule: {required: true},
                options: [],
                optionskeys: [],
                show: false
            },
            {
                name: 'name',
                type: 'text',
                label: '标题',
                placeholder: '（必填）',
                rule: {required: true}
            },
            {
                name: 'content',
                type: 'text',
                label: '操作内容',
                placeholder: '（必填）',
                rule: {required: true}
            },
            {
                name: 'img',
                type: 'file',
                label: '圈舍维护图片',
                placeholder: '',
                rule: {required: false}
            },
            {
                name: 'memo',
                type: 'textarea',
                label: '备注信息',
                placeholder: '（可填）',
                rule: {required: false}
            }]
        }]
    }],
    // 养殖管理-出栏
    export: [{
        key: 'come',
        timeshow: true,
        roleName: ['basic/product', 0],
        url: 'come',
        rightMenu: true,
        batch: 'exportBatch',
        searchPlaceholder: '请输入出栏人进行搜索',
        theads: ['出栏日期', '出栏数量', '出栏人'],
        protos: ['date', 'amount', 'operate_name'],
        widths: [26, 26, 26],
        newComponent: [{
            tab: '新建病疫情信息',
            checkBoxUrl: [['breeds', 'id', 'serial', 'radio'], ['operates', 'id', 'name', 'radio']],
            selectValue: [[], [{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
            checkBoxPosition: [0, 3],
            components: [{
                name: 'breed_id',
                type: 'select',
                label: '养殖批次号',
                assoc: ['rfids', 'id', 'rfid', 'check'],
                position: 1,
                clearArr: 'rfid_ids',
                placeholder: '（必选）',
                rule: {required: true},
                options: [],
                optionskeys: [],
                show: false
            },
            {
                name: 'rfid_ids',
                type: 'pcSelect',
                label: 'RFID',
                placeholder: 'rfid',
                rule: {required: true}, // 这里如果需要验证类型写方法名，否则写null
                options: [],
                show: false
            },
            {
                name: 'date',
                type: 'date',
                label: '出栏日期',
                placeholder: '（必选）',
                rule: {required: true}
            },
            {
                name: 'operate_id',
                type: 'select',
                label: '出栏人员',
                placeholder: '（必选）',
                rule: {required: true},
                options: [],
                optionskeys: [],
                show: false
            },
            {
                name: 'memo',
                type: 'textarea',
                label: '备注信息',
                placeholder: '（可填）',
                rule: {required: false}
            }]
        }],
        editComponent: [{
            tab: '编辑出栏信息',
            arrBox: {'operate_id': 'operate_name'},
            checkBoxUrl: [['operates', 'id', 'name', 'radio']],
            selectValue: [[{n: 'domain', v: 'beast'}, {n: 'domain', v: 'all', s: true}]],
            checkBoxPosition: [1],
            components: [{
                name: 'date',
                type: 'date',
                label: '出栏日期',
                placeholder: '（必选）',
                rule: {required: true}
            },
            {
                name: 'operate_id',
                type: 'select',
                label: '出栏人员',
                placeholder: '（必选）',
                rule: {required: true},
                options: [],
                optionskeys: [],
                show: false
            },
            {
                name: 'memo',
                type: 'textarea',
                label: '备注信息',
                placeholder: '（可填）',
                rule: {required: false}
            }]
        }]
    }],
    // 养殖管理-生长过程
    courseProcess: [{
        key: 'course',
        roleName: ['beast/basic', 0],
        timeshow: true,
        url: 'course',
        searchPlaceholder: '请输入标题进行搜索',
        theads: ['标题', '日期', '图片'],
        protos: ['name', 'date', 'img'],
        widths: [26, 26, 26],
        newComponent: [{
            tab: '新建生长过程信息',
            checkBoxUrl: [['breeds', 'id', 'serial', 'radio']],
            checkBoxPosition: [0],
            hasImg: true,
            components: [{
                name: 'breed_id',
                type: 'select',
                label: '所属养殖批次',
                placeholder: '请选择养殖批次',
                rule: {required: true},
                options: [],
                optionskeys: [],
                show: false
            },
            {
                name: 'name',
                type: 'text',
                label: '图片标题',
                placeholder: '（必填）',
                rule: {required: true}
            },
            {
                name: 'date',
                type: 'date',
                label: '上传日期',
                placeholder: '（必填）',
                rule: {required: true}
            },
            {
                name: 'desc',
                type: 'textarea',
                label: '特征描述',
                placeholder: '（必填）',
                rule: {required: true}
            },
            {
                name: 'img',
                type: 'file',
                label: '图片',
                placeholder: '（必填）',
                rule: {required: true}
            },
            {
                name: 'memo',
                type: 'textarea',
                label: '备注信息',
                placeholder: '（可填）',
                rule: {required: false}
            }]
        }],
        editComponent: [{
            tab: '编辑生长过程信息',
            hasImg: true,
            components: [{
                name: 'serial',
                type: 'text',
                label: '所属养殖批次',
                rule: {required: true},
                disabled: true
            },
            {
                name: 'name',
                type: 'text',
                label: '图片标题',
                placeholder: '（必填）',
                rule: {required: true}
            },
            {
                name: 'date',
                type: 'date',
                label: '上传日期',
                placeholder: '（必填）',
                rule: {required: true}
            },
            {
                name: 'desc',
                type: 'textarea',
                label: '特征描述',
                placeholder: '（必填）',
                rule: {required: true}
            },
            {
                name: 'img',
                type: 'file',
                label: '图片',
                placeholder: '（必填）',
                rule: {required: true}
            },
            {
                name: 'memo',
                type: 'textarea',
                label: '备注信息',
                placeholder: '（可填）',
                rule: {required: false}
            }]
        }]
    }],
    // 2、屠宰加工管理-加工批次检测
    processSerial: [{
        key: 'detect_pk',
        roleName: ['beast/detect_pk', 0],
        timeshow: true,
        rightMenu: true,
        paramsIndex: 'beast',
        url: 'detect_pk',
        // 链接批次信息模块数据的桥（养殖批次详情）
        batch: 'beastDetectPkBatch',
        changeDataArr: [{result: {0: '不合格', 1: '合格'}}],
        searchPlaceholder: '请输入检测名称进行搜索',
        theads: ['检测项目名称', '检测日期', '检测人'],
        protos: ['name', 'date', 'operate_name'],
        widths: [26, 26, 26],
        newComponent: [{
            tab: '新建检验检测信息',
            hiddenValue: {type: 'beast'},
            checkBoxUrl: [['packs', 'id', 'serial', 'check'], ['operates', 'id', 'name', 'radio']],
            selectValue: [[], [{n: 'domain', v: 'packb'}, {n: 'domain', v: 'all', s: true}]],
            checkBoxPosition: [0, 2],
            hasImg: true,
            components: [{
                name: 'pack_ids',
                type: 'pcSelect',
                label: '加工批次号',
                placeholder: '批次号',
                rule: {required: true}, // 这里如果需要验证类型写方法名，否则写null
                options: [],
                show: false
            },
            {
                name: 'date',
                type: 'date',
                label: '检测日期',
                placeholder: '（必选）',
                rule: {required: true}
            },
            {
                name: 'operate_id',
                type: 'select',
                label: '加工人',
                placeholder: '请选择加工人员（必选）',
                rule: {required: true},
                options: [],
                optionskeys: [],
                show: false
            },
            {
                name: 'name',
                type: 'text',
                label: '检测名称',
                placeholder: '（必填）',
                rule: {required: true}
            },
            {
                name: 'result',
                type: 'select',
                label: '检测结果',
                placeholder: '（必选）',
                rule: {required: true},
                options: [['合格', '不合格']],
                optionskeys: [[1, 0]]
            },
            {
                name: 'content',
                type: 'text',
                label: '检测内容',
                placeholder: '（可填）',
                rule: {required: false}
            },
            {
                name: 'organization',
                type: 'text',
                label: '检测机构',
                placeholder: '（可填）',
                rule: {required: false}
            },
            {
                name: 'method',
                type: 'text',
                label: '处理方法',
                placeholder: '（可填）',
                rule: {required: false}
            },
            {
                name: 'img',
                type: 'file',
                label: '检测图片报告',
                placeholder: '',
                rule: {required: false}
            },
            {
                name: 'memo',
                type: 'textarea',
                label: '备注信息',
                placeholder: '（可填）',
                rule: {required: false}
            }]
        }],
        editComponent: [{
            tab: '编辑检验检测信息',
            arrBox: {'operate_id': 'operate_name', 'result': 'result'},
            checkBoxUrl: [['operates', 'id', 'name', 'radio']],
            selectValue: [[{n: 'domain', v: 'packb'}, {n: 'domain', v: 'all', s: true}]],
            checkBoxPosition: [1],
            hasImg: true,
            hiddenValue: {type: 'beast'},
            components: [{
                name: 'date',
                type: 'date',
                label: '检测日期',
                placeholder: '（必选）',
                rule: {required: true}
            },
            {
                name: 'operate_id',
                type: 'select',
                label: '加工人',
                placeholder: '请选择加工人员（必选）',
                rule: {required: true},
                options: [],
                optionskeys: [],
                show: false
            },
            {
                name: 'name',
                type: 'text',
                label: '检测名称',
                placeholder: '（必填）',
                rule: {required: true}
            },
            {
                name: 'result',
                type: 'select',
                label: '检测结果',
                placeholder: '（必选）',
                rule: {required: true},
                options: [['合格', '不合格']],
                optionskeys: [[1, 0]]
            },
            {
                name: 'content',
                type: 'text',
                label: '检测内容',
                placeholder: '（可填）',
                rule: {required: false}
            },
            {
                name: 'organization',
                type: 'text',
                label: '检测机构',
                placeholder: '（可填）',
                rule: {required: false}
            },
            {
                name: 'method',
                type: 'text',
                label: '处理方法',
                placeholder: '（可填）',
                rule: {required: false}
            },
            {
                name: 'img',
                type: 'file',
                label: '检测图片报告',
                placeholder: '',
                rule: {required: false}
            },
            {
                name: 'memo',
                type: 'textarea',
                label: '备注信息',
                placeholder: '（可填）',
                rule: {required: false}
            }]
        }]
    }],
    // 屠宰加工管理-产品溯源码管理
    serialManage: [{
        timeshow: true,
        rightMenu: true,
        isCode: true,
        key: 'code',
        paramsIndex: 'beast',
        roleName: ['packb/code', 0],
        url: 'code',
        searchPlaceholder: '请输入产品溯源码进行搜索',
        theads: ['产品溯源码', '产品名称', '生产日期'],
        protos: ['code', 'product_name', 'date'],
        widths: [26, 26, 26],
        newComponent: [{
            tab: '新建溯源码信息',
            hiddenValue: {category: 'come', type: 'beast'},
            checkBoxUrl: [['packs', 'id', 'serial', 'radio'], ['comes', 'id', 'serial', 'radio']],
            selectValue: [[{n: 'type', v: 'beast'}], []],
            checkBoxPosition: [0, 2],
            components: [{
                name: 'pack_id',
                type: 'select',
                assoc: ['pack_products', 'id', 'name', 'radio'],
                position: 1,
                clearArr: 'pack_product_id',
                label: '加工批次号',
                placeholder: '（必选）',
                rule: {required: true},
                options: [],
                optionskeys: [],
                show: false
            },
            {
                name: 'pack_product_id',
                type: 'select',
                label: '加工产品',
                placeholder: '（必选）',
                rule: {required: true},
                options: [],
                optionskeys: [],
                show: false
            },
            {
                name: 'come_id',
                type: 'select',
                assoc: ['come_rfids', 'id', 'rfid', 'check'],
                position: 3,
                clearArr: 'rfid_ids',
                label: '出栏批次号',
                placeholder: '（必选）',
                rule: {required: true},
                options: [],
                optionskeys: [],
                show: false
            },
            {
                name: 'rfid_ids',
                type: 'pcSelect',
                label: 'RFID',
                placeholder: 'rfid',
                rule: {required: true}, // 这里如果需要验证类型写方法名，否则写null
                options: [],
                show: false
            },
            {
                name: 'date',
                type: 'date',
                label: '生产日期',
                placeholder: '（必选）',
                rule: {required: true}
            },
            {
                name: 'amount',
                type: 'text',
                label: '生成数量',
                placeholder: '请填写数量（必填）',
                rule: {required: true, type: 'reInteger'}
            },
            {
                name: 'memo',
                type: 'textarea',
                label: '备注信息',
                placeholder: '（可填）',
                rule: {required: false}
            }]
        }],
        editComponent: [{
            tab: '编辑溯源码信息',
            components: [{
                name: 'serial',
                type: 'text',
                label: '加工批次号',
                placeholder: '',
                disabled: true,
                rule: {required: true}
            },
            {
                name: 'code',
                type: 'text',
                label: '产品溯源码',
                placeholder: '',
                disabled: true,
                rule: {required: true}
            },
            {
                name: 'product_name',
                type: 'text',
                label: '加工产品',
                placeholder: '',
                disabled: true,
                rule: {required: true}
            },
            {
                name: 'date',
                type: 'date',
                label: '生产日期',
                placeholder: '（必选）',
                rule: {required: true}
            },
            {
                name: 'memo',
                type: 'textarea',
                label: '备注信息',
                placeholder: '（可填）',
                rule: {required: false}
            }]
        }]
    }],
    // 种植管理-种植事物管理
    plantThing: [
        {
            tab: '施肥信息',
            unite: 'plantTo',
            key: 'fertilize',
            timeshow: true,
            rightMenu: true,
            tabshow: true,
            roleName: ['plant/basic', 0],
            url: 'fertilize',
            batch: 'fertilizeBatch',
            searchPlaceholder: '请输入肥料名称进行搜索',
            theads: ['肥料名称', '施肥日期', '施肥人'],
            protos: ['manure_name', 'date', 'operate_name'],
            widths: [26, 26, 26],
            newComponent: [{
                plan: true,
                planString: '请选择施肥计划',
                planArr: {'manure_name': '肥料名称', 'operate_name': '施肥人', 'amount': '施肥量', 'unit': '单位'},
                planBox: {'manure_id': 'manure_name', 'operate_id': 'operate_name', 'unit': 'unit'},
                planIds: 'cultivate_ids',
                planPosition: [0, 1, 2, 3, 4],
                tab: '新建施肥信息',
                checkBoxUrl: [['cultivates', 'id', 'serial', 'check'], ['manures', 'id', 'name', 'radio'], ['operates', 'id', 'name', 'radio']],
                selectValue: [[], [], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}]],
                checkBoxPosition: [0, 1, 4],
                components: [{
                    name: 'cultivate_ids',
                    type: 'pcSelect',
                    label: '种植批次号',
                    placeholder: '批次号',
                    rule: {required: true}, // 这里如果需要验证类型写方法名，否则写null
                    options: [],
                    show: false
                },
                {
                    name: 'manure_id',
                    type: 'select',
                    label: '肥料名称',
                    placeholder: '（必填）',
                    rule: {required: true},
                    options: [],
                    optionskeys: [],
                    show: false
                },
                {
                    name: 'date',
                    type: 'date',
                    label: '施肥日期',
                    placeholder: '（必选）',
                    rule: {required: true}
                },
                {
                    name: 'amount',
                    type: 'textSelect',
                    label: '使用量',
                    placeholder: '请填写数字（必填）',
                    options: [['kg/亩', 'kg/平方米', 'kg/公顷']],
                    optionskeys: [['kg/亩', 'kg/平方米', 'kg/公顷']],
                    rule: {required: true, type: 'reNumber', message: '请输入整数'},
                    show: false
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    label: '施肥人',
                    placeholder: '（必选）',
                    rule: {required: true},
                    options: [],
                    optionskeys: [],
                    show: false
                },
                {
                    name: 'way',
                    type: 'text',
                    label: '施肥方法',
                    placeholder: '（可填）',
                    rule: {required: false}
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    label: '备注信息',
                    placeholder: '（可填）',
                    rule: {required: false}
                }]
            }],
            editComponent: [{
                tab: '编辑施肥信息',
                arrBox: {'manure_id': 'manure_name', 'operate_id': 'operate_name', 'unit': 'unit'},
                checkBoxUrl: [['manures', 'id', 'name', 'radio'], ['operates', 'id', 'name', 'radio']],
                selectValue: [[], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}]],
                checkBoxPosition: [0, 3],
                components: [{
                    name: 'manure_id',
                    type: 'select',
                    label: '肥料名称',
                    placeholder: '（必填）',
                    rule: {required: true},
                    options: [],
                    optionskeys: [],
                    show: false
                },
                {
                    name: 'date',
                    type: 'date',
                    label: '施肥日期',
                    placeholder: '（必选）',
                    rule: {required: true}
                },
                {
                    name: 'amount',
                    type: 'textSelect',
                    label: '使用量',
                    placeholder: '请填写数字（必填）',
                    options: [['kg/亩', 'kg/平方米', 'kg/公顷']],
                    optionskeys: [['kg/亩', 'kg/平方米', 'kg/公顷']],
                    rule: {required: true, type: 'reNumber', message: '请输入整数'},
                    show: false
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    label: '施肥人',
                    placeholder: '（必选）',
                    rule: {required: true},
                    options: [],
                    optionskeys: [],
                    show: false
                },
                {
                    name: 'way',
                    type: 'text',
                    label: '施肥方法',
                    placeholder: '（可填）',
                    rule: {required: false}
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    label: '备注信息',
                    placeholder: '（可填）',
                    rule: {required: false}
                }]
            }]
        },
        {
            tab: '施药信息',
            timeshow: true,
            tabshow: true,
            rightMenu: true,
            roleName: ['plant/basic', 0],
            key: 'spray',
            unite: 'plantTo',
            url: 'spray',
            batch: 'sprayBatch',
            searchPlaceholder: '请输入农药名称进行搜索',
            theads: ['农药名称', '施药日期', '施药人'],
            protos: ['medicament_name', 'date', 'operate_name'],
            widths: [26, 26, 26],
            newComponent: [{
                tab: '新建药信息',
                plan: true,
                planString: '请选择施药计划',
                planArr: {'medicament_name': '农药名称', 'operate_name': '施药人', 'amount': '施药量', 'unit': '单位'},
                planBox: {'medicament_id': 'medicament_name', 'operate_id': 'operate_name', 'unit': 'unit'},
                planIds: 'cultivate_ids',
                planPosition: [0, 1, 2, 3, 4],
                checkBoxUrl: [['cultivates', 'id', 'serial', 'check'], ['medicaments', 'id', 'name', 'radio'], ['operates', 'id', 'name', 'radio']],
                selectValue: [[], [], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}]],
                checkBoxPosition: [0, 1, 4],
                components: [{
                    name: 'cultivate_ids',
                    type: 'pcSelect',
                    label: '种植批次号',
                    placeholder: '批次号',
                    rule: {required: true}, // 这里如果需要验证类型写方法名，否则写null
                    options: [],
                    show: false
                },
                {
                    name: 'medicament_id',
                    type: 'select',
                    label: '农药名称',
                    placeholder: '（必填）',
                    rule: {required: true},
                    options: [],
                    optionskeys: [],
                    show: false
                },
                {
                    name: 'date',
                    type: 'date',
                    label: '施药日期',
                    placeholder: '（必选）',
                    rule: {required: true}
                },
                {
                    name: 'amount',
                    type: 'textSelect',
                    label: '施药量',
                    placeholder: '请填写数字（必填）',
                    options: [['ml/亩', 'ml/平方米', 'ml/公顷']],
                    optionskeys: [['ml/亩', 'ml/平方米', 'ml/公顷']],
                    rule: {required: true, type: 'reNumber', message: '请输入整数'},
                    show: false
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    label: '施药人',
                    placeholder: '（必选）',
                    rule: {required: true},
                    options: [],
                    optionskeys: [],
                    show: false
                },
                {
                    name: 'concentration',
                    type: 'text',
                    label: '施药浓度',
                    placeholder: '（可填）',
                    rule: {required: false, type: 'reNumber', message: '请输入整数'}
                },
                {
                    name: 'safety',
                    type: 'text',
                    label: '安全隔离期（天）',
                    placeholder: '（可填）',
                    rule: {required: false, type: 'reNumber', message: '请输入整数'}
                },
                {
                    name: 'way',
                    type: 'text',
                    label: '施药方法',
                    placeholder: '（可填）',
                    rule: {required: false}
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    label: '备注信息',
                    placeholder: '（可填）',
                    rule: {required: false}
                }]
            }],
            editComponent: [{
                tab: '编辑施药信息',
                arrBox: {'medicament_id': 'medicament_name', 'operate_id': 'operate_name', 'unit': 'unit'},
                checkBoxUrl: [['medicaments', 'id', 'name', 'radio'], ['operates', 'id', 'name', 'radio']],
                selectValue: [[], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}]],
                checkBoxPosition: [0, 3],
                components: [{
                    name: 'medicament_id',
                    type: 'select',
                    label: '农药名称',
                    placeholder: '（必填）',
                    rule: {required: true},
                    options: [],
                    optionskeys: [],
                    show: false
                },
                {
                    name: 'date',
                    type: 'date',
                    label: '施药日期',
                    placeholder: '（必选）',
                    rule: {required: true}
                },
                {
                    name: 'amount',
                    type: 'textSelect',
                    label: '施药量',
                    placeholder: '请填写数字（必填）',
                    options: [['ml/亩', 'ml/平方米', 'ml/公顷']],
                    optionskeys: [['ml/亩', 'ml/平方米', 'ml/公顷']],
                    rule: {required: true, type: 'reNumber', message: '请输入整数'},
                    show: false
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    label: '施药人',
                    placeholder: '（必选）',
                    rule: {required: true},
                    options: [],
                    optionskeys: [],
                    show: false
                },
                {
                    name: 'concentration',
                    type: 'text',
                    label: '施药浓度',
                    placeholder: '（可填）',
                    rule: {required: false, type: 'reNumber', message: '请输入整数'}
                },
                {
                    name: 'safety',
                    type: 'text',
                    label: '安全隔离期（天）',
                    placeholder: '（可填）',
                    rule: {required: false, type: 'reNumber', message: '请输入整数'}
                },
                {
                    name: 'way',
                    type: 'text',
                    label: '施药方法',
                    placeholder: '（可填）',
                    rule: {required: false}
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    label: '备注信息',
                    placeholder: '（可填）',
                    rule: {required: false}
                }]
            }]
        },
        {
            timeshow: true,
            rightMenu: true,
            tabshow: true,
            key: 'detect',
            unite: 'plantTo',
            roleName: ['plant/basic', 0],
            tab: '检测信息',
            url: 'detect',
            paramsIndex: 'plant',
            batch: 'cultivateDetectBatch',
            searchPlaceholder: '请输入检测项目名称搜索',
            changeDataArr: [{result: {0: '不合格', 1: '合格'}}],
            theads: ['检测项目名称', '检测日期', '操作人'],
            protos: ['name', 'date', 'operate_name'],
            widths: [26, 26, 26],
            newComponent: [{
                tab: '新建检验检测信息',
                checkBoxUrl: [['cultivates', 'id', 'serial', 'check'], ['operates', 'id', 'name', 'radio']],
                selectValue: [[], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}]],
                checkBoxPosition: [0, 2],
                hasImg: true,
                hiddenValue: {type: 'plant'},
                components: [{
                    name: 'cultivate_ids',
                    type: 'pcSelect',
                    label: '种植批次号',
                    placeholder: '批次号',
                    rule: {required: true}, // 这里如果需要验证类型写方法名，否则写null
                    options: [],
                    show: false
                },
                {
                    name: 'date',
                    type: 'date',
                    label: '检测日期',
                    placeholder: '(必填)',
                    rule: {required: true, message: '请输入检测日期'}
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    label: '负责人',
                    placeholder: '（必选）',
                    rule: {required: true},
                    options: [],
                    optionskeys: [],
                    show: false
                },
                {
                    name: 'name',
                    type: 'select',
                    label: '检测项目名称',
                    placeholder: '(必填)',
                    rule: {required: true},
                    options: [['土壤检测', '水质检测', '大气污染检测', '农药残留检测', '其他检测']],
                    optionskeys: [['土壤检测', '水质检测', '大气污染检测', '农药残留检测', '其他检测']],
                    show: false
                },
                {
                    name: 'result',
                    type: 'select',
                    label: '检测结果',
                    placeholder: '（必选）',
                    rule: {required: true},
                    options: [['合格', '不合格']],
                    optionskeys: [[1, 0]]
                },
                {
                    name: 'content',
                    type: 'text',
                    label: '检测内容',
                    placeholder: '（可选）',
                    rule: {required: false}
                },
                {
                    name: 'department',
                    type: 'text',
                    label: '检测机构',
                    placeholder: '(可选)',
                    rule: {required: false}
                },
                {
                    name: 'img',
                    type: 'file',
                    label: '检测图片报告',
                    placeholder: '',
                    rule: {required: false}
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    label: '备注信息',
                    placeholder: '（可填）',
                    rule: {required: false}
                }]
            }],
            editComponent: [{
                tab: '编辑检验检测信息',
                arrBox: {'operate_id': 'operate_name', 'name': 'name', 'result': 'result'},
                checkBoxUrl: [['operates', 'id', 'name', 'radio']],
                selectValue: [[{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}]],
                checkBoxPosition: [1],
                hasImg: true,
                components: [{
                    name: 'date',
                    type: 'date',
                    label: '检测日期',
                    placeholder: '(必填)',
                    rule: {required: true}
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    label: '负责人',
                    placeholder: '（必选）',
                    rule: {required: true},
                    options: [],
                    optionskeys: []
                },
                {
                    name: 'name',
                    type: 'select',
                    label: '检测项目名称',
                    placeholder: '(必填)',
                    rule: {required: true},
                    options: [['土壤检测', '水质检测', '大气污染检测', '农药残留检测', '其他检测']],
                    optionskeys: [['土壤检测', '水质检测', '大气污染检测', '农药残留检测', '其他检测']],
                    show: false
                },
                {
                    name: 'result',
                    type: 'select',
                    label: '检测结果',
                    placeholder: '（必选）',
                    rule: {required: true},
                    options: [['合格', '不合格']],
                    optionskeys: [[1, 0]]
                },
                {
                    name: 'content',
                    type: 'text',
                    label: '检测内容',
                    placeholder: '（可选）',
                    rule: {required: false}
                },
                {
                    name: 'department',
                    type: 'text',
                    label: '检测机构',
                    placeholder: '(可选)',
                    rule: {required: false}
                },
                {
                    name: 'img',
                    type: 'file',
                    label: '检测图片报告',
                    placeholder: '',
                    rule: {required: false}
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    label: '备注信息',
                    placeholder: '(可选)',
                    rule: {required: false}
                }]
            }]
        },
        {
            timeshow: true,
            rightMenu: true,
            tabshow: true,
            key: 'farming',
            unite: 'plantTo',
            tab: '农事信息',
            roleName: ['plant/basic', 0],
            url: 'farming',
            batch: 'cultivateFarmingBatch',
            searchPlaceholder: '请输入操作内容进行搜索',
            theads: ['操作内容', '操作日期', '操作人'],
            protos: ['content', 'date', 'operate_name'],
            widths: [26, 26, 26],
            newComponent: [{
                tab: '新建农事信息',
                checkBoxUrl: [['cultivates', 'id', 'serial', 'check'], ['operates', 'id', 'name', 'radio']],
                selectValue: [[], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}]],
                checkBoxPosition: [0, 2],
                components: [{
                    name: 'cultivate_ids',
                    type: 'pcSelect',
                    label: '种植批次号',
                    placeholder: '批次号',
                    rule: {required: true}, // 这里如果需要验证类型写方法名，否则写null
                    options: [],
                    show: false
                },
                {
                    name: 'date',
                    type: 'date',
                    label: '操作日期',
                    placeholder: '（必选）',
                    rule: {required: true}
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    label: '操作人',
                    placeholder: '（必选）',
                    rule: {required: true},
                    options: [],
                    optionskeys: [],
                    show: false
                },
                {
                    name: 'content',
                    type: 'text',
                    label: '操作内容',
                    placeholder: '可填',
                    rule: {required: false}
                },
                {
                    name: 'method',
                    type: 'text',
                    label: '操作方法',
                    placeholder: '可填',
                    rule: {required: false}
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    label: '备注信息',
                    placeholder: '（可填）',
                    rule: {required: false}
                }]
            }],
            editComponent: [{
                tab: '编辑农事信息',
                arrBox: {'operate_id': 'operate_name'},
                checkBoxUrl: [['operates', 'id', 'name', 'radio']],
                selectValue: [[{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}]],
                checkBoxPosition: [1],
                components: [{
                    name: 'date',
                    type: 'date',
                    label: '操作日期',
                    placeholder: '（必选）',
                    rule: {required: true}
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    label: '操作人',
                    placeholder: '（必选）',
                    rule: {required: true},
                    options: [],
                    optionskeys: [],
                    show: false
                },
                {
                    name: 'content',
                    type: 'text',
                    label: '操作内容',
                    placeholder: '可填',
                    rule: {required: false}
                },
                {
                    name: 'method',
                    type: 'text',
                    label: '操作方法',
                    placeholder: '可填',
                    rule: {required: false}
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    label: '备注信息',
                    placeholder: '（可填）',
                    rule: {required: false}
                }]
            }]
        },
        {
            tab: '采收信息',
            timeshow: true,
            rightMenu: false,
            tabshow: true,
            key: 'harvest',
            unite: 'plantTo',
            url: 'harvest',
            searchPlaceholder: '请输入采收批次号进行搜索',
            theads: ['采收批次号', '种植批次号', '采收日期'],
            protos: ['serial', 'cultivate_serial', 'date'],
            widths: [26, 26, 26],
            newComponent: [{
                tab: '新建采收信息',
                plan: true,
                planArr: {'cultivate_serial': '种植批次号', 'operate_name': '采收人', 'amount': '采收量', 'unit': '单位'},
                planBox: {'cultivate_id': 'cultivate_serial', 'operate_id': 'operate_name', 'unit': 'unit'},
                checkBoxUrl: [['cultivates', 'id', 'serial', 'radio'], ['operates', 'id', 'name', 'radio']],
                selectValue: [[], [{n: 'domain', v: 'plant'}, {n: 'domain', v: 'all', s: true}]],
                checkBoxPosition: [1, 3],
                components: [{
                    name: 'date',
                    type: 'date',
                    label: '操作日期',
                    placeholder: '（必选）',
                    rule: {required: true}
                },
                {
                    name: 'cultivate_id',
                    type: 'select',
                    label: '种植批次号',
                    placeholder: '（必选）',
                    rule: {required: true},
                    options: [],
                    optionskeys: [],
                    show: false
                },
                {
                    name: 'amount',
                    type: 'textSelect',
                    label: '采收数量',
                    placeholder: '请填写数字（必填）',
                    options: [['kg', '个', '箱']],
                    optionskeys: [['kg', '个', '箱']],
                    rule: {required: true, type: 'reNumber', message: '请输入整数'},
                    show: false
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    label: '采收人',
                    placeholder: '（必选）',
                    rule: {required: true},
                    options: [],
                    optionskeys: [],
                    show: false
                },
                {
                    name: 'department',
                    type: 'text',
                    label: '入库部门',
                    placeholder: '可填',
                    rule: {required: false}
                },
                {
                    name: 'position',
                    type: 'text',
                    label: '存放仓库位置',
                    placeholder: '可填',
                    rule: {required: false}
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    label: '备注信息',
                    placeholder: '可填',
                    rule: {required: false}
                }]
            }],
            editComponent: [{
                tab: '编辑采收信息',
                arrBox: {'operate_id': 'operate_name', 'unit': 'unit'},
                checkBoxUrl: [['operates', 'id', 'name', 'radio']],
                checkBoxPosition: [3],
                components: [{
                    name: 'date',
                    type: 'date',
                    label: '操作日期',
                    placeholder: '（必选）',
                    rule: {required: true}
                },
                {
                    name: 'cultivate_serial',
                    type: 'text',
                    label: '种植批次号',
                    placeholder: '（必选）',
                    disabled: true,
                    rule: {required: true}
                },
                {
                    name: 'amount',
                    type: 'textSelect',
                    label: '采收数量',
                    placeholder: '请填写数字（必填）',
                    options: [['kg', '个', '箱']],
                    optionskeys: [['kg', '个', '箱']],
                    rule: {required: true, type: 'reNumber', message: '请输入整数'},
                    show: false
                },
                {
                    name: 'operate_id',
                    type: 'select',
                    label: '采收人',
                    placeholder: '（必选）',
                    rule: {required: true},
                    options: [],
                    optionskeys: [],
                    show: false
                },
                {
                    name: 'department',
                    type: 'text',
                    label: '入库部门',
                    placeholder: '可填',
                    rule: {required: false}
                },
                {
                    name: 'position',
                    type: 'text',
                    label: '存放仓库位置',
                    placeholder: '可填',
                    rule: {required: false}
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    label: '备注信息',
                    placeholder: '可填',
                    rule: {required: false}
                }]
            }]
        },
        {
            timeshow: true,
            rightMenu: false,
            tabshow: true,
            key: 'grow',
            tab: '生长图片',
            roleName: ['plant/basic', 0],
            url: 'grow',
            searchPlaceholder: '请输入标题进行搜索',
            theads: ['标题', '日期', '图片'],
            protos: ['name', 'date', 'img'],
            widths: [26, 26, 26],
            newComponent: [{
                tab: '新建生长过程信息',
                checkBoxUrl: [['cultivates', 'id', 'serial', 'radio']],
                checkBoxPosition: [0],
                hasImg: true,
                components: [{
                    name: 'cultivate_id',
                    type: 'select',
                    label: '所属种植批次',
                    placeholder: '批次号',
                    rule: {required: true},
                    options: [],
                    optionskeys: [],
                    show: false
                },
                {
                    name: 'name',
                    type: 'text',
                    label: '图片标题',
                    placeholder: '（必填）',
                    rule: {required: true}
                },
                {
                    name: 'date',
                    type: 'date',
                    label: '上传日期',
                    placeholder: '（必填）',
                    rule: {required: true}
                },
                {
                    name: 'desc',
                    type: 'textarea',
                    label: '特征描述',
                    placeholder: '（必填）',
                    rule: {required: true}
                },
                {
                    name: 'img',
                    type: 'file',
                    label: '图片',
                    placeholder: '（必填）',
                    rule: {required: true}
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    label: '备注信息',
                    placeholder: '（可填）',
                    rule: {required: false}
                }]
            }],
            editComponent: [{
                tab: '编辑生长过程信息',
                hasImg: true,
                components: [{
                    name: 'serial',
                    type: 'text',
                    label: '所属种植批次',
                    rule: {required: true},
                    disabled: true
                },
                {
                    name: 'name',
                    type: 'text',
                    label: '图片标题',
                    placeholder: '（必填）',
                    rule: {required: true}
                },
                {
                    name: 'date',
                    type: 'date',
                    label: '上传日期',
                    placeholder: '（必填）',
                    rule: {required: true}
                },
                {
                    name: 'desc',
                    type: 'textarea',
                    label: '特征描述',
                    placeholder: '（必填）',
                    rule: {required: true}
                },
                {
                    name: 'img',
                    type: 'file',
                    label: '图片',
                    placeholder: '（必填）',
                    rule: {required: true}
                },
                {
                    name: 'memo',
                    type: 'textarea',
                    label: '备注信息',
                    placeholder: '（可填）',
                    rule: {required: false}
                }]
            }]
        }
    ],
    // 果蔬加工管理-加工检测管理
    processManage: [{
        key: 'plant_detect_pk',
        roleName: ['plant/detect_pk', 0],
        timeshow: true,
        rightMenu: true,
        paramsIndex: 'plant',
        url: 'detect_pk',
        batch: 'plantDetectPkBatch',
        searchPlaceholder: '请输入检测名称进行搜索',
        changeDataArr: [{result: {0: '不合格', 1: '合格'}}],
        theads: ['检测项目名称', '检测日期', '检测人'],
        protos: ['name', 'date', 'operate_name'],
        widths: [26, 26, 26],
        newComponent: [{
            tab: '新建检验检测信息',
            hiddenValue: {type: 'plant'},
            checkBoxUrl: [['packs', 'id', 'serial', 'check'], ['operates', 'id', 'name', 'radio']],
            selectValue: [[], [{n: 'domain', v: 'packp'}, {n: 'domain', v: 'all', s: true}]],
            checkBoxPosition: [0, 2],
            hasImg: true,
            components: [{
                name: 'pack_ids',
                type: 'pcSelect',
                label: '加工批次号',
                placeholder: '批次号',
                rule: {required: true}, // 这里如果需要验证类型写方法名，否则写null
                options: [],
                show: false
            },
            {
                name: 'date',
                type: 'date',
                label: '检测日期',
                placeholder: '（必选）',
                rule: {required: true}
            },
            {
                name: 'operate_id',
                type: 'select',
                label: '加工人',
                placeholder: '请选择加工人员（必选）',
                rule: {required: true},
                options: [],
                optionskeys: [],
                show: false
            },
            {
                name: 'name',
                type: 'text',
                label: '检测名称',
                placeholder: '（必填）',
                rule: {required: true}
            },
            {
                name: 'result',
                type: 'select',
                label: '检测结果',
                placeholder: '（必选）',
                rule: {required: true},
                options: [['合格', '不合格']],
                optionskeys: [[1, 0]]
            },
            {
                name: 'content',
                type: 'text',
                label: '检测内容',
                placeholder: '（可填）',
                rule: {required: false}
            },
            {
                name: 'organization',
                type: 'text',
                label: '检测机构',
                placeholder: '（可填）',
                rule: {required: false}
            },
            {
                name: 'method',
                type: 'text',
                label: '处理方法',
                placeholder: '（可填）',
                rule: {required: false}
            },
            {
                name: 'img',
                type: 'file',
                label: '检测图片报告',
                placeholder: '',
                rule: {required: false}
            },
            {
                name: 'memo',
                type: 'textarea',
                label: '备注信息',
                placeholder: '（可填）',
                rule: {required: false}
            }]
        }],
        editComponent: [{
            tab: '编辑检验检测信息',
            arrBox: {'operate_id': 'operate_name', 'result': 'result'},
            checkBoxUrl: [['operates', 'id', 'name', 'radio']],
            selectValue: [[{n: 'domain', v: 'packp'}, {n: 'domain', v: 'all', s: true}]],
            checkBoxPosition: [1],
            hasImg: true,
            hiddenValue: {type: 'plant'},
            components: [{
                name: 'date',
                type: 'date',
                label: '检测日期',
                placeholder: '（必选）',
                rule: {required: true}
            },
            {
                name: 'operate_id',
                type: 'select',
                label: '加工人',
                placeholder: '请选择加工人员（必选）',
                rule: {required: true},
                options: [],
                optionskeys: [],
                show: false
            },
            {
                name: 'name',
                type: 'text',
                label: '检测名称',
                placeholder: '（必填）',
                rule: {required: true}
            },
            {
                name: 'result',
                type: 'select',
                label: '检测结果',
                placeholder: '（必选）',
                rule: {required: true},
                options: [['合格', '不合格']],
                optionskeys: [[1, 0]]
            },
            {
                name: 'content',
                type: 'text',
                label: '检测内容',
                placeholder: '（可填）',
                rule: {required: false}
            },
            {
                name: 'organization',
                type: 'text',
                label: '检测机构',
                placeholder: '（可填）',
                rule: {required: false}
            },
            {
                name: 'method',
                type: 'text',
                label: '处理方法',
                placeholder: '（可填）',
                rule: {required: false}
            },
            {
                name: 'img',
                type: 'file',
                label: '检测图片报告',
                placeholder: '',
                rule: {required: false}
            },
            {
                name: 'memo',
                type: 'textarea',
                label: '备注信息',
                placeholder: '（可填）',
                rule: {required: false}
            }]
        }]
    }],
    // 果蔬加工管理-产品溯源码管理
    vegetableTrace: [{
        timeshow: true,
        rightMenu: true,
        isCode: true,
        key: 'code',
        paramsIndex: 'plant',
        roleName: ['packb/code', 0],
        url: 'code',
        searchPlaceholder: '请输入产品溯源码进行搜索',
        theads: ['产品溯源码', '产品名称', '生产日期'],
        protos: ['code', 'product_name', 'date'],
        widths: [26, 26, 26],
        newComponent: [{
            tab: '新建溯源码信息',
            hiddenValue: {category: 'harvest', type: 'plant'},
            checkBoxUrl: [['packs', 'id', 'serial', 'radio'], ['harvests', 'id', 'serial', 'radio']],
            selectValue: [[{n: 'type', v: 'plant'}], []],
            checkBoxPosition: [0, 2],
            components: [{
                name: 'pack_id',
                type: 'select',
                assoc: ['pack_products', 'id', 'name', 'radio'],
                position: 1,
                clearArr: 'pack_product_id',
                label: '加工批次号',
                placeholder: '（必选）',
                rule: {required: true},
                options: [],
                optionskeys: [],
                show: false
            },
            {
                name: 'pack_product_id',
                type: 'select',
                label: '加工产品',
                placeholder: '（必选）',
                rule: {required: true},
                options: [],
                optionskeys: [],
                show: false
            },
            {
                name: 'harvest_id',
                type: 'select',
                label: '采收批次号',
                placeholder: '（必选）',
                rule: {required: true},
                options: [],
                optionskeys: [],
                show: false
            },
            {
                name: 'date',
                type: 'date',
                label: '生产日期',
                placeholder: '（必选）',
                rule: {required: true}
            },
            {
                name: 'amount',
                type: 'text',
                label: '生成数量',
                placeholder: '请填写数量（必填）',
                rule: {required: true, type: 'reInteger'}
            },
            {
                name: 'memo',
                type: 'textarea',
                label: '备注信息',
                placeholder: '（可填）',
                rule: {required: false}
            }]
        }],
        editComponent: [{
            tab: '编辑溯源码信息',
            components: [{
                name: 'serial',
                type: 'text',
                label: '加工批次号',
                placeholder: '',
                disabled: true,
                rule: {required: true}
            },
            {
                name: 'code',
                type: 'text',
                label: '产品溯源码',
                placeholder: '',
                disabled: true,
                rule: {required: true}
            },
            {
                name: 'product_name',
                type: 'text',
                label: '加工产品',
                placeholder: '',
                disabled: true,
                rule: {required: true}
            },
            {
                name: 'date',
                type: 'date',
                label: '生产日期',
                placeholder: '（必选）',
                rule: {required: true}
            },
            {
                name: 'memo',
                type: 'textarea',
                label: '备注信息',
                placeholder: '（可填）',
                rule: {required: false}
            }]
        }]
    }],
    // 物流运输管理-物流批次管理
    expressManage: [{
        key: 'delivery',
        roleName: ['delivery', 0],
        timeshow: true,
        tab: '物流信息信息',
        url: 'delivery',
        changeDataArr: [{transportable_type: {self: '自运', consign: '托运', selve: '自提'}}],
        searchPlaceholder: '请输入物流批次号进行搜索',
        theads: ['物流批次号', '货物名称', '物流日期'],
        protos: ['serial', 'name', 'datetime'],
        widths: [26, 26, 26],
        newComponent: [{
            tab: '新建物流批次信息',
            checkBoxUrl: [['operates', 'id', 'name', 'radio'], ['vehicles', 'id', 'number', 'radio'], ['drivers', 'id', 'name', 'radio'], ['logistics', 'id', 'name', 'radio']],
            selectValue: [[{n: 'domain', v: 'delivery'}, {n: 'domain', v: 'all', s: true}], [], [], []],
            checkBoxPosition: [2, 4, 5, 6],
            components: [{
                name: 'datetime',
                type: 'date',
                label: '物流日期',
                format: 'YYYY-MM-DD HH:mm',
                placeholder: '（必选）',
                rule: {required: true}
            },
            {
                name: 'name',
                type: 'text',
                label: '货物名称',
                placeholder: '（必填）',
                rule: {required: true}
            },
            {
                name: 'operate_id',
                type: 'select',
                label: '操作人员',
                placeholder: '（必选）',
                rule: {required: true},
                options: [],
                optionskeys: []
            },
            {
                name: 'transportable_type',
                type: 'select',
                label: '运输方式',
                placeholder: '（必填）',
                positionArr: {4: 'vehicle_id', 5: 'driver_id', 6: 'logistic_id', 7: 'number', 8: 'selve_name'},
                typeArr: {4: 'select', 5: 'select', 6: 'select', 7: 'text', 8: 'text'},
                selectNumber: {self: [4, 5], consign: [6, 7], selve: [8]},
                rule: {required: true},
                options: [['自运', '托运', '自提']],
                optionskeys: [['self', 'consign', 'selve']]
            },
            {
                name: 'vehicle_id',
                type: 'select',
                hiddenSelect: true,
                label: '车牌号',
                placeholder: '（必选）',
                rule: {required: true},
                options: [],
                optionskeys: [],
                show: false
            },
            {
                name: 'driver_id',
                hiddenSelect: true,
                type: 'select',
                label: '司机',
                placeholder: '（必选）',
                rule: {required: true},
                options: [],
                optionskeys: [],
                show: false
            },
            {
                name: 'logistic_id',
                type: 'select',
                hiddenSelect: true,
                label: '物流公司',
                placeholder: '（必选）',
                rule: {required: true},
                options: [],
                optionskeys: [],
                show: false
            },
            {
                name: 'number',
                hiddenSelect: true,
                type: 'text',
                label: '物流订单号',
                placeholder: '（必填）',
                rule: {required: true}
            },
            {
                name: 'selve_name',
                hiddenSelect: true,
                type: 'text',
                label: '提货人',
                placeholder: '（必填）',
                rule: {required: true}
            },
            {
                name: 'memo',
                type: 'textarea',
                label: '备注信息',
                placeholder: '（可填）',
                rule: {required: false}
            }]
        }],
        editComponent: [{
            tab: '编辑物流批次信息',
            arrBox: {'operate_id': 'operate_name'},
            checkBoxUrl: [['operates', 'id', 'name', 'radio']],
            selectValue: [[{n: 'domain', v: 'delivery'}, {n: 'domain', v: 'all', s: true}]],
            checkBoxPosition: [2],
            // 编辑回转触发状态
            editState: {3: 'transportable_type'},
            components: [{
                name: 'datetime',
                type: 'date',
                format: 'YYYY-MM-DD HH:mm',
                label: '物流日期',
                placeholder: '（必选）',
                rule: {required: true}
            },
            {
                name: 'name',
                type: 'text',
                label: '货物名称',
                placeholder: '（必填）',
                rule: {required: true}
            },
            {
                name: 'operate_id',
                type: 'select',
                label: '操作人员',
                placeholder: '（必选）',
                rule: {required: true},
                options: [],
                optionskeys: []
            },
            {
                name: 'transportable_type',
                type: 'text',
                label: '运输方式',
                disabled: true,
                positionArr: [4, 5, 6, 7, 8],
                selectNumber: {self: [4, 5], consign: [6, 7], selve: [8]},
                rule: {required: true}
            },
            {
                name: 'vehicle_name',
                type: 'text',
                hiddenSelect: true,
                label: '车牌号',
                disabled: true,
                placeholder: '（必选）',
                rule: {required: true}
            },
            {
                name: 'driver_name',
                hiddenSelect: true,
                type: 'text',
                label: '司机',
                disabled: true,
                placeholder: '（必选）',
                rule: {required: true}
            },
            {
                name: 'logistic_name',
                type: 'text',
                hiddenSelect: true,
                label: '物流公司',
                disabled: true,
                placeholder: '（必选）',
                rule: {required: true}
            },
            {
                name: 'number',
                hiddenSelect: true,
                type: 'text',
                label: '物流订单号',
                disabled: true,
                placeholder: '（必填）',
                rule: {required: true}
            },
            {
                name: 'selve_name',
                hiddenSelect: true,
                type: 'text',
                label: '提货人',
                disabled: true,
                placeholder: '（必填）',
                rule: {required: true}
            },
            {
                name: 'memo',
                type: 'textarea',
                label: '备注信息',
                placeholder: '（可填）',
                rule: {required: false}
            }]
        }]
    }],
    // 销售管理-销售订单管理
    saleOrder: [{
        key: 'sell',
        timeshow: true,
        rightMenu: true,
        url: 'sell',
        batch: 'saleBatch',
        searchPlaceholder: '请输入客户名称进行搜索',
        theads: ['客户名称', '订单日期', '销售员'],
        protos: ['client_name', 'datetime', 'operate_name'],
        widths: [26, 26, 26],
        newComponent: [{
            tab: '新建订单信息',
            checkBoxUrl: [['deliveries', 'id', 'serial', 'radio'], ['clients', 'id', 'name', 'radio'], ['operates', 'id', 'name', 'radio']],
            selectValue: [[], [], [{n: 'domain', v: 'sell'}, {n: 'domain', v: 'all', s: true}]],
            checkBoxPosition: [1, 2, 3],
            components: [{
                name: 'datetime',
                type: 'date',
                label: '订单日期时间',
                placeholder: '（必选）',
                rule: {required: true}
            },
            {
                name: 'delivery_id',
                type: 'select',
                label: '物流订单',
                placeholder: '（必选）',
                rule: {required: true},
                options: [],
                optionskeys: []
            },
            {
                name: 'client_id',
                type: 'select',
                label: '客户',
                placeholder: '（必选）',
                rule: {required: true},
                options: [],
                optionskeys: []
            },
            {
                name: 'operate_id',
                type: 'select',
                label: '销售员',
                placeholder: '（必选）',
                rule: {required: true},
                options: [],
                optionskeys: []
            },
            {
                name: 'money',
                type: 'text',
                label: '销售金额',
                placeholder: '请输入正确的数字（必填）',
                rule: {required: true, type: 'reNumber'}
            },
            {
                name: 'memo',
                type: 'textarea',
                label: '备注信息',
                placeholder: '（可填）',
                rule: {required: false}
            }]
        }],
        editComponent: [{
            tab: '编辑订单信息',
            // hiddenValue: {type: 1},
            arrBox: {'delivery_id': 'delivery_serial', 'client_id': 'client_name', 'operate_id': 'operate_name'},
            checkBoxUrl: [['deliveries', 'id', 'serial', 'radio'], ['clients', 'id', 'name', 'radio'], ['operates', 'id', 'name', 'radio']],
            selectValue: [[], [], [{n: 'domain', v: 'sell'}, {n: 'domain', v: 'all', s: true}]],
            checkBoxPosition: [1, 2, 3],
            components: [{
                name: 'datetime',
                type: 'date',
                label: '订单日期时间',
                placeholder: '（必选）',
                rule: {required: true}
            },
            {
                name: 'delivery_id',
                type: 'select',
                label: '物流订单',
                placeholder: '（必选）',
                rule: {required: true},
                options: [],
                optionskeys: []
            },
            {
                name: 'client_id',
                type: 'select',
                label: '客户',
                placeholder: '（必选）',
                rule: {required: true},
                options: [],
                optionskeys: []
            },
            {
                name: 'operate_id',
                type: 'select',
                label: '销售员',
                placeholder: '（必选）',
                rule: {required: true},
                options: [],
                optionskeys: []
            },
            {
                name: 'money',
                type: 'text',
                label: '销售金额',
                placeholder: '请输入正确的数字（必填）',
                rule: {required: true, type: 'reNumber'}
            },
            {
                name: 'memo',
                type: 'textarea',
                label: '备注信息',
                placeholder: '（可填）',
                rule: {required: false}
            }]
        }]
    }]
}
