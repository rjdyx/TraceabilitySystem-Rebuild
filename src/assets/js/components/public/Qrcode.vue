/**
 * 
 * Qrcode组件
 * @description 
 * @author 郭森林
 * @date 2017/04/25
 */
<template>
    <div id="QrcodeModel">
        <div>
            <qrcode :background="background" :size="size" :cls="qrCls" :value="qrText" type="img"></qrcode>
            <div class="QMLogo" v-if="printForm.watermark!=''&&printForm.watermark!=null">
                <img :src="printForm.watermark" alt="logo">
            </div>
        </div>
    </div>
</template>

<script>
    import { Qrcode } from 'vux'
    export default {
        name: 'QrcodeModel',
        props: {
            printForm: {},
            url: ''
        },
        data () {
            return {
                qrCls: 'qrcode',
                qrText: '',
                size: 200,
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
                this.qrText = url + '/index/' + this.printForm.code
            } else {
                this.qrText = this.printForm.serial
            }
            this.$emit('return-qrcode', this.qrText)
        }
    }
</script>
<style lang="sass">
#QrcodeModel{
    width:204px;
    margin:0 auto;
    >div{
        position:relative;
        display:inline-block;
        #inputText input{
            outline:none;
        }
        .QMLogo{
            width:40px;
            position:absolute;
            left:50%;
            top: 50%;
            transform:translateX(-50%) translateY(-50%);
            background:white;
            border-radius:3px;
            text-align:center;
            >img{
                display:inline-block;
                width:30px;
                height:30px;
                margin-top:4px;
                border:1px solid #666;
                padding:1px;
                border-radius:3px;
            }
        }
    }
       
}
	
</style>
