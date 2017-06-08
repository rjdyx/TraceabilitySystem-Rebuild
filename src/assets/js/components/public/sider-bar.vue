/**
 * 侧边栏组件 
 * @description 顶部栏 
 * @author 舒丹彤
 * @date 2017/3/15 
 * 
 */ 
 <template>
    <div id="menu-content">
        <!-- <vue-scrollbar id="menu"> -->
            <el-menu
                :router="true" 
                :unique-opened="true"
                class="list" theme="dark" :default-active="record" @select="handle" @close="handleClose">
                <el-submenu 
                    v-for="(menu, index) in menus"
                    :index="menu.name" :key="index" v-if="menu.role">
                    <template slot="title" >
                    <img :src="menu.src" class="menu-img">
                        {{menu.name}}
                    </template>
                    <el-menu-item 
                        v-for="(subMenu, subIndex) in menu.children" 
                        :index="subMenu.path" :key="subIndex" exact v-if="subMenu.role" @click="toggle(subIndex, subMenu.name)"> 
                        {{subMenu.name}}
                    </el-menu-item>
                </el-submenu>
            </el-menu>
        <!-- </vue-scrollbar>  -->
    </div>
</template>

<script>
import {mapGetters, mapMutation, mapActions} from 'vuex'
export default {
    name: 'SiderBar',
    data () {
        return {
        }
    },
    props: {
        menus: {
            type: Array,
            default () {
                return []
            }
        }
    },
    computed: {
        ...mapGetters({
            record: 'getRecord',
            isShowSiderBar: 'getSiderBar'
        })
    },
    mounted () {
        this.record = this.$store.getters.getRecord
    },
    methods: {
        handle (index) {
            this.$store.dispatch('switch_record', index)
        },
        handleClose (key, keyPath) {
        },
        toggle (subMenu, subIndex) {
            document.title = subIndex
        }
    },
    watch: {
        isShowSiderBar () {
            if (this.isShowSiderBar) {
                // if(this.$children[0].$children[0] !== undefined) this.$children[0].$children[0].closeMenu()
                if (this.$children[0].$children[0] !== undefined) this.$children[0].$children[0].activedIndex = ''
                this.$store.dispatch('switch_record', '')
            }
        }
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
    .jiji{
        border: 2px;
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
    .active{
        background: red;
    }
    .unactive{
        background: green;
    }
</style>
