import {saleInput} from './saleInput.js'
import {saleOrder} from './saleOrder.js'

// 整合 销售管理 全部详情
export let saleModel = Object.assign({},
    saleInput,
    saleOrder
)
