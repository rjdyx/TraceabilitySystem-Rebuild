/**
 * 实时视频组件
 * @description 
 * @author 吴燕萍
 * @date 2017/4/24
 * 
 */
<template>
<transition name="fade2">
	<div>
		<header1 :title="models.title" :isbreed="isbreed"></header1>
	</div>
</transition>
</template>
<script>
import Header1 from './component/header.vue'
import plantMessage from './js/plantMessage.js'
export default {
    name: 'pVideo',
    data () {
        let modelObj = {}
        Object.assign(modelObj, plantMessage)
        return {
            models: modelObj[this.$route.meta.key]
        }
    },
    mounted () {
        $(document).on('touchmove', function (e) {
            // e.preventDefault()
            e.stopPropagation()
        })
        if (this.$route.meta.runName === 'breed') {
            this.isbreed = true
        }
    },
    components: {
        Header1
    },
    computed: {
        isbreed () {
            return this.isbreed = this.$route.meta.runName === 'breed'
        }
    }
}
</script>
