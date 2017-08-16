/**
 * @description:导航栏company模块
 * @author 郭森林
 * @date 2017/5/05
 *  
 */ 
<template>
	<div class="company">
		<div class="company_content">
			<contain-title :settitle="settitle">
			</contain-title>
			<div class="titleUser">
                    <div class="picture">
                        <img v-if="logo" :src="logo" width="100%" height="100%"/>
                    </div>
                    <el-row :gutter="20" class="text">
                        <el-col :xs="12" :sm="12" :md="12" :lg="8" v-for="(v,k) in listN"  class="coltext">
                            {{v}} {{listV[k]}}
                        </el-col>
                    </el-row>
                    <div class="picture">
                        <img v-if="watermark" :src="watermark" width="100%" height="100%"/>
                    </div>
                    <el-button class="edit" @click="showEdit">编辑</el-button> 
			</div>
			<div class="mainPic">
				<img src="/public/images/rfid.png">
			</div>
			<footer-top></footer-top>
            <transition name="fade">
			    <companyEdit v-if="isShow" :editValue="listV" @updateValue="updateVal"></companyEdit>
            </transition>
            <!-- <transition name="fade">
                <userEdit v-if="isShow" :editValue="listV" @updateValue="updateVal"></userEdit>
            </transition> -->
		</div>
	</div>
</template>


<script>
import footerTop from './topComponent/footer.vue'
import ContainTitle from '../layout/contain-title.vue'
import companyEdit from './topComponent/companyEdit.vue'
import {mapActions} from 'vuex'
export default {
    name: 'company',
    data () {
        return {
            settitle: '公司信息管理',
            listN: {'name': '公司名称 :', 'coding': '公司编码 :', 'legal_person': '负责人/法人 :', 'short_name': '公司简称 :', 'USCC': '统一码 :', 'phone': '电话 :', 'address': '地址 :', 'business_scope': '经营范围 :', 'total_staff': '员工总数 :', 'website': '公司网站 :', 'sell_network': '销售网址 :'},
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
        ...mapActions([
            'change_siderBar'
        ]),
        showEdit (val) {
            this.isShow = !this.isShow
            if (val === 'false') {
                for (let key of Object.keys(this.editDefault)) {
                    this.listV[key] = this.editDefault[key]
                }
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
        this.change_siderBar(false)
        localStorage.setItem('tab', 0)
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
    },
    created () {
        document.title = '公司信息管理'
    }
}
</script>

<style lang="sass">
.fl{
    float:left;
}
.fr{
    float:right;
}
.company{
	height: 100%;
    overflow:hidden;
    padding-bottom:66px;
    box-sizing:border-box;
    .company_content{
    	overflow-y:scroll;
        height: 100%;
        box-sizing:border-box;
        padding:15px 10px 0px 10px;
        .titleUser{
        	border-bottom: 1px solid #dcdcdc;
        	padding-bottom: 10px;
        	position: relative;
        }
        .picture{
        	display: inline-block;
        	width: 140px;
        	height: 140px;
            position:absolute;
            top:50%;
            margin-top:-75px;
            border:1px solid rgb(229, 229, 229);
            img{
                width:100%;
                height:100%;
            }
        }
        .picture:first-of-type{
            left:0;
        }
        .picture:last-of-type{
            right:70px;
        }
        .text{
            width:100%;
            padding: 0px 220px 0px 150px;
        }
        .mainPic{
        	text-align: center;
        }
        .edit{
        	position: absolute;
        	right:0%;
        	bottom: 10%;
        	color: #fff;
        }
        .coltext{
        	font-size:14px;
        	color: #898989;
            padding: 10px;
        }
    }
}
</style>
