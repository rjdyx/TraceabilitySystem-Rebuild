import {baseManage} from './baseManage.js'
import {serialManage} from './serialManage.js'
import {feedManage} from './feedManage.js'
import {plagueManage} from './plagueManage.js'
import {detectionManage} from './detectionManage.js'
import {beastDetectManage} from './beastDetectManage.js'
import {areaManage} from './areaManage.js'
import {innocuityManage} from './innocuityManage.js'
import {slaughterManage} from './slaughterManage.js'
import {planManage} from './planManage.js'

// 整合 养殖管理 全部子类
export let breedModel = Object.assign({},
    baseManage,
    serialManage,
    feedManage,
    plagueManage,
    detectionManage,
    beastDetectManage,
    areaManage,
    innocuityManage,
    slaughterManage,
    planManage
)
