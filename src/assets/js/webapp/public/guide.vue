<template>
	<div class="webAppGuide">
		<div class="guide_overlayLayer"></div>
		<div class="webAppGuideItem" v-for='(item,i) in steps.length'>
			<div class="guide_tooltipReferenceLayer">
				<div class="direction"></div>
				<div class="tipText">
					{{steps[i].intro}}
				</div>
			</div>
			<div class="tipImg">
				<img v-if="steps[0].animationName" src="/public/images/shou.png" alt="">
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
            default () {
                return []
            }
        }
    },
    mounted () {
        this.stepsFn()
    },
    watch: {
        steps () {
            // this.stepsFn()
        }
    },
    methods: {
        stepsFn () {
            var steps = this.steps
            var p = $('.webAppGuide .webAppGuideItem')
            for (var i = 0; i < steps.length; i++) {
                p.eq(i).find('.guide_tooltipReferenceLayer').removeClass('tip1 tip2 siderBarTip1_1 siderBarTip1 del1')
                p.eq(i).find('.guide_tooltipReferenceLayer').addClass(steps[i].class)
                if (steps[i].class === 'tip1') {
                    p.eq(i).css({'top': 50, left: $(steps[i].element).eq(i).offset().left - 10})
                } else if (steps[i].class === 'tip2') {
                    p.eq(i).css({'top': 50, left: $('.app-header').width() - 10 - p.eq(i).width()})
                } else if (steps[i].class === 'siderBarTip1') {
                    p.eq(i).css({'top': $(steps[i].element).eq(i).offset().top + 10, left: 190})
                } else {
                    $('.guide_relativePosition').removeClass('guide_relativePosition guide_showElement')
                    $(steps[i].element).eq(0).addClass('guide_relativePosition guide_showElement')
                    if (steps[i].animationName === 'goDown') {
                        p.eq(i).css({'top': $(steps[i].element).eq(i).offset().top + 64, left: $(steps[i].element).eq(i).offset().left})
                    } else {
                        p.eq(i).css({'top': $('.app-basic .applist .list').eq(i).offset().top + 120, left: $('.app-basic .applist .list').eq(i).offset().left})
                    }
                    $('.tipImg').css({ top: $(steps[i].element).offset().top + $(steps[i].element).eq(0).height() / 2 })
                    if (steps[i].animationName) {
                        $('.tipImg').show()
                        $('.tipImg').css('animation-name', steps[i].animationName)
                    } else {
                        $('.tipImg').hide()
                        $('.tipImg').css('animation-name', '')
                    }
                }
            }
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
    // border: 1px solid rgba(0,0,0,.5);
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
.webAppGuide{
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
		position:absolute;
		width:150px;
		z-index: 7487984546;
		.guide_tooltipReferenceLayer{
			box-sizing: content-box;
		    position: absolute;
		    background-color: transparent;
		    visibility: visible;
		    z-index: 10000000;
			background-color: #FFF;
			padding:.2rem;
			box-shadow: 0 2px 15px rgba(0,0,0,.4);
			max-width: 110px;
			.direction{
		    	position:absolute;
		    	width: 0px;
		    	height:0px;
		    }    
		}
		.tipImg{
	    	width:40%;
	    	position:fixed;
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
		    from {top : 20%;opacity:1;}
		    to {top : 50%;opacity:0;}
		}

		@-webkit-keyframes goDown {
		    from {top : 20%;opacity:1;}
		    to {top : 50%;opacity:0;}
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
		z-index: 7487984546;
	}
	.tip1, .siderBarTip1_1{
		.direction{
			@include guideDirection(top, -10px, left, 10%, transparent, transparent, white, transparent)
		}
	}
	.tip2{
		.direction{
			@include guideDirection(top, -10px, left, 80%, transparent, transparent, white, transparent)
		}
	}
	
	.siderBarTip1{
		.direction{
			@include guideDirection(left, -10px, top, 40%, transparent, white, transparent, transparent)
		}	
	}

	// .del1{
	// 	.direction{
	// 		@include guideDirection(left, 80%, bottom, -10px, white, transparent, transparent, transparent)
	// 	}
	// }
}
</style>
