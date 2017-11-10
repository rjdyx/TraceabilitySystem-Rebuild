/* 顶部栏组件
* @description 顶部栏 
* @author 舒丹彤 
* @date 2017/3/14
*  
*/
<template>
	<header class="header">
		<div class="head_logo">
			<img src="/public/images/logo2.png" width="160"/>
		</div>
		<!--右侧菜单栏-->
		<div class="head_right">
			<ul>
				<template @click="changeSub">
					<li>
						<img src="/public/images/time.png" />
						<p class="time">{{time}}</p>
					</li>
				</template>
				<template  v-for="(navbar,i) in navbars">
					<li class="navbar" @click="changeSub">
						<router-link :to="navbar.path">
							<img :src="navbar.src" />
							<p>{{navbar.name}}</p>
						</router-link>
					</li>
				</template>
				<li @click="back">
					<img src="/public/images/back.png" />
					<p v-if="host!=null">返回</p>
					<p v-else>退出</p>
				</li>
			</ul>
		</div>
		<vue-progress-bar></vue-progress-bar>
	</header>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    name: 'MyHead',
    data: function () {
        return {
            logo: '农产品质量安全溯源系统',
            time: '',
            data: [],
            headerLinkActive: '0'
        }
    },
    props: {
        navbars: {
            type: Array,
            default: []
        },
        host: ''
    },
    methods: {
        ...mapActions([
            'change_siderBar'
        ]),
        checkTime (i) {
            if (i < 10) {
                return '0' + i
            } else {
                return '' + i
            }
        },
        initData (cur) {
            setInterval(() => {
                let date = null
                if (cur) {
                    date = new Date(cur)
                } else {
                    date = new Date()
                }
                let h = date.getHours()
                if (h > 12) {
                    h = h - 12
                }
                let m = this.checkTime(date.getMinutes())
                let s = this.checkTime(date.getSeconds())
                var str = h + ':' + m + ':' + s
                this.time = str
            },
            1000)
        },
        back () {
            if (this.host !== null) {
                axios.post('logout', this.data).then((responce) => {
                    if (responce.data === 200) {
                        window.location.href = 'http://' + this.host
                    }
                })
            } else {
                axios.post('logout', this.data).then((responce) => {
                    if (responce.data === 200) {
                        window.Roles = {}
                        this.$router.push('/login')
                    }
                })
            }
        },
        changeSub () {
            this.$Progress.start()
            this.change_siderBar(true)
            this.$Progress.finish()
        }
    },
    mounted () {
        this.initData()
        this.checkTime()
    }
}
</script>

<style lang="sass" scoped>
	.header {
		width: 100%;
		height: 66px;
		overflow: hidden;
		position: relative;
	.head_logo {
		display: inline-block;
		padding: 8px 0px 2px 20px;
	}
	
	.head_des {
		color: #FFFFFF;
		width: 180px;
		font-size: 12px;
		padding-left: 15px;
		height: 13px;
		letter-spacing: 1.4px;
		line-height: 11px;
	}
	
	.head_right {
		display: inline-block;
		width: 600px;
		height:100%;
		position: absolute;
		right: 0;
		bottom: 0;
		ul {
			margin: 0;
			padding: 0;
			li {
				float: left;
				width: 84px;
				height: 66px;
				margin-bottom: 5px;
				text-align: center;
				color: #fff;
				cursor: pointer;
				background:rgba(0,0,0,0);
				text-align:center;
					a{
						display:inline-block;
						width:100%;
						height:100%;
					}
					&:hover{
						transition:background 1.5s ease-out;
						background:rgba(0,0,0,.2);
					}
					.router-link-active{
						background:rgba(0,0,0,.2);
					}
				p {
					color: #fff;
				}
				img {
					padding-top: 10px;
				}
			}
		}
	}
}
</style>
