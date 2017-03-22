/**
 * inputData组件
 * @description 
 * @author 吴燕萍
 * @date 2017/3/22

 */
<template>
	<em>*</em>
	<label for="newFile">{{title}}：</label>
	<input id="newFile" type="file" accept="image/png,image/gif" name="file" /> 
</template>
<script>
	export default{
		props:{
			isNull:{
				type:Boolean,
				default:true,
			},
			title:{
				type:String,
				default:"",
			}
			placeholder:{
				type:String,
				default:"必填",
			},
			options:{
				type:Array,
				default:[]
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