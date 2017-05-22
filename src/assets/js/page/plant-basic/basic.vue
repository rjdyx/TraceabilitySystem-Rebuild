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
        <footer-top></footer-top>
    </div>
</template>

<script>
import BasicContent from '../plant-basic/basic-content.vue'
import footerTop from '../../components/top/topComponent/footer.vue'
export default {
    name: 'Basic',
    components: {
        BasicContent,
        footerTop
    }
}
</script>

<style lang='sass'>
    .basic{
    	height: 100%;
        overflow:hidden;
        overflow-y: scroll;
        padding-left:10px;
}
</style>
