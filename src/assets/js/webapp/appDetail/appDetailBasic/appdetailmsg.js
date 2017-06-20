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
        key: 'breed-fodderuse',
        url: 'breed-fodderuse',
        theads: ['养殖批次', '养殖日期', '畜禽名称'],
        protos: ['serial', 'date', 'beast_name'],
        widths: [26, 26, 26]
    }],
    // 养殖管理-病疫详情
    diseaseBactch: [{
        key: 'disease-rfid',
        url: 'disease-rfid',
        theads: ['RFID', '养殖批次', '养殖日期'],
        protos: ['rfid', 'serial', 'date'],
        widths: [26, 26, 26]
    }],
    // 养殖管理-检疫详情
    detectionBatch: [{
        key: 'detection-rfid',
        url: 'detection-rfid',
        theads: ['RFID', '养殖批次', '养殖日期'],
        protos: ['rfid', 'serial', 'date'],
        widths: [26, 26, 26]
    }],
    // 养殖管理-检验检测详情
    breedDetectBatch: [{
        key: 'detect-detail',
        paramsIndex: 'beast',
        url: 'detect-detail',
        theads: ['养殖批次', '养殖日期', '畜禽名称'],
        protos: ['serial', 'date', 'beast_name'],
        widths: [26, 26, 26]
    }],
    // 养殖管理-圈舍维护详情
    penBatch: [{
        settitle: '圈舍维护',
        key: 'clean-area',
        url: 'clean-area',
        theads: ['所属养殖区', '圈舍', '圈舍面积'],
        protos: ['farm_name', 'name', 'area'],
        widths: [26, 26, 26]
    }],
    // 养殖管理-出栏详情
    exportBatch: [{
        key: 'come-rfid',
        url: 'come-rfid',
        theads: ['RFID', '养殖批次', '养殖日期'],
        protos: ['rfid', 'serial', 'date'],
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
