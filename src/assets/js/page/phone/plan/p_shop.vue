<template>
	<div>
		homeShop
	</div>
</template>
<script>
export default {
    name: 'pShop',
    mounted () {
        $('.plan').hide()
    },
    beforeDestroy () {
        console.log(1111)
        $('.plan').show()
    }
}
</script>
