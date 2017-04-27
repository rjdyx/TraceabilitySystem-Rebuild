/**
 * 商品信息组件
 * @description 
 * @author 吴燕萍
 * @date 2017/4/24
 * 
 */
<template>
    <div class="pCommodity">
        <header1 :title="models.title"></header1>
        <headerImg></headerImg>
        <div class="pCom_content">
            <div class="pCom_content_introduce">
                <div>
                    <ul>
                        <li>方离开过对方离开过对方离开过对方离开过对方离开过对方离开过对方离开过对方离开过对方离开过对方离开过对方离开过对方离开过对方离开过对方离开过对方离开过对方离开过对方离开过对方离苹果</li>
                        <li><em>溯源次数：</em>105</li>
                    </ul>
                    <p>
                    对方离开过对方离开过对方离开过对方离开过对方离开过对方离开过对方离开过对方离开过对方离开过对方离开过对方离开过对方离开过对方离开过对方离开过对方离开过对方离开过对方离开过对方离开过对方离开过对方离开过对方离开过对方离开过对方离开过对方离开过对方离开
                    </p>
                </div>
            </div>
            <ul class="pCom_content_list">
                <li v-for="item in models.tableList"><twoColList :tableList="item"></twoColList></li>
            </ul>
        </div>   
    </div>
</template>
<style type="text/css" lang="sass">
.pCommodity{
    width: 100%;
    .pCom_content{
        width: 100%;
        background: #fbfbfb;
        .pCom_content_introduce{
            width: 100%;
            padding-bottom:4%;
            border-bottom: 1.4rem solid #f2f2f2;
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
                        font-size: 1.5rem;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow:ellipsis;
                    }
                    li:last-child{
                        font-size:1.2rem;
                        width:35%;
                        text-align:right;
                        em{
                            color:#999;
                        }
                    }
                }
                >p{
                    font-size:1.4rem;
                    color:#666;
                }
            } 
        }
        .pCom_content_list{
            >div{
                padding-bottom:4%;
                border-bottom: 1.4rem solid #f2f2f2;
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
            models: modelObj[this.$route.meta.key]
        }
    },
    mounted () {
    },
    components: {
        Header1,
        HeaderImg,
        TwoColList
    }
}
</script>
