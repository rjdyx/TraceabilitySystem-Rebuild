    /**
 * 新建按钮组件
 * @description 
 * @author 吴燕萍
 * @date 2017/3/21
 *  
 */


<template>
<div class="newWrap">
  <form class="newForm">
    <i class="el-icon-circle-close" @click="closeClick" ></i>
      <!-- tab选项卡 -->
      <!-- <h4>{{editComponent[0].tab}}</h4> -->
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane :label="item.tab" :name="item.tab" v-for="(item,i) in editComponent">
          <!-- 表单 -->
        <el-form :model="editForm" :rules="rules" ref="editForm" label-width="110px" class="demo-editForm">
            <table>
                <template v-for="subItem in item.components">
                    <!-- 文本框 -->
                    <tr v-if="subItem.type=='text'">
                        <td>
                            <el-form-item :label="subItem.label" :prop="subItem.name">
                                <el-input 
                                    :placeholder="subItem.placeholder" 
                                    v-model="editForm[subItem.name]" 
                                    size="small"
                                    :disabled="subItem.disabled"></el-input>
                            </el-form-item>
                        </td> 
                    </tr>

                    <!-- 下拉框 -->
                    <tr v-else-if="subItem.type=='select'"> 
                        <td>
                            <el-form-item :label="subItem.label" :prop="subItem.name">
                              <el-select v-model="editForm[subItem.name]" :placeholder="subItem.placeholder" size="small">
                                <el-option 
                                    v-for="option in subItem.options" 
                                    :label="option.label" 
                                    :value="option.value" 
                                    size="small"
                                    :disabled="subItem.disabled"></el-option>
                              </el-select>
                            </el-form-item>
                        </td>
                    </tr>

                    <!-- 多行文本框  -->
                    <tr v-else-if="subItem.type=='textarea'">
                        <el-form-item :label="subItem.label" :prop="subItem.name">
                            <el-input 
                                :placeholder="subItem.placeholder" 
                                type="textarea" 
                                v-model="editForm[subItem.name]" 
                                size="small"
                                :disabled="subItem.disabled"></el-input>
                        </el-form-item>
                    </tr>

                    <!-- 传组件 -->
                    <tr v-else-if="subItem.component">
                        <el-form-item :label="subItem.label" :prop="subItem.name">
                            <component 
                                v-if="subItem.type=='textSelect'"
                                v-bind:is="subItem.component" 
                                :shuju="subItem"
                                :inputEditValue="editForm[subItem.name]"
                                :selectEditValue="editForm['unit']"
                                @return-shuju="returnShuju"
                            ></component>
                            <component 
                                v-else
                                v-bind:is="subItem.component" 
                                :shuju="subItem"
                                :editValue="editForm[subItem.name]"
                                @return-shuju="returnShuju"
                            ></component>
                        </el-form-item>
                    </tr>
                </template>
          </table>
         </el-form>
        </el-tab-pane>
        <div class="form-footer">
            <el-button type="primary"  @click="submitForm('editForm')">确定</el-button>
            <el-button class="activecancel" @click="cancelClick">取消</el-button>
            edit
          </div>
      </el-tabs>
    </form>
</div>
</template>
<script>
export default {
    name: 'validator-example',
    // validator: null,
    components: {
      // ActiveBox,
    },
    props: {
        type: '',
        editComponent: {
            type: Array,
            default: []
        },
        editForm: {
            type: Object,
            default () {
                return {}
            }
        },
        url: '',
        changeDataArr: {}
    },
    data () {
        let rules = {}
        this.editComponent[0].components.forEach(function (item) {
            rules[item.name] = item.rule
        })
        return {
            // 当前选中的标签页
            activeName: this.editComponent[0].tab,
            rules: rules
        }
    },
    mounted () {
    },
    methods: {
        handleClick (tab, event) {
            console.log(tab, event)
        },
        // 返回InputTextSelect组件的数据
        returnShuju ({name, value}) {
            this.editForm[name] = value
        },
        // 关闭表单事件
        closeClick () {
            this.$parent.changeEditShow()
        },
        // 取消事件
        cancelClick () {
            this.$parent.changeEditShow()
        },
        /**
          * 提交表单
          */
        submitForm (formName) {
            this.$refs[formName][0].validate((valid) => {
                if (valid) {
                    var ret = this.$conversion(this.changeDataArr, this.editForm, 0)
                    let form = new FormData()
                    for (let key of Object.keys(ret)) {
                        if (ret[key] === '' || ret[key] === null) {
                            ret[key] = ''
                        }
                        form.append(key, ret[key])
                    }
                    form.append('_method', 'PUT')
                    let headers = {headers: {'Content-Type': 'multipart/form-data'}}
                    axios.post(this.$adminUrl(this.url + '/' + this.editForm.id), form, headers).then((response) => {
                        this.$emit('submitEdit', response.data)
                    }, (response) => {
                        this.$emit('submitEdit', 'false')
                    })
                } else {
                    return false
                }
            })
        }
    }
}
</script>
