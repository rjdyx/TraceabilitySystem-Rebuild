/**
* 路由
*/
import Vue from 'vue'
import Router from 'vue-router'
// import phoneRouters from './phoneRouters.js'

Vue.use(Router)

const CreateAuthView = (component, title) => () => import('../views/CreateAuthView').then(m => m.default(component, title))
const CreateTableDataView = (component, title) => () => import('../views/CreateTableDataView').then(m => m.default(component, title))

import { pcRouter } from './app'

let routes = []

routes = routes.concat(
    pcRouter(CreateAuthView, CreateTableDataView)
)

export function createRouter () {
    return new Router({
        mode: 'history',
        scrollBehavior: () => ({ y: 0 }),
        routes: routes
    })
}
