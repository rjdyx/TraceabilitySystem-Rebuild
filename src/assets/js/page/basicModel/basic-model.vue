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
    <el-tabs v-model="activeName" id="tabs" @tab-click="tabClick" type="card">
        <el-tab-pane v-for="(model,index) in models" :label="model.tab" :name="'index'+index">

        </el-tab-pane>
    </el-tabs>  
    <!-- 操作模块 -->
    <div id="operate">
        <div id="inputs">
            <operate :listComponent="listComponent" @selectVal="selectFind" @dateVal="dateFind"></operate>
            
            <!-- 搜索框 -->
            <div class="searchOp"> 
                <el-input   
                    :placeholder="searchPlaceholder"
                    v-model="inputValue"
                    :on-icon-click="search" class="searchInp" size="small">
                </el-input>
                <el-button size="small" class="searchBtn" @click="textAndDateFind">搜索</el-button>
            </div>

            <!-- 操作按钮 -->
            <component
                v-for="typeOperate in typeComponent"
                :is="typeOperate.component"
                :params="typeOperate.params"
                class="fr rightBtn"
                :url="url"
                :checkObject="checkObject"
                :type="paramsIndex"
            ></component>
            
        </div>

        <!-- 新建模块 --> 
        <transition name="fade">
            <popNew v-if="isNewShow" :newComponent="newComponent" :checkboxShow="checkboxShow" :url="url" @submitNew="changeNew" @setAssoc="getAssoc" @setTable="getTable" ></popNew>
        </transition>
        <!-- 编辑模块 -->
        <transition name="fade">
            <pop-edit v-if="isEditShow" :editComponent="editComponent" :roleId="roleId" :checkboxShow="checkboxShow" :url="url" :editForm="editForm"
             @submitEdit="hangeEdit" :changeDataArr="changeDataArr" :editDefault="editDefault"></pop-edit>
        </transition>
        <!-- 打印模块 -->
        <transition name="fade">
            <printf v-if="isPrintShow" :printComponent="printComponent" :url="url" :printForm="printForm"></printf>
        </transition>
        <!-- 权限模块 -->
        <transition name="fade">
            <permissionCheckbox v-if="isPermissionShow" :permissions="permissions" :companyId="companyId"></permissionCheckbox>
        </transition>
        <!-- 角色权限模块 -->
        <transition name="fade">
            <roleCheckbox v-if="isRoleShow" :rowId="rowId"></roleCheckbox>
        </transition>
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
                    :label="item"
                    :prop="protos[index]"
                    :min-width="widths[index]"
                    show-overflow-tooltip>
                    <template  scope="scope">
                            <div v-if="item.includes('批次号')" slot="reference" class="name-wrapper pcActive" @click="jumpDetails(scope.row)">
                                {{ scope.row[protos[index]] }}
                            </div>
                            <div v-else-if="protos[index]=='img'" slot="reference" class="name-wrapper">
                                <img v-if="tableData[scope.$index][protos[index]]!=null && tableData[scope.$index][protos[index]]!=''" 
                                    :src="$img('images/ok.png')">
                            </div>
                            <div v-else slot="reference" class="name-wrapper" >
                                {{ scope.row[protos[index]] }}
                            </div>
                    </template>
                </el-table-column>
            </template>
        </template>
        <!-- 列表操作模块 -->
        <el-table-column 
        label="操作" v-if="checkOperate==null">
            <template scope="scope" class="operateBtn">
                <template v-if="moreComponent!=null">
                    <clickMore :companyId="companyId" :moreComponent="moreComponent" 
                    @showMore="moreShow(scope.$index,scope.row)" @showPermission="permissionShow(scope.$index,scope.row)" @showDetail="detailShow(scope.$index,scope.row)" class="clickMoreBtn" @return-permission="getPermission"></clickMore>
                </template>
                <template>

                    <el-button type="text" size="small" @click="roleShow(scope.$index,scope.row)" v-if="hiddeRole">权限</el-button>

                    <el-button type="text" size="small" @click="changeEditShow(scope.$index,scope.row)" v-if="!hiddeEdit" v-bind:class="{'btn':hiddeRole}">编辑</el-button>

                    <el-button type="text" size="small" v-if="hiddeShow">查看</el-button>
                        
                    <el-button size="small" type="text" @click="handelDel(scope.$index,scope.row)" v-bind:class="{'btn':!hiddeEdit}">删除</el-button>
                </template>
            </template>
        </el-table-column>
    </el-table>

    <div class="footer">
        <div class="operate-foot">
            <el-button @click="delAll" v-if="checkOperate==null">删除</el-button>
            <template v-if="lotComponent!=null">
                <lotOpearte :lotComponent="lotComponent"></lotOpearte>
            </template>
            <el-button @click="excel">导出表格</el-button>
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
import popEdit from '../../components/public/popEdit.vue'
import clickMore from '../../components/public/clickMore.vue'
import lotOpearte from '../../components/public/lotOpearte.vue'
import printf from '../../components/public/printf.vue'
import permissionCheckbox from '../../components/public/permissionCheckbox.vue'
import company from '../../page/plant-basic/company.js'
import roleCheckbox from '../../components/public/roleCheckbox.vue'
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
                    batch: '',
                    title: '',
                    settitle: '',
                    options: [],
                    paramsIndex: {},
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
                    printComponent: [],
                    lotComponent: [],
                    hiddeEdit: false,
                    hiddeShow: false,
                    checkOperate: null,
                    hiddeRole: false,
                    hiddeUser: false,
                    selectDefault: {}
                }]
            }
        }
    },
    data () {
        return {
            companyId: '',
            compute: this,
            // 搜索框内容
            inputValue: '',
            // 下拉框
            selectVal: [],
            // 分页
            pageVal: 1,
            // tab模块选择标志
            modelIndex: 0,
            activeName: 'index0',
            modelName: this.$route.params,
            // 列表数据
            tableData: [],
            // 被选中的列表项数组
            multipleSelection: [],
            // 是否新建
            isNewShow: false,
            // 是否编辑
            isEditShow: false,
            // 是否打印
            isPrintShow: false,
            isPermissionShow: false,
            checkboxShow: false,
            // msg: 1,
            editBol: false,
            editForm: {},
            printForm: {},
            editDefault: {},
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
            selectArrSet: [],
            // 新增编辑下拉框数据
            selectNewEdit: [],
            // 批次号
            isPcActive: true,
            permissions: company,
            // 已选择的权限
            checkeds: {},
            roleId: null,
            rowId: null,
            isRoleShow: false
        }
    },
    // 混合
    mixins: [computed],
    methods: {
        init (index = 0) {
            this.value = ''
            this.activeName = 0
            this.$set(this, 'tableData', [])
            this.$set(this, 'multipleSelection', [])
        },
        jumpDetails (row) {
            var id = row.id
            if (row.code !== undefined) {
                id = row.pack_id
            } else if (row.harvest_change !== undefined) {
                id = row.cultivate_id
            }
            this.$router.push('/index/details/' + this.batch + '/' + id)
        },
        /**
         * 列表选择事件
         * tab点击事件
         **/
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
                console.log(row.id)
                axios.delete(this.$adminUrl(this.url + '/' + row.id))
                    .then((responce) => {
                        this.getSelect()
                        this.boxArr(this.dataArr)
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
        // 关闭角色弹窗
        closeRoleShow (val) {
            this.isRoleShow = !this.isRoleShow
        },
        // 显示新建表单
        changeNewShow () {
            this.isNewShow = !this.isNewShow
            var com = this.newComponent[0]
            if (com.checkboxShow !== undefined) {
                this.checkboxShow = com.checkboxShow
            }
            if (com.checkNumber !== undefined) {
                for (let index in com.checkNumber) {
                    com.components[com.checkNumber[index]].rule[1].url = this.url
                }
            }
            if (com.selectUrl) {
                for (let key in com.selectUrl) {
                    let newArr = this.$addAndEditSelectMethod(com.selectUrl[key])
                    this.$dataGet(this, newArr.selectUrl + '/changeSelect', {'selectData': newArr.selectData})
                        .then((responce) => {
                            if (responce.data.length !== 0) {
                                this.selectNewEdit[key] = []
                                this.selectNewEdit[key].push(com.selectInit[key])
                                let newOpt = this.$selectData(this.url, responce.data, newArr.selectArr)
                                for (let item of Object.keys(newOpt)) {
                                    this.selectNewEdit[key].push(newOpt[item])
                                }
                                com.components[com.popNumber[key]].options = this.selectNewEdit[key]
                            }
                        })
                }
            }
            // 无分类的下拉框模块查询
            if (com.selectUrl2) {
                for (let key in com.selectUrl2) {
                    let newArr = this.$addAndEditSelectMethod(com.selectUrl2[key])
                    if (com.selectAvl2 !== undefined) {
                        var type = com.selectAvl2[key]
                    }
                    this.$dataGet(this, '/util/selects', {table: newArr.selectUrl, type: type})
                        .then((responce) => {
                            if (responce.data.length !== 0) {
                                this.selectNewEdit[key] = []
                                this.selectNewEdit[key].push(com.selectInit2[key])
                                let newOpt = this.$selectData(this.url, responce.data, newArr.selectArr)
                                for (let item of Object.keys(newOpt)) {
                                    this.selectNewEdit[key].push(newOpt[item])
                                }
                                com.components[com.popNumber2[key]].options = this.selectNewEdit[key]
                            }
                        })
                }
            }
        },
        // 显示编辑表单
        changeEditShow (index, row) {
            this.roleId = row.id
            this.isEditShow = true
            var com = this.editComponent[0]
            if (com.checkboxShow !== undefined) {
                this.checkboxShow = com.checkboxShow
            }
            if (row !== undefined) {
                if (com.checkNumber !== undefined) {
                    for (let index in com.checkNumber) {
                        com.components[com.checkNumber[index]].rule[1]['id'] = row.id
                        com.components[com.checkNumber[index]].rule[1]['url'] = this.url
                    }
                }
                if (com.selectUrl) {
                    for (let key in com.selectUrl) {
                        let editArr = this.$addAndEditSelectMethod(com.selectUrl[key])
                        this.$dataGet(this, editArr.selectUrl + '/changeSelect', {'selectData': editArr.selectData})
                            .then((responce) => {
                                if (responce.data.length !== 0) {
                                    com.components[com.popNumber[key]].options = this.$selectData(this.url, responce.data, editArr.selectArr)
                                }
                            })
                    }
                }
                // 无分类的下拉框模块查询
                if (com.selectUrl2) {
                    for (let key in com.selectUrl2) {
                        let editArr = this.$addAndEditSelectMethod(com.selectUrl2[key])
                        this.$dataGet(this, '/util/selects', {table: editArr.selectUrl})
                            .then((responce) => {
                                if (responce.data.length !== 0) {
                                    com.components[com.popNumber2[key]].options = this.$selectData(this.url, responce.data, editArr.selectArr)
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
        // 关闭新增弹窗
        closeNewShow () {
            this.isNewShow = false
        },
        // 关闭编辑弹窗
        closeEditShow () {
            this.isEditShow = false
        },
        // 获取数据
        getAllMsg (data = {}) {
            if (this.paramsIndex !== undefined) {
                var type = this.paramsIndex
            }
            this.$dataGet(this, this.url, {params: data, type: type})
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
                        this.total_num = 0
                        this.num = 0
                        this.paginator = 0
                    }
                })
        },
        // 文本与时间按钮查询
        textAndDateFind () {
            this.dataArr['query_text'] = this.inputValue
            console.log(this.dataArr)
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
            console.log('下拉框查询')
            console.log(this.dataArr)
        },
        // 日期存储
        dateFind (val) {
            this.dataArr[val[0]] = val[1]
        },
        // 组合查询
        boxArr (dataArr) {
            this.getAllMsg(dataArr)
        },
        // 分页跳转
        pageChange (val) {
            this.dataArr['page'] = val
            this.boxArr(this.dataArr)
        },
        // 全选获取数据
        handleSelectionChange (val) {
            this.checkObject = val
        },
        // 批量删除
        delAll () {
            if (this.checkObject.length !== undefined && this.checkObject.length !== 0) {
                this.$confirm('你确定要删除选中信息?', '信息', {
                    cancelButtonText: '取消',
                    confirmButtonText: '确定',
                    type: 'error'
                }).then(() => {
                    var delArr = []
                    for (let key in this.checkObject) {
                        delArr.push(this.checkObject[key].id)
                    }
                    var paramsDel = { 'ids': delArr }
                    axios.post(this.$adminUrl('util/batch-delete/' + this.url), paramsDel)
                    .then((responce) => {
                        if (responce.data === 'true') {
                            this.getSelect()
                            this.boxArr(this.dataArr)
                            this.$message({
                                type: 'success',
                                message: '批量删除成功'
                            })
                        } else {
                            this.$message.error('批量删除失败')
                        }
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    })
                })
            }
        },
        // 批量导出excel
        excel () {
            if (this.checkObject.length !== undefined && this.checkObject.length !== 0) {
                var excelArr = []
                var str = ''
                for (let key in this.checkObject) {
                    excelArr.push(this.checkObject[key].id)
                }
                str = str + '?excel=' + excelArr
                if (this.paramsIndex !== undefined) {
                    str = str + '&type=' + this.paramsIndex
                }
                window.location.href = this.$adminUrl(this.url) + str
            }
        },
        // 新建数据
        changeNew (val) {
            if (val !== 'false') {
                this.isNewShow = false
                this.boxArr(this.dataArr)
                this.getSelect()
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
                this.getSelect()
                this.boxArr(this.dataArr)
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
            if (this.paramsIndex !== undefined) {
                var type = this.paramsIndex
            }
            this.selectArrSet = []
            var getSelect = {'getSelect': '444'}
            this.$dataGet(this, this.url, {getSelect: getSelect, type: type})
                .then((responce) => {
                    // 数据转换
                    if (responce.data.length !== 0) {
                        for (let index in this.selectValueId) {
                            this.selectArrSet[index] = []
                            let opt = this.$selectData(this.url, responce.data, this.selectValueId[index])
                            this.selectArrSet[index].push(this.selectDefault[index])
                            for (let key of Object.keys(opt)) {
                                this.selectArrSet[index].push(opt[key])
                            }
                            this.listComponent[0].components[index].options = this.selectArrSet[index]
                        }
                    } else {
                        for (let index in this.selectValueId) {
                            this.selectArrSet[index] = []
                            this.selectArrSet[index].push(this.selectDefault[index])
                            this.listComponent[0].components[index].options = this.selectArrSet[index]
                        }
                    }
                })
        },
        // 根据下拉框获取表格数据
        getTable (val) {
            var com = this.newComponent[0]
            if (val[1] !== '' && val[1] !== undefined) {
                var getSelect = {'getSelect': '444'}
                var curl = {'curl': com.curl}
                var routeId = {'routeId': com.labUrl}
                var opqcurl = {'opqcurl': com.opqcurl}
                let surl = val[1] + '/' + com.labUrl
                this.$dataGet(this, surl, {getSelect, curl, routeId, opqcurl})
                    .then((responce) => {
                        this.$set(com.components[com.assocNum], 'tableVal', responce.data)
                    })
            } else {
                this.$set(com.components[com.assocNum], 'tableVal', [])
            }
        },
        // 点击删除
        userRole (row, index) {
            this.isPermissionShow = !this.isPermissionShow
        },
        // 获取关联下拉框
        getAssoc (val) {
            if (val[2] !== '') {
                var url = val[2] + '/' + val[0][0]
                var getSelect = {'getSelect': '444'}
                this.$dataGet(this, url, {getSelect})
                    .then((responce) => {
                        if (responce.data.length !== 0) {
                            let asr = []
                            asr.push(val[0][4])
                            let newOpt = this.$selectData(url, responce.data.data, [val[0][1], val[0][2], true])
                            for (let item of Object.keys(newOpt)) {
                                asr.push(newOpt[item])
                            }
                            this.newComponent[0].components[val[0][3]].options = asr
                        }
                    })
            } else {
                this.newComponent[0].components[val[0][3]].options = []
            }
        },
        moreShow (index, row) {
            this.isPrintShow = !this.isPrintShow
            this.printForm = row
        },
        permissionShow (index, row) {
            this.companyId = row.id
            this.isPermissionShow = true
            console.log('this.companyId:' + this.companyId)
        },
        roleShow (index, row) {
            this.isRoleShow = true
            this.rowId = row.id
        },
        detailShow (index, row) {
            var id = row.id
            this.$router.push('/index/details/' + this.batch + '/' + id)
        },
        getPermission (data) {
            this.checkeds = data
            console.log(this.checkeds)
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
        models () {
            this.modelIndex = 0
            this.activeName = 'index0'
        },
        key () {
            this.tableData = []
            this.dataArr = {}
            if (this.selectValueId !== undefined) {
                this.getSelect()
            }
            this.getAllMsg()
            this.inputValue = ''
        }
    },
    components: {
        ContainTitle,
        popNew,
        edit,
        operate,
        popEdit,
        clickMore,
        lotOpearte,
        printf,
        permissionCheckbox,
        roleCheckbox
    }
}
</script>


<style lang='sass'>
    .pcActive{
        /*color: blue;*/
        text-decoration: underline;
        cursor:pointer;
    }
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
.pcActive {
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}
.searchInp {
  width: 161px;
  margin-bottom: 10px;
  font-size: 12px;
  margin-right: 10px;
}
#btns {
  float: right;
}
.fr {
  float: right;
}
.fl {
  float: left;
}
.searchBtn {
  width: 62px;
}
.searchOp {
  display: inline;
}
.margin {
  margin-left: 15px;
}
.el-icon-caret-left {
  padding-right: 15px;
}
i {
  &:hover {
    cursor: pointer;
  }
}
.clickMoreBtn {
  display: inline-block;
}
.el-table {
  th {
    text-align: center;
    &:last-child {
      border-left: 1px solid red;
    }
  }
}
.btn {
  span {
    border-left: 1px solid #a7bad6;
    padding: 0px 5px 0px 8px;
  }
}
.el-table td, .el-table th.is-leaf {
  text-align: center;
}
.footer {
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
.operate-foot {
  padding-left: 15px;
  display: inline-block;
  padding-top: 8px;
}
.record {
  float: right;
  padding: 15px 10px;
}
   } 
</style>
