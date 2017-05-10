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
				<!-- 下拉框	 -->
				<el-select class="select inline" size="small" v-model="item.value" v-if="item.type=='select'" @change="getSelect(item.name,item.value)">
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
			                  type="date"
			                  :editable="false"
			                  @change="getBeforeDate"
			                  format="yyyy-MM-dd">
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
			                  format="yyyy-MM-dd">
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
            getSelect (name, val) {
                this.$emit('selectVal', [name, val])
            },
            getBeforeDate (val) {
                this.$emit('dateVal', ['beforeDate', val])
            },
            getAfterDate (val) {
                this.$emit('dateVal', ['afterDate', val])
            }
        },
        watch: {
            listComponent () {
                if (this.listComponent[0] !== undefined) {
                    this.listComponent[0].components[0].value = ''
                }
                this.value = ''
                this.value1 = ''
                this.value2 = ''
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
