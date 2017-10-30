import BasicModel from '../../../src/assets/js/page/basicModel/basic-model.vue'
import message from '../../../src/assets/js/page/plant-basic/message.js'
import * as elementComponent from '../../../src/assets/js/config/element-ui.js'
import { destroyVM, createTest, createVue } from '../util'
import store from '../../../src/assets/js/vuex/index.js'
var expect = require('chai').expect

describe('basicModel.vue', () => {
    // let vm
    // afterEach(() => {
    //     destroyVM(vm)
    // })
    // it('基础信息管理', () => {
    //     vm = createTest(BasicModel, {
    //         models: message['plantBase']
    //     }, true)
    // })
    it('基础信息管理', () => {
        const Constructor = Vue.extend(BasicModel)
        const vm = new Constructor().$mount()
        vm.props.models = message['plantBase']
        expect(vm.$el.querySelector('.title h2').textContent).to.equal('基础信息管理')
    })
})
