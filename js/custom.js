/* Custom jQuery Code Hierarchy  */
/* 
CUSTOM JS DOCUMENT 
	1.Page Loader 
	2.Navigation Menu 
	3.Owl Slider
	4.Data Animation
	5.Progress Bar
	6.Background Image
	7.Parallax BG
	8.Portfolio Grid
	9.Pretty Photo
	10.Form
		- Contact
		- Career
		- Subscribe
	11.Tool Tip
	12. BacktoTop
	13. Counter
	14. Easy Ticket Text Slider
*/

(function ($) {
    'use strict';
	
	/* Page Loader */
	var pageLoader = $("#pageloader");
    if (pageLoader.length > 0)
    {
		var loadInner = $(".loader-item");
        loadInner.delay(700).fadeOut();
        pageLoader.delay(800).fadeOut("slow");
    }
	
	/* Navigation Menu */
	var navBar = $("#sticker");
	if (navBar.length > 0) 
	{
		navBar.sticky({
			topSpacing: 0
		});
		
		 var transHead = $('.transparent-header .navbar');
		 var navClose = $(".close");
		 /* header Contact (Phone) */
		 var headContact = $(".header-contact");
		 headContact.on(function() {
		 
			var headercon = $(".header-contact-content");
            headercon.show("fast", function() {});
            transHead.fadeIn().addClass('top-search-open');
            navClose.on(function() {
                headercon.hide("fast", function() {});
                transHead.fadeIn().removeClass('top-search-open');
            })
        });
        /* header Search (Search Form) */
		var headSearch = $(".header-search");
        headSearch.on(function() {
			var headerser = $(".header-search-content");
            headerser.show("fast", function() {});
            transHead.fadeIn().addClass('top-search-open');
            navClose.on(function() {
                headerser.hide("fast", function() {});
                transHead.fadeIn().removeClass('top-search-open');
            })
        });
        /* header Share (Search Form) */
		var headShare = $(".header-share");
        headShare.on(function() {
			var headerShare = $(".header-share-content");
            headerShare.show("fast", function() {});
            transHead.fadeIn().addClass('top-search-open');
            navClose.on(function() {
                headerShare.hide("fast", function() {});
                transHead.fadeIn().removeClass('top-search-open');
            })
        });
		 
        /* Active When Scroll */
		var pBody = jQuery('body')
		pBody.scrollspy({ 
			target: '#topnav',
			offset: 95
		})
        /* Smooth Scroll Links */
		var pageScroll = $('.page-scroll a');
        pageScroll.on('click', function(event) {
			var $anchor = $(this);
			$('html, body')
				.stop()
				.animate({
					scrollTop: $($anchor.attr('href'))
						.offset()
						.top
				}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
    
	}
	
	/* Owl Slider */
	var owlSlider = $(".owl-carousel");
	if (owlSlider.length > 0)
	{
		owlSlider.each(function(index) {
			var oThis = $(this);
			var effect_mode = $(this).data('effect');
			var autoplay = $(this).data('autoplay');
			var navigation = $(this).data('navigation');
			var pagination = $(this).data('pagination');
			var singleitem = $(this).data('singleitem');
			var items = $(this).data('items');
			var itemsdesktop = $(this).data('desktop');
			var itemsdesktopsmall = $(this).data('desktopsmall');
			var itemstablet = $(this).data('tablet');
			var itemsmobile = $(this).data('mobile');
			if (itemsdesktop > 0) {
				itemsdesktop = [1199, itemsdesktop];
			}
			if (itemsdesktopsmall > 0) {
				itemsdesktopsmall = [979, itemsdesktopsmall];
			}
			if (itemstablet > 0) {
				itemstablet = [640, itemstablet];
			}
			if (itemsmobile > 0) {
				itemsmobile = [479, itemsmobile];
			}
			oThis.owlCarousel({
				transitionStyle: effect_mode,
				autoPlay: autoplay,
				navigation: navigation,
				pagination: pagination,
				singleItem: singleitem,
				items: items,
				itemsDesktop: itemsdesktop,
				itemsDesktopSmall: itemsdesktopsmall,
				itemsTablet: itemstablet,
				itemsMobile: itemsmobile,
				navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
			});
		});
	}
	
	/* Data Animation */
	var dataAnima = true;
	if (dataAnima)
	{
		var dAnimation = $('[data-animation]')
		dAnimation.each(function() {
            var element = $(this);
            element.addClass('animated');
            element.appear(function() {
                var delay = (element.data('delay') ? element.data('delay') : 1);
                if (delay > 1) element.css('animation-delay', delay + 'ms');
                element.addClass(element.data('animation'));
                setTimeout(function() {
                    element.addClass('visible');
                }, delay);
            });
        });
	}
	
	/* Progress Bar */	
	var progressBar = $(".progress-bar");
	if (progressBar.length > 0)
	{
		progressBar.each(function() {
			var pThis = $(this);
			pThis.appear(function() {
				var datavl = pThis.attr('data-percentage');
				pThis.animate({
					"width": datavl + "%"
				}, '1200');
			});
		});
	}
	
	/* Background IMAGE */	
	var pageSection = $(".image-bg, .parallax-bg");
	if (pageSection.length > 0)
	{
		pageSection.each(function(indx) {
			var parThis = $(this);
			if (parThis.attr("data-background")) {
				parThis.css("background-image", "url(" + parThis.data("background") + ")");
			}
		});
	}
	
	/* Portfolio Grid */
	var mixCon = $("#mix-container");
	if (mixCon.length > 0)
	{
		mixCon.mixItUp();
	}
		
	/* Pretty Photo */
	var prettyPhoto = $("a[rel^='prettyPhoto'], a[data-rel^='prettyPhoto']");
	if (prettyPhoto.length > 0) {
		prettyPhoto.prettyPhoto({
			hook: 'data-rel',
			theme: "dark_square",
			social_tools: false,
			deeplinking: false
		});
	}
	
	/* BacktoTop */
	var btoTop = $('#back-to-top');
	if (btoTop.length) {
		var scrollTrigger = 100, // px
			backToTop = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					btoTop.addClass('show');
				} else {
					btoTop.removeClass('show');
				}
			};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		btoTop.on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
	}
    
    var scroll = $('.scroll');
		 scroll.on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 60 + "px"
            }, 1200, 'easeInOutExpo');
            event.preventDefault();
        });
	
	/* Counter */	
	var connum = $(".count-number")
	connum.appear(function() {
		var $this = $(this);
		$this.each(function() {
			var datacount = $this.attr('data-count');
			$this.find('.counter').delay(6000).countTo({
				from: 10,
				to: datacount,
				speed: 3000,
				refreshInterval: 50,
			});
		});
	});

	/* Video Slider */	
	var videoText = $('.video-slider-text');
	if ( videoText.length !== 0 ) {
		videoText.easyTicker({
			direction: 'up',  
			speed: 'slow',
			interval: 4000,
			height: 'auto',
			visible: 1,
			mousePause: 0,
		});
	}
	
	/* Video Player */
	
	 if (typeof $.fn.mb_YTPlayer != 'undefined' && $.isFunction($.fn
		.mb_YTPlayer)) {
		var m = false;
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
			navigator.userAgent)) {
			m = true
		}
		var v = $('.player');
		var vControl = $('#video-controls a');
		if (m == false) {
			v.mb_YTPlayer();			
				vControl.each(function() {
					var t = $(this);
					t.on('click', (function(e) {
						e.preventDefault();
						if (t.hasClass('fa-volume-off')) {
							t.removeClass('fa-volume-off')
								.addClass('fa-volume-down');
							v.unmuteYTPVolume();
							return false
						}
						if (t.hasClass(
							'fa-volume-down')) {
							t.removeClass('fa-volume-down')
								.addClass('fa-volume-off');
							v.muteYTPVolume();
							return false
						}
						if (t.hasClass('fa-pause')) {
							t.removeClass('fa-pause')
								.addClass('fa-play');
							v.pauseYTP();
							return false
						}
						if (t.hasClass('fa-play')) {
							t.removeClass('fa-play')
								.addClass('fa-pause');
							v.playYTP();
							return false
						}
					}));
				});
			vControl.show();
		}
	}
    /* Video Poster */
	
	var videos  = $(".video");

	videos.on("click", function(){
		var elm = $(this),
			conts   = elm.contents(),
			le      = conts.length,
			ifr     = null;

		for(var i = 0; i<le; i++){
		  if(conts[i].nodeType == 8) ifr = conts[i].textContent;
		}

		elm.addClass("player").html(ifr);
		elm.off("click");
	});
		
})(jQuery);
