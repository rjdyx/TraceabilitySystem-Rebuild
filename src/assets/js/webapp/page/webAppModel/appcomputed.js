export default {
    computed: {
        tab () {
            return this.models[this.modelIndex].tab
        },
        key () {
            return this.models[this.modelIndex].key
        },
        unite () {
            return this.models[this.modelIndex].unite
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
        searchPlaceholder () {
            return this.models[this.modelIndex].searchPlaceholder
        },
        tabshow () {
            return this.models[this.modelIndex].tabshow
        },
        timeshow () {
            return this.models[this.modelIndex].timeshow
        },
        batch () {
            return this.models[this.modelIndex].batch
        },
        rightMenu () {
            return this.models[this.modelIndex].rightMenu
        },
        paramsIndex () {
            return this.models[this.modelIndex].paramsIndex
        },
        isCode () {
            return this.models[this.modelIndex].isCode
        }
    }
}
