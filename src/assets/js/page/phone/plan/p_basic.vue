<template>
	<div>
		homeBasic
	</div>
</template>
<script>
export default {
    name: 'pBasic',
    mounted () {
        $('.plan').hide()
    },
    beforeDestroy () {
        console.log(1111)
        $('.plan').show()
    }
}
</script>
<style>
</style>
