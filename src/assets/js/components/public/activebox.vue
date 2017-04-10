/**
 * 新建按钮组件
 * @description 
 * @author 吴燕萍
 * @date 2017/3/23
 * 
 */
<template>
	<div class="actionBox">
		<el-button type="primary" @click="confirmClick">确定</el-button>
		<el-button class="activecancel" @click="cancelClick">取消</el-button>
	</div>
</template>

<script>
    export default {
        methods: {
            confirmClick () {
                this.$parent.handleClick()
            },
            // 取消事件
            cancelClick () {
                this.$parent.closeClick()
            }
        }
    }
</script>

<style lang="sass" scoped>
.actionBox{
	text-align:-webkit-right;
	padding:20px 10px 50px 0;
	.activecancel{
		background-color:#cccccc;
		color:white;
	}
}
</style>
