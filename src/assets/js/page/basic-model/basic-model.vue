<template>
<div>   
	<!-- 标题 -->
	<contain-title :settitle="settitle">
	</contain-title>
	<!-- tab栏 --> 
	<el-tabs v-model="activeName" type="card" id="tabs" @tab-click="tabClick">
		<el-tab-pane v-for="(model,index) in models" :label="model.tab" :name="'index'+index"></el-tab-pane>
	</el-tabs> 
	<!-- 操作模块 -->
       <div id="operate"> 
      			 
        <!-- 搜索框 -->
		 <div id="inputs">
				<!-- 果蔬按钮 -->
				 <component 
                    v-for="operate in onlyComponent" 
                    :is="operate.component"
                    class="fl" 
                ></component>
				<!-- 下拉选框 -->
		 		<component 
                    v-for="seoperate in operateComponent" 
                    :is="seoperate.component" 
                    class="operateBtns"
                    :options="seoperate.params"
                    :value="seoperate.params.value"
                ></component>
                <!-- 日期 -->
                <component 
                    v-for="dateoperate in dateComponent" 
                    :is="dateoperate.component" 
                    :params="dateoperate.params"
                    class="operateBtns"
                ></component>
				<!-- 搜索 -->
		        <el-input
		          :placeholder="searchPlaceholder"
		          v-model="inputValue"
		          :on-icon-click="search" class="search" size="small">
		        </el-input>
		        <el-button size="small">搜索</el-button>
				<!-- 操作按钮 -->
	         	<component 
                	v-for="typeOperate in typeComponent" 
                	:is="typeOperate.component" 
                	:params="typeOperate.params"
                	class="operateBtns fr"
            	></component>
            	
	  	</div>
     </div>

	<!-- 列表模块 -->
	<el-table :data="tableData" @selection-change="handleSelectionChange">
		<el-table-column type="selection" width="55"></el-table-column>
			<template v-for="(item,index) in theads">
					<el-table-column 
						:props="protos[index]" 
						:label="item" 
						:min-width="widths[index]" 
						show-overflow-tooltip>
					</el-table-column>
			</template>
		<el-table-column 
		label="操作" 
		:width="150">
		</el-table-column>
	</el-table>
</div>
</template>


<script>
import computed from './computed.js'  
import ContainTitle from 'components/public/contain-title.vue'
	 export default{
	 	name:'BasicModel',
	 	props:{
	 		models:{
	 			type:Array, 
	 			default(){
	 				return[
	 					{
	 						key:'',
	 						tab:'',
	 						url:'',
	 						urlParams:{},//从后台获取的所有数据
	 						theads:[''],
	 						searchPlaceholder:'',
	 						protos:['name'],
	 						widths:[50],
	 						colComponent:[], 
	 						title:'',
	 						settitle:'',
	 						options:[],
	 						operateComponent: [{component: null,params: {}}],
	 						typeComponent: [{component: null}],
	 						dateComponent: [{component: null}],
	 						onlyComponent:[{component: null}],
	 					},
	 				]
	 			}
	 		}
	 	},
	 	data(){
	 		return {
	 			compute:this,
	 			// 搜索框内容
        		inputValue: '',
	 			// tab模块选择标志
	 			activeName:'index'+this.$route.params.index,
	 			//tab对应的模块下标
	 			modelIndex: this.$route.params.index,
	 			// 列表数据
                tableData: [], 
                // 被选中的列表项数组
                multipleSelection: [],

	 		}
	 	},
	 	mixins: [computed],
	 	methods:{ 
	 		init(index=0){
	 			this.value=""
	 			this.inputValue=''
	 			this.activeName='index' + index
	 			this.modelIndex=index
	 			this.$set(this,'tableData',[])
	 			this.$set(this,'multipleSelection',[])
	 		},
	 		/**
	 		 * 
             * 列表选择事件
             */
            handleSelectionChange (val) {
                this.multipleSelection = val
            },
            // tab点击事件
	 		tabClick(tab,event){
	 			this.modelIndex=tab.$data.index
	 			let model=this.$route.params.model
	 			this.$router.push('/index/'+this.$route.fullPath.split('/')[2]+'/'+model+'/'+this.modelIndex)
	 			this.settitle=tab.$data.index.settitle
	 		},
	 	},
	 	components:{
	 		ContainTitle
	 	}
	 }
</script>


<style lang="sass" scoped>
	 @import "../../../sass/function";

	 .search{
	 	width:161px;
	 	margin-bottom:10px;
	 	font-size:12px;
	 	margin-right:10px;
	 }
	 #btns{
	 	float:right;
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
</style>