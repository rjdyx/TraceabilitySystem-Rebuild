// element ui的自定义表单验证
// 手机和固话验证
exports.phone = (rule, value, callback, source, options) => {
    if (rule.required) {
        if (value !== '' && value !== null) {
            let bol = (value.length === 11 && /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(value)) || (value.length === 12 && /^(([0+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/.test(value))
            if (!bol) {
                callback(new Error('请输入正确的联系方式'))
            } else {
                callback()
            }
        } else {
            callback(new Error('请输入联系方式'))
        }
    } else {
        if (value !== '' && value !== null) {
            let bol = (value.length === 11 && /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(value)) || (value.length === 12 && /^(([0+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/.test(value))
            if (!bol) {
                callback(new Error('请输入正确的联系方式'))
            } else {
                callback()
            }
        } else {
            callback()
        }
    }
}
// 重名验证
exports.reCheck = (rule, value, callback, source, options) => {
    if (value !== '') {
        var par
        if (rule.id !== undefined) {
            par = {field: rule.field, value: value, id: rule.id}
        } else {
            par = {field: rule.field, value: value}
        }
        axios.get(('/api/util/check/' + rule.url), {params: par})
        .then((responce) => {
            if (responce.data === 'false') {
                callback(new Error(rule.message === undefined ? '名称重复' : rule.message))
            } else {
                callback()
            }
        })
    }
}
// 验证数字（包含小数）
exports.reNumber = (rule, value, callback, source, options) => {
    if (value !== '' && value !== undefined && value !== null) {
        if (/^([0-9])+(\.[0-9]+)?$/.test(value)) {
            if (value === '0') {
                callback(new Error('请输入大于0数字'))
            } else {
                if (rule.getMax !== undefined) {
                    if (parseInt(value) > parseInt(rule.getMax)) {
                        callback(new Error(rule.getMessage))
                    } else {
                        callback()
                    }
                } else if (rule.getMin !== undefined) {
                    if (parseInt(value) < parseInt(rule.getMin)) {
                        callback(new Error(rule.getMessage))
                    } else {
                        callback()
                    }
                } else if (rule.getMiddle !== undefined) {
                    if (parseInt(value) <= parseInt(rule.max) && parseInt(value) >= parseInt(rule.min)) {
                        callback()
                    } else {
                        callback(new Error(rule.getMessage))
                    }
                } else {
                    callback()
                }
            }
        } else {
            callback(new Error('请输入大于0数字'))
        }
    } else {
        callback()
    }
}
// 验证整数
exports.reInteger = (rule, value, callback, source, options) => {
    console.log(6666)
    if (value !== '' && value !== undefined && value !== null) {
        if (/^\d+$/.test(value)) {
            if (value === '0') {
                callback(new Error('请输入大于0整数'))
            } else {
                if (rule.getMax !== undefined) {
                    if (parseInt(value) > parseInt(rule.getMax)) {
                        callback(new Error(rule.getMessage))
                    } else {
                        callback()
                    }
                } else {
                    callback()
                }
            }
        } else {
            callback(new Error('请输入整数'))
        }
    } else {
        callback()
    }
}
// 验证时间
exports.reDate = (rule, value, callback, source, options) => {
    if (rule.aa !== undefined) {
        callback()
    } else {
        if (JSON.stringify(value) === '{}') {
            callback(new Error(rule.message))
        } else {
            if (rule.lastDate) {
                callback(new Error(rule.message))
            } else {
                callback()
            }
        }
    }
}
