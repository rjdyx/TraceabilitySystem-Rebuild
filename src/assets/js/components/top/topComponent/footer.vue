/**
 * @description:页面版权
 * @author 舒丹彤
 * @date 2017/4/26 
 *  
 */ 
<template>
	<div class="copyright">
        <p>
            Copyright©2017广东省科技计划重大专项科研成果 版权所有
            <a href="http://www.miitbeian.gov.cn/" target="_blank">粤ICP备16082048号-2</a>
        </p>
        <p>
            最佳浏览器体验:360极速模式浏览器，最佳分别率：1680*1050
        </p>
    </div>
</template>


<script>
export default {
    name: 'footer'
}
</script>

<style lang="sass">
.copyright{
    width: 100%;
    text-align: center;
    font-size: 12px;
    color: #919191;
    // position: absolute;
    margin: 0 auto;
    // padding-top: 50px;
    // left: 50%;
    // bottom: 237px;
    // transform: translateX(-50%);    
}
.copyright a{
    text-decoration: underline;
    color: #919191;
}
</style>
