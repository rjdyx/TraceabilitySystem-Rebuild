    /**
 * 新建按钮组件
 * @description 
 * @author 舒丹彤
 * @date 2017/4/20
 * 
 */

<template>
	<div class="newWrap">
		<form class="newForm">
			<i class="el-icon-circle-close" @click="close"></i>
			<el-tabs v-model="activeName">
				<el-tab-pane :label="item.tab" :name="item.tab" v-for="(item,i) in more">
					<el-form :model="tableForm" :rules="rules" ref="tableForm" label-width="110px" class="demo-tableForm">
						<table>
							<template v-for="subItem in item.components">
								<tr class="tr1" v-if="subItem.type='text'">
									<td>
										<el-form-item :label="subItem.label" :prop="subItem.name">
											<el-input :placeholder="subItem.placeholder" v-model="tableForm[subItem.name]" size="small"></el-input>
										</el-form-item>
									</td>
								</tr>
		
								<tr class="tr1" v-else-if="subItem.type=='select'">
									<td>
										<el-form-item :label="subItem.label" :prop="subItem.name">
											<el-select v-model="tableForm[subItem.name]" :placeholder="subItem.placeholder" size="small">
												<el-option
													v-for="option in subItem.options" :label="option.label" :value="option.value" size="small">
												</el-option>
											</el-select>
										</el-form-item>
									</td>
								</tr>


								<tr class="tr1" v-else-if="subItem.type=='textarea'">
									<el-form-item :label="subItem.label" :prop="subItem.name">
										<el-input :placeholder="subItem.placeholder" type='textarea' v-model="tableForm[subItem.name]" size="small">
											
										</el-input>
									</el-form-item>
								</tr>	
							</template>
						</table>
						<el-form-item>
				           <div class="form-footer">
					            <el-button type="primary"  @click="submitForm('tableForm')">确定</el-button>
					            <el-button class="activecancel" @click="cancelClick">取消</el-button>
				            </div>
				        </el-form-item>
					</el-form>
				</el-tab-pane>
			</el-tabs>
		</form>
	</div>
</template>


<script>
export default {
    name: 'more-pop',
    data () {
        return {
            // show: false
        }
    },
    props: {
        type: '',
        more: {
            type: Array,
            default () {
                return []
            }
        }
    },
    methods: {
        close () {
            this.$parent.handleCommand('图片')
        }
    }
}
</script>

<style lang="sass">
@import "../../../sass/public/pop.scss"
</style>
