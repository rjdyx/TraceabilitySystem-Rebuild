/**
 * inputText组件
 * @description 
 * @author 吴燕萍
 * @date 2017/3/21

 */
<template>
<div class="inputText">
	<em class="input-imp">*</em>
	<label class="input-label" for="inputText">{{label}}&nbsp&nbsp:&nbsp&nbsp</label>
	<el-input 
		class="input-pop"
		id="inputText"  
		size="small"
		v-model="input" 
		:placeholder="placeholder">
	</el-input>
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
				
			}
		},
		created(){

		}

	}
</script>
<style lang="sass" scoped="">
	@import "../../../sass/public/inputSize.scss";
</style>