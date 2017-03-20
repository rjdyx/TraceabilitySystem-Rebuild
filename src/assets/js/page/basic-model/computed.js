export default {

    computed: {

        modelUrlParams () {
            return this.$route.params.model
        },

        key () {
            return this.models[this.modelIndex].key
        },

        url () {
            return this.models[this.modelIndex].url
        },

        urlParams () {
            return this.models[this.modelIndex].urlParams
        },

        searchPlaceholder () {
            return this.models[this.modelIndex].searchPlaceholder
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

        colComponent () {
            return this.models[this.modelIndex].colComponent
        },

    }

}