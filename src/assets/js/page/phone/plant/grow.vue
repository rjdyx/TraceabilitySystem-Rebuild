/**
 * 生长图片组件
 * @description 
 * @author 吴燕萍
 * @date 2017/4/24
 * 
 */
<template>
    <div id="home_grow">
        <header1 title="生长图片"></header1>
        <div class="hg_content">
            <ul>
                <li class="hg_content_li" v-for="i in 5">
                    <!-- 时间 -->
                    <div class="hg_content_li_top">
                        <img src="./images/grow_icon.png" height="30" width="31" alt=""><span>2017-04-11</span><span>种植松土</span>
                    </div>
                    <!-- 图片 -->
                    <div class="hg_content_li_bottom">
                        <img src="./images/img.png" height="322" width="670" alt="">
                        <h4>种植基地的土地基地的土地基地的土地基地的土地基地的土地基地的土地基地的土地基地的土地基地的土地基地的土地基地的土地基地的土地铲平</h4>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<style type="text/css" lang="sass">
#home_grow{
    width: 100%;
    padding-bottom: 2.5rem;
    .hg_content{
        width: 100%;
        padding-top: 3.5rem;
        background: #fbfbfb;
        >ul{
            width: 94%;
            margin:0 auto;
            border-left:2px solid #42bea4;

            >li{
                padding-bottom: 5%;
                font-size: 1.1rem;
                .hg_content_li_top{
                    color:#76cfbd;
                    position: relative;
                    padding: 2% 0%;
                    margin-left:-2.3%;
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
                    img{
                        width: 100%;
                        height: auto;
                    }
                    h4{
                        width:100%;
                        font-size:1rem;
                        font-weight:normal;
                        background: #42bea4;
                        color: white;
                        letter-spacing:1px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        padding:2%;
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
<script >
import Header1 from './component/header.vue'
export default {
    name: 'pGrow',
    mounted () {
    },
    components: {
        Header1
    }
}
</script>
