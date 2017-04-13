export default {
    computed: {
        modelUrlParams () {
            return this.$route.params.model
        },
        key () {
            return this.models[this.modelIndex].key
        },
        selectSearch () {
            return this.models[this.modelIndex].selectSearch
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
        moreComponent () {
            return this.models[this.modelIndex].moreComponent
        },
        options () {
            return this.models[this.modelIndex].options
        },
        lotComponent () {
            return this.models[this.modelIndex].lotComponent
        },
        selectValueId () {
            return this.models[this.modelIndex].selectValueId
        },
        changeDataArr () {
            return this.models[this.modelIndex].changeDataArr
        },
        hiddeEdit () {
            return this.models[this.modelIndex].hiddeEdit
        }
    }
}
