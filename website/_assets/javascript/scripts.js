$(document).ready(function(){
	$('[data-toggle="popover"]').popover({trigger: 'hover'})
	//Slick carousel initial
	$('#brands-carousel').slick({
		infinite: true,
  	slidesToShow: 7,
  	slidesToScroll: 1,
		autoplay: false,
  	autoplaySpeed: 3000,
		pauseOnHover: false,
		pauseOnFocus: false,
		responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 5
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
	});

  $('.screens-carousel .hidden').removeClass('hidden');
	$('.screens-carousel').slick({
		infinite: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
		autoplay: true,
  	autoplaySpeed: 3000,
		pauseOnHover: false,
		pauseOnFocus: false
	});

	//Navbar shadow scroll action on Landing page
	$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
		var headerHeight = 68;
    $('.navbar').toggleClass('navbar-has-shadow',
     //add 'ok' class when div position match or exceeds else remove the 'ok' class.
      scroll >= $('#anchor').offset().top - headerHeight
    );
	});
	//trigger the scroll
	$(window).scroll();

  $('a[data-track]').each(function(_, element) {
    var $element = $(element);
    var eventName = $element.data('track-event') || 'Clicked Link';
    var type = $element.prop('tagName').toLowerCase()

    analytics.trackLink(element, eventName, {
      location: $element.data('track-location'),
      text: $element.text(),
      category: 'Home Page',
      page: document.location.pathname,
      pageTitle: document.title,
      type: type
    });
  });

  var form = document.getElementById('mc-embedded-subscribe-form');
  if (form) {
      $(form).ajaxChimp({
        url: 'https://redash.us1.list-manage.com/subscribe/post?u=a905176d2294593084d5264e5&id=53ca028761'
      });
  }
});
