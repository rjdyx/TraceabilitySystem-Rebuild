/**
 * 中间内容标题组件
 *  
 * @author 舒丹彤
 * @date 2017/3/15 
 * 
 */ 
 <template>
	<div class="title">
     <h2>{{title}}</h2>   
  </div>
</template> 

<script>
	export default {
        name:'ContainTitle',
        data (){
            return {
                
            } 
        },
        props:{ 
            title:{
              type:String,
              default:'种植基础资料'
            }
        },
        computed: {},
        methods: {
        	
        },
    }
</script>

<style lang="sass" scoped>
    @import "../../../sass/function";
    .title {
      padding: 20px 8px 14px 0;
      border-bottom: 2px solid #e5e5e5;
      font-size: 18px;
      h2 {
        border-left: 4px solid #0099cc;
        border-radius: 4px;
        padding-left: 14px;
        display: inline-block;
        font-family: YouYuan;
      }
    }
</style>
