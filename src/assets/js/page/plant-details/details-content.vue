* @description 详情页中间列表模块内容
 * @author 吴燕萍
 * @date 2017/4/19
 *   
 */ 
 

<template>
	<div class="content">
        <details-model :models="models[type]"></details-model>
        <footer-top></footer-top>
    </div> 
</template>
 
<script>
import detailsModel from '../detailsModel/details-model.vue'
import footerTop from '../../components/top/topComponent/footer.vue'
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
        detailsModel,
        footerTop
    },
    computed: {
        type () {
            console.log(this.$route.params.model)
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
