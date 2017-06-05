import { createApp } from './app'

const isDev = process.env.NODE_ENV !== 'production'

// 这个函数由`bundleRenderer`调用
// 我们在这里执行数据预获取，以此确定我们程序的state，然后才真正开始渲染
// 由于数据获取是异步的，这个函数返回的是一个resolve了app实例的Promise对象
export default context => {
  return new Promise((resolve, reject) => {
    const s = isDev && Date.now()
    const { app, router, store } = createApp()

    // 设置路由的路径
    router.push(context.url)
    store.commit('SET_COOKIES', context.cookies)

    // 等路由执行完所有的同步数据钩子
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      // 无匹配
      if (!matchedComponents.length) {
        reject({ code: 404 })
      }
      // 对路由匹配到的组件，调用它的数据获取钩子
      // 数据预获取钩子会执行store的action并返回一个Promise对象
      Promise.all(matchedComponents.map(component => {
        return component.asyncData && component.asyncData({
          store,
          route: router.currentRoute
        })
      })).then(() => {
        isDev && console.log(`data pre-fetch: ${Date.now() - s}ms`)
        // 数据预获取成功后，store中已经包含我们需要的所有在页面上渲染的数据
        // 将state暴露给context，这样浏览器端的store便能从中获取数据，
        // 这些数据来源于服务器端，因此无需再由浏览器端重新获取数据
        context.state = store.state
        resolve(app)
      }).catch(reject)
    }, reject)
  })
}
