/**
 * 侧边栏组件 
 * @description 顶部栏 
 * @author 舒丹彤
 * @date 2017/3/15 
 *  
 */ 
 <template>
    <div id="menu-content">
        <!-- <div v-if="tipShow" class="tipMask"> 
            <template v-for="tip in tips" >
                <div class="tipblock" :class="tip.pos">
                    <span class="tip">{{tip.text}}</span>
                    <span class="arrow" :class="tip.arrow"></span>
                    <span class="next" @click="next(tip,index)">Enter ></span>
                </div>
            </template>
        </div> -->
        <vue-scrollbar id="menu">
            <el-menu
                :router="true" 
                :unique-opened="true"
                class="list" theme="dark" :default-active="record" @select="handle" @open="ko">
                <el-submenu v-for="(menu, index) in menus" :index="menu.name" v-if="menu.role">
                    <template slot="title">
                    <img :src="menu.src" class="menu-img">
                        {{menu.name}}
                    </template>
                    <el-menu-item v-for="(subMenu, subIndex) in menu.children" :index="subMenu.path" v-if="subMenu.role" exact @click="toggle(subIndex, subMenu.name)"> 
                        {{subMenu.name}}
                    </el-menu-item>
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
            // tips: [
            //     {
            //         text: '展开显示溯源系统的一系列流程',
            //         pos: 'first',
            //         arrow: 'one',
            //         path: '/index/message/plantBase'
            //     }
            // ]
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
            record1: 'getRecord',
            // ture/关闭侧边栏 false/开启侧边栏
            isShowSiderBar: 'getSiderBar'
        })
    },
    mounted () {
        this.$nextTick(() => {
            this.record = this.record1
        })
        // 判断第一次登录时侧边栏选中的会高亮
        // let at = $('.is-active')
        // console.log(at)
        // at.css('position', 'relative')
        // at.css('zIndex', '99999999')
        // 判断第一次登录时提示遮罩显示
        // axios.get('/api/index').then((responce) => {
        //     localStorage.setItem('stepsBol', responce.data.wap_on)
        //     if (Number(localStorage.getItem('stepsBol'))) {
        //         this.tipShow = true
        //     }
        // })
    },
    methods: {
        ...mapActions([
            'switch_record'
        ]),
        handle (index) {
            this.switch_record(index)
        },
        ko (key, keyPath) {
            console.log(keyPath)
        },
        toggle (subMenu, subIndex) {
            document.title = subIndex
            localStorage.setItem('tab', 0)
        }
        // next (tip, index) {
        //     this.$router.push(tip.path)
        //     this.tipShow = false
        //     this.record = tip.path
        //     let params = {'flag': 'wap'}
        //     axios.get('/api/index/seton', {params: params})
        //         .then((responce) => {
        //             if (responce.data !== 'false') {
        //                 localStorage.setItem('stepsBol', '0')
        //             }
        //         })
        // }
    },
    watch: {
        isShowSiderBar () {
            if (this.isShowSiderBar) {
                this.$children[0].$children[0].closeMenu()
                this.$children[0].$children[0].activedIndex = ''
                this.$store.dispatch('switch_record', '')
            }
        }
    },
    components: {
    }
}
</script>

<style lang="sass">
    
    #menu-content {
        float: left;
        width: 200px;
        height: 100%;
        background-color: #324157;
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
    // .is-active{
    //     position: relative;
    //     z-index: 8989898;
    // }
    // .next{
    //     position: absolute;
    //     bottom: 10px;
    //     right: 10px;
    //     border: none;
    //     color: #fff;
    //     padding: 5px;
    //     border-radius: 3px;
    //     font-weight: bold;
    //     line-height: 18px;
    //     cursor: pointer;
    //     margin-top: 5px;
    //     text-shadow: 0px -1px 1px rgba(0, 0, 0, .8);
    //     background: -webkit-gradient(linear, 0 0, 0 100%, color-stop(0, #ee432e), color-stop(0.5, #c63929), color-stop(0.5, #b51700), color-stop(1, #891100));
    //     &:hover{
    //         background: -webkit-gradient(linear, 0 0, 0 100%, color-stop(0, #f37873), color-stop(0.5, #db504d), color-stop(0.5, #cb0500), color-stop(1, #a20601));
    //     }
    // }
    // .tipMask{
    //     width: 100%;
    //     height: 100%;
    //     background: rgba(0, 0, 0, 0.3);
    //     top: 0;
    //     left: 0;
    //     z-index: 2000;
    //     position: absolute;
    //     .tipblock{
    //         position: absolute;
    //         z-index: 999999;
    //         // padding-right: 20px;
    //     }
    // }
    // .tip{
    //     display: block;
    //     // width: 100px;
    //     height: 74px;
    //     padding: 10px;
    //     font-size: 13px;
    //     border-radius: 5px;
    //     background: rgb(0,0,0);
    //     color: #fff;
    //     display: block;
    //     font-style: italic;
    // }
    // .arrow{
    //     display: block;
    //     position: absolute;
    //     width: 0;
    //     height: 0;
    // }
    // .first{
    //     left: 220px;
    //     top: 64px;
    // }
    // .one{
    //     border-top: 10px solid transparent;
    //     border-bottom: 10px solid transparent;
    //     border-right: 10px solid rgb(0,0,0);
    //     top: 13px;
    //     left: -10px;
    // }
   }
</style>
