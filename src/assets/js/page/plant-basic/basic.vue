/**
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
    </div>
</template>

<script>
import ContainTitle from 'components/public/contain-title.vue'
import BasicContent from '../plant-basic/basic-content.vue'
import {mapMutations} from 'vuex'

	export default {
        name:'Basic',
        data (){
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
