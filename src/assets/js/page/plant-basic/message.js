
import importBtn from 'components/public/import-btn.vue'
import newbuildBtn from 'components/public/newbuild-btn.vue'
import output from 'components/public/output.vue'
import selectSection from 'components/public/select-section.vue'
import datePick from 'components/public/datePick.vue'
import vegetableBtn from 'components/public/vegetable-btn.vue'

import categoryBtn from 'components/public/categoryBtn.vue'
import inputText from "components/public/inputText.vue"
import inputTextArea from "components/public/inputTextArea.vue"
import inputSelect from "components/public/inputSelect.vue"
import inputData from "components/public/inputData.vue"
import inputFile from "components/public/inputFile.vue"


import edit from 'components/public/edit.vue'

export default { 
    categoryBase:[
        {
            settitle:'分类档案管理',
            key: 'cultivation',
            tab: '分类档案信息',
            url: 'org',
            searchPlaceholder: '请输入养殖场进行搜索',
            theads: ['序号', '分类名称', '模块类型', '备注信息'],
            protos: ['date', 'name', 'province', 'city'],
            widths: [50, 50, 50, 50],
            typeComponent: [{component: importBtn},{component:output},{component: newbuildBtn}],
            listComponent:[{component:edit}]
        }
    ],
    personFile:[
        {
            settitle:'人员档案管理',
            key: 'cultivation',
            tab: '人员档案信息',
            url: 'org',
            searchPlaceholder: '请输入养殖场进行搜索',
            theads: ['序号', '姓名', '身份', '性别','年龄', '联系方式','地址', '图片','备注信息'],
            protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
            widths: [50, 50, 50, 50,50, 50, 50, 50],
            typeComponent: [{component: importBtn},{component:output},{component: newbuildBtn}],
            newComponent:[{tab:"养殖场信息",
                            components:[
                                {component:inputText,isNull:false,label:"养殖场名称",placeholder:"必填",rule:""},
                                {component:inputText,isNull:false,label:"养殖面积",placeholder:"请填写数字（必填）单位是亩",rule:""},
                                {component:inputText,isNull:true,label:"负责人",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"养殖畜禽种类",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"养殖规模",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"地址",placeholder:"",rule:""},
                                {component:inputTextArea,isNull:true,label:"备注信息",placeholder:"",rule:""},
                            ]
                    }],
        }

    ],
    expertFile:[
        {
            settitle:'专家档案管理',
            key: 'cultivation',
            tab: '专家档案信息',
            url: 'org',
            searchPlaceholder: '请输入养殖场进行搜索',
            theads: ['序号', '专家名称', '级别', '研究领域','单位', '出生年月日','性别', '联系方式','图片'],
            protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
            widths: [50, 50, 50, 50,50,50,50,50,50],
            typeComponent: [{component: importBtn},{component:output},{component: newbuildBtn}],
        }

    ],
    customerFile:[
        {
            settitle:'客户档案管理',
            key: 'cultivation',
            tab: '客户档案信息',
            url: 'org',
            searchPlaceholder: '请输入养殖场进行搜索',
            theads: ['序号', '管理客户类型', '客户名称', '联系人','电话', '地址','传真', '邮箱','备注'],
            protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
            widths: [50, 50, 50, 50,50,50,50,50,50],
            typeComponent: [{component: importBtn},{component:output},{component: newbuildBtn}],
        }

    ],
    supplierFile:[
        {
            settitle:'供货商档案管理',
            key: 'cultivation',
            tab: '供货商档案信息',
            url: 'org',
            searchPlaceholder: '请输入养殖场进行搜索',
            theads: ['序号', '供货商名称', '电话', '联系人', '地址','备注'],
            protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
            widths: [50, 50, 50, 50,50,50],
            typeComponent: [{component: importBtn},{component:output},{component: newbuildBtn}],
        }

    ],
    productFile:[
        {
            settitle:'产品档案管理',
            key: 'cultivation',
            tab: '产品档案信息',
            url: 'org',
            searchPlaceholder: '请输入养殖场进行搜索',
            theads: ['序号', '名称', '执行标准', '卫生标准','商品型号', '商品简介','包装规格','保质期','食用方法', '存储方法','配料信息','图片','备注'],
            protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
            widths: [50, 50, 50, 50,50,50,50, 50, 50, 50,50,50,50],
            typeComponent: [{component: importBtn},{component:output},{component: newbuildBtn}],
        }

    ],
    baseManage:[
        {  
            settitle:'基础信息管理',
            key: 'cultivation',
            tab: '畜禽档案',
            url: 'org',
            searchPlaceholder: '请输入养殖场进行搜索',
            theads: ['序号', '畜禽名称', '描述', '耳标位置', '图片', '备注信息'],
            protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
            widths: [50, 50, 50, 50, 50, 50],
            typeComponent: [{component: importBtn},{component:output},{component: newbuildBtn}],
            newComponent:[{tab:"新建养殖场信息",
                            components:[
                                {component:inputText,isNull:false,label:"养殖场名称",placeholder:"必填",rule:""},
                                {component:inputText,isNull:false,label:"养殖面积",placeholder:"请填写数字（必填）单位是亩",rule:""},
                                {component:inputText,isNull:true,label:"负责人",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"养殖畜禽种类",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"养殖规模",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"地址",placeholder:"",rule:""},
                                {component:inputTextArea,isNull:true,label:"备注信息",placeholder:"",rule:""},
                            ]
                    }],
        },
        {
            settitle:'养殖基础信息管理',
            key: 'cultivate',
            tab: '饲料档案',
            url: 'org',
            searchPlaceholder: '请输入养殖区进行搜索',
            typeComponent: [{component: 'TypeManage', params: {title: '机构类别管理', type: 1}}],
            theads: ['序号', '分类', '名称', '用途', '包装规格', '产地', '生产厂家名称', '联系方式', '图片','备注信息'],
            protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50,50,50],
            operateComponent: [{component: selectSection,
                                params:[
                                            {value:'',label:'养殖场选择'},
                                            {value:'从化养殖基地',label:'从化养殖基地'}
                                        ],
                              }],
            typeComponent: [{component: importBtn},{component:output},{component: newbuildBtn}], 
            newComponent:[{tab:"新建养殖区信息",
                            components:[
                                {component:inputSelect,isNull:false,label:"养殖场名称",placeholder:"请选择养殖场",rule:""},
                                {component:inputText,isNull:false,label:"养殖区名称",placeholder:"必填",rule:""},
                                {component:inputText,isNull:false,label:"养殖面积",placeholder:"请填写数字（必填）单位是亩",rule:""},
                                {component:inputText,isNull:true,label:"负责人",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"养殖畜禽种类",placeholder:"",rule:""},
                                {component:inputText,isNull:false,label:"养殖规模",placeholder:"请填写数字（必填）单位是亩",rule:""},
                                {component:inputText,isNull:true,label:"详细地址",placeholder:"",rule:""},
                                {component:inputTextArea,isNull:true,label:"备注信息",placeholder:"",rule:""},
                            ]
                    }],
             
        },
        {  
            settitle:'养殖基础信息管理',
            key: 'livestock',
            tab: '兽药档案',
            url: 'org',
            searchPlaceholder: '请输入畜禽名称进行搜索',
            theads: ['序号', '分类', '名称', '用途', '包装规格', '产地', '生产厂家名称', '联系方式','图片', '备注信息'],
            protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50,50,50,50],
            operateComponent: [{component: selectSection,
                                params:[
                                            {value:'',label:'请选择'},
                                            {value:'未上传',label:'未上传'},
                                            {value:'已上传',label:'已上传'}
                                        ]
                              }],
            typeComponent: [{component: importBtn},{component:output},{component: newbuildBtn}],
            newComponent:[{tab:"新建畜禽档案",
                            components:[
                                {component:inputText,isNull:false,label:"畜禽名称",placeholder:"必填",rule:""},
                                {component:inputText,isNull:true,label:"品种描述",placeholder:"请填写数字（必填）单位是亩",rule:""},
                                {component:inputText,isNull:true,label:"RFID位置",placeholder:"",rule:""},
                                {component:inputTextArea,isNull:true,label:"备注信息",placeholder:"",rule:""},
                                {component:inputFile,isNull:true,label:"",placeholder:"",rule:""},
                            ]
                    }],

        },
        {  
            settitle:'养殖基础信息管理',
            key: 'feed',
            tab: '饲料档案',
            url: 'org',
            searchPlaceholder: '请输入饲料名称',
            theads: ['序号', '饲料类别', '饲料名称', '用途', '包装规格', '生产厂家名称', '产地', '联系方式','备注信息'],
            protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50,50,50],
            operateComponent: [{component: selectSection,
                                params:[
                                            {value:'',label:'请选择分类'},
                                            {value:'粗粮类',label:'粗粮类'},
                                            {value:'维生素类',label:'维生素类'},
                                            {value:'青蔬类',label:'青蔬类'},
                                            {value:'矿物质类',label:'矿物质类'},
                                            {value:'干草料类',label:'干草料类'},
                                            {value:'其他类',label:'其他类'},
                                ]
                              }],
            typeComponent: [{component: importBtn},{component:output},{component: newbuildBtn}],
            newComponent:[{tab:"新建饲料档案",
                            components:[
                                {component:inputSelect,isNull:false,label:"饲料类别",placeholder:"请选择类别",rule:""},
                                {component:inputText,isNull:false,label:"饲料名称",placeholder:"必填",rule:""},
                                {component:inputText,isNull:true,label:"用途",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"包装规格",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"生产厂家名称",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"产地",placeholder:"",rule:""},
                                 {component:inputText,isNull:true,label:"联系方式",placeholder:"请输入11位的手机号（固话用-隔开）",rule:""},
                                {component:inputTextArea,isNull:true,label:"备注信息",placeholder:"",rule:""},
                            ]
                    }],
        },
        {  
            settitle:'养殖基础信息管理',
            key: 'animalDrugs',
            tab: '兽药档案',
            url: 'org',
            searchPlaceholder: '请输入兽药名称',
            theads: ['序号', '兽药类别', '兽药名称', '用途', '包装规格', '生产厂家名称', '产地', '联系方式','备注'],
            protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50,50,50],
            operateComponent: [{component: selectSection,
                                params:[
                                            {value:'',label:'请选择分类'},
                                            {value:'疾病防治药',label:'疾病防治药'},
                                            {value:'传染病防治药',label:'传染病防治药'},
                                            {value:'寄生虫病防治药',label:'寄生虫病防治药'},
                                            {value:'促生长药',label:'促生长药'},
                                            {value:'其他类',label:'其他类'},
                                ]
                              }],
            typeComponent: [{component: importBtn},{component:output},{component: newbuildBtn}],
            newComponent:[{tab:"新建农药档案",
                            components:[
                                {component:inputSelect,isNull:false,label:"畜药类别",placeholder:"请选择类别",rule:""},
                                {component:inputText,isNull:false,label:"兽药名称",placeholder:"必填",rule:""},
                                {component:inputText,isNull:true,label:"用途",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"包装规格",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"生产厂家名称",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"产地",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"联系方式",placeholder:"请输入11位的手机号（固话用-隔开）",rule:""},
                                {component:inputTextArea,isNull:true,label:"备注信息",placeholder:"",rule:""},
                            ]
                    }],
        },
        {  
            settitle:'养殖基础信息管理',
            key: 'operator',
            tab: '人物档案',
            url: 'org',
            searchPlaceholder: '请输入姓名进行搜索',
            theads: ['序号', '姓名', '身份', '性别', '年龄', '联系方式', '地址', '备注'],
            protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50,50],
            typeComponent: [{component: importBtn},{component:output},{component: newbuildBtn}],
            newComponent:[{tab:"新建人物档案",
                            components:[
                                {component:inputText,isNull:false,label:"姓名",placeholder:"必填",rule:""},
                                {component:inputSelect,isNull:false,label:"性别",placeholder:"请选择性别",rule:""},
                                {component:inputText,isNull:true,label:"年龄",placeholder:"必填",rule:""},
                                {component:inputText,isNull:true,label:"身份",placeholder:"如后勤主管",rule:""},
                                {component:inputText,isNull:false,label:"联系方式",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"联系地址",placeholder:"请输入11位的手机号（固话用-隔开）",rule:""},
                                {component:inputText,isNull:true,label:"备注信息",placeholder:"",rule:""},
                            ]
                    }],
        },
        {  
            settitle:'养殖基础信息管理',
            key: 'expert',
            tab: '专家档案',
            url: 'org',
            searchPlaceholder: '请输入专家名称',
            theads: ['序号', '专家名称', '操作模块', '研究领域', '级别', '年龄', '性别', '联系方式','所属单位','备注'],
            protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50,50,50,50],
            operateComponent: [{component: selectSection,
                                params:[
                                            {value:'',label:'操作模块'},
                                            {value:'饲料使用',label:'饲料使用'},
                                            {value:'畜禽病疫',label:'畜禽病疫'},
                                            {value:'畜禽检疫',label:'畜禽检疫'},
                                            {value:'畜禽圈舍',label:'畜禽圈舍'},
                                ]
                              }],
            typeComponent: [{component: importBtn},{component:output},{component: newbuildBtn}],
            newComponent:[{tab:"新建人物档案",
                            components:[
                                {component:inputSelect,isNull:false,label:"操作模块",placeholder:"饲料使用",rule:""},
                                {component:inputText,isNull:false,label:"专家名称",placeholder:"必填",rule:""},
                                {component:inputText,isNull:false,label:"研究领域",placeholder:"必填",rule:""},
                                {component:inputText,isNull:false,label:"级别",placeholder:"必填",rule:""},
                                {component:inputSelect,isNull:false,label:"性别",placeholder:"请选择性别",rule:""},
                                {component:inputText,isNull:false,label:"年龄",placeholder:"必填",rule:""},
                                {component:inputText,isNull:true,label:"所属单位",placeholder:"",rule:""},
                                {component:inputText,isNull:false,label:"联系方式",placeholder:"请输入11位的手机号（固话用-隔开）",rule:""},
                                {component:inputText,isNull:true,label:"备注信息",placeholder:"",rule:""},
                            ]
                    }],
        },
    ],
   
    serialManage:[
        {
            settitle:'养殖批次管理',
            key: 'expertManage',
            tab: '养殖批次信息',
            url: 'expert',
            searchPlaceholder: '请输入养殖批次号进行搜索',
            theads: ['序号', '批次号','养殖区','畜禽','日期', '数量', '面积', '养殖方式', '养殖人', '备注', '图片状态', '状态'],
            protos: ['name', 'expert_area', 'org_name',  'degree', 'duty', 'title', 'address', 'zipcode', 'company', 'officephone', 'homephone', 'cellphone', 'email', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,50],
            operateComponent: [{component: selectSection,
                                params:[
                                            {value:'',label:'养殖区选择'},
                                            {value:'示范A区',label:'示范A区'},
                                ]
                              },
                                {component: selectSection,
                                    params:[
                                                {value:'',label:'畜禽名称'},
                                                {value:'饲料使用',label:'黑猪一号'},
                                    ]
                                  },
                                  {component: selectSection,
                                    params:[
                                                {value:'',label:'图片上传'},
                                                {value:'饲料使用',label:'已上传'},
                                                {value:'畜禽病疫',label:'未上传'},
                                    ]
                                  }
                              ],
            dateComponent: [{component: datePick}],
            typeComponent: [{component:output},{component: newbuildBtn}],
            newComponent:[{tab:"新建养殖场信息",
                            components:[
                                {component:inputText,isNull:false,label:"养殖场名称",placeholder:"必填",rule:""},
                                {component:inputText,isNull:false,label:"养殖面积",placeholder:"请填写数字（必填）单位是亩",rule:""},
                                {component:inputText,isNull:true,label:"负责人",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"养殖畜禽种类",placeholder:"",rule:""},
                            ]
                    }],
        },
    ],
    feedManage:[
        {
            settitle:'饲料使用管理',
            key: 'expertManage',
            tab: '饲料使用信息',
            url: 'expert',
            searchPlaceholder: '请输入饲料名称进行搜索',
            theads: ['序号', '使用日期','饲料','喂养方式','专家', '操作人员','喂养量', '类型状态', '备注'],
            protos: ['name', 'expert_area', 'org_name',  'degree', 'duty', 'title', 'address', 'zipcode', 'company', 'officephone', 'homephone', 'cellphone', 'email', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
            dateComponent: [{component: datePick}],
            typeComponent: [{component:output},{component: newbuildBtn}],
            newComponent:[{tab:"饲料使用管理",
                            components:[
                                {component:inputSelect,isNull:false,label:"饲料名称",placeholder:"饲料名称",rule:""},
                                {component:inputText,isNull:true,label:"喂养方式",placeholder:"请填写数字（必填）单位是亩",rule:""},
                                {component:inputSelect,isNull:false,label:"平均喂养量",placeholder:"",rule:""},
                                {component:inputSelect,isNull:true,label:"指导专家",placeholder:"",rule:""},
                                {component:inputSelect,isNull:false,label:"饲养员",placeholder:"请选择饲养员",rule:""},
                                {component:inputData,isNull:true,label:"喂养日期",placeholder:"",rule:""},
                                {component:inputTextArea,isNull:true,label:"备注信息",placeholder:"",rule:""},]
                            },{tab:"选择养殖批次",
                                components:[
                                    {component:inputText,isNull:false,label:"养殖场名称",placeholder:"必填",rule:""},
                                    ]
                            }
                    ],
        },
    ],
    plagueManage:[
        {
            settitle:'病疫管理',
            key: 'expertManage',
            tab: '病疫信息',
            url: 'expert',
            searchPlaceholder: '请输入兽药名称',
            theads: ['序号', '用药日期','病情描述','兽药','专家', '操作人员', '用药量', '治疗方式', '备注'],
            protos: ['name', 'expert_area', 'org_name',  'degree', 'duty', 'title', 'address', 'zipcode', 'company', 'officephone', 'homephone', 'cellphone', 'email', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
            dateComponent: [{component: datePick}],
            typeComponent: [{component:output},{component: newbuildBtn}],
            newComponent:[{tab:"新建养殖场信息",
                            components:[
                                {component:inputText,isNull:false,label:"养殖场名称",placeholder:"必填",rule:""},
                                {component:inputText,isNull:false,label:"养殖面积",placeholder:"请填写数字（必填）单位是亩",rule:""},
                                {component:inputText,isNull:true,label:"负责人",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"养殖畜禽种类",placeholder:"",rule:""},
                            ]
                    }],
        },
    ],
    quarantineManage:[
        {
            settitle:'检疫管理',
            key: 'waningConditionManage',
            tab: '检疫信息',
            url: 'waningcondition',
            searchPlaceholder: '请输入检测项目名称进行',
            theads: ['序号', '检测日期','检测项目名称','专家','操作人员', '检测内容', '检测结果', '审批人', '检测报告图片', '备注'],
            protos: ['type', 'code', 'description'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            operateComponent: [{component: selectSection,
                                params:[
                                            {value:'',label:'检测机构'},
                                            {value:'广州市畜牧局',label:'广州市畜牧局'},
                                ]
                              }],
            dateComponent: [{component: datePick}],
            typeComponent: [{component:output},{component: newbuildBtn}],
            newComponent:[{tab:"新建养殖场信息",
                            components:[
                                {component:inputText,isNull:false,label:"养殖场名称",placeholder:"必填",rule:""},
                                {component:inputText,isNull:false,label:"养殖面积",placeholder:"请填写数字（必填）单位是亩",rule:""},
                                {component:inputText,isNull:true,label:"负责人",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"养殖畜禽种类",placeholder:"",rule:""},
                            ]
                    }],
        }
    ],
    innocuityManage:[
        {
            settitle:'无害化管理',
            key: 'waningConditionManage',
            tab: '无害化信息',
            url: 'waningcondition',
            searchPlaceholder: '请输入检测项目名称进行',
            theads: ['序号', '无害化批次号','操作日期','操作内容','实行原因', '指导专家', '备注信息'],
            protos: ['type', 'code', 'description'],
            widths: [50, 50, 50, 50, 50, 50, 50],
            operateComponent: [{component: selectSection,
                                params:[
                                            {value:'',label:'检测机构'},
                                            {value:'广州市畜牧局',label:'广州市畜牧局'},
                                ]
                              }],
            dateComponent: [{component: datePick}],
            typeComponent: [{component:output},{component: newbuildBtn}],
            newComponent:[{tab:"新建养殖场信息",
                            components:[
                                {component:inputText,isNull:false,label:"养殖场名称",placeholder:"必填",rule:""},
                                {component:inputText,isNull:false,label:"养殖面积",placeholder:"请填写数字（必填）单位是亩",rule:""},
                                {component:inputText,isNull:true,label:"负责人",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"养殖畜禽种类",placeholder:"",rule:""},
                            ]
                    }],
        },

    ],
    slaughterManage:[
        {
            settitle:'出栏管理',
            key: 'waningConditionManage',
            tab: '出栏信息',
            url: 'waningcondition',
            searchPlaceholder: '请输入检测项目名称进行',
            theads: ['序号', '出栏日期','批次号','出栏数量','操作人员', '状态', '备注'],
            protos: ['type', 'code', 'description'],
            widths: [50, 50, 50, 50, 50, 50, 50],
            operateComponent: [{component: selectSection,
                                params:[
                                            {value:'',label:'检测机构'},
                                            {value:'广州市畜牧局',label:'广州市畜牧局'},
                                ]
                              }],
            dateComponent: [{component: datePick}],
            typeComponent: [{component:output},{component: newbuildBtn}],
            newComponent:[{tab:"新建养殖场信息",
                            components:[
                                {component:inputText,isNull:false,label:"养殖场名称",placeholder:"必填",rule:""},
                                {component:inputText,isNull:false,label:"养殖面积",placeholder:"请填写数字（必填）单位是亩",rule:""},
                                {component:inputText,isNull:true,label:"负责人",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"养殖畜禽种类",placeholder:"",rule:""},
                            ]
                    }],
        },
    ],
    planManage:[
        {
            settitle:'养殖计划管理',
            key: 'waningConditionManage',
            tab: '养殖计划信息',
            url: 'waningcondition',
            searchPlaceholder: '请输入检测项目名称进行',
            theads: ['序号', '批次号','计划日期','操作类型', '安排人员', '计划内容','操作用户', '备注', ],
            protos: ['type', 'code', 'description'],
            widths: [50, 50, 50, 50, 50, 50, 50],
            operateComponent: [{component: selectSection,
                                params:[
                                            {value:'',label:'检测机构'},
                                            {value:'广州市畜牧局',label:'广州市畜牧局'},
                                ]
                              }],
            dateComponent: [{component: datePick}],
            typeComponent: [{component:output},{component: newbuildBtn}],
        }
    ],
    petProcess:[
        {
            settitle:'加工批次管理',
            key: 'planManage',
            tab: '加工批次信息',
            url: 'plan',
            searchPlaceholder: '请输入产品名称进行搜索',
            theads: ['序号', '加工批次号','产品','包装日期','数量(重量)', '单位', '操作人', '录入人','备注信息'],
            protos: ['plan_type_name', 'name', 'content'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
            operateComponent: [{component: selectSection, 
                                params:[
                                            {value:'',label:'产品品牌'},
                                            {value:'康乐牌',label:'康乐牌'},
                                ]
                              }],
            typeComponent: [{component:output},{component:importBtn},{component: newbuildBtn}],
        },
    ],
    petDectect:[
        {
            settitle:'检验检测管理',
            key: 'planManage',
            tab: '检验检测信息',
            url: 'plan',
            searchPlaceholder: '请输入入库批次号',
            theads: ['序号', '检测名称','检测内容','检测日期','检测结果', '检测机构', '负责人', '处理方法', '图片报告','备注'],
            protos: ['plan_type_name', 'name', 'content'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            dateComponent: [{component: datePick}],
            operateComponent: [{component: selectSection, 
                                params:[
                                            {value:'',label:'产品名称'},
                                            {value:'精瘦肉',label:'精瘦肉'},
                                ]
                              }],
            typeComponent: [{component:output},{component: newbuildBtn}],
        },
    ],
    petTrace:[
        {
            settitle:'产品溯源管理',
            key: 'planManage',
            tab: '产品溯源码信息',
            url: 'plan',
            searchPlaceholder: '请输入溯源码搜索',
            theads: ['序号', '加工批次号','产品溯源码','产品名称','生产日期', 'RFID', '肢体部位', '产地','溯源次数','备注信息'],
            protos: ['plan_type_name', 'name', 'content'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50,50],
            dateComponent: [{component: datePick}],
            operateComponent: [{component: selectSection, 
                                params:[
                                            {value:'',label:'产品名称'},
                                            {value:'精瘦肉',label:'精瘦肉'},
                                ]
                              }],
            typeComponent: [{component:output},{component: newbuildBtn}],
        },
    ],
    petSerial:[
        {
            settitle:'加工批次管理',
            key: 'planManage',
            tab: '加工批次信息',
            url: 'plan',
            searchPlaceholder: '请输入加工批次号',
            theads: ['序号', '加工批次号','加工日期','加工人','原始数量', '成品数量', '耗损率', '是否生成','备注信息'],
            protos: ['plan_type_name', 'name', 'content'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
            dateComponent: [{component: datePick}],
            operateComponent: [{component: selectSection, 
                                params:[
                                            {value:'',label:'产品名称'},
                                            {value:'精瘦肉',label:'精瘦肉'},
                                ]
                              }],
            typeComponent: [{component:output},{component: newbuildBtn}],
        },
    ],
    petBack:[
        {
            settitle:'产品溯源管理',
            key: 'planManage',
            tab: '产品溯源码信息',
            url: 'plan',
            searchPlaceholder: '请输入溯源码搜索',
            theads: ['序号', '加工批次号','产品溯源码','产品名称','生产日期', 'RFID', '肢体部位', '产地','溯源次数','备注信息'],
            protos: ['plan_type_name', 'name', 'content'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50,50],
            dateComponent: [{component: datePick}],
            operateComponent: [{component: selectSection, 
                                params:[
                                            {value:'',label:'产品名称'},
                                            {value:'精瘦肉',label:'精瘦肉'},
                                ]
                              }],
            typeComponent: [{component:output},{component: newbuildBtn}],
        },
    ],
    petOutput:[
        {
            settitle:'产品出库管理',
            key: 'planManage',
            tab: '出库订单信息',
            url: 'plan',
            searchPlaceholder: '请输入出库订单号进行搜索',
            theads: ['序号', '出库叮当号','订单日期','收货单位','数量', '出库人', '收货地点', '收货人','收货电话','备注信息'],
            protos: ['plan_type_name', 'name', 'content'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50,50],
            dateComponent: [{component: datePick}],
            operateComponent: [{component: selectSection, 
                                params:[
                                            {value:'',label:'收货单位'},
                                            {value:'生之园健康肉铺',label:'生之园健康肉铺'},
                                ]
                              }],
            typeComponent: [{component:output},{component: newbuildBtn}],
        },
    ],
    plantBase:[
        {  
            settitle:'种植基础资料',
            key: 'plantation',
            tab: '种植场',
            url: 'org',
            searchPlaceholder: '请输入种植场进行搜索',
            theads: ['序号', '种植场名称','种植面积单位', '种植面积单位', '负责人', '联系电话', '详细地址', '备注信息'],
            protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50],
            typeComponent: [{component: importBtn},{component:output},{component: newbuildBtn}],
        },
        {  
            key: 'plantArea',
            tab: '种植区',
            url: 'org',
            searchPlaceholder: '请输入种植区进行搜索',
            theads: ['序号', '种植场名称', '种植面积', '种植面积单位', '负责人', '联系电话', '详细地址','备注信息'],
            protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50,50],
            operateComponent: [{component: selectSection, 
                                params:[
                                            {value:'',label:'种植场选择'},
                                            {value:'阿克苏基地',label:'阿克苏基地'},
                                ]
                              }],
            typeComponent: [{component: importBtn},{component:output},{component: newbuildBtn}],
        },
        {  
            key: 'vegetableArchive',
            tab: '果蔬档案',
            url: 'org',
            searchPlaceholder: '请输入果蔬名称进行搜索',
            theads: ['序号', '果蔬名称', '分类', '生长周期（天）', '基本特征描述','果蔬图片', '备注信息'],
            protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50],
            operateComponent: [{component: selectSection,
                                params:[
                                            {value:'',label:'请选择'},
                                            {value:'已上传',label:'已上传'},
                                            {value:'未上传',label:'未上传'},
                                ]
                              }],
            onlyComponent:[{component:vegetableBtn}],
            typeComponent: [{component: importBtn},{component:output},{component: newbuildBtn}],
        },
        {  
            key: 'fertilizeArchive',
            tab: '肥料档案',
            url: 'org',
            searchPlaceholder: '请输入肥料名称',
            theads: ['序号', '分类', '用途', '包装规格', '日期', '产地', '经销商名称', '联系方式', '备注'],
            protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50,50],
            operateComponent: [{component: selectSection,
                                params:[
                                            {value:'',label:'请选择分类'},
                                            {value:'生物肥',label:'生物肥'},
                                            {value:'有机肥料',label:'有机肥料'},
                                ]
                              }],
            typeComponent: [{component: importBtn},{component:output},{component:categoryBtn},{component: newbuildBtn}],
        },
        {
            key: 'pesticideArchive',
            tab: '农药档案',
            url: 'expert',
            searchPlaceholder: '请输入农药名称',
            theads: ['序号', '农药类别','农药名称','用途','防治对象', '毒性等级', '包装规格', '经销商名称', '产地', '联系方式', '备注'],
            protos: ['name', 'expert_area', 'org_name',  'degree', 'duty', 'title', 'address', 'zipcode', 'company', 'officephone', 'homephone', 'cellphone', 'email', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            operateComponent: [{component: selectSection,
                                params:[
                                            {value:'',label:'请选择分类'},
                                            {value:'用途',label:'用途'},
                                            {value:'生物肥料',label:'生物肥料'},
                                ]
                               }],
            typeComponent: [{component: importBtn},{component:output},{component:categoryBtn},{component: newbuildBtn}],
        },
    ], 
    plantSerial:[
        {
            settitle:'种植批次管理',
            key: 'planManage',
            tab: '种植批次信息',
            url: 'plan',
            theads: ['序号', '种植批次号','果蔬id','种植日期','种植面积', '面积单位', '种植数量', '种植人','录入人','备注'],
            protos: ['plan_type_name', 'name', 'content'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50,50],    
        }

    ],
    plantFarm:[
       {
            settitle:'农事管理',
            key: 'planManage',
            tab: '施肥信息',
            url: 'plan',
            theads: ['序号', '批次号','施肥日期','天气','肥料', '施用量(Kg)', '施肥人', '施肥方法','录入人','备注'],
            protos: ['plan_type_name', 'name', 'content'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50,50],    
        },
        {
            settitle:'农事管理',
            key: 'planManage',
            tab: '病虫害信息',
            url: 'plan',
            theads: ['序号', '批次号','药剂','喷洒日期','天气','使用量(L)', '施药浓度', '安全隔离期(天)','施用人','施用方法','录入人'],
            protos: ['plan_type_name', 'name', 'content'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50,50],    
        },
        {
            settitle:'农事管理',
            key: 'planManage',
            tab: '检验检测信息',
            url: 'plan',
            theads: ['序号', '批次号','检验类型','检验日期','天气', '检测部门', '检查结果', '检验审批信息','负责人','录入人','备注'],
            protos: ['plan_type_name', 'name', 'content'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50,50],    
        } 

    ]

}