export default {
    mounted () {
        var canvas = document.createElement('canvas')
        var basic = $('.pBasicModel')
        var grow = $('#home_grow')
        var product = $('.pCommodity')
        basic.append(canvas)
        grow.append(canvas)
        product.append(canvas)
        canvas.width = document.body.clientWidth
        canvas.height = document.body.clientHeight
        var context = canvas.getContext('2d')
        var r = 10
        change(context, r)
        function change (context, r) {
            context.save()
            context.fillStyle = '#3ccfb5'
            context.fillRect(0, 0, canvas.width, canvas.height)
            context.globalCompositeOperation = 'destination-out'
            context.beginPath()
            context.arc(canvas.width / 2, canvas.height / 2, r++, Math.PI * 4, false)
            context.fill()
            context.restore()
            if (r > canvas.width) {
                $(canvas).css('display', 'none')
            }
            window.requestAnimationFrame(function () {
                change(context, r += 4)
            })
        }
    }
}
