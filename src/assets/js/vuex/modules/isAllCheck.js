import Vue from 'vue'
import Vuex from 'vuex'
// Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        // isNewShow: false
        isAllCheck: false
    },
    getters: {
        isAllCheck: (state) => {
            return state.isAllCheck
        }
    },
    mutations: {
        changeIsAllCheck (state, bol) {
            state.isAllCheck = bol
            console.log('2--vuex--isAllCheck' + state.isAllCheck)
        }
    },
    actions: {
    }
})

export default store
