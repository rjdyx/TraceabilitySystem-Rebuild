<<<<<<< HEAD
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
        <!-- <contain-title :settitle='settitle'>
        </contain-title> -->
        <basic-content></basic-content>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {mapState} from 'vuex'
import BasicContent from '../plant-basic/basic-content.vue'
// import ContainTitle from 'components/public/contain-title.vue'
export default {
  name: 'Basic',
  components: {
    BasicContent
  }
}
</script>

<style lang='sass' scoped>
    @import '../../../sass/function';
    .basic{
    	height: 100%;
        overflow:hidden;
        padding-left:10px;
    }
</style>
=======
/** * * 中间内容组件 
 * * @description 中间内容 
 * @author 舒丹彤 
 * @date 2017/3/15 * */


<template>
	<div class="basic">
		<basic-content></basic-content>
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

<style lang="sass" scoped>
	@import "../../../sass/function";
	.basic {
		height: 100%;
		overflow: hidden;
		padding-left: 10px;
	}
</style>
>>>>>>> Denton
