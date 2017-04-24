<template>
	<div>
		video
	</div>
</template>
<script>
export default {
    name: 'pVideo',
    mounted () {
        $('.plan').hide()
    },
    beforeDestroy () {
        console.log(1111)
        $('.plan').show()
    }
}
</script>
