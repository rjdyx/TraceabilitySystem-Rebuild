/**
 * 新建、导出表格按钮组件
 * @description 
 * @author 舒丹彤
 * @date 2017/3/16
 * 
 */
<template> 
    <div>
        <el-button type="primary" size="small">新建</el-button>
        <el-button type="primary" class="put-table" size="small">导出表格</el-button>
    </div>
</template>

<script> 

    export default {
        name:'NewBuild',
        props:{
           
        },
        data (){
            return {
                
            }
        },
        computed: {

        },
        methods:{

        }

    }



</script>

<style lang="sass" scoped>

    @import "../../../sass/function";


</style>