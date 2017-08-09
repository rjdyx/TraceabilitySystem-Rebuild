<template>
<div id="printfPreview">
      <!-- 打印表单的东西 -->
    <el-dialog class="printfDialog" title="打印预览效果" v-model="dialogTableVisible" size="null" @close="closePrintfDialog">
        <div class="printfDiv">
            <div class="printfTable">
                <h2 class="printf_h2">广东天池茶叶股份有限公司（根据合同签署选择对应公司名称）</h2>
                <h3 class="printf_h3">xxx单</h3>
                <el-row :gutter="20">
                    <el-col :span="12" v-for="(item,i) in theads" class="text-small">
                        <strong>{{item}}:</strong>
                        <em class="margin-left_10">{{headData[protos[i]]}}</em>
                    </el-col>
                </el-row>
                <el-table :data="tableData" style="width:100%" border>
                    <!-- 序号 --> 
                    <el-table-column width="50" label="序号" type="index" id="test_id">
                    </el-table-column>
                    <template v-for="(item,index) in thead">
                        <el-table-column 
                            :prop="tabItem.protos[index]"
                            :label="item"
                            :min-width="tabItem.widths[index]"
                            show-overflow-tooltip>
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
export default {
    name: 'printfPreview2',
    props: {
        theads: {
            type: Array,
            default () {
                return []
            }
        },
        thead: {
            type: Array,
            default () {
                return []
            }
        },
        tableData: {
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
        protos: {
            type: Array,
            default () {
                return []
            }
        },
        tableProtos: {
            type: Array,
            default () {
                return []
            }
        }
    },
    data () {
        return {
            dialogTableVisible: false,
            msg: 'Welcome to Your Vue.js App',
            list: ['种植批次号', '所属种植区', '种植人', '种植日期', '茶叶品种名称', '当前批次面积', '状态'],
            listProtos: ['serial', 'plantation_name', 'operate', 'date', 'tea_name', 'area_unit', 'state'],
            tableheadList: ['图片但是嘎都给啊但是嘎嘎啊个', '图片标题', '图片描述'],
            tableheadListProtos: ['thumb', 'name', 'desc', 'date', 'memo'],
            arr: [
                {
                    name: 'wyp',
                    age: '22',
                    sex: 'girl'
                },
                {
                    name: 'yoko',
                    age: '21',
                    sex: 'girl'
                },
                {
                    name: 'hb',
                    age: '23',
                    sex: 'boy'
                }
            ]
        }
    },
    mounted () {
    },
    methods: {
        // 关闭弹窗
        closePrintfDialog () {
            this.dialogTableVisible = false
        },
        // 打印word文档
        confirmPrintf () {
            this.generate(this.theads, this.protos, this.headData, this.thead, this.tableProtos, this.tableData)
        },
        // 把[{}，{}]转换为[[],[]]的方法
        gsh (arr, protos) {
            console.log(arr)
            console.log(protos)
            let dArr = []
            for (let i = 0; i < arr.length; i++) {
                dArr[i] = []
                protos.forEach((item) => {
                    let value = arr[i][item]
                    value === null ? dArr[i].push('') : dArr[i].push(arr[i][item])
                })
            }
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
            doc.addParagraph('xxx单', {
                textAlign: doc.AlignType.Center,
                fontSize: 40,
                bold: true
            })
            let string = ''
            for (let i = 0; i < theads.length; i++) {
                let value = headData[protos[i]] !== null ? headData[protos[i]] : ''
                doc.addParagraph(theads[i] + ':' + value)
            }
            let tableArr = this.gsh(tableData, tableProtos)
            doc.newLine()
            doc.addTable([this.thead], {
                bold: true,
                textAlign: doc.AlignType.Center
            })
            if (tableArr.length) {
                doc.addTable(tableArr, {
                    textAlign: doc.AlignType.Center
                })
            }
            doc.generate()
        }
    },
    watch: {
    }
}
</script>
<style lang='sass'>
#printfPreview{
    .printfDiv{
        border:1px dashed #bfcbd9;
        .printfTable{
            min-width: 600px;
            min-height:800px;
            background: white;
            padding: 20px;
            .el-table .el-tooltip.cell, .el-table th, .el-table th>div{
                white-space: normal;
            }
            .el-table__fixed-header-wrapper thead div, .el-table__header-wrapper thead div{
                background-color: white;
            }
            .el-table th{
                background-color: white;
            }
            .printf_h2{
                text-align: center;
                font-size: 16px;
            }
            .printf_h3{
                text-align: center;
                font-size: 20px;
                padding-top: 10px;
            }
        }
    }
}
</style>
