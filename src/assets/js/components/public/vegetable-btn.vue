/**
 * 新建、导出表格按钮组件
 * @description 
 * @author 舒丹彤
 * @date 2017/3/16
 * 
 */
<template> 
    <div>
        <el-button size="small">全部果蔬档案</el-button>
        <el-button size="small">蔬菜类</el-button>
        <el-button size="small">水果类</el-button>
    </div>
</template>

<script> 

    export default {
        name:'vegetableBtn',
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