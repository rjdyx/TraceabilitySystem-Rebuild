/**
 * 信息详情组件
 * @description 
 * @author 吴燕萍
 * @date 2017/4/24
 * 
 */
<template>
<transition name="fade2">
    <div id="pBasicModel2">
        <header1 :title="models.title" :isbreed="isbreed"></header1>
        <div class="pBM2_content">
            <div>
                <twoColList :tableList="models.details.tableList" :values="values" :isbreed="isbreed"></twoColList>
                <div class="pBM2_content_imgList">
                    <h3 :class="{breedFontCol:isbreed}">{{models.details.tableName2}}</h3>
                    <ul>
                        <li v-if="values.img"><img  :src="values.img" alt=""></li>
                        <li v-else>信息缺失</li>
                    </ul>
                </div> 
            </div>
            
        </div>   
    </div>
</transition>
</template>
<style type="text/css" lang="sass">
    .breedCol{
        background:#93bf46!important;
    }
    .breedFontCol{
        color:#93bf46!important;
    }
    #pBasicModel2{
        width: 100%;
        .pBM2_content{
            width: 100%;
            padding-top: 1rem;
            background: #fbfbfb;
            .pBM2_content_imgList{
                width: 92%;
                margin: 0 auto; 
                padding-bottom:1rem;
                >h3{
                    color:#3ccfb5;
                    font-size: .42rem;
                    padding: 4% 0% 3% 0%;
                    border-bottom: 1px solid #e6e6e6; 
                    font-weight:normal;
                }
                >ul{
                    >li{
                        padding-top: 3%;
                        >img{
                            width: 100%;
                            height: auto;
                        }
                    }
                }
            } 
        }
    } 
</style>
<script>
import Header1 from './component/header.vue'
import TwoColList from './component/twoColList.vue'
import plantMessage from './js/plantMessage.js'
export default {
    name: 'pBasicModel2',
    data () {
        let modelObj = {}
        Object.assign(modelObj, plantMessage)
        return {
            models: modelObj[this.$route.meta.key],
            values: {}
        }
    },
    methods: {
        imgValue (val) {
            this.img = val
        }
    },
    mounted () {
        $(document).on('touchmove', function (e) {
            // e.preventDefault()
            e.stopPropagation()
        })
        var type = sessionStorage.getItem('customDont')
        var params = {id: this.$route.params.id, type: type}
        var url = 'run/plant/'
        if (this.$route.meta.runName === 'breed') {
            url = 'run/beast/'
        }
        axios.post(url + this.$route.meta.key + '/details', params)
            .then((responce) => {
                var lists = responce.data
                if (lists !== 404 && lists !== 403 && lists !== 400) {
                    this.values = lists
                } else {
                    if (lists === 404) {
                        alert('溯源码无效！')
                        this.$router.go('-1')
                    }
                    if (lists === 403) {
                        alert('商家已关闭溯源码追溯！')
                        this.$router.go('-1')
                    }
                    if (lists === 400) {
                        alert('该溯源码无相关信息！')
                        this.$router.go('-1')
                    }
                }
            })
    },
    components: {
        Header1,
        TwoColList
    },
    computed: {
        isbreed () {
            return this.isbreed = this.$route.meta.runName === 'breed'
        }
    }
}
</script>
