
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
import inputTextSelect from "components/public/inputTextSelect.vue"

export default { 
    categoryBase:[
        {
            settitle:'分类档案管理',
            key: 'cultivation',
            tab: '养殖场信息',
            url: 'org',
            searchPlaceholder: '请输入养殖场进行搜索',
            theads: ['序号', '养殖场名称', '养殖面积', '负责人', '养殖畜禽种类', '养殖规模', '详细地址', '备注信息'],
            protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50,50],
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
    cultivateBase:[
        {  
            settitle:'养殖基础信息管理',
            key: 'cultivation',
            tab: '养殖场信息',
            url: 'org',
            searchPlaceholder: '请输入养殖场进行搜索',
            theads: ['序号', '养殖场名称', '养殖面积', '负责人', '养殖畜禽种类', '养殖规模', '详细地址', '备注信息'],
            protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50,50],
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
            tab: '养殖区信息',
            url: 'org',
            searchPlaceholder: '请输入养殖区进行搜索',
            typeComponent: [{component: 'TypeManage', params: {title: '机构类别管理', type: 1}}],
            theads: ['序号', '所属养殖场', '养殖区名称', '养殖面积', '负责人', '养殖畜禽种类', '养殖规模', '详细地址', '备注信息'],
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
                                {component:inputSelect,isNull:false,label:"养殖场名称",placeholder:"请选择养殖场",rule:"",
                                 options:[
                                            {value:'',label:'请选择养殖场'},
                                            {value:'从化养殖基地',label:'从化养殖基地'},
                                            {value:'华农养殖场',label:'华农养殖场'}],
                                },
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
            tab: '畜禽档案',
            url: 'org',
            searchPlaceholder: '请输入畜禽名称进行搜索',
            theads: ['序号', '畜禽种类', '畜禽名称', '品种描述', 'RFID位置', '已传图片', '备注信息'],
            protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50],
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
                                {component:inputSelect,isNull:false,label:"饲料类别",placeholder:"请选择类别",rule:"",
                                 options:[
                                        {value:'',label:'请选择类别'},
                                        {value:'粗粮类',label:'粗粮类'},
                                        {value:'维生素类',label:'维生素类'}],
                                },
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
                                {component:inputSelect,isNull:false,label:"畜药类别",placeholder:"请选择类别",rule:"",
                                 options:[
                                            {value:'',label:'请选择类别'},
                                            {value:'疾病防治药',label:'疾病防治药'},
                                        ],
                                    },
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
                                {component:inputSelect,isNull:false,label:"性别",placeholder:"请选择性别",rule:"",
                                 options:[
                                            {value:'',label:'男'},
                                            {value:'女',label:'女'},
                                        ],
                                },
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
                                {component:inputSelect,isNull:false,label:"操作模块",placeholder:"饲料使用",rule:"",
                                 options:[
                                            {value:'',label:'饲料使用'},
                                            {value:'畜禽病疫',label:'畜禽病疫'},
                                            {value:'畜禽检疫',label:'畜禽检疫'},
                                            {value:'畜禽圈舍',label:'畜禽圈舍'},
                                    ],
                                 },
                                {component:inputText,isNull:false,label:"专家名称",placeholder:"必填",rule:""},
                                {component:inputText,isNull:false,label:"研究领域",placeholder:"必填",rule:""},
                                {component:inputText,isNull:false,label:"级别",placeholder:"必填",rule:""},
                                {component:inputSelect,isNull:false,label:"性别",placeholder:"请选择性别",rule:"",
                                 options:[
                                            {value:'',label:'男'},
                                            {value:'女',label:'女'},
                                        ],
                                },
                                {component:inputText,isNull:false,label:"年龄",placeholder:"必填",rule:""},
                                {component:inputText,isNull:true,label:"所属单位",placeholder:"",rule:""},
                                {component:inputText,isNull:false,label:"联系方式",placeholder:"请输入11位的手机号（固话用-隔开）",rule:""},
                                {component:inputText,isNull:true,label:"备注信息",placeholder:"",rule:""},
                            ]
                    }],
        },
    ],
   
    cultivate:[
        {
            settitle:'养殖批次管理',
            key: 'expertManage',
            tab: '养殖批次信息',
            url: 'expert',
            searchPlaceholder: '请输入养殖批次号进行搜索',
            theads: ['序号', '所属养殖区','养殖批次号','畜禽名称','密度', '数量', '养殖方式', '养殖人', '养殖日期', '已传图片', '备注信息'],
            protos: ['name', 'expert_area', 'org_name',  'degree', 'duty', 'title', 'address', 'zipcode', 'company', 'officephone', 'homephone', 'cellphone', 'email', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            operateComponent: [{component: selectSection,
                                params:[
                                            {value:'',label:'养殖区选择'},
                                            {value:'',label:'示范A区'},
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
            newComponent:[{tab:"新建养殖批次",
                            components:[
                                {component:inputSelect,isNull:false,label:"所属养殖区",placeholder:"",rule:"",
                                 options:[
                                        {value:'',label:'示范A区'},
                                    ],
                                },
                                {component:inputSelect,isNull:false,label:"畜禽名称",placeholder:"",rule:"",
                                 options:[
                                            {value:'',label:'黑猪一号'},
                                        ],
                                },
                                {component:inputText,isNull:true,label:"密度",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"养殖方式",placeholder:"",rule:""},
                                {component:inputData,isNull:false,label:"养殖日期",placeholder:"",rule:""},
                                {component:inputSelect,isNull:false,label:"养殖人",placeholder:"请选择操作人",rule:"",
                                 options:[
                                            {value:'',label:'请选择操作人'},
                                            {value:'郑刚',label:'郑刚'},
                                        ],
                                },
                                {component:inputTextArea,isNull:true,label:"备注信息",placeholder:"",rule:""},
                            ]
                    }],
        },
    ],
    feed:[
        {
            settitle:'饲料使用管理',
            key: 'expertManage',
            tab: '饲料使用管理',
            url: 'expert',
            searchPlaceholder: '请输入饲料名称进行搜索',
            theads: ['序号', '所属养殖区','养殖批次号','畜禽名称','饲料名称', '喂养日期', '平均喂养量', '饲料员', '指导专家', '备注信息'],
            protos: ['name', 'expert_area', 'org_name',  'degree', 'duty', 'title', 'address', 'zipcode', 'company', 'officephone', 'homephone', 'cellphone', 'email', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            dateComponent: [{component: datePick}],
            typeComponent: [{component:output},{component: newbuildBtn}],
            newComponent:[{tab:"饲料使用管理",
                            components:[
                                {component:inputSelect,isNull:false,label:"饲料名称",placeholder:"饲料名称",rule:"",
                                 options:[
                                            {value:'',label:'饲料名称'},
                                            {value:'红苕汤羹',label:'红苕汤羹'},
                                            {value:'麦麸子',label:'麦麸子'},
                                            {value:'瓜果蔬菜',label:'瓜果蔬菜'},
                                            {value:'玉米面',label:'玉米面'},
                                        ],
                                },
                                {component:inputText,isNull:true,label:"喂养方式",placeholder:"请填写数字（必填）单位是亩",rule:""},
                                {component:inputTextSelect,isNull:false,label:"平均喂养量",placeholder:"",rule:"",
                                 options:[
                                            {value:'',label:'kg/只'},
                                            {value:'kg/头',label:'kg/头'},
                                            {value:'kg/条',label:'kg/条'},
                                        ],
                                },
                                {component:inputSelect,isNull:true,label:"指导专家",placeholder:"",rule:"",
                                 options:[
                                            {value:'',label:'无'},
                                            {value:'洪其里',label:'洪其里'},
                                        ],
                                },
                                {component:inputSelect,isNull:false,label:"饲养员",placeholder:"请选择饲养员",rule:"",
                                 options:[
                                            {value:'',label:'请选择饲养员'},
                                            {value:'郑刚',label:'郑刚'},
                                        ],
                                },
                                {component:inputData,isNull:true,label:"喂养日期",placeholder:"",rule:""},
                                {component:inputTextArea,isNull:true,label:"备注信息",placeholder:"",rule:""},]
                            },{tab:"选择养殖批次",
                                components:[
                                    {component:inputSelect,isNull:false,label:"",placeholder:"请选择养殖区",rule:"",
                                     options:[
                                                {value:'',label:'示范A区'},
                                            ],
                                    },
                                ]
                            }
                    ],
        },
    ],
    plague:[
        {
            settitle:'病疫情管理',
            key: 'expertManage',
            tab: '病疫情信息',
            url: 'expert',
            searchPlaceholder: '请输入兽药名称',
            theads: ['序号', '所属养殖区','养殖批次号','畜禽名称','兽药名称', '施药日期', '平均用药量', '治疗方式', '施药人', '指导专家','病情描述', '备注信息'],
            protos: ['name', 'expert_area', 'org_name',  'degree', 'duty', 'title', 'address', 'zipcode', 'company', 'officephone', 'homephone', 'cellphone', 'email', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            dateComponent: [{component: datePick}],
            typeComponent: [{component:output},{component: newbuildBtn}],
            newComponent:[{tab:"新建病疫情信息",
                            components:[
                                {component:inputSelect,isNull:false,label:"兽药分类",placeholder:"请选择类别",rule:"",options:[
                                                    {value:'',label:'请选择类别'},
                                                    {value:'疾病防治药',label:'疾病防治药'},
                                                    {value:'传染病防治药',label:'传染病防治药'},
                                                    {value:'寄生虫病防治药',label:'寄生虫病防治药'},
                                                    {value:'促生长药',label:'促生长药'},
                                                    {value:'其他类',label:'其他类'},
                                                ],
                                },
                                {component:inputSelect,isNull:false,label:"兽药名称",placeholder:"",rule:"",options:[
                                                    {value:'',label:'无'},
                                                ],
                                },
                                {component:inputData,isNull:false,label:"兽药日期",placeholder:"",rule:""},
                                {component:inputTextSelect,isNull:false,label:"平均施药量",placeholder:"请输入正确的数字（必填）",rule:"",
                                 options:[
                                            {value:'',label:'kg/只'},
                                            {value:'kg/头',label:'kg/头'},
                                            {value:'kg/条',label:'kg/条'},
                                        ],
                                },
                                {component:inputText,isNull:true,label:"施药方式",placeholder:"",rule:""},
                                {component:inputSelect,isNull:false,label:"施药人",placeholder:"请选择操作人",rule:"",
                                 options:[
                                            {value:'',label:'请选择操作人'},
                                            {value:'郑刚',label:'郑刚'},
                                        ],
                                },
                                {component:inputSelect,isNull:true,label:"指导专家",placeholder:"",rule:"",
                                 options:[
                                            {value:'',label:'无'},
                                        ],
                                },
                                {component:inputText,isNull:true,label:"病情描述",placeholder:"",rule:""},
                                {component:inputTextArea,isNull:true,label:"备注信息",placeholder:"",rule:""},
                            ]
                        },{tab:"选择养殖批次",
                            components:[{component:inputSelect,isNull:true,label:"",placeholder:"",rule:"请选择养殖区",
                             options:[
                                        {value:'',label:'示范A区'},
                                    ],
                             },]
                            }
                        ],
        },
    ],
    quarantine:[
        {
            settitle:'畜禽检疫管理',
            key: 'waningConditionManage',
            tab: '畜禽检疫信息',
            url: 'waningcondition',
            searchPlaceholder: '请输入检测项目名称进行',
            theads: ['序号', '所属检测机构','养殖批次号','检测品项名称','检测内容', '检测日期', '检测结果', '审批人', '经手人', '指导专家','已传图片', '备注信息'],
            protos: ['type', 'code', 'description'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            operateComponent: [{component: selectSection,
                                params:[
                                            {value:'',label:'检测机构'},
                                            {value:'广州市畜牧局',label:'广州市畜牧局'},
                                ]
                              }],
            dateComponent: [{component: datePick}],
            typeComponent: [{component:output},{component: newbuildBtn}],
            newComponent:[{tab:"新建检疫信息",
                            components:[
                                {component:inputText,isNull:false,label:"检测机构",placeholder:"",rule:""},
                                {component:inputText,isNull:false,label:"检测项目名称",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"检测内容",placeholder:"",rule:""},
                                {component:inputData,isNull:false,label:"检测日期",placeholder:"",rule:""},
                                {component:inputSelect,isNull:true,label:"检测结果",placeholder:"",rule:"",
                                 options:[
                                            {value:'',label:'合格'},
                                            {value:'不合格',label:'不合格'},
                                        ],
                                },
                                {component:inputText,isNull:true,label:"审批人",placeholder:"",rule:""},
                                {component:inputSelect,isNull:false,label:"经手人",placeholder:"请选择经手人",rule:"",
                                 options:[
                                            {value:'',label:'请选择经手人'},
                                            {value:'郑刚',label:'郑刚'},
                                        ],
                                },
                                {component:inputSelect,isNull:true,label:"指导专家",placeholder:"无",rule:"",
                                 options:[
                                            {value:'',label:'无'},
                                        ],
                                },
                                {component:inputTextArea,isNull:true,label:"备注信息",placeholder:"",rule:""},
                            ]
                        },{tab:"选择养殖批次",
                            components:[{component:inputSelect,isNull:true,label:"",placeholder:"",rule:"请选择养殖区",
                             options:[
                                        {value:'',label:'示范A区'},
                                    ],
                            },]
                          }
                        ],
        }
    ],
    pen:[
        {
            settitle:'畜禽圈舍管理',
            key: 'planManage',
            tab: '圈舍信息',
            url: 'plan',
            searchPlaceholder: '请输入操作内容进行搜索',
            theads: ['序号', '所属养殖区','养殖批次号','畜禽名称','操作类型', '操作方式', '操作内容', '操作人', '指导专家', '日期','备注信息'],
            protos: ['plan_type_name', 'name', 'content'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            dateComponent: [{component: datePick}],
            typeComponent: [{component:output},{component: newbuildBtn}],
            newComponent:[{tab:"新建圈舍信息",
                            components:[
                                {component:inputData,isNull:false,label:"操作日期",placeholder:"",rule:""},
                                {component:inputSelect,isNull:false,label:"操作类型",placeholder:"请选择操作类型",rule:"",
                                 options:[
                                            {value:'',label:'请选择操作类型'},
                                            {value:'清洁',label:'清洁'},
                                            {value:'消毒',label:'消毒'},
                                            {value:'修理',label:'修理'},
                                            {value:'杀虫',label:'杀虫'},
                                            {value:'散养',label:'散养'},
                                            {value:'其它',label:'其它'},
                                        ],
                                },
                                {component:inputText,isNull:true,label:"操作方法",placeholder:"",rule:""},
                                {component:inputSelect,isNull:false,label:"操作人员",placeholder:"请选择操作人",rule:"",
                                 options:[
                                            {value:'',label:'请选择经手人'},
                                            {value:'郑刚',label:'郑刚'},
                                        ],
                                },
                                {component:inputSelect,isNull:true,label:"指导专家",placeholder:"无",rule:"",
                                 options:[
                                            {value:'',label:'无'},
                                        ],
                                },
                                {component:inputText,isNull:false,label:"操作内容",placeholder:"",rule:""},
                                {component:inputTextArea,isNull:true,label:"备注信息",placeholder:"",rule:""},
                            ]
                        },{tab:"选择养殖批次",
                            components:[{component:inputSelect,isNull:true,label:"",placeholder:"",rule:"请选择养殖区",
                             options:[
                                        {value:'',label:'示范A区'},
                                    ],
                                 },]
                            }
                        ],
        },
    ],
    slaughter:[
        {
            settitle:'畜禽出栏管理',
            key: 'planManage',
            tab: '出栏信息',
            url: 'plan',
            searchPlaceholder: '请输入操作内容进行搜索',
            theads: ['序号', '出栏批次号','所属养殖区','养殖批次号','畜禽名称', '养殖面积', '出栏数量', '出栏日期', '出栏人','备注信息'],
            protos: ['plan_type_name', 'name', 'content'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            dateComponent: [{component: datePick}],
            typeComponent: [{component:output},{component: newbuildBtn}],
           newComponent:[{tab:"新建出栏信息",
                            components:[
                                {component:inputData,isNull:false,label:"出栏日期",placeholder:"",rule:""},
                                {component:inputSelect,isNull:false,label:"出栏人",placeholder:"请选择人物",rule:"",
                                 options:[
                                            {value:'',label:'请选择经手人'},
                                            {value:'郑刚',label:'郑刚'},
                                        ],
                                },
                                {component:inputTextArea,isNull:true,label:"备注信息",placeholder:"",rule:""},
                            ]
                        },{tab:"选择RFID",
                            components:[{component:inputSelect,isNull:true,label:"",placeholder:"",rule:"请选择养殖批次",
                             options:[
                                        {value:'',label:'示范A区'},
                                    ],
                                 },]
                            }
                        ],
        },
    ],
    petbasic:[
        {
            settitle:'加工基础信息管理',
            key: 'planManage',
            tab: '产品信息',
            url: 'plan',
            searchPlaceholder: '请输入产品名称进行搜索',
            theads: ['序号', '所属畜禽','产品名称','产品品牌','产品规格', '生产企业', '产地', '执行标准','备注信息'],
            protos: ['plan_type_name', 'name', 'content'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
            operateComponent: [{component: selectSection, 
                                params:[
                                            {value:'',label:'产品品牌'},
                                            {value:'康乐牌',label:'康乐牌'},
                                ]
                              }],
            typeComponent: [{component:output},{component:importBtn},{component: newbuildBtn}],
             newComponent:[{tab:"新建产品信息",
                            components:[
                                {component:inputSelect,isNull:false,label:"所属畜禽",placeholder:"请选择畜禽",rule:"",
                                 options:[
                                        {value:'',label:'请选择畜禽'},
                                        {value:'黑猪一号',label:'黑猪一号'},
                                    ],
                                },
                                {component:inputText,isNull:false,label:"产品名称",placeholder:"必填",rule:""},
                                {component:inputText,isNull:false,label:"产品品牌",placeholder:"必填",rule:""},
                                {component:inputText,isNull:true,label:"产品规格",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"生产企业",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"产地",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"执行标准",placeholder:"",rule:""},
                                {component:inputTextArea,isNull:true,label:"备注信息",placeholder:"",rule:""},
                            ]
                    }],
        },
        {
            key: 'planManage',
            tab: '经销商信息',
            url: 'plan',
            searchPlaceholder: '请输入经销商进行搜索',
            theads: ['序号', '经销商名称','联系人','联系电话','地址', '经销范围','备注信息'],
            protos: ['plan_type_name', 'name', 'content'],
            widths: [50, 50, 50, 50, 50, 50, 50],
            typeComponent: [{component:output},{component:importBtn},{component: newbuildBtn}],
            newComponent:[{tab:"新建经销商",
                            components:[
                                {component:inputSelect,isNull:false,label:"经销商名称",placeholder:"必填",rule:""},
                                {component:inputText,isNull:false,label:"联系人",placeholder:"必填",rule:""},
                                {component:inputText,isNull:false,label:"联系电话",placeholder:"请输入11位的手机号（固话用-隔开）必填",rule:""},
                                {component:inputText,isNull:false,label:"地址",placeholder:"必填",rule:""},
                                {component:inputText,isNull:true,label:"经销范围",placeholder:"",rule:""},
                                {component:inputTextArea,isNull:true,label:"备注信息",placeholder:"",rule:""},
                            ]
                    }],
        },
        {
            key: 'planManage',
            tab: '人物信息',
            url: 'plan',
            searchPlaceholder: '请输入加工人名称进行搜索',
            theads: ['序号', '姓名','性别','职位','年龄', '技术等级', '工龄', '联系电话','备注信息'],
            protos: ['plan_type_name', 'name', 'content'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
            typeComponent: [{component:output},{component:importBtn},{component: newbuildBtn}],
             newComponent:[{tab:"新建加工人",
                            components:[
                                {component:inputText,isNull:false,label:"姓名",placeholder:"必填",rule:""},
                                {component:inputSelect,isNull:false,label:"性别",placeholder:"",rule:"",
                                 options:[
                                            {value:'',label:'男'},
                                            {value:'女',label:'女'},
                                        ],
                                },
                                {component:inputText,isNull:true,label:"部门",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"职位",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"年龄",placeholder:"以年为单位",rule:""},
                                {component:inputSelect,isNull:false,label:"技术等级",placeholder:"",rule:"",
                                 options:[
                                            {value:'',label:'高级'},
                                            {value:'中级',label:'中级'},
                                            {value:'低级',label:'低级'},
                                        ],
                                },
                                {component:inputText,isNull:true,label:"工龄",placeholder:"以年为单位",rule:""},
                                {component:inputText,isNull:true,label:"联系电话",placeholder:"手机号码",rule:""},
                                {component:inputTextArea,isNull:true,label:"备注信息",placeholder:"",rule:""},
                            ]
                    }],
        },
        {
            key: 'planManage',
            tab: '畜禽肢体信息',
            url: 'plan',
            searchPlaceholder: '请输入部位名称进行搜索',
            theads: ['序号', '名称','编号','分类/肢体','畜禽名称','备注信息'],
            protos: ['plan_type_name', 'name', 'content'],
            widths: [50, 50, 50, 50, 50, 50],
            operateComponent: [{component: selectSection, 
                                params:[
                                            {value:'',label:'请选择'},
                                            {value:'分类',label:'分类'},
                                            {value:'肢体',label:'肢体'},
                                ]
                              }],
            typeComponent: [{component:output},{component: newbuildBtn}],
            newComponent:[{tab:"新建肢体信息",
                            components:[
                                {component:inputSelect,isNull:false,label:"所属分类",placeholder:"请选择分类",rule:"",
                                 options:[
                                            {value:'',label:'请选择分类'},
                                            {value:'后腿',label:'后腿'},
                                            {value:'头部',label:'头部'},
                                        ],
                                },
                                {component:inputText,isNull:false,label:"名称",placeholder:"必填",rule:""},
                                {component:inputTextArea,isNull:true,label:"备注信息",placeholder:"",rule:""},
                            ]
                    }],
        },
    ],
    petinput:[
        {
            settitle:'入库批次管理',
            key: 'planManage',
            tab: '入库批次信息',
            url: 'plan',
            searchPlaceholder: '请输入入库批次号',
            theads: ['序号', '入库批次号','入库日期','产品名称','数量', '入库人', '地址', '位置', '状态','备注信息'],
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
             newComponent:[{tab:"新建入库批次信息",
                            components:[
                                {component:inputData,isNull:false,label:"入库日期",placeholder:"",rule:""},
                                {component:inputSelect,isNull:false,label:"产品名称",placeholder:"请选择产品",rule:"",
                                 options:[
                                            {value:'',label:'请选择产品'},
                                            {value:'精瘦肉',label:'精瘦肉'},
                                        ],
                                },
                                {component:inputSelect,isNull:false,label:"入库人",placeholder:"请选择人物",rule:"",
                                 options:[
                                            {value:'',label:'请选择人物'},
                                            {value:'刘亮',label:'刘亮'},
                                        ],
                                },
                                {component:inputText,isNull:true,label:"地址",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"位置",placeholder:"",rule:""},
                                {component:inputTextArea,isNull:true,label:"备注信息",placeholder:"",rule:""},
                            ]
                        },{tab:"选择Rfid",
                            components:[{component:inputSelect,isNull:true,label:"",placeholder:"",rule:"选择出栏批次",
                             options:[
                                        {value:'',label:'没有可选择的出栏批次'},
                                    ],
                                 },]
                            }
                        ],
        },
    ],
    petProduct:[
        {
            settitle:'加工检疫管理',
            key: 'planManage',
            tab: '加工检疫信息',
            url: 'plan',
            searchPlaceholder: '请输入批次号进行搜索',
            theads: ['序号', '检疫批次号','产品名称','检疫名称','检疫日期', '检疫结果', '检疫机构', '负责人', '处理方法','图片报告','备注信息'],
            protos: ['plan_type_name', 'name', 'content'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50,50],
            dateComponent: [{component: datePick}],
            operateComponent: [{component: selectSection, 
                                params:[
                                            {value:'',label:'请选择产品'},
                                            {value:'精瘦肉',label:'精瘦肉'},
                                ]
                              }],
            typeComponent: [{component:output},{component: newbuildBtn}],
             newComponent:[{tab:"新建加工检疫信息",
                            components:[
                                {component:inputText,isNull:false,label:"检疫名称",placeholder:"",rule:""},
                                {component:inputText,isNull:false,label:"检疫内容",placeholder:"",rule:""},
                                {component:inputData,isNull:false,label:"检疫日期",placeholder:"",rule:""},
                                {component:inputSelect,isNull:false,label:"检疫结果",placeholder:"",rule:"",
                                 options:[
                                            {value:'',label:'合格'},
                                            {value:'不合格',label:'不合格'},
                                        ],
                                },
                                {component:inputText,isNull:true,label:"检疫机构",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"负责人",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"处理方法",placeholder:"",rule:""},
                                {component:inputTextArea,isNull:true,label:"备注",placeholder:"",rule:""},
                            ]
                        },{tab:"选Rfid",
                            components:[{component:inputSelect,isNull:true,label:"",placeholder:"",rule:"请选择入库批次",
                             options:[
                                        {value:'',label:'请选择入库批次'},
                                    ],
                                },]
                            }
                        ],
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
            newComponent:[{tab:"新建加工批次信息",
                            components:[
                                {component:inputData,isNull:false,label:"加工日期",placeholder:"",rule:""},
                                {component:inputSelect,isNull:false,label:"产品名称",placeholder:"请选择产品",rule:"",
                                 options:[
                                            {value:'',label:'请选择产品'},
                                            {value:'精瘦肉',label:'精瘦肉'},
                                        ],
                                },
                                {component:inputTextSelect,isNull:false,label:"原始数量（重量）",placeholder:"请输入正确的数字（必填）",rule:"",
                                 options:[
                                            {value:'',label:'（千克）'},
                                            {value:'个',label:'个'},
                                        ],
                                },
                                {component:inputText,isNull:false,label:"成品数量（重量）",placeholder:"请输入正确的数字（必填）",rule:""},
                                {component:inputText,isNull:true,label:"耗损率",placeholder:"",rule:""},
                                {component:inputSelect,isNull:true,label:"加工人",placeholder:"请选择加工人",rule:"",
                                 options:[
                                            {value:'',label:'请选择加工人'},
                                            {value:'刘亮',label:'刘亮'},
                                        ],
                                },
                                {component:inputTextArea,isNull:true,label:"备注信息",placeholder:"",rule:""},
                            ]
                        }],
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
             newComponent:[{tab:"新建产品溯源码",
                            components:[
                                {component:inputSelect,isNull:false,label:"加工批次",placeholder:"请选择加工批次",rule:"",
                                 options:[
                                            {value:'',label:'请选择加工批次'},
                                            {value:'PC201702080003',label:'PC201702080003'},
                                        ],
                                },
                                {component:inputSelect,isNull:false,label:"RFID",placeholder:"",rule:"",
                                 options:[
                                            {value:'',label:''},
                                        ],
                                },
                                {component:inputSelect,isNull:false,label:"肢体分类",placeholder:"",rule:"",
                                 options:[
                                            {value:'',label:'请选择肢体分类'},
                                            {value:'后腿',label:'后腿'},
                                            {value:'头部',label:'头部'},
                                        ],
                                },
                                {component:inputSelect,isNull:false,label:"肢体名称",placeholder:"",rule:"",
                                 options:[
                                            {value:'',label:''},
                                        ],
                                },
                                {component:inputText,isNull:true,label:"产品名称",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"产品数量",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"加工日期",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"加工人员",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"产品规格",placeholder:"",rule:""},
                                {component:inputData,isNull:false,label:"生产日期",placeholder:"",rule:""},
                                {component:inputText,isNull:false,label:"溯源码数量",placeholder:"请输入大于0小于100正确的数字（必填）",rule:""},
                                {component:inputTextArea,isNull:true,label:"备注",placeholder:"",rule:""},
                            ]
                        }],
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
            newComponent:[{tab:"新建出库订单",
                            components:[
                                {component:inputSelect,isNull:false,label:"收货单位",placeholder:"收货单位",rule:"",
                                 options:[
                                            {value:'',label:'收货单位'},
                                            {value:'生之园健康肉铺',label:'生之园健康肉铺'},
                                        ],
                                },
                                {component:inputData,isNull:false,label:"订单日期",placeholder:"",rule:""},
                                {component:inputText,isNull:false,label:"数量",placeholder:"请输入正确的数字（必填）",rule:""},
                                {component:inputSelect,isNull:true,label:"出库人",placeholder:"请选择出库人",rule:"",
                                 options:[
                                            {value:'',label:'请选择出库人'},
                                            {value:'刘亮',label:'刘亮'},
                                        ],
                                },
                                {component:inputText,isNull:true,label:"收货地点",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"收货人",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"收货电话",placeholder:"",rule:""},
                                {component:inputTextArea,isNull:true,label:"备注",placeholder:"",rule:""},
                            ]
                        }],
        },
    ],
    plant:[
        {  
            settitle:'种植基础资料',
            key: 'plantation',
            tab: '种植场信息',
            url: 'org',
            searchPlaceholder: '请输入种植场进行搜索',
            theads: ['序号', '种植场名称', '种植面积', '负责人', '详细地址', '联系电话', '备注信息'],
            protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50],
            typeComponent: [{component: importBtn},{component:output},{component: newbuildBtn}],
            newComponent:[{tab:"新建种植场信息",
                            components:[
                                {component:inputText,isNull:false,label:"种植场完整名称",placeholder:"必填",rule:""},
                                {component:inputTextSelect,isNull:false,label:"种植面积",placeholder:"请填写数字（必填）",rule:"",
                                 options:[
                                            {value:'',label:'亩'},
                                            {value:'平方米',label:'平方米'},
                                            {value:'公顷',label:'公顷'},
                                        ],
                                },
                                {component:inputText,isNull:true,label:"详细电话",placeholder:"请输入11位的手机号（固话用-隔开）",rule:""},
                                {component:inputText,isNull:true,label:"详细地址",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"负责人",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"视频检测设备号",placeholder:"",rule:""},
                                {component:inputTextArea,isNull:true,label:"备注信息",placeholder:"",rule:""},
                            ]
                        }],
        },
        {  
            key: 'plantArea',
            tab: '种植区信息',
            url: 'org',
            searchPlaceholder: '请输入种植区进行搜索',
            theads: ['序号', '所属种植场', '果蔬档案', '肥料档案', '种植面积', '负责人', '详细地址', '联系电话','备注信息'],
            protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50,50],
            operateComponent: [{component: selectSection, 
                                params:[
                                            {value:'',label:'种植场选择'},
                                            {value:'阿克苏基地',label:'阿克苏基地'},
                                ]
                              }],
            typeComponent: [{component: importBtn},{component:output},{component: newbuildBtn}],
            newComponent:[{tab:"新建种植区信息",
                            components:[
                                {component:inputSelect,isNull:false,label:"种植场名称",placeholder:"请选择种植场",rule:"",
                                 options:[
                                            {value:'',label:'请选择种植场'},
                                            {value:'阿克苏基地',label:'阿克苏基地'},
                                            {value:'华农科研基地中药材2号大棚',label:'华农科研基地中药材2号大棚'},
                                            {value:'华农科研基地中药材1号大棚',label:'华农科研基地中药材1号大棚'},
                                            {value:'华南农业大学增城冯村基地A区',label:'华南农业大学增城冯村基地A区'},
                                        ],
                                },
                                {component:inputText,isNull:false,label:"种植区名称",placeholder:"必填",rule:""},
                                {component:inputTextSelect,isNull:false,label:"种植面积",placeholder:"请填写数字（必填）",rule:"",
                                 options:[
                                            {value:'',label:'亩'},
                                        ],
                                },
                                {component:inputText,isNull:true,label:"详细电话",placeholder:"请输入11位的手机号（固话用-隔开）",rule:""},
                                {component:inputText,isNull:true,label:"详细地址",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"负责人",placeholder:"",rule:""},
                                {component:inputTextArea,isNull:true,label:"备注信息",placeholder:"",rule:""},
                            ]
                        }],
        },
        {  
            key: 'vegetableArchive',
            tab: '果蔬档案',
            url: 'org',
            searchPlaceholder: '请输入果蔬名称进行搜索',
            theads: ['序号', '果蔬名称', '育苗品种', '移栽品种', '生长周期', '基本特征描述', '已传图片', '备注信息'],
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
            newComponent:[{tab:"新建果蔬档案",
                            components:[
                                {component:inputSelect,isNull:false,label:"果蔬类别",placeholder:"水果类",rule:"",
                                 options:[
                                                {value:'',label:'蔬菜类'},
                                                {value:'水果类',label:'水果类'},
                                        ]
                                },
                                {component:inputText,isNull:false,label:"果蔬名称",placeholder:"必填",rule:""},
                                {component:inputText,isNull:true,label:"育苗品种",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"移栽品种",placeholder:"",rule:""},
                                {component:inputText,isNull:false,label:"生长周期",placeholder:"请输入数字，单位（天）必填",rule:""},
                                {component:inputText,isNull:true,label:"特征描述",placeholder:"",rule:""},
                                {component:inputTextArea,isNull:true,label:"备注信息",placeholder:"",rule:""},
                            ]
                        }],
        },
        {  
            key: 'fertilizeArchive',
            tab: '肥料档案',
            url: 'org',
            searchPlaceholder: '请输入肥料名称',
            theads: ['序号', '肥料类别', '肥料名称', '用途', '包装规格', '经销商名称', '产地', '联系方式', '备注信息'],
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
             newComponent:[{tab:"新建肥料档案",
                            components:[
                                {component:inputSelect,isNull:false,label:"分类",placeholder:"请选择分类",rule:"",
                                 options:[
                                                {value:'',label:'请选择分类'},
                                                {value:'生物肥',label:'生物肥'},
                                                {value:'有机化肥',label:'有机化肥'},
                                        ]
                                },
                                {component:inputText,isNull:false,label:"肥料名称",placeholder:"必填",rule:""},
                                {component:inputText,isNull:true,label:"用途",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"包装规格",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"经销商名称",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"产地",placeholder:"",rule:""},
                                  {component:inputText,isNull:true,label:"联系方式",placeholder:"请输入11位的手机号（固话用-隔开）",rule:""},
                                {component:inputTextArea,isNull:true,label:"备注信息",placeholder:"",rule:""},
                            ]
                        }],
        },
        {
            key: 'pesticideArchive',
            tab: '农药药档案',
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
             newComponent:[{tab:"新建农药档案",
                            components:[
                                {component:inputSelect,isNull:false,label:"分类",placeholder:"请选择分类",rule:"",
                                 options:[
                                                {value:'',label:'请选择分类'},
                                                {value:'用途',label:'用途'},
                                                {value:'用途1',label:'用途1'},
                                                {value:'生物农药',label:'生物农药'},
                                        ]
                                },
                                {component:inputText,isNull:false,label:"农药名称",placeholder:"必填",rule:""},
                                {component:inputText,isNull:true,label:"用途",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"防治对象",placeholder:"",rule:""},
                                {component:inputSelect,isNull:true,label:"毒性等级",placeholder:"",rule:"",
                                 options:[
                                                {value:'',label:'微毒'},
                                                {value:'低毒',label:'低毒'},
                                                {value:'中毒',label:'中毒'},
                                                {value:'高毒',label:'高毒'},
                                        ]
                                },
                                {component:inputText,isNull:true,label:"包装规格",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"联系方式",placeholder:"请输入11位的手机号（固话用-隔开）",rule:""},
                                {component:inputText,isNull:true,label:"经销商名称",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"产地",placeholder:"",rule:""},
                                {component:inputTextArea,isNull:true,label:"备注信息",placeholder:"",rule:""},
                            ]
                        }],
        },
        {
            key: 'expertArchive',
            tab: '专家档案',
            url: 'expert',
            searchPlaceholder: '请输入专家名称',
            theads: ['序号', '专家名称','操作模块','研究领域','级别', '年龄', '性别', '联系方式', '所属单位','备注'],
            protos: ['name', 'expert_area', 'org_name',  'degree', 'duty', 'title', 'address', 'zipcode', 'company', 'officephone', 'homephone', 'cellphone', 'email', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            operateComponent: [{component: selectSection,
                                params:[
                                            {value:'',label:'操作模块'},
                                            {value:'施肥',label:'施肥'},
                                            {value:'病虫害',label:'病虫害'},
                                            {value:'检验检测',label:'检验检测'},
                                            {value:'农事',label:'农事'},
                                ]
                              }],
            typeComponent: [{component: importBtn},{component:output},{component: newbuildBtn}],
             newComponent:[{tab:"新建专家档案",
                            components:[
                                {component:inputSelect,isNull:false,label:"操作模块",placeholder:"施肥",rule:"",
                                 options:[
                                                {value:'',label:'施肥'},
                                                {value:'病虫害',label:'病虫害'},
                                                {value:'检验检测',label:'检验检测'},
                                                {value:'农事',label:'农事'},
                                        ]
                                },
                                {component:inputText,isNull:false,label:"专家名称",placeholder:"必填",rule:""},
                                {component:inputText,isNull:false,label:"研究领域",placeholder:"必填",rule:""},
                                {component:inputText,isNull:false,label:"级别",placeholder:"必填",rule:""},
                                {component:inputSelect,isNull:false,label:"性别",placeholder:"",rule:"",
                                 options:[
                                                {value:'',label:'男'},
                                                {value:'女',label:'女'},
                                        ]
                                },
                                {component:inputText,isNull:true,label:"年龄",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"所属单位",placeholder:"",rule:""},
                                {component:inputText,isNull:true,label:"联系方式",placeholder:"请输入11位的手机号（固话用-隔开）",rule:""},
                                {component:inputTextArea,isNull:true,label:"备注信息",placeholder:"",rule:""},
                            ]
                        }],
        },
    ], 
}