/**
 * 新建、导出表格按钮组件
 * @description 
 * @author 舒丹彤
 * @date 2017/3/16
 * 
 */
<template>
	<div>
		<el-button type="primary" size="small" @click="handleAdd">新建</el-button>
	</div>
</template>

<script>
export default {
  name: 'NewBuild',
  methods: {
    handleAdd () {
      this.$parent.changeNewShow()
    }
  }
}
</script>
