/**
 * inputTextarea组件
 * @description 
 * @author 吴燕萍
 * @date 2017/3/21

 */
<template>
<div class="inputTextarea">
	
	<el-input
		class="input-pop"
		id="inputTextarea"
		size="small"
		type="textarea"
		:rows="2"
		:placeholder="placeholder"
		v-model="textarea"
		>
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
				default:"必填",
			},
			rule:{
				type:String,
			}
		},
		data(){
			return{
				textarea:"",
			}
		},
		created(){

		}

	}
</script>
<style lang="sass">
	@import "../../../sass/public/inputSize.scss";
	#inputTextarea{
		width:312px;
		height:60px;
		textarea{
			resize:none;
		}
	}
</style>