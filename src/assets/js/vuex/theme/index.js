import * as func from '../function.js'
import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'

const state = func.themeLocal.get() || {
    theme: 'green'
}
const thing = func.fontLocal.get() || {
    font: 'big'
}
export default{
    state,
    thing,
    actions,
    mutations,
    getters
}
