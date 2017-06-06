const merge = require('webpack-merge')

export default function createAuthView (component) {
  return {

    async asyncData ({ store, route: {query: { url }}}) {
      return merge(
        store.dispatch('FETCH_TOKEN_AND_ROLES'), 
        store.dispatch('FETCH_TABLE_DATA', { store, route: {query: { url }}}))
    },

    title: '生之园',

    render (h) {
      return h(component)
    }
  }
}