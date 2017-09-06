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
                // startDate: '2017/09/02 10:23:12',
                // endDate: '2017/09/06 10:23:12',
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
            // dataTimeUpdate () {
            //     let sub = this.subItem
            //     let com = this.allData.components
            //     let com2 = this.allData.selectMore
            //     if ((sub.type !== 'datetime' && sub.type !== 'datetimerange') || com2 === undefined) return ''
            //     let start = ''
            //     let end = ''
            //     let pt = com2.indexOf(sub.name)
            //     if (pt !== -1) {
            //         if (pt > 0) {
            //             for (let i = (pt - 1); i > -1; i--) {
            //                 if (this.tableForm[i] !== undefined && this.tableForm[i] !== '') {
            //                     start = this.tableForm[i]
            //                     break
            //                 }
            //             }
            //         }
            //         for (let j = (pt + 1); j < (com2.length + 2); j++) {
            //             if (this.tableForm[j] !== undefined && this.tableForm[j] !== '') {
            //                 end = this.tableForm[j]
            //                 break
            //             }
            //         }
            //     }
            //     console.log(this.tableForm)
            //     console.log(pt)
            //     console.log(start)
            //     console.log(end)
            //     let resObj = {'start': start, 'end': end}
            //     // com.selectMore[0]
            //     // return resObj
            //     return resObj
            // }
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
