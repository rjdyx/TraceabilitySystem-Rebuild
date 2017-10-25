import {plantBase} from './plantBase.js'
import {plantSerial} from './plantSerial.js'
import {plantFarm} from './plantFarm.js'
import {plantProduct} from './plantProduct.js'
import {plantHarvest} from './plantHarvest.js'

// 整合 种植管理 全部子类
export let plantModel = Object.assign({},
    plantBase,
    plantSerial,
    plantFarm,
    plantProduct,
    plantHarvest
)
