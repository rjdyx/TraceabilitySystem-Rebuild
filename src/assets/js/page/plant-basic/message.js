// 中间列表的数据
import {basicModel as basic} from '../module/basic/index.js'
import {breedModel as breed} from '../module/breed/index.js'
import {petModel as pet} from '../module/pet/index.js'
import {plantModel as plant} from '../module/plant/index.js'
import {vegetableModel as vegetable} from '../module/vegetable/index.js'
import {logisticModel as logistic} from '../module/logistic/index.js'
import {saleModel as sale} from '../module/sale/index.js'
import {systemModel as system} from '../module/system/index.js'
import {operateModel as operate} from '../module/operate/index.js'

let model = Object.assign({}, basic, breed, pet, plant, vegetable, logistic, sale, system, operate)
export default model
