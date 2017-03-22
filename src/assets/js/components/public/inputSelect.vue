/**
 * inputSelect组件
 * @description 
 * @author 吴燕萍
 * @date 2017/3/21

 */
<template>
	<em>*</em>
	<label for="newSelect"></label>
	 <el-select id="newSelect" v-model="value" :placeholder="placeholder">
	    <el-option
	      v-for="item in options"
	      :label="item.label"
	      :value="item.value">
	    </el-option>
	  </el-select>
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