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
        key: 'breed-detect',
        paramsIndex: 'beast',
        delType: 'beast',
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
    // 种植关联-施肥详情
    fertilizeBatch: [{
        settitle: '施肥详情',
        key: 'cultivate-fertilize',
        url: 'cultivate-fertilize',
        theads: ['种植批次号', '种植日期', '种植果蔬'],
        protos: ['serial', 'date', 'plant_name'],
        widths: [26, 26, 26]
    }],
    // 种植关联-施药详情
    sprayBatch: [{
        settitle: '施药详情',
        key: 'cultivate-spray',
        url: 'cultivate-spray',
        theads: ['种植批次号', '种植日期', '种植果蔬'],
        protos: ['serial', 'date', 'plant_name'],
        widths: [26, 26, 26]
    }],
    // 种植管理-检验检测详情
    cultivateDetectBatch: [{
        key: 'cultivate-detect',
        delType: 'plant',
        paramsIndex: 'plant',
        url: 'detect-detail',
        theads: ['种植批次号', '种植日期', '种植果蔬'],
        protos: ['serial', 'date', 'plant_name'],
        widths: [26, 26, 26]
    }],
    // 种植管理-农事详情
    cultivateFarmingBatch: [{
        key: 'cultivate-farming',
        url: 'cultivate-farming',
        theads: ['种植批次号', '种植日期', '种植果蔬'],
        protos: ['serial', 'date', 'plant_name'],
        widths: [26, 26, 26]
    }],
    // 畜禽加工详情
    beastDetectPkBatch: [{
        key: 'pack-detect-pk',
        url: 'pack-detect-pk',
        theads: ['加工批次号', '加工日期', '加工数量'],
        protos: ['serial', 'date', 'amount'],
        widths: [26, 26, 26]
    }],
    // 果蔬加工详情
    plantDetectPkBatch: [{
        key: 'pack-detect-pk',
        url: 'pack-detect-pk',
        theads: ['加工批次号', '加工日期', '加工数量'],
        protos: ['serial', 'date', 'amount'],
        widths: [26, 26, 26]
    }],
    // 销售管理-销售订单管理详情
    saleBatch: [{
        key: 'sell-code',
        url: 'sell-code',
        theads: ['产品溯源码', '销售产品', '销售日期'],
        protos: ['code', 'product_name', 'date'],
        widths: [26, 26, 26]
    }]
}
