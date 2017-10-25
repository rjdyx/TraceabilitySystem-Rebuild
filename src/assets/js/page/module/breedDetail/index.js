import {breedBatch} from './breedBatch.js'
import {feedBatch} from './feedBatch.js'
import {beastDetectBatch} from './beastDetectBatch.js'
import {plagueBatch} from './plagueBatch.js'
import {detectionBatch} from './detectionBatch.js'
import {areaBatch} from './areaBatch.js'
import {innocuityBatch} from './innocuityBatch.js'
import {slaughterBatch} from './slaughterBatch.js'
import {planBreedBatch} from './planBreedBatch.js'
import {planRfidBatch} from './planRfidBatch.js'

// 整合 养殖管理 全部详情
export let breedModel = Object.assign({},
    breedBatch,
    feedBatch,
    beastDetectBatch,
    plagueBatch,
    detectionBatch,
    areaBatch,
    innocuityBatch,
    slaughterBatch,
    planBreedBatch,
    planRfidBatch
)
