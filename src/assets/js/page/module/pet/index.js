import {petProcess} from './petProcess.js'
import {petDectect} from './petDectect.js'
import {petTrace} from './petTrace.js'

// 整合 屠宰加工管理 全部子类
export let petModel = Object.assign({},
    petProcess,
    petDectect,
    petTrace
)
