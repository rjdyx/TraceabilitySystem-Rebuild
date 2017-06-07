// vue-i18n初始化
import VueI18n from 'vue-i18n'
// 准备替换的语言
import en from 'lang/en/en.js'
import zhCN from 'lang/zh-CN/zh-CN.js'
var locales = {
    en: en,
    'zh-CN': zhCN
}
// 这次插件
Vue.use(VueI18n)
// 设置语言
Vue.config.lang = require('projectRoot/env.js').app_lang
// 设置语言文件
Object.keys(locales).forEach(function (lang) {
    Vue.locale(lang, locales[lang])
})