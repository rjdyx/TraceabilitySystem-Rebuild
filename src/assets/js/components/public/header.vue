/**
 * 顶部栏组件
 * @description 顶部栏
 * @author 舒丹彤
 * @date 2017/3/14
 * 
 */ 
<template>
    <header class="header">
      <div class="head_logo">
      	<img src="../../../../../public/logo2.png" />
      </div>
      <div class="head_des">
      	农产品质量安全溯源系统
      </div>
      <!--右侧菜单栏-->
      <div class="head_right">
      	<ul>
      		<li>
      			
      		</li>
      	</ul>
      </div>
    </header>
</template>

<script>
  export default {
    name:'MyHead',
    
  }
</script>

<style lang="sass" scoped>
    @import "../../../sass/function";
	.header{
		height: 66px;
		width: 100%;
		background: #0099cc;
	}
	.head_logo{
		display: inline-block;
		padding: 8px 0px 2px 20px;
	}
	.head_des{
		color: #FFFFFF;
		width: 180px;
		font-size: 12px;
		padding-left: 15px;
		height: 13px;
		letter-spacing: 1.4px;
		line-height: 11px;
	}
</style>