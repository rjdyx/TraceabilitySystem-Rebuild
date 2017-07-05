/*头部组件
* @description 
* @author 舒丹彤
* @date 2017/6/6
* */ 
 
<template>
	<div class="app-header">
		<slot name="menu"></slot>
		<slot name="plan"></slot>
		<slot name="upImg"></slot>
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
        }
    },
    methods: {
        goBack () {
            this.$router.push('/appIndex')
        },
        backTo () {
            this.$emit('setClassClear')
            history.go(-1)
        }
    },
    mounted () {
        if (window.isPC) {
            if (this.$route.path.indexOf('appIndex') !== -1 || this.$route.path.indexOf('webAppNew') !== -1) {
                this.$router.push('/index/home')
            }
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
