/**
 * 轮播图组件
 * @description 
 * @author 舒丹彤
 * @date 2017/8/3
 * 
 */
<template>
	<div class="swiper">
    <swiper :aspect-ratio="500/800" dots-position="center" loop auto v-if="imgArr.length>0">
      	<swiper-item 
      		class="swiper-demo-img" 
      		v-for="(item, index) in imgArr" 
      		:key="index">
      		<img :src="item">
      	</swiper-item>
    </swiper>
    <swiper :aspect-ratio="500/800" dots-position="center" loop auto v-else>
        <swiper-item
          class="swiper-demo-img default" 
          v-for="(it, iee) in imgList" 
          :key="index">
          <img :src="it">
        </swiper-item>
    </swiper>

  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'vux'

const imgList = [
    'https://static.vux.li/demo/1.jpg',
    'https://static.vux.li/demo/2.jpg',
    'https://static.vux.li/demo/3.jpg'
]
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
            imgList: imgList
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
  .swiper {
    margin-top: 1rem;
  }
	.swiper-demo-img img {
	  	width: 100%;
	  	height: 100%;
	  	display: inline-block;
	  	/*border-bottom-left-radius: 3rem 2rem;*/
	  	/*border-bottom-right-radius: 3rem 2rem;*/
	}
  .default{
    width: 100%;
    height: 100%;
  }
	
</style>
