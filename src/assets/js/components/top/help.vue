/**
 * @description:导航栏test模块
 * @author 郭森林
 * @date 2017/4/26 
 *  
 */ 
<template>
	<div class="help">
		<iframe :src="src" frameborder="0"></iframe>
	</div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: 'user',
    data () {
        return {
            src: ''
        }
    },
    methods: {
        ...mapActions([
            'change_siderBar'
        ]),
        systems () {
            var _this = this
            // 查询编辑数据
            axios.get('api/system/1/edit').then((responce) => {
                var data = responce.data.system
                if (data !== null && data !== undefined && data.help !== null) {
                    _this.src = require('projectRoot/env.js').app_url + '/' + data.help
                } else {
                    _this.$message('运营方还未上传文档')
                }
            })
        }
    },
    components: {
    },
    mounted () {
        this.systems()
        this.change_siderBar(true)
        localStorage.setItem('tab', 0)
    },
    created () {
        document.title = '帮助文档'
    }
}
</script>

<style lang="sass">
.help{
	height: 100%;
    overflow:hidden;
    padding-bottom:66px;
    box-sizing:border-box;
	iframe{
		width:100%;
		height:100%;
	}
}
</style>
