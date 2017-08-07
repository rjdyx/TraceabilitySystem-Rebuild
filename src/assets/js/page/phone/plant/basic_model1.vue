/**
 * 信息组件
 * @description 
 * @author 吴燕萍
 * @date 2017/4/24
 * 
 */
<template>
<transition name="fade2">
    <div class="pBasicModel1">
        <header1 :title="models.title" :isbreed="isbreed"></header1>
        <headerImg :productName='productName' :isbreed="isbreed"></headerImg>
        <div class="pBM1_list">
            <div>
                <h3 :class="{breedFontCol:isbreed}">{{models.tableName}}</h3>
                <table>
                    <col style="width: 25%" />
                    <col style="width: 25%" />
                    <col style="width: 25%" />
                    <col style="width: 25%" />
                    <tbody>
                        <tr>
                            <th style="width: 25%" v-for="item in models.tableTheads">{{item}}</th>
                        </tr>
                        <tr v-for="list in lists" @touchend="goListDetails(list.id,list.custom_id)">
                            <td v-if="list.serial!==null">{{list.serial}}</td>
                            <td v-else>{{lack}}</td>
                            <td v-if="list.operate!==null">{{list.operate_name}}</td>
                            <td v-else>{{lack}}</td>
                            <td v-if="list.date!==null">{{list.date}}</td>
                            <td v-else>{{lack}}</td>
                            <td v-if="list.img!==null">
                                <img class="tdImg" src="list.img" alt="">
                            </td>
                            <td v-else>{{lack}}</td>
                        </tr>
                    </tbody>
                </table>
            </div> 
        </div>
        <!-- <router-view :title="models.title" :imgListName="imgListName" :details="models.details"></router-view> -->
    </div>
 </transition>
</template>
<style type="text/css" lang="sass">
    .breedCol{
        background:#93bf46!important;
    }
    .breedFontCol{
        color:#93bf46!important;
    }
    .pBasicModel1{
        width: 100%;
        padding-bottom: 1rem;
        .pBM1_list{
            background: #fbfbfb;
            >div{
                >h3{
                    font-weight:normal;
                    color:#3ccfb5;
                    font-size: .42rem;
                    padding: 2% 0% 0% 7%;
                    // font-weight:none;
                }
                >table{
                    width:92%;
                    margin: 0 auto;
                    table-layout:fixed;
                    tr{
                        width:100%;
                        font-size: .37rem;
                        border-bottom: 1px solid #e6e6e6;
                        text-align: center;
                        th{
                            font-weight:normal;
                            color:#333;
                            width: 25%;
                            box-sizing: border-box;
                            padding: 3% 0%;
                        }
                        td{
                            color:#989898;
                            padding: 1% 0%;
                            width: 25%;
                            box-sizing: border-box;
                            word-wrap: break-word;
                            >img{
                                width: 80%;
                                height: auto;
                            }
                        }
                    }
                }
            }      
        }
    }
</style>
<script>
import Header1 from './component/header.vue'
import HeaderImg from './component/headImg.vue'
import plantMessage from './js/plantMessage.js'
export default {
    name: 'pBasicModel1',
    data () {
        let modelObj = {}
        Object.assign(modelObj, plantMessage)
        return {
            models: modelObj[this.$route.meta.key],
            // title: '农事信息',
            // productName: '新疆苹果',
            // 要传给pBM2的数据
            imgListName: '农事记录详情',
            id: 555,
            lack: '信息缺失',
            // imgListName: '农事记录详情',
            lists: ''
        }
    },
    methods: {
        goListDetails (id, type) {
            var url = '/run/' + this.$route.meta.runName + '/' + this.$route.meta.key + '/datails/' + id
            var t = 1
            if (type !== undefined && type) {
                t = 0
            }
            sessionStorage.setItem('customDont', t)
            this.$router.push(url)
        }
    },
    mounted () {
        $(document).on('touchmove', function (e) {
            // e.preventDefault()
            e.stopPropagation()
        })
        var params = {code: this.$route.params.id}
        var url = 'run/plant/'
        if (this.$route.meta.runName === 'breed') {
            url = 'run/beast/'
        }
        axios.post(url + this.$route.meta.key, params)
            .then((responce) => {
                var lists = responce.data
                if (lists !== 404 && lists !== 403 && lists !== 400) {
                    this.lists = lists
                } else {
                    if (lists === 404) {
                        alert('溯源码无效！')
                        this.$router.go('-1')
                    }
                    if (lists === 403) {
                        alert('商家已关闭溯源码追溯！')
                        this.$router.go('-1')
                    }
                    if (lists === 400) {
                        alert('该溯源码无相关信息！')
                        this.$router.go('-1')
                    }
                }
            })
    },
    components: {
        Header1,
        HeaderImg
    },
    computed: {
        isbreed () {
            return this.isbreed = this.$route.meta.runName === 'breed'
        }
    }
}
</script>
