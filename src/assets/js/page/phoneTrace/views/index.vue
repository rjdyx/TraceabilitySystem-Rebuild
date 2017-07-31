/**
 * 手机追溯首页组件
 * @description 
 * @author 舒丹彤
 * @date 2017/7/27
 * 
 */
<template>
	<div class="phoneIndex">
		<phone-header></phone-header>
		<div class="phoneMain">
			<div class="logo"></div>
			<template v-for="(item,index) in indexData">
				<span class="iconfont" :class="item.icon"></span>
				<span></span>
			</template>
		</div>
	</div>
</template>

<script>
import phoneHeader from '../components/public/header.vue'
import indexData from '../js/index.js'
export default{
    name: 'phoneIndex',
    data () {
        return {
            indexData: indexData
        }
    },
    mounted () {
    },
    methods: {
    },
    components: {
        phoneHeader
    }
}
</script>
<style lang='sass'>
@import '../iconfont/iconfont.css';

	.phoneIndex{
		width: 100%;
		height: 100%;
		background: #3dd0b6;
		.phoneMain{
			width: 8.2rem;
			height: 8.2rem;
			background: url('/public/images/circle.png') no-repeat;
			background-position: 100%;
			background-size: 100% 100%;
			margin: 1.76rem auto 0;
			text-align: center;
			position: relative;
			.logo{
				width: 4.2rem;
				height: 4.2rem;
				background: url('/public/images/circle.png') no-repeat;
				background-size: 100% 100%;
				background-position: 100%;
				position: absolute;
				top: 2rem;
				left: 2rem;
			}
		}
	}
	@font-face {
	  	font-family: 'iconfont';
	  	src: url('../iconfont/iconfont.eot');
	  	src: url('../iconfont/iconfont.eot?#iefix') format('embedded-opentype'),
	  	url('../iconfont/iconfont.woff') format('woff'),
	  	url('../iconfont/iconfont.ttf') format('truetype'),
	  	url('../iconfont/iconfont.svg#iconfont') format('svg');
	}
	.iconfont{
	    font-family:"iconfont" !important;
	    font-size:16px;
	    font-style:normal;
	    -webkit-font-smoothing: antialiased;
	    -webkit-text-stroke-width: 0.2px;
	    -moz-osx-font-smoothing: grayscale;
	}
</style>
