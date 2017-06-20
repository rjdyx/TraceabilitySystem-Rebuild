/*inputTextSelect组件
* @description 
* @author 吴燕萍
* @date 2017/6/15
* */ 
<template>
	<div id="p_textSelect">
		<x-number :value="10" title="单位" fillable></x-number>
		<popup-picker 
		 	title="haha"
            :data="list1" 
            v-model="value"
            >
        </popup-picker>
	</div>
</template>
<style lang="sass">
	
</style>
<script>
import { Group, Actionsheet, XNumber, XSwitch, TransferDom, PopupPicker } from 'vux'
export default{
    name: 'p_textSelect',
    date () {
        return {
            tit: '单位',
            list1: [['小米', 'iPhone', '华为', '情怀', '三星', '其他', '不告诉你']],
            value: ['iPhone']
        }
    },
    components: {
        XNumber,
        XSwitch,
        TransferDom,
        PopupPicker,
        Group,
        Actionsheet
    },
    methods: {
    }
}
</script>
