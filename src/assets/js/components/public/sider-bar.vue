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
                class="list" theme="dark" :default-active="record" @select="handle" @close="handleClose">
                <el-submenu 
                    v-for="(menu, index) in menus"
                    :index="menu.name" v-if="menu.role">
                    <template slot="title" >
                    <img :src="menu.src" class="menu-img">
                        {{menu.name}}
                    </template>
                    <el-menu-item 
                        v-for="(subMenu, subIndex) in menu.children" 
                        :index="subMenu.path" exact v-if="subMenu.role"> 
                        {{subMenu.name}}
                    </el-menu-item>
                    <!-- <el-menu-item index="/index/message/plantSerial"> 
                        丸子
                    </el-menu-item> -->
                </el-submenu>
            </el-menu>
        </vue-scrollbar> 
    </div>
</template>

<script>
import {mapGetters, mapMutation, mapActions} from 'vuex'
export default {
    name: 'SiderBar',
    data () {
        return {
            record: ''
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
    },
    mounted () {
        let local = localStorage.getItem('record')
        let checkdown = JSON.parse(local)
        this.record = checkdown.record
    },
    methods: {
        handle (index) {
            this.$store.commit('CHANGE', index)
        },
        handleClose (key, keyPath) {
            let recordStr = localStorage.getItem('record')
            let json = JSON.parse(recordStr)
            json.record = ''
            let jsonStr = JSON.stringify(json)
            localStorage.setItem('record', jsonStr)
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
