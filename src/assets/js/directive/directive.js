
/**
 * 长按事件
 */
exports.touchAction = () => {
    return (el, binding) => {
        let time = null
        el.addEventListener('touchstart', (event) => {
            time = setTimeout(() => {
                let vm = binding.value.vm
                let myFunction = binding.arg
                vm[myFunction](binding.value)
            }, 500)
        })

        el.addEventListener('touchmove', (event) => {
            clearTimeout(time)
        })

        el.addEventListener('touchend', (event) => {
            clearTimeout(time)
        })
    }
}

/**
 * 自动获取焦点
 */
exports.focus = () => {
    return {
        inserted: (el, binding, vnode) => {
            el.focus()
        }
    }
}

/**
 * 触摸开始
 * @param {Array} 传入的参数必须为数组，数组第一个值为vue实例
 */
exports.touchstart = () => {
    return {
        bind: (el, binding) => {
            el.addEventListener('touchstart', (event) => {
                reactiveFn(
                    binding,
                    'arguments must be array in v-touchstart',
                    'the first argument must be Vue instance in v-touchstart'
                )
            })
        }
    }
}

/**
 * 触摸移动
 * @param {Array} 传入的参数必须为数组，数组第一个值为vue实例
 */
exports.touchmove = () => {
    return {
        bind: (el, binding) => {
            el.addEventListener('touchmove', (event) => {
                reactiveFn(
                    binding,
                    'arguments must be array in v-touchmove',
                    'the first argument must be Vue instance in v-touchmove'
                )
            })
        }
    }
}

/**
 * 触摸结束
 * @param {Array} 传入的参数必须为数组，数组第一个值为vue实例
 */
exports.touchend = () => {
    return {
        bind: (el, binding) => {
            el.addEventListener('touchend', (event) => {
                reactiveFn(
                    binding,
                    'arguments must be array in v-touchend',
                    'the first argument must be Vue instance in v-touchend'
                )
            })
        }
    }
}
