/**
 * 
 * webapp详情页基础模块组件
 * @author 舒丹彤 
 * @date 2017/06/15
 * 
 */
<template>
<div class="appdetail_model">   
    <div class="webApp-wrap">

        <div class="appmain">
            <div class="applist" :class="{'has':!timeshow,'hasno':timeshow}">
                <div class="appOperate" v-if="timeshow">
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
                    <group :title="time">
                        <datetime v-model="value1" :title="'开始日期'" placeholder="请选择" confirm-text="确认" cancel-text="取消" 
                            clear-text="清空" @on-change="beforeDate" start-date="2000-1-1" :end-date="endDate"></datetime>
                        <datetime v-model="value2" :title="'结束日期'" placeholder="请选择" confirm-text="确认" cancel-text="取消" 
                            clear-text="清空" @on-change="afterDate" :start-date="startDate"></datetime>
                    </group>
                </div>

                <!-- 列表头部 -->
                <div :class="{'list': timeshow, 'noList': !timeshow}">
                    <span class="choice">序号</span>
                    <span v-for="(item,index) in theads" :style="{width: widths[index] + '%'}" class="appth">{{theads[index]}}</span>
                </div>   

                <load-more :show-loading="listLoading" v-if="listLoading" tip="正在加载"></load-more>
                <load-more :show-loading="listLoading" v-if="noLoading" tip="暂无数据"></load-more>

                <!-- 列表中间 -->
                <div class="listContent" v-for="(pers,index) in tableData">
                    <span class="choice">
                        <input type="checkbox" 
                        :value="pers.id" 
                        v-model="ischeckdate">
                        <span class="order">{{index+1}}</span>
                    </span>
                    <el-tooltip effect="dark" placement="top" v-for="(item,index) in protos">
                        <div slot="content">{{pers[protos[index]]}}</div>
                        <div slot="content" v-if="pers[protos[index]] == null">null</div>
                        <span 
                            :name="theads[index]"  
                            :style="{width: widths[index] + '%'}" @click="checkDom($event.currentTarget)">
                                {{pers[protos[index]]}}
                        </span>
                    </el-tooltip>
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
import { XTable, Datetime, Group, Tab, TabItem, Swipeout, SwipeoutItem, SwipeoutButton, LoadMore } from 'vux'
import {mapActions, mapMutations} from 'vuex'
import paginator from '../../public/paginator.vue'
import computed from '../appDetailModel/appdetailComputed.js'
import appfunction from '../../directive/appfunction.js'
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
                    paramsIndex: '',
                    delType: '',
                    timeshow: ''
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
            modelIndex: 0,
            // 查询对象
            dataArr: {},
            // 列表数据
            tableData: [],
            listLoading: false,
            noLoading: false,
            ischeckdate: [],
            show: false,
            wapUrl: '',
            startDate: '',
            endDate: '',
            lastDom: '',
            ishas: false
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
        closeOperate () {
            $('.applist').animate({top: '-142px'})
        },
         /*
        新建编辑
         */
        webAppOperateType (operateType, id) {
            if (id !== undefined) {
                localStorage.setItem('editId', id)
            }
            this.$router.push('/webAppForm' + '/' + this.$route.params.model + '/' + operateType)
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
        // 获取数据
        getAllMsg (data = {}, flag = false) {
            if (this.paramsIndex !== undefined && this.paramsIndex !== '') {
                var type = this.paramsIndex
            }
            if (flag) {
                this.listLoading = true
            }
            this.$dataWapGet(this, this.wapUrl, {params: data, type: type})
                .then((responce) => {
                    // 数据转换
                    if (responce.status === 200) {
                        if (responce.data.data.length !== 0) {
                            this.$set(this, 'tableData', responce.data.data)
                            this.total = responce.data.last_page
                            this.noLoading = false
                        } else {
                            this.$set(this, 'tableData', responce.data.data)
                            this.total = 1
                            this.noLoading = true
                        }
                        this.listLoading = false
                    }
                })
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
        // 获取Api接口数据
        getApiUrl () {
            var id = localStorage.getItem('appDetailsId')
            this.wapUrl = id + '/' + this.url
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
        // 单条删除或多条删除
        listDelete () {
            if (this.ischeckdate.length !== undefined && this.ischeckdate.length !== 0) {
                const _this = this
                this.$vux.confirm.show({
                    title: '删除选择信息',
                    onCancel () {
                        _this.setToast('text', '取消删除')
                    },
                    onConfirm () {
                        if (_this.delType !== undefined && _this.delType !== '') {
                            var type = _this.delType
                        }
                        var paramsDel = { 'ids': _this.ischeckdate, type: type }
                        axios.get(_this.$wapUrl(_this.wapUrl + '/deletes'), { params: paramsDel })
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
        }
    },
    mounted () {
        this.getApiUrl()
        this.boxArr(this.dataArr, true)
    },
    watch: {
        models () {
            this.tableData = []
            this.dataArr = {}
            this.boxArr(this.dataArr, true)
            this.inputValue = ''
        },
        key () {
            this.tableData = []
            this.dataArr = {}
            this.boxArr(this.dataArr, true)
        },
        // 检测全选反选按钮
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
        XTable,
        paginator,
        Group,
        Datetime,
        Tab,
        TabItem,
        Swipeout,
        SwipeoutItem,
        SwipeoutButton,
        LoadMore
    }
}
</script>

<style lang='sass'>

.dp-header .dp-item.dp-left, .dp-header .dp-item, .dp-header .dp-item.dp-right{
    color: #74b66e;
}
.appdetail_model{
    .weui-loadmore_line{
    border-top: none;
}
.weui-loadmore{
    margin: 0 auto !important;
}
.weui-loadmore_line .weui-loadmore__tips{
    position: relative !important;
    top: 0 !important;
    padding: 11px .55rem !important;
}
    padding-top: 50px;
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
    .allcheckbox{
        float: left;
        margin: 5% 4% 0 3%;
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
    .uphide{
        background: url(/public/images/arrowBottom.png) no-repeat;
        background-size: 100%;   
    }
    .downhide{
        background: url(/public/images/arrowTop.png) no-repeat;
        background-size: 100%;
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
    .list,.noList{
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
    /*.listContent:nth-child(3n){
        background: #eaeaea;
    }*/
    .order{
        padding-left: 10px;
    }
    .el-button--primary{
        background: #74b66e;
        border-color: #74b66e;
    }
    /*.appHeader{
        margin-bottom: 5px;
    }*/
    .appmain{
        margin: 0 5px;
        margin-top: 5px;
        /*overflow: scroll;*/
        position: relative;
    }
    .applist{
        width: 100%;
        height: 100%;
        position: absolute;
        /*top: -141px;*/
        left: 0;
    }
    .appedit{
        background: #009acb;
    }
}  
       .appOperate{
        /*height: 132px;*/
        margin-top: 1%;
        .el-button:active{
            border-color: #74b66e;
            color: #74b66e;
        }
        .el-button:hover{
            border-color: #74b66e;
            color: #74b66e;
        }
        .el-input__inner:focus{
            border-color: #74b66e;
        }
        .closeOperate{
            width: 100%;
            height: 23px;
            /*border: 1px solid;*/
            margin-bottom: 5px;
            .el-icon-arrow-up{
                display: block;
                margin: 0 auto;
                width: 3%;
                height: 100%;
                animation: start 2s infinite ease-in-out;
            }
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
        .operation{
            /*margin-bottom: 10px;*/
            height: 36px; 
        }
        .clickHide{
            margin-top: 5px;
            width: 100%;
            height: 30px;
            border: 1px solid transparent; 
            margin-bottom: 15px;
        }
        .weui-cells {
            margin-bottom: 2px;
        }
        
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
    .has{
        top: 0px;
        }
    .hasno{
        top: -142px;
    }
</style>
