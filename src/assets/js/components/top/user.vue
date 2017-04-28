/**
 * @description:导航栏test模块
 * @author 舒丹彤
 * @date 2017/4/26 
 *  
 */ 
<template>
	<div class="user">
		<div class="user_content">
			<contain-title :settitle="settitle">
			</contain-title>
			<div class="titleUser">
				<span class="picture">
					<img />
				</span>
				<el-row :gutter="20" class="text">
					<el-col :span='8' v-for="(item,index) in list">
						{{item}}
					</el-col>
				</el-row>
				<el-button class="edit" @click="showEdit">编辑</el-button>
			</div>
			<div class="mainPic">
				<img src="/public/images/rfid.png">
			</div>
			<footer-top></footer-top>
			<userEdit v-if="isShow"></userEdit>
		</div>
	</div>
</template>


<script>
import footerTop from '../top/footer.vue'
import ContainTitle from '../layout/contain-title.vue'
import userEdit from '../top/userEdit.vue'
export default {
    name: 'user',
    data () {
        return {
            settitle: '用户信息管理',
            list: ['用户名:', '姓名:', '所属公司:', '工号:', '性别:', '所属部门:', '用户类型:', '邮箱:', '皮肤:', '电话:', '出生日期:', '字体:'],
            isShow: false
        }
    },
    methods: {
        showEdit () {
            this.isShow = !this.isShow
        }
    },
    components: {
        ContainTitle,
        footerTop,
        userEdit
    }
}
</script>

<style lang="sass">
.user{
	height: 100%;
    overflow:hidden;
    padding-left:10px;
    .user_content{
    	margin-top: 15px;
    	overflow:scroll;
    	height: 100%;
    }
}
.titleUser{
	border-bottom: 1px solid #dcdcdc;
	padding-bottom: 10px;
	position: relative;
}
.picture{
	display: inline-block;
	width: 140px;
	height: 124px;
	border: 1px solid #ccc;
	margin:0 10px 0 30px;	
}
.text{
	display: inline-block;
	vertical-align: top;
}
.mainPic{
	text-align: center;
}
.edit{
	position: absolute;
	right: 2%;
	bottom: 10%;
	color: #fff;
}
.edit:hover{
	color: #ccc;
}
.edit:focus{
	color: #fff;
}
</style>
