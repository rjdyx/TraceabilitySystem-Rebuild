import * as func from '../function'

export default {
    SWITCHTHEME (states, obj) {
        states.theme = obj.theme
        func.themeLocal.set(states)
    },
    SWITCHFONT (thing, obj) {
        thing.font = obj.font
        func.fontLocal.set(thing)
    }
}
