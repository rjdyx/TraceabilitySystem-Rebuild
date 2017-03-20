/**
 * 
 * 溯源--vue,最顶层组件 
 * @description 最顶层的组件，但不包含登录、404页面这些组件
 * @author 舒丹彤 
 * @date 2016/12/14
 *  
 */  
<template>
    <div class="wrap">
    	<my-header :navbars="navbars"></my-header>
    	<sider-bar :menus='menus'></sider-bar>
    	<router-view></router-view>
    </div>
</template>

<script>
import MyHeader from '../components/public/header.vue';
import SiderBar from '../components/public/sider-bar.vue';
import menu from '../page/index/menu.js'
    export default{
        name:'Index',
        data(){
        	return{
        		navbars:[
        			{
        				name:'首页',
        				src:'/public/images/time.png'
        			},{
        				name:'test',
        				src:'/public/images/test.png'
        			},{
        				name:'帮助',
        				src:'/public/images/help.png'
        			},{
        				name:'设置',
        				src:'/public/images/set.png'
        			},{
        				name:'问题反馈',
        				src:'/public/images/question.png'
        			},{
        				name:'退出',
        				src:'/public/images/back.png'
        			}
        		],
                menus:menu,
        	}
        },
        components:{
        	MyHeader,
        	SiderBar,
        },

    }

</script>
<style lang="sass" scoped>

    @import "../../sass/function";
    @import "../../sass/_percent.scss";

</style>
