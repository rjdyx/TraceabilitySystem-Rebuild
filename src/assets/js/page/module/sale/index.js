import {saleProduct} from './saleProduct.js'
import {saleInput} from './saleInput.js'
import {saleOrder} from './saleOrder.js'

// 整合 销售管理 全部子类
export let saleModel = Object.assign({},
    saleProduct,
    saleInput,
    saleOrder
)
