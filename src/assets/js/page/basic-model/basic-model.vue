<template>
<div>
		<!-- tab栏 -->
	<el-tabs v-model="activeName" id="tabs" @tab-click="tabClick">
		<el-tab-pane v-for="(model,index) in models" :label="model.tab" :name="'index'+index"></el-tab-pane>
	</el-tabs>
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
			<template scope="scope">
				<component v-if="colComponent.operation" :is="colComponent.operation" :scope="scope" :model="models[modelIndex]">
				</component>
			</template>
		</el-table-column>
	</el-table>
</div>
</template>


<script>

import computed from './computed.js' 

	 export default{
	 	name:'BasicModel',
	 	props:{
	 		models:{
	 			type:Array,
	 			default(){
	 				return[
	 					{
	 						key:'',
	 						tab:'种植管理',
	 						urlParams:{},//从后台获取的所有数据
	 						theads:['种植管理'],
	 						protos:['name'],
	 						widths:[50],
	 						colComponent:[]

	 					}
	 				]
	 			}
	 		}
	 	},
	 	data(){
	 		return{
	 			compute:this,
	 			// tab模块选择标志
	 			activeName:'index'+this.$route.params.index,
	 			//tab对应的模块下标
	 			modelIndex:this.$route.params.index,
	 			// 列表数据
                tableData: [], 
                // 被选中的列表项数组
                multipleSelection: [],

	 		}
	 	},
	 	methods:{
	 		init(index=0){
	 			this.activeName=index
	 			this.modelIndex=index
	 			this.$set(this,'tableData',[])
	 			this.$set(this,'multipleSelection',[])
	 		},
	 		/**
             * 列表选择事件
             */
            handleSelectionChange (val) {
                this.multipleSelection = val
            },

            // tab点击事件
	 		tabClick(tab,event){
	 			this.modelIndex=tab.$data.index
	 			let model=this.$route.params.model
	 			this.$route.push('/index/'+this.$route.fullPath.split('/')[2]+'/'+model+'/'+this.modelIndex)
	 		},
	 	}
	 }
</script>