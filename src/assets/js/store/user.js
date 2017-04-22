import Vue from 'vue'
import Vuex from 'vuex'
// Vue.use(Vuex)
export const USER_SIGNIN = 'USER_SIGNIN'// 登录成功

export default {
    state: JSON.parse(sessionStorage.getItem('user')) || {},
    mutations: {
        [USER_SIGNIN] (state, user) {
            sessionStorage.setItem('user', JSON.stringify(user))
            Object.assign(state, user)
        }
    },
    actions: {
        [USER_SIGNIN] ({commit}, user) {
            commit(USER_SIGNIN, user)
        }
    }
}
