export default {
    computed: {
        /**
         * 列表数据和分页
         */
        tableData () {
            return this.$store.state.basicModel.tableData
        },
        totalNum () {
            return this.$store.state.basicModel.totalNum
        },
        num () {
            return this.$store.state.basicModel.num
        },
        paginator () {
            return this.$store.state.basicModel.paginator
        },
        modelUrlParams () {
            return this.$route.params.model
        },
        key () {
            return this.models[this.modelIndex].key
        },
        selectSearch () {
            return this.models[this.modelIndex].selectSearch
        },
        dateSearch () {
            return this.models[this.modelIndex].dateSearch
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
        printComponent () {
            return this.models[this.modelIndex].printComponent
        },
        moreComponent () {
            return this.models[this.modelIndex].moreComponent
        },
        options () {
            return this.models[this.modelIndex].options
        },
        paramsIndex () {
            return this.models[this.modelIndex].paramsIndex
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
        },
        selectDefault () {
            return this.models[this.modelIndex].selectDefault
        },
        batch () {
            return this.models[this.modelIndex].batch
        },
        checkOperate () {
            return this.models[this.modelIndex].checkOperate
        },
        hiddeRole () {
            return this.models[this.modelIndex].hiddeRole
        },
        hiddeUser () {
            return this.models[this.modelIndex].hiddeUser
        },
        checkboxShow () {
            return this.models[this.modelIndex].checkboxShow
        },
        roleName () {
            return this.models[this.modelIndex].roleName
        },
        hiddeShow () {
            return this.models[this.modelIndex].hiddeShow
        }
    }
}
