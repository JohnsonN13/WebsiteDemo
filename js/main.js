;(function () {
	
	'use strict';

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};

	// Animations
	var faqAnimate = function() {
		var faq = $('.pres');
		if ( faq.length > 0 ) {	

			faq.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					var sec = faq.find('.to-animate').length,
						sec = parseInt((sec * 200) + 400);
						
					setTimeout(function() {
						faq.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeIn animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					setTimeout(function() {
						faq.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, sec);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};
	// Home
	var homeAnimate = function() {
		if ( $('.home').length > 0 ) {	

			$('.home').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						$('.home .to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};


	$(".buttonMenu").click(function() {
		$(".menu").hasClass("active")||$(".overlay").toggleClass("active"),
		$(".menu2").addClass("active"),
		$(".overlay").click(function(){$(".menu2").removeClass("active"),
			$(this).removeClass("active")});
	});

	$(function(){

		parallax();

		// Animations
		homeAnimate();
		faqAnimate();
		Animate();

	});

}());