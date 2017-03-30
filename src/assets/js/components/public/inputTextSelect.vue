/**
 * inputTextarea组件
 * @description 
 * @author 吴燕萍
 * @date 2017/3/24

 */
<template>

<div class="inputTextSelect">
	<div style="margin-top: 15px;">
		<div class="el-input el-input-group el-input-group--append el-input-group--prepend">
			
			<input type="text" placeholder="请输入内容" autocomplete="off" class="el-input__inner"><!---->
			<div class="el-input-group__append">
				<div class="el-select"><!---->
				<div class="el-input"><!---->
					<i class="el-input__icon el-icon-caret-top"></i>
					<input type="text" placeholder="请选择" readonly="readonly" autocomplete="off" class="el-input__inner"><!----><!---->
				</div>
				<div class="resize-triggers">
					<div class="expand-trigger">
						<div style="width: 111px; height: 37px;"></div>
					</div>
					<div class="contract-trigger"></div>
					</div>
				</div>
			</div>
			<!-- <div class="el-input-group__append">
				<button type="button" class="el-button el-button--default">
				<i class="el-icon-search"></i>
				</button>
			</div> -->
		</div>
	</div>
	<!-- <el-input placeholder="请输入内容" id="inputTextSelect" v-model="input5" size="small">
	    <el-select v-model="select" slot="append">
	        <el-option v-for="item in options" 
		        :label="item.label"
		        :value="item.value" 
		        size="small">
	         </el-option>
	    </el-select>
	</el-input> -->
</div>

</template>
<script>
export default{
	props:{
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
}
</script>
<style lang="sass">
	// @import "../../../sass/public/inputSize.scss";
.inputTextSelect{
	display:inline-block;
	#inputTextSelect{
		width:312px;
		margin-left:10px;
		.el-select .el-input {
		    width: 100px;
		  }
	}
}

</style>