<template>
    <div id="app" :class="[getTheme, getFont]">
        <router-view></router-view>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'App',
    computed: {
        ...mapGetters([
            'getTheme',
            'getFont'
        ])
    }
}
</script> 

<style lang="sass">

@import "../sass/theme/theme.scss";
    #app {
        height: 100%;
    }
</style>
