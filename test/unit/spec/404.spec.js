import Vue from 'vue'
import view404 from '../../../src/assets/js/views/404.vue'
import * as elementComponent from '../../../src/assets/js/config/element-ui.js'
var expect = require('chai').expect

describe('view404.vue', () => {
    it('should render correct contents', () => {
        const Constructor = Vue.extend(view404)
        const vm = new Constructor().$mount()
        expect(vm.$el.querySelector('.content').textContent).to.equal('404')
    })
})
