/**
 * 中间内容标题组件
 * 
 * @author 舒丹彤
 * @date 2017/3/15 
 * 
 */ 
 <template>
	<div class="content">
        <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
            <el-tab-pane label="种植场信息" name="first" class="search">
				<ul>
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
					<el-table :data="tableData" border style="width: 100%">
						<el-table-column label="序号" width="212" prop="date">
							<template scope="scope">
								<el-checkbox v-model="checked">1</el-checkbox>
							</template>
						</el-table-column>
						<el-table-column prop="plantation" label="种植场名称" width="212" sortable>
						</el-table-column>
						<el-table-column prop="area" label="种植面积" width="212" sortable>
						</el-table-column>
						<el-table-column prop="operator" label="负责人" width="212" sortable>
						</el-table-column>
						<el-table-column prop="address" label="详细地址" width="270" sortable>
						</el-table-column>
						<el-table-column prop="phone" label="联系电话" width="212" sortable>
						</el-table-column>
						<el-table-column prop="memo" label="备注信息" width="211">
						</el-table-column>
						<el-table-column label="操作" width="150">
							<template scope="scope">
								<el-button type="text" size="small" class="oparate">视频</el-button>
								<el-button type="text" size="small" class="oparate">查看</el-button>
								<el-button type="text" size="small" class="oparate">删除</el-button>
							</template>
						</el-table-column>
				</el-table>
			</div>
            </el-tab-pane>
            <el-tab-pane label="种植区信息" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="果蔬档案" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="肥料档案" name="fourth">定时任务补偿</el-tab-pane>
            <el-tab-pane label="农药药档案" name="five">定时任务补偿</el-tab-pane>
            <el-tab-pane label="专家档案" name="six">定时任务补偿</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
	export default {
        name:'BasicContent',
        data (){
            return {
                activeName2: 'first',
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
		        }, ]
            } 
        },
        computed: {},
         methods: {
         	 handleClick(tab, event) {
		        console.log(tab, event);
		      }
    }
       

    }
</script>

<style lang="sass" scoped>
    @import "../../../sass/function";
.content{
    	margin-top: 15px;
    	
    }
    .el-input{
    	width: 161px;
    }
    .el-button{
    	width: 66px;
    	font-size: 16px;
    }
    .put-table{
    	width: 106px;
    }
    .search{
    	overflow: hidden;
    }
    .search li{
    	display: inline-block;
    	padding-left: 15px;
    }
  .search li:nth-child(1){
    	float: left;
    	padding-left: 0px;
    }
    .search li:nth-child(2){
    	float: left;
    }
    .search li:nth-child(3){
    	float: right;
    }
    .search li:nth-child(4){
    	float: right;
    }
    .search li:nth-child(5){
    	float: right;
    }
    .fl{
    	float: left;
    }
    .fr{
    	float: right;
    }
.plantation-table{
	margin-top: 40px;
}
.oparate{
	width: 30px;
}
</style>
