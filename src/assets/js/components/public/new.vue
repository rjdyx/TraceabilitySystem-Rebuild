/**
 * 新建按钮组件
 * @description 
 * @author 吴燕萍
 * @date 2017/3/21
 * 
 */


<template>
<div class="newBj">
	<div class="newForm">
		<i class="el-icon-circle-close" @click="closeClick" ></i>
		<template>
		  <el-tabs v-model="activeName" @tab-click="handleClick">
		    <el-tab-pane :label="tab" name="first">
				<!-- <ul v-for="item in theads">
					{{item}} <input type="data">
				</ul> -->
				
		    </el-tab-pane> 
		  </el-tabs>
		</template>
    </div>
</div>
	
</template>
<script>
	export default {
    data() {
	    return {
	        activeName: 'first',
	        //表单是否显示
	        // isShow:false,
	      };
	    },
	    props:{
	    	theads:{
	    		type:Array,
	    		default:[]
	    	},
	    	tab:{
	    		type:String
	    	}
	    },
	    methods: {
	      handleClick(tab, event) {
	        console.log(this.tab);
	      },
	      // 关闭表单事件
	      closeClick(){
	      	this.$parent.changeIsShow();
	      },



	    }

  };
</script>
<style lang="sass" scoped>
.newBj{
	position: fixed;
	width:100%;
	height: 100%;
	background:rgba(0,0,0,0.3);
	top:0;
	left:0;
	z-index:2;
}
	.newForm{
		width:500px;
		position: absolute;
		background:white;
		left:50%;
		top:50%;
		transform:translateX(-50%) translateY(-50%);
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

</style>