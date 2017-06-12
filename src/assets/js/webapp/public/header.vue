/*头部组件
* @description 
* @author 舒丹彤
* @date 2017/6/6
* */ 
 
<template>
	<div class="app-header">

		<span class="left-btn" @click="showmenu"></span>
		<h1>{{settitle}}</h1>
	</div>
</template>

<script>
export default {
    name: 'appHeader',
    props: {
        settitle: String,
        default: ''
    },
    methods: {
        showmenu () {
            this.$emit('toggle')
        }
    }
}
</script>


<style lang='sass'>
	.app-header{
		height: 50px;
		width: 100%;
		background:  #009acb;
		position: relative;
			h1{
				width: 100%;
				height: 54px;
				line-height: 54px;
				font: 21px 微软雅黑;
				color: #fff;
				text-align: center;
				padding-top: 10px;
			}
			.left-btn{
				display: inline-block;
				width: 20px;
				height: 20px;
				background: url(/public/images/slider.png);
				position: absolute;
				background-size: 100%;
				top: 13px;
				left: 20px;
			}
			.right{
				position: absolute;
				right: 0;
				top: 0;
				width: 30px;
				height: 30px;
				background: red;
			}
	}
</style>
