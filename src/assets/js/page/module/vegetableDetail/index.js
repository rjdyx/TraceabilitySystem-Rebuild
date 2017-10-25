import {plantPackBatch} from './plantPackBatch.js'
import {plantPackProduct} from './plantPackProduct.js'
import {detectPackBatch} from './detectPackBatch.js'

// 整合 果蔬加工管理 全部详情
export let vegetableModel = Object.assign({},
    plantPackBatch,
    plantPackProduct,
    detectPackBatch
)
