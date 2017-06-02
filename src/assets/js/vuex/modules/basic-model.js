const { pre } = require('../../utils/api')

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
    FETCH_TABLE_DATA ({ commit, state }, {url}) {
        axios.get(pre(url), {params: {params: {}, type: {}}} )
            .then((responce) => {
                // 数据转换
                if (responce.data.data.length !== 0) {
                    commit('SET_TABLE_DATA', responce.data.data)
                    commit('SET_TABLE_DATA', responce.data.total)
                    commit('SET_NUM', responce.data.last_page)
                    commit('SET_PAGINATOR', responce.data)
                } else {
                    commit('SET_TABLE_DATA', responce.data.data)
                    commit('SET_TABLE_DATA', 0)
                    commit('SET_NUM', 0)
                    commit('SET_PAGINATOR', 0)
                }
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
