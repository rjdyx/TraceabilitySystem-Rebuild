const state = {
    navbarName: '',
    subNavBarName: '',
    settitle: '生之园溯源系统'
}
// getters
const getters = {
    // recorddo: state => state.number
}

// actions
const actions = {
}

// mutations
const mutations = {
    // change (state, index) {
    //     state.number = index
    //     // console.log(state.number + 5)
    // },
    setNavbarName (state, navbarName) {
        state.navbarName = navbarName
    },
    setSubNavBarName (state, subNavBarName) {
        state.subNavBarName = subNavBarName
    },
    setTitle (state, settitle) {
        state.settitle = settitle
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}
