/**
* inputTextarea组件
* @description 
* @author 吴燕萍
* @date 2017/3/24
*/
<template>
    <div class="inputTextSelect">
        <el-input :placeholder="shuju.placeholder" v-model="inputValue" size="small" :disabled="disabledV" @blur="getInputValue">
            <!-- slot="prepend" -->
            <el-select v-model="selectValue"  slot="append" placeholder="请选择" size="small" :disabled="disabled" @change="getSelectValue">
                <el-option v-for="option in shuju.options" :label="option.label" :value="option.value" size="small"></el-option>
            </el-select>
        </el-input>
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
            inputEditValue: {},
            selectEditValue: {
                type: String,
                default () {
                    return ''
                }
            },
            disabled: false,
            disabledV: false,
            allowance: 0,
            editAllowance: 0
        },
        data () {
            return {
                tableForm: {},
                inputValue: this.inputEditValue,
                selectValue: this.selectEditValue
            }
        },
        computed: {
        },
        watch: {
            inputEditValue () {
                this.inputValue = this.inputEditValue
                this.$emit('return-shuju', {name: this.shuju.name, value: this.inputValue})
            },
            selectEditValue () {
                this.selectValue = this.selectEditValue
                this.$emit('return-shuju', {name: 'unit', value: this.selectValue})
            },
            allowance () {
                this.inputValue = ''
                if (this.allowance !== 0) {
                    this.shuju.placeholder = '还可以输入' + this.allowance
                } else {
                    this.shuju.placeholder = '请填写数字（必填）'
                }
            },
            editAllowance () {
                if (this.editAllowance !== 0) {
                    this.shuju.placeholder = '最小输入' + parseInt(this.editAllowance)
                }
            }
        },
        mounted () {
            this.shuju.placeholder = '请填写数字（必填）'
        },
        methods: {
            getInputValue () {
                this.$emit('return-shuju', {name: this.shuju.name, value: this.inputValue})
            },
            getSelectValue () {
                this.$emit('return-shuju', {name: 'unit', value: this.selectValue})
            }
        }
    }
</script>
<style lang="sass">
.inputTextSelect{
    .el-select .el-input {
        width: 110px;
    }
}

</style>
