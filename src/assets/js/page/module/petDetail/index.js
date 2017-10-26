import {beastPackBatch} from './beastPackBatch.js'
import {beastPackProduct} from './beastPackProduct.js'
import {beastDetectPkBatch} from './beastDetectPkBatch.js'

// 整合 屠宰加工管理 全部详情
export let petModel = Object.assign({},
    beastPackBatch,
    beastPackProduct,
    beastDetectPkBatch
)
