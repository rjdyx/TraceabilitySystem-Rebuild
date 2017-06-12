/**
* httpÇëÇó¹ýÂË
*/

export function initAxios ({ app, router, store }) {
    axios.defaults.headers.common = {
        'X-CSRF-TOKEN': store.state.auth.token,
        'X-Requested-With': 'XMLHttpRequest'
    }

    // axios
    axios.interceptors.request.use(function (config) {
        return config
    }, function (error) {
        return Promise.reject(error)
    })

    axios.interceptors.response.use(function (response) {
        return response
    }, function (error) {
        // 未登录
        if (error.response.status === 401) {
            router.replace({
                path: '/P/login',
                query: {}
            })
        }
        // 没有访问接口的权限
        if (error.response.status === 403) {
            router.replace({
                path: '/403',
                query: {}
            })
        }
        return Promise.reject(error)
    })
}
