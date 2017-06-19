/*头部组件
* @description 
* @author 舒丹彤
* @date 2017/6/6
* */ 
 
<template>
	<div class="app-header">
		<span class="left-btn" @click="showmenu"></span>
		<h1>{{settitle}}</h1>
		<span class="right-btn" @click="goBack" v-show="homeShow"></span>
	</div>
</template>

<script>
export default {
    name: 'appHeader',
    props: {
        settitle: {
            type: String,
            default: ''
        },
        homeShow: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        showmenu () {
            this.$emit('parentClick')
        },
        goBack () {
            this.$router.push('/appIndex')
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
		/*margin-bottom: 5px;*/
			h1{
				width: 100%;
				font: 21px 微软雅黑;
				color: #fff;
				text-align: center;
				padding-top: 10px;
			}
			
			.right-btn,.left-btn{
				display: inline-block;
				width: 20px;
				position: absolute;
			}
			.left-btn{
				background: url(/public/images/slider.png);
				background-size: 100%;
				left: 5%;
				height: 20px;
				top:28%;
			}
			.right-btn{
				background: url(/public/images/home.png);
				background-size: 100%;
				right: 5%;
				top: 24%;
				width: 28px;
				height: 23px;

			}
	}
</style>
