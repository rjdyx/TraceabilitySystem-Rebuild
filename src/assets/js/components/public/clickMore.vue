
/**
 * 展开更多的操作按钮标题组件
 * @description:当点击按钮时，展开更多的操作按钮
 * @author 舒丹彤
 * @date 2017/4/1 
 *  
 */ 

<template>
	<div>
		<template v-for="btn in moreComponent">
			<i>
				<el-button type="text" size="small" class="more">{{btn.value}}</el-button>
			</i>
		</template>
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
	.btn span{
		border-left: 1px solid #a7bad6;
		padding: 0px 5px 0px 5px;
	}
	.btn:last-child{
		border-left:none;
	}
	// .more span{
	// 	border-left:1px solid #a7bad6;
	// 	padding: 0px 5px 0px 5px;
	// }
</style>
