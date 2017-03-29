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
		    		<component 
						v-for="subItem in item.components" 
						v-bind:is="subItem.component" 
						:isNull="subItem.isNull"
						:label="subItem.label"
						:placeholder="subItem.placeholder"
						:rule="subItem.rule">
					</component>
		    	</div>
		    </el-tab-pane>  
		  </el-tabs>
		</template>
		<ActiveBox></ActiveBox>
    </form>
</div>
	
</template>
<script>
import ActiveBox from "./activebox.vue";
import store from "../../vuex/index.js";
import {mapMutations} from 'vuex'
	export default {
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
	    methods: {
	      handleClick(tab, event) {

                
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
		// animation-d
		.newMain{
			padding:10px 60px 20px 60px;
			border-bottom: 1px solid #d1dbe5;
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