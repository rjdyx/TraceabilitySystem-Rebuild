import Vue from 'vue'
/**
 * 全局注册通用方法
 */
export default {
    install () {
         /**
         * 全局get方法
         * @param vm
         * @param url
         * @param params
         * @param resolve
         * @param reject
         */
        Vue.prototype.$dataGet = (vm, url, params) => {
            return new Promise(function (resolve, reject) {
                axios.get(vm.$adminUrl(url), {params: params})
                    .then((responce) => {
                        resolve(responce)
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
        }
        /**
         * 手机端方法
         * @param vm
         * @param url
         * @param params
         * @param resolve
         * @param reject
         */
        Vue.prototype.$dataWapGet = (vm, url, params) => {
            return new Promise(function (resolve, reject) {
                axios.get(vm.$wapUrl(url), {params: params})
                    .then((responce) => {
                        resolve(responce)
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
        }
        /**
         * 全局post方法
         * @param vm
         * @param url
         * @param ret
         * @param hasImg
         * @param hasHidden
         * @param isEdit
         */
        Vue.prototype.$dataPost = (vm, url, ret, hasImg = false, hasHidden = false, isEdit = false) => {
            return new Promise(function (resolve, reject) {
                var headers, form
                if (hasImg !== false && hasImg !== undefined) {
                    headers = {headers: {'Content-Type': 'multipart/form-data'}}
                    form = new FormData()
                    for (let key of Object.keys(ret)) {
                        if (ret[key] === '' || ret[key] === null) {
                            ret[key] = ''
                        }
                        form.append(key, ret[key])
                    }
                    if (hasHidden !== false && hasHidden !== undefined) {
                        for (let key1 of Object.keys(hasHidden)) {
                            form.append(key1, hasHidden[key1])
                        }
                    }
                    if (isEdit === true) {
                        form.append('_method', 'PUT')
                    }
                } else {
                    headers = {}
                    form = ret
                    if (hasHidden !== false && hasHidden !== undefined) {
                        for (let key1 of Object.keys(hasHidden)) {
                            form[key1] = hasHidden[key1]
                        }
                    }
                    if (isEdit === true) {
                        form['_method'] = 'PUT'
                    }
                }
                axios.post(vm.$adminUrl(url), form, headers).then((response) => {
                    resolve(response)
                })
            })
        }
    }
}
