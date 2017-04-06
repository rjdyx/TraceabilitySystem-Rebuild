import * as global from '../mutations_types'

const state = {
  navbarName: '',
  subNavBarName: '',
  tablePager: {
    current_page: 1,
    from: 0,
    last_page: 0,
    per_page: 0,
    to: 0,
    total: 0,
    next_page_url: '',
    prev_page_url: ''
  }
}
// getters
const getters = {
  tablePager: state => state.tablePager
}

// actions
const actions = {
  setPager ({ commit }, pager) {
    commit(global.SET_PAGE, { pager })
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
  /**
   * 设置分页
   */
  [global.SET_PAGE] (state, { pager }) {
    state.tablePager.current_page = pager.current_page
    state.tablePager.from = pager.from
    state.tablePager.last_page = pager.last_page
    state.tablePager.per_page = pager.per_page
    state.tablePager.to = pager.to
    state.tablePager.total = pager.total
    state.tablePager.next_page_url = pager.next_page_url
    state.tablePager.prev_page_url = pager.prev_page_url
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
