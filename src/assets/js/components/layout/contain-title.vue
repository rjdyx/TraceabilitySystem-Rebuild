/**
 * 中间内容标题组件
 * @author 舒丹彤
 * @date 2017/3/15 
 * 
 */ 
<template>
    <div class="title">
        <h2>{{settitle}}</h2>  
        
        <a class="back" @click="back" v-if="isShow">
          <span class="back_icon"></span>
          <span class="back_text">返回</span>
        </a>
        <span class="print" v-if="printShow">
          <i class="iconfont">&#xe8e3;</i>
          <span class="back_text">打印</span>
        </span> 
    </div>
</template>  

<script>
    export default {
        name: 'ContainTitle',
        props: {
            settitle: {
                type: String,
                default: ''
            },
            isShow: {
                type: Boolean,
                default: false
            },
            printShow: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            back () {
                this.$router.go(-1)
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import "../../../sass/function";
    .title {
      padding: 0px 8px 14px 0;
      border-bottom: 2px solid #e5e5e5;
      // font-size: 18px;
      margin-bottom: 10px;
      h2 {
        border-radius: 4px;
        padding-left: 14px;
        display: inline-block;
        font-family: YouYuan;
        color: #333;
        font-weight: 400;
      }
      .back,.print{
        display: inline-block;
        float: right;
        border: 1px solid #dcdcdc;
        border-radius: 4px; 
        padding: 0px 10px 2px 0px;
        &:hover{
          cursor: pointer;
          .back_text{
            color: #ccc;
          }
        }
        .back_icon{
          display: inline-block;
          width: 28px;
          height: 15px;
          vertical-align: middle;
          margin-right: 5px;
        }
      }  
      .print{
        margin-right: 5px;
      }
    }

    @font-face{
         font-family: 'iconfont';
         src: url('../../iconfont/icon_tea/iconfont.eot');
         src: url('../../iconfont/icon_tea/iconfont.eot?#iefix') format('embedded-opentype'),
      url('../../iconfont/icon_tea/iconfont.woff') format('woff'),
      url('../../iconfont/icon_tea/iconfont.ttf') format('truetype'),
      url('../../iconfont/icon_tea/iconfont.svg#iconfont') format('svg');
      }
      .iconfont{
        font-family: 'iconfont' !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
        padding: 0 8px 0 12px;
        color: #009acb;
      }
</style>
