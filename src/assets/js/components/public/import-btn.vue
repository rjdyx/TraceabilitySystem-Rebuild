/**
 * 导入按钮组件
 * @description 
 * @author 舒丹彤
 * @date 2017/3/16
 * 
 */
<template> 
    <div class="import">
        <el-upload class="upload-demo" :action="importUrl" :data="data" name="excel_file" :on-success="successOf">
            <el-button size="small" class="btn_change">导入</el-button>
        </el-upload>
    </div>
</template>

<script>
    export default {
        name: 'ImportBtn',
        props:
        {
            url: {
                type: String,
                default () {
                    return ''
                }
            }
        },
        data () {
            return {
                importUrl: this.$adminUrl(this.url + '/import'),
                data: {'_method': 'get'}
            }
        },
        methods: {
            successOf (data) {
                if (data === 'true') {
                    this.$message({
                        type: 'success',
                        message: '上传数据成功'
                    })
                    this.$parent.importChange()
                } else {
                    this.$message.error(data)
                }
            }
        },
        mounted () {
        }
    }
</script>

<style lang="sass" scoped>

    @import "../../../sass/function";
.import{
    width: 57px;
    height: 26px;
    overflow: hidden;
    .btn_change{
        margin-left:15px;
        color: #fff;
    }
}
</style>
