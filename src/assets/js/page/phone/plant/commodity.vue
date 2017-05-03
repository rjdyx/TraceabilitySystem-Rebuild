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
            <ul class="pCom_content_list">
                <li v-for="item in models.tableList"><twoColList :tableList="item" :isbreed="isbreed"></twoColList></li>
            </ul>
        </div>   
    </div>
</template>
<style type="text/css" lang="sass">
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
            product: {}
        }
    },
    mounted () {
        // if (this.$route.meta.runName === 'breed') {
        //     this.isbreed = true
        // }
        var params = {code_id: this.$route.params.id}
        axios.post('run/product', params)
            .then((responce) => {
                if (responce.data !== 'false') {
                    this.product = responce.data
                    console.log(this.product)
                } else {
                    alert('溯源码无效！')
                    this.$router.push('/')
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
