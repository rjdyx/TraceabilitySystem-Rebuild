<<<<<<< HEAD
/**
 * ÖÐ¼äÄÚÈÝ×é¼þ
 * @author Êæµ¤Í®
 * @date 2017/3/15 
 * 
 */ 
 <template>
	<div class="content">
        <basic-model :models="models[type]"></basic-model>
    </div> 
</template>
 
<script>
import BasicModel from '../basicModel/basic-model.vue'
import message from './message.js'
import reaction from './reaction.js'

export default {
  name: 'BasicContent',
  data () {
    let modelObj = {}
    Object.assign(modelObj, message, reaction)
    return {
      checked: [],
      // ¹´Ñ¡¿òÊý×é
      activeName2: 'first',
      models: modelObj
    }
  },
  methods: {

  },
  components: {
    BasicModel
  },
  computed: {
    type () {
      return this.$route.params.model
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.$refs.basicModel.init(to.params.index)
    next()
  }
}
</script>

<style lang="sass" scoped>
    @import "../../../sass/function";
.content{
    	margin-top: 15px;
    }
 
</style>
=======
/**  ä¸­é—´å†…å®¹ç»„ä»¶
 *   @author èˆ’ä¸¹å½¤
*    @date 2017/3/15 
* 
*/
<template>
	<div class="content">
		<basic-model :models="models[type]"></basic-model>
	</div>
</template>

<script>
import BasicModel from '../basicModel/basic-model.vue'
import message from './message.js'
import reaction from './reaction.js'

export default {
  name: 'BasicContent',
  data() {
	let modelObj = {}
	Object.assign(modelObj, message, reaction)
	return {
		checked: [], //å‹¾é€‰æ¡†æ•°ç»„
		activeName2: 'first',
		models: modelObj

	}
},
  components: {
		BasicModel
  },
  computed: {
	type() {
		return this.$route.params.model
	}
},
  beforeRouteUpdate(to, from, next) {
	this.$refs.basicModel.init(to.params.index)
	next()
}
}
</script>

<style lang="sass" scoped>
	@import "../../../sass/function";
	.content {
		margin-top: 15px;
	}
</style>
>>>>>>> Denton
