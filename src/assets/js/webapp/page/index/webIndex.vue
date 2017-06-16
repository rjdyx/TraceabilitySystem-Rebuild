/**
 * 
 * app首页组件
 * @author 舒丹彤 
 * @date 2017/06/12
 * 
 */
<template>
	<div class="webIndex">
		<div class="indexImg">
			<img src="/public/images/cloud-s.png" class="cloud-s">
			<img src="/public/images/app.png" class="logo">
			<img src="/public/images/cloud-b.png" class="cloud-b" @click="push">
		</div>
		<div class="indexlist">
			<h1 class="company">所属公司:{{}}</h1>
			<p>用户名：{{}}</p>
			<p>登录时间：{{}}</p>
			<p>用户类型：{{}}</p>
		</div>
	</div>
</template>

<script>
export default{
    methods: {
        push () {
            this.$router.push('/appIndex')
        }
    }
}
</script>

<style lang='sass'>
	.webIndex{
		width: 100%;
		height: 100%;
		.indexImg{
			width: 100%;
			height: 402px;
			position: relative;
			.logo{
				width: 74%;
				height: 70%;
				position: absolute;
				left: 9%;
				top: 11%;
			}
			.cloud-s{
				width: 15%;
				height: 7%;
				position: absolute;
				top: 2%;
			}
			.cloud-b{
				width: 24%;
				right: 2%;
				position: absolute;
				top: 4%
			}
		}
		.indexlist{
			width: 100%;
			text-align: center;
			.company{
				font-size:20px;
			}
			p{
				font-size: 16px;
				padding-top: 10px;
				color: #50504e;
			}
		}
		
	}
</style>
