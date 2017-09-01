/**
 * @description:首页canvas
 * @author 吴燕萍
 * @date 2017/8/22 
 *  
 */ 
<template>
	<div class="homeCanvas">
        <div class="topCanvas">
            <canvas width="350" height="280" @click="goEcharts('humidity')"></canvas>
            <canvas width="350" height="280" @click="goEcharts('KPa')"></canvas>
            <canvas width="350" height="280"></canvas>
            <canvas width="350" height="280" class="video-bg" @click="videos" @mousemove="styleover" @mouseout="styleout"></canvas>
        </div>
        <div class="moreDate">
            <div>
                <canvas width="1588" height="185"></canvas>
                <span @click="goEcharts('rainfall')"></span>
                <span @click="goEcharts('temp')"></span>
                <span @click="goEcharts('windSpeed')"></span>
            </div>
        </div>
	</div>
</template>
<script>
export default {
    name: 'homeCanvas',
    data () {
        return {
            e1: '0',
            e2: '0',
            e3: '',
            e4: '0',
            e5: '0',
            e6: '0',
            arr: ['北风', '东北风', '东风', '东南风', '南风', '西南风', '西风', '西北风']
        }
    },
    mounted () {
        // 数据初始化
        this.canvasInit()
        this.plantationDatas()
        var _this = this
        // 10分钟更新一次
        var timer = window.setInterval(function () {
            if (_this.$route.path === '/index/home/canvas') {
                _this.plantationDatas()
            } else {
                clearInterval(timer)
            }
        }, 60000)
    },
    methods: {
        videos () {
            this.$router.push('/index/plays')
        },
        styleover () {
            $('.video-bg').css('background-size', '102% 102%')
        },
        styleout () {
            $('.video-bg').css('background-size', '100% 100%')
        },
        plantationDatas () {
            var _this = this
            axios.get('api/maxdata').then((res) => {
                if (res.data.status !== undefined && res.data.status === 200) {
                    _this.plantations = res.data.content
                    _this.e1 = Math.round(res.data.content[0].e4 * 100) / 100
                    _this.e2 = Math.round(res.data.content[0].e5 * 100) / 100
                    _this.e4 = Math.round(res.data.content[0].e2 * 100) / 100
                    _this.e5 = res.data.content[0].e3
                    _this.e6 = res.data.content[0].e1
                    var e3 = res.data.content[0].e12
                    if (e3 === 0 || e3 === 360) {
                        _this.e3 = this.arr[0]
                    }
                    if (e3 < 90 && e3 > 0) {
                        _this.e3 = this.arr[1]
                    }
                    if (e3 === 90) {
                        _this.e3 = this.arr[2]
                    }
                    if (e3 > 90 && e3 < 180) {
                        _this.e3 = this.arr[3]
                    }
                    if (e3 === 180) {
                        _this.e3 = this.arr[4]
                    }
                    if (e3 > 180 && e3 < 270) {
                        _this.e3 = this.arr[5]
                    }
                    if (e3 === 270) {
                        _this.e3 = this.arr[6]
                    }
                    if (e3 > 270 && e3 < 360) {
                        _this.e3 = this.arr[7]
                    }
                    _this.clearCanvas()
                    _this.canvasInit()
                }
            })
        },
        canvasInit () {
            let canvas = $('canvas')
            let pen1 = canvas.eq(0).get(0).getContext('2d')
            this.arcCanvasFn(pen1, '湿度', '0%', '100%', this.e1 + '%')

            let pen2 = canvas.eq(1).get(0).getContext('2d')
            this.arcCanvasFn(pen2, '数字气压', '0pa', '10000pa', this.e2 + 'pa')

            let pen3 = canvas.eq(2).get(0).getContext('2d')
            this.drawWindFn(pen3, '风向', this.e3)

            let pen5 = canvas.eq(4).get(0).getContext('2d')
            this.drawMore(pen5)
        },
        clearCanvas () {
            var canvas = $('canvas')
            canvas.eq(0).get(0).getContext('2d').clearRect(0, 0, 350, 280)
            canvas.eq(1).get(0).getContext('2d').clearRect(0, 0, 350, 280)
            canvas.eq(2).get(0).getContext('2d').clearRect(0, 0, 350, 280)
            canvas.eq(4).get(0).getContext('2d').clearRect(0, 0, 1588, 185)
        },
        // 绘制温度和数字气压 参数(画笔，标题，坐标开始度数1，坐标结束度数2，目标度数)
        arcCanvasFn (pen, title, deg1, deg2, targetDeg) {
            var ber = 10000
            if (deg2 === '100%') {
                ber = 100
            }
            let num = parseInt(targetDeg)
            pen.save()
            // 灰色底圆
            pen.fillStyle = '#f4f4f4'
            pen.beginPath()
            pen.arc(175, 230, 125, 0, Math.PI, true)
            pen.fill()
            pen.closePath()
            // 可变arc 彩色圆
            var grd = pen.createLinearGradient(50, 0, 300, 0)
            grd.addColorStop(0, 'red')
            grd.addColorStop(0.5, 'yellow')
            grd.addColorStop(1, 'green')
            pen.fillStyle = grd
            pen.beginPath()
            pen.moveTo(175, 230)
            pen.arc(175, 230, 125, Math.PI, Math.PI * ((num / ber) + 1), false)
            pen.closePath()
            pen.fill()
            // 剪切圆
            pen.globalCompositeOperation = 'destination-out'
            pen.beginPath()
            pen.arc(175, 230, 85, 0, Math.PI, true)
            pen.fill()
            pen.closePath()
            // 返回上一个上下文环境
            pen.restore()
            // 保存上下文环境
            pen.save()
            // 湿度
            pen.fillStyle = '#273234'
            pen.beginPath()
            pen.font = '20px Arial'
            pen.fillText(title, 10, 30)
            pen.textAlign = 'center'
            pen.fillStyle = '#d68556'
            // 可变65%
            pen.fillText(targetDeg, 175, 85)
            pen.font = '12px Arial'
            pen.fillStyle = '#787878'
            // 0% 100%
            pen.fillText(deg1, 68, 260)
            pen.fillText(deg2, 282, 260)
            pen.closePath()
            // 指针 这里也变 角度变
            pen.translate(175, 230)
            // pen.rotate(Math.PI * 0.65)
            pen.rotate(Math.PI * (num / ber))
            pen.beginPath()
            pen.fillStyle = '#273234'
            pen.moveTo(0, -5)
            pen.lineTo(-140, 0)
            pen.lineTo(0, 5)
            pen.fill()
            pen.closePath()
            pen.beginPath()
            pen.arc(0, 0, 8, 0, Math.PI * 2, false)
            pen.closePath()
            pen.fill()
            pen.restore()
        },
        // 绘制风向 参数(画笔，标题，目标风向)
        drawWindFn (pen, title, targetWind) {
            pen.width = pen.width
            let arr = this.arr
            let targetIndex = arr.indexOf(targetWind)
            pen.beginPath()
            pen.font = '20px Arial'
            pen.fillText(title, 10, 30)
            pen.fillStyle = '#d68556'
            pen.fillText(targetWind, 10, 60)
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
        // 绘制 雨量，温度，风速
        drawMore (pen) {
            let obj = {
                rain: {
                    imgAddress: ['public/images/rain.png', [20, 35, 30, 22]],
                    title: '雨量',
                    target: this.e4 + 'mm'
                },
                temp: {
                    imgAddress: ['public/images/temp.png', [23, 85, 21, 28]],
                    title: '温度',
                    target: this.e5 + '℃'
                },
                wind: {
                    imgAddress: ['public/images/wind.png', [20, 135, 25, 22]],
                    title: '风速',
                    target: this.e6 + 'm/s'
                }
            }
            Object.keys(obj).forEach((item, index) => {
                pen.fillStyle = '#63666b'
                pen.save()
                let imgAddress = obj[item].imgAddress
                let title = obj[item].title
                let target = obj[item].target
                let targetNum = parseInt(target)
                let icon = new Image()
                icon.src = obj[item].imgAddress[0]
                var grd = pen.createLinearGradient(120, 0, 1020, 0)
                grd.addColorStop(0, 'red')
                grd.addColorStop(0.5, 'yellow')
                grd.addColorStop(1, 'green')
                icon.onload = () => {
                    pen.beginPath()
                    pen.drawImage(icon, imgAddress[1][0], imgAddress[1][1], imgAddress[1][2], imgAddress[1][3])
                    pen.closePath()
                }
                pen.font = '18px Arial'
                pen.beginPath()
                pen.fillText(title, 60, 50 + (52 * index))
                pen.fillText(target, 1050, 50 + (52 * index))
                pen.closePath()
                pen.beginPath()
                pen.fillStyle = '#f4f4f4'
                pen.rect(120, 35 + (52 * index), 900, 20)
                pen.fill()
                pen.closePath()
                pen.beginPath()
                pen.fillStyle = grd
                pen.rect(120, 35 + (52 * index), targetNum / 100 * 900, 20)
                pen.fill()
                pen.closePath()
                pen.restore()
            })
        },
        goEcharts (value) {
            console.log(value)
            localStorage.setItem('echartsSelectValue', value)
            this.$router.push('/index/home/echarts')
        }
    }
}
</script>
<style lang="sass">
.homeCanvas{
	min-width: 1648px;
	display:inline-block;
    .topCanvas{
        >canvas{
            border:1px solid #dcdcdc;
            border-radius:10px;
            margin:0px 60px 20px 0px;
            cursor:pointer;
            &:nth-child(3){
                cursor:default; 
            }
            &:nth-child(4){
                margin-right:0px;
            }
            &:last-child{
                margin-right:0px;
            }
        }
    }	
    .moreDate {
        text-align:center;
        >div{
            position:relative;
            display:inline-block;
            canvas {
                border:1px solid #dcdcdc;
                border-radius:10px;
            }
            @for $i from 1 through 3{
                span:nth-of-type(#{$i}) {
                    position: absolute;
                    width: 960px;
                    height: 20px;
                    left: 60px;
                    top: 35px + (52px * ($i - 1));
                    cursor:pointer;
                    // border:1px solid red;
                }   
            }
        }
    }
    .video-bg {
       background: url('/public/images/video-bg.png') no-repeat center center;
       background-size:100% 100%; 
       cursor: pointer;
       transition: all 0.3s linear;
    }
}
</style>
