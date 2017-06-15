/*inputTextSelect组件
* @description 
* @author 吴燕萍
* @date 2017/6/15
* */ 
<template>
	<div id="p_textSelect">
		<x-number :value="10" title="单位" fillable></x-number>
      <popup-picker :title="title1" :data="list1" v-model="value1" ></popup-picker>
    55
	</div>
</template>
<style lang="sass">
	
</style>
<script>
import { XNumber, PopupPicker, Group, Cell, Picker, XButton, Divider, XSwitch } from 'vux'
export default{
    name: 'p_textSelect',
    date () {
        return {
            title1: '手机机型',
            title2: '详细机型',
            title3: '联动显示值',
            title4: '联动显示文字',
            list1: [['小米', 'iPhone', '华为', '情怀', '三星', '其他', '不告诉你']],
            list2: [['小米', 'iPhone', '华为', '情怀', '三星', '其他', '不告诉你'], ['小米1', 'iPhone2', '华为3', '情怀4', '三星5', '其他6', '不告诉你7']],
            value1: ['iPhone'],
            value1_1: ['iPhone'],
            value2: ['iPhone', '华为3'],
            value3: [],
            value4: [],
            showPopupPicker: false,
            value5: ['2'],
            switch6: false,
            value6: []
        }
    },
    components: {
        XNumber,
        PopupPicker,
        Group,
        Cell,
        Picker,
        XButton,
        Divider,
        XSwitch
    },
    methods: {
    }
}
</script>
