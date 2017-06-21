export default {
    mounted () {
        let _this = this
        let distance = 0
        let listTop = 0
        $('.list').on({
            touchstart: function (e) {
                this.startY = e.targetTouches[0].clientY - 100
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
        // if (this.$route.path === '/appIndex') {
        //     this.settitle = '生之园溯源系统'
        //     this.homeShow = false
        //     this.back = false
        // } else if (this.$route.path.indexOf('appdetailbasic') !== -1) {
        //     let detit = localStorage.getItem('dename')
        //     this.settitle = detit
        //     this.back = true
        //     this.homeShow = false
        // } else {
        //     let apptitle = localStorage.getItem('tit')
        //     this.settitle = apptitle
        //     this.homeShow = true
        //     this.back = false
        // }
    },
    watch: {
        // $route () {
        //     if (this.$route.path === '/appIndex') {
        //         this.settitle = '生之园溯源系统'
        //         this.homeShow = false
        //         this.back = false
        //     } else if (this.$route.path.indexOf('appdetailbasic') !== -1) {
        //         let detit = localStorage.getItem('dename')
        //         this.settitle = detit
        //         this.back = true
        //         this.homeShow = false
        //     } else {
        //         let apptitle = localStorage.getItem('tit')
        //         this.settitle = apptitle
        //         this.homeShow = true
        //         this.back = false
        //     }
        // }
    }
}
