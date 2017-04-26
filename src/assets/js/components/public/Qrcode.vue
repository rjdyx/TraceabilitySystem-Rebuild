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
            isNull: {
                type: Boolean,
                default: true
            },
            label: {
                type: String,
                default: ''
            },
            placeholder: {
                type: String,
                default: ''
            },
            rule: {
                type: String
            }
        },
        data () {
            return {
                qrCls: 'qrcode',
                qrText: 'www.baidu.com',
                size: 150,
                background: 'code'
            }
        },
        methods: {
        },
        components: {
            Qrcode
        }
    }
</script>
<style lang="sass">
	#inputText input{
		outline:none;
	}
</style>
