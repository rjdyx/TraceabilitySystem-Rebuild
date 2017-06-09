import * as func from '../function'

export default {
    SWITCHTHEME (state, obj) {
        console.log('mutations.js')
        console.log(obj.theme)
        state.theme.theme = obj.theme
        func.themeLocal.set(state.theme)
        // func.themeLocal.get()
        console.log('mutations end')
    },
    SWITCHFONT (state, obj) {
        state.font.font = obj.font
        func.fontLocal.set(state.font)
    },
    SWITCHRECORD (state, obj) {
        state.record.record = obj.record
        func.modelLocal.set(state.record)
    },
    CHANGECOLOR (model, label) {
        model.record = label
        func.modelLocal.set(model)
    },
    CHANGESIDERBAR (state, obj) {
        state.siderBar.siderBar = obj.siderBar
        func.siderBarLocal.set(state.siderBar)
    }
}
