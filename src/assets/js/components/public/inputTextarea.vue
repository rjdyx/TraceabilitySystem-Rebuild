/**
 * inputTextarea组件
 * @description 
 * @author 吴燕萍
 * @date 2017/3/21

 */
<template>
<div>
		<em>*</em><label for="newTexttarea"></label><el-input
	id="newTexttarea"
  type="textarea"
  :rows="2"
  :placeholder="placeholder"
  v-model="textarea">
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