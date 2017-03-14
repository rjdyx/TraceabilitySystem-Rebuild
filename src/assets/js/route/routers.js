/**
 * 路由
 */
import Router from 'vue-router'
Vue.use(Router)

//=============================顶层组件====================================
//---------------------------最顶层组件----------------------------------
const index = resolve => {
    require.ensure(['../views/index.vue'], () =>{
        resolve(require('../views/index.vue'));
    }, 'index');
};
//---------------------------404----------------------------------
const notFound = resolve => {
    require.ensure(['../views/404.vue'], () =>{
        resolve(require('../views/404.vue'));
    }, 'fourOFour');
};


const routes = [
    

    {
        path: '/',
        name: 'index',
        component: index
    },
    {
        path: '/404',
        name: 'notFound',
        component: notFound
    }
    
];

export default new Router({
    routes
});