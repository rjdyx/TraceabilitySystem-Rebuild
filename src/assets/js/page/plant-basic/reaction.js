// import importBtn from '../../components/public/import-btn.vue'
// import newbuildBtn from '../../components/public/newbuild-btn.vue'
// import output from '../../components/public/output.vue'
// import selectSection from '../../components/public/select-section.vue'
// import datePick from '../../components/public/datePick.vue'

// import categoryBtn from '../../components/public/categoryBtn.vue'
// import inputText from '../../components/public/inputText.vue'
// import inputTextArea from '../../components/public/inputTextArea.vue'
// import inputSelect from '../../components/public/inputSelect.vue'
// import inputDate from '../../components/public/inputDate.vue'
// import inputFile from '../../components/public/inputFile.vue'
// import inputTextSelect from '../../components/public/inputTextSelect.vue'
// export default {
//   baseManage: [{
//     settitle: '基础信息管理',
//     key: 'cultivation',
//     tab: '畜禽档案',
//     url: 'org',
//     searchPlaceholder: '请输入养殖场进行搜索',
//     search: ['query_text', 'name'],
//     theads: ['畜禽名称', '描述', '耳标位置', '图片', '备注信息'],
//     protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
//     widths: [50, 50, 50, 50, 50, 50],
//     typeComponent: [{
//       component: importBtn
//     },
//     {
//       component: output
//     },
//     {
//       component: newbuildBtn
//     }],
//     newComponent: [{
//       tab: '新建畜禽档案',
//       components: [{
//         name: 'animalName',
//         type: 'text',
//         component: inputText,
//         isNull: false,
//         label: '畜禽名称',
//         placeholder: '必填',
//         rule: 'required'
//       },
//       {
//         name: 'varieties',
//         type: 'text',
//         component: inputText,
//         isNull: true,
//         label: '品种描述',
//         placeholder: '请填写数字（必填）单位是亩',
//         rule: 'numeric'
//       },
//       {
//         name: 'RFID',
//         type: 'text',
//         component: inputText,
//         isNull: true,
//         label: 'RFID位置',
//         placeholder: '',
//         rule: ''
//       },
//       {
//         name: 'remarkInfo',
//         type: 'textarea',
//         component: inputTextArea,
//         isNull: true,
//         label: '备注信息',
//         placeholder: '',
//         rule: ''
//       },
//       {
//         name: 'file',
//         type: 'file',
//         component: inputFile,
//         isNull: true,
//         label: '',
//         placeholder: '',
//         rule: ''
//       }
//       ]
//     }],
//     listComponent: [{
//       components: [{
//         type: 'select',
//         component: selectSection,
//         options: [{
//           value: '',
//           label: '产品品牌'
//         },
//         {
//           value: '康乐牌',
//           label: '康乐牌'
//         }]
//       }]
//     }]
//   },
//   {
//     settitle: '养殖基础信息管理',
//     key: 'cultivate',
//     tab: '饲料档案',
//     url: 'org',
//     searchPlaceholder: '请输入养殖区进行搜索',
//     search: ['query_text', 'name'],
//     theads: ['分类', '名称', '用途', '包装规格', '产地', '生产厂家名称', '联系方式', '图片', '备注信息'],
//     protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
//     widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
//     typeComponent: [{
//       component: importBtn
//     },
//     {
//       component: output
//     },
//     {
//       component: newbuildBtn
//     }],
//     newComponent: [{
//       tab: '新建饲料档案',
//       components: [{
//         name: 'fodderClass',
//         type: 'select',
//         component: inputSelect,
//         isNull: false,
//         label: '饲料类别',
//         placeholder: '请选择类别',
//         rule: 'required',
//         options: [{
//           value: '',
//           label: '请选择类别'
//         },
//         {
//           value: '粗粮类',
//           label: '粗粮类'
//         },
//         {
//           value: '维生素类',
//           label: '维生素类'
//         }]
//       },
//       {
//         name: 'fodderName',
//         type: 'text',
//         component: inputText,
//         isNull: false,
//         label: '饲料名称',
//         placeholder: '必填',
//         rule: 'required'
//       },
//       {
//         name: 'use',
//         type: 'text',
//         component: inputText,
//         isNull: true,
//         label: '用途',
//         placeholder: '',
//         rule: ''
//       },
//       {
//         name: 'packingSize',
//         type: 'text',
//         component: inputText,
//         isNull: true,
//         label: '包装规格',
//         placeholder: '',
//         rule: ''
//       },
//       {
//         name: 'manufacturerName',
//         type: 'text',
//         component: inputText,
//         isNull: true,
//         label: '生产厂家名称',
//         placeholder: '',
//         rule: ''
//       },
//       {
//         name: 'origin',
//         type: 'text',
//         component: inputText,
//         isNull: true,
//         label: '产地',
//         placeholder: '',
//         rule: ''
//       },
//       {
//         name: 'contactWay',
//         type: 'text',
//         component: inputText,
//         isNull: true,
//         label: '联系方式',
//         placeholder: '请输入11位的手机号（固话用-隔开）',
//         rule: 'phones'
//       },
//       {
//         name: 'remarkInfo',
//         type: 'textarea',
//         component: inputTextArea,
//         isNull: true,
//         label: '备注信息',
//         placeholder: '',
//         rule: ''
//       }
//       ]
//     }],

//     listComponent: [{
//       components: [{
//         type: 'select',
//         component: selectSection,
//         options: [{
//           value: '',
//           label: '产品品牌'
//         },
//         {
//           value: '康乐牌',
//           label: '康乐牌'
//         }]
//       }]
//     }]
//   },
//   {
//     settitle: '养殖基础信息管理',
//     key: 'livestock',
//     tab: '兽药档案',
//     url: 'org',
//     searchPlaceholder: '请输入畜禽名称进行搜索',
//     search: ['query_text', 'name'],
//     theads: ['分类', '名称', '用途', '包装规格', '产地', '生产厂家名称', '联系方式', '图片', '备注信息'],
//     protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
//     widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
//     typeComponent: [{
//       component: importBtn
//     },
//     {
//       component: output
//     },
//     {
//       component: newbuildBtn
//     }],
//     newComponent: [{
//       tab: '新建农药档案',
//       components: [{
//         type: 'select',
//         component: inputSelect,
//         isNull: false,
//         label: '畜药类别',
//         placeholder: '请选择类别',
//         rule: '',
//         options: [{
//           value: '',
//           label: '请选择类别'
//         },
//         {
//           value: '疾病防治药',
//           label: '疾病防治药'
//         }
//         ]
//       },
//       {
//         type: 'text',
//         component: inputText,
//         isNull: false,
//         label: '兽药名称',
//         placeholder: '必填',
//         rule: ''
//       },
//       {
//         type: 'text',
//         component: inputText,
//         isNull: true,
//         label: '用途',
//         placeholder: '',
//         rule: ''
//       },
//       {
//         type: 'text',
//         component: inputText,
//         isNull: true,
//         label: '包装规格',
//         placeholder: '',
//         rule: ''
//       },
//       {
//         type: 'text',
//         component: inputText,
//         isNull: true,
//         label: '生产厂家名称',
//         placeholder: '',
//         rule: ''
//       },
//       {
//         type: 'text',
//         component: inputText,
//         isNull: true,
//         label: '产地',
//         placeholder: '',
//         rule: ''
//       },
//       {
//         type: 'text',
//         component: inputText,
//         isNull: true,
//         label: '联系方式',
//         placeholder: '请输入11位的手机号（固话用-隔开）',
//         rule: ''
//       },
//       {
//         type: 'textarea',
//         component: inputTextArea,
//         isNull: true,
//         label: '备注信息',
//         placeholder: '',
//         rule: ''
//       }
//       ]
//     }],
//     listComponent: []
//   },
//   {
//     settitle: '养殖基础信息管理',
//     key: 'feed',
//     tab: '饲料档案',
//     url: 'org',
//     searchPlaceholder: '请输入饲料名称',
//     search: ['query_text', 'name'],
//     theads: ['饲料类别', '饲料名称', '用途', '包装规格', '生产厂家名称', '产地', '联系方式', '备注信息'],
//     protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
//     widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
//     typeComponent: [{
//       component: importBtn
//     },
//     {
//       component: output
//     },
//     {
//       component: newbuildBtn
//     }],
//     newComponent: [{
//       tab: '新建饲料档案',
//       components: [{
//         type: 'select',
//         component: inputSelect,
//         isNull: false,
//         label: '饲料类别',
//         placeholder: '请选择类别',
//         rule: '',
//         options: [{
//           value: '',
//           label: '请选择类别'
//         },
//         {
//           value: '粗粮类',
//           label: '粗粮类'
//         },
//         {
//           value: '维生素类',
//           label: '维生素类'
//         }]
//       },
//       {
//         type: 'text',
//         component: inputText,
//         isNull: false,
//         label: '饲料名称',
//         placeholder: '必填',
//         rule: ''
//       },
//       {
//         type: 'text',
//         component: inputText,
//         isNull: true,
//         label: '用途',
//         placeholder: '',
//         rule: ''
//       },
//       {
//         type: 'text',
//         component: inputText,
//         isNull: true,
//         label: '包装规格',
//         placeholder: '',
//         rule: ''
//       },
//       {
//         type: 'text',
//         component: inputText,
//         isNull: true,
//         label: '生产厂家名称',
//         placeholder: '',
//         rule: ''
//       },
//       {
//         type: 'text',
//         component: inputText,
//         isNull: true,
//         label: '产地',
//         placeholder: '',
//         rule: ''
//       },
//       {
//         type: 'text',
//         component: inputText,
//         isNull: true,
//         label: '联系方式',
//         placeholder: '请输入11位的手机号（固话用-隔开）',
//         rule: ''
//       },
//       {
//         type: 'textarea',
//         component: inputTextArea,
//         isNull: true,
//         label: '备注信息',
//         placeholder: '',
//         rule: ''
//       }
//       ]
//     }],
//     listComponent: []
//   },
//   {
//     settitle: '养殖基础信息管理',
//     key: 'animalDrugs',
//     tab: '兽药档案',
//     url: 'org',
//     searchPlaceholder: '请输入兽药名称',
//     search: ['query_text', 'name'],
//     theads: ['兽药类别', '兽药名称', '用途', '包装规格', '生产厂家名称', '产地', '联系方式', '备注'],
//     protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
//     widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
//     typeComponent: [{
//       component: importBtn
//     },
//     {
//       component: output
//     },
//     {
//       component: newbuildBtn
//     }],
//     newComponent: [{
//       tab: '新建农药档案',
//       components: [{
//         type: 'select',
//         component: inputSelect,
//         isNull: false,
//         label: '畜药类别',
//         placeholder: '请选择类别',
//         rule: '',
//         options: [{
//           value: '',
//           label: '请选择类别'
//         },
//         {
//           value: '疾病防治药',
//           label: '疾病防治药'
//         }
//         ]
//       },
//       {
//         type: 'text',
//         component: inputText,
//         isNull: false,
//         label: '兽药名称',
//         placeholder: '必填',
//         rule: ''
//       },
//       {
//         type: 'text',
//         component: inputText,
//         isNull: true,
//         label: '用途',
//         placeholder: '',
//         rule: ''
//       },
//       {
//         type: 'text',
//         component: inputText,
//         isNull: true,
//         label: '包装规格',
//         placeholder: '',
//         rule: ''
//       },
//       {
//         type: 'text',
//         component: inputText,
//         isNull: true,
//         label: '生产厂家名称',
//         placeholder: '',
//         rule: ''
//       },
//       {
//         type: 'text',
//         component: inputText,
//         isNull: true,
//         label: '产地',
//         placeholder: '',
//         rule: ''
//       },
//       {
//         type: 'text',
//         component: inputText,
//         isNull: true,
//         label: '联系方式',
//         placeholder: '请输入11位的手机号（固话用-隔开）',
//         rule: ''
//       },
//       {
//         type: 'textarea',
//         component: inputTextArea,
//         isNull: true,
//         label: '备注信息',
//         placeholder: '',
//         rule: ''
//       }
//       ]
//     }],
//     listComponent: []
//   },
//   {
//     settitle: '养殖基础信息管理',
//     key: 'operator',
//     tab: '人物档案',
//     url: 'org',
//     searchPlaceholder: '请输入姓名进行搜索',
//     search: ['query_text', 'name'],
//     theads: ['姓名', '身份', '性别', '年龄', '联系方式', '地址', '备注'],
//     protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
//     widths: [50, 50, 50, 50, 50, 50, 50, 50],
//     typeComponent: [{
//       component: importBtn
//     },
//     {
//       component: output
//     },
//     {
//       component: newbuildBtn
//     }],
//     newComponent: [{
//       tab: '新建人物档案',
//       components: [{
//         type: 'text',
//         component: inputText,
//         isNull: false,
//         label: '姓名',
//         placeholder: '必填',
//         rule: ''
//       },
//       {
//         type: 'select',
//         component: inputSelect,
//         isNull: false,
//         label: '性别',
//         placeholder: '请选择性别',
//         rule: '',
//         options: [{
//           value: '',
//           label: '男'
//         },
//         {
//           value: '女',
//           label: '女'
//         }
//         ]
//       },
//       {
//         type: 'text',
//         component: inputText,
//         isNull: true,
//         label: '年龄',
//         placeholder: '必填',
//         rule: ''
//       },
//       {
//         type: 'text',
//         component: inputText,
//         isNull: true,
//         label: '身份',
//         placeholder: '如后勤主管',
//         rule: ''
//       },
//       {
//         type: 'text',
//         component: inputText,
//         isNull: false,
//         label: '联系方式',
//         placeholder: '',
//         rule: ''
//       },
//       {
//         type: 'text',
//         component: inputText,
//         isNull: true,
//         label: '联系地址',
//         placeholder: '请输入11位的手机号（固话用-隔开）',
//         rule: ''
//       },
//       {
//         type: 'text',
//         component: inputText,
//         isNull: true,
//         label: '备注信息',
//         placeholder: '',
//         rule: ''
//       }
//       ]
//     }],
//     listComponent: []
//   },
//   {
//     settitle: '养殖基础信息管理',
//     key: 'expert',
//     tab: '专家档案',
//     url: 'org',
//     searchPlaceholder: '请输入专家名称',
//     search: ['query_text', 'name'],
//     theads: ['专家名称', '操作模块', '研究领域', '级别', '年龄', '性别', '联系方式', '所属单位', '备注'],
//     protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
//     widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
//     typeComponent: [{
//       component: importBtn
//     },
//     {
//       component: output
//     },
//     {
//       component: newbuildBtn
//     }],
//     newComponent: [{
//       tab: '新建人物档案',
//       components: [{
//         type: 'select',
//         component: inputSelect,
//         isNull: false,
//         label: '操作模块',
//         placeholder: '饲料使用',
//         rule: '',
//         options: [{
//           value: '',
//           label: '饲料使用'
//         },
//         {
//           value: '畜禽病疫',
//           label: '畜禽病疫'
//         },
//         {
//           value: '畜禽检疫',
//           label: '畜禽检疫'
//         },
//         {
//           value: '畜禽圈舍',
//           label: '畜禽圈舍'
//         }
//         ]
//       },
//       {
//         type: 'text',
//         component: inputText,
//         isNull: false,
//         label: '专家名称',
//         placeholder: '必填',
//         rule: ''
//       },
//       {
//         type: 'text',
//         component: inputText,
//         isNull: false,
//         label: '研究领域',
//         placeholder: '必填',
//         rule: ''
//       },
//       {
//         type: 'text',
//         component: inputText,
//         isNull: false,
//         label: '级别',
//         placeholder: '必填',
//         rule: ''
//       },
//       {
//         type: 'select',
//         component: inputSelect,
//         isNull: false,
//         label: '性别',
//         placeholder: '请选择性别',
//         rule: '',
//         options: [{
//           value: '',
//           label: '男'
//         },
//         {
//           value: '女',
//           label: '女'
//         }
//         ]
//       },
//       {
//         type: 'text',
//         component: inputText,
//         isNull: false,
//         label: '年龄',
//         placeholder: '必填',
//         rule: ''
//       },
//       {
//         type: 'text',
//         component: inputText,
//         isNull: true,
//         label: '所属单位',
//         placeholder: '',
//         rule: ''
//       },
//       {
//         type: 'text',
//         component: inputText,
//         isNull: false,
//         label: '联系方式',
//         placeholder: '请输入11位的手机号（固话用-隔开）',
//         rule: ''
//       },
//       {
//         type: 'text',
//         component: inputText,
//         isNull: true,
//         label: '备注信息',
//         placeholder: '',
//         rule: ''
//       }
//       ]
//     }],
//     listComponent: [{
//       components: [{
//         type: 'select',
//         component: selectSection,
//         options: [{
//           value: '',
//           label: '产品品牌'
//         },
//         {
//           value: '康乐牌',
//           label: '康乐牌'
//         }]
//       }]
//     }]
//   }
//   ],
//   serialManage: [{
//     settitle: '养殖批次管理',
//     key: 'expertManage',
//     tab: '养殖批次信息',
//     url: 'expert',
//     searchPlaceholder: '请输入养殖批次号进行搜索',
//     search: ['query_text', 'name'],
//     theads: ['批次号', '养殖区', '畜禽', '日期', '数量', '面积', '养殖方式', '养殖人', '备注', '图片状态', '状态'],
//     protos: ['name', 'expert_area', 'org_name', 'degree', 'duty', 'title', 'address', 'zipcode', 'company', 'officephone', 'homephone', 'cellphone', 'email', 'meno'],
//     widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
//     typeComponent: [{
//       component: output
//     },
//     {
//       component: newbuildBtn
//     }],
//     newComponent: [{
//       tab: '新建养殖批次',
//       components: [{
//         type: 'select',
//         component: inputSelect,
//         isNull: false,
//         label: '所属养殖区',
//         placeholder: '',
//         rule: '',
//         options: [{
//           value: '',
//           label: '示范A区'
//         }
//         ]
//       },
//       {
//         type: 'select',
//         component: inputSelect,
//         isNull: false,
//         label: '畜禽名称',
//         placeholder: '',
//         rule: '',
//         options: [{
//           value: '',
//           label: '黑猪一号'
//         }
//         ]
//       },
//       {
//         type: 'text',
//         component: inputText,
//         isNull: true,
//         label: '密度',
//         placeholder: '',
//         rule: ''
//       },
//       {
//         type: 'text',
//         component: inputText,
//         isNull: true,
//         label: '养殖方式',
//         placeholder: '',
//         rule: ''
//       },
//       {
//         type: 'date',
//         component: inputDate,
//         isNull: false,
//         label: '养殖日期',
//         placeholder: '',
//         rule: ''
//       },
//       {
//         type: 'select',
//         component: inputSelect,
//         isNull: false,
//         label: '养殖人',
//         placeholder: '请选择操作人',
//         rule: '',
//         options: [{
//           value: '',
//           label: '请选择操作人'
//         },
//         {
//           value: '郑刚',
//           label: '郑刚'
//         }
//         ]
//       },
//       {
//         type: 'textarea',
//         component: inputTextArea,
//         isNull: true,
//         label: '备注信息',
//         placeholder: '',
//         rule: ''
//       }
//       ]
//     }],
//     listComponent: [{
//       components: [{
//         type: 'select',
//         component: selectSection,
//         options: [{
//           value: '',
//           label: '产品品牌'
//         },
//         {
//           value: '康乐牌',
//           label: '康乐牌'
//         }]
//       },
//       {
//         type: 'select',
//         component: selectSection,
//         options: [{
//           value: '',
//           label: '产品品牌'
//         },
//         {
//           value: '康乐牌',
//           label: '康乐牌'
//         }]
//       },
//       {
//         type: 'select',
//         component: selectSection,
//         options: [{
//           value: '',
//           label: '产品品牌'
//         },
//         {
//           value: '康乐牌',
//           label: '康乐牌'
//         }]
//       },
//       {
//         type: 'date',
//         component: 'datePick'
//       }]
//     }]
//   }
//   ],
//   feedManage: [{
//     settitle: '饲料使用管理',
//     key: 'expertManage',
//     tab: '饲料使用信息',
//     url: 'expert',
//     searchPlaceholder: '请输入饲料名称进行搜索',
//     search: ['query_text', 'name'],
//     theads: ['使用日期', '饲料', '喂养方式', '专家', '操作人员', '喂养量', '类型状态', '备注'],
//     protos: ['name', 'expert_area', 'org_name', 'degree', 'duty', 'title', 'address', 'zipcode', 'company', 'officephone', 'homephone', 'cellphone', 'email', 'meno'],
//     widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
//     typeComponent: [{
//       component: output
//     },
//     {
//       component: newbuildBtn
//     }],
//     newComponent: [{
//       tab: '饲料使用管理',
//       components: [{
//         type: 'select',
//         component: inputSelect,
//         isNull: false,
//         label: '饲料名称',
//         placeholder: '饲料名称',
//         rule: '',
//         options: [{
//           value: '',
//           label: '饲料名称'
//         },
//         {
//           value: '红苕汤羹',
//           label: '红苕汤羹'
//         },
//         {
//           value: '麦麸子',
//           label: '麦麸子'
//         },
//         {
//           value: '瓜果蔬菜',
//           label: '瓜果蔬菜'
//         },
//         {
//           value: '玉米面',
//           label: '玉米面'
//         }
//         ]
//       },
//       {
//         type: 'text',
//         component: inputText,
//         isNull: true,
//         label: '喂养方式',
//         placeholder: '请填写数字（必填）单位是亩',
//         rule: ''
//       },
//       {
//         type: 'textselect',
//         component: inputTextSelect,
//         isNull: false,
//         label: '平均喂养量',
//         placeholder: '',
//         rule: '',
//         options: [{
//           value: '',
//           label: 'kg/只'
//         },
//         {
//           value: 'kg/头',
//           label: 'kg/头'
//         },
//         {
//           value: 'kg/条',
//           label: 'kg/条'
//         }
//         ]
//       },
//       {
//         type: 'select',
//         component: inputSelect,
//         isNull: true,
//         label: '指导专家',
//         placeholder: '',
//         rule: '',
//         options: [{
//           value: '',
//           label: '无'
//         },
//         {
//           value: '洪其里',
//           label: '洪其里'
//         }
//         ]
//       },
//       {
//         type: 'select',
//         component: inputSelect,
//         isNull: false,
//         label: '饲养员',
//         placeholder: '请选择饲养员',
//         rule: '',
//         options: [{
//           value: '',
//           label: '请选择饲养员'
//         },
//         {
//           value: '郑刚',
//           label: '郑刚'
//         }
//         ]
//       },
//       {
//         type: 'date',
//         component: inputDate,
//         isNull: true,
//         label: '喂养日期',
//         placeholder: '',
//         rule: ''
//       },
//       {
//         type: 'textarea',
//         component: inputTextArea,
//         isNull: true,
//         label: '备注信息',
//         placeholder: '',
//         rule: ''
//       }
//       ]
//     },
//     {
//       tab: '选择养殖批次',
//       components: [{
//         type: 'select',
//         component: inputSelect,
//         isNull: false,
//         label: '',
//         placeholder: '请选择养殖区',
//         rule: '',
//         options: [{
//           value: '',
//           label: '示范A区'
//         }
//         ]
//       }
//       ]
//     }],
//     listComponent: []
//   }
//   ],
//   plagueManage: [{
//     settitle: '病疫管理',
//     key: 'expertManage',
//     tab: '病疫信息',
//     url: 'expert',
//     searchPlaceholder: '请输入兽药名称',
//     search: ['query_text', 'name'],
//     theads: ['用药日期', '病情描述', '兽药', '专家', '操作人员', '用药量', '治疗方式', '备注'],
//     protos: ['name', 'expert_area', 'org_name', 'degree', 'duty', 'title', 'address', 'zipcode', 'company', 'officephone', 'homephone', 'cellphone', 'email', 'meno'],
//     widths: [50, 50, 50, 50, 50, 50, 50, 50, 50],
//     typeComponent: [{
//       component: output
//     },
//     {
//       component: newbuildBtn
//     }],
//     newComponent: [{
//       tab: '新建病疫情信息',
//       components: [{
//         type: 'select',
//         component: inputSelect,
//         isNull: false,
//         label: '兽药分类',
//         placeholder: '请选择类别',
//         rule: '',
//         options: [{
//           value: '',
//           label: '请选择类别'
//         },
//         {
//           value: '疾病防治药',
//           label: '疾病防治药'
//         },
//         {
//           value: '传染病防治药',
//           label: '传染病防治药'
//         },
//         {
//           value: '寄生虫病防治药',
//           label: '寄生虫病防治药'
//         },
//         {
//           value: '促生长药',
//           label: '促生长药'
//         },
//         {
//           value: '其他类',
//           label: '其他类'
//         }
//         ]
//       },
//       {
//         type: 'select',
//         component: inputSelect,
//         isNull: false,
//         label: '兽药名称',
//         placeholder: '',
//         rule: '',
//         options: [{
//           value: '',
//           label: '无'
//         }
//         ]
//       },
//       {
//         type: 'date',
//         component: inputDate,
//         isNull: false,
//         label: '兽药日期',
//         placeholder: '',
//         rule: ''
//       },
//       {
//         type: 'textselect',
//         component: inputTextSelect,
//         isNull: false,
//         label: '平均施药量',
//         placeholder: '请输入正确的数字（必填）',
//         rule: '',
//         options: [{
//           value: '',
//           label: 'kg/只'
//         },
//         {
//           value: 'kg/头',
//           label: 'kg/头'
//         },
//         {
//           value: 'kg/条',
//           label: 'kg/条'
//         }
//         ]
//       },
//       {
//         type: 'text',
//         component: inputText,
//         isNull: true,
//         label: '施药方式',
//         placeholder: '',
//         rule: ''
//       },
//       {
//         type: 'select',
//         component: inputSelect,
//         isNull: false,
//         label: '施药人',
//         placeholder: '请选择操作人',
//         rule: '',
//         options: [{
//           value: '',
//           label: '请选择操作人'
//         },
//         {
//           value: '郑刚',
//           label: '郑刚'
//         }
//         ]
//       },
//       {
//         type: 'select',
//         component: inputSelect,
//         isNull: true,
//         label: '指导专家',
//         placeholder: '',
//         rule: '',
//         options: [{
//           value: '',
//           label: '无'
//         }
//         ]
//       },
//       {
//         type: 'text',
//         component: inputText,
//         isNull: true,
//         label: '病情描述',
//         placeholder: '',
//         rule: ''
//       },
//       {
//         type: 'textarea',
//         component: inputTextArea,
//         isNull: true,
//         label: '备注信息',
//         placeholder: '',
//         rule: ''
//       }
//       ]
//     }
//     ],
//     listComponent: []
//   }
//   ],
//   quarantineManage: [{
//     settitle: '检疫管理',
//     key: 'waningConditionManage',
//     tab: '检疫信息',
//     url: 'waningcondition',
//     searchPlaceholder: '请输入检测项目名称进行',
//     theads: ['检测日期', '检测项目名称', '专家', '操作人员', '检测内容', '检测结果', '审批人', '检测报告图片', '备注'],
//     protos: ['type', 'code', 'description'],
//     widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
//     typeComponent: [{
//       component: output
//     },
//     {
//       component: newbuildBtn
//     }],
//     newComponent: [{
//       tab: '新建检疫信息',
//       components: [{
//         type: 'text',
//         component: inputText,
//         isNull: false,
//         label: '检测机构',
//         placeholder: '',
//         rule: ''
//       },
//       {
//         type: 'text',
//         component: inputText,
//         isNull: false,
//         label: '检测项目名称',
//         placeholder: '',
//         rule: ''
//       },
//       {
//         type: 'text',
//         component: inputText,
//         isNull: true,
//         label: '检测内容',
//         placeholder: '',
//         rule: ''
//       },
//       {
//         type: 'date',
//         component: inputDate,
//         isNull: false,
//         label: '检测日期',
//         placeholder: '',
//         rule: ''
//       },
//       {
//         type: 'select',
//         component: inputSelect,
//         isNull: true,
//         label: '检测结果',
//         placeholder: '',
//         rule: '',
//         options: [{
//           value: '',
//           label: '合格'
//         },
//         {
//           value: '不合格',
//           label: '不合格'
//         }
//         ]
//       },
//       {
//         type: 'text',
//         component: inputText,
//         isNull: true,
//         label: '审批人',
//         placeholder: '',
//         rule: ''
//       },
//       {
//         type: 'select',
//         component: inputSelect,
//         isNull: false,
//         label: '经手人',
//         placeholder: '请选择经手人',
//         rule: '',
//         options: [{
//           value: '',
//           label: '请选择经手人'
//         },
//         {
//           value: '郑刚',
//           label: '郑刚'
//         }
//         ]
//       },
//       {
//         type: 'select',
//         component: inputSelect,
//         isNull: true,
//         label: '指导专家',
//         placeholder: '无',
//         rule: '',
//         options: [{
//           value: '',
//           label: '无'
//         }
//         ]
//       },
//       {
//         type: 'textarea',
//         component: inputTextArea,
//         isNull: true,
//         label: '备注信息',
//         placeholder: '',
//         rule: ''
//       }
//       ]
//     }
//     ],
//     listComponent: []
//   }],
//   innocuityManage: [{
//     settitle: '无害化管理',
//     key: 'waningConditionManage',
//     tab: '无害化信息',
//     url: 'waningcondition',
//     searchPlaceholder: '请输入检测项目名称进行',
//     theads: ['无害化批次号', '操作日期', '操作内容', '实行原因', '指导专家', '备注信息'],
//     protos: ['type', 'code', 'description'],
//     widths: [50, 50, 50, 50, 50, 50, 50],
//     typeComponent: [{
//       component: output
//     },
//     {
//       component: newbuildBtn
//     }],
//     newComponent: [{
//       tab: '新建养殖场信息',
//       components: [{
//         component: inputText,
//         isNull: false,
//         label: '养殖场名称',
//         placeholder: '必填',
//         rule: ''
//       },
//       {
//         component: inputText,
//         isNull: false,
//         label: '养殖面积',
//         placeholder: '请填写数字（必填）单位是亩',
//         rule: ''
//       },
//       {
//         component: inputText,
//         isNull: true,
//         label: '负责人',
//         placeholder: '',
//         rule: ''
//       },
//       {
//         component: inputText,
//         isNull: true,
//         label: '养殖畜禽种类',
//         placeholder: '',
//         rule: ''
//       }
//       ]
//     }],
//     listComponent: []
//   }

//   ],
//   slaughterManage: [{
//     settitle: '出栏管理',
//     key: 'waningConditionManage',
//     tab: '出栏信息',
//     url: 'waningcondition',
//     searchPlaceholder: '请输入检测项目名称进行',
//     theads: ['出栏日期', '批次号', '出栏数量', '操作人员', '状态', '备注'],
//     protos: ['type', 'code', 'description'],
//     widths: [50, 50, 50, 50, 50, 50, 50],
//     typeComponent: [{
//       component: output
//     },
//     {
//       component: newbuildBtn
//     }],
//     newComponent: [{
//       tab: '新建出栏信息',
//       components: [{
//         type: 'date',
//         component: inputDate,
//         isNull: false,
//         label: '出栏日期',
//         placeholder: '',
//         rule: ''
//       },
//       {
//         type: 'select',
//         component: inputSelect,
//         isNull: false,
//         label: '出栏人',
//         placeholder: '请选择人物',
//         rule: '',
//         options: [{
//           value: '',
//           label: '请选择经手人'
//         },
//         {
//           value: '郑刚',
//           label: '郑刚'
//         }
//         ]
//       },
//       {
//         type: 'textarea',
//         component: inputTextArea,
//         isNull: true,
//         label: '备注信息',
//         placeholder: '',
//         rule: ''
//       }
//       ]
//     }
//     ],
//     listComponent: []
//   }
//   ],
//   planManage: [{
//     settitle: '养殖计划管理',
//     key: 'waningConditionManage',
//     tab: '养殖计划信息',
//     url: 'waningcondition',
//     searchPlaceholder: '请输入检测项目名称进行',
//     theads: [ '序号', '批次号', '计划日期', '操作类型', '安排人员', '计划内容', '操作用户', '备注' ],
//     protos: ['type', 'code', 'description'],
//     widths: [50, 50, 50, 50, 50, 50, 50],
//     typeComponent: [{
//       component: output
//     },
//     {
//       component: newbuildBtn
//     }],
//     listComponent: []
//   }]
// }
