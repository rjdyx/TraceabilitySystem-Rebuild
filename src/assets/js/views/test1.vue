<template>
    <div>
        <input type="file" accept="audio/mp4, video/mp4" @change="changefn">
    </div>
</template>
<script>
export default {
    name: 'test1',
    data () {
        return {
        }
    },
    methods: {
        changefn (file) {
            console.log($('input'))
        }
    }
}
</script>
