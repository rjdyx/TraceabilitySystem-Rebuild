import * as types from './mutation-types'

export const mutations = {
    [types.LOGIN] (state, data) {
        state.user.name = data.name
        localStorage.setItem('user', data.name)
    }
}

export default mutations
