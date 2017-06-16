/*
* 新建组件
* @description 
* @author 吴燕萍
* @date 2017/6/9
*/

<template>
    <div id="p_popNew">
        <x-header :left-options="{backText: ''}">{{settitle}}</x-header>
        <div class="ppN_content">
            <group label-width="4.5em" label-margin-right="2em" label-align="right">
                <div class="formItem" v-for="comItem in newComponent.components" v-if="comItem.type !== 'file'">
                    <x-input 
                        v-if="comItem.type ==='text'" 
                        :title="comItem.label" 
                        :placeholder="comItem.placeholder" 
                        v-model="tableForm[comItem.name]"
                        :required='true'>
                    </x-input>


                    <datetime 
                        v-if="comItem.type === 'date'"
                        :title="comItem.label" 
                        v-model="tableForm[comItem.name]" 
                        value-text-align="left">
                    </datetime>

                    <popup-picker 
                        v-if="comItem.type === 'select'"
                        :title="comItem.label" 
                        :data="comItem.options" 
                        v-model="tableForm[comItem.name]">
                    </popup-picker>

                    <x-textarea
                        v-if="comItem.type === 'textarea'"
                        :title="comItem.label" 
                        :placeholder="comItem.placeholder" 
                        :show-counter="false" 
                        :rows="3"
                        v-model="tableForm[comItem.name]">
                    </x-textarea>
                    
                    <div v-if="comItem.type === 'textSelect'">
                        <x-input 
                            :title="comItem.label" 
                            :placeholder="comItem.placeholder" 
                            v-model="tableForm[comItem.name]">
                        </x-input>
                        <popup-picker 
                            title="单位"
                            :data="comItem.options" 
                            v-model="tableForm['unit']"
                            >
                        </popup-picker>
                    </popup-picker>
                    </div>
                    
                </div>
            </group>
            <camera 
                v-for="comItem in newComponent.components" 
                v-if="comItem.type === 'file'" 
                @return-shuju="returnShuju"
                :name="comItem.name"
            ></camera>
            <flexbox>
                    <flexbox-item>
                      <x-button class="submitForm" @touchend.native='submitForm'>保存</x-button>
                    </flexbox-item>
                    <flexbox-item>
                      <x-button class="cancelForm" @touchend.native='cancelForm'>取消</x-button>
                    </flexbox-item>
            </flexbox>
        </div>

    </div>
</template>
<script>
import { XHeader, Actionsheet, TransferDom, Group, XInput, Selector, PopupPicker, Datetime, ChinaAddressData, XTextarea, Icon, XButton, Flexbox, FlexboxItem, PopupRadio } from 'vux'
import message from '../webAppBasic/appmessage.js'
import Camera from '../../public/camera.vue'
export default {
    name: 'p_popNew',
    components: {
        XHeader,
        Actionsheet,
        TransferDom,
        Group,
        XInput,
        Selector,
        PopupPicker,
        Datetime,
        XTextarea,
        Icon,
        XButton,
        Flexbox,
        FlexboxItem,
        PopupRadio,
        Camera
    },
    data () {
        let modelObj = {}
        Object.assign(modelObj, message)
        let newComponent = modelObj[this.$route.params.model][this.$route.params.modelIndex].newComponent
        let form = {}
        newComponent[0].components.forEach(function (item) {
            if (item.type === 'textSelect') {
                form[item.name] = 0
                form['unit'] = [item.options[0][0]]
            } else if (item.type === 'select') {
                form[item.name] = []
            } else {
                form[item.name] = ''
            }
        })

        return {
            settitle: newComponent[0].tab,
            newComponent: newComponent[0],
            tableForm: form,
            be2333: function (value) {
                console.log(value)
                return {
                    valid: value !== '',
                    msg: 'Must be 2333'
                }
            }
        }
    },
    methods: {
        /*
        取消表单
         */
        cancelForm () {
            this.$router.go(-1)
        },
        /*
        提交表单
         */
        submitForm () {
            console.log('提交成功')
            console.log(this.tableForm)
        },
        /*
        返回图片信息
         */
        returnShuju (obj) {
            this.tableForm[obj.name] = obj.value
        },
        /*
        表单验证
         */
        validateFn () {
        }
    },
    created () {
        $('#app').removeClass('bule').addClass('gray')
    },
    mounted () {
        console.log(this.newComponent)
    }
}
</script>
<style lang="sass">
@import '../../../../sass/mixins/_absoluteCenter.scss';
    $labelCol:#5a5a5a;
    $labelBgCol:#edfcf9;
    $placeholderCol:#b7b7b7;
    @mixin label {
        text-align:left!important;
        padding: 10px 15px;
        margin-right:0px!important;
        width:6em!important;
    }
#p_popNew{
    .weui-cells{
        border-left: 1px solid #D9D9D9;
        border-right: 1px solid #D9D9D9;
        border-bottom: 1px solid #D9D9D9;
    }
    .gray{
        color: #4d4d4d;
    }
    .vux-header {
        background-color: #0099cb!important;
        @include centerfn('top',fixed,100%,top,0%,left,0%)
        z-index:2;
    }
    .ppN_content {
        width: 97%;
        margin: 0 auto;
        padding-top:45px;
        overflow:hidden;
    }
    .weui-cells{
        margin-top: .2rem!important;
        font-size:.3rem!important;
    }
    .vux-x-input {
        .weui-label{
            @include label;
            background:$labelBgCol;
            border-right: 1px solid #D9D9D9;
        }
        .weui-cell__bd{
            margin-left:10px;
            input::-webkit-input-placeholder{
                color:$placeholderCol;
            }
        }
        .weui-cell__ft{
            margin-right:10px;
        }
    }
    // .vux-selector {
    //     background:$labelBgCol;
    //     .weui-label{
    //         @include label;
    //     }
    //     .weui-cell__bd{
    //         background:white;
    //         border-left: 1px solid #D9D9D9;
    //         .weui-select{
    //             margin-left:10px;
    //         }
    //     }
    // }
    .vux-x-textarea{
        background:$labelBgCol;
        .weui-label{
            text-align:left!important;
            padding: 10px 15px;
            margin-right: 0em!important;
            width:6em!important;
        }
        .weui-textarea{ 
            padding: 10px 15px 10px 10px;
            border-left: 1px solid #D9D9D9;
        }
    }
    .vux-datetime{
        p{
            background:$labelBgCol;
            box-sizing: content-box;
            text-align:left!important;
            @include label;
            border-right: 1px solid #D9D9D9;
        }
        .weui-cell__ft{
            margin:0px 15px 0px 10px;
        }
    }
    .vux-cell-box{
        .weui-label{
            @include label;
            background:$labelBgCol;
            border-right: 1px solid #D9D9D9;
        }
        .weui-cell__ft{
            margin:0px 15px 0px 10px;
        }
    }
    .formItem{
        border-top: 1px solid #D9D9D9;
    }
    .weui-cell{
        padding: 0rem!important;
        >div>p{
            background:$labelBgCol;
            box-sizing: content-box;
            text-align:left!important;
            @include label;
            border-right: 1px solid #D9D9D9;
        }
        .weui-cell__ft a,.weui-cell__ft input{
            box-sizing: content-box;
        }
    }
    // .weui-cell:before{
    //     left: 0px!important; 
    //     transform: scaleY(1)!important;
    // }
    
    .vux-flexbox{
        margin:5px auto;
        .submitForm{
            background-color:#0099cb;
            color:white;
        }
        .cancelForm{
            background-color:#eaeaea;
        }
        .weui-btn{
            font-size:.4rem;
            line-height:3;
        }
    }
}
</style>
