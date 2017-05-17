/**
 * 商品信息组件
 * @description 
 * @author 吴燕萍
 * @date 2017/4/24
 * 
 */
<template>
    <div class="pCommodity">
        <header1 :title="models.title" :isbreed="isbreed"></header1>
        <headerImg></headerImg>
        <div class="pCom_content">
            <div class="pCom_content_introduce">
                <div>
                    <ul :class="{breedFontCol:isbreed}">
                        <li>{{product.name}}</li>
                        <li ><em>溯源次数：</em>{{product.time}}</li>
                    </ul>
                    <p>{{product.description}}</p>
                </div>
            </div>
            <div class="sell">
                <div class="title">销售与物流</div>
                <div class="content" v-for="sell in sells">
                    <div class="title2"><b>|</b> 交易日期：{{sell.start_date}} 至 {{sell.end_date}}</div>
                    <div>
                        <li>运输商品：</li>
                        <li>{{sell.delivery_name}}</li>
                    </div>
                    <div>
                        <li>供货商：</li>
                        <li>{{sell.supplier_name}}</li>
                    </div>
                    <div>
                        <li>经销商：</li>
                        <li>{{sell.client_name}}</li>
                    </div>
                    <div>
                        <li>运输方式：</li>
                        <li>{{sell.type_name}}</li>
                    </div>
                    <div v-if="sell.type==='self'">
                        <li>车牌号：</li>
                        <li>{{sell.vehicle_number}}</li>
                    </div>
                    <div v-if="sell.type==='consign'">
                        <li>物流公司：</li>
                        <li>{{sell.logistic_name}}</li>
                    </div>
                    <div v-if="sell.type==='consign'">
                        <li>物流订单号：</li>
                        <li>{{sell.consign_number}}</li>
                    </div>
                    <div v-if="sell.type==='selve'">
                        <li>提货人：</li>
                        <li>{{sell.selve_name}}</li>
                    </div>
                    <div v-if="sell.type==='selve'">
                        <li>提货日期：</li>
                        <li>{{sell.selve_date}}</li>
                    </div>
                </div> 
            </div>
        </div>   
    </div>
</template>
<style type="text/css" lang="sass">
.sell{
    width:100%;
    .title{
        width:92%;
        margin-left: 4%;
        padding: 15px 0px;
        color:#3ccfb5;
        line-height: 100px;
        font-size: 25px;
        border-bottom: 1px solid #e6e6e6;
    }
    .content{
        width:92%;
        margin-left: 4%;
        padding: 10px 0px;
        color:#666;
        font-size: 18px;
    div{
        height:60px;
    }
    li{
        list-style-type: none;
        float: left;
        text-align: center;
        width: 50%;
        height:60px;
        line-height: 60px;
    }
    .title2{
        width:92%;
        padding: 10px 0px;
        color:#666;
        line-height: 100px;
        font-size: 20px;
    }
    }
}
.breedFontCol{
    color:#93bf46!important;
}
.pCommodity{
    width: 100%;
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
</style>
<script>
import Header1 from './component/header.vue'
import HeaderImg from './component/headImg.vue'
import TwoColList from './component/twoColList.vue'
import plantMessage from './js/plantMessage.js'
export default {
    name: 'pBasicModel1',
    data () {
        let modelObj = {}
        Object.assign(modelObj, plantMessage)
        return {
            models: modelObj[this.$route.meta.key],
            isbreed: false,
            product: {},
            sells: {}
        }
    },
    mounted () {
        var params = {code_id: this.$route.params.id}
        axios.post('run/product', params)
            .then((responce) => {
                if (responce.data !== 'false') {
                    this.product = responce.data
                } else {
                    alert('溯源码无效！')
                    this.$router.push('/')
                }
            })
        axios.post('run/sell', params)
            .then((responce) => {
                if (responce.data !== 'false') {
                    this.sells = responce.data
                }
            })
    },
    components: {
        Header1,
        HeaderImg,
        TwoColList
    }
}
</script>
