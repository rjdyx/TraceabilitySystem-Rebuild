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
        <div class="content">
            <basic-content> 
            </basic-content>
            <footer-top></footer-top>
        </div>
        
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
        padding-left:10px;
    
    .content{
        margin-top: 15px;
        overflow:scroll;
        /*height: 100%;*/
        position: relative;
        min-height: 100%;
    }
    .copyright{
        width: 100%;
        position: absolute;
        bottom: 9%;
        left: 50%;
        margin-left: -50%;
    }
}
</style>
