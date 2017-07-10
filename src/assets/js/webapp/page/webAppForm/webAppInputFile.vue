<template>
	<div class="qr-btn iconfont" node-type="qr-btn" @change="changeImage($event.currentTarget)">&#xe634
        <input node-type="jsbridge" type="file" />
    </div>
</template>
<style lang="sass">
.qr-btn {
    display:inline-block;
    width:50px;
    height:50px;
    position:absolute;
    left:5%;
    top: 0;
    font-size:30px;
    line-height:50px;
    color:white;
    >input{
        opacity:0;
    }
}
</style>
<script>
export default{
    name: 'webAppFile',
    methods: {
        changeImage (url) {
            this.$emit('qrcodeCode', url)
        }
    },
    mounted () {
        Qrcode.init($('[node-type=qr-btn]'))
    }
}
</script>
