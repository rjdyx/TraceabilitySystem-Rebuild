/**
 * 中间内容组件
 * @author 舒丹彤
 * @date 2017/3/15 
 * 
 */ 
 <template>
	<div class="content">
        <basic-model :models="models[type]"></basic-model>
    </div> 
</template>
 
<script>
import BasicModel from '../basic-model/basic-model.vue'
import message from './message.js'
import reaction from './reaction.js'
   

	export default { 
        name:'BasicContent',
        data (){
            let modelObj={}
            Object.assign(modelObj,message,reaction)
            return {
            	checked:[],//勾选框数组
                activeName2: 'first',
                models:modelObj

            } 
        },
         methods: {
         	 handleClick(tab, event) {
		        //console.log(tab, event);
		      }

    	},
    	components:{
            BasicModel
    	},
        computed:{
            type(){
                return this.$route.params.model
            }
        },
        beforeRouteUpdate (to, from, next) {
            this.$refs.basicModel.init(to.params.index)
            next()
        },
       

    }
</script>

<style lang="sass" scoped>
    @import "../../../sass/function";
.content{
    	margin-top: 15px;
    }
 
</style>
