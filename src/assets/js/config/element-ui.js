/**
* 按需引用饿了么组件
*/

// 注册element-ui全局组件
import Vue from 'vue'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import locale from 'element-ui/lib/locale'
import 'element-ui/lib/theme-default/index.css'
// 设置语言
switch (require('projectRoot/env.js').app_lang) {
case 'zh-CN':
    locale.use(zhLocale)
    break
case 'en':
    locale.use(enLocale)
    break
default:
    locale.use(zhLocale)
}
/**
* 饿了么组件按需引用组件有两种方式，其中Vue.use可能会导致属性冲突，故不推荐使用
*/
import * as elements from './elements'
Object.keys(elements).forEach(function (component) {
    Vue.component(elements[component].name, elements[component])
})

// 这两个无法用上面的循环，否则报错
import {
    Loading,
    MessageBox
} from 'element-ui'

Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$message = elements['Message']
