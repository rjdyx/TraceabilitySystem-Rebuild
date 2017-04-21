* @description 详情页中间列表模块内容
 * @author 吴燕萍
 * @date 2017/4/19
 *   
 */ 


<template>
	<div class="content">
        <details-model :models="models[type]"></details-model>
    </div> 
</template>
 
<script>
import detailsModel from '../detailsModel/details-model.vue'
import message from './message.js'

export default {
    name: 'BasicContent',
    data () {
        let modelObj = {}
        Object.assign(modelObj, message)
        return {
            checked: [],
            activeName2: 'first',
            models: modelObj
        }
    },
    methods: {
    },
    components: {
        detailsModel
    },
    computed: {
        type () {
            return this.$route.params.model
        }
    }
}
</script>

<style lang="sass" scoped>
    @import "../../../sass/function";
.content{
    	margin-top: 15px;
    }
</style>
