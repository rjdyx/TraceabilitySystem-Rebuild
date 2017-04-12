/**
 * inputData组件
 * @description 
 * @author 吴燕萍
 * @date 2017/3/21

 */
<template>
	<el-date-picker size="small" class="inputData"  v-model="value" type="date" placeholder="选择日期">
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
            editValue: {}
        },
        data () {
            return {
                value: this.editValue
            }
        },
        watch: {
            value () {
                this.$emit('return-shuju', {name: this.shuju.name, value: this.value})
            }
        }
    }
</script>
