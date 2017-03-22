<template>
<div> 
	<!-- tab栏 --> 
	<el-tabs v-model="activeName" type="card" id="tabs" @tab-click="tabClick">
		<el-tab-pane v-for="(model,index) in models" :label="model.tab" :name="'index'+index"></el-tab-pane>
	</el-tabs> 
	<!-- 操作模块 -->
       <div id="operate">
        <!-- 搜索框 -->
		 <div id="inputs">
	        <el-input
	          :placeholder="searchPlaceholder"
	          v-model="inputValue"
	          :on-icon-click="search" class="search" size="small">
	        </el-input>
	        <el-button size="small">搜索</el-button>

	         <component 
                    v-for="operate in operateComponent" 
                    :is="operate.component" 
                    :params="operate.params" 
                    :model="models[modelIndex]" 
                    class="operateBtns"
                ></component>
        <div id="btns">
        	<el-button type="primary" size="small" @click="handleAdd">新建</el-button>
	        <el-button type="primary" class="put-table" size="small">导出表格</el-button>
            <el-button type="primary" size="small">导入</el-button> 
        </div>
	  </div>
	  <!-- 新建模块 -->
	  <new v-if="isShow" :theads="theads" :tab="tab"></new>
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
			<template scope="scope">
				<component v-if="colComponent.operation" :is="colComponent.operation" :scope="scope" :model="models[modelIndex]">
				</component>
			</template>
		</el-table-column>
	</el-table>
</div>
</template>


<script>
import computed from './computed.js';
import New from "../../components/public/new.vue";
	 export default{
	 	components:{
	 		New
	 	},
	 	name:'BasicModel',
	 	props:{
	 		models:{
	 			type:Array, 
	 			default(){
	 				return[
	 					{
	 						key:'',
	 						tab:'',
	 						url:'org',
	 						urlParams:{},//从后台获取的所有数据
	 						theads:[''],
	 						searchPlaceholder:'',
	 						protos:['name'],
	 						widths:[50],
	 						colComponent:[],
	 						title:'',
	 						operateComponent: [{component: null, params: {}}],
	 					},
	 				]
	 			}
	 		}
	 	},
	 	data(){

	 		let modelIndex = this.$route.params.index?this.$route.params.index:0
	 		return {
	 			compute:this,
	 			// 搜索框内容
        		inputValue: '',
	 			// tab模块选择标志
	 			activeName:'index'+this.$route.params.index,
	 			//tab对应的模块下标
	 			modelIndex: modelIndex,
	 			// 列表数据
                tableData: [], 
                // 被选中的列表项数组
                multipleSelection: [],
                // 是否新建
                isShow:false


	 		}
	 	},
	 	mixins: [computed],
   //      watch: {
   //          key () {
   //              this.tableData = []
   //              this.getAllMsg()
   //          }
   //      }, 
	 	methods:{ 
	 		init(index=0){
	 			this.activeName='index' + index
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
            getAllMsg (params='') {
                let host = '/query'
                if(params.length) host += '?' + params
                axios.get(this.$adminUrl(this.url) + host, {params: this.urlParams})
                    .then((responce) => {
                        this.$set(this, 'tableData', responce.data.data)
                        this.paginator = responce.data
                    })
            },

            // tab点击事件
	 		tabClick(tab,event){
	 			this.modelIndex=tab.$data.index
	 			let model=this.$route.params.model
	 			this.$router.push('/index/'+this.$route.fullPath.split('/')[2]+'/'+model+'/'+this.modelIndex)
	 		},
	 		// 新建点击事件
	 		handleAdd(){
	 			this.isShow=true;
	 			console.log(this.tab);
	 		},
	 		changeIsShow(){
	 			this.isShow=false;
	 		}

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
	 			background: red;
            	display: inline-block;
            	margin: 0 pxToRem(10);
            }
</style>