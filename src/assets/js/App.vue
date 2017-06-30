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
    },
    methods: {
    },
    mounted () {
        // $('#app').on({
        //     touchstart: function (e) {
        //         var top = e.scrollTop
        //         let totalScroll = top + e.scrollHeight
        //         let currentScroll = top + e.offsetHeight
        //         if (top === 0) {
        //             e.scrollTop = 1
        //         } else if (currentScroll === totalScroll) {
        //             e.scrollTop = top - 1
        //         }
        //     },
        //     touchmove: function (evt) {
        //         if (e.offsetHeight < e.scrollHeight) {
        //             evt._isScroller = true
        //         }
        //     }
        // })
        // document.body.addeventListener('touchmove', function (evt) {
        //     if (!evt._isScroller) {
        //         evt.preventDefault()
        //     }
        // })
    }
}
</script> 

<style lang="sass">

@import "../sass/theme/theme.scss";
	#app {
		height: 100%;
	}
	
</style>
