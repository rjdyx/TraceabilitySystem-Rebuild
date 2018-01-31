import Vue from 'vue'
import VueRouter from 'vue-router'
import * as elementComponent from '../../src/assets/js/config/element-ui.js'
import VueProgressBar from 'vue-progressbar'
import { destroyVM, createTest, createVue, triggerEvent } from './util.js'
import login from '../../src/assets/js/views/login.vue'
import axios from 'axios'
import vueLoading from 'vue-loading-template'
import sinon from 'sinon'
import chai from 'chai'
import jquery from 'jquery'
import jasmineAjax from 'jasmine-ajax'

var expect = chai.expect
Vue.use(VueProgressBar, {
    color: 'blue',
    height: '2px'
})
Vue.use(VueRouter)

describe('login', () => {
    let originalTimeout
    beforeEach(() => {
        // originalTimeout = window.jasmine.DEFAULT_TIMEOUT_INTERVAL
        // window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000
    })
    // afterEach(() => {
    //     window.jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout
    // })
    const Constructor = Vue.extend(login)
    const vm = new Constructor().$mount()
    const inputElm = vm.$el.querySelectorAll('.el-input input')
    it('验证码', done => {
        inputElm[2].value = '6130'
        inputElm[2].blur()
        setTimeout(() => {
            $.ajax('http://www.teaTraceSystem.com/kit-check', {
                data: {kit: '6130'},
                type: 'GET',
                crossDomain: true,
                dataType: 'jsonp',
                success: function (response) {
                    console.log(1234)
                    console.log(response)
                    expect(response.data).to.be.a('number')
                    done()
                },
                error: function (response) {
                    console.log('验证码error')
                }
            })
        }, 500)
    })
    it('输入框', done => {
        let submitBtn = vm.$el.querySelector('.loginBtn')
        console.log(inputElm[1])
        console.log(inputElm[0])
        submitBtn.click()
        setTimeout(() => {
            $.ajax('http://www.teaTraceSystem.com/login', {
                data: {
                    name: 'sdt',
                    password: '000000',
                    code: '6719'
                },
                type: 'POST',
                // crossDomain: true,
                // dataType: 'jsonp',
                // jsonpCallback: '',
                success: function (response) {
                    console.log(1111)
                    console.log(response)
                    expect(response.data).to.be.a('number')
                    done()
                },
                error: function (response) {
                    console.log('error')
                }
            })
        }, 500)
    })
    it('form item test', done => {
        let vm
        vm = createVue({
            template: `
                <el-form ref="form" :model="form" :rules="rules">
                  <el-form-item label="请输入" required>
                      <el-form-item prop="name" ref="name">
                        <el-input type="text" placeholder="请输入用户名或注册邮箱或电话" v-model="name" style="width: 100%;"></el-input>
                      </el-form-item>
                      <el-form-item prop="password" ref="password">
                        <el-input type="text" placeholder="请输入密码" v-model="form.password" style="width: 100%;"></el-input>
                      </el-form-item>
                  </el-form-item>
                </el-form>
            `,
            data () {
                return {
                    form: {
                        name: '',
                        date2: ''
                    },
                    rules: {
                        name: [
                            { required: true, message: '请输入用户名', trigger: 'change' }
                        ],
                        password: [
                            { required: true, message: '请输入密码', trigger: 'change' }
                        ]
                    }
                }
            },
            methods: {
                setValue () {
                    this.name = ''
                    this.password = ''
                }
            }
        }, true)
        const spyBlur = sinon.spy()
        vm.$refs.name.$on('blur', spyBlur)
        vm.$refs.password.$on('blur', spyBlur)
        vm.$refs.form.validate((valid) => {
            console.log(valid)
            expect(valid).to.not.true
            done()
        })
    })
})
