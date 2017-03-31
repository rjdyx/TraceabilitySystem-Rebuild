<template>  
<div>   
	<!-- 标题 -->
	<contain-title :settitle='settitle'>
	</contain-title>
	<!-- tab栏 --> 
	<el-tabs v-model='activeName' type='card' id='tabs' @tab-click='tabClick'>
		<el-tab-pane v-for='(model,index) in models' :label='model.tab' :name=''index'+index'></el-tab-pane>
	</el-tabs>  
	<!-- 操作模块 -->
     	<div id='operate'>      			  
		 	<div id='inputs'>

		 		<!-- 操作模块动态组件 -->
				<operate :listComponent='listComponent'></operate>

        		<!-- 搜索框 -->
		        <div class='searchOp'>
		        	<el-input
			          :placeholder='searchPlaceholder'
			          v-model='inputValue'
			          :on-icon-click='search' class='searchInp' size='small'>
		        	</el-input>
		       		<el-button size='small' class='searchBtn'>搜索</el-button>
		    	</div>

				<!-- 操作按钮 -->
	         		<component
                	v-for='typeOperate in typeComponent'
                	:is='typeOperate.component'
                	:params='typeOperate.params'
                	class='fr'
            	></component>
	 	</div>
	</div>
	<!-- 新建模块 -->
	<new v-if='isShow' :newComponent='newComponent'></new>

 	<!-- 编辑弹出框 -->
	<pop-edit :editComponent='editComponent' v-if='editShow'></pop-edit>

	<!-- 列表模块 -->
	<el-table :data='tableData' @selection-change='handleSelectionChange'>
		<!-- 序号 -->
		<el-table-column 
			label='序号' 
			:width='150'>
				<template scope='scope' class='operateBtn'>
			    	<el-checkbox v-model='checked'></el-checkbox>
			    	<span name='order'></span>
			    </template>
		</el-table-column>
		<!-- <el-table-column type='selection' width='55'>
			</el-table-column> -->
				<template v-for='(item,index) in theads'>
						<template>
							<el-table-column 
								:props='protos[index]' 
								:label='item'
								:name='protos'
								:min-width='widths[index]' 
								show-overflow-tooltip>
							</el-table-column>
						</template>
				</template>
			 <el-table-column prop='tag' label='操作' width='150' :filters='[{ text: '图片', value: '图片' }, { text: '打印', value: '打印' }]' :filter-method='filterTag'>
				<template scope='scope' class='operateBtn'>
			    	<el-button size='small' type='text' @click='handelDel(scope.$index,scope.row)'>删除</el-button>  
			    	<el-button @click='changeEditShow' type='text'>编辑</el-button> 
			    </template>
		</el-table-column>
	</el-table>

</div> 
</template>

<script>
import computed from './computed.js'
import New from '../../components/public/new.vue'
import ContainTitle from 'components/public/contain-title.vue'
import edit from '../../components/public/edit.vue'
import operate from '../../components/public/operate.vue'
import popEdit from '../../components/public/popEdit.vue'

export default {
  name: 'BasicModel',
  props: {
    models: {
      type: Array,
      default () {
        return [{
          key: '',
          tab: '',
          url: '',
          urlParams: {},
          // 从后台获取的所有数据
          theads: [''],
          searchPlaceholder: '',
          protos: ['name'],
          widths: [50],
          title: '',
          options: [],
          typeComponent: [],
          listComponent: [],
          newComponent: [{
            tab: {
              component: null,
              isNull: true,
              label: '',
              placeholder: '',
              rule: ''
            }
          }],
          editComponent: []
        }]
      }
    }
  },
  data () {
    return {
      compute: this,
      // 搜索框内容
      inputValue: '',
      // tab模块选择标志
      // activeName:'index'+this.$route.params.index,
      // tab对应的模块下标
      modelIndex: this.$route.params.index,
      // 列表数据
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }],
      // 被选中的列表项数组
      multipleSelection: [],
      // 是否新建
      isShow: false,
      editShow: false,
      msg: 1
    }
  },
  mixins: [computed],
  methods: {
    init (index = 0) {
      this.value = ''
      this.inputValue = ''
      this.activeName = 'index' + index
      this.modelIndex = index
      this.$set(this, 'tableData', [])
      this.$set(this, 'multipleSelection', [])
    },
    /**
  * 列表选择事件
     *
     */
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    // tab点击事件
    tabClick (tab, event) {
      this.modelIndex = tab.$data.index
      let model = this.$route.params.model
      // this.settitle=this.model.settitle
      this.$router.push('/index/' + this.$route.fullPath.split('/')[2] + '/' + model + '/' + this.modelIndex)
    },
    // 操作更多选项
    filterTag (value, row) {
      return row.tag === value
    },
    // 点击删除
    handelDel (index, row) {
      this.$confirm('你确定要删除该信息吗?', '信息', {
        cancelButtonText: '取消',
        confirmButtonText: '确定',
        type: 'error'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    changeIsShow () {
      this.isShow = !this.isShow
    },

    changeEditShow () {
      this.editShow = !this.editShow
    }
  },
  components: {
    ContainTitle,
    New,
    edit,
    operate,
    popEdit
  }
}

</script>


<style lang='sass' scoped>
	 @import '../../../sass/function';

	 .searchInp{
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
     .searchBtn{
     	width:62px;
     }
     .searchOp{
     	display:inline;
     	margin-left: 15px;
     }
     .margin{
     	margin-left:15px;
     }
</style>