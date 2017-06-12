/**
 * 搜索组件
 * @description 
 * @author 舒丹彤
 * @date 2017/3/16
 * 
 */
<template>
    <div class="search-top">
        <el-input v-model="input" placeholder="placeholder" size="small"></el-input>
        <el-button size="small">搜索</el-button>
    </div>
</template>

<script>
export default {
    name: 'search',
    props: {
        placeholder: {
            type: String,
            default: '请输入种植场进行搜索'
        },
        searchUrl: {
            type: String,
            default: '/'
        },
        params: {
            type: Object,
            default () {
                return {}
            }
        }
    },
    data () {
        return {
            searchInput: ''
        }
    },
    methods: {
      /**
     * 查询
     */
        search () {}
    }
}
</script>

<style lang="sass" scoped>

    @import "../../../sass/function";


</style>
