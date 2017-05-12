/**
 * inputData组件
 * @description 
 * @author 吴燕萍
 * @date 2017/3/21

 */
<template>
	<el-date-picker size="small" class="inputData" v-model="value" @change="getDate" type="date"
     :editable="false" format="yyyy-MM-dd" placeholder="选择日期" >
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
        methods: {
            getDate (val) {
                this.value = val
            }
        },
        watch: {
            value () {
                this.$emit('return-shuju', {name: this.shuju.name, value: this.value})
            }
        }
    }
</script>
