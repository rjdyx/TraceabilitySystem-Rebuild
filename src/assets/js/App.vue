<template>
    <div id="app" :class="[getTheme, getFont]">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
    computed: {
        getTheme () {
            return this.$store.getters.getTheme
        },
        getFont () {
            return this.$store.getters.getFont
        }
    }
}
</script> 

<style lang="sass">

@import "../sass/theme/theme.scss";
    #app {
        height: 100%;
    }
</style>
