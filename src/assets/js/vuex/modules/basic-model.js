const { pre } = require('../../utils/api')
const host = 'http://localhost:8080/'

const state = {
    navbarName: '',
    subNavBarName: '',
    tableData: [],
    total_num: 0,
    num: 0,
    paginator: 0
}

// getters
const getters = {
    // recorddo: state => state.number
}

// actions
const actions = {
    FETCH_TABLE_DATA ({ commit, state }, { store, route: {query: { url='' }}}) {
        let cookies = store.state.auth.cookies
        // 刷新页面或在浏览器进行路由跳转时会调用到此action
        // 在浏览器端跳转时，无需设置headers的cookie
        // 而刷新页面时是在服务器端进行调用，此时需要设置cookie以保持登录状态
        let axiosGet = typeof window === 'undefined'
            ? axios.get(host +pre(url), { headers: { Cookie: cookies }})
            : axios.get(host +pre(url))
        return axiosGet
            .then((responce) => {
                // 在浏览器端调用此action后获取到的数据是对象
                // 而在服务器端获取到的数据是json字符串，需转换成json对象
                let tableData = typeof window === 'undefined'
                    ? eval('(' + responce.data + ')')
                    : responce.data
                // 数据转换
                console.log(tableData.next_page_url)
                if (tableData.data.length !== 0) {
                    commit('SET_TABLE_DATA', tableData.data)
                    commit('SET_TOTAL_NUM', tableData.total)
                    commit('SET_NUM', tableData.last_page)
                    commit('SET_PAGINATOR', tableData)
                } else {
                    commit('SET_TABLE_DATA', tableData.data)
                    commit('SET_TOTAL_NUM', 0)
                    commit('SET_NUM', 0)
                    commit('SET_PAGINATOR', 0)
                }
            })
            .catch((error) => {
                console.log(error.response.data)
            })
    }
}

// mutations
const mutations = {
    setNavbarName (state, navbarName) {
        state.navbarName = navbarName
    },
    setSubNavBarName (state, subNavBarName) {
        state.subNavBarName = subNavBarName
    },
    SET_TABLE_DATA (state, tableData) {
        state.tableData = tableData
    },
    SET_TOTAL_NUM (state, total_num) {
        state.total_num = total_num
    },
    SET_NUM (state, num) {
        state.num = num
    },
    SET_PAGINATOR (state, paginator) {
        state.paginator = paginator
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
