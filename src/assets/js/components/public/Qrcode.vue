/**
 * 
 * Qrcode组件
 * @description 
 * @author 郭森林
 * @date 2017/04/25
 */
<template>
    <qrcode :background="background" :size="size" :cls="qrCls" :value="qrText"></qrcode>
</template>

<script>
    import Qrcode from 'v-qrcode/src/index'
    export default {
        name: 'QrcodeModel',
        props: {
            editValue: {},
            url: ''
        },
        data () {
            return {
                qrCls: 'qrcode',
                qrText: '',
                size: 150,
                background: 'white'
            }
        },
        methods: {
        },
        components: {
            Qrcode
        },
        mounted () {
            if (this.url.indexOf('storage-order-product') !== -1) {
                var url = require('projectRoot/env.js').app_ano_url + '/#/teaTrace/tea'
                this.qrText = url + '/index/' + this.editValue
            } else {
                this.qrText = this.editValue
            }
            this.$emit('return-qrcode', this.qrText)
        }
    }
</script>
<style lang="sass">
	#inputText input{
		outline:none;
	}
</style>
