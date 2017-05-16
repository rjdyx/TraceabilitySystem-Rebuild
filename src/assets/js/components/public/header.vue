/* 顶部栏组件
* @description 顶部栏 
* @author 舒丹彤 
* @date 2017/3/14
*  
*/
<template>
	<header class="header">
		<div class="head_logo">
			<img src="/public/images/logo2.png" />
		</div>
		<div class="head_des">
			{{logo}}
		</div> 
		<!--右侧菜单栏-->
		<div class="head_right">
			<ul>
				<template @click="changeSub">
					<!-- <router-link tag="li" to="/"> -->
					<li>
						<img src="/public/images/time.png" />
						<p class="time">{{time}}</p>
					</li>
					<!-- </router-link> -->
				</template>
				<template  v-for="(navbar,i) in navbars">
					<li class="navbar" @click="changeSub(i)">
						<router-link :to="navbar.path">
							<img :src="navbar.src" />
							<p>{{navbar.name}}</p>
						</router-link>
					</li>
				</template>
				<li @click="back">
					<img src="/public/images/back.png" />
					<p>退出</p>
				</li>
			</ul>
		</div>
	</header>
</template>
<script>
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
        }
    },
    methods: {
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
            axios.post('logout', this.data).then((responce) => {
                if (responce.data === 200) {
                    this.$router.push('/login')
                    history.go(0) // 刷新更新权限数据
                }
            })
        },
        changeSub (i) {
            this.$emit('return-changeSub')
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
