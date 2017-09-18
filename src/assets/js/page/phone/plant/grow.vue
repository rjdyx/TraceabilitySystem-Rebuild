/**
 * 生长图片组件
 * @description 
 * @author 吴燕萍
 * @date 2017/4/24
 * 
 */
<template>
<transition name="fade2">
    <div id="home_grow">
        <header1 title="生长图片"></header1>
        <div class="hg_content">
            <ul>
                <li class="hg_content_li" v-for="grow in grows">
                    <!-- 时间 -->
                    <div :class="{hg_content_li_top: true}">
                        <img src="./images/grow_icon.png" height="30" width="31" alt="">
                        <span>{{grow.date}}</span><span>{{grow.name}}</span>
                    </div>
                    <!-- 图片 -->
                    <div class="hg_content_li_bottom">
                        <img :src="grow.img" height="322" width="670" alt="">
                        <p>{{grow.desc}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</transition>
</template>
<script >
import canvas from './js/ripple.js'
import Header1 from './component/header.vue'
export default {
    name: 'pGrow',
    data () {
        return {
            grows: {},
            canvasShow: true,
            i: 0
        }
    },
    mixins: [canvas],
    // 路由进入前
    beforeRouteEnter (to, from, next) {
        var str = to.path.substring(to.path.length - 18)
        var params = {code: str}
        if (sessionStorage.getItem(str + '/grow') === null) {
            axios.get('/teaTrace/tea/grow', {params: params})
                .then((responce) => {
                    if (responce.data === 404) {
                        alert('溯源码无效')
                        sessionStorage.setItem(str + '/grow', '404')
                        next('/404')
                        return false
                    } else {
                        sessionStorage.setItem(str + '/grow', JSON.stringify(responce.data))
                        next()
                        return false
                    }
                })
        } else if (sessionStorage.getItem(str + '/grow') === '404') {
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
        var tabLocalGrow = JSON.parse(sessionStorage.getItem(this.$route.params.id + '/grow'))
        this.grows = tabLocalGrow
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
    .breedBorder{
        // border-left:2px solid #93bf46!important;
        border-color:#93bf46!important;
    }
    .breedCol{
        background:#93bf46!important;
    }
    .breedFontCol{
        color:#93bf46!important;
    }
    #home_grow{
        width: 100%;
        padding-bottom: .5rem;
        .hg_content{
            width: 100%;
            padding-top: 1rem;
            background: #fbfbfb;
            >ul{
                width: 94%;
                margin:0 auto;
                border-left:2px solid #42bea4;
                >li{
                    padding-bottom: 5%;
                    font-size: .3rem;
                    .hg_content_li_top{
                        color:#76cfbd;
                        position: relative;
                        padding: 2% 0%;
                        margin-left:-2.5%;
                        >img{
                            width:4%;
                            height: auto;
                            vertical-align:middle;
                            margin-right:2%;
                        }
                        >span:last-child{
                            position: absolute;
                            right: 0%;
                        }
                    }
                    .hg_content_li_bottom{
                        width: 100%;
                        padding-left: 3%;
                        box-sizing:border-box;
                        overflow:hidden;
                        img{
                            width: 100%;
                            height: auto; 
                            float:left;
                        }
                        p{
                            width:100%;
                            font-size:.3rem;
                            font-weight:normal;
                            background: #42bea4;
                            color: white;
                            letter-spacing:1px;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow:ellipsis;
                            padding:.2rem;
                            float:left;
                        }      
                    }

                }
                >li:last-child{
                    padding-bottom: 0%;
                }
            }
        }
    } 
</style>
