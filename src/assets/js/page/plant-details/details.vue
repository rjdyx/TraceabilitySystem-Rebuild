/**
 *  
<<<<<<< HEAD
 * 详情页中间内容组件
=======
 * 中间内容组件 
>>>>>>> 8f711886ca10e55b1981dd27e937e942cf78b43a
 * @description 中间内容
 * @author 吴燕萍
 * @date 2017/4/19
 *   
 */ 
 <template> 
	<div class='details'>
        <details-content></details-content>
    </div>
</template>

<script>
import detailsContent from './details-content.vue'
export default {
    name: 'Details',
    components: {
        detailsContent
    }
}
</script>

<style lang='sass' scoped>
    /*@import '../../../sass/function';*/
    .details{
    	height: 100%;
        overflow:hidden;
        padding-left:10px;
    }
</style>
