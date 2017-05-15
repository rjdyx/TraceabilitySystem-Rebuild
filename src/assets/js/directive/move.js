// 弹出框按下移动方法

export default{
    mounted () {
        let _this = this
        this.resizeFn()
        $('.newWrap').find($('.el-tabs__header')).on('mousedown', (e) => {
            // console.log('mousedown')
            // 鼠标与newForm块的距离
            this.dmL = e.clientX - $('.newForm').position().left
            this.dmT = e.clientY - $('.newForm').position().top
            $(document).on('mousemove', (e) => {
                e.preventDefault()
                // console.log('mousemove')
                var L = e.clientX - _this.dmL
                var T = e.clientY - _this.dmT
                var maxL = $(document).outerWidth() - $('.newForm').innerWidth()
                var maxT = $(document).outerHeight() - $('.newForm').innerHeight()
                if (L > maxL) {
                    L = maxL
                } else if (L < 0) {
                    L = 0
                }
                if (T > maxT) {
                    T = maxT
                } else if (T < 0) {
                    T = 0
                }
                $('.newForm').css({left: L + 'px', top: T + 'px'})
            })
        })
        $(document).on('mouseup', () => {
            $(document).off('mousemove')
            // $(document).off('mouseup')
            // console.log('mouseup')
        })
        $(window).on('resize', () => {
            this.resizeFn()
        })
    },
    methods: {
        resizeFn () {
            var divL = ($(document).outerWidth() - $('.newForm').innerWidth()) / 2
            var divT = ($(document).outerHeight() - $('.newForm').innerHeight()) / 2
            $('.newForm').css({left: divL, top: divT})
        }
    }
}

// 创建一个拖拽对象Drag
// 参数(id)
// id： 组件里第一层div的id
// import Vue from 'vue'

// // class Drag {
// //     constructor (clas) {
// //         this.dragObj = $(clas).find($('.el-tabs__header'))
// //         this.dmL = 0
// //         this.dmT = 0
// //         this.dragObj.on('mousedown', (e) => {
// //             this.mouseDown(e)
// //         })
// //     }
// //     mouseDown (e) {
// //         this.dmL = e.clientX - $('.newForm').position().left
// //         this.dmT = e.clientY - $('.newForm').position().top
// //         $(document).on('mousemove', (e) => {
// //             this.mouseMove(e)
// //         })
// //         $(document).on('mouseup', () => {
// //             this.mouseUp()
// //         })
// //     }
// //     mouseMove (e) {
// //         e.preventDefault()
// //         var L = e.clientX - this.dmL
// //         var T = e.clientY - this.dmT
// //         var maxL = $(document).outerWidth() - $('.newForm').innerWidth()
// //         var maxT = $(document).outerHeight() - $('.newForm').innerHeight()
// //         if (L > maxL) {
// //             L = maxL
// //         } else if (L < 0) {
// //             L = 0
// //         }
// //         if (T > maxT) {
// //             T = maxT
// //         } else if (T < 0) {
// //             T = 0
// //         }
// //         $('.newForm').css({left: L + 'px', top: T + 'px'})
// //     }
// //     mouseUp () {
// //         $(document).off('mousemove')
// //         $(document).off('mouseup')
// //     }
// //     resizeFn () {
// //         var divL = ($(document).outerWidth() - $('.newForm').innerWidth()) / 2
// //         var divT = ($(document).outerHeight() - $('.newForm').innerHeight()) / 2
// //         $('.newForm').css({left: divL, top: divT})
// //     }
// // }
// function Drag (clas) {
//     this.dragObj = $(clas).find($('.el-tabs__header'))
//     this.dmL = 0
//     this.dmT = 0
//     this.dragObj.on('mousedown', (e) => {
//         this.mouseDown(e)
//     })
// }

// Drag.prototype.mouseDown = (e) => {
//     // 鼠标与newForm块的距离
//     this.dmL = e.clientX - $('.newForm').position().left
//     this.dmT = e.clientY - $('.newForm').position().top
//     $(document).on('mousemove', (e) => {
//         this.mouseMove(e)
//     })
//     $(document).on('mouseup', (e) => {
//         this.mouseUp(e)
//     })
// }
// Drag.prototype.mouseMove = (e) => {
//     console.log('mouseMove')
//     e.preventDefault()
//     var L = e.clientX - this.dmL
//     var T = e.clientY - this.dmT
//     var maxL = $(document).outerWidth() - $('.newForm').innerWidth()
//     var maxT = $(document).outerHeight() - $('.newForm').innerHeight()
//     if (L > maxL) {
//         L = maxL
//     } else if (L < 0) {
//         L = 0
//     }
//     if (T > maxT) {
//         T = maxT
//     } else if (T < 0) {
//         T = 0
//     }
//     $('.newForm').css({left: L + 'px', top: T + 'px'})
// }
// Drag.prototype.mouseUp = (e) => {
//     $(document).off('mousemove')
//     $(document).off('mouseup')
// }
// Drag.prototype.resizeFn = () => {
//     var divL = ($(document).outerWidth() - $('.newForm').innerWidth()) / 2
//     var divT = ($(document).outerHeight() - $('.newForm').innerHeight()) / 2
//     $('.newForm').css({left: divL, top: divT})
// }
// 把Drag对象输出出去
// export default Drag
// module.exports.Drag = Drag
