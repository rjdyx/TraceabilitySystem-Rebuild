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
					<img :src="img" width="100%" height="100%"/>
				</span>
				<el-row :gutter="20" class="text">
					<el-col :span='8' v-for="(v,k) in listN"  class="coltext">
						 {{v}} {{listV[k]}}
					</el-col>
			 	</el-row>
				<el-button class="btn_change" @click="showEdit">编辑</el-button>
			</div>
			<div class="mainPic">
				<img src="/public/images/rfid.png">
			</div>
			<footer-top></footer-top>
            <transition name="fade">
			    <userEdit v-if="isShow" :editValue="listV" :changeDataArr="changeDataArr"></userEdit>
            </transition>
		</div>
	</div>
</template>


<script>
import footerTop from './topComponent/footer.vue'
import ContainTitle from '../layout/contain-title.vue'
import userEdit from './topComponent/userEdit.vue'
import {mapActions} from 'vuex'
export default {
    name: 'user',
    data () {
        return {
            settitle: '用户信息管理',
            listN: {'name': '用户名 :', 'realname': '真实姓名 :', 'number': '工号 :', 'gender': '性别 :', 'department': '所属部门 :', 'type': '用户类型 :', 'email': '邮箱 :', 'phone': '电话 :', 'birth_date': '出生日期 :'},
            listV: {},
            editDefault: {},
            img: '',
            isShow: false,
            isClass: true,
            changeDataArr: [{gender: {0: '男', 1: '女'}}, {type: {0: '高级管理员', 1: '管理员'}}]
        }
    },
    methods: {
        ...mapActions([
            'change_siderBar'
        ]),
        showEdit (val) {
            this.isShow = !this.isShow
            if (val === 'false') {
                for (let key of Object.keys(this.editDefault)) {
                    this.listV[key] = this.editDefault[key]
                }
            } else {
                this.getUserData()
            }
        },
        getUserData () {
            // 查询编辑数据
            axios.get('api/system/1/edit')
                .then((responce) => {
                    var ret = this.$conversion(this.changeDataArr, responce.data, 1)
                    this.listV = ret.user
                    for (let key of Object.keys(ret.user)) {
                        this.editDefault[key] = ret.user[key]
                    }
                    this.img = ret.user.img
                })
        }
    },
    components: {
        ContainTitle,
        footerTop,
        userEdit
    },
    mounted () {
        this.change_siderBar(true)
        localStorage.setItem('tab', 0)
        this.getUserData()
    },
    created () {
        document.title = '用户信息管理'
    }
}
</script>

<style lang="sass">
$line: 1px solid;
$display: inline-block;
.user{
	height: 100%;
    overflow:hidden;
    padding-bottom:66px;
    box-sizing:border-box;
    .user_content{
    	overflow-y:scroll;
        height: 100%;
        box-sizing:border-box;
        padding:15px 10px 0px 10px;
    	.titleUser{
			border-bottom: $line #dcdcdc;
			padding-bottom: 10px;
			position: relative;
			.picture{
                float:left;
				width: 140px;
				height: 140px;
				margin:0 10px 0 0px;
			}
			.text{
				width: 100%;
                box-sizing:border-box;
                padding-left:160px;
			}
			.btn_change{
				position: absolute;
				right: 0%;
				bottom: 10%;
				color: #fff;
			}
			.coltext{
				font-size:14px;
				color: #898989;
				padding: 10px;
			}
		}
		.mainPic{
			text-align: center;
		}
    }
}
</style>
