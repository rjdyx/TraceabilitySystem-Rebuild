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
            editValue: {}
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
            var per = this.editValue.substring(0, 1)
            var url = require('projectRoot/env.js').app_ano_url + '/#/run/'
            if (per === 'P') {
                url += 'plant'
            } else {
                url += 'breed'
            }
            this.qrText = url + '/index/' + this.editValue
        }
    }
</script>
<style lang="sass">
	#inputText input{
		outline:none;
	}
</style>
