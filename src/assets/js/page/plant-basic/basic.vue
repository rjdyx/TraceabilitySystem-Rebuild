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
        <basic-content> 
        </basic-content>
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

<style lang='sass'>
    .basic{
    	height: 100%;
        overflow:hidden;
        padding-bottom: 66px;
        box-sizing: border-box;
}
</style>
