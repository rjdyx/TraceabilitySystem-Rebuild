<template>
 
        <el-button type="primary" size="small">导出表格</el-button>

</template>

<script>

    export default {
        name:'output',
        props:{
            params: {
                type: Object,
                required: true,
                default () {
                    return {}
                }
            },
            // model: {
            //     type: Object,
            //     required: true,
            //     default () {
            //         return {}
            //     }
            // }
        },
        methods: {

        }

    }
</script>
