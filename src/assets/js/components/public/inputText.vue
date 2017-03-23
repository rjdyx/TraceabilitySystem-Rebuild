/**
 * inputText组件
 * @description 
 * @author 吴燕萍
 * @date 2017/3/21

 */
<template>
<div class="inputText">
	<em class="input-imp" v-if="isNull===false">*</em>
	<label class="input-label" for="inputText">{{label}}&nbsp&nbsp:</label>
	<el-input 
		class="input-pop"
		id="inputText"  
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
				input:"",
			}
		},
		methods:{
			// 点击确定（提交）时触发该控件的方法
			verifyFn(){
				if(isNull==false){
					if(this.input==null){

					}
				}
			}
		}
		
	}
</script>
<style lang="sass">
	@import "../../../sass/public/inputSize.scss";
	#inputText input{
		outline:none;
		height:30px;
	}
</style>