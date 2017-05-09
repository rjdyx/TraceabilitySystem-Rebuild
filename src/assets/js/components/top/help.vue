/**
 * @description:导航栏test模块
 * @author 郭森林
 * @date 2017/4/26 
 *  
 */ 
<template>
	<div class="user">
	</div>
</template>


<script>
// import Pdf from '../../config/pdf.js'
export default {
    name: 'user',
    data () {
        return {
            isClass: true
        }
    },
    methods: {
    },
    components: {
        // Pdf
    },
    mounted () {
        // console.log(Pdf)
        // var doc = new Pdf({
        //     orientation: 'landscape',
        //     unit: 'in',
        //     format: [4, 2]
        // })

        // doc.text('Hello world!', 10, 10)
        // doc.save('two-by-four.pdf')
    }
}
</script>

<style lang="sass">
$line: 1px solid;
$display: inline-block;
.user{
	height: 100%;
    overflow:hidden;
    padding-left:10px;
    .user_content{
    	margin-top: 15px;
    	overflow:scroll;
    	height: 100%;
    	.titleUser{
			border-bottom: $line #dcdcdc;
			padding-bottom: 10px;
			position: relative;
			.picture{
				display: $display;
				width: 10%;
				height: 124px;
				border: $line #ccc;
				margin:0 10px 0 30px;
				overflow: hidden;
			}
			.text{
				display: $display;
				vertical-align: top;
				margin-bottom: 10px;
				width: 80%;
			}
			.btn_change{
				position: absolute;
				right: 2%;
				bottom: 10%;
				color: #fff;
			}
			.coltext{
				font-size:14px;
				color: #898989;
				padding: 10px;
			}
		}
		.mainPic{
			text-align: center;
		}
    }
}
</style>
