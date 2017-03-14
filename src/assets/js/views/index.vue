/**
 * 
 * 溯源--vue,最顶层组件 
 * @description 最顶层的组件，但不包含登录、404页面这些组件
 * @author 苏锐佳 
 * @date 2016/12/14
 * 
 */ 
<template>

    <div>
    	<my-header></my-header>
    </div>
</template>
<style lang="sass" scoped>

    @import "../../sass/function";
    @import "../../sass/_percent.scss";


</style>
<script>
import MyHeader from '../components/public/header.vue';
    export default{
        name:'Index',
        data(){
        	return{

        	}
        },
        components:{
        	MyHeader,
        },

    }

</script>
