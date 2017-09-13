<template>
	<div id="header1">
		<span class="backWrap" @touchend="goBack">
			<img class="goBack" src="../images/goback.png" alt="返回">
		</span>
		{{title}}
	</div>
</template>
<style lang="sass">
@import "../css/plant.scss";
.breedCol{
	background: #93bf46!important;
}
#header1{
	width:100%;
	height:1rem;
	background:#3ccfb5;
	text-align:center;
	position:fixed;
	top:0%;
	left:0%;
	color:white;
	line-height: 1rem;
	font-size:.45rem;
	z-index: 100;
	.backWrap{
		display: inline-block;
		width: 1.4rem;
		height: 1rem;
		position:absolute;
		left:0%;
		top:50%;
		transform:translateY(-50%);
	}
	.goBack{
		width:.3rem;
		padding-top: 0.25rem;
	}
}
</style>
<script>
export default {
    name: 'header',
    props: {
        title: {
            type: String,
            default: '销售信息'
        }
    },
    data () {
        return {
        }
    },
    mounted () {
    },
    methods: {
        goBack () {
            history.back()
        }
    }
}
</script>
