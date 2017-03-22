export default {
 
    computed: {

        modelUrlParams () {
            return this.$route.params.model
        },

        key () {
            return this.models[this.modelIndex].key
        },
        tab () {
            return this.models[this.modelIndex].tab
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
        operateComponent () {
            return this.models[this.modelIndex].operateComponent
        },
        typeComponent () {
            return this.models[this.modelIndex].typeComponent
        },
        dateComponent () {
            return this.models[this.modelIndex].dateComponent
        },
        onlyComponent () {
            return this.models[this.modelIndex].onlyComponent
        },
        newComponent () {
            return this.models[this.modelIndex].newComponent
        },
        placeholder () {
           return this.models[this.modelIndex].placeholder
       },
       options () {
           return this.models[this.modelIndex].options
       }
    }

}