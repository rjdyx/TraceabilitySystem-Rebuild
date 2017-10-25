import {systemUser} from './systemUser.js'
import {systemLog} from './systemLog.js'
import {systemReport} from './systemReport.js'
import {custom} from './custom.js'

// 整合 系统管理 全部子类
export let systemModel = Object.assign({},
    systemUser,
    systemLog,
    systemReport,
    custom
)
