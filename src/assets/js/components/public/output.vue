<template>

	<el-button size="small" class="btn_change" @click="comeExcel">导出表格</el-button>

</template>

<script>
    export default {
        name: 'output',
        props: {
            url: '',
            checkObject: {},
            type: ''
        },
        data () {
            return {}
        },
        methods: {
            comeExcel () {
                var str = '?excel=all'
                if (this.type !== undefined) {
                    str += '&type=' + this.type
                }
                window.location.href = this.$adminUrl(this.url) + str
            }
        }
    }
</script>

<style>
	.btn_change {
		margin-left: 15px;
        color: #fff;
	}
</style>
