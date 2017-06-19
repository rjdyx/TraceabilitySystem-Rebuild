
/**
* js库初始化
*/

require('babel-polyfill') // 解决手机端uc浏览器、qq浏览器和微信浏览器无法使用部分ES6语法
require('animate.css') // 动画css插件
require('./echarts.js')
require('./vux.js')

// 滚动条
import ScrollBar from 'vue2-scrollbar'
Vue.component('vue-scrollbar', ScrollBar)
require('vue2-scrollbar/dist/style/vue2-scrollbar.css')

// html字体大小设置
require('../page/phone/plant/js/fontSize.js')

// 路由插件
import VueRouter from 'vue-router'
import { ToastPlugin, ConfirmPlugin } from 'vux'
Vue.use(ConfirmPlugin)
Vue.use(VueRouter)
Vue.use(ToastPlugin)

// mint移动端插件
// import Mint from 'mint-ui'
// Vue.use(Mint)

// 路由加载插件
import VueProgressBar from 'vue-progressbar'
Vue.use(VueProgressBar, {
    color: 'blue',
    height: '2px'
})
// 注册element-ui全局组件
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CH'
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
import * as elementComponent from './element-ui.js'
/**
* 饿了么组件按需引用组件有两种方式，其中Vue.use可能会导致属性冲突，故不推荐使用
*/
Object.keys(elementComponent).forEach(function (component) {
    Vue.component(elementComponent[component].name, elementComponent[component])
})

// vue-i18n初始化
// import VueI18n from 'vue-i18n'
// 准备替换的语言
// import en from 'lang/en/en.js'
// import zhCN from 'lang/zh-CN/zh-CN.js'
// var locales = {
//     en: en,
//     'zh-CN': zhCN
// }
// // 这次插件
// Vue.use(VueI18n)
// // 设置语言
// Vue.config.lang = require('projectRoot/env.js').app_lang
// // 设置语言文件
// Object.keys(locales).forEach(function (lang) {
//     Vue.locale(lang, locales[lang])
// })
/**
* css库
*/
require('sass/index.scss')

// vux
// const vuxLoader = require('vux-loader')
// const webpackConfig = originalConfig
// module.exports = vuxLoader.merge(webpackConfig, {plugins: ['vux-ui']})
