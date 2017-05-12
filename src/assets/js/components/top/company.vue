/**
 * @description:导航栏company模块
 * @author 郭森林
 * @date 2017/5/05
 *  
 */ 
<template>
	<div class="user">
		<div class="user_content">
			<contain-title :settitle="settitle">
			</contain-title>
			<div class="titleUser">
				<span class="picture">
					<img :src="logo" width="100%" height="100%"/>
				</span>
				<el-row :gutter="20" class="text">
					<el-col :span='8' v-for="(v,k) in listN"  class="coltext">
						 {{v}} {{listV[k]}}
					</el-col>
			 	</el-row>
			 	<span class="picture">
					<img :src="watermark" width="100%" height="100%"/>
				</span>
				<el-button class="edit" @click="showEdit">编辑</el-button>
			</div>
			<div class="mainPic">
				<img src="/public/images/rfid.png">
			</div>
			<footer-top></footer-top>
			<companyEdit v-if="isShow" :editValue="listV" @updateValue="updateVal"></companyEdit>
		</div>
	</div>
</template>


<script>
import footerTop from './topComponent/footer.vue'
import ContainTitle from '../layout/contain-title.vue'
import companyEdit from './topComponent/companyEdit.vue'
export default {
    name: 'user',
    data () {
        return {
            settitle: '公司信息管理',
            listN: {'name': '公司名称 :', 'coding': '公司编码 :', 'legal_person': '负责人/法人 :', 'short_name': '公司简称 :', 'USCC': '统一码 :', 'phone': '电话 :', 'address': '地址 :', 'business_scope': '经营范围 :', 'total_staff': '员工总数 :', 'website': '公司网站 :'},
            listV: {},
            editDefault: {},
            logo: '',
            watermark: '',
            isShow: false,
            isClass: true,
            id: ''
        }
    },
    methods: {
        showEdit () {
            this.isShow = !this.isShow
            for (let key of Object.keys(this.editDefault)) {
                this.listV[key] = this.editDefault[key]
            }
        },
        updateVal (val) {
            this.listV = val
            this.logo = val.logo
            this.watermark = val.watermark
        }
    },
    components: {
        ContainTitle,
        footerTop,
        companyEdit
    },
    mounted () {
        // 查询编辑数据
        axios.get('api/company/info')
            .then((responce) => {
                this.listV = responce.data
                for (let key of Object.keys(responce.data)) {
                    this.editDefault[key] = responce.data[key]
                }
                this.logo = responce.data.logo
                this.watermark = responce.data.watermark
                this.id = responce.data.id
            })
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
	overflow: hidden;
}
.text{
	display: inline-block;
	vertical-align: top;
	margin-bottom: 10px;
}
.mainPic{
	text-align: center;
}
.edit{
	position: absolute;
	right: 2%;
	bottom: 10%;
	color: #55BBA6;
}
.copyright{
    margin-top: 50px;
}
.coltext{
	font-size:14px;
	color: #898989;
}
}
</style>
