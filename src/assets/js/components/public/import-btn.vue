/**
 * 导入按钮组件
 * @description 
 * @author 舒丹彤
 * @date 2017/3/16
 * 
 */
<template> 
    <div>
        <el-button type="primary" size="small" class="ImportBtn">导入</el-button> 
    </div>
</template>

<script>
export default {
  name: 'ImportBtn'
}
</script>

<style lang="sass" scoped>

    @import "../../../sass/function";

    .ImportBtn{
        margin-left:15px;
    }
</style>
