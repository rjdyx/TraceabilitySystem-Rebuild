const env = require('projectRoot/env.js')
const url = 'http://localhost:8080/'

const state = {
    token: '',
    kit: '',
    user: {},
    roles: {},
    cookies: ''
}

// getters
const getters = {
    // recorddo: state => state.number
}

// actions
const actions = {

    FETCH_TOKEN_AND_KIT ({ commit, state }) {
        return axios.all([
            axios.get(url + 'token'),
            axios.get(url + 'kit')
        ])
        .then(axios.spread((tokenRes, kitRes) => {
            let regx = /\"{1,}/g
            let token = tokenRes.data.replace(regx, '')
            let kit = kitRes.data.replace(regx, '')
            regx = /\\{1,}/g
            kit = kit.replace(regx, '')
            commit('SET_TOKEN', token)
            commit('SET_KIT', kit)
        }))
        .catch((error) => {
            console.log(error.response.data)
        })
    },

    FETCH_TOKEN_AND_ROLES ({ commit, state }) {
        // 刷新页面或在浏览器进行路由跳转时会调用到此action
        // 在浏览器端跳转时，无需设置headers的cookie
        // 而刷新页面时是在服务器端进行调用，此时需要设置cookie以保持登录状态
        let axiosGETS = typeof window === 'undefined'
        ? [axios.get(url + 'token'), axios.get(url + 'login/state', { headers: { Cookie: state.cookies }})]
        : [axios.get(url + 'token'), axios.get(url + 'login/state')]

        return axios.all(axiosGETS)
        .then(axios.spread((tokenRes, roles) => {
            let regx = /\"{1,}/g
            let token = tokenRes.data.replace(regx, '')
            commit('SET_TOKEN', token)

            // 在浏览器端调用此action后获取到的数据是对象
            // 而在服务器端获取到的数据是json字符串，需转换成json对象
            let obj = typeof roles.data !== 'object'
                ? eval('(' + roles.data + ')')
                : roles.data
            if(obj.name === undefined) {
                commit('SET_ROLES', {})
            }else {
                commit('SET_ROLES', JSON.stringify(obj))
            }
            
        }))
        .catch((error) => {
            console.log(error.response.data)
        })
    },

    FETCH_TOKEN ({ commit, state }) {
        return axios.get(url + 'token')
            .then((responce) => {
                console.log(responce.data)
                commit('SET_TOKEN', responce.data)
            })
            .catch((error) => {
                console.log('get token failed!')
            })
    },

    FETCH_KIT ({ commit, state }) {
        return axios.get(url + 'kit')
            .then((responce) => {
                console.log(responce.data)
                commit('SET_KIT', responce.data)
            })
            .catch((error) => {
                console.log('get kit failed!')
            })
    },

    FETCH_ROLES ({ commit, state }) {
        return axios.get(url + 'login/state')
            .then((responce) => {
                console.log(responce.data)
                commit('SET_ROLES', responce.data)
            })
            .catch((error) => {
                console.log('get roles failed!')
            })
    }
}

// mutations
const mutations = {
    SET_TOKEN (state, token) {
        state.token = token
    },
    SET_KIT (state, kit) {
        state.kit = kit
    },
    SET_USER (state, user) {
        state.user = user
    },
    SET_ROLES (state, roles) {
        state.roles = roles
    },
    SET_COOKIES (state, cookies) {
        state.cookies = cookies
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}
