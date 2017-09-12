/**
 * 
 * app首页组件
 * @author 舒丹彤 
 * @date 2017/06/12
 * 
 */
<template>
	<div class="webIndex">
		<div class="userInfo">
			<h1 class="company">所属公司：{{company}}</h1>
			<p>用户类型：{{userType}}</p>
			<p>用户名：{{user}}</p>
		</div>
		<!-- <div class="indexImg">
			<img src="/public/images/teaAppIndex.png">
		</div>
		<div class="loginTime">
			<p>登录时间：{{loginDate}}</p>
		</div> -->
		<div class='canvasInfo'>
			<div class="tempWrap">
				<div class="tempInner">
					<div class="tempCanvas">
						<div></div>
					    <canvas></canvas>
					</div>
					<p @touchend="goCanvasFn">进入数据监测</p>
				</div>
			</div>
			<div class="videoWrap">
				<div class="videoInner">
					<div class="videoCanvas">
						<canvas></canvas>
					</div>
					<p>进入视频监测</p>
				</div>
			</div>
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
        },
        // 获取canvas宽度，高度
        getCanvasW () {
            var canW = $('canvas').width()
            return canW
        },
        getCanvasH () {
            var canH = $('canvas').height()
            return canH
        },
        drawFn (w, h, pen, title, targetDeg) {
            pen.clearRect(0, 0, w, h)
            // 绘制一个矩形
            var ber = 10000
            if (targetDeg.indexOf('%') > 1) {
                ber = 100
            }
            let num = parseInt(targetDeg)
            pen.save()
            // 白色底圆
            pen.fillStyle = '#fff'
            pen.beginPath()
            // 求原心
            var oX = Math.round(w / 2)
            var oY = Math.round(h * 0.8)
            var r = Math.round(oX - w * 0.159)
            pen.arc(oX, oY, r, 0, Math.PI, true)
            pen.fill()
            pen.closePath()
            // 可变arc 彩色圆
            pen.fillStyle = '#fa8564'
            pen.beginPath()
            pen.moveTo(oX, oY)
            pen.arc(oX, oY, r, Math.PI, Math.PI * ((num / ber) + 1), false)
            pen.closePath()
            pen.fill()
            // 湿度
            pen.beginPath()
            var ts = Math.round(0.0454 * w)
            pen.font = ts + 'px ' + 'Arial'
            var tX = Math.round(0.140 * w)
            var tY = Math.round(0.1 * h)
            pen.fillText(title, tX, tY)
            // 可变65%
            var tts = Math.round(0.0818 * w)
            pen.font = tts + 'px ' + 'Arial'
            var ttX = Math.round(0.140 * w)
            var ttY = Math.round(0.28 * h)
            pen.fillText(targetDeg, ttX, ttY)
            var ttts = Math.round(0.06363 * w)
            pen.font = ttts + 'px ' + 'Arial'
            pen.fillStyle = '#a0a0a0'
            var tttY = Math.round(0.95 * h)
            pen.textAlign = 'center'
            pen.fillText('时间：2017-9-9 10:30', oX, tttY)
            pen.closePath()
            // 剪切圆
            pen.globalCompositeOperation = 'destination-out'
            pen.beginPath()
            var r2 = Math.round(0.18 * h)
            pen.arc(oX, oY, r2, 0, Math.PI, true)
            pen.fill()
            pen.closePath()
            pen.restore()
            pen.save()
            // 指针 这里也变 角度变
            pen.translate(oX, oY)
            // pen.rotate(Math.PI * 0.65)
            pen.rotate(Math.PI * (num / ber))
            pen.beginPath()
            pen.fillStyle = '#2c3638'
            var r3 = Math.round(0.0227 * w) / 2
            pen.moveTo(0, -r3)
            pen.lineTo(-r, 0)
            pen.lineTo(0, r3)
            pen.fill()
            pen.closePath()
            pen.beginPath()
            pen.arc(0, 0, r3 + 1, 0, Math.PI * 2, false)
            pen.closePath()
            pen.fill()
            pen.restore()
        },
        drawInit () {
            var w = $('.tempCanvas>div').width()
            var h = $('.tempCanvas>div').height()
            var canvas = $('.tempCanvas canvas').get(0)
            if (w > 460) {
                w = 460
            }
            if (h > 214) {
                h = 214
            }
            canvas.setAttribute('width', w)
            canvas.setAttribute('height', h)
            // $('.tempCanvas').append($(canvas))
            var pen = canvas.getContext('2d')
            this.drawFn(w, h, pen, '温度', '65%')
        },
        goCanvasFn () {
            console.log(55)
            this.$router.push('/appIndex/appCanvas')
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
        this.drawInit()
        $(window).on('resize', () => {
            this.drawInit()
        })
    }
}
</script>

<style lang='sass'>
	.webIndex{
		width: 100%;
		height: 100%;
		padding-top: 50px;
		position: relative;
		/*z-index: -5;*/
		overflow: hidden;
		/*background: #8dcf87 !important;*/
/*		.indexImg{
			width: 100%;
			height: 50%;
			position: relative;
			text-align: center;
			margin-top: 0.7rem;
			img{
				width: 92%;
			}
		}*/
/*		.loginTime{
			width: 100%;
			text-align: center;
			color: #fff;
			font-size: .4rem;
			margin-top: 1rem;
		}*/
		.userInfo{
			width: 100%;
			text-align: center;
			padding-top:.7rem;
			color:#8dcf87;
			.company{
				font-size: .7rem;
				font-family: fashionBlack;
			}
			p{
				font-size: .5rem;
			}
		}
		.canvasInfo{
			padding-top: .5rem;
			text-align: center;
			.tempWrap{
				.tempInner{
					width: 70%;
					border:1px solid #dcdcdc;
					border-radius:10px;
					display: inline-block;
					padding: .2rem .2rem  0rem .2rem;
					.tempCanvas{
						position: relative;
						>div{
							height: 4rem;
							background:#f1f1f1;
						}
						canvas{
							border-radius:5px;
							position: absolute;
							left: 0;
							top: 0;
							right: 0;
							bottom: 0;
							margin:auto;

						}
					}
					>p{
						font-size: .5rem;
						text-align: center;
						line-height: 200%;
					}
				}
			}
			.videoWrap{
				margin-top: .4rem;
				.videoInner{
					width: 70%;
					border:1px solid #dcdcdc;
					border-radius:10px;
					display: inline-block;
					padding: .2rem .2rem  0rem .2rem;
					.videoCanvas{
						canvas{
							width: 100%;
							height: 4rem;
							border-radius:5px;
							background: url('/public/images/video-bg.png') no-repeat center center;
					        background-size:cover; 
						}
					}
					>p{
						font-size: .5rem;
						text-align: center;
						line-height: 200%;
					}
				}
			}
		}
	}
	@font-face{
		font-family: fashionBlack;
		src: url('../../../../sass/function/font.ttf');
	}
</style>
