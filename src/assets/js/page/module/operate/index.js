import {rightsOperate} from './rightsOperate.js'
import {settleOperate} from './settleOperate.js'
import {usersOperate} from './usersOperate.js'
import {logOperate} from './logOperate.js'
import {applyOperate} from './applyOperate.js'

// 整合 运营管理 全部子类
export let operateModel = Object.assign({},
    rightsOperate,
    settleOperate,
    usersOperate,
    logOperate,
    applyOperate
)
