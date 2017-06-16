/**
 * 侧边栏组件 
 * @description 顶部栏 
 * @author 舒丹彤
 * @date 2017/6/7 
 * 
 */ 
 <template>
 	<transition-group
        name="animate-class-transition"
        enter-active-class="animated slideInLeft"
        leave-active-class="animated slideOutLeft">
        <div key='black' class="black-layer" v-if="show" @click="initTouch">
   		 <div class="app-menu" key="menu">
             <!-- 这里先去掉了:default-active="record"这个属性，手机端不需要默认显示记录点击 -->
	            <el-menu
	                :router="true" 
	                :unique-opened="true"
	                class="menulist" theme="dark" @close="handleClose">
                    <div class="el-submenu__title" @click="hidemenu">
                        <span class="sider-arrow"></span>
                    </div>
	                <template class="eui">
                        <el-submenu 
                        v-for="(menu, index) in menus"
                        :index="menu.name" v-if="menu.role">
                        <template slot="title" >
                            {{menu.name}}
                        </template>
                        <el-menu-item 
                            v-for="(subMenu, subIndex) in menu.children" 
                            :index="subMenu.path" exact v-if="subMenu.role" @click="toggle(subIndex, subMenu.name, subMenu.detail)">
                            {{subMenu.name}}
                        </el-menu-item>
                    </el-submenu>   
                    </template>
	            </el-menu>
                <div class="logout" @click="logout">
                    <span>退出登录</span>
                </div>
    	   </div>
        </div>
    </transition-group>
</template>

<script>
import {mapGetters, mapMutation, mapActions} from 'vuex'
export default {
    name: 'SiderBar',
    data () {
        return {
            children: '',
            data: []
        }
    },
    props: {
        menus: {
            type: Array,
            default () {
                return []
            }
        },
        show: {
            type: Boolean,
            default: false
        }
    },
    computed: {
    },
    mounted () {
    },
    methods: {
        handleClose (key, keyPath) {
        },
        toggle (subMenu, subIndex, detail) {
            this.hidemenu()
            this.$emit('children-info', [subIndex, detail])
        },
        hidemenu () {
            this.$emit('hidetoggle')
        },
        initTouch (event) {
            if (event.target.className.indexOf('el-submenu') && event.target.className.indexOf('el-menu-item') === -1) {
                this.hidemenu()
            }
        },
        logout () {
            axios.post('logout', this.data).then((responce) => {
                if (responce.data === 200) {
                    window.Roles = {}
                    this.$router.push('/waplogin')
                }
            })
        }
    },
    watch: {
    }
}
</script>

<style lang="sass">
.black-layer{
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: rgba(255,255,255,0.0);
			z-index: 6487984545;
    .app-menu {
        // float: left;
        width: 180px;
        height: 100%;
        background-color: #324157;
        position: absolute;
        top: 0;
        left: 0;
        overflow: scroll;
    		.sider-arrow{
    			display: inline-block;
    			width: 20px;
    			height: 20px;
    			background: url(/public/images/icon.png);
    			margin-left: 50px;
    		}
    		.text{
    			width: 100%;
    			height: 50px;
    		}
            .menulist {
                padding-bottom: 80px;
            }
        	.animated {
              -webkit-animation-duration: .6s;
              animation-duration: .6s;
            }
        }
        .logout{
            width: 100%;
            height: 7%;
            border-top: 1px solid #1f2d3d;
            position: relative;
            bottom: -19%;
            span{
                color: #fff;
                width: 50%;
                background: url(/public/images/back.png) no-repeat;
                padding-top: 14%;
                margin-top: 7%;
                background-position-x: 10px;
                margin-left: 35%;
                display: inline-block
            }
        }
}
</style>
