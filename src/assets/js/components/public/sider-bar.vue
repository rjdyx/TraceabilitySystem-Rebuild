/**
 * 侧边栏组件
 * @description 顶部栏
 * @author 舒丹彤
 * @date 2017/3/15 
 * 
 */ 
 <template>
<!-- <div>hgr</div> -->
     <el-menu
        :router="true" 
        class="left-menu" theme="dark">
      <el-submenu 
        v-for="(menu, index) in menus"
        :index="menu.name">
            <template slot="title">{{menu.name}}</template>
            <el-menu-item 
                v-for="(subMenu, subIndex) in menu.children" 
                :index="subMenu.path" @click="clickEvent(menu, subMenu)" exact>
                {{subMenu.name}}
            </el-menu-item>
      </el-submenu>
    </el-menu>
<!-- 
        <div class="sider-bar">
            <el-row class="tac"> 
				<el-col> 
				    <el-menu class="el-menu-vertical-demo" theme="dark">
				      <el-submenu v-for="siderbar in siderbars">
				        <template slot="title">
				        	<img :src="siderbar.src" class="sider-img">
				        	<span>{{siderbar.name}}</span>
				        </template>
				          <el-menu-item v-for="subNavbar in siderbars.children">
				          	uerhu
				          	
				          	<template >
				          		<span>{{subNavbar.name}}</span>
				          	</template>
				          </el-menu-item>
				      </el-submenu>
				</el-menu>

		 </el-col>
		 </el-row>

        </div> -->

</template>

<script>
import {mapMutations} from 'vuex'
	export default {
        name:'SiderBar',
        props:{
            menus: {
                type: Array,
                default () {
                    return []
                }
            }
        },
        data (){
            return {
                
            }
        },
        computed: {},
         methods: {
            ...mapMutations([
                'setNavbarName',
                'setSubNavBarName'
            ]),
            clickEvent(menu,subMenu){
                this.setNavbarName(menu.name)
                this.setSubNavBarName(subMenu.name)
            }
    }
       

    }
</script>

<style lang="sass" scoped>
    @import "../../../sass/function";
    .left-menu{
        width:180px;
        height:100%;
    }
	
</style>
