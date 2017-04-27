/**
 * 基础信息组件
 * @description 
 * @author 吴燕萍
 * @date 2017/4/24
 * 
 */
<template>
    <div id="pBasic">
        <header1 :title="models.title"></header1>
        <headerImg :productName='productName'></headerImg>
        <div class="pBasic_content">
            <div class="pBasic_content_planInfo">
                 <h3>{{models.tableName}}</h3>
                 <table border="1" bordercolor="#fbfbfb">
                     <tr v-for="theadsItem in models.tableTheads">
                         <td>{{theadsItem}}</td>
                         <td>广东果香农业公司李家村种植场</td>
                     </tr>
                 </table>
            </div>
            <div class="pBasic_content_control">
                <h4>{{models.tableName2}}</h4>
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
            productName: '新疆苹果',
            models: modelObj[this.$route.meta.key]
        }
    },
    props: {
        haha: {
            type: String,
            default: ''
        }
    },
    mounted () {
    },
    components: {
        Header1,
        HeaderImg
    }
}
</script>
<style lang="sass">
@import url("./css/puplic.css");
#pBasic{
    width:100%;
    padding-bottom: 2.5rem;
    // height:100%;
    // overflow: hidden;
    .pBasic_content{
        width: 100%;
        background: #fbfbfb;
        .pBasic_content_planInfo{
            width: 100%;
            padding-bottom: 5%;
            >h3{
                font-weight:normal;
                font-size: 1.4rem;
                padding: 4% 0% 4% 4%;
            }
            >table{
                width: 92%;
                margin:0 auto;
                font-size:1.3rem;
                border-collapse: collapse;
                border-color:#e6e6e6;
                tr{
                    width: 100%;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow:ellipsis;
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
            border-top: 1.4rem solid #f2f2f2;
            font-size: 1.2rem;
            padding-bottom: 5%;
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
                    font-size:1rem;
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
