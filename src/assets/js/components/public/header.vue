/**
 * 顶部栏组件
 * @description 顶部栏
 * @author 舒丹彤
 * @date 2017/3/14
 * 
 */ 
<template>
    <header class="header">
      <div class="head_logo">
      	<img src="../../../../../public/logo2.png" />
      </div>
      <div class="head_des">
      	农产品质量安全溯源系统
      </div>
      <!--右侧菜单栏-->
      <div class="head_right">
      	<ul>
      		<li>
      			<img src="../../../../../public/images/time.png" />
      			<span>{{time}}</span>
      		</li>
      		<template v-for="navbar in navbars">
      			<li class="navbar">
      				<img :src="navbar.src" />
      				<span>{{navbar.name}}</span>
      			</li>
      		</template>
      	</ul>
      </div>
    </header>
</template>

<script>
  export default {
    name:'MyHead',
    data:function(){
    	return{
        time:''
    	}
    },
    props:{
  		//侧边栏数组：
  		navbars:{
  			type:Array,
  			default:[]
  		}
  },
    methods:{
      checkTime(i){
        if(i<10){
          return "0"+i
        }else{
          return ""+i
        }
      },
      initData(cur){
        console.log('in')
        setInterval(()=>{
          let date = null;
        if(cur){
          date=new Date(cur);
        }else{
          date=new Date();
        }
        let h=date.getHours();
        let m=date.getMinutes();
        let s=date.getSeconds();
        this.checkTime('m')
        this.checkTime('s')
        var str=h+':'+m+':'+s
        this.time=str
      },1000)
      }
    },
    mounted(){
      this.initData();
      this.checkTime()
    }
  }
</script>

<style lang="sass" scoped>
    @import "../../../sass/function";
.header {
  height: 66px;
  width: 100%;
  background: #0099cc;
  overflow: hidden;
  position: relative;
}

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
  position: absolute;
  right: 0;
  bottom: 0;
  ul {
    margin: 0;
    padding: 0;
    li {
      float: left;
      width: 84px;
      height: 55px;
      margin-bottom: 5px;
      text-align: center;
      border-left: 1px solid #0087b5;
      color: #fff;
      img {
        display: block;
        padding-left: 30px;
        padding-top: 6px;
      }
    }
  }
}
</style>