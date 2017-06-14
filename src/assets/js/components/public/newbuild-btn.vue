/**
 * 新建、导出表格按钮组件
 * @description 
 * @author 舒丹彤
 * @date 2017/3/16
 * 
 */
<template>
	<div class="NewBuild">
		<el-button size="small" @click="handleAdd" class="btn_change">新建</el-button>
	</div>
</template>

<script>
export default {
    name: 'NewBuild',
    data () {
        return {
            count: 0
        }
    },
    methods: {
        handleAdd () {
            this.$parent.changeNewShow()
        }
    }
}
</script>

<style lang="sass">
.NewBuild{
    .btn_change{
        margin-left:15px;
        margin-bottom: 10px;
        color: #fff;
    }
}

    
</style>
