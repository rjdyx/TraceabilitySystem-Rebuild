/**
 * 信息组件
 * @description 
 * @author 吴燕萍
 * @date 2017/4/24
 * 
 */
<template>
<transition name="fade2">
    <div :class="{'pBasicModel':models.isTrue,'pbasic':!models.isTrue}">

       
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
                                <td style="width: 72%" v-else><img :src="item[v]" height="30" @click="enlargeImgFn(item[v])"></td>
                            </tr>
                        </tbody>
                    </table>
                    <div v-if="flag" class="lack">{{lack}}</div>
                </div>
            </div>
        </div>
        <!-- 图片弹出框  -->
        <div v-transfer-dom>
            <x-dialog v-model="showHideOnBlur" class="dialogImg" hide-on-blur>
                <div class="img-box">
                    <img :src="enlargeImg" alt="">
                </div>
                <div @click="showHideOnBlur=false">
                    <span class="vux-close"></span>
                </div>
            </x-dialog>
        </div>
    </div>
 </transition>
</template>
<script>
import Header1 from './component/header.vue'
import plantMessage from './js/plantMessage.js'
import canvas from './js/ripple.js'
import { XDialog, TransferDomDirective as TransferDom } from 'vux'
export default {
    name: 'pBasicModel1',
    directives: {
        TransferDom
    },
    data () {
        let modelObj = {}
        Object.assign(modelObj, plantMessage)
        return {
            models: modelObj[this.$route.meta.key],
            datas: [],
            product: {},
            sells: false,
            lack: '无相关记录',
            i: 0,
            canvasShow: true,
            dataArr: [{result: {'0': '合格', '1': '不合格'}}, {transportable_type: {'self': '自运', 'consign': '托运'}}],
            flag: false,
            showHideOnBlur: false,
            enlargeImg: ''
        }
    },
    mixins: [canvas],
    // 路由进入前
    beforeRouteEnter (to, from, next) {
        var str = to.path.substring(to.path.length - 18)
        var urlName = to.name
        var params = {code: str}
        if (sessionStorage.getItem(str + '/' + urlName) === null) {
            axios.get('teaTrace/tea/' + urlName, {params: params})
                .then((responce) => {
                    if (responce.data === 404) {
                        alert('溯源码无效')
                        sessionStorage.setItem(str + '/' + urlName, '404')
                        next('/404')
                        return false
                    } else {
                        sessionStorage.setItem(str + '/' + urlName, JSON.stringify(responce.data))
                        next()
                        return false
                    }
                })
        } else if (sessionStorage.getItem(str + '/' + urlName) === '404') {
            alert('溯源码无效')
            next('/404')
            return false
        } else {
            next()
        }
    },
    mounted () {
        $(document).on('touchmove', function (e) {
            e.stopPropagation()
        })
        let urlName = this.$route.name
        var tabLocalOperate = JSON.parse(sessionStorage.getItem(this.$route.params.id + '/' + urlName))
        if (urlName === 'sell') {
            this.getRet(tabLocalOperate)
        } else if (urlName === 'fertilize') {
            tabLocalOperate = this.$eltable(tabLocalOperate)
        }
        this.datas = tabLocalOperate
    },
    methods: {
        enlargeImgFn (imgSrc) {
            if (imgSrc) {
                this.enlargeImg = imgSrc
                this.showHideOnBlur = true
            }
        },
        getRet (ret) {
            for (let item in ret) {
                if (ret[item].transportable_type === '托运') {
                    this.models['tableTheads'] = this.models.tableTheads2
                    this.models['tableProtos'] = this.models.tableProtos2
                } else {
                    this.models['tableTheads'] = this.models.tableTheads1
                    this.models['tableProtos'] = this.models.tableProtos1
                }
            }
        }
    },
    components: {
        Header1,
        XDialog
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
.dialogImg{
    .weui-dialog{
        background:none;
        img{
            width: 100%;
            height:100%;
            box-sizing: border-box;
        }
    }
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
            .lack{
                padding: 4% 0% 4% 4%;
            }
        }
    }
    .pBasicModel,.pBasic{
        width: 100%;
        height: 100%;
        padding-bottom: 1rem;
    }
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
</style>
