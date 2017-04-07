exports.phone = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入号码'))
  } else {
    var bol = (value.length === 11 && /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(value)) || (value.length === 12 && /^(([0+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/.test(value))
    if (!bol) {
      callback(new Error('格式错误'))
    } else {
      callback()
    }
  }
}
