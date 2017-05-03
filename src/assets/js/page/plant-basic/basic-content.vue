* @description 中间列表模块内容
 * @author 舒丹彤
 * @date 2017/3/15 
 *   
 */ 


<template>
	<div>
        <basic-model :models="models[type]"></basic-model>
    </div> 
</template>
  
<script>
import BasicModel from '../basicModel/basic-model.vue'
import message from './message.js'

export default {
    name: 'BasicContent',
    data () {
        let modelObj = {}
        Object.assign(modelObj, message)
        return {
            checked: [],
            activeName: 'first',
            models: modelObj
        }
    },
    methods: {
    },
    components: {
        BasicModel
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

</style>
