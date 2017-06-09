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
import { menu } from '../page/index/menu.js'
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
                    name: JSON.parse(this.$store.state.auth.roles).name,
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
            show: true
        }
    },

    computed: {
        menus () {
            let roleData = {}
            let roles = JSON.parse(this.$store.state.auth.roles)
            if (roles.permissions !== undefined) {
                roleData = roles.permissions.two
            }
            return menu({roleData})
        }
    },

    components: {
        MyHeader,
        SiderBar
    },

    methods: {
        // changeSub () {
        //     this.$refs.siderBar.$children[0].$children[0].closeMenu()
        //     this.$refs.siderBar.$children[0].$children[0].activedIndex = ''
        //     this.$store.dispatch('switch_record', '')
        // }
    },
    mouted () {
        console.log(this.$store.state.auth.roles)
        console.log(222)
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
