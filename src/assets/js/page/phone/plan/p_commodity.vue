<template>
	<div>
		commodity
	</div>
</template>
<script>
export default {
    name: 'pCommodity',
    mounted () {
        $('.plan').hide()
    },
    beforeDestroy () {
        console.log(1111)
        $('.plan').show()
    }
}
</script>
