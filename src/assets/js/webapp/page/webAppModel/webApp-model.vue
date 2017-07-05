/**
 * 
 * webapp基础模块组件
 * @author 舒丹彤 
 * @date 2017/06/06
 * 
 */
<template>
<div class="webApp_model">   
    <div class="webApp-wrap">

        <!-- tab -->
        <div class="apptab" v-if="tabshow">
            <tab v-model="index">
                <tab-item v-for="(model,index) in models" 
                @on-item-click="tabClick(index, model.tab)" 
                :key="index" 
                :selected="tabSelected===model.tab"
                >{{model.tab}}
                </tab-item>
            </tab>
        </div>

    <div class="appmain">
        <div class="applist" :class="{'has':ishas,'hasno':!ishas}">
                
            <!-- 操作 -->
            <div class="appOperate">
                <div @touchstart="closeOperate" class="closeOperate">
                    <i class="el-icon-arrow-up"></i>
                </div>
                <div class="operation">
                    <el-button type="primary" class="newbuilt" @click="webAppOperateType('new')">新建</el-button>
                    <div class="searchOp">
                        <el-input 
                            :placeholder="searchPlaceholder"
                            v-model="inputValue"
                            :on-icon-click="search" class="searchInp">
                        </el-input>
                        <el-button class="searchBtn" @click="textAndDateFind">搜索</el-button>
                    </div>
                </div>
                <!-- 时间操作 -->
                <group :title="time" v-if="timeshow">
                    <datetime v-model="value1" :title="'开始日期'" placeholder="请选择" confirm-text="确认" cancel-text="取消" 
                        clear-text="清空" @on-change="beforeDate" start-date="2000-1-1" :end-date="endDate"></datetime>
                    <datetime v-model="value2" :title="'结束日期'" placeholder="请选择" confirm-text="确认" cancel-text="取消" 
                        clear-text="清空" @on-change="afterDate" :start-date="startDate"></datetime>
                </group>
            </div>

            <!-- 列表头部 -->
            <div class="list">
                <span class="choice">序号</span>
                <span v-for="(item,index) in theads" 
                    :style="{width: widths[index] + '%'}">
                    {{theads[index]}}
                </span>
            </div>   
            <load-more :show-loading="listLoading" v-if="listLoading" tip="正在加载"></load-more>
            <!-- 列表中间 -->
            <swipeout class="swipeout">
                <swipeout-item transition-mode="follow" v-for="(pers,index) in tableData">
                    <div class="listContent demo-content vux-1px-t" slot="content">
                        <span class="choice">
                            <input type="checkbox" :value="pers.id" v-model="ischeckdate">
                            <span class="order">{{index+1}}</span>
                         </span>
                        <span v-for="(item,index) in protos" 
                              v-if="protos[index]=='img'"
                              :style="{width: widths[index] + '%'}">
                            <img :src="$img('images/ok.png')">
                        </span>
                        <el-tooltip effect="dark" placement="top" v-else="!protos[index] =='img'">
                            <div slot="content">{{pers[protos[index]]}}</div>
                            <div slot="content" v-if="pers[protos[index]] == null">null</div>
                            <span
                                :name="theads[index]"
                                :style="{width: widths[index] + '%'}" @click="checkDom($event.currentTarget)">
                                    {{pers[protos[index]]}}
                            </span>
                        </el-tooltip>
                        
                           
                    </div>
                    <div slot="right-menu">
                      <swipeout-button class="lookOver" type="primary" @click.native="showDetail(pers.id, pers)" v-if="rightMenu">
                      {{operateOn}}</swipeout-button>
                      <swipeout-button class="appedit" @click.native="webAppOperateType('edit'+pers.id)">编辑</swipeout-button>
                    </div>
                </swipeout-item>
            </swipeout>

            <!-- 二维码提示框  -->
            <div v-transfer-dom>
                <x-dialog v-model="showHideOnBlur" class="dialog-demo" hide-on-blur>
                    <div class="img-box">
                        <qrcode :value="qrcodeUrl" type="img"></qrcode>
                    </div>
                    <div @click="showHideOnBlur=false">
                        <span class="vux-close"></span>
                    </div>
                </x-dialog>
            </div>

            <!-- 列表底部 -->
            <div class="tableFooter">
                <el-button type="primary" class="allcheck" @click="checkedAll">全选</el-button>
                <el-button type="danger" class="appDelete" @click="listDelete">删除</el-button>
            </div>
            <!-- 分页 -->
            <paginator :total="total" @pageEvent="pageChange"></paginator>
        </div>
    </div>
  </div>
</div>
</template> 
 
<script>
import { XTable, Datetime, Group, Tab, TabItem, Swipeout, SwipeoutItem, LoadMore, Toast, Confirm, SwipeoutButton, Swiper, SwiperItem, Popover, XDialog, TransferDomDirective as TransferDom, XSwitch, Qrcode } from 'vux'
import {mapActions, mapMutations} from 'vuex'
import appmenu from '../index/appmenu.js'
import siderBar from '../../public/siderBar.vue'
import paginator from '../../public/paginator.vue'
import computed from '../webAppModel/appcomputed.js'
import appfunction from '../../directive/appfunction.js'
export default {
    name: 'BasicModel',
    directives: {
        TransferDom
    },
    props: {
        models: {
            type: Array,
            default () {
                return [{
                    key: '',
                    unite: '',
                    // 时间操作
                    url: '',
                    roleName: '',
                    urlParams: {},
                    // 从后台获取的所有数据
                    theads: [],
                    searchPlaceholder: '',
                    protos: ['name'],
                    widths: [26],
                    title: '',
                    typeComponent: [],
                    tabComponent: [],
                    tabshow: '',
                    timeshow: '',
                    batch: '',
                    rightMenu: '',
                    paramsIndex: '',
                    isCode: false
                }]
            }
        }
    },
    data () {
        return {
            // 展开时间组件样式
            isA: false,
            // 搜索框内容
            inputValue: '',
            // tab模块选择标志
            modelIndex: localStorage.getItem('trends') !== null ? localStorage.getItem('trends') : 0,
            // 列表数据
            tableData: [],
            listLoading: false,
            // 查询对象
            dataArr: {},
            ischeckdate: [],
            menus: appmenu,
            show: false,
            startDate: '',
            endDate: '',
            active: true,
            ishas: true,
            activeindex: '',
            tabSelected: '',
            checkAll: false,
            lastDom: '',
            operateOn: '查看',
            // 二维码图片是否显示
            showHideOnBlur: false,
            // 二维码跳转地址
            qrcodeUrl: ''
        }
    },
    // 混合
    mixins: [computed, appfunction],
    methods: {
        init (index = 0) {
            this.inputValue = ''
            this.value = ''
            this.$set(this, 'tableData', [])
        },
        /*
        新建
         */
        webAppOperateType (operateType) {
            this.$router.push('/webAppNew' + '/' + this.$route.params.model + '/' + this.modelIndex + '/' + operateType)
        },
        // 获取数据
        getAllMsg (data = {}, flag = false) {
            if (this.paramsIndex !== undefined) {
                var type = this.paramsIndex
            }
            if (flag) {
                this.listLoading = true
            }
            this.$dataWapGet(this, this.url, {params: data, type: type})
                .then((responce) => {
                    // 数据转换
                    if (responce.status === 200) {
                        if (responce.data.data.length !== 0) {
                            this.$set(this, 'tableData', responce.data.data)
                            this.total = responce.data.last_page
                        } else {
                            this.$set(this, 'tableData', responce.data.data)
                            this.total = 1
                        }
                        this.listLoading = false
                    }
                })
        },
        // 实现全选与反选
        checkedAll (e) {
            let ischeckdate = []
            if (!this.checkAll) {
                this.tableData.forEach((item) => {
                    ischeckdate.push(item.id)
                })
            }
            this.ischeckdate = ischeckdate
        },
        tabClick (subindex, modelName) {
            this.modelIndex = subindex
            localStorage.setItem('appTab', modelName)
            localStorage.setItem('trends', this.modelIndex)
        },
        // 侧边栏的显示与隐藏
        showsider () {
            this.show = true
        },
        hidesider () {
            this.show = false
        },
        // 点击进入详情页
        showDetail (id, ret) {
            if (!this.isCode) {
                if (this.unite === 'plantTo') {
                    this.$router.push('/appIndex/appdetailbasic/' + this.batch + '/plantTo' + id)
                } else {
                    this.$router.push('/appIndex/appdetailbasic/' + this.batch + '/' + id)
                }
            } else {
                this.setCodeUrl(ret.code)
                this.showHideOnBlur = true
            }
        },
        // 生产二维码地址
        setCodeUrl (code) {
            var per = code.substring(0, 1)
            var url = require('projectRoot/env.js').app_ano_url + '/#/run/'
            if (per === 'P') {
                url += 'plant'
            } else {
                url += 'breed'
            }
            this.qrcodeUrl = url + '/index/' + code
        },
        // 关闭新建和时间组件
        closeOperate () {
            if (this.ishas === true) {
                $('.applist').animate({top: '-141px'})
            } else {
                $('.applist').animate({top: '-57px'})
            }
        },
        // 文本与时间按钮查询
        textAndDateFind () {
            this.dataArr['query_text'] = this.inputValue
            this.dataArr['page'] = 1
            this.boxArr(this.dataArr, true)
        },
        // 开始日期
        beforeDate (val) {
            this.startDate = val
            this.dataArr['beforeDate'] = val
        },
        // 结束日期
        afterDate (val) {
            this.endDate = val
            this.dataArr['afterDate'] = val
        },
        // 分页跳转
        pageChange (val) {
            if (val === 'first') {
                this.setToast('text', '第一页')
            } else if (val === 'last') {
                this.setToast('text', '最后一页')
            } else if (val === 'exceed') {
                this.setToast('text', '页数超过总页数', '12em')
            } else {
                this.dataArr['page'] = val
                this.boxArr(this.dataArr, true)
            }
        },
        // 组合查询
        boxArr (dataArr, flag) {
            this.getAllMsg(dataArr, flag)
            this.clearCheck()
        },
        // 提示弹窗
        setToast (type, text, width = '7.6em') {
            this.$vux.toast.show({
                type: type,
                text: text,
                width: width,
                position: 'middle'
            })
        },
        // 单条删除或多条删除
        listDelete () {
            if (this.ischeckdate.length !== undefined && this.ischeckdate.length !== 0) {
                var _this = this
                this.$vux.confirm.show({
                    title: '删除选择信息',
                    onCancel () {
                        _this.setToast('text', '取消删除')
                    },
                    onConfirm () {
                        var paramsDel = { 'ids': _this.ischeckdate }
                        axios.get(_this.$wapUrl(_this.url + '/deletes'), { params: paramsDel })
                            .then((responce) => {
                                if (responce.data === 'true') {
                                    _this.boxArr(_this.dataArr, false)
                                    _this.setToast('success', '删除数据成功', '10em')
                                } else if (responce.data === 'state') {
                                    _this.setToast('text', '有数据已被使用，无法删除', '18em')
                                } else {
                                    _this.setToast('cancel', '删除数据失败', '10em')
                                }
                            })
                    }
                })
            } else {
                this.setToast('cancel', '请选择序号')
            }
        },
        // 改变URL初始值
        changeUrl () {
            this.tableData = []
            this.dataArr = {}
            this.boxArr(this.dataArr, true)
            this.inputValue = ''
            this.value1 = ''
            this.value2 = ''
            this.closeOperate()
            this.clearCheck()
        },
        // 清空复选框
        clearCheck () {
            this.ischeckdate = []
            this.checkAll = false
        },
        // 检测body最后dom
        checkDom (val) {
            if (this.lastDom !== val) {
                this.lastDom = val
            } else {
                document.body.lastChild.style.display = 'block'
            }
            setTimeout(function () {
                document.body.lastChild.style.display = 'none'
            }, 1000)
        },
        // 判断是查看还是二维码
        getMenu () {
            if (this.isCode) {
                this.operateOn = '二维码'
            } else {
                this.operateOn = '查看'
            }
        }
    },
    mounted () {
        this.boxArr(this.dataArr, true)
        if (this.$route.path.indexOf('plantTrace') !== -1) {
            this.ishas = false
        }
        let tabTxt = localStorage.getItem('appTab')
        this.tabSelected = tabTxt
        this.getMenu()
    },
    watch: {
        models () {
            this.modelIndex = 0
            localStorage.setItem('trends', 0)
            this.changeUrl()
            this.tabSelected = '施肥信息'
            this.getMenu()
        },
        key () {
            this.changeUrl()
        },
        // 监测全选按钮
        ischeckdate () {
            if (this.tableData.length === this.ischeckdate.length) {
                if (this.tableData.length !== 0) {
                    this.checkAll = true
                }
            } else {
                this.checkAll = false
            }
        },
        // 全选
        checkAll (check) {
            this.checkAll = check
        },
        // 检测路由变化
        $route () {
            if (this.$route.path.indexOf('plantTrace') !== -1) {
                this.ishas = false
            } else {
                this.ishas = true
            }
        }
    },
    components: {
        XTable,
        paginator,
        Group,
        Datetime,
        Tab,
        TabItem,
        siderBar,
        Swipeout,
        SwipeoutItem,
        SwipeoutButton,
        Swiper,
        SwiperItem,
        Toast,
        Confirm,
        LoadMore,
        Popover,
        XDialog,
        XSwitch,
        Qrcode
    }
}
</script>

<style lang='sass'>
.dp-header{
    .dp-item.dp-left,.dp-item,.dp-item.dp-right {
        color: #009acb!important;
    }
}
.weui-dialog{
    width: auto;
}
.webApp_model{
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding-top: 50px;
    
    .webApp-wrap{ 
        width: 100%;
        height: 100%;
        overflow: hidden;
        .searchInp {
            width: 60%;
            margin: 0 3%;
            /*margin-right: 10px;*/
        }
        .searchBtn {
            float: right;
            width: 17%;
        }
        .searchOp {
            display: inline;
        }  
    } 
    .newbuilt{
        width: 17%;
        float: left;
        /*margin-right: 10px;*/
    }
    .allcheck{
        float: left;
        margin: 5% 4% 0 1%;
    }
    .appDelete{
        float: right;
        margin-right: 4px;
    }
    .appDelete,.allcheck{
        display: inline-block;
        margin-top: 4px;
    }
    .tableFooter{
        height: 45px;
        background: #eaeaea;
        border: 1px solid #d8d8d8;
    }
    .appEdit{
        width: 5%;
        display: inline-block;
        position: absolute;
        right: 4px;
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
        margin-top: 5px;
        width: 100%;
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
    .list{
        width: 100%;
        background: #eaeaea;
        height: 54px;
        margin-top:5px;
        -webkit-overflow-scrolling: touch;
        li,span{
            display: inline-block;
            height: 54px;
            text-align: center;
            line-height: 54px;
            font-size: 14px;
        }
    }
    .listContent{
        width: 100%;
        position: relative;
        height: 54px;
        li,span {
            display: inline-block;
            height: 54px;
            line-height: 54px;
            text-align: center;
            font-size: 14px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            vertical-align: middle;
            padding: 0 2%;
            position: relative;
        }
    }
    .choice{
        width: 20%;
    }
    /*.listContent:nth-child(2n){
        background: #eaeaea !important;
    }*/
    .order{
        margin-left: 18%;
    }
    .el-button--primary{
        background: #009acb;
        border-color: #009acb;
    }
    .apptab{
        width: 100%;
        margin-bottom: 47px;
        margin-top: 5px;
        .vux-tab{
            display: block;
            .vux-tab-item{
                width: 33.3%;
                display: inline-block;
                background: #eef0ef;
                border: 1px solid #dddfde !important;
                border-right: none !important;
                margin-bottom: 3px;
            }
            .vux-tab-item:nth-child(3n+0){
                border-right: 1px solid #dddfde !important;
            }
            .vux-tab-item.vux-tab-selected{
                color: #666;
                border-bottom: none;
                background: #009acb;
                color: #fff;
            }
        }
        .vux-tab-ink-bar{
            background-color: transparent;
        }
    }
    .appmain{
        height: 100%;
        width: 100%;
        /*margin: 0 5px;*/
        overflow: scroll;
        position: relative;
    }
    .applist{
        width: 100%;
        height: 100%;
        position: absolute;
        /*top: -132px;*/
        left: 0;
    }
    .appedit{
        background: #009acb;
    }
    .appOperate{
        /*height: 132px;*/
        margin-top: 1%;
    }
    .closeOperate{
        width: 100%;
        height: 23px;
        /*border: 1px solid;*/
        margin-bottom: 5px;
    }
    .el-icon-arrow-up{
        display: block;
        margin: 0 auto;
        width: 3%;
        height: 100%;
        animation: start 2s infinite ease-in-out;
    }
    @keyframes start {
        0%, 30%{
            opacity: 0.3;
            transform: translateY(27px);
        }
        60%{
            opacity: 1;
            transform: translate(0);
        }
        100%{
            opacity: 0.5;
            transform: translateY(-8px);
        }
    }
    .paginator{
       /* position: absolute;
        bottom: 10%;*/
        margin-bottom: 2%;
    }
    .active{
        background: red !important;
    }
    .unavtive{
        background: green !important;
    }
    .img{
        display: inline-block;
        background: red;
    }
    .has{
        top:-141px;
    }
    .hasno{
        top: -57px;
    }
    .operation{
        margin-bottom: 10px;
    }
    .weui-cell:before{
        border-top: 1px solid transparent !important;
    }
    .weui-cell{
        padding: 6px 15px;
    }
    .weui-cells:after{
        border-bottom: none;
    }
    .el-tooltip__popper{
        left: 90px !important;
        top: 230px !important;
    }
}  
</style>
