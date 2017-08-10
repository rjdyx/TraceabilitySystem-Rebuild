<template>
<div id="printfPreview">
      <!-- 打印表单的东西 -->
    <el-dialog class="printfDialog" title="打印预览效果" v-model="dialogTableVisible" size="null" @close="closePrintfDialog">
        <div class="printfDiv">
            <div class="printfTable">
                <h2 class="printf_h2">广东天池茶叶股份有限公司（根据合同签署选择对应公司名称）</h2>
                <h3 class="printf_h3">{{odd}}</h3>
                <el-row :gutter="20">
                    <el-col :span="12" v-for="(item,i) in filterTheads" class="text-small">
                        <strong>{{item}}:</strong>
                        <em class="margin-left_10">{{headData[filterProtos[i]]}}</em>
                    </el-col>
                </el-row>
                <el-table :data="tableData" style="width:100%">
                    <!-- 序号 --> 
                    <el-table-column width="50" label="序号" type="index" id="test_id">
                    </el-table-column>
                    <template v-for="(item,index) in tabItem.headList">
                        <el-table-column 
                            :prop="tabItem.protos[index]"
                            :label="item"
                            show-overflow-tooltip
                            align="center"
                            min-width="50">
                            <template  scope="scope">
                                <div v-if="item.includes('产品名称')" slot="reference" class="name-wrapper pcActive" @click="jumpDetails(scope.row)">
                                    {{ tableData[scope.$index][tabItem.protos[index]] }}
                                </div>
                                <div class="imgTipDiv" v-else-if="tabItem.protos[index]=='thumb'" slot="reference">
                                    <img v-if="tableData[scope.$index][tabItem.protos[index]]!=null && tableData[scope.$index][tabItem.protos[index]]!=''" :src="tableData[scope.$index][tabItem.protos[index]]" width="50px" height="auto">
                                </div>
                                <div v-else slot="reference">
                                    {{ tableData[scope.$index][tabItem.protos[index]] }}
                                </div>
                            </template>
                        </el-table-column>
                    </template>
                </el-table>
                <el-row :gutter="20">
                    <el-col :span="12" v-for="(item,i) in tabItem.prinftBottom" class="text-small">
                        <strong>{{item}}:</strong>
                        <em v-if="item === '合计'" class="margin-left_10">{{allAmount}}</em>
                        <em v-else class="margin-left_10">{{headData[tabItem.prinftBottomProtos[i]]}}</em>
                    </el-col>
                </el-row>
            </div>     
        </div>
        <div slot="footer" class="dialog-footer">
    <el-button @click="dialogTableVisible = false">取 消</el-button>
    <el-button class="btn_change" @click="confirmPrintf">确 定</el-button>
  </div>
    </el-dialog>
</div>
</template>

<script>
import JSZip from '../../../../../public/lib/jszip.js'
import DDoc from '../../../../../public/lib/DDoc.js'
export default {
    name: 'printfPreview2',
    props: {
        theads: {
            type: Array,
            default () {
                return []
            }
        },
        protos: {
            type: Array,
            default () {
                return []
            }
        },
        headData: {
            type: Object,
            default () {
                return {}
            }
        },
        tabItem: {
            type: Object,
            default () {
                return {}
            }
        },
        tableData: {
            type: Array,
            default () {
                return []
            }
        },
        odd: {
            type: String,
            default: ''
        },
        filter: {
            type: Array,
            default () {
                return []
            }
        }
    },
    data () {
        return {
            dialogTableVisible: false,
            allAmount: 0 // 合计
        }
    },
    mounted () {
        console.log(this.tableData)
    },
    methods: {
        // 关闭弹窗
        closePrintfDialog () {
            this.dialogTableVisible = false
        },
        // 打印word文档
        confirmPrintf () {
            this.generate(this.filterTheads, this.filterProtos, this.headData, this.tabItem['headList'], this.tabItem['protos'], this.tableData)
        },
        // 把[{}，{}]转换为[[],[]]的方法
        gsh (arr, protos) {
            let dArr = []
            for (let i = 0; i < arr.length; i++) {
                dArr[i] = []
                dArr[i].push(i + 1)
                protos.forEach((item) => {
                    let value = arr[i][item]
                    value === null ? dArr[i].push('') : dArr[i].push(arr[i][item])
                })
            }
            let tableTheads = []
            tableTheads = $.extend(true, tableTheads, this.tabItem['headList'])
            tableTheads.unshift('序号')
            dArr.unshift(tableTheads)
            return dArr
        },
        // 添加word文档的内容(顶部文字列表，顶部属性列表，顶部数据列表，表单表头列表，表单表头列表，表单数据列表，)
        generate (theads, protos, headData, tableThead, tableProtos, tableData) {
            let doc = new window.DDoc()
            doc.addParagraph('广东天池茶叶股份有限公司（根据合同签署选择对应公司名称）', {
                textAlign: doc.AlignType.Center,
                fontSize: 30,
                bold: true
            })
            doc.addParagraph(this.odd, {
                textAlign: doc.AlignType.Center,
                fontSize: 40,
                bold: true
            })
            let string = ''
            if (theads.length) {
                for (let i = 0; i < theads.length; i++) {
                    let value = headData[protos[i]] !== null ? headData[protos[i]] : ''
                    doc.addParagraph(theads[i] + ':' + value)
                }
            }
            let tableArr = this.gsh(tableData, tableProtos)
            doc.newLine()
            doc.addTable(tableArr, {
                bold: true,
                textAlign: doc.AlignType.Center
            })
            doc.newLine()
            let tableBottomArr = this.tabItem.prinftBottom
            let prinftBottomProtos = this.tabItem.prinftBottomProtos
            if (tableBottomArr) {
                for (let i = 0; i < tableBottomArr.length; i++) {
                    let value = ''
                    if (tableBottomArr[i] === '合计') {
                        value = this.allAmount
                    } else {
                        value = prinftBottomProtos[i] !== '' ? (this.headData[prinftBottomProtos[i]] !== null ? this.headData[prinftBottomProtos[i]] : '') : ''
                    }
                    doc.addParagraph(tableBottomArr[i] + ':' + value)
                }
            }
            doc.generate()
        },
        filterFn (item, index, array) {
            var bol = this.filter.indexOf(index)
            if (bol === -1) {
                return true
            } else {
                return false
            }
        }
    },
    watch: {
        tableData () {
            if (this.tableData.length) {
                this.allAmount = 0
                this.tableData.forEach((obj) => {
                    for (let key in obj) {
                        if (key === 'amount') this.allAmount += obj[key]
                    }
                })
            }
        }
    },
    computed: {
        filterTheads () {
            let arr = this.theads.filter(this.filterFn)
            return arr
        },
        filterProtos () {
            let arr = this.protos.filter(this.filterFn)
            return arr
        }
    }
}
</script>
<style lang='sass'>
#printfPreview{
    .printfDiv{
        border:1px dashed #bfcbd9;
        .printfTable{
            min-width: 600px;
            min-height:600px;
            background: white;
            padding: 20px;
            .printf_h2{
                text-align: center;
                font-size: 16px;
            }
            .printf_h3{
                text-align: center;
                font-size: 20px;
                padding-top: 10px;
                padding-bottom: 10px;
            }
            .el-table{
                margin-top: 30px;
            }
        }
    }
}
</style>
