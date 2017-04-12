
import client from '../basic/client.js'
// import supplier from '../basic/supplier.js'
import breedBasic from '../breed/basic.js'
import plantBasic from '../plantation/basic.js'
import logisticBasic from '../logistic/basic.js'
import beastPack from '../beast-pack/pack.js'
import plantPack from '../plant-pack/pack.js'

export default {
    clientFile: client.client,
    // supplierFile: supplier.supplier,
    baseManage: breedBasic.basic,
    plantBase: plantBasic.basic,
    logisticBase: logisticBasic.basic,
    petProcess: beastPack.pack,
    vegetableSerial: plantPack.pack
}
