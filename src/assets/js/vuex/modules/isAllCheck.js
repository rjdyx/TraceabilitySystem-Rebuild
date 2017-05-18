// import Vue from 'vue'
// import Vuex from 'vuex'
// // Vue.use(Vuex)

const state = {
    isTrue: false
}
// getters
const getters = {
    isTrue: (state) => {
        return state.isTrue
    }
}

// actions
const actions = {
    changeIsTrue ({ commit }, bol) {
        commit('changeIsTrue', b)
    }
}

// mutations
const mutations = {
    changeIsTrue (state, bol) {
        state.isTrue = bol
        console.log('2--vuex--isTrue:' + state.isTrue)
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}
