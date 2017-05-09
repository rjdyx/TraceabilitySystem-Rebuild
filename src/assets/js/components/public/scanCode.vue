/**
 * 扫描溯源码组件
 * @description 
 * @author 
 * @date 2017/5/8
 * 
 */
<template>
	<div class="scan_code">
		<span>扫描溯源码</span>
		<input type="text" name="" placeholder="扫码请在此输入焦点">
	</div>

</template>

<script></script>


<style lang="sass">
	.scan_code{
		padding: 3px 3px 3px 8px;
		vertical-align: middle;
		float: right;
		margin-left: 20px;
		span{
			color: #fff;
			padding: 0px 11px 0px 10px;
			&:hover{
				cursor: pointer;
			}
		}
		input{
			border: none;
			padding: 2px 14px;
		}
		::-webkit-input-placeholder { color:#ccc; }
		::-moz-placeholder { color:#ccc; } /* firefox 19+ */
		:-ms-input-placeholder { color:#ccc; } /* ie */
		input:-moz-placeholder { color:#ccc; }
	}
</style>
