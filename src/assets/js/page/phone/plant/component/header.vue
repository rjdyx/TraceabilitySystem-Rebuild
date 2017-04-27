<template>
	<div id="header1">
		<img class="goBack" @click="goBack" src="../images/goback.png"  alt="返回">
		{{title}}
	</div>
</template>
<style lang="sass">
@import url("../css/puplic.css");
#header1{
	width:100%;
	height:3.5rem;
	background:#3ccfb5;
	text-align:center;
	position:fixed;
	top:0%;
	left:0%;
	color:white;
	line-height: 3.5rem;
	font-size:1.5rem;
	z-index: 100;
	.goBack{
		width:3%;
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
