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
import {mapActions} from 'vuex'
export default {
    name: 'user',
    data () {
        return {
            image: 'images/undone.jpg'
        }
    },
    methods: {
        ...mapActions([
            'change_siderBar'
        ])
    },
    components: {
        ContainTitle,
        footerTop
    },
    mounted () {
        this.change_siderBar(false)
        localStorage.setItem('tab', 0)
    }
}
</script>

<style lang="sass">
.ondone{
	height: 100%;
    overflow:hidden;
    img{
        width:100%;
        min-width:1500px;
    }
}
</style>
