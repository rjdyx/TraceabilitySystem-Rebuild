/**
 * 展开更多的操作按钮标题组件 
 * @description:当点击按钮时，展开更多的操作按钮
 * @author 舒丹彤
 * @date 2017/7/24  
 *  
 */ 

<template>
    <div class="harvestMore">
        <el-dropdown @command="handleCommand">
            <el-button type="primary">
                更多
            <i class="el-icon-caret-bottom el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <template v-for="items in harvestMore">
                <el-dropdown-item :command='items.value'>
                    {{items.value}}
                </el-dropdown-item>
            </template>
          </el-dropdown-menu>
        </el-dropdown>
        <div class="harvestTime" v-if="showHarvest">
            <span>
                <label>开始日期：</label>
                <el-date-picker 
                  size="small"
                  v-model="value1"
                  type="date"
                  :editable="false"
                  @change="getBeforeDate"
                  format="yyyy-MM-dd"
                  :picker-options="beforeOptions" :class="small">
                </el-date-picker>
            </span>
            <span class="left">
              <label>结束日期：</label>
                <el-date-picker 
                  size="small"
                  v-model="value2"
                  type="date"
                  :editable="false"
                  @change="getAfterDate"
                  format="yyyy-MM-dd"
                  :picker-options="afterOptions">
                </el-date-picker>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'clickMore',
        props: {
            harvestMore: {
                type: Array,
                default: []
            }
        },
        data () {
            return {
                value1: '',
                value2: '',
                showHarvest: false
            }
        },
        methods: {
            handleCommand (command) {
                console.log(command)
                this.showHarvest = true
            }
        },
        components: {
        },
        mounted () {
        }
    }
</script>
<style lang="sass">
    .harvestMore{
        display: inline;
        .small {
            width:150px;
        }
    }
</style>
