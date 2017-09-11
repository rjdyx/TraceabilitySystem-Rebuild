<template>
 <div id="printfPreview">
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
                            min-width="50" 
                            >
                            <template scope="scope">
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
                <el-row :gutter="20" class="prinftBottom">
                    <el-col :span="12" v-for="(item,i) in tabItem.prinftBottom" class="text-small">
                        <strong>{{item}}:</strong>
                        <em v-if="item === '合计'" class="margin-left_10">{{allAmount}}</em>
                        <em v-else class="margin-left_10">{{headData[tabItem.prinftBottomProtos[i]]}}</em>
                    </el-col>
                </el-row>
            </div>     
    </div>
</div>
</template>

<script>
export default {
    data () {
        return {
            models: {},
            headData: {},
            tableData: [],
            tabItem: {},
            filterTheads: [],
            filterProtos: [],
            odd: '',
            printf: {}
        }
    },
    mounted () {
        $('#app').removeClass('bodyofxh')
        this.printf = localStorage.getItem('printf') ? JSON.parse(localStorage.getItem('printf')) : {}
        this.models = this.printf.detailsBatch
        this.odd = this.models.odd
        this.$nextTick(() => {
            this.tabItem = this.models.tabList[0]
            this.filterTheads = this.models.theads.filter(this.filterFn)
            this.filterProtos = this.models.protos.filter(this.filterFn)
        })
        this.headData = this.printf.headData
        this.tableData = this.printf.tableData
    },
    methods: {
        confirmPrintf () {
            // $('#printfPreview .footer').hide()
            window.print()
        },
        cancelPrintf () {
            this.$router.go(-1)
        },
        filterFn (item, index, array) {
            var bol = this.models.filter.indexOf(index)
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
    destroyed () {
        $('#app').addClass('bodyofxh')
    }

}
</script>
<style lang=sass>
#printfPreview{
    padding: 50px 0;
    width: 1024px;
    margin:0 auto;
    .printfDiv{
        .printfTable{
            min-width: 600px;
            min-height:600px;
            background: white;
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
                margin-top: 20px;
            }
        }
    }
    .el-table .el-tooltip.cell, .el-table th, .el-table th>div{
        white-space: normal
    }
    .prinftBottom{
        padding: 20px;
    }
    .footer{
        padding: 30px 0;
        text-align: right;
    }
} 
</style>
