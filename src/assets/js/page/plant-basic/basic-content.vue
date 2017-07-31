* @description 中间列表模块内容
 * @author 舒丹彤
 * @date 2017/3/15 
 *   
 */ 


<template>
	<div class="content">
        <basic-model :models="models[type]"></basic-model>
        <footer-top></footer-top>
    </div> 
</template>
  
<script>
import BasicModel from '../basicModel/basic-model.vue'
import message from './message.js'
import footerTop from '../../components/top/topComponent/footer.vue'
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
        BasicModel,
        footerTop
    },
    computed: {
        type () {
            return this.$route.params.model
        }
    },
    mounted () {
    }
}
</script>

<style lang="sass" scoped>
    @import "../../../sass/function";
    .content{
        height:100%;
        padding:15px 10px 0px 10px;
        box-sizing:border-box;
        overflow-y: scroll;
    }
</style>
