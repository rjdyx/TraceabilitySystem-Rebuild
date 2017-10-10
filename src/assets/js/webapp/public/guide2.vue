<template>
	<div class="webAppGuide2">
		<div class="guide_overlayLayer"></div>
		<div class="webAppGuideItem" v-for='(item,i) in steps.length'>
			<div class="guide_tooltipReferenceLayer">
				<div class="direction"></div>
				<div class="tipText">
					{{steps[i].intro}}
				</div>
				
			</div>
			<div class="tipImg">
				<img v-if src="/public/images/shou.png" alt="">
			</div>
		</div>
		<div class="handle">
			<x-button mini type="primary" @touchend.native="prevFn">prev</x-button>
			<span></span>
			<x-button mini type="warn" @touchend.native="nextFn">next</x-button>
		</div>
	</div>
</template>
<script>
import { XButton } from 'vux'
export default{
    name: 'webAppGuide',
    components: {
        XButton
    },
    data () {
        return {
        }
    },
    props: {
        steps: {
            type: Array,
            default: function () {
                return []
            }
        }
    },
    mounted () {
        this.stepsFn()
    },
    watch: {
        steps () {
            this.stepsFn()
        }
    },
    methods: {
        stepsFn () {
            var steps = this.steps
            this.$nextTick(() => {
                var p = $('.webAppGuide2 .webAppGuideItem')
                for (var i = 0; i < steps.length; i++) {
                    $('.guide_relativePosition').removeClass('guide_relativePosition guide_showElement')
                    p.eq(i).find('.guide_tooltipReferenceLayer').removeClass('siderBarTip1_1_1 newTip siderBarTip1_1_2 siderBarTip1_1_3 siderBarTip1_1_4')
                    $(steps[i].element).eq(0).addClass('guide_relativePosition guide_showElement')
                    p.eq(i).find('.guide_tooltipReferenceLayer').addClass(steps[i].class)
                    $('.tipImg').css({ top: $(steps[i].element).offset().top + $(steps[i].element).eq(0).height() / 2 })
                    if (steps[i].animationName) {
                        $('.tipImg').show()
                        $('.tipImg').css('animation-name', steps[i].animationName)
                    } else {
                        $('.tipImg').hide()
                        $('.tipImg').css('animation-name', '')
                    }
                }
            })
        },
        nextFn () {
            this.$emit('return-nextFn')
        },
        prevFn () {
            this.$emit('return-prevFn')
        }
    }
}
</script>
<style lang="sass">
.guide_relativePosition{
	position:relative;
	background-color: rgba(255,255,255,.4);
    border-radius: 4px;
    box-shadow: 0 2px 15px rgba(0,0,0,.4);
}
.guide_showElement{
	z-index: 9999999!important;
}
@mixin guide($w, $t, $l) {
	width: $w;
	top: $t;
	left: $l;
}
@mixin guideDirection($d1, $d1v, $d2, $d2v, $bT, $bR, $bB, $bL) {
    border: 5px solid white;
    #{$d1}: $d1v;
    #{$d2}: $d2v;
    border-top-color: $bT;
    border-right-color: $bR;
    border-bottom-color: $bB;
    border-left-color: $bL;
}
.webAppGuide2{
	.guide_overlayLayer{
		top: 0;
	    bottom: 0;
	    left: 0;
	    right: 0;
	    position: fixed;
	    opacity: 0.8;
	    z-index: 999999;
	    background:rgba(0,0,0,0.4);
	    box-sizing: content-box;
	}
	.webAppGuideItem {	
		.guide_tooltipReferenceLayer{
			box-sizing: content-box;
		    position: absolute;
		    background-color: transparent;
		    visibility: visible;
		    z-index: 10000000;
			background-color: #FFF;
			box-shadow: 0 2px 15px rgba(0,0,0,.4);
			padding:.2rem;
			.direction{
		    	position:absolute;
		    }  
		}
		.tipImg{
	    	width:40%;
	    	position:absolute;
	    	z-index: 10000000;
	    	left:50%;
	    	margin-left:-20%;
	    	animation: 1s  ease-out 1 forwards;
			-webkit-animation: 2s  ease-out 1 forwards;
			opacity:1;
	    	img{
	    		width:100%;
	    	}
	    }
	    @keyframes goDown {
		    from {top : 80px;opacity:1;}
		    to {top : 50%;opacity:0;}
		}

		@-webkit-keyframes goDown {
		    from{top :80px;opacity:1;}
		    to{top : 50%;opacity:0;}
		}
		@keyframes goLeft {
		    from {left : 80%;opacity:1;}
		    to {left : 0%;opacity:0;}
		}

		@-webkit-keyframes goLeft {
		    from{left :80%;opacity:1;}
		    to{left : 0%;opacity:0;}
		}
	}
	.handle{
		position:fixed;
		right: .3rem;
		bottom:2rem;
		z-index: 7487984545;
	}
	.newTip{
		@include guide(35%, 20%, 10px)
		.direction{
			@include guideDirection(left, 10%, top, -10px, transparent, transparent, white, transparent)
		}	
	}
	.siderBarTip1_1_1{
		@include guide(35%, 16%, 10px)
		.direction{
			@include guideDirection(left, 10%, top, -10px, transparent, transparent, white, transparent)
		}	
	},
	.siderBarTip1_1_2{
		@include guide(35%, 23%, 50%)
		.direction{
			@include guideDirection(left, 10%, top, -10px, transparent, transparent, white, transparent)
		}
	}
	.siderBarTip1_1_3{
		@include guide(35%, 60%, 30%)
		.direction{
			@include guideDirection(top, 30%, left, -10px, transparent, white, transparent, transparent)
		}
	}
	.siderBarTip1_1_4{
		@include guide(35%, 60%, 30%)
		.direction{
			@include guideDirection(top, 30%, left, 100%, transparent, transparent, transparent, white)
		}
	}
}
</style>
