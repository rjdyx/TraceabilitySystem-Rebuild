import {customBeast} from './customBeast.js'
import {customPlant} from './customPlant.js'

// 整合 系统管理 全部详情
export let systemModel = Object.assign({},
    customBeast,
    customPlant
)
