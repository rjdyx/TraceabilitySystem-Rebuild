/**
 * inputData组件
 * @description 
 * @author 吴燕萍
 * @date 2017/3/21

 */
<template>
	<el-date-picker size="small" class="inputData" v-model="value" @change="getDate" type="date"
     :editable="false" format="yyyy-MM-dd" placeholder="选择日期" :picker-options="beforeOptions">
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
            editValue: {},
            range: {
                type: Boolean,
                default () {
                    return false
                }
            }
        },
        data () {
            return {
                value: this.editValue !== undefined ? this.editValue : this.getCurrentDate(),
                beforeOptions: {
                    disabledDate (time) {
                        return time.getTime() >= Date.now()
                    }
                }
            }
        },
        methods: {
            getDate (val) {
                this.value = val
            },
            getCurrentDate () {
                var md = new Date()
                return md.toLocaleDateString().replace(/\//g, '-')
            }
        },
        watch: {
            value () {
                this.$emit('return-shuju', {name: this.shuju.name, value: this.value})
            }
        },
        mounted () {
            this.$emit('return-shuju', {name: this.shuju.name, value: this.value})
        }
    }
</script>
