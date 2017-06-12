/**
 * 搜索组件
 * @description 
 * @author 舒丹彤
 * @date 2017/3/16
 *  
 * /
<template>
	<div class="search-top">
		<el-select class="select" size="small" v-model="value">
			<el-option v-for="item in options" :label="item.label" :value="item.value">
			</el-option>
		</el-select>
	</div>
</template>

<script>
export default {
    name: 'SelectSection',
    props: {
        options: {
            type: Array,
            default: []
        }
    }
}
</script>

<style lang="sass" scoped>
	@import "../../../sass/function";
</style>
