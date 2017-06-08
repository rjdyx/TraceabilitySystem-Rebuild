import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import auth from './modules/auth'
import theme from './theme'
import basicModel from './modules/basic-model'
import isAllCheck from './modules/isAllCheck'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export function createStore () {
    return new Vuex.Store({
        actions,
        getters,
        mutations,
        modules: {
            auth,
            theme,
            basicModel,
            isAllCheck
        },
        strict: debug
    })
}
