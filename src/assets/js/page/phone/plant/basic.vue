/**
 * 基础信息组件
 * @description 
 * @author 吴燕萍
 * @date 2017/4/24
 * 
 */
<template>
<transition name="fade2">
    <div id="pBasic">

        <header1 :title="models.title" :isbreed="isbreed"></header1>

        <swiper></swiper>
        
        <div class="pBasic_content">
            <div class="pBasic_content_planInfo">
                 <h3>{{models.tableName}}</h3>
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
                <h4>{{models.tableName2}}</h4>
                <div class="video" v-if="video != null && video != ''">
                    <video :src="videoSrc" controls="controls"  height="200"></video>
                </div>
                <div class="video" v-else>
                    该种植区没有上传视频
                </div>    
            </div> 
         </div>
    </div>
</transition>
</template>
<script>
import Header1 from './component/header.vue'
import HeaderImg from './component/headImg.vue'
import swiper from './component/swiper.vue'
import plantMessage from './js/plantMessage.js'
export default {
    name: 'pBasic',
    data () {
        let modelObj = {}
        Object.assign(modelObj, plantMessage)
        return {
            models: modelObj[this.$route.meta.key],
            datas: {},
            video: '',
            videoSrc: ''
        }
    },
    props: {
    },
    mounted () {
        $(document).on('touchmove', function (e) {
            e.stopPropagation()
        })
        var params = {code: this.$route.params.id}
        axios.get('teaTrace/tea/plantation', {params: params})
            .then((responce) => {
                var lists = responce.data
                if (lists !== '403' && lists !== '404') {
                    this.datas = lists
                }
                this.video = lists.video
                this.videoSrc = require('projectRoot/env.js').app_ano_url + '/' + lists.video
            })
    },
    components: {
        Header1,
        swiper,
        HeaderImg
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
#pBasic{
    width:100%;
    padding-bottom: .5rem;
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
