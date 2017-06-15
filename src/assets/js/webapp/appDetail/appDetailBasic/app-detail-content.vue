/* 
* webapp中间列表模块部分组件
* @description 
* @author 舒丹彤
* @date 2017/6/15
*/
 
<template>
	<div class="appdetail-content">
		<appdetail-model :models="models[type]"></appdetail-model>
	</div>
</template>

<script>
import appdetailModel from '../appDetailModel/appDetail-model.vue'
import message from '../appDetailBasic/appdetailmsg.js'

export default {
    name: 'appdetailContent',
    data () {
        let modelObj = {}
        Object.assign(modelObj, message)
        return {
            checked: [],
            activeName: 'first',
            models: modelObj
        }
    },
    components: {
        appdetailModel
    },
    computed: {
        type () {
            return this.$route.params.model
        }
    }
}
</script>

<style lang='sass'>
	
</style>
