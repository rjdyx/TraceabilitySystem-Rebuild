/**
 * 侧边栏组件
 * @description 顶部栏 
 * @author 舒丹彤
 * @date 2017/3/15 
 * 
 */ 
 <template>
     <el-menu
        :router="true" 
        class="left-menu" theme="dark">
      <el-submenu 
        v-for="(menu, index) in menus"
        :index="menu.name">
            <template slot="title">
            <img :src="menu.src" class="menu-img">
            {{menu.name}}
            </template>
            <el-menu-item 
                v-for="(subMenu, subIndex) in menu.children" 
                :index="subMenu.path" exact @click="clickEvent(menu,subMenu)"> 
                {{subMenu.name}}
            </el-menu-item>
      </el-submenu>
    </el-menu>
 

</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'SiderBar',
  props: {
    menus: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {},
  methods: {
    ...mapMutations([
      'setNavbarName',
      'setSubNavBarName'
    ]),
    clickEvent (menu, subMenu) {
      this.setNavbarName(menu.name)
      this.setSubNavBarName(subMenu.name)
    }
  }
}
</script>

<style lang="sass" scoped>
    // @import "../../../sass/function";
    .left-menu{
        width:180px;
        float:left;
    }
    .menu-img{
    	display: inline-block;
    	vertical-align: middle;
    	padding-right: 5px;
    }
</style>
