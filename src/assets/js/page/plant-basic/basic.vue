/**
 * 
 * 中间内容组件
 * @description 中间内容
 * @author 舒丹彤
 * @date 2017/3/15 
 * 
 */ 
 <template> 
	<div class="basic">
        <contain-title :title="title"></contain-title>
        <basic-content></basic-content>
        <!-- <basic-model 
        :models="models[type]"></basic-model>  -->
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
import ContainTitle from 'components/public/contain-title.vue'
import BasicContent from '../plant-basic/basic-content.vue'
// import BasicModel from '../basic-model/basic-model.vue';

	export default { 
        name:'Basic',
        data () {
            return {
                
            } 
        },
        computed: {


        },
        
        mounted() {
            // this.setTitle('种植')
        },
        methods: {
            // ...mapMutations([
            //     'setTitle'
            //     ])
        },
        components:{
            ContainTitle,
            // BasicModel
            BasicContent
        }
       

    }
</script>

<style lang="sass" scoped>
    @import "../../../sass/function";
    .basic{
    	width: 1693px;
    	height: 100%;
        position: absolute;
        left: 190px;
        top: 66px;
    }
</style>
