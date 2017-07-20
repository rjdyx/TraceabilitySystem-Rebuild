    /**
 * 下拉选择其他的组件
 * @description 
 * @author 吴燕萍 
 * @date 2017/7/19
 *  
 */
<template>
<div class="inputSelectOther">
	<el-select v-model="selectValue"  slot="append" placeholder="请选择" size="small" :disabled="disabled" @change="getSelectValue">
	    <el-option v-for="option in shuju.options" :label="option.label" :value="option.value" size="small"></el-option>
	</el-select>
  	<el-input class="fr" v-if="selectValue === '其他'&&shuju.type === 'selectOther'" :placeholder="shuju.otherPlaceholder" v-model="inputValue" size="small"  @blur="getInputValue"></el-input>
</div>
</template>
<script>
export default {
    name: 'inputSelectOther',
    props: {
        shuju: {
            type: Object,
            default () {
                return {}
            }
        },
        selectEditValue: {
            type: String,
            default () {
                return ''
            }
        },
        disabled: false,
        disabledV: false,
        allowance: 0,
        editAllowance: 0,
        type: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            tableForm: {},
            inputValue: '',
            selectValue: this.selectEditValue
        }
    },
    computed: {
    },
    watch: {
        inputEditValue () {
            this.inputValue = this.selectEditValue
            this.$emit('return-shuju', {name: this.shuju.name, value: this.inputValue})
        },
        selectEditValue () {
            this.selectValue = this.selectEditValue
            this.$emit('return-shuju', {name: this.shuju.name, value: this.selectValue})
        },
        allowance () {
            if (this.allowance === 0) {
                this.inputValue = ''
                this.shuju.placeholder = '请填写数字（必填）'
            } else if (this.allowance === -1) {
                this.shuju.placeholder = '当前场域无剩余面积'
            } else {
                this.shuju.placeholder = '还可以输入' + this.allowance
            }
        },
        editAllowance () {
            if (this.editAllowance !== 0) {
                this.shuju.placeholder = '最小输入' + parseInt(this.editAllowance)
            }
        }
    },
    mounted () {
        console.log(this.type)
        this.shuju.placeholder = '请填写数字（必填）'
    },
    methods: {
        getInputValue () {
            this.$emit('return-shuju', {name: this.shuju.name, value: this.inputValue})
        },
        getSelectValue () {
            if (this.selectValue === '其他') {
                if (this.inputValue !== '') {
                    this.$emit('return-shuju', {name: this.shuju.name, value: this.inputValue})
                }
            } else {
                this.$emit('return-shuju', {name: this.shuju.name, value: this.selectValue})
            }
        }
    }
}
</script>
<style lang="sass">
.inputSelectOther{
	overflow:hidden;
    >.el-select{
        width: 186px;
        display:inline-block;
    }
    >.el-input {
        width: 100px;
        display:inline-block;
        margin-top:3px;
    }
}
</style>
