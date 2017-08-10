<template>
	<div class="wrap">
		<my-header :navbars="navbars"></my-header>
		<sider-bar :menus='menus' :show="show" ></sider-bar>
		<router-view></router-view>
	</div>
</template> 

<script>
import MyHeader from '../components/public/header.vue'
import SiderBar from '../components/public/sider-bar.vue'
import menu from '../page/index/menu.js'
export default {
    name: 'Index',
    data () {
        return {
            navbars: [
                {
                    name: '首页',
                    src: '/public/images/home.png',
                    path: '/index/home'
                },
                {
                    name: window.Roles.name,
                    src: '/public/images/test.png',
                    path: '/index/test'
                },
                {
                    name: '帮助',
                    src: '/public/images/help.png',
                    path: '/index/help'
                },
                {
                    name: '设置',
                    src: '/public/images/set.png',
                    path: '/index/set'
                },
                {
                    name: '问题反馈',
                    src: '/public/images/question.png',
                    path: '/index/question'
                }
            ],
            menus: menu,
            show: true
        }
    },
    components: {
        MyHeader,
        SiderBar
    },
    methods: {
        getForeach (datas) {
            var roleData = {}
            if (window.Roles.permissions !== undefined) {
                roleData = window.Roles.permissions.two
            }
            for (let i in datas) {
                if (datas[i].key !== 'admin') {
                    datas[i].role = roleData[datas[i].key] === undefined ? 0 : 1
                    for (let j in datas[i].childrenKey) {
                        datas[i].children[j].role = roleData[datas[i].key] === undefined ? 0 : roleData[datas[i].key][datas[i].childrenKey[j]] === undefined ? 0 : 1
                    }
                } else {
                    datas[i].role = roleData !== 'admin' ? 0 : 1
                    for (let j in datas[i].childrenKey) {
                        datas[i].children[j].role = roleData !== 'admin' ? 0 : 1
                    }
                }
            }
            return datas
        }
    },
    mounted () {
        this.menus = this.getForeach(this.menus)
        if (!window.isPC) {
            this.$router.push('/appIndex')
        }
    },
    created () {
    }
}
</script>

<style lang="sass">
	@import "../../sass/theme/theme.scss";
	// @import "../../sass/_percent.scss";
	.wrap {
		width: 100%;
        height: 100%;
		overflow: hidden;
		min-width: 1024px;
	}
</style>
