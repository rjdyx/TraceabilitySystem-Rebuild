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
//---------------------------基础信息管理----------------------------------
const basic = resolve => {
    require.ensure(['../page/plant-basic/basic.vue'], () =>{ 
        resolve(require('../page/plant-basic/basic.vue'));
    }, 'basic');
};
//---------------------------基础信息管理----------------------------------
//const middle = resolve => {
//  require.ensure(['../page/middle/middle.vue'], () =>{
//      resolve(require('../page/middle/middle.vue'));
//  }, 'middle');
//};

const routes = [
    {
        path: '/',
        component: index,
        children:[
//       {
//           path: '',
////           alias: '',
//           name:'middle',
//           component:middle,
////           meta:{requiresAuth: true}
//       },
                  {
                      path:'',
                      name:'plant-basic',
                      component:basic
                  },
        ]
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