/**
 * inputData组件
 * @description 
 * @author 吴燕萍
 * @date 2017/3/21

 */
<template>
	<em>*</em>
	<label for="newdate">{{title}}：</label>
	<input type="date" id="newdate" placeholder="">    
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