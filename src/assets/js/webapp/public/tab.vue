/*
 *
 * @description: 公共tab栏模块
 * @author 舒丹彤
 * @date 2017/6/9
 *  
 */ 

<template>
	<div class="apptab">
		<tab v-for="item in tabComponent">
			<tab-item>{{item.value}}</tab-item>
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
    }
}
</script>


<style lang='sass'>
.apptab{
	width: 100%;
	display: inline-block;
	margin-bottom: 10px;
	.vux-tab{
		display: inline-block;
		border: 1px solid #ccc;
		border-right: none;
		background: #eef0ef;
		width: 33%;
		margin-bottom: 3px;
	}
	.vux-tab:last-child{
		/*border-right: 1px solid #ccc;*/
	}
	.vux-tab .vux-tab-item.vux-tab-selected{
		color: #000;
		border-bottom: none;
		background: #eef0ef;
	}
	.vux-tab-ink-bar{
		background-color: transparent;
	}
	.vux-tab .vux-tab-item{
		background: none;
	}
}
</style>
