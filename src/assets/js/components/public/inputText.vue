/**
 * inputText组件
 * @description 
 * @author 吴燕萍
 * @date 2017/3/21

 */
<template>
	<em>*</em><label for="newText"></label><el-input id="newText" v-model="input" :placeholder="placeholder"></el-input>
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
		},
		data(){
			return{
				
			}
		},
		created(){

		}

	}
</script>