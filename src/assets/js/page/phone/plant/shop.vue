/**
 * 商品链接组件
 * @description 
 * @author 吴燕萍
 * @date 2017/4/24
 * 
 */
<template>
<transition name="fade2">
	<div>
		<header1 :title="models.title"></header1>
	</div>
</transition>
</template>
<script>
import Header1 from './component/header.vue'
import plantMessage from './js/plantMessage.js'
export default {
    name: 'pShop',
    data () {
        let modelObj = {}
        Object.assign(modelObj, plantMessage)
        return {
            models: modelObj[this.$route.meta.key]
        }
    },
    mounted () {
        $(document).on('touchmove', function (e) {
            e.stopPropagation()
        })
    },
    components: {
        Header1
    }
}
</script>
