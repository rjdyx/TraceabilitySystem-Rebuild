import Vue from 'vue'
export const USER_SIGNOUT = 'USER_SIGNOUT' // 退出登录

export default {
    state: JSON.parse(sessionStorage.getItem('user')) || {},
    mutations: {
        [USER_SIGNOUT] (state) {
            sessionStorage.removeItem('user')
            Object.keys(state).forEach(k => Vue.delete(state, k))
        }
    },
    actions: {
        [USER_SIGNOUT] ({commit}) {
            commit(USER_SIGNOUT)
        }
    }
}
