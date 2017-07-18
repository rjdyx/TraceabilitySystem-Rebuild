<template>
    <div class="inputVideo">
        <input id="video_file" type="file" accept="audio/mp4, video/mp4" @change="changefn($event.currentTarget, $event)">
    </div>
</template>
<script>
export default {
    name: 'video',
    props:
    {
        shuju: {
            type: Object,
            default () {
                return {}
            }
        },
        editValue: {
        }
    },
    data () {
        return {
        }
    },
    methods: {
        changefn (srcPic, event) {
            let file = event.target.files[0]
            this.$emit('return-shuju', {name: this.shuju.name, value: file})
        }
    },
    mounted () {
        if (this.editValue !== undefined && this.editValue !== null && this.editValue !== '') {
            console.log($('#video_file')[0].value)
        }
    }
}
</script>
<style>
.inputVideo{

}
</style>
