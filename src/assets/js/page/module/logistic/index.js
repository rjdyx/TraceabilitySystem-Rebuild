import {Logisticbase} from './Logisticbase.js'
import {logisticSerial} from './logisticSerial.js'

// 整合 物理管理 全部子类
export let logisticModel = Object.assign({},
    Logisticbase,
    logisticSerial
)
