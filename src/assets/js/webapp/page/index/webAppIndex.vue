/*
* 头部组件
* @description 
* @author 舒丹彤
* @date 2017/6/6
*/

<template>
	<div class="appWrap">
		<app-header @toggle="showsider" :settitle=settitle>
        </app-header>
		<sider-bar :menus='menus' :show="show" @hidetoggle="hidesider" @children-info="getinfo"></sider-bar>
		<router-view></router-view>
	</div>
</template>

<script>
import {mapState} from 'vuex'
import appHeader from '../../public/header.vue'
import siderBar from '../../public/siderBar.vue'
import appmenu from '../../page/index/appmenu.js'
export default {
    name: 'appIndex',
    data () {
        return {
            menus: appmenu,
            show: false,
            settitle: ''
        }
    },
    methods: {
        showsider () {
            this.show = true
        },
        hidesider () {
            this.show = false
        },
        getinfo (sub) {
            this.settitle = sub
        }
    },
    mounted () {
    },
    computed: {
        settitle () {
            return this.settitle
        }
    },
    components: {
        appHeader,
        siderBar
    }
}
</script>


<style lang='sass'>
	.appWrap{
		width: 100%;
		/*height: 100%;*/
		overflow: scroll;
	}
</style>
