<template>
	<div>
		homeGrow
	</div>
</template>
<script>
export default {
    name: 'pGrow',
    mounted () {
        $('.plan').hide()
    },
    beforeDestroy () {
        console.log(1111)
        $('.plan').show()
    }
}
</script>
