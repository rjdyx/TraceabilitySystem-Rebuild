import {breedModel as breed} from '../module/breedDetail/index.js'
import {petModel as pet} from '../module/petDetail/index.js'
import {plantModel as plant} from '../module/plantDetail/index.js'
import {vegetableModel as vegetable} from '../module/vegetableDetail/index.js'
import {saleModel as sale} from '../module/saleDetail/index.js'
import {systemModel as system} from '../module/systemDetail/index.js'
import {operateModel as operate} from '../module/operateDetail/index.js'

let model = Object.assign(breed, pet, plant, vegetable, sale, system, operate)
export default model
