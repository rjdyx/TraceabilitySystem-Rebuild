import {categoryBase} from './categoryBase.js'
import {personFile} from './personFile.js'
import {expertFile} from './expertFile.js'
import {clientFile} from './clientFile.js'
import {supplierFile} from './supplierFile.js'
import {productFile} from './productFile.js'
// 整合 基础信息管理 全部子类
export let basicModel = Object.assign({}, categoryBase, personFile, expertFile, clientFile, supplierFile, productFile)
