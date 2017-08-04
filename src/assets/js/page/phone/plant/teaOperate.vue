/**
 * 信息组件
 * @description 
 * @author 吴燕萍
 * @date 2017/4/24
 * 
 */
<template>
<transition name="fade2">
    <div class="pBasicModel1">
       
      <!-- <canvas id="canvas"></canvas> -->

        <header1 :title="models.title"></header1>
        
        <div class="pCom_content">
        
            <div  class="pBasic_content">
                <div class="pBasic_content_planInfo">
                    <h3>{{models.tableName}}</h3>
                    <table border="1" bordercolor="#fbfbfb" v-if="datas.length>0" v-for="(item,key) in datas">
                        <col style="width: 28%" />
                        <col style="width: 72%" />
                        <tbody>
                            <tr v-for="(v,k) in models.tableProtos">
                                <td style="width: 28%">{{models.tableTheads[k] }}</td>
                                <td style="width: 72%" v-if="v!='img'">{{item[v]}}</td>
                                <td style="width: 72%" v-else><img :src="item[v]" height="30"></td>
                            </tr>
                        </tbody>
                    </table>
                    <div v-if="flag">{{lack}}</div>
                </div>
            </div>
        </div>
    </div>
 </transition>
</template>
<script>
import Header1 from './component/header.vue'
import plantMessage from './js/plantMessage.js'
import canvas from './js/ripple.js'
export default {
    name: 'pBasicModel1',
    data () {
        let modelObj = {}
        Object.assign(modelObj, plantMessage)
        return {
            models: modelObj[this.$route.meta.key],
            datas: [],
            product: {},
            sells: false,
            lack: '无相关记录',
            x: 10,
            i: 0,
            canvasShow: true,
            dataArr: [{result: {'0': '合格', '1': '不合格'}}],
            flag: false
        }
    },
    mixins: [canvas],
    mounted () {
        $(document).on('touchmove', function (e) {
            e.stopPropagation()
        })
        let urlName = this.$route.name
        var params = {code: this.$route.params.id}
        axios.get('teaTrace/tea/' + urlName, {params: params})
            .then((responce) => {
                if (responce.data.length !== 0) {
                    var ret = this.$conversion(this.dataArr, responce.data, 1)
                    ret = this.$eltable(ret)
                    this.datas = ret
                } else {
                    this.flag = true
                }
            })
    },
    methods: {
    },
    components: {
        Header1
    }
}
</script>
<style type="text/css" lang="sass">
    canvas{
        position: absolute;
        left: 0;
        top: 0.9rem;
        z-index: 54548;
    }
    .breedCol{
        background:#93bf46!important;
    }
    .breedFontCol{
        color:#93bf46!important;
    }
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
                margin-bottom: 1rem;
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
    .pBasicModel1{
        width: 100%;
        height: 100%;
        padding-bottom: 1rem;
            .pCom_content{
                width: 100%;
                background: #fbfbfb;
                margin-top: 1rem;
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
        }
    }
</style>
