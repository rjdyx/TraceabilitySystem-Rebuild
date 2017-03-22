
import importBtn from 'components/public/import-btn.vue'
import newbuildBtn from 'components/public/newbuild-btn.vue'
import output from 'components/public/output.vue'
import selectSection from 'components/public/select-section.vue'
import datePick from 'components/public/datePick.vue'
import vegetableBtn from 'components/public/vegetable-btn.vue'

import inputText from "components/public/inputText.vue"
import inputTextArea from "components/public/inputTextArea.vue"
import inputSelect from "components/public/inputSelect.vue"
import inputData from "components/public/inputData.vue"
import inputFile from "components/public/inputFile.vue"

export default {  
    cultivateBase:[
        {  
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
            key: 'cultivate',
            tab: '养殖区信息',
            url: 'org',
            searchPlaceholder: '请输入养殖区进行搜索',
            typeComponent: [{component: 'TypeManage', params: {title: '机构类别管理', type: 1}}],
            theads: ['序号', '所属养殖场', '养殖区名称', '养殖面积', '负责人', '养殖畜禽种类', '养殖规模', '详细地址', '备注信息'],
            protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50,50,50],

            placeholder:'养殖场选择',
            operateComponent: [{component: selectSection,
                                params:[
                                            {value:'选项1',label:'养殖场选择'},
                                            {value:'选项2',label:'从化养殖基地'}
                                        ]
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
            key: 'livestock',
            tab: '畜禽档案',
            url: 'org',
            searchPlaceholder: '请输入畜禽名称进行搜索',
            theads: ['序号', '畜禽种类', '畜禽名称', '品种描述', 'RFID位置', '已传图片', '备注信息'],
            protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50],
            placeholder:'请选择',
            operateComponent: [{component: selectSection,
                                params:[
                                            {value:'1',label:'请选择'},
                                            {value:'2',label:'未上传'},
                                            {value:'3',label:'已上传'}
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
            key: 'feed',
            tab: '饲料档案',
            url: 'org',
            searchPlaceholder: '请输入饲料名称',
            theads: ['序号', '饲料类别', '饲料名称', '用途', '包装规格', '生产厂家名称', '产地', '联系方式','备注信息'],
            protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50,50,50],
            placeholder:'请选择分类',
            operateComponent: [{component: selectSection,
                                params:[
                                            {value:'4',label:'请选择分类'},
                                            {value:'5',label:'粗粮类'},
                                            {value:'6',label:'维生素类'},
                                            {value:'4',label:'青蔬类'},
                                            {value:'5',label:'矿物质类'},
                                            {value:'6',label:'干草料类'},
                                            {value:'6',label:'其他类'},
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
            key: 'animalDrugs',
            tab: '兽药档案',
            url: 'org',
            searchPlaceholder: '请输入兽药名称',
            theads: ['序号', '兽药类别', '兽药名称', '用途', '包装规格', '生产厂家名称', '产地', '联系方式','备注'],
            protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50,50,50],
            placeholder:'请选择分类',
            operateComponent: [{component: selectSection,
                                params:[
                                            {value:'4',label:'请选择分类'},
                                            {value:'5',label:'疾病防治药'},
                                            {value:'6',label:'传染病防治药'},
                                            {value:'4',label:'寄生虫病防治药'},
                                            {value:'5',label:'促生长药'},
                                            {value:'6',label:'其他类'},
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
            key: 'expert',
            tab: '专家档案',
            url: 'org',
            searchPlaceholder: '请输入专家名称',
            theads: ['序号', '专家名称', '操作模块', '研究领域', '级别', '年龄', '性别', '联系方式','所属单位','备注'],
            protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50,50,50,50],
            placeholder:'操作模块',
            operateComponent: [{component: selectSection,
                                params:[
                                            {value:'4',label:'操作模块'},
                                            {value:'5',label:'饲料使用'},
                                            {value:'6',label:'畜禽病疫'},
                                            {value:'4',label:'畜禽检疫'},
                                            {value:'5',label:'畜禽圈舍'},
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
   
    cultivate:[
        {
            key: 'expertManage',
            tab: '养殖批次信息',
            url: 'expert',
            searchPlaceholder: '请输入养殖批次号进行搜索',
            theads: ['序号', '所属养殖区','养殖批次号','畜禽名称','密度', '数量', '养殖方式', '养殖人', '养殖日期', '已传图片', '备注信息'],
            protos: ['name', 'expert_area', 'org_name',  'degree', 'duty', 'title', 'address', 'zipcode', 'company', 'officephone', 'homephone', 'cellphone', 'email', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            placeholder:'养殖区',
            operateComponent: [{component: selectSection,
                                params:[
                                            {value:'4',label:'操作模块'},
                                            {value:'5',label:'饲料使用'},
                                            {value:'6',label:'畜禽病疫'},
                                            {value:'4',label:'畜禽检疫'},
                                            {value:'5',label:'畜禽圈舍'},
                                ]
                              },
                            {component: selectSection,
                                params:[
                                            {value:'4',label:'操作模块'},
                                            {value:'5',label:'饲料使用'},
                                            {value:'6',label:'畜禽病疫'},
                                            {value:'4',label:'畜禽检疫'},
                                            {value:'5',label:'畜禽圈舍'},
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
    feed:[
        {
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
    plague:[
        {
            key: 'expertManage',
            tab: '病疫情信息',
            url: 'expert',
            searchPlaceholder: '请输入兽药名称',
            theads: ['序号', '所属养殖区','养殖批次号','畜禽名称','兽药名称', '施药日期', '平均用药量', '治疗方式', '施药人', '指导专家','病情描述', '备注信息'],
            protos: ['name', 'expert_area', 'org_name',  'degree', 'duty', 'title', 'address', 'zipcode', 'company', 'officephone', 'homephone', 'cellphone', 'email', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
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
    quarantine:[
        {
            key: 'waningConditionManage',
            tab: '畜禽检疫信息',
            url: 'waningcondition',
            searchPlaceholder: '请输入检测项目名称进行',
            theads: ['序号', '所属检测机构','养殖批次号','检测品项名称','检测内容', '检测日期', '检测结果', '审批人', '经手人', '指导专家','已传图片', '备注信息'],
            protos: ['type', 'code', 'description'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            placeholder:'检测机构',
            operateComponent: [{component: selectSection,
                                params:[
                                            {value:'4',label:'检测机构'},
                                            {value:'5',label:'广州市畜牧局'},
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
    pen:[
        {
            key: 'planManage',
            tab: '圈舍信息',
            url: 'plan',
            searchPlaceholder: '请输入操作内容进行搜索',
            theads: ['序号', '所属养殖区','养殖批次号','畜禽名称','操作类型', '操作方式', '操作内容', '操作人', '指导专家', '日期','备注信息'],
            protos: ['plan_type_name', 'name', 'content'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
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
    slaughter:[
        {
            key: 'planManage',
            tab: '出栏信息',
            url: 'plan',
            searchPlaceholder: '请输入操作内容进行搜索',
            theads: ['序号', '出栏批次号','所属养殖区','养殖批次号','畜禽名称', '养殖面积', '出栏数量', '出栏日期', '出栏人','备注信息'],
            protos: ['plan_type_name', 'name', 'content'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
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
    petbasic:[
        {
            key: 'planManage',
            tab: '产品信息',
            url: 'plan',
            searchPlaceholder: '请输入产品名称进行搜索',
            typeComponent: [{component: '', params: {title: '预案类型管理', type: 3}}],
            theads: ['序号', '所属畜禽','产品名称','产品品牌','产品规格', '生产企业', '产地', '执行标准','备注信息'],
            protos: ['plan_type_name', 'name', 'content'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
            colComponent: {}
        },
        {
            key: 'planManage',
            tab: '经销商信息',
            url: 'plan',
            searchPlaceholder: '请输入经销商进行搜索',
            typeComponent: [{component: '', params: {title: '预案类型管理', type: 3}}],
            theads: ['序号', '经销商名称','联系人','联系电话','地址', '经销范围','备注信息'],
            protos: ['plan_type_name', 'name', 'content'],
            widths: [50, 50, 50, 50, 50, 50, 50],
            colComponent: {}
        },
        {
            key: 'planManage',
            tab: '人物信息',
            url: 'plan',
            searchPlaceholder: '请输入加工人名称进行搜索',
            typeComponent: [{component: '', params: {title: '预案类型管理', type: 3}}],
            theads: ['序号', '姓名','性别','职位','年龄', '技术等级', '工龄', '联系电话','备注信息'],
            protos: ['plan_type_name', 'name', 'content'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
            colComponent: {}
        },
        {
            key: 'planManage',
            tab: '畜禽肢体信息',
            url: 'plan',
            searchPlaceholder: '请输入部位名称进行搜索',
            typeComponent: [{component: '', params: {title: '预案类型管理', type: 3}}],
            theads: ['序号', '名称','编号','分类/肢体','畜禽名称','备注信息'],
            protos: ['plan_type_name', 'name', 'content'],
            widths: [50, 50, 50, 50, 50, 50],
            colComponent: {}
        },
    ],
    petinput:[
        {
            key: 'planManage',
            tab: '入库批次信息',
            url: 'plan',
            searchPlaceholder: '请输入入库批次号',
            typeComponent: [{component: '', params: {title: '预案类型管理', type: 3}}],
            theads: ['序号', '入库批次号','入库日期','产品名称','数量', '入库人', '地址', '位置', '状态','备注信息'],
            protos: ['plan_type_name', 'name', 'content'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            colComponent: {}
        },
    ],
    petProduct:[
        {
            key: 'planManage',
            tab: '加工检疫信息',
            url: 'plan',
            searchPlaceholder: '请输入批次号进行搜索',
            typeComponent: [{component: '', params: {title: '预案类型管理', type: 3}}],
            theads: ['序号', '检疫批次号','产品名称','检疫名称','检疫日期', '检疫结果', '检疫机构', '负责人', '处理方法','图片报告','备注信息'],
            protos: ['plan_type_name', 'name', 'content'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50,50],
            colComponent: {}
        },
    ],
    petSerial:[
        {
            key: 'planManage',
            tab: '加工批次信息',
            url: 'plan',
            searchPlaceholder: '请输入加工批次号',
            typeComponent: [{component: '', params: {title: '预案类型管理', type: 3}}],
            theads: ['序号', '加工批次号','加工日期','加工人','原始数量', '成品数量', '耗损率', '是否生成','备注信息'],
            protos: ['plan_type_name', 'name', 'content'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
            colComponent: {}
        },
    ],
    petBack:[
        {
            key: 'planManage',
            tab: '产品溯源码信息',
            url: 'plan',
            searchPlaceholder: '请输入溯源码搜索',
            typeComponent: [{component: '', params: {title: '预案类型管理', type: 3}}],
            theads: ['序号', '加工批次号','产品溯源码','产品名称','生产日期', 'RFID', '肢体部位', '产地','溯源次数','备注信息'],
            protos: ['plan_type_name', 'name', 'content'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50,50],
            colComponent: {}
        },
    ],
    petOutput:[
        {
            key: 'planManage',
            tab: '出库订单信息',
            url: 'plan',
            searchPlaceholder: '请输入出库订单号进行搜索',
            typeComponent: [{component: '', params: {title: '预案类型管理', type: 3}}],
            theads: ['序号', '出库叮当号','订单日期','收货单位','数量', '出库人', '收货地点', '收货人','收货电话','备注信息'],
            protos: ['plan_type_name', 'name', 'content'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50,50],
            colComponent: {}
        },
    ],
    plant:[
        {  
            key: 'plantation',
            tab: '种植场信息',
            url: 'org',
            searchPlaceholder: '请输入种植场进行搜索',
            theads: ['序号', '种植场名称', '种植面积', '负责人', '详细地址', '联系电话', '备注信息'],
            protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50],
            typeComponent: [{component: importBtn},{component:output},{component: newbuildBtn}],
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

                              }],
            typeComponent: [{component: importBtn},{component:output},{component: newbuildBtn}],
        },
        {  
            key: 'vegetableArchive',
            tab: '果蔬档案',
            url: 'org',
            searchPlaceholder: '请输入果蔬名称进行搜索',
            theads: ['序号', '果蔬名称', '育苗品种', '移栽品种', '生长周期', '基本特征描述', '已传图片', '备注信息'],
            protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50],
            operateComponent: [{component: selectSection}],
            onlyComponent:[{component:vegetableBtn}],
            typeComponent: [{component: importBtn},{component:output},{component: newbuildBtn}],
        },
        {  
            key: 'fertilizeArchive',
            tab: '肥料档案',
            url: 'org',
            searchPlaceholder: '请输入肥料名称',
            theads: ['序号', '肥料类别', '肥料名称', '用途', '包装规格', '经销商名称', '产地', '联系方式', '备注信息'],
            protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50,50],
            operateComponent: [{component: selectSection}],
            typeComponent: [{component: importBtn},{component:output},{component: newbuildBtn}],
        },
        {
            key: 'pesticideArchive',
            tab: '农药药档案',
            url: 'expert',
            searchPlaceholder: '请输入农药名称',
            theads: ['序号', '农药类别','农药名称','用途','防治对象', '毒性等级', '包装规格', '经销商名称', '产地', '联系方式', '备注'],
            protos: ['name', 'expert_area', 'org_name',  'degree', 'duty', 'title', 'address', 'zipcode', 'company', 'officephone', 'homephone', 'cellphone', 'email', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            operateComponent: [{component: selectSection}],
            typeComponent: [{component: importBtn},{component:output},{component: newbuildBtn}],
        },
        {
            key: 'expertArchive',
            tab: '专家档案',
            url: 'expert',
            searchPlaceholder: '请输入专家名称',
            theads: ['序号', '专家名称','操作模块','研究领域','级别', '年龄', '性别', '联系方式', '所属单位','备注'],
            protos: ['name', 'expert_area', 'org_name',  'degree', 'duty', 'title', 'address', 'zipcode', 'company', 'officephone', 'homephone', 'cellphone', 'email', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            operateComponent: [{component: selectSection}],
            typeComponent: [{component: importBtn},{component:output},{component: newbuildBtn}],
        },
    ], 
}