<<<<<<< HEAD
/**
 * 
 * ËÝÔ´--vue,×î¶¥²ã×é¼þ 
 * @description ×î¶¥²ãµÄ×é¼þ£¬µ«²»°üº¬µÇÂ¼¡¢404Ò³ÃæÕâÐ©×é¼þ
 * @author Êæµ¤Í® 
 * @date 2016/12/14
 *  
 */  
=======
/*æº¯æº--vue,æœ€é¡¶å±‚ç»„ä»¶
* @description æœ€é¡¶å±‚çš„ç»„ä»¶ï¼Œä½†ä¸åŒ…å«ç™»å½•ã€404é¡µé¢è¿™äº›ç»„ä»¶
* @author èˆ’ä¸¹å½¤
* @date 2016/12/14 * */
>>>>>>> Denton
<template>
	<div class="wrap">
		<my-header :navbars="navbars"></my-header>
		<sider-bar :menus='menus' :show="show"></sider-bar>
		<router-view></router-view>
	</div>
</template>

<script>
import MyHeader from '../components/public/header.vue'
import SiderBar from '../components/public/sider-bar.vue'
import menu from '../page/index/menu.js'
<<<<<<< HEAD
export
default {
  name: 'Index',
  data () {
    return {
      navbars: [{
        name: 'Ê×Ò³',
        src: '/public/images/home.png'
      },
      {
        name: 'test',
        src: '/public/images/test.png'
      },
      {
        name: '°ïÖú',
        src: '/public/images/help.png'
      },
      {
        name: 'ÉèÖÃ',
        src: '/public/images/set.png'
      },
      {
        name: 'ÎÊÌâ·´À¡',
        src: '/public/images/question.png'
      },
      {
        name: 'ÍË³ö',
        src: '/public/images/back.png'
      }],
      menus: menu,
      show: true
    }
  },
  components: {
    MyHeader,
    SiderBar
  }
=======

export default {
  name: 'Index',
  data() {
		return {
  navbars: [{
  name: 'é¦–é¡µ',
  src: '/public/images/home.png'
}, {
  name: 'test',
  src: '/public/images/test.png'
}, {
  name: 'å¸®åŠ©',
  src: '/public/images/help.png'
}, {
  name: 'è®¾ç½®',
  src: '/public/images/set.png'
}, {
  name: 'é—®é¢˜åé¦ˆ',
  src: '/public/images/question.png'
}, {
  name: 'é€€å‡º',
  src: '/public/images/back.png'
}],
  menus: menu,
  show: true
  }
},
  components: {
	MyHeader,
	SiderBar
  },
>>>>>>> Denton
}
</script>
<style lang="sass" scoped>
	@import "../../sass/function";
	@import "../../sass/_percent.scss";
	.wrap {
		width: 100%;
		overflow: hidden;
		min-width: 1280px;
	}
</style>