
/**
 * 展开更多的操作按钮标题组件
 * @description:当点击按钮时，展开更多的操作按钮
 * @author 舒丹彤
 * @date 2017/4/1 
 *  
 */ 

<template>
	<div>
		<el-dropdown>
		  <span>
		    更多<i class="el-icon-caret-bottom el-icon--right"></i>
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
  },
  data () {
    return {
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
	.more span{
		border-left:1px solid #a7bad6;
		padding: 0px 5px 0px 5px;
	}
</style>
