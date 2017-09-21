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
            default: []
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
                var p = $('.webAppGuide .webAppGuideItem')
                for (var i = 0; i < steps.length; i++) {
                    $('.guide_relativePosition').removeClass('guide_relativePosition guide_showElement')
                    p.eq(i).find('.guide_tooltipReferenceLayer').removeClass('tip1 tip2 siderBarTip1 siderBarTip2')
                    $(steps[i].element).eq(0).addClass('guide_relativePosition guide_showElement')
                    p.eq(i).find('.guide_tooltipReferenceLayer').addClass(steps[i].class)
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
		.guide_tooltipReferenceLayer{
			box-sizing: content-box;
		    position: absolute;
		    background-color: transparent;
		    visibility: visible;
		    z-index: 10000000;
			background-color: #FFF;
			padding:.2rem;
			box-shadow: 0 2px 15px rgba(0,0,0,.4);
			.direction{
		    	position:absolute;
		    }    
		}
	}
	.handle{
		position:fixed;
		right: .3rem;
		bottom:2rem;
		z-index: 7487984546;
	}
	.tip1{
		@include guide(20%, 50px, 1%)
		.direction{
			@include guideDirection(top, -10px, left, 25%, transparent, transparent, white, transparent)
		}
	}
	.tip2{
		@include guide(20%, 50px, 75%)
		.direction{
			@include guideDirection(top, -10px, left, 70%, transparent, transparent, white, transparent)
		}
	}
	.siderBarTip1{
		@include guide(120px, 8%, 186px)
		.direction{
			@include guideDirection(left, -10px, top, 35%, transparent, white, transparent, transparent)
		}
	}
	.siderBarTip2{
		@include guide(120px, 18%, 186px)
		.direction{
			@include guideDirection(left, -10px, top, 35%, transparent, white, transparent, transparent)
		}
	}
	.siderBarTip1_1{
		@include guide(120px, 14%, 186px)
		.direction{
			@include guideDirection(left, -10px, top, 40%, transparent, white, transparent, transparent)
		}	
	},
	.siderBarTip1_2{
		@include guide(120px, 20%, 186px)
		.direction{
			@include guideDirection(left, -10px, top, 40%, transparent, white, transparent, transparent)
		}
	},
	.siderBarTip1_3{
		@include guide(120px, 27%, 186px)
		.direction{
			@include guideDirection(left, -10px, top, 40%, transparent, white, transparent, transparent)
		}
	}
}
</style>
