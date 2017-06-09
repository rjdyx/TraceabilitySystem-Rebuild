/**
 * 操作按钮组件
 * @description 
 * @author 舒丹彤
 * @date 2017/3/28 
 * 
 */
<template>
	<div class="operate_wrap">
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
			                  format="yyyy-MM-dd"
			                  @keyup.enter.native="returnRuselt"
			                  :picker-options="beforeOptions">
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
                value2: '',
                beforeOptions: {
                    disabledDate: (time) => {
                        let afterDateVal = this.value2
                        if (afterDateVal !== '') {
                            let timestamp = Date.parse(new Date(afterDateVal))
                            return time.getTime() >= timestamp
                        }
                    }
                },
                afterOptions: {
                    disabledDate: (time) => {
                        let beforeDateVal = this.value1
                        if (beforeDateVal !== '') {
                            let timestamp = Date.parse(new Date(beforeDateVal))
                            return time.getTime() <= timestamp
                        }
                    }
                }
            }
        },
        methods: {
            getSelect (name, val) {
                this.$emit('selectVal', [name, val])
            },
            getBeforeDate (val) {
                this.value1 = val
                this.$emit('dateVal', ['beforeDate', val])
            },
            getAfterDate (val) {
                this.value2 = val
                this.$emit('dateVal', ['afterDate', val])
            },
            returnRuselt () {
                // this.$emit('return-ruselt')
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
// @import '../../../sass/theme/theme.scss';
.operate_wrap{

.inline {
	display: inline-block;
	vertical-align: middle;
	margin-right: 10px;
}	
	.operate {
		float: left;

		.left{
			margin-left: 20px;
			display: inline-block;
		}
	}	
}
// .el-date-table{
// 	font-size: 20px;
// }
// .el-picker-panel{
// 	@include theme(color(red));
// }
</style>
