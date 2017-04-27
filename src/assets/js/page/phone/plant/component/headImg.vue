<template>
	<div id="header_img">
        <img class="header_img_bg" src="../images/header_bg.png">
        <p>{{productName}}</p>
        <!-- 产品图片 -->
        <img class="pBasic_img_icon" src="../images/apple.jpg" alt="">
    </div>
</template>
<script>
export default {
    name: 'pBasic',
    props: {
        // 产品名称
        productName: {
            type: String,
            default: ''
        },
        // 产品图片路径
        imgUrl: {
            type: String,
            default: '../images/apple.jpg'
        }
    },
    data () {
        return {
        }
    }
}
</script>
<style type="text/css" lang="sass">
	#header_img{
        margin-top: 3.4rem;
        width:100%;
        height: 35%;
        position:relative;
        background: #fbfbfb;
        .header_img_bg{
            width: 100%;
            height: 100%;
        }
        p{
            position:absolute;
            width:100%;
            bottom:8%;
            left:0%;
            text-align:center;
            font-size:1.6rem;
            color:white;
        }
        .pBasic_img_icon{
            width: 36%;
            height: 61%;
            position: absolute;
            top: 11.1%;
            left: 31.7%;
            border-radius: 50%;
        }
    }
</style>
