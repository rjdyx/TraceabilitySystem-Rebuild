
const state = {
  navbarName: '',
  subNavBarName: '',
  title:''
}

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
  mutations
}
