<template>
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
</template>

<script>
	export default{
		name:'BasicTable',
		props:{
			tableData:{
				type:Array,
				default:[]
			}
		},
		data(){
			return{

			}
		}
	}
</script>

















