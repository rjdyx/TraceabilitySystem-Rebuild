/**
 *  
 * 中间内容组件
 * @description 中间内容
 * @author 舒丹彤
 * @date 2017/3/15 
 * 
 */ 
 <template> 
	<div class='basic'>
        <basic-content class="content"></basic-content>
    </div>
</template>

<script>
import BasicContent from '../plant-basic/basic-content.vue'
export default {
    name: 'Basic',
    components: {
        BasicContent
    }
}
</script>

<style lang='sass' scoped>
    /*@import '../../../sass/function';*/
    .basic{
    	height: 100%;
        overflow:hidden;
        padding-left:10px;
    
    .content{
        margin-top: 15px;
        overflow:scroll;
        height: 100%;
    }
}
</style>
