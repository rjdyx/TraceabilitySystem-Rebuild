<template>
	<div class="wrap">
		<my-header :navbars="navbars" :host="host"></my-header>
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
            // i: 9,
            // tipShow: false,
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
            show: true,
            arr: [],
            host: ''
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
        axios.get('/api/index').then((responce) => {
            this.host = responce.data.host
            localStorage.setItem('stepsBol', responce.data.wap_on)
            if (Number(localStorage.getItem('stepsBol'))) {
                this.tipShow = true
            }
        })
    },
    watch: {
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
        // .tipmark{
        //     width: 100%;
        //     height: 100%;
        //     background: rgba(0, 0, 0, 0.3);
        //     top: 0;
        //     left: 0;
        //     z-index: 2000;
        //     position: fixed;
        //     .tiplump{
        //         width: 400px;
        //         min-height: 100px;
        //         top: 50%;
        //         left: 50%;
        //         margin-left: -200px;
        //         margin-top: -100px;
        //         position: absolute;
        //         background: #fff;
        //         box-shadow: 0 2px 15px rgba(0,0,0,.4);
        //         border-radius: 5px;
        //         padding: 10px;
        //         font-weight: bold;
        //         text-indent: 32px;
        //         font-size: 16px;
        //         z-index: 999999;
        //     }
        // }
        // .nextcompany{
        //     width:184px;
        //     height: 53px;
        //     border: none;
        //     background:rgb(0,0,0);
        //     color: #fff;
        //     font-size: 14px;
        //     border-radius: 5px;
        //     position: absolute;
        //     bottom: 100px;
        //     right: 180px;
        //     cursor: pointer;
        //     &:hover{
        //         background: -webkit-linear-gradient(top, rgb(0,0,0) 0%,#232222 100%);
        //     }
        //     span{
        //         display: inline-block;
        //         background: -webkit-gradient(linear, 0 0, 0 100%, color-stop(0, #ee432e), color-stop(0.5, #c63929), color-stop(0.5, #b51700), color-stop(1, #891100));
        //         border-radius: 5px;
        //         color: #fff;
        //         font-weight: bold;
        //         letter-spacing: 1;
        //         padding: 6px 7px;
        //         text-align: center;
        //         text-shadow: 0px -1px 1px rgba(0, 0, 0, .8);
        //         margin: 10px 0px 10px 10px;
        //         line-height: 1.5;
        //         &:hover{
        //             background: -webkit-gradient(linear, 0 0, 0 100%, color-stop(0, #f37873), color-stop(0.5, #db504d), color-stop(0.5, #cb0500), color-stop(1, #a20601));
        //         }
        //     }
        // }
	}
</style>
