/**
 * 
 * 详情页模块组件
 * @author 吴燕萍
 * @date 2017/04/18
 * 
 */
<template>
<div class="detailsModel">

  <!-- 标题 -->
    <contain-title :settitle="tab" :isShow="isShow">
    </contain-title>
    
  <!-- 信息列表 -->
    <el-row :gutter="20">
         <el-col :span="6" v-for="(item,i) in theads" class="text-small">{{item}}:<em class="margin-left_10">{{headData[protos[i]]}}</em>
         </el-col>
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
                        :on-icon-click="search" class="searchInp" size="small" @keyup.enter.native="textAndDateFind">
                    </el-input>
                    <el-button size="small" class="searchBtn" @click="textAndDateFind">搜索</el-button>
                </div>

                <!-- 右边的操作按钮 -->
                <!-- 操作按钮 -->
                <component
                    v-for="operateItem in tabItem.typeComponent"
                    :is="operateItem.component"
                    :url="apiUrlArr[tabList[index].url]"
                    :type="tabItem.whereArr"
                    :routeId="routeId"
                    :curl="url"
                    class="fr"
                ></component>
            </div>
        </div>
    
        <!-- 新建模块 --> 
        <transition name="fade">
            <popNew v-if="isNewShow" :newComponent="tabItem.newComponent" :url="apiUrlArr[tabList[index].url]" @submitNew="changeNew" @setTable="getTable" :routeId="routeId"></popNew>
        </transition>
        <!-- 编辑模块 -->
        <transition name="fade">
            <popEdit v-if="isEditShow" :editComponent="tabItem.editComponent" :url="apiUrlArr[tabList[index].url]" :editForm="editForm"
                 @submitEdit="hangeEdit" :changeDataArr="changeDataArr" :editDefault="editDefault"></popEdit>
        </transition>
        <!-- 打印模块 -->
        <transition name="fade">
            <printf v-if="isPrintShow" :printComponent="tabItem.printComponent" :url="url" :printForm="printForm"></printf>
        </transition>
        <!-- 权限模块 -->
        <transition name="fade">
            <roleCheckbox v-if="isRoleShow" :rowId="rowId"></roleCheckbox>
        </transition>
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
                            <div v-if="item.includes('产品名称')" slot="reference" class="name-wrapper pcActive" @click="jumpDetails(scope.row)">
                                {{ tableData[scope.$index][tabItem.protos[index]] }}
                            </div>
                            <div class="imgTipDiv" v-else-if="tabItem.protos[index]=='thumb'" slot="reference">
                                <el-popover trigger="hover" placement="right">
                                    <!-- 放大图片 -->
                                    <img style="width:100%; height:auto" v-if="tableData[scope.$index][tabItem.protos[index]]!=null && tableData[scope.$index][tabItem.protos[index]]!=''" :src="tableData[scope.$index].img" >
                                    <div slot="reference" class="name-wrapper imgTip">
                                        <!-- 小图片 -->
                                        <img v-if="tableData[scope.$index][tabItem.protos[index]]!=null && tableData[scope.$index][tabItem.protos[index]]!=''" :src="tableData[scope.$index][tabItem.protos[index]]" width="100%" height="100%">
                                    </div>
                                </el-popover>
                            </div>
                            <div v-else slot="reference">
                                {{ tableData[scope.$index][tabItem.protos[index]] }}
                            </div>
                    </template>
                    </el-table-column>
                  </template>
                </template>

                <!-- 列表操作模块 -->
                <el-table-column 
                label="操作" v-if="checkOperate==null" width="175">
                    <template scope="scope" class="operateBtn" >
                        <template v-if="tabItem.moreComponent!=null">
                            <clickMore :moreComponent="tabItem.moreComponent" 
                            @showMore="moreShow(scope.$index,scope.row)" class="clickMoreBtn"></clickMore>
                        </template>
                        <template>
                            <el-button type="text" size="small" @click="changeEditShow(scope.$index,scope.row)" v-if="tabList[index].hiddeEdit">编辑</el-button>
                            <el-button type="text" size="small" v-if="hiddeWatch">查看</el-button>

                            <el-button size="small" type="text" @click="handelDel(scope.$index,scope.row)" class="btn">删除</el-button>  
                            <el-button size="small" type="text" @click="permissionShow(scope.$index,scope.row)" class="btn" v-if="tabItem.hiddeRole">权限</el-button> 
                            
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

        <p class="record">共有<span class="record_num">{{num}}</span>页，<span class="record_num">{{total_num}}</span>条记录</p>

        <!-- 分页模块 -->
            <el-pagination
              v-if="paginator!=0"
              layout="prev, pager, next, jumper"
              :total="paginator.total"
              :page-size="paginator.per_page"
              class="pager"
              @current-change="pageChange">
            </el-pagination>
    </div>
</div> 
</template>
<script>
import {mapActions} from 'vuex'
import computed from './computed.js'
import popNew from '../../components/public/popNew.vue'
import ContainTitle from 'components/layout/contain-title.vue'
import popEdit from '../../components/public/popEdit.vue'
import operate from '../../components/public/operate.vue'
import clickMore from '../../components/public/clickMore.vue'
import lotOpearte from '../../components/public/lotOpearte.vue'
import newMessage from '../plant-details/newMessage.js'
import printf from '../../components/public/printf.vue'
import roleCheckbox from '../../components/public/roleCheckbox.vue'
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
                    roleName: '',
                    theads: [],
                    changeDataArr: [],
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
            isPrintShow: false,
            isRoleShow: false,
            tabItem: {},
            // 列表数据
            tableData: [],
            paginator: {},
            inputValue: '',
            dataArr: {},
            editForm: {},
            editDefault: {},
            // 复选框选中返回对象
            checkObject: {},
            selectNewEdit: [],
            index: 0,
            rowId: null,
            routeId: this.$route.params.id,
            isShow: true
        }
    },
    mixins: [computed],
    methods: {
        ...mapActions([
            'change_siderBar'
        ]),
        // tab点击事件
        tabClick (tab, event) {
            this.index = tab.$data.index
            this.tabItem = this.tabList[this.index]
        },
        jumpDetails (row, cid) {
            var id = row.id
            this.$router.push('/index/details/' + this.batch + '/' + id)
        },
        // 显示新建表单
        changeNewShow () {
            this.isNewShow = !this.isNewShow
            var com = this.tabItem.newComponent[0]
            if (com.checkNumber !== undefined) {
                for (let index in com.checkNumber) {
                    com.components[com.checkNumber[index]].rule[1].url = this.tabItem.url
                }
            }
            // 获取新建表格数据
            if (com.type === 'table') {
                var getSelect = {'getSelect': '444'}
                var curl = {'curl': this.tabItem.url}
                var routeId = {'routeId': com.labUrl}
                var opqcurl = {'opqcurl': this.apiUrlArr[this.url]}
                if (com.paramsIndex !== undefined) {
                    var type = com.paramsIndex
                }
                this.$dataGet(this, com.labUrl, {getSelect, curl, routeId, opqcurl, type})
                    .then((responce) => {
                        let ret = this.$eltable(responce.data)
                        this.$set(com.components[0], 'tableVal', ret)
                    })
            }
            if (com.selectUrl) {
                for (let key in com.selectUrl) {
                    let newArr = this.$addAndEditSelectMethod(com.selectUrl[key])
                    this.$dataGet(this, newArr.selectUrl + '/changeSelect', {'selectData': newArr.selectData})
                        .then((responce) => {
                            if (responce.data.length !== 0) {
                                this.selectNewEdit[key] = []
                                this.selectNewEdit[key].push(com.selectInit[key])
                                let newOpt = this.$selectData(this.tabItem.url, responce.data, newArr.selectArr)
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
                    let data = {table: newArr.selectUrl}
                    if (com.selectWhere2 !== undefined) {
                        data.field = com.selectWhere2[key]
                        data.id = this.headData.area_id
                    }

                    // 多条件查询
                    if (com.selectWhereArr2 !== undefined) {
                        if (com.selectWhereArr2[key] !== undefined || com.selectWhereArr2[key] !== '') {
                            var arr = []
                            for (let k in com.selectWhereArr2[key]) {
                                arr[k] = [com.selectWhereArr2[key][k].n, com.selectWhereArr2[key][k].v]
                            }
                            data.where = arr
                        }
                    }
                    this.$dataGet(this, '/util/selects', data)
                        .then((responce) => {
                            if (responce.data.length !== 0) {
                                this.selectNewEdit[key] = []
                                this.selectNewEdit[key].push(com.selectInit2[key])
                                let newOpt = this.$selectData(this.tabItem.url, responce.data, newArr.selectArr)
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
            this.isEditShow = true
            var com = this.tabItem.editComponent[0]
            if (row !== undefined) {
                if (com.checkNumber !== undefined) {
                    for (let index in com.checkNumber) {
                        com.components[com.checkNumber[index]].rule[1]['id'] = row.id
                        com.components[com.checkNumber[index]].rule[1]['url'] = this.tabItem.url
                    }
                }
                if (com.selectUrl) {
                    for (let key in com.selectUrl) {
                        let editArr = this.$addAndEditSelectMethod(com.selectUrl[key])
                        this.$dataGet(this, editArr.selectUrl + '/changeSelect', {'selectData': editArr.selectData})
                            .then((responce) => {
                                if (responce.data.length !== 0) {
                                    com.components[com.popNumber[key]].options = this.$selectData(this.tabItem.url, responce.data, editArr.selectArr)
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
                                    com.components[com.popNumber2[key]].options = this.$selectData(this.tabItem.url, responce.data, editArr.selectArr)
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
        // 新增弹窗切换
        changeNewTab (val) {
        },
        // 关闭新增弹窗
        closeNewShow (val) {
            this.isNewShow = false
            var com = this.tabItem.newComponent[0]
            if (com.components[com.assocNum] !== undefined) {
                this.$set(com.components[com.assocNum], 'tableVal', [])
            }
        },
        // 关闭编辑弹窗
        closeEditShow (val) {
            this.isEditShow = false
        },
        // 关闭角色弹窗
        closeRoleShow (val) {
            this.isRoleShow = !this.isRoleShow
        },
        // 列表全选
        handleSelectionChange (val) {
            this.checkObject = val
        },
        // 获取Api接口数据
        getApiUrl () {
            this.apiUrlArr[this.url] = this.url + '/' + this.$route.params.id
            for (var i in this.tabList) {
                if (this.tabList[i].split === undefined || this.tabList[i].split === false) {
                    this.apiUrlArr[this.tabList[i].url] = this.$route.params.id + '/' + this.tabList[i].url
                } else {
                    this.apiUrlArr[this.tabList[i].url] = this.tabList[i].url
                }
            }
        },
        // 获取头部详细信息
        getDetailSerial () {
            // 头部列表信息
            var url = this.apiUrlArr[this.url]
            this.$dataGet(this, url, {})
                .then((responce) => {
                    var ret = this.$conversion(this.changeDataArr, responce.data, 0)
                    ret = this.$eltable(ret)
                    this.$set(this, 'headData', ret)
                })
        },
        // 获取列表信息
        getAllMsg (data = {}) {
            let names = this.tabList[this.index].urlid
            let whereArr = this.tabList[this.index].whereArr
            if (whereArr !== undefined && whereArr !== '') {
                for (let k in whereArr) {
                    data[k] = whereArr[k]
                }
            }
            if (names !== undefined && names !== null) {
                data[names] = this.$route.params.id
            }
            var datas = {}
            this.$dataGet(this, this.apiUrlArr[this.tabList[this.index].url], {params: data})
                .then((responce) => {
                    if (responce.data.data !== undefined) {
                        if (responce.data.data.length !== 0) {
                            var ret = this.$conversion(this.tabItem.changeDataArr, responce.data.data, 1)
                            ret = this.$eltable(ret)
                            ret = this.$getProductInfo(ret)
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
                    }
                })
        },
        // 文本与时间按钮查询
        textAndDateFind () {
            this.dataArr['query_text'] = this.inputValue
            this.dataArr['page'] = 1
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
            this.dataArr['page'] = 1
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
        // 新建数据
        changeNew (val) {
            if (val !== 'false') {
                this.isNewShow = false
                if (this.tabItem.newComponent[0].components[this.tabItem.newComponent[0].assocNum] !== undefined) {
                    this.$set(this.tabItem.newComponent[0].components[this.tabItem.newComponent[0].assocNum], 'tableVal', [])
                }
                this.boxArr(this.dataArr)
                this.getDetailSerial()
                // this.getSelect()
                this.$message({
                    type: 'success',
                    message: '新增数据成功'
                })
            } else {
                this.$message.error('新增数据失败')
            }
        },
        // 点击删除
        handelDel (index, row) {
            this.$confirm('你确定要删除该信息吗?', '信息', {
                cancelButtonText: '取消',
                confirmButtonText: '确定',
                type: 'error'
            }).then(() => {
                axios.delete(this.$adminUrl(this.apiUrlArr[this.tabList[this.index].url] + '/' + row.id))
                    .then((responce) => {
                        if (responce.data === 'true') {
                            this.getDetailSerial()
                            this.boxArr(this.dataArr)
                            this.$message({
                                type: 'success',
                                message: '删除成功'
                            })
                        } else if (responce.data === 'state') {
                            this.$message('该数据已被使用，无法删除')
                        }
                    })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                })
            })
        },
        // 编辑修改数据
        hangeEdit (val) {
            if (val !== 'false') {
                this.isEditShow = false
                this.getDetailSerial()
                this.boxArr(this.dataArr)
                this.$message({
                    type: 'success',
                    message: '编辑数据成功'
                })
            } else {
                this.$message.error('编辑数据失败')
            }
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
                    var paramsDel = {'ids': delArr, 'other': this.apiUrlArr[this.url], 'role': this.roleName}
                    axios.post(this.$adminUrl('util/batch-delete/' + this.tabItem.url), paramsDel)
                    .then((responce) => {
                        if (responce.data === 'true') {
                            this.getDetailSerial()
                            this.boxArr(this.dataArr)
                            this.$message({
                                type: 'success',
                                message: '批量删除成功'
                            })
                        } else if (responce.data === 'state') {
                            this.$message('有数据已被使用，无法完成批量删除操作')
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
                if (this.tabItem.whereArr !== undefined) {
                    for (let k in this.tabItem.whereArr) {
                        str += '&' + k + '=' + this.tabItem.whereArr[k]
                    }
                }
                window.location.href = this.$adminUrl(this.apiUrlArr[this.tabList[this.index].url]) + str
            } else {
                this.$message('请选择序号')
            }
        },
        // 根据下拉框获取表格数据
        getTable (val) {
            var com = this.tabItem.newComponent[0]
            var table = com.components[val[2].assocNum]
            if (val[1] !== '' && val[1] !== undefined) {
                var getSelect = {'getSelect': '444'}
                var curl = {'curl': this.tabItem.url}
                var vs = table.tableUrl
                var routeId = {'routeId': vs[0]}
                var opqcurl = {'opqcurl': this.apiUrlArr[this.url]}
                let surl = table.tableUrl[0]
                var id = val[1]
                if (vs[1]) {
                    surl = val[1] + '/' + surl
                }
                if (com.paramsIndex !== undefined) {
                    var type = com.paramsIndex
                }
                this.$dataGet(this, surl, {getSelect, curl, routeId, opqcurl, type, id})
                    .then((responce) => {
                        this.$set(table, 'tableVal', responce.data)
                    })
            } else {
                this.$set(table, 'tableVal', [])
            }
        },
        // 扫描溯源码
        changeScanCode (codeVal) {
            let params = {code: codeVal}
            axios.get(this.$adminUrl(this.apiUrlArr[this.tabList[this.index].url] + '/codeScan'), {params: params})
                .then((responce) => {
                    if (responce.data === 'error') {
                        this.$message.error('溯源码不存在')
                    } else if (responce.data === 'sale') {
                        this.$message.error('当前产品已出售')
                    } else if (responce.data === 'false') {
                        this.$message.error('添加溯源码失败')
                    } else {
                        if (JSON.stringify(this.dataArr) === '{}') {
                            this.dataArr = ''
                        }
                        this.getDetailSerial()
                        this.boxArr(this.dataArr)
                        this.$message({
                            type: 'success',
                            message: '添加溯源码成功'
                        })
                    }
                })
        },
        moreShow (index, row) {
            this.isPrintShow = !this.isPrintShow
            this.printForm = row
        },
        permissionShow (index, row) {
            this.isRoleShow = true
            this.rowId = row.id
        },
        // 导入事件触发
        importChange () {
            this.getDetailSerial()
            this.boxArr(this.dataArr)
        }
    },
    mounted () {
        this.change_siderBar(false)
        this.tabItem = this.tabList[0]
        this.activeName = this.tabList[0].tab
        this.getApiUrl()
        this.getDetailSerial()
        this.getAllMsg()
        document.title = this.tab
    },
    watch: {
        tabItem () {
            this.tableData = []
            if (this.selectValueId !== undefined) {
                this.getSelect()
            }
            this.getAllMsg()
            this.inputValue = ''
        },
        tab () {
            this.tabItem = this.tabList[0]
            this.activeName = this.tabList[0].tab
            this.getApiUrl()
            this.getDetailSerial()
            this.getAllMsg()
        }
    },
    components: {
        ContainTitle,
        popNew,
        popEdit,
        operate,
        clickMore,
        lotOpearte,
        roleCheckbox,
        printf
    }
}
</script>
<style lang='sass'> 
/*图片提示框*/
.el-popover{
    max-width: 350px;
    width: 350px;
}
.detailsModel{
    min-height: 790px;
   .imgTip{
        display: inline-block;
        width:30px;
        height: 20px;
    }
    .margin-left_10{
        margin-left: 10px;
    } 
    .pcActive{
        /*color: blue;*/
        text-decoration: underline;
        cursor:pointer;
    }
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
    .clickMoreBtn {
        display: inline-block;
    }
    .cell {
        text-align:center;
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
            padding: 16px 26px;
            font-size: 13px;
        }
    }
    .detaActive{
        background: red;
    }
}
</style>
