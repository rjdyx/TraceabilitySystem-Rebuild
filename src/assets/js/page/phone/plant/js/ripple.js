export default {
    mounted () {
        this.ani()
    },
    watch: {
    },
    methods: {
        ani () {
            var i = 0
            if (i === 0) {
                var canvas = document.createElement('canvas')
                var basic = $('.pBasicModel1')
                basic.append(canvas)
                canvas.width = document.body.clientWidth
                canvas.height = document.body.clientHeight
                setInterval(() => {
                    this.x += 10
                    var cxt = canvas.getContext('2d')
                    cxt.save()
                    cxt.fillStyle = '#3ccfb5'
                    cxt.fillRect(0, 0, canvas.width, canvas.height)
                    cxt.globalCompositeOperation = 'destination-out'
                    cxt.beginPath()
                    cxt.arc(canvas.width / 2, canvas.height / 2, this.x, Math.PI * 4, false)
                    cxt.fill()
                    cxt.restore()
                    cxt.beginPath()
                    cxt.closePath()
                }, 20)
                i++
                return true
            }
        }
    }
}
