/**
 * inputSelect组件
 * @description 
 * @author 吴燕萍
 * @date 2017/3/21

 */
<template>
<div class="inputSelect">
	<em class="input-imp">*</em>
	<label class="input-label" for="inputText">{{label}}&nbsp&nbsp:&nbsp&nbsp</label>
	 <el-select id="inputSelect" v-model="value" :placeholder="placeholder" size="small">
	    <el-option
	      class="input-pop"
	      size="small"
	      v-for="item in options"
	      :label="item.label"
	      :value="item.value">
	    </el-option>
	  </el-select>
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
				
			}
		},
		created(){

		}

	}
</script>
<style lang="sass" scoped="">
	@import "../../../sass/public/inputSize.scss";
	#inputSelect{
		width:312px;
	}
</style>