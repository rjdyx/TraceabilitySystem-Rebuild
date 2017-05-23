/**
 * 导入按钮组件
 * @description 
 * @author 舒丹彤
 * @date 2017/3/16
 * 
 */
<template> 
    <div class="import">
        <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/">
            <el-button size="small" class="btn_change">导入</el-button>
        </el-upload>
    </div>
</template>

<script>
    export default {
        name: 'ImportBtn',
        methods: {
        },
        mounted () {
        }
    }
</script>

<style lang="sass" scoped>

    @import "../../../sass/function";
.import{
    width: 60px;
    height: 25px;
    overflow: hidden;
    .btn_change{
        margin-left:15px;
        color: #fff;
    }
}
    
</style>
