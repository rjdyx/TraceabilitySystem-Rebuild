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
        <popNew v-if="isNewShow" :newComponent="newComponent" :url="url" @submitNew="changeNew"></popNew>
        <!-- 编辑模块 -->
        <pop-edit v-if="isEditShow" :editComponent="editComponent" :url="url" :editForm="editForm"
             @submitEdit="hangeEdit" :changeDataArr="changeDataArr"></pop-edit>
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
                    <clickMore :moreComponent="moreComponent" class="clickMoreBtn"></clickMore>
                </template>
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
            <el-button @click="delAll">删除</el-button>
            <template v-if="lotComponent!=null">
                <lotOpearte :lotComponent="lotComponent"></lotOpearte>
            </template>
            <el-button>导出表格</el-button>
        </div>

        <p class="record">共有{{num}}页，{{total_num}}条记录</p>

        <!-- 分页模块 -->
        <el-pagination
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
import popEdit from '../../components/public/popEdit.vue'
import clickMore from '../../components/public/clickMore.vue'
import lotOpearte from '../../components/public/lotOpearte.vue'
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
                    settitle: '',
                    options: [],
                    selectSearch: [],
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
                    moreComponent: [],
                    lotComponent: [],
                    hiddeEdit: false,
                    selectDefault: {}
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
            // 是否新建
            isNewShow: false,
            // 是否编辑
            isEditShow: false,
            // msg: 1,
            editBol: false,
            editForm: {},
            paginator: {},
            // 切换点击更多按钮的状态
            active: true,
            total: '',
            isIndeterminate: true,
            // 组合查询
            par: {},
            // 数组拼装
            dataArr: {},
            // 复选框选中返回对象
            checkObject: {},
            // 获取下拉框数据
            selectArrSet: []
        }
    },
    mixins: [computed],
    methods: {
        init (index = 0) {
            this.value = ''
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
        // 点击展开更多操作按钮
        showMore () {
            this.active = !this.active
            this.clickMoreshow = !this.clickMoreshow
        },
        // 显示新建表单
        changeNewShow () {
            this.isNewShow = !this.isNewShow
            if (this.newComponent[0].checkNumber !== undefined) {
                this.newComponent[0].components[this.newComponent[0].checkNumber].rule[1].url = this.url
            }
            if (this.newComponent[0].selectUrl) {
                var selectArr = []
                let selectUrl = this.newComponent[0].selectUrl[0]
                let selectData = this.newComponent[0].selectUrl[1]
                selectArr.push(this.newComponent[0].selectUrl[2])
                selectArr.push(this.newComponent[0].selectUrl[3])
                selectArr.push(this.newComponent[0].selectUrl[4])
                axios.get(this.$adminUrl(selectUrl + '/changeSelect'), {params: {'selectData': selectData}})
                .then((responce) => {
                    if (responce.data.length !== 0) {
                        this.newComponent[0].components[0].options = this.$selectData(this.url, responce.data, selectArr)
                    }
                })
                .catch(err => {
                    console.dir(err)
                })
            }
        },
        // 显示编辑表单
        changeEditShow (index, row) {
            this.isEditShow = !this.isEditShow
            if (row !== undefined) {
                if (this.editComponent[0].checkNumber !== undefined) {
                    this.editComponent[0].components[this.editComponent[0].checkNumber].rule[1]['id'] = row.id
                    this.editComponent[0].components[this.editComponent[0].checkNumber].rule[1]['url'] = this.url
                }
                if (this.editComponent[0].selectUrl) {
                    var selectArr = []
                    let selectUrl = this.editComponent[0].selectUrl[0]
                    let selectData = this.editComponent[0].selectUrl[1]
                    selectArr.push(this.editComponent[0].selectUrl[2])
                    selectArr.push(this.editComponent[0].selectUrl[3])
                    selectArr.push(this.editComponent[0].selectUrl[4])
                    axios.get(this.$adminUrl(selectUrl + '/changeSelect'), {params: {'selectData': selectData}})
                    .then((responce) => {
                        if (responce.data.length !== 0) {
                            this.editComponent[0].components[0].options = this.$selectData(this.url, responce.data, selectArr)
                        }
                    })
                    .catch(err => {
                        console.dir(err)
                    })
                }
                if (row.area !== undefined) {
                    row.area = String(parseInt(row.area))
                }
                this.editForm = row
            }
        },
        // 获取数据
        getAllMsg (data = '') {
            this.par.params = data
            axios.get(this.$adminUrl(this.url), {params: this.par})
                .then((responce) => {
                // 数据转换
                    if (responce.data.data.length !== 0) {
                        var ret = this.$conversion(this.changeDataArr, responce.data.data, 1)
                        ret = this.$eltable(ret)
                        this.$set(this, 'tableData', ret)
                        this.total_num = responce.data.total
                        this.num = responce.data.last_page
                        this.paginator = responce.data
                    } else {
                        this.$set(this, 'tableData', responce.data.data)
                    }
                })
                .catch(err => {
                    console.dir(err)
                })
        },
        // 文本查询
        textFind () {
            this.dataArr['query_text'] = this.inputValue
            if (this.selectVal !== '') {
                this.dataArr[this.selectSearch[0]] = this.selectVal
            }
            this.pageChange(1)
        },
        // 下拉框查询
        selectFind (val) {
            this.selectVal = val
            // this.dataArr = {}
            if (val !== '') {
                this.dataArr['query_text'] = this.inputValue
                this.dataArr[this.selectSearch[0]] = val
            } else {
                this.dataArr = ''
            }
            this.pageChange(1)
        },
        // 分页跳转
        pageChange (val) {
            if (this.dataArr === '') {
                this.dataArr = {}
            }
            this.dataArr['page'] = val
            this.getAllMsg(this.dataArr)
        },
        // 全选获取数据
        handleSelectionChange (val) {
            this.checkObject = val
        },
        // 删除数据
        delSuccess (index) {
            this.tableData.splice(index, 1)
        },
        // 批量删除
        delAll () {
            this.$confirm('你确定要删除选中信息?', '信息', {
                cancelButtonText: '取消',
                confirmButtonText: '确定',
                type: 'error'
            }).then(() => {
                if (this.checkObject.length !== undefined && this.checkObject.length !== 0) {
                    var delArr = []
                    for (let key in this.checkObject) {
                        delArr.push(this.checkObject[key].id)
                    }
                    var paramsDel = { 'ids': delArr }
                    axios.post(this.$adminUrl('util/batch-delete/' + this.url), paramsDel)
                    .then((responce) => {
                        if (responce.data === 'true') {
                            this.pageChange(1)
                            this.$message({
                                type: 'success',
                                message: '批量删除成功'
                            })
                        } else {
                            this.$message.error('批量删除失败')
                        }
                    })
                }
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                })
            })
        },
        // 新建数据
        changeNew (val) {
            if (val !== 'false') {
                this.isNewShow = false
                this.pageChange(1)
                this.$message({
                    type: 'success',
                    message: '新增数据成功'
                })
            } else {
                this.$message.error('新增数据失败')
            }
        },
        // 编辑修改数据
        hangeEdit (val) {
            if (val !== 'false') {
                this.isEditShow = false
                this.pageChange(1)
                this.$message({
                    type: 'success',
                    message: '编辑数据成功'
                })
            } else {
                this.$message.error('编辑数据失败')
            }
        },
        // 获取下拉框数据
        getSelect () {
            axios.get(this.$adminUrl(this.url), {params: {'getSelect': '444'}})
                .then((responce) => {
                    if (responce.data.length !== 0) {
                        let opt = this.$selectData(this.url, responce.data, this.selectValueId)
                        this.selectArrSet.push(this.selectDefault)
                        for (let key of Object.keys(opt)) {
                            this.selectArrSet.push(opt[key])
                        }
                        this.listComponent[0].components[0].options = this.selectArrSet
                    }
                })
                .catch(err => {
                    console.dir(err)
                })
        }
    },
    mounted () {
        // 获取下拉框
        if (this.selectValueId) {
            this.getSelect()
        }
        // 获取列表信息
        this.getAllMsg()
    },
    watch: {
        key () {
            this.tableData = []
            if (this.selectValueId !== undefined) {
                this.getSelect()
            }
            this.getAllMsg()
            this.selectArrSet = []
        }
    },
    components: {
        ContainTitle,
        popNew,
        edit,
        operate,
        popEdit,
        clickMore,
        lotOpearte
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
        padding: 0px 5px 0px 8px;
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
     
     
     
</style>
