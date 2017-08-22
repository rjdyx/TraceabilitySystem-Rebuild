/*
*下拉加载组件方法
*模块切换标题方法
*/
export default {
    data () {
        return {
        }
    },
    mounted () {
        let _this = this
        let distance = 0
        let listTop = 0
        $('.list').on({
            touchstart: function (e) {
                e.stopPropagation()
                e.preventDefault()
                this.startY = e.targetTouches[0].clientY - 100
                listTop = $('.applist').position().top
            },
            touchmove: function (e) {
                e.stopPropagation()
                e.preventDefault()
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
                distance = 0
                listTop = 0
            }
        })
        let path = this.$route.path
        if (path === '/appIndex') {
            this.settitle = '天池茶叶溯源系统'
            this.homeShow = false
            this.back = false
            this.growPicture = true
        } else if (path.indexOf('appdetailbasic') !== -1) {
            if (path.indexOf('/plantTo') !== -1) {
                let detect = localStorage.getItem('appTab')
                this.settitle = detect
                this.back = true
                this.homeShow = false
                this.growPicture = false
            } else {
                let detit = localStorage.getItem('dename')
                this.settitle = detit
                this.back = true
                this.homeShow = false
                this.growPicture = false
            }
        } else {
            let apptitle = localStorage.getItem('tit')
            this.settitle = apptitle
            this.homeShow = true
            this.back = false
            this.growPicture = false
        }
    },
    watch: {
        $route () {
            let path = this.$route.path
            if (path === '/appIndex') {
                this.settitle = '天池茶叶溯源系统'
                this.homeShow = false
                this.back = false
                this.growPicture = true
            } else if (path.indexOf('appdetailbasic') !== -1) {
                if (path.indexOf('/plantTo') !== -1) {
                    let detect = localStorage.getItem('appTab')
                    this.settitle = detect
                    this.back = true
                    this.homeShow = false
                    this.growPicture = false
                } else {
                    let detit = localStorage.getItem('dename')
                    this.settitle = detit
                    this.back = true
                    this.homeShow = false
                    this.growPicture = false
                }
            } else {
                let apptitle = localStorage.getItem('tit')
                this.settitle = apptitle
                this.homeShow = true
                this.back = false
                this.growPicture = false
            }
        }
    }
}
