export default {
    computed: {
        tab () {
            return this.models[this.modelIndex].tab
        },
        url () {
            return this.models[this.modelIndex].url
        },
        urlParams () {
            return this.models[this.modelIndex].urlParams
        },
        theads () {
            return this.models[this.modelIndex].theads
        },
        protos () {
            return this.models[this.modelIndex].protos
        },
        widths () {
            return this.models[this.modelIndex].widths
        },
        // app
        tabComponent () {
            return this.models[this.modelIndex].tabComponent
        },
        searchPlaceholder () {
            return this.models[this.modelIndex].searchPlaceholder
        },
        tabshow () {
            return this.models[this.modelIndex].tabshow
        },
        settitle () {
            return this.models[this.modelIndex].settitle
        },
        timeshow () {
            return this.models[this.modelIndex].timeshow
        },
        batch () {
            return this.models[this.modelIndex].batch
        }
    }
}
