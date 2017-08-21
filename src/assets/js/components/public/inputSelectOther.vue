    /**
 * 下拉选择其他的组件
 * @description 
 * @author 吴燕萍 
 * @date 2017/7/19
 *  
 */
<template>
<div class="inputSelectOther">
	<el-select 
        v-model="selectValue"  
        slot="append" 
        placeholder="请选择" 
        size="small" 
        :disabled="disabled" 
        @change="getSelectValue">
    	    <el-option 
                v-for="option in shuju.options" 
                :label="option.label" 
                :value="option.value" 
                size="small">
            </el-option>
	</el-select>
  	<el-input 
        class="fr" 
        v-if="selectValue === '其他' && shuju.type === 'selectOther'" 
        :placeholder="shuju.otherPlaceholder" 
        v-model="inputValue" 
        size="small"  
        @change="getInputValue">
    </el-input>
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
        categoryBox: {
            type: Array,
            default () {
                return []
            }
        },
        type: '',
        categoryString: ''
    },
    data () {
        return {
            inputValue: '',
            selectValue: ''
        }
    },
    computed: {
    },
    watch: {
    },
    mounted () {
        if (this.type === 'edit') {
            if (this.categoryBox.indexOf(this.selectEditValue) === -1) {
                this.selectValue = '其他'
                this.inputValue = this.selectEditValue
            } else {
                this.selectValue = this.selectEditValue
            }
        } else {
            this.selectValue = this.categoryString
        }
    },
    methods: {
        getInputValue () {
            this.$emit('returnOther', [{name: this.shuju.name, value: this.selectValue}, {name: 'other', value: this.inputValue}])
        },
        getSelectValue () {
            if (this.selectValue === '其他' && this.shuju.type === 'selectOther') {
                if (this.inputValue !== '') {
                    this.$emit('returnOther', [{name: this.shuju.name, value: this.selectValue}, {name: 'other', value: this.inputValue}])
                } else {
                    this.$emit('returnOther', [{name: this.shuju.name, value: this.selectValue}, {name: 'other', value: ''}])
                    this.selectValue = '其他'
                }
            } else {
                this.$emit('returnOther', [{name: this.shuju.name, value: this.selectValue}, {name: 'other', value: ''}])
            }
        }
    }
}
</script>
<style lang="sass">
.inputSelectOther{
	overflow:hidden;
    >.el-select{
        width: 209px;
        display:inline-block;
    }
    >.el-input {
        width: 100px;
        display:inline-block;
        margin-top:3px;
    }
}
</style>
