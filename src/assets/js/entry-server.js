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

    // wait until router has resolved possible async hooks
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      // no matched routes
      if (!matchedComponents.length) {
        reject({ code: 404 })
      }
      // Call fetchData hooks on components matched by the route.
      // A preFetch hook dispatches a store action and returns a Promise,
      // which is resolved when the action is complete and store state has been
      // updated.
      Promise.all(matchedComponents.map(component => {
        return component.asyncData && component.asyncData({
          store,
          route: router.currentRoute
        })
      })).then(() => {
        isDev && console.log(`data pre-fetch: ${Date.now() - s}ms`)
        // After all preFetch hooks are resolved, our store is now
        // filled with the state needed to render the app.
        // Expose the state on the render context, and let the request handler
        // inline the state in the HTML response. This allows the client-side
        // store to pick-up the server-side state without having to duplicate
        // the initial data fetching on the client.
        context.state = store.state
        resolve(app)
      }).catch(reject)
    }, reject)
  })
}
