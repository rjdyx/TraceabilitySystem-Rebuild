/*头部组件
* @description 
* @author 吴燕萍
* @date 2017/6/9
* */ 
<template>
    <div id="p_popNew">
        <x-header :left-options="{backText: ''}">{{settitle}}</x-header>
        <div class="ppN_content">
            <ul>
                <li class="form_text">
                    <div class="FText_label"><label>喂养量</label></div>
                    <div class="FText_input"><input type="text" placeholder="10kg/头"><icon type="cancel"></icon></div>
                </li>
                <li>
                    <label>喂养量</label>
                    <select placeholder="10kg/头">
                        <option value="">11</option>
                        <option value="">11</option>
                        <option value="">11</option>
                    </select>
                    <div></div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import {XHeader, Icon} from 'vux'
export default {
    name: 'p_popNew',
    components: {
        XHeader,
        Icon
    },
    data () {
        return {
            settitle: '新建饲料'
        }
    },
    created () {
    }
}
</script>
<style lang="sass">
$labelCol:#5a5a5a;
$labelBgCol:#edfcf9;
$placeholderCol:#b7b7b7;
input::-webkit-input-placeholder{
    color:$placeholderCol;
}
.form_text{
    display:flex;
    display: -webkit-flex;
    border-bottom:1px solid #c8c8c8;
    .FText_label{
        flex:1;
        background:$labelBgCol;
        border-right: 1px solid #c8c8c8;
        >label{
            display: inline-block;
            padding:.3rem .2rem;
        }
    }
    .FText_input{
        flex:2;
        >input{
            border:none;
            display: inline-block;
            padding:.3rem .2rem;
        }
    }
}
.vux-header {
    background-color: #0099cb!important;
}
.ppN_content {
    width: 97%;
    margin: .5em auto;
    border: 1px solid #D9D9D9;
}
</style>
