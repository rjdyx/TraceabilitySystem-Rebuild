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
			<img src="/public/images/cloud-b.png" class="cloud-b" @click="push">
			<div class="clockDiv">
				<img src="/public/images/clockbg.png" class="clockbg">
				<img src="/public/images/cloud2.png" alt="" class="logo">
				<div class="timeDiv">
					<img class="quan" src="/public/images/quan.png" alt="">
					<div>
						<img src="/public/images/s.png" alt="" class="s">
						<img src="/public/images/m.png" alt="" class="m">
						<img src="/public/images/h.png" alt="" class="h">
					</div>
				</div>
			</div>
		</div>
		<div class="indexlist">
			<h1 class="company">所属公司：{{company}}</h1>
			<p>用户名：{{user}}</p>
			<p>登录时间：{{loginDate}}</p>
			<p>用户类型：{{userType}}</p>
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
        this.timer = setInterval(() => {
            let date = new Date()
            let s = date.getSeconds()
            let m = date.getMinutes()
            let h = date.getHours()
            $('.s').css('transform', 'rotate(' + s * 360 / 60 + 'deg)')
            $('.m').css('transform', 'rotate(' + (m * 6 + s / 60 * 6) + 'deg)')
            $('.h').css('transform', 'rotate(' + (h * 30 + m / 60 * 30) + 'deg)')
        }, 1000)
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
@mixin clockImg($h, $mt, $ml){
	height: $h;
	margin-top: $mt;
	margin-left: $ml;
}
	.webIndex{
		width: 100%;
		height: 100%;
		padding-top: 50px;
		.indexImg{
			width: 100%;
			position: relative;
			text-align: center;
			.clockDiv{
				display:inline-block;
				width: 74%;
				margin-top: .8rem;
				position: relative;
				padding-bottom: 12%;
				text-align: center;
				.clockbg{
					width: 100%;
					margin-left: -10%;
				}
				.logo{
					width: 76%;
					position: absolute;
					bottom: -0%;
					left: 13%;
					/*display: none;*/
					z-index: 2;
				}
				.timeDiv{
					width: 69%;
					position: absolute;
					bottom: 2%;
					right:5%;
					margin-right: 10%;
					margin-bottom: 22%;
					.quan{
						width: 100%;
						opacity: 0;
					}
					>div{
						img{
							position: absolute;
							top: 48%;
							left: 50%;
							transform-origin: bottom;
							/*z-index: 3;*/
						}
						.s{
							@include clockImg(45%, -45%, -.399%);
						}
						.m{
							@include clockImg(37%, -37%, -2%);
						}
						.h{
							@include clockImg(28%, -28%, -2%);
						}
						
					}

				}
			}
			.cloud-s{
				width: 15%;
				height: 7%;
				position: absolute;
				top: 2%;
				z-index: -1;
				animation: cloud-s 30s linear infinite 0s;
				left:0%;
			}
			.cloud-b{
				width: 24%;
				right: 2%;
				position: absolute;
				top: 4%;
				z-index: -1;
				left:-24%;
				animation: cloud-b 40s linear infinite 5s;
			}
			@keyframes cloud-s{
				0%{
					left: 0%;
				}
				100%{
					left: 100%;
				}
			}
			@keyframes cloud-b{
				0%{
					left: -24%;
				}
				100%{
					left:100%;
				}
			}
		}
		.indexlist{
			width: 100%;
			text-align: center;
			padding-top:1rem;
			.company{
				font-size: .55rem;
				color: #595957;
			}
			p{
				font-size: .4rem;
				padding-top: 10px;
				color: #50504e;
			}
		}
		/*@media (max-width: 320px) {
			.indexlist {
				.company{
					font-size: 18px;
					padding-bottom: 1%;
				}
				p{
					font-size: 14px;
				}
			}
			.indexImg{
				height: 290px;
			}
		}
		@media (min-device-width: 768px) {
			.indexImg .logo{
				height: 127%;
			}
			.indexlist{
				margin-top: 30%;
				.company{
					font-size: 34px;
				}
				p{
					font-size: 24px;
				}
			} 
		}
		@media (min-device-width: 768px) {
			.indexImg{
				.logo{
					height: 180%;
				}
				.cloud-s{
					height: 16%;
				}
			} 
			.indexlist{
				margin-top: 44%;
				.company{
					font-size: 57px;
				}
				p{
					font-size: 35px;
				}
			} 
		}*/
}

</style>
