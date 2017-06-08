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

// =============================手机端追溯-种植=======================
// const popNew = () => import('../webapp/webapp/public/popNew.vue')

// routes = routes.concat(phoneRouters.router)

export function createRouter () {
    return new Router({
        mode: 'history',
        scrollBehavior: () => ({ y: 0 }),
        routes: [{
            path: '/',
            component: CreateAuthView(index),
            children: [
                { path: '', component: CreateAuthView(home) }
            ]
        },
        {
            path: '/index',
            component: CreateAuthView(index),
            children: [
                { path: 'home', component: CreateAuthView(home) },
                {
                    path: 'message/:model',
                    component: CreateTableDataView(basic),
                    // 需要登录才能进入此路由
                    meta: {
                        auth: true
                    }
                },
                { path: 'home', component: CreateAuthView(home) },
                { path: 'company', component: CreateAuthView(company) },
                { path: 'question', component: CreateAuthView(question) },
                { path: 'set', component: CreateAuthView(set) },
                { path: 'test', component: CreateAuthView(test) },
                { path: 'help', component: CreateAuthView(help) },
                { path: 'ondone', component: CreateAuthView(ondone) },
                { path: 'details/:model/:id', component: CreateAuthView(details) }
            ]
        },
        { path: '/404', component: CreateAuthView(notFound) },
        { path: '/403', component: CreateAuthView(Role403) },
        { path: '/P/login', component: CreateAuthView(login) },
        { path: '/protocol', component: CreateAuthView(protocol) }
        // ,
        // { path: '/popNew', component: CreateAuthView(popNew) }
        ]
    })
}
// =======
// routes = routes.concat(
//     pcRouter(CreateAuthView, CreateTableDataView)
// )

// export function createRouter () {
//     return new Router({
//         mode: 'history',
//         scrollBehavior: () => ({ y: 0 }),
//         routes: routes
//     })
// }
// >>>>>>> 52a84540f97c2fbc4340a23c35a119ca493c2875
