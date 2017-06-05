export default function createAuthView (component) {
  return {

    async asyncData ({ store, route}) {
      if(route.path === '/P/login') {
        return store.dispatch('FETCH_TOKEN_AND_KIT')
      }else {
        return store.dispatch('FETCH_TOKEN_AND_ROLES')
      }
    },

    title: '生之园',

    render (h) {
      return h(component)
    }
  }
}
