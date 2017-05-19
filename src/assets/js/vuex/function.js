const LocalEvent = function (item) {
    this.get = function () {
        return localStorage.getItem(item) ? JSON.parse(localStorage.getItem(item)) : ''
    }
    this.set = function (obj) {
        localStorage.setItem(item, JSON.stringify(obj))
    }
    this.clear = function () {
        localStorage.removeItem(item)
    }
}
export const modelLocal = new LocalEvent('record')

export const themeLocal = new LocalEvent('theme')

export const fontLocal = new LocalEvent('font')

export const siderBarLocal = new LocalEvent('siderBar')
