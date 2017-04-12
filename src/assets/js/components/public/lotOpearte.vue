/**
 *
 * @description:种植批次管理模块的批量操作按钮
 * @author 舒丹彤
 * @date 2017/4/10
 *  
 */ 

<template>
	<div class="lotOpearte">
		<template v-for="lot in lotComponent">
			<el-button>{{lot.value}}</el-button>
		</template>
	</div>	

</template>

<script>
export default {
    name: 'lotOpearte',
    props: {
        lotComponent: {
            type: Array,
            default: []
        }
    }
}
</script>


<style lang='sass'>
.lotOpearte{
	display: inline-block;
	margin: 0 10px 0 10px;
}
</style>
