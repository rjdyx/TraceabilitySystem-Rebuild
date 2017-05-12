/**
* httpÇëÇó¹ýÂË
*/

require('./require')
import router from '../route/routers.js'

axios.defaults.headers.common = {
    'X-CSRF-TOKEN': Laravel.csrfToken,
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
    // console.log(error.response.status)
    if (error.response.status === 401) {
        router.replace({
            path: '/login',
            query: {}
        })
    }
    return Promise.reject(error)
})
