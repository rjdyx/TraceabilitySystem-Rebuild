
/**
* js库初始化
*/
import Vue from 'vue'
require('babel-polyfill') // 解决手机端uc浏览器、qq浏览器和微信浏览器无法使用部分ES6语法
require('animate.css') // 动画css插件

// 滚动条
import ScrollBar from 'vue2-scrollbar'
Vue.component('vue-scrollbar', ScrollBar)
require('vue2-scrollbar/dist/style/vue2-scrollbar.css')

require('./element-ui')
// require('./i18n')

// 注册全局组件
// Vue.component('passport-clients', require('components/passport/Clients.vue'))

// 注册自定义指令
import directive from '../directive/directive.js'
Object.keys(directive).forEach(k => Vue.directive(k, directive[k]()))

// 注册全局方法
import utils from '../utils/utils'
import easyAjax from '../utils/easyAjax'
Vue.use(utils)
Vue.use(easyAjax)

// 实例化Vue的filter
import filters from '../filters/filters.js'
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))
