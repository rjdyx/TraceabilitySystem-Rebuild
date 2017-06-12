export default function createAuthView (component, title = '') {
    return {

        async asyncData ({ store, route }) {
            if (route.path === '/P/login') {
                return store.dispatch('FETCH_TOKEN_AND_KIT')
            } else {
                return store.dispatch('FETCH_TOKEN_AND_ROLES')
            }
        },

        title: title,

        render (h) {
            return h(component)
        }
    }
}
