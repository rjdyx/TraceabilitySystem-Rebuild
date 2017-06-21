/*
* 头部组件 
* @description 
* @author 舒丹彤 
* @date 2017/6/6
*/

<template>
	<div class="appWrap">
		<app-header @parentClick="showsider" :settitle="settitle" :homeShow="homeShow" :back="back">
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
import appfunction from '../../directive/appfunction.js'
export default {
    name: 'appIndex',
    data () {
        return {
            menus: appmenu,
            show: false,
            settitle: '',
            homeShow: false,
            back: false
        }
    },
    mixins: [appfunction],
    methods: {
        showsider () {
            this.show = true
        },
        hidesider () {
            this.show = false
        },
        getinfo (arr) {
            let header = arr[0]
            let detailname = arr[1]
            localStorage.setItem('tit', header)
            localStorage.setItem('dename', detailname)
        }
    },
    mounted () {
    },
    computed: {
    },
    components: {
        appHeader,
        siderBar
    },
    watch: {
    }
}
</script>


<style lang='sass'>
	.appWrap{
		width: 100%;
		height: 100%;
		/*overflow: scroll;*/
	}
</style>
