import {vegetableSerial} from './vegetableSerial.js'
import {vegetableDetect} from './vegetableDetect.js'
import {vegetableTrace} from './vegetableTrace.js'

// 整合 果蔬加工管理 全部子类
export let vegetableModel = Object.assign({},
    vegetableSerial,
    vegetableDetect,
    vegetableTrace
)
