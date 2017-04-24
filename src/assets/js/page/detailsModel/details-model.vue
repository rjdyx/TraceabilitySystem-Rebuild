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
            <operate :listComponent="tabItem.leftOperateList"></operate>
            
            <!-- 搜索框 -->
            <div class="searchOp"> 
                <el-input
                    :placeholder="tabItem.searchPlaceholder"
                    v-model="inputValue"
                    :on-icon-click="search" class="searchInp" size="small">
                </el-input>
                <el-button size="small" class="searchBtn" @click="textFind">搜索</el-button>
            </div>

            <!-- 右边的操作按钮 -->
            <!-- 操作按钮 -->
            <component
                v-for="operateItem in tabItem.rightOperateComponent"
                :is="operateItem.component"
                class="fr"
            ></component>
        </div>
    
        <!-- 新建模块 --> 
        <popNew v-if="isNewShow" :newComponent="tabItem.newComponent" :url="tabList.url"></popNew>
    </div>
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
            </el-table-column>
          </template>
        </template>

        <!-- 列表操作模块 -->
        <el-table-column 
        label="操作"> 
            <template scope="scope" class="operateBtn">
                <template>
                <el-button class="btn" type="text" size="small" v-for="operateItem in tabItem.tableOperateList">{{operateItem.operateName}}</el-button> 
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
        layout="prev, pager, next"
        :total="1000"
        class="pager">
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
            tableData: [],
            isNewShow: false,
            isEditShow: false,
            tabItem: {}
        }
    },
    mixins: [computed],
    methods: {
        // inputText搜索事件
        search () {
        },
        // 搜索按钮
        textFind () {
        },
        // tab点击事件
        tabClick (tab, event) {
            console.log(tab.$data.index)
            var index = tab.$data.index
            this.tabItem = this.tabList[index]
            // this.tableData = []
            // this.getTabDate(this.apiUrlArr[this.tabList[0].url])
        },
        // 显示新建表单
        changeNewShow () {
            this.isNewShow = !this.isNewShow
            console.log(2222)
            console.log(this.tabList.newComponent)
        },
        // 显示编辑表单
        changeEditShow (index, row) {
            this.isEditShow = !this.isEditShow
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
                    this.$set(this, 'headData', responce.data)
                    var ret = this.$conversion(this.changeDataArr, responce.data, 1)
                    ret = this.$eltable(ret)
                    this.$set(this, 'headData', ret)
                })
            this.getTabDate(this.apiUrlArr[this.tabList[0].url])
        },
        // 获取tab页数据
        getTabDate (url) {
            // tab第一页信息
            this.$dataGet(this, url, {})
                .then((responce) => {
                    console.log(responce)
                    /// 数据转换
                    if (responce.data.data.length !== 0) {
                        this.$set(this, 'tableData', responce.data.data)
                    }
                })
        }
    },
    mounted () {
        this.tabItem = this.tabList[0]
        this.activeName = this.tabList[0].tab
        console.log(this.tabItem.tableOperateList)
        this.getApiUrl()
        this.getDetailSerial()
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
