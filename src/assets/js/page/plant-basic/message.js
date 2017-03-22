
import importBtn from 'components/public/import-btn.vue'
import newbuildBtn from 'components/public/newbuild-btn.vue'
import output from 'components/public/output.vue'
import selectSection from 'components/public/select-section.vue'
import datePick from 'components/public/datePick.vue'
import vegetableBtn from 'components/public/vegetable-btn.vue'
import categoryBtn from 'components/public/categoryBtn.vue'

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
        },
    ], 
}