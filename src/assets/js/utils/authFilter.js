const { fetchRoles } = require('../api')

const pre = '/index/'
const pre2 = '/index/message/'
const Excepts = ['/', '/index', pre + 'set', pre + 'test', pre + 'help', pre + 'question', pre + '404', pre + 'ondone']
const Admins = [pre2 + 'rightsOperate', pre2 + 'settleOperate', pre2 + 'usersOperate', pre2 + 'logOperate']
const any = ['/protocol', '/forget']

const isEmptyObject = (e) => {
    for (let t in e) return false
    return true
}

/**
 * 权限过滤
 */
const authFilter = (to, store) => {
    let check = false
    let roles = JSON.parse(store.state.auth.roles)
    if (isEmptyObject(roles)) {
        let except = to.matched.some((item, index, array) => {
            if (item.path !== '/P/login' && any.indexOf(to.path) === -1) return true
        })
        if (except) {
            return false
        }
    }
    return true
}

/**
 * 浏览器端权限过滤
 */
const clientToLogin = (to, store, next) => {
    return authFilter(to, store) ? next() : next({path: '/P/login'})
}

/**
 * 服务器端权限过滤
 */
const serverToLogin = (path, store, router) => {
    fetchRoles(store.state.auth.cookies)
        .then((rolesRes) => {
            let roles = eval('(' + rolesRes.data + ')')
            if (roles.name !== undefined && path !== '/P/login') {
                router.push(path)
            } else {
                router.push('/P/login')
            }
        })
        .catch((error) => {
            console.log(error)
            router.push(path)
        })
}

export { authFilter, clientToLogin, serverToLogin }
