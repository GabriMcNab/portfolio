$(document).ready(function () {
	//Learn More button animation
	$('a[href*="#"]').on('click', function (e) {
		e.preventDefault();

		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 700, 'linear');
	});

	//Scroll based animations
	var $window = $(window);
	var $circles = $('.percentage-circle__outer');
	var $clouds = $('.cloud');

	function check_if_in_view() {
		var window_height = $window.height();
		var window_top_position = $window.scrollTop() + 200;
		var window_bottom_position = (window_top_position + window_height);

		$.each($clouds, function () {
			var $element = $(this);
			var element_top_position = $element.offset().top;

			if (element_top_position <= window_top_position) {
				$element.addClass('u-fade-in');
				$element.removeClass('u-fade-out');
			} else {
				$element.addClass('u-fade-out');
				$element.removeClass('u-fade-in');
			}
		});

		$.each($circles, function () {
			var $element = $(this);
			var element_height = $element.outerHeight();
			var element_top_position = $element.offset().top;
			var element_bottom_position = (element_top_position + element_height);

			//check to see if this current container is within viewport
			if ((element_bottom_position >= window_top_position) &&
				(element_top_position <= window_bottom_position)) {
				$element.addClass('u-animate-percentage');
			}
		});
	}

	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');

	//Popups
	$('.popup-open').click(function () {
		var id = $(this).data('target')
		$('#' + id).addClass('open');
		$('#' + id + '-content').addClass('appear');
	});

	$('.popup-close').click(function () {
		var id = $(this).data('target')
		$('#' + id).toggleClass('open');
		$('#' + id + '-content').toggleClass('appear');
	});

	$('.popup').click(function (e) {
		if (e.target == this) {
			$('.popup').removeClass('open');
			$('.popup__content').removeClass('appear');
		}
	});
});