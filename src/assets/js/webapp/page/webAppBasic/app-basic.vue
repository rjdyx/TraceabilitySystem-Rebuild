/*
* 中间内容组件
* @description 
* @author 舒丹彤
* @date 2017/6/6
*/

<template>
	<div class="app-basic">
		<app-content></app-content>
	</div>
</template>

<script>
import appContent from '../webAppBasic/app-content.vue'
export default {
    name: 'appBasic',
    components: {
        appContent
    }
}
</script>

<style lang="sass">
	.app-basic{
		height: 100%;
		// overflow: scroll;
		// overflow-y: scroll;
		margin: 10px 10px 0 10px;
	}
</style>
