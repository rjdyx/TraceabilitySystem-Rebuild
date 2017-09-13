/**
 * 
 * app首页组件
 * @author 舒丹彤 
 * @date 2017/06/12
 * 
 */
<template>
	<div class="webIndex">
		<div class="indexlist">
			<h1 class="company">所属公司：{{company}}</h1>
			<p>用户类型：{{userType}}</p>
			<p>用户名：{{user}}</p>
			
		</div>
		<div class="indexImg">
			<img src="/public/images/teaAppIndex.png">
		</div>
		<div class="loginTime">
			<p>登录时间：{{loginDate}}</p>
		</div>
	</div>
</template>

<script>
export default{
    data () {
        return {
            company: '',
            user: '',
            loginDate: '',
            userType: '',
            timer: null
        }
    },
    methods: {
        push () {
            this.$router.push('/appIndex')
        }
    },
    mounted () {
        localStorage.setItem('trends', 0)
        axios.get('/api/index')
            .then((responce) => {
                this.company = responce.data.company_name
                this.user = responce.data.name
                this.userType = responce.data.type
                this.loginDate = localStorage.getItem('loginDate')
            })
    }
}
</script>

<style lang='sass'>
	.webIndex{
		width: 100%;
		height: 100%;
		padding-top: 1rem;
		position: relative;
		z-index: -5;
		overflow: hidden;
		background: #8dcf87 !important;
		.indexImg{
			width: 100%;
			height: 50%;
			position: relative;
			text-align: center;
			margin-top: 0.7rem;
			img{
				width: 92%;
			}
		}
		.indexlist{
			width: 100%;
			text-align: center;
			padding-top:0.8rem;
			.company{
				font-size: .6rem;
				color: #fff;
				font-family: fashionBlack;
			}
			p{
				font-size: .5rem;
				padding-top: 10px;
				color: #fff;
			}
		}
		.loginTime{
			width: 100%;
			text-align: center;
			color: #fff;
			font-size: .4rem;
			margin-top: 1rem;
			padding-bottom: 1rem;
		}
	}
	@font-face{
		font-family: fashionBlack;
		src: url('../../../../sass/function/font.ttf');
	}
</style>
