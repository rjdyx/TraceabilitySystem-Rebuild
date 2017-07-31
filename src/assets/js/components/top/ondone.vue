/**
 * @description: ondone模块
 * @author 郭森林
 * @date 2017/5/05
 *  
 */ 
<template>
	<div class="ondone">
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
        localStorage.setItem('tab', 0)
    }
}
</script>

<style lang="sass" scope>
.ondone{
	height: 100%;
    overflow:hidden;
    padding-bottom:66px;
    box-sizing:border-box;
    .user_content{
    	overflow-y:scroll;
        height: 100%;
        box-sizing:border-box;
        padding:15px 10px 0px 10px;
    }
}
</style>
