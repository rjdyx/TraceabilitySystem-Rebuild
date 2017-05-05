/**
 * 权限多选组件
 * @description 
 * @author 吴燕萍
 * @date 2017/5/04
 * 
 */
<template>
<div class="allCheck">
    <el-checkbox v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
    <div style="margin: 15px 0;"></div>
    <el-checkbox-group v-model="checkedMemus" @change="handleCheckedMemusChange">
        <el-checkbox v-for="(memu,i) in memus" :label="memu" :key="memu">{{memu}}</el-checkbox>
    </el-checkbox-group>
</div>
</template>
<script>
import vuexStore from '../../vuex/modules/isAllCheck.js'
export default {
    name: 'validator-example',
    store: vuexStore,
    // validator: null,
    components: {
      // ActiveBox,
    },
    props: {
        lists: {
            type: Array,
            default () {
                return []
            }
        },
        name: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            activeName: 'first',
            checkedMemus: [],
            checkAll: false,
            isIndeterminate: true,
            memus: this.lists
        }
    },
    mounted () {
    },
    methods: {
        handleCheckAllChange (event) {
            this.checkedMemus = event.target.checked ? this.memus : []
            this.$emit('return-isAllcheck', [this.name, this.checkAll])
        },
        handleCheckedMemusChange (value) {
            let checkedCount = value.length
            this.checkAll = checkedCount === this.memus.length
            this.$emit('return-isAllcheck', [this.name, this.checkAll])
        }
    },
    computed: {
        checkAll: function () {
            console.log('isAllCheck' + this.$store.state.isAllCheck)
            return this.$store.state.isAllCheck
        }
    }
}
</script>
<style lang="sass">
.allCheck{
    margin-bottom:20px;
    >div:nth-of-type(1){
        margin:0px!important;
    }
    .el-checkbox-group{
        margin-left:20px;
        .el-checkbox {
            margin-left: 15px;
        }
    }
    
}
</style>
