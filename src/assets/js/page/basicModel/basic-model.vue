/**
 * 
 * 基础模块组件
 * @author 舒丹彤 
 * @date 2017/03/14
 * 
 */
<template>
<div class="basic_model">   
  <div class="basic-wrap">
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
                    :on-icon-click="search" class="searchInp" size="small" @keyup.enter.native="textAndDateFind">
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
            <popNew v-if="isNewShow" :newComponent="newComponent" :checkboxShow="checkboxShow" :url="url" @submitNew="changeNew"></popNew>
        </transition>
        <!-- 编辑模块 -->
        <transition name="fade">
            <pop-edit v-if="isEditShow" :editComponent="editComponent" :roleId="roleId" :checkboxShow="checkboxShow" :url="url" 
                      :editForm="editForm" @submitEdit="hangeEdit" :changeDataArr="changeDataArr" :editDefault="editDefault">
            </pop-edit>
        </transition>
        <!-- 打印模块 -->
        <transition name="fade">
            <printf v-if="isPrintShow" :printComponent="printComponent" :url="url" :printForm="printForm"></printf>
        </transition>
        <!-- 权限模块 -->
        <transition name="fade">
            <companyPermission v-if="isPermissionShow" :id="companyId"></companyPermission>
        </transition>
        <!-- 角色权限模块 -->
        <transition name="fade">
            <roleCheckbox v-if="isRoleShow" :rowId="rowId"></roleCheckbox>
        </transition>
    </div>
    <!-- 列表模块 -->
    <el-table :data="tableData"  @selection-change="handleSelectionChange" v-loading="listLoading" element-loading-text="正在加载">

        <!-- checkbox -->
        <el-table-column width="50" type="selection" :selectable="checkDisabled">
        </el-table-column> 

        <!-- 序号 --> 
        <el-table-column width="80" label="序号" type="index" id="test_id">
        </el-table-column>

        <!-- 展开 -->
        <el-table-column 
            type="expand" v-if="expandMore" class="expand">
            <template scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <template v-for="(expand,index) in theads">
                      <el-form-item :label="expand" :prop="protos[index]">
                        <span v-if="protos[index] == 'img' || protos[index] == 'logo'">
                            <img v-if="tableData[props.$index][protos[index]]!=null && tableData[props.$index][protos[index]]!=''" :src="$img('images/ok.png')">
                        </span>
                        <span v-else>{{ props.row[protos[index]] }}</span>
                      </el-form-item>
                  </template>
                </el-form>
            </template>
        </el-table-column>

        <!-- 中间列表模块 -->
        <template v-for="(item,index) in theads.slice(0,8)">
            <template>
                <el-table-column
                    :label="item"
                    :prop="protos[index]"
                    :min-width="widths[index]" show-overflow-tooltip>
                    <template scope="scope">
                            <div v-if="item.includes('批次号')" slot="reference" class="pcActive" @click="jumpDetails(scope.row)">
                                {{ scope.row[protos[index]] }}
                            </div>
                            <div v-else-if="protos[index]=='img' || protos[index]=='logo'" slot="reference">
                                <img v-if="tableData[scope.$index][protos[index]]!=null && tableData[scope.$index][protos[index]]!=''" 
                                    :src="$img('images/ok.png')">
                            </div>
                            <div v-else slot="reference" >
                                {{ scope.row[protos[index]] }}
                            </div>
                    </template>
                </el-table-column>
            </template>
        </template>
        <!-- 列表操作模块 -->
        <el-table-column 
        label="操作" v-if="checkOperate==null" width="180">
            <template scope="scope">
                <template v-if="moreComponent!=null">
                    <clickMore :companyId="companyId" :moreComponent="moreComponent" :row="scope.row" 
                    @showMore="moreShow(scope.$index,scope.row)" @showPermission="permissionShow(scope.$index,scope.row)" 
                    @showDetail="detailShow(scope.$index,scope.row)" class="clickMoreBtn"@return-permission="getPermission" 
                    @changeState="changeSerialState(scope.$index,scope.row)"
                    @shipGoods="shipGood(scope.$index,scope.row)">
                    </clickMore>
                </template>
                <template>
                    <el-button type="text" size="small" @click="roleShow(scope.$index,scope.row)" v-if="hiddeRole" class="editBtn">角色</el-button>

                    <el-button type="text" size="small" @click="changeEditShow(scope.$index,scope.row)" v-if="!hiddeEdit" v-bind:class="{'btn':hiddeRole}" class="editBtn">编辑</el-button>

                    <el-button type="text" size="small" v-if="hiddeShow">查看</el-button>
            
                    <el-button size="small" type="text" :disabled="stateDisabled(scope.row)" @click="handelDel(scope.$index,scope.row)" v-if="stateDisabled(scope.row)==false" class="del">
                        删除
                    </el-button>
                    <el-button size="small" type="text" :disabled="stateDisabled(scope.row)" v-else-if="stateDisabled(scope.row)==true">
                        删除
                    </el-button>
                </template>
            </template>
        </el-table-column>
    </el-table>

    <div class="footer">
        <div class="operate-foot">
            <el-button @click="delAll" v-if="checkOperate==null && !delState">删除</el-button>
            <template v-if="lotComponent!=null">
                <lotOpearte :lotComponent="lotComponent"></lotOpearte>
            </template>
            <el-button @click="excel" v-if="!outState">导出表格</el-button>
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
import edit from '../../components/public/edit.vue'
import operate from '../../components/public/operate.vue'
import popEdit from '../../components/public/popEdit.vue'
import clickMore from '../../components/public/clickMore.vue'
import lotOpearte from '../../components/public/lotOpearte.vue'
import printf from '../../components/public/printf.vue'
import permissionCheckbox from '../../components/public/permissionCheckbox.vue'
import company from '../../page/plant-basic/company.js'
import companyPermission from '../../components/public/companyPermission.vue'
import roleCheckbox from '../../components/public/roleCheckbox.vue'
export default {
    name: 'BasicModel',
    props: {
        models: {
            type: Array,
            default () {
                return [{
                    delState: true,
                    outState: true,
                    editState: true,
                    key: '',
                    tab: '',
                    tablePager: Object,
                    url: '',
                    roleName: '',
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
                    imgComponent: [],
                    editComponent: [],
                    moreComponent: [],
                    printComponent: [],
                    lotComponent: [],
                    hiddeEdit: false,
                    hiddeShow: false,
                    checkOperate: null,
                    hiddeRole: false,
                    hiddeUser: false,
                    selectDefault: {},
                    commaArr: []
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
            modelIndex: localStorage.getItem('tab') !== null ? localStorage.getItem('tab') : 0,
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
            isRoleShow: false,
            listLoading: false,
            expandMore: false,
            dialogImageUrl: '',
            dialogVisible: false,
            stateColor: false,
            list: []
        }
    },
    // 混合
    mixins: [computed],
    methods: {
        ...mapActions([
            'change_siderBar'
        ]),
        // 状态样式验证
        stateDisabled (row) {
            let stateArr = ['已完成', '已通过']
            if (row.state !== undefined) {
                if (stateArr.indexOf(row.state) !== -1) {
                    return true
                } else {
                    return false
                }
            }
            return false
        },
        // 列表页复选框是否可选
        checkDisabled (row, index) {
            let stateArr = ['已完成', '已通过']
            if (row.state !== undefined) {
                if (stateArr.indexOf(row.state) !== -1) {
                    return false
                } else {
                    return true
                }
            }
            return true
        },
        init (index = 0) {
            this.value = ''
            this.activeName = 0
            this.$set(this, 'tableData', [])
            this.$set(this, 'multipleSelection', [])
        },
        handleRemove (file, fileList) {
        },
        handlePictureCardPreview (file) {
            this.dialogImageUrl = file.url
            this.dialogVisible = true
        },
        jumpDetails (row) {
            var id = row.id
            this.$router.push('/index/details/' + this.batch)
            if (id) {
                localStorage.setItem('detailsId', id)
            }
        },
        /**
         * 列表选择事件
         * tab点击事件
         **/
        tabClick (tab, event) {
            this.modelIndex = tab.$data.index
            localStorage.setItem('tab', this.modelIndex)
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
                        if (responce.data === 'true') {
                            this.getSelect()
                            this.boxArr(this.dataArr, false)
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
            // 根据一级模块权限 来填充下拉框内容
            if (com.permissionSelectUrl) {
                let arrs = com.permissionSelectArr
                let urlArr = com.permissionSelectUrl
                for (let key in arrs) {
                    axios.get(this.$adminUrl(urlArr[key]))
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
                    let field = com.selectWhere2
                    if (com.selectWhere2 !== undefined) {
                        data.field = field
                        data.id = this.headData.area_id
                    }
                    // 多条件查询
                    if (com.selectWhereArr2 !== undefined) {
                        if (com.selectWhereArr2[key] !== undefined || com.selectWhereArr2[key] !== '') {
                            var arr = []
                            for (let k in com.selectWhereArr2[key]) {
                                arr[k] = [com.selectWhereArr2[key][k].n, com.selectWhereArr2[key][k].v]
                                if (com.selectWhereArr2[key][k].s !== undefined) {
                                    if (com.selectWhereArr2[key][k].s !== undefined) {
                                        arr[k].push(com.selectWhereArr2[key][k].s)
                                    }
                                    if (com.selectWhereArr2[key][k].f !== undefined) {
                                        arr[k].push(com.selectWhereArr2[key][k].f)
                                    }
                                }
                            }
                            data.where = arr
                        }
                    }
                    this.$dataGet(this, '/util/selects', data)
                        .then((responce) => {
                            if (responce.data !== '') {
                                if (responce.data.length !== 0) {
                                    this.selectNewEdit[key] = []
                                    this.selectNewEdit[key].push(com.selectInit2[key])
                                    let newOpt = this.$selectData(this.url, responce.data, newArr.selectArr)
                                    for (let item of Object.keys(newOpt)) {
                                        this.selectNewEdit[key].push(newOpt[item])
                                    }
                                    com.components[com.popNumber2[key]].options = this.selectNewEdit[key]
                                }
                            }
                        })
                }
            }
            // 指定路由查询
            if (com.selectUrl3) {
                var lis = com.selectUrl3
                for (let key in lis) {
                    let newArr = this.$addAndEditSelectMethod(lis[key])
                    this.$dataGet(this, newArr.selectUrl, {})
                        .then((responce) => {
                            if (responce.data.length !== 0) {
                                this.selectNewEdit[key] = []
                                this.selectNewEdit[key].push(com.selectInit3[key])
                                let newOpt = this.$selectData(this.url, responce.data, newArr.selectArr)
                                for (let item of Object.keys(newOpt)) {
                                    this.selectNewEdit[key].push(newOpt[item])
                                }
                                com.components[com.popNumber3[key]].options = this.selectNewEdit[key]
                            }
                        })
                }
            }
        },
        // 编辑-默认隐藏显示下拉
        sexa (com, number, val) {
            for (let k in number) {
                var state = true
                var seed = 'seed'
                var seed2 = ['seed']
                if (k === val) {
                    state = false
                    seed = ''
                    seed2 = []
                }
                for (let k2 in number[k]) {
                    var newObj = com[number[k][k2]]
                    newObj.hiddenSelect = state
                    if (newObj.type === 'table') {
                        newObj.valueId = seed2
                    }
                    if (newObj.type === 'text' || newObj.type === 'textSelect' || newObj.type === 'select') {
                        newObj.value = seed
                    }
                }
            }
        },
        // 显示编辑表单
        changeEditShow (index, row) {
            var com = this.editComponent[0]
            var scf = com.selectChangeField
            var scp = com.selectChangePosition
            // 隐藏或显示下拉
            if (scf !== undefined && scp !== undefined) {
                var newCom = com.components
                this.sexa(newCom, newCom[scp]['selectNumber'], row.type)
            }
            this.roleId = row.id
            this.isEditShow = true
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
                                    this.selectNewEdit[key] = []
                                    this.selectNewEdit[key].push(com.selectInit[key])
                                    let editOpt = this.$selectData(this.url, responce.data, editArr.selectArr)
                                    for (let item of Object.keys(editOpt)) {
                                        this.selectNewEdit[key].push(editOpt[item])
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
                        axios.get(this.$adminUrl(urlArr[key]))
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
                        let data = {table: editArr.selectUrl}
                        // 多条件查询
                        if (com.selectWhereArr2 !== undefined) {
                            if (com.selectWhereArr2[key] !== undefined || com.selectWhereArr2[key] !== '') {
                                var arr = []
                                for (let k in com.selectWhereArr2[key]) {
                                    arr[k] = [com.selectWhereArr2[key][k].n, com.selectWhereArr2[key][k].v]
                                    if (com.selectWhereArr2[key][k].s !== undefined) {
                                        if (com.selectWhereArr2[key][k].s) {
                                            arr[k].push(true)
                                        }
                                    }
                                }
                                data.where = arr
                            }
                        }
                        this.$dataGet(this, '/util/selects', data)
                            .then((responce) => {
                                if (responce.data.length !== 0) {
                                    this.selectNewEdit[key] = []
                                    this.selectNewEdit[key].push(com.selectInit2[key])
                                    let editOpt = this.$selectData(this.url, responce.data, editArr.selectArr)
                                    for (let item of Object.keys(editOpt)) {
                                        this.selectNewEdit[key].push(editOpt[item])
                                    }
                                    com.components[com.popNumber2[key]].options = this.selectNewEdit[key]
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
            var com = this.newComponent[0]
            if (com.components[com.assocNum] !== undefined) {
                this.$set(com.components[com.assocNum], 'tableVal', [])
                this.newComponent[0].components[com.assocNum].options = []
            }
            if (com.productNum !== undefined) {
                this.newComponent[0].components[com.productNum].options = []
            }
        },
        // 关闭编辑弹窗
        closeEditShow () {
            this.isEditShow = false
        },
        // 关闭编辑弹窗
        closePermission () {
            this.isPermissionShow = false
        },
        // 获取数据
        getAllMsg (data = {}, flag = false) {
            if (this.paramsIndex !== undefined) {
                var type = this.paramsIndex
            }
            if (flag) {
                this.listLoading = true
            }
            this.$dataGet(this, this.url, {params: data, type: type})
                .then((responce) => {
                    // 数据转换
                    if (responce.status === 200) {
                        if (responce.data.data.length !== 0) {
                            var ret = this.$conversion(this.changeDataArr, responce.data.data, 1)
                            ret = this.$eltable(ret)
                            if (this.commaArr !== undefined) {
                                ret = this.$setComma(ret, this.commaArr)
                            }
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
                        this.listLoading = false
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
                    var paramsDel = { 'ids': delArr, 'role': this.roleName }
                    axios.post(this.$adminUrl('util/batch-delete/' + this.url), paramsDel)
                    .then((responce) => {
                        if (responce.data === 'true') {
                            this.getSelect()
                            this.boxArr(this.dataArr, false)
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
            } else {
                this.$message('请选择序号')
            }
        },
        // 更改批次状态
        changeSerialState (index, row) {
            this.$confirm('你确定要修改此批次状态?,修改完后无法对该批次进行编辑删除操作,且无法逆转', '信息', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'error'
            }).then(() => {
                axios.get(this.$adminUrl('util/status/' + this.url + '/' + row.id))
                    .then((responce) => {
                        if (responce.data === 'true') {
                            this.getSelect()
                            this.boxArr(this.dataArr, false)
                            this.$message({
                                type: 'success',
                                message: '修改状态成功'
                            })
                        } else if (responce.data === 'exit') {
                            this.$message('该区域已被使用，无法修改批次状态')
                        } else {
                            this.$message.error('修改状态失败')
                        }
                    })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消更改状态'
                })
            })
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
            } else {
                this.$message('请选择序号')
            }
        },
        // 新建数据
        changeNew (val) {
            if (val !== 'false') {
                this.isNewShow = false
                this.boxArr(this.dataArr, false)
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
                this.boxArr(this.dataArr, false)
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
                    if (responce.status === 200) {
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
                    }
                })
        },
        // 点击删除
        userRole (row, index) {
            this.isPermissionShow = !this.isPermissionShow
        },
        moreShow (index, row) {
            this.isPrintShow = !this.isPrintShow
            this.printForm = row
        },
        // 发货操作
        shipGood (index, row) {
            this.$confirm('你确定要进行发货操作', '信息', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'error'
            }).then(() => {
                let params = {id: row.id}
                this.$dataGet(this, this.url + '/changeShip', params)
                    .then((responce) => {
                        if (responce.data !== 'false') {
                            this.getSelect()
                            this.boxArr(this.dataArr, false)
                            this.$message({
                                type: 'success',
                                message: '发货成功'
                            })
                        }
                    })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消'
                })
            })
        },
        permissionShow (index, row) {
            this.companyId = row.id
            this.isPermissionShow = true
        },
        roleShow (index, row) {
            this.isRoleShow = true
            this.rowId = row.id
        },
        detailShow (index, row) {
            var id = row.id
            this.$router.push('/index/details/' + this.batch)
            if (id) {
                localStorage.setItem('detailsId', id)
            }
        },
        getPermission (data) {
            this.checkeds = data
        }
    },
    mounted () {
        this.change_siderBar(false)
        this.activeName = localStorage.getItem('tab') !== null ? 'index' + localStorage.getItem('tab') : 'index0'
        localStorage.setItem('tabL', 0)
        // 获取下拉框
        if (this.selectValueId) {
            this.getSelect()
        }
        // 获取列表信息
        this.boxArr(this.dataArr, true)
        let change = $('.available')
        change.css('display', 'none')
        this.theads.length > 8 ? this.expandMore = true : this.expandMore = false
    },
    watch: {
        models () {
            this.modelIndex = localStorage.getItem('tab') || 0
            this.activeName = 'index0'
            localStorage.setItem('tab', this.modelIndex)
            this.theads.length > 8 ? this.expandMore = true : this.expandMore = false
        },
        key () {
            this.tableData = []
            this.dataArr = {}
            if (this.selectValueId !== undefined) {
                this.getSelect()
            }
            this.boxArr(this.dataArr, true)
            this.inputValue = ''
            this.paginator = 0
            this.theads.length > 8 ? this.expandMore = true : this.expandMore = false
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
        roleCheckbox,
        companyPermission
    }
}
</script>


<style lang='sass'>
.basic_model{
    min-height: 790px;
    .basic-wrap{
        .pcActive{
                text-decoration: underline;
                cursor:pointer;
            }
            .fr{
                float:right;
            }
            .fl{
                float:left;
            }
            .el-icon-caret-left{
                padding-right: 15px;
            }
        .fade-enter-active, .fade-leave-active {
            transition: opacity .5s;
        }
        .fade-enter, .fade-leave-active {
            opacity: 0;
        }
        .operate_wrap{
            /*display: inline-block;*/
            float: left;
            margin-bottom: 10px;
        }
        .searchInp {
            width: 161px;
            font-size: 12px;
            margin-right: 10px;
        }
        #btns {
            float: right;
        }
        .searchBtn {
            width: 62px;
        }
        .searchOp {
            float: left;
            margin-bottom: 10px;
        }
        .margin {
            margin-left: 15px;
        }
        i {
            &:hover {
                cursor: pointer;
            }
        }
        .clickMoreBtn {
            display: inline-block;
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
        #operate{
            /*min-width: 1100px;*/
            /*margin-bottom: 10px;*/
        }
        .footer {
            width: 99.9%;
            height: 50px;
            border: 1px solid #dfe6ec;
            border-top: none;
            .pager{
                display: inline-block;
                float: right;
                vertical-align: middle;
                padding-top: 12px;
            }
            .operate-foot {
                padding-left: 15px;
                display: inline-block;
                padding-top: 8px;
            }
            .record {
                float: right;
                padding: 16px 26px;
                font-size: 13px;
            }
        }
    }
    /*溢出省略号替代  */
    /*.name-wrapper{
        width: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }*/ 
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
        float: left;
        }
    .el-form-item__content{
        width: 70%;
        text-align: left;
    }
    .demo-table-expand label{
        width: 30% !important;
    }
}
} 


</style>
