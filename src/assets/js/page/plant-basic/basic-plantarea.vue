/**
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
          <el-select v-model="value" placeholder="种植场选择" class="select">
            <el-option
              v-for="item in options"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </li>
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
        <el-table :data="tableData"  style="width: 100%">
            <el-table-column  type="selection"  width="212"></el-table-column>
            <el-table-column prop="plantation" label="种植场名称" width="180" sortable align="center">
            </el-table-column>
            <el-table-column prop="area" label="种植面积" width="244" sortable align="center">
            </el-table-column>
            <el-table-column prop="operator" label="负责人" width="212" sortable align="center">
            </el-table-column>
            <el-table-column prop="address" label="详细地址" width="270" sortable align="center">
            </el-table-column>
            <el-table-column prop="phone" label="联系电话" width="212" sortable align="center">
            </el-table-column>
            <el-table-column prop="memo" label="备注信息" width="211">
            </el-table-column>
            <el-table-column label="操作" width="150" align="center">
                <template scope="scope">
                    <el-button type="text" size="small" class="oparate">视频</el-button>
                    <el-button type="text" size="small" class="oparate">查看</el-button>
                    <el-button type="text" size="small" class="oparate">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
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
  export default {
        name:'BasicPlantarea',
        
        data (){
            return {
                page:'1',
                record:'4',
                // select数据
                options:[
                  {
                    value:'选项1',
                    label:'阿克苏基地'
                  }
                ],
                //表格数据
                tableData: [{
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
         methods: {
            
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
.select{
  height:27px;
}

</style>
