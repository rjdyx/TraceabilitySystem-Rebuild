/**
 * 侧边栏组件 
 * @description 顶部栏 
 * @author 舒丹彤
 * @date 2017/6/7 
 * 
 */ 
 <template>
 <div>
 	<transition-group
        name="animate-class-transition"
        enter-active-class="animated slideInLeft"
        leave-active-class="animated slideOutLeft">
        <div key='black' class="black-layer" v-if="show" @click="initTouch">
   		    <div class="app-menu" key="menu">
	            <el-menu
	                :router="true" 
	                :unique-opened="!stepsBol"
                    :default-openeds="defaultOpeneds"
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
                                    :index="subMenu.path" 
                                    exact 
                                    v-if="subMenu.role" 
                                    @click="toggle(subIndex, subMenu.name, subMenu.detail)">
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
</div>
</template>

<script>
import {mapGetters, mapMutation, mapActions} from 'vuex'
export default {
    name: 'SiderBar',
    data () {
        return {
            children: '',
            data: [],
            steps: [
                [
                    {
                        element: 'li.el-submenu .el-menu-item',
                        intro: '施肥管理',
                        class: 'siderBarTip1_1'
                    },
                    {
                        element: 'li.el-submenu .el-menu-item',
                        intro: '检测管理',
                        class: 'siderBarTip1_2'
                    },
                    {
                        element: 'li.el-submenu .el-menu-item',
                        intro: '农事管理',
                        class: 'siderBarTip1_3'
                    },
                    {
                        element: 'li.el-submenu .el-menu-item',
                        intro: '批次管理',
                        class: 'siderBarTip1_4'
                    }
                ]
            ],
            defaultOpeneds: [],
            stepsBol: false
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
        width: 180px;
        height: 100%;
        background-color: #324157;
        position: absolute;
        top: 0;
        left: 0;
        overflow: scroll;
        box-shadow: 3px 0px 12px rgba(0,0,0,0.44);
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
              -webkit-animation-duration: .2s;
              animation-duration: .2s;
            }
        }
        .logout{
            width: 100%;
            height: 67px;
            border-top: 1px solid #1f2d3d;
            position: absolute;
            bottom: 0px;
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
