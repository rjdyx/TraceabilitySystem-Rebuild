/*
* webapp中间列表模块部分组件
* @description 
* @author 舒丹彤
* @date 2017/6/6
*/
 
<template>
	<div class="app-content">
		<webApp-model :models="models[type]"></webApp-model>
	</div>
</template>

<script>
import webAppModel from '../webAppModel/webApp-model.vue'
// import webAppModel from '../../../page/basicModel/basic-model.vue'
import message from '../webAppBasic/appmessage.js'

export default {
    name: 'appContent',
    data () {
        let modelObj = {}
        Object.assign(modelObj, message)
        return {
            checked: [],
            models: modelObj
        }
    },
    components: {
        webAppModel
    },
    computed: {
        type () {
            return this.$route.params.model
        }
    }
}
</script>
<style lang='sass'>
	.app-content{
        width: 100%;
        height: 100%;
    }
</style>
