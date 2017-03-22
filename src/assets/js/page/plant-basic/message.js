// import TypeManage from 'components/public/type-manage.vue'
import Add from 'components/public/add.vue'
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
            colComponent: {},
            operateComponent: [{component: Add, params: {status: 1}}],
            // newFormList: [
            //     {title:'新建养殖场信息',form:[
            //         {isNull:true,lable:"养殖场名称",type:"text",placeholder:"必填",rule:""},
            //         {isNull:true,lable:"养殖面积",type:"text",placeholder:"请填写数字（必填）单位是亩",rule:""},
            //         {isNull:false,lable:"负责人",type:"text",placeholder:"",rule:""},
            //         {isNull:false,lable:"养殖畜禽种类",type:"text",placeholder:"",rule:""},
            //         {isNull:false,lable:"养殖规模",type:"text",placeholder:"",rule:""},
            //         {isNull:false,lable:"详细地址",type:"text",placeholder:"",rule:""},
            //         {isNull:false,lable:"备注信息",type:"textarea",placeholder:"",rule:""},
            //     ]}
            // ],

        },
        {
            key: 'cultivate',
            tab: '养殖区信息',
            url: 'org',
            searchPlaceholder: '请输入养殖区进行搜索',
            typeComponent: [{component: '', params: {title: '机构类别管理', type: 1}}],
            theads: ['序号', '所属养殖场', '养殖区名称', '养殖面积', '负责人', '养殖畜禽种类', '养殖规模', '详细地址', '备注信息'],
            protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50,50,50],
            colComponent: {} 
        },
        {  
            key: 'livestock',
            tab: '畜禽档案',
            url: 'org',
            searchPlaceholder: '请输入畜禽名称进行搜索',
            typeComponent: [{component: '', params: {title: '机构类别管理', type: 1}}],
            theads: ['序号', '畜禽种类', '畜禽名称', '品种描述', 'RFID位置', '已传图片', '备注信息'],
            protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50],
            colComponent: {}
        },
        {  
            key: 'feed',
            tab: '饲料档案',
            url: 'org',
            searchPlaceholder: '请输入饲料名称',
            typeComponent: [{component: '', params: {title: '机构类别管理', type: 1}}],
            theads: ['序号', '饲料类别', '饲料名称', '用途', '包装规格', '生产厂家名称', '产地', '联系方式','备注信息'],
            protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50,50,50],
            colComponent: {}
        },
        {  
            key: 'animalDrugs',
            tab: '兽药档案',
            url: 'org',
            searchPlaceholder: '请输入兽药名称',
            typeComponent: [{component: '', params: {title: '机构类别管理', type: 1}}],
            theads: ['序号', '兽药类别', '兽药名称', '用途', '包装规格', '生产厂家名称', '产地', '联系方式','备注'],
            protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50,50,50],
            colComponent: {}
        },
        {  
            key: 'operator',
            tab: '人物档案',
            url: 'org',
            searchPlaceholder: '请输入姓名进行搜索',
            typeComponent: [{component: '', params: {title: '机构类别管理', type: 1}}],
            theads: ['序号', '姓名', '身份', '性别', '年龄', '联系方式', '地址', '备注'],
            protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50,50],
            colComponent: {}
        },
        {  
            key: 'expert',
            tab: '专家档案',
            url: 'org',
            searchPlaceholder: '请输入专家名称',
            typeComponent: [{component: '', params: {title: '机构类别管理', type: 1}}],
            theads: ['序号', '专家名称', '操作模块', '研究领域', '级别', '年龄', '性别', '联系方式','所属单位','备注'],
            protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50,50,50,50],
            colComponent: {}
        },
    ],
    org:[
        {  
            key: 'plantation',
            tab: '种植场信息',
            url: 'org',
            searchPlaceholder: '请输入种植场进行搜索',
            typeComponent: [{component: '', params: {title: '机构类别管理', type: 1}}],
            theads: ['序号', '种植场名称', '种植面积', '负责人', '详细地址', '联系电话', '备注信息'],
            protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50],
            colComponent: {}
        },
        {  
            key: 'plantArea',
            tab: '种植区信息',
            url: 'org',
            searchPlaceholder: '请输入种植区进行搜索',
            typeComponent: [{component: '', params: {title: '机构类别管理', type: 1}}],
            theads: ['序号', '所属种植场', '果蔬档案', '肥料档案', '种植面积', '负责人', '详细地址', '联系电话','备注信息'],
            protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50,50],
            colComponent: {}
        },
        {  
            key: 'vegetableArchive',
            tab: '果蔬档案',
            url: 'org',
            searchPlaceholder: '请输入果蔬名称进行搜索',
            typeComponent: [{component: '', params: {title: '机构类别管理', type: 1}}],
            theads: ['序号', '果蔬名称', '育苗品种', '移栽品种', '生长周期', '基本特征描述', '已传图片', '备注信息'],
            protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50],
            colComponent: {}
        },
        {  
            key: 'fertilizeArchive',
            tab: '肥料档案',
            url: 'org',
            searchPlaceholder: '请输入肥料名称',
            typeComponent: [{component: '', params: {title: '机构类别管理', type: 1}}],
            theads: ['序号', '肥料类别', '肥料名称', '用途', '包装规格', '经销商名称', '产地', '联系方式', '备注信息'],
            protos: ['name', 'org_level', 'address', 'zipcode', 'phone', 'cellphone', 'fax', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50,50],
            colComponent: {}
        },
        {
            key: 'pesticideArchive',
            tab: '农药药档案',
            url: 'expert',
            searchPlaceholder: '请输入农药名称',
            typeComponent: [{component: '', params: {title: '专家领域管理', type: 2}}],
            theads: ['序号', '农药类别','农药名称','用途','防治对象', '毒性等级', '包装规格', '经销商名称', '产地', '联系方式', '备注'],
            protos: ['name', 'expert_area', 'org_name',  'degree', 'duty', 'title', 'address', 'zipcode', 'company', 'officephone', 'homephone', 'cellphone', 'email', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
        },
        {
            key: 'expertArchive',
            tab: '专家档案',
            url: 'expert',
            searchPlaceholder: '请输入专家名称',
            typeComponent: [{component: '', params: {title: '专家领域管理', type: 2}}],
            theads: ['序号', '专家名称','操作模块','研究领域','级别', '年龄', '性别', '联系方式', '所属单位','备注'],
            protos: ['name', 'expert_area', 'org_name',  'degree', 'duty', 'title', 'address', 'zipcode', 'company', 'officephone', 'homephone', 'cellphone', 'email', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
        },
    ], 
    cultivate:[
        {
            key: 'expertManage',
            tab: '养殖批次信息',
            url: 'expert',
            searchPlaceholder: '请输入养殖批次号进行搜索',
            typeComponent: [{component: '', params: {title: '专家领域管理', type: 2}}],
            theads: ['序号', '所属养殖区','养殖批次号','畜禽名称','密度', '数量', '养殖方式', '养殖人', '养殖日期', '已传图片', '备注信息'],
            protos: ['name', 'expert_area', 'org_name',  'degree', 'duty', 'title', 'address', 'zipcode', 'company', 'officephone', 'homephone', 'cellphone', 'email', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            // colComponent: {sex: Sex}
        },
    ],
    feed:[
        {
            key: 'expertManage',
            tab: '饲料使用管理',
            url: 'expert',
            searchPlaceholder: '请输入饲料名称进行搜索',
            typeComponent: [{component: '', params: {title: '专家领域管理', type: 2}}],
            theads: ['序号', '所属养殖区','养殖批次号','畜禽名称','饲料名称', '喂养日期', '平均喂养量', '饲料员', '指导专家', '备注信息'],
            protos: ['name', 'expert_area', 'org_name',  'degree', 'duty', 'title', 'address', 'zipcode', 'company', 'officephone', 'homephone', 'cellphone', 'email', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            // colComponent: {sex: Sex}
        },
    ],
    crew:[
        {
            key: 'expertManage',
            tab: '种植批次信息',
            url: 'expert',
            searchPlaceholder: '请输入专家姓名',
            typeComponent: [{component: '', params: {title: '专家领域管理', type: 2}}],
            theads: ['序号', '农药类别','农药名称','用途','防治对象', '毒性等级', '包装规格', '经销商名称', '产地', '联系方式', '备注'],
            protos: ['name', 'expert_area', 'org_name',  'degree', 'duty', 'title', 'address', 'zipcode', 'company', 'officephone', 'homephone', 'cellphone', 'email', 'meno'],
            widths: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            // colComponent: {sex: Sex}
        },
    ],
    condition:[
        {
            key: 'waningConditionManage',
            tab: '预警条件管理',
            url: 'waningcondition',
            searchPlaceholder: '请输入预警条件名称',
            typeComponent: [
                {component: '', params: {title: '事件等级管理', type: 5}}, 
                {component: '', params: {title: '事件类别管理', type: 6}}],
            theads: ['事件类型', '条件编码', '条件描述'],
            protos: ['type', 'code', 'description'],
            widths: [50, 80, 100],
            // colComponent: {type: EventType}
        }
    ],
    command:[
        {
            key: 'planManage',
            tab: '预案管理',
            url: 'plan',
            searchPlaceholder: '请输入预案名称',
            typeComponent: [{component: '', params: {title: '预案类型管理', type: 3}}],
            theads: ['类型', '名称', '内容'],
            protos: ['plan_type_name', 'name', 'content'],
            widths: [50, 80, 100],
            colComponent: {}
        },
        {
            key: 'informationManage',
            tab: '专题知识管理',
            url: 'information',
            searchPlaceholder: '请输入专题知识名称',
            typeComponent: [{component: '', params: {title: '专题知识类型管理', type: 4}}],
            theads: ['类型', '名称', '内容'],
            protos: ['information_type_name', 'name', 'content'],
            widths: [50, 80, 100],
            colComponent: {}
        }
    ]
}