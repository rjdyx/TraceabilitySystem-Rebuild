/**
 * 轮播图组件
 * @description 
 * @author 舒丹彤
 * @date 2017/8/3
 * 
 */
<template>
	<div class="swiper">
    <swiper :aspect-ratio="500/800" dots-position="center" loop auto v-if="imgArr.length > 0">
      	<swiper-item 
      		class="swiper-demo-img" 
      		v-for="(item, index) in imgArr" 
      		:key="index">
      		<img :src="item">
      	</swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'vux'
export default {
    name: 'swiperp',
    props: {
        imgArr: {
            type: Array,
            default: []
        }
    },
    data () {
        return {
        }
    },
    methods: {
    },
    components: {
        Swiper,
        SwiperItem
    }
}
</script>

<style>

	.swiper-demo-img img {
	  	width: 100%;
	  	height: 100%;
	  	display: inline-block;
	  	border-bottom-left-radius: 3rem 2rem;
	  	border-bottom-right-radius: 3rem 2rem;
	}
	
</style>
