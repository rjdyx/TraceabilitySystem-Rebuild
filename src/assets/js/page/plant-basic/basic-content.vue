* @description 中间列表模块内容
 * @author 舒丹彤
 * @date 2017/3/15 
 *   
 */ 


<template>
	<div class="content">
        <basic-model :models="models[type]" :show="md"></basic-model>
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
            md: [],
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
    },
    mounted () {
        var roleData = {}
        if (window.Roles.permissions !== undefined) {
            roleData = window.Roles.permissions.two
        }
        // for (let k in this.models) {
        //     if (roleData[this.type].hasOwnProperty(this.models[k].key)) {
                // var fs = mds[k].key
                // var arr = []
                // mds[k].typeComponent = []
                // if (roleData[this.type][fs] !== undefined) {
                //     if (roleData[this.type][fs].indexOf('create') !== -1) {
                //         arr.push({component: 'output'})
                //     }
                // }
                // mds[k].typeComponent = arr
            //     this.md[k] = true
            // } else {
            //     this.md[k] = false
            // }
        // }
    }
}
</script>

<style lang="sass" scoped>
    @import "../../../sass/function";
    .content{
        margin-top: 15px;
    }
</style>
