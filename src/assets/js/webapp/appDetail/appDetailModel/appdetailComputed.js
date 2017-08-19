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
        batch () {
            return this.models[this.modelIndex].batch
        },
        paramsIndex () {
            return this.models[this.modelIndex].paramsIndex
        },
        delType () {
            return this.models[this.modelIndex].delType
        },
        timeshow () {
            return this.models[this.modelIndex].timeshow
        }
    }
}
