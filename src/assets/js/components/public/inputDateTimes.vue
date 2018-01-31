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
      :placeholder="plaType()"
      size="small"
      range-separator="至"
      :picker-options="dateOptions()">
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
            dateTime: {},
            rowid: '',
            resDate: {}
        },
        data () {
            return {
                value: this.editValue !== undefined ? this.editValue : ''
            }
        },
        methods: {
            dateOptions () {
                let start = ''
                let end = ''
                if (start !== '' || end !== '') {
                    return {
                        disabledDate: (time) => {
                            if (start !== '' && end !== '') {
                                return time.getTime() < Date.parse(start) || time.getTime() > Date.parse(end)
                            }
                            if (start !== '') {
                                return time.getTime() < Date.parse(start)
                            }
                            if (end !== '') {
                                return time.getTime() > Date.parse(end)
                            }
                        }
                    }
                } else {
                    return true
                }
            },
            plaType () {
                if (this.type !== 'datetime') {
                    return '选择日期时间范围'
                } else {
                    return '选择日期时间'
                }
            }
        },
        watch: {
            value () {
                if (this.value[0] !== null) {
                    this.$emit('return-shuju', {name: this.shuju.name, value: this.value, id: this.rowid})
                }
            }
        },
        mounted () {
        }
    }
</script>
