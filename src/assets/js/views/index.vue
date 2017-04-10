<template>
	<div class="wrap">
		<my-header :navbars="navbars"></my-header>
		<sider-bar :menus='menus' :show="show"></sider-bar>
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
                    src: '/public/images/home.png'
                },
                {
                    name: 'test',
                    src: '/public/images/test.png'
                },
                {
                    name: '帮助',
                    src: '/public/images/help.png'
                },
                {
                    name: '设置',
                    src: '/public/images/set.png'
                },
                {
                    name: '问题反馈',
                    src: '/public/images/question.png'
                },
                {
                    name: '退出',
                    src: '/public/images/back.png'
                }
            ],
            menus: menu,
            show: true
        }
    },
    components: {
        MyHeader,
        SiderBar
    }
}
</script>

<style lang="sass" scoped>
	// @import "../../sass/function";
	// @import "../../sass/_percent.scss";
	.wrap {
		width: 100%;
		overflow: hidden;
		min-width: 1280px;
	}
</style>
