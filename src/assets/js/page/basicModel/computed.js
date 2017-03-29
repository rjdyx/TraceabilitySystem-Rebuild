
export default {
     computed:{
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
        typeComponent () {
            return this.models[this.modelIndex].typeComponent
        },
        newComponent () {
            return this.models[this.modelIndex].newComponent
        },
        settitle () {
           return this.models[this.modelIndex].settitle
        },
        listComponent () {
            return this.models[this.modelIndex].listComponent
        },
        editComponent () {
            return this.models[this.modelIndex].editComponent
        },
        options () {
           return this.models[this.modelIndex].options
        },
        
    }
}