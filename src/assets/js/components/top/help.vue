/**
 * @description:导航栏test模块
 * @author 郭森林
 * @date 2017/4/26 
 *  
 */ 
<template>
	<div class="user">
		<iframe :src="src" frameborder="0"></iframe>
	</div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: 'user',
    data () {
        return {
            src: require('projectRoot/env.js').app_url + '/help.pdf'
        }
    },
    methods: {
        ...mapActions([
            'change_siderBar'
        ])
    },
    components: {
    },
    mounted () {
        this.change_siderBar(true)
    },
    created () {
        document.title = '帮助文档'
    }
}
</script>

<style lang="sass">
.user{
	height: 100%;
	background: white;
    overflow:hidden;
	iframe{
		width:100%;
		height:96%;
	}
}
</style>
