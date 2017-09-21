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
				<div class="tempInner" @touchend="goCanvasFn">
					<div class="tempCanvas">
						<div></div>
					    <canvas width="436"height="254"></canvas>
					</div>
					<p>进入数据监测</p>
				</div>
			</div>
			<div class="videoWrap">
				<div @touchend="goVideoFn" class="videoInner">
					<div class="videoCanvas">
						<canvas></canvas>
					</div>
					<p>进入视频监测</p>
				</div>
			</div>
		</div>
        <guide v-if="stepsBol" :steps="steps[stepsIndex]" @return-nextFn="nextFn" @return-prevFn="prevFn"></guide>
	</div>
</template>

<script>
import Guide from '../../public/guide.vue'
export default{
    components: {
        Guide
    },
    data () {
        return {
            company: '',
            user: '',
            loginDate: '',
            userType: '',
            timer: null,
            steps: [
                [
                    {
                        element: '.app-header .left-btn',
                        intro: '种植管理，采制管理的操作目录',
                        class: 'tip1',
                        index: 0
                    },
                    {
                        element: '.app-header .growPicture',
                        intro: '添加种植批次的生长图片',
                        class: 'tip2',
                        index: 0
                    }
                ],
                [
                    {
                        element: '.app-menu .el-submenu',
                        intro: '1.对批次进行施肥，检测，农事管理',
                        class: 'siderBarTip1',
                        index: 0
                    },
                    {
                        element: '.app-menu .el-submenu',
                        intro: '2.对可采收的批次进行采制管理',
                        class: 'siderBarTip2',
                        index: 1
                    }
                ]
                // ,
                // [
                //     {
                //         element: '.app-menu .el-submenu',
                //         intro: '种植管理-->施肥管理',
                //         class: 'siderBarTip1_1',
                //         index: 0
                //     },
                //     {
                //         element: '.app-menu .el-menu-item',
                //         intro: '种植管理-->检测管理',
                //         class: 'siderBarTip1_2',
                //         index: 1
                //     },
                //     {
                //         element: '.app-menu .el-menu-item',
                //         intro: '种植管理-->农事管理',
                //         class: 'siderBarTip1_3',
                //         index: 2
                //     }
                // ]
            ],
            stepsIndex: 0,
            stepsBol: false
        }
    },
    methods: {
        nextFn () {
            $('.left-btn').click()
            if (this.stepsIndex <= this.steps.length - 1) {
                this.stepsIndex += 1
                if (this.stepsIndex === 1) {
                    $('.left-btn').eq(0).click()
                } else if (this.stepsIndex === 2) {
                    this.stepsIndex = 1
                    $('.el-menu-item').eq(0).click()
                }
            }
        },
        prevFn () {
            if (this.stepsIndex > 0) {
                this.stepsIndex -= 1
                $('.el-submenu__title').click()
            }
        },
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
            pen.arc(216, 197, 140, 0, Math.PI, true)
            pen.fill()
            pen.closePath()
            // 可变arc 彩色圆
            pen.fillStyle = '#fa8564'
            pen.beginPath()
            pen.moveTo(216, 197)
            pen.arc(216, 197, 140, Math.PI, Math.PI * ((num / ber) + 1), false)
            pen.closePath()
            pen.fill()
            // 湿度
            pen.beginPath()
            pen.font = '24px Arial'
            pen.fillText(title, 70, 30)
            // 可变65%
            pen.font = '36px Arial'
            pen.fillText(targetDeg, 70, 70)
            pen.font = '30px Arial'
            pen.fillStyle = '#a0a0a0'
            pen.textAlign = 'center'
            pen.fillText('时间：2017-9-9 10:30', 216, 230)
            pen.closePath()
            // 剪切圆
            pen.globalCompositeOperation = 'destination-out'
            pen.beginPath()
            pen.arc(216, 197, 55, 0, Math.PI, true)
            pen.fill()
            pen.closePath()
            pen.restore()
            pen.save()
            // 指针 这里也变 角度变
            pen.translate(216, 197)
            // pen.rotate(Math.PI * 0.65)
            pen.rotate(Math.PI * (num / ber))
            pen.beginPath()
            pen.fillStyle = '#2c3638'
            pen.moveTo(0, -5)
            pen.lineTo(-140, 0)
            pen.lineTo(0, 5)
            pen.fill()
            pen.closePath()
            pen.beginPath()
            pen.arc(0, 0, 7, 0, Math.PI * 2, false)
            pen.closePath()
            pen.fill()
            pen.restore()
        },
        drawInit () {
            var w = $('.tempCanvas>div').width()
            var h = $('.tempCanvas>div').height()
            var canvas = $('.tempCanvas canvas').get(0)
            canvas.setAttribute('width', w)
            canvas.setAttribute('height', h)
            var pen = canvas.getContext('2d')
            var s1 = (w / 436).toFixed(1)
            var s2 = (h / 254).toFixed(1)
            pen.scale(s1, s2)
            this.drawFn(w, h, pen, '温度', '65%')
        },
        goCanvasFn () {
            this.$router.push('/appIndex/appCanvas')
            $(window).off('resize') /// ???
        },
        goVideoFn () {
            this.$router.push('/appIndex/appVideo')
            $(window).off('resize') /// ???
        }
    },
    mounted () {
        localStorage.setItem('trends', 0)
        localStorage.setItem('stepsBol', '1')
        if (Number(localStorage.getItem('stepsBol'))) {
            this.stepsBol = true
        }
        console.log(' this.stepsIndex:' + this.stepsIndex)
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
		overflow: hidden;
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
							/*background:#f1f1f1;*/
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
