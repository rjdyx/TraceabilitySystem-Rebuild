/**
 * 轮播图组件
 * @description 
 * @author 舒丹彤
 * @date 2017/8/3
 * 
 */
<template>
	<div class="swiper">

    <swiper :aspect-ratio="500/800" loop auto>
      	<swiper-item 
      		class="swiper-demo-img" 
      		v-for="(item, index) in demo04_list" 
      		:key="index">
      		<img :src="item">
      	</swiper-item>
    </swiper>

  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'vux'

const imgList = [
    'https://static.vux.li/demo/1.jpg',
    'https://static.vux.li/demo/2.jpg',
    'https://static.vux.li/demo/3.jpg',
    'https://static.vux.li/demo/3.jpg',
    'https://static.vux.li/demo/3.jpg'
]

export default {
    components: {
        Swiper,
        SwiperItem
    },
    methods: {
    },
    data () {
        return {
            demo04_list: imgList
        }
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
