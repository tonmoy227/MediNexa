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

	$('.search_btn_toggle').on('click', function() {
		$('.overlay, .search_box_active').addClass('active');
	});
	$('.overlay, .search_box_close').on('click', function() {
		$('.search_box_active').removeClass('active');
		$('.overlay').removeClass('active');
	});
	jQuery(document).ready(function (o) {
		0 < o(".navSidebar-button").length &&
		o(".navSidebar-button").on("click", function (e) {
			e.preventDefault(), e.stopPropagation(), o(".info-group").addClass("isActive");
		}),
		0 < o(".close-side-widget").length &&
		o(".close-side-widget").on("click", function (e) {
			e.preventDefault(), o(".info-group").removeClass("isActive");
		}),
		o(".xs-sidebar-widget").on("click", function (e) {
			e.stopPropagation();
		})
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
			gsap.utils.toArray(".mx-text p").forEach(paragraph => {
				let timeline = gsap.timeline({
					scrollTrigger: {
						trigger: paragraph,
						start: "top 90%",
						end: "bottom 60%",
						toggleActions: "play none none none"
					}
				});
				let splitText = new SplitText(paragraph, { type: "lines" });
				gsap.set(paragraph, { perspective: 400 });
				timeline.from(splitText.lines, {
					opacity: 0,
					rotationX: -80,
					transformOrigin: "top center -50",
					force3D: true,
					duration: 1,
					delay: 0.5,
					stagger: 0.1
				});
			});
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
						if( $(el).hasClass('hero_title_2') ){
							gsap.set(el.split.chars, {
								y: 100,
								scaleX: 0,
								opacity: 0,
							});
						}
						if( $(el).hasClass('hero_title_3') ){
							gsap.set(el.split.chars, {
								x: 100,
								scaleX: .5,
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

				const MXHero2 = gsap.timeline();
				MXHero2
				.from(".mx-hero2-img-wrap", {   scale: 1.3, opacity: 0,  duration: 1.5,  ease: "power2.inOut" })
				.from(".mx-hero2-text", {   y: -100, opacity: 0,  duration: 1,  ease: "power2.inOut" },"< = .55")
				.from(".mx-hero2-desc", {   x: 100, opacity: 0,  duration: 1,  ease: "power2.inOut" },"< ")
				.from(".mx-hero2-video", {   x: -100, opacity: 0,  duration: 1,  ease: "power2.inOut" },"<")



				const MXHero3 = gsap.timeline();
				MXHero3
				.from(".mx-hero3-text .hero-slug", {   x: 150, opacity: 0,  duration: 1.5,  ease: "power2.inOut" })
				.from(".mx-hero3-img-wrap", {   yPercent: 100, opacity: 0,  duration: 1.5,  ease: "power2.inOut" },"<")
				.from(".mx-hr3-text", {   yPercent: -100, opacity: 0,  duration: 1.5,  ease: "power2.inOut" },"<")
				.from(".mx-hero3-text .hr_desc", {   x: 150, opacity: 0,  duration: 1.5,  ease: "power2.inOut" },"< = .2")
				.from(".mx-hero3-text .btn-wrap", {   x: 150, opacity: 0,  duration: 1.5,  ease: "power2.inOut" },"< = .2")
				.from(".mx-hero3-text .mx-hero-client .cl-img li", {   scale: 0, rotate: 180, opacity: 0,  duration: 1.5,  ease: "power2.inOut" },"< = .2")
				.from(".mx-hero3-text .mx-hero-client .cl-rate", {   x: 150, opacity: 0,  duration: 1.5,  ease: "power2.inOut" },"< = .2")


			}, 700);
})		
});

if (window.matchMedia("(min-width: 1200px)").matches) { 
	var TVCONT = gsap.timeline({
		scrollTrigger: {
			trigger: '.mx-hero4-img-wrap',
			start: "top 20%",
			toggleActions: 'play none none reverse',
			markers: false,
		}

	});
	TVCONT
	.from(".mx-hero4-img-wrap .item-img1", { opacity: 0,  yPercent: 100, duration: 1,   ease: "power1.out" })
	.from(".mx-hr4-card", { opacity: 0,  yPercent: -100, duration: 1,   ease: "power1.out" },"< = .2")
	.from(".mx-hero4-img-wrap .mx-hr4-icon:is(.icon1)", { scale: 0, yPercent: 100,  ease: "power1.out" },"< = .2")
	.from(".mx-hero4-img-wrap .mx-hr4-icon:is(.icon2)", { scale: 0, yPercent: -100,  ease: "power1.out" },"< = .2")
	.from(".mx-hero4-img-wrap .hr4-bottom1", { yPercent: -100, duration: 1.5,  ease: "power1.out" },"< = .2")
	.from(".mx-hero4-img-wrap .hr4-bottom2", { yPercent: -100, duration: 1.5, ease: "power1.out" },"< = .2")
	.from(".mx-hero4-img-wrap .hero4-img-wrapper .hr4-shape", { scale: 0, yPercent: -100, duration: 1.5, ease: "power1.out" },"< = .2")

};
if (window.matchMedia("(min-width: 1200px)").matches) { 
	var TVCONT2 = gsap.timeline({
		scrollTrigger: {
			trigger: '.mx-cta4-content',
			start: "top 50%",
			toggleActions: 'play none none reverse',
			markers: false,
		}

	});
	TVCONT2
	.from(".mx-cta4-img1", { opacity: 0, xPercent: 50, duration: 1,   ease: "power1.out" })
	.from(".mx-cta4-sec .mx-ct-img .item-img", { opacity: 0,  yPercent: 100, duration: 1,   ease: "power1.out" },"< = .2")
	.from(".mx-cta4-sec .mx-ct-img .shape3", { opacity: 0, scale: 0, yPercent: 100, duration: 1,   ease: "power1.out" },"< = .2")
	.from(".mx-cta4-sec .mx-ct-img .shape2", { opacity: 0, scale: 0, yPercent: 100, duration: 1,   ease: "power1.out" },"< = .2")
	.from(".mx-cta4-sec .mx-ct-img .shape1", { opacity: 0, scale: 0, yPercent: 100, duration: 1,   ease: "power1.out" },"< = .2")


};

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

if (window.matchMedia("(min-width: 1200px)").matches) {
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
}
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

gsap.utils.toArray(' .zoom_in').forEach((el, index) => { 
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
	.from(el, { opacity: 0, scale: .3, y: "-100"})
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


if ($('.mx-case1-slider').length > 0 ) {
	var slider = new Swiper('.mx-case1-slider', {
		slidesPerView: 5,
		loop: true,
		spaceBetween: 24,
		speed: 1000,
		autoplay: {
			enabled: true,
			delay: 6000
		},
		breakpoints: {
			'1600': {
				slidesPerView: 5,
			},
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 3,
			},
			'991': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'680': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});
};


if ($('.mx-cs3-slider-area').length > 0 ) {
	var slider = new Swiper('.mx-cs3-slider-area', {
		slidesPerView: 1,
		loop: true,
		spaceBetween: 0,
		effect: "fade",
		speed: 1000,
		autoplay: {
			enabled: false,
			delay: 6000
		},
		navigation: {
			nextEl: ".cs3-next",
			prevEl: ".cs3-prev",
		},
		pagination: {
			el: ".mx-cs3-pagi",
			type: 'fraction',
			formatFractionCurrent: function (number) {
				return number < 10 ? '0'+ number: number;
			},
			formatFractionTotal: function (number) {
				return number < 10 ? '0'+ number : number;
			}
		},
	});
};


if ($('.mx-testi3-slider').length > 0 ) {
	var slider = new Swiper('.mx-testi3-slider', {
		slidesPerView: 1,
		loop: true,
		spaceBetween: 0,
		speed: 1000,
		effect: "fade",
		autoplay: {
			enabled: false,
			delay: 6000
		},
		navigation: {
			nextEl: ".testi3-next",
			prevEl: ".testi3-prev",
		},
	});
};


if ($('.scene').length > 0 ) {
	$('.scene').parallax({
		scalarX: 10.0,
		scalarY: 10.0,
	}); 
}


if (window.matchMedia("(min-width: 992px)").matches) {
	const serials = gsap.utils.toArray(".lg-serial");

	var ATWORKPROCESS = gsap.timeline({
		scrollTrigger: {
			trigger: '.mx-wc2-scrolbar',
			start: "top 6%",
			end: "bottom 60%",
			endTrigger: ".mx-wc2-sec",
			scrub: 1,
			pin: true,
			pinSpacing: false,
			markers: false,
		}
	});

	ATWORKPROCESS.fromTo(".wc2-scrbar",
		{ height: "60px" },
		{ height: "100%", ease: "none" },
		0 
		);

	const CaseStudy = gsap.utils.toArray(".mx-wc2-item");
	const animateCard = (card, wrapper, index) => {
		gsap.to(card, {
			scrollTrigger: {
				trigger: wrapper,
				scrub: 1,
				start: `top ${50 + 50 * index}`, 
				endTrigger: ".mx-wc2-sec",
				end: "bottom 70%",
				pin: wrapper,
				pinSpacing: false,
				markers: false,
			},
		});
	};
	CaseStudy.forEach((wrapper, index) => animateCard([index], wrapper, index));
}


$('.mx-line-icon a').on("click", function(){
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name="DCSext.Level"' + this.hash.slice(1) +']');
		if (target.length) {
			$('html, body').animate({
				scrollTop: target.offset().top -150
			}, 1000);
			return false;
		}
	}
});

var quick_view = new Swiper(".mx-ser3-slide-thumb", {
	spaceBetween: 12,
	slidesPerView: 5,
	speed: 1000,
	direction: 'vertical',
	autoplay: {
		enabled: true,
		delay: 5000
	},
	breakpoints: {  
		'1400': {
			slidesPerView: 5,
		},
		'1200': {
			slidesPerView: 5,
		},
		'992': {
			slidesPerView: 5,
		},
		'480': {
			slidesPerView: 5,
		},
		'0': {
			slidesPerView: 5,
		},
	},
});

var swiper2 = new Swiper(".mx-ser3-slider-item", {
	spaceBetween: 0,
	speed: 1000,
	effect: "fade",
	autoplay: {
		enabled: true,
		delay: 5000
	},
	pagination: {
		el: ".mx-ser-pagi",
		type: 'fraction',
		formatFractionCurrent: function (number) {
			return number < 10 ? '0'+ number: number;
		},
		formatFractionTotal: function (number) {
			return number < 10 ? '0'+ number : number;
		}
	},
	scrollbar: {
		el: '.mx-ser-scrollbar',
		draggable: false,
	},
	slidesPerView: 1,
	thumbs: {
		swiper: quick_view,
	},
});


if ($('.mx-tst4-slider').length > 0 ) {
	var slider = new Swiper('.mx-tst4-slider', {
		slidesPerView: 1,
		loop: true,
		spaceBetween: 0,
		speed: 1000,
		effect: "fade",
		autoplay: {
			enabled: false,
			delay: 3000
		},
	});
};



$('.mx_item_active').on('mouseover', function () {
	var $group = $(this).closest('[data-nx-group]');
	$group.find('.mx_item_active').removeClass('active');
	$(this).addClass('active');
});

if($('.mx-split-1').length) {
	var txtSplit = $('.mx-split-1');
	if(txtSplit.length == 0) return; gsap.registerPlugin(SplitText); txtSplit.each(function(index, el) {
		el.split = new SplitText(el, { 
			type: "lines",
			linesClass: "split-line"
		});
	});
}



document.querySelectorAll(".mx-cta3-content").forEach((projectItem) => {
	const textEl = projectItem.querySelector(".mx-cta3-item");
	projectItem.addEventListener("mousemove", (e) => {
		const rect = projectItem.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		const moveX = (x / rect.width - 0.05) * 50; 
		const moveY = (y / rect.height - 0.5) * 50;

		gsap.to(textEl, {
			x: moveX,
			y: moveY,
			duration: 4,
			ease: "power2.out"
		});
	});
	projectItem.addEventListener("mouseleave", () => {
		gsap.to(textEl, {
			x: 0,
			y: 0,
			duration: 5,
			ease: "power3.out"
		});
	});
});



if ($('.mx-spon4-slider').length > 0 ) {
	var slider = new Swiper('.mx-spon4-slider', {
		spaceBetween: 100,
		slidesPerView: 6,
		loop: true,
		speed: 400,
		breakpoints: {
			'1600': {
				slidesPerView: 6,
			},
			'1200': {
				slidesPerView: 5,
				spaceBetween: 40,
			},
			'992': {
				slidesPerView: 4,
				spaceBetween: 20,
			},
			'768': {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			'576': {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			'480': {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});
};

})(jQuery);