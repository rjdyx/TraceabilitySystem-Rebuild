<template>
	<div>
		homebasic-model11111
	</div>
</template>
<script>
export default {
    name: 'pBasicModel1',
    mounted () {
        $('.plan').hide()
    },
    beforeDestroy () {
        console.log(1111)
        $('.plan').show()
    }
}
</script>
