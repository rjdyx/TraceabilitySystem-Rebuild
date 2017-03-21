
const state = {
  navbarName: '',
  subNavBarName: '',
  title:''
}

// getters
const getters = {}

// actions
const actions = {}



// mutations
const mutations = {

  setNavbarName(state, navbarName) {
    state.navbarName = navbarName
  },

  setSubNavBarName(state, subNavBarName) {
    state.subNavBarName = subNavBarName
  },
  setTitle(state, title) {
          state.title = title;
        },

}

export default {
  state,
   getters,
  actions,
  mutations
}
