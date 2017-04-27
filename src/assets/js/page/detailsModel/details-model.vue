/**
 * 
 * 详情页模块组件
 * @author 吴燕萍
 * @date 2017/04/18
 * 
 */
<template>
<div>   
  <!-- 标题 -->
    <contain-title :settitle="tab">
    </contain-title>

  <!-- 信息列表 -->
    <el-row :gutter="20">
         <el-col :span="6" v-for="(item,i) in theads" class="text-small">{{item}}:{{headData[protos[i]]}}</el-col>
    </el-row>
  	
  <!-- tab栏 --> 
    <el-tabs v-model="activeName" type="card" id="tabs" @tab-click="tabClick">
        <el-tab-pane :label='tabItem.tab' :name='tabItem.tab' v-for="
        tabItem in tabList">
        </el-tab-pane>
    </el-tabs> 

            <!-- 操作模块 -->
		<div id="operate">              
	        <div id="inputs">
	        <!-- 左边的操作按钮 -->
	            <operate :listComponent="tabItem.listComponent" @selectVal="selectFind" @dateVal="dateFind"></operate>
	            <!-- 搜索框 -->
	            <div class="searchOp">
	                <el-input
	                    :placeholder="tabItem.searchPlaceholder"
	                    v-model="inputValue"
	                    :on-icon-click="search" class="searchInp" size="small">
	                </el-input>
	                <el-button size="small" class="searchBtn" @click="textAndDateFind">搜索</el-button>
	            </div>

	            <!-- 右边的操作按钮 -->
	            <!-- 操作按钮 -->
	            <component
	                v-for="operateItem in tabItem.typeComponent"
	                :is="operateItem.component"
	                class="fr"
	            ></component>
	        </div>
		</div>
    
        <!-- 新建模块 --> 
        <popNew v-if="isNewShow" :newComponent="tabItem.newComponent" :url="tabList.url"></popNew>
    <!-- 列表模块 -->
    <el-table :data="tableData"  @selection-change="handleSelectionChange">
        <!-- checkbox -->
        <el-table-column width="50" type="selection">
        </el-table-column> 
        <!-- 序号 --> 
        <el-table-column width="80" label="序号" type="index" id="test_id">
        </el-table-column>

		        <!-- 中间列表模块 -->
		        <template v-for="(item,index) in tabItem.headList"> 
		          <template>
		            <el-table-column 
		              :prop="tabItem.protos[index]"
		              :label="item"
		              :min-width="tabItem.widths[index]"
		              show-overflow-tooltip>
                      <template  scope="scope">
                            <div v-if="tabItem.protos[index]=='thumb'" slot="reference">
                                <img v-if="tableData[scope.$index][tabItem.protos[index]]!=null && 
                                    tableData[scope.$index][tabItem.protos[index]]!=''" 
                                    :src="tableData[scope.$index][tabItem.protos[index]]" 
                                    width="30" height="20" @mouseenter="enterPic" @mouseleave="">
                            </div>
                            <div v-else slot="reference" >
                                {{ tableData[scope.$index][tabItem.protos[index]] }}
                            </div>
                      </template>
		            </el-table-column>
		          </template>
		        </template>

		        <!-- 列表操作模块 -->
                <el-table-column 
                label="操作" v-if="checkOperate==null">
                    <template scope="scope" class="operateBtn">
                        <template>
                            <el-button type="text" size="small" @click="changeEditShow(scope.$index,scope.row)" v-if="!hiddeEdit">编辑</el-button>
                            <el-button type="text" size="small" v-if="hiddeEdit">查看</el-button>
                            <el-button size="small" type="text" @click="handelDel(scope.$index,scope.row)" class="btn">删除</el-button>  
                        </template>
                    </template>
                </el-table-column>
		    </el-table>
    <div class="footer">
        <div class="operate-foot">
            <el-button v-for="bottomOperateItem in tabItem.bottomOperateList">{{bottomOperateItem.operateName}}</el-button>
        </div>

        <p class="record">共有{{num}}页，{{total_num}}条记录</p>

        <!-- 分页模块 -->
            <el-pagination
              v-if="paginator!=0"
              layout="prev, pager, next"
              :total="paginator.total"
              :page-size="paginator.per_page"
              class="pager"
              @current-change="pageChange">
            </el-pagination>
    </div>
</div> 
</template>
<script>
import computed from './computed.js'
import popNew from '../../components/public/popNew.vue'
import ContainTitle from 'components/layout/contain-title.vue'
import edit from '../../components/public/edit.vue'
import operate from '../../components/public/operate.vue'
import clickMore from '../../components/public/clickMore.vue'
import lotOpearte from '../../components/public/lotOpearte.vue'
import newMessage from '../plant-details/newMessage.js'
export default {
    name: 'BasicModel',
    props: {
        models: {
            type: Object,
            default () {
                return {
                    key: '',
                    tab: '',
                    url: '',
                    theads: [],
                    protos: [],
                    tabList: []
                }
            }
        }
    },
    data () {
        return {
            activeName: '',
            // 获取借口的数据
            apiUrlArr: [],
            // 头部列表数据
            headData: {},
            isNewShow: false,
            isEditShow: false,
            tabItem: {},
            // 列表数据
            tableData: [],
            paginator: {},
            inputValue: '',
            dataArr: {}
        }
    },
    mixins: [computed],
    methods: {
        // tab点击事件
        tabClick (tab, event) {
            var index = tab.$data.index
            this.tabItem = this.tabList[index]
        },
        // 显示新建表单
        changeNewShow () {
            this.isNewShow = !this.isNewShow
            if (this.tabItem.newComponent[0].checkNumber !== undefined) {
                for (let index in this.tabItem.newComponent[0].checkNumber) {
                    this.tabItem.newComponent[0].components[this.tabItem.newComponent[0].checkNumber[index]].rule[1].url = this.tabItem.url
                }
            }
            if (this.tabItem.newComponent[0].selectUrl) {
                for (let key in this.tabItem.newComponent[0].selectUrl) {
                    let newArr = this.$addAndEditSelectMethod(this.tabItem.newComponent[0].selectUrl[key])
                    this.$dataGet(this, newArr.selectUrl + '/changeSelect', {'selectData': newArr.selectData})
                        .then((responce) => {
                            if (responce.data.length !== 0) {
                                this.tabItem.newComponent[0].components[this.tabItem.newComponent[0].popNumber[key]].options = this.$selectData(this.tabItem.url, responce.data, newArr.selectArr)
                            }
                        })
                }
            }
            // 无分类的下拉框模块查询
            if (this.tabItem.newComponent[0].selectUrl2) {
                for (let key in this.tabItem.newComponent[0].selectUrl2) {
                    let newArr = this.$addAndEditSelectMethod(this.tabItem.newComponent[0].selectUrl2[key])
                    this.$dataGet(this, '/util/selects', {table: newArr.selectUrl})
                        .then((responce) => {
                            if (responce.data.length !== 0) {
                                this.tabItem.newComponent[0].components[this.tabItem.newComponent[0].popNumber2[key]].options = this.$selectData(this.tabItem.url, responce.data, newArr.selectArr)
                            }
                        })
                }
            }
        },
        // 显示编辑表单
        changeEditShow (index, row) {
            this.isEditShow = true
            if (row !== undefined) {
                if (this.editComponent[0].checkNumber !== undefined) {
                    for (let index in this.newComponent[0].checkNumber) {
                        this.editComponent[0].components[this.editComponent[0].checkNumber[index]].rule[1]['id'] = row.id
                        this.editComponent[0].components[this.editComponent[0].checkNumber[index]].rule[1]['url'] = this.url
                    }
                }
                if (this.editComponent[0].selectUrl) {
                    for (let key in this.editComponent[0].selectUrl) {
                        let editArr = this.$addAndEditSelectMethod(this.editComponent[0].selectUrl[key])
                        this.$dataGet(this, editArr.selectUrl + '/changeSelect', {'selectData': editArr.selectData})
                            .then((responce) => {
                                if (responce.data.length !== 0) {
                                    this.editComponent[0].components[this.editComponent[0].popNumber[key]].options = this.$selectData(this.url, responce.data, editArr.selectArr)
                                }
                            })
                    }
                }
                // 无分类的下拉框模块查询
                if (this.editComponent[0].selectUrl2) {
                    for (let key in this.editComponent[0].selectUrl2) {
                        let editArr = this.$addAndEditSelectMethod(this.editComponent[0].selectUrl2[key])
                        this.$dataGet(this, '/util/selects', {table: editArr.selectUrl})
                            .then((responce) => {
                                if (responce.data.length !== 0) {
                                    this.editComponent[0].components[this.editComponent[0].popNumber2[key]].options = this.$selectData(this.url, responce.data, editArr.selectArr)
                                }
                            })
                    }
                }
                this.editForm = row
                // 重新赋值获取初始值
                for (let key of Object.keys(row)) {
                    this.editDefault[key] = row[key]
                }
            }
        },
        // 列表全选
        handleSelectionChange () {
        },
        // 获取Api接口数据
        getApiUrl (data = '') {
            this.apiUrlArr[this.url] = this.url + '/' + this.$route.params.id
            for (var i in this.tabList) {
                this.apiUrlArr[this.tabList[i].url] = this.$route.params.id + '/' + this.tabList[i].url
            }
        },
        // 获取头部详细信息
        getDetailSerial () {
            // 头部列表信息
            this.$dataGet(this, this.apiUrlArr[this.url], {})
                .then((responce) => {
                    // this.$set(this, 'headData', responce.data)
                    var ret = this.$conversion(this.changeDataArr, responce.data, 1)
                    ret = this.$eltable(ret)
                    this.$set(this, 'headData', ret)
                    console.log(this.headData)
                })
        },
        // 获取列表信息
        getAllMsg (data = '') {
            // 字符分割
            this.$dataGet(this, this.apiUrlArr[this.tabList[0].url], {})
                .then((responce) => {
                    if (responce.data.data.length !== 0) {
                        var ret = this.$conversion(this.changeDataArr, responce.data.data, 1)
                        ret = this.$eltable(ret)
                        this.$set(this, 'tableData', ret)
                        this.total_num = responce.data.total
                        this.num = responce.data.last_page
                        this.paginator = responce.data
                    } else {
                        this.$set(this, 'tableData', responce.data.data)
                        this.total_num = 0
                        this.num = 0
                        this.paginator = 0
                        if (this.dataArr === '') {
                            this.dataArr = {}
                        }
                    }
                })
        },
        // 文本与时间按钮查询
        textAndDateFind () {
            this.dataArr['query_text'] = this.inputValue
            this.boxArr(this.dataArr)
        },
        // 下拉框查询
        selectFind (val) {
            for (let index in this.selectSearch) {
                if (val[0] === this.selectSearch[index]) {
                    this.selectVal[index] = val[1]
                }
            }
            this.dataArr[val[0]] = val[1]
            this.boxArr(this.dataArr)
        },
        // 日期存储
        dateFind (val) {
            this.dataArr[val[0]] = val[1]
        },
        // 分页跳转
        pageChange (val) {
            this.dataArr['page'] = val
            this.boxArr(this.dataArr)
        },
        // 组合查询
        boxArr (dataArr) {
            this.getAllMsg(dataArr)
        },
        enterPic () {
            // this.$alert('<img src>')
            // this.$alert('这是一段内容', '标题名称', {
            //     confirmButtonText: '确定',
            //     callback: action => {
            //         this.$message({
            //             type: 'info',
            //             message: 'action: ${ action }'
            //         })
            //     }
            // }
        }
    },
    mounted () {
        console.log('------')
        console.log(this.models)
        this.tabItem = this.tabList[0]
        this.activeName = this.tabList[0].tab
        this.getApiUrl()
        this.getDetailSerial()
        this.getAllMsg()
    },
    watch: {
    },
    components: {
        ContainTitle,
        popNew,
        edit,
        operate,
        clickMore,
        lotOpearte
    }
}
</script>
<style lang='sass'> 
  .el-row {
    padding:0px 0px 20px 10px;
    border-bottom: 2px solid #e5e5e5;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
  	padding: 10px 0px 0px 0px;
  }
  .el-tabs{
  	padding-top: 15px;
  }
   .operateBtns {
                display: inline-block;
                margin-top:10px;
                margin-right:10px;
            }
   .fr{
     	float:right;
     }
      .fl{
     	float:left;
     }
     .btn span{
        border-left: 1px solid #a7bad6;
        padding: 0px 5px 0px 8px;
    }
    .btn:nth-child(1) span{
        border-left: 0px solid #a7bad6;
    }
.text-small{
	font-size:13px;
}
.searchInp{
	 	width:161px;
	 	margin-bottom:10px;
	 	font-size:12px;
	 	margin-right:10px;
	 }
.searchBtn{
     	width:62px;
     }
.searchOp{
     	display:inline;
     }
 .footer{
      width: 100%;
      height: 50px;
      border: 1px solid #dfe6ec;
      border-top: none; 
        .pager{
          display: inline-block;
          float: right;
          vertical-align: middle;
          padding-top: 12px;
          padding-right: 20px;
        }
        .operate-foot{
          padding-left: 15px;
          display: inline-block;
          padding-top: 8px;
         }
        .record{
          float: right;
          padding: 15px 10px;
         }
     }
     
     .detaActive{
        background: red;
     }
</style>
