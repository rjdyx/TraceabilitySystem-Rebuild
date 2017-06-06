const { 
    fetchTokenAndKit, 
    fetchTokenAndRole, 
    fetchToken,
    fetchKit 
} = require('../../api')

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
        // 刷新页面或在浏览器进行路由跳转时会调用到此action
        // 在浏览器端跳转时，无需设置headers的cookie
        // 而刷新页面时是在服务器端进行调用，此时需要设置cookie以保持登录状态或相同的session信息
        return fetchTokenAndKit(state.cookies)
        .then(axios.spread((tokenRes, kitRes) => {
            let token = ''
            let kit = ''
            // 在浏览器端调用此action后获取到的数据是对象
            // 而在服务器端获取到的数据是json字符串，需转换成json对象
            if(typeof window === 'undefined') {
                token = eval('(' + tokenRes.data + ')')
                kit = eval('(' + kitRes.data + ')')
            }else {
                token = tokenRes.data
                kit = kitRes.data
            }
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
        return fetchTokenAndRole(state.cookies)
        .then(axios.spread((tokenRes, rolesRes) => {
            let token = ''
            let roles = null
            // 在浏览器端调用此action后获取到的数据是对象
            // 而在服务器端获取到的数据是json字符串，需转换成json对象
            if(typeof window === 'undefined') {
                token = eval('(' + tokenRes.data + ')')
                roles = eval('(' + rolesRes.data + ')')
            }else {
                token = tokenRes.data
                roles = rolesRes.data
            }
            
            commit('SET_TOKEN', token)
            if(roles.name === undefined) {
                commit('SET_ROLES', JSON.stringify({}))
            }else {
                commit('SET_ROLES', JSON.stringify(roles))
            }
            
        }))
        .catch((error) => {
            console.log(error.response.data)
        })
    },

    FETCH_TOKEN ({ commit, state }) {
        return fetchToken()
            .then((responce) => {
                commit('SET_TOKEN', responce.data)
            })
            .catch((error) => {
                console.log('get token failed!')
            })
    },

    FETCH_KIT ({ commit, state }) {
        return fetchKit(state.cookies)
            .then((responce) => {
                commit('SET_KIT', responce.data)
            })
            .catch((error) => {
                console.log('get kit failed!')
            })
    },

    FETCH_ROLES ({ commit, state }) {
        return fetchRoles(state.cookies)
            .then((responce) => {
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
