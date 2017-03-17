/*
 * tab组件
 * @description tab栏的种植场信息组件
 * @author 舒丹彤
 * @date 2017/3/15 
 * 
 */ 
<template> 
<div>
      <ul class="search">
        <li> 
            <el-input v-model="input" placeholder="请输入种植场进行搜索" size="small"></el-input>
        </li>
        <li>
            <el-button size="small">搜索</el-button>
        </li>
        <li>
            <el-button type="primary" size="small">导入</el-button>   
        </li>
        <li>
            <el-button type="primary" class="put-table" size="small">导出表格</el-button>
        </li>
        <li>
            <el-button type="primary" size="small">新建</el-button>
        </li>
    </ul>
    <div class="plantation-table">
        <basic-table :tableData="tableData"></basic-table>
    <el-col class="table-footer">
        <el-checkbox v-model="allChecked" class="checkall"></el-checkbox>
        <el-button class="delete">删除</el-button>
        <el-button class="put-table">导出表格</el-button>
        <div class="record">
            <p>共有{{page}}页，{{record}}条记录</p>
        </div>
    </el-col>
    </div>
</div>

</template>

<script>
import BasicTable from '../plant-basic/basic-table.vue'
	export default {
        name:'BasicPlantation',
        
        data (){
            return {
                listLoading:false,
                page:'1',
                record:'4',
                tableData: [{
                  date: 1,
                  plantation: '王小虎',
                  area: '上海',
                  operator: '普陀区',
                  address: '上海市普陀区金沙江路 1518 弄',
                  phone: 200333,
                  memo:"hrughru"
                }, {
                  date: 1,
                  plantation: '王小虎',
                  area: '上海',
                  operator: '普陀区',
                  address: '上海市普陀区金沙江路 1518 弄',
                  phone: 200333,
                  memo:"hrughru"
                }, {
                  date: 1,
                  plantation: '王小虎',
                  area: '上海',
                  operator: '普陀区',
                  address: '上海市普陀区金沙江路 1518 弄',
                  phone: 200333,
                  memo:"hrughru"
                }, {
                  date: 1,
                  plantation: '王小虎',
                  area: '上海',
                  operator: '普陀区',
                  address: '上海市普陀区金沙江路 1518 弄',
                  phone: 200333,
                  memo:"hrughru"
                },]
            }
        },
        computed: {},
        components:{
          BasicTable
        },
        methods: {
            //删除
            handleDel: function (index, row) {
              this.$confirm('确认删除该记录吗?', '提示', {
                type: 'warning'
              }).then(() => {
              }).catch(() => {

              });
            },
        }
       

    }
</script>

<style lang="sass" scoped>
    @import "../../../sass/function";
.el-input {
  width: 161px;
}

.el-button {
  width: 66px;
  font-size: 16px;
}

.put-table {
  width: 106px;
}

.search {
  overflow: hidden;
  li {
    display: inline-block;
    padding-left: 15px;
    &:nth-child(1) {
      float: left;
      padding-left: 0px;
    }
    &:nth-child(2) {
      float: left;
    }
    &:nth-child(3), &:nth-child(4), &:nth-child(5) {
      float: right;
    }
  }
}

.fl {
  float: left;
}

.fr {
  float: right;
}

.plantation-table {
  margin-top: 10px;
}

.oparate {
  width: 30px;
}

.table-footer {
  width: 100%;
  background: #f5f5f5;
  height: 50px;
  line-height: 50px;
}

.checkall {
  padding-left: 17px;
  padding-right: 10px;
}

.record {
  display: inline-block;
  float: right;
  padding-right: 10px;
}
</style>
