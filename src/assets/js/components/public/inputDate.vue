/**
 * inputData组件
 * @description 
 * @author 吴燕萍
 * @date 2017/3/21

 */
<template>
    <div>
    	<el-date-picker size="small" class="inputData" v-model="value" @change="getDate" type="date"
            :editable="false" format="yyyy-MM-dd" placeholder="选择日期" :picker-options="beforeOptions">
    	</el-date-picker>
        <el-date-picker v-if="range" size="small" class="inputData" v-model="value1" @change="getAfterDate" type="date"
            :editable="false" format="yyyy-MM-dd" placeholder="选择日期" :picker-options="afterOptions">
        </el-date-picker>
    </div>
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
                value: this.editValue !== undefined ? this.editValue : !this.range ? this.getCurrentDate() : '',
                value1: '',
                beforeOptions: {
                    disabledDate: (time) => {
                        if (!this.range) {
                            return time.getTime() >= Date.now()
                        } else {
                            let afterDateVal = this.value1
                            if (afterDateVal !== '') {
                                let timestamp = Date.parse(new Date(afterDateVal))
                                return time.getTime() >= timestamp || time.getTime() <= Date.now()
                            } else {
                                return time.getTime() <= Date.now()
                            }
                        }
                    }
                },
                afterOptions: {
                    disabledDate: (time) => {
                        let beforeDateVal = this.value
                        if (beforeDateVal !== '') {
                            let timestamp = Date.parse(new Date(beforeDateVal))
                            return time.getTime() <= timestamp
                        } else {
                            return time.getTime() <= Date.now()
                        }
                    }
                }
            }
        },
        methods: {
            getDate (val) {
                this.value = val
            },
            getAfterDate (val) {
                this.value1 = val
            },
            getCurrentDate () {
                var md = new Date()
                return md.toLocaleDateString().replace(/\//g, '-')
            }
        },
        watch: {
            value () {
                this.$emit('return-shuju', {name: this.shuju.name, value: this.value})
            },
            value1 () {
                this.$emit('return-shuju', {name: 'end_date', value: this.value1})
            }
        },
        mounted () {
            console.log(this.value)
            this.$emit('return-shuju', {name: this.shuju.name, value: this.value})
        }
    }
</script>
