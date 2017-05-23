/**
 * 导入按钮组件
 * @description 
 * @author 舒丹彤
 * @date 2017/3/16
 * 
 */
<template> 
    <div class="import">
        <el-button size="small" class="btn_change">导入</el-button>
    </div>
</template>

<script>
    export default {
        name: 'ImportBtn'
    }
</script>

<style lang="sass" scoped>

    @import "../../../sass/function";
.import{
    .btn_change{
        margin-left:15px;
        color: #fff;
    }
}
    
</style>
