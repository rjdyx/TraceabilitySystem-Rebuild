/**
 * 展开更多的操作按钮标题组件 
 * @description:当点击按钮时，展开更多的操作按钮
 * @author 舒丹彤
 * @date 2017/4/1 
 *  
 */ 

<template>
	<div>
		<el-dropdown class="more">
			<span class="el-dropdown-link">
				更多
				<i class="el-icon-caret-bottom el-icon--right"></i>
			</span>
			<el-dropdown-menu slot="dropdown">
				<template v-for="btn in moreComponent">
					<el-dropdown-item>{{btn.value}}</el-dropdown-item>
				</template>
			</el-dropdown-menu>
		</el-dropdown>
	</div>	

</template>

<script>
    export default {
        name: 'clickMore',
        props: {
            moreComponent: {
                type: Array,
                default: []
            }
        }
    }
</script>


<style lang="sass">
	
	.more{
		cursor: pointer;
		margin-right: 10px;
	}
</style>
