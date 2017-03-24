/**
 * inputTextarea组件
 * @description 
 * @author 吴燕萍
 * @date 2017/3/24

 */
<template>
<div class="inputTextSelect">
	<em class="input-imp" v-if="isNull===false">*</em>
	<label class="input-label" for="inputText">{{label}}&nbsp&nbsp:</label>
	<el-input placeholder="请输入内容" id="inputTextSelect"
	class="input-pop" v-model="input5" size="small">
	    <el-select v-model="select" slot="append">
	        <el-option v-for="item in options" 
		        :label="item.label"
		        :value="item.value" 
		        size="small">
	         </el-option>
	    </el-select>
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
			},
			options:{
				type:Array,
				default:[],
			}
		},
		data(){
			return{
				input:"",
				select:"",
			}
		},
		created(){

		}

	}
</script>
<style lang="sass">
	@import "../../../sass/public/inputSize.scss";

	#inputTextSelect{
		width:312px;
		.el-select .el-input {
		    width: 100px;
		  }
	}
</style>