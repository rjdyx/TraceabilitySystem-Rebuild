import Vue from 'vue'
/**
* 全局注册通用方法
*/
export
default {
    install () {
        const env = require('../../../../env')
        // let host = env.app_url;
        let host = ''
        /**
        * 自动生成完整的前台url
        *
        * @param url {string}
        * @param type {string} url的类型，c为接口类型，p为视图类型
        * @returns {string}
        */
        Vue.prototype.$homeUrl = (url, type = 'c') => {
            let regx = /^\/{1,}/g
            url = url.replace(regx, '')
            if (type === 'c' || type === 'C') {
                return host + '/home/c/' + url
            }
            if (type === 'p' || type === 'P') {
                return host + '/home/p/' + url
            }
        }

        /**
        * 自动生成完整的后台url
        *
        * @param url {string}
        * @returns {string}
        */
        Vue.prototype.$adminUrl = (url) => {
            let regx = /^\/{1,}/g
            url = url.replace(regx, '')
            return host + '/api/' + url
        }

        /**
        * 自动生成完整的手机端url
        *
        * @param url {string}
        * @returns {string}
        */
        Vue.prototype.$wapUrl = (url) => {
            let regx = /^\/{1,}/g
            url = url.replace(regx, '')
            return host + '/wap/' + url
        }

        /**
        * 比较器
        * @param proto
        * @returns {function()}
        */
        function compare (proto) {
            return (ob1, ob2) => {
                return ob1[proto] - ob2[proto]
            }
        }

        /**
        * 根据传过来的属性参数对对象数组继续逆序排序
        * @param arrObj 对象数组
        * @param proto 对象的属性
        * @returns {Array.<T>}
        */
        Vue.prototype.$reverseObj = (arrObj, proto) => {
            return arrObj.sort(compare(proto)).reverse()
        }

        /**
        * 根据传过来的属性参数对对象数组继续正序排序
        * @param arrObj 对象数组
        * @param proto 对象的属性
        * @returns {Array.<T>}
        */
        Vue.prototype.$sortObj = (arrObj, proto) => {
            return arrObj.sort(compare(proto))
        }

        /**
        * 把对象变成url参数
        * @param object
        * @returns {string}
        */
        Vue.prototype.$objectToParam = (object) => {
            let params = ''
            Object.keys(object).forEach(k => params += k + '=' + object[k] + '&')
            return params
        }

        /**
        * 把对象里值为null或空字符串的属性删除
        * @param object
        * @param except 这里面的属性的值即使是null或空字符串也不删除
        * @returns {string}
        */
        Vue.prototype.$filterObj = (object, except = []) => {
            for (let proto of Object.keys(object)) {
                if ((!object[proto] || object[proto] === '') && !except.includes(proto)) delete object[proto]
            }
            return object
        }
        /**
        *
        * 数据转换
        *
        * @param url
        * @returns ret
        */
        Vue.prototype.$conversion = (arr, ret, state) => {
            if (state === 1) {
                for (let item in arr) {
                    for (let index in arr[item]) {
                        for (let key in ret) {
                            ret[key][index] = arr[item][index][ret[key][index]]
                        }
                    }
                }
            } else {
                for (let item in arr) {
                    for (let index in arr[item]) {
                        for (let key in arr[item][index]) {
                            if (ret[index] === arr[item][index][key]) {
                                ret[index] = key
                            }
                        }
                    }
                }
            }
            return ret
        }
        /**
         *
         * 从列表获取下拉框数据
         *
         * @param url
         * @returns ret
         */
        Vue.prototype.$selectData = (url, ret, arr) => {
            var options = {}
            var optionArr = {}
            var arrId = []
            if (arr[2]) {
                for (let key in ret) {
                    options['label'] = ret[key][arr[1]]
                    options['value'] = ret[key][arr[0]]
                    if (arrId.indexOf(ret[key][arr[0]]) === -1) {
                        arrId[key] = ret[key][arr[0]]
                        optionArr[key] = options
                    }
                    options = {}
                }
                return optionArr
            }
        }
        /**
         *
         * 组合图片路径
         *
         * @param url
         * @returns {*}
         */
        Vue.prototype.$img = (url, flag = true) => {
            if (url === undefined) {
                return
            }
            if (url.indexOf('base64') > 0) {
                return url
            }
            let regx = /^\/{1,}/g
            url = url.replace(regx, '')
            if (flag) {
                return (env.is_server ? env.app_ano_url : '') + '/public/' + url
            } else {
                return (env.is_server ? env.app_ano_url : '') + '/' + url
            }
        }
        /**
         *
         * 表格样式存储
         *
         * @param url
         * @returns {*}
         */
        Vue.prototype.$eltable = (ret) => {
            if (ret.length !== undefined) {
                for (let key in ret) {
                    if (ret[key].unit !== undefined) {
                        for (let index in ret[key]) {
                            if (index === 'area' || index === 'amount') {
                                ret[key][index + '_unit'] = ret[key][index] + ret[key].unit
                            }
                        }
                    }
                }
            } else {
                if (ret.unit !== undefined) {
                    for (let key in ret) {
                        if (key === 'area' || key === 'amount') {
                            ret[key + '_unit'] = ret[key] + ret.unit
                        }
                    }
                }
            }
            return ret
        }
        /**
         *
         * 新增编辑下拉框数据存储公共方法
         * @param url
         * @returns {*}
         */
        Vue.prototype.$addAndEditSelectMethod = (arr) => {
            var selectArr = []
            var selectUrl
            var selectData
            for (let key in arr) {
                if (arr.length === 5) {
                    if (key === '0') {
                        selectUrl = arr[key]
                    } else if (key === '1') {
                        selectData = arr[key]
                    } else {
                        selectArr.push(arr[key])
                    }
                }
                if (arr.length === 4) {
                    if (key === '0') {
                        selectUrl = arr[key]
                    } else {
                        selectArr.push(arr[key])
                    }
                }
            }
            return {'selectArr': selectArr, 'selectUrl': selectUrl, 'selectData': selectData}
        }
        /**
         *
         * 用2替换
         * @param ret
         * @returns ret
         */
        Vue.prototype.$getProductInfo = (ret) => {
            for (let key in ret) {
                for (let item in ret[key]) {
                    if (item.indexOf('2') !== -1) {
                        if (ret[key][item] !== null) {
                            let i = item.replace('2', '')
                            ret[key][i] = ret[key][item]
                        }
                    }
                }
            }
            return ret
        }
        /**
         *
         * 获取多批次列表
         * @param ret
         * @returns ret
         */
        Vue.prototype.$getCheckSelect = (ret, arr) => {
            if (arr[2] === 'check') {
                var options = {}
                var optionArr = []
                var arrId = []
                for (let key in ret) {
                    options['key'] = ret[key][arr[0]]
                    options['value'] = ret[key][arr[1]]
                    if (arrId.indexOf(ret[key][arr[0]]) === -1) {
                        arrId[key] = ret[key][arr[0]]
                        optionArr[key] = options
                    }
                    options = {}
                }
                return ['check', optionArr]
            } else {
                var arr1 = []
                var arr2 = []
                var optVal = []
                var optKey = []
                for (let key in ret) {
                    arr1[key] = ret[key][arr[0]]
                    arr2[key] = ret[key][arr[1]]
                }
                optKey.push(arr1)
                optVal.push(arr2)
                return [optKey, optVal]
            }
        }
        /**
         *
         * 隐藏值与提交值转换
         * @param ret
         * @returns ret
         */
        Vue.prototype.$changeSubmit = (submitVal, hideVal) => {
            var defaultVal = {}
            for (let index of Object.keys(submitVal)) {
                defaultVal[index] = submitVal[index]
            }
            for (let item of Object.keys(hideVal)) {
                defaultVal[item] = hideVal[item]
            }
            return defaultVal
        }
        /**
         *
         * 编辑转化及存储隐藏值
         * @param ret，arr
         * @returns ret
         */
        Vue.prototype.$changeArrBox = (ret, arr) => {
            let setArr = []
            let hideVal = {}
            for (let key in arr) {
                hideVal[key] = ret[key]
                setArr.push(ret[arr[key]])
                ret[key] = setArr
                setArr = []
            }
            return [ret, hideVal]
        }
        /**
         *
         * 相互转换
         * @param ret, arr
         * @returns ret
         */
        Vue.prototype.$changeMutual = (ret, arr, pos) => {
            if (pos === 0) {
                for (let item in arr) {
                    for (let index in arr[item]) {
                        for (let key in ret) {
                            if (key === index) {
                                ret[key] = arr[item][index][ret[key]]
                            }
                        }
                    }
                }
            } else {
                for (let item in arr) {
                    for (let index in arr[item]) {
                        for (let key in arr[item][index]) {
                            if (ret[index] === arr[item][index][key]) {
                                ret[index] = key
                            }
                        }
                    }
                }
            }
            return ret
        }
        /**
         *
         * 手机端区分时间函数
         * @param nS(时间戳)
         * @returns date(****-**-**)
         */
        Vue.prototype.$getLocalTime = (nS) => {
            var dateStr = new Date(parseInt(nS)).toLocaleDateString()
            dateStr = dateStr.replace(/年|月/g, '/').replace(/日/g, '')
            var month = (new Date(dateStr)).getMonth() + 1
            var year = (new Date(dateStr)).getFullYear()
            var date = (new Date(dateStr)).getDate()
            if (month < 10) {
                month = '0' + month
            }
            if (date < 10) {
                date = '0' + date
            }
            return year + '-' + month + '-' + date
        }
        /**
         *
         * 获取多数据下拉框
         * @param ret(数据对象)
         * @returns arr（数据数组）
         */
        Vue.prototype.$selectDataArr = (ret, arrBox, message) => {
            let arr = [{key: '', value: message}]
            let obj = {}
            obj['value'] = ''
            for (let index in ret) {
                for (let item in ret[index]) {
                    if (item === 'id') {
                        obj['key'] = ret[index][item]
                    } else {
                        obj['value'] += arrBox[item] + ':' + ret[index][item] + ',  '
                    }
                }
                arr.push(obj)
                obj = {}
                obj['value'] = ''
            }
            return arr
        }
        /**
         *
         * 以逗号截断,区分字符对象
         * @param ret(数据对象)
         * @returns arr（数据数组）
         */
        Vue.prototype.$setComma = (ret, dataArr) => {
            for (let item in ret) {
                for (let i in ret[item]) {
                    if (dataArr.indexOf(i) !== -1) {
                        if (ret[item][i] !== '') {
                            let t = ret[item][i].split(',')
                            ret[item][i] = t[0]
                            ret[item][i + 'imgs'] = t[1]
                        }
                    }
                }
            }
            return ret
        }
        /**
         *
         * 新增编辑提交前特殊处理
         * @param url(地址)
         * @param ret（提交值）
         */
        Vue.prototype.$specialProcess = (url, ret) => {
            if (url.indexOf('colect-process') !== -1) {
                if (parseInt(ret['bulk_tea_weight']) > parseInt(ret['raw_tea_weight'])) {
                    return {result: 'false', message: '散茶重量不能大于毛茶重量'}
                }
            }
        }
        /**
         *
         * 转化中国标准时间
         * @param date(中国标准时间)
         *
         */
        Vue.prototype.$changeDateTime = (date) => {
            var year = date.getFullYear()
            var month = date.getMonth() + 1
            var day = date.getDate()
            var hour = date.getHours()
            var minute = date.getMinutes()
            var second = date.getSeconds()
            if (month < 10) {
                month = '0' + month
            }
            if (day < 10) {
                day = '0' + day
            }
            if (hour < 10) {
                hour = '0' + hour
            }
            if (minute < 10) {
                minute = '0' + minute
            }
            if (second < 10) {
                second = '0' + second
            }
            return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second
        }
        Vue.prototype.Roles = {}
    }
}
