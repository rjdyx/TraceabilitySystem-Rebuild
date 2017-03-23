/**
 * inputData组件
 * @description 
 * @author 吴燕萍
 * @date 2017/3/21

 */
<template>
<div class="inputData">
	<em class="input-imp">*</em>
	<label class="input-label" for="inputText">{{label}}&nbsp&nbsp:&nbsp&nbsp</label>
	<el-date-picker 
		class="input-pop"
	    size="small"
	    v-model="value2"
	    type="date"
	    placeholder="选择日期">
    </el-date-picker>
</div>

</template>
<script>
	export default{
		props:{
			isNull:{
				type:Boolean,
				default:true,
			},
			label:{
				type:String,
				default:"",
			},
			placeholder:{
				type:String,
				default:"",
			},
			rule:{
				type:String,
			}
		},
		data(){
			return{
				value2:"",
			}
		},
		created(){

		}

	}
</script>
<style lang="sass" scoped="">
	@import "../../../sass/public/inputSize.scss";
	#inputData{
		width:312px;
	}
</style>