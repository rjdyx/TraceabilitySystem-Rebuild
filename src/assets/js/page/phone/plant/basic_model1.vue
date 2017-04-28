/**
 * 信息组件
 * @description 
 * @author 吴燕萍
 * @date 2017/4/24
 * 
 */
<template>
    <div class="pBasicModel1">
        <header1 :title="models.title"></header1>
        <headerImg :productName='productName'></headerImg>
        <div class="pBM1_list">
            <div>
                <h3>{{models.tableName}}</h3>
                <table>
                    <tr>
                        <th v-for="item in models.tableTheads">{{item}}</th>
                    </tr>
                    <tr v-for="list in lists" @click="goListDetails(list.id)">
                        <td>{{list.serial}}</td>
                        <td>{{list.operate_name}}</td>
                        <td>{{list.date}}</td>
                        <td>
                            <!-- <img :src="item.img" alt=""> -->
                            <img class="tdImg" src="list.thumb" alt="">
                        </td>
                    </tr>
                </table>
            </div> 
        </div>
        <!-- <router-view :title="models.title" :imgListName="imgListName" :details="models.details"></router-view> -->
    </div>
</template>
<style type="text/css" lang="sass">
.pBasicModel1{
    width: 100%;
    padding-bottom: 2.5rem;
    .pBM1_list{
        background: #fbfbfb;
        >div{
            >h3{
                font-weight:normal;
                color:#3ccfb5;
                font-size: 1.4rem;
                padding: 2% 0% 0% 7%;
                // font-weight:none;
            }
            >table{
                width:92%;
                margin: 0 auto;
                tr{
                    width:100%;
                    font-size: 1.3rem;
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
            // imgListName: '农事记录详情',
            lists: ''
        }
    },
    methods: {
        goListDetails (id) {
            this.$router.push('/run/plant/' + this.$route.meta.key + '/datails/' + id)
        }
    },
    mounted () {
        var params = {cultivate_id: this.$route.params.id}
        axios.post('run/plant/' + this.$route.meta.key, params)
            .then((responce) => {
                if (responce.data !== 'false') {
                    this.lists = responce.data
                } else {
                    alert('溯源码无效！')
                    this.$router.push('/')
                }
            })
    },
    components: {
        Header1,
        HeaderImg
    }
}
</script>
