/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
;(function($) {

	"use strict";
	gsap.config({
		nullTargetWarn: false,
	});

// lenis-smooth-scroll
	const lenis = new Lenis({
		duration: .8, 
		easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
		direction: 'vertical', 
		smooth: true, 
		smoothTouch: false, 
	});

	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}
	requestAnimationFrame(raf);


	function TXTheaderSticky() {
		var $window = $(window);
		var lastScrollTop = 0;
		var $header = $('.txa_sticky_header');
		var headerHeight = $header.outerHeight() + 30;

		$window.scroll(function () {
			var windowTop = $window.scrollTop();

			if (windowTop >= headerHeight) {
				$header.addClass('txa_sticky');
			} else {
				$header.removeClass('txa_sticky');
				$header.removeClass('txa_sticky_show');
			}

			if ($header.hasClass('txa_sticky')) {
				if (windowTop < lastScrollTop) {
					$header.addClass('txa_sticky_show');
				} else {
					$header.removeClass('txa_sticky_show');
				}
			}

			lastScrollTop = windowTop;
		});
	}
	$('.counter').counterUp({
		delay: 20,
		time: 5000
	});
	TXTheaderSticky();
	$('.open_mobile_menu').on("click", function() {
		$('.mobile_menu_wrap').toggleClass("mobile_menu_on");
	});
	$('.open_mobile_menu').on('click', function () {
		$('body').toggleClass('mobile_menu_overlay_on');
	});
	jQuery(".mobile-main-navigation li.dropdown").append('<span class="dropdown-btn"><i class="fas fa-angle-down"></i></span>'),
	jQuery(".mobile-main-navigation li .dropdown-btn").on("click", function () {
		jQuery(this).hasClass("active")
		? (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"), jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle())
		: (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"),
			jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle(),
			jQuery(this).toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").slideToggle());
	});
	// Background Image
	$('[data-background]').each(function() {
		$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
	});
	gsap.registerPlugin(ScrollTrigger);
	gsap.registerPlugin(MotionPathPlugin);


	$(window).on("scroll", function() {
		if ($(this).scrollTop() > 200) {
			$('.mx-scrollup').fadeIn();
		} else {
			$('.mx-scrollup').fadeOut();
		}
	});
	$('.mx-scrollup').on("click", function()  {
		$("html, body").animate({
			scrollTop: 0
		}, 800);
		return false;
	}); 
	// Animation
	if($('.wow').length){
		var wow = new WOW(
		{
			boxClass:     'wow',
			animateClass: 'animated',
			offset:       0,
			mobile:       true,
			live:         true
		}
		);
		wow.init();
	};
	jQuery('.video_box').magnificPopup({
		disableOn: 200,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
	});

	$('.marquee-left').marquee({
		gap: 0,
		speed: 40,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: true,
		startVisible:true,
	});
	$('.marquee-right').marquee({
		gap: 28,
		speed: 40,
		delayBeforeStart: 0,
		direction: 'right',
		duplicated: true,
		pauseOnHover: true,
		startVisible:true,
	});


	// windows-loaded-before-functions
	document.addEventListener("DOMContentLoaded", function () {
		window.addEventListener('load', function(){

			CustomEase.create("ease1", ".645,.045,.355,1");

			let preloader = document.querySelector("#preloader");
			if (preloader) {
				preloader.classList.add("preloaded");
				setTimeout(function () {
					preloader.remove();
				}, 1000 ) ;

			}
			setTimeout(function() {
				if($(".mx_hero_title").length) {
					var AGTTitleAni = $(".mx_hero_title");
					if(AGTTitleAni.length == 0) return; gsap.registerPlugin(SplitText); AGTTitleAni.each(function(index, el) {

						el.split = new SplitText(el, { 
							type: "lines,words,chars",
							linesClass: "split-line"
						});

						gsap.set(el, { perspective: 400 });

						if( $(el).hasClass('hero_title_1') ){
							gsap.set(el.split.chars, {
								x: 100,
								scaleX: 0,
								opacity: 0,
							});
						}
						el.anim = gsap.to(el.split.chars, {
							scrollTrigger: {
								trigger: el,
								start: "top 90%",
								toggleActions: "play reverse play reverse",
								markers: false,
							},
							x: 0,
							y: 0,
							scaleX: 1,
							scaleY: 1,
							opacity: 1,
							duration: 1,
							stagger: .03,
							rotationX: 15,
							delay: .1,
							ease: "power3.inOut",
						});
					});
				}

				const MXHero = gsap.timeline();
				MXHero
				.from(".mx-hero-sec .mx-hero-img img", { scale: 1.3,  x: 100, duration: 1, transformOrigin: "left",  ease: "power1.out" })
				.from(".mx-hero-text .mx-slug", { opacity: 0,  x: 100, duration: 1, transformOrigin: "left",  ease: "power1.out" },"< = .2")
				.from(".mx-hero-text .hero_desc", {   opacity: 0,  x: 100, opacity: 0, duration: 1, transformOrigin: "left",  ease: "power1.out" },"< = .2")
				.from(".mx-hero-text .mx-btn1", {   opacity: 0,  x: 100, opacity: 0, duration: 1, transformOrigin: "left",  ease: "power1.out" },"< = .2")
				.from(".mx-hero-text .mx-hero-client li:nth-child(1)", {   opacity: 0,  x: 100, opacity: 0, duration: 1, transformOrigin: "left",  ease: "power1.out" },"< = .1")
				.from(".mx-hero-text .mx-hero-client li:nth-child(2)", {   opacity: 0,  x: 100, opacity: 0, duration: 1, transformOrigin: "left",  ease: "power1.out" },"< = .1")
				.from(".mx-hero-text .mx-hero-client li:nth-child(3)", {   opacity: 0,  x: 100, opacity: 0, duration: 1, transformOrigin: "left",  ease: "power1.out" },"< = .1")
				.from(".mx-hero-text .mx-hero-client li:nth-child(4)", {   opacity: 0,  x: 100, opacity: 0, duration: 1, transformOrigin: "left",  ease: "power1.out" },"< = .1")
				.from(".mx-hero-text .mx-hero-client p", {   opacity: 0,  x: 100, opacity: 0, duration: 1, transformOrigin: "left",  ease: "power1.out" },"< = .1")



				gsap.utils.toArray(".anim_line").forEach((path, i) => {
					let anim_line = document.querySelectorAll(".anim_obj1")[i];
					if (!anim_line) return;

					gsap.set(anim_line, { opacity: 0, transformOrigin: "50% 50%" });

					const tl = gsap.timeline({ repeat: -1 });

					if (i !== 0) tl.to({}, { duration: 2.8 }); 
					tl.to(anim_line, {
						duration: 15,
						ease: "none",
						motionPath: {
							path: path,
							align: path,
							autoRotate: true,
							alignOrigin: [0.5, 0.5],
							start: 1,
							end: 0
						},
						onStart: () => {
							gsap.to(anim_line, { opacity: 1, duration: 0.3 });
						}
					});
				});

				gsap.utils.toArray(".anim_line2").forEach((path, i) => {
					let anim_line2 = document.querySelectorAll(".anim_obj2")[i];
					if (!anim_line2) return;

					gsap.set(anim_line2, { opacity: 0, transformOrigin: "50% 50%" });

					const tl2 = gsap.timeline({ repeat: -1 });

					if (i !== 0) tl2.to({}, { duration: 0.3 });

					tl2.to(anim_line2, {
						duration: 15,
						ease: "none",
						motionPath: {
							path: path,
							align: path,
							autoRotate: true,
							alignOrigin: [0.5, 0.5],
							start: 1,
							end: 0
						},
						onStart: () => {
							gsap.to(anim_line2, { opacity: 1, duration: 0.3 });
						}
					});
				});

			}, 700);
		})		
	});
if($('.mx-itm-title').length) {
	var txtheading = $(".mx-itm-title");
	if(txtheading.length == 0) return; gsap.registerPlugin(SplitText); txtheading.each(function(index, el) {
		el.split = new SplitText(el, { 
			type: "lines,words,chars",
			linesClass: "split-line"
		});
		if( $(el).hasClass('mx-itm-anim') ){
			gsap.set(el.split.chars, {
				opacity: .3,
				color: "#3368C6",
				x: "-7",
			});
		}
		el.anim = gsap.to(el.split.chars, {
			scrollTrigger: {
				trigger: el,
				start: "top 92%",
				end: "top 60%",
				markers: false,
				scrub: 1,
			},

			x: "0",
			y: "0",
			color: "inherit",
			opacity: 1,
			duration: .7,
			stagger: 0.2,
		});

	});
}

if ($('.mx-ser1-slider').length > 0 ) {
	var slider = new Swiper('.mx-ser1-slider', {
		spaceBetween: 20,
		slidesPerView: 4,
		loop: true,
		autoplay: {
			enabled: true,
			delay: 5000
		},
		speed: 1000,
		breakpoints: {
			'1600': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'480': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});
};


if ($('.mx-testi1-slider').length > 0 ) {
	var slider = new Swiper('.mx-testi1-slider', {
		slidesPerView: 1,
		loop: true,
		spaceBetween: 28,
		speed: 1000,
		autoplay: {
			enabled: true,
			delay: 6000
		},
		pagination: {
			el: ".mx-tst-pagi",
			clickable: true,
		}
	});
};


var MXItem1 = gsap.timeline({
	scrollTrigger: {
		trigger: ".mx-app-cta-item",
		start: "top 70%",
		toggleActions: "play reverse play reverse",
		markers: false,
	},
})
MXItem1
.from(".mx-app-cta-item .cta-bottom", {
	yPercent: 100,
	opacity: 0,
	ease: "power1.out",
	duration: 1, 
	stagger: -.2,
})

var MXItem2 = gsap.timeline({
	scrollTrigger: {
		trigger: ".mx-workp-content",
		start: "top 70%",
		toggleActions: "play reverse play reverse",
		markers: false,
	},
})
MXItem2
.from(".mx-workp-item", {
	xPercent: 100,
	opacity: 0,
	ease: "power1.out",
	duration: 1, 
	stagger: .2,
})




gsap.utils.toArray(".img-parallax").forEach(function(container) {
	let image = container.querySelector("img");

	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: container,
			scrub: true,
			pin: false,
		},
	}); 
	tl.from(image, {
		yPercent: -30,
		ease: "none",
		duration: 5, 
		scale: 1.5,
	}).to(image, {
		yPercent: 0,
		duration: 5, 
		ease: "power1.out",
		scale: 1.2,
	}); 
});


gsap.utils.toArray(' .top_view').forEach((el, index) => { 
	let tlcta = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			scrub: 1.5,
			start: "top 100%",
			end: "top 70%",
			toggleActions: "play none none reverse",
			markers: false
		}
	})

	tlcta
	.set(el, {transformOrigin: 'center center'})
	.from(el, { opacity: 0, scale: 1, y: "300"})
});


gsap.utils.toArray(' .top_view2').forEach((el, index) => { 
	let tlcta = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			scrub: 1.5,
			start: "top 100%",
			end: "top 70%",
			toggleActions: "play none none reverse",
			markers: false
		}
	})

	tlcta
	.set(el, {transformOrigin: 'center center'})
	.from(el, { opacity: 0, scale: 1, y: "300"})
});


if (window.matchMedia("(min-width: 1200px)").matches) { 
	var TVABT = gsap.timeline({
		scrollTrigger: {
			trigger: '.mx-intro-item5',
			start: "top 60%",
			toggleActions: 'play none none reverse',
			markers: false,
		}

	});
	TVABT
	.from(".mx-intro-item5 .intro-shape-wrap .shape1", { opacity: 0, rotate:'0deg', yPercent: 100,  duration: .5,   ease: "power1.out" })
	.from(".mx-intro-item5 .intro-shape-wrap .shape2", { opacity: 0, rotate:'0deg',  yPercent: 100, duration: .5,   ease: "power1.out" },"< = .3")
	.from(".mx-intro-item5 .intro-shape-wrap .shape3", { opacity: 0, rotate:'0deg', yPercent: 100, duration: .5,   ease: "power1.out" },"< = .3")

};

if ($('.mx-ser2-slider').length > 0 ) {
	var slider = new Swiper('.mx-ser2-slider', {
		spaceBetween: 12,
		slidesPerView: 4,
		loop: true,
		navigation: {
			nextEl: ".ser2-next",
			prevEl: ".ser2-prev",
		},
		autoplay: {
			enabled: true,
			delay: 5000
		},
		speed: 1000,
		breakpoints: {
			'1600': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'480': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});
};

})(jQuery);