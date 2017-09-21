// import Vue from 'vue'
// import Vuex from 'vuex'
// // Vue.use(Vuex)

const state = {
    stepsIndex: 0
}
// getters
const getters = {
    getStepsIndex: (state) => {
        return state.stepsIndex
    }
}

// actions
const actions = {
    changeMutations ({ commit }, num) {
        commit('changeStepsIndex', num)
    }
}

// mutations
const mutations = {
    changeStepsIndex (state, num) {
        state.stepsIndex = num
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}
