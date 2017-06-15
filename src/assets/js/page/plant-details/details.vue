/**
 * 
 * 详情页中间内容组件
 * @description 中间内容
 * @author 吴燕萍
 * @date 2017/4/19
 *   
 */ 
 <template> 
	<div class='details'>
        <details-content></details-content>
        <footer-top></footer-top>
    </div>
</template>

<script>
import footerTop from '../../components/top/topComponent/footer.vue'
import detailsContent from './details-content.vue'
export default {
    name: 'Details',
    components: {
        detailsContent,
        footerTop
    }
}
</script>

<style lang='sass' scoped>
    /*@import '../../../sass/function';*/
    .details{
    	height: 100%;
        overflow:scroll;
        overflow-y: scroll;
        padding-left:10px;
        padding-right: 10px;
    }
</style>
