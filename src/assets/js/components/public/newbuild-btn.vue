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
import vuexStore from '../../vuex/modules/isNew.js'
export default {
    name: 'NewBuild',
    store: vuexStore,
    data () {
        return {
            count: 0
        }
    },
    methods: {
        handleAdd () {
            this.$parent.changeNewShow()
            // // this.count++
            // this.$store.commit('handleAdd')
            // this.count = this.$store.state.count
            // console.log('this.count：' + this.count)
            // console.log('this.$store.state.count：' + this.$store.state.count)
        }
    }
}
</script>

<style lang="sass">
.NewBuild{
    .btn_change{
        color: #fff;
    }
}
    
</style>
