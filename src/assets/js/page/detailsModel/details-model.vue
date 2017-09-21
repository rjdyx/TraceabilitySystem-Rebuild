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
    <contain-title :settitle="tab" :isShow="isShow" :printShow="printShow" @printShow="printShowFn">
    </contain-title>
    <!-- websocket组件 -->
    <webSocket :rt="$route.path" @aaa="websocketrelf" :md="tabList" :num="index"></webSocket>

    <!-- 信息列表 -->
    <el-row :gutter="20">
         <el-col :xs="12" :sm="8" :md="8" :lg="6" v-for="(item,i) in theads" class="text-small">{{item}}:<em class="margin-left_10">{{headData[protos[i]]}}</em>
         </el-col>
    </el-row>
    <div v-if="tableListBollean">
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
                            v-if="tabList[index].searchText"
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
                        :tabItem = 'tabItem'
                        class="fr"
                    ></component>
                </div>

                <!-- 步骤提示 -->
                <div class="tipdel" v-if="tipdel">
                    <template>
                        <div class="tipdes">
                            在此页面可以新建编辑批次的详细信息，进行有秩序的管理。
                        </div>
                    </template>
                </div>

            </div>
        
            <!-- 新建模块 --> 
            <transition name="fade">
                <popNew v-if="isNewShow" :newComponent="tabItem.newComponent" :url="apiUrlArr[tabList[index].url]" @submitNew="changeNew" :routeId="routeId"></popNew>
            </transition>
            <!-- 编辑模块 -->
            <transition name="fade">
                <popEdit v-if="isEditShow" :editComponent="tabItem.editComponent" :url="apiUrlArr[tabList[index].url]" :editForm="editForm"
                        @submitEdit="hangeEdit" :changeDataArr="changeData" :editDefault="editDefault">
                </popEdit>
            </transition>
            <!-- 权限模块 -->
            <transition name="fade">
                <roleCheckbox v-if="isRoleShow" :rowId="rowId"></roleCheckbox>
            </transition>
            <!-- 打印单据模块 -->
            <!-- <printfPreview 
                ref='printfPreview'
                :theads="theads"
                :headData="headData"
                :tableData="tableData"
                :tabItem="tabItem"
                :protos="protos"
                :odd="odd"
                :filter="filter"
                >
            </printfPreview> -->
        <!-- 列表模块 -->
        <el-table :data="tableData"  @selection-change="handleSelectionChange" v-loading="listLoading" @expand="expandDo">
            <!-- checkbox -->
            <el-table-column width="50" type="selection" :selectable="checkDisabled">
            </el-table-column> 
            <!-- 序号 --> 
            <el-table-column width="80" label="序号" type="index" id="test_id">
            </el-table-column>

            <!-- 展开 -->
            <el-table-column
                type="expand" class="expand" v-if="expandMore">
                <template scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                        <template v-for="(expand,index) in tabItem.headList.slice(0,8)" v-if="detailsExpand">
                          <el-form-item>
                            <span class="el-form-item__label">{{expand}}</span>

                            <span v-if="expand=='图片'">
                                <img  v-if="tableData[props.$index][tabItem.protos[index]]!=null && tableData[props.$index][tabItem.protos[index]]!=''" :src="$img('images/ok.png')">
                            </span>

                            <span v-else>
                                {{ props.row[tabItem.protos[index]] }}
                            </span>
                          </el-form-item>
                        </template>

                      <template v-for="(expand,index) in tabItem.headList" v-if="detailsExpandyo">
                          <el-form-item>
                            <span class="el-form-item__label">{{expand}}</span>

                            <span v-if="expand=='图片'">
                                <img v-if="tableData[props.$index][tabItem.protos[index]]!=null && tableData[props.$index][tabItem.protos[index]]!=''" :src="$img('images/ok.png')" >
                            </span>

                            <span v-else>
                                {{ props.row[tabItem.protos[index]] }}
                            </span>
                          </el-form-item>
                        </template>

                        <el-form-item v-for="(subItem,init) in tabItem.harvestMore" class="left">
                            <span class="timeEdit" @click="timeEdit(subItem,index)">
                                <span class="timeLabel">{{subItem.label}}</span>
                                <span v-if="subItem.nameHide">{{ tableData[props.$index][subItem.name] }}</span>
                                <component
                                    v-if="subItem.showHarvest"
                                    :is="subItem.component"
                                    :rowid="props.row.id"
                                    :shuju="subItem"
                                    :type="subItem.type"
                                    @return-shuju="insertTimes"
                                    class="dateEdit"
                                ></component></span>
                        </el-form-item>

                    </el-form>
                      </template>
               
            </el-table-column>

                    <!-- 中间列表模块 -->
                    <template v-for="(item,index) in thead"> 
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

                    <!-- 列表操作模块 -->
                    <el-table-column 
                    label="操作" v-if="checkOperate==null" width="250">
                        <template scope="scope" class="operateBtn" >
                            <template v-if="tabItem.moreComponent!=null">
                                <clickMore :moreComponent="tabItem.moreComponent" 
                                @showMore="moreShow(scope.$index,scope.row)" class="clickMoreBtn"></clickMore>
                            </template>

                        <template v-if="harvestMore!=null">
                            <harvestMore :harvestMore="harvestMore" :row="scope.row">
                            </harvestMore>
                        </template>

                            <template v-if="hiddeOperate">
                                <el-button type="text" size="small" @click="changeEditShow(scope.$index,scope.row)"
                                :disabled="stateDisabled()" v-if="tabList[index].hiddeEdit" class="detailBtn">
                                编辑</el-button>
                                <el-button type="text" size="small" v-if="hiddeWatch">查看</el-button>
                                <el-button size="small" type="text" @click="handelDel(scope.$index,scope.row)"
                                :disabled="stateDisabled()" class="btn">删除</el-button>  
                                <el-button size="small" type="text" @click="permissionShow(scope.$index,scope.row)" class="btn" v-if="tabItem.hiddeRole">角色</el-button> 
                            </template>

                        </template>
                    </el-table-column>
                </el-table>
        <div class="footer">
            <div class="operate-foot" v-if="hiddeOperate">
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
import harvestMore from '../../components/public/harvestMore.vue'
import lotOpearte from '../../components/public/lotOpearte.vue'
import roleCheckbox from '../../components/public/roleCheckbox.vue'
import webSocket from '../../components/public/webSocket.vue'
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
                    tabList: [],
                    more: '',
                    harvestMore: [],
                    printShow: '',
                    odd: '',
                    fillter: [],
                    obt: ''
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
            index: localStorage.getItem('tabL') !== null ? localStorage.getItem('tabL') : 0,
            rowId: null,
            // routeId: this.$route.params.id,
            routeId: localStorage.getItem('detailsId'),
            isShow: true,
            listLoading: false,
            tableListBollean: true,
            hiddeOperate: true,
            expandMore: false,
            showHarvest: false,
            thead: [],
            changeData: [],
            operateArr1: ['sunning_date', 'cooling_date'],
            operateArr2: ['make_green_date', 'kill_out_date', 'knead_nori_date', 'deblock_date', 'dry_date', 'filtrate_date', 'refiring_date'],
            timeParams: {},
            detailsExpand: false,
            detailsExpandyo: true,
            printf: {}
        }
    },
    mixins: [computed],
    methods: {
        ...mapActions([
            'change_siderBar'
        ]),
        websocketrelf () {
            this.isNewShow = false
            this.isEditShow = false
            this.boxArr(this.dataArr, false)
        },
        // websocket消息推送方法
        websocketInfo (type) {
            var token = Math.random()
            var params = 'content=' + this.tabList[this.index].url + '&webtoken=' + token + '&type=' + type
            localStorage.setItem('webToken', token)
            axios.get('api/websocket?' + params).then((responce) => {})
        },
        // 打印内容的展示
        printShowFn () {
            this.printf.detailsBatch = this.models
            localStorage.setItem('printf', '{}')
            localStorage.setItem('printf', JSON.stringify(this.printf))
            this.$router.push('/printf')
        },
        // 关闭打印内容的展示
        closePrintfDialog () {
            this.dialogTableVisible = false
        },
        // 状态样式验证
        stateDisabled () {
            let stateArr = ['已完成', '已通过']
            if (this.headData.state !== undefined) {
                if (stateArr.indexOf(this.headData.state) !== -1) {
                    return true
                } else {
                    return false
                }
            }
            return false
        },
        // 列表页复选框是否可选
        checkDisabled () {
            let stateArr = ['已完成', '已通过']
            if (this.headData.state !== undefined) {
                if (stateArr.indexOf(this.headData.state) !== -1) {
                    return false
                } else {
                    return true
                }
            }
            return true
        },
        // tab点击事件
        tabClick (tab, event) {
            this.index = tab.$data.index
            this.tabItem = this.tabList[this.index]
            localStorage.setItem('tabL', this.index)
        },
        jumpDetails (row, cid) {
            var id = row.id
            this.$router.push('/index/details/' + this.batch)
            if (id) {
                localStorage.setItem('detailSecondId', id)
            }
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
            // 根据一级模块权限 来填充下拉框内容
            if (com.permissionSelectUrl) {
                let arrs = com.permissionSelectArr
                let urlArr = com.permissionSelectUrl
                for (let key in arrs) {
                    axios.get(urlArr[key])
                        .then((responce) => {
                            var datas = responce.data
                            var newArr = []
                            if (datas) {
                                for (let k in arrs[key]) {
                                    let field = arrs[key][k]
                                    if (field.set !== undefined) {
                                        if (datas.indexOf(field.set) !== -1) {
                                            newArr.push(arrs[key][k])
                                        }
                                    } else {
                                        newArr.push(arrs[key][k])
                                    }
                                }
                            }
                            com.components[com.permissionNumber[key]].options = newArr
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
                // 根据一级模块权限 来填充下拉框内容
                if (com.permissionSelectUrl) {
                    let arrs = com.permissionSelectArr
                    let urlArr = com.permissionSelectUrl
                    for (let key in arrs) {
                        axios.get(urlArr[key])
                            .then((responce) => {
                                var datas = responce.data
                                var newArr = []
                                if (datas) {
                                    for (let k in arrs[key]) {
                                        let field = arrs[key][k]
                                        if (field.set !== undefined) {
                                            if (datas.indexOf(field.set) !== -1) {
                                                newArr.push(arrs[key][k])
                                            }
                                        } else {
                                            newArr.push(arrs[key][k])
                                        }
                                    }
                                }
                                com.components[com.permissionNumber[key]].options = newArr
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
        // 关闭新增弹窗
        closeNewShow (val) {
            this.isNewShow = false
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
            this.apiUrlArr[this.url] = this.url + '/' + this.routeId
            for (var i in this.tabList) {
                if (this.tabList[i].split === undefined || this.tabList[i].split === false) {
                    this.apiUrlArr[this.tabList[i].url] = this.routeId + '/' + this.tabList[i].url
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
                    this.printf.headData = this.headData
                })
        },
        // 获取列表信息
        getAllMsg (data = {}, flag = false) {
            let names = this.tabList[this.index].urlid
            let whereArr = this.tabList[this.index].whereArr
            if (whereArr !== undefined && whereArr !== '') {
                for (let k in whereArr) {
                    data[k] = whereArr[k]
                }
            }
            if (names !== undefined && names !== null) {
                data[names] = this.routeId
            }
            if (flag) {
                this.listLoading = true
            }
            this.$dataGet(this, this.apiUrlArr[this.tabList[this.index].url], {params: data})
                .then((responce) => {
                    this.listLoading = false
                    // localStorage.setItem('tableData', '[]')
                    if (responce.data.data !== undefined) {
                        if (responce.data.data.length !== 0) {
                            var ret = this.$conversion(this.tabItem.changeDataArr, responce.data.data, 1)
                            ret = this.$eltable(ret)
                            ret = this.$getProductInfo(ret)
                            this.$set(this, 'tableData', ret)
                            this.printf.tableData = this.tableData
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
            this.boxArr(this.dataArr, true)
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
            this.boxArr(this.dataArr, true)
        },
        // 日期存储
        dateFind (val) {
            this.dataArr[val[0]] = val[1]
        },
        // 分页跳转
        pageChange (val) {
            this.dataArr['page'] = val
            this.boxArr(this.dataArr, true)
        },
        // 组合查询
        boxArr (dataArr, flag) {
            this.getAllMsg(dataArr, flag)
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
                this.boxArr(this.dataArr, false)
                this.getDetailSerial()
                this.$message({
                    type: 'success',
                    message: '新增数据成功'
                })
                this.websocketInfo('add')
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
                            this.boxArr(this.dataArr, false)
                            this.$message({
                                type: 'success',
                                message: '删除成功'
                            })
                            this.websocketInfo('del')
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
                this.boxArr(this.dataArr, false)
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
                            this.boxArr(this.dataArr, false)
                            this.$message({
                                type: 'success',
                                message: '批量删除成功'
                            })
                            this.websocketInfo('dels')
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
                        this.getDetailSerial()
                        this.boxArr(this.dataArr, false)
                        this.$message({
                            type: 'success',
                            message: '添加溯源码成功'
                        })
                    }
                })
        },
        moreShow (index, row) {
            this.isPrintShow = !this.isPrintShow
            let obj = {
                product_name: this.headData['product_name'],
                specification: this.headData['specification']
            }
            let allObj = {}
            if (row !== undefined) {
                allObj = Object.assign(allObj, row, obj)
            }
            var qrcodePrintf = {
                url: this.url,
                printComponent: this.tabItem.printComponent,
                printForm: allObj
            }
            localStorage.setItem('qrcodePrintf', '{}')
            localStorage.setItem('qrcodePrintf', JSON.stringify(qrcodePrintf))
            this.$router.push('/qrcodePrintf')
        },
        permissionShow (index, row) {
            this.isRoleShow = true
            this.rowId = row.id
        },
        // 导入事件触发
        importChange () {
            this.getDetailSerial()
            this.boxArr(this.dataArr, false)
        },
        // 列表时间便捷录入
        timeEdit (subItem, index) {
            this.$nextTick(function () {
                this.tabItem.harvestMore.forEach(function (subItem) {
                    Vue.set(subItem, 'showHarvest', false)
                    Vue.set(subItem, 'nameHide', true)
                })
                Vue.set(subItem, 'showHarvest', true)
                Vue.set(subItem, 'nameHide', false)
            })
        },
        // 列表时间插入
        insertTimes (data) {
            this.timeParams['id'] = data.id
            if (this.operateArr1.indexOf(data.name) !== -1) {
                let a = this.$changeDateTime(data.value[0])
                let b = this.$changeDateTime(data.value[1])
                this.timeParams[data.name] = a + '至' + b
            } else if (this.operateArr2.indexOf(data.name) !== -1) {
                this.timeParams[data.name] = this.$changeDateTime(data.value)
            }
            this.$dataGet(this, this.apiUrlArr[this.tabList[this.index].url] + '/setDateTime', this.timeParams)
                .then((responce) => {
                    if (responce.data !== 'false') {
                        this.$message({
                            type: 'success',
                            message: '修改时间数据成功'
                        })
                        this.boxArr(this.dataArr, true)
                        this.timeParams = {}
                        this.tabItem.harvestMore.forEach(function (subItem) {
                            Vue.set(subItem, 'showHarvest', false)
                            Vue.set(subItem, 'nameHide', true)
                        })
                    } else {
                        this.$message('修改时间数据失败')
                    }
                })
        },
        // 展开事件
        expandDo () {
            if (this.tabItem.harvestMore !== null && this.tabItem.harvestMore !== undefined) {
                this.tabItem.harvestMore.forEach(function (subItem) {
                    Vue.set(subItem, 'showHarvest', false)
                })
            }
        },
        // 判断第二还是第三级
        secondOrThird () {
            if (this.obt !== undefined) {
                if (this.obt === 2) {
                    this.routeId = localStorage.getItem('detailsId')
                } else {
                    this.routeId = localStorage.getItem('detailSecondId')
                }
            }
        }
    },
    mounted () {
        this.change_siderBar(false)
        this.secondOrThird()
        this.tabItem = this.tabList[localStorage.getItem('tabL') !== null ? localStorage.getItem('tabL') : 0]
        this.activeName = this.tabList[localStorage.getItem('tabL') !== null ? localStorage.getItem('tabL') : 0].tab
        this.getApiUrl()
        this.getDetailSerial()
        this.boxArr(this.dataArr, true)
        this.more.length > 8 ? this.expandMore = true : this.expandMore = false
        this.thead = this.more.slice(0, 8)
        this.changeData = this.tabItem.changeDataArr
        if (this.tabItem.harvestMore !== null && this.tabItem.harvestMore !== undefined) {
            this.tabItem.harvestMore.forEach(function (subItem) {
                Vue.set(subItem, 'nameHide', true)
            })
        }
        let path = this.$route.path
        if (path.indexOf('harvestBatch') !== -1) {
            this.detailsExpand = true
            this.detailsExpandyo = false
        }
        if (this.tabItem.hiddeOperate !== undefined) {
            this.hiddeOperate = this.tabItem.hiddeOperate
        }
        this.printf.detailsBatch = this.models
        // 判断是否是示例页面，是的话就显示
        // 判断是否是第一次登录，是的话就显示
        if (path.indexOf('plantSerial') !== -1) {
            this.tipdel = true
        }
    },
    watch: {
        tabItem () {
            this.tableData = []
            if (this.selectValueId !== undefined) {
                this.getSelect()
            }
            this.boxArr(this.dataArr, true)
            this.inputValue = ''
            document.title = this.tab
            this.more.length > 8 ? this.expandMore = true : this.expandMore = false
            this.thead = this.more.slice(0, 8)
        },
        tab () {
            this.secondOrThird()
            this.tabItem = this.tabList[0]
            this.activeName = this.tabList[0].tab
            this.getApiUrl()
            this.getDetailSerial()
            this.boxArr(this.dataArr, true)
            this.more.length > 8 ? this.expandMore = true : this.expandMore = false
            this.thead = this.more.slice(0, 8)
        },
        $route () {
            let path = this.$route.path
            if (path.indexOf('harvestBatch') !== -1) {
                this.detailsExpand = true
                this.detailsExpandyo = false
            }
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
        harvestMore,
        webSocket
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
    >.el-row {
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
    .el-row{
        margin:0!important;
    }
    .el-table__expanded-cell{
        .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 33%;
    }
    .el-form-item__content{
        width: 100%;
        text-align: left;
    }
    .demo-table-expand label{
        width: 30% !important;
        margin-left: 16%;
        color: #99a9bf;
    }
    .el-form-item__label{
        color: #99a9bf;
        width: 30% !important;
    }
}
.timeEdit{
    cursor: pointer;
    .dateEdit{
        /*padding-left: 50px;*/
        display: inline-block;
    }
    .timeLabel{
        width: 30%;
        display: inline-block;  
        color: #99a9bf;
    }
}
   .tipdel{
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
        top: 0;
        left: 0;
        z-index: 2000;
        position: absolute;
        .tipdes{
            width: 400px;
            min-height: 100px;
            top: 50%;
            left: 50%;
            margin-left: -200px;
            margin-top: -100px;
            position: absolute;
            background: #fff;
            box-shadow: 0 2px 15px rgba(0,0,0,.4);
            border-radius: 5px;
            padding: 10px;
            font-weight: bold;
            text-indent: 32px;
            font-size: 16px;
            z-index: 999999;
        }
   } 
}

</style>
