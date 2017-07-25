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
        <div class="harvestTime" v-if="showHarvest" v-for="time in harvestMore">
            <template v-for="dateitem in time.components">
                <component
                :is="dateitem.component" 
                :class="time">
                
            </component>
            </template>
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
                this.showHarvest = !this.showHarvest
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
