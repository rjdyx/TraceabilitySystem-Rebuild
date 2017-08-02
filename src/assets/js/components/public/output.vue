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
                    for (let k in this.type) {
                        str += '&' + k + '=' + this.type[k]
                    }
                }
                axios.get(this.$adminUrl(this.url) + str)
                    .then((responce) => {
                        if (typeof (responce.data) === 'object') {
                            if (responce.data.data.length === 0) {
                                this.$message('列表页为空')
                            }
                        } else {
                            window.location.href = this.$adminUrl(this.url) + str
                        }
                    })
            }
        }
    }
</script>

<style>
	.btn_change {
		margin-left: 15px;
        margin-bottom: 10px;
        color: #fff;
	}
</style>
