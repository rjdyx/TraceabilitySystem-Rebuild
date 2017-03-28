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
		  <el-tabs v-model="activeName" @tab-click="handleClick">
		    <el-tab-pane v-for="item in newComponent" :label="item.tab" :name="item.tab" >
		    	<div class="newMain">
		    		<!-- <component 
						v-for="components in item.components" 
						v-bind:is="components.component" 
						:isNull="components.isNull"
						:label="components.label"
						:rule="components.rule"
						:placeholder="components.placeholder"
						:options="components.options">
					</component> -->
					<div class="inputItem" v-for="item in item.components">
						<em class="input-imp" v-if="item.isNull===false">*</em>
						<label class="input-label"  v-if="item.type!=='file'" for="inputText" >{{item.label}}&nbsp&nbsp:</label>
						<!-- 文本框 -->
						<input class="input-pop el-input__inner" v-if="item.type=='text'" type="text" :placeholder="item.placeholder">
						<!-- 多行文本框 -->
						<textarea class="input-pop el-textarea__inner" v-else-if="item.type=='textarea'" name="" id="" cols="30" rows="10" :placeholder="item.placeholder"></textarea>
						<!-- 下拉框 -->
						<select class="input-pop" v-else-if="item.type=='select'" name="" id="" :placeholder="item.placeholder">
							<option :value="option.value" v-for="option in item.options">{{option.label}}</option>
						</select>
						<!-- 日期 -->
						<input class="input-pop el-input__inner" v-else-if="item.type=='date'" type="date" :placeholder="item.placeholder">
						<!-- 文件 -->
						<component v-bind:is="item.component" v-else-if="item.type=='file'"></component>
						<!-- 文本&下拉框 -->
						<component v-bind:is="item.component" v-else-if="item.type=='textselect'":placeholder="item.placeholder" :options="item.options" :rule="item.rule"></component>
						<!--  -->
				
					</div >
		    	</div>
		    </el-tab-pane> 
		  </el-tabs>
		</template>

		<div class="column is-12">
		    <label class="label" for="email">Email</label>
		    <p :class="{ 'control': true }">
		        <input v-validate="'required|email'" :class="{'input': true, 'is-danger': verrors.has('email') }" name="email" type="text" placeholder="Email">
		        <span v-show="verrors.has('email')" class="help is-danger">{{ verrors.first('email') }}</span>
		    </p>
		</div>
	
		<ActiveBox></ActiveBox>
    </form>
</div>
	
</template>
<script>
import ActiveBox from "./activebox.vue";
import store from "../../vuex/index.js";
import {mapMutations} from 'vuex';


	export default {
	name: 'basic-example',
	components:{
		ActiveBox,
	},

    data() {
	    return {
	        activeName: this.newComponent[0].tab,
	        formConList:[],
	        // author:"",
	        //表单是否显示
	        // isShow:false,
	      };
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
	    mounted(){
	  //   	const myRule = {
			//   getMessage(field, params, data) {
			//       return (data && data.message) || 'Something went wrong';
			//   },
			//   validate(value) {
			//     return new Promise(resolve => {
			//       resolve({
			//         valid: value === 'trigger' ? false : !! value,
			//         data: value !== 'trigger' ? undefined : { message: 'Not this value' }
			//       });
			//     });
			//   }
			// };
			// this.$validator.extend('truthy', {
			//   getMessage: field => 'The ' + field + ' value is not truthy.',
			//   validate: value => !! value
			// });

			// let instance = new Validator({ trueField: 'truthy' });

			// // Also there is an instance 'extend' method for convience.
			// instance.extend('falsy', (value) => ! value);

			// instance.attach('falseField', 'falsy');
			// console.log(this.$validator);
	    },
	    methods: {
	      handleClick(tab, event) {
	      		console.log(this.$validator);
                
	      },
	      // 关闭表单事件
	      closeClick(){
	      	this.$parent.changeIsShow();
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

	}
}
	

</style>