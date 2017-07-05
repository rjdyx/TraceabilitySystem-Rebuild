/*
* 新建组件
* @description 
* @author 吴燕萍
* @date 2017/6/9
*/

<template>
    <div id="p_popNew">
        <header1 :settitle="settitle" :homeShow="false" :back="true" @setClassClear="goBackClear">
            <span slot="plan" class="newplan" v-if="planShow" @click="newPlanFn"></span> 
            <el-upload  
                class="upload-demo upload" 
                slot="upImg" 
                :action="importUrl" 
                v-if="uploadShow">
                <span class="upImg"></span>
            </el-upload>
        </header1>
        <group>
          <popup-radio class="newPlanRadio" title="options" :options="options2" v-model="option2" v-if="planShow"
                @on-change="getPlanInfo"></popup-radio>
        </group>
        <div class="ppN_content">
            <group label-width="4.5em" label-margin-right="2em" label-align="right">
                <div class="formItem" v-for="comItem in typeComponent.components" v-if="comItem.type !== 'file' && !comItem.hiddenSelect">
                    <!-- 文本框 -->
                    <x-input 
                        v-if="comItem.type ==='text'"
                        :inputName="comItem.name"
                        :title="comItem.label" 
                        :placeholder="comItem.placeholder" 
                        v-model="tableForm[comItem.name]"
                        @on-change="inputOnChange"
                        @on-blur="onBlur"
                        :disabled="comItem.disabled"
                        :class="[{ inputErrors: ruleTableForm[comItem.name].bol},{bggray: comItem.disabled}]"
                        >
                    </x-input>
                    
                    <!-- 时间框 -->
                    <datetime
                        :name="comItem.name" 
                        v-if="comItem.type === 'date'"
                        :title="comItem.label" 
                        v-model="tableForm[comItem.name]" 
                        value-text-align="left"
                        @on-dateHide="onDateHide"
                        :placeholder="comItem.placeholder"
                        start-date="2000-1-1" 
                        :end-date="toDate"
                        :readonly="comItem.disabled"
                        :format="comItem.format != undefined ? comItem.format : format"
                        confirm-text="确认"
                        cancel-text="取消" 
                        clear-text="清空"
                        :class="[{ inputErrors: ruleTableForm[comItem.name].bol},{bggray: comItem.disabled}]">
                    </datetime>

                    <!-- 滑动选择框 -->
                    <popup-picker
                        :name = "comItem.name"
                        v-if="comItem.type === 'select'"
                        :title="comItem.label" 
                        :data="comItem.options" 
                        :datakeys="comItem.optionskeys"
                        :placeholder="comItem.placeholder"
                        v-model="tableForm[comItem.name]"
                        @on-hide="onHide"
                        value-text-align="left"
                        :class="[{ inputErrors: ruleTableForm[comItem.name].bol},{bggray: comItem.disabled}]"
                        :disabled="comItem.disabled"
                        >
                    </popup-picker>

                    <!-- 多行文本框 -->
                    <x-textarea
                        :name = 'comItem.name'
                        v-if="comItem.type === 'textarea'"
                        :title="comItem.label" 
                        :placeholder="comItem.placeholder" 
                        :show-counter="false" 
                        :rows="3"
                        v-model="tableForm[comItem.name]"
                        :class="{ inputErrors: ruleTableForm[comItem.name].bol}"
                        @on-blur="textareaOnBlur"
                        @on-change="textareaOnChange"
                        >
                    </x-textarea>
                    
                    <!-- 文本与滑动选择框 -->
                    <div v-if="comItem.type === 'textSelect'">
                        <x-input 
                            :inputName="comItem.name"
                            :title="comItem.label" 
                            :placeholder="comItem.placeholder" 
                            v-model="tableForm[comItem.name]"
                            @on-change="inputOnChange"
                            @on-blur="onBlur"
                            :disabled="comItem.disabled"
                            :class="[{ inputErrors: ruleTableForm[comItem.name].bol},{bggray: comItem.disabled}]">
                        </x-input>
                        <popup-picker 
                            :name="comItem.name"
                            title="单位"
                            :data="comItem.options" 
                            v-model="tableForm['unit']"
                            @on-hide="onHide"
                            value-text-align="left"
                            :class="[{ inputErrors: ruleTableForm['unit'].bol},{bggray: comItem.disabled}]"
                            :disabled='comItem.disabled'
                            >
                        </popup-picker>
                    </div>

                    <!-- 选择框（可选择多个） -->
                    <div v-if="comItem.type === 'pcSelect'">
                        <div :class="[{pcDiv:true},{bggray: comItem.disabled}]" >
                            <div class="vux-cell-box" @click='pcShowFn(comItem)'>
                                <div :class="{ inputErrors: ruleTableForm[comItem.name].bol}">
                                    <div class="weui-cell vux-tap-active weui-cell_access">
                                        <div class="weui-cell__hd"><label class="weui-label" style="display: block; width: 4.5em; text-align: right; margin-right: 2em;">{{comItem.label}}</label>
                                        </div>
                                        <div class="vux-cell-primary vux-popup-picker-select-box">
                                            <div class="vux-popup-picker-select" style="text-align: left;">
                                                <span class="vux-popup-picker-placeholder">{{tableForm[comItem.name].length ? "已选择"+comItem.placeholder : "请选择"+comItem.placeholder}}</span>
                                            </div>
                                        </div>
                                        <div class="weui-cell__ft"></div>
                                    </div>
                                </div>
                            </div>
                            <!-- 列表 -->
                            <div class="pcList" v-if="tableForm[comItem.name].length">
                                <ul>
                                    <li v-for="item in tableForm[comItem.name]">
                                        <p v-for="itemOption in comItem.options" v-if='itemOption.key === item'>
                                            <input type="checkbox" checked disabled="disabled">{{itemOption.value}}
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <!-- 选择框的弹出框 -->
                        <div v-transfer-dom>
                          <popup v-model="comItem.show" position="bottom" height="100%">
                            <group>
                                <div class="pcAllcheck">
                                    <el-button @click="allcheckFn(comItem.name,comItem.options,true)" type="primary" size="small" >全选</el-button>
                                    <el-button @click="allcheckFn(comItem.name,comItem.options,false)" type="primary" size="small">全不选</el-button>
                                </div>
                                
                              <checklist title="请选择批次号" :options="comItem.options" v-model="tableForm[comItem.name]" @on-change="change"></checklist>
                            </group>
                            <div style="padding: 15px;">
                              <x-button @click.native="pcClose(comItem)" plain type="primary"> 关闭 </x-button>
                            </div>
                          </popup>
                        </div>
                    </div>
                    
                </div>
            </group>

            <!-- 图片选择框 -->
            <camera 
                v-for="comItem in typeComponent.components" 
                v-if="comItem.type === 'file'" 
                @return-shuju="returnShuju"
                :name="comItem.name"
                :editValue="tableForm[comItem.name]"
                :class="{ cameraErrors: ruleTableForm[comItem.name].bol}"
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
import message from '../webAppBasic/appmessage.js'
import Camera from '../../public/camera.vue'
import validate from '../../../utils/appValidate.js'
import Header1 from '../../public/header.vue'
import { XHeader, Actionsheet, TransferDom, Group, XInput, Selector, PopupPicker, Datetime, ChinaAddressData, XTextarea, Icon, XButton, Flexbox, FlexboxItem, PopupRadio, Popup, XSwitch, Cell, Checklist, Divider, Radio, Toast } from 'vux'
export default {
    name: 'p_popNew',
    directives: {
        TransferDom
    },
    data () {
        let type = this.$route.params.type
        let typeComponent = []
        let modelObj = {}
        Object.assign(modelObj, message)
        let form = {} // 装内容
        let ruleTableForm = {} // 装内容是否符合规则，boolean类型
        let url = modelObj[this.$route.params.model][this.$route.params.modelIndex].url
        let changeDataArr = modelObj[this.$route.params.model][this.$route.params.modelIndex].changeDataArr
        if (type === 'new') {
            typeComponent = modelObj[this.$route.params.model][this.$route.params.modelIndex].newComponent
            typeComponent[0].components.forEach(function (item) {
                if (item.type === 'textSelect') {
                    form[item.name] = ''
                    form['unit'] = [item.options[0][0]]
                    ruleTableForm['unit'] = {bol: false, rule: {required: item.rule.required}}
                    ruleTableForm[item.name] = {bol: false, rule: item.rule}
                } else if (item.type === 'select') {
                    form[item.name] = []
                    ruleTableForm[item.name] = {bol: false, rule: item.rule}
                } else if (item.type === 'pcSelect') {
                    form[item.name] = []
                    ruleTableForm[item.name] = {bol: false, rule: item.rule}
                } else {
                    form[item.name] = ''
                    ruleTableForm[item.name] = {bol: false, rule: item.rule}
                }
            })
        } else {
            typeComponent = modelObj[this.$route.params.model][this.$route.params.modelIndex].editComponent
            typeComponent[0].components.forEach(function (item) {
                if (item.type === 'textSelect') {
                    ruleTableForm['unit'] = {bol: false, rule: {required: item.rule.required}}
                    ruleTableForm[item.name] = {bol: false, rule: item.rule}
                } else if (item.type === 'select') {
                    ruleTableForm[item.name] = {bol: false, rule: item.rule}
                } else if (item.type === 'pcSelect') {
                    ruleTableForm[item.name] = {bol: false, rule: item.rule}
                } else {
                    ruleTableForm[item.name] = {bol: false, rule: item.rule}
                }
            })
            // 编辑Form格式
            form = {}
        }
        return {
            type: type, // 判断编辑模块还是新增模块的标志
            settitle: typeComponent[0].tab,
            planShow: typeComponent[0].plan,
            uploadShow: typeComponent[0].uploadShow,
            typeComponent: typeComponent[0],
            url: url,
            changeDataArr: changeDataArr,
            // form: {},
            tableForm: form,
            ruleTableForm: ruleTableForm,
            show13: false,
            objectListValue: ['15', '2'],
            selectHideId: {},
            defaultInit: {},
            isEdit: false,
            successMsg: '',
            errorMsg: '',
            // 提交路径
            submitUrl: '',
            // 编辑id
            editId: '',
            // 图片
            hasImg: false,
            setId: '',
            // 今天日期
            toDate: '',
            // 默认日期格式
            format: 'YYYY-MM-DD',
            option2: '',
            options2: [],
            bbb: true
        }
    },
    methods: {
        pcShowFn (comItem) {
            comItem.show = !comItem.show && !comItem.disabled
        },
        change (val) {
        },
        allcheckFn (name, options, bol) {
            if (bol) {
                this.tableForm[name] = []
                options.forEach((item) => {
                    this.tableForm[name].push(item.key)
                })
            } else {
                this.tableForm[name] = []
            }
        },
        /*
        x-textarea组件的方法
        修改了vex里面x-textarea组件的onBlur,参数name
        修改了vex里面x-textarea组件的onChange,参数value，name
        组件还需要传多一个：name的属性
        */
        textareaOnBlur (name) {
            this.validateFn({name: name})
        },
        textareaOnChange (value, name) {
            this.validateFn({name: name})
        },
        /*
        popup-picker组件的方法
        修改了vex里面popup-pickert组件的onHide, 原参数只有type，现在是{closeType: this.closeType, name: this.name, index: 选择的数组下标}。
        popup-picker组件还需要传多一个：name的属性
        */
        onHide (obj) {
            // (name, rule, value)
            var _this = this
            if (obj.closeType) {
                this.typeComponent.components.forEach(function (item) {
                    if (item.name === obj.name) {
                        if (item.name !== 'amount') {
                            _this.selectHideId[item.name] = item.optionskeys[0][obj.index]
                        } else {
                            _this.selectHideId['unit'] = item.optionskeys[0][obj.index]
                        }
                        // 关联查询获取多变量
                        if (item.assoc !== undefined) {
                            if (_this.setId !== item.optionskeys[0][obj.index]) {
                                _this.setId = item.optionskeys[0][obj.index]
                                _this.getCheckVal(item.assoc, item.position, item.name, item.optionskeys[0][obj.index], item.clearArr)
                            }
                        }
                        // 物流查询分类模块,并展示模块
                        if (item.selectNumber !== undefined) {
                            _this.showModel(item.selectNumber, item.name, item.optionskeys[0][obj.index], item.positionArr, item.typeArr)
                        }
                    }
                })
            }
            this.validateFn(obj)
        },
        // 默认值存储进onHide
        defaultHide () {
            var _this = this
            this.typeComponent.components.forEach(function (item) {
                if (item.name === 'amount') {
                    if (_this.url !== 'code') {
                        _this.selectHideId['unit'] = item.optionskeys[0][0]
                    }
                }
            })
        },
        // 获取关联查询(关联字段查询assoc，所处位置position, 查询条件whereName, 查询条件id, 清空条件clearArr)
        getCheckVal (assoc, position, whereName, id, clearArr) {
            this.tableForm[clearArr] = []
            let dataArr = this.$addAndEditSelectMethod(assoc)
            let data = {table: dataArr.selectUrl, whereName: whereName, id: id}
            this.$dataGet(this, '/util/assoc', data)
                .then((responce) => {
                    if (responce.data !== '') {
                        if (responce.data.length !== 0) {
                            let dataOpt = this.$getCheckSelect(responce.data, dataArr.selectArr)
                            if (dataOpt[0] === 'check') {
                                this.typeComponent.components[position].options = dataOpt[1]
                            } else {
                                this.typeComponent.components[position].options = dataOpt[1]
                                this.typeComponent.components[position].optionskeys = dataOpt[0]
                            }
                        }
                    }
                })
        },
        // 获取关联模块(模块对象所在位置selectNumber，模块索引名称name, 模块索引值key, 位置数组positionArr, 表单类型typeArr)
        showModel (selectNumber, name, key, positionArr, typeArr) {
            for (let index in selectNumber) {
                if (index === key) {
                    for (let i in positionArr) {
                        if (selectNumber[index].indexOf(parseInt(i)) !== -1) {
                            if (typeArr[i] === 'text') {
                                this.tableForm[positionArr[i]] = ''
                            } else {
                                this.tableForm[positionArr[i]] = []
                            }
                            this.typeComponent.components[i].hiddenSelect = false
                        } else {
                            if (typeArr[i] === 'text') {
                                this.tableForm[positionArr[i]] = 'a'
                            } else {
                                this.tableForm[positionArr[i]] = ['a']
                            }
                            this.typeComponent.components[i].hiddenSelect = true
                        }
                    }
                }
            }
        },
        /*
        x-input组件的方法
        修改了vex里面x-input组件的onChange, onBlur方法，原参数是字符串，现在是obj{name:name,value:value}。
        x-input组件还需要传多一个：inputName的属性
        */
        validateFn (obj) {
            // (name, rule, value)
            let result = validate.fn(obj.name, this.ruleTableForm[obj.name].rule, this.tableForm[obj.name])
            if (result.valid) { // true验证成功
                this.ruleTableForm[obj.name].bol = false
                return result
            } else { // 验证失败
                this.ruleTableForm[obj.name].bol = true
                return result
            }
        },
        inputOnChange (obj) {
            this.validateFn(obj)
        },
        onBlur (obj) {
            this.validateFn(obj)
        },

        /*
        datatime验证
        datetime组件的方法
        添加了vex里面x-input组件的onDateHide方法，参数obj{name:name}。
         datatime组件还需要传多一个：name的属性
        */
        onDateHide (obj) {
            this.validateFn(obj)
        },

        // 批次号验证
        pcClose (comItem) {
            comItem.show = !comItem.show
            this.validateFn({name: comItem.name})
        },
        // 顶部返回清空样式
        goBackClear () {
            this.clearClass()
        },
        /*
        取消表单
        */
        cancelForm () {
            this.$router.go(-1)
            this.clearClass()
        },
        // 提示弹窗
        setToast (type, text, width = '7.6em') {
            this.$vux.toast.show({
                type: type,
                text: text,
                width: width,
                position: 'middle'
            })
        },
        /*
        提交表单
         */
        submitForm () {
            let allValBol = true
            for (let key in this.ruleTableForm) {
                let fnBol = this.validateFn({name: key, rule: this.ruleTableForm[key], value: this.tableForm[key]}).valid
                allValBol = allValBol && fnBol
            }
            if (allValBol) {
                let submitVal = this.$changeSubmit(this.tableForm, this.selectHideId)
                let beforeS = this.$changeMutual(submitVal, this.changeDataArr, 1)
                var _this = this
                this.$dataPost(this, this.submitUrl, beforeS, this.hasImg, this.typeComponent.hiddenValue, this.isEdit).then((response) => {
                    if (response.data !== 'false') {
                        _this.setToast('success', _this.successMsg, '12em')
                    } else {
                        _this.setToast('cancel', _this.errorMsg, '12em')
                    }
                    this.clearClass()
                    this.$router.go(-1)
                })
            } else {
                this.setToast('text', '请输入完整信息', '12em')
            }
        },
        // 获取下拉框或多选框信息
        getSelectInfo () {
            var com = this.typeComponent
            if (com.checkBoxUrl) {
                for (let key in com.checkBoxUrl) {
                    let dataArr = this.$addAndEditSelectMethod(com.checkBoxUrl[key])
                    let data = {table: dataArr.selectUrl}
                    // 多条件查询
                    if (com.selectValue !== undefined && com.selectValue[key] !== '') {
                        let arr = this.selectCheckSearch(com.selectValue[key])
                        data.where = arr
                    }
                    this.$dataGet(this, '/util/selects', data)
                        .then((responce) => {
                            if (responce.data !== '') {
                                if (responce.data.length !== 0) {
                                    let dataOpt = this.$getCheckSelect(responce.data, dataArr.selectArr)
                                    if (dataOpt[0] === 'check') {
                                        com.components[com.checkBoxPosition[key]].options = dataOpt[1]
                                    } else {
                                        com.components[com.checkBoxPosition[key]].options = dataOpt[1]
                                        com.components[com.checkBoxPosition[key]].optionskeys = dataOpt[0]
                                    }
                                } else {
                                    com.components[com.checkBoxPosition[key]].options = [['']]
                                }
                            }
                        })
                }
            }
        },
        // 获取编辑数据
        getEditInfo () {
            var type = this.type
            if (type.indexOf('edit') !== -1) {
                this.editId = type.replace('edit', '')
            }
            this.$dataWapGet(this, this.url + '/' + this.editId + '/edit', {})
                .then((responce) => {
                    // 编辑触发回调
                    if (this.typeComponent.editState) {
                        this.editCallBack(this.typeComponent.editState, responce.data)
                    }
                    if (this.typeComponent.arrBox) {
                        let beforeVal = this.$changeMutual(responce.data, this.changeDataArr, 0)
                        let initVal = this.$changeArrBox(beforeVal, this.typeComponent.arrBox)
                        this.tableForm = initVal[0]
                        this.selectHideId = initVal[1]
                    } else {
                        this.tableForm = responce.data
                    }
                })
        },
        // 编辑回调触发事件(回调字段editState，集合数值ret)
        editCallBack (editState, ret) {
            var com = this.typeComponent.components
            for (let item in editState) {
                if (com[item].selectNumber !== undefined) {
                    for (let key in com[item].selectNumber) {
                        if (ret[editState[item]] === key) {
                            for (let i in com[item].positionArr) {
                                if (com[item].selectNumber[key].indexOf(com[item].positionArr[i]) !== -1) {
                                    com[com[item].positionArr[i]].hiddenSelect = false
                                } else {
                                    com[com[item].positionArr[i]].hiddenSelect = true
                                }
                            }
                        }
                    }
                }
            }
        },
        /*
        返回图片信息
         */
        returnShuju (obj) {
            if (obj === 'type') {
                this.setToast('text', '请上传jpeg或png的图片', '15em')
            } else if (obj === 'size') {
                this.setToast('text', '请输入小于300k图片', '15em')
            } else {
                this.tableForm[obj.name] = obj.value
                this.validateFn({name: obj.name, rule: this.ruleTableForm[obj.name], value: this.tableForm[obj.name]})
            }
        },
        resetScroller () {
            this.$nextTick(() => {
                this.$refs.scroller.reset()
            })
        },
        // 新增编辑公共专用
        basicModel () {
            this.getSelectInfo()
            if (this.typeComponent.hasImg) {
                this.hasImg = true
            }
        },
        // 多条件查询
        selectCheckSearch (data) {
            var arr = []
            for (let k in data) {
                arr[k] = [data[k].n, data[k].v]
                if (data[k].s !== undefined) {
                    if (data[k].s) {
                        arr[k].push(true)
                    }
                }
            }
            return arr
        },
        // 获取今天时间
        getToDate () {
            var _this = this
            this.typeComponent.components.forEach(function (item) {
                if (item.type === 'date') {
                    _this.toDate = _this.$getLocalTime(Date.now())
                    _this.tableForm[item.name] = _this.toDate
                }
            })
        },
        // 新增获取默认值
        getDefaultInit () {
            for (let key of Object.keys(this.tableForm)) {
                this.defaultInit[key] = this.tableForm[key]
            }
        },
        // 清空样式
        clearClass () {
            if (this.typeComponent.planPosition !== undefined) {
                for (let index in this.typeComponent.planPosition) {
                    this.typeComponent.components[this.typeComponent.planPosition[index]]['disabled'] = false
                }
                this.typeComponent['hiddenValue'] = ''
            }
            if (this.typeComponent.planIds === 'rfid_ids') {
                this.typeComponent.components[this.typeComponent.planSelectArrPosition].options = []
            }
        },
        // 获取计划
        newPlanFn () {
            let params = {type: this.url}
            this.$dataGet(this, 'plan/getPlanInfo', params)
                .then((responce) => {
                    if (responce.data.length !== 0) {
                        let arr = this.$selectDataArr(responce.data, this.typeComponent.planArr, this.typeComponent.planString)
                        this.options2 = arr
                        $('.newPlanRadio').click()
                    } else {
                        this.setToast('text', '当前日期无计划', '13em')
                    }
                })
        },
        // 填充计划
        getPlanInfo (val) {
            if (val !== '') {
                let params = {type: this.url, id: val}
                this.$dataGet(this, 'plan/selectPlan', params)
                    .then((responce) => {
                        let arrId = []
                        let initVal = this.$changeArrBox(responce.data.planData, this.typeComponent.planBox)
                        for (let key of Object.keys(initVal[0])) {
                            this.tableForm[key] = initVal[0][key]
                        }
                        if (this.typeComponent.planIds !== undefined) {
                            if (this.typeComponent.planIds === 'rfid_ids') {
                                let dataOpt = this.$getCheckSelect(responce.data.planList, this.typeComponent.planSelectArr)
                                if (dataOpt[0] === 'check') {
                                    this.typeComponent.components[this.typeComponent.planSelectArrPosition].options = dataOpt[1]
                                }
                            }
                            for (let item in responce.data.planList) {
                                arrId.push(responce.data.planList[item].id)
                            }
                            this.tableForm[this.typeComponent.planIds] = arrId
                        }
                        if (this.typeComponent.planPosition !== undefined) {
                            for (let index in this.typeComponent.planPosition) {
                                this.typeComponent.components[this.typeComponent.planPosition[index]]['disabled'] = true
                            }
                        }
                        this.selectHideId = initVal[1]
                        this.typeComponent['hiddenValue'] = {'plan_id': val}
                    })
            } else {
                for (let key of Object.keys(this.defaultInit)) {
                    this.tableForm[key] = this.defaultInit[key]
                }
                this.clearClass()
            }
        }
    },
    created () {
        $('#app').removeClass('bule').addClass('gray')
    },
    mounted () {
        // 新增编辑公共专用
        this.basicModel()
        // 编辑
        if (this.type !== 'new') {
            this.getEditInfo()
            this.isEdit = true
            this.successMsg = '编辑数据成功'
            this.errorMsg = '编辑数据失败'
            this.submitUrl = this.url + '/' + this.editId
        // 新增
        } else {
            this.defaultHide()
            this.getToDate()
            this.getDefaultInit()
            this.isEdit = false
            this.successMsg = '新增数据成功'
            this.errorMsg = '新增数据失败'
            this.submitUrl = this.url
        }
    },
    watch: {
    },
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
        Camera,
        Popup,
        XSwitch,
        Cell,
        Checklist,
        Divider,
        Radio,
        Toast,
        Header1
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
        padding: 15px 15px;
        margin-right:0px!important;
        width:6em!important;
    }
.vux-popup-picker-header{
    color: #009acb!important;
}
.dp-header{
    .dp-item.dp-left,.dp-item,.dp-item.dp-right {
        color: #009acb!important;
    }
}
.pcDiv{
    .pcList{
        border-top: 1px solid #D9D9D9;
        max-height:3rem;
        overflow:scroll;
        padding:.2rem .3rem;
        background:white;
        li{
            line-height:.6rem;
            input{
                vertical-align: text-bottom;
                margin-right:10px;
            }
        }
    }
}
.inputErrors{
    color:red!important;
}
.cameraErrors{
    border-color:red!important;
}
.weui-cells_checkbox .weui-check:checked + .vux-checklist-icon-checked:before
{
    color: #20a0ff!important;
}
.weui-btn_plain-primary{
    color: #20a0ff!important;
    border: 1px solid #20a0ff!important;
}
.bggray{
    background:#eef1f6;
}
.pcAllcheck{
        padding-top:.2rem;
        padding-left:.4rem;
    }
#p_popNew{
    .newPlanRadio{
        position:absolute;
        z-index:-5;
        opacity:0;
    }
    .checkbox{
        background-color:$labelBgCol;
    }
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
        .vux-popup-picker-select{
           margin-left:10px; 
        }
    }
    
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
    .upload{
        width: 9%;
        height: 36px;
        display: inline-block;
        position: absolute;
        left: 5%;
        top: 11%;
    }
    .upImg{
        width:100%;
        height: 36px;
        display: inline-block;
        background: url(/public/images/upLoad.png) no-repeat;
        background-position: 100%;
    }
    .el-upload{
        width: 9%;
        height: 36px;
    }
}
</style>
