<template>
	<div id="header1" :class="{breedCol:isbreed}">
	<!-- <div id="header1" class="plantCol"> -->
		<img class="goBack" @click="goBack" src="../images/goback.png"  alt="返回">
		{{title}}
	</div>
</template>
<style lang="sass">
@import "../css/plant.scss";
.breedCol{
	background:#93bf46!important;
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
	.goBack{
		width:.3rem;
		position:absolute;
		left:2%;
		top:50%;
		transform:translateY(-50%);
	}
}
</style>
<script>
export default {
    name: 'header',
    props: {
        title: {
            type: String,
            default: ''
        },
        isbreed: {
            type: Boolean,
            default: false
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
            // console.log(this.title)
            history.back()
        }
    }
}
</script>
