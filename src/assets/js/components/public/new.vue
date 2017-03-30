		/**
 * 新建按钮组件
 * @description 
 * @author 吴燕萍
 * @date 2017/3/21
 * 
 */


<template>
<div class="newWrap">
	<form class="newForm">
		<i class="el-icon-circle-close" @click="closeClick" ></i>
		<template>
		  <el-tabs v-model="activeName">
		    <el-tab-pane v-for="item in newComponent" :label="item.tab" :name="item.tab" >
		    	<ul class="newMain">
		    		<!-- <component 
						v-for="components in item.components" 
						v-bind:is="components.component" 
						:isNull="components.isNull"
						:label="components.label"
						:rule="components.rule"
						:placeholder="components.placeholder"
						:options="components.options">
					</component> -->
					<li class="inputItem" v-for="item in item.components">
						<em class="input-imp" v-if="item.isNull===false">*</em>
						<label class="input-label"  v-if="item.type!=='file'" for="inputText" >{{item.label}}&nbsp&nbsp:</label>
						<!-- 文本框 -->
						<input 
							v-if="item.type=='text'" 
							type="text" 
							:placeholder="item.placeholder"
							:name="item.name" 
                            v-model="form[item.name]" 
                            v-validate.initial="form[item.name]" 
                            :data-vv-rules="item.rule" 
                            :data-vv-as="item.label"
                            :class="{'input-pop': true, 'el-input__inner': true,'is-error': verrors.has(item.name)}"
							>
						<!-- 多行文本框 -->
						<textarea 
							:class="{'input-pop': true, 'el-textarea__inner': true,'is-error': verrors.has(item.name)}"
							v-else-if="item.type=='textarea'" 
							cols="30" 
							rows="10" 
							:placeholder="item.placeholder"
							:name="item.name"
							v-model="form[item.name]" 
                            v-validate.initial="form[item.name]" 
                            :data-vv-rules="item.rule" 
                            :data-vv-as="item.label"
							>
						</textarea>
						<!-- 下拉框 -->
						<select 
							:class="{'input-pop': true,'is-error': verrors.has(item.name)}"
							v-else-if="item.type=='select'" 
							:placeholder="item.placeholder"
							:name="item.name" 
							v-model="form[item.name]" 
                            v-validate.initial="form[item.name]" 
                            :data-vv-rules="item.rule" 
                            :data-vv-as="item.label">
								<option :value="option.value" v-for="option in item.options">{{option.label}}</option>
						</select>
						<!-- 日期 -->
						<input 
							:class="{'input-pop': true, 'el-input__inner': true,'is-error': verrors.has(item.name)}"
							v-else-if="item.type=='date'" 
							type="date" 
							:placeholder="item.placeholder"
							:name="item.name" 
							v-model="form[item.name]" 
                            v-validate.initial="form[item.name]" 
                            :data-vv-rules="item.rule" 
                            :data-vv-as="item.label">
						<!-- 文件 -->
						<component 
							v-bind:is="item.component" 
							v-else-if="item.type=='file'"
							v-model="form[item.name]" 
							>
						</component>
						<!-- 文本&下拉框 -->
						<component 
							v-bind:is="item.component" 
							v-else-if="item.type=='textselect'"
							:placeholder="item.placeholder" 
							:options="item.options" 
							:rule="item.rule"
							v-model="form[item.name]" 
						</component>
						<!--  -->
						<span v-show="verrors.has(item.name)" class="help is-danger el-form-item__error">{{ verrors.first(item.name) }}</span>
 
					</li >
		    	</ul>
		    </el-tab-pane> 
		  </el-tabs>
		</template>
		<div class="form-footer">
			<el-button type="primary"  @click="submitForm">确定</el-button>
			<el-button class="activecancel" @click="cancelClick">取消</el-button>
		</div>
    </form>
</div>
	
</template>
<script>
// import ActiveBox from "./activebox.vue";
import store from "../../vuex/index.js";
import {mapMutations} from 'vuex';
// import { Validator } from 'vee-validate';
// import validate from "../../utils/validate.js";

	export default {
		name: 'validator-example',
	    // validator: null,
		components:{
			// ActiveBox,
		},
	 	props:{
	    	newComponent:{
	    		type:Array,
	    		default:[]
	    	},
	    	tab:{
	    		type:String
	    	}
	    },
	    data() {
		  	let form = {};
	        this.newComponent[0].components.forEach(function(item){
	        	form[item.name]="";
	        });
		    return {
		        activeName: this.newComponent[0].tab,
		        formConList:[],
		        form: form,
		   
		    };
		},
	    created() {

	    },
	    mounted(){
			console.log(this.form);
	    },
	    methods: {
	     	handleClick() {
	      		                
	     	},
		    // 关闭表单事件
		    closeClick(){
		      	this.$parent.changeIsShow();
		    },
	     	// 取消事件
	     	cancelClick(){
	     		this.$parent.changeIsShow();
	     	},
	     	/**
            * 提交表单
            */
	        submitForm(){
	        	 // 验证表单
                this.$validator.validateAll();
                 // 如果表单报错则不提交
                if(this.verrors.any()) {
                	console.log(this.verrors);
                    return false
                }else {
                	console.log("提交成功");
                	for(let key  of Object.keys(this.form)) {
				     	console.log(key + ": " + this.form[key]);
					}	
                }

	     	},
	   
	    
	    },
	
	    computed: {
	      // author(){
	      //   return store.state.author;
	      // },
	    }

  };
</script>
<style lang="sass">
// @import "../../../sass/public/inputSize.scss";
.newWrap{
	position: fixed;
	width:100%;
	height: 100%;
	background:rgba(0,0,0,0.3);
	top:0;
	left:0;
	z-index:2;
	text-align:center;
	.newForm{
		width:626px;
		position: absolute;
		background:white;
		left:50%;
		top:50%;
		transform:translateX(-50%) translateY(-50%);
		box-shadow:1px 1px 50px rgba(0,0,0,.3);
		border-radius:2px;
		.newMain{
			padding:10px 60px 20px 60px;
			border-bottom: 1px solid #d1dbe5;
			.inputItem{
				margin-bottom:8px;
				.is-error{border-color:red}
				.input-imp{
						color:red;
						font-size:20px;
						display:inline-block;
						height:21px;
						overflow:hidden;
						vertical-align:text-top;
						margin-right: -9px;
					}
				.input-label{
						color:#6f6d6d;
						font-weight:600;
						width:130px;
						display:inline-block;
						text-align:-webkit-right;
						// padding:5px 0;
						// margin-bottom: 5px;
					}

				.input-pop {
						width:312px;
						height:28px;
						display:inline-block;
						// line-height:28px;
						// padding:2px 10px;
						// border:2px solid #e5e5e5;
						vertical-align:middle;
						box-sizing:border-box;
						margin-left:10px;
					}
				textarea.input-pop{
						height: 60px;
						resize:none;
				}
				select.input-pop{
						border-radius: 4px;
					    border: 1px solid #bfcbd9;
					    box-sizing: border-box;
					    color: #1f2d3d;
				        padding: 3px 10px;
				}
			}
		}
		.el-icon-circle-close{
			font-size:24px;
			color:#8492a6;
			position: absolute;
			right:-12px;
			top:-10px;
			border:3px solid white;
			border-radius:50%;
			background:white;
			z-index:3;
		}
		.el-icon-circle-close:hover{
			color:#0087b5;
		}
		
		.form-footer{
			text-align:-webkit-right;
			padding:20px 10px 50px 0;
			.activecancel{
				background-color:#cccccc;
				color:white;
			}
		}
		

	}
}
	

</style>