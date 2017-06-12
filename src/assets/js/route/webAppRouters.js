// webApp的路由

const appIndex = resolve => {
    require.ensure(['../webapp/page/index/webAppIndex.vue'], () => {
        resolve(require('../webapp/page/index/webAppIndex.vue'))
    }, 'appIndex')
}

export default {
    routers: [
        {
            path: '/appIndex',
            component: appIndex,
            name: appIndex
        }
    ]
}
