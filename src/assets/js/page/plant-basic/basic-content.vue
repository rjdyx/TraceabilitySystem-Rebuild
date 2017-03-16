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
            <el-tab-pane label="种植场信息" name="first">
				<basic-plantation></basic-plantation>
            </el-tab-pane>
            <el-tab-pane label="种植区信息" name="second">
				<basic-plantarea></basic-plantarea>
            </el-tab-pane>
            <el-tab-pane label="果蔬档案" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="肥料档案" name="fourth">定时任务补偿</el-tab-pane>
            <el-tab-pane label="农药药档案" name="five">定时任务补偿</el-tab-pane>
            <el-tab-pane label="专家档案" name="six">定时任务补偿</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import BasicPlantation from '../plant-basic/basic-plantation.vue'
import BasicPlantarea from '../plant-basic/basic-plantarea.vue'
	export default {
        name:'BasicContent',
        data (){
            return {
            	checked:[],//勾选框数组
                activeName2: 'first',

            } 
        },
         methods: {
         	 handleClick(tab, event) {
		        //console.log(tab, event);
		      }

    	},
    	components:{
    		BasicPlantation,
    		BasicPlantarea,

    	}
       

    }
</script>

<style lang="sass" scoped>
    @import "../../../sass/function";
.content{
    	margin-top: 15px;
    	
    }
 
</style>
