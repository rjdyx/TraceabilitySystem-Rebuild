/**
* inputTextarea组件
* @description 
* @author 吴燕萍
* @date 2017/3/24
*/
<template>
    <div class="inputTextSelect">
        <el-input :placeholder="shuju.placeholder" v-model="inputValue" size="small">
            <!-- slot="prepend" -->
            <el-select v-model="selectValue"  slot="append" placeholder="请选择" size="small">
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
            inputEditValue: {
                type: String,
                default () {
                    return ''
                }
            },
            selectEditValue: {
                type: String,
                default () {
                    return ''
                }
            }
        },
        data () {
            return {
                inputValue: this.inputEditValue,
                selectValue: this.selectEditValue,
                tableForm: {}
            }
        },
        watch: {
            inputValue () {
                this.$emit('return-shuju', {name: this.shuju.name, value: this.inputValue})
                this.$emit('return-shuju', {name: 'unit', value: this.selectValue})
            },
            selectValue () {
                this.$emit('return-shuju', {name: this.shuju.name, value: this.inputValue})
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
