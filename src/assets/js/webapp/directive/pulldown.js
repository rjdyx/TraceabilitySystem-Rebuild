// 下拉显示组件
export default {
    mounted () {
        let _this = this
        let distance = 0
        let listTop = 0
        $('.list').on({
            touchstart: function (e) {
                this.startY = e.targetTouches[0].clientY - 100
                console.log(this.startY + 'efue')
                listTop = $('.applist').position().top
            },
            touchmove: function (e) {
                this.moveY = e.targetTouches[0].clientY - 100
                distance = this.moveY - this.startY
                if (listTop < 7) {
                    $('.applist').css({top: listTop + distance + 'px'})
                }
            },
            touchend: function (e) {
                if (distance > 30) {
                    $('.applist').animate({top: '7px'})
                } else {
                    $('.applist').css({top: listTop + 'px'})
                }
            }
        })
    }
}
