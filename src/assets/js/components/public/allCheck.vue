/**
 * 权限多选组件
 * @description 
 * @author 吴燕萍
 * @date 2017/5/04
 * 
 */
<template>
<div class="allCheck">
    <el-checkbox v-model="checkAll" @change="handleCheckAllChange">{{name}}</el-checkbox>
    <div style="margin: 15px 0;"></div>
    <el-checkbox-group v-model="checkedMemus" @change="handleCheckedMemusChange" name='permission'>
        <el-checkbox v-for="(memu,i) in memus" :label="memu.id" :key="memu.id">{{memu.name}}</el-checkbox>
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
        lists: {},
        name: {
            type: String,
            default: ''
        },
        checkeds: ''
    },
    data () {
        return {
            activeName: 'first',
            checkedMemus: this.checkeds,
            checkAll: false,
            isIndeterminate: true,
            memus: this.lists
        }
    },
    mounted () {
    },
    methods: {
        handleCheckAllChange (event) {
            var arr = []
            for (var i = 0; i < this.memus.length; i++) {
                arr[i] = this.memus[i].id
            }
            // console.log(arr)
            this.checkedMemus = event.target.checked ? arr : []
            // this.isIndeterminate = false
            // this.$emit('return-isAllcheck', [this.name, this.checkAll])
        },
        handleCheckedMemusChange (value) {
            // console.log(value)
            let checkedCount = value.length
            this.checkAll = checkedCount === this.memus.length
            // this.isIndeterminate = checkedCount > 0 && checkedCount < this.memus.length
            // this.$emit('return-isAllcheck', [this.name, this.checkAll])
            this.$emit('return-checked', [this.name, value])
        }
    },
    computed: {
        checkAll: function () {
            // console.log('isAllCheck' + this.$store.state.isAllCheck)
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
