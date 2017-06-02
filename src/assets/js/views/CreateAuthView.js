// This is a factory function for dynamically creating root-level list views,
// since they share most of the logic except for the type of items to display.
// They are essentially higher order components wrapping ItemList.vue.
export default function createAuthView (component) {
  return {

    asyncData ({ store, route}) {
      if(route.path === '/P/login') {
        return store.dispatch('FETCH_TOKEN')
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
