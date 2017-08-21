/*
* popupPicke-orderText组件
* @description 
* @author 吴燕萍
* @date 2017/8/21
*/
<template>
<div>
    <popup-picker
        :name = "name"
        :title="title" 
        :data="data" 
        :datakeys="datakeys"
        :placeholder="placeholder"
        v-model="popupPValue"
        @on-hide="onHide"
        value-text-align="left"
        :class="[{ inputErrors: ruleTableFormBol},{bggray: disabled}]"
        :disabled="disabled"
        >
    </popup-picker>
    <x-input 
        v-if="popupPValue.length && popupPValue[0].includes('其他')"
        :inputName="name"
        :title="'其他'+title" 
        :placeholder="'请输入其他'+title"
        v-model="inputValue"
        @on-change="inputOnChange"
        @on-blur="onBlur"
        :disabled="disabled"
        :class="[{ inputErrors: ruleTableFormBol},{bggray: disabled}]">
    </x-input>
</div>
</template>
<style></style>
<script>
import { XInput, PopupPicker } from 'vux'
export default{
    name: 'popupPicke-orderText',
    components: {
        XInput,
        PopupPicker
    },
    props: {
        name: '',
        title: '',
        data: {
            type: Array,
            default () {
                return []
            }
        },
        datakeys: {
            type: Array,
            default () {
                return []
            }
        },
        placeholder: '',
        disabled: {
            type: Boolean,
            default: false
        },
        ruleTableFormBol: {
            type: Boolean,
            default: false
        },
        editValue: {
            type: Array,
            default () {
                return []
            }
        }
    },
    data () {
        return {
            popupPValue: [],
            inputValue: ''
        }
    },
    mounted () {
    },
    methods: {
        onHide (obj) {
            this.inputValue = ''
            if (this.popupPValue.length && !this.popupPValue[0].includes('其他')) {
                this.$emit('on-hide', obj, this.popupPValue)
            } else {
                this.$emit('on-hide', obj, [])
            }
        },
        inputOnChange (obj) {
            if (this.popupPValue.length && this.popupPValue[0].includes('其他')) {
                this.$emit('on-hide', obj, [this.inputValue])
            }
        },
        onBlur (obj) {
            if (this.popupPValue.length && this.popupPValue[0].includes('其他')) {
                this.$emit('on-hide', obj, [this.inputValue])
            }
        }
    },
    watch: {
        editValue () {
            // this.popupPValue = this.editValue
        }
    }
}
</script>
