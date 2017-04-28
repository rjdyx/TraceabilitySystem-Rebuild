import Vue from 'vue'
import Vuex from 'vuex'
// Vue.use(Vuex)

const userStore = new Vuex.Store({
    state: {
        // isNewShow: false
        count: 0
    },
    getters: {
    },
    mutations: {
        handleAdd (state) {
            state.count++
        }
    },
    actions: {

    }
})

export default userStore
