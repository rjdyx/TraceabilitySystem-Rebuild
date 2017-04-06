/**
 * 
 * 基础模块组件
 * @author 舒丹彤 
 * @date 2017/03/14
 * 
 */
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
      <div id="inputs">   
        <operate :listComponent="listComponent" @selectVal="selectFind"></operate>

          <!-- 搜索框 -->
          <div class="searchOp"> 
              <el-input
                :placeholder="searchPlaceholder"
                v-model="inputValue"
                :on-icon-click="search" class="searchInp" size="small">
              </el-input>
              <el-button size="small" class="searchBtn" @click="textFind">搜索</el-button>
          </div>

        <!-- 操作按钮 -->
        <component
            v-for="typeOperate in typeComponent"
            :is="typeOperate.component"
            :params="typeOperate.params"
            class="fr"
        ></component>
      </div>
    
    <!-- 新建模块 -->
    <new v-if="isShow" :newComponent="newComponent"></new>

  </div>
  <!-- 列表模块 -->
  <el-table :data="tableData">
      <!-- checkbox -->
      <el-table-column width="50">
          <template scope="scope">
            <a href="#">
              <el-checkbox v-model="checked"></el-checkbox>
            </a>
          </template>
      </el-table-column>
      <!-- 序号 -->
      <el-table-column width="80" label="序号" type="index" sortable>
      </el-table-column>

      <!-- 中间列表模块 -->
      <template v-for="(item,index) in theads">
          <template>
            <el-table-column 
              :prop="protos[index]" 
              :label="item"
              :min-width="widths[index]" 
              show-overflow-tooltip>
            </el-table-column>
          </template> 
      </template>

      <!-- 列表操作模块 -->
      <el-table-column 
      label="操作">
        <template scope="scope" class="operateBtn">
            <template v-if="moreComponent!=null">
              <clickMore v-if="clickMoreshow" class="clickMoreBtn" :moreComponent="moreComponent"></clickMore>
              <i @click="showMore" :class="{'active':active,'unactive':!active}"></i>
            </template>
              <template>
                <i>
                <el-button size="small" type="text" @click="handelDel(scope.$index,scope.row)" class="btndel">删除</el-button>  
              </i>
              <i>
                <el-button type="text" size="small" class="btn">编辑</el-button>
              </i>
              </template>
          </template>
    </el-table-column>
  </el-table>

  <div class="footer">
    <!-- 全选 -->
    <template>
      <el-checkbox class="allChecked" @change="selectAll" v-model="selectall"></el-checkbox>
    </template>
    <div class="operate-foot">
      <el-button>删除</el-button>
      <el-button>导出表格</el-button>
    </div>
    <!-- <div class="block">
      
    </div> -->
    <p class="record">共有{{num}}页，{{total}}条记录</p>
  </div>
    <!-- 分页模块 -->
    <!-- <el-pagination
      layout="prev, pager, next"
      :total="paginator.total" 
      :page-size="paginator.per_page"
      class="pager"
      @current-change="pageChange" small>
    </el-pagination> -->
  </div>
</div> 
</template>
 
<script>
import computed from './computed.js'
import New from '../../components/public/new.vue'
import ContainTitle from 'components/public/contain-title.vue'
import edit from '../../components/public/edit.vue'
import operate from '../../components/public/operate.vue'
import popEdit from '../../components/public/popEdit.vue'
import clickMore from '../../components/public/clickMore.vue'
const cityOptions = ['上海', '北京', '广州', '深圳']
export default {
  name: 'BasicModel',
  props: {
    models: {
      type: Array,
      default () {
        return [{
          key: '',
          tab: '',
          tablePager: Object,
          url: '',
          urlParams: {},
          // 从后台获取的所有数据
          theads: [],
          searchPlaceholder: '',
          protos: ['name'],
          widths: [50],
          title: '',
          options: [],
          search: [],
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
          editComponent: [],
          moreComponent: []
        }]
      }
    }
  },
  data () {
    return {
      compute: this,
      // 搜索框内容
      inputValue: '',
      // 下拉框
      selectVal: '',
      // tab模块选择标志
      // activeName:'index'+this.$route.params.index,
      // tab对应的模块下标
      modelIndex: this.$route.params.index,
      // 列表数据
      tableData: [],
      // 被选中的列表项数组
      multipleSelection: [],
      // search: [],
      // 是否新建
      isShow: false,
      // editShow: false,
      msg: '',
      // 切换点击更多按钮的状态
      active: true,
      // 点击展开更多按钮
      clickMoreshow: false,
      total: '',
      checked: '',
      selectall: '',
      allchecked: false,
      checkAll: true,
      checkedCities: ['上海', '北京'],
      cities: cityOptions,
      isIndeterminate: true,
      // 组合查询
      par: {},
      // 数组拼装
      arr: {},
      paginator: {
        total: 0,
        per_page: 0
      }
    }
  },
  mixins: [computed],
  methods: {
    init (index = 0) {
      this.value = ''
      this.inputValue = ''
      this.selectVal = ''
      this.activeName = 'index'
      this.modelIndex = index
      this.$set(this, 'tableData', [])
      this.$set(this, 'multipleSelection', [])
    },
    /**
  * 列表选择事件
     *
     */
    // tab点击事件
    tabClick (tab, event) {
      this.modelIndex = tab.$data.index
      let model = this.$route.params.model
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
        axios.delete(this.$adminUrl(this.url + '/' + row.id))
          .then((responce) => {
            // 删除成功回调方法
            this.delSuccess(index, row)
            this.$message({
              type: 'success',
              message: '删除成功'
            })
          })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // singelSelect (el) {
    //   this.selectall = !this.selectall
    //   console.log(el)
    // },
    // 点击展开更多操作按钮
    showMore () {
      this.active = !this.active
      this.clickMoreshow = !this.clickMoreshow
    },
    selectAll () {
      this.checked = !this.checked
    },
    // 获取数据
    getAllMsg (data = '') {
      this.par.params = data
      axios.get(this.$adminUrl(this.url), {params: this.par})
        .then((responce) => {
        // 数据转换
          var ret = this.$conversion(this.url, responce.data.data)
          this.$set(this, 'tableData', ret)
          // this.total = this.tableData.length
          // this.paginator = responce.data
        })
    },
    // 文本查询
    textFind () {
      let data = { 'query_text': this.inputValue }
      if (this.selectVal !== '') {
        data[this.search[0]] = this.selectVal
      }
      this.getAllMsg(data)
    },
    // 下拉框查询
    selectFind (val) {
      this.selectVal = val
      let data = {}
      if (val !== '') {
        data['query_text'] = this.inputValue
        data[this.search[0]] = val
      }
      this.getAllMsg(data)
    },
    delSuccess (index) {
      this.tableData.splice(index, 1)
    }
  },
  components: {
    ContainTitle,
    New,
    edit,
    operate,
    popEdit,
    clickMore
  },
  mounted () {
    this.selectKey = this.search[0]
    this.getAllMsg()
  },
  watch: {
    key () {
      this.tableData = []
      this.getAllMsg()
    }
  },
  computed: {
  }
}

</script>


<style lang='sass'>
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
     .el-icon-caret-left{
      padding-right: 15px;
     }
     i:hover{
      cursor: pointer;
     }
     .active,.unactive{
      width: 0;
      height: 0;
      display: inline-block;
      vertical-align: middle;
      margin: 0 10px 0 10px;
      border-bottom: 10px solid transparent;
      border-top: 10px solid transparent;
     }
     .active{
      border-right: 18px solid #000;
     }
     .unactive{
      border-left: 18px solid #000;
     }
     .clickMoreBtn{
      display: inline-block;
     }
     .el-table th{
      text-align:center;
     }
     .el-table th:last-child{
      border-left: 1px solid red;
     }
     .btn span{
      border-left: 1px solid #a7bad6;
     }
     .btndel span{
      padding: 0px 5px 0px 5px;
     }
     .el-table td, .el-table th.is-leaf{
        text-align: center;
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
          padding-top: 15px;
          padding-right: 20px;
        }
        .operate-foot{
          padding-left: 15px;
          display: inline-block;
         }
        .allChecked{
          padding-left: 17px;
          padding-top: 15px;
         }
        .record{
          float: right;
          padding: 15px 10px;
         }
     }
     
     
     
</style>
