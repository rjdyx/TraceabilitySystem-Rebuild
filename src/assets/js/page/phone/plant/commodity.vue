/**
 * 商品信息组件
 * @description 
 * @author 吴燕萍
 * @date 2017/4/24
 * 
 */
<template>
<transition name="fade2">
    <div class="pCommodity">

    <header1 :title="models.title"></header1>

    <swiper :imgArr="imgArr"></swiper>

    <div class="pCom_content">
        <div class="pCom_content_introduce">
            <div>
                <ul>
                    <li>{{datas.product_name}}</li>
                    <li ><em>溯源次数：</em>{{datas.time}}</li>
                </ul>
                <p>{{datas.desc}}</p>
            </div>
        </div>
        
        <div  class="pBasic_content">
            <div class="pBasic_content_planInfo">
                <h3>{{models.tableName}}</h3>
                <table border="1" bordercolor="#fbfbfb">
                    <col style="width: 28%" />
                    <col style="width: 72%" />
                    <tbody>
                        <tr v-for="(v,k) in models.tableProtos">
                            <td style="width: 28%">{{models.tableTheads[k] }}</td>
                            <td style="width: 72%">{{datas[v]}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </div>
</transition>
</template>
<script>
import Header1 from './component/header.vue'
import HeaderImg from './component/headImg.vue'
import TwoColList from './component/twoColList.vue'
import plantMessage from './js/plantMessage.js'
import swiper from './component/swiper.vue'
import canvas from './js/ripple.js'
export default {
    name: 'pBasicModel1',
    data () {
        let modelObj = {}
        Object.assign(modelObj, plantMessage)
        return {
            models: modelObj[this.$route.meta.key],
            datas: {},
            product: {},
            sells: false,
            lack: '无相关记录',
            x: 10,
            i: 0,
            imgArr: []
        }
    },
    mixins: [canvas],
    mounted () {
        $(document).on('touchmove', function (e) {
            e.stopPropagation()
        })
        var params = {code: this.$route.params.id}
        if (localStorage.getItem('teaTrace_product') === null) {
            axios.get('teaTrace/tea/product', {params: params})
                .then((responce) => {
                    var lists = responce.data
                    if (lists !== 400 && lists !== 404 && lists !== 403) {
                        this.datas = lists
                        localStorage.setItem('teaTrace_product', JSON.stringify(lists))
                        if (lists.product_img !== null && lists.product_img !== '') {
                            this.imgArr = lists.product_img.split(',')
                        }
                    }
                })
        } else {
            var tabLocalProduct = JSON.parse(localStorage.getItem('teaTrace_product'))
            this.datas = tabLocalProduct
            if (tabLocalProduct.product_img !== 'null' && tabLocalProduct.product_img !== '' && tabLocalProduct.product_img !== null) {
                this.imgArr = tabLocalProduct.product_img.split(',')
            }
        }
    },
    methods: {
    },
    components: {
        Header1,
        HeaderImg,
        TwoColList,
        swiper
    }
}
</script>
<style type="text/css" lang="sass">
    .pBasic_content {
        width: 100%;
        background: #fbfbfb;
        .pBasic_content_planInfo{
            width: 100%;
            padding-bottom: 5%;
            color:#3ccfb5;
            >h3{
                font-weight:normal;
                font-size: .42rem;
                padding: 4% 0% 4% 4%;
            }
            >table{
                width: 92%;
                margin:0 auto;
                font-size:.4rem;
                border-collapse: collapse;
                border-color:#e6e6e6;
                table-layout:fixed;
                tr{
                    width: 100%;
                    td:first-child{
                        width:28%;
                        max-width:28%;
                        color:#333;
                        text-align: left;
                        padding:3% 0% 3% 5%;
                        box-sizing: border-box;
                    }
                    td:last-child{
                        width: 72%;
                        max-width:72%;
                        color:#989898;
                        padding:3% 0% 3% 5%;
                    }
                }
            }
        }
    }
    .pCommodity{
        width: 100%;
        height: 100%;
        margin-top: 1rem;
        .pCom_content{
            width: 100%;
            background: #fbfbfb;
            .pCom_content_introduce{
                width: 100%;
                padding-bottom:4%;
                border-bottom: .4rem solid #f2f2f2;
                >div{ 
                    width: 92%;
                    margin: 0 auto;
                    ul{
                        width:100%;
                        color:#3ccfb5;
                        display:flex;
                        justify-content: space-between;
                        padding: 4% 0% 3% 0%;
                        border-bottom: 1px solid #e6e6e6; 
                        li:first-child{
                            width:60%;
                            font-size: .42rem;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow:ellipsis;
                        }
                        li:last-child{
                            font-size:.32rem;
                            width:35%;
                            text-align:right;
                            em{
                                color:#999;
                            }
                        }
                    }
                    >p{
                        font-size:.4rem;
                        color:#666;
                    }
                } 
            }
            .pCom_content_list{
                padding-bottom:1rem;
                >div{
                    padding-bottom:4%;
                    border-bottom: .4rem solid #f2f2f2;
                }
                >div:last-child{
                     border-bottom: 0rem solid #f2f2f2;
                }
            }
        }
    }
    canvas{
        position: absolute;
        left: 0;
        top: 0.9rem;
        z-index: 2378758;
    }
</style>
