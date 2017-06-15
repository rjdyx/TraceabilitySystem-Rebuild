<!-- /*
 *
 * @description: 公共tab栏模块
 * @author 舒丹彤
 * @date 2017/6/9
 *  
 */ 

<template>
	<div class="apptab">
		<tab v-for="item in tabComponent">
			<tab-item @on-item-click="handler">{{item.value}}</tab-item>
		</tab>
	</div>	

</template>

<script>
import { Tab, TabItem } from 'vux'
export default {
    name: 'tabOpearte',
    props: {
        tabComponent: {
            type: Array,
            default: []
        }
    },
    components: {
        Tab,
        TabItem
    },
    methods: {
        handler () {
            this.$emit('tabClick')
        }
    }
}
</script>


<style lang='sass'>
</style>
 -->
 