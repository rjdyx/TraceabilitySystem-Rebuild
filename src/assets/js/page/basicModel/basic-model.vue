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
      <!-- websocket组件 -->
    <webSocket :rt="$route.path" @aaa="websocketrelf" :md="models" :num="modelIndex"></webSocket>

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
        
        <!-- 步骤提示 -->
        <!-- <div class="tipMask" v-if="tipshow">
            <template v-for="tip in tips">
                <div class="tipblock" :class="tip.pos">
                    <span class="tip">{{tip.text}}</span>
                    <span class="arrow" :class="tip.arrow"></span>
                </div>
            </template>
            <template v-for="light in hightlight">
                <div :class="light.class" class="hightlight"></div>
            </template>
            <div class="nextBtn">
                <span @click="preview" class="preview">< Previous</span>
                <span @click="next" class="next">Next ></span>
            </div>
            <template v-for="totalBlock in totals">
                <transition name= "fold">
                    <div class="totalBlock">
                        <p>{{totalBlock.text}}</p>
                    </div>
                </transition>
            </template>
        </div> -->
        

        <!-- 新建模块 --> 
        <transition name="fade">
            <popNew v-if="isNewShow" :newComponent="newComponent" :checkboxShow="checkboxShow" :url="url" @submitNew="changeNew" id="newWeb"></popNew>
        </transition>
        <!-- 编辑模块 -->
        <transition name="fade">
            <pop-edit v-if="isEditShow" :editComponent="editComponent" :roleId="roleId" :checkboxShow="checkboxShow" :url="url" 
                      :editForm="editForm" @submitEdit="hangeEdit" :changeDataArr="changeDataArr" :editDefault="editDefault">
            </pop-edit>
        </transition>
        <!-- 权限模块 -->
        <transition name="fade">
            <companyPermission v-if="isPermissionShow" :id="companyId"></companyPermission>
        </transition>
        <!-- 角色权限模块 -->
        <transition name="fade">
            <roleCheckbox v-if="isRoleShow" :rowId="rowId"></roleCheckbox>
        </transition>
         <!-- 交流模块 --> 
        <transition name="fade">
            <Communication v-if="isComShow" :moreComponent="moreComponent" :rowInfoId="rowInfoId"></Communication>
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
                            <div v-if="item.includes('批次号')" slot="reference" class="pcActive" @click="jumpDetails(scope.row)" ref="abs">
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
                    @showDetail="detailShow(scope.$index,scope.row)" class="clickMoreBtn" @return-permission="getPermission" 
                    @changeState="changeSerialState(scope.$index,scope.row)"
                    @shipGoods="shipGood(scope.$index,scope.row)"
                    @communkation="communkationFn(scope.$index,scope.row)"
                    @showlist="getListFlash()"
                    @create-demo="createDemo(scope.$index,scope.row)">
                    </clickMore>
                </template>
                <template>
                    <el-button type="text" size="small" @click="roleShow(scope.$index,scope.row)" v-if="hiddeRole" class="editBtn">角色</el-button>

                    <el-button type="text" size="small" @click="changeEditShow(scope.$index,scope.row)" v-if="!hiddeEdit" v-bind:class="{'btn':hiddeRole}" class="editBtn">编辑</el-button>

                    <el-button type="text" size="small" v-if="hiddeShow" @click="jumpDetails(scope.row)" class="lookfor">查看</el-button>
            
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
import permissionCheckbox from '../../components/public/permissionCheckbox.vue'
import company from '../../page/plant-basic/company.js'
import companyPermission from '../../components/public/companyPermission.vue'
import Communication from '../../components/public/Communication.vue'
import roleCheckbox from '../../components/public/roleCheckbox.vue'
import webSocket from '../../components/public/webSocket.vue'
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
            tipshow: false,
            i: 0,
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
            isPermissionShow: false,
            checkboxShow: false,
            // 是否显示交流
            isComShow: false,
            editForm: {},
            printForm: {},
            editDefault: {},
            paginator: {},
            // 切换点击更多按钮的状态
            active: true,
            total: '',
            // 数组拼装
            dataArr: {},
            // 复选框选中返回对象
            checkObject: {},
            // 获取下拉框数据
            selectArrSet: [],
            // 新增编辑下拉框数据
            selectNewEdit: [],
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
            list: [],
            rowInfoId: ''
        }
    },
    // 混合
    mixins: [computed],
    methods: {
        next () {
            this.i++
            if (this.i > 11) {
                this.i = 11
            }
            let ui = $('.el-menu-item').eq(this.i)
            ui.click()
            let siderTitle = $('.el-submenu__title')
            if (this.i === 3) {
                siderTitle.eq(1).click()
            } else if (this.i === 4) {
                siderTitle.eq(2).click()
            } else if (this.i === 7) {
                siderTitle.eq(3).click()
            } else if (this.i === 8) {
                this.tipshow = false
            }
            console.log(this.i)
            let params = {'flag': 'pc'}
            axios.get('/api/index/seton', {params: params})
                .then((responce) => {
                    if (responce.data !== 'false') {
                        localStorage.setItem('tips', '0')
                    }
                })
        },
        preview () {
            this.i--
            if (this.i < 0) {
                this.i = 0
            }
            let ui = $('.el-menu-item').eq(this.i)
            console.log(this.i)
            let siderTitle = $('.el-submenu__title')
            if (this.i === 2) {
                siderTitle.eq(0).click()
            } else if (this.i === 3) {
                siderTitle.eq(1).click()
            } else if (this.i === 6) {
                siderTitle.eq(2).click()
            }
            ui.click()
        },
        // next () {
        //     this.i++
        //     if (this.i > 11) {
        //         this.i = 11
        //     }
        //     let ui = $('.el-menu-item').eq(this.i)
        //     ui.click()
        //     let siderTitle = $('.el-submenu__title')
        //     if (this.i === 3) {
        //         siderTitle.eq(1).click()
        //     } else if (this.i === 4) {
        //         siderTitle.eq(2).click()
        //     } else if (this.i === 7) {
        //         siderTitle.eq(3).click()
        //     } else if (this.i === 8) {
        //         this.tipshow = false
        //     }
        //     console.log(this.i)
            // let params = {'flag': 'wap'}
            // axios.get('/api/index/seton', {params: params}).then((responce) => {
            //     if (responce.data !== 'false') {
            //         localStorage.setItem('stepsBol', '0')
            //     }
            // })
        // },
        // preview () {
        //     this.i--
        //     if (this.i < 0) {
        //         this.i = 0
        //     }
        //     let ui = $('.el-menu-item').eq(this.i)
        //     console.log(this.i)
        //     let siderTitle = $('.el-submenu__title')
        //     if (this.i === 2) {
        //         siderTitle.eq(0).click()
        //     } else if (this.i === 3) {
        //         siderTitle.eq(1).click()
        //     } else if (this.i === 6) {
        //         siderTitle.eq(2).click()
        //     }
        //     ui.click()
        // },
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
            // var token = document.cookie.replace(/XSRF-TOKEN=/, '')
            var token = Math.random()
            var params = 'content=' + this.models[this.modelIndex].url + '&webtoken=' + token + '&type=' + type
            localStorage.setItem('webToken', token)
            axios.get('api/websocket?' + params).then((responce) => {})
        },
        // 更多--交流
        communkationFn (index, row) {
            this.isComShow = true
            this.rowInfoId = row.id
        },
        // 关闭交流
        closeComShow () {
            this.isComShow = false
        },
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
            } else {
                this.$message('请选择序号')
            }
        },
        // 更改批次状态
        createDemo (index, row) {
            this.$confirm('你是否要给当前公司默认添加一些基础信息', '信息', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'error'
            }).then(() => {
                let params = {id: row.id}
                axios.get(this.$adminUrl('create-demo'), {params: params})
                    .then((responce) => {
                        if (responce.data === 'true') {
                            this.$message({
                                type: 'success',
                                message: '添加初始数据成功'
                            })
                        }
                    })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消添加'
                })
            })
        },
        // 赋初值
        changeSerialState () {
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
                            this.websocketInfo('state')
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
                this.websocketInfo('add')
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
            this.printForm = row
            var qrcodePrintf = {
                url: this.url,
                printComponent: this.printComponent,
                printForm: this.printForm
            }
            localStorage.setItem('qrcodePrintf', '[]')
            localStorage.setItem('qrcodePrintf', JSON.stringify(qrcodePrintf))
            this.$router.push('/qrcodePrintf')
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
                        this.websocketInfo('send')
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
        },
        getListFlash () {
            this.boxArr(this.dataArr, true)
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
        // 判断第一次登录时提示遮罩显示
        axios.get('/api/index').then((responce) => {
            localStorage.setItem('tips', responce.data.pc_on)
            if (Number(localStorage.getItem('tips'))) {
                this.tipshow = true
            }
        })
        // this.tipshow = false
        // axios.get('/api/index').then((responce) => {
        //     localStorage.setItem('stepsBol', responce.data.wap_on)
        //     if (Number(localStorage.getItem('stepsBol'))) {
        //         this.tipShow = true
        //     }
        // })
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
        permissionCheckbox,
        roleCheckbox,
        companyPermission,
        Communication,
        webSocket
    }
}
</script>

<style lang='sass'>
// @mixin tipblock($left, $top){
//     left: $left;
//     top: $top;
// }
// @mixin hightlight($width, $height, $left, $top){
//     width: $width;
//     height: $height;
//     left: $left;
//     top: $top;
// }
.basic_model{
    min-height: 790px;
    .basic-wrap{
        .pcActive{
                // width: 123px;
                // height: 24px;
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
            float: left;
            .el-select, .dateBtn{
                margin-bottom: 10px;
            }
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
            overflow: hidden;
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
.el-message{
    background: red;
}
// .tipMask{
//     width: 100%;
//     height: 100%;
//     background: rgba(0, 0, 0, 0.3);
//     top: 0;
//     left: 0;
//     z-index: 2000;
//     position: absolute;
//     .tipblock{
//         position: absolute;
//         z-index: 999999;
//     }
//     .tip{
//         display: block;
//         max-width: 180px;
//         padding: 10px;
//         font-size: 13px;
//         border-radius: 5px;
//         background: rgb(0,0,0);
//         color: #fff;
//         font-style: italic;
//     }
    
//     .arrow{
//         display: block;
//         position: absolute;
//         width: 0;
//         height: 0;
//         border-left: 8px solid transparent;
//         border-right: 8px solid transparent;
//     }
//     .first{
//         @include tipblock(206px,194px);
//     }
//     .second{
//         @include tipblock(280px,67px);
//     }
//     .third{
//         @include tipblock(388px,194px);
//     }
//     .fourth{
//         @include tipblock(480px,67px);
//     }
//     .tianjian{
//         @include tipblock(460px,197px);
//     }
//     .driver{
//         @include tipblock(426px,197px);
//     }
//     .save{
//         @include tipblock(534px,72px);
//     }
//     .goods{
//         @include tipblock(623px,197px);
//     }
//     .one{
//         border-bottom: 8px solid rgb(0,0,0);
//         top: -8px;
//         left: 36px;
//     }
//     .two{
//         border-top: 8px solid rgb(0,0,0);
//         top: 58px;
//         left: 36px;
//     }
//     .three{
//         border-bottom: 8px solid rgb(0,0,0);
//         top: -8px;
//         left: 36px;
//     }
//     .four{
//         border-top: 8px solid rgb(0,0,0);
//         top: 58px;
//         left: 36px;
//     }
//     .serial{
//         @include tipblock(414px,181px);
//     }
//     .state{
//         right: 23px;
//         top: 207px;
//     }
//     .detect{
//         @include tipblock(338px,66px);
//     }
//     .car{
//         @include tipblock(326px,72px);
//     }
//     .enterOrigin{
//         @include tipblock(379px,72px);
//     }
//     .plan{
//         @include tipblock(492px,199px);
//     }
//     .take{
//         @include tipblock(620px,72px);
//     }
//     .enterLast{
//         @include tipblock(730px,199px);
//     }
}
// .hightlight{
//     background: rgb(255,255,255);
//     position: fixed;
//     box-shadow: 0 2px 15px rgba(0,0,0,.5);
//     border-radius: 4px;
// }
// .cultivatelight{
//     @include hightlight(118px,42px,210px,138px)
// }
// .warehouselight{
//     @include hightlight(620px,42px,210px,138px);
// }
// .salelight{
//     @include hightlight(196px,43px,210px,138px);

// }
// .base{
//     @include hightlight(346px,43px,210px,138px);
// }
// .cultivate{
//     @include hightlight(90px,42px,210px,138px);
// }
// .serialight{
//     @include hightlight(120px,42px,363px,273px);
// }
// .storagelight{
//     @include hightlight(490px,42px,210px,138px);
// }
// .statelight{
//     width: 61px;
//     height: 42px;
//     top: 275px;
//     right: 126px;
// }
// .farm{
//     @include hightlight(350px,43px,210px,138px);
// }
// .el-tabs__nav,.pcActive,.clickmore {
//     position: relative;
//     z-index: 9999999999;
// }
// .nextBtn{
//     width: 182px;
//     height: 53px;
//     border: none;
//     background:rgb(0,0,0);
//     color: #fff;
//     font-size: 14px;
//     border-radius: 5px;
//     position: absolute;
//     bottom: 100px;
//     right: 180px;
//     cursor: pointer;
//     &:hover{
//         background: -webkit-linear-gradient(top, rgb(0,0,0) 0%,#232222 100%);
//     }
//     span{
//         display: inline-block;
//         background: -webkit-gradient(linear, 0 0, 0 100%, color-stop(0, #ee432e), color-stop(0.5, #c63929), color-stop(0.5, #b51700), color-stop(1, #891100));
//         border-radius: 5px;
//         color: #fff;
//         font-weight: bold;
//         letter-spacing: 1;
//         padding: 6px 7px;
//         text-align: center;
//         text-shadow: 0px -1px 1px rgba(0, 0, 0, .8);
//         margin: 10px 0px 10px 10px;
//         line-height: 1.5;
//         &:hover{
//             background: -webkit-gradient(linear, 0 0, 0 100%, color-stop(0, #f37873), color-stop(0.5, #db504d), color-stop(0.5, #cb0500), color-stop(1, #a20601));
//         }
//     }
// }
// @media screen and (max-width: 1581px){
//     .serialight {
//         left: 343px;
//         top: 315px;
//     }
//     .statelight{
//         top: 315px;
//         right: 124px;
//     }
// }
// @media screen and (max-width: 1210px){
//     .serialight {
//         left: 335px;
//         top: 354px;
//     }
//     .statelight{
//         top: 355px;
//     }
// }
// @media screen and (max-width: 1169px){
//     .serialight {
//         left: 335px;
//         top: 376px;
//     }
//     .statelight{
//         top: 374px;
//     }
// }
// .totalBlock{
//         width: 400px;
//         min-height: 100px;
//         top: 50%;
//         left: 50%;
//         margin-left: -200px;
//         margin-top: -50px;
//         background: #fff;
//         box-shadow: 0 2px 15px rgba(0,0,0,.4);
//         position: absolute;
//         border-radius: 5px;
//         padding: 10px;
//         text-align: left;
//         font-weight: bold;
//         font-size: 16px;
//         text-indent: 32px;
//         line-height: 36px;
//         z-index: 99999;
//     }
// }
</style>
