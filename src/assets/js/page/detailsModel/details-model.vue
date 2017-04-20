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
         <el-col :span="5" v-for="item in theads" class="text-small">{{item}}:</el-col>
    </el-row>
  	
  <!-- tab栏 --> 
    <el-tabs v-model="activeName" type="card" id="tabs" @tab-click="tabClick">
        <el-tab-pane :label='tabItem.tab' :name='tabItem.tab' v-for="
        tabItem in tabList">
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
		        <!-- <popNew v-if="isNewShow" :newComponent="newComponent" :url="url" @submitNew="changeNew"></popNew> -->
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
	                <template>
                        <el-button type="text" size="small" v-for="operateItem in tabItem.bottomOperateList">{{operateItem.operateName}}</el-button> 
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
        </el-tab-pane>
    </el-tabs> 
		
    
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
export default {
    name: 'BasicModel',
    props: {
        models: {
            type: Object,
            default () {
                return {
                    key: '',
                    tab: '',
                    theads: [],
                    protos: [],
                    tabList: []
                }
            }
        }
    },
    data () {
        return {
            activeName: ''
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
            // this.modelIndex = tab.$data.index
        },
        // 显示新建表单
        changeNewShow () {
            // this.isNewShow = !this.isNewShow
        },
        // 显示编辑表单
        changeEditShow (index, row) {
            // this.isEditShow = !this.isEditShow
        },
        handleSelectionChange () {
        }
    },
    mounted () {
        this.activeName = this.tabList[0].tab
        console.log(this.tabList[0].bottomOperateList)
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
   .fr{
     	float:right;
     }
      .fl{
     	float:left;
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
