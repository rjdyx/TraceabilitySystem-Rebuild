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
                callback(new Error('名称重复'))
            } else {
                callback()
            }
        })
    }
}
// 验证数字（包含小数）
exports.reNumber = (rule, value, callback, source, options) => {
    if (value !== '') {
        if (/^(-?\d+)(\.\d+)?$/.test(value)) {
            callback()
        } else {
            callback(new Error('请输入数字'))
        }
    }
}
// 验证整数
exports.reInteger = (rule, value, callback, source, options) => {
    if (value !== '') {
        if (/^\d+$/.test(value)) {
            callback()
        } else {
            callback(new Error('请输入整数'))
        }
    }
}
// 验证时间
exports.reDate = (rule, value, callback, source, options) => {
    if (JSON.stringify(value) === '{}') {
        callback(new Error(rule.message))
    } else {
        callback()
    }
}
