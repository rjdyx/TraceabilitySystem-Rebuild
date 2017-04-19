/**
 * 展开更多的操作按钮标题组件 
 * @description:当点击按钮时，展开更多的操作按钮
 * @author 舒丹彤
 * @date 2017/4/1  
 *  
 */ 

<template>
<div>
	<div>
		<el-dropdown class="more" @command="handleCommand">
			<span class="el-dropdown-link">
				更多
				<i class="el-icon-caret-bottom el-icon--right"></i>
			</span>
			<el-dropdown-menu slot="dropdown">
				<template v-for="btn in moreComponent">
					<el-dropdown-item :command="btn.value">{{btn.value}}</el-dropdown-item>
				</template>
			</el-dropdown-menu>  
		</el-dropdown>
	</div>
	<popNew v-if="isNewShow" :url="url" :newComponent="newComponent"></popNew>
</div>
</template>

<script>
    import more from '../../page/more/more.js'
    import popNew from '../public/popNew.vue'
    export default {
        name: 'clickMore',
        data () {
            return {
                isNewShow: false,
                newComponent: []
            }
        },
        props: {
            moreComponent: {
                type: Array,
                default: []
            }
        },
        methods: {
            handleCommand (command) {
                if (command === '状态') {
                    this.$confirm('你确定要删除此批次号吗?', '信息', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'error'
                    }).then(() => {
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        })
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消删除'
                        })
                    })
                } else if (command === '图片') {
                    this.isNewShow = true
                    // this.newComponent =
                }
            }
        },
        components: {
            popNew
        }
    }
</script>
<style lang="sass">
	.more{
		cursor: pointer;
		margin-right: 10px;
	}
</style>
