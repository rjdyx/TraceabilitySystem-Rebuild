const LocalEvent = function (item) {
    this.get = function () {
        console.log((typeof localStorage) === 'undefined' ? '' : localStorage.getItem(item) ? JSON.parse(localStorage.getItem(item)) : '')
        return (typeof localStorage) === 'undefined' ? '' : localStorage.getItem(item) ? JSON.parse(localStorage.getItem(item)) : ''
    }
    this.set = function (obj) {
        if ((typeof localStorage) !== 'undefined') localStorage.setItem(item, JSON.stringify(obj))
    }
    this.clear = function () {
        if ((typeof localStorage) !== 'undefined') localStorage.removeItem(item)
    }
}
export const modelLocal = new LocalEvent('record')

export const themeLocal = new LocalEvent('theme')

export const fontLocal = new LocalEvent('font')

export const siderBarLocal = new LocalEvent('siderBar')
