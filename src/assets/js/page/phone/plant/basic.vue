/**
 * 基础信息组件
 * @description 
 * @author 吴燕萍
 * @date 2017/4/24
 * 
 */
<template>
    <div id="pBasic">
        <header1 :title="models.title" :isbreed="isbreed"></header1>
        <headerImg></headerImg>
        <div class="pBasic_content">
            <div class="pBasic_content_planInfo">
                 <h3 :class="{breedFontCol:isbreed}">{{models.tableName}}</h3>
                 <table border="1" bordercolor="#fbfbfb">
                    <col style="width: 28%" />
                    <col style="width: 72%" />
                    <tbody>
                     <tr v-for="(v,k) in models.tableProtos">
                        <td style="width: 28%">{{models.tableTheads[k] }}</td>
                        <td style="width: 72%" v-if="v=='area'">{{datas[v]}}{{datas.unit}}</td>
                        <td style="width: 72%" v-else>{{datas[v]}}</td>
                     </tr>
                     </tbody>
                 </table>
            </div>
            <div class="pBasic_content_control">
                <h4 :class="{breedFontCol:isbreed}">{{models.tableName2}}</h4>
                <div v-for="i in 2">
                     <p>2017-04-11</p>
                    <img src="./images/img.png" height="322" width="670" alt="">
                </div>
            </div> 
         </div>
    </div>
</template>
<script>
import Header1 from './component/header.vue'
import HeaderImg from './component/headImg.vue'
import plantMessage from './js/plantMessage.js'
export default {
    name: 'pBasic',
    data () {
        let modelObj = {}
        Object.assign(modelObj, plantMessage)
        return {
            models: modelObj[this.$route.meta.key],
            isbreed: false,
            datas: {}
        }
    },
    props: {
    },
    mounted () {
        var params = {code: this.$route.params.id}
        var url = 'run/plant/plantation'
        if (this.$route.meta.runName === 'breed') {
            url = 'run/beast/farm'
        }
        axios.post(url, params)
            .then((responce) => {
                var lists = responce.data
                if (lists !== 404 && lists !== 403 && lists !== 400) {
                    this.datas = lists
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
    }
}
</script>
<style lang="sass">
.breedFontCol{
    color:#93bf46!important;
}
#pBasic{
    width:100%;
    padding-bottom: .5rem;
    // height:100%;
    // overflow: hidden;
    .pBasic_content{
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
        .pBasic_content_control{
            border-top: .4rem solid #f2f2f2;
            font-size: .3rem;
            padding-bottom: 2%;
            h4{
                font-weight:normal;
                padding: 4% 0% 0% 4%;
                color:#76cfbd;
            }
            div{
                width: 92%;
                margin: 0 auto;
                padding-bottom: 20px;
                p{
                    color: #a8a9a9;
                    font-size:.3rem;
                    padding:0% 0% 1% 0%;
                }
                img{
                    width: 100%;
                    height: auto;
                } 
            }
        }
    }
}
</style>
