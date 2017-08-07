<template>
	<div id="header_img">
        <img v-if="isbreed === false" class="header_img_bg" src="../images/p_header_bg.png">
        <img v-else="isbreed === true" class="header_img_bg" src="../images/b_header_bg.png">
        <p>{{data.name}}</p>
        <!-- 产品图片 -->
        <img class="pBasic_img_icon" :src="data.img" alt="">
    </div>
</template>
<script>
export default {
    name: 'pBasic',
    props: {
        // 产品图片路径
        imgUrl: {
            type: String,
            default: '../images/apple.jpg'
        },
        isbreed: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            data: ''
        }
    },
    mounted () {
        console.log(this.isbreed)
        this.runName = this.$route.meta.runName
        axios.post('run/product', {code: this.$route.params.id})
            .then((responce) => {
                if (responce.data !== 'false') {
                    this.data = responce.data
                }
            })
    }
}
</script>
<style type="text/css" lang="sass">
    img{
        border:none;
    }
	#header_img{
        margin-top: 1rem;
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
            font-size:.45rem;
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
