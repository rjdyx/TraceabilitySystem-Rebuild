/*头部组件
* @description 
* @author 舒丹彤
* @date 2017/6/6
* */ 
 
<template>
	<div class="app-header">
		<!-- <span class="left-btn" @click="showmenu"></span> -->
		<slot name="menu"></slot>
		<span name="plan" class="newplan" v-if="planShow"></span>
		<h1>{{settitle}}</h1>
		<span v-show="back" class="back" @click="backTo"></span>
		<span class="right-btn" @click="goBack" v-show="homeShow"></span>
	</div>
</template>

<script>
export default {
    name: 'appHeader',
    data () {
        return {
            // planShow: false
        }
    },
    props: {
        settitle: {
            type: String,
            default: ''
        },
        homeShow: {
            type: Boolean,
            default: false
        },
        back: {
            type: Boolean,
            default: false
        },
        planShow: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        // showmenu () {
        //     this.$emit('parentClick')
        // },
        goBack () {
            this.$router.push('/appIndex')
        },
        backTo () {
            history.go(-1)
        }
    },
    mounted () {
        if (this.$route.path.indexOf('appIndex') !== -1 && window.isPC !== false) {
            this.$router.push('/index/home')
        }
    },
    watch: {
    }
}
</script>
 

<style lang='sass'>
	.app-header{
		height: 50px;
		width: 100%;
		background:  #009acb;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		/*margin-bottom: 5px;*/
			h1{
				width: 100%;
				font: 21px 微软雅黑;
				color: #fff;
				text-align: center;
				padding-top: 10px;
			}
			
			span{
				display: inline-block;
				width: 20px;
				position: absolute;
			}
			.left-btn{
				background: url(/public/images/slider.png);
				background-size: 100%;
				left: 5%;
				height: 20px;
				top:28%;
			}
			.right-btn,.back{
				right: 5%;
				top: 24%;
			}
			.right-btn{
				background: url(/public/images/home.png);
				background-size: 100%;
				width: 28px;
				height: 23px;
			}
			.back{
				width: 34px;
				height: 23px;
				background: url(/public/images/re-back.png) no-repeat;
				background-position: 100%;
			}
			.newplan{
		        width: 9%;
		        height: 36px;
		        display: inline-block;
		        background: url(/public/images/newplan.png) no-repeat;
		        background-position: 100%;
		        left: 5%;
		        top: 13%;
		    }
	}
</style>
