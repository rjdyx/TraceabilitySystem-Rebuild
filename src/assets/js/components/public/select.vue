/**
 * 搜索组件
 * @description 
 * @author 舒丹彤
 * @date 2017/3/16
 * 
 * Props:
 * 
 * @param  placeholder 
 * 类型：String
 * 是否必填：false
 * 默认值：'搜索'
 * 描述：input输入框的placeholder值
 * 
 * @param  searchUrl 
 * 类型：String
 * 是否必填：false
 * 默认值：'/'
 * 描述：搜索时请求的url
 * 
 *
 * 
 * 
 * Events:
 * 
 * @function callback
 * 返回：查询结果
 * 必用：true
 * 描述：返回如下格式的查询结果：
 *   {
 *        data: ,   //查询结果集
 *        last_page: ,  //分页总数
 *        query_text: , //搜索输入框内容
 *    }
 * 
 * 
 * Slots:
 *  
 * @name 
 * 位置：输入框之前
 * 默认内容：<el-select></el-select>
 * 
 */
<template>
    <div class="search-top">
            <el-select v-model="value" :placeholder="placeholder" class="select">
                <el-option
                  v-for="item in options"
                  :label="item.label"
                  :value="item.value">
                </el-option>
          </el-select>
    </div>
</template>

<script> 

    export default {
        name:'select',
        props:{
            placeholder: {
                type: String,
                default: '种植场基地'
            },
            params: {
                type: Object,
                default () {
                    return {}
                }
            }
        },
        data (){
            return {
                options:[
                  {
                    value:'选项1',
                    label:'阿克苏基地'
                  }
                ]
            }
        },
        computed: {

        },
        methods:{
        	
        }

    }



</script>

<style lang="sass" scoped>

    @import "../../../sass/function";


</style>