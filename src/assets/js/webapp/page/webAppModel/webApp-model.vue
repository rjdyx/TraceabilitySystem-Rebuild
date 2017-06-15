/**
 * 
 * 基础模块组件
 * @author 舒丹彤 
 * @date 2017/03/14
 * 
 */
<template>
<div class="webApp_model">   
  <div class="webApp-wrap">
        <!-- 标题 -->
        <template v-if="tabComponent!=null">
            <appTab :tabComponent="tabComponent"></appTab>
        </template>

        <!-- 操作 -->
        <div class="appOperate">
            <el-button type="primary" class="newbuilt" @click="webAppNew">新建</el-button>
            <div class="searchOp">
                <el-input   
                    :placeholder="searchPlaceholder"
                    v-model="inputValue"
                    :on-icon-click="search" class="searchInp" @keyup.enter.native="textAndDateFind">
                </el-input>
                <el-button class="searchBtn" @click="textAndDateFind">搜索</el-button>
            </div>
        </div>

         <!-- 时间操作 -->
       <transition name="slide-fade">
            <group :title="time" v-show="showdate">
                <datetime v-model="value1" @on-change="change" :title="'开始日期'"></datetime>
                <datetime v-model="value1" @on-change="change" :title="'结束日期'"></datetime>
            </group>
       </transition>

        <!-- 隐藏操作按钮 -->
        <div class="clickHide" @click="hideDate">
            <span class="hide" :class="{'uphide': isA,'downhide': !isA }"></span>
        </div>
       

        <!-- 列表 -->
        <x-table>
            <thead>
               <tr class="list">
                   <th>序号</th>
                   <th v-for="(item,index) in theads" :style="{width: widths[index] + '%'}" :name="protos[index]">{{theads[index]}}</th>
               </tr> 
            </thead>
            <tbody>
                <tr v-for="pers in tableData">
                    <td>
                        <input type="checkbox" :value="pers.id" v-model="ischeckdate">
                    </td>
                    <td v-for="(item,index) in protos">{{pers.name}}</td>
                    <td class="appEdit">
                        <span class="editImg">
                        </span>
                    </td>
                </tr>
            </tbody>
        </x-table>
        <div class="tableFooter">
            <input type="checkbox" class="allcheckbox" v-model="checkAll" @click="checkedAll()">
            <el-button type="primary" class="allcheck" @click="checkedAll()">全选</el-button>
            <el-button type="danger" class="appDelete">删除</el-button>
        </div>
        <paginator></paginator>
  </div>
</div>
</template> 
 
<script>
import { XTable, Datetime, Group } from 'vux'
import {mapActions, mapMutations} from 'vuex'
import appTab from '../../public/tab.vue'
import paginator from '../../public/paginator.vue'
import computed from '../webAppModel/appcomputed.js'
import popNew from '../../../components/public/popNew.vue'
import appTitle from '../../public/header.vue'
import edit from '../../../components/public/edit.vue'
import operate from '../../../components/public/operate.vue'
import popEdit from '../../../components/public/popEdit.vue'
import clickMore from '../../../components/public/clickMore.vue'
import lotOpearte from '../../../components/public/lotOpearte.vue'
import printf from '../../../components/public/printf.vue'
import permissionCheckbox from '../../../components/public/permissionCheckbox.vue'
import company from '../../../page/plant-basic/company.js'
import roleCheckbox from '../../../components/public/roleCheckbox.vue'
export default {
    name: 'BasicModel',
    props: {
        models: {
            type: Array,
            default () {
                return [{
                    // 时间操作
                    url: '',
                    roleName: '',
                    urlParams: {},
                    // 从后台获取的所有数据
                    theads: [],
                    searchPlaceholder: '',
                    protos: ['name'],
                    widths: [50],
                    title: '',
                    settitle: '',
                    typeComponent: [],
                    tabComponent: []
                }]
            }
        }
    },
    data () {
        return {
            timeValue: '',
            showdate: false,
            isA: false,
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
            isRoleShow: false,
            listLoading: false,
            ischeckdate: []
        }
    },
    // 混合
    mixins: [computed],
    methods: {
        ...mapActions([
            'change_siderBar'
        ]),
        init (index = 0) {
            this.value = ''
            this.activeName = 0
            this.$set(this, 'tableData', [])
            this.$set(this, 'multipleSelection', [])
        },
        /*
        新建
         */
        webAppNew () {
            console.log(this.$route)
            this.$router.push('/webAppNew' + '/' + this.$route.params.model + '/' + this.modelIndex)
        },
        change () {
        },
        jumpDetails (row) {
            var id = row.id
            var state = row.state
            if (row.code !== undefined) {
                id = row.pack_id
            } else if (row.harvest_change !== undefined) {
                id = row.cultivate_id
            }
            if (this.key === 'plan-beast') {
                if (['饲养', '检测'].indexOf(row.type) >= 0) {
                    this.$router.push('/index/details/planBreedBatch/' + id)
                    return
                } else {
                    this.$router.push('/index/details/planRfidBatch/' + id)
                    return
                }
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
                axios.delete(this.$adminUrl(this.url + '/' + row.id))
                    .then((responce) => {
                        if (responce.data === 'true') {
                            this.getSelect()
                            this.boxArr(this.dataArr, false)
                            this.$message({
                                type: 'success',
                                message: '删除成功'
                            })
                            this.listLoading = false
                        } else if (responce.data === 'state') {
                            this.$message('该数据已被使用，无法删除')
                            this.listLoading = false
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
                if (this.url === 'category' || this.url === 'operate' || this.url === 'expert' || this.url === 'product') {
                    let params = {id: row.id}
                    axios.get(this.$adminUrl(this.url + '/changeEdit'), {params: params})
                        .then((responce) => {
                            if (responce.data === 'state') {
                                com.components[com.editNumber].disabled = true
                            } else {
                                com.components[com.editNumber].disabled = false
                            }
                        })
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
                            this.listLoading = false
                            this.$message({
                                type: 'success',
                                message: '批量删除成功'
                            })
                        } else if (responce.data === 'state') {
                            this.listLoading = false
                            this.$message('有数据已被使用，无法完成批量删除操作')
                        } else {
                            this.listLoading = false
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
            this.$confirm('你确定要修改此批次状态吗?', '信息', {
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
                    message: '已取消删除'
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
        // 根据下拉框获取表格数据
        getTable (val) {
            var com = this.newComponent[0]
            var table = com.components[val[2].assocNum]
            if (val[1] !== '' && val[1] !== undefined) {
                var getSelect = {'getSelect': '444'}
                var curl = {'curl': com.curl}
                var vs = table.tableUrl
                var routeId = {'routeId': vs[0]}
                var opqcurl = {'opqcurl': com.opqcurl}
                let surl = table.tableUrl[0]
                var id = val[1]
                if (vs[1]) {
                    surl = val[1] + '/' + surl
                }
                this.$dataGet(this, surl, {getSelect, curl, routeId, opqcurl, id})
                    .then((responce) => {
                        this.$set(table, 'tableVal', responce.data)
                    })
            } else {
                this.$set(table, 'tableVal', [])
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
                        if (responce.status === 200) {
                            if (responce.data.length !== 0) {
                                let asr = []
                                asr.push(val[0][4])
                                let newOpt = this.$selectData(url, responce.data.data, [val[0][1], val[0][2], true])
                                for (let item of Object.keys(newOpt)) {
                                    asr.push(newOpt[item])
                                }
                                this.newComponent[0].components[val[0][3]].options = asr
                            }
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
        },
        ...mapMutations([
            'setTitle'
        ]),
        // app
        hideDate () {
            this.isA = !this.isA
            this.showdate = !this.showdate
        },
        // 实现全选与反选
        checkedAll: function () {
            let ischeckdate = []
            if (!this.checkAll) {
                this.tableData.forEach((item) => {
                    ischeckdate.push(item.id)
                })
            }
            this.ischeckdate = ischeckdate
        }
    },
    mounted () {
        this.change_siderBar(false)
        this.activeName = 'index0'
        // 获取下拉框
        if (this.selectValueId) {
            this.getSelect()
        }
        // 获取列表信息
        this.boxArr(this.dataArr, true)
        let change = $('.available')
        change.css('display', 'none')
        this.setTitle('人员')
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
            this.boxArr(this.dataArr, true)
            this.inputValue = ''
            this.paginator = 0
        },
        ischeckdate () {
            if (this.tableData.length === this.ischeckdate.length) {
                this.checkAll = true
            } else {
                this.checkAll = false
            }
        },
        checkAll (yes) {
            this.checkAll = yes
        }
    },
    components: {
        appTitle,
        popNew,
        edit,
        operate,
        popEdit,
        clickMore,
        lotOpearte,
        printf,
        permissionCheckbox,
        roleCheckbox,
        appTab,
        XTable,
        paginator,
        Group,
        Datetime
    }
}
</script>

<style lang='sass'>
.webApp_model{
    .webApp-wrap{
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
        .searchInp {
            width: 60%;
            margin: 0 3% 10px;
            /*margin-right: 10px;*/
        }
        #btns {
            float: right;
        }
        .searchBtn {
            float: right;
            width: 17%;
        }
        .searchOp {
            display: inline;
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
        /*.el-table{
            tr{
                td{
                    &:last-child{
                        border-left:1px solid red;
                    }
                }
            }
        }*/
        .btn {
            span {
                border-left: 1px solid #a7bad6;
                padding: 0px 5px 0px 8px;
            }
        }
        .el-table td, .el-table th.is-leaf {
            text-align: center;
        }
        /*#operate{
            min-width: 1400px;
        }*/
        .footer {
            width: 99.5%;
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
    .el-tabs--border-card>.el-tabs__content{
        padding: 0;
    }
    .el-tabs--border-card{
        margin-bottom: 10px;
    }
    /*溢出省略号替代  */
    /*.name-wrapper{
        width: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }*/ 
    .newbuilt{
        width: 17%;
        float: left;
        /*margin-right: 10px;*/
    }
    .el-date-editor.el-input{
        width: 100%;
    }
    .appTime{
        margin-bottom: 10px;
    }
    .allcheck{
        float: left;
    }
    .appDelete{
        float: right;
        margin-right: 4px;
    }
    .appDelete,.allcheck{
        display: inline-block;
        margin-top: 4px;
    }
    .allcheckbox{
        float: left;
        margin: 16px 7px 0 26px;
    }
    .tableFooter{
        height: 45px;
        background: #eaeaea;
        border: 1px solid #d8d8d8;
    }
    .vux-table td:before, .vux-table th:before{
        border-bottom: none;
    }
    .vux-table td:after, .vux-table th:after{
        border-right: none;
    }
    .appEdit{
        width: 7%;
    }
    .editImg{
        width: 100%;
        height: 26px;
        vertical-align: middle;
        display: inline-block;
        /*border: 1px solid red;*/
        background: url(/public/images/list.png) no-repeat;
        background-size: 100%;
    }
    .clickHide{
        width: 100%;
    }
    .uphide{
        background: url(/public/images/arrowBottom.png) no-repeat;
        background-size: 100%;   
    }
    .downhide{
        background: url(/public/images/arrowTop.png) no-repeat;
        background-size: 100%;
    }
    .clickHide{
        height: 30px;
        border: 1px solid transparent; 
        margin-bottom: 15px;
    }
    .hide{
        width: 5%;
        height: 15px;
        display: block;
        margin: 0 auto;
        margin-top: 10px; 
        border: 1px solid transparent; 
    }
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .2s ease;
    }
    .slide-fade-enter, .slide-fade-leave-active {
        transform: translateY(10px);
        opacity: 0;
    }
    .weui-cells{
        font-size: 14px;
    }
    table{
        border-color: none;
    }
} 
</style>
