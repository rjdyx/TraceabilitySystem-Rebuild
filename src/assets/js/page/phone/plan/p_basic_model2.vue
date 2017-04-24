<template>
	<div>
		homebasic-model2222
	</div>
</template>
<script>
export default {
    name: 'pBasicModel2',
    mounted () {
        $('.plan').hide()
    },
    beforeDestroy () {
        $('.plan').show()
    }
}
</script>
