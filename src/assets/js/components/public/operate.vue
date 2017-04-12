/**
 * 操作按钮组件
 * @description 
 * @author 舒丹彤
 * @date 2017/3/28 
 * 
 */
<template>
	<div>
		<div v-for="item in listComponent" class="operate">
			<div class="inline operateBtn" v-for="item in item.components">
				<!-- 果蔬按钮 -->
				<div class="vegetableBtn" v-if="item.type=='vegetableBtn'">
					<el-button size="small">全部果蔬档案</el-button>
					<el-button size="small">蔬菜类</el-button>
					<el-button size="small">水果类</el-button>
				</div>
				<!-- 下拉框	 -->
				<el-select class="select inline" size="small" v-model="value" v-else-if="item.type=='select'" @change="getSelect">
					<el-option v-for="option in item.options" :label="option.label" :value="option.value">
					</el-option>
				</el-select>
				<!-- 日期 -->
				<div class="dateBtn" v-else-if="item.type=='date'">
					<span>
			              <label>开始日期：</label>
			                <el-date-picker 
			                  size="small"
			                  v-model="value1"
			                  type="date">
			                </el-date-picker>
			            </span>
					<span class="left">
			              <label>结束日期：</label>
			                <el-date-picker 
			                  size="small"
			                  v-model="value2"
			                  type="date">
			                </el-date-picker>
			            </span>
				</div>

			</div>
		</div>

	</div>
</template>

<script>
    export default {
        props: {
            listComponent: {
                type: Array,
                default () {
                    return []
                }
            }
        },
        data () {
            return {
                value: '',
                value1: '',
                value2: ''
            }
        },
        methods: {
            getSelect () {
                this.$emit('selectVal', this.value)
            }
        }
    }
</script>

<style lang="sass">
	.inline {
		display: inline-block;
		vertical-align: middle;
		margin-right: 10px;
	}	
	.operate {
		float: left;
	}
	.left{
		margin-left: 20px;
		display: inline-block;
	}
</style>
