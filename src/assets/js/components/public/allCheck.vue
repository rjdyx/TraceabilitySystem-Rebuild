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
        <el-checkbox v-for="(id,i) in memus" :label="id" :key="id">{{id}}:{{nameArr[i]}}</el-checkbox>
    </el-checkbox-group>
</div>
</template>
<script>
export default {
    name: 'validator-example',
    // validator: null,
    components: {
      // ActiveBox,
    },
    props: ['lists', 'name', 'checkeds'],
    data () {
        let idArr = []
        for (let key in this.lists) {
            idArr.push(this.lists[key].id)
        }
        let nameArr = []
        for (let key in this.lists) {
            nameArr.push(this.lists[key].name)
        }
        return {
            activeName: 'first',
            checkedMemus: [],
            checkAll: false,
            isIndeterminate: true,
            memus: idArr,
            nameArr: nameArr
        }
    },
    mounted () {
    },
    methods: {
        handleCheckAllChange (event) {
            this.checkedMemus = event.target.checked ? this.memus : []
            this.$emit('return-checked', [this.name, this.checkedMemus])
        },
        handleCheckedMemusChange (value) {
            let checkedCount = value.length
            this.checkAll = checkedCount === this.memus.length
            this.$emit('return-checked', [this.name, value])
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
