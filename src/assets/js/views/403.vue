/*404组件
* @description 接口返回403错误 不够权限
* @author 郭森林 
* @date 2017/05/15
* */
<template>
	<div>
		<div class="content">出错了 403！</div>
		<!-- <div class="return"><a href="/">返回首页</a></div> -->
		<div class="return" @click='tiaoFn'>返回首页</div>
	</div>
</template>
<style lang="sass" scoped>
	@import "../../sass/function";
	div.content {
		position: absolute;
		bottom: 28%;
		left: 38%;
		margin: auto;
		width: 100%;
		height: 300px;
		font-size: 80px;
		color: #9E9E9E;
	}
	div.return {
		position: absolute;
		bottom: 28%;
		left: 48%;
		width: 200px;
		height: 100px;
		font-size: 20px;
		color: #9E9E9E;
	}
</style>
<script>
    export default {
        name: 'fourOFour',
        methods: {
            tiaoFn () {
                this.$router.push('/index/home')
            }
        }
    }
</script>
