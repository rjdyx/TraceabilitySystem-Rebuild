const { pre } = require('../../utils/api')
const { getMessageList } = require('../../utils/getMessageList')
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
        let axiosGet = typeof window === 'undefined'
            ? axios.get(host +pre(url), { headers: { Cookie: cookies }})
            : axios.get(host +pre(url))
        return axiosGet.then((responce) => {
                // console.log('----------3---------')
                // console.log(url)
                // console.log(cookies)
                // console.log('----------4---------')
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
