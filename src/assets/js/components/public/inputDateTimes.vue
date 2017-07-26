/**
 * inputData组件
 * @description 
 * @author 吴燕萍
 * @date 2017/3/21

 */
<template>
    <el-date-picker
      v-model="value"
      :type="type"
      placeholder="选择时间范围"
      size="small">
    </el-date-picker>
</template>
<script>
    export default {
        props: {
            shuju: {
                type: Object,
                default () {
                    return {}
                }
            },
            type: '',
            editValue: {},
            rowid: ''
        },
        data () {
            return {
                value: this.editValue !== undefined ? this.editValue : ''
            }
        },
        methods: {
        },
        watch: {
            value () {
                this.$emit('return-shuju', {name: this.shuju.name, value: this.value, id: this.rowid})
            }
        },
        mounted () {
        }
    }
</script>
