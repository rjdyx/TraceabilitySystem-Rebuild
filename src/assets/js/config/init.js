require('./require')
import Vue from 'vue'
/**
 * some global init
 */

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
