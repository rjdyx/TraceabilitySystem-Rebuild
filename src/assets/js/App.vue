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
        let overscroll = function (el) {
            el.addEventListener('touchstart', function () {
                let top = el.scrollTop
                let totalScroll = el.scrollHeight
                let currentScroll = top + el.offsetHeight
                if (top === 0) {
                    el.scrollTop = 1
                } else if (currentScroll === totalScroll) {
                    el.scrollTop = top - 1
                }
            })
            el.addEventListener('touchmove', function (evt) {
                if (el.offsetHeight < el.scrollHeight) {
                    evt._isScroller = true
                }
            })
        }
        overscroll(document.querySelector('#app'))
        document.body.addEventListener('touchmove', function (evt) {
            if (!evt._isScroller) {
                evt.preventDefault()
            }
        })
    }
}
</script> 

<style lang="sass">

@import "../sass/theme/theme.scss";
	#app {
		height: 100%;
	}
</style>
