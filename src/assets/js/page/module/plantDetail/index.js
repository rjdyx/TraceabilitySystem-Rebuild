import {plantSerial} from './plantSerial.js'
import {fertilizeBatch} from './fertilizeBatch.js'
import {sprayBatch} from './sprayBatch.js'
import {plantDetectBatch} from './plantDetectBatch.js'
import {farmingBatch} from './farmingBatch.js'
import {planSerial} from './planSerial.js'

// 整合 种植管理 全部详情
export let plantModel = Object.assign({},
    plantSerial,
    fertilizeBatch,
    sprayBatch,
    plantDetectBatch,
    farmingBatch,
    planSerial
)
