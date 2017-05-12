/**
 * @description: ondone模块
 * @author 郭森林
 * @date 2017/5/05
 *  
 */ 
<template>
	<div class="user">
        <img :src="$img(image)" alt="">
	</div>
</template>


<script>
import footerTop from './topComponent/footer.vue'
import ContainTitle from '../layout/contain-title.vue'
export default {
    name: 'user',
    data () {
        return {
            image: 'images/undone.jpg'
        }
    },
    methods: {
    },
    components: {
        ContainTitle,
        footerTop
    },
    mounted () {
    }
}
</script>

<style lang="sass">
.user{
	height: 100%;
    overflow:hidden;
    /*padding-left:10px;*/
    .user_content{
    	/*margin-top: 15px;*/
    	overflow:scroll;
    	height: 100%;
    }
}
</style>
