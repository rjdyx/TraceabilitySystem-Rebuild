/**
 * 权限多选组件
 * @description 
 * @author 郭森林
 * @date 2017/07/20
 * 
 */


<template>
<div class="allCheck">

    <div class="wraps" >
        <span class="span-checkbox" @click="boxClick">√</span>
        <span class="span-check1">全选</span>
        <div class="li one" v-for="(one,k1) in lists">
            <span class="span-checkbox" @click="boxClick">√</span>
            <span class="span-check1">{{k1}}</span>

            <div class="li two" v-for="(two,k2) in one">

                <span class="span-checkbox" @click="boxClick">√</span>
                <span class="span-check2">{{k2}}</span>

                <div class="li three" v-for="(three,k3) in two">

                    <span class="span-checkbox" @click="boxClick"  :did="three">√</span>
                    <input type="text" :value="three" :checked="checked" class="checkbox-input">
                    <span class="span-check3">{{k3}}</span>

                    <span class="hors" @click="threeClick" value="hidden">{{stateZ}}</span>

                    <div class="li fore hidden" v-if="!opsState">
                        <span class="checkbox-Box" v-for="(val,k4) in operates">
                            <span class="span-checkbox" @click="boxClick">√</span>
                            <input type="text" :value="k4" :checked="checked" class="checkbox-input2">
                            <span class="span-check3">{{val}}</span>
                        </span>
                    </div>
                    <div class="li fore hidden" v-else>
                        <span class="checkbox-Box" v-for="(val,k4) in ops[three]">
                            <span class="span-checkbox" @click="boxClick">√</span>
                            <input type="text" :value="val" :checked="checked" class="checkbox-input2">
                            <span class="span-check3">{{operates[val]}}</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import move from '../../directive/move.js'
import vuexStore from '../../vuex/modules/isAllCheck.js'
export default {
    name: 'validator-example',
    store: vuexStore,
    components: {
    },
    props: {
        id: '',
        type: '',
        permissionCompany: ''
    },
    data () {
        let obj = {}
        return {
            lists: {},
            edits: {
                1: ['edit', 'create'],
                4: ['create', 'delete']
            },
            operates: {create: '新建', edit: '编辑', delete: '删除', stamp: '打印', out: '导出', pack: '生成', state: '状态'},
            stateThree: true,
            stateZ: '展开',
            stateS: '收起',
            checked: false,
            checkeds: {},
            returnDatas: {},
            ops: {},
            opsState: false
        }
    },
    mixins: [move],
    mounted () {
        this.create()
    },
    methods: {
        create () {
            var _this = this
            var url = 'api/permission/get/all'
            var state = false
            if (this.permissionCompany !== undefined && this.permissionCompany === 1) {
                url = 'api/company/permission'
                state = true
            }
            axios.get(url).then((responce) => {
                _this.lists = responce.data
                if (state) {
                    _this.ops = responce.data.ops
                    _this.lists = responce.data.data
                    _this.opsState = true
                }
                if (_this.id !== undefined) {
                    _this.edit()
                }
            })
        },
        edit () {
            var url = 'api/role/' + this.id + '/edit'
            if (this.type !== undefined) {
                url = 'api/company/checked/permission/' + this.id
            }
            axios.get(url).then((responce) => {
                if (this.type !== undefined) {
                    this.returnDatas = responce.data
                } else {
                    this.returnDatas = responce.data.permissions
                }
                if (this.returnDatas) {
                    this.editData()
                }
                this.$emit('return-checkeds', this.returnDatas)
            })
        },
        editData () {
            var lists = this.lists
            var edits = this.returnDatas
            var operates = this.operates
            $('body').find('.checkbox-input').each(function (i) {
                var val = $(this)[0]['_value']
                var check = edits.hasOwnProperty(val)
                if (check) {
                    $(this).siblings('.span-checkbox').prop('class', 'span-checkbox span-checked')
                    $(this).prop('checked', true)
                    $(this).siblings('.span-checkbox').prop('state', true)
                    var m = 0
                    for (let j in operates) {
                        if (edits[val].indexOf(j) >= 0) {
                            $(this).siblings('div').find('.span-checkbox').eq(m).prop('class', 'span-checkbox span-checked')
                            $(this).siblings('div').find('.span-checkbox').eq(m).prop('state', true)
                            $(this).siblings('div').find('input').eq(m).prop('checked', true)
                        }
                        m++
                    }
                }
            })
        },
        ses (ev) {
            var cls = 'span-checkbox span-checked'
            var state = $(ev.target).prop('state')
            if (state === undefined) {
                state = false
            }
            if (state) {
                cls = 'span-checkbox'
            }
            $(ev.target).prop('state', !state)
            $(ev.target).prop('class', cls)
            return [state, cls]
        },
        boxClick: function (e) {
            var arr = this.ses(e)
            var op = []
            var datas = []
            var $this = this
            if ($(e.target).next('input')[0] !== undefined) {
                $(e.target).next('input').prop('checked', !arr[0])
                // 最底层点击(第四级)
                if ($(e.target).siblings('div').find('input')[0] === undefined) {
                    var os = []
                    $(e.target).parent('span').parent('div').find('input').each(function (k) {
                        if ($(this).prop('checked')) {
                            os[k] = $(this).val()
                        }
                    })
                    var ke = $(e.target).parent('span').parent('div').siblings('input').val()
                    $this.returnDatas[ke] = os
                }
            }
            // 出最底层
            if ($(e.target).siblings('div').find('input')[0] !== undefined) {
                // 判断是否为第三层
                var cj = $(e.target).next('input').prop('class')
                if (cj === 'checkbox-input') {
                    $(e.target).next('input').prop('checked', !arr[0])
                    if ($(e.target).siblings('div').find('input')[0] !== undefined) {
                        var v = $(e.target).next('input').val()
                        $(e.target).siblings('div').find('input').each(function (item) {
                            op[item] = $(this).val()
                        })
                        if (arr[0]) {
                            $this.returnDatas[v] = []
                        } else {
                            $this.returnDatas[v] = op
                        }
                    }
                } else {
                    $(e.target).siblings('div').find('input').each(function (item) {
                        $(this).prop('checked', !arr[0])
                        if ($(this).siblings('div').find('input')[0] !== undefined) {
                            var v = $(this).val()
                            $(this).siblings('div').find('input').each(function (item) {
                                op[item] = $(this).val()
                            })
                            if ($(this).prop('checked')) {
                                if (arr[0] && v !== 0) {
                                    $this.returnDatas[v] = []
                                } else {
                                    $this.returnDatas[v] = op
                                }
                            } else {
                                $this.returnDatas[v] = null
                            }
                        }
                    })
                    console.log($this.returnDatas)
                }
            }
            // 改变class样式
            $(e.target).siblings('div').find('.span-checkbox').prop('class', arr[1])
            $(e.target).siblings('div').find('.span-checkbox').each(function (item) {
                $(this).prop('state', !arr[0])
            })
            this.$emit('return-checkeds', this.returnDatas)
        },
        threeClick (event) {
            // 当前点击状态
            var state = event.target.attributes.value.nodeValue
            var strClass = 'li fore show'
            var newState = 'show'
            var htl = '收起'
            if (state === 'show') {
                strClass = 'li fore hidden'
                newState = 'hidden'
                htl = '展开'
            }
            $(event.target).html(htl)
            // 点击状态重新赋值
            event.target.attributes.value.nodeValue = newState
            // 设置当前部分class
            event.toElement.nextElementSibling.attributes.class.nodeValue = strClass
        }
    }
}
</script>
<style lang="sass">

.allCheck{

    .wraps{
        width: 100%;
        height: auto;
        .checkbox-Box{
            cursor: pointer;
            margin-right:5px;
        }
        .checkbox-input, .checkbox-input2{
            display: none;
        }
        .span-check1{
            color:black;
            font-size:15px;
        }
        .span-check2{
            color:#333;
            font-size:13px;
        }
        .span-check3{
            color:#555;
            font-size:12px;
        }
        .span-checkbox{
            display: inline-block;
            position: relative;
            border: 1px solid #bfcbd9;
            border-radius: 4px;
            box-sizing: border-box;
            width: 18px;
            height: 18px;
            background-color: #fff;
            z-index: 1;
            transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
            color:white;
            text-align: center;
            line-height: 18px;
            cursor: pointer;
            margin-right:5px;
        }
        .span-checked{
            background-color:#009acb;
        }
        .li{
            height: auto;
        }
        .two,.three{
            margin-left: 25px;
            margin-top:10px;
        }
        .fore:first-child{
            margin-left: 25px;
        }
    } 
    .hors{margin-left: 10px;cursor: pointer;}
}
.hidden{display:none;}
.show{display:block;}
</style>
