/*
* webapp详情页中间内容组件
* @description 
* @author 舒丹彤
* @date 2017/6/15
*/

<template>
	<div class="appdetail-basic">
		<appdetail-content></appdetail-content>
	</div>
</template>

<script>
import appdetailContent from '../appDetailBasic/app-detail-content.vue'
export default {
    name: 'appdetailBasic',
    components: {
        appdetailContent
    }
}
</script>

<style lang="sass">
	.appdetail-basic{
		height: 100%;
		// overflow: scroll;
		// overflow-y: scroll;
		// margin: 0 10px 0 10px;
	}
</style>
