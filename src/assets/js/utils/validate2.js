// 联系方式验证
exports.phone = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入联系方式'))
  } else {
    var bol = (value.length === 11 && /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(value)) || (value.length === 12 && /^(([0+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/.test(value))
    if (!bol) {
      callback(new Error('请输入正确的联系方式'))
    } else {
      callback()
    }
  }
}
// 重名验证
exports.reCheck = (rule, value, callback, source, options) => {
  console.log(this)
  // if (value !== '') {
  //   let par = {field: rule.field, value: value}
  //   axios.get(('/api/util/check/' +), {params: par})
  //     .then((responce) => {
  //       if (responce.data === 'false') {
  //         callback(new Error('名字重复'))
  //       } else {
  //         callback()
  //       }
  //     })
  // }
}
