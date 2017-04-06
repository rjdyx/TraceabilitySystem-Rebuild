
import client from '../basic/client.js'
import supplier from '../basic/supplier.js'
import breedBasic from '../breed/basic.js'
import plantBasic from '../plantation/basic.js'
import logisticBasic from '../logistic/basic.js'
import beastPack from '../beast-pack/pack.js'
import plantPack from '../plant-pack/pack.js'

export default {
  clientFile: client.client,//销售员档案
  supplierFile: supplier.supplier,//经销商档案
  baseManage: breedBasic.basic,//养殖基础信息
  plantBase: plantBasic.basic,//种植基础信息
  logisticBase: logisticBasic.basic,//物流基础信息
  petProcess: beastPack.pack,//屠宰加工批次
  vegetableSerial: plantPack.pack//果蔬加工批次
}
