/**
* 路由
*/
import Vue from 'vue'
import Router from 'vue-router'
import phoneRouters from './phoneRouters.js'

Vue.use(Router)

const CreateAuthView = component => () => import('../views/CreateAuthView').then(m => m.default(component))

// =============================顶层组件====================================
// ---------------------------最顶层组件----------------------------------
const index = () => import('../views/index.vue')
const Role403 = () => import('../views/403.vue') // 403
const notFound = () => import('../views/404.vue') // 404
const login = () => import('../views/login.vue') // 登录
const protocol = () => import('../views/protocol.vue') // 协议
const basic = () => import('../page/plant-basic/basic.vue') // 基础信息管理
const details = () => import('../page/plant-details/details.vue') // 批次详情页

// =============================头部导航条按钮跳转=======================
const question = () => import('../components/top/question.vue') // 问题反馈
const home = () => import('../components/top/home.vue') // 首页
const set = () => import('../components/top/set.vue') // 设置
const test = () => import('../components/top/user.vue') // test用户
const company = () => import('../components/top/company.vue') // company公司
const help = () => import('../components/top/help.vue') // help帮助文档
const ondone = () => import('../components/top/ondone.vue') // ondone未完成图片


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
                component: CreateAuthView(basic),
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
    ]
  })
}