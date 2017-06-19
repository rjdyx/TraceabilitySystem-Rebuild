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
    // 养殖管理-饲料使用详情
    breedBatch: [{
        key: 'feedBatch',
        roleName: ['basic/category', 0], // 接口权限参数 参数1为权限name 参数2为是否区分运营者 （默认0）
        url: 'category',
        theads: ['养殖批次', '养殖日期', '养殖人'],
        protos: ['name', 'type', 'name'],
        widths: [26, 26, 26],
        selectSearch: ['type'],
        changeDataArr: [{type: { 'operate': '操作人员', 'expert': '专家', 'product': '产品', 'supplier': '供货商', 'client': '客户', 'fodder': '饲料', 'addition': '饲料添加剂', 'drug': '兽药', 'beast': '畜禽', 'plant': '果蔬', 'manure': '肥料', 'medicament': '农药' }}]
    }],
    // 养殖管理-病疫详情
    plagueBactch: [{
        key: 'operate',
        roleName: ['basic/operate', 0],
        url: 'operate',
        selectSearch: ['operates.category_id'],
        selectValueId: [['category_id', 'category_name', true]],
        selectDefault: [{value: '', label: '选择操作人类型'}],
        changeDataArr: [{sex: {0: '男', 1: '女'}}, {domain: {plant: '种植管理', beast: '养殖管理', packp: '果蔬加工管理', packb: '畜禽加工管理', sell: '销售管理', delivery: '物流管理', all: '公共模块'}}],
        theads: ['RFID', '养殖批次', '养殖圈舍'],
        protos: ['category_name', 'domain', 'name'],
        widths: [26, 26, 26]
    }],
    // 养殖管理-检疫详情
    quarantineBatch: [{
        key: 'expert',
        roleName: ['basic/expert', 0],
        url: 'expert',
        selectSearch: ['experts.category_id'],
        selectValueId: [['category_id', 'category_name', true]],
        changeDataArr: [{sex: {0: '男', 1: '女'}}, {domain: {plant: '种植管理', beast: '养殖管理', all: '公共模块'}}],
        selectDefault: [{value: '', label: '选择专家类型'}],
        theads: ['RFID', '养殖批次', '养殖圈舍'],
        protos: ['category_name', 'domain', 'name'],
        widths: [26, 26, 26]
    }],
    // 养殖管理-检验检测详情
    detectBatch: [{
        key: 'client',
        roleName: ['basic/client', 0],
        url: 'client',
        selectSearch: ['clients.category_id'],
        selectValueId: [['category_id', 'category_name', true]],
        selectDefault: [{value: '', label: '选择客户类型'}],
        theads: ['养殖批次', '养殖日期', '养殖人'],
        protos: ['category_name', 'name', 'phone'],
        widths: [26, 26, 26]
    }],
    // 养殖管理-圈舍维护详情
    penBatch: [{
        settitle: '圈舍维护',
        key: 'supplier',
        roleName: ['basic/supplier', 0],
        url: 'supplier',
        selectSearch: ['suppliers.category_id'],
        selectValueId: [['category_id', 'category_name', true]],
        selectDefault: [{value: '', label: '选择供货商类型'}],
        theads: ['养殖批次', '养殖圈舍', '养殖人'],
        protos: ['category_name', 'name', 'phone'],
        widths: [26, 26, 26]
    }],
    // 养殖管理-出栏详情
    exportBatch: [{
        key: 'product',
        roleName: ['basic/product', 0],
        url: 'product',
        selectValueId: [['category_id', 'category_name', true]],
        selectDefault: [{value: '', label: '选择产品类型'}],
        selectSearch: ['products.category_id'],
        changeDataArr: [{domain: {packp: '果蔬加工管理', packb: '畜禽加工管理', sell: '销售管理', all: '公共模块'}}],
        theads: ['RFID', '养殖批次', '养殖圈舍'],
        protos: ['category_name', 'domain', 'name', 'enforce_standard', 'marque', 'description', 'specification', 'expiration_date', 'edible_method', 'storage_means', 'burdening_info', 'img', 'memo'],
        widths: [26, 26, 26]
    }],
    // 销售管理-销售订单管理详情
    saleBatch: [{
        key: 'plan-beast',
        roleName: ['beast/plan', 0],
        url: 'plan',
        paramsIndex: 'beast',
         // 链接批次信息模块数据的桥（养殖批次详情）
        changeDataArr: [{type: { 'fodderuse': '饲养', 'disease': '病疫', 'detection': '检疫', 'detects': '检测', 'clean': '圈舍维护', 'dispose': '无害化', 'come': '出栏' }}],
        search: ['query_text', 'type'],
        theads: ['产品溯源码', '加工日期', '加工人'],
        protos: ['serial', 'date', 'type'],
        widths: [26, 26, 26]
    }]
}
