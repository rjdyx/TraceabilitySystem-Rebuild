import Vue from 'vue'
import Vuex from 'vuex'
import theme from './theme'
import basicModel from './modules/basic-model'

export default new Vuex.Store({
    modules: {
        theme,
        basicModel
    }
})
