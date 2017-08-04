/**
 * 销售信息组件
 * @description 
 * @author 舒丹彤
 * @date 2017/8/04
 * 
 */
<template>
<transition name="fade2">
    <div id="pSale">

        <header1 :title="models.title" ></header1>
        
        <div class="pBasic_content" v-for="(c,d) in models">
        <h3>{{c.saleLabel}}</h3>

            <div class="pBasic_content_planInfo" v-for="(a,index) in c.saleTheads">

                 <h3>{{a.saleTitle}}</h3>

                 <table border="1" bordercolor="#fbfbfb">
                    <col style="width: 28%" />
                    <col style="width: 72%" />
                    <tbody>
                     <tr v-for="(item,index) in a.tableProtos">
                        <td style="width: 28%">{{ a.tableTheads[index]}}</td>
                        <td style="width: 72%" v-if="v=='area'">{{datas[item]}}{{datas.unit}}</td>
                        <td style="width: 72%" v-else>{{datas[item]}}</td>
                     </tr>
                     </tbody>
                 </table>
            </div>
            
            <div class="pBasic_content_planInfo" v-for="(a,index) in c.expressTheads">

                 <h3>{{a.saleTitle}}</h3>

                 <table border="1" bordercolor="#fbfbfb">
                    <col style="width: 28%" />
                    <col style="width: 72%" />
                    <tbody>
                     <tr v-for="(item,index) in a.tableProtos">
                        <td style="width: 28%">{{ a.tableTheads[index]}}</td>
                        <td style="width: 72%" v-if="v=='area'">{{datas[item]}}{{datas.unit}}</td>
                        <td style="width: 72%" v-else>{{datas[item]}}</td>
                     </tr>
                     </tbody>
                 </table>
            </div>

         </div>
    </div>
</transition>
</template>
<script>
import Header1 from './component/header.vue'
import plantMessage from './js/plantMessage.js'
export default {
    name: 'pBasic',
    data () {
        let modelObj = {}
        Object.assign(modelObj, plantMessage)
        return {
            models: modelObj[this.$route.meta.key],
            datas: {}
        }
    },
    props: {
    },
    mounted () {
        $(document).on('touchmove', function (e) {
            // e.preventDefault()
            e.stopPropagation()
        })
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
        console.log(this.models)
    },
    components: {
        Header1
    },
    computed: {
        isbreed () {
            return this.isbreed = this.$route.meta.runName === 'breed'
        }
    }
}
</script>
<style lang="sass">
.breedFontCol{
    color:#93bf46!important;
}
#pSale{
    width:100%;
    padding-bottom: .5rem;
    // height:100%;
    // overflow: hidden;
    .pBasic_content{
        width: 95%;
        background: #fbfbfb;
        margin-top: 1.5rem;
        margin-left: 2%;
        border: 2px solid #fbfbfb;
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
}
</style>
