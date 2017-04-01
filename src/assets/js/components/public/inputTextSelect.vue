/**
 * inputTextarea组件
 * @description 
 * @author 吴燕萍
 * @date 2017/3/24
 */
<template>
<div class="inputTextSelect">
<!-- <div class="inputTextSelect" @sub-validate="subValidate"> -->
	<div class="inputTS-text" >
		<input  
			:class="{'el-input__inner': true,'is-error': verrors.has(item.name)}"
			type="text" 
			autocomplete="off" 
			:name="item.name"
			:placeholder="item.placeholder"  
			v-model="textValue"
			:v-validate.initial="tableForm[item.name]" 
			:data-vv-rules="item.rule" 
			:data-vv-as="item.label"
			>
	</div>
	<select 
		class="inputTS-select"
		v-model="value">
			<option  
				v-for="option in item.options"
		      	:label="option.label"
		     	:value="option.value">
		     </option> 
	</select>
</div>


</template>
<script>
export default {
  props:
  {
    item: {}
  },
  data () {
    return {
      textValue: '',
      // select选择的值
      value: '',
      tableForm: {}
    }
  },
  mounted () {
    // this.$on('sub-validate', function () {
    //   this.subValidate()
    // })
  },
  methods: {
    // subValidate () {
    //   this.$validator.validateAll()
    // }
  },
  watch: {
    textValue () {
      this.$emit('return-value', {name: this.item.name, value: this.textValue})
    }
  }
}
</script>
<style lang="sass">
	// @import "../../../sass/public/inputSize.scss";
.inputTextSelect{
	display:inline-block;
	width:312px;
	margin-left:10px;
	background-color: #fff;
    border-radius: 4px;
    border: 1px solid #bfcbd9;
    color: #1f2d3d;
    .inputTS-text{
    	display:inline-block;
    	width:211px;
    	border-right: 1px solid #bfcbd9;
    	>input{
    		box-sizing: border-box;
			height:26px;
			outline:none;
			border:none;
		}
    }
	.inputTS-select{
		height:26px;
		width:100px;
		padding-left:10px;
		display:inline-block;
		outline:none;
		border:none;
	}
	
}

</style>
