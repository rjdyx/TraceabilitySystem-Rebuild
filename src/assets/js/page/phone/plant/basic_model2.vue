/**
 * 信息详情组件
 * @description 
 * @author 吴燕萍
 * @date 2017/4/24
 * 
 */
<template>
    <div id="pBasicModel2">
        <header1 :title="models.title" :isbreed="isbreed"></header1>
        <div class="pBM2_content">
            <div>
                <twoColList :tableList="models.details.tableList" :isbreed="isbreed"></twoColList>
                <div class="pBM2_content_imgList">
                    <h3 :class="{breedFontCol:isbreed}">{{models.details.tableName2}}</h3>
                    <ul>
                        <li v-for="i in 3"><img  src="./images/img.png" alt=""></li>
                    </ul>
                </div> 
            </div>
            
        </div>   
    </div>
</template>
<style type="text/css" lang="sass">
.breedCol{
    background:#93bf46!important;
}
.breedFontCol{
    color:#93bf46!important;
}
#pBasicModel2{
    width: 100%;
    .pBM2_content{
        width: 100%;
        padding-top: 1rem;
        background: #fbfbfb;
        .pBM2_content_imgList{
            width: 92%;
            margin: 0 auto; 
            padding-bottom:1rem;
            >h3{
                color:#3ccfb5;
                font-size: .42rem;
                padding: 4% 0% 3% 0%;
                border-bottom: 1px solid #e6e6e6; 
                font-weight:normal;
            }
            >ul{
                >li{
                    padding-top: 3%;
                    >img{
                        width: 100%;
                        height: auto;
                    }
                }
            }
        } 
    }
} 
</style>
<script>
import Header1 from './component/header.vue'
import TwoColList from './component/twoColList.vue'
import plantMessage from './js/plantMessage.js'
export default {
    name: 'pBasicModel2',
    data () {
        let modelObj = {}
        Object.assign(modelObj, plantMessage)
        return {
            models: modelObj[this.$route.meta.key],
            isbreed: false
        }
    },
    mounted () {
        console.log(this.$route)
        if (this.$route.meta.runName === 'breed') {
            this.isbreed = true
        }
    },
    components: {
        Header1,
        TwoColList
    }
}
</script>
