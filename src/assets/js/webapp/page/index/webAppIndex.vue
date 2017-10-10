/*
* 头部组件 
* @description 
* @author 舒丹彤 
* @date 2017/6/6
*/

<template>
	<div class="appWrap">
		<app-header @parentClick="showsider" :settitle="settitle" :homeShow="homeShow" :back="back" :growPicture="growPicture">
            <span class="left-btn" @click="showmenu" slot="menu"></span>
        </app-header>
		<sider-bar ref="siderBar" :menus='menus' :show="show" @hidetoggle="hidesider" @children-info="getinfo"></sider-bar>
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
            back: false,
            growPicture: false,
            trends: localStorage.getItem('trends')
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
        },
        showmenu () {
            this.showsider()
        },
        getForeach (datas) {
            var roleData = {}
            if (window.Roles.permissions !== undefined) {
                roleData = window.Roles.permissions.phone_url
            }
            if (roleData !== undefined) {
                for (let i in datas) {
                    for (let p in datas[i].parentUrl) {
                        if (roleData.indexOf(datas[i].parentUrl[p]) !== -1) {
                            datas[i].role = 1
                            datas[i].children[p].role = 1
                        } else {
                            datas[i].children[p].role = 0
                        }
                    }
                }
            } else {
                for (let i in datas) {
                    for (let p in datas[i].parentUrl) {
                        datas[i].role = 0
                        datas[i].children[p].role = 0
                    }
                }
            }
            return datas
        }
    },
    mounted () {
        this.menus = this.getForeach(this.menus)
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
		overflow: hidden;
        position: relative;
	}

</style>
