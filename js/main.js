(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();

	var carousel = function() {
		$('.carousel-testimony').owlCarousel({
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});
		$('.carousel-destination').owlCarousel({
			center: false,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 4
				}
			}
		});

	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


  $('.checkin_date, .checkout_date').datepicker({
	  'format': 'm/d/yyyy',
	  'autoclose': true
	});




})(jQuery);

$(document).ready(function(){
	var owl = $('.carousel-destination.owl-carousel');
	
	owl.owlCarousel({
	  loop: true, // Allows continuous loop sliding
	  margin: 10,
	  nav: false, // Disable default navigation
	  items: 1
	});
  
	$('.carousel-prev').click(function() {
	  owl.trigger('prev.owl.carousel');
	});
  
	$('.carousel-next').click(function() {
	  owl.trigger('next.owl.carousel');
	});


	   // Back to top button
	   $(window).scroll(function () {
		if ($(this).scrollTop() > 300) {
		    $('.back-to-top').fadeIn('slow');
		} else {
		    $('.back-to-top').fadeOut('slow');
		}
	 });
	 $('.back-to-top').click(function () {
		$('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
		return false;
	 });

	
  });
  

//   ------------PACKAGES ANIMATION EFFECTS--------------------

  document.addEventListener("DOMContentLoaded", () => {
	const observerOptions = {
	    threshold: 0.1  // Trigger when 10% of the element is visible
	};

	const observer = new IntersectionObserver((entries) => {
	    entries.forEach(entry => {
		   if (entry.isIntersecting) {
			  entry.target.classList.add("in-view");
		   }
	    });
	}, observerOptions);

	// Observe each animated element
	document.querySelectorAll(".fade-in-top, .fade-in-right, .zoom-in").forEach(element => {
	    observer.observe(element);
	});
 });



 //--------------------PACKAGE CARDS DYNAMIC CHANGES OF TABS--------------------
 
 
        const tabs = document.querySelectorAll('.tabs a');
        const sections = document.querySelectorAll('.content-section');

        tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                const target = tab.getAttribute('data-tab');
                sections.forEach(section => {
                    if (section.id === target) {
                        section.classList.add('active');
                    } else {
                        section.classList.remove('active');
                    }
                });
            });
        });
   
 

	//    ----------------------------IMAGE SLIDER ON PACKAGE ACCOMODATION----------------------------



	const imageGroups = [
		[

			// ---------------Planet Lodge gallery ---------0-----------
			"../images/Packages-images/LODGES/planet-lodge-room.jpg",
			"../images/Packages-images/LODGES/planet-lodge-room2.jpg",
			"../images/Packages-images/LODGES/planet-lodge-dining.jpg",
			"../images/Packages-images/LODGES/planet-lodge-gym.jpg",
			"../images/Packages-images/LODGES/planet-lodge-swiming.jpg",
			"../images/Packages-images/LODGES/planet-lodge-swiming.jpg",
			"../images/Packages-images/LODGES/planet-lodge-outdoor.jpg",
			"../images/Packages-images/LODGES/planet-lodge-food.jpg",
			"../images/Packages-images/LODGES/planet-lodge-top-view.jpg",
		],
		[

			// ---------------Sopa Lodge gallery ----------1----------
			"../images/Packages-images/LODGES/sopa-beds.jpg",
			"../images/Packages-images/LODGES/sopa-room1.jpg",
			"../images/Packages-images/LODGES/sopa-rest-table.jpg",
			"../images/Packages-images/LODGES/sopa-siting-room.jpg",
			"../images/Packages-images/LODGES/sopa-top-view.jpg",


		],
		[

            	// ---------------Serengeti safari haven gallery ---------2-----------

			"../images/Packages-images/LODGES/safari-haven-camp-view.webp",
               "../images/Packages-images/LODGES/safari-haven-dining.webp",
               "../images/Packages-images/LODGES/safari-haven-outdoor.webp",
               "../images/Packages-images/LODGES/safari-haven-room.webp",
               "../images/Packages-images/LODGES/safari-haven-room2.webp",
		],

		[
			// ---------------Lion's Paw gallery -----------3---------

		"../images/Packages-images/LODGES/karibu-camps-lounge-bar.jpg",
		"../images/Packages-images/LODGES/karibu-camps-restaurant.jpg",
		"../images/Packages-images/LODGES/Karibu-camps-1.webp",
		"../images/Packages-images/LODGES/Karibu-camps-room-1.jpg",
		"../images/Packages-images/LODGES/Karibu-camps-room-2.jpg"

		],
		[

		 // ---------------Ngorongoro Ang'ata Luxury Tented Camp gallery ---------4-

		 "../images/Packages-images/LODGES/Ang'ata-camp-view.jpg",
		 "../images/Packages-images/LODGES/ang'ata-dining.jpg",
		 "../images/Packages-images/LODGES/ang'ata-room-1.jpg",
		 "../images/Packages-images/LODGES/ang'ata-room-2.jpg",
		 "../images/Packages-images/LODGES/Angata-room-3.jpg",
		 "../images/Packages-images/LODGES/Angata-Ngorongoro-camp.jpg"
                        
			
		],
		[

            
			// ---------------Lake Manyara Tortilis Camp gallery ------------5--------

			"images/Packages-images/LODGES/comfortable-tent-tortilis-camps.jpg",
			"images/Packages-images/LODGES/lake-manyara-tortilis-camp-food.jpg",
			"images/Packages-images/LODGES/lake-manyara-tortilis-camp-king-bed.jpg",
			"images/Packages-images/LODGES/lake-manyara-tortilis-fire-camp-view.jpg",
			"images/Packages-images/LODGES/lake-manyara-tortilis-camp-top-view.jpg"
			
			
		],
		[
			// ---------------Lake Eyasi Lodge ------------------------6--------

			"images/Packages-images/LODGES/lake-eyasi-safari-lodge-room-1.jpeg",
			"images/Packages-images/LODGES/lake-eyasi-safari-lodge-room-2.jpeg",
			"images/Packages-images/LODGES/lake-eyasi-safari-lodge-room-3.jpeg",
			"images/Packages-images/LODGES/lake-eyasi-safari-lodge-room-4.jpeg",
			"images/Packages-images/LODGES/lake-eyasi-safari-lodge-swimming-pool.jpeg",
			"images/Packages-images/LODGES/lake-eyasi-safari-lodge-outdoor.jpeg",
			"images/Packages-images/LODGES/lake-eyasi-safari-lodge-view.jpeg",
			"images/Packages-images/LODGES/lake-eyasi-safari-lodge-dining.jpeg"

		],
		[
			// ---------------Marera valley Lodge ------------------------7--------
			"images/Packages-images/LODGES/marera-valley-lodge-karatu-outside.gif",
			"images/Packages-images/LODGES/marera-valley-view-karatu-room-1.jpg",
			"images/Packages-images/LODGES/marera-valley-view-karatu-room-2.jpg" ,
			"images/Packages-images/LODGES/marera-valley-view-karatu-swimming.jpg" 

		],
		[
			// ---------------Tukaone Camp------------------------8--------

			"images/Packages-images/LODGES/tukaone-camp-dining-1.jpg",
			"images/Packages-images/LODGES/tukaone-camp-room-1.jpg" ,
			"images/Packages-images/LODGES/tukaone-camp-outside-view.jpg",
			"images/Packages-images/LODGES/tukaone-camp-tent-1.jpg" 

		],
		
		[
			// ---------------Ngorongoro Kuhama Camp------------------------9--------

			"images/Packages-images/LODGES/Ngorongoro-Kuhama-dining.jpg",
			"images/Packages-images/LODGES/Ngorongoro-Kuhama-room-2.webp",
			"images/Packages-images/LODGES/Ngorongoro-Kuhama-room-3.jpg",
			"images/Packages-images/LODGES/Ngorongoro-Kuhama-Camp-tent-2.jpg"

		],
		[
			// ---------------Ahadi Lodge Arusha------------------------10--------

			"images/Packages-images/LODGES/Ahadi-Lodge-1.png",
			"images/Packages-images/LODGES/Ahadi-Lodge-3.png",
			"images/Packages-images/LODGES/ahadi-lodge-dining.jpg",
			"images/Packages-images/LODGES/Ahadi-triple-family-room.jpg",
			"images/Packages-images/LODGES/Ahadi-Double-Room-1.jpg"

		],
		[
			// ---------------Ahadi Lodge Arusha------------------------11--------

			"images/Packages-images/LODGES/country-lodge-exterior.jpg",
			"images/Packages-images/LODGES/Country-Lodge-Standard-room.jpg",
			"images/Packages-images/LODGES/country-lodge-pool.jpg",
			"images/Packages-images/LODGES/Country-Lodge-Dining.jpeg",
			"images/Packages-images/LODGES/Country-Lodge-exterior.jpg",
			"images/Packages-images/LODGES/Country-Lodge-blocks.jpg"

		],
		
	 ];
	 

	 function openSlider(group, index) {
		currentGroup = group;
		currentIndex = index;
		document.getElementById("sliderImage").src = imageGroups[group][index];
		document.getElementById("imageSlider").style.display = "block";

	 }

	 function closeSlider() {
		document.getElementById("imageSlider").style.display = "none";
	 }

	 function nextImage() {
		currentIndex = (currentIndex + 1) % imageGroups[currentGroup].length;
		document.getElementById("sliderImage").src = imageGroups[currentGroup][currentIndex];
	 }

	 function prevImage() {
		currentIndex = (currentIndex - 1 + imageGroups[currentGroup].length) % imageGroups[currentGroup].length;
		document.getElementById("sliderImage").src = imageGroups[currentGroup][currentIndex];
	 }


	//  dynamic change the navbar-brand name

	const navbarBrand = document.querySelector('.navbar-brand');

	navbarBrand.innerHTML = 'BEST<span><strong>Safari Tours</strong></span>';