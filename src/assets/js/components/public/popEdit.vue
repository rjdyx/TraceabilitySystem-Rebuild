/**
 * 编辑弹窗组件
 * @description 
 * @author 舒丹彤
 * @date 2017/3/28
 * 
 */

<template>
	<div class="editWrap">
		<form class="editForm">  
			<i class="el-icon-circle-close" @click="closeClick"></i>
			<template>
				<el-tabs v-model="activeName" @tab-click="handleClick">
					<el-tab-pane v-for="item in editComponent" :label="item.tab" :name="item.tab" >
						<div class="editMain">
							<div class="inputItem" v-for="item in item.components">
								<em class="input-imp" v-if="item.isNull===false">*</em>
								<label class="input-label" v-if="item.type!=='file'" for="inputText">{{item.label}}&nbsp&nbsp:</label>
								<!-- 文本框 -->
								<input type="text" :placeholder="item.placeholder" class="input-pop el-input__inner" v-if="item.type=='text'" :value="item.value">
								<!-- 多行文本框 -->
								<textarea class="input-pop el-textarea__inner" v-else-if="item.type=='textarea'" name="" id="" cols="30" rows="10" :placeholder="item.placeholder"></textarea>
								<!-- 下拉框 -->
								<select class="input-pop" v-else-if="item.type=='select'" name="" id="" :placeholder="item.placeholder">
									<option :value="option.value" v-for="option in item.options">{{option.label}}</option>
								</select>
								<!-- 日期 -->
								<input class="input-pop el-input__inner" v-else-if="item.type=='date'" type="date" :placeholder="item.placeholder">
								<!-- 文件 -->
								<component v-bind:is="item.component" v-else-if="item.type=='file'" class="picfile"></component>
								<!-- 文本&下拉框 -->
								<component v-bind:is="item.component" v-else-if="item.type=='textselect'":placeholder="item.placeholder" :options="item.options" :rule="item.rule"></component>
							</div>
						</div>
					</el-tab-pane>
				</el-tabs>
			</template>
			
			<ActiveBox></ActiveBox>
		</form>
	</div>

</template>

 
<script>
import ActiveBox from './activebox.vue'
export default {
  data () {
    return {
      activeName:
      this.editComponent[0].tab
    }
  },
  props: {
    editComponent: {
      type: Array,
      default: []
    },
    tab: {
      type: String
    }
  },
  components: {
    ActiveBox
  },
  methods: {
    handleClick (tab, event) {},
    closeClick () {
      this.$parent.changeEditShow()
    },
    validateForm (scope) {
      this.$validator.validateAll(scope).then(result => {
        if (result) {
          // eslint-disable-next-line
          alert('Form Submitted!');
        }
      })
    }
  }
}
</script>


<style lang="sass">
.editWrap{
	position: fixed;
	width:100%;
	height: 100%;
	background:rgba(0,0,0,0.3);
	top:0;
	left:0;
	z-index:2;
	text-align:center;
	.tab{
		height:57px;
	}
	.editForm{
		position: absolute;
		background:white;
		left:50%;
		top:50%;
		transform:translateX(-50%) translateY(-50%);
		box-shadow:1px 1px 50px rgba(0,0,0,.3);
		border-radius:2px;
		.editMain{
			padding:10px 60px 20px 38px;
			border-bottom: 1px solid #d1dbe5;
			position:relative;
			overflow:hidden;
			label{
				font-size:14px;
			}
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
						margin-left:10px;
						color:#1f2d3d;
						
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
				        padding: 2px 6px;
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
			cursor:pointer;
		}

	}
	input{
		font-size:14px;
	}
	select{
		font-size:14px;
	}
}
.el-tabs__nav-scroll{
	height:58px;
}
.el-tabs__active-bar{
	background:none !important;
	font-size:18px !important;
}
.picfile{
	position:absolute;
	right:10px;
	top:20px;
}
</style>