import Vue from 'vue'
import VueRouter from 'vue-router'
import * as elementComponent from '../../src/assets/js/config/element-ui.js'
import VueProgressBar from 'vue-progressbar'
import { destroyVM, createTest, createVue, triggerEvent } from 'util'
import login from '../../src/assets/js/views/login.vue'
import axios from 'axios'

var expect = require('chai').expect
Vue.use(VueProgressBar, {
    color: 'blue',
    height: '2px'
})
Vue.use(VueRouter)

describe('login', () => {
    // beforeEach(() => {
    const Constructor = Vue.extend(login)
    const vm = new Constructor().$mount()
    // })
    var originalTimeout
//     beforeEach(() => {
//         originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
//         jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000
//     })
//     it('异步请求应该返回一个对象', (done) => {
//         setTimeout(() => {
//             axios.get('http://www.teaTraceSystem.com/kit-check').then((response) => {
//                 if (response) {
//                     console.log(response)
//                     expect(response).to.be.a('Number')
//                     done()
//                 }
//             })
//         }, 1000)
//     })
//     afterEach(() => {
//         jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout
//         destroyVM(vm)
//     })
})
