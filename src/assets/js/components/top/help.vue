/**
 * @description:导航栏test模块
 * @author 郭森林
 * @date 2017/4/26 
 *  
 */ 
<template>
	<div class="user">
		<iframe src="http://www.food.com/help.pdf" frameborder="0"></iframe>
	</div>
</template>

<script>
export default {
    name: 'user',
    data () {
        return {
        }
    },
    methods: {
    },
    components: {
    },
    mounted () {
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
