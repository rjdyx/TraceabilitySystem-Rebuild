 /**
 * @description:导航栏的设置模块
 * @author 舒丹彤
 * @date 2017/4/25  
 *  
 */ 
<template> 
	<div class="set">
		<div class="set_content">
			<contain-title :settitle="settitle">
			</contain-title>
			<div class="switch">
			<el-form :model="editForm" :rules="rules" ref="editForm" label-width="110px" class="demo-editForm">
				<!-- 主题色切换 -->

					<el-form-item label="网站皮肤">
						<el-radio-group v-model="radio1" @change="switchColor">
						    <el-radio :label="1">清新时尚蓝<span class="bg blue-bg"></span></el-radio>
						    <el-radio :label="2">环保绽放绿<span class="bg green-bg"></span></el-radio>
						    <el-radio :label="3">高贵丁香紫<span class="bg purple-bg"></span></el-radio>
						    <el-radio :label="4">狂热活泼黄<span class="bg yellow-bg"></span></el-radio>
						</el-radio-group>
					</el-form-item>

					<el-form-item label="网站字体">
						<el-radio-group v-model="radio2"  @change="switchSize">
						    <el-radio :label="1">小号<span class="font small-inner">寻真溯源</span></el-radio>
						    <el-radio :label="2">中号<span class="font middle-inner">寻真溯源</span></el-radio>
						    <el-radio :label="3">大号<span class="font big-inner">寻真溯源</span></el-radio>
						</el-radio-group>
					</el-form-item>

					<el-form-item label="原始密码" prop='old_password'>
						<el-input type="password" auto-complete="off" placeholder="不填提交则不修改" v-model="editForm.old_password"></el-input>
					</el-form-item>

					<el-form-item label="新密码" prop='password' >
						<el-input type="password" auto-complete="off" placeholder="至少6位字符" v-model="editForm.password"></el-input>
					</el-form-item>

                    <el-form-item label="确认新密码" prop='checkPass' >
                        <el-input type="password" auto-complete="off" placeholder="至少6位字符" v-model="editForm.checkPass"></el-input>
                    </el-form-item>

					<el-form-item label="网站名称" prop='name' v-if="role">
						<el-input placeholder="请输入备案号" v-model="editForm.name" ></el-input>
					</el-form-item>

					<el-form-item label="网站备案" prop='record_number' v-if="role">
						<el-input placeholder="请输入备案号" v-model="editForm.record_number" ></el-input>
					</el-form-item>

					<el-form-item label="网站关键字" prop="keywords" v-if="role">
						<el-input placeholder="请输入关键字 多个请‘|’隔开" v-model="editForm.keywords" ></el-input>
					</el-form-item>
	
				<!-- <file></file> -->
					<el-form-item label="验证码开关"  prop='verify_state' v-if="role">
						<el-radio-group v-model="editForm.verify_state" >
						    <el-radio :label="1">开启</el-radio>
						    <el-radio :label="0">关闭</el-radio>
						</el-radio-group>
					</el-form-item>

					<el-form-item label="网站开关" prop="web_state" v-if="role">
						<el-radio-group v-model="editForm.web_state" >
						    <el-radio :label="1">开启</el-radio>
						    <el-radio :label="0">关闭</el-radio>
						</el-radio-group>
					</el-form-item>

					<el-form-item label="操作说明" v-if="role">
						<el-radio-group v-model="radio5">
						    <el-radio :label="0">显示操作说明</el-radio>
						    <el-radio :label="1">关闭操作说明</el-radio>
						</el-radio-group>
					</el-form-item>
            
                   <!--  <el-form-item label="帮助文档" prop="help" v-if="role">
                        <el-input type="file" v-model="editForm.help" name="help"></el-input>
                    </el-form-item> -->

				<el-form-item class="save" >
					<el-button @click="submitForm('editForm')" class="btn_change">保存</el-button>
				</el-form-item>
			</el-form>
			</div>
			<footer-top></footer-top>
		</div>
	</div>
</template>

<script>
import {mapActions} from 'vuex'
import ContainTitle from '../layout/contain-title.vue'
import footerTop from './topComponent/footer.vue'
import file from '../public/inputFile.vue'
export default {
    name: 'set',
    data () {
        let validatePass = (rule, value, callback) => {
            if (this.editForm.password !== '') {
                if (value !== '') {
                    if (value !== this.editForm.password) {
                        callback(new Error('两次输入密码不一致!'))
                    } else {
                        callback()
                    }
                } else {
                    callback(new Error('请再次输入密码'))
                }
            } else {
                callback()
            }
        }
        return {
            radio1: 1,
            radio2: 1,
            radio5: 0,
            settitle: '系统设置',
            role: false,
            editForm: {
                id: '',
                name: '',
                record_number: '',
                verify_state: 0,
                web_state: 0,
                keywords: '',
                old_password: '',
                password: '',
                checkPass: '',
                help: ''
            },
            rules: {
                checkPass: [
                    { validator: validatePass, trigger: 'blur' }
                ]
            }
        }
    },
    components: {
        ContainTitle,
        footerTop,
        file
    },
    methods: {
        ...mapActions([
            'change_siderBar',
            'switch_theme',
            'switch_font'
        ]),
        handleRemove (files, fileList) {
        },
        handlePreview (files) {
        },
        switchColor (label) {
            if (label === 1) {
                this.switchTheme('blue')
            } else if (label === 2) {
                this.switchTheme('green')
            } else if (label === 3) {
                this.switchTheme('purple')
            } else if (label === 4) {
                this.switchTheme('yellow')
            }
        },
        switchSize (label) {
            if (label === 1) {
                this.switchFont('small')
            } else if (label === 2) {
                this.switchFont('middle')
            } else if (label === 3) {
                this.switchFont('big')
            }
        },
        switchTheme (color) {
            this.switch_theme(color)
        },
        switchFont (size) {
            this.switch_font(size)
        },
        callbackMethed (data) {
            if (data === 'old_error') {
                this.$message('原始密码错误')
                this.editForm.old_password = null
            } else if (data === 'pas_error') {
                this.$message('新密码长度有误')
                this.editForm.password = null
            } else if (data === 'false') {
                this.$message.error('修改数据失败')
                this.editForm.password = null
                this.editForm.checkPass = null
                this.editForm.old_password = null
            } else if (data === 'set') {
                this.$message('请输入原始密码')
            } else {
                this.$message({
                    message: '修改数据成功',
                    type: 'success'
                })
                this.editForm.password = null
                this.editForm.checkPass = null
                this.editForm.old_password = null
            }
        },
        /**
          * 提交表单
          */
        submitForm (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    var ret = this.editForm
                    if (ret.id !== '') {
                        axios.put('api/system/1', ret).then((response) => {
                            this.callbackMethed(response.data)
                        })
                    } else {
                        axios.post('api/system', ret).then((response) => {
                            this.callbackMethed(response.data)
                        })
                    }
                } else {
                    return false
                }
            })
        }
    },
    mounted () {
        // true/关闭侧边栏
        // false/打开侧边栏
        this.change_siderBar(true)
        localStorage.setItem('tab', 0)
        let theme = this.$store.getters.getTheme
        switch (theme) {
        case 'blue':
            this.radio1 = 1
            break
        case 'green':
            this.radio1 = 2
            break
        case 'purple':
            this.radio1 = 3
            break
        case 'yellow':
            this.radio1 = 4
            break
        }
        let fontSize = this.$store.getters.getFont
        switch (fontSize) {
        case 'small':
            this.radio2 = 1
            break
        case 'middle':
            this.radio2 = 2
            break
        case 'big':
            this.radio2 = 3
            break
        }
        // 查询编辑数据
        axios.get('api/system/1/edit')
            .then((responce) => {
                if (responce.data.user.company_id === null) {
                    this.role = true
                } else {
                    this.editForm['id'] = responce.data.user.id
                }
                if (responce.data.system !== null && responce.data.system !== undefined) {
                    this.editForm['id'] = responce.data.system.id
                    this.editForm['name'] = responce.data.system.name
                    this.editForm['keywords'] = responce.data.system.keywords
                    this.editForm['verify_state'] = responce.data.system.verify_state
                    this.editForm['web_state'] = responce.data.system.web_state
                    this.editForm['record_number'] = responce.data.system.record_number
                }
            })
    },
    created () {
        document.title = '系统设置'
    }
}
</script>

<style lang="sass">

.set{
	height: 100%;
    overflow:hidden;
    padding-bottom:66px;
    box-sizing:border-box;
    .set_content{
    	overflow-y:scroll;
        height: 100%;
        box-sizing:border-box;
        padding:15px 10px 0px 10px;
		.switch{
			width: 500px;
			margin: 22px 94px;
		}
    }

.el-radio-group{
	text-align: right;
}
.el-radio__label{

}
.bg{
	width: 50px;
	height: 16px;
	display: inline-block;
	vertical-align: middle;
	margin-left: 10px;
}
.blue-bg{
	background: #009acb;
}
.btn_change{
	color: #fff;
}
.green-bg{
	background: #55BBA6;
}
.purple-bg{
	background: #895E9B;
}
.yellow-bg{
	background: #DEB355;
}
.el-radio{
	display: block;
	margin-top: 10px;
}
.font{
	color: #CCCCCC;
	border:1px solid #DCDCDC;
	margin-left: 22px;
}
.small-inner{
	font-size: 12px;
	padding: 2px 16px;
}
.middle-inner{
	font-size: 13px;
	padding: 2px 14px;
}
.big-inner{
	font-size: 14px;
	padding: 2px 12px;
}
.edition{
	padding-left: 13px;
}
.save{
	text-align: center;
}
}
</style>
