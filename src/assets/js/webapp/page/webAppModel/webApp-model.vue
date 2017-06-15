/**
 * 
 * webapp基础模块组件
 * @author 舒丹彤 
 * @date 2017/06/6
 * 
 */
<template>
<div class="webApp_model">   
    <div class="webApp-wrap">

        <!-- tab -->
        <div class="apptab" v-show="tabshow">
            <tab>
                <tab-item v-for="(model,index)  in models" @on-item-click="tabClick(index)">{{model.tab}}</tab-item>
            </tab>
        </div>

        <div class="appmain">
            <!-- 操作 -->
        <div class="appOperate">
            <el-button type="primary" class="newbuilt" @click="webAppNew">新建</el-button>
            <div class="searchOp">
                <el-input   
                    :placeholder="searchPlaceholder"
                    v-model="inputValue"
                    :on-icon-click="search" class="searchInp">
                </el-input>
                <el-button class="searchBtn">搜索</el-button>
            </div>
        </div>

        <div v-show="timeshow">
             <!-- 时间操作 -->
            <transition name="slide-fade">
                <group :title="time" v-show="showdate">
                    <datetime v-model="value1" :title="'开始日期'" placeholder="请选择"></datetime>
                    <datetime v-model="value1" :title="'结束日期'" placeholder="请选择"></datetime>
                </group>
            </transition>

            <!-- 隐藏操作按钮 -->
            <div class="clickHide" @click="hideDate">
                <span class="hide" :class="{'uphide': isA,'downhide': !isA }"></span>
            </div>
        </div>

        <!-- 列表头部 -->
        <div class="list">
            <span class="choice">序号</span>
            <span v-for="(item,index) in theads" :style="{width: widths[index] + '%'}" class="appth">{{theads[index]}}</span>
        </div>   

        <!-- 列表中间 -->
        <swipeout class="swipeout">
            <swipeout-item transition-mode="follow" v-for="(pers,index) in tableData">
                <div class="listContent demo-content vux-1px-t" slot="content">
                    <span class="choice">
                        <input type="checkbox" :value="pers.id" v-model="ischeckdate">
                        <span class="order">{{index+1}}</span>
                    </span>
                    <span 
                        v-for="(item,index) in protos" 
                        :name="theads[index]"  
                        :style="{width: widths[index] + '%'}">
                            {{pers[protos[index]]}}
                    </span>
                    <!-- <span class="appEdit">
                        <span class="editImg">
                        </span>
                    </span> -->
                </div>
                <div slot="right-menu">
                  <swipeout-button class="lookOver" type="primary" @click.native="showDetail">查看</swipeout-button>
                  <swipeout-button class="appedit">编辑</swipeout-button>
                </div>
            </swipeout-item>
        </swipeout>

        <!-- 列表底部 -->
        <div class="tableFooter">
            <input type="checkbox" class="allcheckbox" v-model="checkAll" @click="checkedAll">
            <el-button type="primary" class="allcheck" @click="checkedAll">全选</el-button>
            <el-button type="danger" class="appDelete">删除</el-button>
        </div>
        <paginator></paginator>
        </div>
  </div>
</div>
</template> 
 
<script>
import { XTable, Datetime, Group, Tab, TabItem, Swipeout, SwipeoutItem, SwipeoutButton } from 'vux'
import {mapActions, mapMutations} from 'vuex'
// import appTab from '../../public/tab.vue'
import appmenu from '../index/appmenu.js'
import appHeader from '../../public/header.vue'
import siderBar from '../../public/siderBar.vue'
import paginator from '../../public/paginator.vue'
import computed from '../webAppModel/appcomputed.js'
export default {
    name: 'BasicModel',
    props: {
        models: {
            type: Array,
            default () {
                return [{
                    key: '',
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
                    tabComponent: [],
                    tabshow: '',
                    timeshow: '',
                    batch: ''
                }]
            }
        }
    },
    data () {
        return {
            // 时间组件是否显示
            showdate: false,
            // 展开时间组件样式
            isA: false,
            // 搜索框内容
            inputValue: '',
            // tab模块选择标志
            modelIndex: 0,
            // 列表数据
            tableData: [],
            listLoading: false,
            ischeckdate: [],
            menus: appmenu,
            show: false,
            gneder_list: [
                ['男', '女']
            ]
        }
    },
    // 混合
    mixins: [computed],
    methods: {
        init (index = 0) {
            this.inputValue = ''
            this.value = ''
            this.$set(this, 'tableData', [])
        },
        /*
        新建
         */
        webAppNew () {
            console.log(this.$route)
            this.$router.push('/webAppNew' + '/' + this.$route.params.model + '/' + this.modelIndex)
        },
        // 获取数据
        getAllMsg (data = {}, flag = false) {
            if (this.paramsIndex !== undefined) {
                var type = this.paramsIndex
            }
            this.$dataWapGet(this, this.url, {params: data, type: type})
                .then((responce) => {
                    // 数据转换
                    if (responce.status === 200) {
                        if (responce.data.data.length !== 0) {
                            this.$set(this, 'tableData', responce.data.data)
                        } else {
                            this.$set(this, 'tableData', responce.data.data)
                        }
                    }
                })
        },
        // 隐藏日期组件
        hideDate () {
            this.isA = !this.isA
            this.showdate = !this.showdate
        },
        // 实现全选与反选
        checkedAll () {
            let ischeckdate = []
            if (!this.checkAll) {
                this.tableData.forEach((item) => {
                    ischeckdate.push(item.id)
                })
            }
            this.ischeckdate = ischeckdate
        },
        tabClick (subindex) {
            this.modelIndex = subindex
        },
        // 侧边栏的显示与隐藏
        showsider () {
            this.show = true
        },
        hidesider () {
            this.show = false
        },
        serial () {
            let sername = this.$refs.tdContent
            for (let kem in sername) {
                if (sername[kem].outerHTML.indexOf('批次号') !== -1) {
                    console.log(sername[kem].innerHTML)
                    sername[kem].style.textDecoration = 'underline'
                }
            }
        },
        showDetail () {
            this.$router.push('/appIndex/appdetailbasic/' + this.batch)
        }
    },
    mounted () {
        this.serial()
        this.getAllMsg()
    },
    watch: {
        models () {
            this.tableData = []
            this.getAllMsg()
            this.inputValue = ''
        },
        key () {
            this.tableData = []
            this.getAllMsg()
        },
        // 检测全选按钮
        ischeckdate () {
            if (this.tableData.length === this.ischeckdate.length) {
                this.checkAll = true
            } else {
                this.checkAll = false
            }
        },
        checkAll (check) {
            this.checkAll = check
        }
    },
    computed: {
    },
    components: {
        appHeader,
        XTable,
        paginator,
        Group,
        Datetime,
        Tab,
        TabItem,
        siderBar,
        Swipeout,
        SwipeoutItem,
        SwipeoutButton
    }
}
</script>

<style lang='sass'>
.webApp_model{
    .webApp-wrap{ 
        .searchInp {
            width: 60%;
            margin: 0 3% 10px;
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
        margin: 16px 7px 0 20px;
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
    .list{
        width: 100%;
        background: #eaeaea;
        height: 54px;
        span{
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
        span {
            display: inline-block;
            height: 54px;
            line-height: 54px;
            text-align: center;
            font-size: 14px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            vertical-align: middle;
        }
    }
    .choice{
            width: 20%;
        }
    .listContent:nth-child(2n){
        background: #eaeaea;
    }
    .order{
        padding-left: 10px;
    }
    .el-button--primary{
        background: #009acb;
        border-color: #009acb;
    }
    .apptab{
        width: 100%;
        margin-bottom: 50px;
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
    .appHeader{
        margin-bottom: 5px;
    }
    .appmain{
        margin: 0 5px;
    }
    /*.swipeout{
        width: 100%;
    }*/
    .appedit{
        background: #009acb;
    }
    /*.lookOver{
        background: #eaeaea;
    }*/
}  
</style>
