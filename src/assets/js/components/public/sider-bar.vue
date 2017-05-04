/**
 * 侧边栏组件 
 * @description 顶部栏 
 * @author 舒丹彤
 * @date 2017/3/15 
 * 
 */ 
 <template>
    <div id="menu-content">
        <vue-scrollbar id="menu">
            <el-menu
                :router="true" 
                :unique-opened="true"
                class="list" theme="dark">
                <el-submenu 
                    v-for="(menu, index) in menus"
                    :index="menu.name" v-if="menu.role<1">
                    <template slot="title" >
                    <img :src="menu.src" class="menu-img">
                        {{menu.name}}
                    </template>
                    <el-menu-item 
                        v-for="(subMenu, subIndex) in menu.children" 
                        :index="subMenu.path" exact v-if="subMenu.role<1"> 
                        {{subMenu.name}}
                    </el-menu-item>
                </el-submenu>
            </el-menu>
        </vue-scrollbar> 
    </div>
    
</template>

<script>
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
    }
}
</script>

<style lang="sass">
    // @import "../../../sass/function";
    
    #menu-content {
        float: left;
        width: 200px;
        height: 100%;
        background-color: #324157;
    }

    #menu {
        max-height: 100%;
    }

    .list {
        padding-bottom: 80px;
    }
    
    .menu-img{
    	display: inline-block;
    	vertical-align: middle;
    	padding-right: 5px;
    }

</style>
