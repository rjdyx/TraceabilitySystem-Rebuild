/**
 * @description:手机首页canvas
 * @author 吴燕萍
 * @date 2017/9/13 
 *  
 */ 
<template>
	<div class="appCanvas">
		<div class="con">
			<div class="head">
				<span class="headLT">数据统计</span>
				<div class='headRT' @click="rotate360Fn">
					<img src="/public/images/shuaxin.png" alt="">
					<span>刷新</span>
				</div>
			</div>
			<div class="main">
				<div class="wrap">
					<div class="inner">
						<div class="canvas" v-for="i in 6">
							<div></div>
						    <canvas></canvas>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang='sass'>
.appCanvas{
	height: 100%;
	padding: 50px 0px;
	box-sizing: border-box;
	overflow: scroll;
	.con{
		width: 90%;
		margin: 0 auto;
		.head{
			overflow: hidden;
			padding: .4rem 0px;
			.headLT{
				float: left;
				color: #9fa1a0;
				font-size: 24px;
				font-weight: bold;
			}
			.headRT{
				float: right;
				color:#14cf68;
				font-size: 16px;
				/*background: red;*/
				>img{
					width: 1rem;
					margin-right: 5px;
					/*height: .5rem;*/
					vertical-align: middle;
					animation: 1s linear infinite forwards;
					-webkit-animation: 1s linear infinite forwards;
					transform : rotate(0deg)
				}
				@keyframes rotatefn {
				    from {transform : rotate(0deg);}
				    to {transform : rotate(-360deg);}
				}

				@-webkit-keyframes rotatefn {
				    from{-webkit-transform : rotate(0deg);}
				    to{-webkit-transform : rotate(-360deg);}
				}
			}
		}
		.main{
			.wrap{
				.inner{
					width: 100%;
					.canvas{
						position: relative;
						border:1px solid #dcdcdc;
						margin-bottom: .3rem;
						>div{
							height: 6rem;
							position: absolute;
							left: 0;
							top: 0;
							right: 0;
							bottom: 0;
							margin:auto;
							z-index: -1;
						}
						canvas{
							display: block;
							border-radius:5px;
							margin: 0 auto;
						}
					}
				}
			}
		}
	}
}
</style>
<script>
export default{
    name: 'appCanvas',
    data () {
        return {
            list: [{
                value: '65%',
                label: '湿度',
                symbol: '%'
            }, {
                value: '5000pa',
                label: '数字气压',
                symbol: 'pa'
            }, {
                value: '28%',
                label: '温度',
                symbol: '℃'
            }, {
                value: '东北风',
                label: '风向',
                symbol: ''
            }, {
                value: '50',
                label: '风速',
                symbol: 'm/s'
            }, {
                value: '1',
                label: '雨量',
                symbol: 'mm'
            }],
            arr: ['北风', '东北风', '东风', '东南风', '南风', '西南风', '西风', '西北风']
        }
    },
    mounted () {
        CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
            // 起点为x,y.绘制的矩形宽高为w,h.圆角的半径为r
            if (w < 2 * r) r = w / 2
            if (h < 2 * r) r = h / 2
            this.beginPath()
            this.moveTo(x + r, y)
            this.arcTo(x + w, y, x + w, y + h, r)
            this.arcTo(x + w, y + h, x, y + h, r)
            this.arcTo(x, y + h, x, y, r)
            this.arcTo(x, y, x + w, y, r)
            this.closePath()
            return this
        }
        this.drawInit()
        $(window).on('resize', () => {
            this.drawInit()
        })
    },
    methods: {
        rotate360Fn () {
            $('.headRT>img').css('animation-name', 'rotatefn')
            var timer = setTimeout(() => {
                $('.headRT>img').css('animation-name', '')
                clearTimeout(timer)
            }, 3000)
        },
        drawCursorFn (w, h, pen, title, targetDeg) {
            var ber = 10000
            if (targetDeg.indexOf('%') > 1) {
                ber = 100
            }
            let num = parseInt(targetDeg)
            pen.save()
            // 灰色底圆
            pen.fillStyle = '#f4f4f4'
            pen.beginPath()
            pen.arc(290, 290, 190, 0, Math.PI, true)
            pen.fill()
            pen.closePath()
            // 彩色圆
            pen.fillStyle = '#f78561'
            pen.beginPath()
            pen.moveTo(290, 290)
            pen.arc(290, 290, 190, Math.PI, Math.PI * ((num / ber) + 1), false)
            pen.closePath()
            pen.fill()
            // 剪切圆
            pen.globalCompositeOperation = 'destination-out'
            pen.beginPath()
            pen.arc(290, 290, 70, 0, Math.PI, true)
            pen.fill()
            pen.closePath()
            // 返回上一个上下文环境
            pen.restore()
            // 保存上下文环境
            pen.save()
            // 湿度
            pen.beginPath()
            pen.fillStyle = '#f78561'
            pen.font = '26px Arial'
            pen.fillText(title, 110, 30)
            // 可变65%
            pen.font = '48px Arial'
            pen.fillText(targetDeg, 110, 90)
            pen.fillStyle = '#a0a0a0'
            pen.font = '32px Arial'
            pen.textAlign = 'center'
            pen.fillText('时间：2017-9-9 10:30', 290, 350)
            pen.closePath()
            pen.fillStyle = '#787878'
            // 指针 这里也变 角度变
            pen.translate(290, 290)
            // pen.rotate(Math.PI * 0.65)
            pen.rotate(Math.PI * (num / ber))
            pen.beginPath()
            pen.fillStyle = '#273234'
            pen.moveTo(0, -5)
            pen.lineTo(-190, 0)
            pen.lineTo(0, 5)
            pen.fill()
            pen.closePath()
            pen.beginPath()
            pen.arc(0, 0, 8, 0, Math.PI * 2, false)
            pen.closePath()
            pen.fill()
            pen.restore()
        },
        drawRectFn (w, h, pen, title, targetDeg) {
            var ber = 10000
            if (targetDeg.indexOf('%') > 1) {
                ber = 100
            }
            let num = parseInt(targetDeg)
            pen.save()
            // 灰色底圆
            pen.fillStyle = '#f4f4f4'
            pen.beginPath()
            pen.fillRect(50, 115, 490, 150)
            pen.fill()
            pen.closePath()
            // 彩色圆
            pen.fillStyle = '#5dafe1'
            pen.beginPath()
            pen.fillRect(50, 115, 490 * (num / ber), 150)
            pen.closePath()
            pen.fill()
            pen.closePath()
            // 湿度
            pen.beginPath()
            pen.font = '26px Arial'
            pen.fillText(title, 110, 30)
            // 可变65%
            pen.font = '48px Arial'
            pen.fillText(targetDeg, 110, 90)
            pen.fillStyle = '#a0a0a0'
            pen.font = '32px Arial'
            pen.textAlign = 'center'
            pen.fillText('时间：2017-9-9 10:30', 290, 350)
            pen.closePath()
            pen.restore()
        },
        drawThermometerFn (w, h, pen, title, targetDeg) {
            // 绘制一个矩形
            var ber = 10000
            if (targetDeg.indexOf('%') > 1) {
                ber = 100
            }
            let num = parseInt(targetDeg)
            pen.save()
            // 底圆
            pen.fillStyle = '#f1f1f1'
            pen.beginPath()
            pen.fillRect(160, 175, 370, 90)
            pen.closePath()
            pen.fill()
            pen.beginPath()
            pen.fillStyle = '#55cbbd'
            pen.arc(115, 220, 65, Math.PI / 4, Math.PI / 4 * 7, false)
            pen.closePath()
            pen.fill()
            pen.beginPath()
            pen.fillRect(160, 175, 370 * (num / ber), 90)
            pen.closePath()
            // 湿度
            pen.beginPath()
            pen.font = '26px Arial'
            pen.fillText(title, 110, 30)
            // 可变65%
            pen.font = '48px Arial'
            pen.fillText(targetDeg, 110, 90)
            pen.fillStyle = '#a0a0a0'
            pen.font = '32px Arial'
            pen.textAlign = 'center'
            pen.fillText('时间：2017-9-9 10:30', 290, 350)
            pen.closePath()
            pen.strokeStyle = '#a0a0a0'
            for (var i = 1; i < 370 / 8; i++) {
                pen.beginPath()
                if (i % 5 === 0) {
                    pen.moveTo(160 + (i - 1) * 8, 265)
                    pen.lineTo(160 + (i - 1) * 8, 235)
                } else {
                    pen.moveTo(160 + (i - 1) * 8, 265)
                    pen.lineTo(160 + (i - 1) * 8, 245)
                }
                pen.closePath()
                pen.stroke()
            }
            pen.restore()
        },
        drawWindFn (w, h, pen, title, targetDeg) {
            let arr = this.arr
            let targetIndex = arr.indexOf(targetDeg)
            pen.beginPath()
            pen.font = '20px Arial'
            pen.fillStyle = '#19b5ee'
            pen.fillText(title, 70, 30)
            pen.fillStyle = '#71f250'
            pen.fillText(targetDeg, 250, 30)
            pen.closePath()
            pen.fill()
            pen.translate(175, 150)
            pen.save()
            pen.lineWidth = '2'
            for (let i = 0; i < 8; i++) {
                if (i === targetIndex) {
                    pen.strokeStyle = '#71f250'
                } else {
                    pen.strokeStyle = '#19b5ee'
                }
                pen.beginPath()
                if (i !== 2 && i !== 6) {
                    pen.moveTo(15, 0)
                    pen.lineTo(80, 0)
                    pen.lineTo(80, 15)
                    pen.moveTo(66, 0)
                    pen.lineTo(66, 15)
                    pen.moveTo(52, 0)
                    pen.lineTo(52, 15)
                } else {
                    pen.moveTo(15, 0)
                    pen.lineTo(80, 0)
                    pen.lineTo(70, 20)
                    pen.lineTo(60, 0)
                }
                pen.closePath()
                pen.stroke()
                // 每次坐标旋转 40度
                pen.rotate(Math.PI * 2 / 8)
            }
            // 开始绘制 文字
            pen.restore()
            pen.font = '12px Arial'
            pen.fillStyle = '#19b5ee'
            pen.textBaseline = 'bottom'
            let R = 110
            for (let i = 0; i < arr.length; i++) {
                pen.beginPath()
                var x = R * Math.cos(i * Math.PI / 4)
                var y = R * Math.sin(i * Math.PI / 4)
                var len = pen.measureText(arr[i])
                pen.fillText(arr[i], x - len.width / 2, y + len.width / 2)
                pen.closePath()
            }
            pen.translate(-175, -150)
        },
        drawCupFn (w, h, pen, title, targetDeg) {
            let num = parseInt(targetDeg)
            pen.save()
            // 灰色底圆
            pen.fillStyle = '#f4f4f4'
            pen.beginPath()
            // pen.fillRect(50, 115, 490, 150)
            pen.moveTo(80, 90)
            pen.lineTo(460, 90)
            pen.arcTo(460, 350, 290, 350, 60)
            pen.arcTo(95, 350, 95, 250, 60)
            pen.lineTo(95, 110)
            pen.fill()
            pen.closePath()
            // 彩色圆
            pen.fillStyle = '#5dafe1'
            pen.beginPath()
            var y = 260 * (num / 32)
            pen.globalCompositeOperation = 'source-atop'
            pen.fillRect(80, 350 - y, 380, y)
            pen.closePath()
            pen.restore()
            pen.save()
            // 湿度
            pen.beginPath()
            pen.fillStyle = '#5dafe1'
            pen.font = '26px Arial'
            pen.fillText(title, 110, 30)
            // 可变65%
            pen.font = '48px Arial'
            pen.fillText(targetDeg, 380, 50)
            pen.strokeStyle = '#a0a0a0'
            pen.textBaseline = 'middle'
            for (var i = 0; i < 260 / 8; i++) {
                pen.beginPath()
                if (i % 5 === 0) {
                    pen.moveTo(490, 350 - i * 8)
                    pen.lineTo(470, 350 - i * 8)
                    pen.font = '20px Arial'
                    pen.fillText(i, 510, 350 - i * 8)
                } else {
                    pen.moveTo(490, 350 - i * 8)
                    pen.lineTo(480, 350 - i * 8)
                }
                pen.closePath()
                pen.stroke()
            }
            pen.fillStyle = '#a0a0a0'
            pen.font = '32px Arial'
            pen.textAlign = 'center'
            pen.fillText('时间：2017-9-9 10:30', 290, 400)
            pen.closePath()
            pen.restore()
        },
        drawInit () {
            for (let i = 0; i < $('.canvas').length; i++) {
                var w = $('.canvas>div').eq(i).width()
                var h = $('.canvas>div').eq(i).height()
                var canvas = $('.canvas canvas').eq(i).get(0)
                var pen = canvas.getContext('2d')
                canvas.setAttribute('width', w)
                canvas.setAttribute('height', h)
                switch (i) {
                case 0: {
                    // 这个s1,s2比例不要随便动
                    let s1 = (w / 580).toFixed(1)
                    let s2 = (h / 370).toFixed(1)
                    pen.scale(s1, s2)
                    this.drawCursorFn(w, h, pen, this.list[i].label, this.list[i].value)
                    break
                }
                case 1: {
                    let s1 = (w / 580).toFixed(1)
                    let s2 = (h / 370).toFixed(1)
                    pen.scale(s1, s2)
                    this.drawRectFn(w, h, pen, this.list[i].label, this.list[i].value)
                    break
                }
                case 2: {
                    let s1 = (w / 580).toFixed(1)
                    let s2 = (h / 425).toFixed(1)
                    pen.scale(s1, s2)
                    this.drawThermometerFn(w, h, pen, this.list[i].label, this.list[i].value)
                    break
                }
                case 3: {
                    let s1 = (w / 350).toFixed(1)
                    let s2 = (h / 280).toFixed(1)
                    pen.scale(s1, s2)
                    this.drawWindFn(w, h, pen, this.list[i].label, this.list[i].value)
                    break
                }
                case 4: {
                    let s1 = (w / 580).toFixed(1)
                    let s2 = (h / 370).toFixed(1)
                    pen.scale(s1, s2)
                    this.drawCursorFn(w, h, pen, this.list[i].label, this.list[i].value)
                    break
                }
                case 5: {
                    let s1 = (w / 580).toFixed(1)
                    let s2 = (h / 425).toFixed(1)
                    pen.scale(s1, s2)
                    this.drawCupFn(w, h, pen, this.list[i].label, this.list[i].value)
                    break
                }
                }
            }
        }
    }
}
</script>
