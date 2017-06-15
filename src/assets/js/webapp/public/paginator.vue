/*
 *
 * @description: 公共分页模块
 * @author 舒丹彤
 * @date 2017/6/12
 *  
 */ 

<template>
	<div class="paginator">
        <div @touchend="lastPage(index-1)" :disabled="!leftBtn" class="left">&lt;&lt;</div>
        <div class="middle" v-if="showInput" @touchend="showInputIndex">第{{index}}页/共{{total}}页</div>
        <div class="middle-input" v-else>
            <input type="text" name="" v-model="inputIndex" @keyup.enter="changeIndex" v-focus class="input-index" placeholder="页数">
        </div>
        <div @touchend="nextPage(index+1)" :disabled="!rightBtn" class="right">&gt;&gt;</div>
	</div>	

</template>

<script>
export default {
    name: 'Paginator',
    components: {
    },
    props: {
        total: {
            type: Number,
            default: 1
        },
        url: {
            type: String,
            default: '/'
        },
        paginatorParams: {
            type: Object,
            default () {
                return {}
            }
        }
    },
    data () {
        return {
            index: 1,
            showInput: true,
            inputIndex: ''
        }
    },
    computed: {
        leftBtn () {
            if (this.index === 1) {
                return false
            } else {
                return true
            }
        },
        rightBtn () {
            if (this.index === this.total) {
                return false
            } else {
                return true
            }
        }
    },
    watch: {
        total: function (val) {
            this.init()
        }
    },
    methods: {
        init () {
            this.index = 1
            this.showInput = true
            this.inputIndex = ''
        },
        changeIndex () {
            this.showInput = true
        },
        showInputIndex () {
            this.showInput = false
        }
    }
}
</script>


<style lang='sass'>
.paginator{
    width: 100%;
    margin-top: 10px;
    text-align: center;
    .left,.right{
        display: inline-block;
        width: 39px;
        height: 39px;
        line-height: 39px;
        background: #fff;
        color: #222;
        border-radius: 2px;
        cursor: pointer;
        border: 1px solid #dddddd;
    }
    .middle{
        display: inline-block;
        height: 39px;
        line-height: 39px;
        padding:  0 12px;
        margin: 0 2px;
        background-color: #fff;
        border: 1px solid #dddddd;
    }
    .middle-input{
        @extend .middle;
        padding: 0;
        width: 102px;
        .input-index{
            width: 80px;
            height: 35px;
            padding-left: 15px;
            border: 0;
        }
    }
}
</style>
